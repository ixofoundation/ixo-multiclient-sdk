import { ProjectDoc, ProjectDocSDKType, AccountMap, AccountMapSDKType, WithdrawalInfoDocs, WithdrawalInfoDocsSDKType, Params, ParamsSDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */
export interface QueryProjectDocRequest {
    projectDid: string;
}
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */
export interface QueryProjectDocRequestSDKType {
    project_did: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryProjectDocResponse {
    projectDoc?: ProjectDoc;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryProjectDocResponseSDKType {
    project_doc?: ProjectDocSDKType;
}
/** QueryProjectAccountsRequest is the request type for the Query/ProjectAccounts RPC method. */
export interface QueryProjectAccountsRequest {
    projectDid: string;
}
/** QueryProjectAccountsRequest is the request type for the Query/ProjectAccounts RPC method. */
export interface QueryProjectAccountsRequestSDKType {
    project_did: string;
}
/** QueryProjectAccountsResponse is the response type for the Query/ProjectAccounts RPC method. */
export interface QueryProjectAccountsResponse {
    accountMap?: AccountMap;
}
/** QueryProjectAccountsResponse is the response type for the Query/ProjectAccounts RPC method. */
export interface QueryProjectAccountsResponseSDKType {
    account_map?: AccountMapSDKType;
}
/** QueryProjectTxRequest is the request type for the Query/ProjectTx RPC method. */
export interface QueryProjectTxRequest {
    projectDid: string;
}
/** QueryProjectTxRequest is the request type for the Query/ProjectTx RPC method. */
export interface QueryProjectTxRequestSDKType {
    project_did: string;
}
/** QueryProjectTxResponse is the response type for the Query/ProjectTx RPC method. */
export interface QueryProjectTxResponse {
    txs?: WithdrawalInfoDocs;
}
/** QueryProjectTxResponse is the response type for the Query/ProjectTx RPC method. */
export interface QueryProjectTxResponseSDKType {
    txs?: WithdrawalInfoDocsSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryProjectDocRequest: {
    encode(message: QueryProjectDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectDocRequest;
    fromJSON(object: any): QueryProjectDocRequest;
    toJSON(message: QueryProjectDocRequest): unknown;
    fromPartial(object: Partial<QueryProjectDocRequest>): QueryProjectDocRequest;
};
export declare const QueryProjectDocResponse: {
    encode(message: QueryProjectDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectDocResponse;
    fromJSON(object: any): QueryProjectDocResponse;
    toJSON(message: QueryProjectDocResponse): unknown;
    fromPartial(object: Partial<QueryProjectDocResponse>): QueryProjectDocResponse;
};
export declare const QueryProjectAccountsRequest: {
    encode(message: QueryProjectAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectAccountsRequest;
    fromJSON(object: any): QueryProjectAccountsRequest;
    toJSON(message: QueryProjectAccountsRequest): unknown;
    fromPartial(object: Partial<QueryProjectAccountsRequest>): QueryProjectAccountsRequest;
};
export declare const QueryProjectAccountsResponse: {
    encode(message: QueryProjectAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectAccountsResponse;
    fromJSON(object: any): QueryProjectAccountsResponse;
    toJSON(message: QueryProjectAccountsResponse): unknown;
    fromPartial(object: Partial<QueryProjectAccountsResponse>): QueryProjectAccountsResponse;
};
export declare const QueryProjectTxRequest: {
    encode(message: QueryProjectTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectTxRequest;
    fromJSON(object: any): QueryProjectTxRequest;
    toJSON(message: QueryProjectTxRequest): unknown;
    fromPartial(object: Partial<QueryProjectTxRequest>): QueryProjectTxRequest;
};
export declare const QueryProjectTxResponse: {
    encode(message: QueryProjectTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectTxResponse;
    fromJSON(object: any): QueryProjectTxResponse;
    toJSON(message: QueryProjectTxResponse): unknown;
    fromPartial(object: Partial<QueryProjectTxResponse>): QueryProjectTxResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
