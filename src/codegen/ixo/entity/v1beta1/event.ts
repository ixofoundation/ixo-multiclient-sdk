import { Entity, EntitySDKType } from "./entity";
import { Grant, GrantSDKType } from "./cosmos";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** EntityCreatedEvent is an event triggered on a Entity creation */

export interface EntityCreatedEvent {
  entity?: Entity;
  signer: string;
}
/** EntityCreatedEvent is an event triggered on a Entity creation */

export interface EntityCreatedEventSDKType {
  entity?: EntitySDKType;
  signer: string;
}
/** EntityUpdatedEvent is an event triggered on a entity document update */

export interface EntityUpdatedEvent {
  entity?: Entity;
  signer: string;
}
/** EntityUpdatedEvent is an event triggered on a entity document update */

export interface EntityUpdatedEventSDKType {
  entity?: EntitySDKType;
  signer: string;
}
/**
 * EntityVerifiedUpdatedEvent is an event triggered on a entity verified
 * document update
 */

export interface EntityVerifiedUpdatedEvent {
  id: string;
  signer: string;
  entityVerified: boolean;
}
/**
 * EntityVerifiedUpdatedEvent is an event triggered on a entity verified
 * document update
 */

export interface EntityVerifiedUpdatedEventSDKType {
  id: string;
  signer: string;
  entity_verified: boolean;
}
/** EntityTransferredEvent is an event triggered on a entity transfer */

export interface EntityTransferredEvent {
  id: string;
  from: string;
  to: string;
}
/** EntityTransferredEvent is an event triggered on a entity transfer */

export interface EntityTransferredEventSDKType {
  id: string;
  from: string;
  to: string;
}
/** EntityAccountCreatedEvent is an event triggered on a entity account creation */

export interface EntityAccountCreatedEvent {
  id: string;
  signer: string;
  accountName: string;
  accountAddress: string;
}
/** EntityAccountCreatedEvent is an event triggered on a entity account creation */

export interface EntityAccountCreatedEventSDKType {
  id: string;
  signer: string;
  account_name: string;
  account_address: string;
}
/** EntityAccountCreatedEvent is an event triggered on a entity account creation */

export interface EntityAccountAuthzCreatedEvent {
  id: string;
  signer: string;
  accountName: string;
  granter: string;
  grantee: string;
  grant?: Grant;
}
/** EntityAccountCreatedEvent is an event triggered on a entity account creation */

export interface EntityAccountAuthzCreatedEventSDKType {
  id: string;
  signer: string;
  account_name: string;
  granter: string;
  grantee: string;
  grant?: GrantSDKType;
}

function createBaseEntityCreatedEvent(): EntityCreatedEvent {
  return {
    entity: undefined,
    signer: ""
  };
}

export const EntityCreatedEvent = {
  encode(message: EntityCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
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
          message.entity = Entity.decode(reader, reader.uint32());
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

  fromJSON(object: any): EntityCreatedEvent {
    return {
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: EntityCreatedEvent): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: Partial<EntityCreatedEvent>): EntityCreatedEvent {
    const message = createBaseEntityCreatedEvent();
    message.entity = object.entity !== undefined && object.entity !== null ? Entity.fromPartial(object.entity) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseEntityUpdatedEvent(): EntityUpdatedEvent {
  return {
    entity: undefined,
    signer: ""
  };
}

export const EntityUpdatedEvent = {
  encode(message: EntityUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
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
          message.entity = Entity.decode(reader, reader.uint32());
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
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: EntityUpdatedEvent): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: Partial<EntityUpdatedEvent>): EntityUpdatedEvent {
    const message = createBaseEntityUpdatedEvent();
    message.entity = object.entity !== undefined && object.entity !== null ? Entity.fromPartial(object.entity) : undefined;
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
    from: "",
    to: ""
  };
}

export const EntityTransferredEvent = {
  encode(message: EntityTransferredEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(26).string(message.to);
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
          message.from = reader.string();
          break;

        case 3:
          message.to = reader.string();
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
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },

  toJSON(message: EntityTransferredEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(object: Partial<EntityTransferredEvent>): EntityTransferredEvent {
    const message = createBaseEntityTransferredEvent();
    message.id = object.id ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  }

};

function createBaseEntityAccountCreatedEvent(): EntityAccountCreatedEvent {
  return {
    id: "",
    signer: "",
    accountName: "",
    accountAddress: ""
  };
}

export const EntityAccountCreatedEvent = {
  encode(message: EntityAccountCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    if (message.accountName !== "") {
      writer.uint32(26).string(message.accountName);
    }

    if (message.accountAddress !== "") {
      writer.uint32(34).string(message.accountAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityAccountCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityAccountCreatedEvent();

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
          message.accountName = reader.string();
          break;

        case 4:
          message.accountAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntityAccountCreatedEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },

  toJSON(message: EntityAccountCreatedEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.signer !== undefined && (obj.signer = message.signer);
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial(object: Partial<EntityAccountCreatedEvent>): EntityAccountCreatedEvent {
    const message = createBaseEntityAccountCreatedEvent();
    message.id = object.id ?? "";
    message.signer = object.signer ?? "";
    message.accountName = object.accountName ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  }

};

function createBaseEntityAccountAuthzCreatedEvent(): EntityAccountAuthzCreatedEvent {
  return {
    id: "",
    signer: "",
    accountName: "",
    granter: "",
    grantee: "",
    grant: undefined
  };
}

export const EntityAccountAuthzCreatedEvent = {
  encode(message: EntityAccountAuthzCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    if (message.accountName !== "") {
      writer.uint32(26).string(message.accountName);
    }

    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(42).string(message.grantee);
    }

    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityAccountAuthzCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityAccountAuthzCreatedEvent();

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
          message.accountName = reader.string();
          break;

        case 4:
          message.granter = reader.string();
          break;

        case 5:
          message.grantee = reader.string();
          break;

        case 6:
          message.grant = Grant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntityAccountAuthzCreatedEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined
    };
  },

  toJSON(message: EntityAccountAuthzCreatedEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.signer !== undefined && (obj.signer = message.signer);
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EntityAccountAuthzCreatedEvent>): EntityAccountAuthzCreatedEvent {
    const message = createBaseEntityAccountAuthzCreatedEvent();
    message.id = object.id ?? "";
    message.signer = object.signer ?? "";
    message.accountName = object.accountName ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  }

};