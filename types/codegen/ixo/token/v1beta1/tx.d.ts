import { TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateToken {
    minterDid: string;
    minterAddress: string;
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
    minter_did: string;
    minter_address: string;
    /** class is the token protocol entity DID (validated) */
    class: string;
    /** name is the token name, which must be unique (namespace) */
    name: string;
    /** description is any arbitrary description */
    description: string;
    /** image is the image url for the token */
    image: string;
    /** type is the token type (eg ixo1155) */
    token_type: string;
    /**
     * cap is the maximum number of tokens with this name that can be minted, 0 is
     * unlimited
     */
    cap: string;
}
export interface MsgCreateTokenResponse {
}
export interface MsgCreateTokenResponseSDKType {
}
export interface MsgMintToken {
    minterDid: string;
    minterAddress: string;
    contractAddress: string;
    ownerDid: string;
    mintBatch: MintBatch[];
}
export interface MsgMintTokenSDKType {
    minter_did: string;
    minter_address: string;
    contract_address: string;
    owner_did: string;
    mintBatch: MintBatchSDKType[];
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
    tokenData: TokenDataSDKType[];
}
export interface MsgMintTokenResponse {
}
export interface MsgMintTokenResponseSDKType {
}
export interface MsgTransferToken {
    tokenDid: string;
    /** The ownersdid used to sign this transaction. */
    ownerDid: string;
    /** The owners address used to sign this transaction. */
    ownerAddress: string;
    recipientDid: string;
}
export interface MsgTransferTokenSDKType {
    token_did: string;
    /** The ownersdid used to sign this transaction. */
    owner_did: string;
    /** The owners address used to sign this transaction. */
    owner_address: string;
    recipient_did: string;
}
export interface MsgTransferTokenResponse {
}
export interface MsgTransferTokenResponseSDKType {
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
