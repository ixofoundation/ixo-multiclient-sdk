import * as _171 from "../ixo/legacy/did/did";
import * as _172 from "../ixo/legacy/did/diddoc";
export declare const legacydid: {
    BaseDidDoc: {
        encode(message: _172.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.BaseDidDoc;
        fromJSON(object: any): _172.BaseDidDoc;
        toJSON(message: _172.BaseDidDoc): unknown;
        fromPartial(object: Partial<_172.BaseDidDoc>): _172.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _171.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DidCredential;
        fromJSON(object: any): _171.DidCredential;
        toJSON(message: _171.DidCredential): unknown;
        fromPartial(object: Partial<_171.DidCredential>): _171.DidCredential;
    };
    Claim: {
        encode(message: _171.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Claim;
        fromJSON(object: any): _171.Claim;
        toJSON(message: _171.Claim): unknown;
        fromPartial(object: Partial<_171.Claim>): _171.Claim;
    };
    IxoDid: {
        encode(message: _171.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.IxoDid;
        fromJSON(object: any): _171.IxoDid;
        toJSON(message: _171.IxoDid): unknown;
        fromPartial(object: Partial<_171.IxoDid>): _171.IxoDid;
    };
    Secret: {
        encode(message: _171.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Secret;
        fromJSON(object: any): _171.Secret;
        toJSON(message: _171.Secret): unknown;
        fromPartial(object: Partial<_171.Secret>): _171.Secret;
    };
};
