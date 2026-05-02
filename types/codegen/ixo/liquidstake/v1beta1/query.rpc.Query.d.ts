import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryModuleParamsRequest, QueryModuleParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolsRequest, QueryPoolsResponse, QueryLiquidValidatorsRequest, QueryLiquidValidatorsResponse, QueryStatesRequest, QueryStatesResponse } from "./query";
/** Query defines the gRPC query service for the liquidstake module. */
export interface Query {
    /**
     * ModuleParams returns the global, module-wide parameters (minimum stake
     * amount and global pause flag).
     */
    moduleParams(request?: QueryModuleParamsRequest): Promise<QueryModuleParamsResponse>;
    /** Pool returns the configuration of a single pool by pool_id. */
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Pools returns every registered pool's configuration, paginated. */
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /**
     * LiquidValidators returns liquid validators (with state) for a single
     * pool.
     */
    liquidValidators(request: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
    /**
     * States returns the NetAmountState (rates, supplies, balances) for a
     * single pool.
     */
    states(request: QueryStatesRequest): Promise<QueryStatesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleParams(request?: QueryModuleParamsRequest): Promise<QueryModuleParamsResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    liquidValidators(request: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
    states(request: QueryStatesRequest): Promise<QueryStatesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleParams(request?: QueryModuleParamsRequest): Promise<QueryModuleParamsResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    liquidValidators(request: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
    states(request: QueryStatesRequest): Promise<QueryStatesResponse>;
};
