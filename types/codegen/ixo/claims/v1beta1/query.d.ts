import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DisputeTargetRole, Params, ParamsSDKType, Collection, CollectionSDKType, Claim, ClaimSDKType, Dispute, DisputeSDKType, Intent, IntentSDKType, MemberBudget, MemberBudgetSDKType, AgentDepositBalance, AgentDepositBalanceSDKType } from "./claims";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryCollectionRequest {
    id: string;
}
export interface QueryCollectionRequestSDKType {
    id: string;
}
export interface QueryCollectionResponse {
    collection?: Collection;
}
export interface QueryCollectionResponseSDKType {
    collection?: CollectionSDKType;
}
export interface QueryCollectionListRequest {
    pagination?: PageRequest;
}
export interface QueryCollectionListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryCollectionListResponse {
    collections: Collection[];
    pagination?: PageResponse;
}
export interface QueryCollectionListResponseSDKType {
    collections: CollectionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryClaimRequest {
    id: string;
}
export interface QueryClaimRequestSDKType {
    id: string;
}
export interface QueryClaimResponse {
    claim?: Claim;
}
export interface QueryClaimResponseSDKType {
    claim?: ClaimSDKType;
}
export interface QueryClaimListRequest {
    pagination?: PageRequest;
}
export interface QueryClaimListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryClaimListResponse {
    claims: Claim[];
    pagination?: PageResponse;
}
export interface QueryClaimListResponseSDKType {
    claims: ClaimSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryDisputeRequest {
    proof: string;
}
export interface QueryDisputeRequestSDKType {
    proof: string;
}
export interface QueryDisputeResponse {
    dispute?: Dispute;
}
export interface QueryDisputeResponseSDKType {
    dispute?: DisputeSDKType;
}
export interface QueryDisputeListRequest {
    pagination?: PageRequest;
}
export interface QueryDisputeListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryDisputeListResponse {
    disputes: Dispute[];
    pagination?: PageResponse;
}
export interface QueryDisputeListResponseSDKType {
    disputes: DisputeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryIntentRequest {
    id: string;
    agentAddress: string;
    collectionId: string;
}
export interface QueryIntentRequestSDKType {
    id: string;
    agentAddress: string;
    collectionId: string;
}
export interface QueryIntentResponse {
    intent?: Intent;
}
export interface QueryIntentResponseSDKType {
    intent?: IntentSDKType;
}
export interface QueryIntentListRequest {
    pagination?: PageRequest;
}
export interface QueryIntentListRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryIntentListResponse {
    intents: Intent[];
    pagination?: PageResponse;
}
export interface QueryIntentListResponseSDKType {
    intents: IntentSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryCollectionMemberRequest {
    collectionId: string;
    memberAddress: string;
}
export interface QueryCollectionMemberRequestSDKType {
    collectionId: string;
    memberAddress: string;
}
export interface QueryCollectionMemberResponse {
    memberBudget?: MemberBudget;
}
export interface QueryCollectionMemberResponseSDKType {
    member_budget?: MemberBudgetSDKType;
}
export interface QueryCollectionMemberListRequest {
    collectionId: string;
    pagination?: PageRequest;
}
export interface QueryCollectionMemberListRequestSDKType {
    collectionId: string;
    pagination?: PageRequestSDKType;
}
export interface QueryCollectionMemberListResponse {
    memberBudgets: MemberBudget[];
    pagination?: PageResponse;
}
export interface QueryCollectionMemberListResponseSDKType {
    member_budgets: MemberBudgetSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryDisputeBySubjectRequest {
    subjectId: string;
    targetRole: DisputeTargetRole;
}
export interface QueryDisputeBySubjectRequestSDKType {
    subjectId: string;
    targetRole: DisputeTargetRole;
}
export interface QueryDisputeBySubjectResponse {
    dispute?: Dispute;
}
export interface QueryDisputeBySubjectResponseSDKType {
    dispute?: DisputeSDKType;
}
export interface QueryDisputeListForSubjectRequest {
    subjectId: string;
}
export interface QueryDisputeListForSubjectRequestSDKType {
    subjectId: string;
}
export interface QueryDisputeListForSubjectResponse {
    disputes: Dispute[];
}
export interface QueryDisputeListForSubjectResponseSDKType {
    disputes: DisputeSDKType[];
}
export interface QueryAgentDepositBalanceRequest {
    collectionId: string;
    agentAddress: string;
}
export interface QueryAgentDepositBalanceRequestSDKType {
    collectionId: string;
    agentAddress: string;
}
export interface QueryAgentDepositBalanceResponse {
    balance?: AgentDepositBalance;
}
export interface QueryAgentDepositBalanceResponseSDKType {
    balance?: AgentDepositBalanceSDKType;
}
export interface QueryAgentDepositBalanceListRequest {
    collectionId: string;
    pagination?: PageRequest;
}
export interface QueryAgentDepositBalanceListRequestSDKType {
    collectionId: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAgentDepositBalanceListResponse {
    balances: AgentDepositBalance[];
    pagination?: PageResponse;
}
export interface QueryAgentDepositBalanceListResponseSDKType {
    balances: AgentDepositBalanceSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCollectionRequest: {
    encode(message: QueryCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest;
    fromJSON(object: any): QueryCollectionRequest;
    toJSON(message: QueryCollectionRequest): unknown;
    fromPartial(object: Partial<QueryCollectionRequest>): QueryCollectionRequest;
};
export declare const QueryCollectionResponse: {
    encode(message: QueryCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse;
    fromJSON(object: any): QueryCollectionResponse;
    toJSON(message: QueryCollectionResponse): unknown;
    fromPartial(object: Partial<QueryCollectionResponse>): QueryCollectionResponse;
};
export declare const QueryCollectionListRequest: {
    encode(message: QueryCollectionListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionListRequest;
    fromJSON(object: any): QueryCollectionListRequest;
    toJSON(message: QueryCollectionListRequest): unknown;
    fromPartial(object: Partial<QueryCollectionListRequest>): QueryCollectionListRequest;
};
export declare const QueryCollectionListResponse: {
    encode(message: QueryCollectionListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionListResponse;
    fromJSON(object: any): QueryCollectionListResponse;
    toJSON(message: QueryCollectionListResponse): unknown;
    fromPartial(object: Partial<QueryCollectionListResponse>): QueryCollectionListResponse;
};
export declare const QueryClaimRequest: {
    encode(message: QueryClaimRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRequest;
    fromJSON(object: any): QueryClaimRequest;
    toJSON(message: QueryClaimRequest): unknown;
    fromPartial(object: Partial<QueryClaimRequest>): QueryClaimRequest;
};
export declare const QueryClaimResponse: {
    encode(message: QueryClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimResponse;
    fromJSON(object: any): QueryClaimResponse;
    toJSON(message: QueryClaimResponse): unknown;
    fromPartial(object: Partial<QueryClaimResponse>): QueryClaimResponse;
};
export declare const QueryClaimListRequest: {
    encode(message: QueryClaimListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimListRequest;
    fromJSON(object: any): QueryClaimListRequest;
    toJSON(message: QueryClaimListRequest): unknown;
    fromPartial(object: Partial<QueryClaimListRequest>): QueryClaimListRequest;
};
export declare const QueryClaimListResponse: {
    encode(message: QueryClaimListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimListResponse;
    fromJSON(object: any): QueryClaimListResponse;
    toJSON(message: QueryClaimListResponse): unknown;
    fromPartial(object: Partial<QueryClaimListResponse>): QueryClaimListResponse;
};
export declare const QueryDisputeRequest: {
    encode(message: QueryDisputeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeRequest;
    fromJSON(object: any): QueryDisputeRequest;
    toJSON(message: QueryDisputeRequest): unknown;
    fromPartial(object: Partial<QueryDisputeRequest>): QueryDisputeRequest;
};
export declare const QueryDisputeResponse: {
    encode(message: QueryDisputeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeResponse;
    fromJSON(object: any): QueryDisputeResponse;
    toJSON(message: QueryDisputeResponse): unknown;
    fromPartial(object: Partial<QueryDisputeResponse>): QueryDisputeResponse;
};
export declare const QueryDisputeListRequest: {
    encode(message: QueryDisputeListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListRequest;
    fromJSON(object: any): QueryDisputeListRequest;
    toJSON(message: QueryDisputeListRequest): unknown;
    fromPartial(object: Partial<QueryDisputeListRequest>): QueryDisputeListRequest;
};
export declare const QueryDisputeListResponse: {
    encode(message: QueryDisputeListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListResponse;
    fromJSON(object: any): QueryDisputeListResponse;
    toJSON(message: QueryDisputeListResponse): unknown;
    fromPartial(object: Partial<QueryDisputeListResponse>): QueryDisputeListResponse;
};
export declare const QueryIntentRequest: {
    encode(message: QueryIntentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentRequest;
    fromJSON(object: any): QueryIntentRequest;
    toJSON(message: QueryIntentRequest): unknown;
    fromPartial(object: Partial<QueryIntentRequest>): QueryIntentRequest;
};
export declare const QueryIntentResponse: {
    encode(message: QueryIntentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentResponse;
    fromJSON(object: any): QueryIntentResponse;
    toJSON(message: QueryIntentResponse): unknown;
    fromPartial(object: Partial<QueryIntentResponse>): QueryIntentResponse;
};
export declare const QueryIntentListRequest: {
    encode(message: QueryIntentListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentListRequest;
    fromJSON(object: any): QueryIntentListRequest;
    toJSON(message: QueryIntentListRequest): unknown;
    fromPartial(object: Partial<QueryIntentListRequest>): QueryIntentListRequest;
};
export declare const QueryIntentListResponse: {
    encode(message: QueryIntentListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentListResponse;
    fromJSON(object: any): QueryIntentListResponse;
    toJSON(message: QueryIntentListResponse): unknown;
    fromPartial(object: Partial<QueryIntentListResponse>): QueryIntentListResponse;
};
export declare const QueryCollectionMemberRequest: {
    encode(message: QueryCollectionMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberRequest;
    fromJSON(object: any): QueryCollectionMemberRequest;
    toJSON(message: QueryCollectionMemberRequest): unknown;
    fromPartial(object: Partial<QueryCollectionMemberRequest>): QueryCollectionMemberRequest;
};
export declare const QueryCollectionMemberResponse: {
    encode(message: QueryCollectionMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberResponse;
    fromJSON(object: any): QueryCollectionMemberResponse;
    toJSON(message: QueryCollectionMemberResponse): unknown;
    fromPartial(object: Partial<QueryCollectionMemberResponse>): QueryCollectionMemberResponse;
};
export declare const QueryCollectionMemberListRequest: {
    encode(message: QueryCollectionMemberListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberListRequest;
    fromJSON(object: any): QueryCollectionMemberListRequest;
    toJSON(message: QueryCollectionMemberListRequest): unknown;
    fromPartial(object: Partial<QueryCollectionMemberListRequest>): QueryCollectionMemberListRequest;
};
export declare const QueryCollectionMemberListResponse: {
    encode(message: QueryCollectionMemberListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberListResponse;
    fromJSON(object: any): QueryCollectionMemberListResponse;
    toJSON(message: QueryCollectionMemberListResponse): unknown;
    fromPartial(object: Partial<QueryCollectionMemberListResponse>): QueryCollectionMemberListResponse;
};
export declare const QueryDisputeBySubjectRequest: {
    encode(message: QueryDisputeBySubjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeBySubjectRequest;
    fromJSON(object: any): QueryDisputeBySubjectRequest;
    toJSON(message: QueryDisputeBySubjectRequest): unknown;
    fromPartial(object: Partial<QueryDisputeBySubjectRequest>): QueryDisputeBySubjectRequest;
};
export declare const QueryDisputeBySubjectResponse: {
    encode(message: QueryDisputeBySubjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeBySubjectResponse;
    fromJSON(object: any): QueryDisputeBySubjectResponse;
    toJSON(message: QueryDisputeBySubjectResponse): unknown;
    fromPartial(object: Partial<QueryDisputeBySubjectResponse>): QueryDisputeBySubjectResponse;
};
export declare const QueryDisputeListForSubjectRequest: {
    encode(message: QueryDisputeListForSubjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListForSubjectRequest;
    fromJSON(object: any): QueryDisputeListForSubjectRequest;
    toJSON(message: QueryDisputeListForSubjectRequest): unknown;
    fromPartial(object: Partial<QueryDisputeListForSubjectRequest>): QueryDisputeListForSubjectRequest;
};
export declare const QueryDisputeListForSubjectResponse: {
    encode(message: QueryDisputeListForSubjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListForSubjectResponse;
    fromJSON(object: any): QueryDisputeListForSubjectResponse;
    toJSON(message: QueryDisputeListForSubjectResponse): unknown;
    fromPartial(object: Partial<QueryDisputeListForSubjectResponse>): QueryDisputeListForSubjectResponse;
};
export declare const QueryAgentDepositBalanceRequest: {
    encode(message: QueryAgentDepositBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceRequest;
    fromJSON(object: any): QueryAgentDepositBalanceRequest;
    toJSON(message: QueryAgentDepositBalanceRequest): unknown;
    fromPartial(object: Partial<QueryAgentDepositBalanceRequest>): QueryAgentDepositBalanceRequest;
};
export declare const QueryAgentDepositBalanceResponse: {
    encode(message: QueryAgentDepositBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceResponse;
    fromJSON(object: any): QueryAgentDepositBalanceResponse;
    toJSON(message: QueryAgentDepositBalanceResponse): unknown;
    fromPartial(object: Partial<QueryAgentDepositBalanceResponse>): QueryAgentDepositBalanceResponse;
};
export declare const QueryAgentDepositBalanceListRequest: {
    encode(message: QueryAgentDepositBalanceListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceListRequest;
    fromJSON(object: any): QueryAgentDepositBalanceListRequest;
    toJSON(message: QueryAgentDepositBalanceListRequest): unknown;
    fromPartial(object: Partial<QueryAgentDepositBalanceListRequest>): QueryAgentDepositBalanceListRequest;
};
export declare const QueryAgentDepositBalanceListResponse: {
    encode(message: QueryAgentDepositBalanceListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceListResponse;
    fromJSON(object: any): QueryAgentDepositBalanceListResponse;
    toJSON(message: QueryAgentDepositBalanceListResponse): unknown;
    fromPartial(object: Partial<QueryAgentDepositBalanceListResponse>): QueryAgentDepositBalanceListResponse;
};
