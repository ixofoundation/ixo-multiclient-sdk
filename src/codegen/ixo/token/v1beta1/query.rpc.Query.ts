import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTokenListRequest, QueryTokenListResponse, QueryTokenDocRequest, QueryTokenDocResponse, QueryTokenConfigRequest, QueryTokenConfigResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
  tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
  tokenConfig(request?: QueryTokenConfigRequest): Promise<QueryTokenConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenList = this.tokenList.bind(this);
    this.tokenDoc = this.tokenDoc.bind(this);
    this.tokenConfig = this.tokenConfig.bind(this);
  }

  tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse> {
    const data = QueryTokenListRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Query", "TokenList", data);
    return promise.then(data => QueryTokenListResponse.decode(new _m0.Reader(data)));
  }

  tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse> {
    const data = QueryTokenDocRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Query", "TokenDoc", data);
    return promise.then(data => QueryTokenDocResponse.decode(new _m0.Reader(data)));
  }

  tokenConfig(request: QueryTokenConfigRequest = {}): Promise<QueryTokenConfigResponse> {
    const data = QueryTokenConfigRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Query", "TokenConfig", data);
    return promise.then(data => QueryTokenConfigResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse> {
      return queryService.tokenList(request);
    },

    tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse> {
      return queryService.tokenDoc(request);
    },

    tokenConfig(request?: QueryTokenConfigRequest): Promise<QueryTokenConfigResponse> {
      return queryService.tokenConfig(request);
    }

  };
};