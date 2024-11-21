import { EpochInfo, EpochInfoSDKType } from "./epoch";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryEpochsInfoRequest {
}
export interface QueryEpochsInfoRequestSDKType {
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
}
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: Long;
}
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: Long;
}
export declare const QueryEpochsInfoRequest: {
    encode(_: QueryEpochsInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromJSON(_: any): QueryEpochsInfoRequest;
    toJSON(_: QueryEpochsInfoRequest): unknown;
    fromPartial(_: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
};
export declare const QueryEpochsInfoResponse: {
    encode(message: QueryEpochsInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromJSON(object: any): QueryEpochsInfoResponse;
    toJSON(message: QueryEpochsInfoResponse): unknown;
    fromPartial(object: Partial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
};
export declare const QueryCurrentEpochRequest: {
    encode(message: QueryCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromJSON(object: any): QueryCurrentEpochRequest;
    toJSON(message: QueryCurrentEpochRequest): unknown;
    fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    encode(message: QueryCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromJSON(object: any): QueryCurrentEpochResponse;
    toJSON(message: QueryCurrentEpochResponse): unknown;
    fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
};
