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
  process.env.ROOT_IMPACTS_TEST,
  // "did:ixo:entity:5884e9e2c624cb8a38bde74225215ee8", // mainnet relayer
  "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb", // testnet relayer
  chainNetwork,
  [
    "did:ixo:entity:2b8900a43c95c3abf70ccdee49d40efc",
    "did:ixo:entity:ebee6269e6271037edae4f5a63ad3075",
  ],
  true
);
