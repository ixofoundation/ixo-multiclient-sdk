import { ModuleParams, ModuleParamsSDKType, Pool, PoolSDKType } from "./liquidstake";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
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
