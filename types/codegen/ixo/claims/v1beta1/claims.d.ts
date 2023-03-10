import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export declare enum CollectionState {
    OPEN = 0,
    PAUSED = 1,
    CLOSED = 2,
    UNRECOGNIZED = -1
}
export declare enum CollectionStateSDKType {
    OPEN = 0,
    PAUSED = 1,
    CLOSED = 2,
    UNRECOGNIZED = -1
}
export declare function collectionStateFromJSON(object: any): CollectionState;
export declare function collectionStateToJSON(object: CollectionState): string;
export declare enum EvaluationStatus {
    PENDING = 0,
    APPROVED = 1,
    REJECTED = 2,
    DISPUTED = 3,
    UNRECOGNIZED = -1
}
export declare enum EvaluationStatusSDKType {
    PENDING = 0,
    APPROVED = 1,
    REJECTED = 2,
    DISPUTED = 3,
    UNRECOGNIZED = -1
}
export declare function evaluationStatusFromJSON(object: any): EvaluationStatus;
export declare function evaluationStatusToJSON(object: EvaluationStatus): string;
export declare enum PaymentType {
    SUBMISSION = 0,
    APPROVAL = 1,
    EVALUATION = 2,
    REJECTION = 3,
    UNRECOGNIZED = -1
}
export declare enum PaymentTypeSDKType {
    SUBMISSION = 0,
    APPROVAL = 1,
    EVALUATION = 2,
    REJECTION = 3,
    UNRECOGNIZED = -1
}
export declare function paymentTypeFromJSON(object: any): PaymentType;
export declare function paymentTypeToJSON(object: PaymentType): string;
export declare enum PaymentStatus {
    NO_PAYMENT = 0,
    PROMISED = 1,
    AUTHORIZED = 2,
    GAURANTEED = 3,
    PAID = 4,
    FAILED = 5,
    DISPUTED = 6,
    UNRECOGNIZED = -1
}
export declare enum PaymentStatusSDKType {
    NO_PAYMENT = 0,
    PROMISED = 1,
    AUTHORIZED = 2,
    GAURANTEED = 3,
    PAID = 4,
    FAILED = 5,
    DISPUTED = 6,
    UNRECOGNIZED = -1
}
export declare function paymentStatusFromJSON(object: any): PaymentStatus;
export declare function paymentStatusToJSON(object: PaymentStatus): string;
export interface Params {
    collectionSequence: Long;
    ixoAccount: string;
    networkFeePercentage: string;
    nodeFeePercentage: string;
}
export interface ParamsSDKType {
    collection_sequence: Long;
    ixo_account: string;
    network_fee_percentage: string;
    node_fee_percentage: string;
}
export interface Collection {
    /** collection id is the incremented internal id for the collection of claims */
    id: string;
    /** entity is the DID of the entity for which the claims are being created */
    entity: string;
    /**
     * admin is the account address that will authorize or revoke agents and
     * payments (the grantor)
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
}
export interface CollectionSDKType {
    /** collection id is the incremented internal id for the collection of claims */
    id: string;
    /** entity is the DID of the entity for which the claims are being created */
    entity: string;
    /**
     * admin is the account address that will authorize or revoke agents and
     * payments (the grantor)
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
    state: CollectionStateSDKType;
    /**
     * payments is the amount paid for claim submission, evaluation, approval, or
     * rejection
     */
    payments?: PaymentsSDKType;
    /** signer address */
    signer: string;
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
     * immidiate direct payment
     */
    timeoutNs?: Duration;
}
export interface PaymentSDKType {
    /** account is the entity account address from which the payment will be made */
    account: string;
    amount: CoinSDKType[];
    /** if empty(nil) then no contract payment, not allowed for Evaluation Payment */
    contract_1155_payment?: Contract1155PaymentSDKType;
    /**
     * timeout after claim/evaluation to create authZ for payment, if 0 then
     * immidiate direct payment
     */
    timeout_ns?: DurationSDKType;
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
    paymentsStatus?: ClaimPayments;
}
export interface ClaimSDKType {
    /** collection_id indicates to which Collection this claim belongs */
    collection_id: string;
    /** agent is the DID of the agent submitting the claim */
    agent_did: string;
    agent_address: string;
    /** submissionDate is the date and time that the claim was submitted on-chain */
    submission_date?: TimestampSDKType;
    /** claimID is the unique identifier of the claim in the cid hash format */
    claim_id: string;
    /** evaluation is the result of one or more claim evaluations */
    evaluation?: EvaluationSDKType;
    payments_status?: ClaimPaymentsSDKType;
}
export interface ClaimPayments {
    submission: PaymentStatus;
    evaluation: PaymentStatus;
    approval: PaymentStatus;
    rejection: PaymentStatus;
}
export interface ClaimPaymentsSDKType {
    submission: PaymentStatusSDKType;
    evaluation: PaymentStatusSDKType;
    approval: PaymentStatusSDKType;
    rejection: PaymentStatusSDKType;
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
     * custom amount specified by evaluator for claim approval, if empty list then
     * use default by Collection
     */
    amount: Coin[];
}
export interface EvaluationSDKType {
    /** claim_id indicates which Claim this evaluation is for */
    claim_id: string;
    /**
     * collection_id indicates to which Collection the claim being evaluated
     * belongs to
     */
    collection_id: string;
    /** oracle is the DID of the Oracle entity that evaluates the claim */
    oracle: string;
    /** agent is the DID of the agent that submits the evaluation */
    agent_did: string;
    agent_address: string;
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
     * evaluationDate is the date and time that the claim evaluation was submitted
     * on-chain
     */
    evaluation_date?: TimestampSDKType;
    /**
     * custom amount specified by evaluator for claim approval, if empty list then
     * use default by Collection
     */
    amount: CoinSDKType[];
}
export interface Dispute {
    subjectId: string;
    /** type is expressed as an integer, interpreted by the client */
    type: number;
    data?: DisputeData;
}
export interface DisputeSDKType {
    subject_id: string;
    /** type is expressed as an integer, interpreted by the client */
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
    /** dispute link ***.ipfs */
    uri: string;
    type: string;
    proof: string;
    encrypted: boolean;
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
