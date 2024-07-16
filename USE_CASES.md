# Blockchain Modules

## IXO Modules

### Entity Module Messages

1. **MsgCreateEntity**
   - **Description:** Creates a new entity within the decentralized network. This includes generating the IID document and minting the associated NFT.
   - **Use Case:** 
     - **Scenario:** A startup company wants to register as an entity on the blockchain to establish its digital identity.
     - **Details:** The company provides its details and submits this message to create a new entity. This action generates an IID document and mints an NFT representing the entity's identity on the blockchain.

2. **MsgUpdateEntity**
   - **Description:** Updates the fields of an existing entity. This includes fields like entity status, start date, end date, credentials, and controller details.
   - **Use Case:** 
     - **Scenario:** A company needs to update its operational details after a significant change in its business model.
     - **Details:** The company submits this message to update its entity status, operational dates, and other relevant information to ensure that its digital identity reflects the current state of the business.

3. **MsgDeleteEntity**
   - **Description:** Deletes an entity from the decentralized network. This includes deactivating the IID document and handling any remaining balances in entity accounts.
   - **Use Case:** 
     - **Scenario:** A company decides to dissolve and wants to remove its presence from the blockchain.
     - **Details:** The company submits this message to delete its entity, deactivate its IID document, and ensure that any remaining balances in its accounts are appropriately handled.

4. **MsgUpdateEntityMetadata**
   - **Description:** Updates the metadata of an existing entity. This can include changes to linked resources, linked entities, or linked claims.
   - **Use Case:** 
     - **Scenario:** A company expands its services and wants to update its profile with new links and resources.
     - **Details:** The company submits this message to update its metadata, adding new links to services and updating existing information to ensure that all relevant data is available.

5. **MsgUpdateEntityVerified**
   - **Description:** Updates the `EntityVerified` field of an entity. Only the relayer node for the entity can update it.
   - **Use Case:** 
     - **Scenario:** A trusted authority verifies the credentials of an entity and updates its verification status.
     - **Details:** The relayer node submits this message to update the `EntityVerified` field, confirming that the entity's credentials have been reviewed and verified.

### IID Module Messages

1. **MsgCreateIidDocument**
   - **Description:** Creates a new IID document for an entity. This is typically done as part of the entity creation process.
   - **Use Case:** 
     - **Scenario:** A non-profit organization wants to create a verifiable digital identity for transparency.
     - **Details:** The organization submits this message to create an IID document, ensuring that its identity is compliant with W3C's DID specifications and is verifiable on the blockchain.

2. **MsgUpdateIidDocument**
   - **Description:** Updates the metadata or linked resources/entities/claims of an existing IID document.
   - **Use Case:** 
     - **Scenario:** An entity wants to add new certifications to its digital identity.
     - **Details:** The entity submits this message to update its IID document, adding new linked claims and updating metadata to reflect the latest information.

3. **MsgDeactivateIidDocument**
   - **Description:** Deactivates an IID document, effectively marking the associated entity as inactive or archived.
   - **Use Case:** 
     - **Scenario:** A project is completed, and its digital identity needs to be archived.
     - **Details:** The project submits this message to deactivate its IID document, marking it as inactive and archiving the associated identity.

4. **MsgAddLinkedResource**
   - **Description:** Adds a linked resource to an existing IID document.
   - **Use Case:** 
     - **Scenario:** An entity integrates a new service endpoint.
     - **Details:** The entity submits this message to add the new service endpoint to its IID document, ensuring that the new resource is linked to its digital identity.

5. **MsgDeleteLinkedResource**
   - **Description:** Removes a linked resource from an existing IID document.
   - **Use Case:** 
     - **Scenario:** An entity discontinues a service and needs to remove its link.
     - **Details:** The entity submits this message to remove the outdated service endpoint from its IID document.

6. **MsgAddLinkedEntity**
   - **Description:** Adds a linked entity to an existing IID document.
   - **Use Case:** 
     - **Scenario:** A parent company adds a new subsidiary.
     - **Details:** The parent company submits this message to add the subsidiary as a linked entity in its IID document.

