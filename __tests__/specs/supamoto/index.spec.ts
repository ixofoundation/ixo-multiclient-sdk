require("dotenv").config();

import { ChainNetwork } from "../../../src/custom_queries/chain.types";
import { bankBasic, sendTokens } from "../../flows/cosmos";
import { relayerVerifyAllEntities } from "../../flows/entities";
import { generateBlockchainTestUsers } from "../../flows/iids";
import {
  createQueryClient,
  generateNewWallet,
  generateWallets,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import { classesFlow } from "../../setup/classes/setupFlow";
import { dids } from "../../setup/constants";
import { ecsDaoFlow, ecsFlow, ecsProjectFlow } from "../../setup/ecs/setupFlow";
import {
  emergingAssetsFlow,
  emergingDaoFlow,
  emergingOraclesFlow,
  emergingProtocolsFlow,
} from "../../setup/emerging/setupFlow";
import {
  claimFormObjectsProtocol,
  impactsFlow,
} from "../../setup/impacts/setupFlow";
import { propectFlow } from "../../setup/prospect/setupFlow";
import {
  cookstovesFlow,
  cookstovesFlowDevnet,
} from "../../setup/supamoto/setupFlow";
import { web3Storage } from "../../setup/web3";
import { chainNetwork } from "../../setup/constants";
import * as Emerging from "../../setup/emerging/extra";
import * as Claims from "../../flows/claims";

beforeAll(() => Promise.all([createQueryClient(), generateWallets(false)]));

// RUN BELOW IF USING LOCAL BLOCKCHAIN TO GIVE USERS FUNDS
// generateBlockchainTestUsers();
// [
//   process.env.ROOT_IMPACTS,
//   process.env.ROOT_EMERGING,
//   process.env.ROOT_ECS,
//   process.env.ROOT_PROSPECT,
//   process.env.ASSERT_USER_ECS,
//   process.env.ASSERT_USER_PROSPECT_ORACLE,
//   process.env.ASSERT_USER_CARBON_ORACLE,
//   process.env.ROOT_ED_EMERGING,
//   process.env.ROOT_ED_ECS,
//   process.env.ROOT_ED_PROSPECT,
// ].map((did) => {
//   if (did) {
//     describe("Send funds to users", () => {
//       beforeAll(() => generateNewWallet(WalletUsers.alice, did));
//       bankBasic();
//     });
//   }
// });

// Setup flow for dao and group creations
// ------------------------------------------
// first create god classes and save 4 top classes dids in ./constants.ts
classesFlow(); //impacts user

// next create impacts dao and save impactsRootUserDid and impactsDao in ./constants.ts
impactsFlow(); //impacts user

// next create emerging dao to save emergingDao to ./constants.ts
emergingDaoFlow(); //emerging user

// next create emerging oracle to save carbonOracle did to ./constants.ts
emergingOraclesFlow(); //emerging user

// next create emerging protocols and save cookstoveAssetProtocol to ./constants.ts
emergingProtocolsFlow(); //emerging user

// next create daos and oracles and save prospectOracle did to ./constants.ts
propectFlow(); //prospect user

// next create ecs daos and save ecsDao did to ./constants.ts
ecsDaoFlow(); //ecs user
// next create ecs owned assetCollection etc and save assetCollectionDid did to ./constants.ts
ecsFlow(); //ecs user
// Will issue device creds and claims etc
// send extra tokens to ecs user to have enough for gas fees to create all entities
sendTokens(5);

// next create emerging protocols and save carbonAsset to ./constants.ts
emergingAssetsFlow(); //emerging user

// next create ecs owned project and save assetCollectionDid did to ./constants.ts
ecsProjectFlow(); //ecs user

// next create cookstoves
cookstovesFlowDevnet(); //ecs user
// cookstovesFlow(); //ecs user, only for testnet and main net

// next verify all entities created
relayerVerifyAllEntities(undefined, undefined, chainNetwork); //impacts root user
relayerVerifyAllEntities(undefined, dids.impactsDao, chainNetwork); //impacts dao user
relayerVerifyAllEntities(
  process.env.ROOT_EMERGING,
  dids.emergingDao,
  chainNetwork
); //emerging dao user

// custom test for web3 storage uploading
// web3Storage();

// ------------------------------------------
// Claim Form Object Protocol
// ------------------------------------------
// claimFormObjectsProtocol(); // claim form object protocol user, add claimFormObjectsProtocol to constants.ts
// relayerVerifyAllEntities(undefined, dids.impactsDao, chainNetwork, [
//   dids.claimFormObjectsProtocol,
// ]); // impacts dao user

// ------------------------------------------
// Unconnected COLLECTION
// ------------------------------------------
// Extras needed to correct current collection and project
// Emerging.cookstovesExtra();
// New Protocol creation, set legacyCookingProtocol in constants.ts
// Emerging.emergingLegacyProtocolsFlow();
// New Collection creation, set legacyCollection and adminEntityAccounts.legacyCollection in constants.ts
// Emerging.legacyCollectionFlow();
// New Cookstove minting
// Emerging.legacyCookstovesFlow();
// verify all entities created
// relayerVerifyAllEntities(
//   process.env.ROOT_EMERGING,
//   dids.emergingDao,
//   chainNetwork
// ); //emerging dao user
// Create new collection for fp claims, uncommment evaluatePayment to use default
// Claims.supamotoCreateCollection();
// Create new collection for CER claims
// Claims.supamotoCreateCollection();
// Create claims and after done run carbon manager
// Claims.supamotoClaims2();
// extra for evaluating any missed claims
// Claims.supamotoEvaluateFuelPurchases();
// extra analytics
// Claims.supamotoClaims3();
