import { Context, ContextSDKType, Service, ServiceSDKType, AccordedRight, AccordedRightSDKType, LinkedResource, LinkedResourceSDKType, LinkedEntity, LinkedEntitySDKType, LinkedClaim, LinkedClaimSDKType } from "../../iid/v1beta1/types";
import { Verification, VerificationSDKType } from "../../iid/v1beta1/tx";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Grant, GrantSDKType } from "../../../cosmos/authz/v1beta1/authz";
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
    /** Did of the operator through which the Entity was created */
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
    alsoKnownAs: string;
    /** Digital claims associated with the Subject */
    linkedClaim: LinkedClaim[];
}
export interface MsgCreateEntitySDKType {
    entity_type: string;
    entity_status: number;
    controller: string[];
    context: ContextSDKType[];
    verification: VerificationSDKType[];
    service: ServiceSDKType[];
    accorded_right: AccordedRightSDKType[];
    linked_resource: LinkedResourceSDKType[];
    linked_entity: LinkedEntitySDKType[];
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
    relayer_node: string;
    credentials: string[];
    owner_did: string;
    owner_address: string;
    data: Uint8Array;
    alsoKnownAs: string;
    linked_claim: LinkedClaimSDKType[];
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
    id: string;
    entity_status: number;
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
    credentials: string[];
    controller_did: string;
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
    id: string;
    entity_verified: boolean;
    relayer_node_did: string;
    relayer_node_address: string;
}
export interface MsgUpdateEntityVerifiedResponse {
}
export interface MsgUpdateEntityVerifiedResponseSDKType {
}
export interface MsgTransferEntity {
    id: string;
    /** The owner_did used to sign this transaction. */
    ownerDid: string;
    /** The owner_address used to sign this transaction. */
    ownerAddress: string;
    recipientDid: string;
}
export interface MsgTransferEntitySDKType {
    id: string;
    owner_did: string;
    owner_address: string;
    recipient_did: string;
}
export interface MsgTransferEntityResponse {
}
export interface MsgTransferEntityResponseSDKType {
}
/** create a module account for an entity */
export interface MsgCreateEntityAccount {
    /** entity id (did) to create account for */
    id: string;
    /** name of account */
    name: string;
    /** The owner_address used to sign this transaction. */
    ownerAddress: string;
}
/** create a module account for an entity */
export interface MsgCreateEntityAccountSDKType {
    id: string;
    name: string;
    owner_address: string;
}
export interface MsgCreateEntityAccountResponse {
    /** account address that was created for specific entity and account name */
    account: string;
}
export interface MsgCreateEntityAccountResponseSDKType {
    account: string;
}
/**
 * Create a authz grant from entity account (as grantor) to recipient in msg as
 * grantee for the specific authorization
 */
export interface MsgGrantEntityAccountAuthz {
    /** entity id (did) which has the account */
    id: string;
    /** name of account */
    name: string;
    /** the grantee address that will be able to execute the authz authorization */
    granteeAddress: string;
    /** grant to be Authorized in authz grant */
    grant?: Grant;
    /** the owner_address used to sign this transaction. */
    ownerAddress: string;
}
/**
 * Create a authz grant from entity account (as grantor) to recipient in msg as
 * grantee for the specific authorization
 */
export interface MsgGrantEntityAccountAuthzSDKType {
    id: string;
    name: string;
    grantee_address: string;
    grant?: GrantSDKType;
    owner_address: string;
}
export interface MsgGrantEntityAccountAuthzResponse {
}
export interface MsgGrantEntityAccountAuthzResponseSDKType {
}
/** Revoke an existing authz grant from entity account (as grantor) to recipient */
export interface MsgRevokeEntityAccountAuthz {
    /** entity id (did) which has the account */
    id: string;
    /** name of account */
    name: string;
    /** the grantee address for which the authz grant will be revoked */
    granteeAddress: string;
    /** the msg type url of the grant to be revoked for the specific grantee */
    msgTypeUrl: string;
    /** the owner_address used to sign this transaction. */
    ownerAddress: string;
}
/** Revoke an existing authz grant from entity account (as grantor) to recipient */
export interface MsgRevokeEntityAccountAuthzSDKType {
    id: string;
    name: string;
    grantee_address: string;
    msg_type_url: string;
    owner_address: string;
}
export interface MsgRevokeEntityAccountAuthzResponse {
}
export interface MsgRevokeEntityAccountAuthzResponseSDKType {
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
export declare const MsgCreateEntityAccount: {
    encode(message: MsgCreateEntityAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntityAccount;
    fromJSON(object: any): MsgCreateEntityAccount;
    toJSON(message: MsgCreateEntityAccount): unknown;
    fromPartial(object: Partial<MsgCreateEntityAccount>): MsgCreateEntityAccount;
};
export declare const MsgCreateEntityAccountResponse: {
    encode(message: MsgCreateEntityAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntityAccountResponse;
    fromJSON(object: any): MsgCreateEntityAccountResponse;
    toJSON(message: MsgCreateEntityAccountResponse): unknown;
    fromPartial(object: Partial<MsgCreateEntityAccountResponse>): MsgCreateEntityAccountResponse;
};
export declare const MsgGrantEntityAccountAuthz: {
    encode(message: MsgGrantEntityAccountAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantEntityAccountAuthz;
    fromJSON(object: any): MsgGrantEntityAccountAuthz;
    toJSON(message: MsgGrantEntityAccountAuthz): unknown;
    fromPartial(object: Partial<MsgGrantEntityAccountAuthz>): MsgGrantEntityAccountAuthz;
};
export declare const MsgGrantEntityAccountAuthzResponse: {
    encode(_: MsgGrantEntityAccountAuthzResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantEntityAccountAuthzResponse;
    fromJSON(_: any): MsgGrantEntityAccountAuthzResponse;
    toJSON(_: MsgGrantEntityAccountAuthzResponse): unknown;
    fromPartial(_: Partial<MsgGrantEntityAccountAuthzResponse>): MsgGrantEntityAccountAuthzResponse;
};
export declare const MsgRevokeEntityAccountAuthz: {
    encode(message: MsgRevokeEntityAccountAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeEntityAccountAuthz;
    fromJSON(object: any): MsgRevokeEntityAccountAuthz;
    toJSON(message: MsgRevokeEntityAccountAuthz): unknown;
    fromPartial(object: Partial<MsgRevokeEntityAccountAuthz>): MsgRevokeEntityAccountAuthz;
};
export declare const MsgRevokeEntityAccountAuthzResponse: {
    encode(_: MsgRevokeEntityAccountAuthzResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeEntityAccountAuthzResponse;
    fromJSON(_: any): MsgRevokeEntityAccountAuthzResponse;
    toJSON(_: MsgRevokeEntityAccountAuthzResponse): unknown;
    fromPartial(_: Partial<MsgRevokeEntityAccountAuthzResponse>): MsgRevokeEntityAccountAuthzResponse;
};
