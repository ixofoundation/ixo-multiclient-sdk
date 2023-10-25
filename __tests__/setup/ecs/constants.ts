import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { chainNetwork, dids } from "../constants";

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
      {
        id: `{id}#profile`,
        type: "Settings",
        description: "Profile",
        mediaType: "application/ld+json",
        serviceEndpoint:
          "ipfs:bafkreie4lmu5whsqsj24c4u6xwcoqevnyjyngqzmc4pwce7sdhjt7ti2rm",
        proof: "bafkreie4lmu5whsqsj24c4u6xwcoqevnyjyngqzmc4pwce7sdhjt7ti2rm",
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
              text: "Emerging Cooking Solutions (ECS) is a pioneering climate technology company empowering the transition to clean cooking and green household energy in emerging markets where we are significantly reducing deforestation, carbon emissions, and the harmful inhalants produced by traditional cooking fuels that have serious environmental and health impacts.&nbsp;",
            },
          },
          {
            id: "_9vyvov_tG",
            type: "paragraph",
            data: {
              text: "The flagship of our innovation portfolio is a modern gasifying biomass cookstove that is the most energy-efficient and lowest-emission device in the market.",
            },
          },
          {
            id: "T7wWZQQy54",
            type: "paragraph",
            data: {
              text: "Our smart cookstove devices are embedded with a proprietary IoT sensor technology that records usage of the stove and enables us to implement a subscription-based Energy Utility business model. Customers make monthly payments using mobile money, to receive deliveries of renewable biomass pellets that we manufacture through our factory in Zambia. This saves families up to 50% of their monthly energy bill, compared to charcoal.",
            },
          },
          {
            id: "MK_Z8NDz0Y",
            type: "paragraph",
            data: {
              text: "The only real constraint to scaling this utility model has been the capital costs of the hardware device. Together with ixo, we have innovated a world-first digital measurement, verification and reporting (dMRV) mechanism using AI and blockchain technology, to certify emission reductions in accordance with the Gold Standard Methodology, and directly issue digital carbon credits that can generate immediate cash-flows.",
            },
          },
          {
            id: "hpFizTi2bc",
            type: "paragraph",
            data: {
              text: "Our Emerging Eco digital platform is now available through a SaaS model to any distributor of Clean Cooking devices, eMobility solutions, or other metered energy-saving devices.&nbsp;",
            },
          },
          {
            id: "vEoUM94GQu",
            type: "paragraph",
            data: {
              text: "ECS has a proven track record of growing market access and our products already making a positive impact across five African countries. Our strategic partnerships with local organizations, NGOs, and governments will enable us to scale our distribution networks and reach millions of households. We have been awarded a significant grant through the Modern Cooking Facility for Africa (MCFA) financing program, to distribute more than 70,000 of our cookstoves in Zambia.",
            },
          },
          {
            id: "29XTMr6qNO",
            type: "paragraph",
            data: {
              text: "As the demand for sustainable energy solutions continues to grow, ECS is well-positioned to capture a significant share of the clean household energy supply in emerging markets.",
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
          "https://github.com/emerging-eco/configs/blob/main/settings/config.json",
        entityTags: [
          {
            category: "DAO Type",
            tags: ["Enterprise"],
          },
          {
            category: "SDGs",
            tags: [
              "SDG13 – Climate Action",
              "SDG7 – Affordable and Clean Energy",
              "SDG9 – Industry, Innovation and Infrastructure",
            ],
          },
        ],
      },
    },
  ],
});

// Types for typescript strict type checking, please ignore
export type SetupDaoConstantFields = ReturnType<typeof setup_dao_constants>;
