//@ts-nocheck
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export interface Context {
  key: string;
  val: string;
}
export interface ContextSDKType {
  key: string;
  val: string;
}
export interface AccordedRight {
  type: string;
  id: string;
  mechanism: string;
  message: string;
  service: string;
}
export interface AccordedRightSDKType {
  type: string;
  id: string;
  mechanism: string;
  message: string;
  service: string;
}
export interface LinkedResource {
  type: string;
  id: string;
  description: string;
  mediaType: string;
  serviceEndpoint: string;
  proof: string;
  encrypted: string;
  right: string;
}
export interface LinkedResourceSDKType {
  type: string;
  id: string;
  description: string;
  mediaType: string;
  serviceEndpoint: string;
  proof: string;
  encrypted: string;
  right: string;
}
export interface LinkedClaim {
  type: string;
  id: string;
  description: string;
  serviceEndpoint: string;
  proof: string;
  encrypted: string;
  right: string;
}
export interface LinkedClaimSDKType {
  type: string;
  id: string;
  description: string;
  serviceEndpoint: string;
  proof: string;
  encrypted: string;
  right: string;
}
export interface LinkedEntity {
  type: string;
  id: string;
  relationship: string;
  service: string;
}
export interface LinkedEntitySDKType {
  type: string;
  id: string;
  relationship: string;
  service: string;
}
export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  blockchainAccountID?: string;
  publicKeyHex?: string;
  publicKeyMultibase?: string;
  publicKeyBase58?: string;
}
export interface VerificationMethodSDKType {
  id: string;
  type: string;
  controller: string;
  blockchainAccountID?: string;
  publicKeyHex?: string;
  publicKeyMultibase?: string;
  publicKeyBase58?: string;
}
export interface Service {
  id: string;
  type: string;
  serviceEndpoint: string;
}
export interface ServiceSDKType {
  id: string;
  type: string;
  serviceEndpoint: string;
}
export interface IidMetadata {
  versionId: string;
  created?: Timestamp;
  updated?: Timestamp;
  deactivated: boolean;
}
export interface IidMetadataSDKType {
  versionId: string;
  created?: TimestampSDKType;
  updated?: TimestampSDKType;
  deactivated: boolean;
}
function createBaseContext(): Context {
  return {
    key: "",
    val: ""
  };
}
export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.val = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Context {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      val: isSet(object.val) ? String(object.val) : ""
    };
  },
  toJSON(message: Context): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.val !== undefined && (obj.val = message.val);
    return obj;
  },
  fromPartial(object: Partial<Context>): Context {
    const message = createBaseContext();
    message.key = object.key ?? "";
    message.val = object.val ?? "";
    return message;
  }
};
function createBaseAccordedRight(): AccordedRight {
  return {
    type: "",
    id: "",
    mechanism: "",
    message: "",
    service: ""
  };
}
export const AccordedRight = {
  encode(message: AccordedRight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.mechanism !== "") {
      writer.uint32(26).string(message.mechanism);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    if (message.service !== "") {
      writer.uint32(42).string(message.service);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AccordedRight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccordedRight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.mechanism = reader.string();
          break;
        case 4:
          message.message = reader.string();
          break;
        case 5:
          message.service = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccordedRight {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : "",
      mechanism: isSet(object.mechanism) ? String(object.mechanism) : "",
      message: isSet(object.message) ? String(object.message) : "",
      service: isSet(object.service) ? String(object.service) : ""
    };
  },
  toJSON(message: AccordedRight): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    message.mechanism !== undefined && (obj.mechanism = message.mechanism);
    message.message !== undefined && (obj.message = message.message);
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },
  fromPartial(object: Partial<AccordedRight>): AccordedRight {
    const message = createBaseAccordedRight();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.mechanism = object.mechanism ?? "";
    message.message = object.message ?? "";
    message.service = object.service ?? "";
    return message;
  }
};
function createBaseLinkedResource(): LinkedResource {
  return {
    type: "",
    id: "",
    description: "",
    mediaType: "",
    serviceEndpoint: "",
    proof: "",
    encrypted: "",
    right: ""
  };
}
export const LinkedResource = {
  encode(message: LinkedResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.mediaType !== "") {
      writer.uint32(34).string(message.mediaType);
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(42).string(message.serviceEndpoint);
    }
    if (message.proof !== "") {
      writer.uint32(50).string(message.proof);
    }
    if (message.encrypted !== "") {
      writer.uint32(58).string(message.encrypted);
    }
    if (message.right !== "") {
      writer.uint32(66).string(message.right);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.mediaType = reader.string();
          break;
        case 5:
          message.serviceEndpoint = reader.string();
          break;
        case 6:
          message.proof = reader.string();
          break;
        case 7:
          message.encrypted = reader.string();
          break;
        case 8:
          message.right = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LinkedResource {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      mediaType: isSet(object.mediaType) ? String(object.mediaType) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      encrypted: isSet(object.encrypted) ? String(object.encrypted) : "",
      right: isSet(object.right) ? String(object.right) : ""
    };
  },
  toJSON(message: LinkedResource): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    message.mediaType !== undefined && (obj.mediaType = message.mediaType);
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
    message.proof !== undefined && (obj.proof = message.proof);
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    message.right !== undefined && (obj.right = message.right);
    return obj;
  },
  fromPartial(object: Partial<LinkedResource>): LinkedResource {
    const message = createBaseLinkedResource();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.mediaType = object.mediaType ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    message.proof = object.proof ?? "";
    message.encrypted = object.encrypted ?? "";
    message.right = object.right ?? "";
    return message;
  }
};
function createBaseLinkedClaim(): LinkedClaim {
  return {
    type: "",
    id: "",
    description: "",
    serviceEndpoint: "",
    proof: "",
    encrypted: "",
    right: ""
  };
}
export const LinkedClaim = {
  encode(message: LinkedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(34).string(message.serviceEndpoint);
    }
    if (message.proof !== "") {
      writer.uint32(42).string(message.proof);
    }
    if (message.encrypted !== "") {
      writer.uint32(50).string(message.encrypted);
    }
    if (message.right !== "") {
      writer.uint32(58).string(message.right);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.serviceEndpoint = reader.string();
          break;
        case 5:
          message.proof = reader.string();
          break;
        case 6:
          message.encrypted = reader.string();
          break;
        case 7:
          message.right = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LinkedClaim {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      encrypted: isSet(object.encrypted) ? String(object.encrypted) : "",
      right: isSet(object.right) ? String(object.right) : ""
    };
  },
  toJSON(message: LinkedClaim): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
    message.proof !== undefined && (obj.proof = message.proof);
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    message.right !== undefined && (obj.right = message.right);
    return obj;
  },
  fromPartial(object: Partial<LinkedClaim>): LinkedClaim {
    const message = createBaseLinkedClaim();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    message.proof = object.proof ?? "";
    message.encrypted = object.encrypted ?? "";
    message.right = object.right ?? "";
    return message;
  }
};
function createBaseLinkedEntity(): LinkedEntity {
  return {
    type: "",
    id: "",
    relationship: "",
    service: ""
  };
}
export const LinkedEntity = {
  encode(message: LinkedEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.relationship !== "") {
      writer.uint32(26).string(message.relationship);
    }
    if (message.service !== "") {
      writer.uint32(34).string(message.service);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.relationship = reader.string();
          break;
        case 4:
          message.service = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LinkedEntity {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : "",
      relationship: isSet(object.relationship) ? String(object.relationship) : "",
      service: isSet(object.service) ? String(object.service) : ""
    };
  },
  toJSON(message: LinkedEntity): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    message.relationship !== undefined && (obj.relationship = message.relationship);
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },
  fromPartial(object: Partial<LinkedEntity>): LinkedEntity {
    const message = createBaseLinkedEntity();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.relationship = object.relationship ?? "";
    message.service = object.service ?? "";
    return message;
  }
};
function createBaseVerificationMethod(): VerificationMethod {
  return {
    id: "",
    type: "",
    controller: "",
    blockchainAccountID: undefined,
    publicKeyHex: undefined,
    publicKeyMultibase: undefined,
    publicKeyBase58: undefined
  };
}
export const VerificationMethod = {
  encode(message: VerificationMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }
    if (message.blockchainAccountID !== undefined) {
      writer.uint32(34).string(message.blockchainAccountID);
    }
    if (message.publicKeyHex !== undefined) {
      writer.uint32(42).string(message.publicKeyHex);
    }
    if (message.publicKeyMultibase !== undefined) {
      writer.uint32(50).string(message.publicKeyMultibase);
    }
    if (message.publicKeyBase58 !== undefined) {
      writer.uint32(58).string(message.publicKeyBase58);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.controller = reader.string();
          break;
        case 4:
          message.blockchainAccountID = reader.string();
          break;
        case 5:
          message.publicKeyHex = reader.string();
          break;
        case 6:
          message.publicKeyMultibase = reader.string();
          break;
        case 7:
          message.publicKeyBase58 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VerificationMethod {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      blockchainAccountID: isSet(object.blockchainAccountID) ? String(object.blockchainAccountID) : undefined,
      publicKeyHex: isSet(object.publicKeyHex) ? String(object.publicKeyHex) : undefined,
      publicKeyMultibase: isSet(object.publicKeyMultibase) ? String(object.publicKeyMultibase) : undefined,
      publicKeyBase58: isSet(object.publicKeyBase58) ? String(object.publicKeyBase58) : undefined
    };
  },
  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.controller !== undefined && (obj.controller = message.controller);
    message.blockchainAccountID !== undefined && (obj.blockchainAccountID = message.blockchainAccountID);
    message.publicKeyHex !== undefined && (obj.publicKeyHex = message.publicKeyHex);
    message.publicKeyMultibase !== undefined && (obj.publicKeyMultibase = message.publicKeyMultibase);
    message.publicKeyBase58 !== undefined && (obj.publicKeyBase58 = message.publicKeyBase58);
    return obj;
  },
  fromPartial(object: Partial<VerificationMethod>): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.blockchainAccountID = object.blockchainAccountID ?? undefined;
    message.publicKeyHex = object.publicKeyHex ?? undefined;
    message.publicKeyMultibase = object.publicKeyMultibase ?? undefined;
    message.publicKeyBase58 = object.publicKeyBase58 ?? undefined;
    return message;
  }
};
function createBaseService(): Service {
  return {
    id: "",
    type: "",
    serviceEndpoint: ""
  };
}
export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(26).string(message.serviceEndpoint);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.serviceEndpoint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : ""
    };
  },
  toJSON(message: Service): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
    return obj;
  },
  fromPartial(object: Partial<Service>): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  }
};
function createBaseIidMetadata(): IidMetadata {
  return {
    versionId: "",
    created: undefined,
    updated: undefined,
    deactivated: false
  };
}
export const IidMetadata = {
  encode(message: IidMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }
    if (message.created !== undefined) {
      Timestamp.encode(message.created, writer.uint32(18).fork()).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.deactivated === true) {
      writer.uint32(32).bool(message.deactivated);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IidMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versionId = reader.string();
          break;
        case 2:
          message.created = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.updated = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.deactivated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IidMetadata {
    return {
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined,
      deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false
    };
  },
  toJSON(message: IidMetadata): unknown {
    const obj: any = {};
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.created !== undefined && (obj.created = fromTimestamp(message.created).toISOString());
    message.updated !== undefined && (obj.updated = fromTimestamp(message.updated).toISOString());
    message.deactivated !== undefined && (obj.deactivated = message.deactivated);
    return obj;
  },
  fromPartial(object: Partial<IidMetadata>): IidMetadata {
    const message = createBaseIidMetadata();
    message.versionId = object.versionId ?? "";
    message.created = object.created !== undefined && object.created !== null ? Timestamp.fromPartial(object.created) : undefined;
    message.updated = object.updated !== undefined && object.updated !== null ? Timestamp.fromPartial(object.updated) : undefined;
    message.deactivated = object.deactivated ?? false;
    return message;
  }
};