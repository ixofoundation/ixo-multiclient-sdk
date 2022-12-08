import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface Context {
    key: string;
    val: string;
}
export interface ContextSDKType {
    key: string;
    val: string;
}
export interface IidDocument {
    /** @context is spec for did document. */
    context: Context[];
    /** id represents the id for the did document. */
    id: string;
    /**
     * A DID controller is an entity that is authorized to make changes to a DID document.
     * cfr. https://www.w3.org/TR/did-core/#did-controller
     */
    controller: string[];
    /**
     * A DID document can express verification methods,
     * such as cryptographic public keys, which can be used
     * to authenticate or authorize interactions with the DID subject or associated parties.
     * https://www.w3.org/TR/did-core/#verification-methods
     */
    verificationMethod: VerificationMethod[];
    /**
     * Services are used in DID documents to express ways of communicating
     * with the DID subject or associated entities.
     * https://www.w3.org/TR/did-core/#services
     */
    service: Service[];
    /**
     * NOTE: below this line there are the relationships
     * Authentication represents public key associated with the did document.
     * cfr. https://www.w3.org/TR/did-core/#authentication
     */
    authentication: string[];
    /**
     * Used to specify how the DID subject is expected to express claims,
     * such as for the purposes of issuing a Verifiable Credential.
     * cfr. https://www.w3.org/TR/did-core/#assertion
     */
    assertionMethod: string[];
    /**
     * used to specify how an entity can generate encryption material
     * in order to transmit confidential information intended for the DID subject.
     * https://www.w3.org/TR/did-core/#key-agreement
     */
    keyAgreement: string[];
    /**
     * Used to specify a verification method that might be used by the DID subject
     * to invoke a cryptographic capability, such as the authorization
     * to update the DID Document.
     * https://www.w3.org/TR/did-core/#capability-invocation
     */
    capabilityInvocation: string[];
    /**
     * Used to specify a mechanism that might be used by the DID subject
     * to delegate a cryptographic capability to another party.
     * https://www.w3.org/TR/did-core/#capability-delegation
     */
    capabilityDelegation: string[];
    linkedResource: LinkedResource[];
    accordedRight: AccordedRight[];
    linkedEntity: LinkedEntity[];
    alsoKnownAs: string;
}
export interface IidDocumentSDKType {
    /** @context is spec for did document. */
    context: ContextSDKType[];
    /** id represents the id for the did document. */
    id: string;
    /**
     * A DID controller is an entity that is authorized to make changes to a DID document.
     * cfr. https://www.w3.org/TR/did-core/#did-controller
     */
    controller: string[];
    /**
     * A DID document can express verification methods,
     * such as cryptographic public keys, which can be used
     * to authenticate or authorize interactions with the DID subject or associated parties.
     * https://www.w3.org/TR/did-core/#verification-methods
     */
    verificationMethod: VerificationMethodSDKType[];
    /**
     * Services are used in DID documents to express ways of communicating
     * with the DID subject or associated entities.
     * https://www.w3.org/TR/did-core/#services
     */
    service: ServiceSDKType[];
    /**
     * NOTE: below this line there are the relationships
     * Authentication represents public key associated with the did document.
     * cfr. https://www.w3.org/TR/did-core/#authentication
     */
    authentication: string[];
    /**
     * Used to specify how the DID subject is expected to express claims,
     * such as for the purposes of issuing a Verifiable Credential.
     * cfr. https://www.w3.org/TR/did-core/#assertion
     */
    assertionMethod: string[];
    /**
     * used to specify how an entity can generate encryption material
     * in order to transmit confidential information intended for the DID subject.
     * https://www.w3.org/TR/did-core/#key-agreement
     */
    keyAgreement: string[];
    /**
     * Used to specify a verification method that might be used by the DID subject
     * to invoke a cryptographic capability, such as the authorization
     * to update the DID Document.
     * https://www.w3.org/TR/did-core/#capability-invocation
     */
    capabilityInvocation: string[];
    /**
     * Used to specify a mechanism that might be used by the DID subject
     * to delegate a cryptographic capability to another party.
     * https://www.w3.org/TR/did-core/#capability-delegation
     */
    capabilityDelegation: string[];
    linkedResource: LinkedResourceSDKType[];
    accordedRight: AccordedRightSDKType[];
    linkedEntity: LinkedEntitySDKType[];
    alsoKnownAs: string;
}
export interface AccordedRight {
    type: string;
    id: string;
    mechanism: string;
    message: string;
    service: string;
}
export interface AccordedRightSDKType {
    type: string;
    id: string;
    mechanism: string;
    message: string;
    service: string;
}
export interface LinkedResource {
    type: string;
    id: string;
    description: string;
    mediaType: string;
    serviceEndpoint: string;
    proof: string;
    encrypted: string;
    right: string;
}
export interface LinkedResourceSDKType {
    type: string;
    id: string;
    description: string;
    mediaType: string;
    serviceEndpoint: string;
    proof: string;
    encrypted: string;
    right: string;
}
export interface LinkedEntity {
    id: string;
    relationship: string;
}
export interface LinkedEntitySDKType {
    id: string;
    relationship: string;
}
export interface VerificationMethod {
    id: string;
    type: string;
    controller: string;
    blockchainAccountID?: string;
    publicKeyHex?: string;
    publicKeyMultibase?: string;
    publicKeyBase58?: string;
}
export interface VerificationMethodSDKType {
    id: string;
    type: string;
    controller: string;
    blockchainAccountID?: string;
    publicKeyHex?: string;
    publicKeyMultibase?: string;
    publicKeyBase58?: string;
}
/** Service defines how to find data associated with a identifer */
export interface Service {
    id: string;
    type: string;
    serviceEndpoint: string;
}
/** Service defines how to find data associated with a identifer */
export interface ServiceSDKType {
    id: string;
    type: string;
    serviceEndpoint: string;
}
/**
 * DidMetadata defines metadata associated to a did document such as
 * the status of the DID document
 */
