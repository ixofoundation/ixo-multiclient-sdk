import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ModuleParams, ModuleParamsSDKType, Pool, PoolSDKType, LiquidValidatorState, LiquidValidatorStateSDKType, NetAmountState, NetAmountStateSDKType } from "./liquidstake";
import * as _m0 from "protobufjs/minimal";
export interface QueryModuleParamsRequest {
}
export interface QueryModuleParamsRequestSDKType {
}
export interface QueryModuleParamsResponse {
    moduleParams?: ModuleParams;
}
export interface QueryModuleParamsResponseSDKType {
    module_params?: ModuleParamsSDKType;
}
export interface QueryPoolRequest {
    poolId: string;
}
export interface QueryPoolRequestSDKType {
    pool_id: string;
}
export interface QueryPoolResponse {
    pool?: Pool;
}
export interface QueryPoolResponseSDKType {
    pool?: PoolSDKType;
}
export interface QueryPoolsRequest {
    pagination?: PageRequest;
}
export interface QueryPoolsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: Pool[];
    pagination?: PageResponse;
}
export interface QueryPoolsResponseSDKType {
    pools: PoolSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryLiquidValidatorsRequest {
    poolId: string;
}
export interface QueryLiquidValidatorsRequestSDKType {
    pool_id: string;
}
export interface QueryLiquidValidatorsResponse {
    liquidValidators: LiquidValidatorState[];
}
export interface QueryLiquidValidatorsResponseSDKType {
    liquid_validators: LiquidValidatorStateSDKType[];
}
export interface QueryStatesRequest {
    poolId: string;
}
export interface QueryStatesRequestSDKType {
    pool_id: string;
}
export interface QueryStatesResponse {
    netAmountState?: NetAmountState;
}
export interface QueryStatesResponseSDKType {
    net_amount_state?: NetAmountStateSDKType;
}
export declare const QueryModuleParamsRequest: {
    encode(_: QueryModuleParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleParamsRequest;
    fromJSON(_: any): QueryModuleParamsRequest;
    toJSON(_: QueryModuleParamsRequest): unknown;
    fromPartial(_: Partial<QueryModuleParamsRequest>): QueryModuleParamsRequest;
};
export declare const QueryModuleParamsResponse: {
    encode(message: QueryModuleParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleParamsResponse;
    fromJSON(object: any): QueryModuleParamsResponse;
    toJSON(message: QueryModuleParamsResponse): unknown;
    fromPartial(object: Partial<QueryModuleParamsResponse>): QueryModuleParamsResponse;
};
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
};
export declare const QueryLiquidValidatorsRequest: {
    encode(message: QueryLiquidValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidValidatorsRequest;
    fromJSON(object: any): QueryLiquidValidatorsRequest;
    toJSON(message: QueryLiquidValidatorsRequest): unknown;
    fromPartial(object: Partial<QueryLiquidValidatorsRequest>): QueryLiquidValidatorsRequest;
};
export declare const QueryLiquidValidatorsResponse: {
    encode(message: QueryLiquidValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidValidatorsResponse;
    fromJSON(object: any): QueryLiquidValidatorsResponse;
    toJSON(message: QueryLiquidValidatorsResponse): unknown;
    fromPartial(object: Partial<QueryLiquidValidatorsResponse>): QueryLiquidValidatorsResponse;
};
export declare const QueryStatesRequest: {
    encode(message: QueryStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatesRequest;
    fromJSON(object: any): QueryStatesRequest;
    toJSON(message: QueryStatesRequest): unknown;
    fromPartial(object: Partial<QueryStatesRequest>): QueryStatesRequest;
};
export declare const QueryStatesResponse: {
    encode(message: QueryStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatesResponse;
    fromJSON(object: any): QueryStatesResponse;
    toJSON(message: QueryStatesResponse): unknown;
    fromPartial(object: Partial<QueryStatesResponse>): QueryStatesResponse;
};
