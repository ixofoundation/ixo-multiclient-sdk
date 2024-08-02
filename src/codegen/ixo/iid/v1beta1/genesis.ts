//@ts-nocheck
import { IidDocument, IidDocumentSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the did module's genesis state. */
export interface GenesisState {
  iidDocs: IidDocument[];
}
/** GenesisState defines the did module's genesis state. */
export interface GenesisStateSDKType {
  iid_docs: IidDocumentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    iidDocs: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.iidDocs) {
      IidDocument.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.iidDocs.push(IidDocument.decode(reader, reader.uint32()));
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
      iidDocs: Array.isArray(object?.iidDocs) ? object.iidDocs.map((e: any) => IidDocument.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.iidDocs) {
      obj.iidDocs = message.iidDocs.map(e => e ? IidDocument.toJSON(e) : undefined);
    } else {
      obj.iidDocs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.iidDocs = object.iidDocs?.map(e => IidDocument.fromPartial(e)) || [];
    return message;
  }
};