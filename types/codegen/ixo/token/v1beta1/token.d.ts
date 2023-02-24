import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface Params {
    ixo1155ContractCode: Long;
}
export interface ParamsSDKType {
    ixo1155_contract_code: Long;
}
export interface Token {
    /** address of minter */
    minter: string;
    /** generated on token intiation through MsgSetupMinter */
    contractAddress: string;
    /** class is the token protocol entity DID (validated) */
    class: string;
    /** name is the token name, which must be unique (namespace) */
    name: string;
    /** description is any arbitrary description */
    description: string;
    /** image is the image url for the token */
    image: string;
    /** type is the token type (eg ixo1155) */
    type: string;
    /**
     * cap is the maximum number of tokens with this name that can be minted, 0 is
     * unlimited
     */
    cap: string;
    /** how much has already been minted for this Token type, aka the supply */
    supply: string;
    /** stop allowance of token minter temporarily */
    paused: boolean;
    /** stop allowance of token minter permanently */
    stopped: boolean;
    /**
     * tokens that has been retired for this Token with specific name and contract
     * address
     */
    retired: TokensRetired[];
    /**
     * tokens that has been cancelled for this Token with specific name and
     * contract address
     */
    cancelled: TokensCancelled[];
}
export interface TokenSDKType {
    /** address of minter */
    minter: string;
    /** generated on token intiation through MsgSetupMinter */
    contract_address: string;
    /** class is the token protocol entity DID (validated) */
    class: string;
    /** name is the token name, which must be unique (namespace) */
    name: string;
    /** description is any arbitrary description */
    description: string;
    /** image is the image url for the token */
    image: string;
    /** type is the token type (eg ixo1155) */
    type: string;
    /**
     * cap is the maximum number of tokens with this name that can be minted, 0 is
     * unlimited
     */
    cap: string;
    /** how much has already been minted for this Token type, aka the supply */
    supply: string;
    /** stop allowance of token minter temporarily */
    paused: boolean;
    /** stop allowance of token minter permanently */
    stopped: boolean;
    /**
     * tokens that has been retired for this Token with specific name and contract
     * address
     */
    retired: TokensRetiredSDKType[];
    /**
     * tokens that has been cancelled for this Token with specific name and
     * contract address
     */
    cancelled: TokensCancelledSDKType[];
}
export interface TokensRetired {
    id: string;
    reason: string;
    jurisdiction: string;
    amount: string;
    owner: string;
}
export interface TokensRetiredSDKType {
    id: string;
    reason: string;
    jurisdiction: string;
    amount: string;
    owner: string;
}
export interface TokensCancelled {
    id: string;
    reason: string;
    amount: string;
    owner: string;
}
export interface TokensCancelledSDKType {
    id: string;
    reason: string;
    amount: string;
    owner: string;
}
export interface TokenProperties {
    id: string;
    /** index is the unique identifier hexstring that identifies the token */
    index: string;
    /** index is the unique identifier hexstring that identifies the token */
    name: string;
    /** did of collection (eg Supamoto Malawi) */
    collection: string;
    /**
     * tokenData is the linkedResources added to tokenMetadata when queried eg
     * (credential link ***.ipfs)
     */
    tokenData: TokenData[];
}
export interface TokenPropertiesSDKType {
    id: string;
    /** index is the unique identifier hexstring that identifies the token */
    index: string;
    /** index is the unique identifier hexstring that identifies the token */
    name: string;
    /** did of collection (eg Supamoto Malawi) */
    collection: string;
    /**
     * tokenData is the linkedResources added to tokenMetadata when queried eg
     * (credential link ***.ipfs)
     */
    tokenData: TokenDataSDKType[];
}
export interface TokenData {
    /** media type value should always be "application/json" */
    uri: string;
    encrypted: boolean;
    proof: string;
    type: string;
    /** did of entity to map token to */
    id: string;
}
export interface TokenDataSDKType {
    /** media type value should always be "application/json" */
    uri: string;
    encrypted: boolean;
    proof: string;
    type: string;
    /** did of entity to map token to */
    id: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Token: {
    encode(message: Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Token;
    fromJSON(object: any): Token;
    toJSON(message: Token): unknown;
    fromPartial(object: Partial<Token>): Token;
};
export declare const TokensRetired: {
    encode(message: TokensRetired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokensRetired;
    fromJSON(object: any): TokensRetired;
    toJSON(message: TokensRetired): unknown;
    fromPartial(object: Partial<TokensRetired>): TokensRetired;
};
export declare const TokensCancelled: {
    encode(message: TokensCancelled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokensCancelled;
    fromJSON(object: any): TokensCancelled;
    toJSON(message: TokensCancelled): unknown;
    fromPartial(object: Partial<TokensCancelled>): TokensCancelled;
};
export declare const TokenProperties: {
    encode(message: TokenProperties, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenProperties;
    fromJSON(object: any): TokenProperties;
    toJSON(message: TokenProperties): unknown;
    fromPartial(object: Partial<TokenProperties>): TokenProperties;
};
export declare const TokenData: {
    encode(message: TokenData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenData;
    fromJSON(object: any): TokenData;
    toJSON(message: TokenData): unknown;
    fromPartial(object: Partial<TokenData>): TokenData;
};
