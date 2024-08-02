import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { CollectionState, Payments, PaymentsSDKType, EvaluationStatus, DisputeData, DisputeDataSDKType, PaymentType, Contract1155Payment, Contract1155PaymentSDKType } from "./claims";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateCollection {
    /** entity is the DID of the entity for which the claims are being created */
    entity: string;
    /** signer address */
    signer: string;
    /** protocol is the DID of the claim protocol */
    protocol: string;
    /** startDate is the date after which claims may be submitted */
    startDate?: Timestamp;
    /**
     * endDate is the date after which no more claims may be submitted (no endDate
     * is allowed)
     */
    endDate?: Timestamp;
    /** quota is the maximum number of claims that may be submitted, 0 is unlimited */
    quota: Long;
    /** state is the current state of this Collection (open, paused, closed) */
    state: CollectionState;
    /**
     * payments is the amount paid for claim submission, evaluation, approval, or
     * rejection
     */
    payments?: Payments;
}
export interface MsgCreateCollectionSDKType {
    entity: string;
    signer: string;
    protocol: string;
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
    quota: Long;
    state: CollectionState;
    payments?: PaymentsSDKType;
}
export interface MsgCreateCollectionResponse {
}
export interface MsgCreateCollectionResponseSDKType {
}
export interface MsgSubmitClaim {
    /** collection_id indicates to which Collection this claim belongs */
    collectionId: string;
    /** claimID is the unique identifier of the claim in the cid hash format */
    claimId: string;
    /** agent is the DID of the agent submitting the claim */
    agentDid: string;
    agentAddress: string;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
}
export interface MsgSubmitClaimSDKType {
    collection_id: string;
    claim_id: string;
    agent_did: string;
    agent_address: string;
    admin_address: string;
}
export interface MsgSubmitClaimResponse {
}
export interface MsgSubmitClaimResponseSDKType {
}
export interface MsgEvaluateClaim {
    /** claimID is the unique identifier of the claim to make evaluation against */
    claimId: string;
    /** collection_id indicates to which Collection this claim belongs */
    collectionId: string;
    /** oracle is the DID of the Oracle entity that evaluates the claim */
    oracle: string;
    /** agent is the DID of the agent that submits the evaluation */
    agentDid: string;
    agentAddress: string;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
    /**
     * status is the evaluation status expressed as an integer (2=approved,
     * 3=rejected, ...)
     */
    status: EvaluationStatus;
    /**
     * reason is the code expressed as an integer, for why the evaluation result
     * was given (codes defined by evaluator)
     */
    reason: number;
    /** verificationProof is the cid of the evaluation Verfiable Credential */
    verificationProof: string;
    /**
     * custom amount specified by evaluator for claim approval, if empty list then
     * use default by Collection
     */
    amount: Coin[];
}
export interface MsgEvaluateClaimSDKType {
    claim_id: string;
    collection_id: string;
    oracle: string;
    agent_did: string;
    agent_address: string;
    admin_address: string;
    status: EvaluationStatus;
    reason: number;
    verification_proof: string;
    amount: CoinSDKType[];
}
export interface MsgEvaluateClaimResponse {
}
export interface MsgEvaluateClaimResponseSDKType {
}
/**
 * Agent laying dispute must be admin for Collection, or controller on
 * Collection entity, or have authz cap, aka is agent
 */
export interface MsgDisputeClaim {
    /**
     * subject_id for which this dispute is against, for now can only lay disputes
     * against claims
     */
    subjectId: string;
    /**
     * agent is the DID of the agent disputing the claim, agent details won't be
     * saved in kvStore
     */
    agentDid: string;
    agentAddress: string;
    /** type is expressed as an integer, interpreted by the client */
    disputeType: number;
    data?: DisputeData;
}
/**
 * Agent laying dispute must be admin for Collection, or controller on
 * Collection entity, or have authz cap, aka is agent
 */
