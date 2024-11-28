//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * MintEpochProvisionsMintedEvent is triggered after a epoch is triggered
 * minting module for inflation.
 */
export interface MintEpochProvisionsMintedEvent {
  epochNumber: string;
  epochProvisions: string;
  amount: string;
}
/**
 * MintEpochProvisionsMintedEvent is triggered after a epoch is triggered
 * minting module for inflation.
 */
export interface MintEpochProvisionsMintedEventSDKType {
  epoch_number: string;
  epoch_provisions: string;
  amount: string;
}
function createBaseMintEpochProvisionsMintedEvent(): MintEpochProvisionsMintedEvent {
  return {
    epochNumber: "",
    epochProvisions: "",
    amount: ""
  };
}
export const MintEpochProvisionsMintedEvent = {
  encode(message: MintEpochProvisionsMintedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochNumber !== "") {
      writer.uint32(10).string(message.epochNumber);
    }
    if (message.epochProvisions !== "") {
      writer.uint32(18).string(message.epochProvisions);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MintEpochProvisionsMintedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintEpochProvisionsMintedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.string();
          break;
        case 2:
          message.epochProvisions = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MintEpochProvisionsMintedEvent {
    return {
      epochNumber: isSet(object.epochNumber) ? String(object.epochNumber) : "",
      epochProvisions: isSet(object.epochProvisions) ? String(object.epochProvisions) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MintEpochProvisionsMintedEvent): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = message.epochNumber);
    message.epochProvisions !== undefined && (obj.epochProvisions = message.epochProvisions);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<MintEpochProvisionsMintedEvent>): MintEpochProvisionsMintedEvent {
    const message = createBaseMintEpochProvisionsMintedEvent();
    message.epochNumber = object.epochNumber ?? "";
    message.epochProvisions = object.epochProvisions ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};