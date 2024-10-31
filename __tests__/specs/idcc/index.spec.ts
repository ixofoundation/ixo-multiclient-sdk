require("dotenv").config();

import { createQueryClient, generateWallets } from "../../helpers/common";
import {
  idccDaoFlows,
  idccDAOPagesFlows,
  idccDAOprofilesFlows,
  idccDAOtagsFlows,
  idccDAOUpdateFlows,
  idccProjectsFlows,
} from "../../setup/idcc/setupFlows";
import { idcc_constants } from "../../setup/idcc/creds";
import { relayerVerifyAllEntities } from "../../flows/entities";
import { chainNetwork } from "../../setup/constants";

beforeAll(() => Promise.all([createQueryClient(), generateWallets(true)]));

// Setup flow for dao and group creations
// ------------------------------------------
// idccDaoFlows();
// idccDAOprofilesFlows();
// idccDAOtagsFlows();
// idccDAOPagesFlows();
// idccDAOUpdateFlows();
// idccProjectsFlows();

// next verify all entities created
relayerVerifyAllEntities(
  process.env.ROOT_IMPACTS, //devnet + testnet
  // process.env.ROOT_TEST_1_YOMA_RELAYER, //devnet + testnet
  // "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb", //testnet impacts dao relayer 
  // "did:ixo:entity:3700e507b54ba7092d3f1c4873af26ab", //testnet yoma dao relayer
  "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d", //devnet impacts dao relayer
  chainNetwork,
  [
    // "did:ixo:entity:8e7ccb1f41da8c240fae6832887bd960", //testnet impacts dao relayer 
    // "did:ixo:entity:f5742bc47d4422bb8b812d3b22335ae3", //testnet yoma dao relayer
    // "did:ixo:entity:9ca13aebcd50ce383658af6a5753adaf", //testnet yoma dao relayer
    // "did:ixo:entity:708a8e3831f5ca929a575ca62c8c37df", //testnet impacts dao relayer
    // "did:ixo:entity:156663f8f9f0185a2f7f577472fe0643", //testnet yoma dao relayer
    // "did:ixo:entity:c7187a0f97c35724b7ebbed0b86bf0ff", //testnet yoma dao relayer
    // "did:ixo:entity:500b1105525375d19790c67fb74fa3ce", //testnet yoma dao relayer
    // "did:ixo:entity:a9b6a92e592a7260daa16221acfb715f", //testnet impacts dao relayer
    // "did:ixo:entity:ff1cfbac3efbcda08cbd24b80a3afec5", //testnet yoma dao relayer
    // "did:ixo:entity:ef7ae172394a6e72b8526d334dad3db9", //testnet yoma dao relayer
    "did:ixo:entity:a1d2b84002d2e17a1987088c3a4b2f3c", //devnet impacts dao relayer
    "did:ixo:entity:4d21d459f67cfee9de533019862a67f9", //devnet impacts dao relayer
    "did:ixo:entity:0e82bb5f2a1611ca60e62f9bf832cee6", //devnet impacts dao relayer
  ],
  true,
);
