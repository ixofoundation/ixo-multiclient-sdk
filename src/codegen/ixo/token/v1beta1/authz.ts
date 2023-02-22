import { TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MintAuthorization {
  /** address of minter */
  minter: string;
  constraints: MintConstraints[];
}
export interface MintAuthorizationSDKType {
  /** address of minter */
  minter: string;
  constraints: MintConstraintsSDKType[];
}
export interface MintConstraints {
  contractAddress: string;
  amount: string;
  /**
   * name is the token name, which must be unique (namespace), will be verified
   * against Token name provided on msgCreateToken
   */

  name: string;
  /** index is the unique identifier hexstring that identifies the token */

  index: string;
  /** did of collection (eg Supamoto Malawi) */

  collection: string;
  /**
   * tokenData is the linkedResources added to tokenMetadata when queried eg
   * (credential link ***.ipfs)
   */

  tokenData: TokenData[];
}
export interface MintConstraintsSDKType {
  contract_address: string;
  amount: string;
  /**
   * name is the token name, which must be unique (namespace), will be verified
   * against Token name provided on msgCreateToken
   */

  name: string;
  /** index is the unique identifier hexstring that identifies the token */

  index: string;
  /** did of collection (eg Supamoto Malawi) */

  collection: string;
  /**
   * tokenData is the linkedResources added to tokenMetadata when queried eg
   * (credential link ***.ipfs)
   */

  tokenData: TokenDataSDKType[];
}

function createBaseMintAuthorization(): MintAuthorization {
  return {
    minter: "",
    constraints: []
  };
}

export const MintAuthorization = {
  encode(message: MintAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
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
          message.minter = reader.string();
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
      minter: isSet(object.minter) ? String(object.minter) : "",
      constraints: Array.isArray(object?.constraints) ? object.constraints.map((e: any) => MintConstraints.fromJSON(e)) : []
    };
  },

  toJSON(message: MintAuthorization): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);

    if (message.constraints) {
      obj.constraints = message.constraints.map(e => e ? MintConstraints.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MintAuthorization>): MintAuthorization {
    const message = createBaseMintAuthorization();
    message.minter = object.minter ?? "";
    message.constraints = object.constraints?.map(e => MintConstraints.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMintConstraints(): MintConstraints {
  return {
    contractAddress: "",
    amount: "",
    name: "",
    index: "",
    collection: "",
    tokenData: []
  };
}

export const MintConstraints = {
  encode(message: MintConstraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.index !== "") {
      writer.uint32(34).string(message.index);
    }

    if (message.collection !== "") {
      writer.uint32(42).string(message.collection);
    }

    for (const v of message.tokenData) {
      TokenData.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.amount = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.index = reader.string();
          break;

        case 5:
          message.collection = reader.string();
          break;

        case 6:
          message.tokenData.push(TokenData.decode(reader, reader.uint32()));
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
      amount: isSet(object.amount) ? String(object.amount) : "",
      name: isSet(object.name) ? String(object.name) : "",
      index: isSet(object.index) ? String(object.index) : "",
      collection: isSet(object.collection) ? String(object.collection) : "",
      tokenData: Array.isArray(object?.tokenData) ? object.tokenData.map((e: any) => TokenData.fromJSON(e)) : []
    };
  },

  toJSON(message: MintConstraints): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.name !== undefined && (obj.name = message.name);
    message.index !== undefined && (obj.index = message.index);
    message.collection !== undefined && (obj.collection = message.collection);

    if (message.tokenData) {
      obj.tokenData = message.tokenData.map(e => e ? TokenData.toJSON(e) : undefined);
    } else {
      obj.tokenData = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MintConstraints>): MintConstraints {
    const message = createBaseMintConstraints();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.name = object.name ?? "";
    message.index = object.index ?? "";
    message.collection = object.collection ?? "";
    message.tokenData = object.tokenData?.map(e => TokenData.fromPartial(e)) || [];
    return message;
  }

};