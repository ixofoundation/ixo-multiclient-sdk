//@ts-nocheck
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ModuleParams, ModuleParamsSDKType, WhitelistedValidator, WhitelistedValidatorSDKType, WeightedAddress, WeightedAddressSDKType, Params, ParamsSDKType } from "./liquidstake";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** MsgLiquidStake liquid-stakes native tokens into a specific pool. */
export interface MsgLiquidStake {
  /** delegator_address must equal the pool's whitelist_admin_address. */
  delegatorAddress: string;
  /**
   * pool_id selects which pool to stake into and therefore which LST denom
   * is minted in return.
   */
  poolId: string;
  /**
   * amount is the native staking-token coin to liquid-stake. Its denom must
   * match the chain's bond denom.
   */
  amount?: Coin;
}
/** MsgLiquidStake liquid-stakes native tokens into a specific pool. */
export interface MsgLiquidStakeSDKType {
  delegator_address: string;
  pool_id: string;
  amount?: CoinSDKType;
}
export interface MsgLiquidStakeResponse {}
export interface MsgLiquidStakeResponseSDKType {}
/** MsgLiquidUnstake burns LST of a specific pool and initiates unbonding. */
export interface MsgLiquidUnstake {
  delegatorAddress: string;
  /**
   * pool_id must correspond to amount.denom (the pool's liquid_bond_denom);
   * both are required for explicitness and validated to match.
   */
  poolId: string;
  /**
   * amount is the LST coin to burn. Its denom must equal
   * Pool(pool_id).liquid_bond_denom.
   */
  amount?: Coin;
}
/** MsgLiquidUnstake burns LST of a specific pool and initiates unbonding. */
export interface MsgLiquidUnstakeSDKType {
  delegator_address: string;
  pool_id: string;
  amount?: CoinSDKType;
}
export interface MsgLiquidUnstakeResponse {
  completionTime?: Timestamp;
}
export interface MsgLiquidUnstakeResponseSDKType {
  completion_time?: TimestampSDKType;
}
/**
 * MsgCreatePool registers a new liquid staking pool. Governance only.
 * 
 * The proxy account is derived deterministically from pool_id; pool_id and
 * liquid_bond_denom must both be globally unique. The newly created pool
 * starts with an empty whitelisted_validators list, empty
 * weighted_rewards_receivers, zero fee rates, and paused=false. Validators
 * must be added with MsgUpdateWhitelistedValidators before staking is
 * possible (the active-weight-quorum check requires sum >= 33.33%).
 */
export interface MsgCreatePool {
  /** authority must be the governance module address. */
  authority: string;
  /**
   * pool_id is the immutable identifier for the new pool. Validated as
   * lowercase alphanumeric plus '-', length 2..16, globally unique.
   */
  poolId: string;
  /**
   * liquid_bond_denom is the LST denom for the new pool. Must pass
   * sdk.ValidateDenom and be globally unique across pools.
   */
  liquidBondDenom: string;
  /** initial_admin_address becomes the pool's whitelist_admin_address. */
  initialAdminAddress: string;
  /** initial_fee_account_address becomes the pool's fee_account_address. */
  initialFeeAccountAddress: string;
}
/**
 * MsgCreatePool registers a new liquid staking pool. Governance only.
 * 
 * The proxy account is derived deterministically from pool_id; pool_id and
 * liquid_bond_denom must both be globally unique. The newly created pool
 * starts with an empty whitelisted_validators list, empty
 * weighted_rewards_receivers, zero fee rates, and paused=false. Validators
 * must be added with MsgUpdateWhitelistedValidators before staking is
 * possible (the active-weight-quorum check requires sum >= 33.33%).
 */
