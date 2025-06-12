import csvtojsonV2 from "csvtojson/v2";
import { AsyncParser } from "@json2csv/node";
import { cosmos, createRegistry, customQueries, utils } from "../../src";
import gqlQuery, {
  chunkArray,
  getUser,
  queryClient,
  saveFileToPath,
} from "../helpers/common";
import { RPC_URL, WalletUsers } from "../helpers/constants";
import { AuthInfo, TxBody } from "../../src/codegen/cosmos/tx/v1beta1/tx";
import { fromHex } from "@cosmjs/encoding";
import { connectComet, Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  JsonToArray,
  Uint8ArrayToJS,
  b64toUint8Array,
} from "../../src/utils/conversions";
import { fromTimestamp } from "../../src/codegen/helpers";
import axios from "axios";
import { claims_mainnet, claims_testnet } from "../constants/claims";
import { EcsCredentialsWorkerUrl } from "../setup/constants";
// @ts-ignore
import Long from "long";

export const quickQueries = () =>
  describe("Quick queries to see states", () => {
    test("Quick queries to see states filler", () => expect(true).toBeTruthy());

    // test("Test rpc endpoint rate limit", async () => {
    //   const limit = 100;
    //   const parallelSize = 10;
    //   let i = 1;

    //   console.time("rpc");
    //   for (i = 1; i < limit; i++) {
    //     try {
    //       await Promise.all(
    //         Array(parallelSize)
    //           .fill(0)
    //           .map(async () => {
    //             // const res = await axios.get(
    //             //   `https://cf-ipfs.com/ipfs/bafkreidw5lg6mn2q33vj6gokazbl6yepsh3s32xf5z3evqu43s2ccqg3xy`
    //             // );
    //             // console.log("res.status: ", res.status);
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

    // test("Test rpc endpoint rate limit", async () => {
    //   const claims = claims_mainnet;
    //   // const claims = claims_testnet;
    //   const limit = 100;
    //   const parallelSize = 15;
    //   let i = 0;

    //   console.time("query");
    //   for (i = 0; i < limit; i++) {
    //     try {
    //       const startClaim = i * parallelSize;
    //       if (startClaim >= claims.length) break;
    //       console.time("innerQuery");

    //       await Promise.all(
    //         claims
    //           .slice(startClaim, startClaim + parallelSize)
    //           .map(async ({ claimId }) => {
    //             // console.log("claimId: ", claimId);
    //             const res = await axios.get(
    //               `${EcsCredentialsWorkerUrl}claims/claim/${claimId}/data`,
    //               {
    //                 headers: {
    //                   Authorization: process.env.ECS_CREDENTIAL_WORKER_AUTH,
    //                 },
    //               }
    //             );
    //             if (res.status !== 200) {
    //               throw new Error("Error fetching claim data");
    //             }
    //             // console.log("res.status: ", res.status);
    //           })
    //       );

    //       console.log("index: ", i, " batch index start: ", i * parallelSize);
    //       console.timeEnd("innerQuery");
    //     } catch (error) {
    //       console.log("error index: ", i);
    //       console.log(error.message);
    //       break;
    //     }
    //   }
    //   console.timeEnd("query");

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
    //   const test = await customQueries.comet.blockResults(18, RPC_URL);
    //   console.dir(test, { depth: null });
    // const res = await (await connectComet(RPC_URL)).blockResults(22);
    // console.dir(res, { depth: null });

    // const ignoreList = [
    //   // "coin_received",
    //   "rewards",
    //   "commission",
    //   // "transfer",
    //   // "coin_spent",
    //   "mint",
    // ];
    // console.dir(
    //   {
    //     beginBlockEvents: res.beginBlockEvents.map((e) =>
    //       ignoreList.includes(e.type)
    //         ? null
    //         : {
    //             type: e.type,
    //             attributes: e.attributes.map((a) => ({
    //               key:
    //                 typeof a.key === "string" ? a.key : Uint8ArrayToJS(a.key),
    //               value:
    //                 typeof a.value === "string"
    //                   ? a.value
    //                   : Uint8ArrayToJS(a.value),
    //             })),
    //           }
    //     ),
    //     endBlockEvents: res.endBlockEvents.map((e) =>
    //       ignoreList.includes(e.type)
    //         ? null
    //         : {
    //             type: e.type,
    //             attributes: e.attributes.map((a) => ({
    //               key:
    //                 typeof a.key === "string" ? a.key : Uint8ArrayToJS(a.key),
    //               value:
    //                 typeof a.value === "string"
    //                   ? a.value
    //                   : Uint8ArrayToJS(a.value),
    //             })),
    //           }
    //     ),
    //   },
    //   { depth: null }
    // );
    //   expect(true).toBeTruthy();
    // });

    // test("Query cosmos.tx.v1beta1.getTxsEvent", async () => {
    //   const res = await queryClient.cosmos.tx.v1beta1.getTxsEvent({
    //     events: [`tx.height=${34}`],
    //     orderBy: cosmos.tx.v1beta1.OrderBy.ORDER_BY_ASC,
    //     limit: Long.fromNumber(10000),
    //     page: Long.fromNumber(1),
    //     query: `tx.height=${34}`,
    //   });
    //   // console.log(res.txs[0]!.body!.messages[0]);
    //   console.dir(res, { depth: null });
    //   // console.log(res.txResponses[0]);
    //   // console.log(createRegistry().decode(res.txResponses[0].tx!));
    //   expect(res).toBeTruthy();
    // });

    // test("Query cosmos.tx.v1beta1.getBlockByHeight", async () => {
    //   const res =
    //     await queryClient.cosmos.base.tendermint.v1beta1.getBlockByHeight({
    //       height: Long.fromNumber(18),
    //     });
    //   console.dir(res, { depth: null });
    //   expect(res).toBeTruthy();
    // });

    // test("Decode txBodyBytes", async () => {
    //   let txBodyBytes: any = [
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
    //   const txBodyHex =
    //     "0a8d040a1d2f636f736d6f732e617574687a2e763162657461312e4d73674578656312eb030a2a69786f313832757138716b796b6565787173363871357637756e786b7a6870326b6a6a35766c616b303012bc030a242f69786f2e636c61696d732e763162657461312e4d73674576616c75617465436c61696d1293030a3b6261667962656965643378656b7077676f7068633568706d797a7762326f376d6d6e7132673234706836786f3376667834767a7072366968336b71120233361a326469643a69786f3a69786f313832757138716b796b6565787173363871357637756e786b7a6870326b6a6a35766c616b303022326469643a69786f3a69786f313832757138716b796b6565787173363871357637756e786b7a6870326b6a6a35766c616b30302a2a69786f313832757138716b796b6565787173363871357637756e786b7a6870326b6a6a35766c616b3030322a69786f316c366b72667764756475677666306e797a7a677079337a7036736a6b61726b78353036616b65380140014a3b6261667962656965643378656b7077676f7068633568706d797a7762326f376d6d6e7132673234706836786f3376667834767a7072366968336b71524f0a446962632f36424245394244343234364638453034393438443541344545453731363442323633303236334239454242354537444335463041343643363241324646393742120731303030303030";

    //   // if txBodyHex then convert hex to base64 and then to txBodyBytes
    //   if (txBodyHex) {
    //     txBodyBytes = utils.conversions.b64toUint8Array(
    //       Buffer.from(txBodyHex, "hex").toString("base64")
    //     );
    //   }

    //   const txBody = TxBody.decode(txBodyBytes as any);
    //   console.dir(txBody.messages[0], { depth: null });

    //   const msg = createRegistry().decode(txBody.messages[0]);
    //   console.dir(msg, { depth: null });

    //   const innerAuthMsg = createRegistry().decode(msg.msgs[0]);
    //   console.dir(innerAuthMsg, { depth: null });

    //   // const innerInnerAuthMsg = createRegistry().decode(
    //   //   innerAuthMsg.grant.authorization
    //   // );
    //   // console.dir(innerInnerAuthMsg, { depth: null });

    //   expect(true).toBeTruthy();
    // });

    // test("Query proposal by id", async () => {
    //   const res = await queryClient.cosmos.gov.v1beta1.proposal({
    //     proposalId: Long.fromNumber(12),
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
    //     resolveDenom: false,
    //   });
    //   console.log(res.balances);
    //   expect(res).toBeTruthy();
    // });

    // test("Query cw20 token balancea", async () => {
    //   const cw20Address =
    //     "ixo1747e2jlnmk6lzqe2pcpq4x0fxys4e7puadx7np78s9ygqed24cxshj2xuc";

    //   const ixo = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: cw20Address,
    //     queryData: utils.conversions.JsonToArray(
    //       JSON.stringify({
    //         balance: {
    //           address: "ixo1kqmtxkggcqa9u34lnr6shy0euvclgatw4f9zz5",
    //         },
    //       })
    //     ),
    //   });
    //   const ixoData = JSON.parse(utils.conversions.Uint8ArrayToJS(ixo.data));

    //   const relayer = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: cw20Address,
    //     queryData: utils.conversions.JsonToArray(
    //       JSON.stringify({
    //         balance: {
    //           address: "ixo1drv3l0hut8rexrnm9vf3pfmtw053ms63lgx36u",
    //         },
    //       })
    //     ),
    //   });
    //   const relayerData = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(relayer.data)
    //   );

    //   const alice = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: cw20Address,
    //     queryData: utils.conversions.JsonToArray(
    //       JSON.stringify({
    //         balance: {
    //           address: "ixo12am7v5xgjh72c7xujreyvtncqwue3w0v6ud3r4",
    //         },
    //       })
    //     ),
    //   });
    //   const aliceData = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(alice.data)
    //   );

    //   const escrow = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: cw20Address,
    //     queryData: utils.conversions.JsonToArray(
    //       JSON.stringify({
    //         balance: {
    //           address: "ixo1h8ysw25vwez33hh9yx03kea935achlvrqve956",
    //         },
    //       })
    //     ),
    //   });
    //   const escrowData = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(escrow.data)
    //   );

    //   const admin = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: cw20Address,
    //     queryData: utils.conversions.JsonToArray(
    //       JSON.stringify({
    //         balance: {
    //           address: "ixo1wc43xczdzlc623e9ssxkndpqnvgk2vq4hheyq2",
    //         },
    //       })
    //     ),
    //   });
    //   const adminData = JSON.parse(
    //     utils.conversions.Uint8ArrayToJS(admin.data)
    //   );

    //   console.log({ ixoData, relayerData, aliceData, escrowData, adminData });

    //   expect(ixo).toBeTruthy();
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

    // test("Query user tokens (entities)", async () => {
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address:
    //       // "ixo1fyvnk5zxh87n8f090wty327vl8y2eeadt0d60kmy3t486zzmzm6qp6284q", // isms
    //       "ixo15jtd4yq97z54s9vw4mmz804fhugvdrn4d8v90zea6tpl8f2d88vqqr54hr", // validator announce
    //     queryData: utils.conversions.JsonToArray(
    //       JSON.stringify({
    //         // multisig_ism: {
    //         //   enrolled_validators: {
    //         //     domain: 84532,
    //         //   },
    //         // },
    //         get_announce_storage_locations: {
    //           validators: ["662e102a234355c5054793cf5f5a1948c9b7193c"],
    //         },
    //         // get_announced_validators: {},
    //         // router: {
    //         //   list_routes: {},
    //         // },
    //       })
    //     ),
    //   });
    //   const data = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
    //   console.dir(data, { depth: null });

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
    //   // const user = (await getUser(WalletUsers.tester).getAccounts())[0].address;
    //   const user = "ixo1xwn45d6xhe3egcz3nqlfc2elpc3h6usy6yw3uk";
    //   const contractAddress =
    //     "ixo15jzyzklz8rq9gy38p4kcall0nqr8exglqg5870gglaq4c976vlxs92x0ga";

    //   const tokens: string[] = [];
    //   const ownerTokensQuery = {
    //     tokens: { owner: user, limit: 30, start_after: "" },
    //   };

    //   while (true) {
    //     const ownerTokensResponse =
    //       await queryClient.cosmwasm.wasm.v1.smartContractState({
    //         address: contractAddress,
    //         queryData: utils.conversions.JsonToArray(
    //           JSON.stringify(ownerTokensQuery)
    //         ),
    //       });
    //     const ownerTokenIds: string[] =
    //       JSON.parse(utils.conversions.Uint8ArrayToJS(ownerTokensResponse.data))
    //         .tokens ?? [];

    //     tokens.push(...ownerTokenIds);

    //     if (ownerTokenIds.length !== 30) break;

    //     ownerTokensQuery.tokens.start_after =
    //       ownerTokenIds[ownerTokenIds.length - 1];
    //   }
    //   console.log({ tokens });

    //   const msg = {
    //     // balance: {
    //     //   owner: "ixo1jacj68c9uffdjt0yw6mumkxzcmup7la2yhfs72",
    //     //   token_id: tokens[0],
    //     // },
    //     // tokens: {
    //     //   owner: "ixo1jacj68c9uffdjt0yw6mumkxzcmup7la2yhfs72",
    //     // },
    //     batch_balance: {
    //       owner: user,
    //       token_ids: tokens,
    //     },
    //     // token_info: {
    //     //   token_id: tokens[0],
    //     // },
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: contractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   console.dir(utils.conversions.Uint8ArrayToJS(res.data), { depth: null });
    //   expect(true).toBeTruthy();
    // });

    // test("query wasm store codes", async () => {
    //   const res = await queryClient.cosmwasm.wasm.v1.codes();
    //   console.log(res.codeInfos);
    //   expect(res).toBeTruthy();
    // });

    // test("query address in daodao", async () => {
    //   const daodaoAddress =
    //     "ixo1engh7fuly026cnh558m7j96jm37z4vrqpx5dr57gua4pxw5myqvs7n8ewr";
    //   // const userAddress = (await getUser(WalletUsers.tester).getAccounts())[0].address
    //   const userAddress = "ixo17e23sdgfsukxnu639xe2fjfe4cme0zz532325q";

    //   const msg = {
    //     voting_power_at_height: {
    //       address: userAddress,
    //     },
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: daodaoAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   const data = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
    //   console.dir(data, { depth: null });
    //   expect(res).toBeTruthy();
    // });

    // test("query add daodao members", async () => {
    //   const daodaoAddress =
    //     "ixo1engh7fuly026cnh558m7j96jm37z4vrqpx5dr57gua4pxw5myqvs7n8ewr";

    //   const msg = {
    //     voting_power_at_height: {
    //       address: userAddress,
    //     },
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: daodaoAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   const data = JSON.parse(utils.conversions.Uint8ArrayToJS(res.data));
    //   console.dir(data, { depth: null });
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

    // test("query grants by grantee", async () => {
    //   const user = (await getUser(WalletUsers.alice).getAccounts())[0].address;
    //   const res = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    //     grantee: "ixo1vt8w6g0k2xjkdnmtm4tz527cjn9fkp6exycw93",
    //   });
    //   if (res.grants.length > 0) {
    //     console.dir(
    //       res.grants.map((g) => {
    //         const auth = createRegistry().decode(g.authorization!);
    //         g.expiration = g.expiration?.seconds as any;
    //         g.authorization!.value = auth;
    //         return g;
    //       }),
    //       { depth: null }
    //     );
    //   }
    //   expect(res).toBeTruthy();
    // });

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

    // test("Gather stove details", async () => {
    //   const collectionDid = "did:ixo:entity:9f8749d749af260d185f3df6f2206b63";
    //   const entitiesQuery = `query Query {
    //     entities(filter: {iidById: {context: {contains: [{key: "class", val: "${collectionDid}"}]}}}) {
    //       nodes {
    //         id
    //         owner
    //         accounts
    //       }
    //     }
    //   }`;
    //   let entities: any = await gqlQuery<{
    //     data: {
    //       entities: {
    //         nodes: {
    //           id: string;
    //           owner: string;
    //           accounts: { address: string; name: string }[];
    //         }[];
    //       };
    //     };
    //   }>("https://blocksync-graphql.ixo.earth", entitiesQuery);

    //   // const ownersToExclude = ["ixo1lgelskjkjjasl860n6kmevlflanqj5vh8l8p5w"];
    //   const ownersToExclude = [""];
    //   entities = entities
    //     .data!.data.entities.nodes.map((e) =>
    //       !ownersToExclude.includes(e.owner)
    //         ? {
    //             id: e.id,
    //             owner: e.owner,
    //             adminAccount: e.accounts.find((a) => a.name == "admin")
    //               ?.address,
    //           }
    //         : null
    //     )
    //     .filter(Boolean);

    //   const getEvalDateById = (id: string, evaluations) => {
    //     if (!evaluations) return "No evaluation";
    //     return new Date(
    //       evaluations.find((e) => e.verificationProof === id)?.evaluationDate
    //     );
    //   };
    //   // const filterTokensBeforeDate = new Date("2023-07-13");
    //   const filterTokensBeforeDate = new Date("2024-05-18");

    //   for (let i = 0; i < entities.length; i++) {
    //     // if (i === 2) break;
    //     const e = entities[i];
    //     const tokensQuery = `query Query {
    //       tokenTransactions(filter: { and: { to: { equalTo: "${
    //         e!.adminAccount
    //       }" }, from: { equalTo: "" } } }, orderBy: PRIMARY_KEY_DESC) {
    //         nodes {
    //           amount
    //           token {
    //             id
    //             index
    //           }
    //         }
    //       }
    //     }`;
    //     console.log("getting tokens for index: ", i, " of ", entities.length);
    //     const tokensRes = await gqlQuery<{
    //       data: {
    //         tokenTransactions: {
    //           nodes: { amount: string; token: { id: string; index: string } }[];
    //         };
    //       };
    //     }>("https://blocksync-graphql.ixo.earth", tokensQuery);

    //     const evaluationsQuery = `query Query {
    //       evaluations(filter: { verificationProof: { in: [${(
    //         tokensRes.data?.data.tokenTransactions.nodes ?? []
    //       ).map((t) => `"${t.token.index}"`)}] } }) {
    //           nodes {
    //             evaluationDate
    //             verificationProof
    //           }
    //         }
    //       }`;
    //     const evalsRes = await gqlQuery<{
    //       data: {
    //         evaluations: {
    //           nodes: { evaluationDate: string; verificationProof: string }[];
    //         };
    //       };
    //     }>("https://blocksync-graphql.ixo.earth", evaluationsQuery);

    //     const tokens =
    //       tokensRes.data?.data.tokenTransactions.nodes
    //         .map((t) => {
    //           if (!t.token.index) return null;
    //           const evaluationDate = getEvalDateById(
    //             t.token.index,
    //             evalsRes.data?.data.evaluations.nodes
    //           );
    //           if (evaluationDate < filterTokensBeforeDate) return null;

    //           return {
    //             ...t,
    //             evaluationDate,
    //           };
    //         })
    //         .filter(Boolean) ?? [];

    //     entities[i] = {
    //       ...e,
    //       tokensAfterInitialDate: tokens.reduce((acc, t) => {
    //         acc += Number(t!.amount);
    //         return acc;
    //       }, 0),
    //       tokens: tokens.map((t: any) => ({
    //         amount: t.amount,
    //         evaluationDate: t.evaluationDate,
    //       })),
    //     };
    //   }

    //   // const entitiesWithNewTokensDate = new Date("2024-05-18");
    //   // const entitiesWithNewTokens = entities.filter(
    //   //   (e) =>
    //   //     e.tokens.filter((t) => t.evaluationDate > entitiesWithNewTokensDate)
    //   //       .length > 0
    //   // );
    //   // const entitiesWithNoNewTokens = entities.filter(
    //   //   (e) =>
    //   //     e.tokens.filter((t) => t.evaluationDate > entitiesWithNewTokensDate)
    //   //       .length < 1
    //   // );

    //   // save all CER Claims to file
    //   saveFileToPath(
    //     ["documents", "stove_analysis.json"],
    //     JSON.stringify(
    //       {
    //         entitiesLength: entities.length,
    //         // entitesWithNewTokensLength: entitiesWithNewTokens.length,
    //         // entitiesWithNoNewTokensLength: entitiesWithNoNewTokens.length,
    //         entities,
    //         totalMintedTokens: entities.reduce(
    //           (acc, e) => acc + e.tokensAfterInitialDate,
    //           0
    //         ),
    //       },
    //       null,
    //       2
    //     )
    //   );

    //   expect(entities).toBeTruthy();
    // });

    // test("Gather account transactions", async () => {
    //   const filtered = AccountTransactions.map((t) => {
    //     const typeSplit = t.typeUrl.split(".");
    //     const type = typeSplit[typeSplit.length - 1];
    //     const amount =
    //       t.value?.token?.amount ?? t.value.amount?.[0]?.amount ?? "000000";

    //     return {
    //       type,
    //       from: t.from,
    //       to: t.to,
    //       amount: Number(amount) / 1000000,
    //       time: t.transactionByTransactionHash.time,
    //     };
    //   });

    //   // save all CER Claims to file
    //   saveFileToPath(
    //     ["documents", "test.json"],
    //     JSON.stringify(filtered, null, 2)
    //   );

    //   expect(filtered).toBeTruthy();
    // });

    // test("Cookstove data analytics", async () => {
    //   const data = await csvtojsonV2().fromFile(
    //     "./assets/analytics/Nifty Perfomance  Report.csv"
    //   );

    //   const filtered = data
    //     .map((t) => {
    //       const id = t["Device Ids"];
    //       const isActive = t["Status"] === "Active";
    //       const isDaily = t["Connectivity"] === "DAILY";
    //       const ppm = t["Pellets Per Month"];
    //       let isPpm = false;
    //       if (ppm.includes(">")) {
    //         isPpm = true;
    //       } else if (ppm.includes("No Data")) {
    //         isPpm = false;
    //       } else {
    //         isPpm = Number(ppm) >= 25;
    //       }

    //       if (!isActive || !isPpm || !isDaily) return null;

    //       return id;
    //     })
    //     .filter((t) => t);

    //   console.log("filtered: ", filtered.length);
    //   // save all CER Claims to file
    //   saveFileToPath(
    //     ["analytics", "test.json"],
    //     JSON.stringify(filtered, null, 2)
    //   );

    //   expect(filtered).toBeTruthy();
    // });

    // test("Old testnet data", async () => {
    //   const projectsRaw = require("../../assets/testnet/projects.json") as any;
    //   let data;
    //   const projects = projectsRaw.map((p: any) => {
    //     p.id = JSON.parse(p._id)["$oid"];
    //     delete p.__v;
    //     delete p._id;
    //     delete p.txHash;
    //     data = JSON.parse(p.data);
    //     delete p.data;
    //     delete data.ixo;

    //     if (data.agentStats) {
    //       Object.keys(data.agentStats).forEach((k) => {
    //         data[`agentStats__${k}`] = data.agentStats[k];
    //       });
    //     }
    //     delete data.agentStats;

    //     if (data.owner) {
    //       Object.keys(data.owner).forEach((k) => {
    //         data[`owner__${k}`] = data.owner[k];
    //       });
    //     }
    //     delete data.owner;

    //     if (data.creator) {
    //       Object.keys(data.creator).forEach((k) => {
    //         data[`creator__${k}`] = data.creator[k];
    //       });
    //     }
    //     delete data.creator;

    //     if (data.privacy) {
    //       Object.keys(data.privacy).forEach((k) => {
    //         data[`privacy__${k}`] = data.privacy[k];
    //       });
    //     }
    //     delete data.privacy;

    //     if (data.createdOn) {
    //       data.createdOn = data.createdOn["$date"];
    //     }

    //     if (data.headlineMetric) {
    //       data.headlineMetric_claimTemplateId =
    //         data.headlineMetric.claimTemplateId;
    //     }
    //     delete data.headlineMetric;

    //     if (data.page) {
    //       data.page_cid = data.page.cid;
    //     }
    //     delete data.page;

    //     if (data.version) {
    //       data.effectiveDate = data.version.effectiveDate;
    //     }
    //     delete data.version;

    //     delete data.entitySchemaVersion;

    //     return { ...p, ...data };
    //   });

    //   console.log("filtered: ", projects.length);
    //   saveFileToPath(
    //     ["testnet", "projectsWorked.json"],
    //     JSON.stringify(projects, null, 2)
    //   );

    //   const parser = new AsyncParser();
    //   const csv = await parser.parse(projects).promise();
    //   saveFileToPath(["testnet", "projectsWorked.csv"], csv);

    //   expect(true).toBeTruthy();
    // });

    // test("Gather claims details", async () => {
    //   // queries claims count and sort by evaluation date, for financing accounting
    //   // Genesis: Coll 1 (FP), Coll 3 (CER), Coll 7 (CER)
    //   // Legacy: Coll 5 (FP), Coll 6 (CER)
    //   const claimCollId = "6";
    //   // "FuelPurchase" | "CER"
    //   let claimType = "CER";
    //   // "2023-01-01T0:0:0" for all claims
    //   const fromDate = "2024-06-04T0:0:0";

    //   const includeTokensAmount = claimType === "CER";

    //   // bafkreia22vjjxkhztnkztanplbj63kcsnzekqimrihd6c5afd3ddnpknbe
    //   // bafkreibi7aglnyb3d5ort5wpslfe55ufvya2dqsas7p2gkpk2b4tuxzky4
    //   const claimsQuery = `query Query {
    //     claims(
    //       filter: {collectionId: {equalTo: "${claimCollId}"}, schemaType: {equalTo: "${claimType}"}, evaluationByClaimIdExists: true, evaluationByClaimId: {status: {equalTo: 1}, evaluationDate: {greaterThanOrEqualTo: "${fromDate}"}}}
    //     ) {
    //       totalCount
    //       nodes {
    //         evaluationByClaimId {
    //           evaluationDate
    //           verificationProof
    //         }
    //       }
    //     }
    //   }`;
    //   let claims: any = await gqlQuery<{
    //     data: {
    //       claims: {
    //         totalCount: number;
    //         nodes: {
    //           evaluationByClaimId: {
    //             evaluationDate: string;
    //             verificationProof: string;
    //           };
    //         }[];
    //       };
    //     };
    //   }>("https://blocksync-graphql.ixo.earth", claimsQuery);

    //   claims = claims
    //     .data!.data.claims.nodes.map((n) => ({
    //       evaluationDate: new Date(n.evaluationByClaimId.evaluationDate),
    //       verificationProof: n.evaluationByClaimId.verificationProof,
    //     }))
    //     .filter(Boolean);

    //   // group claims by date same day
    //   const groupedClaims = claims.reduce((acc, c) => {
    //     const date = (c.evaluationDate as Date).toDateString();
    //     if (!acc[date]) acc[date] = [c.verificationProof];
    //     else acc[date] = [...acc[date], c.verificationProof];
    //     return acc;
    //   }, {});

    //   const tokenAmountsPerDate = {};
    //   if (includeTokensAmount) {
    //     // for each grouped claims fetch the amount of tokens minted from it, aka from is empty
    //     for (const date of Object.keys(groupedClaims)) {
    //       const ids = groupedClaims[date];

    //       // chunk query for all claims in the same day
    //       let totalAmount = 0;
    //       for (const idsChunk of chunkArray(ids, 300)) {
    //         const tokensQuery = `query Query {
    //         tokenTransactions(
    //           filter: {token: {index: {in: [${idsChunk.map(
    //             (i) => `"${i}"`
    //           )}]}}, from: {equalTo: ""}}
    //         ) {
    //           aggregates {
    //             sum {
    //               amount
    //             }
    //           }
    //         }
    //       }`;
    //         const tokensAmount = await gqlQuery<{
    //           data: {
    //             tokenTransactions: {
    //               aggregates: {
    //                 sum: {
    //                   amount: string;
    //                 };
    //               };
    //             };
    //           };
    //         }>("https://blocksync-graphql.ixo.earth", tokensQuery);
    //         if (
    //           tokensAmount.data?.data.tokenTransactions.aggregates.sum.amount ==
    //           undefined
    //         ) {
    //           console.error("No tokens found for ids: ", idsChunk);
    //         }
    //         totalAmount += Number(
    //           tokensAmount.data?.data.tokenTransactions.aggregates.sum.amount ||
    //             0
    //         );
    //       }
    //       tokenAmountsPerDate[date] = totalAmount;
    //     }
    //   }

    //   // save all CER Claims to file
    //   saveFileToPath(
    //     ["documents", "emerging", "claims_analysis.json"],
    //     JSON.stringify(
    //       {
    //         totalSuccessClaims: claims.length,
    //         totalTokensMinted: Object.values(tokenAmountsPerDate).reduce(
    //           (acc: number, a: any) => acc + a,
    //           0
    //         ),
    //         groupedClaimsLengths: Object.keys(groupedClaims).reduce(
    //           (acc, g) => {
    //             acc[g] = includeTokensAmount
    //               ? {
    //                   count: groupedClaims[g].length,
    //                   tokens: tokenAmountsPerDate[g],
    //                 }
    //               : groupedClaims[g].length;
    //             return acc;
    //           },
    //           {}
    //         ),
    //       },
    //       null,
    //       2
    //     )
    //   );

    //   expect(claims).toBeTruthy();
    // });
  });

const AccountTransactions = [
  {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    from: "ixo1zczq7zepyzkcyfh930rf9cg4leleplsuzkmpjs",
    to: "ixo1ad4660pu2q00m47jcrn07d24hu6gxwylva243d",
    value: {
      amount: [
        {
          denom: "uixo",
          amount: "262149000",
        },
      ],
      toAddress: "ixo1ad4660pu2q00m47jcrn07d24hu6gxwylva243d",
      fromAddress: "ixo1zczq7zepyzkcyfh930rf9cg4leleplsuzkmpjs",
    },
    transactionByTransactionHash: {
      time: "2023-08-04T11:44:09.375",
    },
  },
];
