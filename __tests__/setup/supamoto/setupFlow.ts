import {
  customQueries,
  generateNewWallet,
  getFileFromPath,
  sendFromFaucet,
  testMsg,
  utils,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import * as IidMain from "../../modules/Iid";
import { cookstoveIds, setup_dao_constants } from "./constants";
import * as Entity from "../Entity";
import * as Entity1 from "../../modules/Entity";
import { chainNetwork } from "../index.setup.spec";
import { LinkedResourcesUploaded, dids } from "../constants";

export const supamotoFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
    // ===============================================================
    // Set Testers mnemonic to env variable and ledger root user did
    // ===============================================================

    // below test can fail as user might already be ledgered, that is ok
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.TESTER_MNEMONIC)
    );

    // @ts-ignore
    if (chainNetwork != "mainnet") {
      // Send from faucet for devnet/testnet
      sendFromFaucet(WalletUsers.tester);
    }
    testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
      IidMain.CreateIidDoc(WalletUsers.tester)
    );

    // ===============================================================
    // Create Entities
    // ===============================================================
    // You can create all your entities below, you can just copy a whole entity creation and make
    // as many as you want, just ensure you have all the groups needed that will be used and that for each
    // entity there is a corresponding exported setup_{name}_constants that you can use for the entity

    // =============================== START
    let daoDid: string;
    let adminAccount: string;
    let linkedResourcesUploaded: LinkedResourcesUploaded = [];
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_dao_constants();

      // Uploading linkedResources
      for (const { name, type, storage, json } of daoConst.linkedResources) {
        if (storage === "cellnode") {
          const cellnode = await customQueries.cellnode.uploadPublicDoc(
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          linkedResourcesUploaded.push({
            name,
            cid: cellnode.key,
            type,
            storage,
          });
        } else if (storage === "ipfs") {
          const web3 = await customQueries.cellnode.uploadWeb3Doc(
            utils.common.generateId(12),
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          linkedResourcesUploaded.push({
            name,
            cid: web3.cid,
            type,
            storage,
          });
        }
      }
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        linkedResourcesUploaded
      );
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      adminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ daoDid, adminAccount });

      return res;
    });
    // =============================== END
  });

