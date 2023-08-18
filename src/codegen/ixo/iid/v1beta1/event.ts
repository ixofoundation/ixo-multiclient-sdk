import { IidDocument, IidDocumentSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** IidDocumentCreatedEvent is triggered when a new IidDocument is created. */
export interface IidDocumentCreatedEvent {
  iidDocument?: IidDocument;
}
/** IidDocumentCreatedEvent is triggered when a new IidDocument is created. */
export interface IidDocumentCreatedEventSDKType {
  iidDocument?: IidDocumentSDKType;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */
export interface IidDocumentUpdatedEvent {
  iidDocument?: IidDocument;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */
export interface IidDocumentUpdatedEventSDKType {
  iidDocument?: IidDocumentSDKType;
}
function createBaseIidDocumentCreatedEvent(): IidDocumentCreatedEvent {
  return {
    iidDocument: undefined
  };
}
export const IidDocumentCreatedEvent = {
  encode(message: IidDocumentCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iidDocument !== undefined) {
      IidDocument.encode(message.iidDocument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IidDocumentCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidDocumentCreatedEvent();
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
  fromJSON(object: any): IidDocumentCreatedEvent {
    return {
      iidDocument: isSet(object.iidDocument) ? IidDocument.fromJSON(object.iidDocument) : undefined
    };
  },
  toJSON(message: IidDocumentCreatedEvent): unknown {
    const obj: any = {};
    message.iidDocument !== undefined && (obj.iidDocument = message.iidDocument ? IidDocument.toJSON(message.iidDocument) : undefined);
    return obj;
  },
  fromPartial(object: Partial<IidDocumentCreatedEvent>): IidDocumentCreatedEvent {
    const message = createBaseIidDocumentCreatedEvent();
    message.iidDocument = object.iidDocument !== undefined && object.iidDocument !== null ? IidDocument.fromPartial(object.iidDocument) : undefined;
    return message;
  }
};
function createBaseIidDocumentUpdatedEvent(): IidDocumentUpdatedEvent {
  return {
    iidDocument: undefined
  };
}
export const IidDocumentUpdatedEvent = {
  encode(message: IidDocumentUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iidDocument !== undefined) {
      IidDocument.encode(message.iidDocument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IidDocumentUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidDocumentUpdatedEvent();
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
  fromJSON(object: any): IidDocumentUpdatedEvent {
    return {
      iidDocument: isSet(object.iidDocument) ? IidDocument.fromJSON(object.iidDocument) : undefined
    };
  },
  toJSON(message: IidDocumentUpdatedEvent): unknown {
    const obj: any = {};
    message.iidDocument !== undefined && (obj.iidDocument = message.iidDocument ? IidDocument.toJSON(message.iidDocument) : undefined);
    return obj;
  },
  fromPartial(object: Partial<IidDocumentUpdatedEvent>): IidDocumentUpdatedEvent {
    const message = createBaseIidDocumentUpdatedEvent();
    message.iidDocument = object.iidDocument !== undefined && object.iidDocument !== null ? IidDocument.fromPartial(object.iidDocument) : undefined;
    return message;
  }
};