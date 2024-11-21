//@ts-nocheck
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochStartEvent {
  /** Epoch number, starting from 1. */
  epochNumber: Long;
  /** The start timestamp of the epoch. */
  startTime?: Timestamp;
}
export interface EpochStartEventSDKType {
  epoch_number: Long;
  start_time?: TimestampSDKType;
}
export interface EpochEndEvent {
  /** Epoch number, starting from 1. */
  epochNumber: Long;
}
export interface EpochEndEventSDKType {
  epoch_number: Long;
}
function createBaseEpochStartEvent(): EpochStartEvent {
  return {
    epochNumber: Long.ZERO,
    startTime: undefined
  };
}
export const EpochStartEvent = {
  encode(message: EpochStartEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EpochStartEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochStartEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = (reader.int64() as Long);
          break;
        case 2:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EpochStartEvent {
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  toJSON(message: EpochStartEvent): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<EpochStartEvent>): EpochStartEvent {
    const message = createBaseEpochStartEvent();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    return message;
  }
};
function createBaseEpochEndEvent(): EpochEndEvent {
  return {
    epochNumber: Long.ZERO
  };
}
export const EpochEndEvent = {
  encode(message: EpochEndEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EpochEndEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochEndEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EpochEndEvent {
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO
    };
  },
  toJSON(message: EpochEndEvent): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EpochEndEvent>): EpochEndEvent {
    const message = createBaseEpochEndEvent();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    return message;
  }
};