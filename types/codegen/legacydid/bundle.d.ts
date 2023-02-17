import * as _162 from "../ixo/legacy/did/did";
import * as _163 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _163.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.BaseDidDoc;
        fromJSON(object: any): _163.BaseDidDoc;
        toJSON(message: _163.BaseDidDoc): unknown;
        fromPartial(object: Partial<_163.BaseDidDoc>): _163.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _162.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DidCredential;
        fromJSON(object: any): _162.DidCredential;
        toJSON(message: _162.DidCredential): unknown;
        fromPartial(object: Partial<_162.DidCredential>): _162.DidCredential;
    };
    Claim: {
        encode(message: _162.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Claim;
        fromJSON(object: any): _162.Claim;
        toJSON(message: _162.Claim): unknown;
        fromPartial(object: Partial<_162.Claim>): _162.Claim;
    };
    IxoDid: {
        encode(message: _162.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.IxoDid;
        fromJSON(object: any): _162.IxoDid;
        toJSON(message: _162.IxoDid): unknown;
        fromPartial(object: Partial<_162.IxoDid>): _162.IxoDid;
    };
    Secret: {
        encode(message: _162.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Secret;
        fromJSON(object: any): _162.Secret;
        toJSON(message: _162.Secret): unknown;
        fromPartial(object: Partial<_162.Secret>): _162.Secret;
    };
};
