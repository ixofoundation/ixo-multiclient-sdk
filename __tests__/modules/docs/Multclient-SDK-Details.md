# IXO Blockchain Test Helpers Documentation

## Overview

This codebase contains test helper functions for interacting with various modules of the IXO blockchain. The modules include:

- Authz (Authorization)
- Bond
- Claims
- Entity
- LiquidStake
- Smartaccount
- Token

## Module Details

### 1. Authz Module
Located in `__tests__/modules/Authz.ts`

#### Key Functions:
- `MsgGrantSend`: Grants send authorization
- `MsgExecSendIbc`: Executes IBC send with authorization
- `MsgGrantAllowanceFeegrant`: Grants fee allowance
- `MsgRevokeAllowance`: Revokes fee allowance
- `MsgExecAuthz`: Executes authorized actions

### 2. Bond Module
Located in `__tests__/modules/Bond.ts`

#### Key Functions:
- `CreateBond`: Creates a new bond
- `EditBond`: Modifies existing bond parameters
- `SetNextAlpha`: Sets the next alpha value for bond
- `UpdateBondState`: Updates bond state (HATCH/OPEN/SETTLE/FAILED)
- `Buy`: Purchases bond tokens
- `Sell`: Sells bond tokens
- `MakeOutcomePayment`: Makes outcome payment for bond
- `WithdrawShare`: Withdraws share from bond
- `WithdrawReserve`: Withdraws from bond reserve

### 3. Claims Module
Located in `__tests__/modules/Claims.ts`

#### Key Functions:
- `UpdateCollectionState`: Updates collection state
- `MsgClaimIntent`: Creates claim intent
- `GrantEntityAccountClaimsEvaluateAuthz`: Grants evaluation authorization
- `MsgExecAgentEvaluate`: Executes claim evaluation

### 4. Entity Module
Located in `__tests__/modules/Entity.ts`

#### Key Functions:
- `CreateEntity`: Creates new entity
- `TransferEntity`: Transfers entity ownership
- `UpdateEntityVerified`: Updates entity verification status
- `CreateEntityAccount`: Creates entity account
- `GrantEntityAccountAuthz`: Grants entity account authorization
- `MsgRevokeEntityAccountAuthz`: Revokes entity account authorization

### 5. LiquidStake Module
Located in `__tests__/modules/LiquidStake.ts`

#### Key Functions:
- `MsgSubmitProposalUpdateLiquidStakeParams`: Updates liquid staking parameters
- `MsgUpdateWhitelistedValidators`: Updates whitelisted validators
- `MsgLiquidStake`: Performs liquid staking
- `MsgLiquidUnstake`: Performs liquid unstaking

### 6. Smartaccount Module
Located in `__tests__/modules/Smartaccount.ts`

#### Key Functions:
- `MsgAddAuthenticator`: Adds authenticator to smart account
- `MsgRemoveAuthenticator`: Removes authenticator from smart account
- `MsgSendWithAuthenticator`: Sends transaction using authenticator

### 7. Token Module
Located in `__tests__/modules/Token.ts`

#### Key Functions:
- `CreateToken`: Creates new token
- `MintToken`: Mints tokens
- `TransferToken`: Transfers tokens
- `RetireToken`: Retires tokens
- `TransferCredit`: Transfers credit tokens
- `StopToken`: Stops token operations
- `MsgGrantContract`: Grants contract authorization
- `MsgExecContract`: Executes contract operations

## Common Patterns

Most functions follow these patterns:
1. Create a client instance
2. Get user accounts/addresses
3. Construct message with appropriate type URL
4. Sign and broadcast transaction
5. Return response

## Dependencies

- cosmos SDK
- IXO blockchain modules
- Long
- base58
- Various crypto and encoding utilities

This documentation provides a high-level overview of the test helpers. Each module contains specific functionality for testing different aspects of the IXO blockchain implementation.