import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
export interface InitializeTokenContract {
  NftContractCodeId: Long;
  NftMinterAddress: string;
}
export interface InitializeTokenContractSDKType {
  NftContractCodeId: Long;
  NftMinterAddress: string;
}

function createBaseInitializeTokenContract(): InitializeTokenContract {
  return {
    NftContractCodeId: Long.UZERO,
    NftMinterAddress: ""
  };
}

export const InitializeTokenContract = {
  encode(message: InitializeTokenContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.NftContractCodeId.isZero()) {
      writer.uint32(8).uint64(message.NftContractCodeId);
    }

    if (message.NftMinterAddress !== "") {
      writer.uint32(18).string(message.NftMinterAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeTokenContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitializeTokenContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.NftContractCodeId = (reader.uint64() as Long);
          break;

        case 2:
          message.NftMinterAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InitializeTokenContract {
    return {
      NftContractCodeId: isSet(object.NftContractCodeId) ? Long.fromValue(object.NftContractCodeId) : Long.UZERO,
      NftMinterAddress: isSet(object.NftMinterAddress) ? String(object.NftMinterAddress) : ""
    };
  },

  toJSON(message: InitializeTokenContract): unknown {
    const obj: any = {};
    message.NftContractCodeId !== undefined && (obj.NftContractCodeId = (message.NftContractCodeId || Long.UZERO).toString());
    message.NftMinterAddress !== undefined && (obj.NftMinterAddress = message.NftMinterAddress);
    return obj;
  },

  fromPartial(object: Partial<InitializeTokenContract>): InitializeTokenContract {
    const message = createBaseInitializeTokenContract();
    message.NftContractCodeId = object.NftContractCodeId !== undefined && object.NftContractCodeId !== null ? Long.fromValue(object.NftContractCodeId) : Long.UZERO;
    message.NftMinterAddress = object.NftMinterAddress ?? "";
    return message;
  }

};