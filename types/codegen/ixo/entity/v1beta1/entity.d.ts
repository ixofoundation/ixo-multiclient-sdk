import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    /** module accounts created for entity */
    accounts: EntityAccount[];
}
export interface EntitySDKType {
    id: string;
    type: string;
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
    status: number;
    relayer_node: string;
    credentials: string[];
    entity_verified: boolean;
    metadata?: EntityMetadataSDKType;
    accounts: EntityAccountSDKType[];
}
export interface EntityAccount {
    name: string;
    address: string;
}
export interface EntityAccountSDKType {
    name: string;
    address: string;
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
export declare const EntityAccount: {
    encode(message: EntityAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityAccount;
    fromJSON(object: any): EntityAccount;
    toJSON(message: EntityAccount): unknown;
    fromPartial(object: Partial<EntityAccount>): EntityAccount;
};
export declare const EntityMetadata: {
    encode(message: EntityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntityMetadata;
    fromJSON(object: any): EntityMetadata;
    toJSON(message: EntityMetadata): unknown;
    fromPartial(object: Partial<EntityMetadata>): EntityMetadata;
};
