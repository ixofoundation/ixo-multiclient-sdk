import { ModuleParams, ModuleParamsSDKType, Pool, PoolSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
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
 */
export interface LiquidStakeEvent {
    poolId: string;
    delegator: string;
    liquidAmount: string;
    stkIxoMintedAmount: string;
}
/**
 * LiquidStakeEvent is emitted when a liquid stake is performed against a
 * specific pool.
 */
export interface LiquidStakeEventSDKType {
    pool_id: string;
    delegator: string;
    liquid_amount: string;
    stk_ixo_minted_amount: string;
}
/**
 * LiquidUnstakeEvent is emitted when a liquid unstake is performed against
 * a specific pool.
 */
export interface LiquidUnstakeEvent {
    poolId: string;
    delegator: string;
    unstakeAmount: string;
    unbondingAmount: string;
    unbondedAmount: string;
    completionTime: string;
}
/**
 * LiquidUnstakeEvent is emitted when a liquid unstake is performed against
 * a specific pool.
 */
export interface LiquidUnstakeEventSDKType {
    pool_id: string;
    delegator: string;
    unstake_amount: string;
    unbonding_amount: string;
    unbonded_amount: string;
    completion_time: string;
}
/**
 * AddLiquidValidatorEvent is emitted when a newly whitelisted validator is
 * activated for a pool.
 */
export interface AddLiquidValidatorEvent {
    poolId: string;
    validator: string;
}
/**
 * AddLiquidValidatorEvent is emitted when a newly whitelisted validator is
 * activated for a pool.
 */
export interface AddLiquidValidatorEventSDKType {
    pool_id: string;
    validator: string;
}
/** RebalancedLiquidStakeEvent is emitted after a pool's rebalancing pass. */
export interface RebalancedLiquidStakeEvent {
    poolId: string;
    delegator: string;
    redelegationCount: string;
    redelegationFailCount: string;
}
/** RebalancedLiquidStakeEvent is emitted after a pool's rebalancing pass. */
export interface RebalancedLiquidStakeEventSDKType {
    pool_id: string;
    delegator: string;
    redelegation_count: string;
    redelegation_fail_count: string;
}
/**
 * AutocompoundStakingRewardsEvent is emitted when a pool's autocompound
 * epoch hook runs successfully.
 */
export interface AutocompoundStakingRewardsEvent {
    poolId: string;
    delegator: string;
    totalAmount: string;
    feeAmount: string;
    redelegateAmount: string;
    weightedRewardsAmount: string;
}
/**
 * AutocompoundStakingRewardsEvent is emitted when a pool's autocompound
 * epoch hook runs successfully.
 */
export interface AutocompoundStakingRewardsEventSDKType {
    pool_id: string;
    delegator: string;
    total_amount: string;
    fee_amount: string;
    redelegate_amount: string;
    weighted_rewards_amount: string;
}
export declare const ModuleParamsUpdatedEvent: {
    encode(message: ModuleParamsUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParamsUpdatedEvent;
    fromJSON(object: any): ModuleParamsUpdatedEvent;
    toJSON(message: ModuleParamsUpdatedEvent): unknown;
    fromPartial(object: Partial<ModuleParamsUpdatedEvent>): ModuleParamsUpdatedEvent;
};
export declare const PoolCreatedEvent: {
    encode(message: PoolCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolCreatedEvent;
    fromJSON(object: any): PoolCreatedEvent;
    toJSON(message: PoolCreatedEvent): unknown;
    fromPartial(object: Partial<PoolCreatedEvent>): PoolCreatedEvent;
};
export declare const PoolUpdatedEvent: {
    encode(message: PoolUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolUpdatedEvent;
    fromJSON(object: any): PoolUpdatedEvent;
    toJSON(message: PoolUpdatedEvent): unknown;
    fromPartial(object: Partial<PoolUpdatedEvent>): PoolUpdatedEvent;
};
export declare const LiquidStakeEvent: {
    encode(message: LiquidStakeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidStakeEvent;
    fromJSON(object: any): LiquidStakeEvent;
    toJSON(message: LiquidStakeEvent): unknown;
    fromPartial(object: Partial<LiquidStakeEvent>): LiquidStakeEvent;
};
export declare const LiquidUnstakeEvent: {
    encode(message: LiquidUnstakeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidUnstakeEvent;
    fromJSON(object: any): LiquidUnstakeEvent;
    toJSON(message: LiquidUnstakeEvent): unknown;
    fromPartial(object: Partial<LiquidUnstakeEvent>): LiquidUnstakeEvent;
};
export declare const AddLiquidValidatorEvent: {
    encode(message: AddLiquidValidatorEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddLiquidValidatorEvent;
    fromJSON(object: any): AddLiquidValidatorEvent;
    toJSON(message: AddLiquidValidatorEvent): unknown;
    fromPartial(object: Partial<AddLiquidValidatorEvent>): AddLiquidValidatorEvent;
};
export declare const RebalancedLiquidStakeEvent: {
    encode(message: RebalancedLiquidStakeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RebalancedLiquidStakeEvent;
    fromJSON(object: any): RebalancedLiquidStakeEvent;
    toJSON(message: RebalancedLiquidStakeEvent): unknown;
    fromPartial(object: Partial<RebalancedLiquidStakeEvent>): RebalancedLiquidStakeEvent;
};
export declare const AutocompoundStakingRewardsEvent: {
    encode(message: AutocompoundStakingRewardsEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AutocompoundStakingRewardsEvent;
    fromJSON(object: any): AutocompoundStakingRewardsEvent;
    toJSON(message: AutocompoundStakingRewardsEvent): unknown;
    fromPartial(object: Partial<AutocompoundStakingRewardsEvent>): AutocompoundStakingRewardsEvent;
};
