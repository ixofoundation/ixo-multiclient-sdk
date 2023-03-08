import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { CollectionState, CollectionStateSDKType, Payments, PaymentsSDKType, EvaluationStatus, EvaluationStatusSDKType, DisputeData, DisputeDataSDKType, PaymentType, PaymentTypeSDKType, Contract1155Payment, Contract1155PaymentSDKType } from "./claims";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./cosmos";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface MsgCreateCollection {
    /** entity is the DID of the entity for which the claims are being created */
    entity: string;
    /**
     * admin is the account address that will authorize or revoke agents and
     * payments (the grantor), signer for tx
     */
    admin: string;
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
    /** entity is the DID of the entity for which the claims are being created */
    entity: string;
    /**
     * admin is the account address that will authorize or revoke agents and
     * payments (the grantor), signer for tx
     */
    admin: string;
    /** protocol is the DID of the claim protocol */
    protocol: string;
    /** startDate is the date after which claims may be submitted */
    start_date?: TimestampSDKType;
    /**
     * endDate is the date after which no more claims may be submitted (no endDate
     * is allowed)
     */
    end_date?: TimestampSDKType;
    /** quota is the maximum number of claims that may be submitted, 0 is unlimited */
    quota: Long;
    /** state is the current state of this Collection (open, paused, closed) */
    state: CollectionStateSDKType;
    /**
     * payments is the amount paid for claim submission, evaluation, approval, or
     * rejection
     */
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
    /** collection_id indicates to which Collection this claim belongs */
    collection_id: string;
    /** claimID is the unique identifier of the claim in the cid hash format */
    claim_id: string;
    /** agent is the DID of the agent submitting the claim */
    agent_did: string;
    agent_address: string;
    /** admin address used to sign this message, validated against Collection Admin */
    admin_address: string;
}
export interface MsgSubmitClaimResponse {
}
export interface MsgSubmitClaimResponseSDKType {
}
export interface MsgEvaluateClaim {
    /** claimID is the unique identifier of the claim to make evaluation against */
    claimId: string;
    /** claimID is the unique identifier of the claim to make evaluation against */
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
    /** claimID is the unique identifier of the claim to make evaluation against */
    claim_id: string;
    /** claimID is the unique identifier of the claim to make evaluation against */
    collection_id: string;
    /** oracle is the DID of the Oracle entity that evaluates the claim */
    oracle: string;
    /** agent is the DID of the agent that submits the evaluation */
    agent_did: string;
    agent_address: string;
    /** admin address used to sign this message, validated against Collection Admin */
    admin_address: string;
    /**
     * status is the evaluation status expressed as an integer (2=approved,
     * 3=rejected, ...)
     */
    status: EvaluationStatusSDKType;
    /**
     * reason is the code expressed as an integer, for why the evaluation result
     * was given (codes defined by evaluator)
     */
    reason: number;
    /** verificationProof is the cid of the evaluation Verfiable Credential */
    verification_proof: string;
    /**
     * custom amount specified by evaluator for claim approval, if empty list then
     * use default by Collection
     */
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
     * agent is the DID of the agent disputing the claim, agent detials wont be
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
    /**
     * subject_id for which this dispute is against, for now can only lay disputes
     * against claims
     */
    subject_id: string;
    /**
     * agent is the DID of the agent disputing the claim, agent detials wont be
     * saved in kvStore
     */
    agent_did: string;
    agent_address: string;
    /** type is expressed as an integer, interpreted by the client */
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
    /** claim_id the withdrawal is for */
    claim_id: string;
    /** Inputs to the multisend tx to run to withdraw payment */
    inputs: InputSDKType[];
    /** Outputs for the multisend tx to run to withdraw payment */
    outputs: OutputSDKType[];
    /**
     * payment type to keep track what payment is for and mark claim payment
     * accordingly
     */
    payment_type: PaymentTypeSDKType;
    /** if empty(nil) then no contract payment */
    contract_1155_payment?: Contract1155PaymentSDKType;
    /** for contract payment */
    toAddress: string;
    /** for contract payment */
    fromAddress: string;
    /**
     * date that grantee can execute authorization, calculated from created date
     * plus the timeout on Collection payments
     */
    release_date?: TimestampSDKType;
    /** admin address used to sign this message, validated against Collection Admin */
    admin_address: string;
}
export interface MsgWithdrawPaymentResponse {
}
export interface MsgWithdrawPaymentResponseSDKType {
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
