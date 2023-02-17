import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
export interface Params {
  ixo1155ContractCode: Long;
}
export interface ParamsSDKType {
  ixo1155_contract_code: Long;
}
export interface Token {
  minterDid: string;
  minterAddress: string;
  /** Generated on token intiation through MsgSetupMinter */

  contractAddress: string;
  /** class is the token protocol entity DID (validated) */

  class: string;
  /** name is the token name, which must be unique (namespace) */

  name: string;
  /** description is any arbitrary description */

  description: string;
  /** image is the image url for the token */

  image: string;
  /** type is the token type (eg ixo1155) */

  type: string;
  /**
   * cap is the maximum number of tokens with this name that can be minted, 0 is
   * unlimited
   */

  cap: string;
  /** how much has already been minted for this Token type, aka the supply */

  supply: string;
  /** stop allowance of token minter temporarily */

  paused: boolean;
  /** stop allowance of token minter permanently */

  deactivated: boolean;
}
export interface TokenSDKType {
  minter_did: string;
  minter_address: string;
  /** Generated on token intiation through MsgSetupMinter */

  contract_address: string;
  /** class is the token protocol entity DID (validated) */

  class: string;
  /** name is the token name, which must be unique (namespace) */

  name: string;
  /** description is any arbitrary description */

  description: string;
  /** image is the image url for the token */

  image: string;
  /** type is the token type (eg ixo1155) */

  type: string;
  /**
   * cap is the maximum number of tokens with this name that can be minted, 0 is
   * unlimited
   */

  cap: string;
  /** how much has already been minted for this Token type, aka the supply */

  supply: string;
  /** stop allowance of token minter temporarily */

  paused: boolean;
  /** stop allowance of token minter permanently */

  deactivated: boolean;
}
export interface TokenProperties {
  id: string;
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
export interface TokenPropertiesSDKType {
  id: string;
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
export interface TokenData {
  /** media type value should always be "application/json" */
  uri: string;
  encrypted: boolean;
  proof: string;
  type: string;
}
export interface TokenDataSDKType {
  /** media type value should always be "application/json" */
  uri: string;
  encrypted: boolean;
  proof: string;
  type: string;
}

function createBaseParams(): Params {
  return {
    ixo1155ContractCode: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ixo1155ContractCode.isZero()) {
      writer.uint32(8).uint64(message.ixo1155ContractCode);
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
      ixo1155ContractCode: isSet(object.ixo1155ContractCode) ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.ixo1155ContractCode !== undefined && (obj.ixo1155ContractCode = (message.ixo1155ContractCode || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.ixo1155ContractCode = object.ixo1155ContractCode !== undefined && object.ixo1155ContractCode !== null ? Long.fromValue(object.ixo1155ContractCode) : Long.UZERO;
    return message;
  }

};

function createBaseToken(): Token {
  return {
    minterDid: "",
    minterAddress: "",
    contractAddress: "",
    class: "",
    name: "",
    description: "",
    image: "",
    type: "",
    cap: "",
    supply: "",
    paused: false,
    deactivated: false
  };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
    }

    if (message.minterAddress !== "") {
      writer.uint32(18).string(message.minterAddress);
    }

    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }

    if (message.class !== "") {
      writer.uint32(34).string(message.class);
    }

    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }

    if (message.image !== "") {
      writer.uint32(58).string(message.image);
    }

    if (message.type !== "") {
      writer.uint32(66).string(message.type);
    }

    if (message.cap !== "") {
      writer.uint32(74).string(message.cap);
    }

    if (message.supply !== "") {
      writer.uint32(82).string(message.supply);
    }

    if (message.paused === true) {
      writer.uint32(88).bool(message.paused);
    }

