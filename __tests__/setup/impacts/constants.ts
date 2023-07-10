import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { dids } from "../constants";
import { chainNetwork } from "../index.setup.spec";

export const setup_dao_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "dao",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.impactsRootUserDid,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.daoClass,
    // can add a also know ass if want
    alsoKnownAs: "",
    // you can remove/add more services
    // TODO need own impacts cellnode
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
    linkedEntity: [
      {
        id: "ixo1pm6e78p4pgn0da365plzl4t56pxy8hwtqkl4nq",
        type: "BlockchainAccount",
        relationship: "ixo.world",
        service: "did:cosmos:ixo",
      },
      {
        id: "regen1pm6e78p4pgn0da365plzl4t56pxy8hwtqp2mph",
        type: "BlockchainAccount",
        relationship: "Regen Network",
        service: "did:cosmos:regen",
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
          "ipfs:bafkreihefbnfysdc6i5lgpr725klialmqxt7y2opl5fqylh3a7k7sjoyly",
        proof: "bafkreihefbnfysdc6i5lgpr725klialmqxt7y2opl5fqylh3a7k7sjoyly",
        encrypted: "false",
        right: "",
      },
      {
        id: "{id}#regulations",
        type: "document",
        description: "Contribution Regulations",
        mediaType: "application/pdf",
        serviceEndpoint:
          "ipfs:bafkreiggnvhlpesl6dysmltjo55pj6vai72rtm2vp3nf35u27adnp3r2di",
        proof: "bafkreiggnvhlpesl6dysmltjo55pj6vai72rtm2vp3nf35u27adnp3r2di",
        encrypted: "false",
        right: "",
      },
      {
        id: "{id}#deed",
        type: "document",
        description: "Formation Deed",
        mediaType: "application/pdf",
        serviceEndpoint:
          "ipfs:bafkreihuhaiu7dmlfdkf5xairlvzryx7aiglu2hr6eca4kjyavicuv75li",
        proof: "bafkreihuhaiu7dmlfdkf5xairlvzryx7aiglu2hr6eca4kjyavicuv75li",
        encrypted: "false",
        right: "",
      },
      {
        id: "{id}#resolution",
        type: "document",
        description: "Founders Resolution",
        mediaType: "application/pdf",
        serviceEndpoint:
          "ipfs:bafkreie373yxhzsxruiy73h6ofisqfla3f7pdw2urnhldpd7je6mymcndm",
        proof: "bafkreie373yxhzsxruiy73h6ofisqfla3f7pdw2urnhldpd7je6mymcndm",
        encrypted: "false",
        right: "",
      },
      {
        id: "{id}#innovation",
        type: "document",
        description: "Innovation Document",
        mediaType: "application/pdf",
        serviceEndpoint:
          "ipfs:bafybeihjcs5bg2asnn7hs6kpguq6v77qcpmuwq72ckrbofgd6jlrahcwpu",
        proof: "bafybeihjcs5bg2asnn7hs6kpguq6v77qcpmuwq72ckrbofgd6jlrahcwpu",
        encrypted: "false",
        right: "",
      },
      {
        id: "{id}#statutes",
        type: "document",
        description: "Statutes Document",
        mediaType: "application/pdf",
        serviceEndpoint:
          "ipfs:bafkreifb27665ce32qsrob3dge532mhtwkz4a4qqhziqvsh2byzefxvp6a",
        proof: "bafkreifb27665ce32qsrob3dge532mhtwkz4a4qqhziqvsh2byzefxvp6a",
        encrypted: "false",
        right: "",
      },
    ],
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
            id: "_fl_Wfifpy",
            type: "paragraph",
            data: {
              text: "The Impacts  DAO is a Venture Cooperative that makes outcomes-based investments into innovations, projects and research that will result in solutions that are built on the Internet of Impact being delivered into the markets where these are most needed.",
            },
          },
          {
            id: "Xp1N61-A7e",
            type: "paragraph",
            data: {
              text: "The Internet of Impact is a multi-network ecosystem of Web3, AI and related technologies and services for sustainable human development, human security, energy transition, and ecological regeneration.",
            },
          },
          {
            id: "huKDM9QuBb",
            type: "paragraph",
            data: {
              text: "The Impacts DAO Cooperative is addressing market opportunities with innovations to:&nbsp;",
            },
          },
          {
            id: "sYQMoU9fEd",
            type: "list",
            data: {
              style: "ordered",
              items: [
                "Scale outcomes-based funding: Using digital finance to decentralise and accelerate the flows of capital invested into assets and projects that produce Outcomes.",
                "Reduce the costs of impact verification: Using Digital MRV technologies to automate and distribute services for Measurement, Verification and Reporting of Outcomes.<br>",
                "Create regenerative wealth: Tokenising Outcomes, such as Carbon VERs, to account for the social and financial value of verified outcomes and exchange these as assets. Equitably distributing the social, economic and legal rights associated with the means of producing Outcomes, and the value of these Outcomes.<br>",
              ],
            },
          },
          {
            id: "W62_MtWTH2",
            type: "paragraph",
            data: {
              text: "Members of the cooperative include visionary innovators, investors, builders, and market implementers who contribute work, capital resources, open-source software, and market access opportunities to grow the value and utility of the Internet of Impact innovation ecosystem.",
            },
          },
          {
            id: "ar3avwpl2t",
            type: "paragraph",
            data: {
              text: "The legal structure of the DAO is a Liechtenstein Venture Cooperative (LVC), which affords legal protections to its members.",
            },
          },
          {
            id: "ftIEtJgaY2",
            type: "paragraph",
            data: {
              text: "The DAO Treasury provides sustainable funding for investing into the cooperative ecosystem by growing a portfolio of assets and by generating revenues from its investments.",
            },
          },
          {
            id: "yp_kM2W6q3",
            type: "paragraph",
            data: {
              text: "Contributors to the cooperative receive DAO membership tokens that represent their voting rights and participation share in the cooperative’s investment portfolio.&nbsp;",
            },
          },
          {
            id: "PvLpJUzqEg",
            type: "paragraph",
            data: {
              text: "The fair valuation of investments into the cooperative is determined by Contribution Regulations that consider the probability of investors receiving future financial returns.",
            },
          },
          {
            id: "-7Rr9K8_zs",
            type: "paragraph",
            data: {
              text: "DAO membership tokens may be exchanged for liquid treasury assets when the cooperative is profitable, with distributions taking place during liquidity events. Most-recent investors have a liquidation preference that gives them the option to cash-out first, as they receive a lower rate of financial return for taking less investment risk.",
            },
          },
          {
            id: "-b4ic05Ftm",
            type: "paragraph",
            data: {
              text: "The cooperative is governed as a decentralised autonomous organisation. New members are welcome to join by consensus vote.",
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
          "https://github.com/ixofoundation/configs/blob/main/settings/config.json",
        entityTags: [
          {
            category: "DAO Type",
            tags: ["Cooperative"],
          },
          {
            category: "SDGs",
            tags: ["Global - Supports all SDGs"],
          },
        ],
      },
    },
  ],
});

// Types for typescript strict type checking, please ignore
export type SetupDaoConstantFields = ReturnType<typeof setup_dao_constants>;
