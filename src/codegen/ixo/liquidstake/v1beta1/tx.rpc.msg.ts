//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidStake = this.liquidStake.bind(this);
    this.liquidUnstake = this.liquidUnstake.bind(this);
    this.createPool = this.createPool.bind(this);
    this.updateModuleParams = this.updateModuleParams.bind(this);
    this.updatePool = this.updatePool.bind(this);
    this.updateWhitelistedValidators = this.updateWhitelistedValidators.bind(this);
    this.updateWeightedRewardsReceivers = this.updateWeightedRewardsReceivers.bind(this);
    this.setPoolPaused = this.setPoolPaused.bind(this);
    this.setModulePaused = this.setModulePaused.bind(this);
    this.burn = this.burn.bind(this);
  }
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "LiquidStake", data);
    return promise.then(data => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
  }
  liquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "LiquidUnstake", data);
    return promise.then(data => MsgLiquidUnstakeResponse.decode(new _m0.Reader(data)));
  }
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }
  updateModuleParams(request: MsgUpdateModuleParams): Promise<MsgUpdateModuleParamsResponse> {
    const data = MsgUpdateModuleParams.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "UpdateModuleParams", data);
    return promise.then(data => MsgUpdateModuleParamsResponse.decode(new _m0.Reader(data)));
  }
  updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "UpdatePool", data);
    return promise.then(data => MsgUpdatePoolResponse.decode(new _m0.Reader(data)));
  }
  updateWhitelistedValidators(request: MsgUpdateWhitelistedValidators): Promise<MsgUpdateWhitelistedValidatorsResponse> {
    const data = MsgUpdateWhitelistedValidators.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "UpdateWhitelistedValidators", data);
    return promise.then(data => MsgUpdateWhitelistedValidatorsResponse.decode(new _m0.Reader(data)));
  }
  updateWeightedRewardsReceivers(request: MsgUpdateWeightedRewardsReceivers): Promise<MsgUpdateWeightedRewardsReceiversResponse> {
    const data = MsgUpdateWeightedRewardsReceivers.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "UpdateWeightedRewardsReceivers", data);
    return promise.then(data => MsgUpdateWeightedRewardsReceiversResponse.decode(new _m0.Reader(data)));
  }
  setPoolPaused(request: MsgSetPoolPaused): Promise<MsgSetPoolPausedResponse> {
    const data = MsgSetPoolPaused.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "SetPoolPaused", data);
    return promise.then(data => MsgSetPoolPausedResponse.decode(new _m0.Reader(data)));
  }
  setModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse> {
    const data = MsgSetModulePaused.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "SetModulePaused", data);
    return promise.then(data => MsgSetModulePausedResponse.decode(new _m0.Reader(data)));
  }
  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
  }
}