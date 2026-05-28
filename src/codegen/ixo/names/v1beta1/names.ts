//@ts-nocheck
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * NameStatus represents the lifecycle state of a NameRecord. Names are never
 * hard-deleted; status transitions are used instead so audit history is
 * preserved.
 */
export enum NameStatus {
  /** NAME_STATUS_UNSPECIFIED - NAME_STATUS_UNSPECIFIED is the zero value and must not be persisted. */
  NAME_STATUS_UNSPECIFIED = 0,
  /** NAME_STATUS_ACTIVE - NAME_STATUS_ACTIVE: the normal resolvable state. */
  NAME_STATUS_ACTIVE = 1,
  /**
   * NAME_STATUS_SUSPENDED - NAME_STATUS_SUSPENDED: hidden from resolution, can be restored by
   * registrar.
   */
  NAME_STATUS_SUSPENDED = 2,
  /**
   * NAME_STATUS_REVOKED - NAME_STATUS_REVOKED: terminally taken down, cannot be re-used by the same
   * owner.
   */
  NAME_STATUS_REVOKED = 3,
  /**
   * NAME_STATUS_TOMBSTONED - NAME_STATUS_TOMBSTONED: registrar-level take-down for policy/legal reasons;
   * the (namespace, normalized_name) tuple is permanently burned.
   */
  NAME_STATUS_TOMBSTONED = 4,
  UNRECOGNIZED = -1,
}
export const NameStatusSDKType = NameStatus;
export function nameStatusFromJSON(object: any): NameStatus {
  switch (object) {
    case 0:
    case "NAME_STATUS_UNSPECIFIED":
      return NameStatus.NAME_STATUS_UNSPECIFIED;
    case 1:
    case "NAME_STATUS_ACTIVE":
      return NameStatus.NAME_STATUS_ACTIVE;
    case 2:
    case "NAME_STATUS_SUSPENDED":
      return NameStatus.NAME_STATUS_SUSPENDED;
    case 3:
    case "NAME_STATUS_REVOKED":
      return NameStatus.NAME_STATUS_REVOKED;
    case 4:
    case "NAME_STATUS_TOMBSTONED":
      return NameStatus.NAME_STATUS_TOMBSTONED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NameStatus.UNRECOGNIZED;
  }
}
export function nameStatusToJSON(object: NameStatus): string {
  switch (object) {
    case NameStatus.NAME_STATUS_UNSPECIFIED:
      return "NAME_STATUS_UNSPECIFIED";
    case NameStatus.NAME_STATUS_ACTIVE:
      return "NAME_STATUS_ACTIVE";
    case NameStatus.NAME_STATUS_SUSPENDED:
      return "NAME_STATUS_SUSPENDED";
    case NameStatus.NAME_STATUS_REVOKED:
      return "NAME_STATUS_REVOKED";
    case NameStatus.NAME_STATUS_TOMBSTONED:
      return "NAME_STATUS_TOMBSTONED";
    case NameStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Namespace defines a governed bucket of names (e.g. "yoid", "twitter").
 * Created and updated only via governance.
 */
export interface Namespace {
  /**
   * name is the namespace identifier and the uniqueness scope for names
   * registered under it. Lowercase ASCII recommended.
   */
  name: string;
  /** description is a human-readable summary of the namespace. */
  description: string;
  /**
   * registrar_accounts is the list of bech32 account addresses authorised to
   * register or moderate names in this namespace on behalf of users.
   */
  registrarAccounts: string[];
  /**
   * allow_self_register: when true, users can register their own names by
   * signing MsgRegisterName. When false, only registrars can register.
   */
  allowSelfRegister: boolean;
  /**
   * allow_registrar_override: when true, registrars can update or transfer
   * names regardless of the current owner (used for moderation or assisted
   * flows). When false, only the owning DID can transfer/update.
   */
  allowRegistrarOverride: boolean;
  /** min_length is the minimum allowed length of the normalized name. */
  minLength: number;
  /**
   * max_length is the maximum allowed length of the normalized name. Must be
   * greater than zero.
   */
  maxLength: number;
  /**
   * regex is an additional ASCII-only character pattern that the normalized
   * name must match. Empty string means no extra check on top of the default.
   */
  regex: string;
  /**
   * allow_expiry: when true, NameRecords in this namespace may have a non-zero
   * valid_until. Reserved for a future renewal flow.
   */
  allowExpiry: boolean;
}
/**
 * Namespace defines a governed bucket of names (e.g. "yoid", "twitter").
 * Created and updated only via governance.
 */
export interface NamespaceSDKType {
  name: string;
  description: string;
  registrar_accounts: string[];
  allow_self_register: boolean;
  allow_registrar_override: boolean;
  min_length: number;
  max_length: number;
  regex: string;
  allow_expiry: boolean;
}
/**
 * NameRecord is a registered name bound to a DID. The uniqueness key for a
 * NameRecord is (namespace, normalized_name).
 */
export interface NameRecord {
  /** namespace is the Namespace.name this record belongs to. */
  namespace: string;
  /**
   * normalized_name is the canonical form used for uniqueness (trimmed,
   * lowercased ASCII).
   */
  normalizedName: string;
  /**
   * display_name is the original name as supplied by the registrant, preserving
   * case for presentation.
   */
  displayName: string;
  /** owner_did is the DID that controls this name. Resolution returns this DID. */
  ownerDid: string;
  /**
   * verified is true if this name was attested to by a registrar/oracle (e.g.
   * proof of an off-chain identity such as Twitter or KYC).
   */
  verified: boolean;
  /**
   * valid_until is a unix timestamp; 0 means no expiry. Reserved for future
   * renewal flow.
   */
  validUntil: Long;
  /**
   * status is the lifecycle state of the record. Resolution should treat
   * anything other than NAME_STATUS_ACTIVE as not-found.
   */
  status: NameStatus;
  /**
   * verified_by is the DID or address of the registrar/oracle that attested
   * this record, if any.
   */
  verifiedBy: string;
  /**
   * evidence_hash is an optional content hash of off-chain attestation
   * evidence (e.g. a signed JWT or VC).
   */
  evidenceHash: string;
  /**
   * source is a free-form tag describing where the verification came from
   * (e.g. "workos", "ussd", "import", "manual").
   */
  source: string;
  /** created_at is the unix timestamp the record was first written. */
  createdAt: Long;
  /** updated_at is the unix timestamp of the last write. */
  updatedAt: Long;
}
/**
 * NameRecord is a registered name bound to a DID. The uniqueness key for a
 * NameRecord is (namespace, normalized_name).
 */
export interface NameRecordSDKType {
  namespace: string;
  normalized_name: string;
  display_name: string;
  owner_did: string;
  verified: boolean;
  valid_until: Long;
  status: NameStatus;
  verified_by: string;
  evidence_hash: string;
  source: string;
  created_at: Long;
  updated_at: Long;
}
function createBaseNamespace(): Namespace {
  return {
    name: "",
    description: "",
    registrarAccounts: [],
    allowSelfRegister: false,
    allowRegistrarOverride: false,
    minLength: 0,
    maxLength: 0,
    regex: "",
    allowExpiry: false
  };
}
export const Namespace = {
  encode(message: Namespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.registrarAccounts) {
      writer.uint32(26).string(v!);
    }
    if (message.allowSelfRegister === true) {
      writer.uint32(32).bool(message.allowSelfRegister);
    }
    if (message.allowRegistrarOverride === true) {
      writer.uint32(40).bool(message.allowRegistrarOverride);
    }
    if (message.minLength !== 0) {
      writer.uint32(48).uint32(message.minLength);
    }
    if (message.maxLength !== 0) {
      writer.uint32(56).uint32(message.maxLength);
    }
    if (message.regex !== "") {
      writer.uint32(66).string(message.regex);
    }
    if (message.allowExpiry === true) {
      writer.uint32(72).bool(message.allowExpiry);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Namespace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.registrarAccounts.push(reader.string());
          break;
        case 4:
          message.allowSelfRegister = reader.bool();
          break;
        case 5:
          message.allowRegistrarOverride = reader.bool();
          break;
        case 6:
          message.minLength = reader.uint32();
          break;
        case 7:
          message.maxLength = reader.uint32();
          break;
        case 8:
          message.regex = reader.string();
          break;
        case 9:
          message.allowExpiry = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Namespace {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      registrarAccounts: Array.isArray(object?.registrarAccounts) ? object.registrarAccounts.map((e: any) => String(e)) : [],
      allowSelfRegister: isSet(object.allowSelfRegister) ? Boolean(object.allowSelfRegister) : false,
      allowRegistrarOverride: isSet(object.allowRegistrarOverride) ? Boolean(object.allowRegistrarOverride) : false,
      minLength: isSet(object.minLength) ? Number(object.minLength) : 0,
      maxLength: isSet(object.maxLength) ? Number(object.maxLength) : 0,
      regex: isSet(object.regex) ? String(object.regex) : "",
      allowExpiry: isSet(object.allowExpiry) ? Boolean(object.allowExpiry) : false
    };
  },
  toJSON(message: Namespace): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.registrarAccounts) {
      obj.registrarAccounts = message.registrarAccounts.map(e => e);
    } else {
      obj.registrarAccounts = [];
    }
    message.allowSelfRegister !== undefined && (obj.allowSelfRegister = message.allowSelfRegister);
    message.allowRegistrarOverride !== undefined && (obj.allowRegistrarOverride = message.allowRegistrarOverride);
    message.minLength !== undefined && (obj.minLength = Math.round(message.minLength));
    message.maxLength !== undefined && (obj.maxLength = Math.round(message.maxLength));
    message.regex !== undefined && (obj.regex = message.regex);
    message.allowExpiry !== undefined && (obj.allowExpiry = message.allowExpiry);
    return obj;
  },
  fromPartial(object: Partial<Namespace>): Namespace {
    const message = createBaseNamespace();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.registrarAccounts = object.registrarAccounts?.map(e => e) || [];
    message.allowSelfRegister = object.allowSelfRegister ?? false;
    message.allowRegistrarOverride = object.allowRegistrarOverride ?? false;
    message.minLength = object.minLength ?? 0;
    message.maxLength = object.maxLength ?? 0;
    message.regex = object.regex ?? "";
    message.allowExpiry = object.allowExpiry ?? false;
    return message;
  }
};
function createBaseNameRecord(): NameRecord {
  return {
    namespace: "",
    normalizedName: "",
    displayName: "",
    ownerDid: "",
    verified: false,
    validUntil: Long.ZERO,
    status: 0,
    verifiedBy: "",
    evidenceHash: "",
    source: "",
    createdAt: Long.ZERO,
    updatedAt: Long.ZERO
  };
}
export const NameRecord = {
  encode(message: NameRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.normalizedName !== "") {
      writer.uint32(18).string(message.normalizedName);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.ownerDid !== "") {
      writer.uint32(34).string(message.ownerDid);
    }
    if (message.verified === true) {
      writer.uint32(40).bool(message.verified);
    }
    if (!message.validUntil.isZero()) {
      writer.uint32(48).int64(message.validUntil);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.verifiedBy !== "") {
      writer.uint32(66).string(message.verifiedBy);
    }
    if (message.evidenceHash !== "") {
      writer.uint32(74).string(message.evidenceHash);
    }
    if (message.source !== "") {
      writer.uint32(82).string(message.source);
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(88).int64(message.createdAt);
    }
    if (!message.updatedAt.isZero()) {
      writer.uint32(96).int64(message.updatedAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NameRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameRecord();
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
          message.displayName = reader.string();
          break;
        case 4:
          message.ownerDid = reader.string();
          break;
        case 5:
          message.verified = reader.bool();
          break;
        case 6:
          message.validUntil = (reader.int64() as Long);
          break;
        case 7:
          message.status = (reader.int32() as any);
          break;
        case 8:
          message.verifiedBy = reader.string();
          break;
        case 9:
          message.evidenceHash = reader.string();
          break;
        case 10:
          message.source = reader.string();
          break;
        case 11:
          message.createdAt = (reader.int64() as Long);
          break;
        case 12:
          message.updatedAt = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NameRecord {
    return {
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      verified: isSet(object.verified) ? Boolean(object.verified) : false,
      validUntil: isSet(object.validUntil) ? Long.fromValue(object.validUntil) : Long.ZERO,
      status: isSet(object.status) ? nameStatusFromJSON(object.status) : 0,
      verifiedBy: isSet(object.verifiedBy) ? String(object.verifiedBy) : "",
      evidenceHash: isSet(object.evidenceHash) ? String(object.evidenceHash) : "",
      source: isSet(object.source) ? String(object.source) : "",
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO,
      updatedAt: isSet(object.updatedAt) ? Long.fromValue(object.updatedAt) : Long.ZERO
    };
  },
  toJSON(message: NameRecord): unknown {
    const obj: any = {};
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.verified !== undefined && (obj.verified = message.verified);
    message.validUntil !== undefined && (obj.validUntil = (message.validUntil || Long.ZERO).toString());
    message.status !== undefined && (obj.status = nameStatusToJSON(message.status));
    message.verifiedBy !== undefined && (obj.verifiedBy = message.verifiedBy);
    message.evidenceHash !== undefined && (obj.evidenceHash = message.evidenceHash);
    message.source !== undefined && (obj.source = message.source);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    message.updatedAt !== undefined && (obj.updatedAt = (message.updatedAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<NameRecord>): NameRecord {
    const message = createBaseNameRecord();
    message.namespace = object.namespace ?? "";
    message.normalizedName = object.normalizedName ?? "";
    message.displayName = object.displayName ?? "";
    message.ownerDid = object.ownerDid ?? "";
    message.verified = object.verified ?? false;
    message.validUntil = object.validUntil !== undefined && object.validUntil !== null ? Long.fromValue(object.validUntil) : Long.ZERO;
    message.status = object.status ?? 0;
    message.verifiedBy = object.verifiedBy ?? "";
    message.evidenceHash = object.evidenceHash ?? "";
    message.source = object.source ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Long.fromValue(object.updatedAt) : Long.ZERO;
    return message;
  }
};