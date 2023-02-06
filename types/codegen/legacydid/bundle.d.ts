import * as _161 from "../ixo/legacy/did/did";
import * as _162 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _162.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.BaseDidDoc;
        fromJSON(object: any): _162.BaseDidDoc;
        toJSON(message: _162.BaseDidDoc): unknown;
        fromPartial(object: Partial<_162.BaseDidDoc>): _162.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _161.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.DidCredential;
        fromJSON(object: any): _161.DidCredential;
        toJSON(message: _161.DidCredential): unknown;
        fromPartial(object: Partial<_161.DidCredential>): _161.DidCredential;
    };
    Claim: {
        encode(message: _161.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Claim;
        fromJSON(object: any): _161.Claim;
        toJSON(message: _161.Claim): unknown;
        fromPartial(object: Partial<_161.Claim>): _161.Claim;
    };
    IxoDid: {
        encode(message: _161.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.IxoDid;
        fromJSON(object: any): _161.IxoDid;
        toJSON(message: _161.IxoDid): unknown;
        fromPartial(object: Partial<_161.IxoDid>): _161.IxoDid;
    };
    Secret: {
        encode(message: _161.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Secret;
        fromJSON(object: any): _161.Secret;
        toJSON(message: _161.Secret): unknown;
        fromPartial(object: Partial<_161.Secret>): _161.Secret;
    };
};
