import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { chainNetwork, dids } from "../constants";

export const setup_collection_fairClimate_constants = () => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "asset/collection",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: dids.emergingDao,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: dids.ecsProject,
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
        serviceEndpoint: "https://w3s.link/ipfs/",
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
          "ipfs:bafkreiaskax4hz7s5e6vwnyvmns7usmgo6kt5kz5x2bsw4jbl5coyq3axa",
        proof: "bafkreiaskax4hz7s5e6vwnyvmns7usmgo6kt5kz5x2bsw4jbl5coyq3axa",
        encrypted: "false",
        right: "",
      },
      {
        id: `{id}#token`,
        type: "TokenMetadata",
        description: "Impact Token",
        mediaType: "application/json",
        serviceEndpoint:
          "ipfs:bafkreignbieyjhxphie2bmrk2dux2ny6rqeiz3sonly273b4hsh2lt6kte",
        proof: "bafkreignbieyjhxphie2bmrk2dux2ny6rqeiz3sonly273b4hsh2lt6kte",
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
        page: {
          pageTitle: "The SupaMoto Nifty",
          content: [
            {
              id: "809077f1-dead-4834-93dc-3bccdb13e0d6",
              type: "image",
              props: {
                backgroundColor: "default",
                textAlignment: "left",
                name: "Fair Climate Collection.jpg",
                url: "https://bafkreigbo3x5qrbcpl43rh2qdjtymhn5kfzqjktnp7fanwtkaynclczjlm.ipfs.w3s.link",
                caption: "",
                showPreview: true,
                previewWidth: 540,
              },
              children: [],
            },
            {
              id: "299ff1e4-08eb-402d-bb82-ebdc44c0563f",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 1,
              },
              content: [
                {
                  type: "text",
                  text: "An Innovative Contribution Mechanism",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "5391a825-fc32-460a-abeb-4fc7ab519459",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "The SupaMoto Nifty is an innovative digital Impact Asset that finances the distribution of a Modern Energy Cookstove to families in Lusaka, Zambia. This directly contributes the transition from traditional, polluting cooking methods to cleaner, more efficient cooking with renewable biomass pellets. The transition not only reduces global carbon emissions, but also significantly improves the health and livelihoods of people, by creating jobs, eliminating exposure to harmful smoke, and reducing the time it takes to cook on open fires.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "7b8b5c7d-5add-4eef-b48d-b1b215590045",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "2ae61167-a2c8-4895-9e4e-7cdcd208f42a",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "How This Works",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "8c889c6c-b5c6-4e1e-a49c-8438a548f86b",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "SupaMoto Nifty holders own the rights to receive a share of the carbon credits generated by a digitally-identified modern energy cookstove that is issued as part of a Collection of assets within a green, decentralised physical infrastructure network of devices.\nPlease note that these rights are subject to certain Terms of Purchase that can be viewed as part of the Verifiable Information available for this Collection.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "6153a9bd-74a8-4bab-b815-15a3d0415c7f",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "02dc2232-09d3-40f2-bbbb-38c100a08a9c",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 3,
              },
              content: [
                {
                  type: "text",
                  text: "Digitally Certified Carbon Credits",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "18140895-c36b-4cb7-bec8-b1b9a5865975",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Carbon credits, in the form of CARBON Impact Tokens, are issued on the Impacts Hub blockchain registry, and represent verified CO2 emission reductions that are each backed by a digital Impact Certificate.\nThe expected average yield is 3,000 CARBON credit tokens per annum, equivalent to 3.0 tonnes of CO2 emission reductions. A portion of the economic value generated is returned as incentives to the family generating these impacts, in the form of digital vouchers.‍ This provides families in emerging economies with an innovative onramp to decentralized finance and direct participation in the carbon economy.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "632cd996-8e75-46eb-955b-d4baa62a1fd3",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "d9ae71aa-6abb-4d7b-98d5-df8fb6c6e85b",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 3,
              },
              content: [
                {
                  type: "text",
                  text: "Impact Certification",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "a07aca15-90e3-48c3-8765-9a8a198927d6",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Impact Certificates accurately record the use of each clean cookstove using IoT sensors that monitor cooking sessions and the amount of renewable biomass pellets consumed, and provide highly credible, verified evidence for emission reductions. Claims containing verifiable data as evidence are automatically processed in near real-time, through a market-leading decentralised digital measurement, reporting, and verification (D-MRV) mechanism, using Causal AI. This transparent and accountable mechanism assures that carbon credits are of the highest integrity. The Emerging platform built by IXO World and Emerging Cooking Solutions has been cited by the UC Berkeley Carbon Trading Project as a leading example of how high-quality Carbon Credits can be generated for Clean Cooking.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "8ec25e9e-de82-4cf3-9ea9-d422509c10b7",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "1f53b5b9-1f17-465c-98ec-0e886ed7ab1f",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 3,
              },
              content: [
                {
                  type: "text",
                  text: "Carbon Offsets and Trading",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "53e63770-f50c-4296-bf61-a011db22ffba",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Carbon credits, represented as CARBON Impact Tokens, can be used to offset an individual's or organisation's carbon footprint from activities such as travel, or the other hard-to-abate production and consumption processes that are part of our daily lives and which negatively impact on the health of our planet.\nThese tokens can also be traded through peer-to-peer or decentralized exchanges, with both environmental impacts and financial returns, as the demand for carbon offsets continues to grow globally.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "81a3d263-4ca7-4af2-bbda-2a1f0b7e321d",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "19115427-53f9-4d0c-9b8a-807f3e00fb47",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 3,
              },
              content: [
                {
                  type: "text",
                  text: "Benefits to Local Communities",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "2a96251f-bb01-49d4-9672-57ff5b552ec5",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "With ",
                  styles: {},
                },
                {
                  type: "text",
                  text: "no upfront costs",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: " to the family, switching to clean cooking has never been easier, as the households immediately starts saving up to fifty percent on their monthly fuel bills, compared to cooking with charcoal. The benefits of switching are compelling, as this:",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "561fb18f-41a4-46d5-9b1b-443d319e6232",
              type: "bulletListItem",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Saves carbon emissions",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: " that are being produced on a scale of the entire airline industry, as 2.6 Billion people still cook with polluting charcoal or fossil fuels. Modern cookstoves are the solution.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "a0af304f-b2c3-44f4-ace0-ba3d44e0e8a5",
              type: "bulletListItem",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Stops destroying nature ",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: "by using renewable biomass pellet fuel, instead of burning wood and charcoal from hardwood forests.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "eb9d8024-68ab-4f43-a0e4-f3c3ad725d85",
              type: "bulletListItem",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Prevents health complications ",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: "by avoiding chronic inhalation of toxic smoke, which is especially harmful to children.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "ae9d8f72-ad87-4953-ac13-6c7b6d942336",
              type: "bulletListItem",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Improves the lives of women ",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: "who waste their productive hours collecting fuel and tending to fires.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "39854efb-7b8b-455c-a8d2-4a8d6cd5a6dd",
              type: "bulletListItem",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Promotes household regeneration ",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: "as families gain access to the carbon economy.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "d18d15c2-1486-4e7f-b06e-a74ef5769028",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "b177946a-8c93-43de-9287-5c2f0e283689",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 3,
              },
              content: [
                {
                  type: "text",
                  text: "Market Validation",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "60fecbae-17f4-4c09-8d33-e7c99d4a2f73",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Getting ",
                  styles: {},
                },
                {
                  type: "text",
                  text: "access to clean cooking",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: " with SupaMoto is life-changing for households in emerging markets.\nBesides ",
                  styles: {},
                },
                {
                  type: "text",
                  text: "saving money and time",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: ", families get all the benefits of modern cooking, with ",
                  styles: {},
                },
                {
                  type: "text",
                  text: "great customer support",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: ". SupaMoto is delivered as a ",
                  styles: {},
                },
                {
                  type: "text",
                  text: "clean energy utility",
                  styles: {
                    bold: true,
                  },
                },
                {
                  type: "text",
                  text: " that customers pay for monthly, whilst enjoying all the benefits of a SupaMoto stove.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "d7aa39e4-b484-45ac-8629-2d35ce07325e",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "link",
                  href: "https://vimeo.com/777611813",
                  content: [
                    {
                      type: "text",
                      text: "Watch the testimonials video to hear what customers have to say!",
                      styles: {
                        italic: true,
                      },
                    },
                  ],
                },
              ],
              children: [],
            },
            {
              id: "e50b0e3a-830a-441f-86f1-e44d65286cbc",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "202b97c4-bf97-47dd-a282-e624791bb755",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 3,
              },
              content: [
                {
                  type: "text",
                  text: "Expected Outcomes",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "7154e846-03e6-4dd8-9457-7dabaeb770a2",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "By directly participating in the emerging carbon economy, SupaMoto Nifty holders positively contribute to the global response to climate change, whilst supporting green economic growth in Zambia.",
                  styles: {},
                },
              ],
              children: [],
            },
            {
              id: "bcc566c0-c65b-4062-aff4-2fd3279ced4f",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "243e7ca6-d7be-49d6-89bb-78621efc14bb",
              type: "heading",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
                level: 3,
              },
              content: [
                {
                  type: "text",
                  text: "Disclosures",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "d5a6aa5b-f1c3-4000-941f-499fa54a2f03",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Legal and Regulatory Compliance",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "1ae0de85-2f5d-44a4-a9c2-464e223be106",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "The SupaMoto Nifty and its associated carbon credits are subject to applicable laws and regulations governing carbon trading, digital assets, and environmental certifications. Potential buyers and holders of SupaMoto Niftys should be aware of the legal frameworks in their respective jurisdictions and ensure compliance therewith.",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "70c97b7b-ab99-4431-8821-a46a89788728",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "61f2c6f1-43fb-4035-9d33-d0f7a080ab5d",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Risk Factors",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "89d162db-9003-4511-8b77-44d0aebcb445",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Purchasing and owning a SupaMoto Nifty involves certain risks, including but not limited to market volatility, regulatory changes, and technological risks associated with blockchain and IoT systems. Prospective buyers should conduct thorough due diligence and consider their risk tolerance before making a purchase.",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "9b35ddbb-73de-45a4-ba11-b35265962203",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "0a4e9fb6-53b8-4166-ac7c-9e33b4937358",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Terms of Purchase",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "3952375a-2e9e-4511-82b0-96da4693b6bf",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Ownership of SupaMoto Niftys is governed by specific Terms of Purchase, which outline the rights, obligations, and limitations of asset holders. These terms are accessible through the Verifiable Information provided for each Collection and should be reviewed carefully prior to acquisition.",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "eccc892c-7d7c-44ff-b937-d975bfc99f4a",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "ddfbb02a-81d8-4898-ae20-b4d7405b3dbc",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Data Privacy",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "c188dac9-e087-4157-bfc3-3cda5ec03949",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "The collection and processing of data through IoT sensors comply with applicable data privacy laws. Personal data of participants is handled with utmost confidentiality and is used solely for the verification and certification of carbon credits.",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "3f026451-3597-423c-ac91-a46b6fc1b594",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
            {
              id: "5fcc7971-49ea-4642-8e06-b67855e60ad9",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Financial Disclosures",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "8d085366-d0f3-4267-a21e-e5cf84533c2d",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [
                {
                  type: "text",
                  text: "The economic value of carbon credits and the financial returns from their trading or utilization are subject to market conditions and are not guaranteed. The SupaMoto Nifty is is an Impact-Producing commodity for generating Carbon Offsets and explicity does not provide a Security that offers any investment returns. Purchasing or owning a SupaMoto Nifty does not guarantee the owner any economic returns and only has the purpose of providing a mechanism for contributing to social and climate Impacts.\nSupaMoto and its affiliates make no representations regarding the future value or marketability of CARBON Impact Tokens.",
                  styles: {
                    italic: true,
                  },
                },
              ],
              children: [],
            },
            {
              id: "2055b51b-25b1-4c67-bd6c-a23b6ad16a76",
              type: "paragraph",
              props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left",
              },
              content: [],
              children: [],
            },
          ],
        },
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
              id: dids.cleanCookingProtocol + "#fuelPurchase",
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
