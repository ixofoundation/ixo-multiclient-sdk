import { saveFileToPath, testMsg, utils } from "../../helpers/common";
import * as Entity from "../Entity";
import { chainNetwork, dids } from "../constants";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";
import { ids } from "./assetIds";

export const assetsFlow = () =>
  describe("Creating the aquaminer assets", () => {
    setAndLedgerUser(process.env.ROOT_AQUAMINER!);

    // Create a batch of Asset entities for the individual Aquaminer assets
    let assetsFailed: any[] = [];
    let assetInstanceDids: { id: string; did: string }[] = [];
    let index = 1;

    ids
      .map((c) => c.id)
      .map((id, i) =>
        testMsg(
          `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
          async () => {
            console.log(
              `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index} (array index: ${i}) for id:${id}`
            );
            try {
              const res = await Entity.CreateEntityAssetAquaminerInstance(
                dids.aquaminerCollection,
                [{ deviceId: id, index, alsoKnownAs: id }],
                dids.impactsDao
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

    test("Logging all assets created", async () => {
      console.log(
        "Create file to save assetInstanceDids that was successfully and failed"
      );
      saveFileToPath(
        ["documents", "aquaminer", "asset_dids.json"],
        JSON.stringify({ assetInstanceDids, assetsFailed }, null, 2)
      );
      expect(true).toBeTruthy();
    });
  });

export const uploadCellnodeData = () =>
  describe("Creating the aquaminer assets files on cellnode", () => {
    test("Uploading to cellnode", async () => {
      let assetLinkedResourcesUploaded = await uploadAllToCellnodeWeb3([
        {
          name: "profile",
          type: "Settings",
          storage: "cellnode",
          json: {
            "@context": [
              "https://w3id.org/ixo/context/v1",
              {
                ixo: "https://w3id.org/ixo/vocab/v1",
                web3: "https://ipfs.io/ipfs/",
                id: "@id",
                type: "@type",
                "@protected": true,
              },
            ],
            id: "ixo:entity#profile",
            type: "profile",
            orgName: "Aquaminer",
            name: "Aquaminer Genesis #1",
            image:
              "https://cellnode-pandora.ixo.earth/public/bafybeicquubtk3t6usv655aqyzbmbpd3d3q4mkky3rt72h4wjimwloyaki",
            logo: "https://cellnode-pandora.ixo.earth/public/bafkreigsemr3qolehoziehscgqrbchqekufq2qylymipbs3mfha64d6poy",
            brand: "Aquaminer",
            location: "DE",
            description:
              "The Aquaminer is a cutting-edge water purification system designed to harness the natural mineralization process while ensuring the delivery of clean, safe drinking water. ",
          },
        },
        {
          name: "page",
          type: "Settings",
          storage: "cellnode",
          json: {
            "@context": {
              ixo: "https://w3id.org/ixo/ns/protocol/",
              "@id": "@type",
              type: "@type",
              "@protected": true,
            },
            type: "ixo:entity#page",
            page: {
              pageTitle: "Aquaminer Devices",
              content: [
                {
                  id: "1b8bb64c-299a-4e60-a41f-85c4173d43d5",
                  type: "paragraph",
                  props: {
                    textColor: "default",
                    backgroundColor: "default",
                    textAlignment: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "Aquaminer is a cutting-edge water purification system designed to harness the natural mineralization process while ensuring the delivery of clean, safe drinking water. This compact, eco-friendly unit operates by filtering water through a series of mineral-rich chambers, which not only remove impurities and contaminants but also infuse the water with essential minerals like calcium, magnesium, and potassium.",
                      styles: {},
                    },
                  ],
                  children: [],
                },
                {
                  id: "eb40adc4-e6c1-484f-a242-690b820859df",
                  type: "paragraph",
                  props: {
                    textColor: "default",
                    backgroundColor: "default",
                    textAlignment: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "The device features an intuitive touchscreen interface, allowing users to customize mineral levels based on their preferences or health needs. Equipped with advanced sensors, the Aquaminer continuously monitors water quality, adjusting the purification process in real-time to maintain optimal mineral balance. It also includes a self-cleaning function, ensuring long-term efficiency and minimal maintenance.",
                      styles: {},
                    },
                  ],
                  children: [],
                },
                {
                  id: "813c339c-e943-434a-a8cd-d80f448b6411",
                  type: "paragraph",
                  props: {
                    textColor: "default",
                    backgroundColor: "default",
                    textAlignment: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "Designed with sustainability in mind, the Aquaminer uses energy-efficient technology and recyclable filter cartridges, making it an environmentally responsible choice for households, offices, and remote locations where clean water access is limited. Its sleek, modern design fits seamlessly into any environment, providing not just pure water, but water that supports overall health and wellness.",
                      styles: {},
                    },
                  ],
                  children: [],
                },
                {
                  id: "732bfd4d-561c-4e72-a9a3-adf46dee9d90",
                  type: "paragraph",
                  props: {
                    textColor: "default",
                    backgroundColor: "default",
                    textAlignment: "left",
                  },
                  content: [],
                  children: [],
                },
              ],
            },
          },
        },
        {
          name: "tags",
          type: "Settings",
          storage: "cellnode",
          json: {
            "@context": [
              "https://w3id.org/ixo/context/v1",
              {
                ixo: "https://w3id.org/ixo/vocab/v1",
                web3: "https://ipfs.io/ipfs/",
                id: "@id",
                type: "@type",
                "@protected": true,
              },
            ],
            type: "ixo:entity#tags",
            entityTags: [
              { category: "Asset Type", tags: ["Device"] },
              { category: "Token Class", tags: ["Non-Fungible Token"] },
              { category: "Market", tags: ["Voluntary"] },
              {
                category: "SDG",
                tags: [
                  "SDG12 – Responsible Consumption and Production",
                  "SDG13 – Climate Action",
                  "SDG6 – Clean Water and Sanitation",
                ],
              },
            ],
          },
        },
      ]);
      console.log({ assetLinkedResourcesUploaded });
      return true as any;
    });
  });
