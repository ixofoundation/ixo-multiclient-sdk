require("dotenv").config();

import { createQueryClient, generateWallets } from "./helpers/common";
import { generateConstants } from "./helpers/constants";
import * as Bonds from "./flows/bonds";
import * as IID from "./flows/iids";
import * as Entity from "./flows/entities";
import * as IBC from "./flows/ibc";
import * as Cosmos from "./flows/cosmos";
import * as Proposals from "./flows/instantiateProposals";
import * as Token from "./flows/tokens";
import * as CosmWasm from "./flows/cosmwasm";
import * as Queries from "./flows/quickQueries";
import * as Claims from "./flows/claims";

beforeAll(() => {
  generateConstants();
  return Promise.all([createQueryClient(), generateWallets()]);
});

// To generate mapping of blockchain test users to sdk test users with set mnemonics
IID.generateBlockchainTestUsers();

// IID.registerIids();
// Proposals.instantiateModulesProposals();
// Cosmos.bankBasic();
// IID.iidsBasic();
// Bonds.bondsBasic();
// Entity.enititiesBasic();
// Token.tokenBasic();
// Claims.claimsBasic();
// CosmWasm.daoCore();
// Cosmos.sendTokens();
// IID.iidAddEdKeys();
// Bonds.bondsSellsDisabled();
// Bonds.bondsSellsEnabled();
// IID.iidReplaceLinkedResource();
// IBC.ibcBasic();
// Cosmos.govDeposit();
// CosmWasm.wasmBasic();
// Cosmos.feegrantBasic();
// Proposals.cwUploadProposal();
// Token.supamotoTokensFarm();
// Token.supamotoTokensSendCARBON();
// Claims.supamotoClaimsRedoRejected();
// Entity.relayerVerifyAllEntities();
// Entity.enititiesSetStatus();
// Claims.supamotoClaims2();
// CosmWasm.swapBasic();
// CosmWasm.swapContract();
// Cosmos.feegrantAllCurrentUsers();
// Claims.supamotoEvaluateFuelPurchases();
// Claims.supamotoCreateCollection();
// Entity.transferEntities();
// CosmWasm.daodaoAuthzExecute();
// Cosmos.authzBasic();
// Cosmos.textProposalBasic();
// Queries.quickQueries();

// ------------------------------------------
// Run the below after a devnet reset
// ------------------------------------------
// Proposals.devnetProposals();
//
// first run above devnetProposals, the run initcontracts.sh on dev server
// immidiately, and wait for all proposals to pass then run below
//
// After all proposals have passed, run
// -  `yarn test:supamoto` to create all base daos and entities for emerging and ecs,
// -  `yarn test:umuzi` to create all base daos and entities for yoma and umuzi (Dont run yet!!!!!),
// please ensure to have the env vars set for dao root users and ed key users. For devnet restart
// you dont have to save did constants after dao creation, it deterministic so preset to devnet dids
//
// After daos is on devnet you can run the below
// IID.registerIidsDev();
// CosmWasm.multicallContract();
// CosmWasm.devnetSwapContract_IXO_CARBON();
// Token.supamotoTokens();
// Claims.supamotoClaims();
