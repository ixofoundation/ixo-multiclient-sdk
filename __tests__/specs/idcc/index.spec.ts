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
  idcc_constants.idcc_user_mnemonic,
  idcc_constants.idcc_dao,
  chainNetwork,
  [
    "did:ixo:entity:b351740dbfa37489e996baeba13e4961",
    "did:ixo:entity:434a672f66420f5779cc35d823330b7f",
    "did:ixo:entity:3a9e601380188cb5b486bb30be74693b",
    "did:ixo:entity:32b4bdfb93b123e9bc686ba39f59ec57",
    "did:ixo:entity:268bcaf64116940fc9c4029449b7f32a",
    "did:ixo:entity:adf1ee92a735ed5178a75e7f0058ad1c",
    "did:ixo:entity:3a7b2a8889c4729bcfd97303769b2194",
    "did:ixo:entity:d13d8fc36766eeb48e8c569027d9ecee",
    "did:ixo:entity:91dfb1ec9e09bffbf0810afd92d04269",
    "did:ixo:entity:6f719778bb27d56d5c1474257489b2f9"
  ]
);
