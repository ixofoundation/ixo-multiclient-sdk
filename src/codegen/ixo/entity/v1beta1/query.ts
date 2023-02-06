import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Entity, EntitySDKType } from "./entity";
import { IidDocument, IidDocumentSDKType } from "../../iid/v1beta1/iid";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryEntityRequest {
  id: string;
}
export interface QueryEntityRequestSDKType {
  id: string;
}
export interface QueryEntityResponse {
  entity?: Entity;
  iidDocument?: IidDocument;
}
export interface QueryEntityResponseSDKType {
  entity?: EntitySDKType;
  iidDocument?: IidDocumentSDKType;
}
export interface QueryEntityMetadataRequest {
  id: string;
}
export interface QueryEntityMetadataRequestSDKType {
  id: string;
}
export interface QueryEntityMetadataResponse {
  entity?: Entity;
}
export interface QueryEntityMetadataResponseSDKType {
  entity?: EntitySDKType;
}
export interface QueryEntityIidDocumentRequest {
  id: string;
}
export interface QueryEntityIidDocumentRequestSDKType {
  id: string;
}
export interface QueryEntityIidDocumentResponse {
  iidDocument?: IidDocument;
}
export interface QueryEntityIidDocumentResponseSDKType {
  iidDocument?: IidDocumentSDKType;
}
export interface QueryEntityVerifiedRequest {
  id: string;
}
export interface QueryEntityVerifiedRequestSDKType {
  id: string;
}
export interface QueryEntityVerifiedResponse {
  entityVerified: boolean;
}
export interface QueryEntityVerifiedResponseSDKType {
  entity_verified: boolean;
}
export interface QueryEntityListRequest {
  pagination?: PageRequest;
}
export interface QueryEntityListRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryEntityListResponse {
  entities: Entity[];
  pagination?: PageResponse;
}
export interface QueryEntityListResponseSDKType {
  entities: EntitySDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryEntityRequest(): QueryEntityRequest {
  return {
    id: ""
  };
}

export const QueryEntityRequest = {
  encode(message: QueryEntityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityRequest();

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

  fromJSON(object: any): QueryEntityRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryEntityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityRequest>): QueryEntityRequest {
    const message = createBaseQueryEntityRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryEntityResponse(): QueryEntityResponse {
  return {
    entity: undefined,
    iidDocument: undefined
  };
}

export const QueryEntityResponse = {
  encode(message: QueryEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }

    if (message.iidDocument !== undefined) {
      IidDocument.encode(message.iidDocument, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entity = Entity.decode(reader, reader.uint32());
          break;

        case 2:
          message.iidDocument = IidDocument.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryEntityResponse {
    return {
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      iidDocument: isSet(object.iidDocument) ? IidDocument.fromJSON(object.iidDocument) : undefined
    };
  },

  toJSON(message: QueryEntityResponse): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.iidDocument !== undefined && (obj.iidDocument = message.iidDocument ? IidDocument.toJSON(message.iidDocument) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityResponse>): QueryEntityResponse {
    const message = createBaseQueryEntityResponse();
    message.entity = object.entity !== undefined && object.entity !== null ? Entity.fromPartial(object.entity) : undefined;
    message.iidDocument = object.iidDocument !== undefined && object.iidDocument !== null ? IidDocument.fromPartial(object.iidDocument) : undefined;
    return message;
  }

};

function createBaseQueryEntityMetadataRequest(): QueryEntityMetadataRequest {
  return {
    id: ""
  };
}

export const QueryEntityMetadataRequest = {
  encode(message: QueryEntityMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityMetadataRequest();

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

  fromJSON(object: any): QueryEntityMetadataRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryEntityMetadataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityMetadataRequest>): QueryEntityMetadataRequest {
    const message = createBaseQueryEntityMetadataRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryEntityMetadataResponse(): QueryEntityMetadataResponse {
  return {
    entity: undefined
  };
}

export const QueryEntityMetadataResponse = {
  encode(message: QueryEntityMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entity = Entity.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryEntityMetadataResponse {
    return {
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined
    };
  },

  toJSON(message: QueryEntityMetadataResponse): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityMetadataResponse>): QueryEntityMetadataResponse {
    const message = createBaseQueryEntityMetadataResponse();
    message.entity = object.entity !== undefined && object.entity !== null ? Entity.fromPartial(object.entity) : undefined;
    return message;
  }

};

function createBaseQueryEntityIidDocumentRequest(): QueryEntityIidDocumentRequest {
  return {
    id: ""
  };
}

export const QueryEntityIidDocumentRequest = {
  encode(message: QueryEntityIidDocumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityIidDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityIidDocumentRequest();

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

  fromJSON(object: any): QueryEntityIidDocumentRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryEntityIidDocumentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityIidDocumentRequest>): QueryEntityIidDocumentRequest {
    const message = createBaseQueryEntityIidDocumentRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryEntityIidDocumentResponse(): QueryEntityIidDocumentResponse {
  return {
    iidDocument: undefined
  };
}

export const QueryEntityIidDocumentResponse = {
  encode(message: QueryEntityIidDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iidDocument !== undefined) {
      IidDocument.encode(message.iidDocument, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityIidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityIidDocumentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iidDocument = IidDocument.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryEntityIidDocumentResponse {
    return {
      iidDocument: isSet(object.iidDocument) ? IidDocument.fromJSON(object.iidDocument) : undefined
    };
  },

  toJSON(message: QueryEntityIidDocumentResponse): unknown {
    const obj: any = {};
    message.iidDocument !== undefined && (obj.iidDocument = message.iidDocument ? IidDocument.toJSON(message.iidDocument) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityIidDocumentResponse>): QueryEntityIidDocumentResponse {
    const message = createBaseQueryEntityIidDocumentResponse();
    message.iidDocument = object.iidDocument !== undefined && object.iidDocument !== null ? IidDocument.fromPartial(object.iidDocument) : undefined;
    return message;
  }

};

function createBaseQueryEntityVerifiedRequest(): QueryEntityVerifiedRequest {
  return {
    id: ""
  };
}

export const QueryEntityVerifiedRequest = {
  encode(message: QueryEntityVerifiedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityVerifiedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityVerifiedRequest();

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

  fromJSON(object: any): QueryEntityVerifiedRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryEntityVerifiedRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityVerifiedRequest>): QueryEntityVerifiedRequest {
    const message = createBaseQueryEntityVerifiedRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryEntityVerifiedResponse(): QueryEntityVerifiedResponse {
  return {
    entityVerified: false
  };
}

export const QueryEntityVerifiedResponse = {
  encode(message: QueryEntityVerifiedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityVerified === true) {
      writer.uint32(8).bool(message.entityVerified);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityVerifiedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityVerifiedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityVerified = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryEntityVerifiedResponse {
    return {
      entityVerified: isSet(object.entityVerified) ? Boolean(object.entityVerified) : false
    };
  },

  toJSON(message: QueryEntityVerifiedResponse): unknown {
    const obj: any = {};
    message.entityVerified !== undefined && (obj.entityVerified = message.entityVerified);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityVerifiedResponse>): QueryEntityVerifiedResponse {
    const message = createBaseQueryEntityVerifiedResponse();
    message.entityVerified = object.entityVerified ?? false;
    return message;
  }

};

function createBaseQueryEntityListRequest(): QueryEntityListRequest {
  return {
    pagination: undefined
  };
}

export const QueryEntityListRequest = {
  encode(message: QueryEntityListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityListRequest();

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

  fromJSON(object: any): QueryEntityListRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryEntityListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityListRequest>): QueryEntityListRequest {
    const message = createBaseQueryEntityListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryEntityListResponse(): QueryEntityListResponse {
  return {
    entities: [],
    pagination: undefined
  };
}

export const QueryEntityListResponse = {
  encode(message: QueryEntityListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entities) {
      Entity.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entities.push(Entity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryEntityListResponse {
    return {
      entities: Array.isArray(object?.entities) ? object.entities.map((e: any) => Entity.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryEntityListResponse): unknown {
    const obj: any = {};

    if (message.entities) {
      obj.entities = message.entities.map(e => e ? Entity.toJSON(e) : undefined);
    } else {
      obj.entities = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryEntityListResponse>): QueryEntityListResponse {
    const message = createBaseQueryEntityListResponse();
    message.entities = object.entities?.map(e => Entity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};