import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./cosmos";
import { PaymentType, Contract1155Payment, Contract1155PaymentSDKType, paymentTypeFromJSON, paymentTypeToJSON } from "./claims";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SubmitClaimAuthorization {
  /** address of admin */
  admin: string;
  constraints: SubmitClaimConstraints[];
}
export interface SubmitClaimAuthorizationSDKType {
  admin: string;
  constraints: SubmitClaimConstraintsSDKType[];
}
export interface SubmitClaimConstraints {
  /** collection_id indicates to which Collection this claim belongs */
  collectionId: string;
  agentQuota: Long;
}
export interface SubmitClaimConstraintsSDKType {
  collection_id: string;
  agent_quota: Long;
}
export interface EvaluateClaimAuthorization {
  /** address of admin */
  admin: string;
  constraints: EvaluateClaimConstraints[];
}
export interface EvaluateClaimAuthorizationSDKType {
  admin: string;
  constraints: EvaluateClaimConstraintsSDKType[];
}
export interface EvaluateClaimConstraints {
  /** collection_id indicates to which Collection this claim belongs */
  collectionId: string;
  /** either collection_id or claim_ids is needed */

  claimIds: string[];
  agentQuota: Long;
  /** if null then no before_date validation done */

  beforeDate?: Timestamp;
  /**
   * max custom amount evaluator can change, if empty list must use amount
   * defined in Token payments
   */

  maxCustomAmount: Coin[];
}
export interface EvaluateClaimConstraintsSDKType {
  collection_id: string;
  claim_ids: string[];
  agent_quota: Long;
  before_date?: TimestampSDKType;
  max_custom_amount: CoinSDKType[];
}
export interface WithdrawPaymentAuthorization {
  /** address of admin */
  admin: string;
  constraints: WithdrawPaymentConstraints[];
}
export interface WithdrawPaymentAuthorizationSDKType {
  admin: string;
  constraints: WithdrawPaymentConstraintsSDKType[];
}
export interface WithdrawPaymentConstraints {
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
   * plus the timeout on Collection payments, if null then none
   */

  releaseDate?: Timestamp;
}
export interface WithdrawPaymentConstraintsSDKType {
  claim_id: string;
  inputs: InputSDKType[];
  outputs: OutputSDKType[];
  payment_type: PaymentType;
  contract_1155_payment?: Contract1155PaymentSDKType;
  toAddress: string;
  fromAddress: string;
  release_date?: TimestampSDKType;
}

function createBaseSubmitClaimAuthorization(): SubmitClaimAuthorization {
  return {
    admin: "",
    constraints: []
  };
}

