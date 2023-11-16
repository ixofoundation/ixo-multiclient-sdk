import { DeliverTxResponse } from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { BroadcastTxSyncResponse } from "@cosmjs/tendermint-rpc";
import { toBase64, toHex } from "@cosmjs/encoding";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {
  cosmos,
  createClient,
  customQueries,
  generateNewWallet,
  getUser,
  queryClient,
  testMsg,
  timeout,
  utils,
} from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import {
  TokenType,
  formatInputAmount,
  formatOutputAmount,
  queryOutputAmount,
} from "../helpers/swap";
import * as Wasm from "../modules/CosmWasm";
import * as Cosmos from "../modules/Cosmos";
import * as Token from "../modules/Token";
import * as Authz from "../modules/Authz";
import { contracts } from "../../src/custom_queries/contract.constants";
import { getSignerData } from "../../src/stargate_client/store";
import { Uint8ArrayTob64, b64toJson } from "../../src/utils/conversions";

export const wasmBasic = () =>
  describe("Testing the wasmd module", () => {
    let contractAddress: string;
    contractAddress =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = { minter: tester };

      const res = await Wasm.WasmInstantiateTrx(2, JSON.stringify(msg));
      contractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress });
      return res;
    });

    const tokenId1 =
      "CARBON:bafybeib22s3lyz3guicawoboeieltpyewkdnuuheklpeu3zbrwekmpdew4";
    const tokenId2 =
      "CARBON:bafybeib22s3lyz3guicawoboeieltpyewkdnuuheklpeu3zbrwekmpdew5";

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const alice = (await getUser(WalletUsers.alice).getAccounts())[0].address;
      const bob = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        // mint: {
        //   to: alice,
        //   token_id: tokenId2,
        //   value: "5000",
        //   uri: "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14",
        // },
        batch_mint: {
          to: tester,
          batch: [[tokenId2, "5000", "uri"]],
        },
        // send_from: {
        //   from: tester,
        //   to: alice,
        //   token_id: tokenId1,
        //   value: "3",
        // },
        // batch_send_from: {
        //   from: alice,
        //   to: bob,
        //   batch: [
        //     [tokenId1, "3", ""],
        //     [tokenId2, "1000", ""],
        //   ],
        // },
      };

      const res = await Wasm.WasmExecuteTrx(
        contractAddress,
        JSON.stringify(msg),
        WalletUsers.tester
      );
      return res;
    }),
      true;

    test("query wasm state", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const alice = (await getUser(WalletUsers.alice).getAccounts())[0].address;
      const bob = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        // balance: {
        //   owner: alice,
        //   token_id: tokenId,
        // },
        batch_balance: {
          owner: alice,
          token_ids: [tokenId1, tokenId2],
        },
        // token_info: {
        //   token_id: tokenId2,
        // },
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      console.log(utils.conversions.Uint8ArrayToJS(res.data));
      expect(res).toBeTruthy();
    });

    // testMsg("/cosmwasm.wasm.v1.MsgStoreCode", async () => {
    //   const tester = (await getUser().getAccounts())[0].address;
    //   const msg = { minter: tester };

    //   const res = await Wasm.WasmStoreTrx();
    //   return res;
    // }, true );
  });

export const daoDaoContracts = () =>
  describe("Testing the DaoDao contracts upload", () => {
    test("query wasm store codes", async () => {
      const res = await queryClient.cosmwasm.wasm.v1.codes();
      console.log(res.codeInfos);
      expect(res).toBeTruthy();
    });

    const daoDaoContracts = contracts.filter(
      (contract) => contract.category === "daodao"
    );

    for (const contract of daoDaoContracts) {
      let proposalId: number;
      testMsg(
        `/cosmos.gov.v1beta1.MsgSubmitProposal store ${contract.name} contract`,
        async () => {
          const res = await Cosmos.MsgSubmitProposalStoreCW(
            contract.name,
            contract.path
          );
          proposalId = utils.common.getValueFromEvents(
            res,
            "submit_proposal",
            "proposal_id"
          );
          console.log({ ...contract, proposalId });
          return res;
        }
      );
      testMsg(
        `/cosmos.gov.v1beta1.MsgVote vote ${contract.name} contract proposal`,
        () => Cosmos.MsgVote(proposalId)
      );
    }
  });

