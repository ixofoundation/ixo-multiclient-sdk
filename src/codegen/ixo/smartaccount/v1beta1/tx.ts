//@ts-nocheck
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type. */
export interface MsgAddAuthenticator {
  sender: string;
  authenticatorType: string;
  data: Uint8Array;
}
/** MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type. */
export interface MsgAddAuthenticatorSDKType {
  sender: string;
  authenticator_type: string;
  data: Uint8Array;
}
/** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
export interface MsgAddAuthenticatorResponse {
  /** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
  success: boolean;
}
/** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
export interface MsgAddAuthenticatorResponseSDKType {
  success: boolean;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 */
export interface MsgRemoveAuthenticator {
  sender: string;
  id: Long;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 */
export interface MsgRemoveAuthenticatorSDKType {
  sender: string;
  id: Long;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 */
export interface MsgRemoveAuthenticatorResponse {
  /**
   * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
   * type.
   */
  success: boolean;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 */
export interface MsgRemoveAuthenticatorResponseSDKType {
  success: boolean;
}
export interface MsgSetActiveState {
  sender: string;
  active: boolean;
}
export interface MsgSetActiveStateSDKType {
  sender: string;
  active: boolean;
}
export interface MsgSetActiveStateResponse {}
export interface MsgSetActiveStateResponseSDKType {}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 */
export interface TxExtension {
  /**
   * selected_authenticators holds the authenticator_id for the chosen
   * authenticator per message.
   */
  selectedAuthenticators: Long[];
}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 */
export interface TxExtensionSDKType {
  selected_authenticators: Long[];
}
function createBaseMsgAddAuthenticator(): MsgAddAuthenticator {
  return {
    sender: "",
    authenticatorType: "",
    data: new Uint8Array()
  };
}
export const MsgAddAuthenticator = {
  encode(message: MsgAddAuthenticator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.authenticatorType !== "") {
      writer.uint32(18).string(message.authenticatorType);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAuthenticator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAuthenticator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.authenticatorType = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddAuthenticator {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      authenticatorType: isSet(object.authenticatorType) ? String(object.authenticatorType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgAddAuthenticator): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.authenticatorType !== undefined && (obj.authenticatorType = message.authenticatorType);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<MsgAddAuthenticator>): MsgAddAuthenticator {
    const message = createBaseMsgAddAuthenticator();
    message.sender = object.sender ?? "";
    message.authenticatorType = object.authenticatorType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgAddAuthenticatorResponse(): MsgAddAuthenticatorResponse {
  return {
    success: false
  };
}
export const MsgAddAuthenticatorResponse = {
  encode(message: MsgAddAuthenticatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAuthenticatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddAuthenticatorResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgAddAuthenticatorResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: Partial<MsgAddAuthenticatorResponse>): MsgAddAuthenticatorResponse {
    const message = createBaseMsgAddAuthenticatorResponse();
    message.success = object.success ?? false;
    return message;
  }
};
function createBaseMsgRemoveAuthenticator(): MsgRemoveAuthenticator {
  return {
    sender: "",
    id: Long.UZERO
  };
}
export const MsgRemoveAuthenticator = {
  encode(message: MsgRemoveAuthenticator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAuthenticator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAuthenticator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveAuthenticator {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: MsgRemoveAuthenticator): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveAuthenticator>): MsgRemoveAuthenticator {
    const message = createBaseMsgRemoveAuthenticator();
    message.sender = object.sender ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMsgRemoveAuthenticatorResponse(): MsgRemoveAuthenticatorResponse {
  return {
    success: false
  };
}
export const MsgRemoveAuthenticatorResponse = {
  encode(message: MsgRemoveAuthenticatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAuthenticatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveAuthenticatorResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgRemoveAuthenticatorResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveAuthenticatorResponse>): MsgRemoveAuthenticatorResponse {
    const message = createBaseMsgRemoveAuthenticatorResponse();
    message.success = object.success ?? false;
    return message;
  }
};
function createBaseMsgSetActiveState(): MsgSetActiveState {
  return {
    sender: "",
    active: false
  };
}
export const MsgSetActiveState = {
  encode(message: MsgSetActiveState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActiveState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActiveState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetActiveState {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },
  toJSON(message: MsgSetActiveState): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },
  fromPartial(object: Partial<MsgSetActiveState>): MsgSetActiveState {
    const message = createBaseMsgSetActiveState();
    message.sender = object.sender ?? "";
    message.active = object.active ?? false;
    return message;
  }
};
function createBaseMsgSetActiveStateResponse(): MsgSetActiveStateResponse {
  return {};
}
export const MsgSetActiveStateResponse = {
  encode(_: MsgSetActiveStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActiveStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActiveStateResponse();
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
  fromJSON(_: any): MsgSetActiveStateResponse {
    return {};
  },
  toJSON(_: MsgSetActiveStateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetActiveStateResponse>): MsgSetActiveStateResponse {
    const message = createBaseMsgSetActiveStateResponse();
    return message;
  }
};
function createBaseTxExtension(): TxExtension {
  return {
    selectedAuthenticators: []
  };
}
export const TxExtension = {
  encode(message: TxExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.selectedAuthenticators) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.selectedAuthenticators.push((reader.uint64() as Long));
            }
          } else {
            message.selectedAuthenticators.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxExtension {
    return {
      selectedAuthenticators: Array.isArray(object?.selectedAuthenticators) ? object.selectedAuthenticators.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: TxExtension): unknown {
    const obj: any = {};
    if (message.selectedAuthenticators) {
      obj.selectedAuthenticators = message.selectedAuthenticators.map(e => (e || Long.UZERO).toString());
    } else {
      obj.selectedAuthenticators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TxExtension>): TxExtension {
    const message = createBaseTxExtension();
    message.selectedAuthenticators = object.selectedAuthenticators?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};