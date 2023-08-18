import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SetTokenContractCodes {
  ixo1155ContractCode: Long;
}
export interface SetTokenContractCodesSDKType {
  ixo1155_contract_code: Long;
}
function createBaseSetTokenContractCodes(): SetTokenContractCodes {
  return {
    ixo1155ContractCode: Long.UZERO
  };
}
export const SetTokenContractCodes = {
  encode(message: SetTokenContractCodes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ixo1155ContractCode.isZero()) {
      writer.uint32(8).uint64(message.ixo1155ContractCode);
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
      ixo1155ContractCode: isSet(object.ixo1155ContractCode) ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO
    };
  },
  toJSON(message: SetTokenContractCodes): unknown {
    const obj: any = {};
    message.ixo1155ContractCode !== undefined && (obj.ixo1155ContractCode = (message.ixo1155ContractCode || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<SetTokenContractCodes>): SetTokenContractCodes {
    const message = createBaseSetTokenContractCodes();
    message.ixo1155ContractCode = object.ixo1155ContractCode !== undefined && object.ixo1155ContractCode !== null ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO;
    return message;
  }
};