import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCollectionRequest, QueryCollectionResponse, QueryCollectionListRequest, QueryCollectionListResponse, QueryClaimRequest, QueryClaimResponse, QueryClaimListRequest, QueryClaimListResponse, QueryDisputeRequest, QueryDisputeResponse, QueryDisputeListRequest, QueryDisputeListResponse, QueryIntentRequest, QueryIntentResponse, QueryIntentListRequest, QueryIntentListResponse, QueryCollectionMemberRequest, QueryCollectionMemberResponse, QueryCollectionMemberListRequest, QueryCollectionMemberListResponse, QueryDisputeBySubjectRequest, QueryDisputeBySubjectResponse, QueryDisputeListForSubjectRequest, QueryDisputeListForSubjectResponse, QueryAgentDepositBalanceRequest, QueryAgentDepositBalanceResponse, QueryAgentDepositBalanceListRequest, QueryAgentDepositBalanceListResponse } from "./query";
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
    collectionMember(request: QueryCollectionMemberRequest): Promise<QueryCollectionMemberResponse>;
    collectionMemberList(request: QueryCollectionMemberListRequest): Promise<QueryCollectionMemberListResponse>;
    /**
     * DisputeBySubject returns the dispute (if any) for a given subject_id
     * and target_role. Disputes targeting different roles of the same claim
     * are separate records.
     */
    disputeBySubject(request: QueryDisputeBySubjectRequest): Promise<QueryDisputeBySubjectResponse>;
    /**
     * DisputeListForSubject returns all disputes (across all target roles
     * and over all time, regardless of status) for a given subject_id.
     */
    disputeListForSubject(request: QueryDisputeListForSubjectRequest): Promise<QueryDisputeListForSubjectResponse>;
    /**
     * AgentDepositBalance returns a single agent's deposit balance on a
     * collection.
     */
    agentDepositBalance(request: QueryAgentDepositBalanceRequest): Promise<QueryAgentDepositBalanceResponse>;
    /**
     * AgentDepositBalanceList returns all agent deposit balances for a
     * collection.
     */
    agentDepositBalanceList(request: QueryAgentDepositBalanceListRequest): Promise<QueryAgentDepositBalanceListResponse>;
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
    collectionMember(request: QueryCollectionMemberRequest): Promise<QueryCollectionMemberResponse>;
    collectionMemberList(request: QueryCollectionMemberListRequest): Promise<QueryCollectionMemberListResponse>;
    disputeBySubject(request: QueryDisputeBySubjectRequest): Promise<QueryDisputeBySubjectResponse>;
    disputeListForSubject(request: QueryDisputeListForSubjectRequest): Promise<QueryDisputeListForSubjectResponse>;
    agentDepositBalance(request: QueryAgentDepositBalanceRequest): Promise<QueryAgentDepositBalanceResponse>;
    agentDepositBalanceList(request: QueryAgentDepositBalanceListRequest): Promise<QueryAgentDepositBalanceListResponse>;
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
    collectionMember(request: QueryCollectionMemberRequest): Promise<QueryCollectionMemberResponse>;
    collectionMemberList(request: QueryCollectionMemberListRequest): Promise<QueryCollectionMemberListResponse>;
    disputeBySubject(request: QueryDisputeBySubjectRequest): Promise<QueryDisputeBySubjectResponse>;
    disputeListForSubject(request: QueryDisputeListForSubjectRequest): Promise<QueryDisputeListForSubjectResponse>;
    agentDepositBalance(request: QueryAgentDepositBalanceRequest): Promise<QueryAgentDepositBalanceResponse>;
    agentDepositBalanceList(request: QueryAgentDepositBalanceListRequest): Promise<QueryAgentDepositBalanceListResponse>;
};
