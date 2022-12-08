import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
export interface Cw20Constraints {
  maxAmmount: Long;
}
export interface Cw20ConstraintsSDKType {
  maxAmmount: Long;
}
export interface Cw721Constraints {}
export interface Cw721ConstraintsSDKType {}
export interface Cw1155Constraints {
  value: Long;
}
export interface Cw1155ConstraintsSDKType {
  value: Long;
}
export interface MintConstraints {
  contractAddress: string;
  limit: Long;
  cw20Constraints?: Cw20Constraints;
  cw721Constraints?: Cw721Constraints;
  cw1155Constraints?: Cw1155Constraints;
}
export interface MintConstraintsSDKType {
  contractAddress: string;
  limit: Long;
  cw20Constraints?: Cw20ConstraintsSDKType;
  cw721Constraints?: Cw721ConstraintsSDKType;
  cw1155Constraints?: Cw1155ConstraintsSDKType;
}
export interface MintAuthorization {
  minterDid: string;
  constraints: MintConstraints[];
}
export interface MintAuthorizationSDKType {
  minterDid: string;
  constraints: MintConstraintsSDKType[];
}

function createBaseCw20Constraints(): Cw20Constraints {
  return {
    maxAmmount: Long.UZERO
  };
}

export const Cw20Constraints = {
  encode(message: Cw20Constraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxAmmount.isZero()) {
      writer.uint32(8).uint64(message.maxAmmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cw20Constraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCw20Constraints();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxAmmount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Cw20Constraints {
    return {
      maxAmmount: isSet(object.maxAmmount) ? Long.fromValue(object.maxAmmount) : Long.UZERO
    };
  },

  toJSON(message: Cw20Constraints): unknown {
    const obj: any = {};
    message.maxAmmount !== undefined && (obj.maxAmmount = (message.maxAmmount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Cw20Constraints>): Cw20Constraints {
    const message = createBaseCw20Constraints();
    message.maxAmmount = object.maxAmmount !== undefined && object.maxAmmount !== null ? Long.fromValue(object.maxAmmount) : Long.UZERO;
    return message;
  }

};

function createBaseCw721Constraints(): Cw721Constraints {
  return {};
}

export const Cw721Constraints = {
  encode(_: Cw721Constraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cw721Constraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCw721Constraints();

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

  fromJSON(_: any): Cw721Constraints {
    return {};
  },

  toJSON(_: Cw721Constraints): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<Cw721Constraints>): Cw721Constraints {
    const message = createBaseCw721Constraints();
    return message;
  }

};

function createBaseCw1155Constraints(): Cw1155Constraints {
  return {
    value: Long.UZERO
  };
}

export const Cw1155Constraints = {
  encode(message: Cw1155Constraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cw1155Constraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCw1155Constraints();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Cw1155Constraints {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },

  toJSON(message: Cw1155Constraints): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Cw1155Constraints>): Cw1155Constraints {
    const message = createBaseCw1155Constraints();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }

};

function createBaseMintConstraints(): MintConstraints {
  return {
    contractAddress: "",
    limit: Long.ZERO,
    cw20Constraints: undefined,
    cw721Constraints: undefined,
    cw1155Constraints: undefined
  };
}

export const MintConstraints = {
  encode(message: MintConstraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (!message.limit.isZero()) {
      writer.uint32(16).int64(message.limit);
    }

    if (message.cw20Constraints !== undefined) {
      Cw20Constraints.encode(message.cw20Constraints, writer.uint32(26).fork()).ldelim();
    }

    if (message.cw721Constraints !== undefined) {
      Cw721Constraints.encode(message.cw721Constraints, writer.uint32(34).fork()).ldelim();
    }

    if (message.cw1155Constraints !== undefined) {
      Cw1155Constraints.encode(message.cw1155Constraints, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintConstraints();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.limit = (reader.int64() as Long);
          break;

        case 3:
          message.cw20Constraints = Cw20Constraints.decode(reader, reader.uint32());
          break;

        case 4:
          message.cw721Constraints = Cw721Constraints.decode(reader, reader.uint32());
          break;

        case 5:
          message.cw1155Constraints = Cw1155Constraints.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MintConstraints {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.ZERO,
      cw20Constraints: isSet(object.cw20Constraints) ? Cw20Constraints.fromJSON(object.cw20Constraints) : undefined,
      cw721Constraints: isSet(object.cw721Constraints) ? Cw721Constraints.fromJSON(object.cw721Constraints) : undefined,
      cw1155Constraints: isSet(object.cw1155Constraints) ? Cw1155Constraints.fromJSON(object.cw1155Constraints) : undefined
    };
  },

  toJSON(message: MintConstraints): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.limit !== undefined && (obj.limit = (message.limit || Long.ZERO).toString());
    message.cw20Constraints !== undefined && (obj.cw20Constraints = message.cw20Constraints ? Cw20Constraints.toJSON(message.cw20Constraints) : undefined);
    message.cw721Constraints !== undefined && (obj.cw721Constraints = message.cw721Constraints ? Cw721Constraints.toJSON(message.cw721Constraints) : undefined);
    message.cw1155Constraints !== undefined && (obj.cw1155Constraints = message.cw1155Constraints ? Cw1155Constraints.toJSON(message.cw1155Constraints) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MintConstraints>): MintConstraints {
    const message = createBaseMintConstraints();
    message.contractAddress = object.contractAddress ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.ZERO;
    message.cw20Constraints = object.cw20Constraints !== undefined && object.cw20Constraints !== null ? Cw20Constraints.fromPartial(object.cw20Constraints) : undefined;
    message.cw721Constraints = object.cw721Constraints !== undefined && object.cw721Constraints !== null ? Cw721Constraints.fromPartial(object.cw721Constraints) : undefined;
    message.cw1155Constraints = object.cw1155Constraints !== undefined && object.cw1155Constraints !== null ? Cw1155Constraints.fromPartial(object.cw1155Constraints) : undefined;
    return message;
  }

};

function createBaseMintAuthorization(): MintAuthorization {
  return {
    minterDid: "",
    constraints: []
  };
}

export const MintAuthorization = {
  encode(message: MintAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
    }

    for (const v of message.constraints) {
      MintConstraints.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minterDid = reader.string();
          break;

        case 2:
          message.constraints.push(MintConstraints.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MintAuthorization {
    return {
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      constraints: Array.isArray(object?.constraints) ? object.constraints.map((e: any) => MintConstraints.fromJSON(e)) : []
    };
  },

  toJSON(message: MintAuthorization): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);

    if (message.constraints) {
      obj.constraints = message.constraints.map(e => e ? MintConstraints.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MintAuthorization>): MintAuthorization {
    const message = createBaseMintAuthorization();
    message.minterDid = object.minterDid ?? "";
    message.constraints = object.constraints?.map(e => MintConstraints.fromPartial(e)) || [];
    return message;
  }

};