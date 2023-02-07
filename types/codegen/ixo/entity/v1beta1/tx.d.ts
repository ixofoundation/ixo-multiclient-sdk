import { Context, ContextSDKType, Service, ServiceSDKType, AccordedRight, AccordedRightSDKType, LinkedResource, LinkedResourceSDKType, LinkedEntity, LinkedEntitySDKType } from "../../iid/v1beta1/iid";
import { Verification, VerificationSDKType } from "../../iid/v1beta1/tx";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateEntity {
    /** An Entity Type as defined by the implementer */
    entityType: string;
    /**
     * Status of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    entityStatus: number;
    /** the list of controller DIDs */
    controller: string[];
    /** JSON-LD contexts */
    context: Context[];
    /** Verification Methods and Verification Relationships */
    verification: Verification[];
    /** Service endpoints */
    service: Service[];
    /** Legal or Electronic Rights and associated Object Capabilities */
    accordedRight: AccordedRight[];
    /** Digital resources associated with the Subject */
    linkedResource: LinkedResource[];
    /**
     * DID of a linked Entity and its relationship with the Subject
     * Start Date of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    linkedEntity: LinkedEntity[];
    startDate?: Timestamp;
    /**
     * End Date of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    endDate?: Timestamp;
    /** DID of the operator through which the Entity was created */
    relayerNode: string;
    /**
     * Content ID or Hash of public Verifiable Credentials associated with the
     * subject
     */
    credentials: string[];
    ownerDid: string;
    /** The ownersdid address used to sign this transaction. */
    ownerAddress: string;
    data: Uint8Array;
}
export interface MsgCreateEntitySDKType {
    /** An Entity Type as defined by the implementer */
    entity_type: string;
    /**
     * Status of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    entity_status: number;
    /** the list of controller DIDs */
    controller: string[];
    /** JSON-LD contexts */
    context: ContextSDKType[];
    /** Verification Methods and Verification Relationships */
    verification: VerificationSDKType[];
    /** Service endpoints */
    service: ServiceSDKType[];
    /** Legal or Electronic Rights and associated Object Capabilities */
    accorded_right: AccordedRightSDKType[];
    /** Digital resources associated with the Subject */
    linked_resource: LinkedResourceSDKType[];
    /**
     * DID of a linked Entity and its relationship with the Subject
     * Start Date of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    linked_entity: LinkedEntitySDKType[];
    start_date?: TimestampSDKType;
    /**
     * End Date of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    end_date?: TimestampSDKType;
    /** DID of the operator through which the Entity was created */
    relayer_node: string;
    /**
     * Content ID or Hash of public Verifiable Credentials associated with the
     * subject
     */
    credentials: string[];
    owner_did: string;
    /** The ownersdid address used to sign this transaction. */
    owner_address: string;
    data: Uint8Array;
}
export interface MsgCreateEntityResponse {
    entityId: string;
    entityType: string;
    entityStatus: number;
}
export interface MsgCreateEntityResponseSDKType {
    entity_id: string;
    entity_type: string;
    entity_status: number;
}
/**
 * Updates the entity with all the fields, so if field empty will be updated
 * with default go type, aka never null
 */
export interface MsgUpdateEntity {
    /** Id of entity to be updated */
    id: string;
    /**
     * Status of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    entityStatus: number;
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
     * Content ID or Hash of public Verifiable Credentials associated with the
     * subject
     */
    credentials: string[];
    controllerDid: string;
    /** The controllerAddress used to sign this transaction. */
    controllerAddress: string;
}
/**
 * Updates the entity with all the fields, so if field empty will be updated
 * with default go type, aka never null
 */
