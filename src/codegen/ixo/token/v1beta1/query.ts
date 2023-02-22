import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Token, TokenSDKType, TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryTokenListRequest {
  pagination?: PageRequest;
  /** minter address to get list for */

  minter: string;
}
export interface QueryTokenListRequestSDKType {
  pagination?: PageRequestSDKType;
  /** minter address to get list for */

  minter: string;
}
export interface QueryTokenListResponse {
  pagination?: PageResponse;
  tokenDocs: Token[];
}
export interface QueryTokenListResponseSDKType {
  pagination?: PageResponseSDKType;
  tokenDocs: TokenSDKType[];
}
export interface QueryTokenDocRequest {
  /** minter address to get Token Doc for */
  minter: string;
  contractAddress: string;
}
export interface QueryTokenDocRequestSDKType {
  /** minter address to get Token Doc for */
  minter: string;
  contract_address: string;
}
export interface QueryTokenDocResponse {
  tokenDoc?: Token;
}
export interface QueryTokenDocResponseSDKType {
  tokenDoc?: TokenSDKType;
}
export interface QueryTokenMetadataRequest {
  id: string;
}
export interface QueryTokenMetadataRequestSDKType {
  id: string;
}
export interface QueryTokenMetadataResponse {
  name: string;
  description: string;
  decimals: string;
  image: string;
  index: string;
  properties?: TokenMetadataProperties;
}
export interface QueryTokenMetadataResponseSDKType {
  name: string;
  description: string;
  decimals: string;
  image: string;
  index: string;
  properties?: TokenMetadataPropertiesSDKType;
}
export interface TokenMetadataProperties {
  class: string;
  collection: string;
  cap: string;
  linkedResources: TokenData[];
}
export interface TokenMetadataPropertiesSDKType {
  class: string;
  collection: string;
  cap: string;
  linkedResources: TokenDataSDKType[];
}

function createBaseQueryTokenListRequest(): QueryTokenListRequest {
  return {
    pagination: undefined,
    minter: ""
  };
}

export const QueryTokenListRequest = {
  encode(message: QueryTokenListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenListRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.minter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenListRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      minter: isSet(object.minter) ? String(object.minter) : ""
    };
  },

  toJSON(message: QueryTokenListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.minter !== undefined && (obj.minter = message.minter);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenListRequest>): QueryTokenListRequest {
    const message = createBaseQueryTokenListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.minter = object.minter ?? "";
    return message;
  }

};

function createBaseQueryTokenListResponse(): QueryTokenListResponse {
  return {
    pagination: undefined,
    tokenDocs: []
  };
}

