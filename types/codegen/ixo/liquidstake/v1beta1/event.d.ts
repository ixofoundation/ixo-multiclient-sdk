import { Params, ParamsSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
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
export declare const LiquidStakeParamsUpdatedEvent: {
    encode(message: LiquidStakeParamsUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidStakeParamsUpdatedEvent;
    fromJSON(object: any): LiquidStakeParamsUpdatedEvent;
    toJSON(message: LiquidStakeParamsUpdatedEvent): unknown;
    fromPartial(object: Partial<LiquidStakeParamsUpdatedEvent>): LiquidStakeParamsUpdatedEvent;
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
