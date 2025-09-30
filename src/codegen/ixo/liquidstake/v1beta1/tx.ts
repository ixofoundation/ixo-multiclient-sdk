//@ts-nocheck
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType, WhitelistedValidator, WhitelistedValidatorSDKType, WeightedAddress, WeightedAddressSDKType } from "./liquidstake";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
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
export interface MsgLiquidStakeResponse {}
/** MsgLiquidStakeResponse defines the MsgLiquidStake response type. */
export interface MsgLiquidStakeResponseSDKType {}
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
export interface MsgUpdateParamsResponse {}
/** MsgUpdateParamsResponse defines the response structure for executing a */
export interface MsgUpdateParamsResponseSDKType {}
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
export interface MsgUpdateWhitelistedValidatorsResponse {}
/**
 * MsgUpdateWhitelistedValidatorsResponse defines the response structure for
 * executing a
 */
export interface MsgUpdateWhitelistedValidatorsResponseSDKType {}
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
export interface MsgUpdateWeightedRewardsReceiversResponse {}
/**
 * MsgUpdateWeightedRewardsReceiversResponse defines the response structure for
 * executing a
 */
export interface MsgUpdateWeightedRewardsReceiversResponseSDKType {}
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
export interface MsgSetModulePausedResponse {}
/**
 * MsgSetModulePausedResponse defines the response structure for
 * executing a
 */
export interface MsgSetModulePausedResponseSDKType {}
/**
 * MsgBurn defines a SDK message for performing a burn of coins.
 * NOTE: only ixo native token can be burned
 */
export interface MsgBurn {
  burner: string;
  /**
   * amount is the amount of coins to burn
   * NOTE: only ixo native token can be burned
   */
  amount?: Coin;
}
/**
 * MsgBurn defines a SDK message for performing a burn of coins.
 * NOTE: only ixo native token can be burned
 */
