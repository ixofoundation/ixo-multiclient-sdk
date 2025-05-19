import { Collection, CollectionSDKType, Claim, ClaimSDKType, Evaluation, EvaluationSDKType, Dispute, DisputeSDKType, CW20Output, CW20OutputSDKType, Intent, IntentSDKType } from "./claims";
import { WithdrawPaymentConstraints, WithdrawPaymentConstraintsSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
/** CollectionCreatedEvent is an event triggered on a Collection creation */
export interface CollectionCreatedEvent {
    /** CollectionCreatedEvent is an event triggered on a Collection creation */
    collection?: Collection;
}
/** CollectionCreatedEvent is an event triggered on a Collection creation */
export interface CollectionCreatedEventSDKType {
    collection?: CollectionSDKType;
}
/** CollectionUpdatedEvent is an event triggered on a Collection update */
export interface CollectionUpdatedEvent {
    /** CollectionUpdatedEvent is an event triggered on a Collection update */
    collection?: Collection;
}
/** CollectionUpdatedEvent is an event triggered on a Collection update */
export interface CollectionUpdatedEventSDKType {
    collection?: CollectionSDKType;
}
/** CollectionCreatedEvent is an event triggered on a Claim submission */
export interface ClaimSubmittedEvent {
    /** CollectionCreatedEvent is an event triggered on a Claim submission */
    claim?: Claim;
}
/** CollectionCreatedEvent is an event triggered on a Claim submission */
export interface ClaimSubmittedEventSDKType {
    claim?: ClaimSDKType;
}
/** ClaimUpdatedEvent is an event triggered on a Claim update */
export interface ClaimUpdatedEvent {
    /** ClaimUpdatedEvent is an event triggered on a Claim update */
    claim?: Claim;
}
/** ClaimUpdatedEvent is an event triggered on a Claim update */
export interface ClaimUpdatedEventSDKType {
    claim?: ClaimSDKType;
}
/** ClaimEvaluatedEvent is an event triggered on a Claim evaluation */
export interface ClaimEvaluatedEvent {
    /** ClaimEvaluatedEvent is an event triggered on a Claim evaluation */
    evaluation?: Evaluation;
}
/** ClaimEvaluatedEvent is an event triggered on a Claim evaluation */
export interface ClaimEvaluatedEventSDKType {
    evaluation?: EvaluationSDKType;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */
export interface ClaimDisputedEvent {
    /** ClaimDisputedEvent is an event triggered on a Claim dispute */
    dispute?: Dispute;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */
export interface ClaimDisputedEventSDKType {
    dispute?: DisputeSDKType;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */
export interface PaymentWithdrawnEvent {
    withdraw?: WithdrawPaymentConstraints;
    cw20Outputs: CW20Output[];
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */
export interface PaymentWithdrawnEventSDKType {
    withdraw?: WithdrawPaymentConstraintsSDKType;
    cw20_outputs: CW20OutputSDKType[];
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */
export interface PaymentWithdrawCreatedEvent {
    /** ClaimDisputedEvent is an event triggered on a Claim dispute */
    withdraw?: WithdrawPaymentConstraints;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */
export interface PaymentWithdrawCreatedEventSDKType {
    withdraw?: WithdrawPaymentConstraintsSDKType;
}
/** IntentSubmittedEvent is an event triggered on an Intent submission */
export interface IntentSubmittedEvent {
    /** IntentSubmittedEvent is an event triggered on an Intent submission */
    intent?: Intent;
}
/** IntentSubmittedEvent is an event triggered on an Intent submission */
export interface IntentSubmittedEventSDKType {
    intent?: IntentSDKType;
}
/** IntentUpdatedEvent is an event triggered on an Intent update */
export interface IntentUpdatedEvent {
    /** IntentUpdatedEvent is an event triggered on an Intent update */
    intent?: Intent;
}
/** IntentUpdatedEvent is an event triggered on an Intent update */
export interface IntentUpdatedEventSDKType {
    intent?: IntentSDKType;
}
/**
 * ClaimAuthorizationCreatedEvent is an event triggered on a Claim authorization
 * creation
 */
export interface ClaimAuthorizationCreatedEvent {
    creator: string;
    creatorDid: string;
    grantee: string;
    admin: string;
    collectionId: string;
    authType: string;
}
/**
 * ClaimAuthorizationCreatedEvent is an event triggered on a Claim authorization
 * creation
 */
export interface ClaimAuthorizationCreatedEventSDKType {
    creator: string;
    creator_did: string;
    grantee: string;
    admin: string;
    collection_id: string;
    auth_type: string;
}
export declare const CollectionCreatedEvent: {
    encode(message: CollectionCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionCreatedEvent;
    fromJSON(object: any): CollectionCreatedEvent;
    toJSON(message: CollectionCreatedEvent): unknown;
    fromPartial(object: Partial<CollectionCreatedEvent>): CollectionCreatedEvent;
};
export declare const CollectionUpdatedEvent: {
    encode(message: CollectionUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionUpdatedEvent;
    fromJSON(object: any): CollectionUpdatedEvent;
    toJSON(message: CollectionUpdatedEvent): unknown;
    fromPartial(object: Partial<CollectionUpdatedEvent>): CollectionUpdatedEvent;
};
export declare const ClaimSubmittedEvent: {
    encode(message: ClaimSubmittedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimSubmittedEvent;
    fromJSON(object: any): ClaimSubmittedEvent;
    toJSON(message: ClaimSubmittedEvent): unknown;
    fromPartial(object: Partial<ClaimSubmittedEvent>): ClaimSubmittedEvent;
};
export declare const ClaimUpdatedEvent: {
    encode(message: ClaimUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimUpdatedEvent;
    fromJSON(object: any): ClaimUpdatedEvent;
    toJSON(message: ClaimUpdatedEvent): unknown;
    fromPartial(object: Partial<ClaimUpdatedEvent>): ClaimUpdatedEvent;
};
export declare const ClaimEvaluatedEvent: {
    encode(message: ClaimEvaluatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimEvaluatedEvent;
    fromJSON(object: any): ClaimEvaluatedEvent;
    toJSON(message: ClaimEvaluatedEvent): unknown;
    fromPartial(object: Partial<ClaimEvaluatedEvent>): ClaimEvaluatedEvent;
};
export declare const ClaimDisputedEvent: {
    encode(message: ClaimDisputedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimDisputedEvent;
    fromJSON(object: any): ClaimDisputedEvent;
    toJSON(message: ClaimDisputedEvent): unknown;
    fromPartial(object: Partial<ClaimDisputedEvent>): ClaimDisputedEvent;
};
export declare const PaymentWithdrawnEvent: {
    encode(message: PaymentWithdrawnEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentWithdrawnEvent;
    fromJSON(object: any): PaymentWithdrawnEvent;
    toJSON(message: PaymentWithdrawnEvent): unknown;
    fromPartial(object: Partial<PaymentWithdrawnEvent>): PaymentWithdrawnEvent;
};
export declare const PaymentWithdrawCreatedEvent: {
    encode(message: PaymentWithdrawCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentWithdrawCreatedEvent;
    fromJSON(object: any): PaymentWithdrawCreatedEvent;
    toJSON(message: PaymentWithdrawCreatedEvent): unknown;
    fromPartial(object: Partial<PaymentWithdrawCreatedEvent>): PaymentWithdrawCreatedEvent;
};
export declare const IntentSubmittedEvent: {
    encode(message: IntentSubmittedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntentSubmittedEvent;
    fromJSON(object: any): IntentSubmittedEvent;
    toJSON(message: IntentSubmittedEvent): unknown;
    fromPartial(object: Partial<IntentSubmittedEvent>): IntentSubmittedEvent;
};
export declare const IntentUpdatedEvent: {
    encode(message: IntentUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntentUpdatedEvent;
    fromJSON(object: any): IntentUpdatedEvent;
    toJSON(message: IntentUpdatedEvent): unknown;
    fromPartial(object: Partial<IntentUpdatedEvent>): IntentUpdatedEvent;
};
export declare const ClaimAuthorizationCreatedEvent: {
    encode(message: ClaimAuthorizationCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimAuthorizationCreatedEvent;
    fromJSON(object: any): ClaimAuthorizationCreatedEvent;
    toJSON(message: ClaimAuthorizationCreatedEvent): unknown;
    fromPartial(object: Partial<ClaimAuthorizationCreatedEvent>): ClaimAuthorizationCreatedEvent;
};
