import {
  chunkArray,
  customQueries,
  getFileFromPath,
  testMsg,
  utils,
} from "../../helpers/common";
import { cookstoveIds } from "./constants";
import * as Entity1 from "../../modules/Entity";
import { chainNetwork } from "../index.setup.spec";
import { dids } from "../constants";
import { setAndLedgerUser } from "../helpers";

export const cookstovesFlow = () =>
  describe("Testing the Supamoto nfts flow", () => {
    setAndLedgerUser(process.env.ROOT_ECS!);

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetsFailed: number[] = [];
    let assetInstanceDids: { id: number; did: string }[] = [];
    let index = 1;

    cookstoveIds.map((id) =>
      testMsg(
        `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
        // TODO ecs must issue cert for each asset
        async () => {
          console.log(
            `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index} for id:${id}`
          );
          try {
            let deviceCreds =
              "bafkreiab2wqh4x76tgh4v24ahkcw5nfddoug7df3ybnnl7t7v5s6skzqdi";
            // const file = JSON.parse(
            //   getFileFromPath(
            //     ["documents", "test-supamoto-device-credential.jsonld"],
            //     "ascii"
            //   )
            // );
            // let buff = Buffer.from(JSON.stringify(file));
            // deviceCreds = (
            //   await customQueries.cellnode.uploadWeb3Doc(
            //     utils.common.generateId(12),
            //     "application/ld+json",
            //     buff.toString("base64"),
            //     undefined,
            //     chainNetwork
            //   )
            // ).cid;

            // console.log({ deviceCreds });
            // if (!deviceCreds) throw new Error("error saving device creds file");

            const res = await Entity1.CreateEntityAssetSupamotoInstance(
              dids.assetCollection,
              [{ deviceId: id, index, deviceCreds }],
              dids.emergingDao
            );
            const nftAssetDid = utils.common.getValueFromEvents(
              res,
              "wasm",
              "token_id"
            );
            if (!nftAssetDid) throw new Error("error creating nft asset");
            index++;
            assetInstanceDids.push({ id: id, did: nftAssetDid });
            return res;
          } catch (error) {
            assetsFailed.push(id);
            console.log({ assetsFailed });
            throw new Error(error);
          }
        }
      )
    );

    test("Logging all nft assets created", async () => {
      console.log("Logging assetInstanceDids that was successfully created:");
      console.log(assetInstanceDids);
      console.log("Logging cookstove ids that failed upload:");
      console.log(assetsFailed);
      expect(true).toBeTruthy();
    });
  });

export const cookstovesFlowDevnet = () =>
  describe("Testing the Supamoto nfts flow devnet", () => {
    setAndLedgerUser(process.env.ROOT_ECS!);

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetsFailed: number[] = [];
    let index = 1;

    const chunkSize = 100;
    chunkArray(cookstoveIds, chunkSize).map((ids) =>
      testMsg(
        `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
        async () => {
          console.log(
            `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index}-${
              index + chunkSize - 1
            }`
          );
          console.log({ ids });
          try {
            let deviceCreds =
              "bafkreiab2wqh4x76tgh4v24ahkcw5nfddoug7df3ybnnl7t7v5s6skzqdi";

            const res = await Entity1.CreateEntityAssetSupamotoInstance(
              dids.assetCollection,
              ids.map((id, ind) => ({
                deviceId: id,
                index: index + ind,
                deviceCreds,
              })),
              dids.emergingDao
            );

            index = index + chunkSize;
            return res;
          } catch (error) {
            assetsFailed = assetsFailed.concat(ids);
            throw new Error(error);
          }
        }
      )
    );

    test("Logging all nft assets created", async () => {
      console.log("Logging cookstove ids that failed upload:");
      console.log(assetsFailed);
      expect(true).toBeTruthy();
    });
  });
