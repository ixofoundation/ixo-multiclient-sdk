import { DeliverTxResponse } from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { BroadcastTxSyncResponse } from "@cosmjs/tendermint-rpc";
import { toBase64, toHex } from "@cosmjs/encoding";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {
  cosmos,
  cosmwasm,
  createClient,
  customQueries,
  generateNewWallet,
  getUser,
  ixo,
  queryClient,
  saveFileToPath,
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
import * as Entity from "../modules/Entity";
import { contracts } from "../../src/custom_queries/contract.constants";
import { getSignerData } from "../../src/stargate_client/store";
import { Uint8ArrayTob64, b64toJson } from "../../src/utils/conversions";
import { dids } from "../setup/constants";
// @ts-ignore
import Long from "long";

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
      const res = await Promise.all([
        Wasm.WasmInstantiateTrx(
          daoCoreContractCode!,
          JSON.stringify(msg),
          1,
          WalletUsers.tester
        ),
        // Wasm.WasmInstantiateTrx(
        //   daoCoreContractCode!,
        //   JSON.stringify(msg),
        //   1,
        //   WalletUsers.alice
        // ),
      ]);
      console.log("initialize::", res);
      contractAddress = utils.common.getValueFromEvents(
        res[0],
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress });
      return res[0];
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

