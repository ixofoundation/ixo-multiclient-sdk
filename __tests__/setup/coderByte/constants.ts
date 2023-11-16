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
        serviceEndpoint: "ipfs:bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
        proof: "bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:bafkreigj5k3q4z4wowsqjua6czufu6fp2zteijs34wy3bq3uujqfrvqgqm",
        proof: "bafkreigj5k3q4z4wowsqjua6czufu6fp2zteijs34wy3bq3uujqfrvqgqm",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:bafkreidkkbp6wmilmy4d5jtt3ywjlfklcubnxm4mnmj3g2kupjl4sr6s3i",
        proof: "bafkreidkkbp6wmilmy4d5jtt3ywjlfklcubnxm4mnmj3g2kupjl4sr6s3i",
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
      {
        type: "Settings",
        id: "{id}#profile",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint: "ipfs:bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
        proof: "bafkreia6oml4bshg4rwyrxwzggq25gdqzfaroxjpnir65jgezu55braoe4",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#page",
        description: "Page",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:bafkreigkxr7h2dz6dmt2cd4z2hb3erakumxo22ihgo4iwpp35tv52qzlja",
        proof: "bafkreigkxr7h2dz6dmt2cd4z2hb3erakumxo22ihgo4iwpp35tv52qzlja",
        encrypted: "false",
        right: "",
      },
      {
        type: "Settings",
        id: "{id}#tags",
        description: "Tags",
        mediaType: "application/ld+json",
        serviceEndpoint: "cellnode:bafkreicmp2qh2id7x3iys26dag45hyb6ii37f26qbxjndbgk5oemdd2zjq",
        proof: "bafkreicmp2qh2id7x3iys26dag45hyb6ii37f26qbxjndbgk5oemdd2zjq",
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
