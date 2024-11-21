//@ts-nocheck
import { Params, ParamsSDKType, LiquidValidatorState, LiquidValidatorStateSDKType, NetAmountState, NetAmountStateSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryLiquidValidatorsRequest {}
export interface QueryLiquidValidatorsRequestSDKType {}
export interface QueryLiquidValidatorsResponse {
  liquidValidators: LiquidValidatorState[];
}
export interface QueryLiquidValidatorsResponseSDKType {
  liquid_validators: LiquidValidatorStateSDKType[];
}
export interface QueryStatesRequest {}
export interface QueryStatesRequestSDKType {}
export interface QueryStatesResponse {
  netAmountState?: NetAmountState;
}
export interface QueryStatesResponseSDKType {
  net_amount_state?: NetAmountStateSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryLiquidValidatorsRequest(): QueryLiquidValidatorsRequest {
  return {};
}
export const QueryLiquidValidatorsRequest = {
  encode(_: QueryLiquidValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsRequest();
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
  fromJSON(_: any): QueryLiquidValidatorsRequest {
    return {};
  },
  toJSON(_: QueryLiquidValidatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryLiquidValidatorsRequest>): QueryLiquidValidatorsRequest {
    const message = createBaseQueryLiquidValidatorsRequest();
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
  return {};
}
export const QueryStatesRequest = {
  encode(_: QueryStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatesRequest();
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
  fromJSON(_: any): QueryStatesRequest {
    return {};
  },
  toJSON(_: QueryStatesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryStatesRequest>): QueryStatesRequest {
    const message = createBaseQueryStatesRequest();
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