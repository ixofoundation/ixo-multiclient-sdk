import * as _m0 from "protobufjs/minimal";
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCode {
    /** signer address */
    signer: string;
    /** wasm byte code of light client contract. It can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCodeSDKType {
    signer: string;
    wasm_byte_code: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponse {
    /** checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponseSDKType {
    checksum: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksum {
    /** signer address */
    signer: string;
    /** checksum is the sha256 hash to be removed from the store */
    checksum: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksumSDKType {
    signer: string;
    checksum: Uint8Array;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponse {
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponseSDKType {
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContract {
    /** signer address */
    signer: string;
    /** the client id of the contract */
    clientId: string;
    /** checksum is the sha256 hash of the new wasm byte code for the contract */
    checksum: Uint8Array;
    /** the json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContractSDKType {
    signer: string;
    client_id: string;
    checksum: Uint8Array;
    msg: Uint8Array;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponse {
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponseSDKType {
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
};
export declare const MsgRemoveChecksum: {
    encode(message: MsgRemoveChecksum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveChecksum;
    fromJSON(object: any): MsgRemoveChecksum;
    toJSON(message: MsgRemoveChecksum): unknown;
    fromPartial(object: Partial<MsgRemoveChecksum>): MsgRemoveChecksum;
};
export declare const MsgRemoveChecksumResponse: {
    encode(_: MsgRemoveChecksumResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveChecksumResponse;
    fromJSON(_: any): MsgRemoveChecksumResponse;
    toJSON(_: MsgRemoveChecksumResponse): unknown;
    fromPartial(_: Partial<MsgRemoveChecksumResponse>): MsgRemoveChecksumResponse;
};
export declare const MsgMigrateContract: {
    encode(message: MsgMigrateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract;
};
export declare const MsgMigrateContractResponse: {
    encode(_: MsgMigrateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromJSON(_: any): MsgMigrateContractResponse;
    toJSON(_: MsgMigrateContractResponse): unknown;
    fromPartial(_: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse;
};
