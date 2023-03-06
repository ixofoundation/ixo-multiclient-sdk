import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryEntityRequest, QueryEntityResponse, QueryEntityMetadataRequest, QueryEntityMetadataResponse, QueryEntityIidDocumentRequest, QueryEntityIidDocumentResponse, QueryEntityVerifiedRequest, QueryEntityVerifiedResponse, QueryEntityListRequest, QueryEntityListResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    entity(request: QueryEntityRequest): Promise<QueryEntityResponse>;
    entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse>;
    entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse>;
    entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse>;
    entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    entity(request: QueryEntityRequest): Promise<QueryEntityResponse>;
    entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse>;
    entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse>;
    entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse>;
    entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    entity(request: QueryEntityRequest): Promise<QueryEntityResponse>;
    entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse>;
    entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse>;
    entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse>;
    entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse>;
};
