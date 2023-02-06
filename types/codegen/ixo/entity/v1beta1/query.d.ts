import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Entity, EntitySDKType } from "./entity";
import { IidDocument, IidDocumentSDKType } from "../../iid/v1beta1/iid";
import * as _m0 from "protobufjs/minimal";
export interface QueryEntityRequest {
    id: string;
}
export interface QueryEntityRequestSDKType {
    id: string;
}
export interface QueryEntityResponse {
    entity?: Entity;
    iidDocument?: IidDocument;
}
export interface QueryEntityResponseSDKType {
    entity?: EntitySDKType;
    iidDocument?: IidDocumentSDKType;
}
export interface QueryEntityMetadataRequest {
    id: string;
}
export interface QueryEntityMetadataRequestSDKType {
    id: string;
}
export interface QueryEntityMetadataResponse {
    entity?: Entity;
}
export interface QueryEntityMetadataResponseSDKType {
    entity?: EntitySDKType;
}
export interface QueryEntityIidDocumentRequest {
    id: string;
}
export interface QueryEntityIidDocumentRequestSDKType {
    id: string;
}
export interface QueryEntityIidDocumentResponse {
    iidDocument?: IidDocument;
}
export interface QueryEntityIidDocumentResponseSDKType {
    iidDocument?: IidDocumentSDKType;
}
export interface QueryEntityVerifiedRequest {
    id: string;
}
export interface QueryEntityVerifiedRequestSDKType {
    id: string;
}
export interface QueryEntityVerifiedResponse {
    entityVerified: boolean;
}
export interface QueryEntityVerifiedResponseSDKType {
    entity_verified: boolean;
}
export interface QueryEntityListRequest {
    pagination?: PageRequest;
}
export interface QueryEntityListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryEntityListResponse {
    entities: Entity[];
    pagination?: PageResponse;
}
export interface QueryEntityListResponseSDKType {
    entities: EntitySDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryEntityRequest: {
    encode(message: QueryEntityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityRequest;
    fromJSON(object: any): QueryEntityRequest;
    toJSON(message: QueryEntityRequest): unknown;
    fromPartial(object: Partial<QueryEntityRequest>): QueryEntityRequest;
};
export declare const QueryEntityResponse: {
    encode(message: QueryEntityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityResponse;
    fromJSON(object: any): QueryEntityResponse;
    toJSON(message: QueryEntityResponse): unknown;
    fromPartial(object: Partial<QueryEntityResponse>): QueryEntityResponse;
};
export declare const QueryEntityMetadataRequest: {
    encode(message: QueryEntityMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityMetadataRequest;
    fromJSON(object: any): QueryEntityMetadataRequest;
    toJSON(message: QueryEntityMetadataRequest): unknown;
    fromPartial(object: Partial<QueryEntityMetadataRequest>): QueryEntityMetadataRequest;
};
export declare const QueryEntityMetadataResponse: {
    encode(message: QueryEntityMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityMetadataResponse;
    fromJSON(object: any): QueryEntityMetadataResponse;
    toJSON(message: QueryEntityMetadataResponse): unknown;
    fromPartial(object: Partial<QueryEntityMetadataResponse>): QueryEntityMetadataResponse;
};
export declare const QueryEntityIidDocumentRequest: {
    encode(message: QueryEntityIidDocumentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityIidDocumentRequest;
    fromJSON(object: any): QueryEntityIidDocumentRequest;
    toJSON(message: QueryEntityIidDocumentRequest): unknown;
    fromPartial(object: Partial<QueryEntityIidDocumentRequest>): QueryEntityIidDocumentRequest;
};
export declare const QueryEntityIidDocumentResponse: {
    encode(message: QueryEntityIidDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityIidDocumentResponse;
    fromJSON(object: any): QueryEntityIidDocumentResponse;
    toJSON(message: QueryEntityIidDocumentResponse): unknown;
    fromPartial(object: Partial<QueryEntityIidDocumentResponse>): QueryEntityIidDocumentResponse;
};
export declare const QueryEntityVerifiedRequest: {
    encode(message: QueryEntityVerifiedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityVerifiedRequest;
    fromJSON(object: any): QueryEntityVerifiedRequest;
    toJSON(message: QueryEntityVerifiedRequest): unknown;
    fromPartial(object: Partial<QueryEntityVerifiedRequest>): QueryEntityVerifiedRequest;
};
export declare const QueryEntityVerifiedResponse: {
    encode(message: QueryEntityVerifiedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityVerifiedResponse;
    fromJSON(object: any): QueryEntityVerifiedResponse;
    toJSON(message: QueryEntityVerifiedResponse): unknown;
    fromPartial(object: Partial<QueryEntityVerifiedResponse>): QueryEntityVerifiedResponse;
};
export declare const QueryEntityListRequest: {
    encode(message: QueryEntityListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListRequest;
    fromJSON(object: any): QueryEntityListRequest;
    toJSON(message: QueryEntityListRequest): unknown;
    fromPartial(object: Partial<QueryEntityListRequest>): QueryEntityListRequest;
};
export declare const QueryEntityListResponse: {
    encode(message: QueryEntityListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListResponse;
    fromJSON(object: any): QueryEntityListResponse;
    toJSON(message: QueryEntityListResponse): unknown;
    fromPartial(object: Partial<QueryEntityListResponse>): QueryEntityListResponse;
};
