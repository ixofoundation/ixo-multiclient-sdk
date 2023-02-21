import { CellnodeWeb3Resource } from "../../src/custom_queries/cellnode";
import {
  customQueries,
  getFileFromPath,
  getUser,
  queryClient,
  testMsg,
  utils,
} from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Entity from "../modules/Entity";

export const enititiesBasic = () =>
  describe("Testing the entities module", () => {
    let assetDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntity();
      assetDid = utils.common.getValueFromEvents(
        res,
        "ixo.iid.v1beta1.IidDocumentCreatedEvent",
        "did"
      );
      console.log({ assetDid });
      return res;
    });
    // testMsg("/ixo.entity.v1beta1.MsgUpdateEntityVerified", () =>
    //   Entity.UpdateEntityVerified(undefined, assetDid)
    // );
    // testMsg("/ixo.entity.v1beta1.MsgTransferEntity", () =>
    //   Entity.TransferEntity(undefined, assetDid)
    // );
    // testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () => Entity.UpdateEntity());
  });

export const supamotoFlow = () =>
  describe("Testing the Supamoto nfts flow", () => {
    const cellNodeNetwork = "devnet";

    // Create top-level class dao
    let daoDid: string;
    daoDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntity("dao");
      daoDid = utils.common.getValueFromEvents(
        res,
        "ixo.iid.v1beta1.IidDocumentCreatedEvent",
        "did"
      );
      console.log({ daoDid });
      return res;
    });

    // Create dao entity which is credential issuer
    let daoCredsIssuerDid: string;
    daoCredsIssuerDid = "did:ixo:entity:4d94f9b6078432648a755203eed50644";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntity("dao", [
        { key: "class", val: daoDid },
      ]);
      daoCredsIssuerDid = utils.common.getValueFromEvents(
        res,
        "ixo.iid.v1beta1.IidDocumentCreatedEvent",
        "did"
      );
      console.log({ daoCredsIssuerDid });
      return res;
    });

    // Save related images WEB3
    let supaLogo: string;
    let supaNftImage: string;
    let ecsLogo: string;
    supaLogo =
      "https://bafybeiads34bdkcskrccnnz2cn64m4x6ms33xjy4klzo6eirmgpddqenym.ipfs.w3s.link/OhwQtFJlRJQX";
    supaNftImage =
      "https://bafybeigcubo5k4ux5mofhndysr24xddbo2ifzj7z5uqvfpicazrsky2pxa.ipfs.w3s.link/HfRpXmUcjoaj";
    ecsLogo =
      "https://bafybeifr2m3c3jne2fjverfs6hkmgeagilahyajw75tukfr7ndgzhfre4e.ipfs.w3s.link/JuwtIQFIQvix";
    // test("Saving device creds", async () => {
    //   supaLogo = (
    //     await customQueries.cellnode.uploadWeb3Doc(
    //       utils.common.generateId(12),
    //       "image/png",
    //       getFileFromPath(["documents", "supamoto_logo.png"]),
    //       undefined,
    //       cellNodeNetwork
    //     )
    //   ).url;
    //   console.log({ supaLogo });
    //   supaNftImage = (
    //     await customQueries.cellnode.uploadWeb3Doc(
    //       utils.common.generateId(12),
    //       "image/png",
    //       getFileFromPath(["documents", "supamoto-nft-image.png"]),
    //       undefined,
    //       cellNodeNetwork
    //     )
    //   ).url;
    //   console.log({ supaNftImage });
    //   ecsLogo = (
    //     await customQueries.cellnode.uploadWeb3Doc(
    //       utils.common.generateId(12),
    //       "image/png",
    //       getFileFromPath(["documents", "ecs_logo_flame only.png"]),
    //       undefined,
    //       cellNodeNetwork
    //     )
    //   ).url;
    //   console.log({ ecsLogo });
    //   expect(ecsLogo).toBeTruthy();
    // });

    // Save supamoto credsPdf WEB3
    let projectCertDoc: string;
    projectCertDoc =
      "https://bafybeicqzthy6ost6t22sjk36t4vyxxwdgudfp23yl42rv4xrxqoclqwyu.ipfs.w3s.link/hBxosbgluRch";
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
          cellNodeNetwork
        )
      ).url;
      console.log({ projectCertDoc });
      expect(projectCertDoc).toBeTruthy();
    });

    // Save supamoto profile WEB3
    let profile: string;
    profile =
      "https://bafybeiguru4g5mgphmecbwcqrbi33jahplf7b7prdgtakh442vuizts74y.ipfs.w3s.link/gBUEzpTqEcFk";
    test("Saving profile", async () => {
      const file = JSON.parse(
        getFileFromPath(["documents", "test-supamoto-profile.jsonld"], "ascii")
      );
      file["image"] = supaNftImage;
      file["logo"] = supaLogo;
      let buff = Buffer.from(JSON.stringify(file));
      profile = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "application/ld+json",
          buff.toString("base64"),
          undefined,
          cellNodeNetwork
        )
      ).url;
      console.log({ profile });
      expect(profile).toBeTruthy();
    });

    // Save supamoto creator CELLNODE
    let creator: string;
    creator = "wx6icqekxuole8atw3d";
    test("Saving creator", async () => {
      const tester = getUser();
      const file = JSON.parse(
        getFileFromPath(["documents", "test-supamoto-creator.jsonld"], "ascii")
      );
      file["issuer"] = tester.did;
      file["credentialSubject"]["id"] = daoCredsIssuerDid;
      file["credentialSubject"]["logo"] = ecsLogo;
      let buff = Buffer.from(JSON.stringify(file));
      creator = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          buff.toString("base64"),
          undefined,
          cellNodeNetwork
        )
      ).key;
      console.log({ creator });
      expect(creator).toBeTruthy();
    });

    // Save supamoto administrator CELLNODE
    let administrator: string;
    administrator = "2udhfhz3duhle8atwit";
    test("Saving administrator", async () => {
      const tester = getUser();
      const file = JSON.parse(
        getFileFromPath(
          ["documents", "test-supamoto-administrator.jsonld"],
          "ascii"
        )
      );
      file["issuer"] = tester.did;
      file["credentialSubject"]["id"] = daoCredsIssuerDid;
      file["credentialSubject"]["logo"] = ecsLogo;
      let buff = Buffer.from(JSON.stringify(file));
      administrator = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          buff.toString("base64"),
          undefined,
          cellNodeNetwork
        )
      ).key;
      console.log({ administrator });
      expect(administrator).toBeTruthy();
    });

    // Save supamoto page CELLNODE
    let page: string;
    page = "ossnopx57ule8atwww";
    test("Saving page", async () => {
      page = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/json",
          getFileFromPath(["documents", "test-supamoto-page.json"]),
          undefined,
          cellNodeNetwork
        )
      ).key;
      console.log({ page });
      expect(page).toBeTruthy();
    });

    // Save supamoto projectCreds WEB3
    let projectCreds: string;
    projectCreds =
      "https://bafybeictgpirfq7erlben4w5hojqkv76uuk4erzar5p5oem4xt5eg7shym.ipfs.w3s.link/wXxQWXgsVVHh";
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
        id: projectCertDoc,
        proof: projectCertDoc.split(".")[0].split("/")[2],
      }));
      let buff = Buffer.from(JSON.stringify(file));
      projectCreds = (
        await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "application/ld+json",
          buff.toString("base64"),
          undefined,
          cellNodeNetwork
        )
      ).url;
      console.log({ projectCreds });
      expect(projectCreds).toBeTruthy();
    });

    // Save supamoto tags CELLNODE
    let tags: string;
    tags = "wmez0a7p1clle8au0tf";
    test("Saving tags", async () => {
      tags = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          getFileFromPath(["documents", "test-supamoto-tags.jsonld"]),
          undefined,
          cellNodeNetwork
        )
      ).key;
      console.log({ tags });
      expect(tags).toBeTruthy();
    });

    // Save supamoto tokenMetadata WEB3
    let tokenMetadata: string;
    tokenMetadata =
      "https://bafybeicyyaqyea2okvhblqsm664ek2kk6dekazwbcpmh6bpvhl2fbdpzwa.ipfs.w3s.link/GHqsIYfzPdML";
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
          cellNodeNetwork
        )
      ).url;
      console.log({ tokenMetadata });
      expect(tokenMetadata).toBeTruthy();
    });

    // Save supamoto claims CELLNODE
    let claims: string;
    claims = "ijz1jfkgb2ale8au4cp";
    test("Saving claims", async () => {
      claims = (
        await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          getFileFromPath(["documents", "test-supamoto-claims.jsonld"]),
          undefined,
          cellNodeNetwork
        )
      ).key;
      console.log({ claims });
      expect(claims).toBeTruthy();
    });

    // Create a base Protocol entity
    let protocolDid: string;
    protocolDid = "did:ixo:entity:065ba0b99948e2e8ff3228836dee423b";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity.CreateEntity("protocol");
      protocolDid = utils.common.getValueFromEvents(
        res,
        "ixo.iid.v1beta1.IidDocumentCreatedEvent",
        "did"
      );
      console.log({ protocolDid });
      return res;
    });

    // Create a Protocol entity Asset Class
    let protocolAssetDid: string;
    protocolAssetDid = "did:ixo:entity:61392c571ef644d54d77e4daf611bf89";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset class", async () => {
      const res = await Entity.CreateEntityAssetSupamoto({
        inheritEntityDid: protocolDid,
        profile,
        page,
        creator,
        administrator,
        tags,
        claims,
        tokenMetadata,
        projectCert: projectCreds,
        oracle: daoCredsIssuerDid,
      });
      protocolAssetDid = utils.common.getValueFromEvents(
        res,
        "ixo.iid.v1beta1.IidDocumentCreatedEvent",
        "did"
      );
      console.log({ protocolAssetDid });
      return res;
    });

    // Create a batch of Asset entities for the individual Supamoto assets
    const cookstoveIds = [
      "310034782",
      "310034788",
      "310034791",
      "310034792",
      "310034800",
      "310034801",
      "310034812",
      "310034819",
      "310034820",
      "310034821",
      "310034823",
      "310034835",
      "310034836",
      "310034837",
      "310034838",
      "310034839",
      "310034840",
    ];
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
          ).replace("deviceId", id);
          file["credentialSubject"]["certification"]["id"] = projectCertDoc;
          let buff = Buffer.from(JSON.stringify(file));
          deviceCreds = (
            await customQueries.cellnode.uploadWeb3Doc(
              utils.common.generateId(12),
              "application/ld+json",
              buff.toString("base64"),
              undefined,
              cellNodeNetwork
            )
          ).url;

          console.log({ deviceCreds });
          if (!deviceCreds) throw new Error("error saving device creds file");

          const res = await Entity.CreateEntityAssetSupamotoInstance(
            protocolAssetDid,
            id,
            i + 1,
            deviceCreds
          );
          const nftAssetDid = utils.common.getValueFromEvents(
            res,
            "ixo.iid.v1beta1.IidDocumentCreatedEvent",
            "did"
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
