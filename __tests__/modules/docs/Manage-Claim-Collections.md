---
stoplight-id: lqlllxh3d4289
---

# Managing Claims and Collections

## Step-by-Step Guide

This guide will walk you through creating and managing claim collections using the **IXO Spatial Web Multiclient SDK**. It covers creating collections, submitting claims, and evaluating them on the IXO blockchain.

### Step 1: Create a Collection

To create a new collection, use the `CreateCollection` function. Here's an example in TypeScript:

```typescript
const response = await CreateCollection(
  "entityDid1234",      // The DID of the entity creating the collection
  "protocolDid1234",    // The DID of the associated protocol
  "paymentsAccount1234" // Account to handle payments
);
```

In this example, the `CreateCollection` function is invoked to set up a collection where claims can be submitted, evaluated, and finalized. The parameters include:

- **entityDid**: The DID of the entity creating the collection.
- **protocolDid**: The DID of the protocol under which the collection falls.
- **paymentsAccount**: Account to handle collection-related payments.

### Step 2: Retrieve Collection Data Using GraphQL

After creating a collection, you can retrieve its data using the IXO Blocksync GraphQL API. Here's an example query:

```graphql
query MyQuery {
  claimCollection(id: "99") {
    id
    startDate
    endDate
    entity
    protocol
    admin
    count
    evaluated
    approved
    rejected
    disputed
    claimSchemaTypesLoaded
    invalidated
    payments
    quota
    state
  }
}
```

Replace the `id` field with the **collection ID** obtained during creation to get specific details.

### Step 3: Submit a Claim to the Collection

To submit a claim, use the `MsgExecAgentSubmit` function:

```typescript
const response = await MsgExecAgentSubmit(
  "claimId1234",        // Unique identifier for the claim
  "collectionId1234",   // Identifier of the collection
  "adminAddress1234"    // Admin address authorizing the claim submission
);
```

This function submits a claim for evaluation. The parameters include:

- **claimId**: A unique identifier for the claim.
- **collectionId**: The collection to which the claim belongs.
- **adminAddress**: The admin address authorizing the submission.

### Step 4: Retrieve Claim Data Using GraphQL

To view claim details, use the following GraphQL query:

```graphql
query MyQuery {
  claim(claimId: "bafkreihzugslzexyu2c6o6nmtm7vxbsyelo7pzmcppsmqawj2s6blmgojy") {
    schemaType
    claimId
    agentAddress
    agentDid
    collectionId
    paymentsStatus
    submissionDate
  }
}
```

### Step 5: Evaluate a Claim

Evaluate a claim using the `MsgExecAgentEvaluate` function:

```typescript
const response = await MsgExecAgentEvaluate(
  "claimId1234",        // Unique identifier for the claim
  "collectionId1234",   // Identifier of the collection
  "adminAddress1234"    // Admin address authorizing the claim evaluation
);
```

This function allows an agent to assess the claim and determine its status.

### Step 6: View the Claim Using GraphQL

After evaluation, use the IXO Blocksync GraphQL API to view claim details, including its evaluation status:

```graphql
query MyQuery {
  claim(claimId: "bafkreihzugslzexyu2c6o6nmtm7vxbsyelo7pzmcppsmqawj2s6blmgojy") {
    schemaType
    claimId
    agentAddress
    agentDid
    collectionId
    paymentsStatus
    submissionDate
    evaluationByClaimId {
      status
      verificationProof
      amount
      evaluationDate
      oracle
      reason
    }
  }
}
```

## Claims Module Reference

### Core Functions:

- **CreateCollection**: Sets up a new collection on the IXO blockchain.
  ```typescript
  CreateCollection(entityDid, protocolDid, paymentsAccount, signer?, cw20Address?)
  ```

- **UpdateCollectionState**: Modifies the state of a collection.
  ```typescript
  UpdateCollectionState(collectionId, adminAddress, signer?)
  ```

- **MsgClaimIntent**: Submits an intent for a claim against a collection.
  ```typescript
  MsgClaimIntent(claimId, collectionId, adminAddress)
  ```

- **MsgExecAgentSubmit**: Executes the submission of a claim by an agent.
  ```typescript
  MsgExecAgentSubmit(claimId, collectionId, adminAddress)
  ```

- **MsgExecAgentEvaluate**: Evaluates a claim, determining its approval status.
  ```typescript
  MsgExecAgentEvaluate(claimId, collectionId, adminAddress)
  ```

### Additional Functions:

- **GrantEntityAccountClaimsSubmitAuthz**: Grants claim submission authorization.
- **GrantEntityAccountClaimsEvaluateAuthz**: Grants claim evaluation authorization.
- **DisputeClaim**: Initiates a dispute for a specific claim.
- **MsgExecWithdrawal**: Executes a withdrawal of a payment related to a claim.

## Common Issues and Solutions

1. **Invalid Collection Parameters**
   - Ensure all DIDs and account addresses are correct.
   - Verify payment account details are accurate.

2. **Claim Submission Errors**
   - Check that the claim ID is unique and valid.
   - Ensure the admin address has the necessary permissions.

3. **Evaluation Issues**
   - Confirm the claim is in a state ready for evaluation.
   - Verify the evaluator has the correct authorization.

## Additional Notes

- Collections and claims are central to managing interactions and transactions on the blockchain.
- Always verify the status and details of claims and collections through appropriate query mechanisms.
- Authorizations can be specific to certain actions and time-limited.

