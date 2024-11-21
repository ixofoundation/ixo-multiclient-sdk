import { dids } from "../constants";

export const setup_impact_credit_asset_protocol = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "protocol/asset",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.impactsRootUserDid,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.assetClass,
    // can add a also know ass if want
    alsoKnownAs: "",
    // you can remove/add more services
    service: [
      {
        id: "{id}#ipfs",
        type: "Ipfs",
        serviceEndpoint: "https://ipfs.io/ipfs/",
      },
    ],
    linkedEntity: [],
    // if you have any other linked resources other than the ones below that will automatically
    // be uploaded to cellnode/w3s, you can pass them here
    linkedResources: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [
    {
      name: "profile",
      type: "Settings",
      storage: "ipfs",
      json: {
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        id: "ixo:entity#profile",
        type: "profile",
        name: "Impact Credit",
        brand: "Impacts DAO",
        location: "AA",
        description: "Impact Credit Protocol",
        attributes: [
          {
            key: "",
            value: "",
          },
        ],
        category: "Impact_Credit",
      },
    },
    {
      name: "page",
      type: "Settings",
      storage: "ipfs",
      json: {
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: [
          {
            id: "page-title",
            type: "pageTitle",
            data: {
              text: "Impact Credit Protocol",
              level: 1,
            },
          },
        ],
      },
    },
    {
      name: "tags",
      type: "Settings",
      storage: "ipfs",
      json: {
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#tags",
        entityTags: [
          {
            category: "Entity",
            tags: ["Asset"],
            readonly: true,
          },
          {
            category: "Claim Type",
            tags: [""],
            readonly: true,
          },
          {
            category: "Type",
            tags: ["Impact_Credit"],
            readonly: true,
          },
          {
            category: "Token Class",
            tags: ["Unspecified"],
            readonly: true,
          },
        ],
      },
    },
  ],
});

// Types for typescript strict type checking, please ignore
export type SetupDaoConstantFields = ReturnType<
  typeof setup_impact_credit_asset_protocol
>;

export const setup_coin_asset_protocol = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "protocol/asset",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.impactsRootUserDid,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.assetClass,
    // can add a also know ass if want
    alsoKnownAs: "",
    // you can remove/add more services
    service: [
      {
        id: "{id}#ipfs",
        type: "Ipfs",
        serviceEndpoint: "https://ipfs.io/ipfs/",
      },
    ],
    linkedEntity: [],
    // if you have any other linked resources other than the ones below that will automatically
    // be uploaded to cellnode/w3s, you can pass them here
    linkedResources: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [
    {
      name: "profile",
      type: "Settings",
      storage: "cellnode",
      json: {
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        id: "ixo:entity#profile",
        type: "profile",
        name: "Coin",
        brand: "Impacts DAO",
        location: "AA",
        description: "Coin Protocol",
        attributes: [
          {
            key: "",
            value: "",
          },
        ],
        category: "Coin",
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
        page: [
          {
            id: "page-title",
            type: "pageTitle",
            data: {
              text: "Coin Protocol",
              level: 1,
            },
          },
        ],
      },
    },
    {
      name: "tags",
      type: "Settings",
      storage: "cellnode",
      json: {
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#tags",
        entityTags: [
          { category: "Entity", tags: ["Asset"], readonly: true },
          { category: "Claim Type", tags: [""], readonly: true },
          { category: "Type", tags: ["Coin"], readonly: true },
          { category: "Token Class", tags: ["Unspecified"], readonly: true },
        ],
      },
    },
  ],
});
