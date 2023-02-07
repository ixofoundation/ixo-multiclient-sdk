import { Entity, EntitySDKType, Params, ParamsSDKType } from "./entity";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the project module's genesis state. */
export interface GenesisState {
    entities: Entity[];
    params?: Params;
}
/** GenesisState defines the project module's genesis state. */
export interface GenesisStateSDKType {
    entities: EntitySDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
