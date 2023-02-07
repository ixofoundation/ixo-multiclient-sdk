import { TokenMinter, TokenMinterSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { isSet, isObject } from "../../../helpers";
export interface QueryTokenListRequest {
  minterDid: string;
}
export interface QueryTokenListRequestSDKType {
  minter_did: string;
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenListResponse {
  contracts: TokenMinter[];
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenListResponseSDKType {
  contracts: TokenMinterSDKType[];
}
/**
 * QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenDocRequest {
  minterDid: string;
  contractAddress: string;
}
/**
 * QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenDocRequestSDKType {
  minter_did: string;
  contract_address: string;
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenDocResponse {}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenDocResponseSDKType {}
export interface QueryTokenConfigRequest {}
export interface QueryTokenConfigRequestSDKType {}
export interface QueryTokenConfigResponse_MapEntry {
  key: string;
  value: string;
}
export interface QueryTokenConfigResponse_MapEntrySDKType {
  key: string;
  value: string;
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenConfigResponse {
  map: {
    [key: string]: string;
  };
}
/**
 * QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC
 * method.
 */

export interface QueryTokenConfigResponseSDKType {
  map: {
    [key: string]: string;
  };
}

function createBaseQueryTokenListRequest(): QueryTokenListRequest {
  return {
    minterDid: ""
  };
}

export const QueryTokenListRequest = {
  encode(message: QueryTokenListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
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
          message.minterDid = reader.string();
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
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : ""
    };
  },

  toJSON(message: QueryTokenListRequest): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenListRequest>): QueryTokenListRequest {
    const message = createBaseQueryTokenListRequest();
    message.minterDid = object.minterDid ?? "";
    return message;
  }

};

function createBaseQueryTokenListResponse(): QueryTokenListResponse {
  return {
    contracts: []
  };
}

export const QueryTokenListResponse = {
  encode(message: QueryTokenListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      TokenMinter.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.contracts.push(TokenMinter.decode(reader, reader.uint32()));
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
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => TokenMinter.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTokenListResponse): unknown {
    const obj: any = {};

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? TokenMinter.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryTokenListResponse>): QueryTokenListResponse {
    const message = createBaseQueryTokenListResponse();
    message.contracts = object.contracts?.map(e => TokenMinter.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTokenDocRequest(): QueryTokenDocRequest {
  return {
    minterDid: "",
    contractAddress: ""
  };
}

export const QueryTokenDocRequest = {
  encode(message: QueryTokenDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
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
          message.minterDid = reader.string();
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
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: QueryTokenDocRequest): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenDocRequest>): QueryTokenDocRequest {
    const message = createBaseQueryTokenDocRequest();
    message.minterDid = object.minterDid ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryTokenDocResponse(): QueryTokenDocResponse {
  return {};
}

export const QueryTokenDocResponse = {
  encode(_: QueryTokenDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenDocResponse();

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

  fromJSON(_: any): QueryTokenDocResponse {
    return {};
  },

  toJSON(_: QueryTokenDocResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryTokenDocResponse>): QueryTokenDocResponse {
    const message = createBaseQueryTokenDocResponse();
    return message;
  }

};

function createBaseQueryTokenConfigRequest(): QueryTokenConfigRequest {
  return {};
}

export const QueryTokenConfigRequest = {
  encode(_: QueryTokenConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenConfigRequest();

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

  fromJSON(_: any): QueryTokenConfigRequest {
    return {};
  },

  toJSON(_: QueryTokenConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryTokenConfigRequest>): QueryTokenConfigRequest {
    const message = createBaseQueryTokenConfigRequest();
    return message;
  }

};

function createBaseQueryTokenConfigResponse_MapEntry(): QueryTokenConfigResponse_MapEntry {
  return {
    key: "",
    value: ""
  };
}

export const QueryTokenConfigResponse_MapEntry = {
  encode(message: QueryTokenConfigResponse_MapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenConfigResponse_MapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenConfigResponse_MapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenConfigResponse_MapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: QueryTokenConfigResponse_MapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<QueryTokenConfigResponse_MapEntry>): QueryTokenConfigResponse_MapEntry {
    const message = createBaseQueryTokenConfigResponse_MapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseQueryTokenConfigResponse(): QueryTokenConfigResponse {
  return {
    map: {}
  };
}

export const QueryTokenConfigResponse = {
  encode(message: QueryTokenConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.map).forEach(([key, value]) => {
      QueryTokenConfigResponse_MapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryTokenConfigResponse_MapEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.map[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTokenConfigResponse {
    return {
      map: isObject(object.map) ? Object.entries(object.map).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: QueryTokenConfigResponse): unknown {
    const obj: any = {};
    obj.map = {};

    if (message.map) {
      Object.entries(message.map).forEach(([k, v]) => {
        obj.map[k] = v;
      });
    }

    return obj;
  },

  fromPartial(object: Partial<QueryTokenConfigResponse>): QueryTokenConfigResponse {
    const message = createBaseQueryTokenConfigResponse();
    message.map = Object.entries(object.map ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};