export const daoCore = () =>
  /**
   * This series of tests for a DAODAO DAO (Decentralized Autonomous Organization) smart contract
   * begin by defining a few variables for different smart contract codes that will be used later
   * in the tests. Then, the tests go through the following steps:
   *
   * Instantiate the DAO Core smart contract using the /cosmwasm.wasm.v1.MsgInstantiateContract message.
   * This involves passing some configuration information, including details for a DAO proposal
   * contract and a DAO voting contract. The test checks that the contract was successfully instantiated
   * and records the contract address for use in later tests.
   *
   * Query the DAO Core smart contract using the dump_state query to get information about the proposal
   * and voting contracts that were created during the instantiation step. The test checks that the
   * query returns data and records the addresses of the proposal and voting contracts for use in later
   * tests.
   *
   * Query the DAO proposal contract using the proposal_creation_policy query to get information about
   * the pre-proposal contract that will be used to submit new proposals to the DAO. The test checks
   * that the query returns data and records the address of the pre-proposal contract for use in later
   * tests.
   *
   * Propose a new action for the DAO using the /cosmwasm.wasm.v1.MsgExecuteContract message. This
   * involves passing information about the proposal, including a description and a message that will
   * be executed if the proposal is accepted. In this case, the message is to set a key-value pair in
   * the DAO's storage. The test checks that the proposal was successfully created and records the
   * proposal ID for use in later tests.
   *
   * Vote on the proposal using the /cosmwasm.wasm.v1.MsgExecuteContract message. This involves passing
   * the proposal ID and a vote value (yes or no) as part of the message. The test checks that the vote
   * was successfully cast.
   *
   * Wait for the voting period to end and execute the proposal if it was accepted. This involves
   * checking the status of the proposal using the dao_proposals query and then executing the proposal
   * if it was accepted. The test checks that the proposal was executed successfully and that the
   * key-value pair was set in the DAO's storage.
   *
   * These tests are designed to test the functionality of the DAO Core smart contract and its
   * associated contracts for proposing and voting on actions within the DAO. They ensure that the
   * contracts can be instantiated correctly, proposals can be submitted and voted on, and accepted
   * proposals can be executed successfully.
   */

  describe("Testing the Dao Core", () => {
    // Set the object below and run tests to see it added to dao via proposal and voting
    const item = {
      key: "whoIsAwesome",
      value: "Petrus",
    };

    const daoCoreContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_core"
    );
    const daoProposalContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_proposal_single"
    );
    const daoPreProposalContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_pre_propose_single"
    );
    const daoVotingCw4ContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_voting_cw4"
    );
    const cw4ContractCode = customQueries.contract.getContractCode(
      "devnet",
      "cw4_group"
    );

    let contractAddress: string;
    let proposalContractAddress: string;
    let preProposalContractAddress: string;
    let votingContractAddress: string;
    let proposalId: number;

    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract dao core", async () => {
      const tester = (await getUser().getAccounts())[0].address;

      const msg = {
        admin: null,
        automatically_add_cw20s: true,
        automatically_add_cw721s: true,
        description: "This is a test dao",
        image_url:
          "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
        name: "Test Dao",
        proposal_modules_instantiate_info: [
          {
            admin: {
              core_module: {},
            },
            code_id: daoProposalContractCode,
            label: "DAO_Test Dao_DaoProposalSingle",
            msg: utils.conversions.jsonToBase64({
              allow_revoting: false,
              close_proposal_on_execution_failure: true,
              max_voting_period: {
                time: 604800,
              },
              min_voting_period: null,
              only_members_execute: true,
              pre_propose_info: {
                module_may_propose: {
                  info: {
                    admin: {
                      core_module: {},
                    },
                    code_id: daoPreProposalContractCode,
                    label: "DAO_Test Dao_pre-propose-DaoProposalSingle",
                    msg: utils.conversions.jsonToBase64({
                      deposit_info: {
                        amount: "1000000",
                        denom: {
                          token: {
                            denom: {
                              native: "uixo",
                            },
                          },
                        },
                        refund_policy: "only_passed",
                      },
                      extension: {},
                      open_proposal_submission: false,
                    }),
                  },
                },
              },
              threshold: {
                threshold_quorum: {
                  quorum: {
                    percent: "0.20",
                  },
                  threshold: {
                    majority: {},
                  },
                },
              },
            }),
          },
        ],
        voting_module_instantiate_info: {
          admin: {
            core_module: {},
          },
          code_id: daoVotingCw4ContractCode,
          label: "DAO_Test Dao_DaoVotingCw4",
          msg: utils.conversions.jsonToBase64({
            cw4_group_code_id: cw4ContractCode,
            initial_members: [
              {
                addr: tester,
                weight: 1,
              },
            ],
          }),
        },
      };
      const res = await Wasm.WasmInstantiateTrx(
        daoCoreContractCode!,
        JSON.stringify(msg)
      );
      console.log("initialize::", res);
      contractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress });
      return res;
    });

    test("query dao core contract: dump_state", async () => {
      const msg = {
        dump_state: {},
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const dumpState = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
      proposalContractAddress = dumpState.proposal_modules[0].address;
      votingContractAddress = dumpState.voting_module;
      console.log({ proposalContractAddress, votingContractAddress });
      expect(res).toBeTruthy();
    });

    test("query dao proposal contract: proposal_creation_policy", async () => {
      const msg = {
        proposal_creation_policy: {},
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: proposalContractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const proposalCreationPolicy = JSON.parse(
        utils.conversions.Uint8ArrayToJS(res.data)
      );
      preProposalContractAddress = proposalCreationPolicy.module.addr;
      console.log({ preProposalContractAddress });
      expect(res).toBeTruthy();
    });

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal propose",
      async () => {
        console.log("Waiting 10 seconds");
        await timeout(10 * 1000);

        const msg = {
          propose: {
            msg: {
              propose: {
                description: "Testing: set item whoIsAwesome",
                msgs: [
                  {
                    wasm: {
                      execute: {
                        contract_addr: contractAddress,
                        funds: [],
                        msg: utils.conversions.jsonToBase64({
                          set_item: item,
                        }),
                      },
                    },
                  },
                ],
                title: "Testing",
              },
            },
          },
        };

        const res = await Wasm.WasmExecuteTrx(
          preProposalContractAddress,
          JSON.stringify(msg),
          WalletUsers.tester,
          { amount: "1000000", denom: "uixo" }
        );
        console.log("proposal", res);
        return res;
      }
    );

    test("query dao proposal contract: reverse_proposals", async () => {
      const msg = {
        reverse_proposals: {},
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: proposalContractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const reverseProposals = JSON.parse(
        utils.conversions.Uint8ArrayToJS(res.data)
      );
      proposalId = reverseProposals.proposals[0].id;
      console.log({ proposalId });
      expect(res).toBeTruthy();
    });

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal vote",
      async () => {
        const msg = {
          vote: {
            proposal_id: proposalId,
            vote: "yes",
          },
        };
        const res = await Wasm.WasmExecuteTrx(
          proposalContractAddress,
          JSON.stringify(msg)
        );
        console.log("vote", res);
        return res;
      }
    );

    test("query dao proposal contract: get_vote", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = {
        get_vote: {
          proposal_id: proposalId,
          voter: tester,
        },
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: proposalContractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const vote = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
      console.log({ vote });
      expect(res).toBeTruthy();
    });

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal execute",
      async () => {
        const msg = {
          execute: {
            proposal_id: proposalId,
          },
        };
        const res = await Wasm.WasmExecuteTrx(
          proposalContractAddress,
          JSON.stringify(msg)
        );
        console.log("execute", res);
        return res;
      }
    );

    test("query dao core contract: get_item", async () => {
      const msg = {
        get_item: {
          key: item.key,
        },
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const data = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
      console.log({ [item.key]: data.item });
      expect(res).toBeTruthy();
    });
  });

