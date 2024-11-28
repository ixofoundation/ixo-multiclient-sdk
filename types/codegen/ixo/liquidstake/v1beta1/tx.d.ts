import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType, WhitelistedValidator, WhitelistedValidatorSDKType, WeightedAddress, WeightedAddressSDKType } from "./liquidstake";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgLiquidStake defines a SDK message for performing a liquid stake of coins
 * from a delegator to whitelisted validators.
 */
export interface MsgLiquidStake {
    delegatorAddress: string;
    amount?: Coin;
}
/**
 * MsgLiquidStake defines a SDK message for performing a liquid stake of coins
 * from a delegator to whitelisted validators.
 */
export interface MsgLiquidStakeSDKType {
    delegator_address: string;
    amount?: CoinSDKType;
}
/** MsgLiquidStakeResponse defines the MsgLiquidStake response type. */
export interface MsgLiquidStakeResponse {
}
/** MsgLiquidStakeResponse defines the MsgLiquidStake response type. */
export interface MsgLiquidStakeResponseSDKType {
}
/**
 * MsgLiquidUnstake defines a SDK message for performing an undelegation of
 * liquid staking from a delegate.
 */
export interface MsgLiquidUnstake {
    delegatorAddress: string;
    amount?: Coin;
}
/**
 * MsgLiquidUnstake defines a SDK message for performing an undelegation of
 * liquid staking from a delegate.
 */
export interface MsgLiquidUnstakeSDKType {
    delegator_address: string;
    amount?: CoinSDKType;
}
/** MsgLiquidUnstakeResponse defines the MsgLiquidUnstake response type. */
export interface MsgLiquidUnstakeResponse {
    completionTime?: Timestamp;
}
/** MsgLiquidUnstakeResponse defines the MsgLiquidUnstake response type. */
export interface MsgLiquidUnstakeResponseSDKType {
    completion_time?: TimestampSDKType;
}
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /**
     * params defines the parameters to update.
     * NOTE: denom and whitelisted_validators and weighted_rewards_receivers are
     * not updated.
     */
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response structure for executing a */
export interface MsgUpdateParamsResponse {
}
/** MsgUpdateParamsResponse defines the response structure for executing a */
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgUpdateWhitelistedValidators {
    /**
     * Authority is the address that is allowed to update whitelisted validators,
     * defined as admin address in params (WhitelistAdminAddress).
     */
    authority: string;
    /**
     * WhitelistedValidators specifies the validators elected to become Active
     * Liquid Validators.
     */
    whitelistedValidators: WhitelistedValidator[];
}
export interface MsgUpdateWhitelistedValidatorsSDKType {
    authority: string;
    whitelisted_validators: WhitelistedValidatorSDKType[];
}
/**
 * MsgUpdateWhitelistedValidatorsResponse defines the response structure for
 * executing a
 */
export interface MsgUpdateWhitelistedValidatorsResponse {
}
/**
 * MsgUpdateWhitelistedValidatorsResponse defines the response structure for
 * executing a
 */
export interface MsgUpdateWhitelistedValidatorsResponseSDKType {
}
export interface MsgUpdateWeightedRewardsReceivers {
    /**
     * Authority is the address that is allowed to update wieghted rewards
     * receivers, defined as admin address in params (WhitelistAdminAddress).
     */
    authority: string;
    /**
     * WhitelistedValidators specifies the validators elected to become Active
     * Liquid Validators.
     */
    weightedRewardsReceivers: WeightedAddress[];
}
export interface MsgUpdateWeightedRewardsReceiversSDKType {
    authority: string;
    weighted_rewards_receivers: WeightedAddressSDKType[];
}
/**
 * MsgUpdateWeightedRewardsReceiversResponse defines the response structure for
 * executing a
 */
export interface MsgUpdateWeightedRewardsReceiversResponse {
}
/**
 * MsgUpdateWeightedRewardsReceiversResponse defines the response structure for
 * executing a
 */
export interface MsgUpdateWeightedRewardsReceiversResponseSDKType {
}
export interface MsgSetModulePaused {
    /**
     * Authority is the address that is allowed to update module's paused state,
     * defined as admin address in params (WhitelistAdminAddress).
     */
    authority: string;
    /** IsPaused represents the target state of the paused flag. */
    isPaused: boolean;
}
export interface MsgSetModulePausedSDKType {
    authority: string;
    is_paused: boolean;
}
/**
 * MsgSetModulePausedResponse defines the response structure for
 * executing a
 */
export interface MsgSetModulePausedResponse {
}
/**
 * MsgSetModulePausedResponse defines the response structure for
 * executing a
 */
export interface MsgSetModulePausedResponseSDKType {
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
