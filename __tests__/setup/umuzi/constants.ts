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
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: [
          {
            id: "page-hero-image",
            type: "heroImage",
            data: {
              file: {
                url: "https://cellnode-pandora.ixo.earth/public/bafkreihidncke3d4exwrfqy5he3pmr5lwoj6fmj2tizlryflgqqs6yhlbe",
              },
              caption: "",
              withBorder: false,
              stretched: false,
              withBackground: false,
            },
          },
          {
            id: "jCS6WkGwYW",
            type: "header",
            data: {
              text: "Yoma Africa",
              level: 2,
            },
          },
          {
            id: "bA_dcsL2Wt",
            type: "paragraph",
            data: {
              text: "Yoma Africa is a social enterprise that works to empower women and youth in Africa through education, training, and entrepreneurship. They believe that by investing in women and youth, they can create a more sustainable and equitable future for Africa.Yoma Africa was founded in 2008 by Awa Marie Coll Seck, a Senegalese economist and social entrepreneur. The organization has since grown to reach over 100,000 women and youth across Africa. Yoma Africa's work is focused on three main areas:",
            },
          },
          {
            id: "e9bkL8o3YR",
            type: "list",
            data: {
              style: "unordered",
              items: [
                "Education: Yoma Africa provides access to quality education for women and youth, particularly those from marginalized communities. They offer a variety of programs, including literacy training, vocational training, and university scholarships.",
                "Training: Yoma Africa provides training and skills development for women and youth to help them start their own businesses or find employment. They offer a variety of programs, including business training, financial literacy training, and IT training.",
                "Entrepreneurship: Yoma Africa supports women and youth entrepreneurs by providing them with access to capital, mentorship, and networking opportunities. They also work to promote entrepreneurship as a viable career path for women and youth.",
              ],
            },
          },
          {
            id: "Xk4bjuIg3f",
            type: "paragraph",
            data: {
              text: "Yoma Africa's work has had a significant impact on the lives of women and youth in Africa. Their programs have helped to increase access to education, training, and entrepreneurship opportunities. They have also helped to empower women and youth to become more economically independent and to contribute to the development of their communities.",
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
          {
            category: "DAO Type",
            tags: ["Funding"],
          },
          {
            category: "SDG",
            tags: [
              "SDG4 – Quality Education",
              "SDG8 – Decent Work and Economic Growth",
              "SDG10 – Reduced Inequalities",
            ],
          },
        ],
      },
    },
  ],
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
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: [
          {
            id: "page-hero-image",
            type: "heroImage",
            data: {
              file: {
                url: "https://cellnode-pandora.ixo.earth/public/bafybeif7jzjdmagu27cs73c7ucpoyjyfkiow4vcppj2dh4occlyjts3bpy",
              },
              caption: "",
              withBorder: false,
              stretched: false,
              withBackground: false,
            },
          },
          {
            id: "page-title",
            type: "pageTitle",
            data: {
              text: "Digital Skills for Tech Careers",
              level: 1,
            },
          },
          {
            id: "BFSGIYZwGc",
            type: "header",
            data: {
              text: "Umuzi works with top employers to support young people to access high-value tech and creative careers.",
              level: 1,
            },
          },
          {
            id: "RQi11Xmvp8",
            type: "header",
            data: {
              text: "Youth unemployment is one of the biggest challenges facing South Africa. Since 2014, we’ve been building an alternative to higher education: a 12-month, paid training programme, that’s demand-driven, project based, Agile, and human-centred. ",
              level: 2,
            },
          },
          {
            id: "TkXkxpbq7N",
            type: "header",
            data: {
              text: "Over 80% of the young people who enter our programme secure high-value jobs at top employers.&nbsp;",
              level: 2,
            },
          },
          {
            id: "L-YEJytG1c",
            type: "paragraph",
            data: {
              text: "There are a tremendous number of talented young people not reaching their full potential. In South Africa, millions are unemployed, and locked out of the economy, &nbsp;or under-employed in dead end jobs, vulnerable to automation.&nbsp;",
            },
          },
          {
            id: "TAXPGDgnO5",
            type: "paragraph",
            data: {
              text: "There are many barriers that prevent these talented young people, particularly those from lower income communities, from accessing high-value careers. The costs of traditional education are prohibitive. Most lack the social capital to access opportunities, and many face a more urgent need to get a low-paying job just to survive.",
            },
          },
          {
            id: "CaCawVn7Fz",
            type: "paragraph",
            data: {
              text: 'Young people can discover high-value tech and creative careers through our community content platform, <a href="http://www.ezntswembu.co.za/" target="_blank">Ez’Ntswembu</a>. Anyone interested can start learning immediately through our <a href="https://www.umuzi.org/learnership-overview" target="_blank">online learning application process</a>. The most successful candidates from our online learning are interviewed and assessed in-person. If selected, these young people enter our full-time, paid, on-the-job training programme where they learn human-centred design, Agile, and specialise in a scarce tech and creative skill, including:',
            },
          },
          {
            id: "Zw2-zA31-F",
            type: "list",
            data: {
              style: "unordered",
              items: [
                "Data Science &amp; Data Engineering",
                "Web Development",
                "UX Strategy",
                "UI Design and Copywriting",
                "Multimedia",
              ],
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
          {
            category: "DAO Type",
            tags: ["Enterprise"],
          },
          {
            category: "SDG",
            tags: [
              "SDG1 – No Poverty",
              "SDG4 – Quality Education",
              "SDG5 – Gender Equality",
              "SDG8 – Decent Work and Economic Growth",
              "SDG9 – Industry, Innovation and Infrastructure",
              "SDG10 – Reduced Inequalities",
            ],
          },
        ],
      },
    },
  ],
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
        serviceEndpoint:
          "ipfs:bafkreigjew5e7wujsscjipq3nht23jgi5ydmfht6r5syyuxggcdtammo4m",
        proof: "bafkreigjew5e7wujsscjipq3nht23jgi5ydmfht6r5syyuxggcdtammo4m",
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
              text: "Protocol description goes here.",
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
            category: "Claim Type",
            tags: ["Impact"],
          },
        ],
      },
    },
  ],
});

