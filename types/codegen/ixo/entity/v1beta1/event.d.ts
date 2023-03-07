import { Entity, EntitySDKType } from "./entity";
import { Grant, GrantSDKType } from "./cosmos";
import * as _m0 from "protobufjs/minimal";
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
export declare const EntityCreatedEvent: {
    encode(message: EntityCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityCreatedEvent;
    fromJSON(object: any): EntityCreatedEvent;
    toJSON(message: EntityCreatedEvent): unknown;
    fromPartial(object: Partial<EntityCreatedEvent>): EntityCreatedEvent;
};
export declare const EntityUpdatedEvent: {
    encode(message: EntityUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityUpdatedEvent;
    fromJSON(object: any): EntityUpdatedEvent;
    toJSON(message: EntityUpdatedEvent): unknown;
    fromPartial(object: Partial<EntityUpdatedEvent>): EntityUpdatedEvent;
};
export declare const EntityVerifiedUpdatedEvent: {
    encode(message: EntityVerifiedUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityVerifiedUpdatedEvent;
    fromJSON(object: any): EntityVerifiedUpdatedEvent;
    toJSON(message: EntityVerifiedUpdatedEvent): unknown;
    fromPartial(object: Partial<EntityVerifiedUpdatedEvent>): EntityVerifiedUpdatedEvent;
};
export declare const EntityTransferredEvent: {
    encode(message: EntityTransferredEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityTransferredEvent;
    fromJSON(object: any): EntityTransferredEvent;
    toJSON(message: EntityTransferredEvent): unknown;
    fromPartial(object: Partial<EntityTransferredEvent>): EntityTransferredEvent;
};
export declare const EntityAccountCreatedEvent: {
    encode(message: EntityAccountCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityAccountCreatedEvent;
    fromJSON(object: any): EntityAccountCreatedEvent;
    toJSON(message: EntityAccountCreatedEvent): unknown;
    fromPartial(object: Partial<EntityAccountCreatedEvent>): EntityAccountCreatedEvent;
};
export declare const EntityAccountAuthzCreatedEvent: {
    encode(message: EntityAccountAuthzCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityAccountAuthzCreatedEvent;
    fromJSON(object: any): EntityAccountAuthzCreatedEvent;
    toJSON(message: EntityAccountAuthzCreatedEvent): unknown;
    fromPartial(object: Partial<EntityAccountAuthzCreatedEvent>): EntityAccountAuthzCreatedEvent;
};
