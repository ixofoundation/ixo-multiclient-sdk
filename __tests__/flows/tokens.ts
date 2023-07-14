import {
  chunkArray,
  generateNewWallet,
  getUser,
  saveFileToPath,
  testMsg,
  utils,
} from "../helpers/common";
import * as Token from "../modules/Token";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";
import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";
import { dids } from "../setup/constants";
import axios from "axios";

export const tokenBasic = () =>
  describe("Testing the Token module", () => {
    let name = "TEST";
    let description = "Test credits";
    let cap = 2000000;

    // Create token class
    let tokenClass = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity token class", async () => {
      const res = await Entity.CreateEntity("protocol");
      tokenClass = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ tokenClass });
      return res;
    });

    let contractAddress1155 =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    testMsg("/ixo.token.v1beta1.MsgCreateToken", async () => {
      const res = await Token.CreateToken(name, description, cap, tokenClass);
      contractAddress1155 = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress1155 });
      return res;
    });

    let index = "1";
    let amount = 50;
    let collectionDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14"; // Did of collection
    let nftDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14"; // Did of entity to map token to
    let tokenData = [
      {
        uri: "https://media.makeameme.org/created/haha-you-were-a3866a4349.jpg",
        encrypted: false,
        proof: "proof",
        type: "application/json", //media type value should always be "application/json"
        id: nftDid,
      },
    ];

    let tokenId = "db03fa33c1e2ca35794adbb14aebb153";
    testMsg("/ixo.token.v1beta1.MsgMintToken", async () => {
      const res = await Token.MintToken(contractAddress1155, [
        {
          name,
          index,
          amount,
          collection: collectionDid,
          tokenData,
        },
      ]);
      tokenId = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ tokenId });
      return res;
    });

    testMsg("/ixo.token.v1beta1.MsgTransferToken", () =>
      Token.TransferToken([
        {
          id: tokenId,
          amount: 1,
        },
      ])
    );

    testMsg("/ixo.token.v1beta1.MsgCancelToken", () =>
      Token.CancelToken([
        {
          id: tokenId,
          amount: 1,
        },
      ])
    );

    testMsg("/ixo.token.v1beta1.MsgRetireToken", () =>
      Token.RetireToken([
        {
          id: tokenId,
          amount: 1,
        },
      ])
    );

    // testMsg("/ixo.token.v1beta1.MsgPauseToken", () =>
    //   Token.PauseToken(contractAddress1155, false)
    // );

    // testMsg("/ixo.token.v1beta1.MsgStopToken", () =>
    //   Token.StopToken(contractAddress1155)
    // );

    let authzIndex = "2";
    testMsg("/cosmos.authz.v1beta1.MsgGrant mint token", () =>
      Token.MsgGrantContract(
        contractAddress1155,
        name,
        authzIndex,
        collectionDid,
        amount,
        tokenData
      )
    );

    testMsg("/cosmos.authz.v1beta1.MsgExec mint token", () =>
      Token.MsgExecContract(contractAddress1155, [
        {
          name,
          index: authzIndex,
          amount,
          collection: collectionDid,
          tokenData,
        },
      ])
    );

    // testMsg("/cosmos.authz.v1beta1.MsgRevoke mint token", () =>
    //   Token.MsgRevokeContract()
    // );
  });

