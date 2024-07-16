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

## DAODAO Contracts

**Use Case 1: Creating a DAO**

- **Heading**: Creating a DAO
- **Description**: Establishing a new DAO by following a step-by-step process that includes building and optimizing contracts, uploading them to a blockchain, crafting an instantiate message, and using a CosmWasm admin template.
- **Scenario**: A group wants to establish a new DAO for their community or project.
- **Details**:
  - **Steps**:
    - Build and optimize contracts
    - Upload contracts to a blockchain
    - Craft instantiate message
    - Use CosmWasm admin template
  - **Tools**: Docker, Just

---

**Use Case 2: Managing DAO Membership**

- **Heading**: Managing DAO Membership
- **Description**: Handling the addition and removal of members in both member-based and token-based DAOs through proposals and staking mechanisms.
- **Scenario**: A DAO needs to manage its membership dynamically by adding or removing members based on proposals or token staking.
- **Details**:
  - **Member-Based DAO**:
    - Adding members: Submit a proposal to add new members.
    - Removing members: Submit a proposal to remove existing members.
  - **Token-Based DAO**:
    - Joining: Stake governance tokens to register as a member.
    - Leaving: Unstake tokens to leave the DAO.
  - **Voting Power**: Determined by staked tokens or assigned weights.

---

**Use Case 3: Proposal Creation and Management**

- **Heading**: Proposal Creation and Management
- **Description**: Creating, managing, and gating proposals within a DAO using pre-propose modules to ensure only committed members can propose.
- **Scenario**: A DAO wants to regulate proposal creation to maintain quality and ensure only serious proposals are considered.
- **Details**:
  - **Pre-Propose Modules**: 
    - Require deposits to create proposals
    - Allow only DAO members to create proposals
    - Require non-refundable payments for proposals

---

**Use Case 4: Voting on Proposals**

- **Heading**: Voting on Proposals
- **Description**: Implementing different voting strategies for proposals, including single-choice, multiple-choice, first-past-the-post, and ranked-choice voting.
- **Scenario**: A DAO needs to provide flexible voting options for its members to make decisions on various proposals.
- **Details**:
  - **Voting Strategies**:
    - Single-choice (Yes, No, Abstain)
    - Multiple-choice
    - First-past-the-post
    - Ranked-choice

---

**Use Case 5: Verifying DAO Contracts**

- **Heading**: Verifying DAO Contracts
- **Description**: Ensuring the integrity and correctness of a DAO's smart contracts by validating the instantiate message and checking the configuration.
- **Scenario**: A DAO wants to verify that its smart contracts are correctly configured to avoid potential issues.
- **Details**:
  - **Verification Steps**:
    - Validate instantiate message
    - Check smart contracts configuration
  - **Resources**: DAO DAO contracts design documentation

---

**Use Case 6: Distributing Staking Rewards**

- **Heading**: Distributing Staking Rewards
- **Description**: Implementing a system to gradually distribute tokens to DAO members as rewards for staking, encouraging long-term commitment and participation.
- **Scenario**: A DAO wants to incentivize its members to stake their tokens and actively participate in governance.
- **Details**:
  - **Staking Mechanism**: Gradual token distribution
  - **Incentives**: Long-term commitment and participation

---

Here are additional use cases for DAODAO contracts based on the comprehensive documentation from the DAO DAO website:

---

**Use Case 7: Managing Proposal Submission**

- **Heading**: Managing Proposal Submission
- **Description**: Configuring the rules around who can submit proposals and the requirements for submission, such as proposal deposits and submission policies.
- **Scenario**: A DAO wants to control proposal spam and ensure only serious proposals are submitted by implementing submission requirements.
- **Details**:
  - **Proposal Deposit**: Options include always refunding, only refunding for passed proposals, or never refunding deposits.
  - **Submission Policy**: Options include allowing only members or anyone to submit proposals.

---

**Use Case 8: Handling Different Types of Proposals**

- **Heading**: Handling Different Types of Proposals
- **Description**: Creating and managing both single-choice and multiple-choice proposals within a DAO, including their configuration and execution.
- **Scenario**: A DAO needs to provide various types of proposals to accommodate different decision-making scenarios.
- **Details**:
  - **Single-Choice Proposals**: Voting options are 'Yes', 'No', and 'Abstain'.
  - **Multiple-Choice Proposals**: Between 2 to 20 options, including a 'None of the above' option, with individual actions for each choice.

---

**Use Case 9: Managing Vetoable DAOs**

- **Heading**: Managing Vetoable DAOs
- **Description**: Enabling or disabling the option for a DAO to display and potentially veto proposals from affiliated DAOs.
- **Scenario**: A DAO wants to have oversight and veto power over decisions made by its affiliated subDAOs.
- **Details**:
  - **Actions**: Enable or disable veto power through a governance proposal.
  - **Voting**: Members vote on whether to adopt the veto power configuration.

---

**Use Case 10: Configuring Voting Parameters**

- **Heading**: Configuring Voting Parameters
- **Description**: Setting up the rules for voting within a DAO, including the passing threshold, quorum, voting duration, and the ability to change votes.
- **Scenario**: A DAO needs to ensure its voting process is transparent, fair, and aligned with its governance needs.
- **Details**:
  - **Passing Threshold**: Percentage of 'Yes' votes required to pass a proposal.
  - **Quorum**: Minimum proportion of total voting power that must participate for a vote to be valid.
  - **Voting Duration**: Maximum time a proposal remains open for voting.
  - **Allow Revoting**: Option to allow members to change their votes before the voting period ends.

---

**Use Case 11: Creating and Voting on Proposals**

- **Heading**: Creating and Voting on Proposals
- **Description**: Step-by-step guide on how to create a proposal and how members can vote on it within the DAO framework.
- **Scenario**: DAO members need to create and vote on proposals to make collective decisions.
- **Details**:
  - **Creating Proposals**: Navigate to the DAO's proposal section, fill in the proposal details, and publish it.
  - **Voting on Proposals**: Access the proposal, select a voting option, and cast the vote.

---

**Use Case 12: Upgrading a DAO**

- **Heading**: Upgrading a DAO
- **Description**: Transitioning a DAO from one version to another, such as upgrading from V1 to V2, to take advantage of new features and improvements.
- **Scenario**: A DAO wants to leverage new functionalities and improvements by upgrading its structure.
- **Details**:
  - **Upgrade Process**: Create a proposal to upgrade, add the upgrade action, and execute the proposal upon approval.

---

These use cases provide a comprehensive overview of the various functionalities and scenarios supported by the DAODAO contracts, aligning with the typical lifecycle and governance activities of DAOs. They are aligned with the typical lifecycle and management activities of DAOs, covering creation, membership management, proposal handling, voting, contract verification, and incentive distribution.

For more details, you can refer to the DAO DAO documentation at [docs.daodao.zone](https://docs.daodao.zone).