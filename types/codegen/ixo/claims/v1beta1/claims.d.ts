import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum CollectionState {
    OPEN = 0,
    PAUSED = 1,
    CLOSED = 2,
    UNRECOGNIZED = -1
}
export declare const CollectionStateSDKType: typeof CollectionState;
export declare function collectionStateFromJSON(object: any): CollectionState;
export declare function collectionStateToJSON(object: CollectionState): string;
export declare enum CollectionIntentOptions {
    /**
     * ALLOW - Allow: Intents can be made for claims, but claims can also be made without
     * intents.
     */
    ALLOW = 0,
    /** DENY - Deny: Intents cannot be made for claims for the collection. */
    DENY = 1,
    /**
     * REQUIRED - Required: Claims cannot be made without an associated intent. An intent is
     * mandatory before a claim can be submitted.
     */
    REQUIRED = 2,
    UNRECOGNIZED = -1
}
export declare const CollectionIntentOptionsSDKType: typeof CollectionIntentOptions;
export declare function collectionIntentOptionsFromJSON(object: any): CollectionIntentOptions;
export declare function collectionIntentOptionsToJSON(object: CollectionIntentOptions): string;
export declare enum EvaluationStatus {
    PENDING = 0,
    APPROVED = 1,
    REJECTED = 2,
    DISPUTED = 3,
    INVALIDATED = 4,
    UNRECOGNIZED = -1
}
export declare const EvaluationStatusSDKType: typeof EvaluationStatus;
export declare function evaluationStatusFromJSON(object: any): EvaluationStatus;
export declare function evaluationStatusToJSON(object: EvaluationStatus): string;
export declare enum IntentStatus {
    /**
     * ACTIVE - Active: Intent is created and active, payments have been transferred to
     * escrow if there is any
     */
    ACTIVE = 0,
    /**
     * FULFILLED - Fulfilled: Intent is fulfilled, was used to create a claim and funds will
     * be released on claim APPROVAL, or funds will be reverted on claim REJECTION
     * or DISPUTE
     */
    FULFILLED = 1,
    /**
     * EXPIRED - Expired: Intent has expired, payments have been transferred back out of
     * escrow
     */
    EXPIRED = 2,
    UNRECOGNIZED = -1
}
export declare const IntentStatusSDKType: typeof IntentStatus;
export declare function intentStatusFromJSON(object: any): IntentStatus;
export declare function intentStatusToJSON(object: IntentStatus): string;
export declare enum PaymentType {
    SUBMISSION = 0,
    APPROVAL = 1,
    EVALUATION = 2,
    REJECTION = 3,
    UNRECOGNIZED = -1
}
export declare const PaymentTypeSDKType: typeof PaymentType;
export declare function paymentTypeFromJSON(object: any): PaymentType;
export declare function paymentTypeToJSON(object: PaymentType): string;
export declare enum PaymentStatus {
    NO_PAYMENT = 0,
    /** PROMISED - Promised: Agent is contracted to receive payment */
    PROMISED = 1,
    /** AUTHORIZED - Authorized: Authz set up, no guarantee */
    AUTHORIZED = 2,
    /** GUARANTEED - Guaranteed: Escrow set up with funds blocked */
    GUARANTEED = 3,
    /** PAID - Paid: Funds have been paid */
    PAID = 4,
    /** FAILED - Failed: Payment failed, most probably due to insufficient funds */
    FAILED = 5,
    /** DISPUTED_PAYMENT - DisputedPayment: Payment disputed */
    DISPUTED_PAYMENT = 6,
    UNRECOGNIZED = -1
}
export declare const PaymentStatusSDKType: typeof PaymentStatus;
export declare function paymentStatusFromJSON(object: any): PaymentStatus;
export declare function paymentStatusToJSON(object: PaymentStatus): string;
export interface Params {
    collectionSequence: Long;
    ixoAccount: string;
    networkFeePercentage: string;
    nodeFeePercentage: string;
    intentSequence: Long;
}
export interface ParamsSDKType {
    collection_sequence: Long;
    ixo_account: string;
    network_fee_percentage: string;
    node_fee_percentage: string;
    intent_sequence: Long;
}
export interface Collection {
    /** collection id is the incremented internal id for the collection of claims */
    id: string;
    /** entity is the DID of the entity for which the claims are being created */
    entity: string;
    /**
     * admin is the account address that will authorize or revoke agents and
     * payments (the grantor), and can update the collection
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
    /** count is the number of claims already submitted (internally calculated) */
    count: Long;
    /**
     * evaluated is the number of claims that have been evaluated (internally
     * calculated)
     */
    evaluated: Long;
    /**
     * approved is the number of claims that have been evaluated and approved
     * (internally calculated)
     */
    approved: Long;
    /**
     * rejected is the number of claims that have been evaluated and rejected
     * (internally calculated)
     */
    rejected: Long;
    /**
     * disputed is the number of claims that have disputed status (internally
     * calculated)
     */
    disputed: Long;
    /** state is the current state of this Collection (open, paused, closed) */
    state: CollectionState;
    /**
     * payments is the amount paid for claim submission, evaluation, approval, or
     * rejection
     */
    payments?: Payments;
    /** signer address */
    signer: string;
    /**
     * invalidated is the number of claims that have been evaluated as invalid
     * (internally calculated)
     */
    invalidated: Long;
    /**
     * escrow_account is the escrow account address for this collection created at
     * collection creation, current purpose is to transfer payments to escrow
     * account for GUARANTEED payments through intents
     */
    escrowAccount: string;
    /**
     * intents is the option for intents for this collection (allow, deny,
     * required)
     */
    intents: CollectionIntentOptions;
}
export interface CollectionSDKType {
    id: string;
    entity: string;
    admin: string;
    protocol: string;
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
    quota: Long;
    count: Long;
    evaluated: Long;
    approved: Long;
    rejected: Long;
    disputed: Long;
    state: CollectionState;
    payments?: PaymentsSDKType;
    signer: string;
    invalidated: Long;
    escrow_account: string;
    intents: CollectionIntentOptions;
}
export interface Payments {
    submission?: Payment;
    evaluation?: Payment;
    approval?: Payment;
    rejection?: Payment;
}
export interface PaymentsSDKType {
    submission?: PaymentSDKType;
    evaluation?: PaymentSDKType;
    approval?: PaymentSDKType;
    rejection?: PaymentSDKType;
}
export interface Payment {
    /** account is the entity account address from which the payment will be made */
    account: string;
    amount: Coin[];
    /** if empty(nil) then no contract payment, not allowed for Evaluation Payment */
    contract_1155Payment?: Contract1155Payment;
    /**
     * timeout after claim/evaluation to create authZ for payment, if 0 then
     * immediate direct payment
     */
    timeoutNs?: Duration;
    /** cw20 payments, can be empty or multiple */
    cw20Payment: CW20Payment[];
    /**
     * boolean to indicate if the payment is for oracle payments, aka it will go
     * through network fees split NOTE: if true the payment can only have amount
     * values(Native coins), no cw20 payments allowed then
     */
    isOraclePayment: boolean;
}
export interface PaymentSDKType {
    account: string;
    amount: CoinSDKType[];
    contract_1155_payment?: Contract1155PaymentSDKType;
    timeout_ns?: DurationSDKType;
    cw20_payment: CW20PaymentSDKType[];
    is_oracle_payment: boolean;
}
export interface Contract1155Payment {
    address: string;
    tokenId: string;
    amount: number;
}
export interface Contract1155PaymentSDKType {
    address: string;
    token_id: string;
    amount: number;
}
export interface CW20Payment {
    address: string;
    /**
     * chose uint64 for now as amounts should be small enough to fit in a
     * uint64(max 18446744073709551615)
     */
    amount: Long;
}
export interface CW20PaymentSDKType {
    address: string;
    amount: Long;
}
export interface Claim {
    /** collection_id indicates to which Collection this claim belongs */
    collectionId: string;
    /** agent is the DID of the agent submitting the claim */
    agentDid: string;
    agentAddress: string;
    /** submissionDate is the date and time that the claim was submitted on-chain */
    submissionDate?: Timestamp;
    /** claimID is the unique identifier of the claim in the cid hash format */
    claimId: string;
    /** evaluation is the result of one or more claim evaluations */
    evaluation?: Evaluation;
    /** payments_status is the status of the payments for the claim */
    paymentsStatus?: ClaimPayments;
    /** intent_id is the id of the intent for this claim, if any */
    useIntent: boolean;
    /**
     * NOTE: if both amount and cw20 amount are empty then use default by
     * Collection custom amount specified by service agent for claim approval
     */
    amount: Coin[];
    /**
     * NOTE: if both amount and cw20 amount are empty then use default by
     * Collection custom cw20 payments specified by service agent for claim
     * approval
     */
    cw20Payment: CW20Payment[];
}
export interface ClaimSDKType {
    collection_id: string;
    agent_did: string;
    agent_address: string;
    submission_date?: TimestampSDKType;
    claim_id: string;
    evaluation?: EvaluationSDKType;
    payments_status?: ClaimPaymentsSDKType;
    use_intent: boolean;
    amount: CoinSDKType[];
    cw20_payment: CW20PaymentSDKType[];
}
export interface ClaimPayments {
    submission: PaymentStatus;
    evaluation: PaymentStatus;
    approval: PaymentStatus;
    rejection: PaymentStatus;
}
export interface ClaimPaymentsSDKType {
    submission: PaymentStatus;
    evaluation: PaymentStatus;
    approval: PaymentStatus;
    rejection: PaymentStatus;
}
export interface Evaluation {
    /** claim_id indicates which Claim this evaluation is for */
    claimId: string;
    /**
     * collection_id indicates to which Collection the claim being evaluated
     * belongs to
     */
    collectionId: string;
    /** oracle is the DID of the Oracle entity that evaluates the claim */
    oracle: string;
    /** agent is the DID of the agent that submits the evaluation */
    agentDid: string;
    agentAddress: string;
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
     * evaluationDate is the date and time that the claim evaluation was submitted
     * on-chain
     */
    evaluationDate?: Timestamp;
    /**
     * if both amount and cw20 amount are empty then use default by Collection
     * custom amount specified by evaluator for claim approval
     */
    amount: Coin[];
    /** custom cw20 payments specified by evaluator for claim approval */
    cw20Payment: CW20Payment[];
}
export interface EvaluationSDKType {
    claim_id: string;
    collection_id: string;
    oracle: string;
    agent_did: string;
    agent_address: string;
    status: EvaluationStatus;
    reason: number;
    verification_proof: string;
    evaluation_date?: TimestampSDKType;
    amount: CoinSDKType[];
    cw20_payment: CW20PaymentSDKType[];
}
export interface Dispute {
    subjectId: string;
    /** type is expressed as an integer, interpreted by the client */
    type: number;
    data?: DisputeData;
}
export interface DisputeSDKType {
    subject_id: string;
    type: number;
    data?: DisputeDataSDKType;
}
export interface DisputeData {
    /** dispute link ***.ipfs */
    uri: string;
    type: string;
    proof: string;
    encrypted: boolean;
}
export interface DisputeDataSDKType {
    uri: string;
    type: string;
    proof: string;
    encrypted: boolean;
}
/** Intent defines the structure for a service agent's claim intent. */
export interface Intent {
    /** id is the incremented internal id for the intent */
    id: string;
    /** The service agent's DID (Decentralized Identifier). */
    agentDid: string;
    /** The service agent's address. */
    agentAddress: string;
    /** The id of the collection this intent is linked to. */
    collectionId: string;
    /** claim_id (optional, set when claim is submitted) */
    claimId: string;
    /** The time the intent was created. */
    createdAt?: Timestamp;
    /**
     * Timeout period for the intent. If the claim is not submitted by this time,
     * the intent expires.
     */
    expireAt?: Timestamp;
    /** Status of the intent (e.g., "ACTIVE" or "FULFILLED"). */
    status: IntentStatus;
    /** The payment amount the agent intends to claim, if any. */
    amount: Coin[];
    /** The CW20Payment amount the agent intends to claim, if any. */
    cw20Payment: CW20Payment[];
    /** the address the escrow payment came from */
    fromAddress: string;
    /** the escrow account address */
    escrowAddress: string;
}
/** Intent defines the structure for a service agent's claim intent. */
export interface IntentSDKType {
    id: string;
    agent_did: string;
    agent_address: string;
    collection_id: string;
    claim_id: string;
    created_at?: TimestampSDKType;
    expire_at?: TimestampSDKType;
    status: IntentStatus;
    amount: CoinSDKType[];
    cw20_payment: CW20PaymentSDKType[];
    from_address: string;
    escrow_address: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Collection: {
    encode(message: Collection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Collection;
    fromJSON(object: any): Collection;
    toJSON(message: Collection): unknown;
    fromPartial(object: Partial<Collection>): Collection;
};
export declare const Payments: {
    encode(message: Payments, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Payments;
    fromJSON(object: any): Payments;
    toJSON(message: Payments): unknown;
    fromPartial(object: Partial<Payments>): Payments;
};
export declare const Payment: {
    encode(message: Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Payment;
    fromJSON(object: any): Payment;
    toJSON(message: Payment): unknown;
    fromPartial(object: Partial<Payment>): Payment;
};
export declare const Contract1155Payment: {
    encode(message: Contract1155Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract1155Payment;
    fromJSON(object: any): Contract1155Payment;
    toJSON(message: Contract1155Payment): unknown;
    fromPartial(object: Partial<Contract1155Payment>): Contract1155Payment;
};
export declare const CW20Payment: {
    encode(message: CW20Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CW20Payment;
    fromJSON(object: any): CW20Payment;
    toJSON(message: CW20Payment): unknown;
    fromPartial(object: Partial<CW20Payment>): CW20Payment;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: Partial<Claim>): Claim;
};
export declare const ClaimPayments: {
    encode(message: ClaimPayments, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimPayments;
    fromJSON(object: any): ClaimPayments;
    toJSON(message: ClaimPayments): unknown;
    fromPartial(object: Partial<ClaimPayments>): ClaimPayments;
};
export declare const Evaluation: {
    encode(message: Evaluation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evaluation;
    fromJSON(object: any): Evaluation;
    toJSON(message: Evaluation): unknown;
    fromPartial(object: Partial<Evaluation>): Evaluation;
};
export declare const Dispute: {
    encode(message: Dispute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Dispute;
    fromJSON(object: any): Dispute;
    toJSON(message: Dispute): unknown;
    fromPartial(object: Partial<Dispute>): Dispute;
};
export declare const DisputeData: {
    encode(message: DisputeData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisputeData;
    fromJSON(object: any): DisputeData;
    toJSON(message: DisputeData): unknown;
    fromPartial(object: Partial<DisputeData>): DisputeData;
};
export declare const Intent: {
    encode(message: Intent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Intent;
    fromJSON(object: any): Intent;
    toJSON(message: Intent): unknown;
    fromPartial(object: Partial<Intent>): Intent;
};