// ------------------------------------------------------------
// flow to run after devnet was reset, please dont change
// ------------------------------------------------------------
export const supamotoTokens = () =>
  describe("Testing the Supamoto Tokens flow", () => {
    // Set tester as root ecs user
    beforeAll(() =>
      Promise.all([
        generateNewWallet(
          WalletUsers.tester,
          process.env.ASSERT_USER_CARBON_ORACLE
        ),
      ])
    );

    let name = "CARBON";
    let description = "Carbon Credit";
    let cap = 0; // no cap

    let contractAddress1155 =
      "ixo1q85duf4uqqn97j2y52pep65mukux3edypm7ns2upfgnrg6pnsj0sj2hv3e";
    testMsg("/ixo.token.v1beta1.MsgCreateToken", async () => {
      const res = await Token.CreateToken(
        name,
        description,
        cap,
        dids.carbonAsset
      );
      contractAddress1155 = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress1155 });
      return res;
    });

    // let index = "1";
    // let amount = 265;
    // // Did of collection (supamotoEntitiesFlow protocolAssetDid)
    // let collectionDid = "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258";
    // // Did of entity to map token to (supamotoEntitiesFlow first nft created)
    // let nftDid = "did:ixo:entity:75d738bbf9a61ec05acc16625d70a82c"; //Cookstove
    // const getTokenData = (nftDidId: string) => [
    //   {
    //     uri: "https://media.makeameme.org/created/haha-you-were-a3866a4349.jpg",
    //     encrypted: false,
    //     proof: "proof",
    //     type: "application/json", //media type value should always be "application/json"
    //     id: nftDidId,
    //   },
    // ];

    // let tokenId = "b38e39af5bafe82e4329e630b4439e08";
    // testMsg("/ixo.token.v1beta1.MsgMintToken", async () => {
    //   const res = await Token.MintToken(contractAddress1155, [
    //     {
    //       name,
    //       index,
    //       amount,
    //       collection: collectionDid,
    //       tokenData: getTokenData(nftDid),
    //     },
    //   ]);
    //   tokenId = utils.common.getValueFromEvents(res, "wasm", "token_id");
    //   console.log({ tokenId });
    //   return res;
    // });

    // testMsg("/ixo.token.v1beta1.MsgTransferToken", () =>
    //   Token.TransferToken([
    //     {
    //       id: tokenId,
    //       amount: 1,
    //     },
    //   ])
    // );

    // testMsg("/ixo.token.v1beta1.MsgCancelToken", () =>
    //   Token.CancelToken([
    //     {
    //       id: tokenId,
    //       amount: 2,
    //     },
    //   ])
    // );

    // testMsg("/ixo.token.v1beta1.MsgRetireToken", () =>
    //   Token.RetireToken([
    //     {
    //       id: tokenId,
    //       amount: 3,
    //     },
    //   ])
    // );

    // few more mint tokens
    // const nfts = [
    //   "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
    //   "did:ixo:entity:75d738bbf9a61ec05acc16625d70a82c",
    //   "did:ixo:entity:237cb945b1368ed450ec67c7c4ac56ac",
    //   "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a",
    //   "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258",
    //   "did:ixo:entity:7b40f2500d4c89997f8389c5f2318cdb",
    // ];

    // nfts.map((nft, i) => [
    //   testMsg("/ixo.token.v1beta1.MsgMintToken", () =>
    //     Token.MintToken(contractAddress1155, [
    //       {
    //         name,
    //         index: (i + 3).toString(),
    //         amount,
    //         collection: collectionDid,
    //         tokenData: getTokenData(nft),
    //       },
    //     ])
    //   ),
    //   testMsg("/cosmos.authz.v1beta1.MsgGrant mint token", () =>
    //     Token.MsgGrantContract(
    //       contractAddress1155,
    //       name,
    //       (i + 20).toString(),
    //       collectionDid,
    //       amount,
    //       getTokenData(nft)
    //     )
    //   ),
    // ]);
  });

