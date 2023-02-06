import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEntityRequest, QueryEntityResponse, QueryEntityMetadataRequest, QueryEntityMetadataResponse, QueryEntityIidDocumentRequest, QueryEntityIidDocumentResponse, QueryEntityVerifiedRequest, QueryEntityVerifiedResponse, QueryEntityListRequest, QueryEntityListResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    entity(request: QueryEntityRequest): Promise<QueryEntityResponse>;
    entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse>;
    entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse>;
    entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse>;
    entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    entity(request: QueryEntityRequest): Promise<QueryEntityResponse>;
    entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse>;
    entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse>;
    entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse>;
    entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    entity(request: QueryEntityRequest): Promise<QueryEntityResponse>;
    entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse>;
    entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse>;
    entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse>;
    entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse>;
};