export interface MsgCreatePoolSDKType {
  authority: string;
  pool_id: string;
  liquid_bond_denom: string;
  initial_admin_address: string;
  initial_fee_account_address: string;
}
export interface MsgCreatePoolResponse {
  /**
   * proxy_account_address is the derived bech32 address that will hold this
   * pool's delegations. Returned for client convenience.
   */
  proxyAccountAddress: string;
}
export interface MsgCreatePoolResponseSDKType {
  proxy_account_address: string;
}
/** MsgUpdateModuleParams updates the global ModuleParams. Governance only. */
export interface MsgUpdateModuleParams {
  /** authority must be the governance module address. */
  authority: string;
  /** module_params replaces the current ModuleParams in full. */
  moduleParams?: ModuleParams;
}
/** MsgUpdateModuleParams updates the global ModuleParams. Governance only. */
export interface MsgUpdateModuleParamsSDKType {
  authority: string;
  module_params?: ModuleParamsSDKType;
}
export interface MsgUpdateModuleParamsResponse {}
export interface MsgUpdateModuleParamsResponseSDKType {}
/**
 * MsgUpdatePool updates a pool's mutable scalar/address fields. Governance
 * or the pool's current whitelist_admin_address may call this.
 * 
 * Whitelisted validators, weighted rewards receivers, and the paused flag
 * each have their own dedicated update message and are NOT touched here.
 * The pool_id, liquid_bond_denom, and proxy_account_address are immutable
 * after creation and cannot be changed via this message.
 */
export interface MsgUpdatePool {
  /** authority must be either governance or the pool's current admin. */
  authority: string;
  /** pool_id selects the pool to update. */
  poolId: string;
  /** unstake_fee_rate replaces the pool's current unstake fee rate. */
  unstakeFeeRate: string;
  /** fee_account_address replaces the pool's current fee account. */
  feeAccountAddress: string;
  /** autocompound_fee_rate replaces the pool's current autocompound fee rate. */
  autocompoundFeeRate: string;
  /** whitelist_admin_address replaces the pool's current admin address. */
  whitelistAdminAddress: string;
}
/**
 * MsgUpdatePool updates a pool's mutable scalar/address fields. Governance
 * or the pool's current whitelist_admin_address may call this.
 * 
 * Whitelisted validators, weighted rewards receivers, and the paused flag
 * each have their own dedicated update message and are NOT touched here.
 * The pool_id, liquid_bond_denom, and proxy_account_address are immutable
 * after creation and cannot be changed via this message.
 */
export interface MsgUpdatePoolSDKType {
  authority: string;
  pool_id: string;
  unstake_fee_rate: string;
  fee_account_address: string;
  autocompound_fee_rate: string;
  whitelist_admin_address: string;
}
export interface MsgUpdatePoolResponse {}
export interface MsgUpdatePoolResponseSDKType {}
/**
 * MsgUpdateWhitelistedValidators replaces a pool's validator whitelist.
 * Governance or the pool's current admin may call this. Target weights must
 * sum to 10000.
 */
export interface MsgUpdateWhitelistedValidators {
  /** authority must be either governance or the pool's current admin. */
  authority: string;
  /** pool_id selects the pool whose whitelist is being replaced. */
  poolId: string;
  /** whitelisted_validators replaces the pool's validator set. */
  whitelistedValidators: WhitelistedValidator[];
}
/**
 * MsgUpdateWhitelistedValidators replaces a pool's validator whitelist.
 * Governance or the pool's current admin may call this. Target weights must
 * sum to 10000.
 */
export interface MsgUpdateWhitelistedValidatorsSDKType {
  authority: string;
  pool_id: string;
  whitelisted_validators: WhitelistedValidatorSDKType[];
}
export interface MsgUpdateWhitelistedValidatorsResponse {}
export interface MsgUpdateWhitelistedValidatorsResponseSDKType {}
/**
 * MsgUpdateWeightedRewardsReceivers replaces a pool's weighted rewards
 * receivers list. Pool admin only (matches pre-v7 admin-only constraint).
 */
export interface MsgUpdateWeightedRewardsReceivers {
  /** authority must equal the pool's whitelist_admin_address. */
  authority: string;
  /** pool_id selects the pool whose receivers are being replaced. */
  poolId: string;
  /**
   * weighted_rewards_receivers replaces the pool's receivers list. Sum of
   * weights must not exceed 1.
   */
  weightedRewardsReceivers: WeightedAddress[];
}
/**
 * MsgUpdateWeightedRewardsReceivers replaces a pool's weighted rewards
 * receivers list. Pool admin only (matches pre-v7 admin-only constraint).
 */
