@ixo/impactxclient-sdk

![GitHub contributors](https://img.shields.io/github/contributors/ixofoundation/ixo-multiclient-sdk) ![GitHub repo size](https://img.shields.io/github/repo-size/ixofoundation/ixo-multiclient-sdk)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge\&logo=typescript\&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge\&logo=Jest\&logoColor=white)

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge\&logo=discord\&logoColor=white)](https://discord.com/invite/ixo) [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge\&logo=telegram\&logoColor=white)](https://t.me/ixonetwork) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge\&logo=twitter\&logoColor=white)](https://twitter.com/ixoworld) [![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge\&logo=medium\&logoColor=white)](https://medium.com/ixo-blog)

<div align="center">
  <h1> IXO Impacts Client SDK </h1>
<img src="assets/images/readme_banner.png" alt="">
</div>

## The ultimate utility client for the IXO Blockchain.

The `@ixo/impactxclient-sdk` is a TypeScript SDK designed to interact with the IXO blockchain and other Cosmos appchains. It provides a comprehensive set of tools for developers to query data and perform transactions on the blockchain.

## Key Features

- Easy-to-use API for querying and transacting with the IXO blockchain.
- Wallet integration for secure transactions.
- Custom queries to simplify complex queries.
- Support for smart contracts.
- Support for multiple Cosmos chains.

# This SDK provides the following APIs:

## Query and transact with IXO Modules
Available at the [IXO Blockchain](https://github.com/ixofoundation/ixo-blockchain) repository.

#### RPC Clients

Connect to an RPC Client in order to interact with the IXO blockchain.

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

// BELOW METHOD NOT IMPLEMENTED YET!
// const { createRPCQueryClient } = ixo.ClientFactory;
// const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
// const balance = await client.cosmos.bank.v1beta1.allBalances({
//   address: "ixo1addresshere",
// });

const queryClient = await createQueryClient(RPC_ENDPOINT);

// now you can query any module
const balance = await queryClient.cosmos.bank.v1beta1.allBalances({
  address: "ixo1addresshere",
});

// you can also query the ixo modules.
const balances = await queryClient.ixo.exchange.v1beta1.exchangeBalances();
```

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
Available at the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) repository.
- `./codegen`
  - `./ics23/bundle`;
  - `./cosmos_proto/bundle`;
  - `./cosmos/bundle`;
  - `./gogoproto/bundle`;
  - `./google/bundle`;
  - `./ibc/bundle`;
  - `./ica/bundle`;
  - `./tendermint/bundle`;

## CosmWasm Smart Contracts
Available at the [CosmWasm module](https://github.com/CosmWasm/wasmd) repository.
- `./codegen`
  - `./cosmwasm/bundle`;
    - `./wasm/v1`;

There are a few steps to follow when working with a CosmWasm smart contract.
1. Retrieve the contract code for your target smart contract.
   1. Contract code is provided by the contract namespace in custom queries.
   - `./custom_queries/contract`
1. Instantiate an instance of the contract with which to interact.


Here is an example code snippet that shows how to instantiate and execute messages on a contract using the ixo1155 contract code:

```js
import { createSigningClient, customQueries, cosmwasm, cosmos } from '@ixo/impactxclient-sdk';

/*
// Create a signing client in order to sign the contract instantiation message.
// Retrieve the Account Addres for the connected user account.
*/
const client = await createSigningClient(rpc, offlineSigner);
const account = {};
const myAddress = account.address;

/*
// 1. Retrieve the Code for this contract (using ixo1155 for this example).
// 2. Create the instantiation message for the contract.
// - Remember to provide 1 uixo as message funding.
// 3. Sign the message and broadcast it to the IXO blockchain.
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

### Swap Contracts
IXO developed a smart contract named [ixoSwap](https://github.com/ixofoundation/ixo-contracts/tree/master/ixo-swap) to enable swapping of tokens on the IXO network.
The contract has been [audited by an independent party](https://github.com/oak-security/audit-reports/tree/main/ixo).
Here is an example of how to implement Swap contracts.
```javascript
TODO
```

### DAODAO DAO Contracts
The basic DAO contracts are forked from the DAO-DAO Github organisation's [dao-contracts repository.](https://github.com/DA0-DA0/dao-contracts)
IXO has implemented the contracts in an innovative manner as generally available [DAO Tooling in Impacts Portal](https://github.com/ixofoundation/ixo-webclient).
Here is an example of how to implement DAODAO DAO contracts.
```javascript
TODO
```

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

> [!NOTE]
> Files generated from the `*.proto` files of the IXO appchain using the `@osmonauts/telescope@0.92.2` package.
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