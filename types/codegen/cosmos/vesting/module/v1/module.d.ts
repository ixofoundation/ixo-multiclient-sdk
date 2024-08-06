import * as _m0 from "protobufjs/minimal";
/** Module is the config object of the vesting module. */
export interface Module {
}
/** Module is the config object of the vesting module. */
export interface ModuleSDKType {
}
export declare const Module: {
    encode(_: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(_: any): Module;
    toJSON(_: Module): unknown;
    fromPartial(_: Partial<Module>): Module;
};
