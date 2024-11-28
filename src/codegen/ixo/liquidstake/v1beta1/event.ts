//@ts-nocheck
import { Params, ParamsSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** LiquidStakeParamsUpdatedEvent is triggered when a the Params is updated. */
export interface LiquidStakeParamsUpdatedEvent {
  params?: Params;
  authority: string;
}
/** LiquidStakeParamsUpdatedEvent is triggered when a the Params is updated. */
export interface LiquidStakeParamsUpdatedEventSDKType {
  params?: ParamsSDKType;
  authority: string;
}
/** LiquidStakeEvent is triggered when a liquid stake is performed. */
export interface LiquidStakeEvent {
  delegator: string;
  liquidAmount: string;
  stkIxoMintedAmount: string;
}
/** LiquidStakeEvent is triggered when a liquid stake is performed. */
export interface LiquidStakeEventSDKType {
  delegator: string;
  liquid_amount: string;
  stk_ixo_minted_amount: string;
}
/** LiquidUnstakeEvent is triggered when a liquid unstake is performed. */
export interface LiquidUnstakeEvent {
  delegator: string;
  unstakeAmount: string;
  unbondingAmount: string;
  unbondedAmount: string;
  completionTime: string;
}
/** LiquidUnstakeEvent is triggered when a liquid unstake is performed. */
export interface LiquidUnstakeEventSDKType {
  delegator: string;
  unstake_amount: string;
  unbonding_amount: string;
  unbonded_amount: string;
  completion_time: string;
}
/** LiquidRedelegateEvent is triggered when a liquid validator is added. */
export interface AddLiquidValidatorEvent {
  validator: string;
}
/** LiquidRedelegateEvent is triggered when a liquid validator is added. */
export interface AddLiquidValidatorEventSDKType {
  validator: string;
}
/** RebalancedEvent is triggered after a rebalance is performed. */
export interface RebalancedLiquidStakeEvent {
  delegator: string;
  redelegationCount: string;
  redelegationFailCount: string;
}
/** RebalancedEvent is triggered after a rebalance is performed. */
export interface RebalancedLiquidStakeEventSDKType {
  delegator: string;
  redelegation_count: string;
  redelegation_fail_count: string;
}
/** AutocompoundEvent is triggered after a epoch is triggered for autocompound. */
export interface AutocompoundStakingRewardsEvent {
  delegator: string;
  totalAmount: string;
  feeAmount: string;
  redelegateAmount: string;
  weightedRewardsAmount: string;
}
/** AutocompoundEvent is triggered after a epoch is triggered for autocompound. */
export interface AutocompoundStakingRewardsEventSDKType {
  delegator: string;
  total_amount: string;
  fee_amount: string;
  redelegate_amount: string;
  weighted_rewards_amount: string;
}
function createBaseLiquidStakeParamsUpdatedEvent(): LiquidStakeParamsUpdatedEvent {
  return {
    params: undefined,
    authority: ""
  };
}
export const LiquidStakeParamsUpdatedEvent = {
  encode(message: LiquidStakeParamsUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidStakeParamsUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidStakeParamsUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidStakeParamsUpdatedEvent {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: LiquidStakeParamsUpdatedEvent): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<LiquidStakeParamsUpdatedEvent>): LiquidStakeParamsUpdatedEvent {
    const message = createBaseLiquidStakeParamsUpdatedEvent();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseLiquidStakeEvent(): LiquidStakeEvent {
  return {
    delegator: "",
    liquidAmount: "",
    stkIxoMintedAmount: ""
  };
}
export const LiquidStakeEvent = {
  encode(message: LiquidStakeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.liquidAmount !== "") {
      writer.uint32(18).string(message.liquidAmount);
    }
    if (message.stkIxoMintedAmount !== "") {
      writer.uint32(26).string(message.stkIxoMintedAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidStakeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidStakeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.liquidAmount = reader.string();
          break;
        case 3:
          message.stkIxoMintedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidStakeEvent {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      liquidAmount: isSet(object.liquidAmount) ? String(object.liquidAmount) : "",
      stkIxoMintedAmount: isSet(object.stkIxoMintedAmount) ? String(object.stkIxoMintedAmount) : ""
    };
  },
  toJSON(message: LiquidStakeEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.liquidAmount !== undefined && (obj.liquidAmount = message.liquidAmount);
    message.stkIxoMintedAmount !== undefined && (obj.stkIxoMintedAmount = message.stkIxoMintedAmount);
    return obj;
  },
  fromPartial(object: Partial<LiquidStakeEvent>): LiquidStakeEvent {
    const message = createBaseLiquidStakeEvent();
    message.delegator = object.delegator ?? "";
    message.liquidAmount = object.liquidAmount ?? "";
    message.stkIxoMintedAmount = object.stkIxoMintedAmount ?? "";
    return message;
  }
};
function createBaseLiquidUnstakeEvent(): LiquidUnstakeEvent {
  return {
    delegator: "",
    unstakeAmount: "",
    unbondingAmount: "",
    unbondedAmount: "",
    completionTime: ""
  };
}
export const LiquidUnstakeEvent = {
  encode(message: LiquidUnstakeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.unstakeAmount !== "") {
      writer.uint32(18).string(message.unstakeAmount);
    }
    if (message.unbondingAmount !== "") {
      writer.uint32(26).string(message.unbondingAmount);
    }
    if (message.unbondedAmount !== "") {
      writer.uint32(34).string(message.unbondedAmount);
    }
    if (message.completionTime !== "") {
      writer.uint32(42).string(message.completionTime);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidUnstakeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidUnstakeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.unstakeAmount = reader.string();
          break;
        case 3:
          message.unbondingAmount = reader.string();
          break;
        case 4:
          message.unbondedAmount = reader.string();
          break;
        case 5:
          message.completionTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidUnstakeEvent {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      unstakeAmount: isSet(object.unstakeAmount) ? String(object.unstakeAmount) : "",
      unbondingAmount: isSet(object.unbondingAmount) ? String(object.unbondingAmount) : "",
      unbondedAmount: isSet(object.unbondedAmount) ? String(object.unbondedAmount) : "",
      completionTime: isSet(object.completionTime) ? String(object.completionTime) : ""
    };
  },
  toJSON(message: LiquidUnstakeEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.unstakeAmount !== undefined && (obj.unstakeAmount = message.unstakeAmount);
    message.unbondingAmount !== undefined && (obj.unbondingAmount = message.unbondingAmount);
    message.unbondedAmount !== undefined && (obj.unbondedAmount = message.unbondedAmount);
    message.completionTime !== undefined && (obj.completionTime = message.completionTime);
    return obj;
  },
  fromPartial(object: Partial<LiquidUnstakeEvent>): LiquidUnstakeEvent {
    const message = createBaseLiquidUnstakeEvent();
    message.delegator = object.delegator ?? "";
    message.unstakeAmount = object.unstakeAmount ?? "";
    message.unbondingAmount = object.unbondingAmount ?? "";
    message.unbondedAmount = object.unbondedAmount ?? "";
    message.completionTime = object.completionTime ?? "";
    return message;
  }
};
function createBaseAddLiquidValidatorEvent(): AddLiquidValidatorEvent {
  return {
    validator: ""
  };
}
export const AddLiquidValidatorEvent = {
  encode(message: AddLiquidValidatorEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddLiquidValidatorEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddLiquidValidatorEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddLiquidValidatorEvent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  toJSON(message: AddLiquidValidatorEvent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },
  fromPartial(object: Partial<AddLiquidValidatorEvent>): AddLiquidValidatorEvent {
    const message = createBaseAddLiquidValidatorEvent();
    message.validator = object.validator ?? "";
    return message;
  }
};
function createBaseRebalancedLiquidStakeEvent(): RebalancedLiquidStakeEvent {
  return {
    delegator: "",
    redelegationCount: "",
    redelegationFailCount: ""
  };
}
export const RebalancedLiquidStakeEvent = {
  encode(message: RebalancedLiquidStakeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.redelegationCount !== "") {
      writer.uint32(18).string(message.redelegationCount);
    }
    if (message.redelegationFailCount !== "") {
      writer.uint32(26).string(message.redelegationFailCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RebalancedLiquidStakeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRebalancedLiquidStakeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.redelegationCount = reader.string();
          break;
        case 3:
          message.redelegationFailCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RebalancedLiquidStakeEvent {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      redelegationCount: isSet(object.redelegationCount) ? String(object.redelegationCount) : "",
      redelegationFailCount: isSet(object.redelegationFailCount) ? String(object.redelegationFailCount) : ""
    };
  },
  toJSON(message: RebalancedLiquidStakeEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.redelegationCount !== undefined && (obj.redelegationCount = message.redelegationCount);
    message.redelegationFailCount !== undefined && (obj.redelegationFailCount = message.redelegationFailCount);
    return obj;
  },
  fromPartial(object: Partial<RebalancedLiquidStakeEvent>): RebalancedLiquidStakeEvent {
    const message = createBaseRebalancedLiquidStakeEvent();
    message.delegator = object.delegator ?? "";
    message.redelegationCount = object.redelegationCount ?? "";
    message.redelegationFailCount = object.redelegationFailCount ?? "";
    return message;
  }
};
function createBaseAutocompoundStakingRewardsEvent(): AutocompoundStakingRewardsEvent {
  return {
    delegator: "",
    totalAmount: "",
    feeAmount: "",
    redelegateAmount: "",
    weightedRewardsAmount: ""
  };
}
export const AutocompoundStakingRewardsEvent = {
  encode(message: AutocompoundStakingRewardsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.totalAmount !== "") {
      writer.uint32(18).string(message.totalAmount);
    }
    if (message.feeAmount !== "") {
      writer.uint32(26).string(message.feeAmount);
    }
    if (message.redelegateAmount !== "") {
      writer.uint32(34).string(message.redelegateAmount);
    }
    if (message.weightedRewardsAmount !== "") {
      writer.uint32(42).string(message.weightedRewardsAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AutocompoundStakingRewardsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutocompoundStakingRewardsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.totalAmount = reader.string();
          break;
        case 3:
          message.feeAmount = reader.string();
          break;
        case 4:
          message.redelegateAmount = reader.string();
          break;
        case 5:
          message.weightedRewardsAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AutocompoundStakingRewardsEvent {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      redelegateAmount: isSet(object.redelegateAmount) ? String(object.redelegateAmount) : "",
      weightedRewardsAmount: isSet(object.weightedRewardsAmount) ? String(object.weightedRewardsAmount) : ""
    };
  },
  toJSON(message: AutocompoundStakingRewardsEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.redelegateAmount !== undefined && (obj.redelegateAmount = message.redelegateAmount);
    message.weightedRewardsAmount !== undefined && (obj.weightedRewardsAmount = message.weightedRewardsAmount);
    return obj;
  },
  fromPartial(object: Partial<AutocompoundStakingRewardsEvent>): AutocompoundStakingRewardsEvent {
    const message = createBaseAutocompoundStakingRewardsEvent();
    message.delegator = object.delegator ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.redelegateAmount = object.redelegateAmount ?? "";
    message.weightedRewardsAmount = object.weightedRewardsAmount ?? "";
    return message;
  }
};