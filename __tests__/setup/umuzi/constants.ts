import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { chainNetwork, dids } from "../constants";

export const setup_yoma_dao_constants = () => ({
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
        id: "{id}#ipfs",
        type: "Ipfs",
        serviceEndpoint: "https://ipfs.io/ipfs/",
      },
    ],
    // if you have any other linked resources other than the ones below that will automatically
    // be uploaded to cellnode/w3s, you can pass them here
    // Using values from tesnet daos as it only devnet
    linkedResources: [
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreid37azngjjghv7kbiiedwo5h4dox3na5ra6vsbwmblviry3f2icjq",
        proof: "bafkreid37azngjjghv7kbiiedwo5h4dox3na5ra6vsbwmblviry3f2icjq",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreibybriynl6xk5eho4lttdijcfihqy6cnwsgpdebh6s7gow3aigm4e",
        proof: "bafkreibybriynl6xk5eho4lttdijcfihqy6cnwsgpdebh6s7gow3aigm4e",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreic25qhaofd33zakcmi57lbbmxtakefrk7youjitbvilohd7pf26ku",
        proof: "bafkreic25qhaofd33zakcmi57lbbmxtakefrk7youjitbvilohd7pf26ku",
        encrypted: "false",
        right: "",
      },
    ],
    linkedEntity: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [],
});

export const setup_umuzi_dao_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "dao",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.yomaDao,
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
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreidu5hqhqsd6g7pezfapuaoialehg3iq7nxhjyhffhvalunfugiw64",
        proof: "bafkreidu5hqhqsd6g7pezfapuaoialehg3iq7nxhjyhffhvalunfugiw64",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreierwb6w5es4hzb7avghign2fo3itxepoaezufx3tj3u7bi7qh4coy",
        proof: "bafkreierwb6w5es4hzb7avghign2fo3itxepoaezufx3tj3u7bi7qh4coy",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreifq6pp6uyb77jmkxycbf4ksjlhfgzaxrsnxrgyrhfj4rtzz7gfziy",
        proof: "bafkreifq6pp6uyb77jmkxycbf4ksjlhfgzaxrsnxrgyrhfj4rtzz7gfziy",
        encrypted: "false",
        right: "",
      },
    ],
    linkedEntity: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [],
});

export const setup_protocol_learnership_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "protocol/impact",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.yomaDao,
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
      // TODO need!
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need!
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need!
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO their claims schemas and claim names?
      {
        id: `{id}#assessmentScore`,
        type: "ClaimSchema",
        description: "Assessment score claim schema",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreie7e4y2ymofgeznbewfpmzab5vaisexuxi7zbq6gozqgqiinw6tfa",
        proof: "bafkreie7e4y2ymofgeznbewfpmzab5vaisexuxi7zbq6gozqgqiinw6tfa",
        encrypted: "false",
        right: "",
      },
    ],
    linkedEntity: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [],
});

export const setup_asset_collection_wafundaisa2023_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "asset/collection",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.yomaDao,
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
      // TODO need!
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need!
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need!
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need!
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
      // TODO need, are we alos doing zlottie for them?
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
      // TODO get cid from Shaun (supamoto also dont have yet, just ask)
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
      // TODO need!
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
  linkedResources: [],
  // you can create linked claims that will be uploaded to the specified storage and resource will be saved
  // on entity linked claims with the cid as proof and service endpoint of provided storage.
  linkedClaims: [
    {
      name: "AssessmentScore",
      description: "Assessment Score Claim",
      type: "Learnership",
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
              id: dids.learnershipProtocol + "#assessmentScore",
              title: "Assessment Score Claim",
              description:
                "Result of any type of test e.g. Previous Qualification (The Learner's previous education and training), Aptitude Test (Results of the Learner's aptitude test taken during the application process), CoderBytes Tests (independent verification of learners skills).",
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
    relayerNode: dids.yomaDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.umuziDao,
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
      // TODO need!
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need!
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need!
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
    ],
    linkedEntity: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [],
  // you can create linked claims that will be uploaded to the specified storage and resource will be saved
  // on entity linked claims with the cid as proof and service endpoint of provided storage.
  linkedClaims: [],
});

export const setup_education_asset_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "asset/impactcredit",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.yomaDao,
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
    ],
    // if you have any other linked resources other than the ones below that will automatically
    // be uploaded to cellnode/w3s, you can pass them here
    linkedResources: [
      // TODO need these!
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need these!
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need these!
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
    ],
    linkedEntity: [],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [],
});

// Types for typescript strict type checking, please ignore
export type SetupDaoConstantFields = ReturnType<
  typeof setup_yoma_dao_constants
>;