export const swapBasic = () => {
  const contractAddress1155 =
    "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
  const name = "TEST";
  const amount = 50;
  const collectionDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
  const nftDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
  const tokenData = [
    {
      uri: "https://media.makeameme.org/created/haha-you-were-a3866a4349.jpg",
      encrypted: false,
      proof: "proof",
      type: "application/json",
      id: nftDid,
    },
  ];

  const indexes = Array.from({ length: 29 }, (_, index) => index + 3);
  indexes.map((index) => {
    testMsg("/ixo.token.v1beta1.MsgMintToken", async () => {
      const res = await Token.MintToken(contractAddress1155, [
        {
          name,
          index: index.toString(),
          amount,
          collection: collectionDid,
          tokenData,
        },
      ]);
      console.log({
        tokenId: utils.common.getValueFromEvents(res, "wasm", "token_id"),
      });
      return res;
    });
  });
};

export const swapContract = () => {
  describe("Testing swaps on contract", () => {
    let tokenContractAddress: string = "";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = { minter: tester };

      const res = await Wasm.WasmInstantiateTrx(2, JSON.stringify(msg));
      tokenContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ tokenContractAddress });
      return res;
    });

    let tokenIds: string[] = [];
    test("Query token ids", async () => {
      const contractAddress1155 =
        "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
      const tester = (await getUser().getAccounts())[0].address;

      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress1155,
        queryData: utils.conversions.JsonToArray(
          JSON.stringify({
            tokens: {
              owner: tester,
              limit: 30,
            },
          })
        ),
      });
      tokenIds = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data)).tokens;
      console.log(tokenIds);
      expect(res).toBeTruthy();
    });

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract mint 1155 tokens",
      async () => {
        const tester = (await getUser().getAccounts())[0].address;
        const msg = {
          batch_mint: {
            to: tester,
            batch: tokenIds.map((id) => [id, "20000000000", "uri"]),
          },
        };

        const res = await Wasm.WasmExecuteTrx(
          tokenContractAddress,
          JSON.stringify(msg),
          WalletUsers.tester
        );
        return res;
      }
    );

    let swapContractAddress: string = "";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = {
        token1155_denom: { cw1155: [tokenContractAddress, "TEST"] },
        token2_denom: { native: "uixo" },
        lp_token_code_id: 25,
        owner: tester,
        protocol_fee_recipient: tester,
        protocol_fee_percent: "0.1",
        lp_fee_percent: "0.2",
      };

      const res = await Wasm.WasmInstantiateTrx(28, JSON.stringify(msg));
      swapContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ swapContractAddress });
      return res;
    });

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap contract for token",
      async () => {
        const msg = {
          approve_all: {
            operator: swapContractAddress,
          },
        };

        const res = await Wasm.WasmExecuteTrx(
          tokenContractAddress,
          JSON.stringify(msg),
          WalletUsers.tester
        );
        return res;
      }
    );

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract add liquidity", async () => {
      const msg = {
        add_liquidity: {
          token1155_amounts: {
            ...tokenIds.reduce((acc, id) => {
              acc[id] = "10000000000";
              return acc;
            }, {}),
          },
          min_liquidity: "100000000000",
          max_token2: "10000000000",
        },
      };

      const res = await Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify(msg),
        WalletUsers.tester,
        { amount: "10000000000", denom: "uixo" }
      );
      return res;
    });

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract swap", async () => {
      const numberOfTests = 300;
      const slippage = 30;
      const txList: TxRaw[] = [];
      const user = getUser(WalletUsers.tester);
      const client = await createClient(user);
      const signerData = await getSignerData(
        client,
        user as OfflineSigner,
        client.localStoreFunctions
      );

      for (let i = 0; i < numberOfTests; i++) {
        const inputToken =
          Math.floor(Math.random() * 2) + 1 == 1
            ? TokenType.Token1155
            : TokenType.Token2;
        const inputAmount = Math.floor(Math.random() * 10000000) + 10000;
        const formattedInputAmount = formatInputAmount(
          inputToken,
          inputAmount,
          tokenIds
        );

        const outputAmount = await queryOutputAmount(
          inputToken,
          formattedInputAmount,
          swapContractAddress
        );
        const outputAmountWithSlippage =
          outputAmount - outputAmount * (slippage / 100);
        const formattedOutputAmount = formatOutputAmount(
          inputToken,
          tokenIds,
          outputAmountWithSlippage
        );

        const msg = {
          swap: {
            input_token: inputToken,
            input_amount: formattedInputAmount,
            min_output: formattedOutputAmount,
          },
        };
        console.log("Swap message: ", JSON.stringify(msg, null, 3));

        txList.push(
          await Wasm.WasmSignTrx(
            client,
            swapContractAddress,
            JSON.stringify(msg),
            WalletUsers.tester,
            inputToken === TokenType.Token2
              ? {
                  amount: inputAmount.toString(),
                  denom: "uixo",
                }
              : undefined,
            {
              ...signerData,
              sequence: signerData.sequence + i,
            }
          )
        );
      }

      const start = Date.now();

      const txHashes: BroadcastTxSyncResponse[] = [];
      for (let i = 0; i < txList.length - 1; i++) {
        const txRaw: TxRaw = txList[i];
        txHashes.push(
          await client.tmBroadcastTxSync(TxRaw.encode(txRaw).finish())
        );
      }
      const lastTx: DeliverTxResponse = await client.broadcastTx(
        TxRaw.encode(txList[txList.length - 1]).finish()
      );

      const end = Date.now();

      const swapResponses: DeliverTxResponse[] = [];
      for (const hash of txHashes) {
        const res = await client.getTx(toHex(hash.hash));
        swapResponses.push(res as unknown as DeliverTxResponse);
      }
      swapResponses.push(lastTx);

      for (const [index, response] of swapResponses.entries()) {
        const tokenBought = utils.common.getValueFromEvents(
          response,
          "wasm",
          "token_bought"
        );
        const tokenSold = utils.common.getValueFromEvents(
          response,
          "wasm",
          "token_sold"
        );

        const swapResult = `Swap ${index + 1} result: `;
        if (tokenBought && tokenSold) {
          console.log(swapResult, { tokenSold, tokenBought });
        } else {
          console.log(swapResult, "Insufficient output amount");
        }
      }

      console.log(`Sent ${numberOfTests} transactions in ${end - start} ms`);

      return swapResponses![0];
    });
  });
};

