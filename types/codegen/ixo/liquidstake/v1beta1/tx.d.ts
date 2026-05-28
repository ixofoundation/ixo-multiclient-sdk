import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ModuleParams, ModuleParamsSDKType, WhitelistedValidator, WhitelistedValidatorSDKType, WeightedAddress, WeightedAddressSDKType, Params, ParamsSDKType } from "./liquidstake";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgLiquidStakeResponse {
}
export interface MsgLiquidStakeResponseSDKType {
}
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
export interface MsgUpdateModuleParamsResponse {
}
export interface MsgUpdateModuleParamsResponseSDKType {
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
export interface MsgUpdatePoolResponse {
}
export interface MsgUpdatePoolResponseSDKType {
}
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
export interface MsgUpdateWhitelistedValidatorsResponse {
}
export interface MsgUpdateWhitelistedValidatorsResponseSDKType {
}
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
export interface MsgUpdateWeightedRewardsReceiversResponse {
}
export interface MsgUpdateWeightedRewardsReceiversResponseSDKType {
}
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
export interface MsgSetPoolPausedResponse {
}
export interface MsgSetPoolPausedResponseSDKType {
}
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
export interface MsgSetModulePausedResponse {
}
export interface MsgSetModulePausedResponseSDKType {
}
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
export interface MsgBurnResponse {
}
export interface MsgBurnResponseSDKType {
}
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
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgLiquidStake: {
    encode(message: MsgLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake;
    fromJSON(object: any): MsgLiquidStake;
    toJSON(message: MsgLiquidStake): unknown;
    fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake;
};
export declare const MsgLiquidStakeResponse: {
    encode(_: MsgLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse;
    fromJSON(_: any): MsgLiquidStakeResponse;
    toJSON(_: MsgLiquidStakeResponse): unknown;
    fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
};
export declare const MsgLiquidUnstake: {
    encode(message: MsgLiquidUnstake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstake;
    fromJSON(object: any): MsgLiquidUnstake;
    toJSON(message: MsgLiquidUnstake): unknown;
    fromPartial(object: Partial<MsgLiquidUnstake>): MsgLiquidUnstake;
};
export declare const MsgLiquidUnstakeResponse: {
    encode(message: MsgLiquidUnstakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstakeResponse;
    fromJSON(object: any): MsgLiquidUnstakeResponse;
    toJSON(message: MsgLiquidUnstakeResponse): unknown;
    fromPartial(object: Partial<MsgLiquidUnstakeResponse>): MsgLiquidUnstakeResponse;
};
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(message: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromJSON(object: any): MsgCreatePoolResponse;
    toJSON(message: MsgCreatePoolResponse): unknown;
    fromPartial(object: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgUpdateModuleParams: {
    encode(message: MsgUpdateModuleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModuleParams;
    fromJSON(object: any): MsgUpdateModuleParams;
    toJSON(message: MsgUpdateModuleParams): unknown;
    fromPartial(object: Partial<MsgUpdateModuleParams>): MsgUpdateModuleParams;
};
export declare const MsgUpdateModuleParamsResponse: {
    encode(_: MsgUpdateModuleParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModuleParamsResponse;
    fromJSON(_: any): MsgUpdateModuleParamsResponse;
    toJSON(_: MsgUpdateModuleParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateModuleParamsResponse>): MsgUpdateModuleParamsResponse;
};
export declare const MsgUpdatePool: {
    encode(message: MsgUpdatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool;
    fromJSON(object: any): MsgUpdatePool;
    toJSON(message: MsgUpdatePool): unknown;
    fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool;
};
export declare const MsgUpdatePoolResponse: {
    encode(_: MsgUpdatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse;
    fromJSON(_: any): MsgUpdatePoolResponse;
    toJSON(_: MsgUpdatePoolResponse): unknown;
    fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse;
};
export declare const MsgUpdateWhitelistedValidators: {
    encode(message: MsgUpdateWhitelistedValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhitelistedValidators;
    fromJSON(object: any): MsgUpdateWhitelistedValidators;
    toJSON(message: MsgUpdateWhitelistedValidators): unknown;
    fromPartial(object: Partial<MsgUpdateWhitelistedValidators>): MsgUpdateWhitelistedValidators;
};
export declare const MsgUpdateWhitelistedValidatorsResponse: {
    encode(_: MsgUpdateWhitelistedValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhitelistedValidatorsResponse;
    fromJSON(_: any): MsgUpdateWhitelistedValidatorsResponse;
    toJSON(_: MsgUpdateWhitelistedValidatorsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateWhitelistedValidatorsResponse>): MsgUpdateWhitelistedValidatorsResponse;
};
export declare const MsgUpdateWeightedRewardsReceivers: {
    encode(message: MsgUpdateWeightedRewardsReceivers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightedRewardsReceivers;
    fromJSON(object: any): MsgUpdateWeightedRewardsReceivers;
    toJSON(message: MsgUpdateWeightedRewardsReceivers): unknown;
    fromPartial(object: Partial<MsgUpdateWeightedRewardsReceivers>): MsgUpdateWeightedRewardsReceivers;
};
export declare const MsgUpdateWeightedRewardsReceiversResponse: {
    encode(_: MsgUpdateWeightedRewardsReceiversResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightedRewardsReceiversResponse;
    fromJSON(_: any): MsgUpdateWeightedRewardsReceiversResponse;
    toJSON(_: MsgUpdateWeightedRewardsReceiversResponse): unknown;
    fromPartial(_: Partial<MsgUpdateWeightedRewardsReceiversResponse>): MsgUpdateWeightedRewardsReceiversResponse;
};
export declare const MsgSetPoolPaused: {
    encode(message: MsgSetPoolPaused, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolPaused;
    fromJSON(object: any): MsgSetPoolPaused;
    toJSON(message: MsgSetPoolPaused): unknown;
    fromPartial(object: Partial<MsgSetPoolPaused>): MsgSetPoolPaused;
};
export declare const MsgSetPoolPausedResponse: {
    encode(_: MsgSetPoolPausedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolPausedResponse;
    fromJSON(_: any): MsgSetPoolPausedResponse;
    toJSON(_: MsgSetPoolPausedResponse): unknown;
    fromPartial(_: Partial<MsgSetPoolPausedResponse>): MsgSetPoolPausedResponse;
};
export declare const MsgSetModulePaused: {
    encode(message: MsgSetModulePaused, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModulePaused;
    fromJSON(object: any): MsgSetModulePaused;
    toJSON(message: MsgSetModulePaused): unknown;
    fromPartial(object: Partial<MsgSetModulePaused>): MsgSetModulePaused;
};
export declare const MsgSetModulePausedResponse: {
    encode(_: MsgSetModulePausedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModulePausedResponse;
    fromJSON(_: any): MsgSetModulePausedResponse;
    toJSON(_: MsgSetModulePausedResponse): unknown;
    fromPartial(_: Partial<MsgSetModulePausedResponse>): MsgSetModulePausedResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
