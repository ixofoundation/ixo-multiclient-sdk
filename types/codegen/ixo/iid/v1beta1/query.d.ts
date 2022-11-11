import { IidDocument, IidDocumentSDKType, IidMetadata, IidMetadataSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */
export interface QueryIidDocumentsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
}
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */
export interface QueryIidDocumentsRequestSDKType {
    /** status enables to query for validators matching a given status. */
    status: string;
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */
export interface QueryIidDocumentsResponse {
    /** validators contains all the queried validators. */
    iidDocuments: IidDocument[];
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */
export interface QueryIidDocumentsResponseSDKType {
    /** validators contains all the queried validators. */
    iidDocuments: IidDocumentSDKType[];
}
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */
export interface QueryIidDocumentRequest {
    /** status enables to query for validators matching a given status. */
    id: string;
}
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */
export interface QueryIidDocumentRequestSDKType {
    /** status enables to query for validators matching a given status. */
    id: string;
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */
export interface QueryIidDocumentResponse {
    /** validators contains all the queried validators. */
    iidDocument?: IidDocument;
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */
export interface QueryIidDocumentResponseSDKType {
    /** validators contains all the queried validators. */
    iidDocument?: IidDocumentSDKType;
}
export interface QueryIidMetaDataRequest {
    /** status enables to query for validators matching a given status. */
    id: string;
}
export interface QueryIidMetaDataRequestSDKType {
    /** status enables to query for validators matching a given status. */
    id: string;
}
export interface QueryIidMetaDataResponse {
    /**
     * validators contains all the queried validators.
     * IidDocument iidDocument = 1  [(gogoproto.nullable) = false];
     */
    didMetadata?: IidMetadata;
}
export interface QueryIidMetaDataResponseSDKType {
    /**
     * validators contains all the queried validators.
     * IidDocument iidDocument = 1  [(gogoproto.nullable) = false];
     */
    didMetadata?: IidMetadataSDKType;
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
export declare const QueryIidMetaDataRequest: {
    encode(message: QueryIidMetaDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidMetaDataRequest;
    fromJSON(object: any): QueryIidMetaDataRequest;
    toJSON(message: QueryIidMetaDataRequest): unknown;
    fromPartial(object: Partial<QueryIidMetaDataRequest>): QueryIidMetaDataRequest;
};
export declare const QueryIidMetaDataResponse: {
    encode(message: QueryIidMetaDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidMetaDataResponse;
    fromJSON(object: any): QueryIidMetaDataResponse;
    toJSON(message: QueryIidMetaDataResponse): unknown;
    fromPartial(object: Partial<QueryIidMetaDataResponse>): QueryIidMetaDataResponse;
};
