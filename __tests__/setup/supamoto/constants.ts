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
