import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Params {
  NftContractAddress: string;
  NftContractMinter: string;
}
export interface ParamsSDKType {
  NftContractAddress: string;
  NftContractMinter: string;
}
/** ProjectDoc defines a project (or token) type with all of its parameters. */

export interface TokenDoc {}
/** ProjectDoc defines a project (or token) type with all of its parameters. */

export interface TokenDocSDKType {}

function createBaseParams(): Params {
  return {
    NftContractAddress: "",
    NftContractMinter: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.NftContractAddress !== "") {
      writer.uint32(10).string(message.NftContractAddress);
    }

    if (message.NftContractMinter !== "") {
      writer.uint32(18).string(message.NftContractMinter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.NftContractAddress = reader.string();
          break;

        case 2:
          message.NftContractMinter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      NftContractAddress: isSet(object.NftContractAddress) ? String(object.NftContractAddress) : "",
      NftContractMinter: isSet(object.NftContractMinter) ? String(object.NftContractMinter) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.NftContractAddress !== undefined && (obj.NftContractAddress = message.NftContractAddress);
    message.NftContractMinter !== undefined && (obj.NftContractMinter = message.NftContractMinter);
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.NftContractAddress = object.NftContractAddress ?? "";
    message.NftContractMinter = object.NftContractMinter ?? "";
    return message;
  }

};

function createBaseTokenDoc(): TokenDoc {
  return {};
}

export const TokenDoc = {
  encode(_: TokenDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenDoc();

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

  fromJSON(_: any): TokenDoc {
    return {};
  },

  toJSON(_: TokenDoc): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<TokenDoc>): TokenDoc {
    const message = createBaseTokenDoc();
    return message;
  }

};