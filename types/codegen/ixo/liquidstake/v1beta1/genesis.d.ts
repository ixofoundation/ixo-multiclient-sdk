import { Params, ParamsSDKType, LiquidValidator, LiquidValidatorSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the liquidstake module's genesis state. */
export interface GenesisState {
    params?: Params;
    liquidValidators: LiquidValidator[];
}
/** GenesisState defines the liquidstake module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    liquid_validators: LiquidValidatorSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