export const setup_asset_collection_wafundaisa2023_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "asset/collection",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.yomaDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    // TODO confirm with Shaun project is parent
    contextClass: dids.umuziProjectDid,
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
      // {
      //   type: "Settings",
      //   id: "{id}#profile",
      //   description: "Profile",
      //   mediaType: "application/ld+json",
      //   serviceEndpoint: "ipfs:",
      //   proof: "",
      //   encrypted: "false",
      //   right: "",
      // },
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
      // {
      //   id: "{id}#zlottie",
      //   type: "Lottie",
      //   description: "zLottie",
      //   mediaType: "application/json",
      //   serviceEndpoint: "ipfs:",
      //   proof: "",
      //   encrypted: "false",
      //   right: "",
      // },
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
            tags: ["Learnerships", "Education Rights"],
          },
          {
            category: "Token Class",
            tags: ["NFT"],
          },
          {
            category: "SDG",
            tags: [
              "SDG1 – No Poverty",
              "SDG4 – Quality Education",
              "SDG5 – Gender Equality",
              "SDG8 – Decent Work and Economic Growth",
              "SDG9 – Industry, Innovation and Infrastructure",
              "SDG10 – Reduced Inequalities",
            ],
          },
        ],
      },
    },
  ],
  // you can create linked claims that will be uploaded to the specified storage and resource will be saved
  // on entity linked claims with the cid as proof and service endpoint of provided storage.
  // TODO add all 4
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
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreidj3cgdwuauw467xds4xqlmtaunitscqahw43fdtotk7pxd7lw2g4",
        proof: "bafkreidj3cgdwuauw467xds4xqlmtaunitscqahw43fdtotk7pxd7lw2g4",
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
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: [
          {
            id: "page-hero-image",
            type: "heroImage",
            data: {
              file: {
                url: "https://cellnode-pandora.ixo.earth/public/bafybeibivwmssrwixmhthcnx3aa5ey2pflxahmhdlnxpdt3b3g5ldlnaya",
              },
              caption: "",
              withBorder: false,
              stretched: false,
              withBackground: false,
            },
          },
          {
            id: "page-title",
            type: "pageTitle",
            data: {
              text: "Income Sharing Agreement",
              level: 1,
            },
          },
          {
            id: "z6861_NLy-",
            type: "paragraph",
            data: {
              text: "At Umuzi, our mission remains to create pathways for young people to access the skills they need in order to secure high-value digital careers and become active in the economy. ",
            },
          },
          {
            id: "oAIbwsjeKR",
            type: "paragraph",
            data: {
              text: 'Through a partnership with <a href="https://wafunda.com/">WaFunda</a>, we’re introducing a new pathway into our offering, where you can upskill with no upfront financial burden, and pay for this only once you have secured a high-value job. ',
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
          {
            category: "Project Type",
            tags: ["Skills Development"],
          },
          {
            category: "SDG",
            tags: [
              "SDG8 – Decent Work and Economic Growth",
              "SDG4 – Quality Education",
              "SDG10 – Reduced Inequalities",
            ],
          },
          {
            category: "Stage",
            tags: ["Planning"],
          },
        ],
      },
    },
  ],
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
      // {
      //   type: "Settings",
      //   id: "{id}#profile",
      //   description: "Profile",
      //   mediaType: "application/ld+json",
      //   serviceEndpoint: "ipfs:",
      //   proof: "",
      //   encrypted: "false",
      //   right: "",
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
        type: "ixo#Tags",
        settings:
          "https://github.com/emerging-eco/configs/blob/main/settings/config.json",
        entityTags: [],
      },
    },
  ],
});

// Types for typescript strict type checking, please ignore
export type SetupDaoConstantFields = ReturnType<
  typeof setup_yoma_dao_constants
>;
