import * as _153 from "../ixo/legacy/did/did";
import * as _154 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _154.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.BaseDidDoc;
        fromJSON(object: any): _154.BaseDidDoc;
        toJSON(message: _154.BaseDidDoc): unknown;
        fromPartial(object: Partial<_154.BaseDidDoc>): _154.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _153.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.DidCredential;
        fromJSON(object: any): _153.DidCredential;
        toJSON(message: _153.DidCredential): unknown;
        fromPartial(object: Partial<_153.DidCredential>): _153.DidCredential;
    };
    Claim: {
        encode(message: _153.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Claim;
        fromJSON(object: any): _153.Claim;
        toJSON(message: _153.Claim): unknown;
        fromPartial(object: Partial<_153.Claim>): _153.Claim;
    };
    IxoDid: {
        encode(message: _153.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.IxoDid;
        fromJSON(object: any): _153.IxoDid;
        toJSON(message: _153.IxoDid): unknown;
        fromPartial(object: Partial<_153.IxoDid>): _153.IxoDid;
    };
    Secret: {
        encode(message: _153.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Secret;
        fromJSON(object: any): _153.Secret;
        toJSON(message: _153.Secret): unknown;
        fromPartial(object: Partial<_153.Secret>): _153.Secret;
    };
};
