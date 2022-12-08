import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Contract {
  id: string;
  address: string;
}
export interface ContractSDKType {
  id: string;
  address: string;
}
export interface Params {
  cw20ContractCode: string;
  cw721ContractCode: string;
  ixo1155ContractCode: string;
}
export interface ParamsSDKType {
  cw20ContractCode: string;
  cw721ContractCode: string;
  ixo1155ContractCode: string;
}
export interface TokenMinter {
  minterDid: string;
  minterAddress: string;
  contractAddress: string;
  name: string;
  description: string;
}
export interface TokenMinterSDKType {
  minterDid: string;
  minterAddress: string;
  contractAddress: string;
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
    cw20ContractCode: "",
    cw721ContractCode: "",
    ixo1155ContractCode: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cw20ContractCode !== "") {
      writer.uint32(10).string(message.cw20ContractCode);
    }

    if (message.cw721ContractCode !== "") {
      writer.uint32(18).string(message.cw721ContractCode);
    }

    if (message.ixo1155ContractCode !== "") {
      writer.uint32(26).string(message.ixo1155ContractCode);
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
          message.cw20ContractCode = reader.string();
          break;

        case 2:
          message.cw721ContractCode = reader.string();
          break;

        case 3:
          message.ixo1155ContractCode = reader.string();
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
      cw20ContractCode: isSet(object.cw20ContractCode) ? String(object.cw20ContractCode) : "",
      cw721ContractCode: isSet(object.cw721ContractCode) ? String(object.cw721ContractCode) : "",
      ixo1155ContractCode: isSet(object.ixo1155ContractCode) ? String(object.ixo1155ContractCode) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.cw20ContractCode !== undefined && (obj.cw20ContractCode = message.cw20ContractCode);
    message.cw721ContractCode !== undefined && (obj.cw721ContractCode = message.cw721ContractCode);
    message.ixo1155ContractCode !== undefined && (obj.ixo1155ContractCode = message.ixo1155ContractCode);
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.cw20ContractCode = object.cw20ContractCode ?? "";
    message.cw721ContractCode = object.cw721ContractCode ?? "";
    message.ixo1155ContractCode = object.ixo1155ContractCode ?? "";
    return message;
  }

};

function createBaseTokenMinter(): TokenMinter {
  return {
    minterDid: "",
    minterAddress: "",
    contractAddress: "",
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

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
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
          message.name = reader.string();
          break;

        case 5:
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
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: TokenMinter): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.minterAddress !== undefined && (obj.minterAddress = message.minterAddress);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: Partial<TokenMinter>): TokenMinter {
    const message = createBaseTokenMinter();
    message.minterDid = object.minterDid ?? "";
    message.minterAddress = object.minterAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  }

};