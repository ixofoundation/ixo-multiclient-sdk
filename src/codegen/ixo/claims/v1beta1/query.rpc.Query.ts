//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.collection = this.collection.bind(this);
    this.collectionList = this.collectionList.bind(this);
    this.claim = this.claim.bind(this);
    this.claimList = this.claimList.bind(this);
    this.dispute = this.dispute.bind(this);
    this.disputeList = this.disputeList.bind(this);
    this.intent = this.intent.bind(this);
    this.intentList = this.intentList.bind(this);
    this.collectionMember = this.collectionMember.bind(this);
    this.collectionMemberList = this.collectionMemberList.bind(this);
    this.disputeBySubject = this.disputeBySubject.bind(this);
    this.disputeListForSubject = this.disputeListForSubject.bind(this);
    this.agentDepositBalance = this.agentDepositBalance.bind(this);
    this.agentDepositBalanceList = this.agentDepositBalanceList.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "Collection", data);
    return promise.then(data => QueryCollectionResponse.decode(new _m0.Reader(data)));
  }
  collectionList(request: QueryCollectionListRequest = {
    pagination: undefined
  }): Promise<QueryCollectionListResponse> {
    const data = QueryCollectionListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "CollectionList", data);
    return promise.then(data => QueryCollectionListResponse.decode(new _m0.Reader(data)));
  }
  claim(request: QueryClaimRequest): Promise<QueryClaimResponse> {
    const data = QueryClaimRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "Claim", data);
    return promise.then(data => QueryClaimResponse.decode(new _m0.Reader(data)));
  }
  claimList(request: QueryClaimListRequest = {
    pagination: undefined
  }): Promise<QueryClaimListResponse> {
    const data = QueryClaimListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "ClaimList", data);
    return promise.then(data => QueryClaimListResponse.decode(new _m0.Reader(data)));
  }
  dispute(request: QueryDisputeRequest): Promise<QueryDisputeResponse> {
    const data = QueryDisputeRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "Dispute", data);
    return promise.then(data => QueryDisputeResponse.decode(new _m0.Reader(data)));
  }
  disputeList(request: QueryDisputeListRequest = {
    pagination: undefined
  }): Promise<QueryDisputeListResponse> {
    const data = QueryDisputeListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "DisputeList", data);
    return promise.then(data => QueryDisputeListResponse.decode(new _m0.Reader(data)));
  }
  intent(request: QueryIntentRequest): Promise<QueryIntentResponse> {
    const data = QueryIntentRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "Intent", data);
    return promise.then(data => QueryIntentResponse.decode(new _m0.Reader(data)));
  }
  intentList(request: QueryIntentListRequest = {
    pagination: undefined
  }): Promise<QueryIntentListResponse> {
    const data = QueryIntentListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "IntentList", data);
    return promise.then(data => QueryIntentListResponse.decode(new _m0.Reader(data)));
  }
  collectionMember(request: QueryCollectionMemberRequest): Promise<QueryCollectionMemberResponse> {
    const data = QueryCollectionMemberRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "CollectionMember", data);
    return promise.then(data => QueryCollectionMemberResponse.decode(new _m0.Reader(data)));
  }
  collectionMemberList(request: QueryCollectionMemberListRequest): Promise<QueryCollectionMemberListResponse> {
    const data = QueryCollectionMemberListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "CollectionMemberList", data);
    return promise.then(data => QueryCollectionMemberListResponse.decode(new _m0.Reader(data)));
  }
  disputeBySubject(request: QueryDisputeBySubjectRequest): Promise<QueryDisputeBySubjectResponse> {
    const data = QueryDisputeBySubjectRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "DisputeBySubject", data);
    return promise.then(data => QueryDisputeBySubjectResponse.decode(new _m0.Reader(data)));
  }
  disputeListForSubject(request: QueryDisputeListForSubjectRequest): Promise<QueryDisputeListForSubjectResponse> {
    const data = QueryDisputeListForSubjectRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "DisputeListForSubject", data);
    return promise.then(data => QueryDisputeListForSubjectResponse.decode(new _m0.Reader(data)));
  }
  agentDepositBalance(request: QueryAgentDepositBalanceRequest): Promise<QueryAgentDepositBalanceResponse> {
    const data = QueryAgentDepositBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "AgentDepositBalance", data);
    return promise.then(data => QueryAgentDepositBalanceResponse.decode(new _m0.Reader(data)));
  }
  agentDepositBalanceList(request: QueryAgentDepositBalanceListRequest): Promise<QueryAgentDepositBalanceListResponse> {
    const data = QueryAgentDepositBalanceListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Query", "AgentDepositBalanceList", data);
    return promise.then(data => QueryAgentDepositBalanceListResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
      return queryService.collection(request);
    },
    collectionList(request?: QueryCollectionListRequest): Promise<QueryCollectionListResponse> {
      return queryService.collectionList(request);
    },
    claim(request: QueryClaimRequest): Promise<QueryClaimResponse> {
      return queryService.claim(request);
    },
    claimList(request?: QueryClaimListRequest): Promise<QueryClaimListResponse> {
      return queryService.claimList(request);
    },
    dispute(request: QueryDisputeRequest): Promise<QueryDisputeResponse> {
      return queryService.dispute(request);
    },
    disputeList(request?: QueryDisputeListRequest): Promise<QueryDisputeListResponse> {
      return queryService.disputeList(request);
    },
    intent(request: QueryIntentRequest): Promise<QueryIntentResponse> {
      return queryService.intent(request);
    },
    intentList(request?: QueryIntentListRequest): Promise<QueryIntentListResponse> {
      return queryService.intentList(request);
    },
    collectionMember(request: QueryCollectionMemberRequest): Promise<QueryCollectionMemberResponse> {
      return queryService.collectionMember(request);
    },
    collectionMemberList(request: QueryCollectionMemberListRequest): Promise<QueryCollectionMemberListResponse> {
      return queryService.collectionMemberList(request);
    },
    disputeBySubject(request: QueryDisputeBySubjectRequest): Promise<QueryDisputeBySubjectResponse> {
      return queryService.disputeBySubject(request);
    },
    disputeListForSubject(request: QueryDisputeListForSubjectRequest): Promise<QueryDisputeListForSubjectResponse> {
      return queryService.disputeListForSubject(request);
    },
    agentDepositBalance(request: QueryAgentDepositBalanceRequest): Promise<QueryAgentDepositBalanceResponse> {
      return queryService.agentDepositBalance(request);
    },
    agentDepositBalanceList(request: QueryAgentDepositBalanceListRequest): Promise<QueryAgentDepositBalanceListResponse> {
      return queryService.agentDepositBalanceList(request);
    }
  };
};