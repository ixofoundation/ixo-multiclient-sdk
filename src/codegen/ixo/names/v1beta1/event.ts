//@ts-nocheck
import { Namespace, NamespaceSDKType, NameRecord, NameRecordSDKType, NameStatus, nameStatusFromJSON, nameStatusToJSON } from "./names";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface NamespaceCreatedEvent {
  namespace?: Namespace;
  /**
   * authority is the gov module address that created the namespace; lets
   * indexers attribute namespace changes to a governance proposal.
   */
  authority: string;
}
export interface NamespaceCreatedEventSDKType {
  namespace?: NamespaceSDKType;
  authority: string;
}
export interface NamespaceUpdatedEvent {
  namespace?: Namespace;
  authority: string;
}
export interface NamespaceUpdatedEventSDKType {
  namespace?: NamespaceSDKType;
  authority: string;
}
export interface NameRegisteredEvent {
  record?: NameRecord;
  /**
   * registered_by is the address that submitted the tx (owner DID controller
   * for self-register, registrar account otherwise).
   */
  registeredBy: string;
}
export interface NameRegisteredEventSDKType {
  record?: NameRecordSDKType;
  registered_by: string;
}
export interface NameUpdatedEvent {
  record?: NameRecord;
  updatedBy: string;
}
export interface NameUpdatedEventSDKType {
  record?: NameRecordSDKType;
  updated_by: string;
}
export interface NameTransferredEvent {
  namespace: string;
  normalizedName: string;
  fromOwnerDid: string;
  toOwnerDid: string;
  transferredBy: string;
}
export interface NameTransferredEventSDKType {
  namespace: string;
  normalized_name: string;
  from_owner_did: string;
  to_owner_did: string;
  transferred_by: string;
}
export interface NameStatusChangedEvent {
  namespace: string;
  normalizedName: string;
  oldStatus: NameStatus;
  newStatus: NameStatus;
  changedBy: string;
  reason: string;
}
export interface NameStatusChangedEventSDKType {
  namespace: string;
  normalized_name: string;
  old_status: NameStatus;
  new_status: NameStatus;
  changed_by: string;
  reason: string;
}
function createBaseNamespaceCreatedEvent(): NamespaceCreatedEvent {
  return {
    namespace: undefined,
    authority: ""
  };
}
export const NamespaceCreatedEvent = {
  encode(message: NamespaceCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NamespaceCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespaceCreatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = Namespace.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NamespaceCreatedEvent {
    return {
      namespace: isSet(object.namespace) ? Namespace.fromJSON(object.namespace) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: NamespaceCreatedEvent): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace ? Namespace.toJSON(message.namespace) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<NamespaceCreatedEvent>): NamespaceCreatedEvent {
    const message = createBaseNamespaceCreatedEvent();
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseNamespaceUpdatedEvent(): NamespaceUpdatedEvent {
  return {
    namespace: undefined,
    authority: ""
  };
}
export const NamespaceUpdatedEvent = {
  encode(message: NamespaceUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NamespaceUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespaceUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = Namespace.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NamespaceUpdatedEvent {
    return {
      namespace: isSet(object.namespace) ? Namespace.fromJSON(object.namespace) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: NamespaceUpdatedEvent): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace ? Namespace.toJSON(message.namespace) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<NamespaceUpdatedEvent>): NamespaceUpdatedEvent {
    const message = createBaseNamespaceUpdatedEvent();
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseNameRegisteredEvent(): NameRegisteredEvent {
  return {
    record: undefined,
    registeredBy: ""
  };
}
export const NameRegisteredEvent = {
  encode(message: NameRegisteredEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      NameRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    if (message.registeredBy !== "") {
      writer.uint32(18).string(message.registeredBy);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NameRegisteredEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameRegisteredEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = NameRecord.decode(reader, reader.uint32());
          break;
        case 2:
          message.registeredBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NameRegisteredEvent {
    return {
      record: isSet(object.record) ? NameRecord.fromJSON(object.record) : undefined,
      registeredBy: isSet(object.registeredBy) ? String(object.registeredBy) : ""
    };
  },
  toJSON(message: NameRegisteredEvent): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? NameRecord.toJSON(message.record) : undefined);
    message.registeredBy !== undefined && (obj.registeredBy = message.registeredBy);
    return obj;
  },
  fromPartial(object: Partial<NameRegisteredEvent>): NameRegisteredEvent {
    const message = createBaseNameRegisteredEvent();
    message.record = object.record !== undefined && object.record !== null ? NameRecord.fromPartial(object.record) : undefined;
    message.registeredBy = object.registeredBy ?? "";
    return message;
  }
};
function createBaseNameUpdatedEvent(): NameUpdatedEvent {
  return {
    record: undefined,
    updatedBy: ""
  };
}
export const NameUpdatedEvent = {
  encode(message: NameUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      NameRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    if (message.updatedBy !== "") {
      writer.uint32(18).string(message.updatedBy);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NameUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = NameRecord.decode(reader, reader.uint32());
          break;
        case 2:
          message.updatedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NameUpdatedEvent {
    return {
      record: isSet(object.record) ? NameRecord.fromJSON(object.record) : undefined,
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : ""
    };
  },
  toJSON(message: NameUpdatedEvent): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? NameRecord.toJSON(message.record) : undefined);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    return obj;
  },
  fromPartial(object: Partial<NameUpdatedEvent>): NameUpdatedEvent {
    const message = createBaseNameUpdatedEvent();
    message.record = object.record !== undefined && object.record !== null ? NameRecord.fromPartial(object.record) : undefined;
    message.updatedBy = object.updatedBy ?? "";
    return message;
  }
};
function createBaseNameTransferredEvent(): NameTransferredEvent {
  return {
    namespace: "",
    normalizedName: "",
    fromOwnerDid: "",
    toOwnerDid: "",
    transferredBy: ""
  };
}
export const NameTransferredEvent = {
  encode(message: NameTransferredEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.normalizedName !== "") {
      writer.uint32(18).string(message.normalizedName);
    }
    if (message.fromOwnerDid !== "") {
      writer.uint32(26).string(message.fromOwnerDid);
    }
    if (message.toOwnerDid !== "") {
      writer.uint32(34).string(message.toOwnerDid);
    }
    if (message.transferredBy !== "") {
      writer.uint32(42).string(message.transferredBy);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NameTransferredEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameTransferredEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.normalizedName = reader.string();
          break;
        case 3:
          message.fromOwnerDid = reader.string();
          break;
        case 4:
          message.toOwnerDid = reader.string();
          break;
        case 5:
          message.transferredBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NameTransferredEvent {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : "",
      fromOwnerDid: isSet(object.fromOwnerDid) ? String(object.fromOwnerDid) : "",
      toOwnerDid: isSet(object.toOwnerDid) ? String(object.toOwnerDid) : "",
      transferredBy: isSet(object.transferredBy) ? String(object.transferredBy) : ""
    };
  },
  toJSON(message: NameTransferredEvent): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    message.fromOwnerDid !== undefined && (obj.fromOwnerDid = message.fromOwnerDid);
    message.toOwnerDid !== undefined && (obj.toOwnerDid = message.toOwnerDid);
    message.transferredBy !== undefined && (obj.transferredBy = message.transferredBy);
    return obj;
  },
  fromPartial(object: Partial<NameTransferredEvent>): NameTransferredEvent {
    const message = createBaseNameTransferredEvent();
    message.namespace = object.namespace ?? "";
    message.normalizedName = object.normalizedName ?? "";
    message.fromOwnerDid = object.fromOwnerDid ?? "";
    message.toOwnerDid = object.toOwnerDid ?? "";
    message.transferredBy = object.transferredBy ?? "";
    return message;
  }
};
function createBaseNameStatusChangedEvent(): NameStatusChangedEvent {
  return {
    namespace: "",
    normalizedName: "",
    oldStatus: 0,
    newStatus: 0,
    changedBy: "",
    reason: ""
  };
}
export const NameStatusChangedEvent = {
  encode(message: NameStatusChangedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.normalizedName !== "") {
      writer.uint32(18).string(message.normalizedName);
    }
    if (message.oldStatus !== 0) {
      writer.uint32(24).int32(message.oldStatus);
    }
    if (message.newStatus !== 0) {
      writer.uint32(32).int32(message.newStatus);
    }
    if (message.changedBy !== "") {
      writer.uint32(42).string(message.changedBy);
    }
    if (message.reason !== "") {
      writer.uint32(50).string(message.reason);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NameStatusChangedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameStatusChangedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = reader.string();
          break;
        case 2:
          message.normalizedName = reader.string();
          break;
        case 3:
          message.oldStatus = (reader.int32() as any);
          break;
        case 4:
          message.newStatus = (reader.int32() as any);
          break;
        case 5:
          message.changedBy = reader.string();
          break;
        case 6:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NameStatusChangedEvent {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : "",
      oldStatus: isSet(object.oldStatus) ? nameStatusFromJSON(object.oldStatus) : 0,
      newStatus: isSet(object.newStatus) ? nameStatusFromJSON(object.newStatus) : 0,
      changedBy: isSet(object.changedBy) ? String(object.changedBy) : "",
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: NameStatusChangedEvent): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    message.oldStatus !== undefined && (obj.oldStatus = nameStatusToJSON(message.oldStatus));
    message.newStatus !== undefined && (obj.newStatus = nameStatusToJSON(message.newStatus));
    message.changedBy !== undefined && (obj.changedBy = message.changedBy);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial(object: Partial<NameStatusChangedEvent>): NameStatusChangedEvent {
    const message = createBaseNameStatusChangedEvent();
    message.namespace = object.namespace ?? "";
    message.normalizedName = object.normalizedName ?? "";
    message.oldStatus = object.oldStatus ?? 0;
    message.newStatus = object.newStatus ?? 0;
    message.changedBy = object.changedBy ?? "";
    message.reason = object.reason ?? "";
    return message;
  }
};