export const devnetSwapContract_IXO_CARBON = () => {
  describe("Testing swaps on contract", () => {
    // Set tester as carbon oracle user as that user owns the carbon tokens
    beforeAll(() =>
      Promise.all([
        generateNewWallet(
          WalletUsers.tester,
          process.env.ASSERT_USER_CARBON_ORACLE
        ),
      ])
    );
    const user = WalletUsers.tester;

    // helper to send funds to an carbon oracle user account
    testMsg("test Bank Send to carbon oracle account", () =>
      Cosmos.BankSendTrx(1100000000)
    );

    const cw20_baseContractCode = customQueries.contract.getContractCode(
      "devnet",
      "cw20_base"
    );
    const ixoswapContractCode = customQueries.contract.getContractCode(
      "devnet",
      "ixoswap"
    );

    let contractAddress1155 =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";

    let tokenIds: string[] = [];
    test("Query token ids", async () => {
      const tester = (await getUser(user).getAccounts())[0].address;

      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress1155,
        queryData: utils.conversions.JsonToArray(
          JSON.stringify({
            tokens: {
              owner: tester,
              limit: 30,
            },
          })
        ),
      });
      tokenIds = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data)).tokens;
      console.log(tokenIds);
      expect(res).toBeTruthy();
    });

    test("query wasm state", async () => {
      const tester = (await getUser(user).getAccounts())[0].address;
      const msg = {
        batch_balance: {
          owner: tester,
          token_ids: tokenIds,
        },
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress1155,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      console.log(utils.conversions.Uint8ArrayToJS(res.data));
      expect(res).toBeTruthy();
    });

    let swapContractAddress: string =
      "ixo17srjznxl9dvzdkpwpw24gg668wc73val88a6m5ajg6ankwvz9wtsek9x34";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = {
        token1155_denom: { cw1155: [contractAddress1155, "CARBON"] },
        token2_denom: { native: "uixo" },
        lp_token_code_id: cw20_baseContractCode,
        owner: tester,
        protocol_fee_recipient: tester,
        protocol_fee_percent: "0.1",
        lp_fee_percent: "0.1",
      };

      const res = await Wasm.WasmInstantiateTrx(
        ixoswapContractCode!,
        JSON.stringify(msg)
      );
      swapContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ swapContractAddress });
      return res;
    });

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap contract for token",
      async () => {
        const msg = {
          approve_all: {
            operator: swapContractAddress,
          },
        };

        const res = await Wasm.WasmExecuteTrx(
          contractAddress1155,
          JSON.stringify(msg),
          WalletUsers.tester
        );
        return res;
      }
    );

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract add liquidity", async () => {
      const msg = {
        add_liquidity: {
          token1155_amounts: {
            ...tokenIds.reduce((acc, id) => {
              acc[id] = "500";
              return acc;
            }, {}),
          },
          min_liquidity: "6500",
          max_token2: "1000000000",
        },
      };

      const res = await Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify(msg),
        WalletUsers.tester,
        { amount: "1000000000", denom: "uixo" }
      );
      return res;
    });

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract swap",
      async () => {
        const slippage = 20;
        const inputToken = false ? TokenType.Token1155 : TokenType.Token2;
        const inputAmount = 1000000;

        const formattedInputAmount =
          inputToken == TokenType.Token2
            ? formatInputAmount(inputToken, inputAmount, tokenIds)
            : {
                multiple: {
                  [tokenIds[0]]: inputAmount.toString(),
                },
              };
        const outputAmount = await queryOutputAmount(
          inputToken,
          formattedInputAmount,
          swapContractAddress
        );
        const outputAmountWithSlippage =
          outputAmount - outputAmount * (slippage / 100);
        const formattedOutputAmount = formatOutputAmount(
          inputToken,
          tokenIds,
          outputAmountWithSlippage,
          false
        );

        const msg = {
          swap: {
            input_token: inputToken,
            input_amount: formattedInputAmount,
            min_output: formattedOutputAmount,
          },
        };
        console.log("Swap message: ", JSON.stringify(msg, null, 3));

        const res = await Wasm.WasmExecuteTrx(
          swapContractAddress,
          JSON.stringify(msg),
          user,
          inputToken === TokenType.Token2
            ? {
                amount: inputAmount.toString(),
                denom: "uixo",
              }
            : undefined
        );

        return res;
      }
      // true
    );
  });
};

