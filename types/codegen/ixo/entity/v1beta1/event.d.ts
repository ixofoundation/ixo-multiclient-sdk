import { Entity, EntitySDKType } from "./entity";
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