export interface MsgUpdateWeightedRewardsReceiversSDKType {
  authority: string;
  pool_id: string;
  weighted_rewards_receivers: WeightedAddressSDKType[];
}
export interface MsgUpdateWeightedRewardsReceiversResponse {}
export interface MsgUpdateWeightedRewardsReceiversResponseSDKType {}
/**
 * MsgSetPoolPaused toggles a single pool's per-pool paused flag.
 * Governance or the pool's current admin may call this.
 */
export interface MsgSetPoolPaused {
  /** authority must be either governance or the pool's current admin. */
  authority: string;
  /** pool_id selects the pool whose paused flag is being set. */
  poolId: string;
  /** is_paused is the target value of Pool.paused. */
  isPaused: boolean;
}
/**
 * MsgSetPoolPaused toggles a single pool's per-pool paused flag.
 * Governance or the pool's current admin may call this.
 */
export interface MsgSetPoolPausedSDKType {
  authority: string;
  pool_id: string;
  is_paused: boolean;
}
export interface MsgSetPoolPausedResponse {}
export interface MsgSetPoolPausedResponseSDKType {}
/**
 * MsgSetModulePaused toggles the global ModuleParams.module_paused kill
 * switch. When true, every pool is halted regardless of its per-pool flag.
 * Governance authority only.
 */
export interface MsgSetModulePaused {
  /** authority must be the governance module address. */
  authority: string;
  /** is_paused is the target value of ModuleParams.module_paused. */
  isPaused: boolean;
}
/**
 * MsgSetModulePaused toggles the global ModuleParams.module_paused kill
 * switch. When true, every pool is halted regardless of its per-pool flag.
 * Governance authority only.
 */
