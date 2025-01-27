---
stoplight-id: 44mrfzqkqkq67
---

# Managing Tokens

## Step-by-Step Guide

This guide will walk you through creating, minting, transferring, and managing tokens using the **IXO Spatial Web Multiclient SDK**. Tokens represent digital assets that can be programmatically managed on the IXO blockchain.

### Step 1: Create a Token

To create a new token, use the `CreateToken` function. Here's an example in TypeScript:

```typescript
const response = await CreateToken(
  "TokenName",          // Name of the token
  "Token Description",  // Description of the token
  1000000,              // Cap (maximum supply) of the token
  "TokenClass"          // Class of the token
);
```

In this example, the `CreateToken` function is invoked to set up a new token. The parameters include:

- **name**: The name of the token.
- **description**: A brief description of the token.
- **cap**: The maximum supply of the token.
- **tokenClass**: The class or category of the token.

### Step 2: Mint Tokens

To mint new tokens, use the `MintToken` function:

```typescript
const response = await MintToken(
  "contractAddress1234", // Contract address for the token
  [
    {
      name: "Batch1",
      index: "1",
      amount: 1000,
      collection: "Collection1"
    }
  ]
);
```

This function mints tokens for a specified contract. The parameters include:

- **contractAddress**: The address of the token contract.
- **batches**: An array of batches to mint, each with a name, index, amount, and collection.

### Step 3: Transfer Tokens

To transfer tokens to another address, use the `TransferToken` function:

```typescript
const response = await TransferToken(
  [
    {
      id: "tokenId1234", // ID of the token
      amount: 100        // Amount to transfer
    }
  ],
  "recipientAddress1234" // Address of the recipient
);
```

This function transfers tokens to a specified address. The parameters include:

- **tokens**: An array of tokens to transfer, each with an ID and amount.
- **toAddress**: The address of the recipient.

### Step 4: Retrieve Token Data Using GraphQL

To view token details, use the IXO Blocksync GraphQL API. Here's an example query:

```graphql
query MyQuery {
  token(id: "tokenId1234") {
    id
    name
    description
    cap
    class
    owner
    minted
    transferred
  }
}
```

### Step 5: Retire Tokens

To retire tokens, use the `RetireToken` function:

```typescript
const response = await RetireToken(
  "tokenId1234", // ID of the token
  100            // Amount to retire
);
```

This function retires a specified amount of tokens, effectively removing them from circulation.

## Tokens Module Reference

### Core Functions:

- **CreateToken**: Sets up a new token on the IXO blockchain.
  ```typescript
  CreateToken(name, description, cap, tokenClass, signer?)
  ```

- **MintToken**: Mints new tokens for a specified contract.
  ```typescript
  MintToken(contractAddress, batches)
  ```

- **TransferToken**: Transfers tokens to another address.
  ```typescript
  TransferToken(tokens, toAddress?)
  ```

- **RetireToken**: Retires a specified amount of tokens.
  ```typescript
  RetireToken(tokenId, amount)
  ```

### Additional Functions:

- **TransferTokenBatch**: Transfers a batch of tokens.
- **StopToken**: Stops token operations.
- **MsgGrantContract**: Grants contract authorization.
- **MsgExecContract**: Executes contract operations.

## Common Issues and Solutions

1. **Invalid Token Parameters**
   - Ensure all token details are correct and valid.
   - Verify the contract address is accurate.

2. **Minting Errors**
   - Check that the batch details are properly formatted.
   - Ensure the contract address is authorized for minting.

3. **Transfer Issues**
   - Confirm the recipient address is valid.
   - Verify the token ID and amount are correct.

## Additional Notes

- Tokens are essential for representing and managing digital assets on the blockchain.
- Always verify the status and details of tokens through appropriate query mechanisms.
- Authorizations can be specific to certain actions and time-limited.
