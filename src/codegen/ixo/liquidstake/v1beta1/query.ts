//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ModuleParams, ModuleParamsSDKType, Pool, PoolSDKType, LiquidValidatorState, LiquidValidatorStateSDKType, NetAmountState, NetAmountStateSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryModuleParamsRequest {}
export interface QueryModuleParamsRequestSDKType {}
export interface QueryModuleParamsResponse {
  moduleParams?: ModuleParams;
}
export interface QueryModuleParamsResponseSDKType {
  module_params?: ModuleParamsSDKType;
}
export interface QueryPoolRequest {
  poolId: string;
}
export interface QueryPoolRequestSDKType {
  pool_id: string;
}
export interface QueryPoolResponse {
  pool?: Pool;
}
export interface QueryPoolResponseSDKType {
  pool?: PoolSDKType;
}
export interface QueryPoolsRequest {
  pagination?: PageRequest;
}
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: Pool[];
  pagination?: PageResponse;
}
export interface QueryPoolsResponseSDKType {
  pools: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryLiquidValidatorsRequest {
  poolId: string;
}
export interface QueryLiquidValidatorsRequestSDKType {
  pool_id: string;
}
export interface QueryLiquidValidatorsResponse {
  liquidValidators: LiquidValidatorState[];
}
export interface QueryLiquidValidatorsResponseSDKType {
  liquid_validators: LiquidValidatorStateSDKType[];
}
export interface QueryStatesRequest {
  poolId: string;
}
export interface QueryStatesRequestSDKType {
  pool_id: string;
}
export interface QueryStatesResponse {
  netAmountState?: NetAmountState;
}
export interface QueryStatesResponseSDKType {
  net_amount_state?: NetAmountStateSDKType;
}
function createBaseQueryModuleParamsRequest(): QueryModuleParamsRequest {
  return {};
}
export const QueryModuleParamsRequest = {
  encode(_: QueryModuleParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryModuleParamsRequest {
    return {};
  },
  toJSON(_: QueryModuleParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryModuleParamsRequest>): QueryModuleParamsRequest {
    const message = createBaseQueryModuleParamsRequest();
    return message;
  }
};
function createBaseQueryModuleParamsResponse(): QueryModuleParamsResponse {
  return {
    moduleParams: undefined
  };
}
export const QueryModuleParamsResponse = {
  encode(message: QueryModuleParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleParams !== undefined) {
      ModuleParams.encode(message.moduleParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleParams = ModuleParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleParamsResponse {
    return {
      moduleParams: isSet(object.moduleParams) ? ModuleParams.fromJSON(object.moduleParams) : undefined
    };
  },
  toJSON(message: QueryModuleParamsResponse): unknown {
    const obj: any = {};
    message.moduleParams !== undefined && (obj.moduleParams = message.moduleParams ? ModuleParams.toJSON(message.moduleParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryModuleParamsResponse>): QueryModuleParamsResponse {
    const message = createBaseQueryModuleParamsResponse();
    message.moduleParams = object.moduleParams !== undefined && object.moduleParams !== null ? ModuleParams.fromPartial(object.moduleParams) : undefined;
    return message;
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: ""
  };
}
export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryLiquidValidatorsRequest(): QueryLiquidValidatorsRequest {
  return {
    poolId: ""
  };
}
export const QueryLiquidValidatorsRequest = {
  encode(message: QueryLiquidValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorsRequest {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: QueryLiquidValidatorsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorsRequest>): QueryLiquidValidatorsRequest {
    const message = createBaseQueryLiquidValidatorsRequest();
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseQueryLiquidValidatorsResponse(): QueryLiquidValidatorsResponse {
  return {
    liquidValidators: []
  };
}
export const QueryLiquidValidatorsResponse = {
  encode(message: QueryLiquidValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidValidators) {
      LiquidValidatorState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidators.push(LiquidValidatorState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorsResponse {
    return {
      liquidValidators: Array.isArray(object?.liquidValidators) ? object.liquidValidators.map((e: any) => LiquidValidatorState.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryLiquidValidatorsResponse): unknown {
    const obj: any = {};
    if (message.liquidValidators) {
      obj.liquidValidators = message.liquidValidators.map(e => e ? LiquidValidatorState.toJSON(e) : undefined);
    } else {
      obj.liquidValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorsResponse>): QueryLiquidValidatorsResponse {
    const message = createBaseQueryLiquidValidatorsResponse();
    message.liquidValidators = object.liquidValidators?.map(e => LiquidValidatorState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryStatesRequest(): QueryStatesRequest {
  return {
    poolId: ""
  };
}
export const QueryStatesRequest = {
  encode(message: QueryStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStatesRequest {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: QueryStatesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<QueryStatesRequest>): QueryStatesRequest {
    const message = createBaseQueryStatesRequest();
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseQueryStatesResponse(): QueryStatesResponse {
  return {
    netAmountState: undefined
  };
}
export const QueryStatesResponse = {
  encode(message: QueryStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.netAmountState !== undefined) {
      NetAmountState.encode(message.netAmountState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.netAmountState = NetAmountState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStatesResponse {
    return {
      netAmountState: isSet(object.netAmountState) ? NetAmountState.fromJSON(object.netAmountState) : undefined
    };
  },
  toJSON(message: QueryStatesResponse): unknown {
    const obj: any = {};
    message.netAmountState !== undefined && (obj.netAmountState = message.netAmountState ? NetAmountState.toJSON(message.netAmountState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryStatesResponse>): QueryStatesResponse {
    const message = createBaseQueryStatesResponse();
    message.netAmountState = object.netAmountState !== undefined && object.netAmountState !== null ? NetAmountState.fromPartial(object.netAmountState) : undefined;
    return message;
  }
};