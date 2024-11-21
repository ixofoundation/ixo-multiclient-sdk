require("dotenv").config();

import { relayerVerifyAllEntities } from "../../flows/entities";
import { createQueryClient, generateWallets } from "../../helpers/common";
import { dids } from "../../setup/constants";
import {
  coinProtocol,
  impactCreditProtocol,
} from "../../setup/protocols/setupFlow";
import { chainNetwork } from "../../setup/constants";

beforeAll(() => Promise.all([createQueryClient(), generateWallets(false)]));

// Setup flow for Protocol creation
// ------------------------------------------

// first create yoma dao to save yomaDao to ./constants.ts
impactCreditProtocol(); //impacts root user

// next create daos and oracles and save coderByteOracle did to ./constants.ts
coinProtocol(); //impacts root user

// next verify all entities created
// relayerVerifyAllEntities(undefined, undefined, chainNetwork, [
//   "did:ixo:entity:a033a255d0001d4ba7a2d6fdf47309a9",
//   "did:ixo:entity:7e317b06a650da5ec35ce8fbbbc0b0c7",
// ]); //impacts root user
