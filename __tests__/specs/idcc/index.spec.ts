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
  "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb", //testnet
  chainNetwork,
  [
    "did:ixo:entity:b351740dbfa37489e996baeba13e4961",
    "did:ixo:entity:94c8472ee5e83870491defd39a7af0e5",
    "did:ixo:entity:21f137c62503d0a9600177151a41cce1",
  ],
  false,
);
