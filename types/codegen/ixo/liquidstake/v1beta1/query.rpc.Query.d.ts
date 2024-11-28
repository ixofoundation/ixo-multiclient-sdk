import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryLiquidValidatorsRequest, QueryLiquidValidatorsResponse, QueryStatesRequest, QueryStatesResponse } from "./query";
/** Query defines the gRPC query service for the liquidstake module. */
export interface Query {
    /** Params returns parameters of the liquidstake module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * LiquidValidators returns liquid validators with states of the liquidstake
     * module.
     */
    liquidValidators(request?: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
    /** States returns states of the liquidstake module. */
    states(request?: QueryStatesRequest): Promise<QueryStatesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    liquidValidators(request?: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
    states(request?: QueryStatesRequest): Promise<QueryStatesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    liquidValidators(request?: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
    states(request?: QueryStatesRequest): Promise<QueryStatesResponse>;
};
