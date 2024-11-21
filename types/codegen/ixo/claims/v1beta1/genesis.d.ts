import { Params, ParamsSDKType, Collection, CollectionSDKType, Claim, ClaimSDKType, Dispute, DisputeSDKType, Intent, IntentSDKType } from "./claims";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the claims module's genesis state. */
export interface GenesisState {
    params?: Params;
    collections: Collection[];
    claims: Claim[];
    disputes: Dispute[];
    intents: Intent[];
}
/** GenesisState defines the claims module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    collections: CollectionSDKType[];
    claims: ClaimSDKType[];
    disputes: DisputeSDKType[];
    intents: IntentSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
