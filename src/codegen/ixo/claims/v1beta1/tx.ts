import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { CollectionState, CollectionStateSDKType, Payments, PaymentsSDKType, EvaluationStatus, EvaluationStatusSDKType, DisputeData, DisputeDataSDKType, PaymentType, PaymentTypeSDKType, Contract1155Payment, Contract1155PaymentSDKType, collectionStateFromJSON, collectionStateToJSON, evaluationStatusFromJSON, evaluationStatusToJSON, paymentTypeFromJSON, paymentTypeToJSON } from "./claims";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./cosmos";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
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
export interface MsgCreateCollectionResponse {}
export interface MsgCreateCollectionResponseSDKType {}
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
export interface MsgSubmitClaimResponse {}
export interface MsgSubmitClaimResponseSDKType {}
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
export interface MsgEvaluateClaimResponse {}
export interface MsgEvaluateClaimResponseSDKType {}
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
export interface MsgDisputeClaimResponse {}
export interface MsgDisputeClaimResponseSDKType {}
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
export interface MsgWithdrawPaymentResponse {}
export interface MsgWithdrawPaymentResponseSDKType {}

function createBaseMsgCreateCollection(): MsgCreateCollection {
  return {
    entity: "",
    admin: "",
    protocol: "",
    startDate: undefined,
    endDate: undefined,
    quota: Long.UZERO,
    state: 0,
    payments: undefined
  };
}

export const MsgCreateCollection = {
  encode(message: MsgCreateCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }

    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }

    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(34).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(42).fork()).ldelim();
    }

    if (!message.quota.isZero()) {
      writer.uint32(48).uint64(message.quota);
    }

    if (message.state !== 0) {
      writer.uint32(56).int32(message.state);
    }

    if (message.payments !== undefined) {
      Payments.encode(message.payments, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entity = reader.string();
          break;

        case 2:
          message.admin = reader.string();
          break;

        case 3:
          message.protocol = reader.string();
          break;

        case 4:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.quota = (reader.uint64() as Long);
          break;

        case 7:
          message.state = (reader.int32() as any);
          break;

        case 8:
          message.payments = Payments.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateCollection {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      quota: isSet(object.quota) ? Long.fromValue(object.quota) : Long.UZERO,
      state: isSet(object.state) ? collectionStateFromJSON(object.state) : 0,
      payments: isSet(object.payments) ? Payments.fromJSON(object.payments) : undefined
    };
  },

  toJSON(message: MsgCreateCollection): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity);
    message.admin !== undefined && (obj.admin = message.admin);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.quota !== undefined && (obj.quota = (message.quota || Long.UZERO).toString());
    message.state !== undefined && (obj.state = collectionStateToJSON(message.state));
    message.payments !== undefined && (obj.payments = message.payments ? Payments.toJSON(message.payments) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateCollection>): MsgCreateCollection {
    const message = createBaseMsgCreateCollection();
    message.entity = object.entity ?? "";
    message.admin = object.admin ?? "";
    message.protocol = object.protocol ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Long.fromValue(object.quota) : Long.UZERO;
    message.state = object.state ?? 0;
    message.payments = object.payments !== undefined && object.payments !== null ? Payments.fromPartial(object.payments) : undefined;
    return message;
  }

};

function createBaseMsgCreateCollectionResponse(): MsgCreateCollectionResponse {
  return {};
}

