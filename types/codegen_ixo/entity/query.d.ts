import * as _m0 from "protobufjs/minimal";
export interface QueryEntityListRequest {
    entityType: string;
    entityStatus: string;
}
export interface QueryEntityListRequestSDKType {
    entity_type: string;
    entity_status: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryEntityListResponse {
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryEntityListResponseSDKType {
}
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */
export interface QueryEntityDocRequest {
    entityDid: string;
}
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */
export interface QueryEntityDocRequestSDKType {
    entity_did: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryEntityDocResponse {
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryEntityDocResponseSDKType {
}
export interface QueryEntityConfigRequest {
}
export interface QueryEntityConfigRequestSDKType {
}
export interface QueryEntityConfigResponse_MapEntry {
    key: string;
    value: string;
}
export interface QueryEntityConfigResponse_MapEntrySDKType {
    key: string;
    value: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryEntityConfigResponse {
    map: {
        [key: string]: string;
    };
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryEntityConfigResponseSDKType {
    map: {
        [key: string]: string;
    };
}
export declare const QueryEntityListRequest: {
    encode(message: QueryEntityListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListRequest;
    fromJSON(object: any): QueryEntityListRequest;
    toJSON(message: QueryEntityListRequest): unknown;
    fromPartial(object: Partial<QueryEntityListRequest>): QueryEntityListRequest;
};
export declare const QueryEntityListResponse: {
    encode(_: QueryEntityListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListResponse;
    fromJSON(_: any): QueryEntityListResponse;
    toJSON(_: QueryEntityListResponse): unknown;
    fromPartial(_: Partial<QueryEntityListResponse>): QueryEntityListResponse;
};
export declare const QueryEntityDocRequest: {
    encode(message: QueryEntityDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityDocRequest;
    fromJSON(object: any): QueryEntityDocRequest;
    toJSON(message: QueryEntityDocRequest): unknown;
    fromPartial(object: Partial<QueryEntityDocRequest>): QueryEntityDocRequest;
};
export declare const QueryEntityDocResponse: {
    encode(_: QueryEntityDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityDocResponse;
    fromJSON(_: any): QueryEntityDocResponse;
    toJSON(_: QueryEntityDocResponse): unknown;
    fromPartial(_: Partial<QueryEntityDocResponse>): QueryEntityDocResponse;
};
export declare const QueryEntityConfigRequest: {
    encode(_: QueryEntityConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityConfigRequest;
    fromJSON(_: any): QueryEntityConfigRequest;
    toJSON(_: QueryEntityConfigRequest): unknown;
    fromPartial(_: Partial<QueryEntityConfigRequest>): QueryEntityConfigRequest;
};
export declare const QueryEntityConfigResponse_MapEntry: {
    encode(message: QueryEntityConfigResponse_MapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityConfigResponse_MapEntry;
    fromJSON(object: any): QueryEntityConfigResponse_MapEntry;
    toJSON(message: QueryEntityConfigResponse_MapEntry): unknown;
    fromPartial(object: Partial<QueryEntityConfigResponse_MapEntry>): QueryEntityConfigResponse_MapEntry;
};
export declare const QueryEntityConfigResponse: {
    encode(message: QueryEntityConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityConfigResponse;
    fromJSON(object: any): QueryEntityConfigResponse;
    toJSON(message: QueryEntityConfigResponse): unknown;
    fromPartial(object: Partial<QueryEntityConfigResponse>): QueryEntityConfigResponse;
};
