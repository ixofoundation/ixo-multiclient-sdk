import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { CollectionState, Payments, PaymentsSDKType, CollectionIntentOptions, AdjudicationDid, AdjudicationDidSDKType, CW20Payment, CW20PaymentSDKType, CW1155Payment, CW1155PaymentSDKType, EvaluationStatus, DisputeData, DisputeDataSDKType, DisputeTargetRole, PaymentType, Contract1155Payment, Contract1155PaymentSDKType, DisputeStatus } from "./claims";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Input, InputSDKType, Output, OutputSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { CreateClaimAuthorizationType } from "./authz";
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
    /**
     * intents is the option for intents for this collection (allow, deny,
     * required)
     */
    intents: CollectionIntentOptions;
    /**
     * Optional dispute / performance-deposit config. All zero/empty means
     * the collection has no deposit gates and no disputes can be adjudicated.
     * If any deposit/penalty field is set, adjudicators must be non-empty.
     */
    serviceAgentDepositRequired: Coin[];
    evaluatorDepositRequired: Coin[];
    disputeDepositAmount: Coin[];
    penaltyAmountPerDispute: Coin[];
    /**
     * min_deposit_period locks performance-deposit withdrawals for this
     * duration after each top-up (see Collection.min_deposit_period). Zero
     * disables the lock.
     */
    minDepositPeriod?: Duration;
    /**
     * adjudicators is the whitelist of approved adjudicators, each with their
     * own reward_percentage (see Collection.adjudicators).
     */
    adjudicators: AdjudicationDid[];
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
    intents: CollectionIntentOptions;
    service_agent_deposit_required: CoinSDKType[];
    evaluator_deposit_required: CoinSDKType[];
    dispute_deposit_amount: CoinSDKType[];
    penalty_amount_per_dispute: CoinSDKType[];
    min_deposit_period?: DurationSDKType;
    adjudicators: AdjudicationDidSDKType[];
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
    /**
     * use_intent is the option for using intent for this claim if it exists and
     * is active. NOTE: if use_intent is true then custom amounts in the msg are
     * ignored and overridden with intent amounts. NOTE: if use_intent is true and
     * there is no active intent then will error
     */
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
     * member_address is the team member this claim is on behalf of. Required if
     * the collection has member budgets. Must match intent's member_address when
     * use_intent is true.
     */
    memberAddress: string;
}
export interface MsgSubmitClaimSDKType {
    collection_id: string;
    claim_id: string;
    agent_did: string;
    agent_address: string;
    admin_address: string;
    use_intent: boolean;
    amount: CoinSDKType[];
    cw20_payment: CW20PaymentSDKType[];
    cw1155_payment: CW1155PaymentSDKType[];
    member_address: string;
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
    /** verificationProof is the cid of the evaluation Verifiable Credential */
    verificationProof: string;
    /**
     * custom amount specified by evaluator for claim approval
     * NOTE: if claim is using intent, then custom amounts are ignored and
     * overridden with intent amounts NOTE: if all amounts are empty then
     * collection default is used
     */
    amount: Coin[];
    /**
     * custom cw20 payments specified by evaluator for claim approval
     * NOTE: if claim is using intent, then custom amounts are ignored and
     * overridden with intent amounts NOTE: if all amounts are empty then
     * collection default is used
     */
    cw20Payment: CW20Payment[];
    /**
     * custom cw1155 payments specified by evaluator for claim approval
     * NOTE: if claim is using intent, then custom amounts are ignored and
     * overridden with intent amounts NOTE: if all amounts are empty then
     * collection default is used
     */
    cw1155Payment: CW1155Payment[];
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
    cw20_payment: CW20PaymentSDKType[];
    cw1155_payment: CW1155PaymentSDKType[];
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
    /**
     * target_role is the party being disputed (submitter or evaluator).
     * Exactly one role per dispute. To dispute both parties of the same claim
     * file two separate disputes. Must be SUBMITTER or EVALUATOR; UNSPECIFIED
     * is rejected on new txs (only appears on legacy migrated disputes).
     */
    targetRole: DisputeTargetRole;
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
    target_role: DisputeTargetRole;
}
export interface MsgDisputeClaimResponse {
}
export interface MsgDisputeClaimResponseSDKType {
}
export interface MsgWithdrawPayment {
    /** claim_id the withdrawal is for */
    claimId: string;
    /** Inputs to the multi send tx to run to withdraw payment */
    inputs: Input[];
    /** Outputs for the multi send tx to run to withdraw payment */
    outputs: Output[];
    /**
     * payment type to keep track what payment is for and mark claim payment
     * accordingly
     */
    paymentType: PaymentType;
    /** Deprecated: Use cw1155_payment instead */
    /** @deprecated */
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
    /** cw20 payments, can be empty or multiple */
    cw20Payment: CW20Payment[];
    /** custom cw1155, can be empty or multiple */
    cw1155Payment: CW1155Payment[];
}
export interface MsgWithdrawPaymentSDKType {
    claim_id: string;
    inputs: InputSDKType[];
    outputs: OutputSDKType[];
    payment_type: PaymentType;
    /** @deprecated */
    contract_1155_payment?: Contract1155PaymentSDKType;
    toAddress: string;
    fromAddress: string;
    release_date?: TimestampSDKType;
    admin_address: string;
    cw20_payment: CW20PaymentSDKType[];
    cw1155_payment: CW1155PaymentSDKType[];
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
export interface MsgUpdateCollectionIntents {
    /** collection_id indicates which Collection to update */
    collectionId: string;
    /**
     * intents is the option for intents for this collection (allow, deny,
     * required)
     */
    intents: CollectionIntentOptions;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
}
export interface MsgUpdateCollectionIntentsSDKType {
    collection_id: string;
    intents: CollectionIntentOptions;
    admin_address: string;
}
export interface MsgUpdateCollectionIntentsResponse {
}
export interface MsgUpdateCollectionIntentsResponseSDKType {
}
/**
 * MsgUpdateCollectionQuota updates the maximum claim count for a collection.
 * The new quota must be either zero (unlimited) or ≥ the collection's current
 * `count` so already-submitted claims are not retroactively invalidated.
 */
export interface MsgUpdateCollectionQuota {
    /** collection_id indicates which Collection to update */
    collectionId: string;
    /**
     * quota is the new maximum number of claims that may be submitted. 0 means
     * unlimited. Must be 0 or ≥ collection.count (cannot retroactively cap
     * below already-submitted claims).
     */
    quota: Long;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
}
/**
 * MsgUpdateCollectionQuota updates the maximum claim count for a collection.
 * The new quota must be either zero (unlimited) or ≥ the collection's current
 * `count` so already-submitted claims are not retroactively invalidated.
 */
export interface MsgUpdateCollectionQuotaSDKType {
    collection_id: string;
    quota: Long;
    admin_address: string;
}
export interface MsgUpdateCollectionQuotaResponse {
}
export interface MsgUpdateCollectionQuotaResponseSDKType {
}
export interface MsgClaimIntent {
    /** The service agent's DID (Decentralized Identifier). */
    agentDid: string;
    /** The service agent's address (who submits this message). */
    agentAddress: string;
    /** The id of the collection this intent is linked to. */
    collectionId: string;
    /**
     * The desired claim amount, if any.
     * NOTE: if all amounts are empty then collection default is used (APPROVAL
     * payment)
     */
    amount: Coin[];
    /**
     * The custom CW20 payment, if any.
     * NOTE: if all amounts are empty then collection default is used (APPROVAL
     * payment)
     */
    cw20Payment: CW20Payment[];
    /**
     * The custom CW1155 payment, if any.
     * NOTE: if all amounts are empty then collection default is used (APPROVAL
     * payment)
     */
    cw1155Payment: CW1155Payment[];
    /**
     * member_address is the team member this intent is on behalf of. Required if
     * the collection has member budgets. Validated against the oracle's
     * SubmitClaimConstraints.member_address to prove the member authorized this
     * oracle. Used to check and deduct from the member's periodic budget.
     */
    memberAddress: string;
}
export interface MsgClaimIntentSDKType {
    agent_did: string;
    agent_address: string;
    collection_id: string;
    amount: CoinSDKType[];
    cw20_payment: CW20PaymentSDKType[];
    cw1155_payment: CW1155PaymentSDKType[];
    member_address: string;
}
/** MsgClaimIntentResponse defines the response after submitting an intent. */
export interface MsgClaimIntentResponse {
    /** Resulting intent id. */
    intentId: string;
    /**
     * Timeout period for the intent. If the claim is not submitted by this time,
     * the intent expires.
     */
    expireAt?: Timestamp;
}
/** MsgClaimIntentResponse defines the response after submitting an intent. */
export interface MsgClaimIntentResponseSDKType {
    intent_id: string;
    expire_at?: TimestampSDKType;
}
/**
 * MsgCreateClaimAuthorization defines a message for creating a claim
 * authorization on behalf of an entity admin account (SubmitClaimAuthorization
 * or EvaluateClaimAuthorization)
 */
export interface MsgCreateClaimAuthorization {
    /** Address of the creator (user with meta-authorization) */
    creatorAddress: string;
    /** agent is the DID of the agent submitting the claim */
    creatorDid: string;
    /** Address of the grantee (who will receive the authorization) */
    granteeAddress: string;
    /** admin address used to sign this message, validated against Collection Admin */
    adminAddress: string;
    /** Collection ID the authorization applies to (for both submit and evaluate) */
    collectionId: string;
    /**
     * Type of authorization to create (submit or evaluate, can't create both in a
     * single request)
     */
    authType: CreateClaimAuthorizationType;
    /** Quota for the created authorization (for both submit and evaluate) */
    agentQuota: Long;
    /**
     * Maximum amount that can be specified in the authorization (for both submit
     * and evaluate)
     */
    maxAmount: Coin[];
    /**
     * Maximum CW20 payment that can be specified in the authorization (for both
     * submit and evaluate)
     */
    maxCw20Payment: CW20Payment[];
    /**
     * Expiration time for the authorization, be careful with this as it is the
     * expiration of the authorization itself, not the constraints, meaning if the
     * authorization expires all constraints will be removed with the
     * authorization (standard authz behavior)
     */
    expiration?: Timestamp;
    /** Maximum intent duration for the authorization allowed (for submit) */
    intentDurationNs?: Duration;
    /** if null then no before_date validation done (for evaluate) */
    beforeDate?: Timestamp;
    /**
     * Maximum cw1155 payment that can be specified in the authorization (for both
     * submit and evaluate)
     */
    maxCw1155Payment: CW1155Payment[];
    /**
     * member_address to set on the created SubmitClaimConstraint. Must match
     * the member_address in the creator's CreateClaimAuthorizationConstraints
     * to prevent spoofing (enforced in Accept()).
     */
    memberAddress: string;
}
/**
 * MsgCreateClaimAuthorization defines a message for creating a claim
 * authorization on behalf of an entity admin account (SubmitClaimAuthorization
 * or EvaluateClaimAuthorization)
 */
export interface MsgCreateClaimAuthorizationSDKType {
    creator_address: string;
    creator_did: string;
    grantee_address: string;
    admin_address: string;
    collection_id: string;
    auth_type: CreateClaimAuthorizationType;
    agent_quota: Long;
    max_amount: CoinSDKType[];
    max_cw20_payment: CW20PaymentSDKType[];
    expiration?: TimestampSDKType;
    intent_duration_ns?: DurationSDKType;
    before_date?: TimestampSDKType;
    max_cw1155_payment: CW1155PaymentSDKType[];
    member_address: string;
}
/**
 * MsgCreateClaimAuthorizationResponse defines the response for creating a claim
 * authorization
 */
export interface MsgCreateClaimAuthorizationResponse {
}
/**
 * MsgCreateClaimAuthorizationResponse defines the response for creating a claim
 * authorization
 */
export interface MsgCreateClaimAuthorizationResponseSDKType {
}
/**
 * MsgSetCollectionMembers adds or updates one or more member budgets on a
 * collection in a single transaction. For each member entry:
 *   - If the member already exists and reset_period_spent is false: budget
 *     limits (period, spend_limit, cw20_spend_limit) are updated, but
 *     period_spent and period_reset_at are preserved. The current period
 *     continues with the new limits applied immediately.
 *   - If the member already exists and reset_period_spent is true:
 *     period_spent is cleared and period_reset_at is set to now + period.
 *     This starts a fresh cycle from the current block time.
 *   - If the member is new: created with period_spent = zero and
 *     period_reset_at = now + period.
 *
 * Handler will reject any member entry where all spend limits are zero —
 * use MsgRemoveCollectionMembers instead. Duplicate member addresses within
 * a single message are rejected.
 */
export interface MsgSetCollectionMembers {
    /** collection_id to add/update members on */
    collectionId: string;
    /** admin address, validated against Collection Admin */
    adminAddress: string;
    /** list of member budgets to set */
    members: CollectionMemberInput[];
}
/**
 * MsgSetCollectionMembers adds or updates one or more member budgets on a
 * collection in a single transaction. For each member entry:
 *   - If the member already exists and reset_period_spent is false: budget
 *     limits (period, spend_limit, cw20_spend_limit) are updated, but
 *     period_spent and period_reset_at are preserved. The current period
 *     continues with the new limits applied immediately.
 *   - If the member already exists and reset_period_spent is true:
 *     period_spent is cleared and period_reset_at is set to now + period.
 *     This starts a fresh cycle from the current block time.
 *   - If the member is new: created with period_spent = zero and
 *     period_reset_at = now + period.
 *
 * Handler will reject any member entry where all spend limits are zero —
 * use MsgRemoveCollectionMembers instead. Duplicate member addresses within
 * a single message are rejected.
 */
export interface MsgSetCollectionMembersSDKType {
    collection_id: string;
    admin_address: string;
    members: CollectionMemberInputSDKType[];
}
export interface MsgSetCollectionMembersResponse {
}
export interface MsgSetCollectionMembersResponseSDKType {
}
/**
 * CollectionMemberInput defines the input for a single member budget within
 * MsgSetCollectionMembers
 */
export interface CollectionMemberInput {
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
    /** maximum CW20 spend allowed per period */
    periodCw20SpendLimit: CW20Payment[];
    /** if true, resets period_spent to zero (useful for manual admin reset) */
    resetPeriodSpent: boolean;
}
/**
 * CollectionMemberInput defines the input for a single member budget within
 * MsgSetCollectionMembers
 */
export interface CollectionMemberInputSDKType {
    member_address: string;
    period?: DurationSDKType;
    period_spend_limit: CoinSDKType[];
    period_cw20_spend_limit: CW20PaymentSDKType[];
    reset_period_spent: boolean;
}
/**
 * MsgRemoveCollectionMembers removes one or more member budgets from a
 * collection in a single transaction. Does not revoke the members' existing
 * authorization grants — admin should do that separately if needed.
 */
export interface MsgRemoveCollectionMembers {
    /** collection_id to remove members from */
    collectionId: string;
    /** admin address, validated against Collection Admin */
    adminAddress: string;
    /** list of member addresses to remove */
    memberAddresses: string[];
}
/**
 * MsgRemoveCollectionMembers removes one or more member budgets from a
 * collection in a single transaction. Does not revoke the members' existing
 * authorization grants — admin should do that separately if needed.
 */
export interface MsgRemoveCollectionMembersSDKType {
    collection_id: string;
    admin_address: string;
    member_addresses: string[];
}
export interface MsgRemoveCollectionMembersResponse {
}
export interface MsgRemoveCollectionMembersResponseSDKType {
}
/**
 * MsgUpdateCollectionDisputeConfig updates the dispute / performance-deposit
 * configuration on a collection. All fields are replacements, not merges —
 * the caller must send the full desired state. To "clear" a field, send it
 * empty / zero. The handler enforces:
 *   - if any deposit-required / penalty / disputer-stake field is non-empty,
 *     adjudication_entity_dids must be non-empty;
 *   - penalty_amount_per_dispute (if set) must be ≤ each non-empty
 *     deposit-required field;
 *   - adjudicator_reward_percentage in [0, 100].
 * Changing config does NOT affect in-flight disputes (each dispute
 * snapshots config it cares about at filing / adjudication time).
 */
export interface MsgUpdateCollectionDisputeConfig {
    collectionId: string;
    adminAddress: string;
    serviceAgentDepositRequired: Coin[];
    evaluatorDepositRequired: Coin[];
    disputeDepositAmount: Coin[];
    penaltyAmountPerDispute: Coin[];
    minDepositPeriod?: Duration;
    /**
     * adjudicators is the whitelist of approved adjudicators (see
     * Collection.adjudicators).
     */
    adjudicators: AdjudicationDid[];
}
/**
 * MsgUpdateCollectionDisputeConfig updates the dispute / performance-deposit
 * configuration on a collection. All fields are replacements, not merges —
 * the caller must send the full desired state. To "clear" a field, send it
 * empty / zero. The handler enforces:
 *   - if any deposit-required / penalty / disputer-stake field is non-empty,
 *     adjudication_entity_dids must be non-empty;
 *   - penalty_amount_per_dispute (if set) must be ≤ each non-empty
 *     deposit-required field;
 *   - adjudicator_reward_percentage in [0, 100].
 * Changing config does NOT affect in-flight disputes (each dispute
 * snapshots config it cares about at filing / adjudication time).
 */
export interface MsgUpdateCollectionDisputeConfigSDKType {
    collection_id: string;
    admin_address: string;
    service_agent_deposit_required: CoinSDKType[];
    evaluator_deposit_required: CoinSDKType[];
    dispute_deposit_amount: CoinSDKType[];
    penalty_amount_per_dispute: CoinSDKType[];
    min_deposit_period?: DurationSDKType;
    adjudicators: AdjudicationDidSDKType[];
}
export interface MsgUpdateCollectionDisputeConfigResponse {
}
export interface MsgUpdateCollectionDisputeConfigResponseSDKType {
}
/**
 * MsgAddPerformanceDeposit tops up an agent's performance-deposit balance on
 * a collection. Funds move from agent_address → collection.escrow_account.
 * Permitted regardless of whether the agent currently has active disputes —
 * only withdrawals and new submissions are gated.
 */
export interface MsgAddPerformanceDeposit {
    collectionId: string;
    /**
     * agent_address is the owner of the balance being topped up; also the
     * payer. Anyone can fund their own balance on any collection (no authz
     * grant required from the collection admin).
     */
    agentAddress: string;
    amount: Coin[];
}
/**
 * MsgAddPerformanceDeposit tops up an agent's performance-deposit balance on
 * a collection. Funds move from agent_address → collection.escrow_account.
 * Permitted regardless of whether the agent currently has active disputes —
 * only withdrawals and new submissions are gated.
 */
export interface MsgAddPerformanceDepositSDKType {
    collection_id: string;
    agent_address: string;
    amount: CoinSDKType[];
}
export interface MsgAddPerformanceDepositResponse {
    /** new_balance is the agent's resulting balance after this top-up. */
    newBalance: Coin[];
}
export interface MsgAddPerformanceDepositResponseSDKType {
    new_balance: CoinSDKType[];
}
/**
 * MsgWithdrawPerformanceDeposit pulls some / all of an agent's
 * performance-deposit balance back to their wallet. Rejected if the agent
 * has any OPEN dispute targeting them on this collection. Partial
 * withdrawal supported.
 */
export interface MsgWithdrawPerformanceDeposit {
    collectionId: string;
    agentAddress: string;
    /**
     * amount to withdraw. Must be ≤ current balance. If empty, withdraws the
     * full current balance.
     */
    amount: Coin[];
}
/**
 * MsgWithdrawPerformanceDeposit pulls some / all of an agent's
 * performance-deposit balance back to their wallet. Rejected if the agent
 * has any OPEN dispute targeting them on this collection. Partial
 * withdrawal supported.
 */
export interface MsgWithdrawPerformanceDepositSDKType {
    collection_id: string;
    agent_address: string;
    amount: CoinSDKType[];
}
export interface MsgWithdrawPerformanceDepositResponse {
    withdrawn: Coin[];
    remainingBalance: Coin[];
}
export interface MsgWithdrawPerformanceDepositResponseSDKType {
    withdrawn: CoinSDKType[];
    remaining_balance: CoinSDKType[];
}
/**
 * MsgAdjudicateDispute settles a dispute. Signed by adjudicator_address,
 * which must be either an EntityAccount belonging to adjudicator_did, OR a
 * key registered on the adjudicator_did DID document (capability invocation
 * / authentication verification method). adjudicator_did must be in the
 * collection's adjudication_entity_dids whitelist.
 *
 * AWARDED: loser is the targeted agent of the dispute. Penalty is debited
 * from their AgentDepositBalance (capped at available). 80% (by default)
 * goes to the disputer, 20% to the adjudicator payout address. The
 * disputer's dispute_deposit is returned to them in full.
 *
 * DISMISSED: loser is the disputer. The disputer's dispute_deposit is the
 * pot. 80% goes to the targeted agent (vindicated), 20% to the adjudicator
 * payout address.
 *
 * The penalty amount may be left empty by the caller if the collection has
 * penalty_amount_per_dispute set, in which case the collection value is
 * used. Otherwise the caller must supply a penalty bounded by the loser's
 * deposit-required (or dispute_deposit_amount for DISMISSED).
 */
export interface MsgAdjudicateDispute {
    /** subject_id of the dispute being adjudicated. */
    subjectId: string;
    /**
     * target_role of the dispute being adjudicated. Together with subject_id,
     * identifies the dispute uniquely (one OPEN dispute per pair).
     */
    targetRole: DisputeTargetRole;
    /** adjudicator_did must be in collection.adjudication_entity_dids. */
    adjudicatorDid: string;
    /**
     * adjudicator_address is the signer. Must be authorized by adjudicator_did
     * (entity account OR DID-registered key).
     */
    adjudicatorAddress: string;
    /** outcome must be AWARDED or DISMISSED; OPEN is rejected. */
    outcome: DisputeStatus;
    /**
     * data is the structured payload the adjudicator wants recorded on the
     * resolution — symmetric with MsgDisputeClaim.data. The keeper stores
     * this verbatim on DisputeResolution.data, so adjudicators can pin a
     * signed opinion doc (IPFS/matrix uri + proof/cid), declare its MIME type,
     * and flag encryption.
     */
    data?: DisputeData;
    /**
     * penalty_amount: if collection has a fixed penalty_amount_per_dispute,
     * this field is ignored. Otherwise must be set and ≤ loser's role
     * deposit-required (AWARDED) or ≤ dispute_deposit_amount (DISMISSED).
     */
    penaltyAmount: Coin[];
}
/**
 * MsgAdjudicateDispute settles a dispute. Signed by adjudicator_address,
 * which must be either an EntityAccount belonging to adjudicator_did, OR a
 * key registered on the adjudicator_did DID document (capability invocation
 * / authentication verification method). adjudicator_did must be in the
 * collection's adjudication_entity_dids whitelist.
 *
 * AWARDED: loser is the targeted agent of the dispute. Penalty is debited
 * from their AgentDepositBalance (capped at available). 80% (by default)
 * goes to the disputer, 20% to the adjudicator payout address. The
 * disputer's dispute_deposit is returned to them in full.
 *
 * DISMISSED: loser is the disputer. The disputer's dispute_deposit is the
 * pot. 80% goes to the targeted agent (vindicated), 20% to the adjudicator
 * payout address.
 *
 * The penalty amount may be left empty by the caller if the collection has
 * penalty_amount_per_dispute set, in which case the collection value is
 * used. Otherwise the caller must supply a penalty bounded by the loser's
 * deposit-required (or dispute_deposit_amount for DISMISSED).
 */
export interface MsgAdjudicateDisputeSDKType {
    subject_id: string;
    target_role: DisputeTargetRole;
    adjudicator_did: string;
    adjudicator_address: string;
    outcome: DisputeStatus;
    data?: DisputeDataSDKType;
    penalty_amount: CoinSDKType[];
}
export interface MsgAdjudicateDisputeResponse {
    /**
     * actual_penalty_paid is what was actually slashed; may be less than the
     * intended penalty if the loser's balance was insufficient.
     */
    actualPenaltyPaid: Coin[];
}
export interface MsgAdjudicateDisputeResponseSDKType {
    actual_penalty_paid: CoinSDKType[];
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
export declare const MsgUpdateCollectionIntents: {
    encode(message: MsgUpdateCollectionIntents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionIntents;
    fromJSON(object: any): MsgUpdateCollectionIntents;
    toJSON(message: MsgUpdateCollectionIntents): unknown;
    fromPartial(object: Partial<MsgUpdateCollectionIntents>): MsgUpdateCollectionIntents;
};
export declare const MsgUpdateCollectionIntentsResponse: {
    encode(_: MsgUpdateCollectionIntentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionIntentsResponse;
    fromJSON(_: any): MsgUpdateCollectionIntentsResponse;
    toJSON(_: MsgUpdateCollectionIntentsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateCollectionIntentsResponse>): MsgUpdateCollectionIntentsResponse;
};
export declare const MsgUpdateCollectionQuota: {
    encode(message: MsgUpdateCollectionQuota, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionQuota;
    fromJSON(object: any): MsgUpdateCollectionQuota;
    toJSON(message: MsgUpdateCollectionQuota): unknown;
    fromPartial(object: Partial<MsgUpdateCollectionQuota>): MsgUpdateCollectionQuota;
};
export declare const MsgUpdateCollectionQuotaResponse: {
    encode(_: MsgUpdateCollectionQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionQuotaResponse;
    fromJSON(_: any): MsgUpdateCollectionQuotaResponse;
    toJSON(_: MsgUpdateCollectionQuotaResponse): unknown;
    fromPartial(_: Partial<MsgUpdateCollectionQuotaResponse>): MsgUpdateCollectionQuotaResponse;
};
export declare const MsgClaimIntent: {
    encode(message: MsgClaimIntent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimIntent;
    fromJSON(object: any): MsgClaimIntent;
    toJSON(message: MsgClaimIntent): unknown;
    fromPartial(object: Partial<MsgClaimIntent>): MsgClaimIntent;
};
export declare const MsgClaimIntentResponse: {
    encode(message: MsgClaimIntentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimIntentResponse;
    fromJSON(object: any): MsgClaimIntentResponse;
    toJSON(message: MsgClaimIntentResponse): unknown;
    fromPartial(object: Partial<MsgClaimIntentResponse>): MsgClaimIntentResponse;
};
export declare const MsgCreateClaimAuthorization: {
    encode(message: MsgCreateClaimAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaimAuthorization;
    fromJSON(object: any): MsgCreateClaimAuthorization;
    toJSON(message: MsgCreateClaimAuthorization): unknown;
    fromPartial(object: Partial<MsgCreateClaimAuthorization>): MsgCreateClaimAuthorization;
};
export declare const MsgCreateClaimAuthorizationResponse: {
    encode(_: MsgCreateClaimAuthorizationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaimAuthorizationResponse;
    fromJSON(_: any): MsgCreateClaimAuthorizationResponse;
    toJSON(_: MsgCreateClaimAuthorizationResponse): unknown;
    fromPartial(_: Partial<MsgCreateClaimAuthorizationResponse>): MsgCreateClaimAuthorizationResponse;
};
export declare const MsgSetCollectionMembers: {
    encode(message: MsgSetCollectionMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCollectionMembers;
    fromJSON(object: any): MsgSetCollectionMembers;
    toJSON(message: MsgSetCollectionMembers): unknown;
    fromPartial(object: Partial<MsgSetCollectionMembers>): MsgSetCollectionMembers;
};
export declare const MsgSetCollectionMembersResponse: {
    encode(_: MsgSetCollectionMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCollectionMembersResponse;
    fromJSON(_: any): MsgSetCollectionMembersResponse;
    toJSON(_: MsgSetCollectionMembersResponse): unknown;
    fromPartial(_: Partial<MsgSetCollectionMembersResponse>): MsgSetCollectionMembersResponse;
};
export declare const CollectionMemberInput: {
    encode(message: CollectionMemberInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionMemberInput;
    fromJSON(object: any): CollectionMemberInput;
    toJSON(message: CollectionMemberInput): unknown;
    fromPartial(object: Partial<CollectionMemberInput>): CollectionMemberInput;
};
export declare const MsgRemoveCollectionMembers: {
    encode(message: MsgRemoveCollectionMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveCollectionMembers;
    fromJSON(object: any): MsgRemoveCollectionMembers;
    toJSON(message: MsgRemoveCollectionMembers): unknown;
    fromPartial(object: Partial<MsgRemoveCollectionMembers>): MsgRemoveCollectionMembers;
};
export declare const MsgRemoveCollectionMembersResponse: {
    encode(_: MsgRemoveCollectionMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveCollectionMembersResponse;
    fromJSON(_: any): MsgRemoveCollectionMembersResponse;
    toJSON(_: MsgRemoveCollectionMembersResponse): unknown;
    fromPartial(_: Partial<MsgRemoveCollectionMembersResponse>): MsgRemoveCollectionMembersResponse;
};
export declare const MsgUpdateCollectionDisputeConfig: {
    encode(message: MsgUpdateCollectionDisputeConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionDisputeConfig;
    fromJSON(object: any): MsgUpdateCollectionDisputeConfig;
    toJSON(message: MsgUpdateCollectionDisputeConfig): unknown;
    fromPartial(object: Partial<MsgUpdateCollectionDisputeConfig>): MsgUpdateCollectionDisputeConfig;
};
export declare const MsgUpdateCollectionDisputeConfigResponse: {
    encode(_: MsgUpdateCollectionDisputeConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCollectionDisputeConfigResponse;
    fromJSON(_: any): MsgUpdateCollectionDisputeConfigResponse;
    toJSON(_: MsgUpdateCollectionDisputeConfigResponse): unknown;
    fromPartial(_: Partial<MsgUpdateCollectionDisputeConfigResponse>): MsgUpdateCollectionDisputeConfigResponse;
};
export declare const MsgAddPerformanceDeposit: {
    encode(message: MsgAddPerformanceDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPerformanceDeposit;
    fromJSON(object: any): MsgAddPerformanceDeposit;
    toJSON(message: MsgAddPerformanceDeposit): unknown;
    fromPartial(object: Partial<MsgAddPerformanceDeposit>): MsgAddPerformanceDeposit;
};
export declare const MsgAddPerformanceDepositResponse: {
    encode(message: MsgAddPerformanceDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPerformanceDepositResponse;
    fromJSON(object: any): MsgAddPerformanceDepositResponse;
    toJSON(message: MsgAddPerformanceDepositResponse): unknown;
    fromPartial(object: Partial<MsgAddPerformanceDepositResponse>): MsgAddPerformanceDepositResponse;
};
export declare const MsgWithdrawPerformanceDeposit: {
    encode(message: MsgWithdrawPerformanceDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPerformanceDeposit;
    fromJSON(object: any): MsgWithdrawPerformanceDeposit;
    toJSON(message: MsgWithdrawPerformanceDeposit): unknown;
    fromPartial(object: Partial<MsgWithdrawPerformanceDeposit>): MsgWithdrawPerformanceDeposit;
};
export declare const MsgWithdrawPerformanceDepositResponse: {
    encode(message: MsgWithdrawPerformanceDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPerformanceDepositResponse;
    fromJSON(object: any): MsgWithdrawPerformanceDepositResponse;
    toJSON(message: MsgWithdrawPerformanceDepositResponse): unknown;
    fromPartial(object: Partial<MsgWithdrawPerformanceDepositResponse>): MsgWithdrawPerformanceDepositResponse;
};
export declare const MsgAdjudicateDispute: {
    encode(message: MsgAdjudicateDispute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjudicateDispute;
    fromJSON(object: any): MsgAdjudicateDispute;
    toJSON(message: MsgAdjudicateDispute): unknown;
    fromPartial(object: Partial<MsgAdjudicateDispute>): MsgAdjudicateDispute;
};
export declare const MsgAdjudicateDisputeResponse: {
    encode(message: MsgAdjudicateDisputeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjudicateDisputeResponse;
    fromJSON(object: any): MsgAdjudicateDisputeResponse;
    toJSON(message: MsgAdjudicateDisputeResponse): unknown;
    fromPartial(object: Partial<MsgAdjudicateDisputeResponse>): MsgAdjudicateDisputeResponse;
};
