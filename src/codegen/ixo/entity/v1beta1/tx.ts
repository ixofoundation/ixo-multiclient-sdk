import { Context, ContextSDKType } from "../../iid/v1beta1/iid";
import { Verification, VerificationSDKType } from "../../iid/v1beta1/tx";
import { Service, ServiceSDKType, AccordedRight, AccordedRightSDKType, LinkedResource, LinkedResourceSDKType, LinkedEntity, LinkedEntitySDKType } from "../../iid/v1beta1/types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, bytesFromBase64, fromTimestamp, base64FromBytes } from "../../../helpers";
export interface MsgCreateEntity {
  /** An Entity Type as defined by the implementer */
  entityType: string;
  /**
   * Status of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  entityStatus: number;
  /** the list of controller DIDs */

  controller: string[];
  /** JSON-LD contexts */

  context: Context[];
  /** Verification Methods and Verification Relationships */

  verification: Verification[];
  /** Service endpoints */

  service: Service[];
  /** Legal or Electronic Rights and associated Object Capabilities */

  accordedRight: AccordedRight[];
  /** Digital resources associated with the Subject */

  linkedResource: LinkedResource[];
  /**
   * DID of a linked Entity and its relationship with the Subject
   * Start Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  linkedEntity: LinkedEntity[];
  startDate?: Timestamp;
  /**
   * End Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  endDate?: Timestamp;
  /** DID of the operator through which the Entity was created */

  relayerNode: string;
  /**
   * Content ID or Hash of public Verifiable Credentials associated with the
   * subject
   */

  credentials: string[];
  ownerDid: string;
  /** The ownersdid address used to sign this transaction. */

  ownerAddress: string;
  data: Uint8Array;
  alsoKnownAs: string;
}
export interface MsgCreateEntitySDKType {
  /** An Entity Type as defined by the implementer */
  entity_type: string;
  /**
   * Status of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  entity_status: number;
  /** the list of controller DIDs */

  controller: string[];
  /** JSON-LD contexts */

  context: ContextSDKType[];
  /** Verification Methods and Verification Relationships */

  verification: VerificationSDKType[];
  /** Service endpoints */

  service: ServiceSDKType[];
  /** Legal or Electronic Rights and associated Object Capabilities */

  accorded_right: AccordedRightSDKType[];
  /** Digital resources associated with the Subject */

  linked_resource: LinkedResourceSDKType[];
  /**
   * DID of a linked Entity and its relationship with the Subject
   * Start Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  linked_entity: LinkedEntitySDKType[];
  start_date?: TimestampSDKType;
  /**
   * End Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  end_date?: TimestampSDKType;
  /** DID of the operator through which the Entity was created */

  relayer_node: string;
  /**
   * Content ID or Hash of public Verifiable Credentials associated with the
   * subject
   */

  credentials: string[];
  owner_did: string;
  /** The ownersdid address used to sign this transaction. */

  owner_address: string;
  data: Uint8Array;
  alsoKnownAs: string;
}
export interface MsgCreateEntityResponse {
  entityId: string;
  entityType: string;
  entityStatus: number;
}
export interface MsgCreateEntityResponseSDKType {
  entity_id: string;
  entity_type: string;
  entity_status: number;
}
/**
 * Updates the entity with all the fields, so if field empty will be updated
 * with default go type, aka never null
 */

export interface MsgUpdateEntity {
  /** Id of entity to be updated */
  id: string;
  /**
   * Status of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  entityStatus: number;
  /**
   * Start Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  startDate?: Timestamp;
  /**
   * End Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  endDate?: Timestamp;
  /**
   * Content ID or Hash of public Verifiable Credentials associated with the
   * subject
   */

  credentials: string[];
  controllerDid: string;
  /** The controllerAddress used to sign this transaction. */

  controllerAddress: string;
}
/**
 * Updates the entity with all the fields, so if field empty will be updated
 * with default go type, aka never null
 */

