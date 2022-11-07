import * as _m0 from "protobufjs/minimal";
/** DidDocumentCreatedEvent is an event triggered on a DID document creation */
export interface IidDocumentCreatedEvent {
    /** the did being created */
    did: string;
    /** the signer account creating the did */
    signer: string;
}
/** DidDocumentCreatedEvent is an event triggered on a DID document creation */
export interface IidDocumentCreatedEventSDKType {
    /** the did being created */
    did: string;
    /** the signer account creating the did */
    signer: string;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */
export interface IidDocumentUpdatedEvent {
    /** the did being updated */
    did: string;
    /** the signer account of the change */
    signer: string;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */
export interface IidDocumentUpdatedEventSDKType {
    /** the did being updated */
    did: string;
    /** the signer account of the change */
    signer: string;
}
export declare const IidDocumentCreatedEvent: {
    encode(message: IidDocumentCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IidDocumentCreatedEvent;
    fromJSON(object: any): IidDocumentCreatedEvent;
    toJSON(message: IidDocumentCreatedEvent): unknown;
    fromPartial(object: Partial<IidDocumentCreatedEvent>): IidDocumentCreatedEvent;
};
export declare const IidDocumentUpdatedEvent: {
    encode(message: IidDocumentUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IidDocumentUpdatedEvent;
    fromJSON(object: any): IidDocumentUpdatedEvent;
    toJSON(message: IidDocumentUpdatedEvent): unknown;
    fromPartial(object: Partial<IidDocumentUpdatedEvent>): IidDocumentUpdatedEvent;
};
