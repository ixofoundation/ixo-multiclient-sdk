import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
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
export declare const EpochStartEvent: {
    encode(message: EpochStartEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochStartEvent;
    fromJSON(object: any): EpochStartEvent;
    toJSON(message: EpochStartEvent): unknown;
    fromPartial(object: Partial<EpochStartEvent>): EpochStartEvent;
};
export declare const EpochEndEvent: {
    encode(message: EpochEndEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochEndEvent;
    fromJSON(object: any): EpochEndEvent;
    toJSON(message: EpochEndEvent): unknown;
    fromPartial(object: Partial<EpochEndEvent>): EpochEndEvent;
};
