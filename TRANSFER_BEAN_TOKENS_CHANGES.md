# Transfer Bean Tokens - Dynamic Token ID Retrieval

## Summary of Changes

Modified the `transferBeanTokens` function in `__tests__/flows/tokens.ts` to dynamically retrieve token IDs from the blockchain instead of relying on the shared module variable `sharedBeanTokenId`.

## What Changed

### Before
- Function relied on `sharedBeanTokenId` module variable
- Required `Token.tokenBasic()` to run first to populate the variable
- Would fail with error if the variable wasn't set
- Only transferred from a single token ID

### After
- Function now queries the blockchain directly for token IDs
- Works independently without requiring `Token.tokenBasic()` to run first
- Queries token balances to determine available amounts
- Can transfer across multiple token IDs if needed
- Handles insufficient token scenarios gracefully

## Implementation Details

### Step 1: Query All Token IDs
```typescript
const queryMsg = {
  tokens: {
    owner: ownerAddress,
    limit: 100,
  },
};

const tokenIdsResult = await queryClient.cosmwasm.wasm.v1.smartContractState({
  address: contractAddress,
  queryData: utils.conversions.JsonToArray(JSON.stringify(queryMsg)),
});
```

### Step 2: Query Balance for Each Token ID
```typescript
for (const tokenId of tokenIds) {
  const balanceQueryMsg = {
    balance_of: {
      owner: ownerAddress,
      token_id: tokenId,
    },
  };

  const balanceResult = await queryClient.cosmwasm.wasm.v1.smartContractState({
    address: contractAddress,
    queryData: utils.conversions.JsonToArray(JSON.stringify(balanceQueryMsg)),
  });

  const balance = parseInt(balanceData.balance || "0");
  if (balance > 0) {
    tokenBalances.push({ id: tokenId, balance });
  }
}
```

### Step 3: Determine Tokens to Transfer
```typescript
const tokensToTransfer: { id: string; amount: number }[] = [];
let remainingAmount = tokenAmount;

for (const { id, balance } of tokenBalances) {
  if (remainingAmount <= 0) break;

  const amountToTransfer = Math.min(balance, remainingAmount);
  tokensToTransfer.push({ id, amount: amountToTransfer });
  remainingAmount -= amountToTransfer;
}
```

### Step 4: Execute Transfer
```typescript
const result = await Token.TransferToken(
  tokensToTransfer,
  recipientAddress
);
```

## Configuration

### Contract Address
The function uses the hardcoded contract address:
```
ixo14a9sjwps70xmsa5h5u5d372kxz40aae3e7rhfj55hd2jnqqcx0yqqa4zhw
```

### Owner Address
Automatically retrieved from the `WalletUsers.tester` wallet.

## Error Handling

The function now handles several error scenarios:

1. **Invalid recipient address**: Validates that the address starts with "ixo1"
2. **No tokens found**: Throws error if owner has no tokens in the contract
3. **No positive balances**: Throws error if all token balances are zero
4. **Insufficient tokens**: Throws error if total available tokens < requested amount

## Console Output

The function provides detailed logging:

```
🔄 Starting bean token transfer...
   Recipient: ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8
   Amount to transfer: 39
   Owner: ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8
   Contract: ixo14a9sjwps70xmsa5h5u5d372kxz40aae3e7rhfj55hd2jnqqcx0yqqa4zhw

📋 Querying token IDs from blockchain...
   Found 3 token ID(s)

💰 Querying token balances...
   Token 3f229af73c7aea0da63befd258b4d43a: 50 available
   Token db03fa33c1e2ca35794adbb14aebb153: 25 available

🎯 Preparing to transfer 39 tokens...
   Will transfer 39 of token 3f229af73c7aea0da63befd258b4d43a

🚀 Executing transfer...
✅ Transfer successful!
   Transferred 39 tokens across 1 token ID(s)
```

## Usage

The function signature remains the same:

```typescript
Token.transferBeanTokens("ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8", 39);
```

## Benefits

1. **Independence**: No longer requires `Token.tokenBasic()` to run first
2. **Flexibility**: Can transfer across multiple token IDs automatically
3. **Transparency**: Detailed logging shows exactly what's happening
4. **Robustness**: Better error handling and validation
5. **Accuracy**: Queries actual balances from the blockchain

