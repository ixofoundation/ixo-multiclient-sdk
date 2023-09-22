import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { dids } from "../constants";
import { chainNetwork } from "../index.setup.spec";

export const setup_asset_collection_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "asset/collection",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.emergingDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.assetClass,
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
          "ipfs:bafkreiblldk3q4b3znranvn3fzaknt5ztouead7p6jetabc6ho2w7j7xcu",
        proof: "bafkreiblldk3q4b3znranvn3fzaknt5ztouead7p6jetabc6ho2w7j7xcu",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#token`,
        type: "TokenMetadata",
        description: "Impact Token",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreibvo2vsgbxbxuwxakd7gdq7a35t7krab67b5tkxjkbpxlm4mlri2e",
        proof: "bafkreibvo2vsgbxbxuwxakd7gdq7a35t7krab67b5tkxjkbpxlm4mlri2e",
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
      // TODO get cid from Shaun as Matias
      // {
      //   id: "{id}#termsConditions",
      //   type: "LegalAgreement",
      //   description: "Terms and Conditions",
      //   mediaType: "application/pdf",
      //   serviceEndpoint: "ipfs:<cid>",
      //   proof: "<cid>",
      //   encrypted: "false",
      //   right: "#legal",
      // },
      {
        id: "{id}#projectCredential",
        type: "ProjectCredential",
        description: "Project Document",
        mediaType: "application/pdf",
        serviceEndpoint: `https://platform.sustain-cert.com/public-project/2710`,
        proof: "",
        encrypted: "false",
        right: "",
      },
      // Getting added after did creation as need did
      // {
      //   id: "{id}#collectionDashboard",
      //   type: "WebDashboard",
      //   description: "Collection Dashboard",
      //   mediaType: "application/html",
      //   serviceEndpoint: "emerging:/collections/did",
      //   proof: "",
      //   encrypted: "false",
      //   right: "#apitoken",
      // },
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
              id: dids.cleanCookingProtocol + "#fuelPurchase",
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
              id: dids.cleanCookingProtocol + "#CER",
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

export const setup_project_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "project",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.emergingDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.ecsDao,
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
          "ipfs:bafkreidxr2qme6pk7rlr7d5wfryficamojruualqqvue7vxlmce42nxjbq",
        proof: "bafkreidxr2qme6pk7rlr7d5wfryficamojruualqqvue7vxlmce42nxjbq",
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
            id: "page-hero-image",
            type: "heroImage",
            data: {
              file: {
                url: "https://ipfs.io/ipfs/bafybeicav572xehbpzjfx4zhaqbsdez2h6gr3v4ils6jqqacgl5ohs4mbm",
              },
              caption: "SupaMoto Zambia",
              withBorder: false,
              stretched: false,
              withBackground: false,
            },
          },
          {
            id: "LFk_K2rUo_",
            type: "paragraph",
            data: {
              text: "SupaMoto distributes micro gasifier cookstoves running on pellets in Zambia, with a specific focus on Lusaka.",
            },
          },
          {
            id: "-0QottQWxt",
            type: "paragraph",
            data: {
              text: "SupaMoto follows an 'energy utility' model, where the cookstoves serve as infrastructure and fuel pellets provide the energy source. By integrating both the fuel and the stove into a single system, SupaMoto enables clean cooking through an innovative product while maximizing the positive impacts on health, environment, and society.",
            },
          },
          {
            id: "6csOa4d3na",
            type: "paragraph",
            data: {
              text: "The project boundary encompasses the physical and geographical sites where the stoves are used, as well as the baseline and project fuel production.",
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
            category: "Project Type",
            tags: ["Decarbonisation"],
          },
          {
            category: "SDG",
            tags: [
              "SDG13 – Climate Action",
              "SDG7 – Affordable and Clean Energy",
              "SDG9 – Industry, Innovation and Infrastructure",
              "SDG3 – Good Health and Well-being",
              "SDG5 – Gender Equality",
            ],
          },
          {
            category: "Stage",
            tags: ["Delivery"],
          },
        ],
      },
    },
  ],
  // you can create linked claims that will be uploaded to the specified storage and resource will be saved
  // on entity linked claims with the cid as proof and service endpoint of provided storage.
  linkedClaims: [],
});
