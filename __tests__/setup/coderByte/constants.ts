import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { dids } from "../constants";
import { chainNetwork } from "../index.setup.spec";

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
});

export const setup_oracle_education_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "oracle/evaluation",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.yomaDao,
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
});
