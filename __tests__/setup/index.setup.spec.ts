require("dotenv").config();

import { ChainNetwork } from "../../src/custom_queries/chain.types";
import { generateWallets } from "../helpers/common";
import { classesFlow } from "./classes/setupFlow";
import { ecsFlow } from "./ecs/setupFlow";
import { emergingDaoFlow, emergingProtocolsFlow } from "./emerging/setupFlow";
import { impactsFlow } from "./impacts/setupFlow";
import { propectFlow } from "./prospect/setupFlow";
import { scalnyxFlow } from "./scalnyx/setupFlow";
import { supamotoFlow } from "./supamoto/setupFlow";

export const chainNetwork: ChainNetwork = "devnet";

beforeAll(() => generateWallets(false));

// Setup flow for dao and group creations
// ------------------------------------------

// first create god classes and save dids in ./constants.ts
classesFlow();

// next create impacts dao and save did in ./constants.ts
impactsFlow();

// next create emerging dao to save did to ./constants.ts
emergingDaoFlow();

// next can create the other daos etc
emergingProtocolsFlow();
ecsFlow();
propectFlow();
scalnyxFlow();
supamotoFlow();
