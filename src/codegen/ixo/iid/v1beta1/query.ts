import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { IidDocument, IidDocumentSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryIidDocumentsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryIidDocumentsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryIidDocumentsResponse {
  iidDocuments: IidDocument[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
export interface QueryIidDocumentsResponseSDKType {
  iidDocuments: IidDocumentSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryIidDocumentRequest {
  /** did id of iid document querying */
  id: string;
}
export interface QueryIidDocumentRequestSDKType {
  id: string;
}
export interface QueryIidDocumentResponse {
  iidDocument?: IidDocument;
}
export interface QueryIidDocumentResponseSDKType {
  iidDocument?: IidDocumentSDKType;
}

function createBaseQueryIidDocumentsRequest(): QueryIidDocumentsRequest {
  return {
    pagination: undefined
  };
}

export const QueryIidDocumentsRequest = {
  encode(message: QueryIidDocumentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentsRequest();

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

  fromJSON(object: any): QueryIidDocumentsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryIidDocumentsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentsRequest>): QueryIidDocumentsRequest {
    const message = createBaseQueryIidDocumentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIidDocumentsResponse(): QueryIidDocumentsResponse {
  return {
    iidDocuments: [],
    pagination: undefined
  };
}

export const QueryIidDocumentsResponse = {
  encode(message: QueryIidDocumentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.iidDocuments) {
      IidDocument.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iidDocuments.push(IidDocument.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryIidDocumentsResponse {
    return {
      iidDocuments: Array.isArray(object?.iidDocuments) ? object.iidDocuments.map((e: any) => IidDocument.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryIidDocumentsResponse): unknown {
    const obj: any = {};

    if (message.iidDocuments) {
      obj.iidDocuments = message.iidDocuments.map(e => e ? IidDocument.toJSON(e) : undefined);
    } else {
      obj.iidDocuments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentsResponse>): QueryIidDocumentsResponse {
    const message = createBaseQueryIidDocumentsResponse();
    message.iidDocuments = object.iidDocuments?.map(e => IidDocument.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIidDocumentRequest(): QueryIidDocumentRequest {
  return {
    id: ""
  };
}

export const QueryIidDocumentRequest = {
  encode(message: QueryIidDocumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentRequest();

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

  fromJSON(object: any): QueryIidDocumentRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryIidDocumentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentRequest>): QueryIidDocumentRequest {
    const message = createBaseQueryIidDocumentRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryIidDocumentResponse(): QueryIidDocumentResponse {
  return {
    iidDocument: undefined
  };
}

export const QueryIidDocumentResponse = {
  encode(message: QueryIidDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iidDocument !== undefined) {
      IidDocument.encode(message.iidDocument, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentResponse();

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

  fromJSON(object: any): QueryIidDocumentResponse {
    return {
      iidDocument: isSet(object.iidDocument) ? IidDocument.fromJSON(object.iidDocument) : undefined
    };
  },

  toJSON(message: QueryIidDocumentResponse): unknown {
    const obj: any = {};
    message.iidDocument !== undefined && (obj.iidDocument = message.iidDocument ? IidDocument.toJSON(message.iidDocument) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentResponse>): QueryIidDocumentResponse {
    const message = createBaseQueryIidDocumentResponse();
    message.iidDocument = object.iidDocument !== undefined && object.iidDocument !== null ? IidDocument.fromPartial(object.iidDocument) : undefined;
    return message;
  }

};