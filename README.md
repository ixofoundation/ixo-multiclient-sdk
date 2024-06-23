# @ixo/impactxclient-sdk

![GitHub contributors](https://img.shields.io/github/contributors/ixofoundation/ixo-multiclient-sdk) ![GitHub repo size](https://img.shields.io/github/repo-size/ixofoundation/ixo-multiclient-sdk)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge\&logo=typescript\&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge\&logo=Jest\&logoColor=white)

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge\&logo=discord\&logoColor=white)](https://discord.com/invite/ixo) [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge\&logo=telegram\&logoColor=white)](https://t.me/ixonetwork) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge\&logo=twitter\&logoColor=white)](https://twitter.com/ixoworld) [![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge\&logo=medium\&logoColor=white)](https://medium.com/ixo-blog)

<div align="center">
<img src="assets/images/readme_banner.png" alt="">
</div>

The `@ixo/impactxclient-sdk` is a TypeScript SDK designed to interact with the IXO appchain and other Cosmos chains. It provides a comprehensive set of tools for developers to query data and perform transactions on the blockchain.

## The ultimate utility client for the IXO Blockchain.

## Key Features

- Easy-to-use API for querying the IXO blockchain and transacting.
- Support for multiple chains.
- Wallet integration for secure transactions.
- Custom queries to simplify complex queries.
- Support for smart contracts.

# This SDK provides the following APIs:

## IXO Modules

### IIDs

The [IID (Interchain Identifier) Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/iid) establishes a decentralized identity mechanism, ensuring a standardized approach for all entities within the system. By harnessing the power of DIDs (Decentralized Identifiers) and IIDs, this module facilitates a robust, secure, and universally recognizable identity framework, paving the way for a seamless integration across various platforms and networks.
- `./codegen`
  - `./ixo/bundle`;
    - `./iid/v1beta1/event`
    - `./iid/v1beta1/genesis`
    - `./iid/v1beta1/iid`
    - `./iid/v1beta1/query`
    - `./iid/v1beta1/tx`
    - `./iid/v1beta1/types`
    - `./iid/v1beta1/query.rpc.Query`
    - `./iid/v1beta1/tx.rpc.msg`

### Entities
The [Entity Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/entity) introduces a holistic approach to NFT-backed identities, bridging the gap between decentralized identifiers and tangible assets. Upon entity creation, a symbiotic relationship forms between an IID Document, an NFT, and the Entity's metadata. Further enriched with the concept of Entity Accounts, this module ensures a seamless transition of ownership, while offering a robust framework for entities to operate within a decentralized landscape.
- `./codegen`
  - `./ixo/bundle`;
    - `./entity/v1beta1/cosmos`
    - `./entity/v1beta1/entity`
    - `./entity/v1beta1/event`
    - `./entity/v1beta1/genesis`
    - `./entity/v1beta1/proposal`
    - `./entity/v1beta1/query`
    - `./entity/v1beta1/tx`
    - `./entity/v1beta1/query.rpc.Query`
    - `./entity/v1beta1/tx.rpc.msg`

### Tokens
Embracing the versatility of the EIP-1155 standard, the [Token Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/token) offers a sophisticated mechanism for managing multi-token smart contracts. Whether you're dealing with fungible or non-fungible tokens, this module streamlines the process of creation, minting, and management. From defining token collections to ensuring transparent on-chain token attributes, the Token Module stands as a beacon of efficiency and flexibility in the decentralized token ecosystem.
- `./codegen`
  - `./ixo/bundle`;
    - `./token/v1beta1/authz`
    - `./token/v1beta1/event`
    - `./token/v1beta1/genesis`
    - `./token/v1beta1/proposal`
    - `./token/v1beta1/query`
    - `./token/v1beta1/token`
    - `./token/v1beta1/tx`
    - `./token/v1beta1/query.rpc.Query`
    - `./token/v1beta1/tx.rpc.msg`

### Claims
The [Claims Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/claims) provides an advanced structure for handling Verifiable Claims (VCs), cryptographic attestations regarding a subject. By aligning with the W3C standard and incorporating unique IXO system identifiers, this module offers a comprehensive solution for creating, evaluating, and managing claims. It enables entities to define protocols, authorize agents, and maintain a verifiable registry, ensuring authenticity and transparency in all claim-related processes.
- `./codegen`
  - `./ixo/bundle`;
    - `./claims/v1beta1/authz`
    - `./claims/v1beta1/claims`
    - `./claims/v1beta1/cosmos`
    - `./claims/v1beta1/event`
    - `./claims/v1beta1/genesis`
    - `./claims/v1beta1/query`
    - `./claims/v1beta1/tx`
    - `./claims/v1beta1/query.rpc.Query`
    - `./claims/v1beta1/tx.rpc.msg`
    
### Bonds
The [Bonds Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/bonds) provides universal token bonding curve functions to mint, burn or swap any token in a Cosmos blockchain.
- `./codegen`
  - `./ixo/bundle`;
    - `./bonds/v1beta1/bonds`
    - `./bonds/v1beta1/event`
    - `./bonds/v1beta1/genesis`
    - `./bonds/v1beta1/query`
    - `./bonds/v1beta1/tx`
    - `./bonds/v1beta1/query.rpc.Query`
    - `./bonds/v1beta1/tx.rpc.msg`

## Cosmos Modules
- `./codegen`
  - `./ics23/bundle`;
  - `./cosmos_proto/bundle`;
  - `./cosmos/bundle`;
  - `./gogoproto/bundle`;
  - `./google/bundle`;
  - `./ibc/bundle`;
  - `./ica/bundle`;
  - `./tendermint/bundle`;

### Cosmos Queries

### Cosmos Transactions

## CosmWasm and Smart Contracts
- `./codegen`
  - `./cosmwasm/bundle`;
  - `./contracts`;

### DAODAO
The basic DAO contracts are forked from the DAO-DAO Github organisation's [dao-contracts repository.](https://github.com/DA0-DA0/dao-contracts)
Furthermore, there has been significant enhancements to how the original contracts are used in practice.

### Tokens, NFTs, and Swaps

## Construct, Sign, and Broadcast Messages
- `./stargate_client`

### Constructing a Message
### Signing a Message
### Broadcasting a Message

## Supporting Utilities
- `./utils`
  - `./conversions`;
  - `./did`;
  - `./fromMm`;
  - `./address`;
  - `./common`;
  - `./proto`;
  - `./constants`;


`./queries`
`./messages`
`./custom_queries`


- Custom Queries
- Messages
- Queries
- Stargate Client
- Utilities
- IXO Modules
- Cosmos Modules
- IBC Modules
- CosmWasm Modules
- Contracts

> [!NOTE]
> These files were generated from the `*.proto` files of the IXO appchain by the `@osmonauts/telescope@0.92.2` package.
> 
> `/codegen/*.ts`
> `/codegen/ics23/bundle/*.ts`
> `/codegen/cosmos_proto/bundle/*.ts`
> `/codegen/cosmos/bundle/*.ts`
> `/codegen/cosmwasm/bundle/*.ts`
> `/codegen/gogoproto/bundle/*.ts`
> `/codegen/google/bundle/*.ts`
> `/codegen/ibc/bundle/*.ts`
> `/codegen/ica/bundle/*.ts`
> `/codegen/ixo/bundle/*.ts`
> `/codegen/tendermint/bundle/*.ts`
> `/codegen/contracts/*.ts`

# Why do you need these APIs?
## Use Case Examples

# Installation of the SDK

Before installing the SDK, ensure you have `Node.js` version `18.18.2` installed.
You can install the SDK using `npm` or `yarn`.
```bash
npm install @ixo/multiclient-sdk
```
or
```bash
yarn add @ixo/multiclient-sdk
```

# Usage of the SDK

## Querying Data
Here is an example of how to query account information.
```javascript
const { QueryClient } = require("@ixo/multiclient-sdk");

const queryClient = new QueryClient({ apiUrl: "https://api.ixo.world" });

async function getAccountInfo(address) {
  const accountInfo = await queryClient.getAccount(address);
  console.log(accountInfo);
}

getAccountInfo("ixo1...");
```

## Performing Transactions

Here is an example of how to perform a transaction.
```javascript
const { TransactionClient } = require("@ixo/multiclient-sdk");

const transactionClient = new TransactionClient({ apiUrl: "https://api.ixo.world" });

async function sendTransaction() {
  const txResult = await transactionClient.sendTransaction({
    fromAddress: "ixo1...",
    toAddress: "ixo1...",
    amount: "1000000",
    denom: "uixo",
    gas: "200000",
    fee: "2000"
  });
  console.log(txResult);
}

sendTransaction();
```