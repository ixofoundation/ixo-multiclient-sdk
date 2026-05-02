//@ts-nocheck
import { ModuleParams, ModuleParamsSDKType, Pool, PoolSDKType } from "./liquidstake";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/**
 * ModuleParamsUpdatedEvent is emitted when the global ModuleParams change
 * (either via MsgUpdateModuleParams or MsgSetModulePaused).
 */
export interface ModuleParamsUpdatedEvent {
  moduleParams?: ModuleParams;
  authority: string;
}
/**
 * ModuleParamsUpdatedEvent is emitted when the global ModuleParams change
 * (either via MsgUpdateModuleParams or MsgSetModulePaused).
 */
export interface ModuleParamsUpdatedEventSDKType {
  module_params?: ModuleParamsSDKType;
  authority: string;
}
/**
 * PoolCreatedEvent is emitted when a new pool is registered via
 * MsgCreatePool.
 */
export interface PoolCreatedEvent {
  poolId: string;
  pool?: Pool;
  authority: string;
}
/**
 * PoolCreatedEvent is emitted when a new pool is registered via
 * MsgCreatePool.
 */
export interface PoolCreatedEventSDKType {
  pool_id: string;
  pool?: PoolSDKType;
  authority: string;
}
/**
 * PoolUpdatedEvent is emitted when a pool's configuration changes via any
 * of: MsgUpdatePool, MsgUpdateWhitelistedValidators,
 * MsgUpdateWeightedRewardsReceivers, MsgSetPoolPaused.
 */
export interface PoolUpdatedEvent {
  poolId: string;
  pool?: Pool;
  authority: string;
}
/**
 * PoolUpdatedEvent is emitted when a pool's configuration changes via any
 * of: MsgUpdatePool, MsgUpdateWhitelistedValidators,
 * MsgUpdateWeightedRewardsReceivers, MsgSetPoolPaused.
 */
export interface PoolUpdatedEventSDKType {
  pool_id: string;
  pool?: PoolSDKType;
  authority: string;
}
/**
 * LiquidStakeEvent is emitted when a liquid stake is performed against a
 * specific pool.
 * 
 * Field tag numbers preserved from the pre-v7 single-pool layout
 * (delegator=1, liquid_amount=2, stk_ixo_minted_amount=3) so wire-level
 * proto compatibility is preserved for any consumer decoding historical
 * v6 events with v7 codegen — pool_id simply shows as empty for those.
 * The liquid_amount and stk_ixo_minted_amount fields were upgraded from
 * the v6 string format ("100000000uixo") to typed Coin in v7 to remove
 * regex parsing on the indexer side; the tag is unchanged but the wire
 * encoding for that tag is now a length-delimited Coin sub-message.
 */
export interface LiquidStakeEvent {
  delegator: string;
  liquidAmount?: Coin;
  stkIxoMintedAmount?: Coin;
  poolId: string;
}
/**
 * LiquidStakeEvent is emitted when a liquid stake is performed against a
 * specific pool.
 * 
 * Field tag numbers preserved from the pre-v7 single-pool layout
 * (delegator=1, liquid_amount=2, stk_ixo_minted_amount=3) so wire-level
 * proto compatibility is preserved for any consumer decoding historical
 * v6 events with v7 codegen — pool_id simply shows as empty for those.
 * The liquid_amount and stk_ixo_minted_amount fields were upgraded from
 * the v6 string format ("100000000uixo") to typed Coin in v7 to remove
 * regex parsing on the indexer side; the tag is unchanged but the wire
 * encoding for that tag is now a length-delimited Coin sub-message.
 */
export interface LiquidStakeEventSDKType {
  delegator: string;
  liquid_amount?: CoinSDKType;
  stk_ixo_minted_amount?: CoinSDKType;
  pool_id: string;
}
/**
 * LiquidUnstakeEvent is emitted when a liquid unstake is performed against
 * a specific pool.
 * 
 * Field tag numbers preserved from v6. completion_time upgraded from RFC3339
 * string to google.protobuf.Timestamp to match
 * MsgLiquidUnstakeResponse.completion_time. Amount fields upgraded from
 * "<amount><denom>" strings to typed Coin.
 */
export interface LiquidUnstakeEvent {
  delegator: string;
  unstakeAmount?: Coin;
  unbondingAmount?: Coin;
  unbondedAmount?: Coin;
  completionTime?: Timestamp;
  poolId: string;
}
/**
 * LiquidUnstakeEvent is emitted when a liquid unstake is performed against
 * a specific pool.
 * 
 * Field tag numbers preserved from v6. completion_time upgraded from RFC3339
 * string to google.protobuf.Timestamp to match
 * MsgLiquidUnstakeResponse.completion_time. Amount fields upgraded from
 * "<amount><denom>" strings to typed Coin.
 */
