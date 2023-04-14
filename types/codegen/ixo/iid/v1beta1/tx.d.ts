import { Context, ContextSDKType, Service, ServiceSDKType, AccordedRight, AccordedRightSDKType, LinkedResource, LinkedResourceSDKType, LinkedEntity, LinkedEntitySDKType, LinkedClaim, LinkedClaimSDKType, VerificationMethod, VerificationMethodSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/**
 * Verification is a message that allows to assign a verification method
 * to one or more verification relationships
 */
export interface Verification {
    /** relationships that the method is allowed into. */
    relationships: string[];
    /** public key associated with the did document. */
    method?: VerificationMethod;
    /** additional contexts (json ld schemas) */
    context: string[];
}
/**
 * Verification is a message that allows to assign a verification method
 * to one or more verification relationships
 */
export interface VerificationSDKType {
    relationships: string[];
    method?: VerificationMethodSDKType;
    context: string[];
}
/** MsgCreateDidDocument defines a SDK message for creating a new did. */
export interface MsgCreateIidDocument {
    /** the did */
    id: string;
    /** the list of controller DIDs */
    controllers: string[];
    context: Context[];
    /** the list of verification methods and relationships */
    verifications: Verification[];
    services: Service[];
    accordedRight: AccordedRight[];
    linkedResource: LinkedResource[];
    linkedEntity: LinkedEntity[];
    alsoKnownAs: string;
    /** address of the account signing the message */
    signer: string;
    linkedClaim: LinkedClaim[];
}
/** MsgCreateDidDocument defines a SDK message for creating a new did. */
export interface MsgCreateIidDocumentSDKType {
    id: string;
    controllers: string[];
    context: ContextSDKType[];
    verifications: VerificationSDKType[];
    services: ServiceSDKType[];
    accordedRight: AccordedRightSDKType[];
    linkedResource: LinkedResourceSDKType[];
    linkedEntity: LinkedEntitySDKType[];
    alsoKnownAs: string;
    signer: string;
    linkedClaim: LinkedClaimSDKType[];
}
export interface MsgCreateIidDocumentResponse {
}
export interface MsgCreateIidDocumentResponseSDKType {
}
/**
 * Updates the entity with all the fields, so if field empty will be updated
 * with default go type, aka never null
 */
export interface MsgUpdateIidDocument {
    /** the did */
    id: string;
    /** the list of controller DIDs */
    controllers: string[];
    context: Context[];
    /** the list of verification methods and relationships */
    verifications: Verification[];
    services: Service[];
    accordedRight: AccordedRight[];
    linkedResource: LinkedResource[];
    linkedEntity: LinkedEntity[];
    alsoKnownAs: string;
    /** address of the account signing the message */
    signer: string;
    linkedClaim: LinkedClaim[];
}
/**
 * Updates the entity with all the fields, so if field empty will be updated
 * with default go type, aka never null
 */
export interface MsgUpdateIidDocumentSDKType {
    id: string;
    controllers: string[];
    context: ContextSDKType[];
    verifications: VerificationSDKType[];
    services: ServiceSDKType[];
    accordedRight: AccordedRightSDKType[];
    linkedResource: LinkedResourceSDKType[];
    linkedEntity: LinkedEntitySDKType[];
    alsoKnownAs: string;
    signer: string;
    linkedClaim: LinkedClaimSDKType[];
}
export interface MsgUpdateIidDocumentResponse {
}
export interface MsgUpdateIidDocumentResponseSDKType {
}
export interface MsgAddVerification {
    /** the did */
    id: string;
    /** the verification to add */
    verification?: Verification;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddVerificationSDKType {
    id: string;
    verification?: VerificationSDKType;
    signer: string;
}
export interface MsgAddVerificationResponse {
}
export interface MsgAddVerificationResponseSDKType {
}
export interface MsgSetVerificationRelationships {
    /** the did */
    id: string;
    /** the verification method id */
    methodId: string;
    /** the list of relationships to set */
    relationships: string[];
    /** address of the account signing the message */
    signer: string;
}
export interface MsgSetVerificationRelationshipsSDKType {
    id: string;
    method_id: string;
    relationships: string[];
    signer: string;
}
export interface MsgSetVerificationRelationshipsResponse {
}
export interface MsgSetVerificationRelationshipsResponseSDKType {
}
export interface MsgRevokeVerification {
    /** the did */
    id: string;
    /** the verification method id */
    methodId: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgRevokeVerificationSDKType {
    id: string;
    method_id: string;
    signer: string;
}
export interface MsgRevokeVerificationResponse {
}
export interface MsgRevokeVerificationResponseSDKType {
}
export interface MsgAddService {
    /** the did */
    id: string;
    /** the service data to add */
    serviceData?: Service;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddServiceSDKType {
    id: string;
    service_data?: ServiceSDKType;
    signer: string;
}
export interface MsgAddServiceResponse {
}
export interface MsgAddServiceResponseSDKType {
}
export interface MsgDeleteService {
    /** the did */
    id: string;
    /** the service id */
    serviceId: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeleteServiceSDKType {
    id: string;
    service_id: string;
    signer: string;
}
export interface MsgDeleteServiceResponse {
}
export interface MsgDeleteServiceResponseSDKType {
}
export interface MsgAddController {
    /** the did of the document */
    id: string;
    /** the did to add as a controller of the did document */
    controllerDid: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddControllerSDKType {
    id: string;
    controller_did: string;
    signer: string;
}
export interface MsgAddControllerResponse {
}
export interface MsgAddControllerResponseSDKType {
}
export interface MsgDeleteController {
    /** the did of the document */
    id: string;
    /** the did to remove from the list of controllers of the did document */
    controllerDid: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeleteControllerSDKType {
    id: string;
    controller_did: string;
    signer: string;
}
export interface MsgDeleteControllerResponse {
}
export interface MsgDeleteControllerResponseSDKType {
}
export interface MsgAddLinkedResource {
    /** the did */
    id: string;
    /** the verification to add */
    linkedResource?: LinkedResource;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddLinkedResourceSDKType {
    id: string;
    linkedResource?: LinkedResourceSDKType;
    signer: string;
}
export interface MsgDeleteLinkedResource {
    /** the did */
    id: string;
    /** the service id */
    resourceId: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeleteLinkedResourceSDKType {
    id: string;
    resource_id: string;
    signer: string;
}
export interface MsgAddLinkedClaim {
    /** the did */
    id: string;
    /** the claim to add */
    linkedClaim?: LinkedClaim;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddLinkedClaimSDKType {
    id: string;
    linkedClaim?: LinkedClaimSDKType;
    signer: string;
}
export interface MsgDeleteLinkedClaim {
    /** the did */
    id: string;
    /** the claim id */
    claimId: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeleteLinkedClaimSDKType {
    id: string;
    claim_id: string;
    signer: string;
}
export interface MsgAddLinkedEntity {
    /** the iid */
    id: string;
    /** the entity to add */
    linkedEntity?: LinkedEntity;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddLinkedEntitySDKType {
    id: string;
    linkedEntity?: LinkedEntitySDKType;
    signer: string;
}
export interface MsgDeleteLinkedEntity {
    /** the iid */
    id: string;
    /** the entity id */
    entityId: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeleteLinkedEntitySDKType {
    id: string;
    entity_id: string;
    signer: string;
}
export interface MsgAddAccordedRight {
    /** the did */
    id: string;
    /** the Accorded right to add */
    accordedRight?: AccordedRight;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddAccordedRightSDKType {
    id: string;
    accordedRight?: AccordedRightSDKType;
    signer: string;
}
export interface MsgDeleteAccordedRight {
    /** the did */
    id: string;
    /** the Accorded right id */
    rightId: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeleteAccordedRightSDKType {
    id: string;
    right_id: string;
    signer: string;
}
export interface MsgAddIidContext {
    /** the did */
    id: string;
    /** the context to add */
    context?: Context;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgAddIidContextSDKType {
    id: string;
    context?: ContextSDKType;
    signer: string;
}
export interface MsgDeactivateIID {
    /** the did */
    id: string;
    state: boolean;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeactivateIIDSDKType {
    id: string;
    state: boolean;
    signer: string;
}
export interface MsgDeleteIidContext {
    /** the did */
    id: string;
    /** the context key */
    contextKey: string;
    /** address of the account signing the message */
    signer: string;
}
export interface MsgDeleteIidContextSDKType {
    id: string;
    contextKey: string;
    signer: string;
}
export interface MsgAddLinkedResourceResponse {
}
export interface MsgAddLinkedResourceResponseSDKType {
}
export interface MsgDeleteLinkedResourceResponse {
}
export interface MsgDeleteLinkedResourceResponseSDKType {
}
export interface MsgAddLinkedClaimResponse {
}
export interface MsgAddLinkedClaimResponseSDKType {
}
export interface MsgDeleteLinkedClaimResponse {
}
export interface MsgDeleteLinkedClaimResponseSDKType {
}
export interface MsgAddLinkedEntityResponse {
}
export interface MsgAddLinkedEntityResponseSDKType {
}
export interface MsgDeleteLinkedEntityResponse {
}
export interface MsgDeleteLinkedEntityResponseSDKType {
}
export interface MsgAddAccordedRightResponse {
}
export interface MsgAddAccordedRightResponseSDKType {
}
export interface MsgDeleteAccordedRightResponse {
}
export interface MsgDeleteAccordedRightResponseSDKType {
}
export interface MsgAddIidContextResponse {
}
export interface MsgAddIidContextResponseSDKType {
}
export interface MsgDeleteIidContextResponse {
}
export interface MsgDeleteIidContextResponseSDKType {
}
export interface MsgDeactivateIIDResponse {
}
export interface MsgDeactivateIIDResponseSDKType {
}
export declare const Verification: {
    encode(message: Verification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Verification;
    fromJSON(object: any): Verification;
    toJSON(message: Verification): unknown;
    fromPartial(object: Partial<Verification>): Verification;
};
export declare const MsgCreateIidDocument: {
    encode(message: MsgCreateIidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIidDocument;
    fromJSON(object: any): MsgCreateIidDocument;
    toJSON(message: MsgCreateIidDocument): unknown;
    fromPartial(object: Partial<MsgCreateIidDocument>): MsgCreateIidDocument;
};
export declare const MsgCreateIidDocumentResponse: {
    encode(_: MsgCreateIidDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIidDocumentResponse;
    fromJSON(_: any): MsgCreateIidDocumentResponse;
    toJSON(_: MsgCreateIidDocumentResponse): unknown;
    fromPartial(_: Partial<MsgCreateIidDocumentResponse>): MsgCreateIidDocumentResponse;
};
export declare const MsgUpdateIidDocument: {
    encode(message: MsgUpdateIidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIidDocument;
    fromJSON(object: any): MsgUpdateIidDocument;
    toJSON(message: MsgUpdateIidDocument): unknown;
    fromPartial(object: Partial<MsgUpdateIidDocument>): MsgUpdateIidDocument;
};
export declare const MsgUpdateIidDocumentResponse: {
    encode(_: MsgUpdateIidDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIidDocumentResponse;
    fromJSON(_: any): MsgUpdateIidDocumentResponse;
    toJSON(_: MsgUpdateIidDocumentResponse): unknown;
    fromPartial(_: Partial<MsgUpdateIidDocumentResponse>): MsgUpdateIidDocumentResponse;
};
export declare const MsgAddVerification: {
    encode(message: MsgAddVerification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddVerification;
    fromJSON(object: any): MsgAddVerification;
    toJSON(message: MsgAddVerification): unknown;
    fromPartial(object: Partial<MsgAddVerification>): MsgAddVerification;
};
export declare const MsgAddVerificationResponse: {
    encode(_: MsgAddVerificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddVerificationResponse;
    fromJSON(_: any): MsgAddVerificationResponse;
    toJSON(_: MsgAddVerificationResponse): unknown;
    fromPartial(_: Partial<MsgAddVerificationResponse>): MsgAddVerificationResponse;
};
export declare const MsgSetVerificationRelationships: {
    encode(message: MsgSetVerificationRelationships, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVerificationRelationships;
    fromJSON(object: any): MsgSetVerificationRelationships;
    toJSON(message: MsgSetVerificationRelationships): unknown;
    fromPartial(object: Partial<MsgSetVerificationRelationships>): MsgSetVerificationRelationships;
};
export declare const MsgSetVerificationRelationshipsResponse: {
    encode(_: MsgSetVerificationRelationshipsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVerificationRelationshipsResponse;
    fromJSON(_: any): MsgSetVerificationRelationshipsResponse;
    toJSON(_: MsgSetVerificationRelationshipsResponse): unknown;
    fromPartial(_: Partial<MsgSetVerificationRelationshipsResponse>): MsgSetVerificationRelationshipsResponse;
};
export declare const MsgRevokeVerification: {
    encode(message: MsgRevokeVerification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeVerification;
    fromJSON(object: any): MsgRevokeVerification;
    toJSON(message: MsgRevokeVerification): unknown;
    fromPartial(object: Partial<MsgRevokeVerification>): MsgRevokeVerification;
};
export declare const MsgRevokeVerificationResponse: {
    encode(_: MsgRevokeVerificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeVerificationResponse;
    fromJSON(_: any): MsgRevokeVerificationResponse;
    toJSON(_: MsgRevokeVerificationResponse): unknown;
    fromPartial(_: Partial<MsgRevokeVerificationResponse>): MsgRevokeVerificationResponse;
};
export declare const MsgAddService: {
    encode(message: MsgAddService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddService;
    fromJSON(object: any): MsgAddService;
    toJSON(message: MsgAddService): unknown;
    fromPartial(object: Partial<MsgAddService>): MsgAddService;
};
export declare const MsgAddServiceResponse: {
    encode(_: MsgAddServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddServiceResponse;
    fromJSON(_: any): MsgAddServiceResponse;
    toJSON(_: MsgAddServiceResponse): unknown;
    fromPartial(_: Partial<MsgAddServiceResponse>): MsgAddServiceResponse;
};
export declare const MsgDeleteService: {
    encode(message: MsgDeleteService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteService;
    fromJSON(object: any): MsgDeleteService;
    toJSON(message: MsgDeleteService): unknown;
    fromPartial(object: Partial<MsgDeleteService>): MsgDeleteService;
};
export declare const MsgDeleteServiceResponse: {
    encode(_: MsgDeleteServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteServiceResponse;
    fromJSON(_: any): MsgDeleteServiceResponse;
    toJSON(_: MsgDeleteServiceResponse): unknown;
    fromPartial(_: Partial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse;
};
export declare const MsgAddController: {
    encode(message: MsgAddController, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddController;
    fromJSON(object: any): MsgAddController;
    toJSON(message: MsgAddController): unknown;
    fromPartial(object: Partial<MsgAddController>): MsgAddController;
};
export declare const MsgAddControllerResponse: {
    encode(_: MsgAddControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddControllerResponse;
    fromJSON(_: any): MsgAddControllerResponse;
    toJSON(_: MsgAddControllerResponse): unknown;
    fromPartial(_: Partial<MsgAddControllerResponse>): MsgAddControllerResponse;
};
export declare const MsgDeleteController: {
    encode(message: MsgDeleteController, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteController;
    fromJSON(object: any): MsgDeleteController;
    toJSON(message: MsgDeleteController): unknown;
    fromPartial(object: Partial<MsgDeleteController>): MsgDeleteController;
};
export declare const MsgDeleteControllerResponse: {
    encode(_: MsgDeleteControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteControllerResponse;
    fromJSON(_: any): MsgDeleteControllerResponse;
    toJSON(_: MsgDeleteControllerResponse): unknown;
    fromPartial(_: Partial<MsgDeleteControllerResponse>): MsgDeleteControllerResponse;
};
export declare const MsgAddLinkedResource: {
    encode(message: MsgAddLinkedResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedResource;
    fromJSON(object: any): MsgAddLinkedResource;
    toJSON(message: MsgAddLinkedResource): unknown;
    fromPartial(object: Partial<MsgAddLinkedResource>): MsgAddLinkedResource;
};
export declare const MsgDeleteLinkedResource: {
    encode(message: MsgDeleteLinkedResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedResource;
    fromJSON(object: any): MsgDeleteLinkedResource;
    toJSON(message: MsgDeleteLinkedResource): unknown;
    fromPartial(object: Partial<MsgDeleteLinkedResource>): MsgDeleteLinkedResource;
};
export declare const MsgAddLinkedClaim: {
    encode(message: MsgAddLinkedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedClaim;
    fromJSON(object: any): MsgAddLinkedClaim;
    toJSON(message: MsgAddLinkedClaim): unknown;
    fromPartial(object: Partial<MsgAddLinkedClaim>): MsgAddLinkedClaim;
};
export declare const MsgDeleteLinkedClaim: {
    encode(message: MsgDeleteLinkedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedClaim;
    fromJSON(object: any): MsgDeleteLinkedClaim;
    toJSON(message: MsgDeleteLinkedClaim): unknown;
    fromPartial(object: Partial<MsgDeleteLinkedClaim>): MsgDeleteLinkedClaim;
};
export declare const MsgAddLinkedEntity: {
    encode(message: MsgAddLinkedEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedEntity;
    fromJSON(object: any): MsgAddLinkedEntity;
    toJSON(message: MsgAddLinkedEntity): unknown;
    fromPartial(object: Partial<MsgAddLinkedEntity>): MsgAddLinkedEntity;
};
export declare const MsgDeleteLinkedEntity: {
    encode(message: MsgDeleteLinkedEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedEntity;
    fromJSON(object: any): MsgDeleteLinkedEntity;
    toJSON(message: MsgDeleteLinkedEntity): unknown;
    fromPartial(object: Partial<MsgDeleteLinkedEntity>): MsgDeleteLinkedEntity;
};
export declare const MsgAddAccordedRight: {
    encode(message: MsgAddAccordedRight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccordedRight;
    fromJSON(object: any): MsgAddAccordedRight;
    toJSON(message: MsgAddAccordedRight): unknown;
    fromPartial(object: Partial<MsgAddAccordedRight>): MsgAddAccordedRight;
};
export declare const MsgDeleteAccordedRight: {
    encode(message: MsgDeleteAccordedRight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccordedRight;
    fromJSON(object: any): MsgDeleteAccordedRight;
    toJSON(message: MsgDeleteAccordedRight): unknown;
    fromPartial(object: Partial<MsgDeleteAccordedRight>): MsgDeleteAccordedRight;
};
export declare const MsgAddIidContext: {
    encode(message: MsgAddIidContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddIidContext;
    fromJSON(object: any): MsgAddIidContext;
    toJSON(message: MsgAddIidContext): unknown;
    fromPartial(object: Partial<MsgAddIidContext>): MsgAddIidContext;
};
export declare const MsgDeactivateIID: {
    encode(message: MsgDeactivateIID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateIID;
    fromJSON(object: any): MsgDeactivateIID;
    toJSON(message: MsgDeactivateIID): unknown;
    fromPartial(object: Partial<MsgDeactivateIID>): MsgDeactivateIID;
};
export declare const MsgDeleteIidContext: {
    encode(message: MsgDeleteIidContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteIidContext;
    fromJSON(object: any): MsgDeleteIidContext;
    toJSON(message: MsgDeleteIidContext): unknown;
    fromPartial(object: Partial<MsgDeleteIidContext>): MsgDeleteIidContext;
};
export declare const MsgAddLinkedResourceResponse: {
    encode(_: MsgAddLinkedResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedResourceResponse;
    fromJSON(_: any): MsgAddLinkedResourceResponse;
    toJSON(_: MsgAddLinkedResourceResponse): unknown;
    fromPartial(_: Partial<MsgAddLinkedResourceResponse>): MsgAddLinkedResourceResponse;
};
export declare const MsgDeleteLinkedResourceResponse: {
    encode(_: MsgDeleteLinkedResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedResourceResponse;
    fromJSON(_: any): MsgDeleteLinkedResourceResponse;
    toJSON(_: MsgDeleteLinkedResourceResponse): unknown;
    fromPartial(_: Partial<MsgDeleteLinkedResourceResponse>): MsgDeleteLinkedResourceResponse;
};
export declare const MsgAddLinkedClaimResponse: {
    encode(_: MsgAddLinkedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedClaimResponse;
    fromJSON(_: any): MsgAddLinkedClaimResponse;
    toJSON(_: MsgAddLinkedClaimResponse): unknown;
    fromPartial(_: Partial<MsgAddLinkedClaimResponse>): MsgAddLinkedClaimResponse;
};
export declare const MsgDeleteLinkedClaimResponse: {
    encode(_: MsgDeleteLinkedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedClaimResponse;
    fromJSON(_: any): MsgDeleteLinkedClaimResponse;
    toJSON(_: MsgDeleteLinkedClaimResponse): unknown;
    fromPartial(_: Partial<MsgDeleteLinkedClaimResponse>): MsgDeleteLinkedClaimResponse;
};
export declare const MsgAddLinkedEntityResponse: {
    encode(_: MsgAddLinkedEntityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedEntityResponse;
    fromJSON(_: any): MsgAddLinkedEntityResponse;
    toJSON(_: MsgAddLinkedEntityResponse): unknown;
    fromPartial(_: Partial<MsgAddLinkedEntityResponse>): MsgAddLinkedEntityResponse;
};
export declare const MsgDeleteLinkedEntityResponse: {
    encode(_: MsgDeleteLinkedEntityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedEntityResponse;
    fromJSON(_: any): MsgDeleteLinkedEntityResponse;
    toJSON(_: MsgDeleteLinkedEntityResponse): unknown;
    fromPartial(_: Partial<MsgDeleteLinkedEntityResponse>): MsgDeleteLinkedEntityResponse;
};
export declare const MsgAddAccordedRightResponse: {
    encode(_: MsgAddAccordedRightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccordedRightResponse;
    fromJSON(_: any): MsgAddAccordedRightResponse;
    toJSON(_: MsgAddAccordedRightResponse): unknown;
    fromPartial(_: Partial<MsgAddAccordedRightResponse>): MsgAddAccordedRightResponse;
};
export declare const MsgDeleteAccordedRightResponse: {
    encode(_: MsgDeleteAccordedRightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccordedRightResponse;
    fromJSON(_: any): MsgDeleteAccordedRightResponse;
    toJSON(_: MsgDeleteAccordedRightResponse): unknown;
    fromPartial(_: Partial<MsgDeleteAccordedRightResponse>): MsgDeleteAccordedRightResponse;
};
export declare const MsgAddIidContextResponse: {
    encode(_: MsgAddIidContextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddIidContextResponse;
    fromJSON(_: any): MsgAddIidContextResponse;
    toJSON(_: MsgAddIidContextResponse): unknown;
    fromPartial(_: Partial<MsgAddIidContextResponse>): MsgAddIidContextResponse;
};
export declare const MsgDeleteIidContextResponse: {
    encode(_: MsgDeleteIidContextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteIidContextResponse;
    fromJSON(_: any): MsgDeleteIidContextResponse;
    toJSON(_: MsgDeleteIidContextResponse): unknown;
    fromPartial(_: Partial<MsgDeleteIidContextResponse>): MsgDeleteIidContextResponse;
};
export declare const MsgDeactivateIIDResponse: {
    encode(_: MsgDeactivateIIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateIIDResponse;
    fromJSON(_: any): MsgDeactivateIIDResponse;
    toJSON(_: MsgDeactivateIIDResponse): unknown;
    fromPartial(_: Partial<MsgDeactivateIIDResponse>): MsgDeactivateIIDResponse;
};
