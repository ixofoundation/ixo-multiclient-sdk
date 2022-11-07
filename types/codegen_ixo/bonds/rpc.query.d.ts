export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string;
}) => Promise<{
    bonds: {
        bonds(request?: import("./query").QueryBondsRequest): Promise<import("./query").QueryBondsResponse>;
        bondsDetailed(request?: import("./query").QueryBondsDetailedRequest): Promise<import("./query").QueryBondsDetailedResponse>;
        params(request?: import("./query").QueryParamsRequest): Promise<import("./query").QueryParamsResponse>;
        bond(request: import("./query").QueryBondRequest): Promise<import("./query").QueryBondResponse>;
        batch(request: import("./query").QueryBatchRequest): Promise<import("./query").QueryBatchResponse>;
        lastBatch(request: import("./query").QueryLastBatchRequest): Promise<import("./query").QueryLastBatchResponse>;
        currentPrice(request: import("./query").QueryCurrentPriceRequest): Promise<import("./query").QueryCurrentPriceResponse>;
        currentReserve(request: import("./query").QueryCurrentReserveRequest): Promise<import("./query").QueryCurrentReserveResponse>;
        availableReserve(request: import("./query").QueryAvailableReserveRequest): Promise<import("./query").QueryAvailableReserveResponse>;
        customPrice(request: import("./query").QueryCustomPriceRequest): Promise<import("./query").QueryCustomPriceResponse>;
        buyPrice(request: import("./query").QueryBuyPriceRequest): Promise<import("./query").QueryBuyPriceResponse>;
        sellReturn(request: import("./query").QuerySellReturnRequest): Promise<import("./query").QuerySellReturnResponse>;
        swapReturn(request: import("./query").QuerySwapReturnRequest): Promise<import("./query").QuerySwapReturnResponse>;
        alphaMaximums(request: import("./query").QueryAlphaMaximumsRequest): Promise<import("./query").QueryAlphaMaximumsResponse>;
    };
    cosmos: {
        base: {
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                };
            };
        };
    };
}>;
