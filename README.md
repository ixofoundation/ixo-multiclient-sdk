<div align="center">
  <h1> IXO Impacts Client SDK </h1>
<img src="assets/images/readme_banner.png" alt="Impacts Client SDK image">
</div>

@ixo/impactxclient-sdk

![GitHub contributors](https://img.shields.io/github/contributors/ixofoundation/ixo-multiclient-sdk) ![GitHub repo size](https://img.shields.io/github/repo-size/ixofoundation/ixo-multiclient-sdk)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge\&logo=typescript\&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge\&logo=Jest\&logoColor=white)

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge\&logo=discord\&logoColor=white)](https://discord.com/invite/ixo) [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge\&logo=telegram\&logoColor=white)](https://t.me/ixonetwork) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge\&logo=twitter\&logoColor=white)](https://twitter.com/ixoworld) [![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge\&logo=medium\&logoColor=white)](https://medium.com/ixo-blog)

# The ultimate utility client for the IXO Blockchain

The IXO Impacts Client SDK `@ixo/impactxclient-sdk` is a type-safe TypeScript SDK for Javascript developers.
It is compatible with most Javascript frameworks, including [React](https://react.dev/), [React Native](https://reactnative.dev/), [Vue.js](https://vuejs.org/), and [Node.js](https://nodejs.org/en).
The Impacts Client SDK is designed to interact with the IXO blockchain and other Cosmos appchains. It provides a comprehensive set of tools to query a Cosmos blockchain, form messages, and sign transactions. The SDK also supports interchain communication and smart contract interactions.
The Impacts Client SDK provides support for both [ESM (ECMAScript Modules)](https://en.wikipedia.org/wiki/ECMAScript) and [CJS (CommonJS)](https://en.wikipedia.org/wiki/CommonJS).

## Table of Contents
- [The ultimate utility client for the IXO Blockchain](#the-ultimate-utility-client-for-the-ixo-blockchain)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [API](#api)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [QueryClient](#queryclient)
      - [RPC Client](#rpc-client)
    - [SigningClient](#signingclient)
    - [Blockchain Modules](#blockchain-modules)
      - [IXO Modules](#ixo-modules)
        - [IIDs](#iids)
        - [Entities](#entities)
        - [Tokens](#tokens)
        - [Claims](#claims)
        - [Bonds](#bonds)
      - [Query and transact with Cosmos Modules](#query-and-transact-with-cosmos-modules)
    - [Smart Contracts](#smart-contracts)
      - [CosmWasm Smart Contracts](#cosmwasm-smart-contracts)
      - [Swap Contract](#swap-contract)
      - [DAODAO Contracts](#daodao-contracts)
    - [Construct, Sign, and Broadcast Messages](#construct-sign-and-broadcast-messages)
      - [Constructing a Message](#constructing-a-message)
      - [Signing a Message](#signing-a-message)
      - [Broadcasting a Message](#broadcasting-a-message)
    - [Inter-Blockchain Communication](#inter-blockchain-communication)
    - [Utility Functions](#utility-functions)
    - [Notes](#notes)
      - [Attributions](#attributions)
  - [License](#license)


## Key Features

- Easy-to-use API for querying and transacting with the IXO blockchain
- Wallet integration for secure transactions
- Custom queries to simplify complex queries
- Support for smart contracts
- Integrates interchain communications
- Supports multiple Cosmos chains

## API
- [QueryClient](#queryclient)
- [SigningClient](#signingclient)
- [Blockchain Modules](#blockchain-modules)
- [Smart Contracts](#smart-contracts)
- [Construct, Sign, and Broadcast Messages](#construct-sign-and-broadcast-messages)
- [Inter-Blockchain Communication](#inter-blockchain-communication)
- [Utility Functions](#utility-functions)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en) v18 or higher
- [Yarn](https://yarnpkg.com/) package manager

### Installation

```bash
npm install @ixo/multiclient-sdk
or
yarn add @ixo/multiclient-sdk
```

## Usage
The QueryClient and SigningClient provide simple interfaces to abstract away the complexity of querying data on the IXO blockchain and signing messages for broadcasting to the IXO blockchain.
These client also work for other Cosmos appchains.

### QueryClient

IXO created a QueryClient to simplify queries to the `cosmos` and `ixo` modules, as well as provide custom queries to often-used queries.

#### RPC Client

First connect to an RPC Client in order to interact with a blockchain; in this case the IXO blockchain.

> The [Cosmos Chain Resolver SDK](https://www.npmjs.com/package/@ixo/cosmos-chain-resolver), created by IXO, provides a simple way to retrieve RPC endpoints for any Cosmos chain.

We added a custom `queryClient` that includes the Cosmos modules and IXO modules, as well as Custom Queries.
Custom Queries are available at 
- `./custom_queries`

Here is an example code snippet that shows how to easily set up your `queryClient` and query the Cosmos and IXO modules.

Remember to set the `RPC_ENDPOINT` environment variable.
- Published `RPC_ENDPOINT` providers can be found at the Cosmos [Chain Registry Github repository](https://github.com/cosmos/chain-registry/blob/master/impacthub/chain.json#L143) for Mainnet.
- Testnet providers are [found here.](https://github.com/cosmos/chain-registry/blob/master/testnets/impacthubtestnet/chain.json#L81)
- Providers for Devnet are [found here.](https://github.com/cosmos/chain-registry/blob/master/testnets/impacthubdevnet/chain.json#L56)

```js
import { ixo, createQueryClient } from "@ixo/impactxclient-sdk";

const queryClient = await createQueryClient(RPC_ENDPOINT);

// now you can query any Cosmos module
const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "ixo1addresshere",
});

// you can also query the IXO modules
const entities = await queryClient.ixo.entity.v1beta1.entityList();

```

### SigningClient


### Blockchain Modules

#### IXO Modules
Available at the [IXO Blockchain](https://github.com/ixofoundation/ixo-blockchain) repository.
- `./codegen/ixo/bundle.d.ts`

##### IIDs

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

##### Entities
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

##### Tokens
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

##### Claims
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
    
##### Bonds
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

#### Query and transact with Cosmos Modules
Available at the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) repository.
- `./codegen/cosmos/bundle`

  - `./ics23/bundle`;
  - `./cosmos_proto/bundle`;
  - `./cosmos/bundle`;
  - `./gogoproto/bundle`;
  - `./google/bundle`;
  - `./ica/bundle`;
  - `./tendermint/bundle`;

### Smart Contracts
In order to instantiate and execute smart contracts on the IXO blockchain, messages on the `wasm` module has to be invoked. The `wasm` message contains the smart contract details and the message to execute.

#### CosmWasm Smart Contracts
Available at the [CosmWasm module](https://github.com/CosmWasm/wasmd) repository.
- `./codegen`
  - `./cosmwasm/bundle`;
    - `./wasm/v1`;

There are a few steps to follow when working with a CosmWasm smart contract.
NB: Instantiation is only required when the contract is not available on the chain instance that you are working with.
1. See NB above ^. Instantiate an instance of the contract with which to interact.
  1. Retrieve the contract code for your target smart contract.
     - Contract code is provided by the contract namespace in custom queries.
     - `./custom_queries/contract`
1. Create the message to Execute on the contract.
1. Execute the message on the contract by signing it.


Here is an example code snippet that shows how to instantiate and execute messages on a contract using the ixo1155 contract code:

```js
import { createSigningClient, customQueries, cosmwasm, cosmos } from '@ixo/impactxclient-sdk';

/*
// Create a signing client in order to sign messages.
// Retrieve the Account Address for the connected user account.
*/
const client = await createSigningClient(rpc, offlineSigner);
const account = {};
const myAddress = account.address;

/*
// NB: Instantiation is only required when the contract is not available on the chain instance that you are working with.
// 1. Create the instantiation message for the contract.
// - Retrieve the Code for this contract (using ixo1155 for this example).
// - Remember to provide 1 uixo as message funding.
// 2. Sign the message and broadcast it to the IXO blockchain.
// - The most important part of this response is the Contract Address.
// - It is required for all further interactions with the contract.
*/
const contractCodes = customQueries.contract.getContractCodes('devnet', 'ixo');
const contractCode = contractCodes.find((contract) => contract.name === 'ixo1155');
const instantiateContractMessage = {
  typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContract',
  value: cosmwasm.wasm.v1.MsgInstantiateContract.fromPartial({
    admin: myAddress,
    codeId: contractCode.code,
    funds: [
      cosmos.base.v1beta1.Coin.fromPartial({
        amount: '1',
        denom: 'uixo',
      }),
    ],
    label: account.did + 'contract' + contractCode.code,
		msg: new Uint8Array(Buffer.from(JSON.stringify({
      minter: myAddress
    }))),
    sender: myAddress,
  }),
};

const instantiateContractResponse = await client.signAndBroadcast(
  myAddress,
  [instantiateContractMessage],
  "auto"
);
const contractAddress = JSON.parse(instantiateContractResponse.rawLog!)[0]
  .events
  .instantiate
  .attributes
  ._contract_address
  .value;

/*
// Execute messages on the contract with these steps:
// 1. All contract messages need to be wrapped in the /cosmwasm.wasm.v1.MsgExecuteContract blockchain message.
// - Remember to provide 1 uixo as message funding.
// 2. Create the message that you want to execute on the contract and include it in the msg field.
// - This example executes the batch_mint message.
// 3. Sign the message and broadcast it to the IXO blockchain.
// - A successful message execution means that the transaction was completed.
*/

// tokenId is an example in this case to support the batch_mint contract message.
const tokenId = 'CARBON:bafybeib22s3lyz3guicawoboeieltpyewkdnuuheklpeu3zbrwekmpdew5';
const executeContractMessage = {
  typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
  value: cosmwasm.wasm.v1.MsgExecuteContract.fromPartial({
    contract: contractAddress,
    funds: [
      cosmos.base.v1beta1.Coin.fromPartial({
        amount: '1',
        denom: 'uixo',
      }),
    ],
		msg: new Uint8Array(Buffer.from(JSON.stringify({
      batch_mint: {
        to: myAddress,
        batch: [[tokenId, '5000', 'uri']],
      },
    }))),
    sender: myAddress,
  }),
};
const executeContractResponse = await client.signAndBroadcast(
  myAddress,
  [executeContractMessage],
  "auto"
);
```

#### Swap Contract
IXO developed a smart contract named [ixoSwap](https://github.com/ixofoundation/ixo-contracts/tree/master/ixo-swap) to enable swapping of tokens on the IXO network.
The contract has been [audited by an independent party](https://github.com/oak-security/audit-reports/tree/main/ixo).
Here is an example of how to implement Swap contracts.
```javascript
TODO
```

#### DAODAO Contracts
The basic DAO contracts are forked from the DAO-DAO Github organisation's [dao-contracts repository.](https://github.com/DA0-DA0/dao-contracts)
IXO has implemented the contracts in an innovative manner as generally available [DAO Tooling in Impacts Portal](https://github.com/ixofoundation/ixo-webclient).
Here is an example of how to implement DAODAO DAO contracts.
```javascript
TODO
```

### Construct, Sign, and Broadcast Messages
- `./stargate_client`
> NOTE
> IXO has developed an improved signing client named SignX that interacts seamlessly with the [Impacts X mobile app.](https://mobile.ixo.world/) Read more about how to utilise [the SignX client.]()

#### Constructing a Message
#### Signing a Message
#### Broadcasting a Message

### Inter-Blockchain Communication
- `./codegen/cosmos/bundle`

### Utility Functions
- `./utils`
  - `./conversions`;
  - `./did`;
  - `./fromMm`;
  - `./address`;
  - `./common`;
  - `./proto`;
  - `./constants`;

### Notes

#### Attributions

Types were generated from the `*.proto` files of the IXO appchain using the `@osmonauts/telescope@0.92.2` package.
> See `@ixo/impactxclient-sdk/types/index.d.ts` for the complete list.

## License
This SDK is licensed under the Apache 2 License. See the [LICENSE](/LICENSE) file for more information.