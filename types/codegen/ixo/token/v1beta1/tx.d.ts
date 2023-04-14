import { TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateToken {
    /** address of minter */
    minter: string;
    /** class is the token protocol entity DID (validated) */
    class: string;
    /** name is the token name, which must be unique (namespace) */
    name: string;
    /** description is any arbitrary description */
    description: string;
    /** image is the image url for the token */
    image: string;
    /** type is the token type (eg ixo1155) */
    tokenType: string;
    /**
     * cap is the maximum number of tokens with this name that can be minted, 0 is
     * unlimited
     */
    cap: string;
}
export interface MsgCreateTokenSDKType {
    minter: string;
    class: string;
    name: string;
    description: string;
    image: string;
    token_type: string;
    cap: string;
}
export interface MsgCreateTokenResponse {
}
export interface MsgCreateTokenResponseSDKType {
}
export interface MsgMintToken {
    /** address of minter */
    minter: string;
    contractAddress: string;
    /** address of owner to mint for */
    owner: string;
    mintBatch: MintBatch[];
}
export interface MsgMintTokenSDKType {
    minter: string;
    contract_address: string;
    owner: string;
    mint_batch: MintBatchSDKType[];
}
export interface MintBatch {
    /**
     * name is the token name, which must be unique (namespace), will be verified
     * against Token name provided on msgCreateToken
     */
    name: string;
    /** index is the unique identifier hexstring that identifies the token */
    index: string;
    /** amount is the number of tokens to mint */
    amount: string;
    /** did of collection (eg Supamoto Malawi) */
    collection: string;
    /**
     * tokenData is the linkedResources added to tokenMetadata when queried eg
     * (credential link ***.ipfs)
     */
    tokenData: TokenData[];
}
export interface MintBatchSDKType {
    name: string;
    index: string;
    amount: string;
    collection: string;
    token_data: TokenDataSDKType[];
}
export interface MsgMintTokenResponse {
}
export interface MsgMintTokenResponseSDKType {
}
export interface MsgTransferToken {
    /** address of owner */
    owner: string;
    /** address of receiver */
    recipient: string;
    /** all tokens must be in same smart contract */
    tokens: TokenBatch[];
}
export interface MsgTransferTokenSDKType {
    owner: string;
    recipient: string;
    tokens: TokenBatchSDKType[];
}
export interface MsgTransferTokenResponse {
}
export interface MsgTransferTokenResponseSDKType {
}
export interface TokenBatch {
    /** id that identifies the token */
    id: string;
    /** amount is the number of tokens to transfer */
    amount: string;
}
export interface TokenBatchSDKType {
    id: string;
    amount: string;
}
export interface MsgRetireToken {
    /** address of owner */
    owner: string;
    /** tokens to retire, all tokens must be in same smart contract */
    tokens: TokenBatch[];
    /**
     * jurisdiction is the jurisdiction of the token owner. A jurisdiction has
     * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision. See the valid format for this below.
     */
    jurisdiction: string;
    /**
     * reason is any arbitrary string that specifies the reason for retiring
     * tokens.
     */
    reason: string;
}
export interface MsgRetireTokenSDKType {
    owner: string;
    tokens: TokenBatchSDKType[];
    jurisdiction: string;
    reason: string;
}
export interface MsgRetireTokenResponse {
}
export interface MsgRetireTokenResponseSDKType {
}
export interface MsgCancelToken {
    /** address of owner */
    owner: string;
    /** tokens to retire, all tokens must be in same smart contract */
    tokens: TokenBatch[];
    /**
     * reason is any arbitrary string that specifies the reason for retiring
     * tokens.
     */
    reason: string;
}
export interface MsgCancelTokenSDKType {
    owner: string;
    tokens: TokenBatchSDKType[];
    reason: string;
}
export interface MsgCancelTokenResponse {
}
export interface MsgCancelTokenResponseSDKType {
}
export interface MsgPauseToken {
    /** address of minter */
    minter: string;
    contractAddress: string;
    /** pause or unpause Token Minting allowance */
    paused: boolean;
}
export interface MsgPauseTokenSDKType {
    minter: string;
    contract_address: string;
    paused: boolean;
}
export interface MsgPauseTokenResponse {
}
export interface MsgPauseTokenResponseSDKType {
}
export interface MsgStopToken {
    /** address of minter */
    minter: string;
    contractAddress: string;
}
export interface MsgStopTokenSDKType {
    minter: string;
    contract_address: string;
}
export interface MsgStopTokenResponse {
}
export interface MsgStopTokenResponseSDKType {
}
export declare const MsgCreateToken: {
    encode(message: MsgCreateToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateToken;
    fromJSON(object: any): MsgCreateToken;
    toJSON(message: MsgCreateToken): unknown;
    fromPartial(object: Partial<MsgCreateToken>): MsgCreateToken;
};
export declare const MsgCreateTokenResponse: {
    encode(_: MsgCreateTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTokenResponse;
    fromJSON(_: any): MsgCreateTokenResponse;
    toJSON(_: MsgCreateTokenResponse): unknown;
    fromPartial(_: Partial<MsgCreateTokenResponse>): MsgCreateTokenResponse;
};
export declare const MsgMintToken: {
    encode(message: MsgMintToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken;
    fromJSON(object: any): MsgMintToken;
    toJSON(message: MsgMintToken): unknown;
    fromPartial(object: Partial<MsgMintToken>): MsgMintToken;
};
export declare const MintBatch: {
    encode(message: MintBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintBatch;
    fromJSON(object: any): MintBatch;
    toJSON(message: MintBatch): unknown;
    fromPartial(object: Partial<MintBatch>): MintBatch;
};
export declare const MsgMintTokenResponse: {
    encode(_: MsgMintTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse;
    fromJSON(_: any): MsgMintTokenResponse;
    toJSON(_: MsgMintTokenResponse): unknown;
    fromPartial(_: Partial<MsgMintTokenResponse>): MsgMintTokenResponse;
};
export declare const MsgTransferToken: {
    encode(message: MsgTransferToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferToken;
    fromJSON(object: any): MsgTransferToken;
    toJSON(message: MsgTransferToken): unknown;
    fromPartial(object: Partial<MsgTransferToken>): MsgTransferToken;
};
export declare const MsgTransferTokenResponse: {
    encode(_: MsgTransferTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenResponse;
    fromJSON(_: any): MsgTransferTokenResponse;
    toJSON(_: MsgTransferTokenResponse): unknown;
    fromPartial(_: Partial<MsgTransferTokenResponse>): MsgTransferTokenResponse;
};
export declare const TokenBatch: {
    encode(message: TokenBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenBatch;
    fromJSON(object: any): TokenBatch;
    toJSON(message: TokenBatch): unknown;
    fromPartial(object: Partial<TokenBatch>): TokenBatch;
};
export declare const MsgRetireToken: {
    encode(message: MsgRetireToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireToken;
    fromJSON(object: any): MsgRetireToken;
    toJSON(message: MsgRetireToken): unknown;
    fromPartial(object: Partial<MsgRetireToken>): MsgRetireToken;
};
export declare const MsgRetireTokenResponse: {
    encode(_: MsgRetireTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireTokenResponse;
    fromJSON(_: any): MsgRetireTokenResponse;
    toJSON(_: MsgRetireTokenResponse): unknown;
    fromPartial(_: Partial<MsgRetireTokenResponse>): MsgRetireTokenResponse;
};
export declare const MsgCancelToken: {
    encode(message: MsgCancelToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelToken;
    fromJSON(object: any): MsgCancelToken;
    toJSON(message: MsgCancelToken): unknown;
    fromPartial(object: Partial<MsgCancelToken>): MsgCancelToken;
};
export declare const MsgCancelTokenResponse: {
    encode(_: MsgCancelTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTokenResponse;
    fromJSON(_: any): MsgCancelTokenResponse;
    toJSON(_: MsgCancelTokenResponse): unknown;
    fromPartial(_: Partial<MsgCancelTokenResponse>): MsgCancelTokenResponse;
};
export declare const MsgPauseToken: {
    encode(message: MsgPauseToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseToken;
    fromJSON(object: any): MsgPauseToken;
    toJSON(message: MsgPauseToken): unknown;
    fromPartial(object: Partial<MsgPauseToken>): MsgPauseToken;
};
export declare const MsgPauseTokenResponse: {
    encode(_: MsgPauseTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseTokenResponse;
    fromJSON(_: any): MsgPauseTokenResponse;
    toJSON(_: MsgPauseTokenResponse): unknown;
    fromPartial(_: Partial<MsgPauseTokenResponse>): MsgPauseTokenResponse;
};
export declare const MsgStopToken: {
    encode(message: MsgStopToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStopToken;
    fromJSON(object: any): MsgStopToken;
    toJSON(message: MsgStopToken): unknown;
    fromPartial(object: Partial<MsgStopToken>): MsgStopToken;
};
export declare const MsgStopTokenResponse: {
    encode(_: MsgStopTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStopTokenResponse;
    fromJSON(_: any): MsgStopTokenResponse;
    toJSON(_: MsgStopTokenResponse): unknown;
    fromPartial(_: Partial<MsgStopTokenResponse>): MsgStopTokenResponse;
};
