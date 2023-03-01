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
import { toBase64 } from "@cosmjs/encoding";

export const wasmBasic = () =>
  describe("Testing the wasmd module", () => {
    let contractAddress: string;
    contractAddress =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = { minter: tester };

      const res = await Wasm.WasmInstantiateTrx(2, JSON.stringify(msg));
      console.log({ res });
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
      console.log(res);
      console.log(JSON.parse(res.rawLog!)[0].events);
      return res;
    });

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
    //   console.log({ res });
    //   return res;
    // });
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
  describe("Testing the Dao Core", () => {
    const contractCodes = customQueries.contract.getContractCodes(
      "devnet",
      "daodao"
    );
    const daoCoreContractCode = contractCodes.find(
      (contract) => contract.name === "dao_core"
    );
    const daoProposalContractCode = contractCodes.find(
      (contract) => contract.name === "dao_proposal_single"
    );
    const daoPreProposalContractCode = contractCodes.find(
      (contract) => contract.name === "dao_pre_propose_single"
    );
    const daoVotingCw4ContractCode = contractCodes.find(
      (contract) => contract.name === "dao_voting_cw4"
    );
    const cw4ContractCode = contractCodes.find(
      (contract) => contract.name === "cw4_group"
    );

    let contractAddress: string;
    let proposalContractAddress: string;
    let preProposalContractAddress: string;
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
            code_id: daoProposalContractCode!.code,
            label: "DAO_Test Dao_DaoProposalSingle",
            msg: toBase64(
              utils.conversions.JsonToArray(
                JSON.stringify({
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
                        code_id: daoPreProposalContractCode!.code,
                        label: "DAO_Test Dao_pre-propose-DaoProposalSingle",
                        msg: toBase64(
                          utils.conversions.JsonToArray(
                            JSON.stringify({
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
                            })
                          )
                        ),
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
                })
              )
            ),
          },
        ],
        voting_module_instantiate_info: {
          admin: {
            core_module: {},
          },
          code_id: daoVotingCw4ContractCode!.code,
          label: "DAO_Test Dao_DaoVotingCw4",
          msg: toBase64(
            utils.conversions.JsonToArray(
              JSON.stringify({
                cw4_group_code_id: cw4ContractCode!.code,
                initial_members: [
                  {
                    addr: tester,
                    weight: 1,
                  },
                ],
              })
            )
          ),
        },
      };
      const res = await Wasm.WasmInstantiateTrx(
        daoCoreContractCode!.code,
        JSON.stringify(msg)
      );
      contractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress });
      const queryMsg = {
        dump_state: {},
      };
      const result = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(queryMsg)),
      });
      const dumpState = JSON.parse(
        utils.conversions.Uint8ArrayToJS(result.data)
      );
      proposalContractAddress = dumpState.proposal_modules[0].address;
      console.log({ proposalContractAddress });
      return res;
    });

    // wip: failing
    testMsg(
      "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal propose",
      async () => {
        const tester = (await getUser().getAccounts())[0].address;

        const msg = {
          propose: {
            description: "Testing: set item whoIsAwesome",
            msgs: [
              {
                wasm: {
                  execute: {
                    contract_addr: contractAddress,
                    funds: [
                      cosmos.base.v1beta1.Coin.fromPartial({
                        amount: "1",
                        denom: "uixo",
                      }),
                    ],
                    msg: toBase64(
                      utils.conversions.JsonToArray(
                        JSON.stringify({
                          set_item: {
                            key: "whoIsAwesome",
                            value: "Petrus",
                          },
                        })
                      )
                    ),
                  },
                },
              },
            ],
            proposer: tester,
            title: "Testing",
          },
        };
        const res = await Wasm.WasmExecuteTrx(
          proposalContractAddress,
          JSON.stringify(msg)
        );
        console.log("proposal", res);
        return res;
      }
    );

    // testMsg(
    //   "/cosmwasm.wasm.v1.MsgExecuteContract dao proposal vote",
    //   async () => {
    //     const queryMsg = {
    //       reverseProposals: {},
    //     };
    //     const result = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //       address: contractAddress,
    //       queryData: utils.conversions.JsonToArray(JSON.stringify(queryMsg)),
    //     });
    //     const reverseProposals = JSON.parse(
    //       utils.conversions.Uint8ArrayToJS(result.data)
    //     );
    //     proposalId = reverseProposals.proposals[0].id;

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

    // test("query dao core execution", async () => {
    //   const msg = {
    //     list_items: {},
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: contractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   console.log("getItem::", utils.conversions.Uint8ArrayToJS(res.data));
    //   expect(res).toBeTruthy();
    // });
  });
