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
  310035508, 310036019, 310036122, 310036958, 310037403, 310038361, 31000605,
  202200002, 202200004, 202200029, 202200052, 202200060, 202200094, 202200114,
  202200121, 202200128, 202200143, 202200153, 202200159, 202200160, 202200164,
  202200168, 202200178, 202200181, 202200185, 202200194, 202200200, 202200204,
  202200205, 202200240, 202200243, 202200246, 202200248, 202200249, 202200256,
  202200257, 202200264, 202200265, 202200267, 202200271, 202200275, 202200276,
  202200280, 202200289, 202200305, 202200311, 202200313, 202200327, 202200329,
  202200333, 202200339, 202200342, 202200346, 202200362, 202200365, 202200366,
  202200367, 202200368, 202200387, 310000099, 310000199, 310000315, 310000380,
  310000446, 310000463, 310000494, 310000538, 310000727, 310000790, 310000861,
  310000926, 310001144, 310001160, 310001271, 310001432, 310001538, 310001621,
  310001683, 310001796, 310001808, 310001814, 310001854, 310001858, 310001960,
  310002017, 310002018, 310002030, 310002063, 310002260, 310002399, 310002493,
  310002498, 310002501, 310002614, 310002838, 310003033, 310003049, 310003059,
  310003208, 310003357, 310003455, 310003499, 310003587, 310004757, 310005392,
  310006011, 310006023, 310006039, 310006365, 310006454, 310006611, 310007047,
  310007728, 310007815, 310007918, 310008166, 310009279, 310009514, 310013665,
  310014681, 310014867, 310015246, 310015407, 310015562, 310016957, 310017865,
  310017935, 310019810, 310020641, 310020718, 310020761, 310021106, 310021170,
  310021201, 310021308, 310021347, 310021352, 310021375, 310021414, 310021419,
  310021574, 310021635, 310021684, 310021689, 310022155, 310022168, 310022323,
  310022588, 310022622, 310022946, 310023021, 310023041, 310023139, 310023254,
  310023460, 310025097, 310025136, 310025310, 310025326, 310025392, 310025404,
  310025405, 310025442, 310025565, 310028173, 310028344, 310028437, 310028782,
  310028849, 310028919, 310029068, 310029134, 310029201, 310029328, 310029340,
  310029372, 310029399, 310029910, 310030154, 310030183, 310030471, 310030514,
  310030694, 310032101, 310032239, 310032242, 310032373, 310032385, 310032432,
  310032439, 310032504, 310032517, 310032533, 310032534, 310032571, 310032602,
  310032625, 310032655, 310032668, 310032676, 310032821, 310032860, 310032895,
  310032978, 310033009, 310033014, 310033090, 310033125, 310033126, 310033128,
  310033144, 310033145, 310033146, 310033148, 310033215, 310033220, 310033221,
  310033222, 310033287, 310033309, 310033340, 310033386, 310033475, 310033533,
  310033637, 310033680, 310033727, 310033728, 310033730, 310033861, 310033868,
  310033886, 310033954, 310033993, 310034045, 310034046, 310034050, 310034057,
  310034094, 310034135, 310034139, 310034148, 310034153, 310034157, 310034176,
  310034195, 310034198, 310034199, 310034209, 310034282, 310034355, 310034422,
  310034454, 310034485, 310034525, 310034559, 310034624, 310034625, 310034632,
  310034691, 310034693, 310034731, 310034737, 310034833, 310034969, 310035028,
  310035029, 310035101, 310035139, 310035166, 310035169, 310035194, 310035236,
  310035250, 310035254, 310035267, 310035268, 310035277, 310035388, 310035809,
  310035873, 310038435, 310038471, 310076323, 646000117, 820092043,
];
