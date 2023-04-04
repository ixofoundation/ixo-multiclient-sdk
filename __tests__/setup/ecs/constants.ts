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
            text: "The Impact DAO cooperative makes outcomes-based investments into innovations, projects and ventures that can dleiver Internet of Impact solutions. Members of the DAO are pioneering innovators, investors, builders, and implementors who contribute capital, work, open-source software, and market access opportunities. The DAO treasury provides financing for the ecosystem by growing a portfolio of assets and by generating revenues from its investments. The DAO Tokens represent each member's participation share in the treasury that can be exchanged after the DAO breaks even. More recent investors recive a liquidation preference.",
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
            tags: ["Market Relayer"],
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
        name: "Impact DAO 1",
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        logo: "logoLink",
        brand: "Impact DAO",
        location: "Global",
        description:
          "The Impact DAO cooperative consists of participants who are building the Internet of Impact to address sustainable development, human security, energy transitions, and ecological regeneration..",
        attributes: [
          {
            key: "Model",
            value: "MimiMoto",
          },
          {
            key: "Location",
            value: "Global",
          },
          {
            key: "Usage",
            value: "Global",
          },
          {
            key: "Product",
            value: "Impact DAO tokens",
          },
        ],
        metrics: [
          {
            prefix: "$IMPACT",
            metric: "Token Price",
            suffix: "",
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
