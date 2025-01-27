---
stoplight-id: 8kd3zu5n6sx9c
---

# Managing Liquid Staking

## Step-by-Step Guide

This guide will walk you through managing liquid staking operations using the **IXO Spatial Web Multiclient SDK**. Liquid staking allows for flexible management of staked assets on the IXO blockchain.

### Step 1: Submit Proposal to Update Liquid Staking Parameters

To submit a proposal for updating liquid staking parameters, use the `MsgSubmitProposalUpdateLiquidStakeParams` function. Here's an example in TypeScript:

```typescript
const response = await MsgSubmitProposalUpdateLiquidStakeParams(
  "proposal_title", // Title of the proposal
  "proposal_description", // Description of the proposal
  "proposer_address" // Address of the proposer
);
```

The parameters include:

- **title**: The title of the proposal
- **description**: A brief description of the proposal
- **proposer**: The address of the proposer

### Step 2: Update Whitelisted Validators

To update the list of whitelisted validators, use the `MsgUpdateWhitelistedValidators` function:

```typescript
const response = await MsgUpdateWhitelistedValidators(
  ["validator1_address", "validator2_address"], // List of validator addresses
  "admin_address" // Address of the admin
);
```

### Step 3: Perform Liquid Staking

To perform a liquid staking operation, use the `MsgLiquidStake` function:

```typescript
const response = await MsgLiquidStake(
  "1000000uixo", // Amount to stake
  "staker_address" // Address of the staker
);
```

### Step 4: Perform Liquid Unstaking

To perform a liquid unstaking operation, use the `MsgLiquidUnstake` function:

```typescript
const response = await MsgLiquidUnstake(
  "1000000uixo", // Amount to unstake
  "staker_address" // Address of the staker
);
```

## LiquidStake Module Reference

### Core Functions:

- **MsgSubmitProposalUpdateLiquidStakeParams**: Submits a proposal to update liquid staking parameters.

  ```typescript
  MsgSubmitProposalUpdateLiquidStakeParams(title: string, description: string, proposer: string)
  ```

- **MsgUpdateWhitelistedValidators**: Updates the list of whitelisted validators.

  ```typescript
  MsgUpdateWhitelistedValidators(validators: string[], admin: string)
  ```

- **MsgLiquidStake**: Performs a liquid staking operation.

  ```typescript
  MsgLiquidStake(amount: string, staker: string)
  ```

- **MsgLiquidUnstake**: Performs a liquid unstaking operation.
  ```typescript
  MsgLiquidUnstake(amount: string, staker: string)
  ```

## Common Issues and Solutions

1. **Invalid Proposal Parameters**

   - Ensure the title and description are correctly formatted.
   - Verify the proposer address is valid.

2. **Validator Update Errors**

   - Confirm the validator addresses are correct.
   - Verify the admin has the necessary permissions.

3. **Staking and Unstaking Issues**
   - Ensure the staker has sufficient balance.
   - Verify the amount is within allowed limits.

## Additional Notes

- Liquid staking allows for flexible management of staked assets.
- Always verify the status of proposals and validators.
- Monitor staking and unstaking operations for any discrepancies.
