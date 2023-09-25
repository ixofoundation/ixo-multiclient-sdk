import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { chainNetwork, dids } from "../constants";

export const setup_dao_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "dao",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.impactsDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.daoClass,
    // can add a also know ass if want
    alsoKnownAs: "",
    // you can remove/add more services
    service: [
      {
        id: "{id}#cellnode",
        type: "Cellnode",
        serviceEndpoint: cellNodeChainMapping[chainNetwork],
      },
      {
        id: "{id}#ipfs",
        type: "Ipfs",
        serviceEndpoint: "https://ipfs.io/ipfs/",
      },
    ],
    // if you have any other linked resources other than the ones below that will automatically
    // be uploaded to cellnode/w3s, you can pass them here
    linkedResources: [
      {
        id: `{id}#profile`,
        type: "Settings",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreihjblkoxsv4gemkex3qtzzwfcuf7hxhzm4uwzsgqgxoxkr76buove",
        proof: "bafkreihjblkoxsv4gemkex3qtzzwfcuf7hxhzm4uwzsgqgxoxkr76buove",
        encrypted: "false",
        right: "",
      },
    ],
    linkedEntity: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [
    {
      name: "page",
      type: "Settings",
      storage: "cellnode",
      json: {
        "@context": [
          "https://w3id.org/ixo/context/v1",
          {
            ixo: "https://w3id.org/ixo/vocab/v1",
            id: "@id",
            type: "@type",
            "@protected": true,
          },
        ],
        id: "{id}#page",
        type: "ixo:Page",
        page: [
          {
            id: "Iz2iHsyM38",
            type: "paragraph",
            data: {
              text: "Prospect is an open source data platform for the energy access sector that allows you to customize data flows coming from ongrid, minigrid and offgrid sources.",
            },
          },
          {
            id: "Zbr0ymGDrU",
            type: "paragraph",
            data: {
              text: "Brought to you by the Access to Energy Institute (A2EI) and GET.invest.",
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
        id: "{id}#tags",
        type: "ixo:Tags",
        settings:
          "https://github.com/emerging-eco/configs/blob/main/settings/config.json",
        entityTags: [
          {
            category: "DAO Type",
            tags: ["Institute"],
          },
          {
            category: "SDGs",
            tags: ["SDG7 – Affordable and Clean Energy"],
          },
        ],
      },
    },
  ],
});

export const setup_oracle_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "oracle/evaluation",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.emergingDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.oracleClass,
    // can add a also know ass if want
    alsoKnownAs: "",
    // you can remove/add more services
    service: [
      {
        id: "{id}#cellnode",
        type: "Cellnode",
        serviceEndpoint: cellNodeChainMapping[chainNetwork],
      },
      {
        id: "{id}#ipfs",
        type: "Ipfs",
        serviceEndpoint: "https://ipfs.io/ipfs/",
      },
    ],
    // if you have any other linked resources other than the ones below that will automatically
    // be uploaded to cellnode/w3s, you can pass them here
    linkedResources: [
      // {
      //   id: `{id}#profile`,
      //   type: "Settings",
      //   description: "Profile",
      //   mediaType: "application/ld+json",
      //   serviceEndpoint:
      //     "ipfs:bafkreie4lmu5whsqsj24c4u6xwcoqevnyjyngqzmc4pwce7sdhjt7ti2rm",
      //   proof: "bafkreie4lmu5whsqsj24c4u6xwcoqevnyjyngqzmc4pwce7sdhjt7ti2rm",
      //   encrypted: "false",
      //   right: "",
      // },
    ],
    linkedEntity: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [
    // TODO NEED!!
    {
      name: "page",
      type: "Settings",
      storage: "cellnode",
      json: {
        "@context": [
          "https://w3id.org/ixo/context/v1",
          {
            ixo: "https://w3id.org/ixo/vocab/v1",
            id: "@id",
            type: "@type",
            "@protected": true,
          },
        ],
        id: "{id}#page",
        type: "ixo:Page",
        page: [],
      },
    },
    // TODO NEED!!
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
        id: "{id}#tags",
        type: "ixo:Tags",
        settings:
          "https://github.com/emerging-eco/configs/blob/main/settings/config.json",
        entityTags: [],
      },
    },
  ],
});

// Types for typescript strict type checking, please ignore
export type SetupDaoConstantFields = ReturnType<typeof setup_dao_constants>;
