import { ModuleParams, ModuleParamsSDKType, Pool, PoolSDKType, LiquidValidator, LiquidValidatorSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const PoolLiquidValidators: {
    encode(message: PoolLiquidValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolLiquidValidators;
    fromJSON(object: any): PoolLiquidValidators;
    toJSON(message: PoolLiquidValidators): unknown;
    fromPartial(object: Partial<PoolLiquidValidators>): PoolLiquidValidators;
};
