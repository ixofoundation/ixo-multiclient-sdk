import * as _160 from "../ixo/legacy/did/did";
import * as _161 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _161.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.BaseDidDoc;
        fromJSON(object: any): _161.BaseDidDoc;
        toJSON(message: _161.BaseDidDoc): unknown;
        fromPartial(object: Partial<_161.BaseDidDoc>): _161.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _160.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.DidCredential;
        fromJSON(object: any): _160.DidCredential;
        toJSON(message: _160.DidCredential): unknown;
        fromPartial(object: Partial<_160.DidCredential>): _160.DidCredential;
    };
    Claim: {
        encode(message: _160.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Claim;
        fromJSON(object: any): _160.Claim;
        toJSON(message: _160.Claim): unknown;
        fromPartial(object: Partial<_160.Claim>): _160.Claim;
    };
    IxoDid: {
        encode(message: _160.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.IxoDid;
        fromJSON(object: any): _160.IxoDid;
        toJSON(message: _160.IxoDid): unknown;
        fromPartial(object: Partial<_160.IxoDid>): _160.IxoDid;
    };
    Secret: {
        encode(message: _160.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Secret;
        fromJSON(object: any): _160.Secret;
        toJSON(message: _160.Secret): unknown;
        fromPartial(object: Partial<_160.Secret>): _160.Secret;
    };
};
