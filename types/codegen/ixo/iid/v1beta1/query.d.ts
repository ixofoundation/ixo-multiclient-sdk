import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { IidDocument, IidDocumentSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
export interface QueryIidDocumentsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryIidDocumentsRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
export interface QueryIidDocumentsResponse {
    iidDocuments: IidDocument[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryIidDocumentsResponseSDKType {
    iidDocuments: IidDocumentSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
export interface QueryIidDocumentRequest {
    /** did id of iid document querying */
    id: string;
}
export interface QueryIidDocumentRequestSDKType {
    /** did id of iid document querying */
    id: string;
}
export interface QueryIidDocumentResponse {
    iidDocument?: IidDocument;
}
export interface QueryIidDocumentResponseSDKType {
    iidDocument?: IidDocumentSDKType;
}
export declare const QueryIidDocumentsRequest: {
    encode(message: QueryIidDocumentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentsRequest;
    fromJSON(object: any): QueryIidDocumentsRequest;
    toJSON(message: QueryIidDocumentsRequest): unknown;
    fromPartial(object: Partial<QueryIidDocumentsRequest>): QueryIidDocumentsRequest;
};
export declare const QueryIidDocumentsResponse: {
    encode(message: QueryIidDocumentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentsResponse;
    fromJSON(object: any): QueryIidDocumentsResponse;
    toJSON(message: QueryIidDocumentsResponse): unknown;
    fromPartial(object: Partial<QueryIidDocumentsResponse>): QueryIidDocumentsResponse;
};
export declare const QueryIidDocumentRequest: {
    encode(message: QueryIidDocumentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentRequest;
    fromJSON(object: any): QueryIidDocumentRequest;
    toJSON(message: QueryIidDocumentRequest): unknown;
    fromPartial(object: Partial<QueryIidDocumentRequest>): QueryIidDocumentRequest;
};
export declare const QueryIidDocumentResponse: {
    encode(message: QueryIidDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentResponse;
    fromJSON(object: any): QueryIidDocumentResponse;
    toJSON(message: QueryIidDocumentResponse): unknown;
    fromPartial(object: Partial<QueryIidDocumentResponse>): QueryIidDocumentResponse;
};
