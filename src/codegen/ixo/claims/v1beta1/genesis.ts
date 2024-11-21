//@ts-nocheck
import { Params, ParamsSDKType, Collection, CollectionSDKType, Claim, ClaimSDKType, Dispute, DisputeSDKType, Intent, IntentSDKType } from "./claims";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    collections: [],
    claims: [],
    disputes: [],
    intents: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.disputes) {
      Dispute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.intents) {
      Intent.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 3:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        case 4:
          message.disputes.push(Dispute.decode(reader, reader.uint32()));
          break;
        case 5:
          message.intents.push(Intent.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromJSON(e)) : [],
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : [],
      disputes: Array.isArray(object?.disputes) ? object.disputes.map((e: any) => Dispute.fromJSON(e)) : [],
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => Intent.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toJSON(e) : undefined);
    } else {
      obj.collections = [];
    }
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toJSON(e) : undefined);
    } else {
      obj.claims = [];
    }
    if (message.disputes) {
      obj.disputes = message.disputes.map(e => e ? Dispute.toJSON(e) : undefined);
    } else {
      obj.disputes = [];
    }
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? Intent.toJSON(e) : undefined);
    } else {
      obj.intents = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.disputes = object.disputes?.map(e => Dispute.fromPartial(e)) || [];
    message.intents = object.intents?.map(e => Intent.fromPartial(e)) || [];
    return message;
  }
};