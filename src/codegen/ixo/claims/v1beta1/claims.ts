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
    intents: 0
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
      intents: isSet(object.intents) ? collectionIntentOptionsFromJSON(object.intents) : 0
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
    isOraclePayment: false
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
      isOraclePayment: isSet(object.isOraclePayment) ? Boolean(object.isOraclePayment) : false
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
    cw20Payment: []
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
      cw20Payment: Array.isArray(object?.cw20Payment) ? object.cw20Payment.map((e: any) => CW20Payment.fromJSON(e)) : []
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
    cw20Payment: []
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
      cw20Payment: Array.isArray(object?.cw20Payment) ? object.cw20Payment.map((e: any) => CW20Payment.fromJSON(e)) : []
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
    return message;
  }
};
function createBaseDispute(): Dispute {
  return {
    subjectId: "",
    type: 0,
    data: undefined
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
      data: isSet(object.data) ? DisputeData.fromJSON(object.data) : undefined
    };
  },
  toJSON(message: Dispute): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.data !== undefined && (obj.data = message.data ? DisputeData.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Dispute>): Dispute {
    const message = createBaseDispute();
    message.subjectId = object.subjectId ?? "";
    message.type = object.type ?? 0;
    message.data = object.data !== undefined && object.data !== null ? DisputeData.fromPartial(object.data) : undefined;
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
    escrowAddress: ""
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
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : ""
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
    return message;
  }
};