// To get cw721 voting working
export const daoCore2 = () =>
  describe("Testing the Dao Core", () => {
    // Set the object below and run tests to see it added to dao via proposal and voting
    const item = {
      key: "whoIsAwesome",
      value: "Mike",
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
    const daoVotingCw721StakedContractCode =
      customQueries.contract.getContractCode(
        "devnet",
        "dao_voting_cw721_staked"
      );
    const cw721BaseContractCode = customQueries.contract.getContractCode(
      "devnet",
      "cw721_base"
    );

    let cw721ContractAddress: string;
    const membershipTokenId = "Awesomeness Memberships #2";
    let contractAddress: string;
    let proposalContractAddress: string;
    let preProposalContractAddress: string;
    let votingContractAddress: string;
    let proposalId: number;

    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract cw721_base", async () => {
      const tester = (await getUser().getAccounts())[0].address;

      const msg = {
        minter: tester,
        name: "Awesomeness Memberships",
        symbol: "AWESOME",
      };
      const res = await Wasm.WasmInstantiateTrx(
        cw721BaseContractCode!,
        JSON.stringify(msg)
      );
      console.log("initialize::", res);
      cw721ContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ cw721ContractAddress });
      return res;
    });

    testMsg("execute mint cw721_base", async () => {
      const tester = (await getUser().getAccounts())[0].address;

      const msg = {
        mint: {
          owner: tester,
          token_id: membershipTokenId,
          token_uri: null,
        },
      };
      const res = await Wasm.WasmExecuteTrx(
        cw721ContractAddress,
        JSON.stringify(msg)
      );
      return res;
    });

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
          code_id: daoVotingCw721StakedContractCode,
          label: "DAO_Test Dao_DaoVotingCw721Staked",
          msg: utils.conversions.jsonToBase64({
            nft_address: cw721ContractAddress,
            owner: { address: { addr: tester } },
            unstaking_duration: {
              time: 604800,
            },
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

    testMsg("execute send cw721 nft to voting contract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = {
        send_nft: {
          msg: "",
          contract: votingContractAddress,
          token_id: membershipTokenId,
        },
      };
      const res = await Wasm.WasmExecuteTrx(
        cw721ContractAddress,
        JSON.stringify(msg)
      );
      return res;
    });

    test("query dao proposal contract: proposal_creation_policy", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = {
        // total_power_at_height: {},
        voting_power_at_height: {
          address: tester,
        },
        // staked_nfts: {
        //   address: tester,
        // },
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: votingContractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const data = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
      console.log({ data });
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
        // get_vote: {
        //   proposal_id: proposalId,
        //   voter: tester,
        // },
        proposal: {
          proposal_id: proposalId,
        },
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: proposalContractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      const data = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
      console.dir({ data }, { depth: null });
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
    // Set tester as carbon oracle user as that user owns the carbon tokens
    // beforeAll(() =>
    //   Promise.all([
    //     generateNewWallet(
    //       WalletUsers.tester,
    //       process.env.ASSERT_USER_CARBON_ORACLE
    //     ),
    //   ])
    // );

    // // helper to send funds to an carbon oracle user account
    // testMsg("test Bank Send to carbon oracle account", () =>
    //   Cosmos.BankSendTrx(100000000000)
    // );

    // must be existing token module contract, ixoswap smart contract does validation
    let tokenContractAddress: string =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    // testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
    //   const tester = (await getUser().getAccounts())[0].address;
    //   const msg = { minter: tester };

    //   const res = await Wasm.WasmInstantiateTrx(2, JSON.stringify(msg));
    //   tokenContractAddress = utils.common.getValueFromEvents(
    //     res,
    //     "instantiate",
    //     "_contract_address"
    //   );
    //   console.log({ tokenContractAddress });
    //   return res;
    // });

    // if useStaticTokens is true, then the tokenIds will be used and fetching token data will be skipped
    const useStaticTokens = false;
    let tokenIds: string[] = new Array(30).fill(0).map((_, i) => i.toString());
    if (!useStaticTokens) {
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
        tokenIds = JSON.parse(
          utils.conversions.Uint8ArrayToJS(res.data)
        ).tokens;
        console.log(tokenIds);
        expect(res).toBeTruthy();
      });
    }
    // testMsg(
    //   "/cosmwasm.wasm.v1.MsgExecuteContract mint 1155 tokens",
    //   async () => {
    //     const tester = (await getUser().getAccounts())[0].address;
    //     const msg = {
    //       batch_mint: {
    //         to: tester,
    //         batch: tokenIds.map((id) => [id, "20000000000", "uri"]),
    //       },
    //     };

    //     const res = await Wasm.WasmExecuteTrx(
    //       tokenContractAddress,
    //       JSON.stringify(msg),
    //       WalletUsers.tester
    //     );
    //     return res;
    //   }
    // );

    let cw20ContractAddress: string =
      "ixo1jmr5uttywk0qgzhcme5z4tfy7kg6aprz9wyrdr9tekx25f0lck2q8lk60t";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
      const msg = {
        decimals: 6,
        initial_balances: [
          {
            address: tester,
            amount: "30000000000000",
          },
        ],
        mint: {
          minter: tester,
        },
        name: "CW20",
        symbol: "HAHA",
      };

      const res = await Wasm.WasmInstantiateTrx(25, JSON.stringify(msg));
      cw20ContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ cw20ContractAddress });
      return res;
    });

    let swapContractAddress: string =
      "ixo1p5nwq2ut6344qwlvjv42ayqhvarl46lnqfmnrgjnh2cwahl54g2qpg4y8y";
    let swapContractAddress2: string =
      "ixo1hpxqzff8wwn87e4qt7hfy9rvmf04lm7s03qfj4t05jfg0ayptlws6d8eq5";
    let swapContractAddress3: string =
      "ixo1mfxffyrda922hpt23f7hpf8t50sadcwavkt54cuyl3w6p4zwz36s0ednpm";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        token1155_denom: { cw1155: [tokenContractAddress, "TEST"] },
        token2_denom: { native: "uixo" },
        lp_token_code_id: 25,
        max_slippage_percent: "10",
        protocol_fee_recipient: tester,
        protocol_fee_percent: "0.1",
        lp_fee_percent: "0.2",
      };

      const res = await Wasm.WasmInstantiateTrx(29, JSON.stringify(msg));
      swapContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ swapContractAddress });
      return res;
    });
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract 2", async () => {
      const tester = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        token1155_denom: { cw1155: [tokenContractAddress, "TEST"] },
        token2_denom: { native: "uixo" },
        lp_token_code_id: 25,
        max_slippage_percent: "10",
        protocol_fee_recipient: tester,
        protocol_fee_percent: "2",
        lp_fee_percent: "1",
      };

      const res = await Wasm.WasmInstantiateTrx(29, JSON.stringify(msg));
      swapContractAddress2 = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ swapContractAddress2 });
      return res;
    });
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract 3", async () => {
      const tester = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        token1155_denom: { cw1155: [tokenContractAddress, "TEST"] },
        token2_denom: { cw20: cw20ContractAddress },
        lp_token_code_id: 25,
        max_slippage_percent: "10",
        protocol_fee_recipient: tester,
        protocol_fee_percent: "2",
        lp_fee_percent: "1",
      };

      const res = await Wasm.WasmInstantiateTrx(29, JSON.stringify(msg));
      swapContractAddress3 = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ swapContractAddress3 });
      return res;
    });

    // testMsg(
    //   "/cosmwasm.wasm.v1.MsgExecuteContract approve swap contract for token",
    //   async () =>
    //     await Wasm.WasmExecuteTrxThroughAuthz(
    //       tokenContractAddress,
    //       JSON.stringify({
    //         approve_all: {
    //           operator: swapContractAddress,
    //         },
    //       }),
    //       WalletUsers.tester,
    //       undefined,
    //       "ixo1wc43xczdzlc623e9ssxkndpqnvgk2vq4hheyq2"
    //     )
    // );
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap contract for token",
      async () =>
        await Wasm.WasmExecuteTrx(
          tokenContractAddress,
          JSON.stringify({
            approve_all: {
              operator: swapContractAddress,
            },
          }),
          WalletUsers.tester
        )
    );
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap contract 2 for token",
      async () =>
        await Wasm.WasmExecuteTrx(
          tokenContractAddress,
          JSON.stringify({
            approve_all: {
              operator: swapContractAddress2,
            },
          }),
          WalletUsers.tester
        )
    );
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap contract 3 for token",
      async () =>
        await Wasm.WasmExecuteTrx(
          tokenContractAddress,
          JSON.stringify({
            approve_all: {
              operator: swapContractAddress3,
            },
          }),
          WalletUsers.tester
        )
    );
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap cw20 contract 3 for token",
      async () =>
        await Wasm.WasmExecuteTrx(
          cw20ContractAddress,
          JSON.stringify({
            increase_allowance: {
              amount: "3000000000",
              spender: swapContractAddress3,
            },
          }),
          WalletUsers.tester
        )
    );

    // const tokens = {
    //   ccb7c87553adac528f1cbd8303f21dcf: {
    //     collection: "did:ixo:entity:9f8749d749af260d185f3df6f2206b63",
    //     amount: 984,
    //     minted: 0,
    //     retired: 0,
    //   },
    // };
    // console.log(
    //   "total tokens",
    //   Object.values(tokens).reduce((acc, t) => acc + t.amount, 0)
    // );
    // console.log("length", Object.keys(tokens).length);

    // testMsg("/cosmwasm.wasm.v1.MsgExecuteContract add liquidity", async () => {
    //   const msg = {
    //     add_liquidity: {
    //       token1155_amounts: {
    //         ...Object.keys(tokens).reduce((acc, id) => {
    //           acc[id] = tokens[id].amount.toString();
    //           return acc;
    //         }, {}),
    //       },
    //       min_liquidity: "250000", // token 1 amount total
    //       max_token2: "5000000000",
    //     },
    //   };

    //   const res = await Wasm.WasmExecuteTrxThroughAuthz(
    //     swapContractAddress,
    //     JSON.stringify(msg),
    //     WalletUsers.tester,
    //     {
    //       amount: "5000000000",
    //       denom:
    //         "ibc/6BBE9BD4246F8E04948D5A4EEE7164B2630263B9EBB5E7DC5F0A46C62A2FF97B",
    //     },
    //     "ixo1wc43xczdzlc623e9ssxkndpqnvgk2vq4hheyq2"
    //   );
    //   return res;
    // });
    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract add liquidity", async () => {
      console.log({ tokenIds });
      const msg = {
        add_liquidity: {
          token1155_amounts: {
            ...tokenIds.reduce((acc, id) => {
              acc[id] = "10000000000";
              return acc;
            }, {}),
          },
          min_liquidity: "300000000000",
          max_token2: "300000000000",
        },
      };

      const res = await Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify(msg),
        WalletUsers.tester,
        { amount: "300000000000", denom: "uixo" }
      );
      return res;
    });
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract add liquidity 2",
      async () => {
        console.log({ tokenIds });
        const msg = {
          add_liquidity: {
            token1155_amounts: {
              ...tokenIds.reduce((acc, id) => {
                acc[id] = "10000000";
                return acc;
              }, {}),
            },
            min_liquidity: "300000000",
            max_token2: "300000000",
          },
        };

        const res = await Wasm.WasmExecuteTrx(
          swapContractAddress2,
          JSON.stringify(msg),
          WalletUsers.tester,
          { amount: "300000000", denom: "uixo" }
        );
        return res;
      }
    );
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract add liquidity 3",
      async () => {
        console.log({ tokenIds });
        const msg = {
          add_liquidity: {
            token1155_amounts: {
              ...tokenIds.reduce((acc, id) => {
                acc[id] = "10000000";
                return acc;
              }, {}),
            },
            min_liquidity: "300000000",
            max_token2: "300000000",
          },
        };

        const res = await Wasm.WasmExecuteTrx(
          swapContractAddress3,
          JSON.stringify(msg),
          WalletUsers.tester
        );
        return res;
      }
    );

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract swap", async () => {
      // if (1) throw new Error("stop"); // helper to not run this without having to comment out
      const numberOfTests = 15;
      const slippage = 8;
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

      const txHashes: string[] = [];
      for (let i = 0; i < txList.length - 1; i++) {
        const txRaw: TxRaw = txList[i];
        txHashes.push(
          await client.broadcastTxSync(TxRaw.encode(txRaw).finish())
        );
      }
      const lastTx: DeliverTxResponse = await client.broadcastTx(
        TxRaw.encode(txList[txList.length - 1]).finish()
      );

      const end = Date.now();

      const swapResponses: DeliverTxResponse[] = [];
      for (const hash of txHashes) {
        const res = await client.getTx(hash);
        swapResponses.push(res as unknown as DeliverTxResponse);
      }
      swapResponses.push(lastTx);

      // save all stove purchases to file
      saveFileToPath(
        ["documents", "random", "ixoSwap_transactions.json"],
        JSON.stringify(swapResponses, null, 2)
      );

      for (const [index, response] of swapResponses.entries()) {
        const tokenBought = utils.common.getValueFromEvents(
          response,
          "wasm",
          "output_token_amount"
        );
        const tokenSold = utils.common.getValueFromEvents(
          response,
          "wasm",
          "input_token_amount"
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

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract freeze deposits", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify({
          freeze_deposits: {
            freeze: true,
          },
        })
      )
    );

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract swap should fail for frozen",
      async () =>
        Wasm.WasmExecuteTrx(
          swapContractAddress,
          JSON.stringify({
            swap: {
              input_token: TokenType.Token1155,
              input_amount: {
                multiple: {
                  [tokenIds[0]]: "100",
                },
              },
              min_output: {
                single: "70",
              },
            },
          })
        ),
      undefined,
      false
    );

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract unfreeze freeze deposits",
      async () =>
        Wasm.WasmExecuteTrx(
          swapContractAddress,
          JSON.stringify({
            freeze_deposits: {
              freeze: false,
            },
          })
        )
    );

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract update slippage", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify({
          update_slippage: {
            max_slippage_percent: "2",
          },
        })
      )
    );

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract transfer ownership",
      async () => {
        const alice = getUser(WalletUsers.alice);
        const aliceAddress = (await alice.getAccounts())[0].address;

        const res = Wasm.WasmExecuteTrx(
          swapContractAddress,
          JSON.stringify({
            transfer_ownership: {
              owner: aliceAddress,
            },
          })
        );
        return res;
      }
    );

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract claim ownership", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify({
          claim_ownership: {},
        }),
        WalletUsers.alice
      )
    );

    let swapContractLPAddress: string = "";
    test("Query swapContractLPAddress", async () => {
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: swapContractAddress,
        queryData: utils.conversions.JsonToArray(
          JSON.stringify({
            info: {},
          })
        ),
      });
      swapContractLPAddress = JSON.parse(
        utils.conversions.Uint8ArrayToJS(res.data)
      ).lp_token_address;
      console.log({ swapContractLPAddress });
      expect(res).toBeTruthy();
    });
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap LP contract for token",
      async () =>
        await Wasm.WasmExecuteTrx(
          swapContractLPAddress,
          JSON.stringify({
            increase_allowance: {
              amount: "200",
              spender: swapContractAddress,
            },
          }),
          WalletUsers.tester
        )
    );
    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract remove liquidity", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify({
          remove_liquidity: {
            amount: "200",
            min_token1155: {
              single: "196",
            },
            min_token2: "196",
          },
        })
      )
    );

    let swapContractLPAddress3: string = "";
    test("Query swapContractLPAddress", async () => {
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: swapContractAddress3,
        queryData: utils.conversions.JsonToArray(
          JSON.stringify({
            info: {},
          })
        ),
      });
      swapContractLPAddress3 = JSON.parse(
        utils.conversions.Uint8ArrayToJS(res.data)
      ).lp_token_address;
      console.log({ swapContractLPAddress3 });
      expect(res).toBeTruthy();
    });
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap LP contract 3 for token",
      async () =>
        await Wasm.WasmExecuteTrx(
          swapContractLPAddress3,
          JSON.stringify({
            increase_allowance: {
              amount: "200",
              spender: swapContractAddress3,
            },
          }),
          WalletUsers.tester
        )
    );
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract remove liquidity 3",
      async () =>
        Wasm.WasmExecuteTrx(
          swapContractAddress3,
          JSON.stringify({
            remove_liquidity: {
              amount: "200",
              min_token1155: {
                single: "180",
              },
              min_token2: "180",
            },
          })
        )
    );

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract new owner update fee",
      async () => {
        const alice = (await getUser(WalletUsers.alice).getAccounts())[0]
          .address;
        const res = await Wasm.WasmExecuteTrx(
          swapContractAddress,
          JSON.stringify({
            update_fee: {
              lp_fee_percent: "0.01",
              protocol_fee_percent: "0.01",
              protocol_fee_recipient: alice,
            },
          }),
          WalletUsers.alice
        );
        return res;
      }
    );

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract test swap send to",
      async () => {
        const charlie = (await getUser(WalletUsers.charlie).getAccounts())[0]
          .address;
        const msg = {
          swap_and_send_to: {
            input_token: TokenType.Token2,
            input_amount: {
              single: "100000",
            },
            min_token: {
              single: "98500",
            },
            recipient: charlie,
          },
        };
        const res = await Wasm.WasmExecuteTrx(
          swapContractAddress,
          JSON.stringify(msg),
          WalletUsers.tester,
          { amount: "100000", denom: "uixo" }
        );
        return res;
      }
    );
    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract swap 3", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress3,
        JSON.stringify({
          swap: {
            input_token: TokenType.Token1155,
            input_amount: {
              multiple: {
                [tokenIds[0]]: "100",
              },
            },
            min_output: {
              single: "90",
            },
          },
        })
      )
    );
    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract swap 3", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress3,
        JSON.stringify({
          swap: {
            input_token: TokenType.Token2,
            input_amount: {
              single: "100",
            },
            min_output: {
              single: "90",
            },
          },
        })
      )
    );

    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract test pass_through_swap",
      async () => {
        const msg = {
          pass_through_swap: {
            input_token: TokenType.Token1155,
            input_token_amount: {
              multiple: {
                [tokenIds[0]]: "100",
              },
            },
            output_min_token: {
              single: "95",
            },
            output_amm_address: swapContractAddress2,
          },
        };
        const res = await Wasm.WasmExecuteTrx(
          swapContractAddress,
          JSON.stringify(msg),
          WalletUsers.tester
        );
        console.dir(res, { depth: null });
        return res;
      }
    );
  });
};

