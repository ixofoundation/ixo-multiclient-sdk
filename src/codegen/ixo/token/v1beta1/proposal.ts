import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
export interface SetTokenContractCodes {
  cw20ContractCode: Long;
  cw721ContractCode: Long;
  ixo1155ContractCode: Long;
}
export interface SetTokenContractCodesSDKType {
  cw20_contract_code: Long;
  cw721_contract_code: Long;
  ixo1155_contract_code: Long;
}

function createBaseSetTokenContractCodes(): SetTokenContractCodes {
  return {
    cw20ContractCode: Long.UZERO,
    cw721ContractCode: Long.UZERO,
    ixo1155ContractCode: Long.UZERO
  };
}

export const SetTokenContractCodes = {
  encode(message: SetTokenContractCodes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cw20ContractCode.isZero()) {
      writer.uint32(8).uint64(message.cw20ContractCode);
    }

    if (!message.cw721ContractCode.isZero()) {
      writer.uint32(16).uint64(message.cw721ContractCode);
    }

    if (!message.ixo1155ContractCode.isZero()) {
      writer.uint32(24).uint64(message.ixo1155ContractCode);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTokenContractCodes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTokenContractCodes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cw20ContractCode = (reader.uint64() as Long);
          break;

        case 2:
          message.cw721ContractCode = (reader.uint64() as Long);
          break;

        case 3:
          message.ixo1155ContractCode = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SetTokenContractCodes {
    return {
      cw20ContractCode: isSet(object.cw20ContractCode) ? Long.fromValue(object.cw20ContractCode) : Long.UZERO,
      cw721ContractCode: isSet(object.cw721ContractCode) ? Long.fromValue(object.cw721ContractCode) : Long.UZERO,
      ixo1155ContractCode: isSet(object.ixo1155ContractCode) ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO
    };
  },

  toJSON(message: SetTokenContractCodes): unknown {
    const obj: any = {};
    message.cw20ContractCode !== undefined && (obj.cw20ContractCode = (message.cw20ContractCode || Long.UZERO).toString());
    message.cw721ContractCode !== undefined && (obj.cw721ContractCode = (message.cw721ContractCode || Long.UZERO).toString());
    message.ixo1155ContractCode !== undefined && (obj.ixo1155ContractCode = (message.ixo1155ContractCode || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<SetTokenContractCodes>): SetTokenContractCodes {
    const message = createBaseSetTokenContractCodes();
    message.cw20ContractCode = object.cw20ContractCode !== undefined && object.cw20ContractCode !== null ? Long.fromValue(object.cw20ContractCode) : Long.UZERO;
    message.cw721ContractCode = object.cw721ContractCode !== undefined && object.cw721ContractCode !== null ? Long.fromValue(object.cw721ContractCode) : Long.UZERO;
    message.ixo1155ContractCode = object.ixo1155ContractCode !== undefined && object.ixo1155ContractCode !== null ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO;
    return message;
  }

};