import { Params, ParamsSDKType, Token, TokenSDKType, TokenProperties, TokenPropertiesSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    params?: Params;
    tokens: Token[];
    tokenProperties: TokenProperties[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    tokens: TokenSDKType[];
    token_properties: TokenPropertiesSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
