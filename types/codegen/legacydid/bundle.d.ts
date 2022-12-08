import * as _154 from "../ixo/legacy/did/did";
import * as _155 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _155.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.BaseDidDoc;
        fromJSON(object: any): _155.BaseDidDoc;
        toJSON(message: _155.BaseDidDoc): unknown;
        fromPartial(object: Partial<_155.BaseDidDoc>): _155.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _154.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.DidCredential;
        fromJSON(object: any): _154.DidCredential;
        toJSON(message: _154.DidCredential): unknown;
        fromPartial(object: Partial<_154.DidCredential>): _154.DidCredential;
    };
    Claim: {
        encode(message: _154.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Claim;
        fromJSON(object: any): _154.Claim;
        toJSON(message: _154.Claim): unknown;
        fromPartial(object: Partial<_154.Claim>): _154.Claim;
    };
    IxoDid: {
        encode(message: _154.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.IxoDid;
        fromJSON(object: any): _154.IxoDid;
        toJSON(message: _154.IxoDid): unknown;
        fromPartial(object: Partial<_154.IxoDid>): _154.IxoDid;
    };
    Secret: {
        encode(message: _154.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Secret;
        fromJSON(object: any): _154.Secret;
        toJSON(message: _154.Secret): unknown;
        fromPartial(object: Partial<_154.Secret>): _154.Secret;
    };
};