export interface MsgUpdateEntitySDKType {
    /** Id of entity to be updated */
    id: string;
    /**
     * Status of the Entity as defined by the implementer and interpreted by
     * Client applications
     */
    entity_status: number;
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
     * Content ID or Hash of public Verifiable Credentials associated with the
     * subject
     */
    credentials: string[];
    controller_did: string;
    /** The controllerAddress used to sign this transaction. */
    controller_address: string;
}
export interface MsgUpdateEntityResponse {
}
export interface MsgUpdateEntityResponseSDKType {
}
/** Only relayer nodes can update entity field 'entityVerified' */
export interface MsgUpdateEntityVerified {
    /** Id of entity to be updated */
    id: string;
    /** Whether entity is verified or not based on credentials */
    entityVerified: boolean;
    relayerNodeDid: string;
    /** The relayer node's address used to sign this transaction. */
    relayerNodeAddress: string;
}
/** Only relayer nodes can update entity field 'entityVerified' */
export interface MsgUpdateEntityVerifiedSDKType {
    /** Id of entity to be updated */
    id: string;
    /** Whether entity is verified or not based on credentials */
    entity_verified: boolean;
    relayer_node_did: string;
    /** The relayer node's address used to sign this transaction. */
    relayer_node_address: string;
}
export interface MsgUpdateEntityVerifiedResponse {
}
export interface MsgUpdateEntityVerifiedResponseSDKType {
}
export interface MsgTransferEntity {
    id: string;
    ownerDid: string;
    /** The owner_address used to sign this transaction. */
    ownerAddress: string;
    recipientDid: string;
}
export interface MsgTransferEntitySDKType {
    id: string;
    owner_did: string;
    /** The owner_address used to sign this transaction. */
    owner_address: string;
    recipient_did: string;
}
export interface MsgTransferEntityResponse {
}
export interface MsgTransferEntityResponseSDKType {
}
export declare const MsgCreateEntity: {
    encode(message: MsgCreateEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntity;
    fromJSON(object: any): MsgCreateEntity;
    toJSON(message: MsgCreateEntity): unknown;
    fromPartial(object: Partial<MsgCreateEntity>): MsgCreateEntity;
};
export declare const MsgCreateEntityResponse: {
    encode(message: MsgCreateEntityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntityResponse;
    fromJSON(object: any): MsgCreateEntityResponse;
    toJSON(message: MsgCreateEntityResponse): unknown;
    fromPartial(object: Partial<MsgCreateEntityResponse>): MsgCreateEntityResponse;
};
export declare const MsgUpdateEntity: {
    encode(message: MsgUpdateEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntity;
    fromJSON(object: any): MsgUpdateEntity;
    toJSON(message: MsgUpdateEntity): unknown;
    fromPartial(object: Partial<MsgUpdateEntity>): MsgUpdateEntity;
};
export declare const MsgUpdateEntityResponse: {
    encode(_: MsgUpdateEntityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityResponse;
    fromJSON(_: any): MsgUpdateEntityResponse;
    toJSON(_: MsgUpdateEntityResponse): unknown;
    fromPartial(_: Partial<MsgUpdateEntityResponse>): MsgUpdateEntityResponse;
};
export declare const MsgUpdateEntityVerified: {
    encode(message: MsgUpdateEntityVerified, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityVerified;
    fromJSON(object: any): MsgUpdateEntityVerified;
    toJSON(message: MsgUpdateEntityVerified): unknown;
    fromPartial(object: Partial<MsgUpdateEntityVerified>): MsgUpdateEntityVerified;
};
export declare const MsgUpdateEntityVerifiedResponse: {
    encode(_: MsgUpdateEntityVerifiedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityVerifiedResponse;
    fromJSON(_: any): MsgUpdateEntityVerifiedResponse;
    toJSON(_: MsgUpdateEntityVerifiedResponse): unknown;
    fromPartial(_: Partial<MsgUpdateEntityVerifiedResponse>): MsgUpdateEntityVerifiedResponse;
};
export declare const MsgTransferEntity: {
    encode(message: MsgTransferEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferEntity;
    fromJSON(object: any): MsgTransferEntity;
    toJSON(message: MsgTransferEntity): unknown;
    fromPartial(object: Partial<MsgTransferEntity>): MsgTransferEntity;
};
export declare const MsgTransferEntityResponse: {
    encode(_: MsgTransferEntityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferEntityResponse;
    fromJSON(_: any): MsgTransferEntityResponse;
    toJSON(_: MsgTransferEntityResponse): unknown;
    fromPartial(_: Partial<MsgTransferEntityResponse>): MsgTransferEntityResponse;
};
