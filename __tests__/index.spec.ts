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
  generateBlockchainTestUsers,
} from "./flows/iids";
import { enititiesBasic, supamotoFlow } from "./flows/entities";
import { paymentsBasic } from "./flows/payments";
import { ibcBasic } from "./flows/ibc";
import { bankBasic, govBasic, authzBasic } from "./flows/cosmos";
import { tokenBasic } from "./flows/tokens";
import { projectsBasic } from "./flows/projects";
import { daoCore, wasmBasic } from "./flows/cosmwasm";
import { quickQueries } from "./flows/quickQueries";

beforeAll(() => {
  generateConstants();
  return Promise.all([createQueryClient(), generateWallets()]);
});

// To generate mapping of blockchain test users to sdk test users with set mnemonics
generateBlockchainTestUsers();

// registerIids();
// iidsBasic();
// paymentsBasic();
// projectsBasic();
// bondsBasic();
// bondsSellsDisabled();
// bondsSellsEnabled();
// enititiesBasic();
// supamotoFlow();
// tokenBasic();
// ibcBasic();
// bankBasic();
// govBasic();
// authzBasic();
// wasmBasic();
daoCore();
// quickQueries();
