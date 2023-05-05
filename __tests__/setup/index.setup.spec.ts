require("dotenv").config();

import { ChainNetwork } from "../../src/custom_queries/chain.types";
import { sendTokens } from "../flows/cosmos";
import { generateWallets } from "../helpers/common";
import { classesFlow } from "./classes/setupFlow";
import { ecsFlow } from "./ecs/setupFlow";
import {
  emergingDaoFlow,
  emergingOraclesFlow,
  emergingProtocolsFlow,
} from "./emerging/setupFlow";
import { impactsFlow } from "./impacts/setupFlow";
import { propectFlow } from "./prospect/setupFlow";
import { cookstovesFlow } from "./supamoto/setupFlow";
import { web3Storage } from "./web3";

export const chainNetwork: ChainNetwork = "devnet";

beforeAll(() => generateWallets(false));

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

// next can create the other daos etc and save ecsDao did to ./constants.ts
ecsFlow(); //ecs user
// Will issue device creds and claims etc

// first send extra tokens to ecs user to have enough for gas fees to create all entities
sendTokens();
sendTokens();
sendTokens();
// TODO
cookstovesFlow(); //ecs user

// custom test for web3 storage uploading
// web3Storage();