export interface MsgSetModulePausedSDKType {
  authority: string;
  is_paused: boolean;
}
export interface MsgSetModulePausedResponse {}
export interface MsgSetModulePausedResponseSDKType {}
/** MsgBurn burns the signer's native uixo tokens. Module-level operation. */
export interface MsgBurn {
  burner: string;
  /** amount must be denominated in uixo. */
  amount?: Coin;
}
/** MsgBurn burns the signer's native uixo tokens. Module-level operation. */
export interface MsgBurnSDKType {
  burner: string;
  amount?: CoinSDKType;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseSDKType {}
/**
 * MsgUpdateParams (pre-v7) updated the single-pool global Params record.
 * In v7 this is replaced by MsgUpdateModuleParams + MsgCreatePool /
 * MsgUpdatePool, but historical pre-upgrade txs still contain this type.
 */
export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}
/**
 * MsgUpdateParams (pre-v7) updated the single-pool global Params record.
 * In v7 this is replaced by MsgUpdateModuleParams + MsgCreatePool /
 * MsgUpdatePool, but historical pre-upgrade txs still contain this type.
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    delegatorAddress: "",
    poolId: "",
    amount: undefined
  };
}
export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidStake {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.poolId = object.poolId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}
export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();
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
  fromJSON(_: any): MsgLiquidStakeResponse {
    return {};
  },
  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  }
};
function createBaseMsgLiquidUnstake(): MsgLiquidUnstake {
  return {
    delegatorAddress: "",
    poolId: "",
    amount: undefined
  };
}
export const MsgLiquidUnstake = {
  encode(message: MsgLiquidUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidUnstake {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgLiquidUnstake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidUnstake>): MsgLiquidUnstake {
    const message = createBaseMsgLiquidUnstake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.poolId = object.poolId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgLiquidUnstakeResponse(): MsgLiquidUnstakeResponse {
  return {
    completionTime: undefined
  };
}
export const MsgLiquidUnstakeResponse = {
  encode(message: MsgLiquidUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidUnstakeResponse {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: MsgLiquidUnstakeResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidUnstakeResponse>): MsgLiquidUnstakeResponse {
    const message = createBaseMsgLiquidUnstakeResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }
};
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    authority: "",
    poolId: "",
    liquidBondDenom: "",
    initialAdminAddress: "",
    initialFeeAccountAddress: ""
  };
}
export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.liquidBondDenom !== "") {
      writer.uint32(26).string(message.liquidBondDenom);
    }
    if (message.initialAdminAddress !== "") {
      writer.uint32(34).string(message.initialAdminAddress);
    }
    if (message.initialFeeAccountAddress !== "") {
      writer.uint32(42).string(message.initialFeeAccountAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.liquidBondDenom = reader.string();
          break;
        case 4:
          message.initialAdminAddress = reader.string();
          break;
        case 5:
          message.initialFeeAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      liquidBondDenom: isSet(object.liquidBondDenom) ? String(object.liquidBondDenom) : "",
      initialAdminAddress: isSet(object.initialAdminAddress) ? String(object.initialAdminAddress) : "",
      initialFeeAccountAddress: isSet(object.initialFeeAccountAddress) ? String(object.initialFeeAccountAddress) : ""
    };
  },
  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.liquidBondDenom !== undefined && (obj.liquidBondDenom = message.liquidBondDenom);
    message.initialAdminAddress !== undefined && (obj.initialAdminAddress = message.initialAdminAddress);
    message.initialFeeAccountAddress !== undefined && (obj.initialFeeAccountAddress = message.initialFeeAccountAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId ?? "";
    message.liquidBondDenom = object.liquidBondDenom ?? "";
    message.initialAdminAddress = object.initialAdminAddress ?? "";
    message.initialFeeAccountAddress = object.initialFeeAccountAddress ?? "";
    return message;
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {
    proxyAccountAddress: ""
  };
}
export const MsgCreatePoolResponse = {
  encode(message: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyAccountAddress !== "") {
      writer.uint32(10).string(message.proxyAccountAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proxyAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePoolResponse {
    return {
      proxyAccountAddress: isSet(object.proxyAccountAddress) ? String(object.proxyAccountAddress) : ""
    };
  },
  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.proxyAccountAddress !== undefined && (obj.proxyAccountAddress = message.proxyAccountAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    message.proxyAccountAddress = object.proxyAccountAddress ?? "";
    return message;
  }
};
function createBaseMsgUpdateModuleParams(): MsgUpdateModuleParams {
  return {
    authority: "",
    moduleParams: undefined
  };
}
export const MsgUpdateModuleParams = {
  encode(message: MsgUpdateModuleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.moduleParams !== undefined) {
      ModuleParams.encode(message.moduleParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModuleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModuleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.moduleParams = ModuleParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateModuleParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      moduleParams: isSet(object.moduleParams) ? ModuleParams.fromJSON(object.moduleParams) : undefined
    };
  },
  toJSON(message: MsgUpdateModuleParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.moduleParams !== undefined && (obj.moduleParams = message.moduleParams ? ModuleParams.toJSON(message.moduleParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateModuleParams>): MsgUpdateModuleParams {
    const message = createBaseMsgUpdateModuleParams();
    message.authority = object.authority ?? "";
    message.moduleParams = object.moduleParams !== undefined && object.moduleParams !== null ? ModuleParams.fromPartial(object.moduleParams) : undefined;
    return message;
  }
};
function createBaseMsgUpdateModuleParamsResponse(): MsgUpdateModuleParamsResponse {
  return {};
}
export const MsgUpdateModuleParamsResponse = {
  encode(_: MsgUpdateModuleParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModuleParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModuleParamsResponse();
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
  fromJSON(_: any): MsgUpdateModuleParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateModuleParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateModuleParamsResponse>): MsgUpdateModuleParamsResponse {
    const message = createBaseMsgUpdateModuleParamsResponse();
    return message;
  }
};
function createBaseMsgUpdatePool(): MsgUpdatePool {
  return {
    authority: "",
    poolId: "",
    unstakeFeeRate: "",
    feeAccountAddress: "",
    autocompoundFeeRate: "",
    whitelistAdminAddress: ""
  };
}
export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.unstakeFeeRate !== "") {
      writer.uint32(26).string(message.unstakeFeeRate);
    }
    if (message.feeAccountAddress !== "") {
      writer.uint32(34).string(message.feeAccountAddress);
    }
    if (message.autocompoundFeeRate !== "") {
      writer.uint32(42).string(message.autocompoundFeeRate);
    }
    if (message.whitelistAdminAddress !== "") {
      writer.uint32(50).string(message.whitelistAdminAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.unstakeFeeRate = reader.string();
          break;
        case 4:
          message.feeAccountAddress = reader.string();
          break;
        case 5:
          message.autocompoundFeeRate = reader.string();
          break;
        case 6:
          message.whitelistAdminAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdatePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      unstakeFeeRate: isSet(object.unstakeFeeRate) ? String(object.unstakeFeeRate) : "",
      feeAccountAddress: isSet(object.feeAccountAddress) ? String(object.feeAccountAddress) : "",
      autocompoundFeeRate: isSet(object.autocompoundFeeRate) ? String(object.autocompoundFeeRate) : "",
      whitelistAdminAddress: isSet(object.whitelistAdminAddress) ? String(object.whitelistAdminAddress) : ""
    };
  },
  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.unstakeFeeRate !== undefined && (obj.unstakeFeeRate = message.unstakeFeeRate);
    message.feeAccountAddress !== undefined && (obj.feeAccountAddress = message.feeAccountAddress);
    message.autocompoundFeeRate !== undefined && (obj.autocompoundFeeRate = message.autocompoundFeeRate);
    message.whitelistAdminAddress !== undefined && (obj.whitelistAdminAddress = message.whitelistAdminAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId ?? "";
    message.unstakeFeeRate = object.unstakeFeeRate ?? "";
    message.feeAccountAddress = object.feeAccountAddress ?? "";
    message.autocompoundFeeRate = object.autocompoundFeeRate ?? "";
    message.whitelistAdminAddress = object.whitelistAdminAddress ?? "";
    return message;
  }
};
function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}
export const MsgUpdatePoolResponse = {
  encode(_: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolResponse();
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
  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },
  toJSON(_: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  }
};
function createBaseMsgUpdateWhitelistedValidators(): MsgUpdateWhitelistedValidators {
  return {
    authority: "",
    poolId: "",
    whitelistedValidators: []
  };
}
export const MsgUpdateWhitelistedValidators = {
  encode(message: MsgUpdateWhitelistedValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhitelistedValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWhitelistedValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.whitelistedValidators.push(WhitelistedValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateWhitelistedValidators {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      whitelistedValidators: Array.isArray(object?.whitelistedValidators) ? object.whitelistedValidators.map((e: any) => WhitelistedValidator.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateWhitelistedValidators): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    if (message.whitelistedValidators) {
      obj.whitelistedValidators = message.whitelistedValidators.map(e => e ? WhitelistedValidator.toJSON(e) : undefined);
    } else {
      obj.whitelistedValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWhitelistedValidators>): MsgUpdateWhitelistedValidators {
    const message = createBaseMsgUpdateWhitelistedValidators();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId ?? "";
    message.whitelistedValidators = object.whitelistedValidators?.map(e => WhitelistedValidator.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUpdateWhitelistedValidatorsResponse(): MsgUpdateWhitelistedValidatorsResponse {
  return {};
}
export const MsgUpdateWhitelistedValidatorsResponse = {
  encode(_: MsgUpdateWhitelistedValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhitelistedValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWhitelistedValidatorsResponse();
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
  fromJSON(_: any): MsgUpdateWhitelistedValidatorsResponse {
    return {};
  },
  toJSON(_: MsgUpdateWhitelistedValidatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateWhitelistedValidatorsResponse>): MsgUpdateWhitelistedValidatorsResponse {
    const message = createBaseMsgUpdateWhitelistedValidatorsResponse();
    return message;
  }
};
function createBaseMsgUpdateWeightedRewardsReceivers(): MsgUpdateWeightedRewardsReceivers {
  return {
    authority: "",
    poolId: "",
    weightedRewardsReceivers: []
  };
}
export const MsgUpdateWeightedRewardsReceivers = {
  encode(message: MsgUpdateWeightedRewardsReceivers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    for (const v of message.weightedRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightedRewardsReceivers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeightedRewardsReceivers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.weightedRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateWeightedRewardsReceivers {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      weightedRewardsReceivers: Array.isArray(object?.weightedRewardsReceivers) ? object.weightedRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateWeightedRewardsReceivers): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    if (message.weightedRewardsReceivers) {
      obj.weightedRewardsReceivers = message.weightedRewardsReceivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
    } else {
      obj.weightedRewardsReceivers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWeightedRewardsReceivers>): MsgUpdateWeightedRewardsReceivers {
    const message = createBaseMsgUpdateWeightedRewardsReceivers();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId ?? "";
    message.weightedRewardsReceivers = object.weightedRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUpdateWeightedRewardsReceiversResponse(): MsgUpdateWeightedRewardsReceiversResponse {
  return {};
}
export const MsgUpdateWeightedRewardsReceiversResponse = {
  encode(_: MsgUpdateWeightedRewardsReceiversResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightedRewardsReceiversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeightedRewardsReceiversResponse();
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
  fromJSON(_: any): MsgUpdateWeightedRewardsReceiversResponse {
    return {};
  },
  toJSON(_: MsgUpdateWeightedRewardsReceiversResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateWeightedRewardsReceiversResponse>): MsgUpdateWeightedRewardsReceiversResponse {
    const message = createBaseMsgUpdateWeightedRewardsReceiversResponse();
    return message;
  }
};
function createBaseMsgSetPoolPaused(): MsgSetPoolPaused {
  return {
    authority: "",
    poolId: "",
    isPaused: false
  };
}
export const MsgSetPoolPaused = {
  encode(message: MsgSetPoolPaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.isPaused === true) {
      writer.uint32(24).bool(message.isPaused);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolPaused {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.isPaused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPoolPaused {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      isPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false
    };
  },
  toJSON(message: MsgSetPoolPaused): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.isPaused !== undefined && (obj.isPaused = message.isPaused);
    return obj;
  },
  fromPartial(object: Partial<MsgSetPoolPaused>): MsgSetPoolPaused {
    const message = createBaseMsgSetPoolPaused();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId ?? "";
    message.isPaused = object.isPaused ?? false;
    return message;
  }
};
function createBaseMsgSetPoolPausedResponse(): MsgSetPoolPausedResponse {
  return {};
}
export const MsgSetPoolPausedResponse = {
  encode(_: MsgSetPoolPausedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolPausedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolPausedResponse();
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
  fromJSON(_: any): MsgSetPoolPausedResponse {
    return {};
  },
  toJSON(_: MsgSetPoolPausedResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPoolPausedResponse>): MsgSetPoolPausedResponse {
    const message = createBaseMsgSetPoolPausedResponse();
    return message;
  }
};
function createBaseMsgSetModulePaused(): MsgSetModulePaused {
  return {
    authority: "",
    isPaused: false
  };
}
export const MsgSetModulePaused = {
  encode(message: MsgSetModulePaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.isPaused === true) {
      writer.uint32(16).bool(message.isPaused);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModulePaused {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModulePaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.isPaused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetModulePaused {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      isPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false
    };
  },
  toJSON(message: MsgSetModulePaused): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.isPaused !== undefined && (obj.isPaused = message.isPaused);
    return obj;
  },
  fromPartial(object: Partial<MsgSetModulePaused>): MsgSetModulePaused {
    const message = createBaseMsgSetModulePaused();
    message.authority = object.authority ?? "";
    message.isPaused = object.isPaused ?? false;
    return message;
  }
};
function createBaseMsgSetModulePausedResponse(): MsgSetModulePausedResponse {
  return {};
}
export const MsgSetModulePausedResponse = {
  encode(_: MsgSetModulePausedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModulePausedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModulePausedResponse();
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
  fromJSON(_: any): MsgSetModulePausedResponse {
    return {};
  },
  toJSON(_: MsgSetModulePausedResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetModulePausedResponse>): MsgSetModulePausedResponse {
    const message = createBaseMsgSetModulePausedResponse();
    return message;
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    burner: "",
    amount: undefined
  };
}
export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurn {
    return {
      burner: isSet(object.burner) ? String(object.burner) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.burner !== undefined && (obj.burner = message.burner);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.burner = object.burner ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromJSON(_: any): MsgBurnResponse {
    return {};
  },
  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};