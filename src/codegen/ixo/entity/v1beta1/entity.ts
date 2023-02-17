import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export interface Params {
  NftContractAddress: string;
  NftContractMinter: string;
  CreateSequence: Long;
}
export interface ParamsSDKType {
  NftContractAddress: string;
  NftContractMinter: string;
  CreateSequence: Long;
}
export interface Entity {
  /** id represents the id for the entity document. */
  id: string;
  /** Type of entity, eg protocol or asset */

  type: string;
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
   * Status of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  status: number;
  /** DID of the operator through which the Entity was created */

  relayerNode: string;
  /** Credentials of the enitity to be verified */

  credentials: string[];
  /** Used as check whether the credentials of entity is verified */

  entityVerified: boolean;
  /**
   * Metadata concerning the Entity such as versionId, created, updated and
   * deactivated
   */

  metadata?: EntityMetadata;
}
export interface EntitySDKType {
  /** id represents the id for the entity document. */
  id: string;
  /** Type of entity, eg protocol or asset */

  type: string;
  /**
   * Start Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  startDate?: TimestampSDKType;
  /**
   * End Date of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  endDate?: TimestampSDKType;
  /**
   * Status of the Entity as defined by the implementer and interpreted by
   * Client applications
   */

  status: number;
  /** DID of the operator through which the Entity was created */

  relayerNode: string;
  /** Credentials of the enitity to be verified */

  credentials: string[];
  /** Used as check whether the credentials of entity is verified */

  entityVerified: boolean;
  /**
   * Metadata concerning the Entity such as versionId, created, updated and
   * deactivated
   */

  metadata?: EntityMetadataSDKType;
}
/** EntityMetadata defines metadata associated to a entity */

export interface EntityMetadata {
  versionId: string;
  created?: Timestamp;
  updated?: Timestamp;
}
/** EntityMetadata defines metadata associated to a entity */

export interface EntityMetadataSDKType {
  versionId: string;
  created?: TimestampSDKType;
  updated?: TimestampSDKType;
}

function createBaseParams(): Params {
  return {
    NftContractAddress: "",
    NftContractMinter: "",
    CreateSequence: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.NftContractAddress !== "") {
      writer.uint32(10).string(message.NftContractAddress);
    }

    if (message.NftContractMinter !== "") {
      writer.uint32(18).string(message.NftContractMinter);
    }

    if (!message.CreateSequence.isZero()) {
      writer.uint32(24).uint64(message.CreateSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.NftContractAddress = reader.string();
          break;

        case 2:
          message.NftContractMinter = reader.string();
          break;

        case 3:
          message.CreateSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      NftContractAddress: isSet(object.NftContractAddress) ? String(object.NftContractAddress) : "",
      NftContractMinter: isSet(object.NftContractMinter) ? String(object.NftContractMinter) : "",
      CreateSequence: isSet(object.CreateSequence) ? Long.fromValue(object.CreateSequence) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.NftContractAddress !== undefined && (obj.NftContractAddress = message.NftContractAddress);
    message.NftContractMinter !== undefined && (obj.NftContractMinter = message.NftContractMinter);
    message.CreateSequence !== undefined && (obj.CreateSequence = (message.CreateSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.NftContractAddress = object.NftContractAddress ?? "";
    message.NftContractMinter = object.NftContractMinter ?? "";
    message.CreateSequence = object.CreateSequence !== undefined && object.CreateSequence !== null ? Long.fromValue(object.CreateSequence) : Long.UZERO;
    return message;
  }

};

function createBaseEntity(): Entity {
  return {
    id: "",
    type: "",
    startDate: undefined,
    endDate: undefined,
    status: 0,
    relayerNode: "",
    credentials: [],
    entityVerified: false,
    metadata: undefined
  };
}

export const Entity = {
  encode(message: Entity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(26).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(34).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }

    if (message.relayerNode !== "") {
      writer.uint32(50).string(message.relayerNode);
    }

    for (const v of message.credentials) {
      writer.uint32(58).string(v!);
    }

    if (message.entityVerified === true) {
      writer.uint32(64).bool(message.entityVerified);
    }

    if (message.metadata !== undefined) {
      EntityMetadata.encode(message.metadata, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity();

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
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.status = reader.int32();
          break;

        case 6:
          message.relayerNode = reader.string();
          break;

        case 7:
          message.credentials.push(reader.string());
          break;

        case 8:
          message.entityVerified = reader.bool();
          break;

        case 9:
          message.metadata = EntityMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Entity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      status: isSet(object.status) ? Number(object.status) : 0,
      relayerNode: isSet(object.relayerNode) ? String(object.relayerNode) : "",
      credentials: Array.isArray(object?.credentials) ? object.credentials.map((e: any) => String(e)) : [],
      entityVerified: isSet(object.entityVerified) ? Boolean(object.entityVerified) : false,
      metadata: isSet(object.metadata) ? EntityMetadata.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.relayerNode !== undefined && (obj.relayerNode = message.relayerNode);

    if (message.credentials) {
      obj.credentials = message.credentials.map(e => e);
    } else {
      obj.credentials = [];
    }

    message.entityVerified !== undefined && (obj.entityVerified = message.entityVerified);
    message.metadata !== undefined && (obj.metadata = message.metadata ? EntityMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Entity>): Entity {
    const message = createBaseEntity();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.status = object.status ?? 0;
    message.relayerNode = object.relayerNode ?? "";
    message.credentials = object.credentials?.map(e => e) || [];
    message.entityVerified = object.entityVerified ?? false;
    message.metadata = object.metadata !== undefined && object.metadata !== null ? EntityMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseEntityMetadata(): EntityMetadata {
  return {
    versionId: "",
    created: undefined,
    updated: undefined
  };
}

export const EntityMetadata = {
  encode(message: EntityMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }

    if (message.created !== undefined) {
      Timestamp.encode(message.created, writer.uint32(18).fork()).ldelim();
    }

    if (message.updated !== undefined) {
      Timestamp.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntityMetadata {
    return {
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined
    };
  },

  toJSON(message: EntityMetadata): unknown {
    const obj: any = {};
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.created !== undefined && (obj.created = fromTimestamp(message.created).toISOString());
    message.updated !== undefined && (obj.updated = fromTimestamp(message.updated).toISOString());
    return obj;
  },

  fromPartial(object: Partial<EntityMetadata>): EntityMetadata {
    const message = createBaseEntityMetadata();
    message.versionId = object.versionId ?? "";
    message.created = object.created !== undefined && object.created !== null ? Timestamp.fromPartial(object.created) : undefined;
    message.updated = object.updated !== undefined && object.updated !== null ? Timestamp.fromPartial(object.updated) : undefined;
    return message;
  }

};