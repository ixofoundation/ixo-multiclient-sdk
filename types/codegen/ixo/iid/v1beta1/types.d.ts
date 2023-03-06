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
export interface LinkedClaim {
    type: string;
    id: string;
    description: string;
    serviceEndpoint: string;
    proof: string;
    encrypted: string;
    right: string;
}
export interface LinkedClaimSDKType {
    type: string;
    id: string;
    description: string;
    serviceEndpoint: string;
    proof: string;
    encrypted: string;
    right: string;
}
export interface LinkedEntity {
    type: string;
    id: string;
    relationship: string;
    service: string;
}
export interface LinkedEntitySDKType {
    type: string;
    id: string;
    relationship: string;
    service: string;
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
export interface Service {
    id: string;
    type: string;
    serviceEndpoint: string;
}
export interface ServiceSDKType {
    id: string;
    type: string;
    serviceEndpoint: string;
}
export interface IidMetadata {
    versionId: string;
    created?: Timestamp;
    updated?: Timestamp;
    deactivated: boolean;
}
export interface IidMetadataSDKType {
    versionId: string;
    created?: TimestampSDKType;
    updated?: TimestampSDKType;
    deactivated: boolean;
}
export declare const Context: {
    encode(message: Context, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Context;
    fromJSON(object: any): Context;
    toJSON(message: Context): unknown;
    fromPartial(object: Partial<Context>): Context;
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
export declare const LinkedClaim: {
    encode(message: LinkedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkedClaim;
    fromJSON(object: any): LinkedClaim;
    toJSON(message: LinkedClaim): unknown;
    fromPartial(object: Partial<LinkedClaim>): LinkedClaim;
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
