import * as _m0 from "protobufjs/minimal";
/** TokenCreatedEvent is an event triggered on a Token creation */
export interface TokenCreatedEvent {
    /** the contract address of token contract being initialized */
    contractAddress: string;
    /** the token minter */
    minter: string;
}
/** TokenCreatedEvent is an event triggered on a Token creation */
export interface TokenCreatedEventSDKType {
    /** the contract address of token contract being initialized */
    contract_address: string;
    /** the token minter */
    minter: string;
}
/** TokenUpdatedEvent is an event triggered on a Token update */
export interface TokenUpdatedEvent {
    /** contract_address of token updated */
    contractAddress: string;
    /** the signer account of the change */
    signer: string;
}
/** TokenUpdatedEvent is an event triggered on a Token update */
export interface TokenUpdatedEventSDKType {
    /** contract_address of token updated */
    contract_address: string;
    /** the signer account of the change */
    signer: string;
}
/** TokenMintedEvent is an event triggered on a Token mint execution */
export interface TokenMintedEvent {
    /** the contract address of token contract being initialized */
    contractAddress: string;
    /** the token minter */
    minter: string;
    /** the new tokens owner */
    owner: string;
    batches: TokenMintedBatch[];
}
/** TokenMintedEvent is an event triggered on a Token mint execution */
export interface TokenMintedEventSDKType {
    /** the contract address of token contract being initialized */
    contract_address: string;
    /** the token minter */
    minter: string;
    /** the new tokens owner */
    owner: string;
    batches: TokenMintedBatchSDKType[];
}
export interface TokenMintedBatch {
    /** id of token(s) minted */
    id: string;
    /** amount of tokens minted */
    amount: string;
}
export interface TokenMintedBatchSDKType {
    /** id of token(s) minted */
    id: string;
    /** amount of tokens minted */
    amount: string;
}
export declare const TokenCreatedEvent: {
    encode(message: TokenCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenCreatedEvent;
    fromJSON(object: any): TokenCreatedEvent;
    toJSON(message: TokenCreatedEvent): unknown;
    fromPartial(object: Partial<TokenCreatedEvent>): TokenCreatedEvent;
};
export declare const TokenUpdatedEvent: {
    encode(message: TokenUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenUpdatedEvent;
    fromJSON(object: any): TokenUpdatedEvent;
    toJSON(message: TokenUpdatedEvent): unknown;
    fromPartial(object: Partial<TokenUpdatedEvent>): TokenUpdatedEvent;
};
export declare const TokenMintedEvent: {
    encode(message: TokenMintedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMintedEvent;
    fromJSON(object: any): TokenMintedEvent;
    toJSON(message: TokenMintedEvent): unknown;
    fromPartial(object: Partial<TokenMintedEvent>): TokenMintedEvent;
};
export declare const TokenMintedBatch: {
    encode(message: TokenMintedBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMintedBatch;
    fromJSON(object: any): TokenMintedBatch;
    toJSON(message: TokenMintedBatch): unknown;
    fromPartial(object: Partial<TokenMintedBatch>): TokenMintedBatch;
};
