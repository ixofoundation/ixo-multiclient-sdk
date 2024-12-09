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
  process.env.ROOT_IMPACTS,
  "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d", // mainnet impacts dao relayer
  // "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a", // mainnet emerging dao relayer
  // "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb", // testnet relayer
  chainNetwork,
  [
    "did:ixo:entity:e38a5c4b4233e313e94ecc36d7619808",
    "did:ixo:entity:37e444392f4e2335a1f144d5331bf9ca",
  ],
  true
);
