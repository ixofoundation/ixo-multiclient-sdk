import { Namespace, NamespaceSDKType, NameRecord, NameRecordSDKType } from "./names";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the names module's genesis state. */
export interface GenesisState {
    namespaces: Namespace[];
    names: NameRecord[];
}
/** GenesisState defines the names module's genesis state. */
export interface GenesisStateSDKType {
    namespaces: NamespaceSDKType[];
    names: NameRecordSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
