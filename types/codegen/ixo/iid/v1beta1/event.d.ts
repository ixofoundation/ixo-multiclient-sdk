import { IidDocument, IidDocumentSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
/** IidDocumentCreatedEvent is triggered when a new IidDocument is created. */
export interface IidDocumentCreatedEvent {
    iidDocument?: IidDocument;
}
/** IidDocumentCreatedEvent is triggered when a new IidDocument is created. */
export interface IidDocumentCreatedEventSDKType {
    iidDocument?: IidDocumentSDKType;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */
export interface IidDocumentUpdatedEvent {
    iidDocument?: IidDocument;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */
export interface IidDocumentUpdatedEventSDKType {
    iidDocument?: IidDocumentSDKType;
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
