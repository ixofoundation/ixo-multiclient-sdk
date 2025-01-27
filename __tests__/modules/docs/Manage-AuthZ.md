---
stoplight-id: r01ks1gx8mjaq
---

# Managing Authorization

## Step-by-Step Guide

This guide will walk you through managing authorizations using the **IXO Spatial Web Multiclient SDK**. Authorization (AuthZ) allows accounts to grant permissions to other accounts for executing specific types of transactions.

### Step 1: Grant Send Authorization

To grant send authorization to another account, use the `MsgGrantSend` function. Here's an example in TypeScript:

```typescript
const response = await MsgGrantSend(
  "1000000uixo", // Amount to authorize
  "granter_address", // Address granting permission
  "grantee_address" // Address receiving permission
);
```

The parameters include:

- **amount**: The amount and denomination to authorize
- **granter**: The address granting the authorization
- **grantee**: The address receiving the authorization

### Step 2: Execute IBC Send with Authorization

To execute an IBC send using granted authorization, use the `MsgExecSendIbc` function:

```typescript
const response = await MsgExecSendIbc(
  "channel-0", // IBC channel
  "grantee_address", // Address with authorization
  "1000000uixo" // Amount to send
);
```

### Step 3: Grant Fee Allowance

To grant a fee allowance to another account, use the `MsgGrantAllowanceFeegrant` function:

```typescript
const response = await MsgGrantAllowanceFeegrant(
  "granter_address", // Address granting allowance
  "grantee_address" // Address receiving allowance
);
```

### Step 4: Revoke Allowance

To revoke a previously granted allowance, use the `MsgRevokeAllowance` function:

```typescript
const response = await MsgRevokeAllowance(
  "granter_address", // Address that granted allowance
  "grantee_address" // Address to revoke from
);
```

## AuthZ Module Reference

### Core Functions:

- **MsgGrantSend**: Grants send authorization to a specified grantee.

  ```typescript
  MsgGrantSend(amount: string, granter: string, grantee: string)
  ```

- **MsgExecSendIbc**: Executes an IBC send with authorization.

  ```typescript
  MsgExecSendIbc(channel: string, grantee: string, amount: string)
  ```

- **MsgGrantAllowanceFeegrant**: Grants fee allowance to a grantee.

  ```typescript
  MsgGrantAllowanceFeegrant(granter: string, grantee: string)
  ```

- **MsgRevokeAllowance**: Revokes a previously granted allowance.
  ```typescript
  MsgRevokeAllowance(granter: string, grantee: string)
  ```

### Additional Functions:

- **MsgExecAuthz**: Executes a transaction with granted authorization.

## Common Issues and Solutions

1. **Invalid Authorization Parameters**

   - Ensure addresses are correctly formatted.
   - Verify the amount is within allowed limits.
   - Check that the denomination is supported.

2. **Execution Failures**

   - Confirm the authorization hasn't expired.
   - Verify the grantee has sufficient permissions.
   - Check that the authorization type matches the operation.

3. **Fee Allowance Issues**
   - Ensure the granter has sufficient balance.
   - Verify the allowance hasn't been exceeded.
   - Check for any time-based restrictions.

## Additional Notes

- Authorizations can be time-limited.
- Different message types require specific authorization types.
- Fee allowances can be capped or periodic.
- Always verify authorization status before executing transactions.
- Monitor authorization expiration and renewal requirements.
