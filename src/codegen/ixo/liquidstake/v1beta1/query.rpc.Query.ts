//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import type { QueryClient } from "@cosmjs/stargate";
import { createProtobufRpcClient } from "../../../protobufRpcClient";
import { QueryModuleParamsRequest, QueryModuleParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolsRequest, QueryPoolsResponse, QueryLiquidValidatorsRequest, QueryLiquidValidatorsResponse, QueryStatesRequest, QueryStatesResponse } from "./query";
/** Query defines the gRPC query service for the liquidstake module. */
export interface Query {
  /**
   * ModuleParams returns the global, module-wide parameters (minimum stake
   * amount and global pause flag).
   */
  moduleParams(request?: QueryModuleParamsRequest): Promise<QueryModuleParamsResponse>;
  /** Pool returns the configuration of a single pool by pool_id. */
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Pools returns every registered pool's configuration, paginated. */
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /**
   * LiquidValidators returns liquid validators (with state) for a single
   * pool.
   */
  liquidValidators(request: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
  /**
   * States returns the NetAmountState (rates, supplies, balances) for a
   * single pool.
   */
  states(request: QueryStatesRequest): Promise<QueryStatesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleParams = this.moduleParams.bind(this);
    this.pool = this.pool.bind(this);
    this.pools = this.pools.bind(this);
    this.liquidValidators = this.liquidValidators.bind(this);
    this.states = this.states.bind(this);
  }
  moduleParams(request: QueryModuleParamsRequest = {}): Promise<QueryModuleParamsResponse> {
    const data = QueryModuleParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Query", "ModuleParams", data);
    return promise.then(data => QueryModuleParamsResponse.decode(new _m0.Reader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new _m0.Reader(data)));
  }
  liquidValidators(request: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse> {
    const data = QueryLiquidValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Query", "LiquidValidators", data);
    return promise.then(data => QueryLiquidValidatorsResponse.decode(new _m0.Reader(data)));
  }
  states(request: QueryStatesRequest): Promise<QueryStatesResponse> {
    const data = QueryStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Query", "States", data);
    return promise.then(data => QueryStatesResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleParams(request?: QueryModuleParamsRequest): Promise<QueryModuleParamsResponse> {
      return queryService.moduleParams(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },
    liquidValidators(request: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse> {
      return queryService.liquidValidators(request);
    },
    states(request: QueryStatesRequest): Promise<QueryStatesResponse> {
      return queryService.states(request);
    }
  };
};