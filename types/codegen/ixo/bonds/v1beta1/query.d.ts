import { BondDetails, BondDetailsSDKType, Bond, BondSDKType, Batch, BatchSDKType, Params, ParamsSDKType } from "./bonds";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryBondsRequest is the request type for the Query/Bonds RPC method. */
export interface QueryBondsRequest {
}
/** QueryBondsRequest is the request type for the Query/Bonds RPC method. */
export interface QueryBondsRequestSDKType {
}
/** QueryBondsResponse is the response type for the Query/Bonds RPC method. */
export interface QueryBondsResponse {
    bonds: string[];
}
/** QueryBondsResponse is the response type for the Query/Bonds RPC method. */
export interface QueryBondsResponseSDKType {
    bonds: string[];
}
/** QueryBondsDetailedRequest is the request type for the Query/BondsDetailed RPC method. */
export interface QueryBondsDetailedRequest {
}
/** QueryBondsDetailedRequest is the request type for the Query/BondsDetailed RPC method. */
export interface QueryBondsDetailedRequestSDKType {
}
/** QueryBondsDetailedResponse is the response type for the Query/BondsDetailed RPC method. */
export interface QueryBondsDetailedResponse {
    bondsDetailed: BondDetails[];
}
/** QueryBondsDetailedResponse is the response type for the Query/BondsDetailed RPC method. */
export interface QueryBondsDetailedResponseSDKType {
    bonds_detailed: BondDetailsSDKType[];
}
/** QueryBondRequest is the request type for the Query/Bond RPC method. */
export interface QueryBondRequest {
    bondDid: string;
}
/** QueryBondRequest is the request type for the Query/Bond RPC method. */
export interface QueryBondRequestSDKType {
    bond_did: string;
}
/** QueryBondResponse is the response type for the Query/Bond RPC method. */
export interface QueryBondResponse {
    bond?: Bond;
}
/** QueryBondResponse is the response type for the Query/Bond RPC method. */
export interface QueryBondResponseSDKType {
    bond?: BondSDKType;
}
/** QueryBatchRequest is the request type for the Query/Batch RPC method. */
export interface QueryBatchRequest {
    bondDid: string;
}
/** QueryBatchRequest is the request type for the Query/Batch RPC method. */
export interface QueryBatchRequestSDKType {
    bond_did: string;
}
/** QueryBatchResponse is the response type for the Query/Batch RPC method. */
export interface QueryBatchResponse {
    batch?: Batch;
}
/** QueryBatchResponse is the response type for the Query/Batch RPC method. */
export interface QueryBatchResponseSDKType {
    batch?: BatchSDKType;
}
/** QueryLastBatchRequest is the request type for the Query/LastBatch RPC method. */
export interface QueryLastBatchRequest {
    bondDid: string;
}
/** QueryLastBatchRequest is the request type for the Query/LastBatch RPC method. */
export interface QueryLastBatchRequestSDKType {
    bond_did: string;
}
/** QueryLastBatchResponse is the response type for the Query/LastBatch RPC method. */
export interface QueryLastBatchResponse {
    lastBatch?: Batch;
}
/** QueryLastBatchResponse is the response type for the Query/LastBatch RPC method. */
export interface QueryLastBatchResponseSDKType {
    last_batch?: BatchSDKType;
}
/** QueryCurrentPriceRequest is the request type for the Query/CurrentPrice RPC method. */
export interface QueryCurrentPriceRequest {
    bondDid: string;
}
/** QueryCurrentPriceRequest is the request type for the Query/CurrentPrice RPC method. */
export interface QueryCurrentPriceRequestSDKType {
    bond_did: string;
}
/** QueryCurrentPriceResponse is the response type for the Query/CurrentPrice RPC method. */
export interface QueryCurrentPriceResponse {
    currentPrice: DecCoin[];
}
/** QueryCurrentPriceResponse is the response type for the Query/CurrentPrice RPC method. */
export interface QueryCurrentPriceResponseSDKType {
    current_price: DecCoinSDKType[];
}
/** QueryCurrentReserveRequest is the request type for the Query/CurrentReserve RPC method. */
export interface QueryCurrentReserveRequest {
    bondDid: string;
}
/** QueryCurrentReserveRequest is the request type for the Query/CurrentReserve RPC method. */
export interface QueryCurrentReserveRequestSDKType {
    bond_did: string;
}
/** QueryCurrentReserveResponse is the response type for the Query/CurrentReserve RPC method. */
export interface QueryCurrentReserveResponse {
    currentReserve: Coin[];
}
/** QueryCurrentReserveResponse is the response type for the Query/CurrentReserve RPC method. */
export interface QueryCurrentReserveResponseSDKType {
    current_reserve: CoinSDKType[];
}
/** QueryAvailableReserveRequest is the request type for the Query/AvailableReserve RPC method. */
export interface QueryAvailableReserveRequest {
    bondDid: string;
}
/** QueryAvailableReserveRequest is the request type for the Query/AvailableReserve RPC method. */
export interface QueryAvailableReserveRequestSDKType {
    bond_did: string;
}
/** QueryAvailableReserveResponse is the response type for the Query/AvailableReserve RPC method. */
export interface QueryAvailableReserveResponse {
    availableReserve: Coin[];
}
/** QueryAvailableReserveResponse is the response type for the Query/AvailableReserve RPC method. */
export interface QueryAvailableReserveResponseSDKType {
    available_reserve: CoinSDKType[];
}
/** QueryCustomPriceRequest is the request type for the Query/CustomPrice RPC method. */
export interface QueryCustomPriceRequest {
    bondDid: string;
    bondAmount: string;
}
/** QueryCustomPriceRequest is the request type for the Query/CustomPrice RPC method. */
export interface QueryCustomPriceRequestSDKType {
    bond_did: string;
    bond_amount: string;
}
/** QueryCustomPriceResponse is the response type for the Query/CustomPrice RPC method. */
export interface QueryCustomPriceResponse {
    price: DecCoin[];
}
/** QueryCustomPriceResponse is the response type for the Query/CustomPrice RPC method. */
export interface QueryCustomPriceResponseSDKType {
    price: DecCoinSDKType[];
}
/** QueryCustomPriceRequest is the request type for the Query/BuyPrice RPC method. */
export interface QueryBuyPriceRequest {
    bondDid: string;
    bondAmount: string;
}
/** QueryCustomPriceRequest is the request type for the Query/BuyPrice RPC method. */
export interface QueryBuyPriceRequestSDKType {
    bond_did: string;
    bond_amount: string;
}
/** QueryCustomPriceResponse is the response type for the Query/BuyPrice RPC method. */
export interface QueryBuyPriceResponse {
    adjustedSupply?: Coin;
    prices: Coin[];
    txFees: Coin[];
    totalPrices: Coin[];
    totalFees: Coin[];
}
/** QueryCustomPriceResponse is the response type for the Query/BuyPrice RPC method. */
export interface QueryBuyPriceResponseSDKType {
    adjusted_supply?: CoinSDKType;
    prices: CoinSDKType[];
    tx_fees: CoinSDKType[];
    total_prices: CoinSDKType[];
    total_fees: CoinSDKType[];
}
/** QuerySellReturnRequest is the request type for the Query/SellReturn RPC method. */
export interface QuerySellReturnRequest {
    bondDid: string;
    bondAmount: string;
}
/** QuerySellReturnRequest is the request type for the Query/SellReturn RPC method. */
export interface QuerySellReturnRequestSDKType {
    bond_did: string;
    bond_amount: string;
}
/** QuerySellReturnResponse is the response type for the Query/SellReturn RPC method. */
export interface QuerySellReturnResponse {
    adjustedSupply?: Coin;
    returns: Coin[];
    txFees: Coin[];
    exitFees: Coin[];
    totalReturns: Coin[];
    totalFees: Coin[];
}
/** QuerySellReturnResponse is the response type for the Query/SellReturn RPC method. */
export interface QuerySellReturnResponseSDKType {
    adjusted_supply?: CoinSDKType;
    returns: CoinSDKType[];
    tx_fees: CoinSDKType[];
    exit_fees: CoinSDKType[];
    total_returns: CoinSDKType[];
    total_fees: CoinSDKType[];
}
/** QuerySwapReturnRequest is the request type for the Query/SwapReturn RPC method. */
export interface QuerySwapReturnRequest {
    bondDid: string;
    fromTokenWithAmount: string;
    toToken: string;
}
/** QuerySwapReturnRequest is the request type for the Query/SwapReturn RPC method. */
export interface QuerySwapReturnRequestSDKType {
    bond_did: string;
    from_token_with_amount: string;
    to_token: string;
}
/** QuerySwapReturnResponse is the response type for the Query/SwapReturn RPC method. */
export interface QuerySwapReturnResponse {
    totalReturns: Coin[];
    totalFees: Coin[];
}
/** QuerySwapReturnResponse is the response type for the Query/SwapReturn RPC method. */
export interface QuerySwapReturnResponseSDKType {
    total_returns: CoinSDKType[];
    total_fees: CoinSDKType[];
}
/** QueryAlphaMaximumsRequest is the request type for the Query/AlphaMaximums RPC method. */
export interface QueryAlphaMaximumsRequest {
    bondDid: string;
}
/** QueryAlphaMaximumsRequest is the request type for the Query/AlphaMaximums RPC method. */
export interface QueryAlphaMaximumsRequestSDKType {
    bond_did: string;
}
/** QueryAlphaMaximumsResponse is the response type for the Query/AlphaMaximums RPC method. */
export interface QueryAlphaMaximumsResponse {
    maxSystemAlphaIncrease: string;
    maxSystemAlpha: string;
}
/** QueryAlphaMaximumsResponse is the response type for the Query/AlphaMaximums RPC method. */
export interface QueryAlphaMaximumsResponseSDKType {
    max_system_alpha_increase: string;
    max_system_alpha: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryBondsRequest: {
    encode(_: QueryBondsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsRequest;
    fromJSON(_: any): QueryBondsRequest;
    toJSON(_: QueryBondsRequest): unknown;
    fromPartial(_: Partial<QueryBondsRequest>): QueryBondsRequest;
};
export declare const QueryBondsResponse: {
    encode(message: QueryBondsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsResponse;
    fromJSON(object: any): QueryBondsResponse;
    toJSON(message: QueryBondsResponse): unknown;
    fromPartial(object: Partial<QueryBondsResponse>): QueryBondsResponse;
};
export declare const QueryBondsDetailedRequest: {
    encode(_: QueryBondsDetailedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsDetailedRequest;
    fromJSON(_: any): QueryBondsDetailedRequest;
    toJSON(_: QueryBondsDetailedRequest): unknown;
    fromPartial(_: Partial<QueryBondsDetailedRequest>): QueryBondsDetailedRequest;
};
export declare const QueryBondsDetailedResponse: {
    encode(message: QueryBondsDetailedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsDetailedResponse;
    fromJSON(object: any): QueryBondsDetailedResponse;
    toJSON(message: QueryBondsDetailedResponse): unknown;
    fromPartial(object: Partial<QueryBondsDetailedResponse>): QueryBondsDetailedResponse;
};
export declare const QueryBondRequest: {
    encode(message: QueryBondRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondRequest;
    fromJSON(object: any): QueryBondRequest;
    toJSON(message: QueryBondRequest): unknown;
    fromPartial(object: Partial<QueryBondRequest>): QueryBondRequest;
};
export declare const QueryBondResponse: {
    encode(message: QueryBondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondResponse;
    fromJSON(object: any): QueryBondResponse;
    toJSON(message: QueryBondResponse): unknown;
    fromPartial(object: Partial<QueryBondResponse>): QueryBondResponse;
};
export declare const QueryBatchRequest: {
    encode(message: QueryBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequest;
    fromJSON(object: any): QueryBatchRequest;
    toJSON(message: QueryBatchRequest): unknown;
    fromPartial(object: Partial<QueryBatchRequest>): QueryBatchRequest;
};
export declare const QueryBatchResponse: {
    encode(message: QueryBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchResponse;
    fromJSON(object: any): QueryBatchResponse;
    toJSON(message: QueryBatchResponse): unknown;
    fromPartial(object: Partial<QueryBatchResponse>): QueryBatchResponse;
};
export declare const QueryLastBatchRequest: {
    encode(message: QueryLastBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBatchRequest;
    fromJSON(object: any): QueryLastBatchRequest;
    toJSON(message: QueryLastBatchRequest): unknown;
    fromPartial(object: Partial<QueryLastBatchRequest>): QueryLastBatchRequest;
};
export declare const QueryLastBatchResponse: {
    encode(message: QueryLastBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBatchResponse;
    fromJSON(object: any): QueryLastBatchResponse;
    toJSON(message: QueryLastBatchResponse): unknown;
    fromPartial(object: Partial<QueryLastBatchResponse>): QueryLastBatchResponse;
};
export declare const QueryCurrentPriceRequest: {
    encode(message: QueryCurrentPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPriceRequest;
    fromJSON(object: any): QueryCurrentPriceRequest;
    toJSON(message: QueryCurrentPriceRequest): unknown;
    fromPartial(object: Partial<QueryCurrentPriceRequest>): QueryCurrentPriceRequest;
};
export declare const QueryCurrentPriceResponse: {
    encode(message: QueryCurrentPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPriceResponse;
    fromJSON(object: any): QueryCurrentPriceResponse;
    toJSON(message: QueryCurrentPriceResponse): unknown;
    fromPartial(object: Partial<QueryCurrentPriceResponse>): QueryCurrentPriceResponse;
};
export declare const QueryCurrentReserveRequest: {
    encode(message: QueryCurrentReserveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentReserveRequest;
    fromJSON(object: any): QueryCurrentReserveRequest;
    toJSON(message: QueryCurrentReserveRequest): unknown;
    fromPartial(object: Partial<QueryCurrentReserveRequest>): QueryCurrentReserveRequest;
};
export declare const QueryCurrentReserveResponse: {
    encode(message: QueryCurrentReserveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentReserveResponse;
    fromJSON(object: any): QueryCurrentReserveResponse;
    toJSON(message: QueryCurrentReserveResponse): unknown;
    fromPartial(object: Partial<QueryCurrentReserveResponse>): QueryCurrentReserveResponse;
};
export declare const QueryAvailableReserveRequest: {
    encode(message: QueryAvailableReserveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAvailableReserveRequest;
    fromJSON(object: any): QueryAvailableReserveRequest;
    toJSON(message: QueryAvailableReserveRequest): unknown;
    fromPartial(object: Partial<QueryAvailableReserveRequest>): QueryAvailableReserveRequest;
};
export declare const QueryAvailableReserveResponse: {
    encode(message: QueryAvailableReserveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAvailableReserveResponse;
    fromJSON(object: any): QueryAvailableReserveResponse;
    toJSON(message: QueryAvailableReserveResponse): unknown;
    fromPartial(object: Partial<QueryAvailableReserveResponse>): QueryAvailableReserveResponse;
};
export declare const QueryCustomPriceRequest: {
    encode(message: QueryCustomPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCustomPriceRequest;
    fromJSON(object: any): QueryCustomPriceRequest;
    toJSON(message: QueryCustomPriceRequest): unknown;
    fromPartial(object: Partial<QueryCustomPriceRequest>): QueryCustomPriceRequest;
};
export declare const QueryCustomPriceResponse: {
    encode(message: QueryCustomPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCustomPriceResponse;
    fromJSON(object: any): QueryCustomPriceResponse;
    toJSON(message: QueryCustomPriceResponse): unknown;
    fromPartial(object: Partial<QueryCustomPriceResponse>): QueryCustomPriceResponse;
};
export declare const QueryBuyPriceRequest: {
    encode(message: QueryBuyPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBuyPriceRequest;
    fromJSON(object: any): QueryBuyPriceRequest;
    toJSON(message: QueryBuyPriceRequest): unknown;
    fromPartial(object: Partial<QueryBuyPriceRequest>): QueryBuyPriceRequest;
};
export declare const QueryBuyPriceResponse: {
    encode(message: QueryBuyPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBuyPriceResponse;
    fromJSON(object: any): QueryBuyPriceResponse;
    toJSON(message: QueryBuyPriceResponse): unknown;
    fromPartial(object: Partial<QueryBuyPriceResponse>): QueryBuyPriceResponse;
};
export declare const QuerySellReturnRequest: {
    encode(message: QuerySellReturnRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellReturnRequest;
    fromJSON(object: any): QuerySellReturnRequest;
    toJSON(message: QuerySellReturnRequest): unknown;
    fromPartial(object: Partial<QuerySellReturnRequest>): QuerySellReturnRequest;
};
export declare const QuerySellReturnResponse: {
    encode(message: QuerySellReturnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellReturnResponse;
    fromJSON(object: any): QuerySellReturnResponse;
    toJSON(message: QuerySellReturnResponse): unknown;
    fromPartial(object: Partial<QuerySellReturnResponse>): QuerySellReturnResponse;
};
export declare const QuerySwapReturnRequest: {
    encode(message: QuerySwapReturnRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapReturnRequest;
    fromJSON(object: any): QuerySwapReturnRequest;
    toJSON(message: QuerySwapReturnRequest): unknown;
    fromPartial(object: Partial<QuerySwapReturnRequest>): QuerySwapReturnRequest;
};
export declare const QuerySwapReturnResponse: {
    encode(message: QuerySwapReturnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapReturnResponse;
    fromJSON(object: any): QuerySwapReturnResponse;
    toJSON(message: QuerySwapReturnResponse): unknown;
    fromPartial(object: Partial<QuerySwapReturnResponse>): QuerySwapReturnResponse;
};
export declare const QueryAlphaMaximumsRequest: {
    encode(message: QueryAlphaMaximumsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlphaMaximumsRequest;
    fromJSON(object: any): QueryAlphaMaximumsRequest;
    toJSON(message: QueryAlphaMaximumsRequest): unknown;
    fromPartial(object: Partial<QueryAlphaMaximumsRequest>): QueryAlphaMaximumsRequest;
};
export declare const QueryAlphaMaximumsResponse: {
    encode(message: QueryAlphaMaximumsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlphaMaximumsResponse;
    fromJSON(object: any): QueryAlphaMaximumsResponse;
    toJSON(message: QueryAlphaMaximumsResponse): unknown;
    fromPartial(object: Partial<QueryAlphaMaximumsResponse>): QueryAlphaMaximumsResponse;
};
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
