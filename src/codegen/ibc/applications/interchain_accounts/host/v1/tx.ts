//@ts-nocheck
import { Params, ParamsSDKType, QueryRequest, QueryRequestSDKType } from "./host";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParams {
  /** signer address */
  signer: string;
  /**
   * params defines the 27-interchain-accounts/host parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsSDKType {
  signer: string;
  params?: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponse {}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
  /** signer address */
  signer: string;
  /** requests defines the module safe queries to execute. */
  requests: QueryRequest[];
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeSDKType {
  signer: string;
  requests: QueryRequestSDKType[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
  /** height at which the responses were queried */
  height: Long;
  /** protobuf encoded responses for each query */
  responses: Uint8Array[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseSDKType {
  height: Long;
  responses: Uint8Array[];
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgModuleQuerySafe(): MsgModuleQuerySafe {
  return {
    signer: "",
    requests: []
  };
}
export const MsgModuleQuerySafe = {
  encode(message: MsgModuleQuerySafe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.requests) {
      QueryRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleQuerySafe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.requests.push(QueryRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgModuleQuerySafe {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => QueryRequest.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgModuleQuerySafe): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? QueryRequest.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgModuleQuerySafe>): MsgModuleQuerySafe {
    const message = createBaseMsgModuleQuerySafe();
    message.signer = object.signer ?? "";
    message.requests = object.requests?.map(e => QueryRequest.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgModuleQuerySafeResponse(): MsgModuleQuerySafeResponse {
  return {
    height: Long.UZERO,
    responses: []
  };
}
export const MsgModuleQuerySafeResponse = {
  encode(message: MsgModuleQuerySafeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.responses) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleQuerySafeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;
        case 2:
          message.responses.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgModuleQuerySafeResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      responses: Array.isArray(object?.responses) ? object.responses.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: MsgModuleQuerySafeResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    if (message.responses) {
      obj.responses = message.responses.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.responses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgModuleQuerySafeResponse>): MsgModuleQuerySafeResponse {
    const message = createBaseMsgModuleQuerySafeResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.responses = object.responses?.map(e => e) || [];
    return message;
  }
};