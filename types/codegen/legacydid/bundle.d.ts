import * as _170 from "../ixo/legacy/did/did";
import * as _171 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _171.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.BaseDidDoc;
        fromJSON(object: any): _171.BaseDidDoc;
        toJSON(message: _171.BaseDidDoc): unknown;
        fromPartial(object: Partial<_171.BaseDidDoc>): _171.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _170.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DidCredential;
        fromJSON(object: any): _170.DidCredential;
        toJSON(message: _170.DidCredential): unknown;
        fromPartial(object: Partial<_170.DidCredential>): _170.DidCredential;
    };
    Claim: {
        encode(message: _170.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Claim;
        fromJSON(object: any): _170.Claim;
        toJSON(message: _170.Claim): unknown;
        fromPartial(object: Partial<_170.Claim>): _170.Claim;
    };
    IxoDid: {
        encode(message: _170.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.IxoDid;
        fromJSON(object: any): _170.IxoDid;
        toJSON(message: _170.IxoDid): unknown;
        fromPartial(object: Partial<_170.IxoDid>): _170.IxoDid;
    };
    Secret: {
        encode(message: _170.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Secret;
        fromJSON(object: any): _170.Secret;
        toJSON(message: _170.Secret): unknown;
        fromPartial(object: Partial<_170.Secret>): _170.Secret;
    };
};
