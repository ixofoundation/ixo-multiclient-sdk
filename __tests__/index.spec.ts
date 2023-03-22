require("dotenv").config();

import { createQueryClient, generateWallets } from "./helpers/common";
import { generateConstants } from "./helpers/constants";
import {
  bondsBasic,
  bondsSellsDisabled,
  bondsSellsEnabled,
} from "./flows/bonds";
import {
  iidsBasic,
  registerIids,
  registerIidsDev,
  generateBlockchainTestUsers,
} from "./flows/iids";
import { enititiesBasic, supamotoEntities } from "./flows/entities";
import { ibcBasic } from "./flows/ibc";
import { bankBasic, authzBasic, sendTokens } from "./flows/cosmos";
import {
  instantiateModulesProposals,
  devnetProposals,
} from "./flows/instantiateProposals";
import { tokenBasic, supamotoTokens } from "./flows/tokens";
import { daoCore, wasmBasic } from "./flows/cosmwasm";
import { quickQueries } from "./flows/quickQueries";
import { claimsBasic, devnetClaims } from "./flows/claims";

beforeAll(() => {
  generateConstants();
  return Promise.all([createQueryClient(), generateWallets()]);
});

// To generate mapping of blockchain test users to sdk test users with set mnemonics
generateBlockchainTestUsers();

// sendTokens();
// registerIids();
// instantiateModulesProposals();
// iidsBasic();
// bondsBasic();
// bondsSellsDisabled();
// bondsSellsEnabled();
// enititiesBasic();
// tokenBasic();
// claimsBasic();
// ibcBasic();
// bankBasic();
// authzBasic();
// wasmBasic();
// daoCore();
// quickQueries();

// Run the below after a devnet reset
// ------------------------------------------
// devnetProposals();
// first run devnetProposals, the run initcontracts.sh on dev server
// immidiately, and wait for all proposals to pass then run below
// registerIidsDev();
// supamotoEntities();
// supamotoTokens();
// devnetClaims();
