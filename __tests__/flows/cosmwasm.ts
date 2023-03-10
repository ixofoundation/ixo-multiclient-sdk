import {
  cosmos,
  customQueries,
  getUser,
  queryClient,
  testMsg,
  utils,
} from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Wasm from "../modules/CosmWasm";
import * as Cosmos from "../modules/Cosmos";
import { contracts } from "../../src/custom_queries/contract.constants";

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
