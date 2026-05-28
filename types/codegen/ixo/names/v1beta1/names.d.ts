import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * NameStatus represents the lifecycle state of a NameRecord. Names are never
 * hard-deleted; status transitions are used instead so audit history is
 * preserved.
 */
export declare enum NameStatus {
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
    UNRECOGNIZED = -1
}
export declare const NameStatusSDKType: typeof NameStatus;
export declare function nameStatusFromJSON(object: any): NameStatus;
export declare function nameStatusToJSON(object: NameStatus): string;
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
export declare const Namespace: {
    encode(message: Namespace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Namespace;
    fromJSON(object: any): Namespace;
    toJSON(message: Namespace): unknown;
    fromPartial(object: Partial<Namespace>): Namespace;
};
export declare const NameRecord: {
    encode(message: NameRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameRecord;
    fromJSON(object: any): NameRecord;
    toJSON(message: NameRecord): unknown;
    fromPartial(object: Partial<NameRecord>): NameRecord;
};
