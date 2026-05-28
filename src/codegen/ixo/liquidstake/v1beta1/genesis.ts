//@ts-nocheck
import { ModuleParams, ModuleParamsSDKType, Pool, PoolSDKType, LiquidValidator, LiquidValidatorSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the liquidstake module's genesis state. */
export interface GenesisState {
  /** module_params holds the global module-wide parameters. */
  moduleParams?: ModuleParams;
  /** pools is the list of every registered liquid staking pool. */
  pools: Pool[];
  /**
   * pool_liquid_validators groups each pool's liquid validators by pool_id.
   * The pool_id of every entry must match a Pool in pools.
   */
  poolLiquidValidators: PoolLiquidValidators[];
}
/** GenesisState defines the liquidstake module's genesis state. */
export interface GenesisStateSDKType {
  module_params?: ModuleParamsSDKType;
  pools: PoolSDKType[];
  pool_liquid_validators: PoolLiquidValidatorsSDKType[];
}
/**
 * PoolLiquidValidators groups a pool's liquid-validator state for genesis
 * import/export, since validators are scoped per pool in v7+.
 */
export interface PoolLiquidValidators {
  /** pool_id selects the owning pool. */
  poolId: string;
  /** liquid_validators is the set of liquid validators known to the pool. */
  liquidValidators: LiquidValidator[];
}
/**
 * PoolLiquidValidators groups a pool's liquid-validator state for genesis
 * import/export, since validators are scoped per pool in v7+.
 */
export interface PoolLiquidValidatorsSDKType {
  pool_id: string;
  liquid_validators: LiquidValidatorSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    moduleParams: undefined,
    pools: [],
    poolLiquidValidators: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleParams !== undefined) {
      ModuleParams.encode(message.moduleParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolLiquidValidators) {
      PoolLiquidValidators.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleParams = ModuleParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.poolLiquidValidators.push(PoolLiquidValidators.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      moduleParams: isSet(object.moduleParams) ? ModuleParams.fromJSON(object.moduleParams) : undefined,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      poolLiquidValidators: Array.isArray(object?.poolLiquidValidators) ? object.poolLiquidValidators.map((e: any) => PoolLiquidValidators.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.moduleParams !== undefined && (obj.moduleParams = message.moduleParams ? ModuleParams.toJSON(message.moduleParams) : undefined);
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    if (message.poolLiquidValidators) {
      obj.poolLiquidValidators = message.poolLiquidValidators.map(e => e ? PoolLiquidValidators.toJSON(e) : undefined);
    } else {
      obj.poolLiquidValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.moduleParams = object.moduleParams !== undefined && object.moduleParams !== null ? ModuleParams.fromPartial(object.moduleParams) : undefined;
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.poolLiquidValidators = object.poolLiquidValidators?.map(e => PoolLiquidValidators.fromPartial(e)) || [];
    return message;
  }
};
function createBasePoolLiquidValidators(): PoolLiquidValidators {
  return {
    poolId: "",
    liquidValidators: []
  };
}
export const PoolLiquidValidators = {
  encode(message: PoolLiquidValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    for (const v of message.liquidValidators) {
      LiquidValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolLiquidValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolLiquidValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.liquidValidators.push(LiquidValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolLiquidValidators {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      liquidValidators: Array.isArray(object?.liquidValidators) ? object.liquidValidators.map((e: any) => LiquidValidator.fromJSON(e)) : []
    };
  },
  toJSON(message: PoolLiquidValidators): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    if (message.liquidValidators) {
      obj.liquidValidators = message.liquidValidators.map(e => e ? LiquidValidator.toJSON(e) : undefined);
    } else {
      obj.liquidValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PoolLiquidValidators>): PoolLiquidValidators {
    const message = createBasePoolLiquidValidators();
    message.poolId = object.poolId ?? "";
    message.liquidValidators = object.liquidValidators?.map(e => LiquidValidator.fromPartial(e)) || [];
    return message;
  }
};