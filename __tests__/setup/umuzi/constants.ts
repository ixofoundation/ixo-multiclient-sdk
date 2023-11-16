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
    // Using values from tesnet daos as it only devnet
    linkedResources: [
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreibw3fgkqa3bvl7cuerl2esoaysnzwfpgwuw7q77qpncj4boovrrum",
        proof: "bafkreibw3fgkqa3bvl7cuerl2esoaysnzwfpgwuw7q77qpncj4boovrrum",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "cellnode:bafkreibybriynl6xk5eho4lttdijcfihqy6cnwsgpdebh6s7gow3aigm4e",
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
          "cellnode:bafkreifwnyqrxcso3qxdb4x7byvmiek77fgvsbzcv64wsv3cvqwffftd5i",
        proof: "bafkreifwnyqrxcso3qxdb4x7byvmiek77fgvsbzcv64wsv3cvqwffftd5i",
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
          "ipfs:bafkreigaix7ohbq6442cccpzlxhw3rtgsjsxgsfoo6fk267ymqhobgcaia",
        proof: "bafkreigaix7ohbq6442cccpzlxhw3rtgsjsxgsfoo6fk267ymqhobgcaia",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "cellnode:bafkreierwb6w5es4hzb7avghign2fo3itxepoaezufx3tj3u7bi7qh4coy",
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
          "cellnode:bafkreib2gyvcwrz5iyhiaalgms4sscm4tafth4kenlkhq6ig3lzj6lg4dy",
        proof: "bafkreib2gyvcwrz5iyhiaalgms4sscm4tafth4kenlkhq6ig3lzj6lg4dy",
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
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:bafkreigjew5e7wujsscjipq3nht23jgi5ydmfht6r5syyuxggcdtammo4m",
        proof: "bafkreigjew5e7wujsscjipq3nht23jgi5ydmfht6r5syyuxggcdtammo4m",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:bafkreiheqpawqgazsapifen5kpnbpyvuxobxv2d2xssoo7txf5omyux2di",
        proof: "bafkreiheqpawqgazsapifen5kpnbpyvuxobxv2d2xssoo7txf5omyux2di",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:bafkreiekjm47zsozizarxlcgak2d754gerzo3hdpufr5xjy2rk6dfvfdqy",
        proof: "bafkreiekjm47zsozizarxlcgak2d754gerzo3hdpufr5xjy2rk6dfvfdqy",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#assessmentScore`,
        type: "ClaimSchema",
        description: "Assessment Score",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreiaywvy5ibuezmxwq7lhgfn4uucazvkpsp5k4wpbm46s4m5yvknwpy",
        proof: "bafkreiaywvy5ibuezmxwq7lhgfn4uucazvkpsp5k4wpbm46s4m5yvknwpy",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#courseProgress`,
        type: "ClaimSchema",
        description: "Course Progress",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreihutnxli5illz5rurhsbdmibp5hghpn577rsj3sbjgxhu66llykm4",
        proof: "bafkreihutnxli5illz5rurhsbdmibp5hghpn577rsj3sbjgxhu66llykm4",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#previousQualification`,
        type: "ClaimSchema",
        description: "Previous Qualification",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreifbnlsg7xexisrbyiv77daoz26hzxvc3rb7ztrrwgbk3vbtzm3fxm",
        proof: "bafkreifbnlsg7xexisrbyiv77daoz26hzxvc3rb7ztrrwgbk3vbtzm3fxm",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#economicActivity`,
        type: "ClaimSchema",
        description: "Economic Activity",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreib3y7bnimwxfuk7jwlugqdhtrdwmyos5kqj37xdigaqjnnsqo3cii",
        proof: "bafkreib3y7bnimwxfuk7jwlugqdhtrdwmyos5kqj37xdigaqjnnsqo3cii",
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
      // TODO need! Alwyn to edit after creation on devnet
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
      // TODO need! Alwyn to edit after creation on devnet
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO need! Alwyn to edit after creation on devnet
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#token`,
        type: "TokenMetadata",
        description: "Impact Token",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreigq4jmqoz3x4d6c6zvr72q45acyione7hthiukmvivjhy6mrbriti",
        proof: "bafkreigq4jmqoz3x4d6c6zvr72q45acyione7hthiukmvivjhy6mrbriti",
        encrypted: "false",
        right: "",
      },
      // TODO need, are we alos doing zlottie for them? Yes and need a new one for this
      {
        id: "{id}#zlottie",
        type: "Lottie",
        description: "zLottie",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:",
        proof: "",
        encrypted: "false",
        right: "",
      },
      // TODO get cid from Shaun (supamoto also dont have yet, just ask). Also, is this for Ummuzi, WaFunda, or Emerging?
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
      // TODO need! Confirm as per question in Notion. Should we find a SustainCert equivalent or is it this the ixo Project entity?
      {
        id: "{id}#projectCredential",
        type: "ProjectCredential",
        description: "Project Document",
        mediaType: "application/pdf",
        serviceEndpoint: "https://platform.sustain-cert.com/public-project/2710",
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
      // TODO need! Alwyn to edit after creation on devnet
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
      // TODO need! Alwyn to edit after creation on devnet
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
      // TODO need! Alwyn to edit after creation on devnet
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
      // TODO need these!  Alwyn to edit after creation on devnet
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
      // TODO need these!  Alwyn to edit after creation on devnet
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
      // TODO need these!  Alwyn to edit after creation on devnet
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
