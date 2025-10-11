#!/usr/bin/env ts-node
/**
 * Verification script to check if BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER is properly configured
 * 
 * Usage:
 *   npx ts-node scripts/verify-minter-setup.ts
 */

require("dotenv").config();
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

async function verifyMinterSetup() {
  console.log("🔍 Verifying Bean Token Minter Setup\n");
  console.log("=" .repeat(60));

  // Check if .env file exists
  const mnemonic = process.env.BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER;
  
  if (!mnemonic) {
    console.log("❌ BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER not found in .env file");
    console.log("\n📝 To fix this:");
    console.log("   1. Create or edit your .env file");
    console.log("   2. Add: BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER=\"your mnemonic here\"");
    console.log("   3. Make sure .env is in your .gitignore\n");
    process.exit(1);
  }

  console.log("✅ BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER found in .env");

  // Validate mnemonic format
  const words = mnemonic.trim().split(/\s+/);
  const validLengths = [12, 15, 18, 21, 24];
  
  if (!validLengths.includes(words.length)) {
    console.log(`❌ Invalid mnemonic length: ${words.length} words`);
    console.log(`   Valid lengths are: ${validLengths.join(", ")} words\n`);
    process.exit(1);
  }

  console.log(`✅ Mnemonic has valid length: ${words.length} words`);

  // Try to create wallet from mnemonic
  try {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: "ixo"
    });
    
    const accounts = await wallet.getAccounts();
    const address = accounts[0].address;
    
    console.log("✅ Successfully created wallet from mnemonic");
    console.log("\n" + "=" .repeat(60));
    console.log("🎯 Your Token Minter Address:");
    console.log("   " + address);
    console.log("=" .repeat(60));
    
    console.log("\n📋 This address will be used for:");
    console.log("   • Creating token contracts (as minter)");
    console.log("   • Minting tokens (as minter and owner)");
    console.log("   • Signing all token-related transactions");
    
    console.log("\n✅ Setup verification complete!");
    console.log("\n🚀 You can now run: npm test");
    
  } catch (error: any) {
    console.log("❌ Failed to create wallet from mnemonic");
    console.log(`   Error: ${error.message}`);
    console.log("\n   Please check that your mnemonic is valid");
    console.log("   It should be 12 or 24 lowercase words separated by spaces\n");
    process.exit(1);
  }

  // Check RPC_URL
  console.log("\n" + "=" .repeat(60));
  const rpcUrl = process.env.RPC_URL || "https://devnet.ixo.earth/rpc/";
  console.log("🌐 RPC Endpoint:", rpcUrl);
  
  if (rpcUrl.includes("mainnet")) {
    console.log("⚠️  WARNING: You are using MAINNET!");
    console.log("   Make sure you understand the implications");
    console.log("   Consider using testnet for development\n");
  } else if (rpcUrl.includes("testnet")) {
    console.log("✅ Using testnet (recommended for development)");
  } else if (rpcUrl.includes("devnet")) {
    console.log("✅ Using devnet (recommended for testing)");
  }
  
  console.log("=" .repeat(60) + "\n");
}

// Run verification
verifyMinterSetup().catch((error) => {
  console.error("Unexpected error:", error);
  process.exit(1);
});

