import { VerificationMethod, VerificationMethodSDKType, Service, ServiceSDKType, LinkedResource, LinkedResourceSDKType, AccordedRight, AccordedRightSDKType, LinkedEntity, LinkedEntitySDKType, IidMetadata, IidMetadataSDKType } from "./types";
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
     * A DID controller is an entity that is authorized to make changes to a DID
     * document. cfr. https://www.w3.org/TR/did-core/#did-controller
     */
    controller: string[];
    /**
     * A DID document can express verification methods,
     * such as cryptographic public keys, which can be used
     * to authenticate or authorize interactions with the DID subject or
     * associated parties. https://www.w3.org/TR/did-core/#verification-methods
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
    /**
     * Metadata concerning the IidDocument such as versionId, created, updated and
     * deactivated
     */
    metadata?: IidMetadata;
}
export interface IidDocumentSDKType {
    /** @context is spec for did document. */
    context: ContextSDKType[];
    /** id represents the id for the did document. */
    id: string;
    /**
     * A DID controller is an entity that is authorized to make changes to a DID
     * document. cfr. https://www.w3.org/TR/did-core/#did-controller
     */
    controller: string[];
    /**
     * A DID document can express verification methods,
     * such as cryptographic public keys, which can be used
     * to authenticate or authorize interactions with the DID subject or
     * associated parties. https://www.w3.org/TR/did-core/#verification-methods
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
    /**
     * Metadata concerning the IidDocument such as versionId, created, updated and
     * deactivated
     */
    metadata?: IidMetadataSDKType;
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
