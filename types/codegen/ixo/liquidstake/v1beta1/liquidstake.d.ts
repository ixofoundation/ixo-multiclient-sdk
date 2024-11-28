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
/** Params defines the set of params for the liquidstake module. */
export interface Params {
    /**
     * LiquidBondDenom specifies the denomination of the token receiving after
     * liquid stake, The value is calculated through NetAmount.
     */
    liquidBondDenom: string;
    /**
     * WhitelistedValidators specifies the validators elected to become Active
     * Liquid Validators.
     */
    whitelistedValidators: WhitelistedValidator[];
    /**
     * UnstakeFeeRate specifies the fee rate when liquid unstake is requested,
     * unbonded by subtracting it from unbondingAmount
     */
    unstakeFeeRate: string;
    /**
     * MinLiquidStakingAmount specifies the minimum number of coins to be staked
     * to the active liquid validators on liquid staking to minimize decimal loss
     * and consider gas efficiency.
     */
    minLiquidStakeAmount: string;
    /**
     * FeeAccountAddress defines the bech32-encoded address of
     * an account responsible for accumulating protocol fees.
     */
    feeAccountAddress: string;
    /**
     * AutocompoundFeeRate specifies the fee rate for auto redelegating the stake
     * rewards. The fee is taken in favour of the fee account (see
     * FeeAccountAddress).
     */
    autocompoundFeeRate: string;
    /**
     * WhitelistAdminAddress the bech32-encoded address of an admin authority
     * that is allowed to update whitelisted validators or pause liquidstaking
     * module entirely. It is also the only address that can update the
     * weighted_rewards_receivers.
     * The key is controlled by the ZERO dao.
     * Pausing of the module can be required during important migrations or
     * failures.
     */
    whitelistAdminAddress: string;
    /**
     * ModulePaused is a safety toggle that allows to stop main module functions
     * such as stake/unstake/stake-to-lp and the BeginBlocker logic.
     */
    modulePaused: boolean;
    /**
     * weighted_rewards_receivers is the addresses to receive the staking
     * rewards on autocompounding with weights assigned to each address.
     * The total of weights in the list in not allowed to be greater than 1.
     *
     * Eg. if the list has 1 address with weight 0.2, then on autocompounding
     * the staking rewards will be split between 0.2 for the weighted receiver
     * and 0.8 gets auto-compounded to the proxy account.
     */
    weightedRewardsReceivers: WeightedAddress[];
}
/** Params defines the set of params for the liquidstake module. */
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
 * NetAmountState is type for net amount raw data and mint rate, This is a value
 * that depends on the several module state every time, so it is used only for
 * calculation and query and is not stored in kv.
 */
export interface NetAmountState {
    /** stake_rate is the rate at which the liquid staking module mints stkIXO */
    stakeRate: string;
    /** unstake_rate is the rate at which the liquid staking module burns stkIXO */
    unstakeRate: string;
    /** btoken_total_supply returns the total supply of uzero (stkIXO denom) */
    stkixoTotalSupply: string;
    /** net_amount is proxy account's total liquid tokens + total unbonding balance */
    netAmount: string;
    /** total_del_shares define the delegation shares of all liquid validators */
    totalDelShares: string;
    /**
     * total_liquid_tokens define the token amount worth of delegation shares of
     * all liquid validator (slashing applied amount)
     */
    totalLiquidTokens: string;
    /**
     * total_remaining_rewards define the sum of remaining rewards of proxy
     * account by all liquid validators
     */
    totalRemainingRewards: string;
    /**
     * total_unbonding_balance define the unbonding balance of proxy account by
     * all liquid validator (slashing applied amount)
     */
    totalUnbondingBalance: string;
    /** proxy_acc_balance define the balance of proxy account for the native token */
    proxyAccBalance: string;
}
/**
 * NetAmountState is type for net amount raw data and mint rate, This is a value
 * that depends on the several module state every time, so it is used only for
 * calculation and query and is not stored in kv.
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
