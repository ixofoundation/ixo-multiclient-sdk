import { Bond, BondSDKType, Batch, BatchSDKType, Params, ParamsSDKType } from "./bonds";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the bonds module's genesis state. */
export interface GenesisState {
    bonds: Bond[];
    batches: Batch[];
    params?: Params;
}
/** GenesisState defines the bonds module's genesis state. */
export interface GenesisStateSDKType {
    bonds: BondSDKType[];
    batches: BatchSDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