export const daodaoAuthzExecute = () =>
  describe("Testing the Dao Core", () => {
    const daoCoreContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_core"
    );
    const daoProposalContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_proposal_single"
    );
    const daoPreProposalContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_pre_propose_single"
    );
    const daoVotingCw4ContractCode = customQueries.contract.getContractCode(
      "devnet",
      "dao_voting_cw4"
    );
    const cw4ContractCode = customQueries.contract.getContractCode(
      "devnet",
      "cw4_group"
    );

    let contractAddress =
      "ixo1jdeq6fjlnqfa5kc76u65e6ud7nzxm884v5wzus7vrejl0fmrccvqshmd45";
    let proposalContractAddress =
      "ixo16j995dj88vx8wys4rqdyz7yug57w7vj4lwu6qydq842w40wtjclqxuqm0e";
    let preProposalContractAddress =
      "ixo1zkyy2znl6ys3weq0y83swkqs49m47k5hhpxfpqp4yz3xdc9eh0wsa59tg5";
    let votingContractAddress =
      "ixo1d6rp7vfccuy7dfa767wgk69e0l3gl6vn3z4cxlf3hkd0uxx43z5qjzn8ap";

    // testMsg("test Grant Send", async () => {
    //   return await Authz.MsgGrantSend();
    // });

    // testMsg("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz", () =>
    //   Entity.GrantEntityAccountAuthz(
    //     "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
    //     "admin"
    //   )
    // );

    // testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract dao core", async () => {
    //   const tester = (await getUser().getAccounts())[0].address;

    //   const msg = {
    //     admin: null,
    //     automatically_add_cw20s: true,
    //     automatically_add_cw721s: true,
    //     description: "This is a test dao",
    //     image_url:
    //       "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
    //     name: "Test Dao",
    //     proposal_modules_instantiate_info: [
    //       {
    //         admin: {
    //           core_module: {},
    //         },
    //         code_id: daoProposalContractCode,
    //         label: "DAO_Test Dao_DaoProposalSingle",
    //         msg: utils.conversions.jsonToBase64({
    //           allow_revoting: false,
    //           close_proposal_on_execution_failure: true,
    //           max_voting_period: {
    //             time: 604800,
    //           },
    //           min_voting_period: null,
    //           only_members_execute: true,
    //           pre_propose_info: {
    //             module_may_propose: {
    //               info: {
    //                 admin: {
    //                   core_module: {},
    //                 },
    //                 code_id: daoPreProposalContractCode,
    //                 label: "DAO_Test Dao_pre-propose-DaoProposalSingle",
    //                 msg: utils.conversions.jsonToBase64({
    //                   deposit_info: {
    //                     amount: "1000000",
    //                     denom: {
    //                       token: {
    //                         denom: {
    //                           native: "uixo",
    //                         },
    //                       },
    //                     },
    //                     refund_policy: "only_passed",
    //                   },
    //                   extension: {},
    //                   open_proposal_submission: false,
    //                 }),
    //               },
    //             },
    //           },
    //           threshold: {
    //             threshold_quorum: {
    //               quorum: {
    //                 percent: "0.20",
    //               },
    //               threshold: {
    //                 majority: {},
    //               },
    //             },
    //           },
    //         }),
    //       },
    //     ],
    //     voting_module_instantiate_info: {
    //       admin: {
    //         core_module: {},
    //       },
    //       code_id: daoVotingCw4ContractCode,
    //       label: "DAO_Test Dao_DaoVotingCw4",
    //       msg: utils.conversions.jsonToBase64({
    //         cw4_group_code_id: cw4ContractCode,
    //         initial_members: [
    //           {
    //             addr: tester,
    //             weight: 1,
    //           },
    //         ],
    //       }),
    //     },
    //   };
    //   const res = await Wasm.WasmInstantiateTrx(
    //     daoCoreContractCode!,
    //     JSON.stringify(msg)
    //   );
    //   console.log("initialize::", res);
    //   contractAddress = utils.common.getValueFromEvents(
    //     res,
    //     "instantiate",
    //     "_contract_address"
    //   );
    //   console.log({ contractAddress });
    //   return res;
    // });

    // test("query dao core contract: dump_state", async () => {
    //   const msg = {
    //     dump_state: {},
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: contractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   const dumpState = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
    //   proposalContractAddress = dumpState.proposal_modules[0].address;
    //   votingContractAddress = dumpState.voting_module;
    //   console.log({ proposalContractAddress, votingContractAddress });
    //   expect(res).toBeTruthy();
    // });

    test("query dao proposal contract: proposal_creation_policy", async () => {
      const msg = {
        proposal_creation_policy: {},
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: proposalContractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const proposalCreationPolicy = JSON.parse(
        utils.conversions.Uint8ArrayToJS(res.data)
      );
      preProposalContractAddress = proposalCreationPolicy.module.addr;
      console.log({ preProposalContractAddress });
      expect(res).toBeTruthy();
    });

    let proposalId = 8;
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal propose",
      async () => {
        const msg = {
          propose: {
            msg: {
              propose: {
                title: "Testing",
                description: "Testing",
                msgs: [
                  {
                    stargate: {
                      type_url: "/cosmos.authz.v1beta1.MsgExec",
                      value: Uint8ArrayTob64(
                        cosmos.authz.v1beta1.MsgExec.encode({
                          grantee: contractAddress,
                          msgs: [
                            {
                              typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                              value: cosmos.bank.v1beta1.MsgSend.encode(
                                cosmos.bank.v1beta1.MsgSend.fromPartial({
                                  amount: [
                                    cosmos.base.v1beta1.Coin.fromPartial({
                                      amount: "1000000",
                                      denom: "uixo",
                                    }),
                                  ],
                                  fromAddress:
                                    "ixo1n8yrmeatsk74dw0zs95ess9sgzptd6thgjgcj2",
                                  toAddress:
                                    "ixo19hunve4z9w8jwj8ac2xhvqgmmq4w6js7twyweh",
                                })
                              ).finish(),
                            },
                          ],
                        }).finish()
                      ),
                    },
                  },
                ],
              },
            },
          },
        };
        console.dir({ msg }, { depth: null });

        const res = await Wasm.WasmExecuteTrx(
          preProposalContractAddress,
          JSON.stringify(msg),
          WalletUsers.tester,
          { amount: "1000000", denom: "uixo" }
        );
        console.log("proposal", res);
        return res;
      }
    );

    // test("query dao proposal contract: reverse_proposals", async () => {
    //   const msg = {
    //     reverse_proposals: {},
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: proposalContractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   const reverseProposals = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(res.data)
    //   );
    //   proposalId = reverseProposals.proposals[0].id;
    //   console.log({ proposalId });
    //   expect(res).toBeTruthy();
    // });

    // testMsg(
    //   "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal vote",
    //   async () => {
    //     const msg = {
    //       vote: {
    //         proposal_id: proposalId,
    //         vote: "yes",
    //       },
    //     };
    //     const res = await Wasm.WasmExecuteTrx(
    //       proposalContractAddress,
    //       JSON.stringify(msg)
    //     );
    //     console.log("vote", res);
    //     return res;
    //   }
    // );

    // test("query dao proposal contract: get_vote", async () => {
    //   const tester = (await getUser().getAccounts())[0].address;
    //   const msg = {
    //     get_vote: {
    //       proposal_id: proposalId,
    //       voter: tester,
    //     },
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: proposalContractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   const vote = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
    //   console.log({ vote });
    //   expect(res).toBeTruthy();
    // });

    // testMsg(
    //   "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal execute",
    //   async () => {
    //     const msg = {
    //       execute: {
    //         proposal_id: proposalId,
    //       },
    //     };
    //     const res = await Wasm.WasmExecuteTrx(
    //       proposalContractAddress,
    //       JSON.stringify(msg)
    //     );
    //     console.log("execute", res);
    //     return res;
    //   }
    // );
  });

