import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { chainNetwork, dids } from "../constants";

export const setup_dao_constants = () => ({
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
          "ipfs:bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
        proof: "bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
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
            id: "o0xt3YTpTG",
            type: "image",
            data: {
              file: {
                url: "https://devnet-cellnode.ixo.earth/public/bafkreiec5bof7m27ez3lct2vdusbzkvshg3mbqim6lxvzfup3fo7a7kace",
              },
              caption: "",
              withBorder: false,
              stretched: false,
              withBackground: false,
            },
          },
          {
            id: "Jj4HkQOBJJ",
            type: "header",
            data: {
              text: "Evaluate Candidates Quickly, Affordably, and Accurately",
              level: 2,
            },
          },
          {
            id: "Ru8VZBIQTJ",
            type: "paragraph",
            data: {
              text: "Supercharge remote and in-person hiring with three world-class capabilities for the price of one.",
            },
          },
          {
            id: "9s_I95jwET",
            type: "paragraph",
            data: {
              text: 'You can create your own&nbsp;<a href="https://help.coderbyte.com/knowledge/custom-challenges">coding challenges</a>,&nbsp;<a href="https://help.coderbyte.com/knowledge/how-to-format-custom-questions">multiple choice questions</a>, open-ended questions, and video response questions. You can also import custom whiteboards and&nbsp;<a href="https://help.coderbyte.com/knowledge/creating-interview-templates">Jupyter Notebooks</a>&nbsp;during interviews.',
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
            category: "DAO Type",
            tags: ["Institute"],
          },
          {
            category: "SDG",
            tags: ["SDG4 – Quality Education"],
          },
        ],
      },
    },
  ],
});

export const setup_oracle_education_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "oracle/evaluation",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.yomaDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.coderByteDao,
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
          "ipfs:bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
        proof: "bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
        encrypted: "false",
        right: "",
      },
    ],
    linkedEntity: [
      {
        id: dids.coderByteDao,
        type: "dao",
        relationship: "prediction",
        service: "ixo",
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
            id: "DFibzXTpCH",
            type: "paragraph",
            data: {
              text: "The evaluation of a learner's skills.",
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
            category: "Function",
            tags: ["Proofing"],
          },
        ],
      },
    },
  ],
});
