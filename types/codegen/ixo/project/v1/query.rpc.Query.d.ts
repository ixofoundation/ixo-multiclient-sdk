import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryProjectDocRequest, QueryProjectDocResponse, QueryProjectAccountsRequest, QueryProjectAccountsResponse, QueryProjectTxRequest, QueryProjectTxResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** ProjectDoc queries info of a specific project. */
    projectDoc(request: QueryProjectDocRequest): Promise<QueryProjectDocResponse>;
    /** ProjectAccounts lists a specific project's accounts. */
    projectAccounts(request: QueryProjectAccountsRequest): Promise<QueryProjectAccountsResponse>;
    /** ProjectTx lists a specific project's transactions. */
    projectTx(request: QueryProjectTxRequest): Promise<QueryProjectTxResponse>;
    /** Params queries the paramaters of x/project module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    projectDoc(request: QueryProjectDocRequest): Promise<QueryProjectDocResponse>;
    projectAccounts(request: QueryProjectAccountsRequest): Promise<QueryProjectAccountsResponse>;
    projectTx(request: QueryProjectTxRequest): Promise<QueryProjectTxResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    projectDoc(request: QueryProjectDocRequest): Promise<QueryProjectDocResponse>;
    projectAccounts(request: QueryProjectAccountsRequest): Promise<QueryProjectAccountsResponse>;
    projectTx(request: QueryProjectTxRequest): Promise<QueryProjectTxResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
