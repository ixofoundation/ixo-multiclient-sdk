import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { chainNetwork, dids } from "../constants";

// You can define your group constants here, to create more than one group
// you can just copy the whole management_group field and make another one
// for example members_group, oracle_group, yarn start

export const setup_group_constants = ({
  daoVotingCw4ContractCode,
  daoVotingCw20StakedContractCode,
  cw4ContractCode,
  cw20BaseContractCode,
  cw20StakeContractCode,
}) => ({
  management_group: {
    name: "Management",
    description: "Management group for admin related management",
    image_url:
      "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
    proposal_modules_instantiate_info: {
      allow_revoting: false,
      close_proposal_on_execution_failure: true,
      max_voting_period: {
        time: 604800, // in seconds
      },
      // time or null
      min_voting_period: null,
      only_members_execute: true,
      pre_propose_info: {
        // deposit info or null for none
        deposit_info: {
          amount: "1000000",
          denom: {
            // One of token | voting_module_token must be used
            token: {
              denom: {
                // native with denom | cw20 with address
                native: "uixo",
              },
            },
            // voting_module_token: {}
          },
          // 'always' | 'only_passed' | 'never'
          refund_policy: "only_passed",
        },
        open_proposal_submission: false,
      },
      threshold: {
        // One of threshold_quorum | absolute_percentage | absolute_count must be used
        // threshold_quorum: {
        //   quorum: {
        //     percent: "0.30", // "{0.60}" if want percentage, then set majority to undefined
        //     majority: undefined, // {} if want majority, then set percentage to undefined
        //   },
        //   threshold: {
        //     percent: undefined, // "{0.40}" if want percentage, then set majority to undefined
        //     majority: {}, // {} if want majority, then set percentage to undefined
        //   },
        // },
        // absolute_percentage: {
        //   percent: "0.50", // "{0.50}" if want percentage, then set majority to undefined
        //   majority: undefined, // {} if want majority, then set percentage to undefined
        // },
        absolute_count: {
          threshold: "2",
        },
      },
    },
    // voting_module_instantiate_info can be one of the cases or null
    // 'membership' | 'multisig'
    voting_module_instantiate_info: {
      code_id: daoVotingCw4ContractCode,
      msg: {
        cw4_group_code_id: cw4ContractCode,
        initial_members: [
          { addr: "ixo19gxr25tp5x4yky57r9gcpkykjnkph3ee646t2k", weight: 1 },
        ],
      },
    },
    // 'staking' with new tokensContract
    // voting_module_instantiate_info: {
    //   code_id: daoVotingCw20StakedContractCode,
    //   msg: {
    //     token_info: {
    //       new: {
    //         code_id: cw20BaseContractCode,
    //         decimals: 6,
    //         marketing: null,
    //         initial_balances: [
    //           {
    //             address: "ixo19gxr25tp5x4yky57r9gcpkykjnkph3ee646t2k",
    //             amount: "25",
    //           },
    //         ],
    //         // token supply (if want 1 million tokens) minus sum of initial balances distributed on top
    //         initial_dao_balance: "1000000000", // can be null then only initial_balances will be supply
    //         // token name
    //         label: "TOKEN",
    //         // token name
    //         name: "TOKEN",
    //         // token symbol, must be 3 chars min
    //         symbol: "TOK",
    //         staking_code_id: cw20StakeContractCode,
    //         unstaking_duration: {
    //           time: 86400, // in seconds
    //         },
    //       },
    //     },
    //     active_threshold: null,
    //   },
    // },
    // 'staking' with old tokensContract
    // voting_module_instantiate_info: {
    //   code_id: daoVotingCw20StakedContractCode,
    //   msg: {
    //     token_info: {
    //       existing: {
    //         address: "", // tokenContractAddress
    //         staking_contract: {
    //           new: {
    //             staking_code_id: cw20StakeContractCode,
    //             unstaking_duration: 86400, // in seconds
    //           },
    //         },
    //       },
    //     },
    //     active_threshold: null,
    //   },
    // },
  },
  members_group: {
    name: "Members",
    description: "Members group",
    image_url:
      "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
    proposal_modules_instantiate_info: {
      allow_revoting: false,
      close_proposal_on_execution_failure: true,
      max_voting_period: {
        time: 604800, // in seconds
      },
      // time or null
      min_voting_period: null,
      only_members_execute: true,
      pre_propose_info: {
        // deposit info or null for none
        deposit_info: {
          amount: "1000000",
          denom: {
            // One of token | voting_module_token must be used
            token: {
              denom: {
                // native with denom | cw20 with address
                native: "uixo",
              },
            },
            // voting_module_token: {}
          },
          // 'always' | 'only_passed' | 'never'
          refund_policy: "only_passed",
        },
        open_proposal_submission: false,
      },
      threshold: {
        // One of threshold_quorum | absolute_percentage | absolute_count must be used
        threshold_quorum: {
          quorum: {
            percent: "0.30", // "{0.60}" if want percentage, then set majority to undefined
            majority: undefined, // {} if want majority, then set percentage to undefined
          },
          threshold: {
            percent: undefined, // "{0.40}" if want percentage, then set majority to undefined
            majority: {}, // {} if want majority, then set percentage to undefined
          },
        },
        // absolute_percentage: {
        //   percent: "0.50", // "{0.50}" if want percentage, then set majority to undefined
        //   majority: undefined, // {} if want majority, then set percentage to undefined
        // },
        // absolute_count: {
        //   threshold: "2",
        // },
      },
    },
    // voting_module_instantiate_info can be one of the cases or null
    // 'membership' | 'multisig'
    // voting_module_instantiate_info: {
    //   code_id: daoVotingCw4ContractCode,
    //   msg: {
    //     cw4_group_code_id: cw4ContractCode,
    //     initial_members: [
    //       { addr: "ixo19gxr25tp5x4yky57r9gcpkykjnkph3ee646t2k", weight: 1 },
    //     ],
    //   },
    // },
    // 'staking' with new tokensContract
    voting_module_instantiate_info: {
      code_id: daoVotingCw20StakedContractCode,
      msg: {
        token_info: {
          new: {
            code_id: cw20BaseContractCode,
            decimals: 6,
            marketing: null,
            initial_balances: [
              {
                address: "ixo19gxr25tp5x4yky57r9gcpkykjnkph3ee646t2k",
                amount: "25",
              },
            ],
            // token supply (if want 1 million tokens) minus sum of initial balances distributed on top
            initial_dao_balance: "1000000000", // can be null then only initial_balances will be supply
            // token name
            label: "IMPACT",
            // token name
            name: "IMPACT",
            // token symbol, must be 3 chars min
            symbol: "IMPACT",
            staking_code_id: cw20StakeContractCode,
            unstaking_duration: {
              time: 86400, // in seconds
            },
          },
        },
        active_threshold: null,
      },
    },
    // 'staking' with old tokensContract
    // voting_module_instantiate_info: {
    //   code_id: daoVotingCw20StakedContractCode,
    //   msg: {
    //     token_info: {
    //       existing: {
    //         address: "", // tokenContractAddress
    //         staking_contract: {
    //           new: {
    //             staking_code_id: cw20StakeContractCode,
    //             unstaking_duration: 86400, // in seconds
    //           },
    //         },
    //       },
    //     },
    //     active_threshold: null,
    //   },
    // },
  },
});

export const setup_dao_constants = ({
  management,
  groupAddresses,
}: {
  management: string;
  groupAddresses: string[]; // for each group address a linkedEntity will be created
}) => ({
  entity: {
    // type of entity eg dao/protocol/asset/oracle
    entityType: "dao",
    // please use Impact DAO's did as relayerNode eg dids.impactsDao
    relayerNode: undefined,
    // for context class below please use the parent dao/protocol/asset class did provided by ixo eg dids.daoClass
    contextClass: "",
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
    verification: [
      {
        relationships: ["authentication"],
        method: {
          id: `{id}#${management}`,
          type: "CosmosAccountAddress",
          blockchainAccountID: management,
          controller: "{id}",
        },
      },
    ],
    // for each group address a linkedEntity will be created
    groupAddresses,
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
export type SetupGroupConstantKeys = keyof ReturnType<
  typeof setup_group_constants
>;
export type ChainNetwork = "devnet" | "testnet" | "mainnet";
export type LinkedResourcesUploaded = {
  name: string;
  cid: string;
  type: string;
  storage: "cellnode" | "ipfs";
}[];
