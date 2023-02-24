import { VerificationMethod, VerificationMethodSDKType, Service, ServiceSDKType, LinkedResource, LinkedResourceSDKType, AccordedRight, AccordedRightSDKType, LinkedEntity, LinkedEntitySDKType, IidMetadata, IidMetadataSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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

function createBaseContext(): Context {
  return {
    key: "",
    val: ""
  };
}

export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.val = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Context {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      val: isSet(object.val) ? String(object.val) : ""
    };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.val !== undefined && (obj.val = message.val);
    return obj;
  },

  fromPartial(object: Partial<Context>): Context {
    const message = createBaseContext();
    message.key = object.key ?? "";
    message.val = object.val ?? "";
    return message;
  }

};

function createBaseIidDocument(): IidDocument {
  return {
    context: [],
    id: "",
    controller: [],
    verificationMethod: [],
    service: [],
    authentication: [],
    assertionMethod: [],
    keyAgreement: [],
    capabilityInvocation: [],
    capabilityDelegation: [],
    linkedResource: [],
    accordedRight: [],
    linkedEntity: [],
    alsoKnownAs: "",
    metadata: undefined
  };
}

export const IidDocument = {
  encode(message: IidDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.context) {
      Context.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.verificationMethod) {
      VerificationMethod.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.service) {
      Service.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.authentication) {
      writer.uint32(50).string(v!);
    }

    for (const v of message.assertionMethod) {
      writer.uint32(58).string(v!);
    }

    for (const v of message.keyAgreement) {
      writer.uint32(66).string(v!);
    }

    for (const v of message.capabilityInvocation) {
      writer.uint32(74).string(v!);
    }

    for (const v of message.capabilityDelegation) {
      writer.uint32(82).string(v!);
    }

    for (const v of message.linkedResource) {
      LinkedResource.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.accordedRight) {
      AccordedRight.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    for (const v of message.linkedEntity) {
      LinkedEntity.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    if (message.alsoKnownAs !== "") {
      writer.uint32(114).string(message.alsoKnownAs);
    }

    if (message.metadata !== undefined) {
      IidMetadata.encode(message.metadata, writer.uint32(122).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidDocument();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.context.push(Context.decode(reader, reader.uint32()));
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.controller.push(reader.string());
          break;

        case 4:
          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          break;

        case 5:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;

        case 6:
          message.authentication.push(reader.string());
          break;

        case 7:
          message.assertionMethod.push(reader.string());
          break;

        case 8:
          message.keyAgreement.push(reader.string());
          break;

        case 9:
          message.capabilityInvocation.push(reader.string());
          break;

        case 10:
          message.capabilityDelegation.push(reader.string());
          break;

        case 11:
          message.linkedResource.push(LinkedResource.decode(reader, reader.uint32()));
          break;

        case 12:
          message.accordedRight.push(AccordedRight.decode(reader, reader.uint32()));
          break;

        case 13:
          message.linkedEntity.push(LinkedEntity.decode(reader, reader.uint32()));
          break;

        case 14:
          message.alsoKnownAs = reader.string();
          break;

        case 15:
          message.metadata = IidMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IidDocument {
    return {
      context: Array.isArray(object?.context) ? object.context.map((e: any) => Context.fromJSON(e)) : [],
      id: isSet(object.id) ? String(object.id) : "",
      controller: Array.isArray(object?.controller) ? object.controller.map((e: any) => String(e)) : [],
      verificationMethod: Array.isArray(object?.verificationMethod) ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
      authentication: Array.isArray(object?.authentication) ? object.authentication.map((e: any) => String(e)) : [],
      assertionMethod: Array.isArray(object?.assertionMethod) ? object.assertionMethod.map((e: any) => String(e)) : [],
      keyAgreement: Array.isArray(object?.keyAgreement) ? object.keyAgreement.map((e: any) => String(e)) : [],
      capabilityInvocation: Array.isArray(object?.capabilityInvocation) ? object.capabilityInvocation.map((e: any) => String(e)) : [],
      capabilityDelegation: Array.isArray(object?.capabilityDelegation) ? object.capabilityDelegation.map((e: any) => String(e)) : [],
      linkedResource: Array.isArray(object?.linkedResource) ? object.linkedResource.map((e: any) => LinkedResource.fromJSON(e)) : [],
      accordedRight: Array.isArray(object?.accordedRight) ? object.accordedRight.map((e: any) => AccordedRight.fromJSON(e)) : [],
      linkedEntity: Array.isArray(object?.linkedEntity) ? object.linkedEntity.map((e: any) => LinkedEntity.fromJSON(e)) : [],
      alsoKnownAs: isSet(object.alsoKnownAs) ? String(object.alsoKnownAs) : "",
      metadata: isSet(object.metadata) ? IidMetadata.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: IidDocument): unknown {
    const obj: any = {};

    if (message.context) {
      obj.context = message.context.map(e => e ? Context.toJSON(e) : undefined);
    } else {
      obj.context = [];
    }

    message.id !== undefined && (obj.id = message.id);

    if (message.controller) {
      obj.controller = message.controller.map(e => e);
    } else {
      obj.controller = [];
    }

    if (message.verificationMethod) {
      obj.verificationMethod = message.verificationMethod.map(e => e ? VerificationMethod.toJSON(e) : undefined);
    } else {
      obj.verificationMethod = [];
    }

    if (message.service) {
      obj.service = message.service.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }

    if (message.authentication) {
      obj.authentication = message.authentication.map(e => e);
    } else {
      obj.authentication = [];
    }

    if (message.assertionMethod) {
      obj.assertionMethod = message.assertionMethod.map(e => e);
    } else {
      obj.assertionMethod = [];
    }

    if (message.keyAgreement) {
      obj.keyAgreement = message.keyAgreement.map(e => e);
    } else {
      obj.keyAgreement = [];
    }

    if (message.capabilityInvocation) {
      obj.capabilityInvocation = message.capabilityInvocation.map(e => e);
    } else {
      obj.capabilityInvocation = [];
    }

    if (message.capabilityDelegation) {
      obj.capabilityDelegation = message.capabilityDelegation.map(e => e);
    } else {
      obj.capabilityDelegation = [];
    }

    if (message.linkedResource) {
      obj.linkedResource = message.linkedResource.map(e => e ? LinkedResource.toJSON(e) : undefined);
    } else {
      obj.linkedResource = [];
    }

    if (message.accordedRight) {
      obj.accordedRight = message.accordedRight.map(e => e ? AccordedRight.toJSON(e) : undefined);
    } else {
      obj.accordedRight = [];
    }

    if (message.linkedEntity) {
      obj.linkedEntity = message.linkedEntity.map(e => e ? LinkedEntity.toJSON(e) : undefined);
    } else {
      obj.linkedEntity = [];
    }

    message.alsoKnownAs !== undefined && (obj.alsoKnownAs = message.alsoKnownAs);
    message.metadata !== undefined && (obj.metadata = message.metadata ? IidMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: Partial<IidDocument>): IidDocument {
    const message = createBaseIidDocument();
    message.context = object.context?.map(e => Context.fromPartial(e)) || [];
    message.id = object.id ?? "";
    message.controller = object.controller?.map(e => e) || [];
    message.verificationMethod = object.verificationMethod?.map(e => VerificationMethod.fromPartial(e)) || [];
    message.service = object.service?.map(e => Service.fromPartial(e)) || [];
    message.authentication = object.authentication?.map(e => e) || [];
    message.assertionMethod = object.assertionMethod?.map(e => e) || [];
    message.keyAgreement = object.keyAgreement?.map(e => e) || [];
    message.capabilityInvocation = object.capabilityInvocation?.map(e => e) || [];
    message.capabilityDelegation = object.capabilityDelegation?.map(e => e) || [];
    message.linkedResource = object.linkedResource?.map(e => LinkedResource.fromPartial(e)) || [];
    message.accordedRight = object.accordedRight?.map(e => AccordedRight.fromPartial(e)) || [];
    message.linkedEntity = object.linkedEntity?.map(e => LinkedEntity.fromPartial(e)) || [];
    message.alsoKnownAs = object.alsoKnownAs ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? IidMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};