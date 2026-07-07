import { Rpc } from "../../../helpers";
import type { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    namespace(request: QueryNamespaceRequest): Promise<QueryNamespaceResponse>;
    namespaces(request?: QueryNamespacesRequest): Promise<QueryNamespacesResponse>;
    resolveName(request: QueryResolveNameRequest): Promise<QueryResolveNameResponse>;
    getName(request: QueryGetNameRequest): Promise<QueryGetNameResponse>;
    namesByNamespace(request: QueryNamesByNamespaceRequest): Promise<QueryNamesByNamespaceResponse>;
    namesByOwner(request: QueryNamesByOwnerRequest): Promise<QueryNamesByOwnerResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    namespace(request: QueryNamespaceRequest): Promise<QueryNamespaceResponse>;
    namespaces(request?: QueryNamespacesRequest): Promise<QueryNamespacesResponse>;
    resolveName(request: QueryResolveNameRequest): Promise<QueryResolveNameResponse>;
    getName(request: QueryGetNameRequest): Promise<QueryGetNameResponse>;
    namesByNamespace(request: QueryNamesByNamespaceRequest): Promise<QueryNamesByNamespaceResponse>;
    namesByOwner(request: QueryNamesByOwnerRequest): Promise<QueryNamesByOwnerResponse>;
};
