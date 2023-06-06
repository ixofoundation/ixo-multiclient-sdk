import Long from "long";
import { createRegistry, utils } from "../../src";
import { getUser, queryClient } from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import { AuthInfo, TxBody } from "../../src/codegen/cosmos/tx/v1beta1/tx";
import { fromHex } from "@cosmjs/encoding";

export const quickQueries = () =>
  describe("Quick queries to see states", () => {
    test("Quick queries to see states filler", () => expect(true).toBeTruthy());

    // test("Query ixo.bonds.v1beta1", async () => {
    //   const res = await queryClient.ixo.bonds.v1beta1.bondsDetailed();
    //   console.log(res.bondsDetailed);
    //   expect(res).toBeTruthy();
    // });

    // test("Query cosmos.tx.v1beta1.getTx", async () => {
    //   const res = await queryClient.cosmos.tx.v1beta1.getTx({
    //     hash: "059CE93CA191E3E097247A23537A3B326128BF0101A44B5B23F9CD93A9AA68F5",
    //   });
    //   console.log(res.tx);
    //   expect(res).toBeTruthy();
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
    //       height: Long.fromNumber(15955),
    //     });
    //   console.log(res);
    //   expect(res).toBeTruthy();
    // });

    // test("Query proposal by id", async () => {
    //   const res = await queryClient.cosmos.gov.v1beta1.proposal({
    //     proposalId: Long.fromNumber(4),
    //   });
    //   console.log(res.proposal);
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
    //   const address = (await getUser(WalletUsers.alice).getAccounts())[0]
    //     .address;
    //   const res = await queryClient.cosmos.feegrant.v1beta1.allowances({
    //     grantee: address,
    //   });
    //   console.log(res.allowances);
    //   expect(res).toBeTruthy();
    // });

    // test("query wasm contract 1155 state", async () => {
    //   const user = (await getUser(WalletUsers.tester).getAccounts())[0].address;
    //   const contractAddress =
    //     "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    //   const tokens = ["0ae9ee3f43c92806232971ee67e23e22"];
    //   const msg = {
    //     balance: {
    //       owner: user,
    //       token_id: tokens[0],
    //     },
    //     // tokens: {
    //     //   owner: user,
    //     // },
    //     // batch_balance: {
    //     //   owner: user,
    //     //   token_ids: tokens,
    //     // },
    //     // token_info: {
    //     //   token_id: tokens[0],
    //     // },
    //   };
    //   const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
    //     address: contractAddress,
    //     queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
    //   });
    //   console.log(utils.conversions.Uint8ArrayToJS(res.data));
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
    //   const res = await queryClient.ixo.token.v1beta1.tokenMetadata({
    //     id: "d89fc11cef9424891fdf9ae173f88a6e",
    //   });
    //   console.log(res);
    //   expect(res).toBeTruthy();
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
    //     grantee: user,
    //   });
    //   if (res.grants.length > 0) {
    //     console.log(
    //       res.grants.map((g) => {
    //         g.expiration = g.expiration?.seconds as any;
    //         return g;
    //       })
    //     );
    //     console.log(
    //       res.grants.map((g) => {
    //         const auth = createRegistry().decode(g.authorization!);
    //         return auth.constraints || auth;
    //       })
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
    //     console.log(
    //       res.grants.map((g) => {
    //         g.expiration = g.expiration?.seconds as any;
    //         return g;
    //       })
    //     );
    //     console.log(
    //       res.grants.map((g) => {
    //         const auth = createRegistry().decode(g.authorization!);
    //         return auth.constraints || auth;
    //       })
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
    //     msgTypeUrl: "/ixo.claims.v1beta1.MsgSubmitClaim",
    //   });
    //   console.log(res.grants);
    //   if (res.grants.length > 0)
    //     console.log(
    //       res.grants.map((g) => createRegistry().decode(g.authorization!))
    //     );
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
    //   const did: string = "did:ixo:entity:f2235630689d4b54a561ca3de57494f6";
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
