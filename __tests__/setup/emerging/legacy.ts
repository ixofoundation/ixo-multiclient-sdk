import {
  customQueries,
  generateNewWallet,
  getFileFromPath,
  ixo,
  saveFileToPath,
  testMsg,
  utils,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import * as Iid from "../../modules/Iid";
import * as Entity from "./Entity";
import * as Entity1 from "../Entity";
import { EcsCredentialsWorkerUrl, chainNetwork, dids } from "../constants";
import {
  uploadAllToCellnodeWeb3,
  uploadAllToCellnodeWeb3Claims,
} from "../helpers";
import {
  setup_asset_collection_constants,
  setup_protocol_legacy_cooking_constants,
} from "./legacy-constants";
import axios from "axios";

export const cookstovesExtra = () =>
  describe("Testing the iid module", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    testMsg("Add linkedEntity to Project", async () => {
      const resource = ixo.iid.v1beta1.LinkedEntity.fromPartial({
        id: dids.ecsDao,
        type: "dao",
        relationship: "implementation",
        service: "ixo",
      });
      return await Iid.AddLinkedEntity(dids.ecsProject, resource);
    });

    testMsg("Add linkedEntity to Collection", async () => {
      const resource = ixo.iid.v1beta1.LinkedEntity.fromPartial({
        id: dids.ecsProject,
        type: "project",
        relationship: "collection",
        service: "ixo",
      });
      return await Iid.AddLinkedEntity(dids.assetCollection, resource);
    });

    testMsg("Add Project Doc to Project", async () => {
      const resource = ixo.iid.v1beta1.LinkedResource.fromPartial({
        type: "ProjectCredential",
        id: "{id}#projectCredential",
        description: "Project Document",
        mediaType: "application/pdf",
        serviceEndpoint:
          "https://platform.sustain-cert.com/public-project/2710",
        proof: "",
        encrypted: "false",
        right: "",
      });
      return await Iid.AddLinkedResource(dids.ecsProject, resource);
    });

    testMsg("Remove Project Doc from Collection", async () => {
      return await Iid.DeleteLinkedResource(
        dids.assetCollection,
        "{id}#projectCredential"
      );
    });

    testMsg("Add Project as Collection Parent in Context", async () => {
      const context = ixo.iid.v1beta1.Context.fromPartial({
        key: "class",
        val: dids.ecsProject,
      });
      const res = await Iid.DeleteIidContext(dids.assetCollection, context.key);
      return await Iid.AddIidContext(dids.assetCollection, context);
    });
  });

export const emergingLegacyProtocolsFlow = () =>
  describe("Flow for creating Emerging Protocol (dao/protocol/oracle)", () => {
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.ROOT_EMERGING!),
        generateNewWallet(WalletUsers.alice, process.env.ROOT_ED_EMERGING!),
      ])
    );

    // =============================== START
    let protCleanCookingDid: string;
    testMsg("Create legacy cooking protocol", async () => {
      const daoConst = setup_protocol_legacy_cooking_constants();

      let protCleanCookingLinkedResourcesUploaded =
        await uploadAllToCellnodeWeb3(daoConst.linkedResources);
      console.log({ protCleanCookingLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity1.CreateEntity(
        daoConst.entity,
        protCleanCookingLinkedResourcesUploaded,
        true
      );
      protCleanCookingDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ protCleanCookingDid });

      return res;
    });
    // =============================== END
  });

export const legacyCollectionFlow = () =>
  describe("Flow for creating ECS entities (dao/protocol/oracle)", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    // =============================== START
    let assetCollectionDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const collectionConst = setup_asset_collection_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        collectionConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      let linkedClaimsUploaded = await uploadAllToCellnodeWeb3Claims(
        collectionConst.linkedClaims
      );
      console.log({ linkedClaimsUploaded });

      // Create the Entity
      const res = await Entity.CreateSupamotoAssetCollection(
        collectionConst.entity,
        linkedResourcesUploaded,
        linkedClaimsUploaded
      );
      assetCollectionDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ assetCollectionDid });

      return res;
    });
    // =============================== END

    // Add the web dashboard linkedResource as need did
    testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", () =>
      Iid.AddLinkedResource(
        assetCollectionDid,
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#collectionDashboard",
          type: "WebDashboard",
          description: "Collection Dashboard",
          mediaType: "application/html",
          serviceEndpoint: "emerging:/collections/" + assetCollectionDid,
          proof: "",
          encrypted: "false",
          right: "#apitoken",
        })
      )
    );
  });

export const legacyCookstovesFlow = () =>
  describe("Testing the Supamoto nfts flow", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetsFailed: any[] = [];
    let assetInstanceDids: { id: string; did: string }[] = [];
    let index = 1961;

    // // Helper to check for duplicates with existing collections
    // testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset instance", async () => {
    //   const stovesCollection = require("../../../assets/documents/emerging/stoves_legacy_collection.json");
    //   const stoveIds = stovesCollection.map((e) => e.externalId);

    //   // check for any duplciates with legacyCookstoveIds
    //   const duplicateStoveIds = stoveIds.filter((id) =>
    //     legacyCookstoveIds.includes(id)
    //   );
    //   console.log("stoveIds length: ", stoveIds.length);
    //   console.log("duplicateStoveIds length: ", duplicateStoveIds.length);

    //   return true as any;
    // });

    legacyCookstoveIds.map((id, i) =>
      testMsg(
        `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
        async () => {
          console.log(
            `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index} (array index: ${i}) for id:${id}`
          );
          try {
            const file = JSON.parse(
              getFileFromPath(
                ["documents", "test-supamoto-device-credential-legacy.jsonld"],
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
            if (!deviceCreds) throw new Error("error saving device creds file");

            const res = await Entity.CreateEntityAssetSupamotoInstance(
              dids.legacyCollection,
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
        ["documents", "emerging", "unconnected_cookstoves_dids.json"],
        JSON.stringify({ assetInstanceDids, assetsFailed }, null, 2)
      );
      expect(true).toBeTruthy();
    });
  });

// list of Supamoto Unconnected Collection stoves
export const legacyCookstoveIds = [
  "310000051",
  "310000052",
  "310000348",
  "310000701",
  "310000847",
  "310000849",
];
// 31 duplicate stoves that is in genesis collection
export const legacyCookstoveDuplicates = [
  "202200009",
  "202200013",
  "202200096",
];
