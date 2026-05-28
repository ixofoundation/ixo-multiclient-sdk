//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Namespace, NamespaceSDKType, NameRecord, NameRecordSDKType } from "./names";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryNamespaceRequest {
  name: string;
}
export interface QueryNamespaceRequestSDKType {
  name: string;
}
export interface QueryNamespaceResponse {
  namespace?: Namespace;
}
export interface QueryNamespaceResponseSDKType {
  namespace?: NamespaceSDKType;
}
export interface QueryNamespacesRequest {
  pagination?: PageRequest;
}
export interface QueryNamespacesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryNamespacesResponse {
  namespaces: Namespace[];
  pagination?: PageResponse;
}
export interface QueryNamespacesResponseSDKType {
  namespaces: NamespaceSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryResolveNameRequest {
  namespace: string;
  /** name is normalized server-side; callers may pass the display form. */
  name: string;
}
export interface QueryResolveNameRequestSDKType {
  namespace: string;
  name: string;
}
export interface QueryResolveNameResponse {
  record?: NameRecord;
}
export interface QueryResolveNameResponseSDKType {
  record?: NameRecordSDKType;
}
export interface QueryGetNameRequest {
  namespace: string;
  normalizedName: string;
}
export interface QueryGetNameRequestSDKType {
  namespace: string;
  normalized_name: string;
}
export interface QueryGetNameResponse {
  record?: NameRecord;
}
export interface QueryGetNameResponseSDKType {
  record?: NameRecordSDKType;
}
export interface QueryNamesByNamespaceRequest {
  namespace: string;
  pagination?: PageRequest;
}
export interface QueryNamesByNamespaceRequestSDKType {
  namespace: string;
  pagination?: PageRequestSDKType;
}
export interface QueryNamesByNamespaceResponse {
  records: NameRecord[];
  pagination?: PageResponse;
}
export interface QueryNamesByNamespaceResponseSDKType {
  records: NameRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryNamesByOwnerRequest {
  ownerDid: string;
  pagination?: PageRequest;
}
export interface QueryNamesByOwnerRequestSDKType {
  owner_did: string;
  pagination?: PageRequestSDKType;
}
export interface QueryNamesByOwnerResponse {
  records: NameRecord[];
  pagination?: PageResponse;
}
export interface QueryNamesByOwnerResponseSDKType {
  records: NameRecordSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryNamespaceRequest(): QueryNamespaceRequest {
  return {
    name: ""
  };
}
export const QueryNamespaceRequest = {
  encode(message: QueryNamespaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNamespaceRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: QueryNamespaceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<QueryNamespaceRequest>): QueryNamespaceRequest {
    const message = createBaseQueryNamespaceRequest();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseQueryNamespaceResponse(): QueryNamespaceResponse {
  return {
    namespace: undefined
  };
}
export const QueryNamespaceResponse = {
  encode(message: QueryNamespaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = Namespace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNamespaceResponse {
    return {
      namespace: isSet(object.namespace) ? Namespace.fromJSON(object.namespace) : undefined
    };
  },
  toJSON(message: QueryNamespaceResponse): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace ? Namespace.toJSON(message.namespace) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNamespaceResponse>): QueryNamespaceResponse {
    const message = createBaseQueryNamespaceResponse();
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    return message;
  }
};
function createBaseQueryNamespacesRequest(): QueryNamespacesRequest {
  return {
    pagination: undefined
  };
}
export const QueryNamespacesRequest = {
  encode(message: QueryNamespacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespacesRequest();
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
  fromJSON(object: any): QueryNamespacesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNamespacesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNamespacesRequest>): QueryNamespacesRequest {
    const message = createBaseQueryNamespacesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryNamespacesResponse(): QueryNamespacesResponse {
  return {
    namespaces: [],
    pagination: undefined
  };
}
export const QueryNamespacesResponse = {
  encode(message: QueryNamespacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.namespaces) {
      Namespace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamespacesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespaces.push(Namespace.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryNamespacesResponse {
    return {
      namespaces: Array.isArray(object?.namespaces) ? object.namespaces.map((e: any) => Namespace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNamespacesResponse): unknown {
    const obj: any = {};
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map(e => e ? Namespace.toJSON(e) : undefined);
    } else {
      obj.namespaces = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNamespacesResponse>): QueryNamespacesResponse {
    const message = createBaseQueryNamespacesResponse();
    message.namespaces = object.namespaces?.map(e => Namespace.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryResolveNameRequest(): QueryResolveNameRequest {
  return {
    namespace: "",
    name: ""
  };
}
export const QueryResolveNameRequest = {
  encode(message: QueryResolveNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolveNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolveNameRequest {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: QueryResolveNameRequest): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<QueryResolveNameRequest>): QueryResolveNameRequest {
    const message = createBaseQueryResolveNameRequest();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseQueryResolveNameResponse(): QueryResolveNameResponse {
  return {
    record: undefined
  };
}
export const QueryResolveNameResponse = {
  encode(message: QueryResolveNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      NameRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolveNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = NameRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolveNameResponse {
    return {
      record: isSet(object.record) ? NameRecord.fromJSON(object.record) : undefined
    };
  },
  toJSON(message: QueryResolveNameResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? NameRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryResolveNameResponse>): QueryResolveNameResponse {
    const message = createBaseQueryResolveNameResponse();
    message.record = object.record !== undefined && object.record !== null ? NameRecord.fromPartial(object.record) : undefined;
    return message;
  }
};
function createBaseQueryGetNameRequest(): QueryGetNameRequest {
  return {
    namespace: "",
    normalizedName: ""
  };
}
export const QueryGetNameRequest = {
  encode(message: QueryGetNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.normalizedName !== "") {
      writer.uint32(18).string(message.normalizedName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.normalizedName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetNameRequest {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : ""
    };
  },
  toJSON(message: QueryGetNameRequest): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    return obj;
  },
  fromPartial(object: Partial<QueryGetNameRequest>): QueryGetNameRequest {
    const message = createBaseQueryGetNameRequest();
    message.namespace = object.namespace ?? "";
    message.normalizedName = object.normalizedName ?? "";
    return message;
  }
};
function createBaseQueryGetNameResponse(): QueryGetNameResponse {
  return {
    record: undefined
  };
}
export const QueryGetNameResponse = {
  encode(message: QueryGetNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      NameRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = NameRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetNameResponse {
    return {
      record: isSet(object.record) ? NameRecord.fromJSON(object.record) : undefined
    };
  },
  toJSON(message: QueryGetNameResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? NameRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetNameResponse>): QueryGetNameResponse {
    const message = createBaseQueryGetNameResponse();
    message.record = object.record !== undefined && object.record !== null ? NameRecord.fromPartial(object.record) : undefined;
    return message;
  }
};
function createBaseQueryNamesByNamespaceRequest(): QueryNamesByNamespaceRequest {
  return {
    namespace: "",
    pagination: undefined
  };
}
export const QueryNamesByNamespaceRequest = {
  encode(message: QueryNamesByNamespaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByNamespaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamesByNamespaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNamesByNamespaceRequest {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNamesByNamespaceRequest): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNamesByNamespaceRequest>): QueryNamesByNamespaceRequest {
    const message = createBaseQueryNamesByNamespaceRequest();
    message.namespace = object.namespace ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryNamesByNamespaceResponse(): QueryNamesByNamespaceResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryNamesByNamespaceResponse = {
  encode(message: QueryNamesByNamespaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      NameRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByNamespaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamesByNamespaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(NameRecord.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryNamesByNamespaceResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => NameRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNamesByNamespaceResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? NameRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNamesByNamespaceResponse>): QueryNamesByNamespaceResponse {
    const message = createBaseQueryNamesByNamespaceResponse();
    message.records = object.records?.map(e => NameRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryNamesByOwnerRequest(): QueryNamesByOwnerRequest {
  return {
    ownerDid: "",
    pagination: undefined
  };
}
export const QueryNamesByOwnerRequest = {
  encode(message: QueryNamesByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerDid !== "") {
      writer.uint32(10).string(message.ownerDid);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamesByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerDid = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNamesByOwnerRequest {
    return {
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNamesByOwnerRequest): unknown {
    const obj: any = {};
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNamesByOwnerRequest>): QueryNamesByOwnerRequest {
    const message = createBaseQueryNamesByOwnerRequest();
    message.ownerDid = object.ownerDid ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryNamesByOwnerResponse(): QueryNamesByOwnerResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryNamesByOwnerResponse = {
  encode(message: QueryNamesByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      NameRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNamesByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamesByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(NameRecord.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryNamesByOwnerResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => NameRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNamesByOwnerResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? NameRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNamesByOwnerResponse>): QueryNamesByOwnerResponse {
    const message = createBaseQueryNamesByOwnerResponse();
    message.records = object.records?.map(e => NameRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};