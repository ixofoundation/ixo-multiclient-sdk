import { customQueries, getFileFromPath, utils } from "../helpers/common";
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
    //   const file = getFileFromPath(["documents", "supamoto_logo.png"]);
    //   const cid = await storeWeb3(
    //     "Supamoto Project Logo",
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
    //     "Pellet Sample Analysis Zambia - Oct 2022.pdf",
    //   ]);
    //   const cid = await storeWeb3(
    //     "Supamoto Zambia Pellet Spec Analysis",
    //     ContentTypes.pdf,
    //     file
    //   );
    //   console.log({ cid });
    //   expect(cid).toBeTruthy();
    // });

    test("upload json", async () => {
      const json = {
        "@context": {
          ixo: "https://w3id.org/ixo/vocab/v1",
          web3: "https://ipfs.io/ipfs/",
          id: "@id",
          type: "@type",
          "@protected": true,
        },
        id: "{id}#profile",
        type: "ixo:profile",
        orgName: "Emerging Cooking Solutions",
        name: "SupaMoto Zambia",
        image:
          "https://ipfs.io/ipfs/bafybeicav572xehbpzjfx4zhaqbsdez2h6gr3v4ils6jqqacgl5ohs4mbm",
        logo: "https://ipfs.io/ipfs/bafkreifkl6w55nasgqid22d2cqyxccjktbciefzmiqvcudlq3eoer2mzhi",
        brand: "ECS (Sweden)",
        location: "SE",
        description: "Clean Cooking with Biomass Gasification in Zambia",
        attributes: [
          {
            key: "Country",
            value: "Zambia",
          },
          {
            key: "Implementer",
            value: "Emerging Cooking Solutions (Zambia) Limited",
          },
          {
            key: "Managing Entity",
            value: "Emerging Cooking Solutions Sweden AB",
          },
          {
            key: "Scale",
            value: "Microscale",
          },
          {
            key: "Type",
            value: "Cooking Fuel Switch",
          },
        ],
        metrics: [],
      };
      const cid = await storeWeb3(
        "Supamoto Zambia Project Profile",
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
