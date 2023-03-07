import Long from "long";
import { createRegistry, utils } from "../../src";
import { getUser, queryClient } from "../helpers/common";
import { WalletUsers } from "../helpers/constants";

export const quickQueries = () =>
  describe("Quick queries to see states", () => {
    test("Quick queries to see states filler", () => expect(true).toBeTruthy());

    // test("Query cosmos.tx.v1beta1.getBlockWithTxs", async () => {
    //   const res = await queryClient.cosmos.tx.v1beta1.getTx({
    //     hash: "C35404333376CD5FC1AFD57903061394F0333CF6B8047E9A693E0E59350AE695",
    //   });
    //   console.log(res.txResponse?.events);
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

    // test("query wasm contract 1155 state", async () => {
    //   const user = (await getUser(WalletUsers.alice).getAccounts())[0].address;
    //   const contractAddress =
    //     "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    //   const tokens = [
    //     "80e3ff80e4a804364749709e100d358f",
    //     "d89fc11cef9424891fdf9ae173f88a6e",
    //   ];
    //   const msg = {
    //     // balance: {
    //     //   owner: user,
    //     //   token_id: tokens[0],
    //     // },
    //     // tokens: {
    //     //   owner: user,
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

    // test("query dispute list", async () => {
    //   const res = await queryClient.ixo.claims.v1beta1.disputeList();
    //   console.log(res.disputes);
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
    //   console.log(res.grants);
    //   if (res.grants.length > 0)
    // console.log(
    //   res.grants.map((g) => {
    //     const auth = createRegistry().decode(g.authorization!);
    //     return auth.constraints || auth;
    //   })
    // );
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

    // test("query iid doc", async () => {
    //   const did: string =
    //     "did:x:zQ3shUQYdonbR4CaaWBmfYMHND7KEXY3tEStFndNGWp4njQ54";
    //   // const did = getUser(WalletUsers.tester).did;
    //   const res = await queryClient.ixo.iid.v1beta1.iidDocument({
    //     id: did,
    //   });
    //   console.log(res.iidDocument);
    //   expect(res).toBeTruthy();
    // });

    // test("Query module params", async () => {
    //   const res = await queryClient.ixo.entity.v1beta1.params();
    //   console.log(res.params);
    //   expect(res).toBeTruthy();
    // });
  });
