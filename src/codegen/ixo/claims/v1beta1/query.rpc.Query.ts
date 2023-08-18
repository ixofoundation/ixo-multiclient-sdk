import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCollectionRequest, QueryCollectionResponse, QueryCollectionListRequest, QueryCollectionListResponse, QueryClaimRequest, QueryClaimResponse, QueryClaimListRequest, QueryClaimListResponse, QueryDisputeRequest, QueryDisputeResponse, QueryDisputeListRequest, QueryDisputeListResponse } from "./query";
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
    }
  };
};