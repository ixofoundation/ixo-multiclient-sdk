import { TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
export interface MintAuthorization {
    minterDid: string;
    constraints: MintConstraints[];
}
export interface MintAuthorizationSDKType {
    minter_did: string;
    constraints: MintConstraintsSDKType[];
}
export interface MintConstraints {
    contractAddress: string;
    amount: string;
    /**
     * name is the token name, which must be unique (namespace), will be verified
     * against Token name provided on msgCreateToken
     */
    name: string;
    /** index is the unique identifier hexstring that identifies the token */
    index: string;
    /** did of collection (eg Supamoto Malawi) */
    collection: string;
    /**
     * tokenData is the linkedResources added to tokenMetadata when queried eg
     * (credential link ***.ipfs)
     */
    tokenData: TokenData[];
}
export interface MintConstraintsSDKType {
    contract_address: string;
    amount: string;
    /**
     * name is the token name, which must be unique (namespace), will be verified
     * against Token name provided on msgCreateToken
     */
    name: string;
    /** index is the unique identifier hexstring that identifies the token */
    index: string;
    /** did of collection (eg Supamoto Malawi) */
    collection: string;
    /**
     * tokenData is the linkedResources added to tokenMetadata when queried eg
     * (credential link ***.ipfs)
     */
    tokenData: TokenDataSDKType[];
}
export declare const MintAuthorization: {
    encode(message: MintAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintAuthorization;
    fromJSON(object: any): MintAuthorization;
    toJSON(message: MintAuthorization): unknown;
    fromPartial(object: Partial<MintAuthorization>): MintAuthorization;
};
export declare const MintConstraints: {
    encode(message: MintConstraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintConstraints;
    fromJSON(object: any): MintConstraints;
    toJSON(message: MintConstraints): unknown;
    fromPartial(object: Partial<MintConstraints>): MintConstraints;
};
