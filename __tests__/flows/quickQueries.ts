import Long from "long";
import { cosmos, createRegistry, utils } from "../../src";
import { getUser, queryClient } from "../helpers/common";
import { RPC_URL, WalletUsers } from "../helpers/constants";
import { AuthInfo, TxBody } from "../../src/codegen/cosmos/tx/v1beta1/tx";
import { fromHex } from "@cosmjs/encoding";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  JsonToArray,
  Uint8ArrayToJS,
  b64toUint8Array,
} from "../../src/utils/conversions";
import { fromTimestamp } from "../../src/codegen/helpers";

export const quickQueries = () =>
  describe("Quick queries to see states", () => {
    test("Quick queries to see states filler", () => expect(true).toBeTruthy());

    // test("Test rpc endpoint rate limit", async () => {
    //   const limit = 100;
    //   const parallelSize = 2;
    //   let i = 1;

    //   console.time("rpc");
    //   for (i = 1; i < limit; i++) {
    //     try {
    //       await Promise.all(
    //         Array(parallelSize)
    //           .fill(0)
    //           .map(async () => {
    //             await queryClient.cosmos.bank.v1beta1.params();
    //           })
    //       );

    //       console.log("index: ", i, " queries: ", i * parallelSize);
    //       console.timeLog("rpc");
    //     } catch (error) {
    //       console.log("error index: ", i);
    //       console.log(error.message);
    //       break;
    //     }
    //   }
    //   console.timeEnd("rpc");

    //   expect(true).toBeTruthy();
    // });

    // test("Query ixo.bonds.v1beta1", async () => {
    //   const res = await queryClient.ixo.bonds.v1beta1.bondsDetailed();
    //   console.log(res.bondsDetailed);
    //   expect(res).toBeTruthy();
    // });

    // test("Query interchain_accounts params", async () => {
    //   const res =
    //     await queryClient.ibc.applications.interchain_accounts.host.v1.params();
    //   console.log(res.params);
    //   expect(res).toBeTruthy();
    // });

    // test("Query address staking", async () => {
    //   const res = await queryClient.cosmos.staking.v1beta1.delegatorDelegations(
    //     {
    //       delegatorAddr: "ixo1n8yrmeatsk74dw0zs95ess9sgzptd6thgjgcj2",
    //     }
    //   );
    //   console.log(res.delegationResponses);
    //   expect(res).toBeTruthy();
    // });

    // test("Query ibc stuff", async () => {
    //   const res = await queryClient.ibc.core.channel.v1.channels({});
    //   console.dir(res.channels, { depth: null });
    //   const res2 = await queryClient.ibc.core.connection.v1.connection({
    //     connectionId: "connection-29",
    //   });
    //   console.dir(res2.connection, { depth: null });
    //   expect(res).toBeTruthy();
    // });

    // test("Query ibc stuff", async () => {
    //   const res = await queryClient.ibc.applications.transfer.v1.denomTrace({
    //     hash: "6BBE9BD4246F8E04948D5A4EEE7164B2630263B9EBB5E7DC5F0A46C62A2FF97B",
    //   });
    //   console.dir(res.denomTrace, { depth: null });
    //   expect(res).toBeTruthy();
    // });

    // test("Query cosmos.tx.v1beta1.getTx", async () => {
    //   const res = await queryClient.cosmos.tx.v1beta1.getTx({
    //     hash: "11CDBCF0E51D5FF185C7B0BB5921C006310F4B4FC53E8C3C1237192B88C91D6A",
    //   });
    //   console.dir(
    //     res.tx?.body?.messages.map((m) => createRegistry().decode(m)),
    //     { depth: null }
    //   );
    //   // console.dir(createRegistry().decode(res.tx!.body!.messages![0]), {
    //   //   depth: null,
    //   // });
    //   expect(res).toBeTruthy();
    // });

    // test("Query cosmos.tx.v1beta1.getTx", async () => {
    //   const res = {
    //     typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    //     value: b64toUint8Array(
    //       "Cj9qdW5vMXA3ZjR4a3dyazd3aHd1azk5MGFqYzR6a2RrcXBhdzhzemM0NnRlZ202dTU3dHM3Y3g5NHN1NGw2dHMSiQEKHC9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQSaQoranVubzE2czB0ODlhNGdrMGpkeGhwZndxNHNwaGp3NGRjZXg2cjkweHJ1dRIranVubzE2czB0ODlhNGdrMGpkeGhwZndxNHNwaGp3NGRjZXg2cjkweHJ1dRoNCgV1anVubxIEMTAwMA=="
    //     ),
    //   };
    //   console.log(res);
    //   const decodedRes = createRegistry().decode(res);
    //   console.log(decodedRes);
    //   // console.dir(createRegistry().decode(res.tx!.body!.messages![0]), {
    //   //   depth: null,
    //   // });
    //   expect(res).toBeTruthy();
    // });

    // test("Query block results from Tendermint Clint", async () => {
    //   const res = await (
    //     await Tendermint34Client.connect(RPC_URL)
    //   ).blockResults(187175);

    //   const ignoreList = [
    //     "coin_received",
    //     "rewards",
    //     "commission",
    //     "transfer",
    //     "coin_spent",
    //     "mint",
    //   ];
    //   console.dir(
    //     {
    //       beginBlockEvents: res.beginBlockEvents.map((e) =>
    //         ignoreList.includes(e.type)
    //           ? null
    //           : e.attributes.map((a) => ({
    //               a: Uint8ArrayToJS(a.key),
    //               b: Uint8ArrayToJS(a.value),
    //             }))
    //       ),
    //       endBlockEvents: res.endBlockEvents.map((e) =>
    //         ignoreList.includes(e.type) ? null : e
    //       ),
    //     },
    //     { depth: null }
    //   );
    //   expect(res).toBeTruthy();
    // });

    // test("Decode txBodyBytes", async () => {
    //   const txBodyBytes = [
    //     10, 217, 1, 10, 46, 47, 105, 120, 111, 46, 101, 110, 116, 105, 116, 121,
    //     46, 118, 49, 98, 101, 116, 97, 49, 46, 77, 115, 103, 71, 114, 97, 110,
    //     116, 69, 110, 116, 105, 116, 121, 65, 99, 99, 111, 117, 110, 116, 65,
    //     117, 116, 104, 122, 18, 166, 1, 10, 3, 100, 105, 100, 18, 5, 97, 100,
    //     109, 105, 110, 26, 16, 105, 120, 111, 49, 120, 113, 119, 108, 104, 106,
    //     120, 107, 50, 99, 54, 122, 34, 90, 10, 75, 10, 42, 47, 99, 111, 115,
    //     109, 111, 115, 46, 97, 117, 116, 104, 122, 46, 118, 49, 98, 101, 116,
    //     97, 49, 46, 71, 101, 110, 101, 114, 105, 99, 65, 117, 116, 104, 111,
    //     114, 105, 122, 97, 116, 105, 111, 110, 18, 29, 10, 27, 47, 99, 111, 115,
    //     109, 111, 115, 46, 103, 111, 118, 46, 118, 49, 98, 101, 116, 97, 49, 46,
    //     77, 115, 103, 86, 111, 116, 101, 18, 11, 8, 208, 217, 170, 164, 6, 16,
    //     128, 235, 147, 79, 42, 42, 105, 120, 111, 49, 121, 48, 100, 55, 119, 53,
    //     120, 102, 106, 57, 97, 48, 112, 55, 121, 103, 112, 120, 48, 117, 119,
    //     118, 121, 114, 110, 109, 109, 113, 106, 51, 102, 100, 52, 115, 118, 97,
    //     55, 116,
    //   ];

    //   const txBody = TxBody.decode(txBodyBytes as any);
    //   console.dir(txBody.messages[0], { depth: null });

    //   const msg = createRegistry().decode(txBody.messages[0]);
    //   console.dir(msg, { depth: null });

    //   expect(true).toBeTruthy();
    // });

    // test("Query cosmos.tx.v1beta1.getTxsEvent", async () => {
    //   const res = await queryClient.cosmos.tx.v1beta1.getTxsEvent({
    //     events: [`tx.height=${15955}`],
    //     orderBy: 1,
    //   });
    //   console.log(res.txs[0]!.body!.messages[0]);
    //   console.log(res.txResponses[0]);
    //   console.log(createRegistry().decode(res.txResponses[0].tx!));
    //   expect(res).toBeTruthy();
    // });

    // test("Query cosmos.tx.v1beta1.getBlockByHeight", async () => {
    //   const res =
    //     await queryClient.cosmos.base.tendermint.v1beta1.getBlockByHeight({
    //       height: Long.fromNumber(6525),
    //     });
    //   console.log(res.block?.data);
    //   expect(res).toBeTruthy();
    // });

    // test("Query proposal by id", async () => {
    //   const res = await queryClient.cosmos.gov.v1beta1.proposal({
    //     proposalId: Long.fromNumber(69),
    //   });
    //   console.log(res.proposal);
    //   expect(res).toBeTruthy();
    // });

    // test("Query proposal by id", async () => {
    //   const res = await queryClient.cosmos.gov.v1beta1.proposals({
    //     proposalStatus:
    //       cosmos.gov.v1beta1.ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
    //     voter: "",
    //     depositor: "",
    //   });
    //   console.log(res.pagination);
    //   expect(res).toBeTruthy();
    // });

    // test("Query user balance", async () => {
    //   const address = (await getUser(WalletUsers.alice).getAccounts())[0]
    //     .address;
    //   const res = await queryClient.cosmos.bank.v1beta1.allBalances({
    //     address,
    //   });
    //   console.log(res.balances);
    //   expect(res).toBeTruthy();
    // });

    // test("Query user tokens (entities)", async () => {
    //   const address = (await getUser(WalletUsers.tester).getAccounts())[0]
    //     .address;
    //   const entityParams = await queryClient.ixo.entity.v1beta1.params();

    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: entityParams.params!.nftContractAddress,
    //     queryData: utils.conversions.JsonToArray(
    //       JSON.stringify({
    //         tokens: {
    //           owner: address,
    //           limit: 99999999,
    //         },
    //       })
    //     ),
    //   });
    //   const tokens = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(res.data)
    //   ).tokens;
    //   console.log({ tokens });

    //   expect(res).toBeTruthy();
    // });

    // test("Query user feegrant", async () => {
    //   const address = (await getUser(WalletUsers.tester).getAccounts())[0]
    //     .address;
    //   const res = await queryClient.cosmos.feegrant.v1beta1.allowancesByGranter(
    //     {
    //       granter: address,
    //     }
    //   );
    //   const registry = createRegistry();
    //   console.dir(
    //     {
    //       ...res,
    //       allowances: res.allowances.map((g) => {
    //         const allowance = registry.decode(g.allowance!);
    //         const expiration =
    //           allowance.expiration && fromTimestamp(allowance.expiration);
    //         return {
    //           ...g,
    //           allowance: {
    //             ...allowance,
    //             expiration,
    //           },
    //         };
    //       }),
    //     },
    //     { depth: null }
    //   );
    //   console.log(res.allowances.length);
    //   // if (res.allowances.length > 0) {
    //   //   console.log(registry.decode(res.allowances[0].allowance!));
    //   // }
    //   expect(res).toBeTruthy();
    // });

    // test("query wasm contract 1155 state", async () => {
    //   const user = (await getUser(WalletUsers.tester).getAccounts())[0].address;
    //   const contractAddress =
    //     "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    //   const tokens = [
    //     "247bf50a1ce28ea7622ef6082e5e559f",
    //     "3187434c0a27fc17e1f484812e6be90e",
    //     "32fe8cdc405b2c5828e59c2432eb615a",
    //   ];
    //   const msg = {
    //     // balance: {
    //     //   owner: "ixo1jacj68c9uffdjt0yw6mumkxzcmup7la2yhfs72",
    //     //   token_id: tokens[0],
    //     // },
    //     // tokens: {
    //     //   owner: "ixo1jacj68c9uffdjt0yw6mumkxzcmup7la2yhfs72",
    //     // },
    //     // batch_balance: {
    //     //   owner: user,
    //     //   token_ids: tokens,
    //     // },
    //     token_info: {
    //       token_id: tokens[0],
    //     },
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: contractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   console.dir(utils.conversions.Uint8ArrayToJS(res.data), { depth: null });
    //   expect(res).toBeTruthy();
    // });

    // test("query wasm store codes", async () => {
    //   const res = await queryClient.cosmwasm.wasm.v1.codes();
    //   console.log(res.codeInfos);
    //   expect(res).toBeTruthy();
    // });

    // test("query tokens list by did", async () => {
    //   const user = (await getUser(WalletUsers.tester).getAccounts())[0].address;
    //   const res = await queryClient.ixo.token.v1beta1.tokenList({
    //     minter: user,
    //   });
    //   console.log(res.tokenDocs);
    //   expect(res).toBeTruthy();
    // });

    // test("query token metadata by id", async () => {
    //   try {
    //     const res = await queryClient.ixo.token.v1beta1.tokenMetadata({
    //       id: "009b08563bac2d805c0e3f84ddabc99d",
    //     });
    //     console.dir(res, { depth: null });
    //     expect(res).toBeTruthy();
    //   } catch (error) {
    //     console.log("error", error.message);
    //   }
    // });

    // test("query claim collections list", async () => {
    //   const res = await queryClient.ixo.claims.v1beta1.collectionList();
    //   console.log(res.collections);
    //   expect(res).toBeTruthy();
    // });

    // test("query claims list", async () => {
    //   const res = await queryClient.ixo.claims.v1beta1.claimList();
    //   console.log(res.claims);
    //   expect(res).toBeTruthy();
    // });

    // test("query claims byId", async () => {
    //   const res = await queryClient.ixo.claims.v1beta1.claim({
    //     id: "bafkreifvvkgaah2rr7ixwr7xyy3dbhccsgb3mpuxelrhzjp3shfmnbuobm",
    //   });
    //   console.dir(res.claim, { depth: null });
    //   expect(res).toBeTruthy();
    // });

    // test("query dispute list", async () => {
    //   const res = await queryClient.ixo.claims.v1beta1.disputeList();
    //   console.log(res.disputes);
    //   expect(res).toBeTruthy();
    // });

    // test("query entity params", async () => {
    //   const res = await queryClient.ixo.entity.v1beta1.params();
    //   console.log(res.params);
    //   expect(res).toBeTruthy();
    // });

    // test("query entity by id", async () => {
    //   const res = await queryClient.ixo.entity.v1beta1.entity({
    //     id: "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14",
    //   });
    //   console.log(res.entity);
    //   expect(res).toBeTruthy();
    // });

    // test("query entity list", async () => {
    //   const res = await queryClient.ixo.entity.v1beta1.entityList();
    //   console.log(res.entities);
    //   console.log(res.entities.map((e) => e.accounts));
    //   expect(res).toBeTruthy();
    // });

    test("query grants by grantee", async () => {
      const user = "ixo1gwptvgg2qgwjlm868jqayk5e4yy7ggva5gdka7";
      const res = await queryClient.cosmos.authz.v1beta1.granteeGrants({
        grantee: user,
      });
      if (res.grants.length > 0) {
        console.log(
          res.grants.map((g) => {
            g.expiration = g.expiration?.seconds as any;
            return g;
          })
        );
        console.log(
          res.grants.map((g) => {
            const auth = createRegistry().decode(g.authorization!);
            return auth.constraints || auth;
          })
        );
      }
      expect(res).toBeTruthy();
    });

    // test("query grants by granter", async () => {
    //   const user = (await getUser(WalletUsers.tester).getAccounts())[0].address;
    //   const res = await queryClient.cosmos.authz.v1beta1.granterGrants({
    //     granter: user,
    //   });
    //   if (res.grants.length > 0) {
    //     console.dir(
    //       (res.grants ?? [])?.map((g) => ({
    //         ...g,
    //         expiration: !g.expiration
    //           ? undefined
    //           : utils.proto.fromTimestamp(g.expiration)?.getTime(),
    //         authorization: {
    //           ...g.authorization,
    //           value: createRegistry().decode(g.authorization!),
    //         },
    //       })),
    //       { depth: null }
    //     );
    //   }
    //   expect(res).toBeTruthy();
    // });

    // test("query grants", async () => {
    //   const granter = (await getUser(WalletUsers.tester).getAccounts())[0]
    //     .address;
    //   const grantee = (await getUser(WalletUsers.alice).getAccounts())[0]
    //     .address;
    //   const res = await queryClient.cosmos.authz.v1beta1.grants({
    //     granter,
    //     grantee,
    //     msgTypeUrl: "",
    //   });
    //   console.log(res.grants);
    //   // if (res.grants.length > 0)
    //   //   console.log(
    //   //     res.grants.map((g) => createRegistry().decode(g.authorization!))
    //   //   );
    //   expect(res).toBeTruthy();
    // });

    // test("decode", async () => {
    //   const authInfoBytes =
    //     "0a2b0a210a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912040a020801180112130a0d0a047569786f1205313235303310a0c21e";
    //   const bodyBytes =
    //     "0a89010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e6412690a2a69786f3179306437773578666a3961307037796770783075777679726e6d6d716a336664347376613774122a69786f313968336c716a353075687a647276386d6b61666e7035356e716d7a34676863327364336d34381a0f0a047569786f120731303030303030";

    //   const auth = AuthInfo.decode(fromHex(authInfoBytes));
    //   const body = TxBody.decode(fromHex(bodyBytes));
    //   console.log(auth.signerInfos[0]);
    //   console.log(body);
    //   expect(true).toBeTruthy();
    // });

    // test("query iid doc", async () => {
    //   const did: string = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    //   // const did = getUser(WalletUsers.tester).did;
    //   try {
    //     const res = await queryClient.ixo.iid.v1beta1.iidDocument({
    //       id: did,
    //     });
    //     console.log(res);
    //     console.log(res.iidDocument);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    //   expect(true).toBeTruthy();
    // });

    // test("Query module params", async () => {
    //   const res = await queryClient.ixo.claims.v1beta1.params();
    //   console.log(res.params);
    //   expect(res).toBeTruthy();
    // });
  });