export interface MsgBurnSDKType {
  burner: string;
  amount?: CoinSDKType;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseSDKType {}
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    delegatorAddress: "",
    amount: undefined
  };
}
export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidStake {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}
export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgLiquidStakeResponse {
    return {};
  },
  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  }
};
function createBaseMsgLiquidUnstake(): MsgLiquidUnstake {
  return {
    delegatorAddress: "",
    amount: undefined
  };
}
export const MsgLiquidUnstake = {
  encode(message: MsgLiquidUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidUnstake {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgLiquidUnstake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidUnstake>): MsgLiquidUnstake {
    const message = createBaseMsgLiquidUnstake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgLiquidUnstakeResponse(): MsgLiquidUnstakeResponse {
  return {
    completionTime: undefined
  };
}
export const MsgLiquidUnstakeResponse = {
  encode(message: MsgLiquidUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidUnstakeResponse {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: MsgLiquidUnstakeResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidUnstakeResponse>): MsgLiquidUnstakeResponse {
    const message = createBaseMsgLiquidUnstakeResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgUpdateWhitelistedValidators(): MsgUpdateWhitelistedValidators {
  return {
    authority: "",
    whitelistedValidators: []
  };
}
export const MsgUpdateWhitelistedValidators = {
  encode(message: MsgUpdateWhitelistedValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhitelistedValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWhitelistedValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedValidators.push(WhitelistedValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateWhitelistedValidators {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      whitelistedValidators: Array.isArray(object?.whitelistedValidators) ? object.whitelistedValidators.map((e: any) => WhitelistedValidator.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateWhitelistedValidators): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.whitelistedValidators) {
      obj.whitelistedValidators = message.whitelistedValidators.map(e => e ? WhitelistedValidator.toJSON(e) : undefined);
    } else {
      obj.whitelistedValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWhitelistedValidators>): MsgUpdateWhitelistedValidators {
    const message = createBaseMsgUpdateWhitelistedValidators();
    message.authority = object.authority ?? "";
    message.whitelistedValidators = object.whitelistedValidators?.map(e => WhitelistedValidator.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUpdateWhitelistedValidatorsResponse(): MsgUpdateWhitelistedValidatorsResponse {
  return {};
}
export const MsgUpdateWhitelistedValidatorsResponse = {
  encode(_: MsgUpdateWhitelistedValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhitelistedValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWhitelistedValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateWhitelistedValidatorsResponse {
    return {};
  },
  toJSON(_: MsgUpdateWhitelistedValidatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateWhitelistedValidatorsResponse>): MsgUpdateWhitelistedValidatorsResponse {
    const message = createBaseMsgUpdateWhitelistedValidatorsResponse();
    return message;
  }
};
function createBaseMsgUpdateWeightedRewardsReceivers(): MsgUpdateWeightedRewardsReceivers {
  return {
    authority: "",
    weightedRewardsReceivers: []
  };
}
export const MsgUpdateWeightedRewardsReceivers = {
  encode(message: MsgUpdateWeightedRewardsReceivers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.weightedRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightedRewardsReceivers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeightedRewardsReceivers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.weightedRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateWeightedRewardsReceivers {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      weightedRewardsReceivers: Array.isArray(object?.weightedRewardsReceivers) ? object.weightedRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateWeightedRewardsReceivers): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.weightedRewardsReceivers) {
      obj.weightedRewardsReceivers = message.weightedRewardsReceivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
    } else {
      obj.weightedRewardsReceivers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWeightedRewardsReceivers>): MsgUpdateWeightedRewardsReceivers {
    const message = createBaseMsgUpdateWeightedRewardsReceivers();
    message.authority = object.authority ?? "";
    message.weightedRewardsReceivers = object.weightedRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUpdateWeightedRewardsReceiversResponse(): MsgUpdateWeightedRewardsReceiversResponse {
  return {};
}
export const MsgUpdateWeightedRewardsReceiversResponse = {
  encode(_: MsgUpdateWeightedRewardsReceiversResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWeightedRewardsReceiversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeightedRewardsReceiversResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateWeightedRewardsReceiversResponse {
    return {};
  },
  toJSON(_: MsgUpdateWeightedRewardsReceiversResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateWeightedRewardsReceiversResponse>): MsgUpdateWeightedRewardsReceiversResponse {
    const message = createBaseMsgUpdateWeightedRewardsReceiversResponse();
    return message;
  }
};
function createBaseMsgSetModulePaused(): MsgSetModulePaused {
  return {
    authority: "",
    isPaused: false
  };
}
export const MsgSetModulePaused = {
  encode(message: MsgSetModulePaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.isPaused === true) {
      writer.uint32(16).bool(message.isPaused);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModulePaused {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModulePaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.isPaused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetModulePaused {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      isPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false
    };
  },
  toJSON(message: MsgSetModulePaused): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.isPaused !== undefined && (obj.isPaused = message.isPaused);
    return obj;
  },
  fromPartial(object: Partial<MsgSetModulePaused>): MsgSetModulePaused {
    const message = createBaseMsgSetModulePaused();
    message.authority = object.authority ?? "";
    message.isPaused = object.isPaused ?? false;
    return message;
  }
};
function createBaseMsgSetModulePausedResponse(): MsgSetModulePausedResponse {
  return {};
}
export const MsgSetModulePausedResponse = {
  encode(_: MsgSetModulePausedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModulePausedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModulePausedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetModulePausedResponse {
    return {};
  },
  toJSON(_: MsgSetModulePausedResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetModulePausedResponse>): MsgSetModulePausedResponse {
    const message = createBaseMsgSetModulePausedResponse();
    return message;
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    burner: "",
    amount: undefined
  };
}
export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurn {
    return {
      burner: isSet(object.burner) ? String(object.burner) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.burner !== undefined && (obj.burner = message.burner);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.burner = object.burner ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBurnResponse {
    return {};
  },
  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  }
};