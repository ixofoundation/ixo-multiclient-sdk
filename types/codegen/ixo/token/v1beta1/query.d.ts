import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Token, TokenSDKType, TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params?: ParamsSDKType;
}
export interface QueryTokenListRequest {
    pagination?: PageRequest;
    /** minter address to get list for */
    minter: string;
}
export interface QueryTokenListRequestSDKType {
    pagination?: PageRequestSDKType;
    /** minter address to get list for */
    minter: string;
}
export interface QueryTokenListResponse {
    pagination?: PageResponse;
    tokenDocs: Token[];
}
export interface QueryTokenListResponseSDKType {
    pagination?: PageResponseSDKType;
    tokenDocs: TokenSDKType[];
}
export interface QueryTokenDocRequest {
    /** minter address to get Token Doc for */
    minter: string;
    contractAddress: string;
}
export interface QueryTokenDocRequestSDKType {
    /** minter address to get Token Doc for */
    minter: string;
    contract_address: string;
}
export interface QueryTokenDocResponse {
    tokenDoc?: Token;
}
export interface QueryTokenDocResponseSDKType {
    tokenDoc?: TokenSDKType;
}
export interface QueryTokenMetadataRequest {
    id: string;
}
export interface QueryTokenMetadataRequestSDKType {
    id: string;
}
export interface QueryTokenMetadataResponse {
    name: string;
    description: string;
    decimals: string;
    image: string;
    index: string;
    properties?: TokenMetadataProperties;
}
export interface QueryTokenMetadataResponseSDKType {
    name: string;
    description: string;
    decimals: string;
    image: string;
    index: string;
    properties?: TokenMetadataPropertiesSDKType;
}
export interface TokenMetadataProperties {
    class: string;
    collection: string;
    cap: string;
    linkedResources: TokenData[];
}
export interface TokenMetadataPropertiesSDKType {
    class: string;
    collection: string;
    cap: string;
    linkedResources: TokenDataSDKType[];
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
export declare const QueryTokenListRequest: {
    encode(message: QueryTokenListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenListRequest;
    fromJSON(object: any): QueryTokenListRequest;
    toJSON(message: QueryTokenListRequest): unknown;
    fromPartial(object: Partial<QueryTokenListRequest>): QueryTokenListRequest;
};
export declare const QueryTokenListResponse: {
    encode(message: QueryTokenListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenListResponse;
    fromJSON(object: any): QueryTokenListResponse;
    toJSON(message: QueryTokenListResponse): unknown;
    fromPartial(object: Partial<QueryTokenListResponse>): QueryTokenListResponse;
};
export declare const QueryTokenDocRequest: {
    encode(message: QueryTokenDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDocRequest;
    fromJSON(object: any): QueryTokenDocRequest;
    toJSON(message: QueryTokenDocRequest): unknown;
    fromPartial(object: Partial<QueryTokenDocRequest>): QueryTokenDocRequest;
};
export declare const QueryTokenDocResponse: {
    encode(message: QueryTokenDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDocResponse;
    fromJSON(object: any): QueryTokenDocResponse;
    toJSON(message: QueryTokenDocResponse): unknown;
    fromPartial(object: Partial<QueryTokenDocResponse>): QueryTokenDocResponse;
};
export declare const QueryTokenMetadataRequest: {
    encode(message: QueryTokenMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenMetadataRequest;
    fromJSON(object: any): QueryTokenMetadataRequest;
    toJSON(message: QueryTokenMetadataRequest): unknown;
    fromPartial(object: Partial<QueryTokenMetadataRequest>): QueryTokenMetadataRequest;
};
export declare const QueryTokenMetadataResponse: {
    encode(message: QueryTokenMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenMetadataResponse;
    fromJSON(object: any): QueryTokenMetadataResponse;
    toJSON(message: QueryTokenMetadataResponse): unknown;
    fromPartial(object: Partial<QueryTokenMetadataResponse>): QueryTokenMetadataResponse;
};
export declare const TokenMetadataProperties: {
    encode(message: TokenMetadataProperties, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadataProperties;
    fromJSON(object: any): TokenMetadataProperties;
    toJSON(message: TokenMetadataProperties): unknown;
    fromPartial(object: Partial<TokenMetadataProperties>): TokenMetadataProperties;
};
