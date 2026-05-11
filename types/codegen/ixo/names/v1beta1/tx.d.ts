import { Namespace, NamespaceSDKType, NameStatus } from "./names";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgCreateNamespaceResponse {
}
export interface MsgCreateNamespaceResponseSDKType {
}
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
export interface MsgUpdateNamespaceResponse {
}
export interface MsgUpdateNamespaceResponseSDKType {
}
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
export interface MsgUpdateNameByRegistrarResponse {
}
export interface MsgUpdateNameByRegistrarResponseSDKType {
}
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
export interface MsgTransferNameResponse {
}
export interface MsgTransferNameResponseSDKType {
}
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
export interface MsgSetNameStatusResponse {
}
export interface MsgSetNameStatusResponseSDKType {
}
export declare const MsgCreateNamespace: {
    encode(message: MsgCreateNamespace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNamespace;
    fromJSON(object: any): MsgCreateNamespace;
    toJSON(message: MsgCreateNamespace): unknown;
    fromPartial(object: Partial<MsgCreateNamespace>): MsgCreateNamespace;
};
export declare const MsgCreateNamespaceResponse: {
    encode(_: MsgCreateNamespaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNamespaceResponse;
    fromJSON(_: any): MsgCreateNamespaceResponse;
    toJSON(_: MsgCreateNamespaceResponse): unknown;
    fromPartial(_: Partial<MsgCreateNamespaceResponse>): MsgCreateNamespaceResponse;
};
export declare const MsgUpdateNamespace: {
    encode(message: MsgUpdateNamespace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNamespace;
    fromJSON(object: any): MsgUpdateNamespace;
    toJSON(message: MsgUpdateNamespace): unknown;
    fromPartial(object: Partial<MsgUpdateNamespace>): MsgUpdateNamespace;
};
export declare const MsgUpdateNamespaceResponse: {
    encode(_: MsgUpdateNamespaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNamespaceResponse;
    fromJSON(_: any): MsgUpdateNamespaceResponse;
    toJSON(_: MsgUpdateNamespaceResponse): unknown;
    fromPartial(_: Partial<MsgUpdateNamespaceResponse>): MsgUpdateNamespaceResponse;
};
export declare const MsgRegisterName: {
    encode(message: MsgRegisterName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterName;
    fromJSON(object: any): MsgRegisterName;
    toJSON(message: MsgRegisterName): unknown;
    fromPartial(object: Partial<MsgRegisterName>): MsgRegisterName;
};
export declare const MsgRegisterNameResponse: {
    encode(message: MsgRegisterNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNameResponse;
    fromJSON(object: any): MsgRegisterNameResponse;
    toJSON(message: MsgRegisterNameResponse): unknown;
    fromPartial(object: Partial<MsgRegisterNameResponse>): MsgRegisterNameResponse;
};
export declare const MsgRegisterNameByRegistrar: {
    encode(message: MsgRegisterNameByRegistrar, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNameByRegistrar;
    fromJSON(object: any): MsgRegisterNameByRegistrar;
    toJSON(message: MsgRegisterNameByRegistrar): unknown;
    fromPartial(object: Partial<MsgRegisterNameByRegistrar>): MsgRegisterNameByRegistrar;
};
export declare const MsgRegisterNameByRegistrarResponse: {
    encode(message: MsgRegisterNameByRegistrarResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNameByRegistrarResponse;
    fromJSON(object: any): MsgRegisterNameByRegistrarResponse;
    toJSON(message: MsgRegisterNameByRegistrarResponse): unknown;
    fromPartial(object: Partial<MsgRegisterNameByRegistrarResponse>): MsgRegisterNameByRegistrarResponse;
};
export declare const MsgUpdateNameByRegistrar: {
    encode(message: MsgUpdateNameByRegistrar, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNameByRegistrar;
    fromJSON(object: any): MsgUpdateNameByRegistrar;
    toJSON(message: MsgUpdateNameByRegistrar): unknown;
    fromPartial(object: Partial<MsgUpdateNameByRegistrar>): MsgUpdateNameByRegistrar;
};
export declare const MsgUpdateNameByRegistrarResponse: {
    encode(_: MsgUpdateNameByRegistrarResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNameByRegistrarResponse;
    fromJSON(_: any): MsgUpdateNameByRegistrarResponse;
    toJSON(_: MsgUpdateNameByRegistrarResponse): unknown;
    fromPartial(_: Partial<MsgUpdateNameByRegistrarResponse>): MsgUpdateNameByRegistrarResponse;
};
export declare const MsgTransferName: {
    encode(message: MsgTransferName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferName;
    fromJSON(object: any): MsgTransferName;
    toJSON(message: MsgTransferName): unknown;
    fromPartial(object: Partial<MsgTransferName>): MsgTransferName;
};
export declare const MsgTransferNameResponse: {
    encode(_: MsgTransferNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNameResponse;
    fromJSON(_: any): MsgTransferNameResponse;
    toJSON(_: MsgTransferNameResponse): unknown;
    fromPartial(_: Partial<MsgTransferNameResponse>): MsgTransferNameResponse;
};
export declare const MsgSetNameStatus: {
    encode(message: MsgSetNameStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNameStatus;
    fromJSON(object: any): MsgSetNameStatus;
    toJSON(message: MsgSetNameStatus): unknown;
    fromPartial(object: Partial<MsgSetNameStatus>): MsgSetNameStatus;
};
export declare const MsgSetNameStatusResponse: {
    encode(_: MsgSetNameStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNameStatusResponse;
    fromJSON(_: any): MsgSetNameStatusResponse;
    toJSON(_: MsgSetNameStatusResponse): unknown;
    fromPartial(_: Partial<MsgSetNameStatusResponse>): MsgSetNameStatusResponse;
};
