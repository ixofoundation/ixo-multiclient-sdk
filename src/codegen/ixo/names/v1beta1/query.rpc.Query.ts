//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryNamespaceRequest, QueryNamespaceResponse, QueryNamespacesRequest, QueryNamespacesResponse, QueryResolveNameRequest, QueryResolveNameResponse, QueryGetNameRequest, QueryGetNameResponse, QueryNamesByNamespaceRequest, QueryNamesByNamespaceResponse, QueryNamesByOwnerRequest, QueryNamesByOwnerResponse } from "./query";
/** Query defines the names module gRPC query service. */
export interface Query {
  /** Namespace returns a single namespace by its name. */
  namespace(request: QueryNamespaceRequest): Promise<QueryNamespaceResponse>;
  /** Namespaces returns all namespaces. */
  namespaces(request?: QueryNamespacesRequest): Promise<QueryNamespacesResponse>;
  /**
   * ResolveName returns the active NameRecord for (namespace, name). The name
   * is normalized server-side before lookup. Returns not-found if the record
   * is missing or its status is not ACTIVE.
   */
  resolveName(request: QueryResolveNameRequest): Promise<QueryResolveNameResponse>;
  /**
   * GetName returns a NameRecord regardless of status. Useful for moderation
   * and audit tools.
   */
  getName(request: QueryGetNameRequest): Promise<QueryGetNameResponse>;
  /** NamesByNamespace lists records under a namespace (paginated). */
  namesByNamespace(request: QueryNamesByNamespaceRequest): Promise<QueryNamesByNamespaceResponse>;
  /** NamesByOwner lists every name owned by a DID across all namespaces. */
  namesByOwner(request: QueryNamesByOwnerRequest): Promise<QueryNamesByOwnerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.namespace = this.namespace.bind(this);
    this.namespaces = this.namespaces.bind(this);
    this.resolveName = this.resolveName.bind(this);
    this.getName = this.getName.bind(this);
    this.namesByNamespace = this.namesByNamespace.bind(this);
    this.namesByOwner = this.namesByOwner.bind(this);
  }
  namespace(request: QueryNamespaceRequest): Promise<QueryNamespaceResponse> {
    const data = QueryNamespaceRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Query", "Namespace", data);
    return promise.then(data => QueryNamespaceResponse.decode(new _m0.Reader(data)));
  }
  namespaces(request: QueryNamespacesRequest = {
    pagination: undefined
  }): Promise<QueryNamespacesResponse> {
    const data = QueryNamespacesRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Query", "Namespaces", data);
    return promise.then(data => QueryNamespacesResponse.decode(new _m0.Reader(data)));
  }
  resolveName(request: QueryResolveNameRequest): Promise<QueryResolveNameResponse> {
    const data = QueryResolveNameRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Query", "ResolveName", data);
    return promise.then(data => QueryResolveNameResponse.decode(new _m0.Reader(data)));
  }
  getName(request: QueryGetNameRequest): Promise<QueryGetNameResponse> {
    const data = QueryGetNameRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Query", "GetName", data);
    return promise.then(data => QueryGetNameResponse.decode(new _m0.Reader(data)));
  }
  namesByNamespace(request: QueryNamesByNamespaceRequest): Promise<QueryNamesByNamespaceResponse> {
    const data = QueryNamesByNamespaceRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Query", "NamesByNamespace", data);
    return promise.then(data => QueryNamesByNamespaceResponse.decode(new _m0.Reader(data)));
  }
  namesByOwner(request: QueryNamesByOwnerRequest): Promise<QueryNamesByOwnerResponse> {
    const data = QueryNamesByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Query", "NamesByOwner", data);
    return promise.then(data => QueryNamesByOwnerResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    namespace(request: QueryNamespaceRequest): Promise<QueryNamespaceResponse> {
      return queryService.namespace(request);
    },
    namespaces(request?: QueryNamespacesRequest): Promise<QueryNamespacesResponse> {
      return queryService.namespaces(request);
    },
    resolveName(request: QueryResolveNameRequest): Promise<QueryResolveNameResponse> {
      return queryService.resolveName(request);
    },
    getName(request: QueryGetNameRequest): Promise<QueryGetNameResponse> {
      return queryService.getName(request);
    },
    namesByNamespace(request: QueryNamesByNamespaceRequest): Promise<QueryNamesByNamespaceResponse> {
      return queryService.namesByNamespace(request);
    },
    namesByOwner(request: QueryNamesByOwnerRequest): Promise<QueryNamesByOwnerResponse> {
      return queryService.namesByOwner(request);
    }
  };
};