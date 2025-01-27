---
stoplight-id: 8wrzm6461qonx
---

# Implementation Guides

The **Implementation Guides** section provides practical, hands-on instructions for developers looking to integrate IXO SDKs and tools into their applications. These guides are designed to help you implement key functionalities step-by-step, making it easier to build robust solutions using the IXO blockchain and related APIs.

Whether you are creating entities, managing transactions, or interacting with various APIs, these guides offer detailed examples and best practices to ensure successful implementation. Use these resources as a comprehensive reference to navigate through the various capabilities of IXO’s software development kits, helping you to create impactful, decentralised applications.

## Prerequisites

Ensure that the necessary [SDKs](../SDKs/SDKs-Overview.md) are installed for your application.

<!-- theme:info -->

> If you are using the [IXO Spatial Web Multiclient SDK](IXO-Spatial-Web-Multiclient-SDK.md), familiarize yourself with the [Signing Client](https://www.npmjs.com/package/@ixo/impactxclient-sdk#signing-client) to understand how to sign and broadcast transactions.
> Familiarize yourself with the [IXO Blocksync GraphQL](Blocksync-GraphQL-API-Overview.md) queries for retrieving data from the blockchain.

## Implementation Guides Format

### Terminology

- **Module** refers to a Typescript file containing exported functions available to developers. An example is `Entity.ts` in the IXO Spatial Web Multiclient SDK.

### GraphQL Queries

Several GraphQL queries are described to support the retrieval of data from the IXO Protocol blockchain using the indexed data provided by the Blocksync API.

- **Entities and IIDs**: Query details for entities and their associated Identifiers.
- **Claims and Collections**: Retrieve information on claims and associated collections.
- **Tokens**: Access data related to tokens within the IXO ecosystem.
- **ixoSwap**: Queries related to token swapping using IXO's swap feature.
- **Bonds**: Fetch bond details, including status and associated entities.
- **Utility Queries**: A collection of additional useful queries.
  - **Tokenomics**: Information regarding the economic model and metrics.
  - **Transactions**: Details and records of blockchain transactions.
  - **Messages**: Access blockchain messages for detailed analysis.
  - **IPFS**: Query content stored on IPFS related to IXO projects.
  - **Chain**: Fetch chain-specific details such as blocks and validators.

### Modules

Modules are available to simplify interactions with the IXO Protocol blockchain and other APIs. A number of guides are available to describe using these modules for specific use cases.

#### Step-by-Step Guide

Each guide walks you through specific steps for implementing different functionalities. Below is a typical structure for an implementation guide:

- **Step 1: Performing an Action**: Provides an overview of the action being implemented and demonstrates how to use the relevant functions from the IXO SDK, including examples and code snippets.
- **Step 2: Retrieving Data**: Explains how to use the GraphQL API to retrieve the relevant data after the action is performed.
- **Step 3: Optional Updates**: Describes any additional or optional updates that can be performed on the created entity or resource.

#### Module Reference Section

Each module guide concludes with a reference section that lists the key functions available within that module, providing a summary of the capabilities and how they can be utilized.
