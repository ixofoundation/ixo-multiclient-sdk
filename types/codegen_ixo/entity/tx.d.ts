import { Context, ContextSDKType, Service, ServiceSDKType, AccordedRight, AccordedRightSDKType, LinkedResource, LinkedResourceSDKType, LinkedEntity, LinkedEntitySDKType } from "../iid/iid";
import { Verification, VerificationSDKType } from "../iid/tx";
import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateEntity defines a message for creating a project. */
export interface MsgCreateEntity {
    /** An Entity Type as defined by the implementer */
    entityType: string;
    /** Status of the Entity as defined by the implementer and interpreted by Client applications */
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
    /** DID of a linked Entity and its relationship with the Subject */
    linkedEntity: LinkedEntity[];
    /**
     * Operational status of the Entity
     * Start Date of the Entity as defined by the implementer and interpreted by Client applications
     */
    deactivated: boolean;
    /**
     * address of the account signing the message
     * End Date of the Entity as defined by the implementer and interpreted by Client applications
     */
    startDate?: Timestamp;
    /** address of the account signing the message */
    endDate?: Timestamp;
    /**
     * State of the Entity as defined by the implementer and interpreted by Client applications
     * DID of the operator through which the Entity was created
     */
    stage: string;
    relayerNode: string;
    /** Public proof that the Entity is verified */
    verificationStatus: string;
    /** Content ID or Hash of public Verifiable Credentials associated with the  subject */
    verifiableCredential: string[];
    /** Owner of the Entity NFT | The ownersdid used to sign this transaction. */
    ownerDid: string;
    /** The ownersdid address used to sign this transaction. */
    ownerAddress: string;
    /** Extention data */
    data: Uint8Array;
}
/** MsgCreateEntity defines a message for creating a project. */
export interface MsgCreateEntitySDKType {
    /** An Entity Type as defined by the implementer */
    entityType: string;
    /** Status of the Entity as defined by the implementer and interpreted by Client applications */
    entityStatus: number;
    /** the list of controller DIDs */
    controller: string[];
    /** JSON-LD contexts */
    context: ContextSDKType[];
    /** Verification Methods and Verification Relationships */
    verification: VerificationSDKType[];
    /** Service endpoints */
    service: ServiceSDKType[];
    /** Legal or Electronic Rights and associated Object Capabilities */
    accordedRight: AccordedRightSDKType[];
    /** Digital resources associated with the Subject */
    linkedResource: LinkedResourceSDKType[];
    /** DID of a linked Entity and its relationship with the Subject */
    linkedEntity: LinkedEntitySDKType[];
    /**
     * Operational status of the Entity
     * Start Date of the Entity as defined by the implementer and interpreted by Client applications
     */
    deactivated: boolean;
    /**
     * address of the account signing the message
     * End Date of the Entity as defined by the implementer and interpreted by Client applications
     */
    startDate?: TimestampSDKType;
    /** address of the account signing the message */
    endDate?: TimestampSDKType;
    /**
     * State of the Entity as defined by the implementer and interpreted by Client applications
     * DID of the operator through which the Entity was created
     */
    stage: string;
    relayerNode: string;
    /** Public proof that the Entity is verified */
    verificationStatus: string;
    /** Content ID or Hash of public Verifiable Credentials associated with the  subject */
    verifiableCredential: string[];
    /** Owner of the Entity NFT | The ownersdid used to sign this transaction. */
    ownerDid: string;
    /** The ownersdid address used to sign this transaction. */
    ownerAddress: string;
    /** Extention data */
    data: Uint8Array;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */
export interface MsgCreateEntityResponse {
    entityId: string;
    entityType: string;
    entityStatus: number;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */
export interface MsgCreateEntityResponseSDKType {
    entityId: string;
    entityType: string;
    entityStatus: number;
}
/** MsgUpdateEntityStatus defines a message for updating a entity's current status. */
export interface MsgUpdateEntity {
    /** The status of the entity. Should represent an enum in the client. */
    status: number;
    /**
     * Whether this entity is enabled ot not, basically a soft delete.
     * refer to iid module for more information
     */
    deactivated: boolean;
    /**
     * address of the account signing the message
     * refer to iid module for more information
     */
    startDate?: Timestamp;
    /** address of the account signing the message */
    endDate?: Timestamp;
    /**
     * refer to iid module meta data for more information
     * refer to iid module for more information
     */
    stage: string;
    relayerNode: string;
    /** refer to iid module for more information */
    verifiableCredential: string;
    /** The ownersdid used to sign this transaction. */
    controllerDid: string;
    /** The ownersdid used to sign this transaction. */
    controllerAddress: string;
}
/** MsgUpdateEntityStatus defines a message for updating a entity's current status. */
export interface MsgUpdateEntitySDKType {
    /** The status of the entity. Should represent an enum in the client. */
    status: number;
    /**
     * Whether this entity is enabled ot not, basically a soft delete.
     * refer to iid module for more information
     */
    deactivated: boolean;
    /**
     * address of the account signing the message
     * refer to iid module for more information
     */
    startDate?: TimestampSDKType;
    /** address of the account signing the message */
    endDate?: TimestampSDKType;
    /**
     * refer to iid module meta data for more information
     * refer to iid module for more information
     */
    stage: string;
    relayerNode: string;
    /** refer to iid module for more information */
    verifiableCredential: string;
    /** The ownersdid used to sign this transaction. */
    controllerDid: string;
    /** The ownersdid used to sign this transaction. */
    controllerAddress: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */
export interface MsgUpdateEntityResponse {
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */
export interface MsgUpdateEntityResponseSDKType {
}
export interface MsgUpdateEntityConfig {
    nftContractAddress: string;
    signer: string;
}
export interface MsgUpdateEntityConfigSDKType {
    nft_contract_address: string;
    signer: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */
export interface MsgUpdateEntityConfigResponse {
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */
export interface MsgUpdateEntityConfigResponseSDKType {
}
export interface MsgTransferEntity {
    entityDid: string;
    /** The ownersdid used to sign this transaction. */
    controllerDid: string;
    /** The ownersdid used to sign this transaction. */
    controllerAddress: string;
    recipientDid: string;
}
export interface MsgTransferEntitySDKType {
    entityDid: string;
    /** The ownersdid used to sign this transaction. */
    controllerDid: string;
    /** The ownersdid used to sign this transaction. */
    controllerAddress: string;
    recipientDid: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */
export interface MsgTransferEntityResponse {
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */
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
export declare const MsgUpdateEntityConfig: {
    encode(message: MsgUpdateEntityConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityConfig;
    fromJSON(object: any): MsgUpdateEntityConfig;
    toJSON(message: MsgUpdateEntityConfig): unknown;
    fromPartial(object: Partial<MsgUpdateEntityConfig>): MsgUpdateEntityConfig;
};
export declare const MsgUpdateEntityConfigResponse: {
    encode(_: MsgUpdateEntityConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityConfigResponse;
    fromJSON(_: any): MsgUpdateEntityConfigResponse;
    toJSON(_: MsgUpdateEntityConfigResponse): unknown;
    fromPartial(_: Partial<MsgUpdateEntityConfigResponse>): MsgUpdateEntityConfigResponse;
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
