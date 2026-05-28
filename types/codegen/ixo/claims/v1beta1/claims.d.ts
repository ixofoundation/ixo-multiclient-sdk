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
    /**
     * FLAGGED - Flagged: non-terminal "I am declining to make a final call" outcome.
     * Payment does not fire. The flagger or any other authorized evaluator
     * can subsequently re-evaluate the claim to a terminal status (APPROVED
     * / REJECTED / INVALIDATED) when more information is available. FLAGGED
     * counts against AgentQuota the same as a terminal evaluation.
     */
    FLAGGED = 5,
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
/**
 * DisputeTargetRole identifies which party of a claim a dispute is filed
 * against. A dispute targets exactly one role; to dispute both the submitter
 * and the evaluator of the same claim, file two separate disputes.
 */
export declare enum DisputeTargetRole {
    DISPUTE_TARGET_ROLE_UNSPECIFIED = 0,
    /** DISPUTE_TARGET_ROLE_SUBMITTER - Submitter: the service agent that submitted the claim */
    DISPUTE_TARGET_ROLE_SUBMITTER = 1,
    /** DISPUTE_TARGET_ROLE_EVALUATOR - Evaluator: the evaluation agent that evaluated the claim */
    DISPUTE_TARGET_ROLE_EVALUATOR = 2,
    UNRECOGNIZED = -1
}
export declare const DisputeTargetRoleSDKType: typeof DisputeTargetRole;
export declare function disputeTargetRoleFromJSON(object: any): DisputeTargetRole;
export declare function disputeTargetRoleToJSON(object: DisputeTargetRole): string;
/** DisputeStatus is the lifecycle state of a dispute. */
export declare enum DisputeStatus {
    /**
     * DISPUTE_STATUS_OPEN - Open: dispute has been filed and is awaiting adjudication. Targeted
     * agent is blocked from submitting / withdrawing on this collection until
     * resolved.
     */
    DISPUTE_STATUS_OPEN = 0,
    /**
     * DISPUTE_STATUS_AWARDED - Awarded: dispute upheld; the targeted party was found in the wrong.
     * No further disputes against this (subject_id, target_role) are allowed.
     */
    DISPUTE_STATUS_AWARDED = 1,
    /**
     * DISPUTE_STATUS_DISMISSED - Dismissed: dispute rejected; targeted party was vindicated.
     * Other parties may file new disputes against the same (subject_id,
     * target_role) with new evidence.
     */
    DISPUTE_STATUS_DISMISSED = 2,
    UNRECOGNIZED = -1
}
export declare const DisputeStatusSDKType: typeof DisputeStatus;
export declare function disputeStatusFromJSON(object: any): DisputeStatus;
export declare function disputeStatusToJSON(object: DisputeStatus): string;
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
/**
 * AdjudicationDid represents a single adjudicator entry on a Collection's
 * dispute whitelist. Each entry pairs a DID with its own reward percentage —
 * adjudicators self-set their fee, turning adjudication into a competitive
 * market (lower-fee adjudicators may attract more volume, higher-fee may
 * trade on reputation). The chain does not enforce who adjudicates a given
 * dispute; whichever whitelisted DID submits MsgAdjudicateDispute first wins.
 */
export interface AdjudicationDid {
    /**
     * did is the adjudicator's DID. Must appear in this list to be allowed
     * to settle disputes on the collection.
     */
    did: string;
    /**
     * reward_percentage is the share (LegacyDec, range [0, 100]) of each
     * actual penalty payout that goes to THIS adjudicator when they settle a
     * dispute. The remainder goes to the dispute winner.
     */
    rewardPercentage: string;
}
/**
 * AdjudicationDid represents a single adjudicator entry on a Collection's
 * dispute whitelist. Each entry pairs a DID with its own reward percentage —
 * adjudicators self-set their fee, turning adjudication into a competitive
 * market (lower-fee adjudicators may attract more volume, higher-fee may
 * trade on reputation). The chain does not enforce who adjudicates a given
 * dispute; whichever whitelisted DID submits MsgAdjudicateDispute first wins.
 */
