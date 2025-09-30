import { Rpc } from "../../../helpers";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgLiquidUnstake, MsgLiquidUnstakeResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateWhitelistedValidators, MsgUpdateWhitelistedValidatorsResponse, MsgUpdateWeightedRewardsReceivers, MsgUpdateWeightedRewardsReceiversResponse, MsgSetModulePaused, MsgSetModulePausedResponse, MsgBurn, MsgBurnResponse } from "./tx";
/** Msg defines the liquid staking Msg service. */
export interface Msg {
    /**
     * LiquidStake defines a method for performing a delegation of coins
     * from a delegator to whitelisted validators.
     */
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    /**
     * LiquidUnstake defines a method for performing an undelegation of liquid
     * staking from a delegate.
     */
    liquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
    /** UpdateParams defines a method to update the module params. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * UpdateWhitelistedValidators defines a method to update the whitelisted
     * validators list.
     */
    updateWhitelistedValidators(request: MsgUpdateWhitelistedValidators): Promise<MsgUpdateWhitelistedValidatorsResponse>;
    /**
     * UpdateWhitelistedValidators defines a method to update the whitelisted
     * validators list. Only the whitelist admin address can update this list.
     */
    updateWeightedRewardsReceivers(request: MsgUpdateWeightedRewardsReceivers): Promise<MsgUpdateWeightedRewardsReceiversResponse>;
    /**
     * SetModulePaused  defines a method to update the module's pause status,
     * setting value of the safety flag in params.
     */
    setModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse>;
    /** Burn defines a method for burning coins. */
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    liquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    updateWhitelistedValidators(request: MsgUpdateWhitelistedValidators): Promise<MsgUpdateWhitelistedValidatorsResponse>;
    updateWeightedRewardsReceivers(request: MsgUpdateWeightedRewardsReceivers): Promise<MsgUpdateWeightedRewardsReceiversResponse>;
    setModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
}
