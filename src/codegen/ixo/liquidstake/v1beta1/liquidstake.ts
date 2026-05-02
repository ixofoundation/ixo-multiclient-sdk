//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** ValidatorStatus enumerates the status of a liquid validator. */
export enum ValidatorStatus {
  /** VALIDATOR_STATUS_UNSPECIFIED - VALIDATOR_STATUS_UNSPECIFIED defines the unspecified invalid status. */
  VALIDATOR_STATUS_UNSPECIFIED = 0,
  /** VALIDATOR_STATUS_ACTIVE - VALIDATOR_STATUS_ACTIVE defines the active, valid status */
  VALIDATOR_STATUS_ACTIVE = 1,
  /** VALIDATOR_STATUS_INACTIVE - VALIDATOR_STATUS_INACTIVE defines the inactive, invalid status */
  VALIDATOR_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const ValidatorStatusSDKType = ValidatorStatus;
export function validatorStatusFromJSON(object: any): ValidatorStatus {
  switch (object) {
    case 0:
    case "VALIDATOR_STATUS_UNSPECIFIED":
      return ValidatorStatus.VALIDATOR_STATUS_UNSPECIFIED;
    case 1:
    case "VALIDATOR_STATUS_ACTIVE":
      return ValidatorStatus.VALIDATOR_STATUS_ACTIVE;
    case 2:
    case "VALIDATOR_STATUS_INACTIVE":
      return ValidatorStatus.VALIDATOR_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidatorStatus.UNRECOGNIZED;
  }
}
export function validatorStatusToJSON(object: ValidatorStatus): string {
  switch (object) {
    case ValidatorStatus.VALIDATOR_STATUS_UNSPECIFIED:
      return "VALIDATOR_STATUS_UNSPECIFIED";
    case ValidatorStatus.VALIDATOR_STATUS_ACTIVE:
      return "VALIDATOR_STATUS_ACTIVE";
    case ValidatorStatus.VALIDATOR_STATUS_INACTIVE:
      return "VALIDATOR_STATUS_INACTIVE";
    case ValidatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Params defines the legacy single-pool params layout.
 * 
 * DEPRECATED: kept only so the v7 upgrade migration can unmarshal pre-upgrade
 * state from the KV store. New code must use ModuleParams (global) and Pool
 * (per-pool). Do not reference this from new application logic.
 */
/** @deprecated */
export interface Params {
  liquidBondDenom: string;
  whitelistedValidators: WhitelistedValidator[];
  unstakeFeeRate: string;
  minLiquidStakeAmount: string;
  feeAccountAddress: string;
  autocompoundFeeRate: string;
  whitelistAdminAddress: string;
  modulePaused: boolean;
  weightedRewardsReceivers: WeightedAddress[];
}
/**
 * Params defines the legacy single-pool params layout.
 * 
 * DEPRECATED: kept only so the v7 upgrade migration can unmarshal pre-upgrade
 * state from the KV store. New code must use ModuleParams (global) and Pool
 * (per-pool). Do not reference this from new application logic.
 */
/** @deprecated */
export interface ParamsSDKType {
  liquid_bond_denom: string;
  whitelisted_validators: WhitelistedValidatorSDKType[];
  unstake_fee_rate: string;
  min_liquid_stake_amount: string;
  fee_account_address: string;
  autocompound_fee_rate: string;
  whitelist_admin_address: string;
  module_paused: boolean;
  weighted_rewards_receivers: WeightedAddressSDKType[];
}
/**
 * ModuleParams defines global, module-wide parameters that apply across every
 * liquid staking pool.
 */
export interface ModuleParams {
  /**
   * min_liquid_stake_amount is the minimum amount of native tokens that can
   * be liquid-staked into any pool, applied across the entire module to
   * minimise decimal loss and gas waste from dust amounts.
   */
  minLiquidStakeAmount: string;
  /**
   * module_paused is a global emergency kill switch. When true, ALL pools
   * are paused regardless of their per-pool paused flag: liquid_stake,
   * liquid_unstake, autocompounding, rebalancing, and BeginBlocker logic
   * are halted module-wide. Used for migrations or critical incidents.
   */
  modulePaused: boolean;
}
/**
 * ModuleParams defines global, module-wide parameters that apply across every
 * liquid staking pool.
 */
export interface ModuleParamsSDKType {
  min_liquid_stake_amount: string;
  module_paused: boolean;
}
/**
 * Pool defines a single liquid staking instance with its own LST denom,
 * validator whitelist, admin, and fee configuration. Each pool maintains an
 * independent NetAmount/Supply ratio, so two pools' LST tokens are NOT
 * fungible with each other and may diverge in IXO value over time.
 */
export interface Pool {
  /**
   * pool_id is the unique, immutable identifier for this pool (e.g. "zero",
   * "qi"). Used in storage keys, message routing, and proxy account
   * derivation. Set at pool creation; cannot be changed.
   */
  poolId: string;
  /**
   * liquid_bond_denom is the denomination of the LST minted by this pool
   * (e.g. "uzero"). Must be globally unique across all pools. Immutable.
   */
  liquidBondDenom: string;
  /**
   * proxy_account_address is the bech32-encoded address of the per-pool
   * delegation proxy account. All delegations, redelegations, unbondings,
   * and reward withdrawals for this pool flow through this account.
   * Derived deterministically from pool_id at creation; immutable.
   * For the legacy "zero" pool migrated from pre-v7 state, this field
   * holds the original LiquidStakeProxyAcc address so existing
   * delegations are preserved without state migration.
   */
  proxyAccountAddress: string;
  /**
   * whitelisted_validators are the validators eligible for delegation from
   * this pool's proxy account. Target weights must sum to 10000.
   */
  whitelistedValidators: WhitelistedValidator[];
  /**
   * unstake_fee_rate is deducted from the unbonding amount when an unstake
   * is requested against this pool.
   */
  unstakeFeeRate: string;
  /**
   * fee_account_address is the bech32-encoded address that accumulates the
   * autocompound fee for this pool.
   */
  feeAccountAddress: string;
  /**
   * autocompound_fee_rate is the fraction of accrued staking rewards taken
   * by this pool as a protocol fee on each autocompound epoch and sent to
   * fee_account_address.
   */
  autocompoundFeeRate: string;
  /**
   * whitelist_admin_address is the bech32-encoded address authorised to
   * update this pool's whitelisted_validators, weighted_rewards_receivers,
   * paused flag, and other mutable pool fields. Governance can also update
   * these fields. The admin is also the only address allowed to call
   * LiquidStake against this pool.
   */
  whitelistAdminAddress: string;
  /**
   * paused is a per-pool safety toggle. When true, this specific pool's
   * stake/unstake, autocompounding, and rebalancing are halted; other
   * pools are unaffected. The global ModuleParams.module_paused flag
   * overrides this and pauses every pool regardless of its per-pool value.
   */
  paused: boolean;
  /**
   * weighted_rewards_receivers are the addresses that receive a weighted
   * share of this pool's autocompound rewards. The sum of weights must
   * not exceed 1; the remainder is restaked to validators.
   */
  weightedRewardsReceivers: WeightedAddress[];
}
/**
 * Pool defines a single liquid staking instance with its own LST denom,
 * validator whitelist, admin, and fee configuration. Each pool maintains an
 * independent NetAmount/Supply ratio, so two pools' LST tokens are NOT
 * fungible with each other and may diverge in IXO value over time.
 */
export interface PoolSDKType {
  pool_id: string;
  liquid_bond_denom: string;
  proxy_account_address: string;
  whitelisted_validators: WhitelistedValidatorSDKType[];
  unstake_fee_rate: string;
  fee_account_address: string;
  autocompound_fee_rate: string;
  whitelist_admin_address: string;
  paused: boolean;
  weighted_rewards_receivers: WeightedAddressSDKType[];
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of autocompounding
 * rewards to be paid to the address.
 */
export interface WeightedAddress {
  address: string;
  weight: string;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of autocompounding
 * rewards to be paid to the address.
 */
export interface WeightedAddressSDKType {
  address: string;
  weight: string;
}
/**
 * WhitelistedValidator consists of the validator operator address and the
 * target weight, which is a value for calculating the real weight to be derived
 * according to the active status.
 */
export interface WhitelistedValidator {
  /**
   * validator_address defines the bech32-encoded address of the whitelisted
   * validator
   */
  validatorAddress: string;
  /**
   * target_weight specifies the target weight for liquid staking, unstaking
   * amount, which is a value for calculating the real weight to be derived
   * according to the active status
   */
  targetWeight: string;
}
/**
 * WhitelistedValidator consists of the validator operator address and the
 * target weight, which is a value for calculating the real weight to be derived
 * according to the active status.
 */
export interface WhitelistedValidatorSDKType {
  validator_address: string;
  target_weight: string;
}
/**
 * LiquidValidator defines a Validator that can be the target of LiquidStaking
 * and LiquidUnstaking, Active, Weight, etc. fields are derived as functions to
 * deal with by maintaining consistency with the state of the staking module.
 */
export interface LiquidValidator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
}
/**
 * LiquidValidator defines a Validator that can be the target of LiquidStaking
 * and LiquidUnstaking, Active, Weight, etc. fields are derived as functions to
 * deal with by maintaining consistency with the state of the staking module.
 */
export interface LiquidValidatorSDKType {
  operator_address: string;
}
/**
 * LiquidValidatorState is type LiquidValidator with state added to return to
 * query results.
 */
export interface LiquidValidatorState {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
  /** weight specifies the weight for liquid staking, unstaking amount */
  weight: string;
  /** status is the liquid validator status */
  status: ValidatorStatus;
  /** del_shares define the delegation shares of the validator */
  delShares: string;
  /**
   * liquid_tokens define the token amount worth of delegation shares of the
   * validator (slashing applied amount)
   */
  liquidTokens: string;
}
/**
 * LiquidValidatorState is type LiquidValidator with state added to return to
 * query results.
 */
export interface LiquidValidatorStateSDKType {
  operator_address: string;
  weight: string;
  status: ValidatorStatus;
  del_shares: string;
  liquid_tokens: string;
}
/**
 * NetAmountState holds the raw amounts and exchange rates for a single pool.
 * Computed on the fly from pool state every time (never persisted), and used
 * for unstake-rate calculation and queries. Each pool has its own independent
 * NetAmountState.
 */
export interface NetAmountState {
  /**
   * stake_rate is the mint rate when staking into this pool.
   * Always 1.0: 1 native token mints 1 LST regardless of accrued rewards.
   */
  stakeRate: string;
  /**
   * unstake_rate is the burn rate when unstaking from this pool, equal to
   * net_amount / stkixo_total_supply. Diverges from 1.0 as rewards accrue
   * or slashing occurs.
   */
  unstakeRate: string;
  /** stkixo_total_supply is the total supply of this pool's LST denom. */
  stkixoTotalSupply: string;
  /**
   * net_amount is this pool's total liquid tokens + total unbonding balance,
   * measured at its own proxy account.
   */
  netAmount: string;
  /**
   * total_del_shares is the sum of delegation shares held by this pool's
   * proxy account across all of its liquid validators.
   */
  totalDelShares: string;
  /**
   * total_liquid_tokens is the token-equivalent of total_del_shares with
   * slashing applied, summed across this pool's liquid validators.
   */
  totalLiquidTokens: string;
  /**
   * total_remaining_rewards is the sum of unwithdrawn staking rewards owed
   * to this pool's proxy account from all its liquid validators.
   */
  totalRemainingRewards: string;
  /**
   * total_unbonding_balance is the sum of unbonding amounts (slashing
   * applied) for this pool's proxy account.
   */
  totalUnbondingBalance: string;
  /**
   * proxy_acc_balance is the spendable native-token balance currently sitting
   * in this pool's proxy account (rewards withdrawn but not yet redelegated).
   */
  proxyAccBalance: string;
}
/**
 * NetAmountState holds the raw amounts and exchange rates for a single pool.
 * Computed on the fly from pool state every time (never persisted), and used
 * for unstake-rate calculation and queries. Each pool has its own independent
 * NetAmountState.
 */
export interface NetAmountStateSDKType {
  stake_rate: string;
  unstake_rate: string;
  stkixo_total_supply: string;
  net_amount: string;
  total_del_shares: string;
  total_liquid_tokens: string;
  total_remaining_rewards: string;
  total_unbonding_balance: string;
  proxy_acc_balance: string;
}
function createBaseParams(): Params {
  return {
    liquidBondDenom: "",
    whitelistedValidators: [],
    unstakeFeeRate: "",
    minLiquidStakeAmount: "",
    feeAccountAddress: "",
    autocompoundFeeRate: "",
    whitelistAdminAddress: "",
    modulePaused: false,
    weightedRewardsReceivers: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidBondDenom !== "") {
      writer.uint32(10).string(message.liquidBondDenom);
    }
    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.unstakeFeeRate !== "") {
      writer.uint32(26).string(message.unstakeFeeRate);
    }
    if (message.minLiquidStakeAmount !== "") {
      writer.uint32(34).string(message.minLiquidStakeAmount);
    }
    if (message.feeAccountAddress !== "") {
      writer.uint32(42).string(message.feeAccountAddress);
    }
    if (message.autocompoundFeeRate !== "") {
      writer.uint32(50).string(message.autocompoundFeeRate);
    }
    if (message.whitelistAdminAddress !== "") {
      writer.uint32(58).string(message.whitelistAdminAddress);
    }
    if (message.modulePaused === true) {
      writer.uint32(64).bool(message.modulePaused);
    }
    for (const v of message.weightedRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.liquidBondDenom = reader.string();
          break;
        case 2:
          message.whitelistedValidators.push(WhitelistedValidator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unstakeFeeRate = reader.string();
          break;
        case 4:
          message.minLiquidStakeAmount = reader.string();
          break;
        case 5:
          message.feeAccountAddress = reader.string();
          break;
        case 6:
          message.autocompoundFeeRate = reader.string();
          break;
        case 7:
          message.whitelistAdminAddress = reader.string();
          break;
        case 8:
          message.modulePaused = reader.bool();
          break;
        case 9:
          message.weightedRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
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
      liquidBondDenom: isSet(object.liquidBondDenom) ? String(object.liquidBondDenom) : "",
      whitelistedValidators: Array.isArray(object?.whitelistedValidators) ? object.whitelistedValidators.map((e: any) => WhitelistedValidator.fromJSON(e)) : [],
      unstakeFeeRate: isSet(object.unstakeFeeRate) ? String(object.unstakeFeeRate) : "",
      minLiquidStakeAmount: isSet(object.minLiquidStakeAmount) ? String(object.minLiquidStakeAmount) : "",
      feeAccountAddress: isSet(object.feeAccountAddress) ? String(object.feeAccountAddress) : "",
      autocompoundFeeRate: isSet(object.autocompoundFeeRate) ? String(object.autocompoundFeeRate) : "",
      whitelistAdminAddress: isSet(object.whitelistAdminAddress) ? String(object.whitelistAdminAddress) : "",
      modulePaused: isSet(object.modulePaused) ? Boolean(object.modulePaused) : false,
      weightedRewardsReceivers: Array.isArray(object?.weightedRewardsReceivers) ? object.weightedRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.liquidBondDenom !== undefined && (obj.liquidBondDenom = message.liquidBondDenom);
    if (message.whitelistedValidators) {
      obj.whitelistedValidators = message.whitelistedValidators.map(e => e ? WhitelistedValidator.toJSON(e) : undefined);
    } else {
      obj.whitelistedValidators = [];
    }
    message.unstakeFeeRate !== undefined && (obj.unstakeFeeRate = message.unstakeFeeRate);
    message.minLiquidStakeAmount !== undefined && (obj.minLiquidStakeAmount = message.minLiquidStakeAmount);
    message.feeAccountAddress !== undefined && (obj.feeAccountAddress = message.feeAccountAddress);
    message.autocompoundFeeRate !== undefined && (obj.autocompoundFeeRate = message.autocompoundFeeRate);
    message.whitelistAdminAddress !== undefined && (obj.whitelistAdminAddress = message.whitelistAdminAddress);
    message.modulePaused !== undefined && (obj.modulePaused = message.modulePaused);
    if (message.weightedRewardsReceivers) {
      obj.weightedRewardsReceivers = message.weightedRewardsReceivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
    } else {
      obj.weightedRewardsReceivers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.liquidBondDenom = object.liquidBondDenom ?? "";
    message.whitelistedValidators = object.whitelistedValidators?.map(e => WhitelistedValidator.fromPartial(e)) || [];
    message.unstakeFeeRate = object.unstakeFeeRate ?? "";
    message.minLiquidStakeAmount = object.minLiquidStakeAmount ?? "";
    message.feeAccountAddress = object.feeAccountAddress ?? "";
    message.autocompoundFeeRate = object.autocompoundFeeRate ?? "";
    message.whitelistAdminAddress = object.whitelistAdminAddress ?? "";
    message.modulePaused = object.modulePaused ?? false;
    message.weightedRewardsReceivers = object.weightedRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseModuleParams(): ModuleParams {
  return {
    minLiquidStakeAmount: "",
    modulePaused: false
  };
}
export const ModuleParams = {
  encode(message: ModuleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minLiquidStakeAmount !== "") {
      writer.uint32(10).string(message.minLiquidStakeAmount);
    }
    if (message.modulePaused === true) {
      writer.uint32(16).bool(message.modulePaused);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLiquidStakeAmount = reader.string();
          break;
        case 2:
          message.modulePaused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleParams {
    return {
      minLiquidStakeAmount: isSet(object.minLiquidStakeAmount) ? String(object.minLiquidStakeAmount) : "",
      modulePaused: isSet(object.modulePaused) ? Boolean(object.modulePaused) : false
    };
  },
  toJSON(message: ModuleParams): unknown {
    const obj: any = {};
    message.minLiquidStakeAmount !== undefined && (obj.minLiquidStakeAmount = message.minLiquidStakeAmount);
    message.modulePaused !== undefined && (obj.modulePaused = message.modulePaused);
    return obj;
  },
  fromPartial(object: Partial<ModuleParams>): ModuleParams {
    const message = createBaseModuleParams();
    message.minLiquidStakeAmount = object.minLiquidStakeAmount ?? "";
    message.modulePaused = object.modulePaused ?? false;
    return message;
  }
};
function createBasePool(): Pool {
  return {
    poolId: "",
    liquidBondDenom: "",
    proxyAccountAddress: "",
    whitelistedValidators: [],
    unstakeFeeRate: "",
    feeAccountAddress: "",
    autocompoundFeeRate: "",
    whitelistAdminAddress: "",
    paused: false,
    weightedRewardsReceivers: []
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.liquidBondDenom !== "") {
      writer.uint32(18).string(message.liquidBondDenom);
    }
    if (message.proxyAccountAddress !== "") {
      writer.uint32(26).string(message.proxyAccountAddress);
    }
    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.unstakeFeeRate !== "") {
      writer.uint32(42).string(message.unstakeFeeRate);
    }
    if (message.feeAccountAddress !== "") {
      writer.uint32(50).string(message.feeAccountAddress);
    }
    if (message.autocompoundFeeRate !== "") {
      writer.uint32(58).string(message.autocompoundFeeRate);
    }
    if (message.whitelistAdminAddress !== "") {
      writer.uint32(66).string(message.whitelistAdminAddress);
    }
    if (message.paused === true) {
      writer.uint32(72).bool(message.paused);
    }
    for (const v of message.weightedRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.liquidBondDenom = reader.string();
          break;
        case 3:
          message.proxyAccountAddress = reader.string();
          break;
        case 4:
          message.whitelistedValidators.push(WhitelistedValidator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unstakeFeeRate = reader.string();
          break;
        case 6:
          message.feeAccountAddress = reader.string();
          break;
        case 7:
          message.autocompoundFeeRate = reader.string();
          break;
        case 8:
          message.whitelistAdminAddress = reader.string();
          break;
        case 9:
          message.paused = reader.bool();
          break;
        case 10:
          message.weightedRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      liquidBondDenom: isSet(object.liquidBondDenom) ? String(object.liquidBondDenom) : "",
      proxyAccountAddress: isSet(object.proxyAccountAddress) ? String(object.proxyAccountAddress) : "",
      whitelistedValidators: Array.isArray(object?.whitelistedValidators) ? object.whitelistedValidators.map((e: any) => WhitelistedValidator.fromJSON(e)) : [],
      unstakeFeeRate: isSet(object.unstakeFeeRate) ? String(object.unstakeFeeRate) : "",
      feeAccountAddress: isSet(object.feeAccountAddress) ? String(object.feeAccountAddress) : "",
      autocompoundFeeRate: isSet(object.autocompoundFeeRate) ? String(object.autocompoundFeeRate) : "",
      whitelistAdminAddress: isSet(object.whitelistAdminAddress) ? String(object.whitelistAdminAddress) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      weightedRewardsReceivers: Array.isArray(object?.weightedRewardsReceivers) ? object.weightedRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.liquidBondDenom !== undefined && (obj.liquidBondDenom = message.liquidBondDenom);
    message.proxyAccountAddress !== undefined && (obj.proxyAccountAddress = message.proxyAccountAddress);
    if (message.whitelistedValidators) {
      obj.whitelistedValidators = message.whitelistedValidators.map(e => e ? WhitelistedValidator.toJSON(e) : undefined);
    } else {
      obj.whitelistedValidators = [];
    }
    message.unstakeFeeRate !== undefined && (obj.unstakeFeeRate = message.unstakeFeeRate);
    message.feeAccountAddress !== undefined && (obj.feeAccountAddress = message.feeAccountAddress);
    message.autocompoundFeeRate !== undefined && (obj.autocompoundFeeRate = message.autocompoundFeeRate);
    message.whitelistAdminAddress !== undefined && (obj.whitelistAdminAddress = message.whitelistAdminAddress);
    message.paused !== undefined && (obj.paused = message.paused);
    if (message.weightedRewardsReceivers) {
      obj.weightedRewardsReceivers = message.weightedRewardsReceivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
    } else {
      obj.weightedRewardsReceivers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.poolId = object.poolId ?? "";
    message.liquidBondDenom = object.liquidBondDenom ?? "";
    message.proxyAccountAddress = object.proxyAccountAddress ?? "";
    message.whitelistedValidators = object.whitelistedValidators?.map(e => WhitelistedValidator.fromPartial(e)) || [];
    message.unstakeFeeRate = object.unstakeFeeRate ?? "";
    message.feeAccountAddress = object.feeAccountAddress ?? "";
    message.autocompoundFeeRate = object.autocompoundFeeRate ?? "";
    message.whitelistAdminAddress = object.whitelistAdminAddress ?? "";
    message.paused = object.paused ?? false;
    message.weightedRewardsReceivers = object.weightedRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const WeightedAddress = {
  encode(message: WeightedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: WeightedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBaseWhitelistedValidator(): WhitelistedValidator {
  return {
    validatorAddress: "",
    targetWeight: ""
  };
}
export const WhitelistedValidator = {
  encode(message: WhitelistedValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.targetWeight !== "") {
      writer.uint32(18).string(message.targetWeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistedValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.targetWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WhitelistedValidator {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      targetWeight: isSet(object.targetWeight) ? String(object.targetWeight) : ""
    };
  },
  toJSON(message: WhitelistedValidator): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.targetWeight !== undefined && (obj.targetWeight = message.targetWeight);
    return obj;
  },
  fromPartial(object: Partial<WhitelistedValidator>): WhitelistedValidator {
    const message = createBaseWhitelistedValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    message.targetWeight = object.targetWeight ?? "";
    return message;
  }
};
function createBaseLiquidValidator(): LiquidValidator {
  return {
    operatorAddress: ""
  };
}
export const LiquidValidator = {
  encode(message: LiquidValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidValidator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  toJSON(message: LiquidValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },
  fromPartial(object: Partial<LiquidValidator>): LiquidValidator {
    const message = createBaseLiquidValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  }
};
function createBaseLiquidValidatorState(): LiquidValidatorState {
  return {
    operatorAddress: "",
    weight: "",
    status: 0,
    delShares: "",
    liquidTokens: ""
  };
}
export const LiquidValidatorState = {
  encode(message: LiquidValidatorState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.delShares !== "") {
      writer.uint32(34).string(message.delShares);
    }
    if (message.liquidTokens !== "") {
      writer.uint32(42).string(message.liquidTokens);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidatorState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidatorState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.status = (reader.int32() as any);
          break;
        case 4:
          message.delShares = reader.string();
          break;
        case 5:
          message.liquidTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidValidatorState {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      status: isSet(object.status) ? validatorStatusFromJSON(object.status) : 0,
      delShares: isSet(object.delShares) ? String(object.delShares) : "",
      liquidTokens: isSet(object.liquidTokens) ? String(object.liquidTokens) : ""
    };
  },
  toJSON(message: LiquidValidatorState): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.weight !== undefined && (obj.weight = message.weight);
    message.status !== undefined && (obj.status = validatorStatusToJSON(message.status));
    message.delShares !== undefined && (obj.delShares = message.delShares);
    message.liquidTokens !== undefined && (obj.liquidTokens = message.liquidTokens);
    return obj;
  },
  fromPartial(object: Partial<LiquidValidatorState>): LiquidValidatorState {
    const message = createBaseLiquidValidatorState();
    message.operatorAddress = object.operatorAddress ?? "";
    message.weight = object.weight ?? "";
    message.status = object.status ?? 0;
    message.delShares = object.delShares ?? "";
    message.liquidTokens = object.liquidTokens ?? "";
    return message;
  }
};
function createBaseNetAmountState(): NetAmountState {
  return {
    stakeRate: "",
    unstakeRate: "",
    stkixoTotalSupply: "",
    netAmount: "",
    totalDelShares: "",
    totalLiquidTokens: "",
    totalRemainingRewards: "",
    totalUnbondingBalance: "",
    proxyAccBalance: ""
  };
}
export const NetAmountState = {
  encode(message: NetAmountState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakeRate !== "") {
      writer.uint32(10).string(message.stakeRate);
    }
    if (message.unstakeRate !== "") {
      writer.uint32(18).string(message.unstakeRate);
    }
    if (message.stkixoTotalSupply !== "") {
      writer.uint32(26).string(message.stkixoTotalSupply);
    }
    if (message.netAmount !== "") {
      writer.uint32(34).string(message.netAmount);
    }
    if (message.totalDelShares !== "") {
      writer.uint32(42).string(message.totalDelShares);
    }
    if (message.totalLiquidTokens !== "") {
      writer.uint32(50).string(message.totalLiquidTokens);
    }
    if (message.totalRemainingRewards !== "") {
      writer.uint32(58).string(message.totalRemainingRewards);
    }
    if (message.totalUnbondingBalance !== "") {
      writer.uint32(66).string(message.totalUnbondingBalance);
    }
    if (message.proxyAccBalance !== "") {
      writer.uint32(74).string(message.proxyAccBalance);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NetAmountState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAmountState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeRate = reader.string();
          break;
        case 2:
          message.unstakeRate = reader.string();
          break;
        case 3:
          message.stkixoTotalSupply = reader.string();
          break;
        case 4:
          message.netAmount = reader.string();
          break;
        case 5:
          message.totalDelShares = reader.string();
          break;
        case 6:
          message.totalLiquidTokens = reader.string();
          break;
        case 7:
          message.totalRemainingRewards = reader.string();
          break;
        case 8:
          message.totalUnbondingBalance = reader.string();
          break;
        case 9:
          message.proxyAccBalance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NetAmountState {
    return {
      stakeRate: isSet(object.stakeRate) ? String(object.stakeRate) : "",
      unstakeRate: isSet(object.unstakeRate) ? String(object.unstakeRate) : "",
      stkixoTotalSupply: isSet(object.stkixoTotalSupply) ? String(object.stkixoTotalSupply) : "",
      netAmount: isSet(object.netAmount) ? String(object.netAmount) : "",
      totalDelShares: isSet(object.totalDelShares) ? String(object.totalDelShares) : "",
      totalLiquidTokens: isSet(object.totalLiquidTokens) ? String(object.totalLiquidTokens) : "",
      totalRemainingRewards: isSet(object.totalRemainingRewards) ? String(object.totalRemainingRewards) : "",
      totalUnbondingBalance: isSet(object.totalUnbondingBalance) ? String(object.totalUnbondingBalance) : "",
      proxyAccBalance: isSet(object.proxyAccBalance) ? String(object.proxyAccBalance) : ""
    };
  },
  toJSON(message: NetAmountState): unknown {
    const obj: any = {};
    message.stakeRate !== undefined && (obj.stakeRate = message.stakeRate);
    message.unstakeRate !== undefined && (obj.unstakeRate = message.unstakeRate);
    message.stkixoTotalSupply !== undefined && (obj.stkixoTotalSupply = message.stkixoTotalSupply);
    message.netAmount !== undefined && (obj.netAmount = message.netAmount);
    message.totalDelShares !== undefined && (obj.totalDelShares = message.totalDelShares);
    message.totalLiquidTokens !== undefined && (obj.totalLiquidTokens = message.totalLiquidTokens);
    message.totalRemainingRewards !== undefined && (obj.totalRemainingRewards = message.totalRemainingRewards);
    message.totalUnbondingBalance !== undefined && (obj.totalUnbondingBalance = message.totalUnbondingBalance);
    message.proxyAccBalance !== undefined && (obj.proxyAccBalance = message.proxyAccBalance);
    return obj;
  },
  fromPartial(object: Partial<NetAmountState>): NetAmountState {
    const message = createBaseNetAmountState();
    message.stakeRate = object.stakeRate ?? "";
    message.unstakeRate = object.unstakeRate ?? "";
    message.stkixoTotalSupply = object.stkixoTotalSupply ?? "";
    message.netAmount = object.netAmount ?? "";
    message.totalDelShares = object.totalDelShares ?? "";
    message.totalLiquidTokens = object.totalLiquidTokens ?? "";
    message.totalRemainingRewards = object.totalRemainingRewards ?? "";
    message.totalUnbondingBalance = object.totalUnbondingBalance ?? "";
    message.proxyAccBalance = object.proxyAccBalance ?? "";
    return message;
  }
};