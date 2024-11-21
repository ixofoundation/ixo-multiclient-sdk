//@ts-nocheck
import { AccountAuthenticator, AccountAuthenticatorSDKType } from "./models";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 */
export interface AuthenticatorData {
  /** address is an account address, one address can have many authenticators */
  address: string;
  /**
   * authenticators are the account's authenticators, these can be multiple
   * types including SignatureVerification, AllOfs, CosmWasmAuthenticators, etc
   */
  authenticators: AccountAuthenticator[];
}
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 */
export interface AuthenticatorDataSDKType {
  address: string;
  authenticators: AccountAuthenticatorSDKType[];
}
/** GenesisState defines the authenticator module's genesis state. */
export interface GenesisState {
  /** params define the parameters for the authenticator module. */
  params?: Params;
  /** next_authenticator_id is the next available authenticator ID. */
  nextAuthenticatorId: Long;
  /**
   * authenticator_data contains the data for multiple accounts, each with their
   * authenticators.
   */
  authenticatorData: AuthenticatorData[];
}
/** GenesisState defines the authenticator module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  next_authenticator_id: Long;
  authenticator_data: AuthenticatorDataSDKType[];
}
function createBaseAuthenticatorData(): AuthenticatorData {
  return {
    address: "",
    authenticators: []
  };
}
export const AuthenticatorData = {
  encode(message: AuthenticatorData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.authenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticatorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.authenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthenticatorData {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      authenticators: Array.isArray(object?.authenticators) ? object.authenticators.map((e: any) => AccountAuthenticator.fromJSON(e)) : []
    };
  },
  toJSON(message: AuthenticatorData): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.authenticators) {
      obj.authenticators = message.authenticators.map(e => e ? AccountAuthenticator.toJSON(e) : undefined);
    } else {
      obj.authenticators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AuthenticatorData>): AuthenticatorData {
    const message = createBaseAuthenticatorData();
    message.address = object.address ?? "";
    message.authenticators = object.authenticators?.map(e => AccountAuthenticator.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    nextAuthenticatorId: Long.UZERO,
    authenticatorData: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.nextAuthenticatorId.isZero()) {
      writer.uint32(16).uint64(message.nextAuthenticatorId);
    }
    for (const v of message.authenticatorData) {
      AuthenticatorData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextAuthenticatorId = (reader.uint64() as Long);
          break;
        case 3:
          message.authenticatorData.push(AuthenticatorData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      nextAuthenticatorId: isSet(object.nextAuthenticatorId) ? Long.fromValue(object.nextAuthenticatorId) : Long.UZERO,
      authenticatorData: Array.isArray(object?.authenticatorData) ? object.authenticatorData.map((e: any) => AuthenticatorData.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nextAuthenticatorId !== undefined && (obj.nextAuthenticatorId = (message.nextAuthenticatorId || Long.UZERO).toString());
    if (message.authenticatorData) {
      obj.authenticatorData = message.authenticatorData.map(e => e ? AuthenticatorData.toJSON(e) : undefined);
    } else {
      obj.authenticatorData = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nextAuthenticatorId = object.nextAuthenticatorId !== undefined && object.nextAuthenticatorId !== null ? Long.fromValue(object.nextAuthenticatorId) : Long.UZERO;
    message.authenticatorData = object.authenticatorData?.map(e => AuthenticatorData.fromPartial(e)) || [];
    return message;
  }
};