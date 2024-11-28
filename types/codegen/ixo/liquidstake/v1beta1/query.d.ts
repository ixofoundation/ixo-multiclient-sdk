import { Params, ParamsSDKType, LiquidValidatorState, LiquidValidatorStateSDKType, NetAmountState, NetAmountStateSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryLiquidValidatorsRequest {
}
export interface QueryLiquidValidatorsRequestSDKType {
}
export interface QueryLiquidValidatorsResponse {
    liquidValidators: LiquidValidatorState[];
}
export interface QueryLiquidValidatorsResponseSDKType {
    liquid_validators: LiquidValidatorStateSDKType[];
}
export interface QueryStatesRequest {
}
export interface QueryStatesRequestSDKType {
}
export interface QueryStatesResponse {
    netAmountState?: NetAmountState;
}
export interface QueryStatesResponseSDKType {
    net_amount_state?: NetAmountStateSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryLiquidValidatorsRequest: {
    encode(_: QueryLiquidValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidValidatorsRequest;
    fromJSON(_: any): QueryLiquidValidatorsRequest;
    toJSON(_: QueryLiquidValidatorsRequest): unknown;
    fromPartial(_: Partial<QueryLiquidValidatorsRequest>): QueryLiquidValidatorsRequest;
};
export declare const QueryLiquidValidatorsResponse: {
    encode(message: QueryLiquidValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidValidatorsResponse;
    fromJSON(object: any): QueryLiquidValidatorsResponse;
    toJSON(message: QueryLiquidValidatorsResponse): unknown;
    fromPartial(object: Partial<QueryLiquidValidatorsResponse>): QueryLiquidValidatorsResponse;
};
export declare const QueryStatesRequest: {
    encode(_: QueryStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatesRequest;
    fromJSON(_: any): QueryStatesRequest;
    toJSON(_: QueryStatesRequest): unknown;
    fromPartial(_: Partial<QueryStatesRequest>): QueryStatesRequest;
};
export declare const QueryStatesResponse: {
    encode(message: QueryStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatesResponse;
    fromJSON(object: any): QueryStatesResponse;
    toJSON(message: QueryStatesResponse): unknown;
    fromPartial(object: Partial<QueryStatesResponse>): QueryStatesResponse;
};
