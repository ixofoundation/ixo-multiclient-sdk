import { Namespace, NamespaceSDKType, NameRecord, NameRecordSDKType, NameStatus } from "./names";
import * as _m0 from "protobufjs/minimal";
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
export declare const NamespaceCreatedEvent: {
    encode(message: NamespaceCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NamespaceCreatedEvent;
    fromJSON(object: any): NamespaceCreatedEvent;
    toJSON(message: NamespaceCreatedEvent): unknown;
    fromPartial(object: Partial<NamespaceCreatedEvent>): NamespaceCreatedEvent;
};
export declare const NamespaceUpdatedEvent: {
    encode(message: NamespaceUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NamespaceUpdatedEvent;
    fromJSON(object: any): NamespaceUpdatedEvent;
    toJSON(message: NamespaceUpdatedEvent): unknown;
    fromPartial(object: Partial<NamespaceUpdatedEvent>): NamespaceUpdatedEvent;
};
export declare const NameRegisteredEvent: {
    encode(message: NameRegisteredEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameRegisteredEvent;
    fromJSON(object: any): NameRegisteredEvent;
    toJSON(message: NameRegisteredEvent): unknown;
    fromPartial(object: Partial<NameRegisteredEvent>): NameRegisteredEvent;
};
export declare const NameUpdatedEvent: {
    encode(message: NameUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameUpdatedEvent;
    fromJSON(object: any): NameUpdatedEvent;
    toJSON(message: NameUpdatedEvent): unknown;
    fromPartial(object: Partial<NameUpdatedEvent>): NameUpdatedEvent;
};
export declare const NameTransferredEvent: {
    encode(message: NameTransferredEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameTransferredEvent;
    fromJSON(object: any): NameTransferredEvent;
    toJSON(message: NameTransferredEvent): unknown;
    fromPartial(object: Partial<NameTransferredEvent>): NameTransferredEvent;
};
export declare const NameStatusChangedEvent: {
    encode(message: NameStatusChangedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameStatusChangedEvent;
    fromJSON(object: any): NameStatusChangedEvent;
    toJSON(message: NameStatusChangedEvent): unknown;
    fromPartial(object: Partial<NameStatusChangedEvent>): NameStatusChangedEvent;
};