7. **MsgDeleteLinkedEntity**
   - **Description:** Removes a linked entity from an existing IID document.
   - **Use Case:** 
     - **Scenario:** A parent company removes a sold subsidiary.
     - **Details:** The parent company submits this message to remove the subsidiary from its IID document.

8. **MsgAddLinkedClaim**
   - **Description:** Adds a linked claim to an existing IID document.
   - **Use Case:** 
     - **Scenario:** An entity adds a new certification.
     - **Details:** The entity submits this message to add the certification as a linked claim in its IID document.

9. **MsgDeleteLinkedClaim**
   - **Description:** Removes a linked claim from an existing IID document.
   - **Use Case:** 
     - **Scenario:** An entity removes an expired certification.
     - **Details:** The entity submits this message to remove the expired claim from its IID document.

10. **MsgAddAccordedRight**
    - **Description:** Adds an accorded right to an existing IID document.
    - **Use Case:** 
      - **Scenario:** An entity grants new permissions.
      - **Details:** The entity submits this message to add the new rights to its IID document, specifying the permissions granted.

11. **MsgDeleteAccordedRight**
    - **Description:** Removes an accorded right from an existing IID document.
    - **Use Case:** 
      - **Scenario:** An entity revokes permissions.
      - **Details:** The entity submits this message to remove the revoked rights from its IID document.

12. **MsgAddIidContext**
    - **Description:** Adds a context to an IID document.
    - **Use Case:** 
      - **Scenario:** An entity provides additional contextual information.
      - **Details:** The entity submits this message to add context to its IID document, enriching the identity information.

13. **MsgDeleteIidContext**
    - **Description:** Removes a context from an IID document.
    - **Use Case:** 
      - **Scenario:** An entity removes outdated context information.
      - **Details:** The entity submits this message to remove irrelevant context from its IID document.

### Claims Module Messages

1. **MsgCreateCollection**
   - **Description:** Creates and stores a new Collection which defines protocols, quotas, and payments for claim submissions and evaluations.
   - **Use Case:** 
     - **Scenario:** An organization sets up a new collection to handle claims for a specific project.
     - **Details:** The organization submits this message to create a collection, defining rules for claim submissions, evaluation quotas, and associated payments.

2. **MsgUpdateCollectionState**
   - **Description:** Updates a Collection's `state` field.
   - **Use Case:** 
     - **Scenario:** A project is temporarily paused, and claims need to be halted.
     - **Details:** The administrator updates the collection's state to pause claims submission until the project resumes.

3. **MsgUpdateCollectionDates**
   - **Description:** Updates the start and end dates for a Collection.
   - **Use Case:** 
     - **Scenario:** The project timeline changes, affecting the claim submission period.
     - **Details:** The administrator adjusts the collection's dates to align with the new project timeline.

4. **MsgSubmitClaim**
   - **Description:** Submits a new claim for evaluation.
   - **Use Case:** 
     - **Scenario:** A service provider submits a claim for a completed task.
     - **Details:** The provider submits details of the completed task, including evidence and relevant metadata, for evaluation and approval.

5. **MsgEvaluateClaim**
   - **Description:** Evaluates a submitted claim and updates its status.
   - **Use Case:** 
     - **Scenario:** A reviewer assesses a claim and determines its validity.
     - **Details:** The reviewer updates the claim's status to approved, rejected, or requires more information, based on the evaluation.

6. **MsgDisputeClaim**
   - **Description:** Submits a dispute for a previously evaluated claim.
   - **Use Case:** 
     - **Scenario:** A claimant disagrees with the evaluation result.
     - **Details:** The claimant submits a dispute, providing additional evidence or arguments for re-evaluation.

7. **MsgWithdrawPayment**
   - **Description:** Withdraws a payment for an approved claim.
   - **Use Case:** 
     - **Scenario:** A claimant wants to receive payment for an approved claim.
     - **Details:** The claimant submits this message to initiate the withdrawal process, specifying payment details and authorization.

These detailed use cases cover all the messages in the Entity, IID, and Claims modules, providing scenarios and specific details for each message.