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
  iidAddEdKeys,
  iidReplaceLinkedResource,
} from "./flows/iids";
import { enititiesBasic } from "./flows/entities";
import { ibcBasic } from "./flows/ibc";
import {
  bankBasic,
  authzBasic,
  sendTokens,
  govDeposit,
  feegrantBasic,
} from "./flows/cosmos";
import {
  instantiateModulesProposals,
  devnetProposals,
  cwUploadProposal,
} from "./flows/instantiateProposals";
import { tokenBasic, supamotoTokens } from "./flows/tokens";
import { daoCore, wasmBasic } from "./flows/cosmwasm";
import { quickQueries } from "./flows/quickQueries";
import { claimsBasic, supamotoClaims } from "./flows/claims";
import { ChainNetwork } from "../src/custom_queries/chain.types";

beforeAll(() => {
  generateConstants();
  return Promise.all([createQueryClient(), generateWallets()]);
});

// To generate mapping of blockchain test users to sdk test users with set mnemonics
generateBlockchainTestUsers();

registerIids();
instantiateModulesProposals();
bankBasic();
// iidsBasic();
// bondsBasic();
// enititiesBasic();
tokenBasic();
// claimsBasic();
// daoCore();
// sendTokens();
// bondsSellsDisabled();
// iidAddEdKeys();
// bondsSellsEnabled();
// iidReplaceLinkedResource();
// ibcBasic();
// govDeposit();
// authzBasic();
// wasmBasic();
// feegrantBasic();
// cwUploadProposal();
// quickQueries();

// ------------------------------------------
// Run the below after a devnet reset
// ------------------------------------------
export const chainNetwork: ChainNetwork = "devnet";
// devnetProposals();
// first run devnetProposals, the run initcontracts.sh on dev server
// immidiately, and wait for all proposals to pass then run below
//
// After all proposals have passed, run `yarn test:setup` to create all base daos and entities,
// please ensure to have the env vars set for dao root users and ed key users. For devnet restart
// you dont have to save did constants after dao creation, it deterministic so preset to devnet dids
//
// After daos is on devnet you can run the below
// registerIidsDev();
// supamotoTokens();
// supamotoClaims();
