import { Collection, CollectionSDKType, Claim, ClaimSDKType, Evaluation, EvaluationSDKType, Dispute, DisputeSDKType, CW20Output, CW20OutputSDKType, CW1155IntentPayment, CW1155IntentPaymentSDKType, Intent, IntentSDKType, MemberBudget, MemberBudgetSDKType } from "./claims";
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
    /** the cw20 with the split amounts if any */
    cw20Outputs: CW20Output[];
    /**
     * the cw1155 with the transferred token ids and amounts
     * since in the msg you can define an amount but we don't necessarily know the
     * token ids
     */
    cw1155Payments: CW1155IntentPayment[];
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */
export interface PaymentWithdrawnEventSDKType {
    withdraw?: WithdrawPaymentConstraintsSDKType;
    cw20_outputs: CW20OutputSDKType[];
    cw1155_payments: CW1155IntentPaymentSDKType[];
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
/**
 * MemberBudgetCreatedEvent is an event triggered when a team member budget is
 * added to a collection for the first time.
 */
export interface MemberBudgetCreatedEvent {
    /**
     * MemberBudgetCreatedEvent is an event triggered when a team member budget is
     * added to a collection for the first time.
     */
    budget?: MemberBudget;
}
/**
 * MemberBudgetCreatedEvent is an event triggered when a team member budget is
 * added to a collection for the first time.
 */
export interface MemberBudgetCreatedEventSDKType {
    budget?: MemberBudgetSDKType;
}
/**
 * MemberBudgetUpdatedEvent is an event triggered on any state change to an
 * existing member budget — admin-driven update via MsgSetCollectionMembers,
 * period_spent deduction during MsgClaimIntent, period_spent restoration on
 * claim rejection / dispute / invalidation / intent expiration, or lazy period
 * reset.
 */
export interface MemberBudgetUpdatedEvent {
    /**
     * MemberBudgetUpdatedEvent is an event triggered on any state change to an
     * existing member budget — admin-driven update via MsgSetCollectionMembers,
     * period_spent deduction during MsgClaimIntent, period_spent restoration on
     * claim rejection / dispute / invalidation / intent expiration, or lazy period
     * reset.
     */
    budget?: MemberBudget;
}
/**
 * MemberBudgetUpdatedEvent is an event triggered on any state change to an
 * existing member budget — admin-driven update via MsgSetCollectionMembers,
 * period_spent deduction during MsgClaimIntent, period_spent restoration on
 * claim rejection / dispute / invalidation / intent expiration, or lazy period
 * reset.
 */
export interface MemberBudgetUpdatedEventSDKType {
    budget?: MemberBudgetSDKType;
}
/**
 * MemberBudgetRemovedEvent is an event triggered when a team member budget is
 * removed from a collection. Includes the final budget state at the time of
 * removal for indexer audit.
 */
export interface MemberBudgetRemovedEvent {
    /**
     * MemberBudgetRemovedEvent is an event triggered when a team member budget is
     * removed from a collection. Includes the final budget state at the time of
     * removal for indexer audit.
     */
    budget?: MemberBudget;
}
/**
 * MemberBudgetRemovedEvent is an event triggered when a team member budget is
 * removed from a collection. Includes the final budget state at the time of
 * removal for indexer audit.
 */
export interface MemberBudgetRemovedEventSDKType {
    budget?: MemberBudgetSDKType;
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
export declare const MemberBudgetCreatedEvent: {
    encode(message: MemberBudgetCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberBudgetCreatedEvent;
    fromJSON(object: any): MemberBudgetCreatedEvent;
    toJSON(message: MemberBudgetCreatedEvent): unknown;
    fromPartial(object: Partial<MemberBudgetCreatedEvent>): MemberBudgetCreatedEvent;
};
export declare const MemberBudgetUpdatedEvent: {
    encode(message: MemberBudgetUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberBudgetUpdatedEvent;
    fromJSON(object: any): MemberBudgetUpdatedEvent;
    toJSON(message: MemberBudgetUpdatedEvent): unknown;
    fromPartial(object: Partial<MemberBudgetUpdatedEvent>): MemberBudgetUpdatedEvent;
};
export declare const MemberBudgetRemovedEvent: {
    encode(message: MemberBudgetRemovedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberBudgetRemovedEvent;
    fromJSON(object: any): MemberBudgetRemovedEvent;
    toJSON(message: MemberBudgetRemovedEvent): unknown;
    fromPartial(object: Partial<MemberBudgetRemovedEvent>): MemberBudgetRemovedEvent;
};
