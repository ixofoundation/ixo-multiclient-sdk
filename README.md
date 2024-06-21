@ixo/impactxclient-sdk

# This SDK provides the following APIs:
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
## To query the IXO appchain
### Why do you want to query?
#### To retrieve information from the chain about the following data:
##### IXO Module Data
###### IIDs
> The [IID (Interchain Identifier) Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/iid) establishes a decentralized identity mechanism, ensuring a standardized approach for all entities within the system. By harnessing the power of DIDs (Decentralized Identifiers) and IIDs, this module facilitates a robust, secure, and universally recognizable identity framework, paving the way for a seamless integration across various platforms and networks.
###### Entities
> The [Entity Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/entity) introduces a holistic approach to NFT-backed identities, bridging the gap between decentralized identifiers and tangible assets. Upon entity creation, a symbiotic relationship forms between an IID Document, an NFT, and the Entity's metadata. Further enriched with the concept of Entity Accounts, this module ensures a seamless transition of ownership, while offering a robust framework for entities to operate within a decentralized landscape.
###### Tokens
> Embracing the versatility of the EIP-1155 standard, the [Token Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/token) offers a sophisticated mechanism for managing multi-token smart contracts. Whether you're dealing with fungible or non-fungible tokens, this module streamlines the process of creation, minting, and management. From defining token collections to ensuring transparent on-chain token attributes, the Token Module stands as a beacon of efficiency and flexibility in the decentralized token ecosystem.
###### Claims
> The [Claims Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/claims) provides an advanced structure for handling Verifiable Claims (VCs), cryptographic attestations regarding a subject. By aligning with the W3C standard and incorporating unique IXO system identifiers, this module offers a comprehensive solution for creating, evaluating, and managing claims. It enables entities to define protocols, authorize agents, and maintain a verifiable registry, ensuring authenticity and transparency in all claim-related processes.
###### Bonds
> The [Bonds Module](https://github.com/ixofoundation/ixo-blockchain/tree/a161b2ef40ca56dd066bc0b1eb21913174c65b89/x/bonds) provides universal token bonding curve functions to mint, burn or swap any token in a Cosmos blockchain.
##### Cosmos Module Data
## To send messages to the IXO appchain

# How do you use this SDK?
## Installation
```sh
npm install @ixo/impactxclient-sdk

yarn add  @ixo/impactxclient-sdk
```
## Querying the IXO appchain
### Cosmos Queries
### IXO Queries
### Custom Queries
### ?Queries?
## Sending Messages to the IXO appchain
### Constructing a Message
### Signing a Message
#### 
### Broadcasting a Message