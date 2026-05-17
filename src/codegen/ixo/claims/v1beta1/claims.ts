//@ts-nocheck
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum CollectionState {
  OPEN = 0,
  PAUSED = 1,
  CLOSED = 2,
  UNRECOGNIZED = -1,
}
export const CollectionStateSDKType = CollectionState;
export function collectionStateFromJSON(object: any): CollectionState {
  switch (object) {
    case 0:
    case "OPEN":
      return CollectionState.OPEN;
    case 1:
    case "PAUSED":
      return CollectionState.PAUSED;
    case 2:
    case "CLOSED":
      return CollectionState.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CollectionState.UNRECOGNIZED;
  }
}
export function collectionStateToJSON(object: CollectionState): string {
  switch (object) {
    case CollectionState.OPEN:
      return "OPEN";
    case CollectionState.PAUSED:
      return "PAUSED";
    case CollectionState.CLOSED:
      return "CLOSED";
    case CollectionState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CollectionIntentOptions {
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
  UNRECOGNIZED = -1,
}
export const CollectionIntentOptionsSDKType = CollectionIntentOptions;
export function collectionIntentOptionsFromJSON(object: any): CollectionIntentOptions {
  switch (object) {
    case 0:
    case "ALLOW":
      return CollectionIntentOptions.ALLOW;
    case 1:
    case "DENY":
      return CollectionIntentOptions.DENY;
    case 2:
    case "REQUIRED":
      return CollectionIntentOptions.REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CollectionIntentOptions.UNRECOGNIZED;
  }
}
export function collectionIntentOptionsToJSON(object: CollectionIntentOptions): string {
  switch (object) {
    case CollectionIntentOptions.ALLOW:
      return "ALLOW";
    case CollectionIntentOptions.DENY:
      return "DENY";
    case CollectionIntentOptions.REQUIRED:
      return "REQUIRED";
    case CollectionIntentOptions.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum EvaluationStatus {
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
  UNRECOGNIZED = -1,
}
export const EvaluationStatusSDKType = EvaluationStatus;
export function evaluationStatusFromJSON(object: any): EvaluationStatus {
  switch (object) {
    case 0:
    case "PENDING":
      return EvaluationStatus.PENDING;
    case 1:
    case "APPROVED":
      return EvaluationStatus.APPROVED;
    case 2:
    case "REJECTED":
      return EvaluationStatus.REJECTED;
    case 3:
    case "DISPUTED":
      return EvaluationStatus.DISPUTED;
    case 4:
    case "INVALIDATED":
      return EvaluationStatus.INVALIDATED;
    case 5:
    case "FLAGGED":
      return EvaluationStatus.FLAGGED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EvaluationStatus.UNRECOGNIZED;
  }
}
export function evaluationStatusToJSON(object: EvaluationStatus): string {
  switch (object) {
    case EvaluationStatus.PENDING:
      return "PENDING";
    case EvaluationStatus.APPROVED:
      return "APPROVED";
    case EvaluationStatus.REJECTED:
      return "REJECTED";
    case EvaluationStatus.DISPUTED:
      return "DISPUTED";
    case EvaluationStatus.INVALIDATED:
      return "INVALIDATED";
    case EvaluationStatus.FLAGGED:
      return "FLAGGED";
    case EvaluationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum IntentStatus {
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
  UNRECOGNIZED = -1,
}
export const IntentStatusSDKType = IntentStatus;
export function intentStatusFromJSON(object: any): IntentStatus {
  switch (object) {
    case 0:
    case "ACTIVE":
      return IntentStatus.ACTIVE;
    case 1:
    case "FULFILLED":
      return IntentStatus.FULFILLED;
    case 2:
    case "EXPIRED":
      return IntentStatus.EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IntentStatus.UNRECOGNIZED;
  }
}
export function intentStatusToJSON(object: IntentStatus): string {
  switch (object) {
    case IntentStatus.ACTIVE:
      return "ACTIVE";
    case IntentStatus.FULFILLED:
      return "FULFILLED";
    case IntentStatus.EXPIRED:
      return "EXPIRED";
    case IntentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PaymentType {
  SUBMISSION = 0,
  APPROVAL = 1,
  EVALUATION = 2,
  REJECTION = 3,
  UNRECOGNIZED = -1,
}
export const PaymentTypeSDKType = PaymentType;
export function paymentTypeFromJSON(object: any): PaymentType {
  switch (object) {
    case 0:
    case "SUBMISSION":
      return PaymentType.SUBMISSION;
    case 1:
    case "APPROVAL":
      return PaymentType.APPROVAL;
    case 2:
    case "EVALUATION":
      return PaymentType.EVALUATION;
    case 3:
    case "REJECTION":
      return PaymentType.REJECTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentType.UNRECOGNIZED;
  }
}
export function paymentTypeToJSON(object: PaymentType): string {
  switch (object) {
    case PaymentType.SUBMISSION:
      return "SUBMISSION";
    case PaymentType.APPROVAL:
      return "APPROVAL";
    case PaymentType.EVALUATION:
      return "EVALUATION";
    case PaymentType.REJECTION:
      return "REJECTION";
    case PaymentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PaymentStatus {
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
  UNRECOGNIZED = -1,
}
export const PaymentStatusSDKType = PaymentStatus;
export function paymentStatusFromJSON(object: any): PaymentStatus {
  switch (object) {
    case 0:
    case "NO_PAYMENT":
      return PaymentStatus.NO_PAYMENT;
    case 1:
    case "PROMISED":
      return PaymentStatus.PROMISED;
    case 2:
    case "AUTHORIZED":
      return PaymentStatus.AUTHORIZED;
    case 3:
    case "GUARANTEED":
      return PaymentStatus.GUARANTEED;
    case 4:
    case "PAID":
      return PaymentStatus.PAID;
    case 5:
    case "FAILED":
      return PaymentStatus.FAILED;
    case 6:
    case "DISPUTED_PAYMENT":
      return PaymentStatus.DISPUTED_PAYMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentStatus.UNRECOGNIZED;
  }
}
export function paymentStatusToJSON(object: PaymentStatus): string {
  switch (object) {
    case PaymentStatus.NO_PAYMENT:
      return "NO_PAYMENT";
    case PaymentStatus.PROMISED:
      return "PROMISED";
    case PaymentStatus.AUTHORIZED:
      return "AUTHORIZED";
    case PaymentStatus.GUARANTEED:
      return "GUARANTEED";
    case PaymentStatus.PAID:
      return "PAID";
    case PaymentStatus.FAILED:
      return "FAILED";
    case PaymentStatus.DISPUTED_PAYMENT:
      return "DISPUTED_PAYMENT";
    case PaymentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * DisputeTargetRole identifies which party of a claim a dispute is filed
 * against. A dispute targets exactly one role; to dispute both the submitter
 * and the evaluator of the same claim, file two separate disputes.
 */
export enum DisputeTargetRole {
  DISPUTE_TARGET_ROLE_UNSPECIFIED = 0,
  /** DISPUTE_TARGET_ROLE_SUBMITTER - Submitter: the service agent that submitted the claim */
  DISPUTE_TARGET_ROLE_SUBMITTER = 1,
  /** DISPUTE_TARGET_ROLE_EVALUATOR - Evaluator: the evaluation agent that evaluated the claim */
  DISPUTE_TARGET_ROLE_EVALUATOR = 2,
  UNRECOGNIZED = -1,
}
export const DisputeTargetRoleSDKType = DisputeTargetRole;
export function disputeTargetRoleFromJSON(object: any): DisputeTargetRole {
  switch (object) {
    case 0:
    case "DISPUTE_TARGET_ROLE_UNSPECIFIED":
      return DisputeTargetRole.DISPUTE_TARGET_ROLE_UNSPECIFIED;
    case 1:
    case "DISPUTE_TARGET_ROLE_SUBMITTER":
      return DisputeTargetRole.DISPUTE_TARGET_ROLE_SUBMITTER;
    case 2:
    case "DISPUTE_TARGET_ROLE_EVALUATOR":
      return DisputeTargetRole.DISPUTE_TARGET_ROLE_EVALUATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DisputeTargetRole.UNRECOGNIZED;
  }
}
export function disputeTargetRoleToJSON(object: DisputeTargetRole): string {
  switch (object) {
    case DisputeTargetRole.DISPUTE_TARGET_ROLE_UNSPECIFIED:
      return "DISPUTE_TARGET_ROLE_UNSPECIFIED";
    case DisputeTargetRole.DISPUTE_TARGET_ROLE_SUBMITTER:
      return "DISPUTE_TARGET_ROLE_SUBMITTER";
    case DisputeTargetRole.DISPUTE_TARGET_ROLE_EVALUATOR:
      return "DISPUTE_TARGET_ROLE_EVALUATOR";
    case DisputeTargetRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** DisputeStatus is the lifecycle state of a dispute. */
export enum DisputeStatus {
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
  UNRECOGNIZED = -1,
}
export const DisputeStatusSDKType = DisputeStatus;
export function disputeStatusFromJSON(object: any): DisputeStatus {
  switch (object) {
    case 0:
    case "DISPUTE_STATUS_OPEN":
      return DisputeStatus.DISPUTE_STATUS_OPEN;
    case 1:
    case "DISPUTE_STATUS_AWARDED":
      return DisputeStatus.DISPUTE_STATUS_AWARDED;
    case 2:
    case "DISPUTE_STATUS_DISMISSED":
      return DisputeStatus.DISPUTE_STATUS_DISMISSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DisputeStatus.UNRECOGNIZED;
  }
}
export function disputeStatusToJSON(object: DisputeStatus): string {
  switch (object) {
    case DisputeStatus.DISPUTE_STATUS_OPEN:
      return "DISPUTE_STATUS_OPEN";
    case DisputeStatus.DISPUTE_STATUS_AWARDED:
      return "DISPUTE_STATUS_AWARDED";
    case DisputeStatus.DISPUTE_STATUS_DISMISSED:
      return "DISPUTE_STATUS_DISMISSED";
    case DisputeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
   * adjudicator pin an opinion document (IPFS uri + proof/cid), declare its
   * MIME type, and flag encryption — mirroring how disputers attach evidence
   * at filing time. Replaces the previous free-form `string reason` field
   * (renumbered to 5 here; v7 is unshipped so no migration is required).
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
function createBaseParams(): Params {
  return {
    collectionSequence: Long.UZERO,
    ixoAccount: "",
    networkFeePercentage: "",
    nodeFeePercentage: "",
    intentSequence: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.collectionSequence.isZero()) {
      writer.uint32(8).uint64(message.collectionSequence);
    }
    if (message.ixoAccount !== "") {
      writer.uint32(18).string(message.ixoAccount);
    }
    if (message.networkFeePercentage !== "") {
      writer.uint32(26).string(message.networkFeePercentage);
    }
    if (message.nodeFeePercentage !== "") {
      writer.uint32(34).string(message.nodeFeePercentage);
    }
    if (!message.intentSequence.isZero()) {
      writer.uint32(40).uint64(message.intentSequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionSequence = (reader.uint64() as Long);
          break;
        case 2:
          message.ixoAccount = reader.string();
          break;
        case 3:
          message.networkFeePercentage = reader.string();
          break;
        case 4:
          message.nodeFeePercentage = reader.string();
          break;
        case 5:
          message.intentSequence = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      collectionSequence: isSet(object.collectionSequence) ? Long.fromValue(object.collectionSequence) : Long.UZERO,
      ixoAccount: isSet(object.ixoAccount) ? String(object.ixoAccount) : "",
      networkFeePercentage: isSet(object.networkFeePercentage) ? String(object.networkFeePercentage) : "",
      nodeFeePercentage: isSet(object.nodeFeePercentage) ? String(object.nodeFeePercentage) : "",
      intentSequence: isSet(object.intentSequence) ? Long.fromValue(object.intentSequence) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.collectionSequence !== undefined && (obj.collectionSequence = (message.collectionSequence || Long.UZERO).toString());
    message.ixoAccount !== undefined && (obj.ixoAccount = message.ixoAccount);
    message.networkFeePercentage !== undefined && (obj.networkFeePercentage = message.networkFeePercentage);
    message.nodeFeePercentage !== undefined && (obj.nodeFeePercentage = message.nodeFeePercentage);
    message.intentSequence !== undefined && (obj.intentSequence = (message.intentSequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.collectionSequence = object.collectionSequence !== undefined && object.collectionSequence !== null ? Long.fromValue(object.collectionSequence) : Long.UZERO;
    message.ixoAccount = object.ixoAccount ?? "";
    message.networkFeePercentage = object.networkFeePercentage ?? "";
    message.nodeFeePercentage = object.nodeFeePercentage ?? "";
    message.intentSequence = object.intentSequence !== undefined && object.intentSequence !== null ? Long.fromValue(object.intentSequence) : Long.UZERO;
    return message;
  }
};
function createBaseAdjudicationDid(): AdjudicationDid {
  return {
    did: "",
    rewardPercentage: ""
  };
}
export const AdjudicationDid = {
  encode(message: AdjudicationDid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.rewardPercentage !== "") {
      writer.uint32(18).string(message.rewardPercentage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AdjudicationDid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdjudicationDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.rewardPercentage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AdjudicationDid {
    return {
      did: isSet(object.did) ? String(object.did) : "",
      rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : ""
    };
  },
  toJSON(message: AdjudicationDid): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
    return obj;
  },
  fromPartial(object: Partial<AdjudicationDid>): AdjudicationDid {
    const message = createBaseAdjudicationDid();
    message.did = object.did ?? "";
    message.rewardPercentage = object.rewardPercentage ?? "";
    return message;
  }
};
function createBaseCollection(): Collection {
  return {
    id: "",
    entity: "",
    admin: "",
    protocol: "",
    startDate: undefined,
    endDate: undefined,
    quota: Long.UZERO,
    count: Long.UZERO,
    evaluated: Long.UZERO,
    approved: Long.UZERO,
    rejected: Long.UZERO,
    disputed: Long.UZERO,
    state: 0,
    payments: undefined,
    signer: "",
    invalidated: Long.UZERO,
    escrowAccount: "",
    intents: 0,
    flagged: Long.UZERO,
    flaggedActive: Long.UZERO,
    serviceAgentDepositRequired: [],
    evaluatorDepositRequired: [],
    disputeDepositAmount: [],
    penaltyAmountPerDispute: [],
    disputesOpen: Long.UZERO,
    disputesAwarded: Long.UZERO,
    disputesDismissed: Long.UZERO,
    minDepositPeriod: undefined,
    adjudicators: []
  };
}
export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.entity !== "") {
      writer.uint32(18).string(message.entity);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.protocol !== "") {
      writer.uint32(34).string(message.protocol);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(42).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(50).fork()).ldelim();
    }
    if (!message.quota.isZero()) {
      writer.uint32(56).uint64(message.quota);
    }
    if (!message.count.isZero()) {
      writer.uint32(64).uint64(message.count);
    }
    if (!message.evaluated.isZero()) {
      writer.uint32(72).uint64(message.evaluated);
    }
    if (!message.approved.isZero()) {
      writer.uint32(80).uint64(message.approved);
    }
    if (!message.rejected.isZero()) {
      writer.uint32(88).uint64(message.rejected);
    }
    if (!message.disputed.isZero()) {
      writer.uint32(96).uint64(message.disputed);
    }
    if (message.state !== 0) {
      writer.uint32(104).int32(message.state);
    }
    if (message.payments !== undefined) {
      Payments.encode(message.payments, writer.uint32(114).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(122).string(message.signer);
    }
    if (!message.invalidated.isZero()) {
      writer.uint32(128).uint64(message.invalidated);
    }
    if (message.escrowAccount !== "") {
      writer.uint32(138).string(message.escrowAccount);
    }
    if (message.intents !== 0) {
      writer.uint32(144).int32(message.intents);
    }
    if (!message.flagged.isZero()) {
      writer.uint32(152).uint64(message.flagged);
    }
    if (!message.flaggedActive.isZero()) {
      writer.uint32(160).uint64(message.flaggedActive);
    }
    for (const v of message.serviceAgentDepositRequired) {
      Coin.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.evaluatorDepositRequired) {
      Coin.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.disputeDepositAmount) {
      Coin.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.penaltyAmountPerDispute) {
      Coin.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (!message.disputesOpen.isZero()) {
      writer.uint32(200).uint64(message.disputesOpen);
    }
    if (!message.disputesAwarded.isZero()) {
      writer.uint32(208).uint64(message.disputesAwarded);
    }
    if (!message.disputesDismissed.isZero()) {
      writer.uint32(216).uint64(message.disputesDismissed);
    }
    if (message.minDepositPeriod !== undefined) {
      Duration.encode(message.minDepositPeriod, writer.uint32(226).fork()).ldelim();
    }
    for (const v of message.adjudicators) {
      AdjudicationDid.encode(v!, writer.uint32(234).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.entity = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.protocol = reader.string();
          break;
        case 5:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.quota = (reader.uint64() as Long);
          break;
        case 8:
          message.count = (reader.uint64() as Long);
          break;
        case 9:
          message.evaluated = (reader.uint64() as Long);
          break;
        case 10:
          message.approved = (reader.uint64() as Long);
          break;
        case 11:
          message.rejected = (reader.uint64() as Long);
          break;
        case 12:
          message.disputed = (reader.uint64() as Long);
          break;
        case 13:
          message.state = (reader.int32() as any);
          break;
        case 14:
          message.payments = Payments.decode(reader, reader.uint32());
          break;
        case 15:
          message.signer = reader.string();
          break;
        case 16:
          message.invalidated = (reader.uint64() as Long);
          break;
        case 17:
          message.escrowAccount = reader.string();
          break;
        case 18:
          message.intents = (reader.int32() as any);
          break;
        case 19:
          message.flagged = (reader.uint64() as Long);
          break;
        case 20:
          message.flaggedActive = (reader.uint64() as Long);
          break;
        case 21:
          message.serviceAgentDepositRequired.push(Coin.decode(reader, reader.uint32()));
          break;
        case 22:
          message.evaluatorDepositRequired.push(Coin.decode(reader, reader.uint32()));
          break;
        case 23:
          message.disputeDepositAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 24:
          message.penaltyAmountPerDispute.push(Coin.decode(reader, reader.uint32()));
          break;
        case 25:
          message.disputesOpen = (reader.uint64() as Long);
          break;
        case 26:
          message.disputesAwarded = (reader.uint64() as Long);
          break;
        case 27:
          message.disputesDismissed = (reader.uint64() as Long);
          break;
        case 28:
          message.minDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 29:
          message.adjudicators.push(AdjudicationDid.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Collection {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      entity: isSet(object.entity) ? String(object.entity) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      quota: isSet(object.quota) ? Long.fromValue(object.quota) : Long.UZERO,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
      evaluated: isSet(object.evaluated) ? Long.fromValue(object.evaluated) : Long.UZERO,
      approved: isSet(object.approved) ? Long.fromValue(object.approved) : Long.UZERO,
      rejected: isSet(object.rejected) ? Long.fromValue(object.rejected) : Long.UZERO,
      disputed: isSet(object.disputed) ? Long.fromValue(object.disputed) : Long.UZERO,
      state: isSet(object.state) ? collectionStateFromJSON(object.state) : 0,
      payments: isSet(object.payments) ? Payments.fromJSON(object.payments) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
      invalidated: isSet(object.invalidated) ? Long.fromValue(object.invalidated) : Long.UZERO,
      escrowAccount: isSet(object.escrowAccount) ? String(object.escrowAccount) : "",
      intents: isSet(object.intents) ? collectionIntentOptionsFromJSON(object.intents) : 0,
      flagged: isSet(object.flagged) ? Long.fromValue(object.flagged) : Long.UZERO,
      flaggedActive: isSet(object.flaggedActive) ? Long.fromValue(object.flaggedActive) : Long.UZERO,
      serviceAgentDepositRequired: Array.isArray(object?.serviceAgentDepositRequired) ? object.serviceAgentDepositRequired.map((e: any) => Coin.fromJSON(e)) : [],
      evaluatorDepositRequired: Array.isArray(object?.evaluatorDepositRequired) ? object.evaluatorDepositRequired.map((e: any) => Coin.fromJSON(e)) : [],
      disputeDepositAmount: Array.isArray(object?.disputeDepositAmount) ? object.disputeDepositAmount.map((e: any) => Coin.fromJSON(e)) : [],
      penaltyAmountPerDispute: Array.isArray(object?.penaltyAmountPerDispute) ? object.penaltyAmountPerDispute.map((e: any) => Coin.fromJSON(e)) : [],
      disputesOpen: isSet(object.disputesOpen) ? Long.fromValue(object.disputesOpen) : Long.UZERO,
      disputesAwarded: isSet(object.disputesAwarded) ? Long.fromValue(object.disputesAwarded) : Long.UZERO,
      disputesDismissed: isSet(object.disputesDismissed) ? Long.fromValue(object.disputesDismissed) : Long.UZERO,
      minDepositPeriod: isSet(object.minDepositPeriod) ? Duration.fromJSON(object.minDepositPeriod) : undefined,
      adjudicators: Array.isArray(object?.adjudicators) ? object.adjudicators.map((e: any) => AdjudicationDid.fromJSON(e)) : []
    };
  },
  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.entity !== undefined && (obj.entity = message.entity);
    message.admin !== undefined && (obj.admin = message.admin);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.quota !== undefined && (obj.quota = (message.quota || Long.UZERO).toString());
    message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
    message.evaluated !== undefined && (obj.evaluated = (message.evaluated || Long.UZERO).toString());
    message.approved !== undefined && (obj.approved = (message.approved || Long.UZERO).toString());
    message.rejected !== undefined && (obj.rejected = (message.rejected || Long.UZERO).toString());
    message.disputed !== undefined && (obj.disputed = (message.disputed || Long.UZERO).toString());
    message.state !== undefined && (obj.state = collectionStateToJSON(message.state));
    message.payments !== undefined && (obj.payments = message.payments ? Payments.toJSON(message.payments) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    message.invalidated !== undefined && (obj.invalidated = (message.invalidated || Long.UZERO).toString());
    message.escrowAccount !== undefined && (obj.escrowAccount = message.escrowAccount);
    message.intents !== undefined && (obj.intents = collectionIntentOptionsToJSON(message.intents));
    message.flagged !== undefined && (obj.flagged = (message.flagged || Long.UZERO).toString());
    message.flaggedActive !== undefined && (obj.flaggedActive = (message.flaggedActive || Long.UZERO).toString());
    if (message.serviceAgentDepositRequired) {
      obj.serviceAgentDepositRequired = message.serviceAgentDepositRequired.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceAgentDepositRequired = [];
    }
    if (message.evaluatorDepositRequired) {
      obj.evaluatorDepositRequired = message.evaluatorDepositRequired.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.evaluatorDepositRequired = [];
    }
    if (message.disputeDepositAmount) {
      obj.disputeDepositAmount = message.disputeDepositAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.disputeDepositAmount = [];
    }
    if (message.penaltyAmountPerDispute) {
      obj.penaltyAmountPerDispute = message.penaltyAmountPerDispute.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.penaltyAmountPerDispute = [];
    }
    message.disputesOpen !== undefined && (obj.disputesOpen = (message.disputesOpen || Long.UZERO).toString());
    message.disputesAwarded !== undefined && (obj.disputesAwarded = (message.disputesAwarded || Long.UZERO).toString());
    message.disputesDismissed !== undefined && (obj.disputesDismissed = (message.disputesDismissed || Long.UZERO).toString());
    message.minDepositPeriod !== undefined && (obj.minDepositPeriod = message.minDepositPeriod ? Duration.toJSON(message.minDepositPeriod) : undefined);
    if (message.adjudicators) {
      obj.adjudicators = message.adjudicators.map(e => e ? AdjudicationDid.toJSON(e) : undefined);
    } else {
      obj.adjudicators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Collection>): Collection {
    const message = createBaseCollection();
    message.id = object.id ?? "";
    message.entity = object.entity ?? "";
    message.admin = object.admin ?? "";
    message.protocol = object.protocol ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Long.fromValue(object.quota) : Long.UZERO;
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    message.evaluated = object.evaluated !== undefined && object.evaluated !== null ? Long.fromValue(object.evaluated) : Long.UZERO;
    message.approved = object.approved !== undefined && object.approved !== null ? Long.fromValue(object.approved) : Long.UZERO;
    message.rejected = object.rejected !== undefined && object.rejected !== null ? Long.fromValue(object.rejected) : Long.UZERO;
    message.disputed = object.disputed !== undefined && object.disputed !== null ? Long.fromValue(object.disputed) : Long.UZERO;
    message.state = object.state ?? 0;
    message.payments = object.payments !== undefined && object.payments !== null ? Payments.fromPartial(object.payments) : undefined;
    message.signer = object.signer ?? "";
    message.invalidated = object.invalidated !== undefined && object.invalidated !== null ? Long.fromValue(object.invalidated) : Long.UZERO;
    message.escrowAccount = object.escrowAccount ?? "";
    message.intents = object.intents ?? 0;
    message.flagged = object.flagged !== undefined && object.flagged !== null ? Long.fromValue(object.flagged) : Long.UZERO;
    message.flaggedActive = object.flaggedActive !== undefined && object.flaggedActive !== null ? Long.fromValue(object.flaggedActive) : Long.UZERO;
    message.serviceAgentDepositRequired = object.serviceAgentDepositRequired?.map(e => Coin.fromPartial(e)) || [];
    message.evaluatorDepositRequired = object.evaluatorDepositRequired?.map(e => Coin.fromPartial(e)) || [];
    message.disputeDepositAmount = object.disputeDepositAmount?.map(e => Coin.fromPartial(e)) || [];
    message.penaltyAmountPerDispute = object.penaltyAmountPerDispute?.map(e => Coin.fromPartial(e)) || [];
    message.disputesOpen = object.disputesOpen !== undefined && object.disputesOpen !== null ? Long.fromValue(object.disputesOpen) : Long.UZERO;
    message.disputesAwarded = object.disputesAwarded !== undefined && object.disputesAwarded !== null ? Long.fromValue(object.disputesAwarded) : Long.UZERO;
    message.disputesDismissed = object.disputesDismissed !== undefined && object.disputesDismissed !== null ? Long.fromValue(object.disputesDismissed) : Long.UZERO;
    message.minDepositPeriod = object.minDepositPeriod !== undefined && object.minDepositPeriod !== null ? Duration.fromPartial(object.minDepositPeriod) : undefined;
    message.adjudicators = object.adjudicators?.map(e => AdjudicationDid.fromPartial(e)) || [];
    return message;
  }
};
function createBasePayments(): Payments {
  return {
    submission: undefined,
    evaluation: undefined,
    approval: undefined,
    rejection: undefined
  };
}
export const Payments = {
  encode(message: Payments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submission !== undefined) {
      Payment.encode(message.submission, writer.uint32(10).fork()).ldelim();
    }
    if (message.evaluation !== undefined) {
      Payment.encode(message.evaluation, writer.uint32(18).fork()).ldelim();
    }
    if (message.approval !== undefined) {
      Payment.encode(message.approval, writer.uint32(26).fork()).ldelim();
    }
    if (message.rejection !== undefined) {
      Payment.encode(message.rejection, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Payments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submission = Payment.decode(reader, reader.uint32());
          break;
        case 2:
          message.evaluation = Payment.decode(reader, reader.uint32());
          break;
        case 3:
          message.approval = Payment.decode(reader, reader.uint32());
          break;
        case 4:
          message.rejection = Payment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Payments {
    return {
      submission: isSet(object.submission) ? Payment.fromJSON(object.submission) : undefined,
      evaluation: isSet(object.evaluation) ? Payment.fromJSON(object.evaluation) : undefined,
      approval: isSet(object.approval) ? Payment.fromJSON(object.approval) : undefined,
      rejection: isSet(object.rejection) ? Payment.fromJSON(object.rejection) : undefined
    };
  },
  toJSON(message: Payments): unknown {
    const obj: any = {};
    message.submission !== undefined && (obj.submission = message.submission ? Payment.toJSON(message.submission) : undefined);
    message.evaluation !== undefined && (obj.evaluation = message.evaluation ? Payment.toJSON(message.evaluation) : undefined);
    message.approval !== undefined && (obj.approval = message.approval ? Payment.toJSON(message.approval) : undefined);
    message.rejection !== undefined && (obj.rejection = message.rejection ? Payment.toJSON(message.rejection) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Payments>): Payments {
    const message = createBasePayments();
    message.submission = object.submission !== undefined && object.submission !== null ? Payment.fromPartial(object.submission) : undefined;
    message.evaluation = object.evaluation !== undefined && object.evaluation !== null ? Payment.fromPartial(object.evaluation) : undefined;
    message.approval = object.approval !== undefined && object.approval !== null ? Payment.fromPartial(object.approval) : undefined;
    message.rejection = object.rejection !== undefined && object.rejection !== null ? Payment.fromPartial(object.rejection) : undefined;
    return message;
  }
};
function createBasePayment(): Payment {
  return {
    account: "",
    amount: [],
    contract_1155Payment: undefined,
    timeoutNs: undefined,
    cw20Payment: [],
    isOraclePayment: false,
    cw1155Payment: []
  };
}
export const Payment = {
  encode(message: Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.contract_1155Payment !== undefined) {
      Contract1155Payment.encode(message.contract_1155Payment, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeoutNs !== undefined) {
      Duration.encode(message.timeoutNs, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cw20Payment) {
      CW20Payment.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.isOraclePayment === true) {
      writer.uint32(48).bool(message.isOraclePayment);
    }
    for (const v of message.cw1155Payment) {
      CW1155Payment.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contract_1155Payment = Contract1155Payment.decode(reader, reader.uint32());
          break;
        case 4:
          message.timeoutNs = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.cw20Payment.push(CW20Payment.decode(reader, reader.uint32()));
          break;
        case 6:
          message.isOraclePayment = reader.bool();
          break;
        case 7:
          message.cw1155Payment.push(CW1155Payment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Payment {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      contract_1155Payment: isSet(object.contract_1155Payment) ? Contract1155Payment.fromJSON(object.contract_1155Payment) : undefined,
      timeoutNs: isSet(object.timeoutNs) ? Duration.fromJSON(object.timeoutNs) : undefined,
      cw20Payment: Array.isArray(object?.cw20Payment) ? object.cw20Payment.map((e: any) => CW20Payment.fromJSON(e)) : [],
      isOraclePayment: isSet(object.isOraclePayment) ? Boolean(object.isOraclePayment) : false,
      cw1155Payment: Array.isArray(object?.cw1155Payment) ? object.cw1155Payment.map((e: any) => CW1155Payment.fromJSON(e)) : []
    };
  },
  toJSON(message: Payment): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.contract_1155Payment !== undefined && (obj.contract_1155Payment = message.contract_1155Payment ? Contract1155Payment.toJSON(message.contract_1155Payment) : undefined);
    message.timeoutNs !== undefined && (obj.timeoutNs = message.timeoutNs ? Duration.toJSON(message.timeoutNs) : undefined);
    if (message.cw20Payment) {
      obj.cw20Payment = message.cw20Payment.map(e => e ? CW20Payment.toJSON(e) : undefined);
    } else {
      obj.cw20Payment = [];
    }
    message.isOraclePayment !== undefined && (obj.isOraclePayment = message.isOraclePayment);
    if (message.cw1155Payment) {
      obj.cw1155Payment = message.cw1155Payment.map(e => e ? CW1155Payment.toJSON(e) : undefined);
    } else {
      obj.cw1155Payment = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Payment>): Payment {
    const message = createBasePayment();
    message.account = object.account ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.contract_1155Payment = object.contract_1155Payment !== undefined && object.contract_1155Payment !== null ? Contract1155Payment.fromPartial(object.contract_1155Payment) : undefined;
    message.timeoutNs = object.timeoutNs !== undefined && object.timeoutNs !== null ? Duration.fromPartial(object.timeoutNs) : undefined;
    message.cw20Payment = object.cw20Payment?.map(e => CW20Payment.fromPartial(e)) || [];
    message.isOraclePayment = object.isOraclePayment ?? false;
    message.cw1155Payment = object.cw1155Payment?.map(e => CW1155Payment.fromPartial(e)) || [];
    return message;
  }
};
function createBaseContract1155Payment(): Contract1155Payment {
  return {
    address: "",
    tokenId: "",
    amount: 0
  };
}
export const Contract1155Payment = {
  encode(message: Contract1155Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint32(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Contract1155Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract1155Payment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.amount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Contract1155Payment {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0
    };
  },
  toJSON(message: Contract1155Payment): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },
  fromPartial(object: Partial<Contract1155Payment>): Contract1155Payment {
    const message = createBaseContract1155Payment();
    message.address = object.address ?? "";
    message.tokenId = object.tokenId ?? "";
    message.amount = object.amount ?? 0;
    return message;
  }
};
function createBaseCW1155Payment(): CW1155Payment {
  return {
    address: "",
    tokenId: [],
    amount: Long.UZERO
  };
}
export const CW1155Payment = {
  encode(message: CW1155Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CW1155Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCW1155Payment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        case 3:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CW1155Payment {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokenId: Array.isArray(object?.tokenId) ? object.tokenId.map((e: any) => String(e)) : [],
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: CW1155Payment): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = [];
    }
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<CW1155Payment>): CW1155Payment {
    const message = createBaseCW1155Payment();
    message.address = object.address ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseCW1155IntentPayment(): CW1155IntentPayment {
  return {
    address: "",
    tokens: []
  };
}
export const CW1155IntentPayment = {
  encode(message: CW1155IntentPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.tokens) {
      CW1155IntentPaymentToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CW1155IntentPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCW1155IntentPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokens.push(CW1155IntentPaymentToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CW1155IntentPayment {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => CW1155IntentPaymentToken.fromJSON(e)) : []
    };
  },
  toJSON(message: CW1155IntentPayment): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? CW1155IntentPaymentToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CW1155IntentPayment>): CW1155IntentPayment {
    const message = createBaseCW1155IntentPayment();
    message.address = object.address ?? "";
    message.tokens = object.tokens?.map(e => CW1155IntentPaymentToken.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCW1155IntentPaymentToken(): CW1155IntentPaymentToken {
  return {
    tokenId: "",
    amount: Long.UZERO
  };
}
export const CW1155IntentPaymentToken = {
  encode(message: CW1155IntentPaymentToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CW1155IntentPaymentToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCW1155IntentPaymentToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CW1155IntentPaymentToken {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: CW1155IntentPaymentToken): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<CW1155IntentPaymentToken>): CW1155IntentPaymentToken {
    const message = createBaseCW1155IntentPaymentToken();
    message.tokenId = object.tokenId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseCW20Payment(): CW20Payment {
  return {
    address: "",
    amount: Long.UZERO
  };
}
export const CW20Payment = {
  encode(message: CW20Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CW20Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCW20Payment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 3:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CW20Payment {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: CW20Payment): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<CW20Payment>): CW20Payment {
    const message = createBaseCW20Payment();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseCW20Output(): CW20Output {
  return {
    address: "",
    contractAddress: "",
    amount: Long.UZERO
  };
}
export const CW20Output = {
  encode(message: CW20Output, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CW20Output {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCW20Output();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CW20Output {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: CW20Output): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<CW20Output>): CW20Output {
    const message = createBaseCW20Output();
    message.address = object.address ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseClaim(): Claim {
  return {
    collectionId: "",
    agentDid: "",
    agentAddress: "",
    submissionDate: undefined,
    claimId: "",
    evaluation: undefined,
    paymentsStatus: undefined,
    useIntent: false,
    amount: [],
    cw20Payment: [],
    cw1155Payment: [],
    cw1155IntentPayment: [],
    memberAddress: "",
    evaluationHistory: []
  };
}
export const Claim = {
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.agentDid !== "") {
      writer.uint32(18).string(message.agentDid);
    }
    if (message.agentAddress !== "") {
      writer.uint32(26).string(message.agentAddress);
    }
    if (message.submissionDate !== undefined) {
      Timestamp.encode(message.submissionDate, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimId !== "") {
      writer.uint32(42).string(message.claimId);
    }
    if (message.evaluation !== undefined) {
      Evaluation.encode(message.evaluation, writer.uint32(50).fork()).ldelim();
    }
    if (message.paymentsStatus !== undefined) {
      ClaimPayments.encode(message.paymentsStatus, writer.uint32(58).fork()).ldelim();
    }
    if (message.useIntent === true) {
      writer.uint32(64).bool(message.useIntent);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.cw20Payment) {
      CW20Payment.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.cw1155Payment) {
      CW1155Payment.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.cw1155IntentPayment) {
      CW1155IntentPayment.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.memberAddress !== "") {
      writer.uint32(106).string(message.memberAddress);
    }
    for (const v of message.evaluationHistory) {
      Evaluation.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.agentDid = reader.string();
          break;
        case 3:
          message.agentAddress = reader.string();
          break;
        case 4:
          message.submissionDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.claimId = reader.string();
          break;
        case 6:
          message.evaluation = Evaluation.decode(reader, reader.uint32());
          break;
        case 7:
          message.paymentsStatus = ClaimPayments.decode(reader, reader.uint32());
          break;
        case 8:
          message.useIntent = reader.bool();
          break;
        case 9:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.cw20Payment.push(CW20Payment.decode(reader, reader.uint32()));
          break;
        case 11:
          message.cw1155Payment.push(CW1155Payment.decode(reader, reader.uint32()));
          break;
        case 12:
          message.cw1155IntentPayment.push(CW1155IntentPayment.decode(reader, reader.uint32()));
          break;
        case 13:
          message.memberAddress = reader.string();
          break;
        case 14:
          message.evaluationHistory.push(Evaluation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Claim {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      agentDid: isSet(object.agentDid) ? String(object.agentDid) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      submissionDate: isSet(object.submissionDate) ? fromJsonTimestamp(object.submissionDate) : undefined,
      claimId: isSet(object.claimId) ? String(object.claimId) : "",
      evaluation: isSet(object.evaluation) ? Evaluation.fromJSON(object.evaluation) : undefined,
      paymentsStatus: isSet(object.paymentsStatus) ? ClaimPayments.fromJSON(object.paymentsStatus) : undefined,
      useIntent: isSet(object.useIntent) ? Boolean(object.useIntent) : false,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      cw20Payment: Array.isArray(object?.cw20Payment) ? object.cw20Payment.map((e: any) => CW20Payment.fromJSON(e)) : [],
      cw1155Payment: Array.isArray(object?.cw1155Payment) ? object.cw1155Payment.map((e: any) => CW1155Payment.fromJSON(e)) : [],
      cw1155IntentPayment: Array.isArray(object?.cw1155IntentPayment) ? object.cw1155IntentPayment.map((e: any) => CW1155IntentPayment.fromJSON(e)) : [],
      memberAddress: isSet(object.memberAddress) ? String(object.memberAddress) : "",
      evaluationHistory: Array.isArray(object?.evaluationHistory) ? object.evaluationHistory.map((e: any) => Evaluation.fromJSON(e)) : []
    };
  },
  toJSON(message: Claim): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.agentDid !== undefined && (obj.agentDid = message.agentDid);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.submissionDate !== undefined && (obj.submissionDate = fromTimestamp(message.submissionDate).toISOString());
    message.claimId !== undefined && (obj.claimId = message.claimId);
    message.evaluation !== undefined && (obj.evaluation = message.evaluation ? Evaluation.toJSON(message.evaluation) : undefined);
    message.paymentsStatus !== undefined && (obj.paymentsStatus = message.paymentsStatus ? ClaimPayments.toJSON(message.paymentsStatus) : undefined);
    message.useIntent !== undefined && (obj.useIntent = message.useIntent);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    if (message.cw20Payment) {
      obj.cw20Payment = message.cw20Payment.map(e => e ? CW20Payment.toJSON(e) : undefined);
    } else {
      obj.cw20Payment = [];
    }
    if (message.cw1155Payment) {
      obj.cw1155Payment = message.cw1155Payment.map(e => e ? CW1155Payment.toJSON(e) : undefined);
    } else {
      obj.cw1155Payment = [];
    }
    if (message.cw1155IntentPayment) {
      obj.cw1155IntentPayment = message.cw1155IntentPayment.map(e => e ? CW1155IntentPayment.toJSON(e) : undefined);
    } else {
      obj.cw1155IntentPayment = [];
    }
    message.memberAddress !== undefined && (obj.memberAddress = message.memberAddress);
    if (message.evaluationHistory) {
      obj.evaluationHistory = message.evaluationHistory.map(e => e ? Evaluation.toJSON(e) : undefined);
    } else {
      obj.evaluationHistory = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Claim>): Claim {
    const message = createBaseClaim();
    message.collectionId = object.collectionId ?? "";
    message.agentDid = object.agentDid ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.submissionDate = object.submissionDate !== undefined && object.submissionDate !== null ? Timestamp.fromPartial(object.submissionDate) : undefined;
    message.claimId = object.claimId ?? "";
    message.evaluation = object.evaluation !== undefined && object.evaluation !== null ? Evaluation.fromPartial(object.evaluation) : undefined;
    message.paymentsStatus = object.paymentsStatus !== undefined && object.paymentsStatus !== null ? ClaimPayments.fromPartial(object.paymentsStatus) : undefined;
    message.useIntent = object.useIntent ?? false;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.cw20Payment = object.cw20Payment?.map(e => CW20Payment.fromPartial(e)) || [];
    message.cw1155Payment = object.cw1155Payment?.map(e => CW1155Payment.fromPartial(e)) || [];
    message.cw1155IntentPayment = object.cw1155IntentPayment?.map(e => CW1155IntentPayment.fromPartial(e)) || [];
    message.memberAddress = object.memberAddress ?? "";
    message.evaluationHistory = object.evaluationHistory?.map(e => Evaluation.fromPartial(e)) || [];
    return message;
  }
};
function createBaseClaimPayments(): ClaimPayments {
  return {
    submission: 0,
    evaluation: 0,
    approval: 0,
    rejection: 0
  };
}
export const ClaimPayments = {
  encode(message: ClaimPayments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submission !== 0) {
      writer.uint32(8).int32(message.submission);
    }
    if (message.evaluation !== 0) {
      writer.uint32(16).int32(message.evaluation);
    }
    if (message.approval !== 0) {
      writer.uint32(24).int32(message.approval);
    }
    if (message.rejection !== 0) {
      writer.uint32(32).int32(message.rejection);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimPayments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimPayments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submission = (reader.int32() as any);
          break;
        case 2:
          message.evaluation = (reader.int32() as any);
          break;
        case 3:
          message.approval = (reader.int32() as any);
          break;
        case 4:
          message.rejection = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimPayments {
    return {
      submission: isSet(object.submission) ? paymentStatusFromJSON(object.submission) : 0,
      evaluation: isSet(object.evaluation) ? paymentStatusFromJSON(object.evaluation) : 0,
      approval: isSet(object.approval) ? paymentStatusFromJSON(object.approval) : 0,
      rejection: isSet(object.rejection) ? paymentStatusFromJSON(object.rejection) : 0
    };
  },
  toJSON(message: ClaimPayments): unknown {
    const obj: any = {};
    message.submission !== undefined && (obj.submission = paymentStatusToJSON(message.submission));
    message.evaluation !== undefined && (obj.evaluation = paymentStatusToJSON(message.evaluation));
    message.approval !== undefined && (obj.approval = paymentStatusToJSON(message.approval));
    message.rejection !== undefined && (obj.rejection = paymentStatusToJSON(message.rejection));
    return obj;
  },
  fromPartial(object: Partial<ClaimPayments>): ClaimPayments {
    const message = createBaseClaimPayments();
    message.submission = object.submission ?? 0;
    message.evaluation = object.evaluation ?? 0;
    message.approval = object.approval ?? 0;
    message.rejection = object.rejection ?? 0;
    return message;
  }
};
function createBaseEvaluation(): Evaluation {
  return {
    claimId: "",
    collectionId: "",
    oracle: "",
    agentDid: "",
    agentAddress: "",
    status: 0,
    reason: 0,
    verificationProof: "",
    evaluationDate: undefined,
    amount: [],
    cw20Payment: [],
    cw1155Payment: [],
    cw1155IntentPayment: []
  };
}
export const Evaluation = {
  encode(message: Evaluation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimId !== "") {
      writer.uint32(10).string(message.claimId);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.oracle !== "") {
      writer.uint32(26).string(message.oracle);
    }
    if (message.agentDid !== "") {
      writer.uint32(34).string(message.agentDid);
    }
    if (message.agentAddress !== "") {
      writer.uint32(42).string(message.agentAddress);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.reason !== 0) {
      writer.uint32(56).uint32(message.reason);
    }
    if (message.verificationProof !== "") {
      writer.uint32(66).string(message.verificationProof);
    }
    if (message.evaluationDate !== undefined) {
      Timestamp.encode(message.evaluationDate, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.cw20Payment) {
      CW20Payment.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.cw1155Payment) {
      CW1155Payment.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.cw1155IntentPayment) {
      CW1155IntentPayment.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Evaluation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvaluation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimId = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.oracle = reader.string();
          break;
        case 4:
          message.agentDid = reader.string();
          break;
        case 5:
          message.agentAddress = reader.string();
          break;
        case 6:
          message.status = (reader.int32() as any);
          break;
        case 7:
          message.reason = reader.uint32();
          break;
        case 8:
          message.verificationProof = reader.string();
          break;
        case 9:
          message.evaluationDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.cw20Payment.push(CW20Payment.decode(reader, reader.uint32()));
          break;
        case 12:
          message.cw1155Payment.push(CW1155Payment.decode(reader, reader.uint32()));
          break;
        case 13:
          message.cw1155IntentPayment.push(CW1155IntentPayment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Evaluation {
    return {
      claimId: isSet(object.claimId) ? String(object.claimId) : "",
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      oracle: isSet(object.oracle) ? String(object.oracle) : "",
      agentDid: isSet(object.agentDid) ? String(object.agentDid) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      status: isSet(object.status) ? evaluationStatusFromJSON(object.status) : 0,
      reason: isSet(object.reason) ? Number(object.reason) : 0,
      verificationProof: isSet(object.verificationProof) ? String(object.verificationProof) : "",
      evaluationDate: isSet(object.evaluationDate) ? fromJsonTimestamp(object.evaluationDate) : undefined,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      cw20Payment: Array.isArray(object?.cw20Payment) ? object.cw20Payment.map((e: any) => CW20Payment.fromJSON(e)) : [],
      cw1155Payment: Array.isArray(object?.cw1155Payment) ? object.cw1155Payment.map((e: any) => CW1155Payment.fromJSON(e)) : [],
      cw1155IntentPayment: Array.isArray(object?.cw1155IntentPayment) ? object.cw1155IntentPayment.map((e: any) => CW1155IntentPayment.fromJSON(e)) : []
    };
  },
  toJSON(message: Evaluation): unknown {
    const obj: any = {};
    message.claimId !== undefined && (obj.claimId = message.claimId);
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    message.agentDid !== undefined && (obj.agentDid = message.agentDid);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.status !== undefined && (obj.status = evaluationStatusToJSON(message.status));
    message.reason !== undefined && (obj.reason = Math.round(message.reason));
    message.verificationProof !== undefined && (obj.verificationProof = message.verificationProof);
    message.evaluationDate !== undefined && (obj.evaluationDate = fromTimestamp(message.evaluationDate).toISOString());
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    if (message.cw20Payment) {
      obj.cw20Payment = message.cw20Payment.map(e => e ? CW20Payment.toJSON(e) : undefined);
    } else {
      obj.cw20Payment = [];
    }
    if (message.cw1155Payment) {
      obj.cw1155Payment = message.cw1155Payment.map(e => e ? CW1155Payment.toJSON(e) : undefined);
    } else {
      obj.cw1155Payment = [];
    }
    if (message.cw1155IntentPayment) {
      obj.cw1155IntentPayment = message.cw1155IntentPayment.map(e => e ? CW1155IntentPayment.toJSON(e) : undefined);
    } else {
      obj.cw1155IntentPayment = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Evaluation>): Evaluation {
    const message = createBaseEvaluation();
    message.claimId = object.claimId ?? "";
    message.collectionId = object.collectionId ?? "";
    message.oracle = object.oracle ?? "";
    message.agentDid = object.agentDid ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.status = object.status ?? 0;
    message.reason = object.reason ?? 0;
    message.verificationProof = object.verificationProof ?? "";
    message.evaluationDate = object.evaluationDate !== undefined && object.evaluationDate !== null ? Timestamp.fromPartial(object.evaluationDate) : undefined;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.cw20Payment = object.cw20Payment?.map(e => CW20Payment.fromPartial(e)) || [];
    message.cw1155Payment = object.cw1155Payment?.map(e => CW1155Payment.fromPartial(e)) || [];
    message.cw1155IntentPayment = object.cw1155IntentPayment?.map(e => CW1155IntentPayment.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDispute(): Dispute {
  return {
    subjectId: "",
    type: 0,
    data: undefined,
    targetRole: 0,
    disputerAddress: "",
    disputerDid: "",
    disputeDeposit: [],
    submittedAt: undefined,
    status: 0,
    resolution: undefined
  };
}
export const Dispute = {
  encode(message: Dispute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.data !== undefined) {
      DisputeData.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    if (message.targetRole !== 0) {
      writer.uint32(32).int32(message.targetRole);
    }
    if (message.disputerAddress !== "") {
      writer.uint32(42).string(message.disputerAddress);
    }
    if (message.disputerDid !== "") {
      writer.uint32(50).string(message.disputerDid);
    }
    for (const v of message.disputeDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.submittedAt !== undefined) {
      Timestamp.encode(message.submittedAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.resolution !== undefined) {
      DisputeResolution.encode(message.resolution, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Dispute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDispute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 2:
          message.type = reader.int32();
          break;
        case 3:
          message.data = DisputeData.decode(reader, reader.uint32());
          break;
        case 4:
          message.targetRole = (reader.int32() as any);
          break;
        case 5:
          message.disputerAddress = reader.string();
          break;
        case 6:
          message.disputerDid = reader.string();
          break;
        case 7:
          message.disputeDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.submittedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.status = (reader.int32() as any);
          break;
        case 10:
          message.resolution = DisputeResolution.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Dispute {
    return {
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : "",
      type: isSet(object.type) ? Number(object.type) : 0,
      data: isSet(object.data) ? DisputeData.fromJSON(object.data) : undefined,
      targetRole: isSet(object.targetRole) ? disputeTargetRoleFromJSON(object.targetRole) : 0,
      disputerAddress: isSet(object.disputerAddress) ? String(object.disputerAddress) : "",
      disputerDid: isSet(object.disputerDid) ? String(object.disputerDid) : "",
      disputeDeposit: Array.isArray(object?.disputeDeposit) ? object.disputeDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      submittedAt: isSet(object.submittedAt) ? fromJsonTimestamp(object.submittedAt) : undefined,
      status: isSet(object.status) ? disputeStatusFromJSON(object.status) : 0,
      resolution: isSet(object.resolution) ? DisputeResolution.fromJSON(object.resolution) : undefined
    };
  },
  toJSON(message: Dispute): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.data !== undefined && (obj.data = message.data ? DisputeData.toJSON(message.data) : undefined);
    message.targetRole !== undefined && (obj.targetRole = disputeTargetRoleToJSON(message.targetRole));
    message.disputerAddress !== undefined && (obj.disputerAddress = message.disputerAddress);
    message.disputerDid !== undefined && (obj.disputerDid = message.disputerDid);
    if (message.disputeDeposit) {
      obj.disputeDeposit = message.disputeDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.disputeDeposit = [];
    }
    message.submittedAt !== undefined && (obj.submittedAt = fromTimestamp(message.submittedAt).toISOString());
    message.status !== undefined && (obj.status = disputeStatusToJSON(message.status));
    message.resolution !== undefined && (obj.resolution = message.resolution ? DisputeResolution.toJSON(message.resolution) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Dispute>): Dispute {
    const message = createBaseDispute();
    message.subjectId = object.subjectId ?? "";
    message.type = object.type ?? 0;
    message.data = object.data !== undefined && object.data !== null ? DisputeData.fromPartial(object.data) : undefined;
    message.targetRole = object.targetRole ?? 0;
    message.disputerAddress = object.disputerAddress ?? "";
    message.disputerDid = object.disputerDid ?? "";
    message.disputeDeposit = object.disputeDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? Timestamp.fromPartial(object.submittedAt) : undefined;
    message.status = object.status ?? 0;
    message.resolution = object.resolution !== undefined && object.resolution !== null ? DisputeResolution.fromPartial(object.resolution) : undefined;
    return message;
  }
};
function createBaseDisputeData(): DisputeData {
  return {
    uri: "",
    type: "",
    proof: "",
    encrypted: false
  };
}
export const DisputeData = {
  encode(message: DisputeData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    if (message.encrypted === true) {
      writer.uint32(32).bool(message.encrypted);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisputeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisputeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.proof = reader.string();
          break;
        case 4:
          message.encrypted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisputeData {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      type: isSet(object.type) ? String(object.type) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false
    };
  },
  toJSON(message: DisputeData): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.type !== undefined && (obj.type = message.type);
    message.proof !== undefined && (obj.proof = message.proof);
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    return obj;
  },
  fromPartial(object: Partial<DisputeData>): DisputeData {
    const message = createBaseDisputeData();
    message.uri = object.uri ?? "";
    message.type = object.type ?? "";
    message.proof = object.proof ?? "";
    message.encrypted = object.encrypted ?? false;
    return message;
  }
};
function createBaseDisputeResolution(): DisputeResolution {
  return {
    adjudicatorDid: "",
    adjudicatorAddress: "",
    adjudicatorPayoutAddress: "",
    resolvedAt: undefined,
    data: undefined,
    intendedPenalty: [],
    actualPenaltyPaid: [],
    winnerAmount: [],
    adjudicatorAmount: [],
    winnerAddress: "",
    loserAddress: ""
  };
}
export const DisputeResolution = {
  encode(message: DisputeResolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adjudicatorDid !== "") {
      writer.uint32(10).string(message.adjudicatorDid);
    }
    if (message.adjudicatorAddress !== "") {
      writer.uint32(18).string(message.adjudicatorAddress);
    }
    if (message.adjudicatorPayoutAddress !== "") {
      writer.uint32(26).string(message.adjudicatorPayoutAddress);
    }
    if (message.resolvedAt !== undefined) {
      Timestamp.encode(message.resolvedAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.data !== undefined) {
      DisputeData.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.intendedPenalty) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.actualPenaltyPaid) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.winnerAmount) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.adjudicatorAmount) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.winnerAddress !== "") {
      writer.uint32(82).string(message.winnerAddress);
    }
    if (message.loserAddress !== "") {
      writer.uint32(90).string(message.loserAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisputeResolution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisputeResolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adjudicatorDid = reader.string();
          break;
        case 2:
          message.adjudicatorAddress = reader.string();
          break;
        case 3:
          message.adjudicatorPayoutAddress = reader.string();
          break;
        case 4:
          message.resolvedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.data = DisputeData.decode(reader, reader.uint32());
          break;
        case 6:
          message.intendedPenalty.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.actualPenaltyPaid.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.winnerAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.adjudicatorAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.winnerAddress = reader.string();
          break;
        case 11:
          message.loserAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisputeResolution {
    return {
      adjudicatorDid: isSet(object.adjudicatorDid) ? String(object.adjudicatorDid) : "",
      adjudicatorAddress: isSet(object.adjudicatorAddress) ? String(object.adjudicatorAddress) : "",
      adjudicatorPayoutAddress: isSet(object.adjudicatorPayoutAddress) ? String(object.adjudicatorPayoutAddress) : "",
      resolvedAt: isSet(object.resolvedAt) ? fromJsonTimestamp(object.resolvedAt) : undefined,
      data: isSet(object.data) ? DisputeData.fromJSON(object.data) : undefined,
      intendedPenalty: Array.isArray(object?.intendedPenalty) ? object.intendedPenalty.map((e: any) => Coin.fromJSON(e)) : [],
      actualPenaltyPaid: Array.isArray(object?.actualPenaltyPaid) ? object.actualPenaltyPaid.map((e: any) => Coin.fromJSON(e)) : [],
      winnerAmount: Array.isArray(object?.winnerAmount) ? object.winnerAmount.map((e: any) => Coin.fromJSON(e)) : [],
      adjudicatorAmount: Array.isArray(object?.adjudicatorAmount) ? object.adjudicatorAmount.map((e: any) => Coin.fromJSON(e)) : [],
      winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : "",
      loserAddress: isSet(object.loserAddress) ? String(object.loserAddress) : ""
    };
  },
  toJSON(message: DisputeResolution): unknown {
    const obj: any = {};
    message.adjudicatorDid !== undefined && (obj.adjudicatorDid = message.adjudicatorDid);
    message.adjudicatorAddress !== undefined && (obj.adjudicatorAddress = message.adjudicatorAddress);
    message.adjudicatorPayoutAddress !== undefined && (obj.adjudicatorPayoutAddress = message.adjudicatorPayoutAddress);
    message.resolvedAt !== undefined && (obj.resolvedAt = fromTimestamp(message.resolvedAt).toISOString());
    message.data !== undefined && (obj.data = message.data ? DisputeData.toJSON(message.data) : undefined);
    if (message.intendedPenalty) {
      obj.intendedPenalty = message.intendedPenalty.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.intendedPenalty = [];
    }
    if (message.actualPenaltyPaid) {
      obj.actualPenaltyPaid = message.actualPenaltyPaid.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.actualPenaltyPaid = [];
    }
    if (message.winnerAmount) {
      obj.winnerAmount = message.winnerAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.winnerAmount = [];
    }
    if (message.adjudicatorAmount) {
      obj.adjudicatorAmount = message.adjudicatorAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.adjudicatorAmount = [];
    }
    message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
    message.loserAddress !== undefined && (obj.loserAddress = message.loserAddress);
    return obj;
  },
  fromPartial(object: Partial<DisputeResolution>): DisputeResolution {
    const message = createBaseDisputeResolution();
    message.adjudicatorDid = object.adjudicatorDid ?? "";
    message.adjudicatorAddress = object.adjudicatorAddress ?? "";
    message.adjudicatorPayoutAddress = object.adjudicatorPayoutAddress ?? "";
    message.resolvedAt = object.resolvedAt !== undefined && object.resolvedAt !== null ? Timestamp.fromPartial(object.resolvedAt) : undefined;
    message.data = object.data !== undefined && object.data !== null ? DisputeData.fromPartial(object.data) : undefined;
    message.intendedPenalty = object.intendedPenalty?.map(e => Coin.fromPartial(e)) || [];
    message.actualPenaltyPaid = object.actualPenaltyPaid?.map(e => Coin.fromPartial(e)) || [];
    message.winnerAmount = object.winnerAmount?.map(e => Coin.fromPartial(e)) || [];
    message.adjudicatorAmount = object.adjudicatorAmount?.map(e => Coin.fromPartial(e)) || [];
    message.winnerAddress = object.winnerAddress ?? "";
    message.loserAddress = object.loserAddress ?? "";
    return message;
  }
};
function createBaseAgentDepositBalance(): AgentDepositBalance {
  return {
    collectionId: "",
    agentAddress: "",
    amount: [],
    withdrawableAt: undefined
  };
}
export const AgentDepositBalance = {
  encode(message: AgentDepositBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.withdrawableAt !== undefined) {
      Timestamp.encode(message.withdrawableAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AgentDepositBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentDepositBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.withdrawableAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AgentDepositBalance {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      withdrawableAt: isSet(object.withdrawableAt) ? fromJsonTimestamp(object.withdrawableAt) : undefined
    };
  },
  toJSON(message: AgentDepositBalance): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.withdrawableAt !== undefined && (obj.withdrawableAt = fromTimestamp(message.withdrawableAt).toISOString());
    return obj;
  },
  fromPartial(object: Partial<AgentDepositBalance>): AgentDepositBalance {
    const message = createBaseAgentDepositBalance();
    message.collectionId = object.collectionId ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.withdrawableAt = object.withdrawableAt !== undefined && object.withdrawableAt !== null ? Timestamp.fromPartial(object.withdrawableAt) : undefined;
    return message;
  }
};
function createBaseIntent(): Intent {
  return {
    id: "",
    agentDid: "",
    agentAddress: "",
    collectionId: "",
    claimId: "",
    createdAt: undefined,
    expireAt: undefined,
    status: 0,
    amount: [],
    cw20Payment: [],
    fromAddress: "",
    escrowAddress: "",
    cw1155Payment: [],
    cw1155IntentPayment: [],
    memberAddress: ""
  };
}
export const Intent = {
  encode(message: Intent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.agentDid !== "") {
      writer.uint32(18).string(message.agentDid);
    }
    if (message.agentAddress !== "") {
      writer.uint32(26).string(message.agentAddress);
    }
    if (message.collectionId !== "") {
      writer.uint32(34).string(message.collectionId);
    }
    if (message.claimId !== "") {
      writer.uint32(42).string(message.claimId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.expireAt !== undefined) {
      Timestamp.encode(message.expireAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.cw20Payment) {
      CW20Payment.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.fromAddress !== "") {
      writer.uint32(90).string(message.fromAddress);
    }
    if (message.escrowAddress !== "") {
      writer.uint32(98).string(message.escrowAddress);
    }
    for (const v of message.cw1155Payment) {
      CW1155Payment.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.cw1155IntentPayment) {
      CW1155IntentPayment.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.memberAddress !== "") {
      writer.uint32(122).string(message.memberAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Intent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.agentDid = reader.string();
          break;
        case 3:
          message.agentAddress = reader.string();
          break;
        case 4:
          message.collectionId = reader.string();
          break;
        case 5:
          message.claimId = reader.string();
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.expireAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.status = (reader.int32() as any);
          break;
        case 9:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.cw20Payment.push(CW20Payment.decode(reader, reader.uint32()));
          break;
        case 11:
          message.fromAddress = reader.string();
          break;
        case 12:
          message.escrowAddress = reader.string();
          break;
        case 13:
          message.cw1155Payment.push(CW1155Payment.decode(reader, reader.uint32()));
          break;
        case 14:
          message.cw1155IntentPayment.push(CW1155IntentPayment.decode(reader, reader.uint32()));
          break;
        case 15:
          message.memberAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Intent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      agentDid: isSet(object.agentDid) ? String(object.agentDid) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      claimId: isSet(object.claimId) ? String(object.claimId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      expireAt: isSet(object.expireAt) ? fromJsonTimestamp(object.expireAt) : undefined,
      status: isSet(object.status) ? intentStatusFromJSON(object.status) : 0,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      cw20Payment: Array.isArray(object?.cw20Payment) ? object.cw20Payment.map((e: any) => CW20Payment.fromJSON(e)) : [],
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : "",
      cw1155Payment: Array.isArray(object?.cw1155Payment) ? object.cw1155Payment.map((e: any) => CW1155Payment.fromJSON(e)) : [],
      cw1155IntentPayment: Array.isArray(object?.cw1155IntentPayment) ? object.cw1155IntentPayment.map((e: any) => CW1155IntentPayment.fromJSON(e)) : [],
      memberAddress: isSet(object.memberAddress) ? String(object.memberAddress) : ""
    };
  },
  toJSON(message: Intent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.agentDid !== undefined && (obj.agentDid = message.agentDid);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.claimId !== undefined && (obj.claimId = message.claimId);
    message.createdAt !== undefined && (obj.createdAt = fromTimestamp(message.createdAt).toISOString());
    message.expireAt !== undefined && (obj.expireAt = fromTimestamp(message.expireAt).toISOString());
    message.status !== undefined && (obj.status = intentStatusToJSON(message.status));
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    if (message.cw20Payment) {
      obj.cw20Payment = message.cw20Payment.map(e => e ? CW20Payment.toJSON(e) : undefined);
    } else {
      obj.cw20Payment = [];
    }
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress);
    if (message.cw1155Payment) {
      obj.cw1155Payment = message.cw1155Payment.map(e => e ? CW1155Payment.toJSON(e) : undefined);
    } else {
      obj.cw1155Payment = [];
    }
    if (message.cw1155IntentPayment) {
      obj.cw1155IntentPayment = message.cw1155IntentPayment.map(e => e ? CW1155IntentPayment.toJSON(e) : undefined);
    } else {
      obj.cw1155IntentPayment = [];
    }
    message.memberAddress !== undefined && (obj.memberAddress = message.memberAddress);
    return obj;
  },
  fromPartial(object: Partial<Intent>): Intent {
    const message = createBaseIntent();
    message.id = object.id ?? "";
    message.agentDid = object.agentDid ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.collectionId = object.collectionId ?? "";
    message.claimId = object.claimId ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Timestamp.fromPartial(object.createdAt) : undefined;
    message.expireAt = object.expireAt !== undefined && object.expireAt !== null ? Timestamp.fromPartial(object.expireAt) : undefined;
    message.status = object.status ?? 0;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.cw20Payment = object.cw20Payment?.map(e => CW20Payment.fromPartial(e)) || [];
    message.fromAddress = object.fromAddress ?? "";
    message.escrowAddress = object.escrowAddress ?? "";
    message.cw1155Payment = object.cw1155Payment?.map(e => CW1155Payment.fromPartial(e)) || [];
    message.cw1155IntentPayment = object.cw1155IntentPayment?.map(e => CW1155IntentPayment.fromPartial(e)) || [];
    message.memberAddress = object.memberAddress ?? "";
    return message;
  }
};
function createBaseMemberBudget(): MemberBudget {
  return {
    collectionId: "",
    memberAddress: "",
    period: undefined,
    periodSpendLimit: [],
    periodSpent: [],
    periodCw20SpendLimit: [],
    periodCw20Spent: [],
    periodResetAt: undefined
  };
}
export const MemberBudget = {
  encode(message: MemberBudget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.memberAddress !== "") {
      writer.uint32(18).string(message.memberAddress);
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.periodSpent) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.periodCw20SpendLimit) {
      CW20Payment.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.periodCw20Spent) {
      CW20Payment.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.periodResetAt !== undefined) {
      Timestamp.encode(message.periodResetAt, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MemberBudget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.memberAddress = reader.string();
          break;
        case 3:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodSpent.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.periodCw20SpendLimit.push(CW20Payment.decode(reader, reader.uint32()));
          break;
        case 7:
          message.periodCw20Spent.push(CW20Payment.decode(reader, reader.uint32()));
          break;
        case 8:
          message.periodResetAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MemberBudget {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      memberAddress: isSet(object.memberAddress) ? String(object.memberAddress) : "",
      period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,
      periodSpendLimit: Array.isArray(object?.periodSpendLimit) ? object.periodSpendLimit.map((e: any) => Coin.fromJSON(e)) : [],
      periodSpent: Array.isArray(object?.periodSpent) ? object.periodSpent.map((e: any) => Coin.fromJSON(e)) : [],
      periodCw20SpendLimit: Array.isArray(object?.periodCw20SpendLimit) ? object.periodCw20SpendLimit.map((e: any) => CW20Payment.fromJSON(e)) : [],
      periodCw20Spent: Array.isArray(object?.periodCw20Spent) ? object.periodCw20Spent.map((e: any) => CW20Payment.fromJSON(e)) : [],
      periodResetAt: isSet(object.periodResetAt) ? fromJsonTimestamp(object.periodResetAt) : undefined
    };
  },
  toJSON(message: MemberBudget): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.memberAddress !== undefined && (obj.memberAddress = message.memberAddress);
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    if (message.periodSpendLimit) {
      obj.periodSpendLimit = message.periodSpendLimit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.periodSpendLimit = [];
    }
    if (message.periodSpent) {
      obj.periodSpent = message.periodSpent.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.periodSpent = [];
    }
    if (message.periodCw20SpendLimit) {
      obj.periodCw20SpendLimit = message.periodCw20SpendLimit.map(e => e ? CW20Payment.toJSON(e) : undefined);
    } else {
      obj.periodCw20SpendLimit = [];
    }
    if (message.periodCw20Spent) {
      obj.periodCw20Spent = message.periodCw20Spent.map(e => e ? CW20Payment.toJSON(e) : undefined);
    } else {
      obj.periodCw20Spent = [];
    }
    message.periodResetAt !== undefined && (obj.periodResetAt = fromTimestamp(message.periodResetAt).toISOString());
    return obj;
  },
  fromPartial(object: Partial<MemberBudget>): MemberBudget {
    const message = createBaseMemberBudget();
    message.collectionId = object.collectionId ?? "";
    message.memberAddress = object.memberAddress ?? "";
    message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
    message.periodSpendLimit = object.periodSpendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.periodSpent = object.periodSpent?.map(e => Coin.fromPartial(e)) || [];
    message.periodCw20SpendLimit = object.periodCw20SpendLimit?.map(e => CW20Payment.fromPartial(e)) || [];
    message.periodCw20Spent = object.periodCw20Spent?.map(e => CW20Payment.fromPartial(e)) || [];
    message.periodResetAt = object.periodResetAt !== undefined && object.periodResetAt !== null ? Timestamp.fromPartial(object.periodResetAt) : undefined;
    return message;
  }
};