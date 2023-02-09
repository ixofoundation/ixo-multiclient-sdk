import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface Cw20Constraints {
    maxAmount: Long;
}
export interface Cw20ConstraintsSDKType {
    max_amount: Long;
}
export interface Cw721Constraints {
}
export interface Cw721ConstraintsSDKType {
}
export interface Cw1155Constraints {
    value: Long;
}
export interface Cw1155ConstraintsSDKType {
    value: Long;
}
export interface MintConstraints {
    contractAddress: string;
    limit: Long;
    cw20Constraints?: Cw20Constraints;
    cw721Constraints?: Cw721Constraints;
    cw1155Constraints?: Cw1155Constraints;
}
export interface MintConstraintsSDKType {
    contract_address: string;
    limit: Long;
    cw20_constraints?: Cw20ConstraintsSDKType;
    cw721_constraints?: Cw721ConstraintsSDKType;
    cw1155_constraints?: Cw1155ConstraintsSDKType;
}
export interface MintAuthorization {
    minterDid: string;
    constraints: MintConstraints[];
}
export interface MintAuthorizationSDKType {
    minter_did: string;
    constraints: MintConstraintsSDKType[];
}
export declare const Cw20Constraints: {
    encode(message: Cw20Constraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cw20Constraints;
    fromJSON(object: any): Cw20Constraints;
    toJSON(message: Cw20Constraints): unknown;
    fromPartial(object: Partial<Cw20Constraints>): Cw20Constraints;
};
export declare const Cw721Constraints: {
    encode(_: Cw721Constraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cw721Constraints;
    fromJSON(_: any): Cw721Constraints;
    toJSON(_: Cw721Constraints): unknown;
    fromPartial(_: Partial<Cw721Constraints>): Cw721Constraints;
};
export declare const Cw1155Constraints: {
    encode(message: Cw1155Constraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cw1155Constraints;
    fromJSON(object: any): Cw1155Constraints;
    toJSON(message: Cw1155Constraints): unknown;
    fromPartial(object: Partial<Cw1155Constraints>): Cw1155Constraints;
};
export declare const MintConstraints: {
    encode(message: MintConstraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintConstraints;
    fromJSON(object: any): MintConstraints;
    toJSON(message: MintConstraints): unknown;
    fromPartial(object: Partial<MintConstraints>): MintConstraints;
};
export declare const MintAuthorization: {
    encode(message: MintAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintAuthorization;
    fromJSON(object: any): MintAuthorization;
    toJSON(message: MintAuthorization): unknown;
    fromPartial(object: Partial<MintAuthorization>): MintAuthorization;
};
