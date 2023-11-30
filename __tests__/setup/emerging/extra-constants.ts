import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { chainNetwork, dids } from "../constants";

export const setup_protocol_legacy_cooking_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "protocol/impact",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.emergingDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.protocolClass,
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
          "ipfs:bafkreiaamisuqa5zqzl6opa43rh4zk2o2iyfn6wgygdcfh6wiuhurvcnlm",
        proof: "bafkreiaamisuqa5zqzl6opa43rh4zk2o2iyfn6wgygdcfh6wiuhurvcnlm",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#fuelPurchase`,
        type: "ClaimSchema",
        description: "Fuel purchase claim schema",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreihydcnqrpe3ptrxiivgnwsbpvpfuwzjahsqk3bfp6pwimfklqbbxy",
        proof: "bafkreihydcnqrpe3ptrxiivgnwsbpvpfuwzjahsqk3bfp6pwimfklqbbxy",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#CER`,
        type: "ClaimSchema",
        description: "GHG emission reduction claim schema",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreihcwa5pdwdw5po7etqru6pymhhqtbhu7yazbypcowkr76tn7vh3tu",
        proof: "bafkreihcwa5pdwdw5po7etqru6pymhhqtbhu7yazbypcowkr76tn7vh3tu",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#VERX`,
        type: "CredentialSchema",
        description: "Verified emission reduction credential schema",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreiflbkgjjj2vwqstl5b6wpdeqrqkouotvwtu3ht33ai3b5awi5q33q",
        proof: "bafkreiflbkgjjj2vwqstl5b6wpdeqrqkouotvwtu3ht33ai3b5awi5q33q",
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
            id: "DFibzXTpCH",
            type: "paragraph",
            data: {
              text: "The Digital Measurement, Reporting, and Verification (dMRV) Protocol for Clean Cooking defines a standardized framework for tracking and evaluating the reduction in greenhouse gas (GHG) emissions from modern energy cooking devices.",
            },
          },
          {
            id: "_9vyvov_tG",
            type: "paragraph",
            data: {
              text: "This transparent and reliable system promotes data integrity, accountability, and stakeholder collaboration, while facilitating progress towards climate goals and sustainable development.",
            },
          },
          {
            id: "T7wWZQQy54",
            type: "paragraph",
            data: {
              text: "The dMRV protocol not only encourages innovation and resource allocation in clean cooking technologies but also fosters trust among all involved parties. It enables digital Impact Credits to be issued that account for and derive economic value from the climate impacts of using modern fuels and efficient cooking devices.",
            },
          },
          {
            id: "MK_Z8NDz0Y",
            type: "paragraph",
            data: {
              text: "The dMRV protocol builds upon the Gold Standard Foundation's Methodology for Metered and Measured Energy Cooking Devices. It outlines data models and procedures for claims involving Cooking Fuel Purchases, Cooking Device Usage, and GHG Emission Reductions.",
            },
          },
          {
            id: "hpFizTi2bc",
            type: "paragraph",
            data: {
              text: "The protocol also details the evaluation methodology for these claims, calculating emission reductions according to fuel types and quantities burned compared to baseline measures.",
            },
          },
          {
            id: "vEoUM94GQu",
            type: "paragraph",
            data: {
              text: "It establishes a standard data format for issuing Verified Emission Reduction digital Impact Certificates in the format of Verifiable Credentials.",
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
        type: "ixo#Tags",
        settings:
          "https://github.com/emerging-eco/configs/blob/main/settings/config.json",
        entityTags: [
          {
            category: "Asset Type",
            tags: ["Inventory", "Carbon Rights"],
          },
          {
            category: "Token Class",
            tags: ["NFT"],
          },
          {
            category: "SDG",
            tags: [
              "SDG13 – Climate Action",
              "SDG7 – Affordable and Clean Energy",
            ],
          },
        ],
      },
    },
  ],
});

export const setup_asset_collection_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "asset/collection",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.emergingDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.ecsProject,
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
      {
        id: "{id}#ixo",
        type: "chainService",
        serviceEndpoint:
          "https://github.com/cosmos/chain-registry/blob/master/ixo/chain.json?rpc/",
      },
      {
        id: "{id}#emerging",
        type: "linkedDomains",
        serviceEndpoint: "https://app.emerging.eco",
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
          "ipfs:bafkreiflfgvd6ui7cble6ivgfonu6qxdrc3upcenrwcqrtyd27achqut6a",
        proof: "bafkreiflfgvd6ui7cble6ivgfonu6qxdrc3upcenrwcqrtyd27achqut6a",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#token`,
        type: "TokenMetadata",
        description: "Impact Token",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreibmojoeoziywauyhyocqyftltcrouagjpdca5vazmrqmxuido3pkq",
        proof: "bafkreibmojoeoziywauyhyocqyftltcrouagjpdca5vazmrqmxuido3pkq",
        encrypted: "false",
        right: "",
      },
      {
        id: "{id}#zlottie",
        type: "Lottie",
        description: "zLottie",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreiadrjh2pbl2vbutyfhjzuj5ylnsvexlkammulosu6s43atoyejz6u",
        proof: "bafkreiadrjh2pbl2vbutyfhjzuj5ylnsvexlkammulosu6s43atoyejz6u",
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
        page: [],
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
            category: "Asset Type",
            tags: ["Inventory", "Carbon Rights"],
          },
          {
            category: "Token Class",
            tags: ["NFT"],
          },
          {
            category: "SDG",
            tags: [
              "SDG13 – Climate Action",
              "SDG7 – Affordable and Clean Energy",
            ],
          },
        ],
      },
    },
  ],
  // you can create linked claims that will be uploaded to the specified storage and resource will be saved
  // on entity linked claims with the cid as proof and service endpoint of provided storage.
  linkedClaims: [
    {
      name: "FuelPurchases",
      description: "Fuel Purchase Claim",
      type: "Procurement",
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
        id: "{id}#claims",
        type: "ixo:Claims",
        entityClaims: [
          {
            template: {
              id: dids.legacyCookingProtocol + "#fuelPurchase",
              title: "Fuel Purchase Claim",
              description:
                "Renewable biomass pellet fuel purchase claim based on transaction data.",
            },
            submissions: {
              maximum: null,
              startDate: "",
              endDate: "",
            },
          },
        ],
      },
    },
    {
      name: "CER",
      description: "GHG Emission Reduction",
      type: "Impact",
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
        id: "{id}#claims",
        type: "ixo:Claims",
        entityClaims: [
          {
            template: {
              id: dids.legacyCookingProtocol + "#CER",
              title: "Carbon Emission Reduction",
              description:
                "Claimed Amount of Carbon Emissions reduced through the use of an energy-efficient clean cookstove.",
            },
            submissions: {
              maximum: null,
              startDate: "",
              endDate: "",
            },
          },
        ],
      },
    },
  ],
});
