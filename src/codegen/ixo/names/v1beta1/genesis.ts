//@ts-nocheck
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
function createBaseGenesisState(): GenesisState {
  return {
    namespaces: [],
    names: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.namespaces) {
      Namespace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.names) {
      NameRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespaces.push(Namespace.decode(reader, reader.uint32()));
          break;
        case 2:
          message.names.push(NameRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      namespaces: Array.isArray(object?.namespaces) ? object.namespaces.map((e: any) => Namespace.fromJSON(e)) : [],
      names: Array.isArray(object?.names) ? object.names.map((e: any) => NameRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map(e => e ? Namespace.toJSON(e) : undefined);
    } else {
      obj.namespaces = [];
    }
    if (message.names) {
      obj.names = message.names.map(e => e ? NameRecord.toJSON(e) : undefined);
    } else {
      obj.names = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.namespaces = object.namespaces?.map(e => Namespace.fromPartial(e)) || [];
    message.names = object.names?.map(e => NameRecord.fromPartial(e)) || [];
    return message;
  }
};