export interface LiquidUnstakeEventSDKType {
  delegator: string;
  unstake_amount?: CoinSDKType;
  unbonding_amount?: CoinSDKType;
  unbonded_amount?: CoinSDKType;
  completion_time?: TimestampSDKType;
  pool_id: string;
}
/**
 * AddLiquidValidatorEvent is emitted when a newly whitelisted validator is
 * activated for a pool.
 * 
 * Field tag preserved from v6 (validator=1); pool_id added at the end.
 */
export interface AddLiquidValidatorEvent {
  validator: string;
  poolId: string;
}
/**
 * AddLiquidValidatorEvent is emitted when a newly whitelisted validator is
 * activated for a pool.
 * 
 * Field tag preserved from v6 (validator=1); pool_id added at the end.
 */
export interface AddLiquidValidatorEventSDKType {
  validator: string;
  pool_id: string;
}
/**
 * RebalancedLiquidStakeEvent is emitted after a pool's rebalancing pass.
 * 
 * Field tag numbers preserved from v6. Count fields upgraded from
 * strconv-formatted strings to typed uint32.
 */
export interface RebalancedLiquidStakeEvent {
  delegator: string;
  redelegationCount: number;
  redelegationFailCount: number;
  poolId: string;
}
/**
 * RebalancedLiquidStakeEvent is emitted after a pool's rebalancing pass.
 * 
 * Field tag numbers preserved from v6. Count fields upgraded from
 * strconv-formatted strings to typed uint32.
 */
export interface RebalancedLiquidStakeEventSDKType {
  delegator: string;
  redelegation_count: number;
  redelegation_fail_count: number;
  pool_id: string;
}
/**
 * AutocompoundStakingRewardsEvent is emitted when a pool's autocompound
 * epoch hook runs successfully.
 * 
 * Field tag numbers preserved from v6. Amount fields upgraded from
 * "<amount><denom>" strings to typed Coin.
 */
export interface AutocompoundStakingRewardsEvent {
  delegator: string;
  totalAmount?: Coin;
  feeAmount?: Coin;
  redelegateAmount?: Coin;
  weightedRewardsAmount?: Coin;
  poolId: string;
}
/**
 * AutocompoundStakingRewardsEvent is emitted when a pool's autocompound
 * epoch hook runs successfully.
 * 
 * Field tag numbers preserved from v6. Amount fields upgraded from
 * "<amount><denom>" strings to typed Coin.
 */