export interface AdjudicationDidSDKType {
    did: string;
    reward_percentage: string;
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
    /**
     * flagged is the cumulative number of times any claim in this collection
     * has been flagged by an evaluator. Never decremented — it is an
     * event-count metric, not a current-state count.
     */
    flagged: Long;
    /**
     * flagged_active is the number of claims currently in FLAGGED state
     * (incremented when a claim becomes FLAGGED, decremented when it
     * transitions to a terminal evaluation status).
     */
    flaggedActive: Long;
    /**
     * service_agent_deposit_required is the minimum performance deposit balance
     * a service agent must hold on this collection to submit claims. Empty /
     * zero means no deposit gate for service agents.
     */
    serviceAgentDepositRequired: Coin[];
    /**
     * evaluator_deposit_required is the minimum performance deposit balance an
     * evaluator must hold on this collection to submit evaluations. Empty /
     * zero means no deposit gate for evaluators.
     */
    evaluatorDepositRequired: Coin[];
    /**
     * dispute_deposit_amount is the stake a disputer attaches to MsgDisputeClaim.
     * Held with the dispute record; refunded on AWARDED; becomes the penalty
     * pot on DISMISSED. Empty / zero means no disputer stake required.
     */
    disputeDepositAmount: Coin[];
    /**
     * penalty_amount_per_dispute is the fixed penalty applied on AWARDED. If
     * empty / zero, the adjudicator sets the penalty per-resolution (bounded by
     * the loser's deposit-required amount). At collection-validation time, if
     * set, must be ≤ each non-empty deposit-required field.
     */
    penaltyAmountPerDispute: Coin[];
    /**
     * disputes_open is the number of currently-OPEN disputes against any
     * claim in this collection (internally calculated).
     */
    disputesOpen: Long;
    /**
     * disputes_awarded is the cumulative number of disputes ever resolved as
     * AWARDED on this collection (internally calculated, never decremented).
     */
    disputesAwarded: Long;
    /**
     * disputes_dismissed is the cumulative number of disputes ever resolved as
     * DISMISSED on this collection (internally calculated, never decremented).
     */
    disputesDismissed: Long;
    /**
     * min_deposit_period is the minimum duration a performance deposit must
     * remain locked after the most recent top-up before
     * MsgWithdrawPerformanceDeposit can be issued. Closes the in-same-tx exploit
     * where an agent could deposit, submit/evaluate, and withdraw atomically —
     * leaving zero economic stake at dispute time. Set to zero duration to
     * disable the lock. Each MsgAddPerformanceDeposit rolls
     * AgentDepositBalance.withdrawable_at forward to max(current, now +
     * min_deposit_period); the slash path is not gated by this lock.
     */
    minDepositPeriod?: Duration;
    /**
     * adjudicators is the whitelist of approved adjudicator DIDs paired with
     * their reward percentages. Each entry carries its own reward_percentage,
     * letting adjudicators self-set their fees (a competitive market). The
     * chain does not enforce who adjudicates a given dispute — whichever
     * whitelisted DID lands MsgAdjudicateDispute first wins; the percentage
     * applied is that adjudicator's entry. Required to be non-empty if any
     * deposit-required / dispute_deposit / penalty field is set; clearing
     * it is blocked while disputes_open > 0.
     */
    adjudicators: AdjudicationDid[];
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
    flagged: Long;
    flagged_active: Long;
    service_agent_deposit_required: CoinSDKType[];
    evaluator_deposit_required: CoinSDKType[];
    dispute_deposit_amount: CoinSDKType[];
    penalty_amount_per_dispute: CoinSDKType[];
    disputes_open: Long;
    disputes_awarded: Long;
    disputes_dismissed: Long;
    min_deposit_period?: DurationSDKType;
    adjudicators: AdjudicationDidSDKType[];
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
    /** Deprecated: Use cw1155_payment instead */
    /** @deprecated */
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
     * through network fees split, only allowed for APPROVED payment types. NOTE:
     * if true and the payment contains cw20 payments, the claim will only be
     * successfully if an intent exists to ensure immediate cw20 payment split,
     * since there is no WithdrawalAuthorization to manage the cw20 payment split
     * for delayed payments
     */
    isOraclePayment: boolean;
    /** cw1155 payments, can be empty or multiple */
    cw1155Payment: CW1155Payment[];
}
export interface PaymentSDKType {
    account: string;
    amount: CoinSDKType[];
    /** @deprecated */
    contract_1155_payment?: Contract1155PaymentSDKType;
    timeout_ns?: DurationSDKType;
    cw20_payment: CW20PaymentSDKType[];
    is_oracle_payment: boolean;
    cw1155_payment: CW1155PaymentSDKType[];
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
export interface CW1155Payment {
    address: string;
    tokenId: string[];
    amount: Long;
}
export interface CW1155PaymentSDKType {
    address: string;
    token_id: string[];
    amount: Long;
}
export interface CW1155IntentPayment {
    address: string;
    tokens: CW1155IntentPaymentToken[];
}
export interface CW1155IntentPaymentSDKType {
    address: string;
    tokens: CW1155IntentPaymentTokenSDKType[];
}
export interface CW1155IntentPaymentToken {
    tokenId: string;
    amount: Long;
}
export interface CW1155IntentPaymentTokenSDKType {
    token_id: string;
    amount: Long;
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
/** CW20Output represents a CW20 token output for split payments */
export interface CW20Output {
    /** address is the address of the recipient */
    address: string;
    /** contract_address is the address of the contract */
    contractAddress: string;
    /**
     * amount is the amount of the token to transfer
     * chose uint64 for now as amounts should be small enough to fit in a
     * uint64(max 18446744073709551615)
     */
    amount: Long;
}
/** CW20Output represents a CW20 token output for split payments */
export interface CW20OutputSDKType {
    address: string;
    contract_address: string;
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
    /** evaluation is the result of the claim evaluation */
    evaluation?: Evaluation;
    /** payments_status is the status of the payments for the claim */
    paymentsStatus?: ClaimPayments;
    /** intent_id is the id of the intent for this claim, if any */
    useIntent: boolean;
    /**
     * custom amount specified by service agent for claim approval
     * NOTE: if all amounts are empty then collection default is used
     */
    amount: Coin[];
    /**
     * custom cw20 payments specified by service agent for claim approval
     * NOTE: if all amounts are empty then collection default is used
     */
    cw20Payment: CW20Payment[];
    /**
     * custom cw1155 payments specified by service agent for claim approval
     * NOTE: if all amounts are empty then collection default is used
     */
    cw1155Payment: CW1155Payment[];
    /**
     * If intent was used, this is the cw20_payment equivalent but with amounts
     * per token_id to transfer the same tokens to and from the escrow account
     */
    cw1155IntentPayment: CW1155IntentPayment[];
    /**
     * member_address is the team member this claim is on behalf of, if any.
     * Copied from intent when use_intent is true. Used for budget restoration
     * on claim rejection/dispute/invalidation.
     */
    memberAddress: string;
    /**
     * evaluation_history holds prior evaluations for this claim in chronological
     * order. The most recent evaluation always lives in `evaluation`; only
     * superseded entries are appended here. Empty for claims that have been
     * evaluated at most once. Populated when an evaluator FLAGS a claim and a
     * subsequent evaluation (flag-then-flag chain or terminal finalisation)
     * moves the prior evaluation into history.
     */
    evaluationHistory: Evaluation[];
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
    cw1155_payment: CW1155PaymentSDKType[];
    cw1155_intent_payment: CW1155IntentPaymentSDKType[];
    member_address: string;
    evaluation_history: EvaluationSDKType[];
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
    /** verificationProof is the cid of the evaluation Verifiable Credential */
    verificationProof: string;
    /**
     * evaluationDate is the date and time that the claim evaluation was submitted
     * on-chain
     */
    evaluationDate?: Timestamp;
    /**
     * custom amount specified by evaluator for claim approval
     * NOTE: if all amounts are empty then collection default is used
     * NOTE: if claim has intent, then custom amounts are ignored and intent
     * amounts are used
     */
    amount: Coin[];
    /**
     * custom cw20 payments specified by evaluator for claim approval
     * NOTE: if all amounts are empty then collection default is used
     * NOTE: if claim has intent, then custom amounts are ignored and intent
     * amounts are used
     */
    cw20Payment: CW20Payment[];
    /**
     * custom cw1155 payments specified by evaluator for claim approval
     * NOTE: if all amounts are empty then collection default is used
     * NOTE: if claim has intent, then custom amounts are ignored and intent
     * amounts are used
     */
    cw1155Payment: CW1155Payment[];
    /**
     * If intent was used, this is the cw20_payment equivalent but with amounts
     * per token_id to transfer the same tokens to and from the escrow account
     */
    cw1155IntentPayment: CW1155IntentPayment[];
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
    cw1155_payment: CW1155PaymentSDKType[];
    cw1155_intent_payment: CW1155IntentPaymentSDKType[];
}
export interface Dispute {
    subjectId: string;
    /** type is expressed as an integer, interpreted by the client */
    type: number;
    data?: DisputeData;
    /**
     * target_role is the party of the claim this dispute is filed against
     * (submitter or evaluator). Exactly one role per dispute; to dispute both
     * parties of the same claim, file two disputes. UNSPECIFIED only appears
     * on legacy disputes migrated from pre-v7 state.
     */
    targetRole: DisputeTargetRole;
    /**
     * disputer_address is the account that filed the dispute and locked the
     * dispute_deposit. Receives the deposit back on AWARDED, or 80% of the
     * penalty (loser balance) on AWARDED; loses the deposit (split 80/20
     * with adjudicator) on DISMISSED.
     */
    disputerAddress: string;
    /** disputer_did is the DID of the disputer at filing time. */
    disputerDid: string;
    /**
     * dispute_deposit is the amount the disputer locked at filing, equal to
     * collection.dispute_deposit_amount at the time of filing. Held in the
     * collection escrow account.
     */
    disputeDeposit: Coin[];
    /** submitted_at is the block time the dispute was filed. */
    submittedAt?: Timestamp;
    /** status is the current lifecycle state. */
    status: DisputeStatus;
    /** resolution is populated on adjudication (AWARDED or DISMISSED). */
    resolution?: DisputeResolution;
}
export interface DisputeSDKType {
    subject_id: string;
    type: number;
    data?: DisputeDataSDKType;
    target_role: DisputeTargetRole;
    disputer_address: string;
    disputer_did: string;
    dispute_deposit: CoinSDKType[];
    submitted_at?: TimestampSDKType;
    status: DisputeStatus;
    resolution?: DisputeResolutionSDKType;
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
/**
 * DisputeResolution captures the outcome of MsgAdjudicateDispute. Records
 * the intended penalty (what the adjudicator/collection prescribed) and the
 * actual penalty paid (capped at the loser's available deposit balance —
 * may be less than intended if a prior dispute already drained the balance).
 */
export interface DisputeResolution {
    /**
     * adjudicator_did is the DID that adjudicated; must be in the collection's
     * adjudication_entity_dids whitelist.
     */
    adjudicatorDid: string;
    /**
     * adjudicator_address is the signer of MsgAdjudicateDispute. Either an
     * entity account belonging to adjudicator_did, or a key registered on the
     * adjudicator_did DID document.
     */
    adjudicatorAddress: string;
    /**
     * adjudicator_payout_address is where the 20% reward (or 100% if no
     * winner share) was actually paid out — either the AdjudicatorRevenue
     * entity account (auto-created) when the DID is an entity DID with module
     * accounts, or adjudicator_address otherwise.
     */
    adjudicatorPayoutAddress: string;
    resolvedAt?: Timestamp;
    /**
     * data is the structured payload the adjudicator attached to the
     * resolution — same shape as the dispute filing's DisputeData. Lets the
     * adjudicator pin an opinion document (IPFS/matrix uri + proof/cid), declare
     * its MIME type, and flag encryption — mirroring how disputers attach
     * evidence at filing time.
     */
    data?: DisputeData;
    /**
     * intended_penalty is the penalty the adjudicator selected (or the
     * collection's penalty_amount_per_dispute if fixed). May exceed what was
     * actually paid if the loser's balance was insufficient.
     */
    intendedPenalty: Coin[];
    /**
     * actual_penalty_paid is what was actually slashed from the loser's
     * balance (or the dispute_deposit, on DISMISSED). Always ≤ intended.
     */
    actualPenaltyPaid: Coin[];
    /**
     * winner_amount is the portion of actual_penalty_paid that went to the
     * dispute winner (disputer on AWARDED, target agent on DISMISSED).
     */
    winnerAmount: Coin[];
    /**
     * adjudicator_amount is the portion of actual_penalty_paid that went to
     * the adjudicator (governed by collection.adjudicator_reward_percentage).
     */
    adjudicatorAmount: Coin[];
    /** winner_address is the address that received the winner_amount. */
    winnerAddress: string;
    /** loser_address is the address whose balance / deposit was slashed. */
    loserAddress: string;
}
/**
 * DisputeResolution captures the outcome of MsgAdjudicateDispute. Records
 * the intended penalty (what the adjudicator/collection prescribed) and the
 * actual penalty paid (capped at the loser's available deposit balance —
 * may be less than intended if a prior dispute already drained the balance).
 */
export interface DisputeResolutionSDKType {
    adjudicator_did: string;
    adjudicator_address: string;
    adjudicator_payout_address: string;
    resolved_at?: TimestampSDKType;
    data?: DisputeDataSDKType;
    intended_penalty: CoinSDKType[];
    actual_penalty_paid: CoinSDKType[];
    winner_amount: CoinSDKType[];
    adjudicator_amount: CoinSDKType[];
    winner_address: string;
    loser_address: string;
}
/**
 * AgentDepositBalance is an agent's rolling performance-deposit balance for
 * a single collection. Held inside the collection's existing escrow account
 * (no separate escrow). Topped up via MsgAddPerformanceDeposit, drained on
 * adjudicated dispute losses, withdrawable when no active dispute targets
 * this agent on this collection.
 */
export interface AgentDepositBalance {
    /** collection_id this balance belongs to. */
    collectionId: string;
    /** agent_address is the account this balance is held for. */
    agentAddress: string;
    /** amount is the current balance in escrow on this agent's behalf. */
    amount: Coin[];
    /**
     * withdrawable_at is the earliest block time at which
     * MsgWithdrawPerformanceDeposit may be issued against this balance. Rolled
     * forward to max(current, now + collection.min_deposit_period) on each
     * top-up so an agent cannot deposit + submit + withdraw atomically and
     * leave nothing at stake before a dispute can land. Zero on balances
     * created under a collection with min_deposit_period == 0 (no lock).
     * The slash path is not gated by this lock; only voluntary withdrawal is.
     */
    withdrawableAt?: Timestamp;
}
/**
 * AgentDepositBalance is an agent's rolling performance-deposit balance for
 * a single collection. Held inside the collection's existing escrow account
 * (no separate escrow). Topped up via MsgAddPerformanceDeposit, drained on
 * adjudicated dispute losses, withdrawable when no active dispute targets
 * this agent on this collection.
 */
export interface AgentDepositBalanceSDKType {
    collection_id: string;
    agent_address: string;
    amount: CoinSDKType[];
    withdrawable_at?: TimestampSDKType;
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
    /** The custom cw1155 payments the agent intends to claim, if any. */
    cw1155Payment: CW1155Payment[];
    /**
     * Same as cw1155_payment but with amounts per token_id to transfer
     * the same tokens to and from the escrow account
     */
    cw1155IntentPayment: CW1155IntentPayment[];
    /**
     * member_address is the team member this intent is on behalf of, if any.
     * Required if the collection has member budgets. Validated against the
     * oracle's SubmitClaimConstraints.member_address.
     */
    memberAddress: string;
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
    cw1155_payment: CW1155PaymentSDKType[];
    cw1155_intent_payment: CW1155IntentPaymentSDKType[];
    member_address: string;
}
/**
 * MemberBudget defines a team member's periodic spending budget for a
 * collection. Stored as separate state keyed by collectionId/memberAddress
 * for gas-efficient O(1) reads and writes independent of team size.
 */
export interface MemberBudget {
    /** collection_id this budget belongs to */
    collectionId: string;
    /** member's blockchain address */
    memberAddress: string;
    /**
     * period duration for budget reset (e.g., 30 days). Must be at least 24 hours
     * (MinMemberBudgetPeriod). Periods shorter than 24 hours are rejected to
     * prevent griefing via the lazy-reset loop in the intent handler.
     */
    period?: Duration;
    /** maximum native coin spend allowed per period */
    periodSpendLimit: Coin[];
    /** native coins already spent (intented) in the current period */
    periodSpent: Coin[];
    /** maximum CW20 spend allowed per period */
    periodCw20SpendLimit: CW20Payment[];
    /** CW20 amount already spent in the current period */
    periodCw20Spent: CW20Payment[];
    /**
     * timestamp when current period resets (lazy reset in intent handler,
     * following the feegrant PeriodicAllowance pattern)
     */
    periodResetAt?: Timestamp;
}
/**
 * MemberBudget defines a team member's periodic spending budget for a
 * collection. Stored as separate state keyed by collectionId/memberAddress
 * for gas-efficient O(1) reads and writes independent of team size.
 */
export interface MemberBudgetSDKType {
    collection_id: string;
    member_address: string;
    period?: DurationSDKType;
    period_spend_limit: CoinSDKType[];
    period_spent: CoinSDKType[];
    period_cw20_spend_limit: CW20PaymentSDKType[];
    period_cw20_spent: CW20PaymentSDKType[];
    period_reset_at?: TimestampSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const AdjudicationDid: {
    encode(message: AdjudicationDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdjudicationDid;
    fromJSON(object: any): AdjudicationDid;
    toJSON(message: AdjudicationDid): unknown;
    fromPartial(object: Partial<AdjudicationDid>): AdjudicationDid;
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
export declare const CW1155Payment: {
    encode(message: CW1155Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CW1155Payment;
    fromJSON(object: any): CW1155Payment;
    toJSON(message: CW1155Payment): unknown;
    fromPartial(object: Partial<CW1155Payment>): CW1155Payment;
};
export declare const CW1155IntentPayment: {
    encode(message: CW1155IntentPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CW1155IntentPayment;
    fromJSON(object: any): CW1155IntentPayment;
    toJSON(message: CW1155IntentPayment): unknown;
    fromPartial(object: Partial<CW1155IntentPayment>): CW1155IntentPayment;
};
export declare const CW1155IntentPaymentToken: {
    encode(message: CW1155IntentPaymentToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CW1155IntentPaymentToken;
    fromJSON(object: any): CW1155IntentPaymentToken;
    toJSON(message: CW1155IntentPaymentToken): unknown;
    fromPartial(object: Partial<CW1155IntentPaymentToken>): CW1155IntentPaymentToken;
};
export declare const CW20Payment: {
    encode(message: CW20Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CW20Payment;
    fromJSON(object: any): CW20Payment;
    toJSON(message: CW20Payment): unknown;
    fromPartial(object: Partial<CW20Payment>): CW20Payment;
};
export declare const CW20Output: {
    encode(message: CW20Output, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CW20Output;
    fromJSON(object: any): CW20Output;
    toJSON(message: CW20Output): unknown;
    fromPartial(object: Partial<CW20Output>): CW20Output;
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
export declare const DisputeResolution: {
    encode(message: DisputeResolution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisputeResolution;
    fromJSON(object: any): DisputeResolution;
    toJSON(message: DisputeResolution): unknown;
    fromPartial(object: Partial<DisputeResolution>): DisputeResolution;
};
export declare const AgentDepositBalance: {
    encode(message: AgentDepositBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AgentDepositBalance;
    fromJSON(object: any): AgentDepositBalance;
    toJSON(message: AgentDepositBalance): unknown;
    fromPartial(object: Partial<AgentDepositBalance>): AgentDepositBalance;
};
export declare const Intent: {
    encode(message: Intent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Intent;
    fromJSON(object: any): Intent;
    toJSON(message: Intent): unknown;
    fromPartial(object: Partial<Intent>): Intent;
};
export declare const MemberBudget: {
    encode(message: MemberBudget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberBudget;
    fromJSON(object: any): MemberBudget;
    toJSON(message: MemberBudget): unknown;
    fromPartial(object: Partial<MemberBudget>): MemberBudget;
};
