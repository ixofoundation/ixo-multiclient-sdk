import {
  chunkArray,
  customQueries,
  getFileFromPath,
  saveFileToPath,
  testMsg,
  utils,
} from "../../helpers/common";
import * as EntityUmuzi from "./Entity";
import { UmuziCredentialsWorkerUrl, dids, chainNetwork } from "../constants";
import { setAndLedgerUser } from "../helpers";
import axios from "axios";
import { learnershipIds } from "./learnerships";

export const learnershipsFlow = () =>
  describe("Testing the Umuzi nfts flow", () => {
    setAndLedgerUser(process.env.ROOT_UMUZI!);

    // Create a batch of Asset entities for the individual Umuzi assets
    let assetsFailed: any[] = [];
    let assetInstanceDids: { id: string; did: string }[] = [];
    let index = 1;

    learnershipIds
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
                  ["documents", "test-umuzi-learnership-credential.jsonld"],
                  "ascii"
                )
              );
              file["credential"]["credentialSubject"][
                "id"
              ] = `https://app.emerging.eco/learnerships/${id}`;

              // Create Credential, umuzi must issue cert for each asset, so umuzi creds worker
              const resCreds = await axios.post(
                UmuziCredentialsWorkerUrl + "credentials/create",
                file,
                {
                  headers: {
                    Authorization: process.env.UMUZI_CREDENTIAL_WORKER_AUTH,
                  },
                }
              );
              if (![200, 201].includes(resCreds.status) || !resCreds.data)
                throw new Error("error creating learnership creds");

              // Upload credential to web3 storage
              const deviceCreds = (
                await customQueries.cellnode.uploadWeb3Doc(
                  `Umuzi Learnership Creds: ${chainNetwork} ${id}`,
                  "application/ld+json",
                  Buffer.from(JSON.stringify(resCreds.data)).toString("base64"),
                  undefined,
                  chainNetwork
                )
              ).cid;

              console.log({ deviceCreds });
              if (!deviceCreds)
                throw new Error("error saving device creds file");

              const res = await EntityUmuzi.CreateEntityAssetUmuziInstance(
                dids.umuziAssetCollection,
                [{ deviceId: id, index, deviceCreds }],
                dids.yomaDao
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
        ["documents", "umuzi", "learnerships_dids.json"],
        JSON.stringify({ assetInstanceDids, assetsFailed }, null, 2)
      );
      expect(true).toBeTruthy();
    });
  });

export const learnershipsFlowDevnet = () =>
  describe("Testing the Umuzi nfts flow devnet", () => {
    setAndLedgerUser(process.env.ROOT_UMUZI!);

    // Create a batch of Asset entities for the individual Umuzi assets
    let assetsFailed: string[] = [];
    let index = 1;

    const chunkSize = 100;
    chunkArray(learnershipIds, chunkSize).map((ids) =>
      testMsg(
        `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
        async () => {
          console.log(
            `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index}-${
              index + chunkSize - 1
            }`
          );
          try {
            const res = await EntityUmuzi.CreateEntityAssetUmuziInstance(
              dids.umuziAssetCollection,
              ids.map((e, ind) => ({
                deviceId: e.id,
                index: index + ind,
                deviceCreds: e.creds,
              })),
              dids.yomaDao
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
      console.log("Logging learnership ids that failed upload:");
      console.dir(assetsFailed, { depth: null });
      expect(true).toBeTruthy();
    });
  });
