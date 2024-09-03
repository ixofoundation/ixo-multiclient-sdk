//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponse {
  /** checksums is a list of the hex encoded checksums of all wasm codes stored. */
  checksums: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponseSDKType {
  checksums: string[];
  pagination?: PageResponseSDKType;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** checksum is a hex encoded string of the code stored. */
  checksum: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
  checksum: string;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponse {
  data: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponseSDKType {
  data: Uint8Array;
}
function createBaseQueryChecksumsRequest(): QueryChecksumsRequest {
  return {
    pagination: undefined
  };
}
export const QueryChecksumsRequest = {
  encode(message: QueryChecksumsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChecksumsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChecksumsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChecksumsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryChecksumsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryChecksumsRequest>): QueryChecksumsRequest {
    const message = createBaseQueryChecksumsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryChecksumsResponse(): QueryChecksumsResponse {
  return {
    checksums: [],
    pagination: undefined
  };
}
export const QueryChecksumsResponse = {
  encode(message: QueryChecksumsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.checksums) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChecksumsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChecksumsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksums.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChecksumsResponse {
    return {
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryChecksumsResponse): unknown {
    const obj: any = {};
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => e);
    } else {
      obj.checksums = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryChecksumsResponse>): QueryChecksumsResponse {
    const message = createBaseQueryChecksumsResponse();
    message.checksums = object.checksums?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    checksum: ""
  };
}
export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checksum !== "") {
      writer.uint32(10).string(message.checksum);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeRequest {
    return {
      checksum: isSet(object.checksum) ? String(object.checksum) : ""
    };
  },
  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.checksum !== undefined && (obj.checksum = message.checksum);
    return obj;
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.checksum = object.checksum ?? "";
    return message;
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};