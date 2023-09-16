require("dotenv").config();

import { ChainNetwork } from "../../src/custom_queries/chain.types";
import { sendTokens } from "../flows/cosmos";
import { relayerVerifyAllEntities } from "../flows/entities";
import { generateWallets } from "../helpers/common";
import { coderbyteFlow } from "./coderByte/setupFlow";
import { dids } from "./constants";
import {
  learnershipsFlow,
  learnershipsFlowDevnet,
} from "./umuzi/learnershipsFlow";
import {
  umuziAssetsFlow,
  umuziDaoFlow,
  umuziFlow,
  umuziProjectFlow,
  umuziProtocolsFlow,
  yomaDaoFlow,
} from "./umuzi/setupFlow";
import { web3Storage } from "./web3";

export const chainNetwork: ChainNetwork = "devnet";

beforeAll(() => generateWallets(false));

// Setup flow for Umuzi dao and assets
// ------------------------------------------

// first create yoma dao to save yomaDao to ./constants.ts
yomaDaoFlow(); //yoma user

// next create daos and oracles and save coderByteOracle did to ./constants.ts
coderbyteFlow(); //coderbyte user

// TODO not sure who own protocol? (umuzi or yoma)
// next create yoma protocols and save learnershipProtocol to ./constants.ts
umuziProtocolsFlow(); //emerging user

// next create umuzi daos and save umuziDao did to ./constants.ts
umuziDaoFlow(); //umuzi user
// next create umuzi owned assetCollection etc and save assetCollectionDid did to ./constants.ts
umuziFlow(); //ecs user
// Will issue device creds and claims etc
// send extra tokens to umuzi user to have enough for gas fees to create all entities
sendTokens(5);

// next create umuzi education asset and save educationAssetDid to ./constants.ts
umuziAssetsFlow(); //umuzi user

// next create umuzi owned project and save umuziProjectDid did to ./constants.ts
umuziProjectFlow(); //umuzi user

// next create learnerships
learnershipsFlowDevnet(); //umuzi user
// learnershipsFlow(); //umuzi user, only for testnet and main net

// next verify all entities created
relayerVerifyAllEntities(undefined, dids.impactsDao, chainNetwork); //impacts dao user
relayerVerifyAllEntities(process.env.ROOT_YOMA, dids.yomaDao, chainNetwork); //yoma dao user

// custom test for web3 storage uploading
// web3Storage();