export interface MsgUpdateEntitySDKType {
  /** Id of entity to be updated */
  id: string;
  /**
   * Status of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  entity_status: number;
  /**
   * Start Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  start_date?: TimestampSDKType;
  /**
   * End Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  end_date?: TimestampSDKType;
  /**
   * Content ID or Hash of public Verifiable Credentials associated with the
   * subject
   */

  credentials: string[];
  controller_did: string;
  /** The controllerAddress used to sign this transaction. */

  controller_address: string;
}
export interface MsgUpdateEntityResponse {}
export interface MsgUpdateEntityResponseSDKType {}
/** Only relayer nodes can update entity field 'entityVerified' */

export interface MsgUpdateEntityVerified {
  /** Id of entity to be updated */
  id: string;
  /** Whether entity is verified or not based on credentials */

  entityVerified: boolean;
  relayerNodeDid: string;
  /** The relayer node's address used to sign this transaction. */

  relayerNodeAddress: string;
}
/** Only relayer nodes can update entity field 'entityVerified' */

export interface MsgUpdateEntityVerifiedSDKType {
  /** Id of entity to be updated */
  id: string;
  /** Whether entity is verified or not based on credentials */

  entity_verified: boolean;
  relayer_node_did: string;
  /** The relayer node's address used to sign this transaction. */

  relayer_node_address: string;
}
export interface MsgUpdateEntityVerifiedResponse {}
export interface MsgUpdateEntityVerifiedResponseSDKType {}
export interface MsgTransferEntity {
  id: string;
  ownerDid: string;
  /** The owner_address used to sign this transaction. */

  ownerAddress: string;
  recipientDid: string;
}
export interface MsgTransferEntitySDKType {
  id: string;
  owner_did: string;
  /** The owner_address used to sign this transaction. */

  owner_address: string;
  recipient_did: string;
}
export interface MsgTransferEntityResponse {}
export interface MsgTransferEntityResponseSDKType {}

function createBaseMsgCreateEntity(): MsgCreateEntity {
  return {
    entityType: "",
    entityStatus: 0,
    controller: [],
    context: [],
    verification: [],
    service: [],
    accordedRight: [],
    linkedResource: [],
    linkedEntity: [],
    startDate: undefined,
    endDate: undefined,
    relayerNode: "",
    credentials: [],
    ownerDid: "",
    ownerAddress: "",
    data: new Uint8Array(),
    alsoKnownAs: ""
  };
}