export const MsgCreateCollectionResponse = {
  encode(_: MsgCreateCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollectionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateCollectionResponse {
    return {};
  },

  toJSON(_: MsgCreateCollectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCreateCollectionResponse>): MsgCreateCollectionResponse {
    const message = createBaseMsgCreateCollectionResponse();
    return message;
  }

};

function createBaseMsgSubmitClaim(): MsgSubmitClaim {
  return {
    collectionId: "",
    claimId: "",
    agentDid: "",
    agentAddress: "",
    adminAddress: ""
  };
}

export const MsgSubmitClaim = {
  encode(message: MsgSubmitClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }

    if (message.claimId !== "") {
      writer.uint32(18).string(message.claimId);
    }

    if (message.agentDid !== "") {
      writer.uint32(26).string(message.agentDid);
    }

    if (message.agentAddress !== "") {
      writer.uint32(34).string(message.agentAddress);
    }

    if (message.adminAddress !== "") {
      writer.uint32(42).string(message.adminAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;

        case 2:
          message.claimId = reader.string();
          break;

        case 3:
          message.agentDid = reader.string();
          break;

        case 4:
          message.agentAddress = reader.string();
          break;

        case 5:
          message.adminAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitClaim {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      claimId: isSet(object.claimId) ? String(object.claimId) : "",
      agentDid: isSet(object.agentDid) ? String(object.agentDid) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : ""
    };
  },

  toJSON(message: MsgSubmitClaim): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.claimId !== undefined && (obj.claimId = message.claimId);
    message.agentDid !== undefined && (obj.agentDid = message.agentDid);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.adminAddress !== undefined && (obj.adminAddress = message.adminAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgSubmitClaim>): MsgSubmitClaim {
    const message = createBaseMsgSubmitClaim();
    message.collectionId = object.collectionId ?? "";
    message.claimId = object.claimId ?? "";
    message.agentDid = object.agentDid ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.adminAddress = object.adminAddress ?? "";
    return message;
  }

};

function createBaseMsgSubmitClaimResponse(): MsgSubmitClaimResponse {
  return {};
}

export const MsgSubmitClaimResponse = {
  encode(_: MsgSubmitClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSubmitClaimResponse {
    return {};
  },

  toJSON(_: MsgSubmitClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgSubmitClaimResponse>): MsgSubmitClaimResponse {
    const message = createBaseMsgSubmitClaimResponse();
    return message;
  }

};

function createBaseMsgEvaluateClaim(): MsgEvaluateClaim {
  return {
    claimId: "",
    collectionId: "",
    oracle: "",
    agentDid: "",
    agentAddress: "",
    adminAddress: "",
    status: 0,
    reason: 0,
    verificationProof: "",
    amount: []
  };
}

export const MsgEvaluateClaim = {
  encode(message: MsgEvaluateClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.adminAddress !== "") {
      writer.uint32(50).string(message.adminAddress);
    }

    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }

    if (message.reason !== 0) {
      writer.uint32(64).uint32(message.reason);
    }

    if (message.verificationProof !== "") {
      writer.uint32(74).string(message.verificationProof);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEvaluateClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEvaluateClaim();

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
          message.adminAddress = reader.string();
          break;

        case 7:
          message.status = (reader.int32() as any);
          break;

        case 8:
          message.reason = reader.uint32();
          break;

        case 9:
          message.verificationProof = reader.string();
          break;

        case 10:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEvaluateClaim {
    return {
      claimId: isSet(object.claimId) ? String(object.claimId) : "",
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      oracle: isSet(object.oracle) ? String(object.oracle) : "",
      agentDid: isSet(object.agentDid) ? String(object.agentDid) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      status: isSet(object.status) ? evaluationStatusFromJSON(object.status) : 0,
      reason: isSet(object.reason) ? Number(object.reason) : 0,
      verificationProof: isSet(object.verificationProof) ? String(object.verificationProof) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgEvaluateClaim): unknown {
    const obj: any = {};
    message.claimId !== undefined && (obj.claimId = message.claimId);
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    message.agentDid !== undefined && (obj.agentDid = message.agentDid);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.adminAddress !== undefined && (obj.adminAddress = message.adminAddress);
    message.status !== undefined && (obj.status = evaluationStatusToJSON(message.status));
    message.reason !== undefined && (obj.reason = Math.round(message.reason));
    message.verificationProof !== undefined && (obj.verificationProof = message.verificationProof);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgEvaluateClaim>): MsgEvaluateClaim {
    const message = createBaseMsgEvaluateClaim();
    message.claimId = object.claimId ?? "";
    message.collectionId = object.collectionId ?? "";
    message.oracle = object.oracle ?? "";
    message.agentDid = object.agentDid ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.adminAddress = object.adminAddress ?? "";
    message.status = object.status ?? 0;
    message.reason = object.reason ?? 0;
    message.verificationProof = object.verificationProof ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgEvaluateClaimResponse(): MsgEvaluateClaimResponse {
  return {};
}

export const MsgEvaluateClaimResponse = {
  encode(_: MsgEvaluateClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEvaluateClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEvaluateClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgEvaluateClaimResponse {
    return {};
  },

  toJSON(_: MsgEvaluateClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgEvaluateClaimResponse>): MsgEvaluateClaimResponse {
    const message = createBaseMsgEvaluateClaimResponse();
    return message;
  }

};

function createBaseMsgDisputeClaim(): MsgDisputeClaim {
  return {
    subjectId: "",
    agentDid: "",
    agentAddress: "",
    disputeType: 0,
    data: undefined
  };
}

export const MsgDisputeClaim = {
  encode(message: MsgDisputeClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }

    if (message.agentDid !== "") {
      writer.uint32(18).string(message.agentDid);
    }

    if (message.agentAddress !== "") {
      writer.uint32(26).string(message.agentAddress);
    }

    if (message.disputeType !== 0) {
      writer.uint32(32).int32(message.disputeType);
    }

    if (message.data !== undefined) {
      DisputeData.encode(message.data, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisputeClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisputeClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;

        case 2:
          message.agentDid = reader.string();
          break;

        case 3:
          message.agentAddress = reader.string();
          break;

        case 4:
          message.disputeType = reader.int32();
          break;

        case 5:
          message.data = DisputeData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDisputeClaim {
    return {
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : "",
      agentDid: isSet(object.agentDid) ? String(object.agentDid) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      disputeType: isSet(object.disputeType) ? Number(object.disputeType) : 0,
      data: isSet(object.data) ? DisputeData.fromJSON(object.data) : undefined
    };
  },

  toJSON(message: MsgDisputeClaim): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.agentDid !== undefined && (obj.agentDid = message.agentDid);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.disputeType !== undefined && (obj.disputeType = Math.round(message.disputeType));
    message.data !== undefined && (obj.data = message.data ? DisputeData.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgDisputeClaim>): MsgDisputeClaim {
    const message = createBaseMsgDisputeClaim();
    message.subjectId = object.subjectId ?? "";
    message.agentDid = object.agentDid ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.disputeType = object.disputeType ?? 0;
    message.data = object.data !== undefined && object.data !== null ? DisputeData.fromPartial(object.data) : undefined;
    return message;
  }

};

function createBaseMsgDisputeClaimResponse(): MsgDisputeClaimResponse {
  return {};
}

export const MsgDisputeClaimResponse = {
  encode(_: MsgDisputeClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisputeClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisputeClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgDisputeClaimResponse {
    return {};
  },

  toJSON(_: MsgDisputeClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgDisputeClaimResponse>): MsgDisputeClaimResponse {
    const message = createBaseMsgDisputeClaimResponse();
    return message;
  }

};

function createBaseMsgWithdrawPayment(): MsgWithdrawPayment {
  return {
    claimId: "",
    inputs: [],
    outputs: [],
    paymentType: 0,
    contract_1155Payment: undefined,
    toAddress: "",
    fromAddress: "",
    releaseDate: undefined,
    adminAddress: ""
  };
}

export const MsgWithdrawPayment = {
  encode(message: MsgWithdrawPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimId !== "") {
      writer.uint32(10).string(message.claimId);
    }

    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.paymentType !== 0) {
      writer.uint32(32).int32(message.paymentType);
    }

    if (message.contract_1155Payment !== undefined) {
      Contract1155Payment.encode(message.contract_1155Payment, writer.uint32(42).fork()).ldelim();
    }

    if (message.toAddress !== "") {
      writer.uint32(50).string(message.toAddress);
    }

    if (message.fromAddress !== "") {
      writer.uint32(58).string(message.fromAddress);
    }

    if (message.releaseDate !== undefined) {
      Timestamp.encode(message.releaseDate, writer.uint32(66).fork()).ldelim();
    }

    if (message.adminAddress !== "") {
      writer.uint32(74).string(message.adminAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPayment();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimId = reader.string();
          break;

        case 2:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;

        case 3:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;

        case 4:
          message.paymentType = (reader.int32() as any);
          break;

        case 5:
          message.contract_1155Payment = Contract1155Payment.decode(reader, reader.uint32());
          break;

        case 6:
          message.toAddress = reader.string();
          break;

        case 7:
          message.fromAddress = reader.string();
          break;

        case 8:
          message.releaseDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 9:
          message.adminAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawPayment {
    return {
      claimId: isSet(object.claimId) ? String(object.claimId) : "",
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromJSON(e)) : [],
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => Output.fromJSON(e)) : [],
      paymentType: isSet(object.paymentType) ? paymentTypeFromJSON(object.paymentType) : 0,
      contract_1155Payment: isSet(object.contract_1155Payment) ? Contract1155Payment.fromJSON(object.contract_1155Payment) : undefined,
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      releaseDate: isSet(object.releaseDate) ? fromJsonTimestamp(object.releaseDate) : undefined,
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : ""
    };
  },

  toJSON(message: MsgWithdrawPayment): unknown {
    const obj: any = {};
    message.claimId !== undefined && (obj.claimId = message.claimId);

    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }

    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }

    message.paymentType !== undefined && (obj.paymentType = paymentTypeToJSON(message.paymentType));
    message.contract_1155Payment !== undefined && (obj.contract_1155Payment = message.contract_1155Payment ? Contract1155Payment.toJSON(message.contract_1155Payment) : undefined);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.releaseDate !== undefined && (obj.releaseDate = fromTimestamp(message.releaseDate).toISOString());
    message.adminAddress !== undefined && (obj.adminAddress = message.adminAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgWithdrawPayment>): MsgWithdrawPayment {
    const message = createBaseMsgWithdrawPayment();
    message.claimId = object.claimId ?? "";
    message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
    message.paymentType = object.paymentType ?? 0;
    message.contract_1155Payment = object.contract_1155Payment !== undefined && object.contract_1155Payment !== null ? Contract1155Payment.fromPartial(object.contract_1155Payment) : undefined;
    message.toAddress = object.toAddress ?? "";
    message.fromAddress = object.fromAddress ?? "";
    message.releaseDate = object.releaseDate !== undefined && object.releaseDate !== null ? Timestamp.fromPartial(object.releaseDate) : undefined;
    message.adminAddress = object.adminAddress ?? "";
    return message;
  }

};

function createBaseMsgWithdrawPaymentResponse(): MsgWithdrawPaymentResponse {
  return {};
}

export const MsgWithdrawPaymentResponse = {
  encode(_: MsgWithdrawPaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPaymentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgWithdrawPaymentResponse {
    return {};
  },

  toJSON(_: MsgWithdrawPaymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgWithdrawPaymentResponse>): MsgWithdrawPaymentResponse {
    const message = createBaseMsgWithdrawPaymentResponse();
    return message;
  }

};