export interface MsgDisputeClaimSDKType {
    subject_id: string;
    agent_did: string;
    agent_address: string;
    dispute_type: number;
    data?: DisputeDataSDKType;
}
export interface MsgDisputeClaimResponse {
}
export interface MsgDisputeClaimResponseSDKType {
}
export interface MsgWithdrawPayment {
    /** claim_id the withdrawal is for */
    claimId: string;
    /** Inputs to the multisend tx to run to withdraw payment */
    inputs: Input[];
    /** Outputs for the multisend tx to run to withdraw payment */
    outputs: Output[];
    /**
     * payment type to keep track what payment is for and mark claim payment
     * accordingly
     */
    paymentType: PaymentType;
    /** if empty(nil) then no contract payment */
    contract_1155Payment?: Contract1155Payment;
    /** for contract payment */
    toAddress: string;
    /** for contract payment */
    fromAddress: string;
    /**
     * date that grantee can execute authorization, calculated from created date
     * plus the timeout on Collection payments
     */
    releaseDate?: Timestamp;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
}
export interface MsgWithdrawPaymentSDKType {
    claim_id: string;
    inputs: InputSDKType[];
    outputs: OutputSDKType[];
    payment_type: PaymentType;
    contract_1155_payment?: Contract1155PaymentSDKType;
    toAddress: string;
    fromAddress: string;
    release_date?: TimestampSDKType;
    admin_address: string;
}
export interface MsgWithdrawPaymentResponse {
}
export interface MsgWithdrawPaymentResponseSDKType {
}
export interface MsgUpdateCollectionState {
    /** collection_id indicates which Collection to update */
    collectionId: string;
    /**
     * state is the state of this Collection (open, paused, closed) you want to
     * update to
     */
    state: CollectionState;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
}
export interface MsgUpdateCollectionStateSDKType {
    collection_id: string;
    state: CollectionState;
    admin_address: string;
}
export interface MsgUpdateCollectionStateResponse {
}
export interface MsgUpdateCollectionStateResponseSDKType {
}
export interface MsgUpdateCollectionDates {
    /** collection_id indicates which Collection to update */
    collectionId: string;
    /** startDate is the date after which claims may be submitted */
    startDate?: Timestamp;
    /**
     * endDate is the date after which no more claims may be submitted (no endDate
     * is allowed)
     */
    endDate?: Timestamp;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
}
export interface MsgUpdateCollectionDatesSDKType {
    collection_id: string;
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
    admin_address: string;
}
export interface MsgUpdateCollectionDatesResponse {
}
export interface MsgUpdateCollectionDatesResponseSDKType {
}
export interface MsgUpdateCollectionPayments {
    /** collection_id indicates which Collection to update */
    collectionId: string;
    /**
     * payments is the amount paid for claim submission, evaluation, approval, or
     * rejection
     */
    payments?: Payments;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
}
export interface MsgUpdateCollectionPaymentsSDKType {
    collection_id: string;
    payments?: PaymentsSDKType;
    admin_address: string;
}
export interface MsgUpdateCollectionPaymentsResponse {
}
export interface MsgUpdateCollectionPaymentsResponseSDKType {
}
export declare const MsgCreateCollection: {
    encode(message: MsgCreateCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCollection;
    fromJSON(object: any): MsgCreateCollection;
    toJSON(message: MsgCreateCollection): unknown;
    fromPartial(object: Partial<MsgCreateCollection>): MsgCreateCollection;
};
export declare const MsgCreateCollectionResponse: {
    encode(_: MsgCreateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCollectionResponse;
    fromJSON(_: any): MsgCreateCollectionResponse;
    toJSON(_: MsgCreateCollectionResponse): unknown;
    fromPartial(_: Partial<MsgCreateCollectionResponse>): MsgCreateCollectionResponse;
};
export declare const MsgSubmitClaim: {
    encode(message: MsgSubmitClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaim;
    fromJSON(object: any): MsgSubmitClaim;
    toJSON(message: MsgSubmitClaim): unknown;
    fromPartial(object: Partial<MsgSubmitClaim>): MsgSubmitClaim;
};
export declare const MsgSubmitClaimResponse: {
    encode(_: MsgSubmitClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaimResponse;
    fromJSON(_: any): MsgSubmitClaimResponse;
    toJSON(_: MsgSubmitClaimResponse): unknown;
    fromPartial(_: Partial<MsgSubmitClaimResponse>): MsgSubmitClaimResponse;
};
export declare const MsgEvaluateClaim: {
    encode(message: MsgEvaluateClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEvaluateClaim;
    fromJSON(object: any): MsgEvaluateClaim;
    toJSON(message: MsgEvaluateClaim): unknown;
    fromPartial(object: Partial<MsgEvaluateClaim>): MsgEvaluateClaim;
};
export declare const MsgEvaluateClaimResponse: {
    encode(_: MsgEvaluateClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEvaluateClaimResponse;
    fromJSON(_: any): MsgEvaluateClaimResponse;
    toJSON(_: MsgEvaluateClaimResponse): unknown;
    fromPartial(_: Partial<MsgEvaluateClaimResponse>): MsgEvaluateClaimResponse;
};
export declare const MsgDisputeClaim: {
    encode(message: MsgDisputeClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisputeClaim;
    fromJSON(object: any): MsgDisputeClaim;
    toJSON(message: MsgDisputeClaim): unknown;
    fromPartial(object: Partial<MsgDisputeClaim>): MsgDisputeClaim;
};
export declare const MsgDisputeClaimResponse: {
    encode(_: MsgDisputeClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisputeClaimResponse;
    fromJSON(_: any): MsgDisputeClaimResponse;
    toJSON(_: MsgDisputeClaimResponse): unknown;
    fromPartial(_: Partial<MsgDisputeClaimResponse>): MsgDisputeClaimResponse;
};
export declare const MsgWithdrawPayment: {
    encode(message: MsgWithdrawPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPayment;
    fromJSON(object: any): MsgWithdrawPayment;
    toJSON(message: MsgWithdrawPayment): unknown;
    fromPartial(object: Partial<MsgWithdrawPayment>): MsgWithdrawPayment;
};
export declare const MsgWithdrawPaymentResponse: {
    encode(_: MsgWithdrawPaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPaymentResponse;
    fromJSON(_: any): MsgWithdrawPaymentResponse;
    toJSON(_: MsgWithdrawPaymentResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawPaymentResponse>): MsgWithdrawPaymentResponse;
};
export declare const MsgUpdateCollectionState: {
    encode(message: MsgUpdateCollectionState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionState;
    fromJSON(object: any): MsgUpdateCollectionState;
    toJSON(message: MsgUpdateCollectionState): unknown;
    fromPartial(object: Partial<MsgUpdateCollectionState>): MsgUpdateCollectionState;
};
export declare const MsgUpdateCollectionStateResponse: {
    encode(_: MsgUpdateCollectionStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionStateResponse;
    fromJSON(_: any): MsgUpdateCollectionStateResponse;
    toJSON(_: MsgUpdateCollectionStateResponse): unknown;
    fromPartial(_: Partial<MsgUpdateCollectionStateResponse>): MsgUpdateCollectionStateResponse;
};
export declare const MsgUpdateCollectionDates: {
    encode(message: MsgUpdateCollectionDates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionDates;
    fromJSON(object: any): MsgUpdateCollectionDates;
    toJSON(message: MsgUpdateCollectionDates): unknown;
    fromPartial(object: Partial<MsgUpdateCollectionDates>): MsgUpdateCollectionDates;
};
export declare const MsgUpdateCollectionDatesResponse: {
    encode(_: MsgUpdateCollectionDatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionDatesResponse;
    fromJSON(_: any): MsgUpdateCollectionDatesResponse;
    toJSON(_: MsgUpdateCollectionDatesResponse): unknown;
    fromPartial(_: Partial<MsgUpdateCollectionDatesResponse>): MsgUpdateCollectionDatesResponse;
};
export declare const MsgUpdateCollectionPayments: {
    encode(message: MsgUpdateCollectionPayments, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionPayments;
    fromJSON(object: any): MsgUpdateCollectionPayments;
    toJSON(message: MsgUpdateCollectionPayments): unknown;
    fromPartial(object: Partial<MsgUpdateCollectionPayments>): MsgUpdateCollectionPayments;
};
export declare const MsgUpdateCollectionPaymentsResponse: {
    encode(_: MsgUpdateCollectionPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionPaymentsResponse;
    fromJSON(_: any): MsgUpdateCollectionPaymentsResponse;
    toJSON(_: MsgUpdateCollectionPaymentsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateCollectionPaymentsResponse>): MsgUpdateCollectionPaymentsResponse;
};
