import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryTokenListRequest, QueryTokenListResponse, QueryTokenDocRequest, QueryTokenDocResponse, QueryTokenMetadataRequest, QueryTokenMetadataResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
    tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
    tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
    tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse>;
};
