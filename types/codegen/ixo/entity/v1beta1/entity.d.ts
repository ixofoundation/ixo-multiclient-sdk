import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface Params {
    nftContractAddress: string;
    nftContractMinter: string;
    createSequence: Long;
}
export interface ParamsSDKType {
    nftContractAddress: string;
    nftContractMinter: string;
    createSequence: Long;
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
    /** Address of the operator through which the Entity was created */
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
    start_date?: TimestampSDKType;
    /**
     * End Date of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    end_date?: TimestampSDKType;
    /**
     * Status of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    status: number;
    /** Address of the operator through which the Entity was created */
    relayer_node: string;
    /** Credentials of the enitity to be verified */
    credentials: string[];
    /** Used as check whether the credentials of entity is verified */
    entity_verified: boolean;
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
    version_id: string;
    created?: TimestampSDKType;
    updated?: TimestampSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Entity: {
    encode(message: Entity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entity;
    fromJSON(object: any): Entity;
    toJSON(message: Entity): unknown;
    fromPartial(object: Partial<Entity>): Entity;
};
export declare const EntityMetadata: {
    encode(message: EntityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityMetadata;
    fromJSON(object: any): EntityMetadata;
    toJSON(message: EntityMetadata): unknown;
    fromPartial(object: Partial<EntityMetadata>): EntityMetadata;
};
