import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBondsRequest, QueryBondsResponse, QueryBondsDetailedRequest, QueryBondsDetailedResponse, QueryParamsRequest, QueryParamsResponse, QueryBondRequest, QueryBondResponse, QueryBatchRequest, QueryBatchResponse, QueryLastBatchRequest, QueryLastBatchResponse, QueryCurrentPriceRequest, QueryCurrentPriceResponse, QueryCurrentReserveRequest, QueryCurrentReserveResponse, QueryAvailableReserveRequest, QueryAvailableReserveResponse, QueryCustomPriceRequest, QueryCustomPriceResponse, QueryBuyPriceRequest, QueryBuyPriceResponse, QuerySellReturnRequest, QuerySellReturnResponse, QuerySwapReturnRequest, QuerySwapReturnResponse, QueryAlphaMaximumsRequest, QueryAlphaMaximumsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Bonds returns all existing bonds. */
    bonds(request?: QueryBondsRequest): Promise<QueryBondsResponse>;
    /**
     * BondsDetailed returns a list of all existing bonds with some details about
     * their current state.
     */
    bondsDetailed(request?: QueryBondsDetailedRequest): Promise<QueryBondsDetailedResponse>;
    /** Params queries the parameters of x/bonds module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Bond queries info of a specific bond. */
    bond(request: QueryBondRequest): Promise<QueryBondResponse>;
    /** Batch queries info of a specific bond's current batch. */
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    /** LastBatch queries info of a specific bond's last batch. */
    lastBatch(request: QueryLastBatchRequest): Promise<QueryLastBatchResponse>;
    /** CurrentPrice queries the current price/s of a specific bond. */
    currentPrice(request: QueryCurrentPriceRequest): Promise<QueryCurrentPriceResponse>;
    /**
     * CurrentReserve queries the current balance/s of the reserve pool for a
     * specific bond.
     */
    currentReserve(request: QueryCurrentReserveRequest): Promise<QueryCurrentReserveResponse>;
    /**
     * AvailableReserve queries current available balance/s of the reserve pool
     * for a specific bond.
     */
    availableReserve(request: QueryAvailableReserveRequest): Promise<QueryAvailableReserveResponse>;
    /** CustomPrice queries price/s of a specific bond at a specific supply. */
    customPrice(request: QueryCustomPriceRequest): Promise<QueryCustomPriceResponse>;
    /**
     * BuyPrice queries price/s of buying an amount of tokens from a specific
     * bond.
     */
    buyPrice(request: QueryBuyPriceRequest): Promise<QueryBuyPriceResponse>;
    /**
     * SellReturn queries return/s on selling an amount of tokens of a specific
     * bond.
     */
    sellReturn(request: QuerySellReturnRequest): Promise<QuerySellReturnResponse>;
    /**
     * SwapReturn queries return/s on swapping an amount of tokens to another
     * token of a specific bond.
     */
    swapReturn(request: QuerySwapReturnRequest): Promise<QuerySwapReturnResponse>;
    /**
     * AlphaMaximums queries alpha maximums for a specific augmented bonding
     * curve.
     */
    alphaMaximums(request: QueryAlphaMaximumsRequest): Promise<QueryAlphaMaximumsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    bonds(request?: QueryBondsRequest): Promise<QueryBondsResponse>;
    bondsDetailed(request?: QueryBondsDetailedRequest): Promise<QueryBondsDetailedResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bond(request: QueryBondRequest): Promise<QueryBondResponse>;
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    lastBatch(request: QueryLastBatchRequest): Promise<QueryLastBatchResponse>;
    currentPrice(request: QueryCurrentPriceRequest): Promise<QueryCurrentPriceResponse>;
    currentReserve(request: QueryCurrentReserveRequest): Promise<QueryCurrentReserveResponse>;
    availableReserve(request: QueryAvailableReserveRequest): Promise<QueryAvailableReserveResponse>;
    customPrice(request: QueryCustomPriceRequest): Promise<QueryCustomPriceResponse>;
    buyPrice(request: QueryBuyPriceRequest): Promise<QueryBuyPriceResponse>;
    sellReturn(request: QuerySellReturnRequest): Promise<QuerySellReturnResponse>;
    swapReturn(request: QuerySwapReturnRequest): Promise<QuerySwapReturnResponse>;
    alphaMaximums(request: QueryAlphaMaximumsRequest): Promise<QueryAlphaMaximumsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    bonds(request?: QueryBondsRequest): Promise<QueryBondsResponse>;
    bondsDetailed(request?: QueryBondsDetailedRequest): Promise<QueryBondsDetailedResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bond(request: QueryBondRequest): Promise<QueryBondResponse>;
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    lastBatch(request: QueryLastBatchRequest): Promise<QueryLastBatchResponse>;
    currentPrice(request: QueryCurrentPriceRequest): Promise<QueryCurrentPriceResponse>;
    currentReserve(request: QueryCurrentReserveRequest): Promise<QueryCurrentReserveResponse>;
    availableReserve(request: QueryAvailableReserveRequest): Promise<QueryAvailableReserveResponse>;
    customPrice(request: QueryCustomPriceRequest): Promise<QueryCustomPriceResponse>;
    buyPrice(request: QueryBuyPriceRequest): Promise<QueryBuyPriceResponse>;
    sellReturn(request: QuerySellReturnRequest): Promise<QuerySellReturnResponse>;
    swapReturn(request: QuerySwapReturnRequest): Promise<QuerySwapReturnResponse>;
    alphaMaximums(request: QueryAlphaMaximumsRequest): Promise<QueryAlphaMaximumsResponse>;
};