export const MsgCreateEntity = {
  encode(message: MsgCreateEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityType !== "") {
      writer.uint32(10).string(message.entityType);
    }

    if (message.entityStatus !== 0) {
      writer.uint32(16).int32(message.entityStatus);
    }

    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.context) {
      Context.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.verification) {
      Verification.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.service) {
      Service.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.accordedRight) {
      AccordedRight.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.linkedResource) {
      LinkedResource.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.linkedEntity) {
      LinkedEntity.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(82).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(90).fork()).ldelim();
    }

    if (message.relayerNode !== "") {
      writer.uint32(98).string(message.relayerNode);
    }

    for (const v of message.credentials) {
      writer.uint32(106).string(v!);
    }

    if (message.ownerDid !== "") {
      writer.uint32(114).string(message.ownerDid);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(122).string(message.ownerAddress);
    }

    if (message.data.length !== 0) {
      writer.uint32(130).bytes(message.data);
    }

    if (message.alsoKnownAs !== "") {
      writer.uint32(138).string(message.alsoKnownAs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityType = reader.string();
          break;

        case 2:
          message.entityStatus = reader.int32();
          break;

        case 3:
          message.controller.push(reader.string());
          break;

        case 4:
          message.context.push(Context.decode(reader, reader.uint32()));
          break;

        case 5:
          message.verification.push(Verification.decode(reader, reader.uint32()));
          break;

        case 6:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;

        case 7:
          message.accordedRight.push(AccordedRight.decode(reader, reader.uint32()));
          break;

        case 8:
          message.linkedResource.push(LinkedResource.decode(reader, reader.uint32()));
          break;

        case 9:
          message.linkedEntity.push(LinkedEntity.decode(reader, reader.uint32()));
          break;

        case 10:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 11:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 12:
          message.relayerNode = reader.string();
          break;

        case 13:
          message.credentials.push(reader.string());
          break;

        case 14:
          message.ownerDid = reader.string();
          break;

        case 15:
          message.ownerAddress = reader.string();
          break;

        case 16:
          message.data = reader.bytes();
          break;

        case 17:
          message.alsoKnownAs = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateEntity {
    return {
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
      entityStatus: isSet(object.entityStatus) ? Number(object.entityStatus) : 0,
      controller: Array.isArray(object?.controller) ? object.controller.map((e: any) => String(e)) : [],
      context: Array.isArray(object?.context) ? object.context.map((e: any) => Context.fromJSON(e)) : [],
      verification: Array.isArray(object?.verification) ? object.verification.map((e: any) => Verification.fromJSON(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
      accordedRight: Array.isArray(object?.accordedRight) ? object.accordedRight.map((e: any) => AccordedRight.fromJSON(e)) : [],
      linkedResource: Array.isArray(object?.linkedResource) ? object.linkedResource.map((e: any) => LinkedResource.fromJSON(e)) : [],
      linkedEntity: Array.isArray(object?.linkedEntity) ? object.linkedEntity.map((e: any) => LinkedEntity.fromJSON(e)) : [],
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      relayerNode: isSet(object.relayerNode) ? String(object.relayerNode) : "",
      credentials: Array.isArray(object?.credentials) ? object.credentials.map((e: any) => String(e)) : [],
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      alsoKnownAs: isSet(object.alsoKnownAs) ? String(object.alsoKnownAs) : ""
    };
  },

  toJSON(message: MsgCreateEntity): unknown {
    const obj: any = {};
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.entityStatus !== undefined && (obj.entityStatus = Math.round(message.entityStatus));

    if (message.controller) {
      obj.controller = message.controller.map(e => e);
    } else {
      obj.controller = [];
    }

    if (message.context) {
      obj.context = message.context.map(e => e ? Context.toJSON(e) : undefined);
    } else {
      obj.context = [];
    }

    if (message.verification) {
      obj.verification = message.verification.map(e => e ? Verification.toJSON(e) : undefined);
    } else {
      obj.verification = [];
    }

    if (message.service) {
      obj.service = message.service.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }

    if (message.accordedRight) {
      obj.accordedRight = message.accordedRight.map(e => e ? AccordedRight.toJSON(e) : undefined);
    } else {
      obj.accordedRight = [];
    }

    if (message.linkedResource) {
      obj.linkedResource = message.linkedResource.map(e => e ? LinkedResource.toJSON(e) : undefined);
    } else {
      obj.linkedResource = [];
    }

    if (message.linkedEntity) {
      obj.linkedEntity = message.linkedEntity.map(e => e ? LinkedEntity.toJSON(e) : undefined);
    } else {
      obj.linkedEntity = [];
    }

    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.relayerNode !== undefined && (obj.relayerNode = message.relayerNode);

    if (message.credentials) {
      obj.credentials = message.credentials.map(e => e);
    } else {
      obj.credentials = [];
    }

    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.alsoKnownAs !== undefined && (obj.alsoKnownAs = message.alsoKnownAs);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateEntity>): MsgCreateEntity {
    const message = createBaseMsgCreateEntity();
    message.entityType = object.entityType ?? "";
    message.entityStatus = object.entityStatus ?? 0;
    message.controller = object.controller?.map(e => e) || [];
    message.context = object.context?.map(e => Context.fromPartial(e)) || [];
    message.verification = object.verification?.map(e => Verification.fromPartial(e)) || [];
    message.service = object.service?.map(e => Service.fromPartial(e)) || [];
    message.accordedRight = object.accordedRight?.map(e => AccordedRight.fromPartial(e)) || [];
    message.linkedResource = object.linkedResource?.map(e => LinkedResource.fromPartial(e)) || [];
    message.linkedEntity = object.linkedEntity?.map(e => LinkedEntity.fromPartial(e)) || [];
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.relayerNode = object.relayerNode ?? "";
    message.credentials = object.credentials?.map(e => e) || [];
    message.ownerDid = object.ownerDid ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.data = object.data ?? new Uint8Array();
    message.alsoKnownAs = object.alsoKnownAs ?? "";
    return message;
  }

};

function createBaseMsgCreateEntityResponse(): MsgCreateEntityResponse {
  return {
    entityId: "",
    entityType: "",
    entityStatus: 0
  };
}

export const MsgCreateEntityResponse = {
  encode(message: MsgCreateEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }

    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }

    if (message.entityStatus !== 0) {
      writer.uint32(24).int32(message.entityStatus);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEntityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;

        case 2:
          message.entityType = reader.string();
          break;

        case 3:
          message.entityStatus = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateEntityResponse {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
      entityStatus: isSet(object.entityStatus) ? Number(object.entityStatus) : 0
    };
  },

  toJSON(message: MsgCreateEntityResponse): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.entityStatus !== undefined && (obj.entityStatus = Math.round(message.entityStatus));
    return obj;
  },

  fromPartial(object: Partial<MsgCreateEntityResponse>): MsgCreateEntityResponse {
    const message = createBaseMsgCreateEntityResponse();
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? "";
    message.entityStatus = object.entityStatus ?? 0;
    return message;
  }

};

function createBaseMsgUpdateEntity(): MsgUpdateEntity {
  return {
    id: "",
    entityStatus: 0,
    startDate: undefined,
    endDate: undefined,
    credentials: [],
    controllerDid: "",
    controllerAddress: ""
  };
}

export const MsgUpdateEntity = {
  encode(message: MsgUpdateEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.entityStatus !== 0) {
      writer.uint32(16).int32(message.entityStatus);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(26).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.credentials) {
      writer.uint32(42).string(v!);
    }

    if (message.controllerDid !== "") {
      writer.uint32(50).string(message.controllerDid);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(58).string(message.controllerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.entityStatus = reader.int32();
          break;

        case 3:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.credentials.push(reader.string());
          break;

        case 6:
          message.controllerDid = reader.string();
          break;

        case 7:
          message.controllerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      entityStatus: isSet(object.entityStatus) ? Number(object.entityStatus) : 0,
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      credentials: Array.isArray(object?.credentials) ? object.credentials.map((e: any) => String(e)) : [],
      controllerDid: isSet(object.controllerDid) ? String(object.controllerDid) : "",
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : ""
    };
  },

  toJSON(message: MsgUpdateEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.entityStatus !== undefined && (obj.entityStatus = Math.round(message.entityStatus));
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());

    if (message.credentials) {
      obj.credentials = message.credentials.map(e => e);
    } else {
      obj.credentials = [];
    }

    message.controllerDid !== undefined && (obj.controllerDid = message.controllerDid);
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateEntity>): MsgUpdateEntity {
    const message = createBaseMsgUpdateEntity();
    message.id = object.id ?? "";
    message.entityStatus = object.entityStatus ?? 0;
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.credentials = object.credentials?.map(e => e) || [];
    message.controllerDid = object.controllerDid ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateEntityResponse(): MsgUpdateEntityResponse {
  return {};
}

export const MsgUpdateEntityResponse = {
  encode(_: MsgUpdateEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntityResponse();

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

  fromJSON(_: any): MsgUpdateEntityResponse {
    return {};
  },

  toJSON(_: MsgUpdateEntityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateEntityResponse>): MsgUpdateEntityResponse {
    const message = createBaseMsgUpdateEntityResponse();
    return message;
  }

};

function createBaseMsgUpdateEntityVerified(): MsgUpdateEntityVerified {
  return {
    id: "",
    entityVerified: false,
    relayerNodeDid: "",
    relayerNodeAddress: ""
  };
}

export const MsgUpdateEntityVerified = {
  encode(message: MsgUpdateEntityVerified, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.entityVerified === true) {
      writer.uint32(16).bool(message.entityVerified);
    }

    if (message.relayerNodeDid !== "") {
      writer.uint32(26).string(message.relayerNodeDid);
    }

    if (message.relayerNodeAddress !== "") {
      writer.uint32(34).string(message.relayerNodeAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityVerified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntityVerified();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.entityVerified = reader.bool();
          break;

        case 3:
          message.relayerNodeDid = reader.string();
          break;

        case 4:
          message.relayerNodeAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateEntityVerified {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      entityVerified: isSet(object.entityVerified) ? Boolean(object.entityVerified) : false,
      relayerNodeDid: isSet(object.relayerNodeDid) ? String(object.relayerNodeDid) : "",
      relayerNodeAddress: isSet(object.relayerNodeAddress) ? String(object.relayerNodeAddress) : ""
    };
  },

  toJSON(message: MsgUpdateEntityVerified): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.entityVerified !== undefined && (obj.entityVerified = message.entityVerified);
    message.relayerNodeDid !== undefined && (obj.relayerNodeDid = message.relayerNodeDid);
    message.relayerNodeAddress !== undefined && (obj.relayerNodeAddress = message.relayerNodeAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateEntityVerified>): MsgUpdateEntityVerified {
    const message = createBaseMsgUpdateEntityVerified();
    message.id = object.id ?? "";
    message.entityVerified = object.entityVerified ?? false;
    message.relayerNodeDid = object.relayerNodeDid ?? "";
    message.relayerNodeAddress = object.relayerNodeAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateEntityVerifiedResponse(): MsgUpdateEntityVerifiedResponse {
  return {};
}

export const MsgUpdateEntityVerifiedResponse = {
  encode(_: MsgUpdateEntityVerifiedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityVerifiedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntityVerifiedResponse();

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

  fromJSON(_: any): MsgUpdateEntityVerifiedResponse {
    return {};
  },

  toJSON(_: MsgUpdateEntityVerifiedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateEntityVerifiedResponse>): MsgUpdateEntityVerifiedResponse {
    const message = createBaseMsgUpdateEntityVerifiedResponse();
    return message;
  }

};

function createBaseMsgTransferEntity(): MsgTransferEntity {
  return {
    id: "",
    ownerDid: "",
    ownerAddress: "",
    recipientDid: ""
  };
}

export const MsgTransferEntity = {
  encode(message: MsgTransferEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.ownerDid !== "") {
      writer.uint32(18).string(message.ownerDid);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }

    if (message.recipientDid !== "") {
      writer.uint32(34).string(message.recipientDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.ownerDid = reader.string();
          break;

        case 3:
          message.ownerAddress = reader.string();
          break;

        case 4:
          message.recipientDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgTransferEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      recipientDid: isSet(object.recipientDid) ? String(object.recipientDid) : ""
    };
  },

  toJSON(message: MsgTransferEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.recipientDid !== undefined && (obj.recipientDid = message.recipientDid);
    return obj;
  },

  fromPartial(object: Partial<MsgTransferEntity>): MsgTransferEntity {
    const message = createBaseMsgTransferEntity();
    message.id = object.id ?? "";
    message.ownerDid = object.ownerDid ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.recipientDid = object.recipientDid ?? "";
    return message;
  }

};

function createBaseMsgTransferEntityResponse(): MsgTransferEntityResponse {
  return {};
}

export const MsgTransferEntityResponse = {
  encode(_: MsgTransferEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferEntityResponse();

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

  fromJSON(_: any): MsgTransferEntityResponse {
    return {};
  },

  toJSON(_: MsgTransferEntityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgTransferEntityResponse>): MsgTransferEntityResponse {
    const message = createBaseMsgTransferEntityResponse();
    return message;
  }

};