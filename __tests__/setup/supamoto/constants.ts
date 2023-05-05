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
          "ipfs:bafkreieogbdlk7xdho6kwd2xtz7mvt6g6obwhvblnrjpfrc43pedleemb4",
        proof: "bafkreieogbdlk7xdho6kwd2xtz7mvt6g6obwhvblnrjpfrc43pedleemb4",
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
      // // TODO get cid from Shaun as Matias
      // {
      //   id: "{id}#terms-conditions",
      //   type: "LegalAgreement",
      //   description: "Terms and Conditions",
      //   mediaType: "application/pdf",
      //   serviceEndpoint: "ipfs:<cid>",
      //   proof: "<cid>",
      //   encrypted: "false",
      //   right: "#legal",
      // },
      // TODO get cid and Project Doc from Matias
      {
        id: "{id}#project-credential",
        type: "ProjectCredential",
        description: "Project Document",
        mediaType: "application/pdf",
        serviceEndpoint: `ipfs:<cid>`,
        proof: "<cid>",
        encrypted: "false",
        right: "",
      },
      {
        id: "{id}#collection-dashboard",
        type: "WebDashboard",
        description: "Collection Dashboard",
        mediaType: "application/html",
        serviceEndpoint: "emerging",
        proof: "",
        encrypted: "false",
        right: "#apitoken",
      },
    ],
  },
  // you can create linked resources that will be uploaded to the specified storage and resource will be saved
  // on entity linked resources with the cid as proof and service endpoint of provided storage.
  linkedResources: [
    // TODO
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
              id: dids.cleanCookingProtocol + "#FuelPurchase",
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

export const cookstoveIds = [
  202200001, 202200005, 202200007, 202200009, 202200010, 202200011, 202200012,
  202200013, 202200015, 202200016, 202200018, 202200020, 202200025, 202200028,
  202200034, 202200096, 202200099, 202200111, 202200189, 202200301, 202200309,
  202200372, 202200388, 310000004, 310000076, 310000095, 310000115, 310000163,
  310000205, 310000267, 310000341, 310000343, 310000405, 310000624, 310000745,
  310000749, 310000771, 310000774, 310000832, 310000879, 310001162, 310001224,
  310001353, 310001365, 310001421, 310001742, 310001813, 310001819, 310001856,
  310001864, 310001999, 310002006, 310002066, 310002108, 310002165, 310002195,
  310002214, 310002352, 310002365, 310002511, 310002578, 310002653, 310002766,
  310002768, 310002884, 310003024, 310003076, 310003080, 310003551, 310003633,
  310005726, 310007811, 310008327, 310008752, 310008928, 310008934, 310008961,
  310009369, 310009945, 310012706, 310013456, 310013483, 310014068, 310014791,
  310014870, 310014932, 310015802, 310015897, 310015928, 310016233, 310017019,
  310017126, 310017236, 310017478, 310017571, 310017700, 310018042, 310018331,
  310019032, 310019080, 310020612, 310020614, 310020762, 310020954, 310021047,
  310021108, 310021222, 310021223, 310021225, 310021338, 310021351, 310021358,
  310021407, 310021489, 310021816, 310021823, 310021918, 310021992, 310022093,
  310022125, 310022157, 310022158, 310022211, 310022219, 310022225, 310022273,
  310022288, 310022314, 310022421, 310022515, 310022697, 310022719, 310022784,
  310022811, 310022840, 310022888, 310022931, 310023055, 310023068, 310023074,
  310023118, 310023153, 310023212, 310023245, 310023283, 310023547, 310025085,
  310025198, 310025200, 310025233, 310025300, 310025325, 310025390, 310025398,
  310025409, 310025446, 310025570, 310028308, 310028764, 310029142, 310029182,
  310029369, 310029441, 310029811, 310029997, 310030266, 310030442, 310030721,
  310031447, 310032389, 310032587, 310032589, 310032590, 310032701, 310032952,
  310032962, 310032963, 310032969, 310032989, 310033438, 310033439, 310034102,
  310034281, 310035031, 310035220, 310035244, 310035247, 310035265, 310035385,
  310035508, 310036019, 310036122, 310036958, 310037403, 310038361,
];
