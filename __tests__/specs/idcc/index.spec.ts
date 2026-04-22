require("dotenv").config();

import { createQueryClient, generateWallets, ixo } from "../../helpers/common";
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
  process.env.ROOT_YOMA,
  // "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d", // mainnet impacts dao relayer
  // "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a", // mainnet emerging dao relayer
  // "did:ixo:entity:a1fcead81eab2f1158a726597d872413", // mainnet ecs dao relayer
  // "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb", // testnet relayer
  // "did:ixo:entity:47d9c64891e77cb8e588d33b83ab3042", // mainnet qi space dao relayer
  'did:ixo:entity:5884e9e2c624cb8a38bde74225215ee8', // mainnet yoma dao relayer
  chainNetwork,
  [
    'did:ixo:entity:996b6bcd7be23b327d6d95c1a7a79e65',
    'did:ixo:entity:80dc1337170b68e71f7bbe2a6e8eb663',
  ],
  true
);
