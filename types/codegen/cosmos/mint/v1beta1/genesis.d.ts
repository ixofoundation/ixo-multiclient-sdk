import { Minter, MinterSDKType, Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter?: Minter;
    /** params defines all the parameters of the module. */
    params?: Params;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    minter?: MinterSDKType;
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
