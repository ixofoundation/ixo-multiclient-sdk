//@ts-nocheck
import { Params, ParamsSDKType, Token, TokenSDKType, TokenProperties, TokenPropertiesSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params?: Params;
  tokens: Token[];
  tokenProperties: TokenProperties[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  tokens: TokenSDKType[];
  token_properties: TokenPropertiesSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokens: [],
    tokenProperties: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tokenProperties) {
      TokenProperties.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenProperties.push(TokenProperties.decode(reader, reader.uint32()));
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
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromJSON(e)) : [],
      tokenProperties: Array.isArray(object?.tokenProperties) ? object.tokenProperties.map((e: any) => TokenProperties.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    if (message.tokenProperties) {
      obj.tokenProperties = message.tokenProperties.map(e => e ? TokenProperties.toJSON(e) : undefined);
    } else {
      obj.tokenProperties = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    message.tokenProperties = object.tokenProperties?.map(e => TokenProperties.fromPartial(e)) || [];
    return message;
  }
};