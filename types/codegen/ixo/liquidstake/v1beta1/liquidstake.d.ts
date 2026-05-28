import * as _m0 from "protobufjs/minimal";
/** ValidatorStatus enumerates the status of a liquid validator. */
export declare enum ValidatorStatus {
    /** VALIDATOR_STATUS_UNSPECIFIED - VALIDATOR_STATUS_UNSPECIFIED defines the unspecified invalid status. */
    VALIDATOR_STATUS_UNSPECIFIED = 0,
    /** VALIDATOR_STATUS_ACTIVE - VALIDATOR_STATUS_ACTIVE defines the active, valid status */
    VALIDATOR_STATUS_ACTIVE = 1,
    /** VALIDATOR_STATUS_INACTIVE - VALIDATOR_STATUS_INACTIVE defines the inactive, invalid status */
    VALIDATOR_STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const ValidatorStatusSDKType: typeof ValidatorStatus;
export declare function validatorStatusFromJSON(object: any): ValidatorStatus;
export declare function validatorStatusToJSON(object: ValidatorStatus): string;
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const ModuleParams: {
    encode(message: ModuleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParams;
    fromJSON(object: any): ModuleParams;
    toJSON(message: ModuleParams): unknown;
    fromPartial(object: Partial<ModuleParams>): ModuleParams;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: Partial<Pool>): Pool;
};
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress;
    fromJSON(object: any): WeightedAddress;
    toJSON(message: WeightedAddress): unknown;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
};
export declare const WhitelistedValidator: {
    encode(message: WhitelistedValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistedValidator;
    fromJSON(object: any): WhitelistedValidator;
    toJSON(message: WhitelistedValidator): unknown;
    fromPartial(object: Partial<WhitelistedValidator>): WhitelistedValidator;
};
export declare const LiquidValidator: {
    encode(message: LiquidValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidator;
    fromJSON(object: any): LiquidValidator;
    toJSON(message: LiquidValidator): unknown;
    fromPartial(object: Partial<LiquidValidator>): LiquidValidator;
};
export declare const LiquidValidatorState: {
    encode(message: LiquidValidatorState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidatorState;
    fromJSON(object: any): LiquidValidatorState;
    toJSON(message: LiquidValidatorState): unknown;
    fromPartial(object: Partial<LiquidValidatorState>): LiquidValidatorState;
};
export declare const NetAmountState: {
    encode(message: NetAmountState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetAmountState;
    fromJSON(object: any): NetAmountState;
    toJSON(message: NetAmountState): unknown;
    fromPartial(object: Partial<NetAmountState>): NetAmountState;
};
