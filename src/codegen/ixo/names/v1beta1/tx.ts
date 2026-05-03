//@ts-nocheck
import { Namespace, NamespaceSDKType, NameStatus, nameStatusFromJSON, nameStatusToJSON } from "./names";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgCreateNamespace {
  /**
   * authority is the address allowed to create namespaces (the gov module
   * address).
   */
  authority: string;
  /** namespace is the full configuration of the new namespace. */
  namespace?: Namespace;
}
export interface MsgCreateNamespaceSDKType {
  authority: string;
  namespace?: NamespaceSDKType;
}
export interface MsgCreateNamespaceResponse {}
export interface MsgCreateNamespaceResponseSDKType {}
export interface MsgUpdateNamespace {
  /**
   * authority is the address allowed to update namespaces (the gov module
   * address).
   */
  authority: string;
  /**
   * namespace replaces the existing namespace configuration; the
   * namespace.name selects the target.
   */
  namespace?: Namespace;
}
export interface MsgUpdateNamespaceSDKType {
  authority: string;
  namespace?: NamespaceSDKType;
}
export interface MsgUpdateNamespaceResponse {}
export interface MsgUpdateNamespaceResponseSDKType {}
export interface MsgRegisterName {
  /**
   * signer is the bech32 address signing the tx; must control owner_did via
   * an authentication verification method on the IID document.
   */
  signer: string;
  /** namespace is the namespace under which the name is being registered. */
  namespace: string;
  /**
   * name is the display name (preserves case); will be normalized for
   * uniqueness.
   */
  name: string;
  /** owner_did is the DID this name will resolve to. */
  ownerDid: string;
}
export interface MsgRegisterNameSDKType {
  signer: string;
  namespace: string;
  name: string;
  owner_did: string;
}
export interface MsgRegisterNameResponse {
  /** normalized_name is the canonical form stored. */
  normalizedName: string;
}
export interface MsgRegisterNameResponseSDKType {
  normalized_name: string;
}
export interface MsgRegisterNameByRegistrar {
  /**
   * registrar is the bech32 address signing the tx; must be in the
   * namespace's registrar_accounts.
   */
  registrar: string;
  namespace: string;
  name: string;
  ownerDid: string;
  /**
   * verified marks the record as attested. Registrars typically set this true
   * after off-chain verification; user-driven self-register sets it false.
   */
  verified: boolean;
  /** evidence_hash is an optional hash of the off-chain attestation evidence. */
  evidenceHash: string;
  /** source is a free-form tag describing the verification source. */
  source: string;
}
export interface MsgRegisterNameByRegistrarSDKType {
  registrar: string;
  namespace: string;
  name: string;
  owner_did: string;
  verified: boolean;
  evidence_hash: string;
  source: string;
}
export interface MsgRegisterNameByRegistrarResponse {
  normalizedName: string;
}
export interface MsgRegisterNameByRegistrarResponseSDKType {
  normalized_name: string;
}
export interface MsgUpdateNameByRegistrar {
  registrar: string;
  namespace: string;
  /** normalized_name is the canonical name to update. */
  normalizedName: string;
  verified: boolean;
  evidenceHash: string;
  source: string;
}
export interface MsgUpdateNameByRegistrarSDKType {
  registrar: string;
  namespace: string;
  normalized_name: string;
  verified: boolean;
  evidence_hash: string;
  source: string;
}
export interface MsgUpdateNameByRegistrarResponse {}
export interface MsgUpdateNameByRegistrarResponseSDKType {}
export interface MsgTransferName {
  /**
   * signer is the bech32 address submitting the transfer; must control the
   * current owner_did, OR be a registrar when allow_registrar_override is
   * enabled.
   */
  signer: string;
  namespace: string;
  normalizedName: string;
  /** new_owner_did is the DID that will own the name after the transfer. */
  newOwnerDid: string;
}
export interface MsgTransferNameSDKType {
  signer: string;
  namespace: string;
  normalized_name: string;
  new_owner_did: string;
}
export interface MsgTransferNameResponse {}
export interface MsgTransferNameResponseSDKType {}
export interface MsgSetNameStatus {
  /** signer is either a namespace registrar or the governance authority. */
  signer: string;
  namespace: string;
  normalizedName: string;
  status: NameStatus;
  /** reason is a free-form string surfaced in the audit event. */
  reason: string;
}
export interface MsgSetNameStatusSDKType {
  signer: string;
  namespace: string;
  normalized_name: string;
  status: NameStatus;
  reason: string;
}
export interface MsgSetNameStatusResponse {}
export interface MsgSetNameStatusResponseSDKType {}
function createBaseMsgCreateNamespace(): MsgCreateNamespace {
  return {
    authority: "",
    namespace: undefined
  };
}
export const MsgCreateNamespace = {
  encode(message: MsgCreateNamespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNamespace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.namespace = Namespace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateNamespace {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      namespace: isSet(object.namespace) ? Namespace.fromJSON(object.namespace) : undefined
    };
  },
  toJSON(message: MsgCreateNamespace): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.namespace !== undefined && (obj.namespace = message.namespace ? Namespace.toJSON(message.namespace) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateNamespace>): MsgCreateNamespace {
    const message = createBaseMsgCreateNamespace();
    message.authority = object.authority ?? "";
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    return message;
  }
};
function createBaseMsgCreateNamespaceResponse(): MsgCreateNamespaceResponse {
  return {};
}
export const MsgCreateNamespaceResponse = {
  encode(_: MsgCreateNamespaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNamespaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNamespaceResponse();
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
  fromJSON(_: any): MsgCreateNamespaceResponse {
    return {};
  },
  toJSON(_: MsgCreateNamespaceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateNamespaceResponse>): MsgCreateNamespaceResponse {
    const message = createBaseMsgCreateNamespaceResponse();
    return message;
  }
};
function createBaseMsgUpdateNamespace(): MsgUpdateNamespace {
  return {
    authority: "",
    namespace: undefined
  };
}
export const MsgUpdateNamespace = {
  encode(message: MsgUpdateNamespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNamespace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.namespace = Namespace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateNamespace {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      namespace: isSet(object.namespace) ? Namespace.fromJSON(object.namespace) : undefined
    };
  },
  toJSON(message: MsgUpdateNamespace): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.namespace !== undefined && (obj.namespace = message.namespace ? Namespace.toJSON(message.namespace) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateNamespace>): MsgUpdateNamespace {
    const message = createBaseMsgUpdateNamespace();
    message.authority = object.authority ?? "";
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    return message;
  }
};
function createBaseMsgUpdateNamespaceResponse(): MsgUpdateNamespaceResponse {
  return {};
}
export const MsgUpdateNamespaceResponse = {
  encode(_: MsgUpdateNamespaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNamespaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespaceResponse();
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
  fromJSON(_: any): MsgUpdateNamespaceResponse {
    return {};
  },
  toJSON(_: MsgUpdateNamespaceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateNamespaceResponse>): MsgUpdateNamespaceResponse {
    const message = createBaseMsgUpdateNamespaceResponse();
    return message;
  }
};
function createBaseMsgRegisterName(): MsgRegisterName {
  return {
    signer: "",
    namespace: "",
    name: "",
    ownerDid: ""
  };
}
export const MsgRegisterName = {
  encode(message: MsgRegisterName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.ownerDid !== "") {
      writer.uint32(34).string(message.ownerDid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.namespace = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.ownerDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterName {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      name: isSet(object.name) ? String(object.name) : "",
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : ""
    };
  },
  toJSON(message: MsgRegisterName): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.name !== undefined && (obj.name = message.name);
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterName>): MsgRegisterName {
    const message = createBaseMsgRegisterName();
    message.signer = object.signer ?? "";
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    message.ownerDid = object.ownerDid ?? "";
    return message;
  }
};
function createBaseMsgRegisterNameResponse(): MsgRegisterNameResponse {
  return {
    normalizedName: ""
  };
}
export const MsgRegisterNameResponse = {
  encode(message: MsgRegisterNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.normalizedName !== "") {
      writer.uint32(10).string(message.normalizedName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.normalizedName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterNameResponse {
    return {
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : ""
    };
  },
  toJSON(message: MsgRegisterNameResponse): unknown {
    const obj: any = {};
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterNameResponse>): MsgRegisterNameResponse {
    const message = createBaseMsgRegisterNameResponse();
    message.normalizedName = object.normalizedName ?? "";
    return message;
  }
};
function createBaseMsgRegisterNameByRegistrar(): MsgRegisterNameByRegistrar {
  return {
    registrar: "",
    namespace: "",
    name: "",
    ownerDid: "",
    verified: false,
    evidenceHash: "",
    source: ""
  };
}
export const MsgRegisterNameByRegistrar = {
  encode(message: MsgRegisterNameByRegistrar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registrar !== "") {
      writer.uint32(10).string(message.registrar);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.ownerDid !== "") {
      writer.uint32(34).string(message.ownerDid);
    }
    if (message.verified === true) {
      writer.uint32(40).bool(message.verified);
    }
    if (message.evidenceHash !== "") {
      writer.uint32(50).string(message.evidenceHash);
    }
    if (message.source !== "") {
      writer.uint32(58).string(message.source);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNameByRegistrar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNameByRegistrar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registrar = reader.string();
          break;
        case 2:
          message.namespace = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.ownerDid = reader.string();
          break;
        case 5:
          message.verified = reader.bool();
          break;
        case 6:
          message.evidenceHash = reader.string();
          break;
        case 7:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterNameByRegistrar {
    return {
      registrar: isSet(object.registrar) ? String(object.registrar) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      name: isSet(object.name) ? String(object.name) : "",
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      verified: isSet(object.verified) ? Boolean(object.verified) : false,
      evidenceHash: isSet(object.evidenceHash) ? String(object.evidenceHash) : "",
      source: isSet(object.source) ? String(object.source) : ""
    };
  },
  toJSON(message: MsgRegisterNameByRegistrar): unknown {
    const obj: any = {};
    message.registrar !== undefined && (obj.registrar = message.registrar);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.name !== undefined && (obj.name = message.name);
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.verified !== undefined && (obj.verified = message.verified);
    message.evidenceHash !== undefined && (obj.evidenceHash = message.evidenceHash);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterNameByRegistrar>): MsgRegisterNameByRegistrar {
    const message = createBaseMsgRegisterNameByRegistrar();
    message.registrar = object.registrar ?? "";
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    message.ownerDid = object.ownerDid ?? "";
    message.verified = object.verified ?? false;
    message.evidenceHash = object.evidenceHash ?? "";
    message.source = object.source ?? "";
    return message;
  }
};
function createBaseMsgRegisterNameByRegistrarResponse(): MsgRegisterNameByRegistrarResponse {
  return {
    normalizedName: ""
  };
}
export const MsgRegisterNameByRegistrarResponse = {
  encode(message: MsgRegisterNameByRegistrarResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.normalizedName !== "") {
      writer.uint32(10).string(message.normalizedName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNameByRegistrarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNameByRegistrarResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.normalizedName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterNameByRegistrarResponse {
    return {
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : ""
    };
  },
  toJSON(message: MsgRegisterNameByRegistrarResponse): unknown {
    const obj: any = {};
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterNameByRegistrarResponse>): MsgRegisterNameByRegistrarResponse {
    const message = createBaseMsgRegisterNameByRegistrarResponse();
    message.normalizedName = object.normalizedName ?? "";
    return message;
  }
};
function createBaseMsgUpdateNameByRegistrar(): MsgUpdateNameByRegistrar {
  return {
    registrar: "",
    namespace: "",
    normalizedName: "",
    verified: false,
    evidenceHash: "",
    source: ""
  };
}
export const MsgUpdateNameByRegistrar = {
  encode(message: MsgUpdateNameByRegistrar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registrar !== "") {
      writer.uint32(10).string(message.registrar);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.normalizedName !== "") {
      writer.uint32(26).string(message.normalizedName);
    }
    if (message.verified === true) {
      writer.uint32(32).bool(message.verified);
    }
    if (message.evidenceHash !== "") {
      writer.uint32(42).string(message.evidenceHash);
    }
    if (message.source !== "") {
      writer.uint32(50).string(message.source);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNameByRegistrar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNameByRegistrar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registrar = reader.string();
          break;
        case 2:
          message.namespace = reader.string();
          break;
        case 3:
          message.normalizedName = reader.string();
          break;
        case 4:
          message.verified = reader.bool();
          break;
        case 5:
          message.evidenceHash = reader.string();
          break;
        case 6:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateNameByRegistrar {
    return {
      registrar: isSet(object.registrar) ? String(object.registrar) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : "",
      verified: isSet(object.verified) ? Boolean(object.verified) : false,
      evidenceHash: isSet(object.evidenceHash) ? String(object.evidenceHash) : "",
      source: isSet(object.source) ? String(object.source) : ""
    };
  },
  toJSON(message: MsgUpdateNameByRegistrar): unknown {
    const obj: any = {};
    message.registrar !== undefined && (obj.registrar = message.registrar);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    message.verified !== undefined && (obj.verified = message.verified);
    message.evidenceHash !== undefined && (obj.evidenceHash = message.evidenceHash);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateNameByRegistrar>): MsgUpdateNameByRegistrar {
    const message = createBaseMsgUpdateNameByRegistrar();
    message.registrar = object.registrar ?? "";
    message.namespace = object.namespace ?? "";
    message.normalizedName = object.normalizedName ?? "";
    message.verified = object.verified ?? false;
    message.evidenceHash = object.evidenceHash ?? "";
    message.source = object.source ?? "";
    return message;
  }
};
function createBaseMsgUpdateNameByRegistrarResponse(): MsgUpdateNameByRegistrarResponse {
  return {};
}
export const MsgUpdateNameByRegistrarResponse = {
  encode(_: MsgUpdateNameByRegistrarResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNameByRegistrarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNameByRegistrarResponse();
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
  fromJSON(_: any): MsgUpdateNameByRegistrarResponse {
    return {};
  },
  toJSON(_: MsgUpdateNameByRegistrarResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateNameByRegistrarResponse>): MsgUpdateNameByRegistrarResponse {
    const message = createBaseMsgUpdateNameByRegistrarResponse();
    return message;
  }
};
function createBaseMsgTransferName(): MsgTransferName {
  return {
    signer: "",
    namespace: "",
    normalizedName: "",
    newOwnerDid: ""
  };
}
export const MsgTransferName = {
  encode(message: MsgTransferName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.normalizedName !== "") {
      writer.uint32(26).string(message.normalizedName);
    }
    if (message.newOwnerDid !== "") {
      writer.uint32(34).string(message.newOwnerDid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.namespace = reader.string();
          break;
        case 3:
          message.normalizedName = reader.string();
          break;
        case 4:
          message.newOwnerDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferName {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : "",
      newOwnerDid: isSet(object.newOwnerDid) ? String(object.newOwnerDid) : ""
    };
  },
  toJSON(message: MsgTransferName): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    message.newOwnerDid !== undefined && (obj.newOwnerDid = message.newOwnerDid);
    return obj;
  },
  fromPartial(object: Partial<MsgTransferName>): MsgTransferName {
    const message = createBaseMsgTransferName();
    message.signer = object.signer ?? "";
    message.namespace = object.namespace ?? "";
    message.normalizedName = object.normalizedName ?? "";
    message.newOwnerDid = object.newOwnerDid ?? "";
    return message;
  }
};
function createBaseMsgTransferNameResponse(): MsgTransferNameResponse {
  return {};
}
export const MsgTransferNameResponse = {
  encode(_: MsgTransferNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNameResponse();
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
  fromJSON(_: any): MsgTransferNameResponse {
    return {};
  },
  toJSON(_: MsgTransferNameResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgTransferNameResponse>): MsgTransferNameResponse {
    const message = createBaseMsgTransferNameResponse();
    return message;
  }
};
function createBaseMsgSetNameStatus(): MsgSetNameStatus {
  return {
    signer: "",
    namespace: "",
    normalizedName: "",
    status: 0,
    reason: ""
  };
}
export const MsgSetNameStatus = {
  encode(message: MsgSetNameStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.normalizedName !== "") {
      writer.uint32(26).string(message.normalizedName);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNameStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNameStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.namespace = reader.string();
          break;
        case 3:
          message.normalizedName = reader.string();
          break;
        case 4:
          message.status = (reader.int32() as any);
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetNameStatus {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : "",
      status: isSet(object.status) ? nameStatusFromJSON(object.status) : 0,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: MsgSetNameStatus): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    message.status !== undefined && (obj.status = nameStatusToJSON(message.status));
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial(object: Partial<MsgSetNameStatus>): MsgSetNameStatus {
    const message = createBaseMsgSetNameStatus();
    message.signer = object.signer ?? "";
    message.namespace = object.namespace ?? "";
    message.normalizedName = object.normalizedName ?? "";
    message.status = object.status ?? 0;
    message.reason = object.reason ?? "";
    return message;
  }
};
function createBaseMsgSetNameStatusResponse(): MsgSetNameStatusResponse {
  return {};
}
export const MsgSetNameStatusResponse = {
  encode(_: MsgSetNameStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNameStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNameStatusResponse();
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
  fromJSON(_: any): MsgSetNameStatusResponse {
    return {};
  },
  toJSON(_: MsgSetNameStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetNameStatusResponse>): MsgSetNameStatusResponse {
    const message = createBaseMsgSetNameStatusResponse();
    return message;
  }
};