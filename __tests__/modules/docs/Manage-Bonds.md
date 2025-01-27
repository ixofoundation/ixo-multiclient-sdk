---
stoplight-id: 94a3zu5n6sx5a
---

# Managing Bonds

## Step-by-Step Guide

This guide will walk you through creating and managing bonds using the **IXO Spatial Web Multiclient SDK**. Bonds are financial instruments that can be created, bought, sold, and managed on the IXO blockchain.

### Step 1: Create a Bond

To create a new bond, use the `CreateBond` function. Here's an example in TypeScript:

```typescript
const response = await CreateBond(
  true  // allowSells parameter determines if selling bonds is permitted
);
```

The `CreateBond` function sets up a new bond with the following key parameters:

- **bondDid**: Unique identifier for the bond
- **token**: The bond's token denomination
- **name**: Name of the bond
- **description**: Description of the bond
- **functionType**: Type of bonding curve ("augmented_function" or "bonding_function")
- **functionParameters**: Array of parameters defining the bonding curve
- **reserveTokens**: Array of accepted reserve tokens
- **txFeePercentage**: Transaction fee percentage
- **exitFeePercentage**: Exit fee percentage
- **maxSupply**: Maximum supply of bond tokens
- **orderQuantityLimits**: Limits on order quantities
- **allowSells**: Whether selling of bonds is allowed
- **allowReserveWithdrawals**: Whether reserve withdrawals are allowed
- **alphaBond**: Whether this is an alpha bond
- **batchBlocks**: Number of blocks per batch

### Step 2: Edit Bond Parameters

To modify an existing bond's parameters, use the `EditBond` function:

```typescript
const response = await EditBond();
```

This function allows you to update various bond parameters such as:
- Name
- Description
- Order quantity limits
- Sanity rate
- Sanity margin percentage

### Step 3: Update Bond State

To change the state of a bond, use the `UpdateBondState` function:

```typescript
const response = await UpdateBondState(
  "OPEN"  // New state for the bond
);
```

Possible bond states include:
- HATCH
- OPEN
- SETTLE
- FAILED

### Step 4: Buy and Sell Bonds

To buy bonds:

```typescript
const response = await Buy(
  1000000,  // Amount of bonds to buy
  100       // Maximum price willing to pay
);
```

To sell bonds (if allowed):

```typescript
const response = await Sell(
  1000000,  // Amount of bonds to sell
  100       // Minimum price willing to accept
);
```

### Step 5: Make Outcome Payment

To make an outcome payment for a bond:

```typescript
const response = await MakeOutcomePayment(
  1000000  // Amount for the outcome payment
);
```

### Step 6: Withdraw Share or Reserve

To withdraw a share:

```typescript
const response = await WithdrawShare(
  WalletUsers.tester  // Signer of the transaction
);
```

To withdraw from reserve:

```typescript
const response = await WithdrawReserve(
  WalletUsers.tester,  // Signer of the transaction
  1000000             // Amount to withdraw
);
```

## Bonds Module Reference

### Core Functions:

- **CreateBond**: Creates a new bond on the IXO blockchain.
  ```typescript
  CreateBond(allowSells: boolean)
  ```

- **EditBond**: Modifies existing bond parameters.
  ```typescript
  EditBond()
  ```

- **UpdateBondState**: Changes the state of a bond.
  ```typescript
  UpdateBondState(state: string)
  ```

- **Buy**: Purchases bond tokens.
  ```typescript
  Buy(amount: number, maxPrice: number)
  ```

- **Sell**: Sells bond tokens (if allowed).
  ```typescript
  Sell(amount: number, minPrice: number)
  ```

### Additional Functions:

- **SetNextAlpha**: Sets the next alpha value for the bond.
- **MakeOutcomePayment**: Makes an outcome payment for the bond.
- **WithdrawShare**: Withdraws share from the bond.
- **WithdrawReserve**: Withdraws from the bond's reserve.

## Common Issues and Solutions

1. **Bond Creation Issues**
   - Ensure all function parameters are correctly specified
   - Verify the bonding curve parameters are valid
   - Check that reserve tokens are properly configured

2. **State Transition Errors**
   - Confirm the current state allows the requested transition
   - Verify all conditions for state change are met
   - Check authorization for state changes

3. **Trading Problems**
   - Ensure sufficient balance for purchases
   - Verify sells are allowed if attempting to sell
   - Check price limits are reasonable

## Additional Notes

- Bonds use mathematical bonding curves to determine token prices
- The bond state affects which operations are allowed
- Reserve withdrawals may be restricted based on bond configuration
- Alpha bonds have special properties and restrictions
- Always monitor transaction fees and exit fees when trading

