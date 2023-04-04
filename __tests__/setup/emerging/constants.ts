import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { dids } from "../constants";
import { chainNetwork } from "../index.setup.spec";

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
      // {
      //   id: `{id}#id`,
      //   type: "type",
      //   description: "name",
      //   mediaType: "application/ld+json",
      //   serviceEndpoint: `cellnode:/public/${cid}`,
      //   proof: cid,
      //   encrypted: "false",
      //   right: "",
      // },
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
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: {
          id: "IrCcJ8hl8t",
          type: "paragraph",
          data: {
            text: "The Emerging Eco DAO constitutes of stakeholders who are particpating in the transition to IoT-integrated clean cook stoves, and who are supporting regenerative household transitions.",
          },
        },
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
        ddoTags: [
          {
            category: "dao",
            tags: ["Market Relayer", "Rights"],
          },
        ],
      },
    },
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
        name: "Emerging Eco",
        image: "imageLink",
        logo: "logoLink",
        brand: "Emerging Eco",
        location: "Zambia",
        description: ".",
        attributes: [
          {
            key: "Usage",
            value: "Domestic",
          },
          {
            key: "Product",
            value: "SupaMoto credit tokens",
          },
        ],
        metrics: [
          {
            prefix: "USD",
            metric: "Token Price",
            suffix: "Average/NFT",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Credits",
            metric: "CARBON",
            suffix: "/month (moving average)",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Performance",
            metric: "Alpha",
            suffix: "",
            source: "https://example.com/dfdfcv",
          },
        ],
      },
    },
  ],
});

export const setup_protocol_ver_claims_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "protocol",
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
      // {
      //   id: `{id}#id`,
      //   type: "type",
      //   description: "name",
      //   mediaType: "application/ld+json",
      //   serviceEndpoint: `cellnode:/public/${cid}`,
      //   proof: cid,
      //   encrypted: "false",
      //   right: "",
      // },
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
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: {
          id: "IrCcJ8hl8t",
          type: "paragraph",
          data: {
            text: "The Emerging Eco DAO constitutes of stakeholders who are particpating in the transition to IoT-integrated clean cook stoves, and who are supporting regenerative household transitions.",
          },
        },
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
        ddoTags: [
          {
            category: "dao",
            tags: ["Market Relayer", "Rights"],
          },
        ],
      },
    },
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
        name: "Emerging Eco",
        image: "imageLink",
        logo: "logoLink",
        brand: "Emerging Eco",
        location: "Zambia",
        description: ".",
        attributes: [
          {
            key: "Usage",
            value: "Domestic",
          },
          {
            key: "Product",
            value: "SupaMoto credit tokens",
          },
        ],
        metrics: [
          {
            prefix: "USD",
            metric: "Token Price",
            suffix: "Average/NFT",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Credits",
            metric: "CARBON",
            suffix: "/month (moving average)",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Performance",
            metric: "Alpha",
            suffix: "",
            source: "https://example.com/dfdfcv",
          },
        ],
      },
    },
  ],
});

export const setup_protocol_cooking_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "protocol",
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
      // {
      //   id: `{id}#id`,
      //   type: "type",
      //   description: "name",
      //   mediaType: "application/ld+json",
      //   serviceEndpoint: `cellnode:/public/${cid}`,
      //   proof: cid,
      //   encrypted: "false",
      //   right: "",
      // },
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
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: {
          id: "IrCcJ8hl8t",
          type: "paragraph",
          data: {
            text: "The Emerging Eco DAO constitutes of stakeholders who are particpating in the transition to IoT-integrated clean cook stoves, and who are supporting regenerative household transitions.",
          },
        },
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
        ddoTags: [
          {
            category: "dao",
            tags: ["Market Relayer", "Rights"],
          },
        ],
      },
    },
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
        name: "Emerging Eco",
        image: "imageLink",
        logo: "logoLink",
        brand: "Emerging Eco",
        location: "Zambia",
        description: ".",
        attributes: [
          {
            key: "Usage",
            value: "Domestic",
          },
          {
            key: "Product",
            value: "SupaMoto credit tokens",
          },
        ],
        metrics: [
          {
            prefix: "USD",
            metric: "Token Price",
            suffix: "Average/NFT",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Credits",
            metric: "CARBON",
            suffix: "/month (moving average)",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Performance",
            metric: "Alpha",
            suffix: "",
            source: "https://example.com/dfdfcv",
          },
        ],
      },
    },
  ],
});

export const setup_protocol_fuel_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "protocol",
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
      // {
      //   id: `{id}#id`,
      //   type: "type",
      //   description: "name",
      //   mediaType: "application/ld+json",
      //   serviceEndpoint: `cellnode:/public/${cid}`,
      //   proof: cid,
      //   encrypted: "false",
      //   right: "",
      // },
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
        "@context": {
          ixo: "https://w3id.org/ixo/ns/protocol/",
          "@id": "@type",
          type: "@type",
          "@protected": true,
        },
        type: "ixo:entity#page",
        page: {
          id: "IrCcJ8hl8t",
          type: "paragraph",
          data: {
            text: "The Emerging Eco DAO constitutes of stakeholders who are particpating in the transition to IoT-integrated clean cook stoves, and who are supporting regenerative household transitions.",
          },
        },
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
        ddoTags: [
          {
            category: "dao",
            tags: ["Market Relayer", "Rights"],
          },
        ],
      },
    },
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
        name: "Emerging Eco",
        image: "imageLink",
        logo: "logoLink",
        brand: "Emerging Eco",
        location: "Zambia",
        description: ".",
        attributes: [
          {
            key: "Usage",
            value: "Domestic",
          },
          {
            key: "Product",
            value: "SupaMoto credit tokens",
          },
        ],
        metrics: [
          {
            prefix: "USD",
            metric: "Token Price",
            suffix: "Average/NFT",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Credits",
            metric: "CARBON",
            suffix: "/month (moving average)",
            source: "https://example.com/dfdfcv",
          },
          {
            prefix: "Performance",
            metric: "Alpha",
            suffix: "",
            source: "https://example.com/dfdfcv",
          },
        ],
      },
    },
  ],
});

// Types for typescript strict type checking, please ignore
export type SetupDaoConstantFields = ReturnType<typeof setup_dao_constants>;
