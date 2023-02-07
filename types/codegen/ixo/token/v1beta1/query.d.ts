import { TokenMinter, TokenMinterSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
export interface QueryTokenListRequest {
    minterDid: string;
}
export interface QueryTokenListRequestSDKType {
    minter_did: string;
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenListResponse {
    contracts: TokenMinter[];
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenListResponseSDKType {
    contracts: TokenMinterSDKType[];
}
/**
 * QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenDocRequest {
    minterDid: string;
    contractAddress: string;
}
/**
 * QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenDocRequestSDKType {
    minter_did: string;
    contract_address: string;
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenDocResponse {
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenDocResponseSDKType {
}
export interface QueryTokenConfigRequest {
}
export interface QueryTokenConfigRequestSDKType {
}
export interface QueryTokenConfigResponse_MapEntry {
    key: string;
    value: string;
}
export interface QueryTokenConfigResponse_MapEntrySDKType {
    key: string;
    value: string;
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenConfigResponse {
    map: {
        [key: string]: string;
    };
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */
export interface QueryTokenConfigResponseSDKType {
    map: {
        [key: string]: string;
    };
}
export declare const QueryTokenListRequest: {
    encode(message: QueryTokenListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenListRequest;
    fromJSON(object: any): QueryTokenListRequest;
    toJSON(message: QueryTokenListRequest): unknown;
    fromPartial(object: Partial<QueryTokenListRequest>): QueryTokenListRequest;
};
export declare const QueryTokenListResponse: {
    encode(message: QueryTokenListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenListResponse;
    fromJSON(object: any): QueryTokenListResponse;
    toJSON(message: QueryTokenListResponse): unknown;
    fromPartial(object: Partial<QueryTokenListResponse>): QueryTokenListResponse;
};
export declare const QueryTokenDocRequest: {
    encode(message: QueryTokenDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDocRequest;
    fromJSON(object: any): QueryTokenDocRequest;
    toJSON(message: QueryTokenDocRequest): unknown;
    fromPartial(object: Partial<QueryTokenDocRequest>): QueryTokenDocRequest;
};
export declare const QueryTokenDocResponse: {
    encode(_: QueryTokenDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDocResponse;
    fromJSON(_: any): QueryTokenDocResponse;
    toJSON(_: QueryTokenDocResponse): unknown;
    fromPartial(_: Partial<QueryTokenDocResponse>): QueryTokenDocResponse;
};
export declare const QueryTokenConfigRequest: {
    encode(_: QueryTokenConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenConfigRequest;
    fromJSON(_: any): QueryTokenConfigRequest;
    toJSON(_: QueryTokenConfigRequest): unknown;
    fromPartial(_: Partial<QueryTokenConfigRequest>): QueryTokenConfigRequest;
};
export declare const QueryTokenConfigResponse_MapEntry: {
    encode(message: QueryTokenConfigResponse_MapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenConfigResponse_MapEntry;
    fromJSON(object: any): QueryTokenConfigResponse_MapEntry;
    toJSON(message: QueryTokenConfigResponse_MapEntry): unknown;
    fromPartial(object: Partial<QueryTokenConfigResponse_MapEntry>): QueryTokenConfigResponse_MapEntry;
};
export declare const QueryTokenConfigResponse: {
    encode(message: QueryTokenConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenConfigResponse;
    fromJSON(object: any): QueryTokenConfigResponse;
    toJSON(message: QueryTokenConfigResponse): unknown;
    fromPartial(object: Partial<QueryTokenConfigResponse>): QueryTokenConfigResponse;
};
