import {
  chunkArray,
  customQueries,
  getFileFromPath,
  saveFileToPath,
  testMsg,
  utils,
} from "../../helpers/common";
import * as Entity from "../Entity";
import { EcsCredentialsWorkerUrl, chainNetwork, dids } from "../constants";
import { setAndLedgerUser } from "../helpers";
import axios from "axios";
import { cookstoveIds } from "./stoves";

export const cookstovesFlow = () =>
  describe("Testing the Supamoto nfts flow", () => {
    setAndLedgerUser(process.env.ROOT_ECS!);

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetsFailed: any[] = [];
    let assetInstanceDids: { id: number; did: string }[] = [];
    let index = 1;

    cookstoveIds
      .map((c) => c.id)
      .map((id, i) =>
        testMsg(
          `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
          async () => {
            console.log(
              `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index} (array index: ${i}) for id:${id}`
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
              ] = `https://app.emerging.eco/devices/${id}`;

              // Create Credential, ecs must issue cert for each asset, so ecs creds worker
              const resCreds = await axios.post(
                EcsCredentialsWorkerUrl + "credentials/create",
                file,
                {
                  headers: {
                    Authorization: process.env.ECS_CREDENTIAL_WORKER_AUTH,
                  },
                }
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

              const res = await Entity.CreateEntityAssetSupamotoInstance(
                dids.assetCollection,
                [{ deviceId: id, index, deviceCreds }],
                dids.emergingDao
              );
              const nftAssetDid = utils.common.getValueFromEvents(
                res,
                "wasm",
                "token_id"
              );
              console.log({ nftAssetDid });
              if (!nftAssetDid) throw new Error("error creating nft asset");

              index++;
              assetInstanceDids.push({ id: id, did: nftAssetDid });
              return "res" as any;
            } catch (error) {
              assetsFailed.push({ id });
              throw new Error(error);
            }
          }
        )
      );

    test("Logging all nft assets created", async () => {
      console.log(
        "Create file to save assetInstanceDids that was successfully and failed"
      );
      saveFileToPath(
        ["documents", "emerging", "cookstoves_dids.json"],
        JSON.stringify({ assetInstanceDids, assetsFailed }, null, 2)
      );
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
            const res = await Entity.CreateEntityAssetSupamotoInstance(
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
      console.dir(assetsFailed, { depth: null });
      expect(true).toBeTruthy();
    });
  });