export const multicallContract = () =>
  describe("Testing the multicallContract", () => {
    let contractAddress =
      "ixo1rrra808ggl30g27zdmp9ecc00u7le2tn5gunv86p8aa99jrc84qqk8dttm";

    const multicallContractCode = customQueries.contract.getContractCode(
      "devnet",
      "multicall"
    );

    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract dao core", async () => {
      const tester = (await getUser().getAccounts())[0].address;

      const msg = {};
      const res = await Wasm.WasmInstantiateTrx(
        multicallContractCode!,
        JSON.stringify(msg)
      );
      console.log("initialize::", res);
      contractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress });
      return res;
    });

    // test("query dao core contract: dump_state", async () => {
    //   const msg = {
    //     aggregate: {
    //       queries: [
    //         {
    //           address:
    //             "ixo1jdeq6fjlnqfa5kc76u65e6ud7nzxm884v5wzus7vrejl0fmrccvqshmd45",
    //           data: toBase64(
    //             utils.conversions.JsonToArray(
    //               JSON.stringify({ dump_state: {} })
    //             )
    //           ),
    //         },
    //         {
    //           address:
    //             "ixo16j995dj88vx8wys4rqdyz7yug57w7vj4lwu6qydq842w40wtjclqxuqm0e",
    //           data: toBase64(
    //             utils.conversions.JsonToArray(
    //               JSON.stringify({ reverse_proposals: {} })
    //             )
    //           ),
    //         },
    //       ],
    //     },
    //   };
    //   const multicallRes =
    //     await queryClient.cosmwasm.wasm.v1.smartContractState({
    //       address: contractAddress,
    //       queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //     });
    //   const resParsed = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(multicallRes.data)
    //   );
    //   const decoded = resParsed.return_data.map((e) => {
    //     console.log(e);
    //     return b64toJson(e.data);
    //   });
    //   console.dir(decoded, { depth: null });

    //   expect(multicallRes).toBeTruthy();
    // });
  });
