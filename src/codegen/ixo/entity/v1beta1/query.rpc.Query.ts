import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryEntityRequest, QueryEntityResponse, QueryEntityMetadataRequest, QueryEntityMetadataResponse, QueryEntityIidDocumentRequest, QueryEntityIidDocumentResponse, QueryEntityVerifiedRequest, QueryEntityVerifiedResponse, QueryEntityListRequest, QueryEntityListResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  entity(request: QueryEntityRequest): Promise<QueryEntityResponse>;
  entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse>;
  entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse>;
  entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse>;
  entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.entity = this.entity.bind(this);
    this.entityMetaData = this.entityMetaData.bind(this);
    this.entityIidDocument = this.entityIidDocument.bind(this);
    this.entityVerified = this.entityVerified.bind(this);
    this.entityList = this.entityList.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  entity(request: QueryEntityRequest): Promise<QueryEntityResponse> {
    const data = QueryEntityRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Query", "Entity", data);
    return promise.then(data => QueryEntityResponse.decode(new _m0.Reader(data)));
  }

  entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse> {
    const data = QueryEntityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Query", "EntityMetaData", data);
    return promise.then(data => QueryEntityMetadataResponse.decode(new _m0.Reader(data)));
  }

  entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse> {
    const data = QueryEntityIidDocumentRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Query", "EntityIidDocument", data);
    return promise.then(data => QueryEntityIidDocumentResponse.decode(new _m0.Reader(data)));
  }

  entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse> {
    const data = QueryEntityVerifiedRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Query", "EntityVerified", data);
    return promise.then(data => QueryEntityVerifiedResponse.decode(new _m0.Reader(data)));
  }

  entityList(request: QueryEntityListRequest = {
    pagination: undefined
  }): Promise<QueryEntityListResponse> {
    const data = QueryEntityListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Query", "EntityList", data);
    return promise.then(data => QueryEntityListResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    entity(request: QueryEntityRequest): Promise<QueryEntityResponse> {
      return queryService.entity(request);
    },

    entityMetaData(request: QueryEntityMetadataRequest): Promise<QueryEntityMetadataResponse> {
      return queryService.entityMetaData(request);
    },

    entityIidDocument(request: QueryEntityIidDocumentRequest): Promise<QueryEntityIidDocumentResponse> {
      return queryService.entityIidDocument(request);
    },

    entityVerified(request: QueryEntityVerifiedRequest): Promise<QueryEntityVerifiedResponse> {
      return queryService.entityVerified(request);
    },

    entityList(request?: QueryEntityListRequest): Promise<QueryEntityListResponse> {
      return queryService.entityList(request);
    }

  };
};