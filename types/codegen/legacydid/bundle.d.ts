import * as _128 from "../ixo/legacy/did/did";
import * as _129 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _129.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.BaseDidDoc;
        fromJSON(object: any): _129.BaseDidDoc;
        toJSON(message: _129.BaseDidDoc): unknown;
        fromPartial(object: Partial<_129.BaseDidDoc>): _129.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _128.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.DidCredential;
        fromJSON(object: any): _128.DidCredential;
        toJSON(message: _128.DidCredential): unknown;
        fromPartial(object: Partial<_128.DidCredential>): _128.DidCredential;
    };
    Claim: {
        encode(message: _128.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Claim;
        fromJSON(object: any): _128.Claim;
        toJSON(message: _128.Claim): unknown;
        fromPartial(object: Partial<_128.Claim>): _128.Claim;
    };
    IxoDid: {
        encode(message: _128.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.IxoDid;
        fromJSON(object: any): _128.IxoDid;
        toJSON(message: _128.IxoDid): unknown;
        fromPartial(object: Partial<_128.IxoDid>): _128.IxoDid;
    };
    Secret: {
        encode(message: _128.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Secret;
        fromJSON(object: any): _128.Secret;
        toJSON(message: _128.Secret): unknown;
        fromPartial(object: Partial<_128.Secret>): _128.Secret;
    };
};
