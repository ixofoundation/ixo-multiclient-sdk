import * as _m0 from "protobufjs/minimal";
export interface Params {
    NftContractAddress: string;
    NftContractMinter: string;
}
export interface ParamsSDKType {
    NftContractAddress: string;
    NftContractMinter: string;
}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */
export interface EntityDoc {
}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */
export interface EntityDocSDKType {
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const EntityDoc: {
    encode(_: EntityDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityDoc;
    fromJSON(_: any): EntityDoc;
    toJSON(_: EntityDoc): unknown;
    fromPartial(_: Partial<EntityDoc>): EntityDoc;
};
