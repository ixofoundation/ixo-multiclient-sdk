import { getFileFromPath } from "../helpers/common";
import { storeWeb3 } from "../helpers/web3";

export const web3Storage = () =>
  describe("Uploading file to web3 storage", () => {
    // test("uplaod file json", async () => {
    //   const file = JSON.parse(
    //     getFileFromPath(
    //       ["documents", "impacts", "ImpactsDAO_profile.json"],
    //       "ascii"
    //     )
    //   );
    //   file["issuer"] = "value";
    //   let buff = Buffer.from(JSON.stringify(file));
    //   const cid = await storeWeb3(
    //     "test",
    //     ContentTypes.jsonld,
    //     buff.toString("base64")
    //   );
    //   console.log({ cid });
    //   expect(cid).toBeTruthy();
    // });
    // test("upload file image", async () => {
    //   const file = getFileFromPath([
    //     "documents",
    //     "emerging",
    //     "CARBON token_profile.png",
    //   ]);
    //   const cid = await storeWeb3(
    //     "CARBON token_profile",
    //     ContentTypes.png,
    //     file
    //   );
    //   console.log({ cid });
    //   expect(cid).toBeTruthy();
    // });
    // test("upload file pdf", async () => {
    //   const file = getFileFromPath([
    //     "documents",
    //     "impacts",
    //     "Statutes of the Impact DAO Cooperative V1.0.pdf",
    //   ]);
    //   const cid = await storeWeb3(
    //     "Statutes of the Impact DAO Cooperative V1.0",
    //     ContentTypes.pdf,
    //     file
    //   );
    //   console.log({ cid });
    //   expect(cid).toBeTruthy();
    // });
    test("upload json", async () => {
      const json = {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/ixo/context/v1",
          "https://w3id.org/ixo/credentials/v1",
          {
            "@version": 1,
            "@protected": true,
            id: "@id",
            type: "@type",
          },
        ],
        id: "https://w3id.org/emerging/credential-schemas/device/v1",
        type: ["VerifiableCredential", "DeviceCredential"],
        issuer: "issuerDid",
        issuanceDate: "2023-02-07T19:12:24Z",
        credentialSubject: {
          id: "https://registry.emerging.eco/device/?id=deviceId",
          product: {
            model: "MimiMoto",
            description: "Micro-gasification pellet stove with IoT sensor",
            color: "Red",
          },
          manufacturer: {
            name: "Mimi Moto BV",
            country: "CN",
            date: "2019-2022",
          },
          certification: {
            id: "https://ipfs.io/ipfs/bafkreiefafy2u5df4l52yb7vvz32hxrxhcceyaq3z7xww2qlz2fp3ppeum",
            type: "PerformanceTestingCertificate",
            issuer: "Aprovecho Research Center",
            date: "2017",
            code: "WBT 4.2.3, LEMS, Safety",
          },
        },
        proof: {
          type: "EcdsaSecp256k1Signature2019",
          created: "2023-01-01T19:23:24Z",
          proofPurpose: "assertionMethod",
          verificationMethod: "did:ixo:entity:abc123#key-1",
          jws: "",
        },
      };
      const cid = await storeWeb3(
        "Supamoto Asset Device Creds Devnet Dummy",
        ContentTypes.jsonld,
        Buffer.from(JSON.stringify(json)).toString("base64")
      );
      console.log({ cid });
      expect(cid).toBeTruthy();
    });
  });

const ContentTypes = {
  svg: "image/svg+xml",
  png: "image/png",
  jsonld: "application/ld+json",
  json: "application/json",
  pdf: "application/pdf",
};

// ecs web3 account
// CARBON token_logo bafkreidw5lg6mn2q33vj6gokazbl6yepsh3s32xf5z3evqu43s2ccqg3xy
// CARBON token_profile bafkreifndsbwafc23y2muflrwrfaev5qe5kxcth6atnahcdnwxm753vviq
// carbonORACLE_logo bafkreifo3vrfdlry7pjiu2coxaecfvxb2alcmcxbw72hexhlpv3j4xofei
// carbonORACLE_profile bafkreiffgg6nrzcebnvf63rqxlrxpmvazm6gxe3kb6xlwoap4l32iu7w6y
// ECS DAO_logo bafkreifw7mvuwremuf3ffpdx3r2jgxjme4s2dbsld5y3oe75wavar6hwja
// ECS DAO_profile bafkreiac7mlmlodnhy453xlmdfgnvkqtyx2mcehloxsyl2pig3yjrvkfza
// Emerging_logo bafkreiditx3ykwyfa2e4jk6yjp2vylhqgj45fq4zdxj32hwvp5k4dar7ju
// Emerging_profile bafkreihstux2zf7cobztq5acdqmihbmvkptml7tpvjrd6ecluqllb4iji4
// Prospect_oracle_profile bafkreiexxhidqxzobndelfuxbbzimzvzdporiujpcijm26a5fq3prvgiqy
// ProspectDAO_logo bafkreifycd6nal7k2gmtiiyqrvogcgx6zie6yktpcbq7c3nrrxucotmyt4
// ProspectDAO_profile bafkreidxcimput3wl632czbzkgebfxequ66abgg66pjjkyr525d5wfebbq
// SupaMoto_asset_profile bafybeicav572xehbpzjfx4zhaqbsdez2h6gr3v4ils6jqqacgl5ohs4mbm
// SupaMoto_collection_profile bafybeid5m3l3ulpseaameyjaiokhdpap7bztk4k4irrxidsezntktvpo3i
