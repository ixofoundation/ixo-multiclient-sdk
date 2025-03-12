# Onboarding a New Cookstoves Distributor: Developer's Guide

This document provides a comprehensive, end-to-end walkthrough for onboarding a new cookstoves distributor using Mission Control. It is designed for seasoned developers familiar with blockchain systems, decentralized protocols, and test-driven development in TypeScript. The process is orchestrated by the `index.spec.ts` file, which sequentially executes multiple setup and verification steps across various domains such as DAO creation, protocol configuration, asset registration, and claims processing.
The walkthrough is based on the Supamoto cookstoves distributor as an example.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [System Architecture Overview](#system-architecture-overview)
4. [Detailed Setup Flow](#detailed-setup-flow)
   - [A. Blockchain Funding and User Setup](#a-blockchain-funding-and-user-setup)
   - [B. DAO and Group Initialization](#b-dao-and-group-initialization)
   - [C. Emerging Ecosystem Setup](#c-emerging-ecosystem-setup)
   - [D. Prospect Flow Configuration](#d-prospect-flow-configuration)
   - [E. ECS Setup and Asset Registration](#e-ecs-setup-and-asset-registration)
   - [F. Cookstoves Distributor Onboarding](#f-cookstoves-distributor-onboarding)
   - [G. Entity Verification](#g-entity-verification)
   - [H. Web3 Storage Integration](#h-web3-storage-integration)
   - [I. Claims Configuration](#i-claims-configuration)
   - [J. Legacy Collection Handling](#j-legacy-collection-handling)
5. [Running the Flow](#running-the-flow)
6. [Troubleshooting and Best Practices](#troubleshooting-and-best-practices)
7. [Conclusion and Next Steps](#conclusion-and-next-steps)

---

## Introduction

Onboarding a new cookstoves distributor involves several coordinated steps:

- Funding blockchain test users,
- Creating fundamental classes and DAOs,
- Configuring emerging protocols and oracles,
- Registering ECS assets and projects,
- Onboarding the cookstoves distributor,
- Verifying all created entities,
- Integrating with decentralized storage (Web3),
- Configuring claim processing.

Each of these steps is encapsulated in specific flows defined within the `index.spec.ts` file. This modular approach ensures that each domain is isolated, maintainable, and testable.

---

## Prerequisites

Before proceeding, ensure that:

- **Development Environment:**

  - Node.js, TypeScript, and all project dependencies are installed.
  - You have a properly configured `.env` file with necessary environment variables (e.g., `ROOT_IMPACTS`, `ROOT_EMERGING`, `ROOT_ECS`, `ROOT_PROSPECT`, `ASSERT_USER_ECS`, etc.).

- **Blockchain Network:**

  - A blockchain network (local, testnet, or mainnet) is available and running.
  - Each test user has sufficient funds to cover gas fees during entity creation.

- **Technical Familiarity:**
  - Understanding of test-driven development in TypeScript.
  - Experience with blockchain-based applications and decentralized protocols.
  - Familiarity with modular design and dependency management.

---

## System Architecture Overview

The onboarding process leverages a modular architecture, with each module handling a distinct aspect of the overall workflow:

- **Funding and User Setup:**  
  Prepares blockchain test users and ensures each user account is adequately funded.

- **DAO and Group Initialization:**  
  Establishes foundational classes and DAOs via `classesFlow` and `impactsFlow`.

- **Emerging Ecosystem Setup:**  
  Configures components of the emerging ecosystem including DAO creation, oracle setup, and protocol definition through `emergingDaoFlow`, `emergingOraclesFlow`, and `emergingProtocolsFlow`.

- **Prospect Flow Configuration:**  
  Sets up additional organizational structures and oracles tailored for the prospect use case via `propectFlow`.

- **ECS Setup and Asset Registration:**  
  Creates ECS-specific DAOs and registers asset collections or projects using `ecsDaoFlow`, `ecsFlow`, and `ecsProjectFlow`, with token transfers ensuring operational funding.

- **Cookstoves Distributor Onboarding:**  
  Central to this guide is the `cookstovesFlow` which handles the onboarding process of the cookstoves distributor for testnet/mainnet deployments (distinct from the devnet variant).

- **Entity Verification:**  
  Uses `relayerVerifyAllEntities` to validate that every entity (DAO, protocol, asset) is correctly set up and functioning.

- **Web3 Storage Integration:**  
  Validates decentralized file storage operations with `web3Storage`.

- **Claims Configuration:**  
  Orchestrates claims setup including creating claim form objects and processing fuel purchase claims via the `Claims` module.

- **Legacy Collection Handling:**  
  Runs legacy flows (e.g., `cookstovesExtra`, `legacyCollectionFlow`) to ensure backward compatibility where necessary.

---

## Detailed Setup Flow

### A. Blockchain Funding and User Setup

1. **Generating Test Users:**  
   The `generateBlockchainTestUsers` function initializes blockchain test accounts.
2. **Fund Distribution:**  
   For each critical environment variable (such as `ROOT_IMPACTS`, `ROOT_EMERGING`), a new wallet is generated using `generateNewWallet`, and funds are allocated via `bankBasic` to ensure that each user account is properly funded for subsequent operations.

### B. DAO and Group Initialization

1. **Create Foundational Classes:**  
   Run `classesFlow` to create top-level classes and persist class identifiers.
2. **Impacts DAO Configuration:**  
   Execute `impactsFlow` to create the impacts DAO, storing details like `impactsRootUserDid` for later reference.

### C. Emerging Ecosystem Setup

1. **Emerging DAO Creation:**  
   Use `emergingDaoFlow` to set up the emerging DAO.
2. **Oracle Setup:**  
   `emergingOraclesFlow` configures the oracle necessary for emerging operations.
3. **Protocol Definition:**  
   Execute `emergingProtocolsFlow` to define protocols such as the cookstove asset protocol and store relevant identifiers.

### D. Prospect Flow Configuration

- **Prospect Organization Setup:**  
  Run `propectFlow` to handle configuration for prospect-specific DAOs and oracles, ensuring additional dependencies are isolated and managed.

### E. ECS Setup and Asset Registration

1. **ECS DAO Initialization:**  
   `ecsDaoFlow` is responsible for creating the ECS-specific DAO.
2. **Extended ECS Configuration:**  
   Execute `ecsFlow` to configure further ECS system settings.
3. **Funding Adjustment:**  
   Call `sendTokens(5)` to ensure that the ECS user account has enough tokens to cover gas fees.
4. **Project/Asset Collection Registration:**  
   Run `ecsProjectFlow` to register projects or asset collections necessary for the ECS module.

### F. Cookstoves Distributor Onboarding

- **Core Distributor Registration:**  
  The `cookstovesFlow` function is the crux of this process—it officially onboards the cookstoves distributor for testnet/mainnet environments.  
  **Note:** A separate `cookstovesFlowDevnet` exists for local development scenarios, but this guide focuses on production-style deployments.

### G. Entity Verification

- **Integrity Checks:**  
  Utilize `relayerVerifyAllEntities` at multiple points to ensure that every entity (DAOs, protocols, projects) is correctly instantiated and active. This verification is performed for different user roles (impacts, emerging, etc.) to guarantee the system’s overall consistency.

### H. Web3 Storage Integration

- **File Storage Validation:**  
  The `web3Storage` function conducts a test run to ensure that decentralized file uploading works as expected. This is crucial for confirming that the system integrates properly with Web3 storage solutions.

### I. Claims Configuration

1. **Claim Form Object Setup:**  
   Initiate `claimFormObjectsProtocol` to automatically set up the structure for handling claims.
2. **Claims Processing:**  
   The `Claims` module runs several functions:
   - `supamotoCreateCollection`: Creates new collections for Fuel Purchase claims (FP) and Carbon Emission Reduction (CER).
   - `supamotoClaims2`: Processes standard claim workflows.
   - `supamotoEvaluateFuelPurchases`: Handles evaluations for any overlooked fuel purchase claims.
   - `supamotoClaims3`: Conducts additional analytics and processing as required.

### J. Legacy Collection Handling

- **Backward Compatibility:**  
  Legacy flows (including `cookstovesExtra`, `emergingLegacyProtocolsFlow`, `legacyCollectionFlow`, and `legacyCookstovesFlow`) are run to ensure that previous implementations remain functional. This is essential if parts of your system have yet to upgrade to the new protocols.

---

## Running the Flow

To activate the entire onboarding process, simply run the test suite with your preferred package manager:

```bash
npm run test
```

or `yarn test`

This command will trigger the `index.spec.ts` file, which executes the flows in the defined sequence. Before running the tests, confirm that:

- Your blockchain node is up and running.
- Your `.env` file contains all the necessary configuration values.

---

## Troubleshooting and Best Practices

- **Insufficient Funds:**  
  If a user experiences gas fee issues, verify that each account is properly funded using the outputs from `bankBasic` and `sendTokens`.

- **Environment Configuration:**  
  Double-check your `.env` for missing or misconfigured environment variables (such as `ROOT_IMPACTS`, `ROOT_EMERGING`, etc.).

- **Flow Dependency Order:**  
  Each flow is dependent on the previous one. Skipping any step may cause cascading failures. Always execute flows in the given sequence.

- **Verbose Logging:**  
  Use detailed logging during test runs to identify issues early. Review logs from `relayerVerifyAllEntities` to ensure that every entity is correctly set up.

- **Legacy vs. Modern Flows:**  
  Decide whether to employ new flows or legacy flows for your deployment needs. For production systems, the new flows (e.g., `cookstovesFlow`) are recommended, but legacy flows are available for backward compatibility.

- **Network Stability:**  
  Ensure your blockchain network (local, testnet, or mainnet) is stable and responsive before initiating the process.

---

## Conclusion and Next Steps

This guide has outlined the full process for onboarding a new cookstoves distributor using Mission Control. By following these steps—from initial funding to final entity verification—you ensure a robust, production-ready deployment.

**Next Steps:**

- **Validation:**  
  Test the entire flow in your local or staging environment before moving to production.

- **Customization:**  
  Adjust individual flows (e.g., toggling between `cookstovesFlow` and `cookstovesFlowDevnet`) to best fit your deployment environment.

- **Monitoring:**  
  Continuously monitor logs and system outputs post-deployment to ensure smooth operation.

- **Feedback Loop:**  
  Use insights from real deployments to further refine and optimize the onboarding process.

Happy coding and successful deployments!