export const swapContractTestnet = () => {
  describe("Testing swaps on contract", () => {
    // must be existing token module contract, ixoswap smart contract does validation
    let tokenContractAddress: string =
      "ixo1z6wep7u638fmyehatcyc7j7tjxl8lw4dk3jlzkq90yfxfq66vsnsyzzecj";

    let tokenIds: string[] = new Array(30).fill(0).map((_, i) => i.toString());
    test("Query token ids", async () => {
      const contractAddress1155 =
        "ixo1z6wep7u638fmyehatcyc7j7tjxl8lw4dk3jlzkq90yfxfq66vsnsyzzecj";
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

    let swapContractAddress: string =
      "ixo1dplwzdatv7wzuqrwsz274f9s86d88takhlg8p867qgjelsf09tks409lx7";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        token1155_denom: { cw1155: [tokenContractAddress, "CARBON"] },
        token2_denom: {
          native:
            "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
        },
        lp_token_code_id: 25,
        max_slippage_percent: "10",
        protocol_fee_recipient: tester,
        protocol_fee_percent: "0.1",
        lp_fee_percent: "0.2",
      };

      const res = await Wasm.WasmInstantiateTrx(31, JSON.stringify(msg));
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
      async () =>
        await Wasm.WasmExecuteTrx(
          tokenContractAddress,
          JSON.stringify({
            approve_all: {
              operator: swapContractAddress,
            },
          }),
          WalletUsers.tester
        )
    );

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract add liquidity", async () => {
      console.log({ tokenIds });
      const msg = {
        add_liquidity: {
          token1155_amounts: {
            ...tokenIds.reduce((acc, id) => {
              acc[id] = "10";
              return acc;
            }, {}),
          },
          min_liquidity: "20",
          max_token2: "1000",
        },
      };

      const res = await Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify(msg),
        WalletUsers.tester,
        {
          amount: "1000",
          denom:
            "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
        }
      );
      return res;
    });

    let swapContractLPAddress: string = "";
    test("Query swapContractLPAddress", async () => {
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: swapContractAddress,
        queryData: utils.conversions.JsonToArray(
          JSON.stringify({
            info: {},
          })
        ),
      });
      swapContractLPAddress = JSON.parse(
        utils.conversions.Uint8ArrayToJS(res.data)
      ).lp_token_address;
      console.log({ swapContractLPAddress });
      expect(res).toBeTruthy();
    });
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract approve swap LP contract for token",
      async () =>
        await Wasm.WasmExecuteTrx(
          swapContractLPAddress,
          JSON.stringify({
            increase_allowance: {
              amount: "200",
              spender: swapContractAddress,
            },
          }),
          WalletUsers.tester
        )
    );
    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract remove liquidity", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify({
          remove_liquidity: {
            amount: "2",
            min_token1155: {
              single: "1",
            },
            min_token2: "96",
          },
        })
      )
    );

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract swap", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify({
          swap: {
            input_token: TokenType.Token1155,
            input_amount: {
              multiple: {
                [tokenIds[0]]: "2",
              },
            },
            min_output: {
              single: "88",
            },
          },
        })
      )
    );
    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract swap", async () =>
      Wasm.WasmExecuteTrx(
        swapContractAddress,
        JSON.stringify({
          swap: {
            input_token: TokenType.Token2,
            input_amount: {
              single: "100",
            },
            min_output: {
              single: "2",
            },
          },
        }),
        undefined,
        {
          amount: "100",
          denom:
            "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
        }
      )
    );
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
    // testMsg("test Bank Send to carbon oracle account", () =>
    //   Cosmos.BankSendTrx(
    //     1100000000,
    //     undefined,
    //     undefined,
    //     undefined,
    //     undefined,
    //     "ixo16s0t89a4gk0jdxhpfwq4sphjw4dcex6rvgm2ln"
    //   )
    // );

    const cw20_baseContractCode = customQueries.contract.getContractCode(
      "devnet",
      "cw20_base"
    );
    const ixoswapContractCode = customQueries.contract.getContractCode(
      "devnet",
      "ixoswap"
    );

    let contractAddress1155 =
      "ixo1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3sq0mjl6";

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
      "ixo1d3gupctdquscekqt48g2xnmfnweaqx7hh4l83vcgy5nw7sphjlvqju0vch";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = {
        token1155_denom: { cw1155: [contractAddress1155, "CARBON"] },
        token2_denom: { native: "uixo" },
        lp_token_code_id: cw20_baseContractCode,
        max_slippage_percent: "0.4",
        protocol_fee_recipient: tester,
        protocol_fee_percent: "0.1",
        lp_fee_percent: "0.1",
      };

      const res = await Wasm.WasmInstantiateTrx(31!, JSON.stringify(msg));
      console.log({ res });
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
        const slippage = 10;
        const inputToken = true ? TokenType.Token1155 : TokenType.Token2;
        const inputAmount = 1000;

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
            expiration: {
              at_height: 1800000,
            },
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
      },
      true
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
      "ixo1nrmn3gvsw945844f8nhq0e4fhgrfc3njy7etvhv0nchrrrssmswq530un0";
    let proposalContractAddress =
      "ixo1l3hy5gmzynj0pvareazgmzx0fxpmv3wlyl7g0qnkkglxrnlqfr8q4rrkvw";
    let preProposalContractAddress =
      "ixo1kddrp0twnqltkwxr7ekqng5kcf078dzsesy8m3ztkkvlszswv7nqffclj5";
    let votingContractAddress =
      "ixo1u22nvd82hyc7gkqxrzv8pqtg0xlwjvwywk5tkuwyrt7djvfq25vstjyj7n";

    // testMsg("test Grant Send", async () => {
    //   return await Authz.MsgGrantSend(
    //     undefined,
    //     undefined,
    //     undefined,
    //     contractAddress
    //   );
    // });

    // testMsg("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz", () =>
    //   Entity.GrantEntityAccountAuthz(
    //     "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
    //     "admin"
    //   )
    // );

    // // Create daodao group to do tests with
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

    // // Get daodao groups proposal and voting contract addresses
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

    // // Get daodao groups prepoposal contract addresses
    // test("query dao proposal contract: proposal_creation_policy", async () => {
    //   const msg = {
    //     proposal_creation_policy: {},
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: proposalContractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   const proposalCreationPolicy = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(res.data)
    //   );
    //   preProposalContractAddress = proposalCreationPolicy.module.addr;
    //   console.log({ preProposalContractAddress });
    //   expect(res).toBeTruthy();
    // });

    const cw20_baseContractCode = customQueries.contract.getContractCode(
      "devnet",
      "cw20_base"
    );
    const ixoswapContractCode = customQueries.contract.getContractCode(
      "devnet",
      "ixoswap"
    );
    let devnet_CARBON_contractAddress1155 =
      "ixo1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3sq0mjl6";

    // can run all 5 functions below in order to make the proposal, and vote and execute it
    // make proposal and check proposal id in response
    let proposalId = 1;
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
                      type_url: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                      value: Uint8ArrayTob64(
                        cosmwasm.wasm.v1.MsgInstantiateContract.encode({
                          admin: contractAddress,
                          codeId: Long.fromNumber(ixoswapContractCode!),
                          funds: [
                            cosmos.base.v1beta1.Coin.fromPartial({
                              amount: String(1),
                              denom: "uixo",
                            }),
                          ],
                          label: "ixoswap" + ixoswapContractCode,
                          msg: utils.conversions.JsonToArray(
                            JSON.stringify({
                              token1155_denom: {
                                cw1155: [
                                  devnet_CARBON_contractAddress1155,
                                  "CARBON",
                                ],
                              },
                              token2_denom: { native: "uixo" },
                              lp_token_code_id: cw20_baseContractCode,
                              max_slippage_percent: "0.4",
                              protocol_fee_recipient: contractAddress,
                              protocol_fee_percent: "0.1",
                              lp_fee_percent: "0.1",
                            })
                          ),
                          sender: contractAddress,
                        }).finish()
                      ),
                    },
                  },
                  // {
                  //   stargate: {
                  //     type_url: "/ixo.entity.v1beta1.MsgUpdateEntityVerified",
                  //     value: Uint8ArrayTob64(
                  //       ixo.entity.v1beta1.MsgUpdateEntityVerified.encode({
                  //         id: "did:ixo:entity:4b4f2e9a0576cdf14c8a63bd72c647ce",
                  //         entityVerified: true,
                  //         relayerNodeDid: dids.impactsDao,
                  //         relayerNodeAddress: contractAddress,
                  //       }).finish()
                  //     ),
                  //   },
                  // },
                  // {
                  //   stargate: {
                  //     type_url: "/cosmos.authz.v1beta1.MsgExec",
                  //     value: Uint8ArrayTob64(
                  //       cosmos.authz.v1beta1.MsgExec.encode({
                  //         grantee: contractAddress,
                  //         msgs: [
                  //           {
                  //             typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                  //             value: cosmos.bank.v1beta1.MsgSend.encode(
                  //               cosmos.bank.v1beta1.MsgSend.fromPartial({
                  //                 amount: [
                  //                   cosmos.base.v1beta1.Coin.fromPartial({
                  //                     amount: "1000000",
                  //                     denom: "uixo",
                  //                   }),
                  //                 ],
                  //                 fromAddress:
                  //                   "ixo1n8yrmeatsk74dw0zs95ess9sgzptd6thgjgcj2",
                  //                 toAddress:
                  //                   "ixo19hunve4z9w8jwj8ac2xhvqgmmq4w6js7twyweh",
                  //               })
                  //             ).finish(),
                  //           },
                  //         ],
                  //       }).finish()
                  //     ),
                  //   },
                  // },
                ],
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

    // get latest proposal id if dont know it, or to set it in flow through proposalId
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

    // vote on the latest proposal
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

    // get vote for latest proposal
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

    // execute latest proposal
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