export interface IidMetadata {
    id: string;
    versionId: string;
    created?: Timestamp;
    updated?: Timestamp;
    deactivated: boolean;
    entityType: string;
    startDate?: Timestamp;
    endDate?: Timestamp;
    status: number;
    stage: string;
    relayerNode: string;
    verifiableCredential: string;
    credentials: string[];
}
/**
 * DidMetadata defines metadata associated to a did document such as
 * the status of the DID document
 */
export interface IidMetadataSDKType {
    id: string;
    versionId: string;
    created?: TimestampSDKType;
    updated?: TimestampSDKType;
    deactivated: boolean;
    entityType: string;
    startDate?: TimestampSDKType;
    endDate?: TimestampSDKType;
    status: number;
    stage: string;
    relayerNode: string;
    verifiableCredential: string;
    credentials: string[];
}
export declare const Context: {
    encode(message: Context, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Context;
    fromJSON(object: any): Context;
    toJSON(message: Context): unknown;
    fromPartial(object: Partial<Context>): Context;
};
export declare const IidDocument: {
    encode(message: IidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IidDocument;
    fromJSON(object: any): IidDocument;
    toJSON(message: IidDocument): unknown;
    fromPartial(object: Partial<IidDocument>): IidDocument;
};
export declare const AccordedRight: {
    encode(message: AccordedRight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccordedRight;
    fromJSON(object: any): AccordedRight;
    toJSON(message: AccordedRight): unknown;
    fromPartial(object: Partial<AccordedRight>): AccordedRight;
};
export declare const LinkedResource: {
    encode(message: LinkedResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkedResource;
    fromJSON(object: any): LinkedResource;
    toJSON(message: LinkedResource): unknown;
    fromPartial(object: Partial<LinkedResource>): LinkedResource;
};
export declare const LinkedEntity: {
    encode(message: LinkedEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkedEntity;
    fromJSON(object: any): LinkedEntity;
    toJSON(message: LinkedEntity): unknown;
    fromPartial(object: Partial<LinkedEntity>): LinkedEntity;
};
export declare const VerificationMethod: {
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    fromPartial(object: Partial<VerificationMethod>): VerificationMethod;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: Partial<Service>): Service;
};
export declare const IidMetadata: {
    encode(message: IidMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IidMetadata;
    fromJSON(object: any): IidMetadata;
    toJSON(message: IidMetadata): unknown;
    fromPartial(object: Partial<IidMetadata>): IidMetadata;
};
