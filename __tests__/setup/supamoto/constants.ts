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
            text: "A SupaMoto NFT owner has the right to continuously claim the carbon emission reductions produced by a household using a SupaMoto smart cookstove. The household receives a cookstove device at no cost and only pays for renewable biomass pellets. This saves households up to 50% on their monthly cooking energy expenditure, compared to purchasing polluting fuels such as charcoal. When carbon emission reductions are verified CARBON credit tokens get generated to your account. The CARBON balance in your account can be used to offset your own footprint, shared with others, or swapped for digital cash. Climate Impacts and Socio-economic benefits: Clean cooking provides environmental, economic and societal benefits. It reduces greenhouse gas emissions and mitigates environmental degradation. Emerging economy households save on fuel costs and this improves their financial stability. Clean cooking can improve health by reducing indoor air pollution and the risks of fires, particularly for women and children who are most exposed to toxic smoke inhalation. Clean cooking has the potential to empower women and promote gender equality by improving their health, reducing their workload, and increasing their financial independence and decision-making power. Scaling access to clean cooking in communities stimulates the local economy by creating new job opportunities in the promotion, distribution, and maintenance of clean cookstoves. How it works:",
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
        name: "SupaMoto Malawi",
        image: "imageLink",
        logo: "logoLink",
        brand: "SupaMoto",
        location: "MW",
        description:
          "The SupaMoto clean cookstove is a smart, IoT-connected device that helps households cut carbon emissions while cooking with affordable and renewable biomass fuel. This convenient solution offers a more cost-effective, healthy, and time-saving alternative to traditional cooking methods.",
        attributes: [
          {
            key: "Model",
            value: "MimiMoto",
          },
          {
            key: "Location",
            value: "Malawi",
          },
          {
            key: "Fuel",
            value: "Renewable Biomass Pellets",
          },
          {
            key: "Usage",
            value: "Domestic",
          },
          {
            key: "Conversion",
            value: "1kg = 0.01 credits",
          },
          {
            key: "Product",
            value: "CARBON credit tokens",
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
