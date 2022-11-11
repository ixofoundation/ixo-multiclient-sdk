import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryTokenListRequest, QueryTokenListResponse, QueryTokenDocRequest, QueryTokenDocResponse, QueryTokenConfigRequest, QueryTokenConfigResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
    tokenConfig(request?: QueryTokenConfigRequest): Promise<QueryTokenConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
    tokenConfig(request?: QueryTokenConfigRequest): Promise<QueryTokenConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
    tokenConfig(request?: QueryTokenConfigRequest): Promise<QueryTokenConfigResponse>;
};
