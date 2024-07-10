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
    - [Utility Functions](#utility-functions)
    - [RPC Client](#rpc-client)
    - [Query Client](#query-client)
      - [Custom Queries](#custom-queries)
    - [Signing Client](#signing-client)
      - [Composing Messages](#composing-messages)
        - [Composing IBC Messages](#composing-ibc-messages)
      - [Signing Messages](#signing-messages)
        - [Initializing the Stargate Client](#initializing-the-stargate-client)
        - [Creating Signers](#creating-signers)
      - [Broadcasting Messages](#broadcasting-messages)
    - [Blockchain Modules](#blockchain-modules)
      - [IXO Modules](#ixo-modules)
        - [IIDs](#iids)
        - [Entities](#entities)
        - [Tokens](#tokens)
        - [Claims](#claims)
        - [Bonds](#bonds)
      - [Cosmos Modules](#cosmos-modules)
    - [Smart Contracts](#smart-contracts)
      - [CosmWasm](#cosmwasm)
      - [Swap Contract](#swap-contract)
      - [DAODAO Contracts](#daodao-contracts)
    - [Notes](#notes)
      - [React Native](#react-native)
        - [BigInt React Native](#bigint-react-native)
      - [Attributions](#attributions)
  - [How to contribute to the Impacts Client SDK](#how-to-contribute-to-the-impacts-client-sdk)
    - [Set up your local environment](#set-up-your-local-environment)
    - [Codegen](#codegen)
    - [Publishing](#publishing)
  - [License](#license)


## Key Features

- Easy-to-use API for querying and transacting with the IXO blockchain
- Wallet integration for secure transactions
- Custom queries to simplify complex queries
- Support for smart contracts
- Integrates interchain communications
- Supports multiple Cosmos chains

## API
- [Query Client](#query-client)
- [Signing Client](#signing-client)
- [Blockchain Modules](#blockchain-modules)
- [Smart Contracts](#smart-contracts)
- [Inter-Blockchain Communication](#composing-ibc-messages)
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
The [Query Client](#query-client) and [Signing Client](#signing-client) provide simple interfaces to abstract away the complexity of querying data on the IXO blockchain and signing messages for broadcasting to the IXO blockchain. These clients also work for other Cosmos appchains.

### Utility Functions
- `./utils`

Import the `utils` object from `@ixo/impactxclient-sdk` to destructure utlity functions to help with using this SDK.

```js
import { utils } from "@ixo/impactxclient-sdk";

const conversionUtils = utils.conversions;
const didUtils = utils.did;
const mnemonicUtils = utils.mnemonic;
const addressUtils = utils.address;
```

### RPC Client

First connect to an RPC Client in order to interact with a blockchain; in this case the IXO blockchain.

> The [Cosmos Chain Resolver SDK](https://www.npmjs.com/package/@ixo/cosmos-chain-resolver), created by IXO, provides a simple way to retrieve RPC endpoints for any Cosmos chain.

We added a custom [Query Client](#query-client) that includes the Cosmos modules and IXO modules, as well as [Custom Queries](#custom-queries).

Remember to set the `RPC_ENDPOINT` environment variable.
- Published `RPC_ENDPOINT` providers can be found at the Cosmos [Chain Registry Github repository](https://github.com/cosmos/chain-registry/blob/533af67f3a21bb952189070c106859eac59e4466/impacthub/chain.json#L148) for Mainnet.
- Testnet providers are [found here.](https://github.com/cosmos/chain-registry/blob/533af67f3a21bb952189070c106859eac59e4466/testnets/impacthubtestnet/chain.json#L81)
- Providers for Devnet are [found here.](https://github.com/cosmos/chain-registry/blob/533af67f3a21bb952189070c106859eac59e4466/testnets/impacthubdevnet/chain.json#L56)

Example that describes how to set up your `queryClient` with an RPC endpoint.

```js
import { ixo, createQueryClient } from "@ixo/impactxclient-sdk";

const queryClient = await createQueryClient(RPC_ENDPOINT);
```

### Query Client

IXO created a custom QueryClient to facilitate queries to the `cosmos` and `ixo` modules, as well as to provide [Custom Queries](#custom-queries).
> First connect to an [RPC client](#rpc-client).

Example code snippet assuming that the `queryClient` has been initialised with an RPC endpoint.

```js
import { ixo, createQueryClient } from "@ixo/impactxclient-sdk";

const queryClient = await createQueryClient(RPC_ENDPOINT);

// Example of querying the Cosmos Bank module for the balances of an account on the IXO blockchain
const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "ixo1addresshere",
});
// Example of querying the IXO Entity module for all entities on the IXO blockchain
const entities = await queryClient.ixo.entity.v1beta1.entityList();
```

#### Custom Queries

Import the `customQueries` object from `@ixo/impactxclient-sdk`. Use the object to destructure `currency` functions that will allow you to get the token info based on the provided denom or the `contract` functions that will provide ixo or daodao contract codes for instantiation.

Example of custom queries.
```js
import { customQueries } from "@ixo/impactxclient-sdk";

// get token info based on denom (coinMinimalDenom)
const token = customQueries.currency.findTokenFromDenom("uixo");

// get ibc token info based on ibc hash (and instantiated query client)
const ibcToken = await customQueries.currency.findIbcTokenFromHash(
  queryClient,
  "ibc/u05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1"
);
// `findIbcTokensFromHashes` requires an array of hashes to fetch multiple ibc token infos

// get coincodex info for a coin
const coinCodexInfo = customQueries.currency.findTokenInfoFromDenom("ixo");
// `findTokensInfoFromDenoms` requires an array of denoms to fetch multiple coinCodex infos
```

```js
// get daodao contract codes (for devnet) to instatiate
const contractCodes = customQueries.contract.getContractCodes(
  "devnet",
  "daodao"
); // contractCodes = [{ name: "dao_core", code: 3 }, ...];
const { code } = contractCodes.find((contract) => contract.name === "dao_core");

// get specific contract code (for testnet) to instantiate
const daoCoreContractCode = customQueries.contract.getContractCode(
  "testnet",
  "dao_core"
);
```

### Signing Client

A message to the IXO blockchain requires three steps:
1. [Compose Message](#composing-messages)
2. [Sign Message](#signing-messages)
3. [Broadcast Message](#broadcasting-messages)

See
**Note**
> IXO has developed an improved signing client named SignX that interacts seamlessly with the [Impacts X mobile app](https://mobile.ixo.world/). Read more about how to utilise [the SignX client](https://github.com/ixofoundation/ixo-signx) instead of using this SigningClient.

#### Composing Messages

The following example describes one type of message. Reference the `__tests__` directory of this repository for further examples of most messages and how to format them.

```js
import { ixo } from "@ixo/impactxclient-sdk";

const message = {
  typeUrl: "/ixo.iid.v1beta1.MsgCreateIidDocument",
  value: ixo.iid.v1beta1.MsgCreateIidDocument.fromPartial({
    id: did,
    verifications: [
      ixo.iid.v1beta1.Verification.fromPartial({
        relationships: ["authentication"],
        method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
          id: did,
          type: "EcdsaSecp256k1VerificationKey2019",
          publicKeyMultibase: "F" + toHex(pubkey),
          controller: controller,
        }),
      }),
    ],
    signer: address,
    controllers: [did],
  }),
};
```

##### Composing IBC Messages

> Reference [Composing Messages](./#composing-messages) for information about composing messages in general.

- `./codegen/ibc/bundle`

```js
import { ibc } from "@ixo/impactxclient-sdk";
```

#### Signing Messages

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

##### Initializing the Stargate Client

IXO added a custom Stargate Signing Client that can be exported and is creatable under createSigningClient.

Note
> It only supports Direct Proto signing through the RPC endpoint.
> It already has all the proto defininitions in the registry for IXO blockchain modules.

```js
import { createSigningClient } from "@ixo/impactxclient-sdk";

const signingClient = await createSigningClient(RPC_URL, offlineWallet);
```

Note
> The following, named `getSigningixoClient`, is an alternative to `createSigningClient`.

Use `getSigningixoClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded.
There is no need to manually add amino types, just import and initialize the client:

```js
import { getSigningixoClient } from "@ixo/impactxclient-sdk";

const stargateClient = await getSigningixoClient({
  rpcEndpoint,
  signer, // OfflineSigner
});
```

##### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

**Proto Signer**
```js
import { getOfflineSignerProto as getOfflineSigner } from "cosmjs-utils";
```

**Amino Signer**
Note
> The SDK currently does not include amino types. Use the Proto Signer for now. 
```js
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";
```

Once the Signer type has been imported, the signer can be created.

WARNING 
> It is not recommended to write your *mnemonic*, also known as *seed phrase*, in plain text. The example below is only for illustration and has no balances.
> Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from "chain-registry";

const mnemonic =
  "unfold client turtles either pilots stocks floors glow toward bullets cars science";
const chain = chains.find(({ chain_name }) => chain_name === "ixo");
const signer = await getOfflineSigner({
  mnemonic,
  chain,
});
```

#### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages that were composed as described in [Composing Messages](#composing-messages).
This example demonstrates broadcasting the `/cosmos.bank.v1beta1.MsgSend` message.

```js
const msg = send({
  amount: [
    {
      denom: "coin",
      amount: "1000",
    },
  ],
  toAddress: address,
  fromAddress: address,
});

const fee: StdFee = {
  amount: [
    {
      denom: "coin",
      amount: "864",
    },
  ],
  gas: "86364",
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### Blockchain Modules

#### IXO Modules
Available at the [IXO Blockchain](https://github.com/ixofoundation/ixo-blockchain) repository.
- `./codegen/ixo/bundle.d.ts`

##### IIDs

The [IID (Interchain Identifier) Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/iid) establishes a decentralized identity mechanism, ensuring a standardized approach for all entities within the system. By harnessing the power of DIDs (Decentralized Identifiers) and IIDs, this module facilitates a robust, secure, and universally recognizable identity framework, paving the way for a seamless integration across various platforms and networks.
- `./codegen/ixo/iid/v1beta1/query`
- `./codegen/ixo/iid/v1beta1/tx`

##### Entities
The [Entity Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/entity) introduces a holistic approach to NFT-backed identities, bridging the gap between decentralized identifiers and tangible assets. Upon entity creation, a symbiotic relationship forms between an IID Document, an NFT, and the Entity's metadata. Further enriched with the concept of Entity Accounts, this module ensures a seamless transition of ownership, while offering a robust framework for entities to operate within a decentralized landscape.
- `./codegen/ixo/entity/v1beta1/query`
- `./codegen/ixo/entity/v1beta1/tx`

##### Tokens
Embracing the versatility of the EIP-1155 standard, the [Token Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/token) offers a sophisticated mechanism for managing multi-token smart contracts. Whether you're dealing with fungible or non-fungible tokens, this module streamlines the process of creation, minting, and management. From defining token collections to ensuring transparent on-chain token attributes, the Token Module stands as a beacon of efficiency and flexibility in the decentralized token ecosystem.
- `./codegen/ixo/token/v1beta1/query`
- `./codegen/ixo/token/v1beta1/tx`

##### Claims
The [Claims Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/claims) provides an advanced structure for handling Verifiable Claims (VCs), cryptographic attestations regarding a subject. By aligning with the W3C standard and incorporating unique IXO system identifiers, this module offers a comprehensive solution for creating, evaluating, and managing claims. It enables entities to define protocols, authorize agents, and maintain a verifiable registry, ensuring authenticity and transparency in all claim-related processes.
- `./codegen/ixo/claims/v1beta1/query`
- `./codegen/ixo/claims/v1beta1/tx`
    
##### Bonds
The [Bonds Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/bonds) provides universal token bonding curve functions to mint, burn or swap any token in a Cosmos blockchain.
- `./codegen/ixo/bonds/v1beta1/query`
- `./codegen/ixo/bonds/v1beta1/tx`

#### Cosmos Modules
Available at the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) repository.
View the [examples provided](https://docs.cosmos.network/main/build/modules) by the Cosmos SDK team.

- `./codegen/contracts`
- `./codegen/cosmos/bundle`
- `./codegen/cosmwasm/bundle`
- `./codegen/ibc/bundle`
- `./codegen/ica/bundle`
- `./codegen/ics23/bundle`
- `./codegen/tendermint/bundle`

### Smart Contracts
In order to instantiate and execute smart contracts on the IXO blockchain, messages on the `wasm` module have to be invoked. The `wasm` message contains the smart contract details and the message to execute.

#### CosmWasm
Available at the [CosmWasm module](https://github.com/CosmWasm/wasmd) repository.
- `./codegen/cosmwasm/bundle`

There are a few steps to follow when working with a CosmWasm smart contract.

> Instantiation is only required when the contract is not available on the chain instance that you are working with.

1. See note above. Only instantiate an instance of the contract, if needed.
  1. Retrieve the contract code for your target smart contract.
     - Contract code is provided by the contract namespace in custom queries.
     - `./custom_queries/contract`
2. Create the message to Execute on the contract.
3. Execute the message on the contract by signing it.

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
IXO developed a smart contract named [ixoSwap](https://github.com/ixofoundation/ixo-contracts/tree/master/ixo-swap) to enable swapping of tokens on the IXO network. Read more about the contract in the [Swimm documentation.](https://github.com/ixofoundation/ixo-contracts/tree/master/.swm) 
The contract has been [audited by an independent party](https://github.com/oak-security/audit-reports/tree/main/ixo).

Examples of how to use the ixoSwap contract are available here:
- View [implementation examples](https://github.com/ixofoundation/ixo-multiclient-sdk/blob/26e254979175137156db8033a6c089efa4b171d5/__tests__/flows/cosmwasm.ts#L655) in the `__tests__` directory of this repository. 
- Another working example is available at the Jambo repository [in this branch](https://github.com/ixofoundation/jambo/tree/develop-swap).

#### DAODAO Contracts
The basic DAO contracts are forked from the DAO-DAO Github organisation's [dao-contracts repository.](https://github.com/DA0-DA0/dao-contracts)

IXO has implemented the contracts in an innovative manner and this implementation is generally available [DAO Tooling in Impacts Portal](https://github.com/ixofoundation/ixo-webclient).

Examples of how to use DAODAO Contracts [can be found here](https://github.com/ixofoundation/ixo-webclient/blob/40f9c34b161d4419a1a1490f555a0ac89f10dba6/apps/web/src/components/Modals/AddActionModal/SetupAddEntityModal.tsx).

### Notes

#### React Native

Install the below Library and import into your main app entry file. This ensures the required Polyfils are covered on mobile.

```
yarn add @walletconnect/react-native-compat
```

##### BigInt React Native

To ensure no issues with the React Native bigInt implementation, be sure to wrap your decimal gas amounts and others in a JS Double.

#### Attributions

Types were generated from the `*.proto` files of the IXO appchain using the `@osmonauts/telescope@0.92.2` package.
> See `@ixo/impactxclient-sdk/types/index.d.ts` for the complete list of types.

## How to contribute to the Impacts Client SDK

IXO welcomes contributions and comments of all kinds!

First off, thank you for applying your mind and time to improving this repo - it helps the Internet of Impacts to save our planet!
Whether you are contributing in your own space-time or following a bounty; we are grateful!

1. Fork the repo.
2. Ensure that you sync the fork often.
3. Clone your fork and create a branch.
4. Implement your changes one at a time and commit regularly to your fork.
5. Once your change is completed and passes all of the local tests, create a PR.
6. Your change will be reviewed as soon as possible with helpful feedback for your further updates to the change.
7. Finally, when everything is good to go and your PR approved, you can squash and merge your branch.

### Set up your local environment
Clone the [repository](https://github.com/ixofoundation/ixo-multiclient-sdk.git).
After successfully cloning:
```
yarn
yarn build
```

### Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `ixo-multiclient-sdk`:

```
yarn codegen
```

### Publishing

Build the types and then publish:

```
yarn build:ts
yarn publish
```

## License
This SDK is licensed under the Apache 2 License. See the [LICENSE](/LICENSE) file for more information.