export const QueryTokenListResponse = {
  encode(message: QueryTokenListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.tokenDocs) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 2:
          message.tokenDocs.push(Token.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenListResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      tokenDocs: Array.isArray(object?.tokenDocs) ? object.tokenDocs.map((e: any) => Token.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTokenListResponse): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);

    if (message.tokenDocs) {
      obj.tokenDocs = message.tokenDocs.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.tokenDocs = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryTokenListResponse>): QueryTokenListResponse {
    const message = createBaseQueryTokenListResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.tokenDocs = object.tokenDocs?.map(e => Token.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTokenDocRequest(): QueryTokenDocRequest {
  return {
    minter: "",
    contractAddress: ""
  };
}

export const QueryTokenDocRequest = {
  encode(message: QueryTokenDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenDocRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;

        case 2:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenDocRequest {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: QueryTokenDocRequest): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenDocRequest>): QueryTokenDocRequest {
    const message = createBaseQueryTokenDocRequest();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryTokenDocResponse(): QueryTokenDocResponse {
  return {
    tokenDoc: undefined
  };
}

export const QueryTokenDocResponse = {
  encode(message: QueryTokenDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenDoc !== undefined) {
      Token.encode(message.tokenDoc, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenDocResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenDoc = Token.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenDocResponse {
    return {
      tokenDoc: isSet(object.tokenDoc) ? Token.fromJSON(object.tokenDoc) : undefined
    };
  },

  toJSON(message: QueryTokenDocResponse): unknown {
    const obj: any = {};
    message.tokenDoc !== undefined && (obj.tokenDoc = message.tokenDoc ? Token.toJSON(message.tokenDoc) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenDocResponse>): QueryTokenDocResponse {
    const message = createBaseQueryTokenDocResponse();
    message.tokenDoc = object.tokenDoc !== undefined && object.tokenDoc !== null ? Token.fromPartial(object.tokenDoc) : undefined;
    return message;
  }

};

function createBaseQueryTokenMetadataRequest(): QueryTokenMetadataRequest {
  return {
    id: ""
  };
}

export const QueryTokenMetadataRequest = {
  encode(message: QueryTokenMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMetadataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenMetadataRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryTokenMetadataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenMetadataRequest>): QueryTokenMetadataRequest {
    const message = createBaseQueryTokenMetadataRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryTokenMetadataResponse(): QueryTokenMetadataResponse {
  return {
    name: "",
    description: "",
    decimals: "",
    image: "",
    index: "",
    properties: undefined
  };
}

export const QueryTokenMetadataResponse = {
  encode(message: QueryTokenMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.decimals !== "") {
      writer.uint32(26).string(message.decimals);
    }

    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }

    if (message.index !== "") {
      writer.uint32(42).string(message.index);
    }

    if (message.properties !== undefined) {
      TokenMetadataProperties.encode(message.properties, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.decimals = reader.string();
          break;

        case 4:
          message.image = reader.string();
          break;

        case 5:
          message.index = reader.string();
          break;

        case 6:
          message.properties = TokenMetadataProperties.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenMetadataResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      decimals: isSet(object.decimals) ? String(object.decimals) : "",
      image: isSet(object.image) ? String(object.image) : "",
      index: isSet(object.index) ? String(object.index) : "",
      properties: isSet(object.properties) ? TokenMetadataProperties.fromJSON(object.properties) : undefined
    };
  },

  toJSON(message: QueryTokenMetadataResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.image !== undefined && (obj.image = message.image);
    message.index !== undefined && (obj.index = message.index);
    message.properties !== undefined && (obj.properties = message.properties ? TokenMetadataProperties.toJSON(message.properties) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenMetadataResponse>): QueryTokenMetadataResponse {
    const message = createBaseQueryTokenMetadataResponse();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.decimals = object.decimals ?? "";
    message.image = object.image ?? "";
    message.index = object.index ?? "";
    message.properties = object.properties !== undefined && object.properties !== null ? TokenMetadataProperties.fromPartial(object.properties) : undefined;
    return message;
  }

};

function createBaseTokenMetadataProperties(): TokenMetadataProperties {
  return {
    class: "",
    collection: "",
    cap: "",
    linkedResources: []
  };
}

export const TokenMetadataProperties = {
  encode(message: TokenMetadataProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== "") {
      writer.uint32(10).string(message.class);
    }

    if (message.collection !== "") {
      writer.uint32(18).string(message.collection);
    }

    if (message.cap !== "") {
      writer.uint32(26).string(message.cap);
    }

    for (const v of message.linkedResources) {
      TokenData.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadataProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMetadataProperties();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.class = reader.string();
          break;

        case 2:
          message.collection = reader.string();
          break;

        case 3:
          message.cap = reader.string();
          break;

        case 4:
          message.linkedResources.push(TokenData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenMetadataProperties {
    return {
      class: isSet(object.class) ? String(object.class) : "",
      collection: isSet(object.collection) ? String(object.collection) : "",
      cap: isSet(object.cap) ? String(object.cap) : "",
      linkedResources: Array.isArray(object?.linkedResources) ? object.linkedResources.map((e: any) => TokenData.fromJSON(e)) : []
    };
  },

  toJSON(message: TokenMetadataProperties): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class);
    message.collection !== undefined && (obj.collection = message.collection);
    message.cap !== undefined && (obj.cap = message.cap);

    if (message.linkedResources) {
      obj.linkedResources = message.linkedResources.map(e => e ? TokenData.toJSON(e) : undefined);
    } else {
      obj.linkedResources = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TokenMetadataProperties>): TokenMetadataProperties {
    const message = createBaseTokenMetadataProperties();
    message.class = object.class ?? "";
    message.collection = object.collection ?? "";
    message.cap = object.cap ?? "";
    message.linkedResources = object.linkedResources?.map(e => TokenData.fromPartial(e)) || [];
    return message;
  }

};