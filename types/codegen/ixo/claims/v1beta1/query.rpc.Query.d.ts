import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCollectionRequest, QueryCollectionResponse, QueryCollectionListRequest, QueryCollectionListResponse, QueryClaimRequest, QueryClaimResponse, QueryClaimListRequest, QueryClaimListResponse, QueryDisputeRequest, QueryDisputeResponse, QueryDisputeListRequest, QueryDisputeListResponse, QueryIntentRequest, QueryIntentResponse, QueryIntentListRequest, QueryIntentListResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    collectionList(request?: QueryCollectionListRequest): Promise<QueryCollectionListResponse>;
    claim(request: QueryClaimRequest): Promise<QueryClaimResponse>;
    claimList(request?: QueryClaimListRequest): Promise<QueryClaimListResponse>;
    dispute(request: QueryDisputeRequest): Promise<QueryDisputeResponse>;
    disputeList(request?: QueryDisputeListRequest): Promise<QueryDisputeListResponse>;
    intent(request: QueryIntentRequest): Promise<QueryIntentResponse>;
    intentList(request?: QueryIntentListRequest): Promise<QueryIntentListResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    collectionList(request?: QueryCollectionListRequest): Promise<QueryCollectionListResponse>;
    claim(request: QueryClaimRequest): Promise<QueryClaimResponse>;
    claimList(request?: QueryClaimListRequest): Promise<QueryClaimListResponse>;
    dispute(request: QueryDisputeRequest): Promise<QueryDisputeResponse>;
    disputeList(request?: QueryDisputeListRequest): Promise<QueryDisputeListResponse>;
    intent(request: QueryIntentRequest): Promise<QueryIntentResponse>;
    intentList(request?: QueryIntentListRequest): Promise<QueryIntentListResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    collectionList(request?: QueryCollectionListRequest): Promise<QueryCollectionListResponse>;
    claim(request: QueryClaimRequest): Promise<QueryClaimResponse>;
    claimList(request?: QueryClaimListRequest): Promise<QueryClaimListResponse>;
    dispute(request: QueryDisputeRequest): Promise<QueryDisputeResponse>;
    disputeList(request?: QueryDisputeListRequest): Promise<QueryDisputeListResponse>;
    intent(request: QueryIntentRequest): Promise<QueryIntentResponse>;
    intentList(request?: QueryIntentListRequest): Promise<QueryIntentListResponse>;
};
