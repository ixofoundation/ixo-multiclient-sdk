//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** AuthenticatorAddedEvent is an event triggered on Authenticator addition */
export interface AuthenticatorAddedEvent {
  /** sender is the address of the account that added the authenticator */
  sender: string;
  /** authenticator_type is the type of the authenticator that was added */
  authenticatorType: string;
  /** authenticator_id is the id of the authenticator that was added */
  authenticatorId: string;
}
/** AuthenticatorAddedEvent is an event triggered on Authenticator addition */
export interface AuthenticatorAddedEventSDKType {
  sender: string;
  authenticator_type: string;
  authenticator_id: string;
}
/** AuthenticatorRemovedEvent is an event triggered on Authenticator removal */
export interface AuthenticatorRemovedEvent {
  /** sender is the address of the account that removed the authenticator */
  sender: string;
  /** authenticator_id is the id of the authenticator that was removed */
  authenticatorId: string;
}
/** AuthenticatorRemovedEvent is an event triggered on Authenticator removal */
export interface AuthenticatorRemovedEventSDKType {
  sender: string;
  authenticator_id: string;
}
/**
 * AuthenticatorSetActiveStateEvent is an event triggered on Authenticator
 * active state change
 */
export interface AuthenticatorSetActiveStateEvent {
  /** sender is the address of the account that changed the active state */
  sender: string;
  /** active is the new active state */
  isSmartAccountActive: boolean;
}
/**
 * AuthenticatorSetActiveStateEvent is an event triggered on Authenticator
 * active state change
 */
export interface AuthenticatorSetActiveStateEventSDKType {
  sender: string;
  is_smart_account_active: boolean;
}
function createBaseAuthenticatorAddedEvent(): AuthenticatorAddedEvent {
  return {
    sender: "",
    authenticatorType: "",
    authenticatorId: ""
  };
}
export const AuthenticatorAddedEvent = {
  encode(message: AuthenticatorAddedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.authenticatorType !== "") {
      writer.uint32(18).string(message.authenticatorType);
    }
    if (message.authenticatorId !== "") {
      writer.uint32(26).string(message.authenticatorId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorAddedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticatorAddedEvent();
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
          message.authenticatorId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthenticatorAddedEvent {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      authenticatorType: isSet(object.authenticatorType) ? String(object.authenticatorType) : "",
      authenticatorId: isSet(object.authenticatorId) ? String(object.authenticatorId) : ""
    };
  },
  toJSON(message: AuthenticatorAddedEvent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.authenticatorType !== undefined && (obj.authenticatorType = message.authenticatorType);
    message.authenticatorId !== undefined && (obj.authenticatorId = message.authenticatorId);
    return obj;
  },
  fromPartial(object: Partial<AuthenticatorAddedEvent>): AuthenticatorAddedEvent {
    const message = createBaseAuthenticatorAddedEvent();
    message.sender = object.sender ?? "";
    message.authenticatorType = object.authenticatorType ?? "";
    message.authenticatorId = object.authenticatorId ?? "";
    return message;
  }
};
function createBaseAuthenticatorRemovedEvent(): AuthenticatorRemovedEvent {
  return {
    sender: "",
    authenticatorId: ""
  };
}
export const AuthenticatorRemovedEvent = {
  encode(message: AuthenticatorRemovedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.authenticatorId !== "") {
      writer.uint32(18).string(message.authenticatorId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorRemovedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticatorRemovedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.authenticatorId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthenticatorRemovedEvent {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      authenticatorId: isSet(object.authenticatorId) ? String(object.authenticatorId) : ""
    };
  },
  toJSON(message: AuthenticatorRemovedEvent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.authenticatorId !== undefined && (obj.authenticatorId = message.authenticatorId);
    return obj;
  },
  fromPartial(object: Partial<AuthenticatorRemovedEvent>): AuthenticatorRemovedEvent {
    const message = createBaseAuthenticatorRemovedEvent();
    message.sender = object.sender ?? "";
    message.authenticatorId = object.authenticatorId ?? "";
    return message;
  }
};
function createBaseAuthenticatorSetActiveStateEvent(): AuthenticatorSetActiveStateEvent {
  return {
    sender: "",
    isSmartAccountActive: false
  };
}
export const AuthenticatorSetActiveStateEvent = {
  encode(message: AuthenticatorSetActiveStateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.isSmartAccountActive === true) {
      writer.uint32(16).bool(message.isSmartAccountActive);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorSetActiveStateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticatorSetActiveStateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.isSmartAccountActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthenticatorSetActiveStateEvent {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      isSmartAccountActive: isSet(object.isSmartAccountActive) ? Boolean(object.isSmartAccountActive) : false
    };
  },
  toJSON(message: AuthenticatorSetActiveStateEvent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.isSmartAccountActive !== undefined && (obj.isSmartAccountActive = message.isSmartAccountActive);
    return obj;
  },
  fromPartial(object: Partial<AuthenticatorSetActiveStateEvent>): AuthenticatorSetActiveStateEvent {
    const message = createBaseAuthenticatorSetActiveStateEvent();
    message.sender = object.sender ?? "";
    message.isSmartAccountActive = object.isSmartAccountActive ?? false;
    return message;
  }
};