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
  "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
  chainNetwork,
  [
    "did:ixo:entity:504a8255ca35e103bc8e3e78f62a5231",
    // "did:ixo:entity:e89dcfa3b1038f495951d25f0083b23c",
    // "did:ixo:entity:7bb1fd9b6a1a5ab132df06231016f44a",
  ],
  true,
);
