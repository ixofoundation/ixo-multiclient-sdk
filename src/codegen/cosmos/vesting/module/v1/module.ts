//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
/** Module is the config object of the vesting module. */
export interface Module {}
/** Module is the config object of the vesting module. */
export interface ModuleSDKType {}
function createBaseModule(): Module {
  return {};
}
export const Module = {
  encode(_: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): Module {
    return {};
  },
  toJSON(_: Module): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<Module>): Module {
    const message = createBaseModule();
    return message;
  }
};