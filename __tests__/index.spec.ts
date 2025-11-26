require("dotenv").config();
import { beforeAll } from "@jest/globals";

import {
  createQueryClient,
  generateWallets,
  generateNewWallet,
  getUser,
  sendFaucet,
} from "./helpers/common";
import { generateConstants, WalletUsers } from "./helpers/constants";
import * as Bonds from "./flows/bonds";
import * as IID from "./flows/iids";
import { CreateIidDoc } from "./modules/Iid";
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
import { setAndLedgerUser } from "./setup/helpers";

beforeAll(async () => {
  generateConstants();
  await createQueryClient();

  // Check if custom mnemonic is provided for bean token minter
  const customMnemonic = process.env.BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER;

  if (customMnemonic) {
    console.log(
      "🔑 Using custom mnemonic from BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER"
    );

    // First, generate all wallets normally to initialize the wallets object
    await generateWallets(false); // false = don't log yet

    // Then override the tester wallet with custom mnemonic
    await generateNewWallet(WalletUsers.tester, customMnemonic);
  } else {
    console.log(
      "⚠️  No BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER found in .env, generating random wallets"
    );
    await generateWallets();
  }

  //Don't know where account tester, alice, etc. are normally funded from faucet, so doing it here
  //They also need to be ledgered with an IID doc
  const users = Object.values(WalletUsers);
  for (const user of users) {
    console.log(`Setting up user: ${user}`);
    const wallet = getUser(user);
    const account = (await wallet.getAccounts())[0];
    console.log(`  Address: ${account.address}`);
    await sendFaucet(account.address);
    console.log(`  ✅ Funded from faucet`);
    await CreateIidDoc(user);
    console.log(`  ✅ IID Doc created`);
  }

  // Log the minter address that will be used for token operations
  const testerWallet = getUser(WalletUsers.tester);
  const testerAccount = (await testerWallet.getAccounts())[0];
  console.log("\n🎯 Token Minter Address:", testerAccount.address);
  console.log(
    "   This address will be used as minter and owner for all token operations\n"
  );
});

// Proposals.instantiateModulesProposals(false);
// Cosmos.bankBasic();
// IID.iidsBasic();
// Bonds.bondsBasic();
// Entity.enititiesBasic();
// Token.tokenBasic();
Token.transferBeanTokens("ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8", 39); // devnet SupaMoto account as set up in subscriptions repo
// Claims.claimsBasic();
// CosmWasm.daoCoreCw4();
// Smartaccount.smartaccountBasic();
// LiquidStake.prepareModuleWithProposals();
// CosmWasm.wasmBasic();
// Cosmos.feegrantBasic();
// Authz.authzBasic();
// Cosmos.authzBasic();

// IID.iidAddEdKeys();
// Bonds.bondsSellsDisabled();
// Bonds.bondsSellsEnabled();
// IID.iidReplaceLinkedResource();
// IBC.ibcBasic();
// Cosmos.govDeposit();
// Cosmos.stakeBasic();
// Cosmos.updateParamsProposal();
// Cosmos.updateGovParamsProposal();
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
// Cosmos.sendTokens();
// CosmWasm.swapBasic();
// CosmWasm.swapContract();
// Cosmos.feegrantAllCurrentUsers();
// Claims.supamotoEvaluateFuelPurchases();
// Claims.supamotoCreateCollection();
// Entity.transferEntities();
// CosmWasm.daodaoAuthzExecute();
// Cosmos.textProposalBasic();
// CosmWasm.daoCoreCw721();
// CosmWasm.daoCoreCw20();
// CosmWasm.daoCoreNative();
// Claims.supamotoClaims3();
// Proposals.uploadHyperlaneProposals();
// Cosmos.voteProposal();
// LiquidStake.burnIxo();
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
