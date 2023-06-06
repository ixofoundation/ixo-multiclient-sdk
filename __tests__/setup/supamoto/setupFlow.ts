import {
  chunkArray,
  customQueries,
  getFileFromPath,
  testMsg,
  utils,
} from "../../helpers/common";
import * as Entity1 from "../../modules/Entity";
import { chainNetwork } from "../index.setup.spec";
import { EcsCredentialsWorkerUrl, dids } from "../constants";
import { setAndLedgerUser } from "../helpers";
import axios from "axios";
import { cookstoveIds } from "./stoves";

export const cookstovesFlow = () =>
  describe("Testing the Supamoto nfts flow", () => {
    setAndLedgerUser(process.env.ROOT_ECS!);

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetsFailed: number[] = [];
    let assetInstanceDids: { id: number; did: string }[] = [];
    let index = 1;

    cookstoveIds
      .map((c) => c.id)
      .map((id) =>
        testMsg(
          `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
          async () => {
            console.log(
              `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index} for id:${id}`
            );
            try {
              const file = JSON.parse(
                getFileFromPath(
                  ["documents", "test-supamoto-device-credential.jsonld"],
                  "ascii"
                )
              );
              file["credential"]["credentialSubject"][
                "id"
              ] = `https://registry.emerging.eco/device/?id=${id}`;

              // Create Credential, ecs must issue cert for each asset, so ecs creds worker
              const resCreds = await axios.post(
                EcsCredentialsWorkerUrl + "credentials/create",
                file
              );
              if (![200, 201].includes(resCreds.status) || !resCreds.data)
                throw new Error("error creating device creds");

              // Upload credential to web3 storage
              const deviceCreds = (
                await customQueries.cellnode.uploadWeb3Doc(
                  `Supamoto Asset Device Creds: ${chainNetwork} ${id}`,
                  "application/ld+json",
                  Buffer.from(JSON.stringify(resCreds.data)).toString("base64"),
                  undefined,
                  chainNetwork
                )
              ).cid;

              console.log({ deviceCreds });
              if (!deviceCreds)
                throw new Error("error saving device creds file");

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
              return "res" as any;
            } catch (error) {
              assetsFailed.push(id);
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
          try {
            const res = await Entity1.CreateEntityAssetSupamotoInstance(
              dids.assetCollection,
              ids.map((e, ind) => ({
                deviceId: e.id,
                index: index + ind,
                deviceCreds: e.creds,
              })),
              dids.emergingDao
            );

            index = index + chunkSize;
            return res;
          } catch (error) {
            assetsFailed = assetsFailed.concat(ids.map((i) => i.id));
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
