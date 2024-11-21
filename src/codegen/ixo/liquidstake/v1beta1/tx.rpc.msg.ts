//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgLiquidUnstake, MsgLiquidUnstakeResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateWhitelistedValidators, MsgUpdateWhitelistedValidatorsResponse, MsgSetModulePaused, MsgSetModulePausedResponse } from "./tx";
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
   * SetModulePaused  defines a method to update the module's pause status,
   * setting value of the safety flag in params.
   */
  setModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidStake = this.liquidStake.bind(this);
    this.liquidUnstake = this.liquidUnstake.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.updateWhitelistedValidators = this.updateWhitelistedValidators.bind(this);
    this.setModulePaused = this.setModulePaused.bind(this);
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
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  updateWhitelistedValidators(request: MsgUpdateWhitelistedValidators): Promise<MsgUpdateWhitelistedValidatorsResponse> {
    const data = MsgUpdateWhitelistedValidators.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "UpdateWhitelistedValidators", data);
    return promise.then(data => MsgUpdateWhitelistedValidatorsResponse.decode(new _m0.Reader(data)));
  }
  setModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse> {
    const data = MsgSetModulePaused.encode(request).finish();
    const promise = this.rpc.request("ixo.liquidstake.v1beta1.Msg", "SetModulePaused", data);
    return promise.then(data => MsgSetModulePausedResponse.decode(new _m0.Reader(data)));
  }
}