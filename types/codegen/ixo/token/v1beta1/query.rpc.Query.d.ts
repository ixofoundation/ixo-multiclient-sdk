import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTokenMetadataRequest, QueryTokenMetadataResponse, QueryTokenListRequest, QueryTokenListResponse, QueryTokenDocRequest, QueryTokenDocResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse>;
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse>;
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse>;
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
};
