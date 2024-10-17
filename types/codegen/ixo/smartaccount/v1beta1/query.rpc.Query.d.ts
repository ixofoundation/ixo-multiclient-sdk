import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, GetAuthenticatorRequest, GetAuthenticatorResponse, GetAuthenticatorsRequest, GetAuthenticatorsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
};