// ------------------------------------------------------------
// flow to farm nifty tokens and redistribute to
// make all have 2000 carbon credits
// ------------------------------------------------------------
export const supamotoTokensFarm = () =>
  describe("Testing the Supamoto Tokens flow", () => {
    // Set tester as root ecs user
    beforeAll(() =>
      Promise.all([generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS)])
    );

    const blocksyncUrl = "https://blocksync.ixo.earth";

    testMsg("Farm tokens", async () => {
      const tester = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;

      const collections = await axios.get(
        `${blocksyncUrl}/api/entity/collectionsByOwnerAddress/${tester}`
      );
      const allEntities = collections.data[0].entities;

      const farm = false;
      const topup = false;
      const chunkSize = 40;
      let totalAmounts: number[] = [];
      let index = 0;

      const userTokensRes = await axios.get(
        `${blocksyncUrl}/api/token/byAddress/${tester}`
      );
      let userTokens = Object.entries(userTokensRes.data.CARBON?.tokens || {});

      for (const entities of chunkArray(allEntities, chunkSize)) {
        const farmBatches: any[] = [];
        const topupBatches: any[] = [];

        for (const entity of entities as any) {
          index++;
          // if (index > 7) break;
          // console.log("farming for entity", index);

          const adminAddress = entity.accounts[0].address;
          const tokensRes = await axios.get(
            `${blocksyncUrl}/api/token/byAddress/${adminAddress}`
          );
          const tokens = Object.entries(tokensRes.data.CARBON?.tokens || {});
          if (!tokens || !tokens.length) continue;

          const totalAmount = tokens.reduce(
            (r: any, t: any) => r + (t[1].amount ?? 0),
            0
          ) as number;
          totalAmounts.push(totalAmount);

          if (farm && totalAmount > 2000) {
            let amountToFarm = totalAmount - 2000;
            const tokensToFarm: any[] = [];
            tokens.forEach((tokenEntry) => {
              if (amountToFarm <= 0) return;
              const tokenId = tokenEntry[0];
              const tokenAmount = (tokenEntry[1] as any).amount;
              if (tokenAmount <= 0) return;
              const amountToTransfer = Math.min(amountToFarm, tokenAmount);
              tokensToFarm.push({ id: tokenId, amount: amountToTransfer });
              amountToFarm -= amountToTransfer;
            });
            // console.log({ entityId: entity.id, tokensToFarm, totalAmount });
            farmBatches.push({
              entityDid: entity.id,
              entityAdminAddress: adminAddress,
              tokens: tokensToFarm,
            });
          }

          if (topup && totalAmount < 2000) {
            let amountToTopup = 2000 - totalAmount;
            const tokensToTopup: any[] = [];
            if (!userTokens || !userTokens.length) continue;
            userTokens.forEach((tokenEntry) => {
              if (amountToTopup <= 0) return;
              const tokenId = tokenEntry[0];
              const tokenAmount = (tokenEntry[1] as any).amount;
              if (tokenAmount <= 0) return;
              const amountToTransfer = Math.min(amountToTopup, tokenAmount);
              tokensToTopup.push({ id: tokenId, amount: amountToTransfer });
              amountToTopup -= amountToTransfer;
            });
            // console.log({ entityId: entity.id, tokensToTopup, totalAmount });
            userTokens = userTokens
              .map((tokenEntry) => {
                const tokenInBatch = tokensToTopup.find(
                  (t) => t.id == tokenEntry[0]
                );
                if (!tokenInBatch) return tokenEntry;
                if ((tokenEntry[1] as any).amount == tokenInBatch.amount)
                  return null;
                else
                  return [
                    tokenEntry[0],
                    {
                      amount:
                        (tokenEntry[1] as any).amount - tokenInBatch.amount,
                    },
                  ];
              })
              .filter((t) => t != null) as any[];

            topupBatches.push({
              entityDid: entity.id,
              entityAdminAddress: adminAddress,
              tokens: tokensToTopup,
            });
          }
        }

        if (farmBatches.length != 0) {
          try {
            console.log("farmBatches length", farmBatches.length);
            const res = await Token.MsgGrantandExecuteTokenTransfer(
              farmBatches
            );
            if (res.code != 0) throw new Error(res.rawLog);
          } catch (error) {
            console.log("farmBatches error", error.message);
          }
        }
        if (topupBatches.length != 0) {
          try {
            console.log("topupBatches length", topupBatches.length);
            const res = await Token.TransferTokenBatch(topupBatches);
            if (res.code != 0) throw new Error(res.rawLog);
          } catch (error) {
            console.log("topupBatches error", error.message);
          }
        }
      }

      console.log("Create file to save tokens");
      saveFileToPath(
        ["documents", "emerging", "tokenData.json"],
        JSON.stringify({ totalAmounts }, null, 2)
      );

      return true as any;
    });
  });
