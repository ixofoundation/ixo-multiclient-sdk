import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTokenListRequest, QueryTokenListResponse, QueryTokenDocRequest, QueryTokenDocResponse, QueryTokenMetadataRequest, QueryTokenMetadataResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  tokenList(request: QueryTokenListRequest): Promise<QueryTokenListResponse>;
  tokenDoc(request: QueryTokenDocRequest): Promise<QueryTokenDocResponse>;
  tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenList = this.tokenList.bind(this);
    this.tokenDoc = this.tokenDoc.bind(this);
    this.tokenMetadata = this.tokenMetadata.bind(this);
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

  tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse> {
    const data = QueryTokenMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Query", "TokenMetadata", data);
    return promise.then(data => QueryTokenMetadataResponse.decode(new _m0.Reader(data)));
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

    tokenMetadata(request: QueryTokenMetadataRequest): Promise<QueryTokenMetadataResponse> {
      return queryService.tokenMetadata(request);
    }

  };
};