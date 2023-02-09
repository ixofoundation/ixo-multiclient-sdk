import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
export enum ContractType {
  CW20 = 0,
  CW721 = 1,
  IXO1155 = 2,
  UNRECOGNIZED = -1,
}
export enum ContractTypeSDKType {
  CW20 = 0,
  CW721 = 1,
  IXO1155 = 2,
  UNRECOGNIZED = -1,
}
export function contractTypeFromJSON(object: any): ContractType {
  switch (object) {
    case 0:
    case "CW20":
      return ContractType.CW20;

    case 1:
    case "CW721":
      return ContractType.CW721;

    case 2:
    case "IXO1155":
      return ContractType.IXO1155;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractType.UNRECOGNIZED;
  }
}
export function contractTypeToJSON(object: ContractType): string {
  switch (object) {
    case ContractType.CW20:
      return "CW20";

    case ContractType.CW721:
      return "CW721";

    case ContractType.IXO1155:
      return "IXO1155";

    case ContractType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Contract {
  id: string;
  address: string;
}
export interface ContractSDKType {
  id: string;
  address: string;
}
export interface Params {
  cw20ContractCode: Long;
  cw721ContractCode: Long;
  ixo1155ContractCode: Long;
}
export interface ParamsSDKType {
  cw20_contract_code: Long;
  cw721_contract_code: Long;
  ixo1155_contract_code: Long;
}
export interface TokenMinter {
  minterDid: string;
  minterAddress: string;
  contractAddress: string;
  contractType: ContractType;
  name: string;
  description: string;
}
export interface TokenMinterSDKType {
  minter_did: string;
  minter_address: string;
  contract_address: string;
  contract_type: ContractTypeSDKType;
  name: string;
  description: string;
}

function createBaseContract(): Contract {
  return {
    id: "",
    address: ""
  };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Contract {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<Contract>): Contract {
    const message = createBaseContract();
    message.id = object.id ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    cw20ContractCode: Long.UZERO,
    cw721ContractCode: Long.UZERO,
    ixo1155ContractCode: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

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

  fromJSON(object: any): Params {
    return {
      cw20ContractCode: isSet(object.cw20ContractCode) ? Long.fromValue(object.cw20ContractCode) : Long.UZERO,
      cw721ContractCode: isSet(object.cw721ContractCode) ? Long.fromValue(object.cw721ContractCode) : Long.UZERO,
      ixo1155ContractCode: isSet(object.ixo1155ContractCode) ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.cw20ContractCode !== undefined && (obj.cw20ContractCode = (message.cw20ContractCode || Long.UZERO).toString());
    message.cw721ContractCode !== undefined && (obj.cw721ContractCode = (message.cw721ContractCode || Long.UZERO).toString());
    message.ixo1155ContractCode !== undefined && (obj.ixo1155ContractCode = (message.ixo1155ContractCode || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.cw20ContractCode = object.cw20ContractCode !== undefined && object.cw20ContractCode !== null ? Long.fromValue(object.cw20ContractCode) : Long.UZERO;
    message.cw721ContractCode = object.cw721ContractCode !== undefined && object.cw721ContractCode !== null ? Long.fromValue(object.cw721ContractCode) : Long.UZERO;
    message.ixo1155ContractCode = object.ixo1155ContractCode !== undefined && object.ixo1155ContractCode !== null ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO;
    return message;
  }

};

function createBaseTokenMinter(): TokenMinter {
  return {
    minterDid: "",
    minterAddress: "",
    contractAddress: "",
    contractType: 0,
    name: "",
    description: ""
  };
}

export const TokenMinter = {
  encode(message: TokenMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
    }

    if (message.minterAddress !== "") {
      writer.uint32(18).string(message.minterAddress);
    }

    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }

    if (message.contractType !== 0) {
      writer.uint32(32).int32(message.contractType);
    }

    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMinter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minterDid = reader.string();
          break;

        case 2:
          message.minterAddress = reader.string();
          break;

        case 3:
          message.contractAddress = reader.string();
          break;

        case 4:
          message.contractType = (reader.int32() as any);
          break;

        case 5:
          message.name = reader.string();
          break;

        case 6:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenMinter {
    return {
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      minterAddress: isSet(object.minterAddress) ? String(object.minterAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractType: isSet(object.contractType) ? contractTypeFromJSON(object.contractType) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: TokenMinter): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.minterAddress !== undefined && (obj.minterAddress = message.minterAddress);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractType !== undefined && (obj.contractType = contractTypeToJSON(message.contractType));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: Partial<TokenMinter>): TokenMinter {
    const message = createBaseTokenMinter();
    message.minterDid = object.minterDid ?? "";
    message.minterAddress = object.minterAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.contractType = object.contractType ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  }

};