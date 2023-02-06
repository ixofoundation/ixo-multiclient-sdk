# @ixo/impactxclient-sdk

![GitHub contributors](https://img.shields.io/github/contributors/ixofoundation/ixo-multiclient-sdk)
![GitHub repo size](https://img.shields.io/github/repo-size/ixofoundation/ixo-multiclient-sdk)
![Twitter Follow](https://img.shields.io/twitter/follow/ixoworld?style=social)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

<p align="center">
  <img  src="images/readme_banner.png"/>
</p>

<br />

<h3 align="center">
    One ixo client to rule them all, One ixo client to find, One ixo client to bring them all, and in impact bind them
</h3>

<br />

## Table of contents

- [@ixo/impactxclient-sdk](#ixoimpactxclient-sdk)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
      - [IBC Messages](#ibc-messages)
    - [Utility Functions](#utility-functions)
    - [Custom Queries](#custom-queries)
  - [Connecting with Wallets and Signing Messages](#connecting-with-wallets-and-signing-messages)
    - [Initializing the Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Amino Signer](#amino-signer)
    - [Proto Signer](#proto-signer)
    - [Broadcasting Messages](#broadcasting-messages)
  - [Developing](#developing)
    - [Codegen](#codegen)
    - [Publishing](#publishing)
  - [Credits](#credits)
  - [Disclaimer](#disclaimer)

<br />

## Install

```sh
npm install @ixo/impactxclient-sdk

yarn add  @ixo/impactxclient-sdk
```

## Usage

### RPC Clients

```js
import { ixo, createQueryClient } from "@ixo/impactxclient-sdk";

// BELOW METHOD NOT IMPLEMENTED YET!
// const { createRPCQueryClient } = ixo.ClientFactory;
// const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
// const balance = await client.cosmos.bank.v1beta1.allBalances({
//   address: "ixo1addresshere",
// });

We added a custom queryCleint that includes the cosmos modules and ixo modules as well as custom queries

const queryClient = await createQueryClient(RPC_ENDPOINT);

// now you can query any module
const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "ixo1addresshere",
});

// you can also query the ixo modules
const balances = await client.ixo.exchange.v1beta1.exchangeBalances();


```

### Composing Messages

Import the `ixo` object from `@ixo/impactxclient-sdk`.

```js
import { ixo } from "@ixo/impactxclient-sdk";

// BELOW METHOD NOT IMPLEMENTED YET! READ COMMENT BELOW
// const { createSpotLimitOrder, createSpotMarketOrder, deposit } =
//   ixo.exchange.v1beta1.MessageComposer.withTypeUrl;
```

Because of the current structure of ixo's blockchain, we had to modify the telescope generation of ts files, thus the above example wont work. You can define a message using the types from the namespace itself and not from the MessageComposer, eg:

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

Please have a look at the tests folder to see examples of all the messages and how to format!

#### IBC Messages

Same note from [Composing Messages](#composing-messages) above apply about msg creation

```js
import { ibc } from "@ixo/impactxclient-sdk";

// DESTRUCTURE MSG FROM NAMESPACE INSTEAD OF USING MessageComposer
// const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;
```

### Utility Functions

Import the `utils` object from `@ixo/impactxclient-sdk`.
From that you can destructure utlity functions to help with using the sdk.

```js
import { utils } from "@ixo/impactxclient-sdk";

const conversionUtils = utils.conversions;
const didUtils = utils.did;
const mnemonicUtils = utils.mnemonic;
const addressUtils = utils.address;
```

### Custom Queries

Import the `customQueries` object from `@ixo/impactxclient-sdk`.
From that you can destructure `chain` functions that will fetch the latest chain info from the cosmos chain registry or request an active RPC endpoint. You can also use the `currency` functions that will allow you to get the token info based on the provided denom.

```js
import { customQueries } from "@ixo/impactxclient-sdk";

// fetch chain info based on chain name and chain network (default mainnet)
const registryChainInfo = customQueries.chain.getRegistryChainInfo(
  "impacthub",
  "testnet"
);
// request an active RPC endpoint based on registry chain info
const activeRpc =
  customQueries.chain.getActiveRpcFromRegistryChainInfo(chainInfo);
// or request an active RPC endpoint based on chain name and chain network (default mainnet)
const activeRpc = customQueries.chain.getActiveRpcFromChainName(
  "impacthub",
  "testnet"
);
// fetch chain info based on Keplr's preferred format using registry chain info
const keplrChainInfo =
  customQueries.chain.getKeplrChainInfoFromRegistryChainInfo(chainInfo);
// or fetch Keplr chain info using chain name and chain network (default mainnet)
const keplrChainInfo = customQueries.chain.getKeplrChainInfoFromChainName(
  "impacthub",
  "testnet"
);

// get token info based on denom (coinMinimalDenom)
const token = customQueries.currency.findTokenFromDenom("uixo");
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

We added a custom Stargate Signing Client that can be exported and creatable under createSigningClient, please note it only support Direct Proto signing through the rpc endpoint! It already has all the proto defininitions in the registry for ixo modules.

```js
import { createSigningClient } from "@ixo/impactxclient-sdk";

const signingClient = await createSigningClient(RPC_URL, offlineWallet);
```

THE FOLLOWING IS JUST ADVICE AS YOU CAN INSTEAD USE THE createSigningClient AS DESCRIBED ABOVE</br>
Use `getSigningixoClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningixoClient } from "@ixo/impactxclient-sdk";

const stargateClient = await getSigningixoClient({
  rpcEndpoint,
  signer, // OfflineSigner
});
```

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Amino Signer

THE CURRENT SDK DOES NOT INCLUDE AMINO TYPES< PLEASE USE ONLY PROTO FOR NOW</br>
Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";
```

### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from "cosmjs-utils";
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from "chain-registry";

const mnemonic =
  "unfold client turtle either pilot stock floor glow toward bullet car science";
const chain = chains.find(({ chain_name }) => chain_name === "ixo");
const signer = await getOfflineSigner({
  mnemonic,
  chain,
});
```

### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

DESTRUCTURE MSG FROM NAMESPACE INSTEAD OF USING MessageComposer AS DESCRIBED IN [Composing Messages](#composing-messages)</br>
The `stargateClient.signAndBroadcast(address, [msg], fee)` can still be used as in example

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

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

## Developing

When first cloning the repo:

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

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code or software using the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
