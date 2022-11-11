import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryIidDocumentsRequest, QueryIidDocumentsResponse, QueryIidDocumentRequest, QueryIidDocumentResponse, QueryIidMetaDataRequest, QueryIidMetaDataResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** IidDocuments queries all iid documents that match the given status. */
    iidDocuments(request: QueryIidDocumentsRequest): Promise<QueryIidDocumentsResponse>;
    /** IidDocument queries a iid documents with an id. */
    iidDocument(request: QueryIidDocumentRequest): Promise<QueryIidDocumentResponse>;
    /** MetaData queries a iid documents with an id. */
    metaData(request: QueryIidMetaDataRequest): Promise<QueryIidMetaDataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    iidDocuments(request: QueryIidDocumentsRequest): Promise<QueryIidDocumentsResponse>;
    iidDocument(request: QueryIidDocumentRequest): Promise<QueryIidDocumentResponse>;
    metaData(request: QueryIidMetaDataRequest): Promise<QueryIidMetaDataResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    iidDocuments(request: QueryIidDocumentsRequest): Promise<QueryIidDocumentsResponse>;
    iidDocument(request: QueryIidDocumentRequest): Promise<QueryIidDocumentResponse>;
    metaData(request: QueryIidMetaDataRequest): Promise<QueryIidMetaDataResponse>;
};
