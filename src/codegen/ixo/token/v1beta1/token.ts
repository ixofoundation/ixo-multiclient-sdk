//@ts-nocheck
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  ixo1155ContractCode: Long;
}
export interface ParamsSDKType {
  ixo1155_contract_code: Long;
}
export interface Token {
  /** address of minter */
  minter: string;
  /** generated on token initiation */
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
  stopped: boolean;
  /**
   * tokens that has been retired for this Token with specific name and contract
   * address
   */
  retired: TokensRetired[];
  /**
   * tokens that has been cancelled for this Token with specific name and
   * contract address
   */
  cancelled: TokensCancelled[];
}
export interface TokenSDKType {
  minter: string;
  contract_address: string;
  class: string;
  name: string;
  description: string;
  image: string;
  type: string;
  cap: string;
  supply: string;
  paused: boolean;
  stopped: boolean;
  retired: TokensRetiredSDKType[];
  cancelled: TokensCancelledSDKType[];
}
export interface TokensRetired {
  id: string;
  reason: string;
  jurisdiction: string;
  amount: string;
  owner: string;
}
export interface TokensRetiredSDKType {
  id: string;
  reason: string;
  jurisdiction: string;
  amount: string;
  owner: string;
}
export interface TokensCancelled {
  id: string;
  reason: string;
  amount: string;
  owner: string;
}
export interface TokensCancelledSDKType {
  id: string;
  reason: string;
  amount: string;
  owner: string;
}
export interface TokenProperties {
  id: string;
  /** index is the unique identifier hexstring that identifies the token */
  index: string;
  /** name is the token name, which is same as Token name */
  name: string;
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
  index: string;
  name: string;
  collection: string;
  tokenData: TokenDataSDKType[];
}
export interface TokenData {
  /** media type value should always be "application/json" */
  uri: string;
  encrypted: boolean;
  proof: string;
  type: string;
  /** did of entity to map token to */
  id: string;
}
export interface TokenDataSDKType {
  uri: string;
  encrypted: boolean;
  proof: string;
  type: string;
  id: string;
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
    minter: "",
    contractAddress: "",
    class: "",
    name: "",
    description: "",
    image: "",
    type: "",
    cap: "",
    supply: "",
    paused: false,
    stopped: false,
    retired: [],
    cancelled: []
  };
}
export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.class !== "") {
      writer.uint32(26).string(message.class);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.image !== "") {
      writer.uint32(50).string(message.image);
    }
    if (message.type !== "") {
      writer.uint32(58).string(message.type);
    }
    if (message.cap !== "") {
      writer.uint32(66).string(message.cap);
    }
    if (message.supply !== "") {
      writer.uint32(74).string(message.supply);
    }
    if (message.paused === true) {
      writer.uint32(80).bool(message.paused);
    }
    if (message.stopped === true) {
      writer.uint32(88).bool(message.stopped);
    }
    for (const v of message.retired) {
      TokensRetired.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.cancelled) {
      TokensCancelled.encode(v!, writer.uint32(106).fork()).ldelim();
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
          message.minter = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.class = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.image = reader.string();
          break;
        case 7:
          message.type = reader.string();
          break;
        case 8:
          message.cap = reader.string();
          break;
        case 9:
          message.supply = reader.string();
          break;
        case 10:
          message.paused = reader.bool();
          break;
        case 11:
          message.stopped = reader.bool();
          break;
        case 12:
          message.retired.push(TokensRetired.decode(reader, reader.uint32()));
          break;
        case 13:
          message.cancelled.push(TokensCancelled.decode(reader, reader.uint32()));
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
      minter: isSet(object.minter) ? String(object.minter) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      class: isSet(object.class) ? String(object.class) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      image: isSet(object.image) ? String(object.image) : "",
      type: isSet(object.type) ? String(object.type) : "",
      cap: isSet(object.cap) ? String(object.cap) : "",
      supply: isSet(object.supply) ? String(object.supply) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      stopped: isSet(object.stopped) ? Boolean(object.stopped) : false,
      retired: Array.isArray(object?.retired) ? object.retired.map((e: any) => TokensRetired.fromJSON(e)) : [],
      cancelled: Array.isArray(object?.cancelled) ? object.cancelled.map((e: any) => TokensCancelled.fromJSON(e)) : []
    };
  },
  toJSON(message: Token): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.class !== undefined && (obj.class = message.class);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    message.type !== undefined && (obj.type = message.type);
    message.cap !== undefined && (obj.cap = message.cap);
    message.supply !== undefined && (obj.supply = message.supply);
    message.paused !== undefined && (obj.paused = message.paused);
    message.stopped !== undefined && (obj.stopped = message.stopped);
    if (message.retired) {
      obj.retired = message.retired.map(e => e ? TokensRetired.toJSON(e) : undefined);
    } else {
      obj.retired = [];
    }
    if (message.cancelled) {
      obj.cancelled = message.cancelled.map(e => e ? TokensCancelled.toJSON(e) : undefined);
    } else {
      obj.cancelled = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.class = object.class ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.image = object.image ?? "";
    message.type = object.type ?? "";
    message.cap = object.cap ?? "";
    message.supply = object.supply ?? "";
    message.paused = object.paused ?? false;
    message.stopped = object.stopped ?? false;
    message.retired = object.retired?.map(e => TokensRetired.fromPartial(e)) || [];
    message.cancelled = object.cancelled?.map(e => TokensCancelled.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTokensRetired(): TokensRetired {
  return {
    id: "",
    reason: "",
    jurisdiction: "",
    amount: "",
    owner: ""
  };
}
export const TokensRetired = {
  encode(message: TokensRetired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(26).string(message.jurisdiction);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokensRetired {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokensRetired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.jurisdiction = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokensRetired {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: TokensRetired): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.reason !== undefined && (obj.reason = message.reason);
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<TokensRetired>): TokensRetired {
    const message = createBaseTokensRetired();
    message.id = object.id ?? "";
    message.reason = object.reason ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.amount = object.amount ?? "";
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseTokensCancelled(): TokensCancelled {
  return {
    id: "",
    reason: "",
    amount: "",
    owner: ""
  };
}
export const TokensCancelled = {
  encode(message: TokensCancelled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokensCancelled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokensCancelled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokensCancelled {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: TokensCancelled): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.reason !== undefined && (obj.reason = message.reason);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<TokensCancelled>): TokensCancelled {
    const message = createBaseTokensCancelled();
    message.id = object.id ?? "";
    message.reason = object.reason ?? "";
    message.amount = object.amount ?? "";
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseTokenProperties(): TokenProperties {
  return {
    id: "",
    index: "",
    name: "",
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
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.collection !== "") {
      writer.uint32(34).string(message.collection);
    }
    for (const v of message.tokenData) {
      TokenData.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.name = reader.string();
          break;
        case 4:
          message.collection = reader.string();
          break;
        case 5:
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
      name: isSet(object.name) ? String(object.name) : "",
      collection: isSet(object.collection) ? String(object.collection) : "",
      tokenData: Array.isArray(object?.tokenData) ? object.tokenData.map((e: any) => TokenData.fromJSON(e)) : []
    };
  },
  toJSON(message: TokenProperties): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
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
    message.name = object.name ?? "";
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
    type: "",
    id: ""
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
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
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
        case 5:
          message.id = reader.string();
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
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message: TokenData): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    message.proof !== undefined && (obj.proof = message.proof);
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<TokenData>): TokenData {
    const message = createBaseTokenData();
    message.uri = object.uri ?? "";
    message.encrypted = object.encrypted ?? false;
    message.proof = object.proof ?? "";
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    return message;
  }
};