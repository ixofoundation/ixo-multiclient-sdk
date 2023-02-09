import { TokenMinter, TokenMinterSDKType, Params, ParamsSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the project module's genesis state. */

export interface GenesisState {
  tokenMinters: TokenMinter[];
  /**
   * repeated GenesisAccountMap account_maps       = 2 [(gogoproto.nullable) =
   * false, (gogoproto.moretags) = "yaml:\"account_maps\""];
   */

  params?: Params;
}
/** GenesisState defines the project module's genesis state. */

export interface GenesisStateSDKType {
  token_minters: TokenMinterSDKType[];
  /**
   * repeated GenesisAccountMap account_maps       = 2 [(gogoproto.nullable) =
   * false, (gogoproto.moretags) = "yaml:\"account_maps\""];
   */

  params?: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    tokenMinters: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenMinters) {
      TokenMinter.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.tokenMinters.push(TokenMinter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GenesisState {
    return {
      tokenMinters: Array.isArray(object?.tokenMinters) ? object.tokenMinters.map((e: any) => TokenMinter.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.tokenMinters) {
      obj.tokenMinters = message.tokenMinters.map(e => e ? TokenMinter.toJSON(e) : undefined);
    } else {
      obj.tokenMinters = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.tokenMinters = object.tokenMinters?.map(e => TokenMinter.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};