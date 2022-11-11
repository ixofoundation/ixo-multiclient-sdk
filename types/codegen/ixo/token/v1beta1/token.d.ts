import * as _m0 from "protobufjs/minimal";
export interface Params {
    NftContractAddress: string;
    NftContractMinter: string;
}
export interface ParamsSDKType {
    NftContractAddress: string;
    NftContractMinter: string;
}
/** ProjectDoc defines a project (or token) type with all of its parameters. */
export interface TokenDoc {
}
/** ProjectDoc defines a project (or token) type with all of its parameters. */
export interface TokenDocSDKType {
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const TokenDoc: {
    encode(_: TokenDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenDoc;
    fromJSON(_: any): TokenDoc;
    toJSON(_: TokenDoc): unknown;
    fromPartial(_: Partial<TokenDoc>): TokenDoc;
};
