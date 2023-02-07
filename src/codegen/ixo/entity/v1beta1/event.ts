import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** EntityCreatedEvent is an event triggered on a Entity creation */

export interface EntityCreatedEvent {
  /** the id of entity being created */
  id: string;
  /** the entity owner */

  owner: string;
}
/** EntityCreatedEvent is an event triggered on a Entity creation */

export interface EntityCreatedEventSDKType {
  /** the id of entity being created */
  id: string;
  /** the entity owner */

  owner: string;
}
/** EntityUpdatedEvent is an event triggered on a entity document update */

export interface EntityUpdatedEvent {
  /** the id being updated */
  id: string;
  /** the signer account of the change */

  signer: string;
}
/** EntityUpdatedEvent is an event triggered on a entity document update */

export interface EntityUpdatedEventSDKType {
  /** the id being updated */
  id: string;
  /** the signer account of the change */

  signer: string;
}
/**
 * EntityVerifiedUpdatedEvent is an event triggered on a entity verified
 * document update
 */

export interface EntityVerifiedUpdatedEvent {
  /** the id being updated */
  id: string;
  /** the signer account of the change */

  signer: string;
  /** whether entity is verified or not */

  entityVerified: boolean;
}
/**
 * EntityVerifiedUpdatedEvent is an event triggered on a entity verified
 * document update
 */

export interface EntityVerifiedUpdatedEventSDKType {
  /** the id being updated */
  id: string;
  /** the signer account of the change */

  signer: string;
  /** whether entity is verified or not */

  entity_verified: boolean;
}
/** EntityTransferredEvent is an event triggered on a entity transfer */

export interface EntityTransferredEvent {
  /** the id if entity being transferred */
  id: string;
  /** the new owner of the entity */

  owner: string;
}
/** EntityTransferredEvent is an event triggered on a entity transfer */

export interface EntityTransferredEventSDKType {
  /** the id if entity being transferred */
  id: string;
  /** the new owner of the entity */

  owner: string;
}

function createBaseEntityCreatedEvent(): EntityCreatedEvent {
  return {
    id: "",
    owner: ""
  };
}

export const EntityCreatedEvent = {
  encode(message: EntityCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityCreatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntityCreatedEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: EntityCreatedEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<EntityCreatedEvent>): EntityCreatedEvent {
    const message = createBaseEntityCreatedEvent();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEntityUpdatedEvent(): EntityUpdatedEvent {
  return {
    id: "",
    signer: ""
  };
}

export const EntityUpdatedEvent = {
  encode(message: EntityUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityUpdatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntityUpdatedEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: EntityUpdatedEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: Partial<EntityUpdatedEvent>): EntityUpdatedEvent {
    const message = createBaseEntityUpdatedEvent();
    message.id = object.id ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseEntityVerifiedUpdatedEvent(): EntityVerifiedUpdatedEvent {
  return {
    id: "",
    signer: "",
    entityVerified: false
  };
}

export const EntityVerifiedUpdatedEvent = {
  encode(message: EntityVerifiedUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    if (message.entityVerified === true) {
      writer.uint32(24).bool(message.entityVerified);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityVerifiedUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityVerifiedUpdatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.signer = reader.string();
          break;

        case 3:
          message.entityVerified = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntityVerifiedUpdatedEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      entityVerified: isSet(object.entityVerified) ? Boolean(object.entityVerified) : false
    };
  },

  toJSON(message: EntityVerifiedUpdatedEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.signer !== undefined && (obj.signer = message.signer);
    message.entityVerified !== undefined && (obj.entityVerified = message.entityVerified);
    return obj;
  },

  fromPartial(object: Partial<EntityVerifiedUpdatedEvent>): EntityVerifiedUpdatedEvent {
    const message = createBaseEntityVerifiedUpdatedEvent();
    message.id = object.id ?? "";
    message.signer = object.signer ?? "";
    message.entityVerified = object.entityVerified ?? false;
    return message;
  }

};

function createBaseEntityTransferredEvent(): EntityTransferredEvent {
  return {
    id: "",
    owner: ""
  };
}

export const EntityTransferredEvent = {
  encode(message: EntityTransferredEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityTransferredEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityTransferredEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntityTransferredEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: EntityTransferredEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<EntityTransferredEvent>): EntityTransferredEvent {
    const message = createBaseEntityTransferredEvent();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};