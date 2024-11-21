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
import * as Authz from "./flows/authz";
import * as Smartaccount from "./flows/smartaccount";
import * as LiquidStake from "./flows/liquidStaking";
import { dids } from "./setup/constants";
import { idcc_constants } from "./setup/idcc/creds";
import { web3Storage } from "./setup/web3";

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
// Smartaccount.smartaccountBasic();
// Cosmos.sendTokens();
// IID.iidAddEdKeys();
// Bonds.bondsSellsDisabled();
// Bonds.bondsSellsEnabled();
// IID.iidReplaceLinkedResource();
// IBC.ibcBasic();
// Cosmos.govDeposit();
// Cosmos.stakeBasic();
// Cosmos.updateParamsProposal();
// CosmWasm.wasmBasic();
// Cosmos.feegrantBasic();
// Proposals.cwUploadProposal();
// Token.supamotoTokensFarm();
// Token.supamotoTokensSendCARBON();
// Claims.supamotoClaimsRedoRejected();
// Entity.relayerVerifyAllEntities(
//   process.env.IDCC_DAO,
//   idcc_constants.idcc_dao,
//   "devnet",
//   ["did:ixo:entity:434a672f66420f5779cc35d823330b7f"],
//   false
// );
// Entity.enititiesSetStatus();
// Claims.claimsUpdateCollectionPayments();
// CosmWasm.swapBasic();
// CosmWasm.swapContract();
// Cosmos.feegrantAllCurrentUsers();
// Claims.supamotoEvaluateFuelPurchases();
// Claims.supamotoCreateCollection();
// Entity.transferEntities();
// CosmWasm.daodaoAuthzExecute();
// Cosmos.authzBasic();
// Cosmos.textProposalBasic();
// Authz.authzBasic();
// LiquidStake.prepareModuleWithProposals();
CosmWasm.daoCore2();
// Claims.supamotoClaims3();
// Queries.quickQueries();
// web3Storage();
// IID.addEdKeysToDid();

// ------------------------------------------
// Run the below after a devnet reset
// ------------------------------------------
// Proposals.devnetProposals();
//
// first run above devnetProposals, the run 'bash initcontracts.sh' on dev server
// immidiately, and wait for all proposals to pass then run below
//
// After all proposals have passed, run
// CosmWasm.multicallContract();
//
// After the contract constants is generated, run below
// -  `yarn test:supamoto` to create all base daos and entities for emerging and ecs,
// -  `yarn test:umuzi` to create all base daos and entities for yoma and umuzi (Dont run yet!!!!!),
// please ensure to have the env vars set for dao root users and ed key users. For devnet restart
// you dont have to save did constants after dao creation, it deterministic so preset to devnet dids
//
// After daos is on devnet you can run the below
// IID.registerIidsDev();
// Token.supamotoTokens();
// CosmWasm.devnetSwapContract_IXO_CARBON();
// Claims.supamotoClaims();
