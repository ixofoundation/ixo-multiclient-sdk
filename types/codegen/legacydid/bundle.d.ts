import * as _163 from "../ixo/legacy/did/did";
import * as _164 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _164.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.BaseDidDoc;
        fromJSON(object: any): _164.BaseDidDoc;
        toJSON(message: _164.BaseDidDoc): unknown;
        fromPartial(object: Partial<_164.BaseDidDoc>): _164.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _163.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.DidCredential;
        fromJSON(object: any): _163.DidCredential;
        toJSON(message: _163.DidCredential): unknown;
        fromPartial(object: Partial<_163.DidCredential>): _163.DidCredential;
    };
    Claim: {
        encode(message: _163.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Claim;
        fromJSON(object: any): _163.Claim;
        toJSON(message: _163.Claim): unknown;
        fromPartial(object: Partial<_163.Claim>): _163.Claim;
    };
    IxoDid: {
        encode(message: _163.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.IxoDid;
        fromJSON(object: any): _163.IxoDid;
        toJSON(message: _163.IxoDid): unknown;
        fromPartial(object: Partial<_163.IxoDid>): _163.IxoDid;
    };
    Secret: {
        encode(message: _163.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Secret;
        fromJSON(object: any): _163.Secret;
        toJSON(message: _163.Secret): unknown;
        fromPartial(object: Partial<_163.Secret>): _163.Secret;
    };
};
