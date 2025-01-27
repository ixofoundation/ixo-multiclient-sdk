---
stoplight-id: 9kd3zu5n6sx9d
---

# Managing Smart Accounts

## Step-by-Step Guide

This guide will walk you through managing smart accounts using the **IXO Spatial Web Multiclient SDK**. Smart accounts enhance security and flexibility in managing blockchain transactions.

### Step 1: Add an Authenticator

To add an authenticator to a smart account, use the `MsgAddAuthenticator` function. Here's an example in TypeScript:

```typescript
const response = await MsgAddAuthenticator(
  "smart_account_address", // Address of the smart account
  "authenticator_address" // Address of the authenticator
);
```

The parameters include:

- **smartAccount**: The address of the smart account
- **authenticator**: The address of the authenticator

### Step 2: Remove an Authenticator

To remove an authenticator from a smart account, use the `MsgRemoveAuthenticator` function:

```typescript
const response = await MsgRemoveAuthenticator(
  "smart_account_address", // Address of the smart account
  "authenticator_address" // Address of the authenticator
);
```

### Step 3: Send Transaction with Authenticator

To send a transaction using an authenticator, use the `MsgSendWithAuthenticator` function:

```typescript
const response = await MsgSendWithAuthenticator(
  "smart_account_address", // Address of the smart account
  "recipient_address", // Address of the recipient
  "1000000uixo" // Amount to send
);
```

## Smartaccount Module Reference

### Core Functions:

- **MsgAddAuthenticator**: Adds an authenticator to a smart account.

  ```typescript
  MsgAddAuthenticator(smartAccount: string, authenticator: string)
  ```

- **MsgRemoveAuthenticator**: Removes an authenticator from a smart account.

  ```typescript
  MsgRemoveAuthenticator(smartAccount: string, authenticator: string)
  ```

- **MsgSendWithAuthenticator**: Sends a transaction using an authenticator.
  ```typescript
  MsgSendWithAuthenticator(smartAccount: string, recipient: string, amount: string)
  ```

## Common Issues and Solutions

1. **Invalid Authenticator Parameters**

   - Ensure the smart account and authenticator addresses are correctly formatted.
   - Verify the authenticator is authorized for the operation.

2. **Transaction Failures**

   - Confirm the smart account has sufficient balance.
   - Verify the recipient address is valid.

3. **Authorization Issues**
   - Ensure the authenticator has the necessary permissions.
   - Check for any restrictions on the smart account.

## Additional Notes

- Smart accounts enhance security and flexibility in managing transactions.
- Always verify the status of authenticators and smart accounts.
- Monitor transactions for any discrepancies or unauthorized access.
