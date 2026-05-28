import { Rpc } from "../../../helpers";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgLiquidUnstake, MsgLiquidUnstakeResponse, MsgCreatePool, MsgCreatePoolResponse, MsgUpdateModuleParams, MsgUpdateModuleParamsResponse, MsgUpdatePool, MsgUpdatePoolResponse, MsgUpdateWhitelistedValidators, MsgUpdateWhitelistedValidatorsResponse, MsgUpdateWeightedRewardsReceivers, MsgUpdateWeightedRewardsReceiversResponse, MsgSetPoolPaused, MsgSetPoolPausedResponse, MsgSetModulePaused, MsgSetModulePausedResponse, MsgBurn, MsgBurnResponse } from "./tx";
/** Msg defines the liquid staking Msg service. */
export interface Msg {
    /**
     * LiquidStake delegates native tokens through a pool's proxy account to its
     * whitelisted validators and mints the pool's LST denom to the delegator.
     */
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    /**
     * LiquidUnstake burns LST denom of a specific pool and initiates unbonding
     * from that pool's whitelisted validators back to the delegator.
     */
    liquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
    /**
     * CreatePool registers a new liquid staking pool with its own LST denom,
     * proxy account, admin, and fee configuration. Governance authority only.
     */
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    /**
     * UpdateModuleParams updates global, module-wide parameters (the minimum
     * liquid stake amount and the global module-paused kill switch).
     * Governance authority only.
     */
    updateModuleParams(request: MsgUpdateModuleParams): Promise<MsgUpdateModuleParamsResponse>;
    /**
     * UpdatePool updates the mutable scalar/address fields of a specific pool
     * (fee rates, fee account, admin address). Governance or the pool's
     * current admin may call this. Whitelisted validators, weighted rewards
     * receivers, and the paused flag have their own dedicated update messages.
     */
    updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    /**
     * UpdateWhitelistedValidators updates the validator whitelist of a specific
     * pool. Governance or the pool's current admin may call this.
     */
    updateWhitelistedValidators(request: MsgUpdateWhitelistedValidators): Promise<MsgUpdateWhitelistedValidatorsResponse>;
    /**
     * UpdateWeightedRewardsReceivers updates the weighted rewards receivers
     * list of a specific pool. The pool's admin may call this.
     */
    updateWeightedRewardsReceivers(request: MsgUpdateWeightedRewardsReceivers): Promise<MsgUpdateWeightedRewardsReceiversResponse>;
    /**
     * SetPoolPaused toggles the per-pool paused flag for a specific pool.
     * Governance or the pool's current admin may call this. Other pools are
     * unaffected.
     */
    setPoolPaused(request: MsgSetPoolPaused): Promise<MsgSetPoolPausedResponse>;
    /**
     * SetModulePaused toggles the global module-paused flag in ModuleParams.
     * When paused, ALL pools are halted regardless of their per-pool flag.
     * Governance authority only.
     */
    setModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse>;
    /** Burn burns native uixo tokens. Module-level operation, not pool-scoped. */
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    liquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    updateModuleParams(request: MsgUpdateModuleParams): Promise<MsgUpdateModuleParamsResponse>;
    updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    updateWhitelistedValidators(request: MsgUpdateWhitelistedValidators): Promise<MsgUpdateWhitelistedValidatorsResponse>;
    updateWeightedRewardsReceivers(request: MsgUpdateWeightedRewardsReceivers): Promise<MsgUpdateWeightedRewardsReceiversResponse>;
    setPoolPaused(request: MsgSetPoolPaused): Promise<MsgSetPoolPausedResponse>;
    setModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
}
