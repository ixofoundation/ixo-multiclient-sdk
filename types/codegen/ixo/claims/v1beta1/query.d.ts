import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Collection, CollectionSDKType, Claim, ClaimSDKType, Dispute, DisputeSDKType } from "./claims";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryCollectionRequest {
    id: string;
}
export interface QueryCollectionRequestSDKType {
    id: string;
}
export interface QueryCollectionResponse {
    collection?: Collection;
}
export interface QueryCollectionResponseSDKType {
    collection?: CollectionSDKType;
}
export interface QueryCollectionListRequest {
    pagination?: PageRequest;
}
export interface QueryCollectionListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryCollectionListResponse {
    collections: Collection[];
    pagination?: PageResponse;
}
export interface QueryCollectionListResponseSDKType {
    collections: CollectionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryClaimRequest {
    id: string;
}
export interface QueryClaimRequestSDKType {
    id: string;
}
export interface QueryClaimResponse {
    claim?: Claim;
}
export interface QueryClaimResponseSDKType {
    claim?: ClaimSDKType;
}
export interface QueryClaimListRequest {
    pagination?: PageRequest;
}
export interface QueryClaimListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryClaimListResponse {
    claims: Claim[];
    pagination?: PageResponse;
}
export interface QueryClaimListResponseSDKType {
    claims: ClaimSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryDisputeRequest {
    proof: string;
}
export interface QueryDisputeRequestSDKType {
    proof: string;
}
export interface QueryDisputeResponse {
    dispute?: Dispute;
}
export interface QueryDisputeResponseSDKType {
    dispute?: DisputeSDKType;
}
export interface QueryDisputeListRequest {
    pagination?: PageRequest;
}
export interface QueryDisputeListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryDisputeListResponse {
    disputes: Dispute[];
    pagination?: PageResponse;
}
export interface QueryDisputeListResponseSDKType {
    disputes: DisputeSDKType[];
    pagination?: PageResponseSDKType;
}
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
export declare const QueryCollectionRequest: {
    encode(message: QueryCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest;
    fromJSON(object: any): QueryCollectionRequest;
    toJSON(message: QueryCollectionRequest): unknown;
    fromPartial(object: Partial<QueryCollectionRequest>): QueryCollectionRequest;
};
export declare const QueryCollectionResponse: {
    encode(message: QueryCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse;
    fromJSON(object: any): QueryCollectionResponse;
    toJSON(message: QueryCollectionResponse): unknown;
    fromPartial(object: Partial<QueryCollectionResponse>): QueryCollectionResponse;
};
export declare const QueryCollectionListRequest: {
    encode(message: QueryCollectionListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionListRequest;
    fromJSON(object: any): QueryCollectionListRequest;
    toJSON(message: QueryCollectionListRequest): unknown;
    fromPartial(object: Partial<QueryCollectionListRequest>): QueryCollectionListRequest;
};
export declare const QueryCollectionListResponse: {
    encode(message: QueryCollectionListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionListResponse;
    fromJSON(object: any): QueryCollectionListResponse;
    toJSON(message: QueryCollectionListResponse): unknown;
    fromPartial(object: Partial<QueryCollectionListResponse>): QueryCollectionListResponse;
};
export declare const QueryClaimRequest: {
    encode(message: QueryClaimRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRequest;
    fromJSON(object: any): QueryClaimRequest;
    toJSON(message: QueryClaimRequest): unknown;
    fromPartial(object: Partial<QueryClaimRequest>): QueryClaimRequest;
};
export declare const QueryClaimResponse: {
    encode(message: QueryClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimResponse;
    fromJSON(object: any): QueryClaimResponse;
    toJSON(message: QueryClaimResponse): unknown;
    fromPartial(object: Partial<QueryClaimResponse>): QueryClaimResponse;
};
export declare const QueryClaimListRequest: {
    encode(message: QueryClaimListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimListRequest;
    fromJSON(object: any): QueryClaimListRequest;
    toJSON(message: QueryClaimListRequest): unknown;
    fromPartial(object: Partial<QueryClaimListRequest>): QueryClaimListRequest;
};
export declare const QueryClaimListResponse: {
    encode(message: QueryClaimListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimListResponse;
    fromJSON(object: any): QueryClaimListResponse;
    toJSON(message: QueryClaimListResponse): unknown;
    fromPartial(object: Partial<QueryClaimListResponse>): QueryClaimListResponse;
};
export declare const QueryDisputeRequest: {
    encode(message: QueryDisputeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeRequest;
    fromJSON(object: any): QueryDisputeRequest;
    toJSON(message: QueryDisputeRequest): unknown;
    fromPartial(object: Partial<QueryDisputeRequest>): QueryDisputeRequest;
};
export declare const QueryDisputeResponse: {
    encode(message: QueryDisputeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeResponse;
    fromJSON(object: any): QueryDisputeResponse;
    toJSON(message: QueryDisputeResponse): unknown;
    fromPartial(object: Partial<QueryDisputeResponse>): QueryDisputeResponse;
};
export declare const QueryDisputeListRequest: {
    encode(message: QueryDisputeListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListRequest;
    fromJSON(object: any): QueryDisputeListRequest;
    toJSON(message: QueryDisputeListRequest): unknown;
    fromPartial(object: Partial<QueryDisputeListRequest>): QueryDisputeListRequest;
};
export declare const QueryDisputeListResponse: {
    encode(message: QueryDisputeListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListResponse;
    fromJSON(object: any): QueryDisputeListResponse;
    toJSON(message: QueryDisputeListResponse): unknown;
    fromPartial(object: Partial<QueryDisputeListResponse>): QueryDisputeListResponse;
};