export const cookstovesFlow = () =>
  describe("Testing the Supamoto nfts flow", () => {
    // ===============================================================
    // Set Testers mnemonic to env variable and ledger root user did
    // ===============================================================

    // below test can fail as user might already be ledgered, that is ok
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.TESTER_MNEMONIC),
        generateNewWallet(WalletUsers.alice, process.env.ED_KEYS_MNEMONIC),
      ])
    );

    // @ts-ignore
    if (chainNetwork != "mainnet") {
      // Send from faucet for devnet/testnet
      sendFromFaucet(WalletUsers.tester);
    }
    testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
      IidMain.CreateIidDoc(WalletUsers.tester)
    );

    // ===============================================================
    // Create all assets
    // ===============================================================

    // Create top-level class dao
    let daoDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity1.CreateEntity("dao");
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ daoDid });
      return res;
    });

    // Create dao entity which is credential issuer
    let daoCredsIssuerDid = "did:ixo:entity:4d94f9b6078432648a755203eed50644";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity1.CreateEntity("dao", [
        { key: "class", val: daoDid },
      ]);
      daoCredsIssuerDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ daoCredsIssuerDid });
      return res;
    });

    // Save related images WEB3
    let supaLogo =
      "https://bafkreifkl6w55nasgqid22d2cqyxccjktbciefzmiqvcudlq3eoer2mzhi.ipfs.w3s.link";
    let supaNftImage =
      "https://bafkreideszg4fdha4tf7ldpecltxbyxbnapb663tkuksk2vcczkzkxppaa.ipfs.w3s.link";
    let ecsLogo =
      "https://bafkreigkajsskkswn5jwcmfxhn3rqc7gevzgroacq7ygfz6mzkgo72ej4i.ipfs.w3s.link";
    test("Saving device creds", async () => {
      supaLogo = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "image/png",
          getFileFromPath(["documents", "supamoto_logo.png"]),
          undefined,
          chainNetwork
        )
      ).url;
      console.log({ supaLogo });
      supaNftImage = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "image/png",
          getFileFromPath(["documents", "supamoto-nft-image.png"]),
          undefined,
          chainNetwork
        )
      ).url;
      console.log({ supaNftImage });
      ecsLogo = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "image/png",
          getFileFromPath(["documents", "ecs_logo_flame only.png"]),
          undefined,
          chainNetwork
        )
      ).url;
      console.log({ ecsLogo });
      expect(ecsLogo).toBeTruthy();
    });

    // Save supamoto credsPdf WEB3
    let projectCertDoc =
      "bafkreiefafy2u5df4l52yb7vvz32hxrxhcceyaq3z7xww2qlz2fp3ppeum";
    test("Saving projectCertDoc", async () => {
      projectCertDoc = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "application/pdf",
          getFileFromPath([
            "documents",
            "MimiMoto report Aprovecho Research Center March 2017.pdf",
          ]),
          undefined,
          chainNetwork
        )
      ).cid;
      console.log({ projectCertDoc });
      expect(projectCertDoc).toBeTruthy();
    });

    // Save supamoto profile WEB3
    let profile = "4kavdefz12wlefltwxr";
    test("Saving profile", async () => {
      const file = JSON.parse(
        getFileFromPath(["documents", "test-supamoto-profile.jsonld"], "ascii")
      );
      file["image"] = supaNftImage;
      file["logo"] = supaLogo;
      let buff = Buffer.from(JSON.stringify(file));
      profile = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          buff.toString("base64"),
          undefined,
          chainNetwork
        )
      ).key;
      console.log({ profile });
      expect(profile).toBeTruthy();
    });

    // Save supamoto projectCreds WEB3
    let projectCreds =
      "bafkreih2oq64xhbgp7vyarcrgw6dcofms4zdmjqms6vnfx32vzwglj6nd4";
    test("Saving projectCert", async () => {
      const file = JSON.parse(
        getFileFromPath(
          ["documents", "test-supamoto-projectCredential.jsonld"],
          "ascii"
        )
      );
      file["issuer"] = daoCredsIssuerDid;
      file["credentialSubject"]["project"]["linkedResources"] = file[
        "credentialSubject"
      ]["project"]["linkedResources"].map((lr: any) => ({
        ...lr,
        id: `https://ipfs.io/ipfs/${projectCertDoc}`,
        proof: projectCertDoc,
      }));
      let buff = Buffer.from(JSON.stringify(file));
      projectCreds = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "application/ld+json",
          buff.toString("base64"),
          undefined,
          chainNetwork
        )
      ).cid;
      console.log({ projectCreds });
      expect(projectCreds).toBeTruthy();
    });

    // Save supamoto tags CELLNODE
    let tags = "klfh2wqlw9mleflu0u6";
    test("Saving tags", async () => {
      tags = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          getFileFromPath(["documents", "test-supamoto-tags.jsonld"]),
          undefined,
          chainNetwork
        )
      ).key;
      console.log({ tags });
      expect(tags).toBeTruthy();
    });

    // Save supamoto tokenMetadata WEB3 emerging account
    let tokenMetadata =
      "bafkreie7kbpppoizx7anxxufblfkdfmuy27mppuz2hq4a4uouudweb2sm4";
    test("Saving tokenMetadata", async () => {
      const file = JSON.parse(
        getFileFromPath(
          ["documents", "test-supamoto-token-metadata.json"],
          "ascii"
        )
      );
      file["image"] = supaLogo;
      file["properties"]["icon"] = supaLogo;
      let buff = Buffer.from(JSON.stringify(file));
      tokenMetadata = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "application/ld+json",
          buff.toString("base64"),
          undefined,
          chainNetwork
        )
      ).cid;
      console.log({ tokenMetadata });
      expect(tokenMetadata).toBeTruthy();
    });

    // TODO need protocol to add as template id
    // Save supamoto claims CELLNODE
    let claims = "gf9m2u5ds6tleflu4a8";
    test("Saving claims", async () => {
      claims = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          getFileFromPath(["documents", "test-supamoto-claims.jsonld"]),
          undefined,
          chainNetwork
        )
      ).key;
      console.log({ claims });
      expect(claims).toBeTruthy();
    });

    // supamoto-asset-collection
    let assetCollectionDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset class", async () => {
      const res = await Entity1.CreateEntityAssetSupamoto({
        inheritEntityDid: dids.cookstoveAssetProtocol,
        profile,
        // page,
        // creator,
        // administrator,
        tags,
        claims,
        tokenMetadata,
        projectCert: projectCreds,
        oracles: [dids.prospectOracle, dids.scalnyxOracle],
        relayerDid: dids.emergingDao,
      });
      assetCollectionDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ assetCollectionDid });
      return res;
    });

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetInstanceDids: string[] = [];

    cookstoveIds.map((id, i) =>
      testMsg(
        `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${
          i + 1
        } for id:${id}`,
        async () => {
          let deviceCreds: string;
          const file = JSON.parse(
            getFileFromPath(
              ["documents", "test-supamoto-device-credential.jsonld"],
              "ascii"
            )
          );
          file["issuer"] = daoCredsIssuerDid;
          file["credentialSubject"]["id"] = (
            file["credentialSubject"]["id"] as string
          ).replace("deviceId", id.toString());
          file["credentialSubject"]["certification"][
            "id"
          ] = `https://ipfs.io/ipfs/${projectCertDoc}`;
          let buff = Buffer.from(JSON.stringify(file));
          deviceCreds = (
            await customQueries.cellnode.uploadWeb3Doc(
              utils.common.generateId(12),
              "application/ld+json",
              buff.toString("base64"),
              undefined,
              chainNetwork
            )
          ).cid;

          console.log({ deviceCreds });
          if (!deviceCreds) throw new Error("error saving device creds file");

          const res = await Entity1.CreateEntityAssetSupamotoInstance(
            assetCollectionDid,
            id,
            i + 1,
            deviceCreds,
            dids.emergingDao
          );
          const nftAssetDid = utils.common.getValueFromEvents(
            res,
            "wasm",
            "token_id"
          );
          console.log({ nftAssetDid });
          assetInstanceDids.push(nftAssetDid);
          return res;
        }
      )
    );
    test("Logging all nft assets created", async () => {
      console.log({ assetInstanceDids });
      expect(true).toBeTruthy();
    });
  });
