# Bean Token Minter Setup Guide

## Overview

The test suite has been updated to use a custom wallet from your `.env` file as the token minter and owner for all token operations. This allows you to use your own wallet address instead of randomly generated test wallets.

## Setup Instructions

### 1. Add Your Mnemonic to `.env`

Edit your `.env` file and add your mnemonic:

```bash
# Your RPC endpoint
RPC_URL=https://testnet.ixo.earth/rpc/

# Bean Token Minter - Your wallet mnemonic (12 or 24 words)
BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER="your twelve or twenty four word mnemonic phrase here"
```

⚠️ **IMPORTANT SECURITY NOTES:**
- **NEVER commit your `.env` file to version control**
- Make sure `.env` is in your `.gitignore`
- Only use testnet/devnet mnemonics for testing
- Never use mainnet mnemonics in test code

### 2. Run the Tests

```bash
npm test
```

Or to run only the token tests:

```bash
npm test -- tokens
```

## What Changed

### `__tests__/index.spec.ts`

The `beforeAll` setup hook now:

1. **Checks for custom mnemonic**: Looks for `BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER` in environment variables
2. **Creates custom wallet**: If found, uses your mnemonic to create the `tester` wallet
3. **Generates other wallets**: Creates random wallets for `alice`, `bob`, etc.
4. **Logs minter address**: Displays the address that will be used as token minter

**Key changes:**
- Imported `generateNewWallet` function
- Added conditional logic to use custom mnemonic or generate random wallets
- Enhanced logging to show which address will be the token minter

### `.env.example`

Added documentation for the new environment variable:

```bash
# Bean Token Minter - Set this to use your own wallet as the token minter/owner
# If not set, a random wallet will be generated for testing
BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER="your twelve or twenty four word mnemonic phrase here"
```

## How It Works

### Token Creation Flow

When you run the token tests:

1. **Wallet Initialization** (`beforeAll` in `index.spec.ts`):
   - Reads `BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER` from `.env`
   - Creates the `tester` wallet using your mnemonic
   - Funds the wallet from the faucet
   - Creates an IID document for the wallet

2. **Token Creation** (`Token.CreateToken` in `__tests__/modules/Token.ts`):
   - Uses the `tester` wallet address as the `minter` field
   - Signs the transaction with your wallet
   - Creates the token contract

3. **Token Minting** (`Token.MintToken` in `__tests__/modules/Token.ts`):
   - Uses the `tester` wallet address as both `minter` and `owner`
   - Signs the transaction with your wallet
   - Mints tokens to your address

### Example Console Output

When you run the tests, you'll see:

```
🔑 Using custom mnemonic from BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER
Setting up user: tester
  Address: ixo1your_address_here
  ✅ Funded from faucet
  ✅ IID Doc created
Setting up user: alice
  Address: ixo1alice_address_here
  ✅ Funded from faucet
  ✅ IID Doc created
...

🎯 Token Minter Address: ixo1your_address_here
   This address will be used as minter and owner for all token operations

Token Creation Success
     • ✅ Token Created: Successfully created token with dynamic name DRY_BEANS_1760021643
     • ✅ Contract Address Generated: ixo1v60e6rln8a7hdyafteft6mcecuy7wjurmlds0zr9gwt9680gqsfqcwrq2t
```

## Verifying Your Setup

### Check Your Wallet Address

After the tests run, you can verify your address is being used:

```typescript
import { getUser } from "./helpers/common";
import { WalletUsers } from "./helpers/constants";

const testerWallet = getUser(WalletUsers.tester);
const account = (await testerWallet.getAccounts())[0];
console.log("Minter address:", account.address);
```

### Query Your Tokens

You can query all tokens created by your address:

```typescript
import { createQueryClient } from "@ixo/impactxclient-sdk";

const queryClient = await createQueryClient("https://testnet.ixo.earth/rpc/");

const myTokens = await queryClient.ixo.token.v1beta1.tokenList({
  minter: "ixo1your_address_here" // Your address from the console output
});

console.log("My tokens:", myTokens.tokenDocs);
```

### Query Specific Token

To query a specific token you created:

```typescript
const tokenDoc = await queryClient.ixo.token.v1beta1.tokenDoc({
  minter: "ixo1your_address_here",
  contractAddress: "ixo1v60e6rln8a7hdyafteft6mcecuy7wjurmlds0zr9gwt9680gqsfqcwrq2t"
});

console.log("Token details:", tokenDoc.tokenDoc);
console.log("Token name:", tokenDoc.tokenDoc.name);
console.log("Token supply:", tokenDoc.tokenDoc.supply);
console.log("Token minter:", tokenDoc.tokenDoc.minter); // Should be your address
```

## Fallback Behavior

If `BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER` is **not set** in your `.env` file:

- The system will generate random wallets for all users (including `tester`)
- You'll see this warning: `⚠️  No BEAN_TOKEN_MINTER_SUBSCRIPTION_OWNER found in .env, generating random wallets`
- Tests will still run, but with temporary wallets that won't persist

## Troubleshooting

### Error: "Invalid mnemonic format"

**Problem**: Your mnemonic is not valid.

**Solution**: 
- Ensure your mnemonic is 12 or 24 words
- Words should be lowercase and space-separated
- No extra quotes or special characters

### Error: "Account sequence mismatch"

**Problem**: Your wallet has been used before and the sequence is out of sync.

**Solution**:
- Wait a few seconds and try again
- The SDK uses local storage to track sequences

### Tokens Not Showing Up

**Problem**: Can't find your tokens when querying.

**Solution**:
- Make sure you're using the correct minter address (check console output)
- Verify you're querying the correct network (testnet vs devnet)
- Check that the transaction was successful (look for transaction hash in output)

## Next Steps

After successfully creating and minting tokens with your wallet:

1. **Query your tokens** using the methods shown above
2. **Transfer tokens** to other addresses
3. **Retire or cancel tokens** as needed
4. **Query token metadata** to see the bean attributes stored on IPFS

## Related Documentation

- [BEAN_TOKEN_IMPLEMENTATION.md](./BEAN_TOKEN_IMPLEMENTATION.md) - Bean token structure and metadata
- [CSV_TO_JSON_MAPPING.md](./CSV_TO_JSON_MAPPING.md) - How CSV data maps to token metadata
- [README.md](./README.md) - General SDK documentation

## Support

If you encounter issues:

1. Check the console output for error messages
2. Verify your `.env` file is properly configured
3. Ensure your wallet has sufficient balance (faucet should fund it automatically)
4. Check that you're connected to the correct RPC endpoint