    if (message.deactivated === true) {
      writer.uint32(96).bool(message.deactivated);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();

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
          message.class = reader.string();
          break;

        case 5:
          message.name = reader.string();
          break;

        case 6:
          message.description = reader.string();
          break;

        case 7:
          message.image = reader.string();
          break;

        case 8:
          message.type = reader.string();
          break;

        case 9:
          message.cap = reader.string();
          break;

        case 10:
          message.supply = reader.string();
          break;

        case 11:
          message.paused = reader.bool();
          break;

        case 12:
          message.deactivated = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Token {
    return {
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      minterAddress: isSet(object.minterAddress) ? String(object.minterAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      class: isSet(object.class) ? String(object.class) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      image: isSet(object.image) ? String(object.image) : "",
      type: isSet(object.type) ? String(object.type) : "",
      cap: isSet(object.cap) ? String(object.cap) : "",
      supply: isSet(object.supply) ? String(object.supply) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.minterAddress !== undefined && (obj.minterAddress = message.minterAddress);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.class !== undefined && (obj.class = message.class);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    message.type !== undefined && (obj.type = message.type);
    message.cap !== undefined && (obj.cap = message.cap);
    message.supply !== undefined && (obj.supply = message.supply);
    message.paused !== undefined && (obj.paused = message.paused);
    message.deactivated !== undefined && (obj.deactivated = message.deactivated);
    return obj;
  },

  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.minterDid = object.minterDid ?? "";
    message.minterAddress = object.minterAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.class = object.class ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.image = object.image ?? "";
    message.type = object.type ?? "";
    message.cap = object.cap ?? "";
    message.supply = object.supply ?? "";
    message.paused = object.paused ?? false;
    message.deactivated = object.deactivated ?? false;
    return message;
  }

};

function createBaseTokenProperties(): TokenProperties {
  return {
    id: "",
    index: "",
    collection: "",
    tokenData: []
  };
}

export const TokenProperties = {
  encode(message: TokenProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }

    if (message.collection !== "") {
      writer.uint32(26).string(message.collection);
    }

    for (const v of message.tokenData) {
      TokenData.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenProperties();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.index = reader.string();
          break;

        case 3:
          message.collection = reader.string();
          break;

        case 4:
          message.tokenData.push(TokenData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenProperties {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      index: isSet(object.index) ? String(object.index) : "",
      collection: isSet(object.collection) ? String(object.collection) : "",
      tokenData: Array.isArray(object?.tokenData) ? object.tokenData.map((e: any) => TokenData.fromJSON(e)) : []
    };
  },

  toJSON(message: TokenProperties): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.index !== undefined && (obj.index = message.index);
    message.collection !== undefined && (obj.collection = message.collection);

    if (message.tokenData) {
      obj.tokenData = message.tokenData.map(e => e ? TokenData.toJSON(e) : undefined);
    } else {
      obj.tokenData = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TokenProperties>): TokenProperties {
    const message = createBaseTokenProperties();
    message.id = object.id ?? "";
    message.index = object.index ?? "";
    message.collection = object.collection ?? "";
    message.tokenData = object.tokenData?.map(e => TokenData.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenData(): TokenData {
  return {
    uri: "",
    encrypted: false,
    proof: "",
    type: ""
  };
}

export const TokenData = {
  encode(message: TokenData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }

    if (message.encrypted === true) {
      writer.uint32(16).bool(message.encrypted);
    }

    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }

    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;

        case 2:
          message.encrypted = reader.bool();
          break;

        case 3:
          message.proof = reader.string();
          break;

        case 4:
          message.type = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenData {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false,
      proof: isSet(object.proof) ? String(object.proof) : "",
      type: isSet(object.type) ? String(object.type) : ""
    };
  },

  toJSON(message: TokenData): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    message.proof !== undefined && (obj.proof = message.proof);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: Partial<TokenData>): TokenData {
    const message = createBaseTokenData();
    message.uri = object.uri ?? "";
    message.encrypted = object.encrypted ?? false;
    message.proof = object.proof ?? "";
    message.type = object.type ?? "";
    return message;
  }

};