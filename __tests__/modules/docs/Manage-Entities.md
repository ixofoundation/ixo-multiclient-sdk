---
stoplight-id: n44c05pypw2gu
---

# Managing Entities

## Step-by-Step Guide

This guide walks you through managing entities using the **IXO Spatial Web Multiclient SDK**, including creating, transferring, and managing entity accounts.

### Step 1: Create an Entity

To create a new entity, use the `CreateEntity` function. Here's an example in TypeScript:

```typescript
const entityType = "asset";
const context = [{ key: "class", val: "did:ixo:entity:protocol123" }];
const response = await Entity.CreateEntity(entityType, context);
const entityDid = utils.common.getValueFromEvents(response, "wasm", "token_id");
console.log({ entityDid });
```

<!-- theme: info -->

> #### Protocols as canonical classes
>
> Entities can be of different types (e.g., "asset") and include context information that defines their class and properties. The context helps establish the entity's relationship to protocols and inherited properties.

In this example, the `CreateEntity` function is invoked to create a new entity, and the returned **entity DID** is logged to 
the console. The `entityDid` value will be required in the next step to query the entity details.
The `CreateEntity` function accepts the following parameters:

```typescript
export const CreateEntity = async (
  entityType: string = "asset",
  context?: [{ key: string; val: string }],
  relayerNodeDid = "",
  relayerNode: WalletUsers = WalletUsers.tester,
  signer: WalletUsers = WalletUsers.tester
) => {
  // ... implementation
};
```

### Step 2: Transfer Entity Ownership

To transfer ownership of an entity to another party, use the `TransferEntity` function:

```typescript
const entities = [entityDid];
const recipientDid = "did:ixo:recipient123";
const memo = "Transfer to new owner";
await Entity.TransferEntity(WalletUsers.tester, entities, recipientDid, memo);
```

The `TransferEntity` function handles the ownership transfer process and optionally includes a memo for transaction reference.

### Step 3: Manage Entity Accounts

#### Create Entity Account
To create an account for an entity:

```typescript
const accountName = "treasury";
await Entity.CreateEntityAccount(entityDid, accountName);
```

#### Grant Account Authorization
To grant permissions to an account:

```typescript
const genericAuthMsg = "/cosmos.bank.v1beta1.MsgSend";
await Entity.GrantEntityAccountAuthz(
  entityDid,
  "treasury",
  WalletUsers.alice,
  WalletUsers.tester,
  genericAuthMsg
);
```

#### Revoke Account Authorization
To revoke previously granted permissions:

```typescript
await Entity.MsgRevokeEntityAccountAuthz(
  entityDid,
  "treasury",
  WalletUsers.alice,
  "/cosmos.bank.v1beta1.MsgSend"
);
```

### Step 4: Update Entity Status

To update an entity's verification status:

```typescript
const entityDids = [entityDid];
await Entity.UpdateEntityVerified(
  WalletUsers.tester,
  entityDids,
  relayerDid,
  true
);
```

## Entity Module Reference

### Core Functions:

- **CreateEntity**: Creates a new entity with specified type and context
  ```typescript
  CreateEntity(entityType?, context?, relayerNodeDid?, relayerNode?, signer?)
  ```

- **TransferEntity**: Transfers entity ownership
  ```typescript
  TransferEntity(signer?, entities[], recipientDid?, memo?)
  ```

- **UpdateEntityVerified**: Updates entity verification status
  ```typescript
  UpdateEntityVerified(signer?, entityDids[], relayerDid?, entityVerified?)
  ```

### Account Management Functions:

- **CreateEntityAccount**: Creates new entity account
  ```typescript
  CreateEntityAccount(entityDid, name?, signer?)
  ```

- **GrantEntityAccountAuthz**: Grants account authorization
  ```typescript
  GrantEntityAccountAuthz(entityDid, name?, grantee?, signer?, genericAuthMsg?)
  ```

- **MsgRevokeEntityAccountAuthz**: Revokes account authorization
  ```typescript
  MsgRevokeEntityAccountAuthz(entityDid, name?, grantee?, msgTypeUrl?, signer?)
  ```

## Common Issues and Solutions

1. **Invalid Entity Type**
   - Ensure the entityType matches one of the supported types
   - Verify the context information is properly formatted

2. **Authorization Errors**
   - Check that the signer has appropriate permissions
   - Verify the relayer node DID is valid and active

3. **Account Management**
   - Ensure account names are unique within the entity
   - Verify authorization message types match intended permissions

## Additional Notes

- Entity DIDs are immutable and serve as unique identifiers
- Context information helps establish entity relationships and inheritance
- Account authorizations can be time-limited and specific to certain message types
- Always verify entity status changes through appropriate query mechanisms
