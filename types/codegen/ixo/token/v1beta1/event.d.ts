import { TokenBatch, TokenBatchSDKType } from "./tx";
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
    /** the owner account of the change */
    owner: string;
}
/** TokenUpdatedEvent is an event triggered on a Token update */
export interface TokenUpdatedEventSDKType {
    /** contract_address of token updated */
    contract_address: string;
    /** the owner account of the change */
    owner: string;
}
/** TokenMintedEvent is an event triggered on a Token mint execution */
export interface TokenMintedEvent {
    /** the contract address of token contract being initialized */
    contractAddress: string;
    /** the token minter */
    minter: string;
    /** the new tokens owner */
    owner: string;
    batches: TokenBatch[];
}
/** TokenMintedEvent is an event triggered on a Token mint execution */
export interface TokenMintedEventSDKType {
    /** the contract address of token contract being initialized */
    contract_address: string;
    /** the token minter */
    minter: string;
    /** the new tokens owner */
    owner: string;
    batches: TokenBatchSDKType[];
}
/** TokenTransferedEvent is an event triggered on a Token transfer execution */
export interface TokenTransferredEvent {
    /** the old token owner */
    owner: string;
    /** the new tokens owner */
    recipient: string;
    tokens: TokenBatch[];
}
/** TokenTransferedEvent is an event triggered on a Token transfer execution */
export interface TokenTransferredEventSDKType {
    /** the old token owner */
    owner: string;
    /** the new tokens owner */
    recipient: string;
    tokens: TokenBatchSDKType[];
}
/** TokenCancelledEvent is an event triggered on a Token cancel execution */
export interface TokenCancelledEvent {
    /** the token owner */
    owner: string;
    tokens: TokenBatch[];
}
/** TokenCancelledEvent is an event triggered on a Token cancel execution */
export interface TokenCancelledEventSDKType {
    /** the token owner */
    owner: string;
    tokens: TokenBatchSDKType[];
}
/** TokenRetiredEvent is an event triggered on a Token retire execution */
export interface TokenRetiredEvent {
    /** the token owner */
    owner: string;
    tokens: TokenBatch[];
}
/** TokenRetiredEvent is an event triggered on a Token retire execution */
export interface TokenRetiredEventSDKType {
    /** the token owner */
    owner: string;
    tokens: TokenBatchSDKType[];
}
/** TokenPausedEvent is an event triggered on a Token pause/unpause execution */
export interface TokenPausedEvent {
    /** the minter address */
    minter: string;
    contractAddress: string;
    paused: boolean;
}
/** TokenPausedEvent is an event triggered on a Token pause/unpause execution */
export interface TokenPausedEventSDKType {
    /** the minter address */
    minter: string;
    contract_address: string;
    paused: boolean;
}
/** TokenStoppedEvent is an event triggered on a Token stopped execution */
export interface TokenStoppedEvent {
    /** the minter address */
    minter: string;
    contractAddress: string;
    stopped: boolean;
}
/** TokenStoppedEvent is an event triggered on a Token stopped execution */
export interface TokenStoppedEventSDKType {
    /** the minter address */
    minter: string;
    contract_address: string;
    stopped: boolean;
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
export declare const TokenTransferredEvent: {
    encode(message: TokenTransferredEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenTransferredEvent;
    fromJSON(object: any): TokenTransferredEvent;
    toJSON(message: TokenTransferredEvent): unknown;
    fromPartial(object: Partial<TokenTransferredEvent>): TokenTransferredEvent;
};
export declare const TokenCancelledEvent: {
    encode(message: TokenCancelledEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenCancelledEvent;
    fromJSON(object: any): TokenCancelledEvent;
    toJSON(message: TokenCancelledEvent): unknown;
    fromPartial(object: Partial<TokenCancelledEvent>): TokenCancelledEvent;
};
export declare const TokenRetiredEvent: {
    encode(message: TokenRetiredEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenRetiredEvent;
    fromJSON(object: any): TokenRetiredEvent;
    toJSON(message: TokenRetiredEvent): unknown;
    fromPartial(object: Partial<TokenRetiredEvent>): TokenRetiredEvent;
};
export declare const TokenPausedEvent: {
    encode(message: TokenPausedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPausedEvent;
    fromJSON(object: any): TokenPausedEvent;
    toJSON(message: TokenPausedEvent): unknown;
    fromPartial(object: Partial<TokenPausedEvent>): TokenPausedEvent;
};
export declare const TokenStoppedEvent: {
    encode(message: TokenStoppedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenStoppedEvent;
    fromJSON(object: any): TokenStoppedEvent;
    toJSON(message: TokenStoppedEvent): unknown;
    fromPartial(object: Partial<TokenStoppedEvent>): TokenStoppedEvent;
};
