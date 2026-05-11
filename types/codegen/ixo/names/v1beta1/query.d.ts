import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Namespace, NamespaceSDKType, NameRecord, NameRecordSDKType } from "./names";
import * as _m0 from "protobufjs/minimal";
export interface QueryNamespaceRequest {
    name: string;
}
export interface QueryNamespaceRequestSDKType {
    name: string;
}
export interface QueryNamespaceResponse {
    namespace?: Namespace;
}
export interface QueryNamespaceResponseSDKType {
    namespace?: NamespaceSDKType;
}
export interface QueryNamespacesRequest {
    pagination?: PageRequest;
}
export interface QueryNamespacesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryNamespacesResponse {
    namespaces: Namespace[];
    pagination?: PageResponse;
}
export interface QueryNamespacesResponseSDKType {
    namespaces: NamespaceSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryResolveNameRequest {
    namespace: string;
    /** name is normalized server-side; callers may pass the display form. */
    name: string;
}
export interface QueryResolveNameRequestSDKType {
    namespace: string;
    name: string;
}
export interface QueryResolveNameResponse {
    record?: NameRecord;
}
export interface QueryResolveNameResponseSDKType {
    record?: NameRecordSDKType;
}
export interface QueryGetNameRequest {
    namespace: string;
    normalizedName: string;
}
export interface QueryGetNameRequestSDKType {
    namespace: string;
    normalized_name: string;
}
export interface QueryGetNameResponse {
    record?: NameRecord;
}
export interface QueryGetNameResponseSDKType {
    record?: NameRecordSDKType;
}
export interface QueryNamesByNamespaceRequest {
    namespace: string;
    pagination?: PageRequest;
}
export interface QueryNamesByNamespaceRequestSDKType {
    namespace: string;
    pagination?: PageRequestSDKType;
}
export interface QueryNamesByNamespaceResponse {
    records: NameRecord[];
    pagination?: PageResponse;
}
export interface QueryNamesByNamespaceResponseSDKType {
    records: NameRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryNamesByOwnerRequest {
    ownerDid: string;
    pagination?: PageRequest;
}
export interface QueryNamesByOwnerRequestSDKType {
    owner_did: string;
    pagination?: PageRequestSDKType;
}
export interface QueryNamesByOwnerResponse {
    records: NameRecord[];
    pagination?: PageResponse;
}
export interface QueryNamesByOwnerResponseSDKType {
    records: NameRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryNamespaceRequest: {
    encode(message: QueryNamespaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespaceRequest;
    fromJSON(object: any): QueryNamespaceRequest;
    toJSON(message: QueryNamespaceRequest): unknown;
    fromPartial(object: Partial<QueryNamespaceRequest>): QueryNamespaceRequest;
};
export declare const QueryNamespaceResponse: {
    encode(message: QueryNamespaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespaceResponse;
    fromJSON(object: any): QueryNamespaceResponse;
    toJSON(message: QueryNamespaceResponse): unknown;
    fromPartial(object: Partial<QueryNamespaceResponse>): QueryNamespaceResponse;
};
export declare const QueryNamespacesRequest: {
    encode(message: QueryNamespacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespacesRequest;
    fromJSON(object: any): QueryNamespacesRequest;
    toJSON(message: QueryNamespacesRequest): unknown;
    fromPartial(object: Partial<QueryNamespacesRequest>): QueryNamespacesRequest;
};
export declare const QueryNamespacesResponse: {
    encode(message: QueryNamespacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespacesResponse;
    fromJSON(object: any): QueryNamespacesResponse;
    toJSON(message: QueryNamespacesResponse): unknown;
    fromPartial(object: Partial<QueryNamespacesResponse>): QueryNamespacesResponse;
};
export declare const QueryResolveNameRequest: {
    encode(message: QueryResolveNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolveNameRequest;
    fromJSON(object: any): QueryResolveNameRequest;
    toJSON(message: QueryResolveNameRequest): unknown;
    fromPartial(object: Partial<QueryResolveNameRequest>): QueryResolveNameRequest;
};
export declare const QueryResolveNameResponse: {
    encode(message: QueryResolveNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolveNameResponse;
    fromJSON(object: any): QueryResolveNameResponse;
    toJSON(message: QueryResolveNameResponse): unknown;
    fromPartial(object: Partial<QueryResolveNameResponse>): QueryResolveNameResponse;
};
export declare const QueryGetNameRequest: {
    encode(message: QueryGetNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNameRequest;
    fromJSON(object: any): QueryGetNameRequest;
    toJSON(message: QueryGetNameRequest): unknown;
    fromPartial(object: Partial<QueryGetNameRequest>): QueryGetNameRequest;
};
export declare const QueryGetNameResponse: {
    encode(message: QueryGetNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNameResponse;
    fromJSON(object: any): QueryGetNameResponse;
    toJSON(message: QueryGetNameResponse): unknown;
    fromPartial(object: Partial<QueryGetNameResponse>): QueryGetNameResponse;
};
export declare const QueryNamesByNamespaceRequest: {
    encode(message: QueryNamesByNamespaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByNamespaceRequest;
    fromJSON(object: any): QueryNamesByNamespaceRequest;
    toJSON(message: QueryNamesByNamespaceRequest): unknown;
    fromPartial(object: Partial<QueryNamesByNamespaceRequest>): QueryNamesByNamespaceRequest;
};
export declare const QueryNamesByNamespaceResponse: {
    encode(message: QueryNamesByNamespaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByNamespaceResponse;
    fromJSON(object: any): QueryNamesByNamespaceResponse;
    toJSON(message: QueryNamesByNamespaceResponse): unknown;
    fromPartial(object: Partial<QueryNamesByNamespaceResponse>): QueryNamesByNamespaceResponse;
};
export declare const QueryNamesByOwnerRequest: {
    encode(message: QueryNamesByOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByOwnerRequest;
    fromJSON(object: any): QueryNamesByOwnerRequest;
    toJSON(message: QueryNamesByOwnerRequest): unknown;
    fromPartial(object: Partial<QueryNamesByOwnerRequest>): QueryNamesByOwnerRequest;
};
export declare const QueryNamesByOwnerResponse: {
    encode(message: QueryNamesByOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByOwnerResponse;
    fromJSON(object: any): QueryNamesByOwnerResponse;
    toJSON(message: QueryNamesByOwnerResponse): unknown;
    fromPartial(object: Partial<QueryNamesByOwnerResponse>): QueryNamesByOwnerResponse;
};
