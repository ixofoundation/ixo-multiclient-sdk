import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEntityListRequest, QueryEntityListResponse, QueryEntityDocRequest, QueryEntityDocResponse, QueryEntityConfigRequest, QueryEntityConfigResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    entityList(request: QueryEntityListRequest): Promise<QueryEntityListResponse>;
    entityDoc(request: QueryEntityDocRequest): Promise<QueryEntityDocResponse>;
    entityConfig(request?: QueryEntityConfigRequest): Promise<QueryEntityConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    entityList(request: QueryEntityListRequest): Promise<QueryEntityListResponse>;
    entityDoc(request: QueryEntityDocRequest): Promise<QueryEntityDocResponse>;
    entityConfig(request?: QueryEntityConfigRequest): Promise<QueryEntityConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    entityList(request: QueryEntityListRequest): Promise<QueryEntityListResponse>;
    entityDoc(request: QueryEntityDocRequest): Promise<QueryEntityDocResponse>;
    entityConfig(request?: QueryEntityConfigRequest): Promise<QueryEntityConfigResponse>;
};