export const SubmitClaimAuthorization = {
  encode(message: SubmitClaimAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.constraints) {
      SubmitClaimConstraints.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitClaimAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitClaimAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.constraints.push(SubmitClaimConstraints.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubmitClaimAuthorization {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      constraints: Array.isArray(object?.constraints) ? object.constraints.map((e: any) => SubmitClaimConstraints.fromJSON(e)) : []
    };
  },

  toJSON(message: SubmitClaimAuthorization): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.constraints) {
      obj.constraints = message.constraints.map(e => e ? SubmitClaimConstraints.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SubmitClaimAuthorization>): SubmitClaimAuthorization {
    const message = createBaseSubmitClaimAuthorization();
    message.admin = object.admin ?? "";
    message.constraints = object.constraints?.map(e => SubmitClaimConstraints.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSubmitClaimConstraints(): SubmitClaimConstraints {
  return {
    collectionId: "",
    agentQuota: Long.UZERO
  };
}

export const SubmitClaimConstraints = {
  encode(message: SubmitClaimConstraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }

    if (!message.agentQuota.isZero()) {
      writer.uint32(16).uint64(message.agentQuota);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitClaimConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitClaimConstraints();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;

        case 2:
          message.agentQuota = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubmitClaimConstraints {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      agentQuota: isSet(object.agentQuota) ? Long.fromValue(object.agentQuota) : Long.UZERO
    };
  },

  toJSON(message: SubmitClaimConstraints): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.agentQuota !== undefined && (obj.agentQuota = (message.agentQuota || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<SubmitClaimConstraints>): SubmitClaimConstraints {
    const message = createBaseSubmitClaimConstraints();
    message.collectionId = object.collectionId ?? "";
    message.agentQuota = object.agentQuota !== undefined && object.agentQuota !== null ? Long.fromValue(object.agentQuota) : Long.UZERO;
    return message;
  }

};

function createBaseEvaluateClaimAuthorization(): EvaluateClaimAuthorization {
  return {
    admin: "",
    constraints: []
  };
}

export const EvaluateClaimAuthorization = {
  encode(message: EvaluateClaimAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.constraints) {
      EvaluateClaimConstraints.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvaluateClaimAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvaluateClaimAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.constraints.push(EvaluateClaimConstraints.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvaluateClaimAuthorization {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      constraints: Array.isArray(object?.constraints) ? object.constraints.map((e: any) => EvaluateClaimConstraints.fromJSON(e)) : []
    };
  },

  toJSON(message: EvaluateClaimAuthorization): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.constraints) {
      obj.constraints = message.constraints.map(e => e ? EvaluateClaimConstraints.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }

    return obj;
  },

  fromPartial(object: Partial<EvaluateClaimAuthorization>): EvaluateClaimAuthorization {
    const message = createBaseEvaluateClaimAuthorization();
    message.admin = object.admin ?? "";
    message.constraints = object.constraints?.map(e => EvaluateClaimConstraints.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEvaluateClaimConstraints(): EvaluateClaimConstraints {
  return {
    collectionId: "",
    claimIds: [],
    agentQuota: Long.UZERO,
    beforeDate: undefined,
    maxCustomAmount: []
  };
}

export const EvaluateClaimConstraints = {
  encode(message: EvaluateClaimConstraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }

    for (const v of message.claimIds) {
      writer.uint32(18).string(v!);
    }

    if (!message.agentQuota.isZero()) {
      writer.uint32(24).uint64(message.agentQuota);
    }

    if (message.beforeDate !== undefined) {
      Timestamp.encode(message.beforeDate, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.maxCustomAmount) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvaluateClaimConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvaluateClaimConstraints();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;

        case 2:
          message.claimIds.push(reader.string());
          break;

        case 3:
          message.agentQuota = (reader.uint64() as Long);
          break;

        case 4:
          message.beforeDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 10:
          message.maxCustomAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvaluateClaimConstraints {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      claimIds: Array.isArray(object?.claimIds) ? object.claimIds.map((e: any) => String(e)) : [],
      agentQuota: isSet(object.agentQuota) ? Long.fromValue(object.agentQuota) : Long.UZERO,
      beforeDate: isSet(object.beforeDate) ? fromJsonTimestamp(object.beforeDate) : undefined,
      maxCustomAmount: Array.isArray(object?.maxCustomAmount) ? object.maxCustomAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: EvaluateClaimConstraints): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);

    if (message.claimIds) {
      obj.claimIds = message.claimIds.map(e => e);
    } else {
      obj.claimIds = [];
    }

    message.agentQuota !== undefined && (obj.agentQuota = (message.agentQuota || Long.UZERO).toString());
    message.beforeDate !== undefined && (obj.beforeDate = fromTimestamp(message.beforeDate).toISOString());

    if (message.maxCustomAmount) {
      obj.maxCustomAmount = message.maxCustomAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxCustomAmount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<EvaluateClaimConstraints>): EvaluateClaimConstraints {
    const message = createBaseEvaluateClaimConstraints();
    message.collectionId = object.collectionId ?? "";
    message.claimIds = object.claimIds?.map(e => e) || [];
    message.agentQuota = object.agentQuota !== undefined && object.agentQuota !== null ? Long.fromValue(object.agentQuota) : Long.UZERO;
    message.beforeDate = object.beforeDate !== undefined && object.beforeDate !== null ? Timestamp.fromPartial(object.beforeDate) : undefined;
    message.maxCustomAmount = object.maxCustomAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseWithdrawPaymentAuthorization(): WithdrawPaymentAuthorization {
  return {
    admin: "",
    constraints: []
  };
}

export const WithdrawPaymentAuthorization = {
  encode(message: WithdrawPaymentAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.constraints) {
      WithdrawPaymentConstraints.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawPaymentAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawPaymentAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.constraints.push(WithdrawPaymentConstraints.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawPaymentAuthorization {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      constraints: Array.isArray(object?.constraints) ? object.constraints.map((e: any) => WithdrawPaymentConstraints.fromJSON(e)) : []
    };
  },

  toJSON(message: WithdrawPaymentAuthorization): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.constraints) {
      obj.constraints = message.constraints.map(e => e ? WithdrawPaymentConstraints.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }

    return obj;
  },

  fromPartial(object: Partial<WithdrawPaymentAuthorization>): WithdrawPaymentAuthorization {
    const message = createBaseWithdrawPaymentAuthorization();
    message.admin = object.admin ?? "";
    message.constraints = object.constraints?.map(e => WithdrawPaymentConstraints.fromPartial(e)) || [];
    return message;
  }

};

function createBaseWithdrawPaymentConstraints(): WithdrawPaymentConstraints {
  return {
    claimId: "",
    inputs: [],
    outputs: [],
    paymentType: 0,
    contract_1155Payment: undefined,
    toAddress: "",
    fromAddress: "",
    releaseDate: undefined
  };
}

export const WithdrawPaymentConstraints = {
  encode(message: WithdrawPaymentConstraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawPaymentConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawPaymentConstraints();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawPaymentConstraints {
    return {
      claimId: isSet(object.claimId) ? String(object.claimId) : "",
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromJSON(e)) : [],
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => Output.fromJSON(e)) : [],
      paymentType: isSet(object.paymentType) ? paymentTypeFromJSON(object.paymentType) : 0,
      contract_1155Payment: isSet(object.contract_1155Payment) ? Contract1155Payment.fromJSON(object.contract_1155Payment) : undefined,
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      releaseDate: isSet(object.releaseDate) ? fromJsonTimestamp(object.releaseDate) : undefined
    };
  },

  toJSON(message: WithdrawPaymentConstraints): unknown {
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
    return obj;
  },

  fromPartial(object: Partial<WithdrawPaymentConstraints>): WithdrawPaymentConstraints {
    const message = createBaseWithdrawPaymentConstraints();
    message.claimId = object.claimId ?? "";
    message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
    message.paymentType = object.paymentType ?? 0;
    message.contract_1155Payment = object.contract_1155Payment !== undefined && object.contract_1155Payment !== null ? Contract1155Payment.fromPartial(object.contract_1155Payment) : undefined;
    message.toAddress = object.toAddress ?? "";
    message.fromAddress = object.fromAddress ?? "";
    message.releaseDate = object.releaseDate !== undefined && object.releaseDate !== null ? Timestamp.fromPartial(object.releaseDate) : undefined;
    return message;
  }

};