export interface AutocompoundStakingRewardsEventSDKType {
  delegator: string;
  total_amount?: CoinSDKType;
  fee_amount?: CoinSDKType;
  redelegate_amount?: CoinSDKType;
  weighted_rewards_amount?: CoinSDKType;
  pool_id: string;
}
function createBaseModuleParamsUpdatedEvent(): ModuleParamsUpdatedEvent {
  return {
    moduleParams: undefined,
    authority: ""
  };
}
export const ModuleParamsUpdatedEvent = {
  encode(message: ModuleParamsUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleParams !== undefined) {
      ModuleParams.encode(message.moduleParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParamsUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleParamsUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleParams = ModuleParams.decode(reader, reader.uint32());
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
  fromJSON(object: any): ModuleParamsUpdatedEvent {
    return {
      moduleParams: isSet(object.moduleParams) ? ModuleParams.fromJSON(object.moduleParams) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: ModuleParamsUpdatedEvent): unknown {
    const obj: any = {};
    message.moduleParams !== undefined && (obj.moduleParams = message.moduleParams ? ModuleParams.toJSON(message.moduleParams) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<ModuleParamsUpdatedEvent>): ModuleParamsUpdatedEvent {
    const message = createBaseModuleParamsUpdatedEvent();
    message.moduleParams = object.moduleParams !== undefined && object.moduleParams !== null ? ModuleParams.fromPartial(object.moduleParams) : undefined;
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBasePoolCreatedEvent(): PoolCreatedEvent {
  return {
    poolId: "",
    pool: undefined,
    authority: ""
  };
}
export const PoolCreatedEvent = {
  encode(message: PoolCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolCreatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolCreatedEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: PoolCreatedEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<PoolCreatedEvent>): PoolCreatedEvent {
    const message = createBasePoolCreatedEvent();
    message.poolId = object.poolId ?? "";
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBasePoolUpdatedEvent(): PoolUpdatedEvent {
  return {
    poolId: "",
    pool: undefined,
    authority: ""
  };
}
export const PoolUpdatedEvent = {
  encode(message: PoolUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolUpdatedEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: PoolUpdatedEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<PoolUpdatedEvent>): PoolUpdatedEvent {
    const message = createBasePoolUpdatedEvent();
    message.poolId = object.poolId ?? "";
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseLiquidStakeEvent(): LiquidStakeEvent {
  return {
    delegator: "",
    liquidAmount: undefined,
    stkIxoMintedAmount: undefined,
    poolId: ""
  };
}
export const LiquidStakeEvent = {
  encode(message: LiquidStakeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.liquidAmount !== undefined) {
      Coin.encode(message.liquidAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.stkIxoMintedAmount !== undefined) {
      Coin.encode(message.stkIxoMintedAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(34).string(message.poolId);
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
          message.liquidAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.stkIxoMintedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.poolId = reader.string();
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
      liquidAmount: isSet(object.liquidAmount) ? Coin.fromJSON(object.liquidAmount) : undefined,
      stkIxoMintedAmount: isSet(object.stkIxoMintedAmount) ? Coin.fromJSON(object.stkIxoMintedAmount) : undefined,
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: LiquidStakeEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.liquidAmount !== undefined && (obj.liquidAmount = message.liquidAmount ? Coin.toJSON(message.liquidAmount) : undefined);
    message.stkIxoMintedAmount !== undefined && (obj.stkIxoMintedAmount = message.stkIxoMintedAmount ? Coin.toJSON(message.stkIxoMintedAmount) : undefined);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<LiquidStakeEvent>): LiquidStakeEvent {
    const message = createBaseLiquidStakeEvent();
    message.delegator = object.delegator ?? "";
    message.liquidAmount = object.liquidAmount !== undefined && object.liquidAmount !== null ? Coin.fromPartial(object.liquidAmount) : undefined;
    message.stkIxoMintedAmount = object.stkIxoMintedAmount !== undefined && object.stkIxoMintedAmount !== null ? Coin.fromPartial(object.stkIxoMintedAmount) : undefined;
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseLiquidUnstakeEvent(): LiquidUnstakeEvent {
  return {
    delegator: "",
    unstakeAmount: undefined,
    unbondingAmount: undefined,
    unbondedAmount: undefined,
    completionTime: undefined,
    poolId: ""
  };
}
export const LiquidUnstakeEvent = {
  encode(message: LiquidUnstakeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.unstakeAmount !== undefined) {
      Coin.encode(message.unstakeAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.unbondingAmount !== undefined) {
      Coin.encode(message.unbondingAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbondedAmount !== undefined) {
      Coin.encode(message.unbondedAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(50).string(message.poolId);
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
          message.unstakeAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.unbondingAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbondedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.poolId = reader.string();
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
      unstakeAmount: isSet(object.unstakeAmount) ? Coin.fromJSON(object.unstakeAmount) : undefined,
      unbondingAmount: isSet(object.unbondingAmount) ? Coin.fromJSON(object.unbondingAmount) : undefined,
      unbondedAmount: isSet(object.unbondedAmount) ? Coin.fromJSON(object.unbondedAmount) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: LiquidUnstakeEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.unstakeAmount !== undefined && (obj.unstakeAmount = message.unstakeAmount ? Coin.toJSON(message.unstakeAmount) : undefined);
    message.unbondingAmount !== undefined && (obj.unbondingAmount = message.unbondingAmount ? Coin.toJSON(message.unbondingAmount) : undefined);
    message.unbondedAmount !== undefined && (obj.unbondedAmount = message.unbondedAmount ? Coin.toJSON(message.unbondedAmount) : undefined);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<LiquidUnstakeEvent>): LiquidUnstakeEvent {
    const message = createBaseLiquidUnstakeEvent();
    message.delegator = object.delegator ?? "";
    message.unstakeAmount = object.unstakeAmount !== undefined && object.unstakeAmount !== null ? Coin.fromPartial(object.unstakeAmount) : undefined;
    message.unbondingAmount = object.unbondingAmount !== undefined && object.unbondingAmount !== null ? Coin.fromPartial(object.unbondingAmount) : undefined;
    message.unbondedAmount = object.unbondedAmount !== undefined && object.unbondedAmount !== null ? Coin.fromPartial(object.unbondedAmount) : undefined;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseAddLiquidValidatorEvent(): AddLiquidValidatorEvent {
  return {
    validator: "",
    poolId: ""
  };
}
export const AddLiquidValidatorEvent = {
  encode(message: AddLiquidValidatorEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
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
        case 2:
          message.poolId = reader.string();
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
      validator: isSet(object.validator) ? String(object.validator) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: AddLiquidValidatorEvent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<AddLiquidValidatorEvent>): AddLiquidValidatorEvent {
    const message = createBaseAddLiquidValidatorEvent();
    message.validator = object.validator ?? "";
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseRebalancedLiquidStakeEvent(): RebalancedLiquidStakeEvent {
  return {
    delegator: "",
    redelegationCount: 0,
    redelegationFailCount: 0,
    poolId: ""
  };
}
export const RebalancedLiquidStakeEvent = {
  encode(message: RebalancedLiquidStakeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.redelegationCount !== 0) {
      writer.uint32(16).uint32(message.redelegationCount);
    }
    if (message.redelegationFailCount !== 0) {
      writer.uint32(24).uint32(message.redelegationFailCount);
    }
    if (message.poolId !== "") {
      writer.uint32(34).string(message.poolId);
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
          message.redelegationCount = reader.uint32();
          break;
        case 3:
          message.redelegationFailCount = reader.uint32();
          break;
        case 4:
          message.poolId = reader.string();
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
      redelegationCount: isSet(object.redelegationCount) ? Number(object.redelegationCount) : 0,
      redelegationFailCount: isSet(object.redelegationFailCount) ? Number(object.redelegationFailCount) : 0,
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: RebalancedLiquidStakeEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.redelegationCount !== undefined && (obj.redelegationCount = Math.round(message.redelegationCount));
    message.redelegationFailCount !== undefined && (obj.redelegationFailCount = Math.round(message.redelegationFailCount));
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<RebalancedLiquidStakeEvent>): RebalancedLiquidStakeEvent {
    const message = createBaseRebalancedLiquidStakeEvent();
    message.delegator = object.delegator ?? "";
    message.redelegationCount = object.redelegationCount ?? 0;
    message.redelegationFailCount = object.redelegationFailCount ?? 0;
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseAutocompoundStakingRewardsEvent(): AutocompoundStakingRewardsEvent {
  return {
    delegator: "",
    totalAmount: undefined,
    feeAmount: undefined,
    redelegateAmount: undefined,
    weightedRewardsAmount: undefined,
    poolId: ""
  };
}
export const AutocompoundStakingRewardsEvent = {
  encode(message: AutocompoundStakingRewardsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.totalAmount !== undefined) {
      Coin.encode(message.totalAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.feeAmount !== undefined) {
      Coin.encode(message.feeAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.redelegateAmount !== undefined) {
      Coin.encode(message.redelegateAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.weightedRewardsAmount !== undefined) {
      Coin.encode(message.weightedRewardsAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(50).string(message.poolId);
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
          message.totalAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.feeAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.redelegateAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.weightedRewardsAmount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.poolId = reader.string();
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
      totalAmount: isSet(object.totalAmount) ? Coin.fromJSON(object.totalAmount) : undefined,
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      redelegateAmount: isSet(object.redelegateAmount) ? Coin.fromJSON(object.redelegateAmount) : undefined,
      weightedRewardsAmount: isSet(object.weightedRewardsAmount) ? Coin.fromJSON(object.weightedRewardsAmount) : undefined,
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: AutocompoundStakingRewardsEvent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount ? Coin.toJSON(message.totalAmount) : undefined);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.redelegateAmount !== undefined && (obj.redelegateAmount = message.redelegateAmount ? Coin.toJSON(message.redelegateAmount) : undefined);
    message.weightedRewardsAmount !== undefined && (obj.weightedRewardsAmount = message.weightedRewardsAmount ? Coin.toJSON(message.weightedRewardsAmount) : undefined);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<AutocompoundStakingRewardsEvent>): AutocompoundStakingRewardsEvent {
    const message = createBaseAutocompoundStakingRewardsEvent();
    message.delegator = object.delegator ?? "";
    message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? Coin.fromPartial(object.totalAmount) : undefined;
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.redelegateAmount = object.redelegateAmount !== undefined && object.redelegateAmount !== null ? Coin.fromPartial(object.redelegateAmount) : undefined;
    message.weightedRewardsAmount = object.weightedRewardsAmount !== undefined && object.weightedRewardsAmount !== null ? Coin.fromPartial(object.weightedRewardsAmount) : undefined;
    message.poolId = object.poolId ?? "";
    return message;
  }
};