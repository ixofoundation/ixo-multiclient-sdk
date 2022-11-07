export declare const createRPCQueryClient: ({ rpcEndpoint, }: {
    rpcEndpoint: string;
}) => Promise<{
    ixo: {
        bonds: {
            bonds(request?: import("../codegen_ixo/bonds/query").QueryBondsRequest): Promise<import("../codegen_ixo/bonds/query").QueryBondsResponse>;
            bondsDetailed(request?: import("../codegen_ixo/bonds/query").QueryBondsDetailedRequest): Promise<import("../codegen_ixo/bonds/query").QueryBondsDetailedResponse>;
            params(request?: import("../codegen_ixo/bonds/query").QueryParamsRequest): Promise<import("../codegen_ixo/bonds/query").QueryParamsResponse>;
            bond(request: import("../codegen_ixo/bonds/query").QueryBondRequest): Promise<import("../codegen_ixo/bonds/query").QueryBondResponse>;
            batch(request: import("../codegen_ixo/bonds/query").QueryBatchRequest): Promise<import("../codegen_ixo/bonds/query").QueryBatchResponse>;
            lastBatch(request: import("../codegen_ixo/bonds/query").QueryLastBatchRequest): Promise<import("../codegen_ixo/bonds/query").QueryLastBatchResponse>;
            currentPrice(request: import("../codegen_ixo/bonds/query").QueryCurrentPriceRequest): Promise<import("../codegen_ixo/bonds/query").QueryCurrentPriceResponse>;
            currentReserve(request: import("../codegen_ixo/bonds/query").QueryCurrentReserveRequest): Promise<import("../codegen_ixo/bonds/query").QueryCurrentReserveResponse>;
            availableReserve(request: import("../codegen_ixo/bonds/query").QueryAvailableReserveRequest): Promise<import("../codegen_ixo/bonds/query").QueryAvailableReserveResponse>;
            customPrice(request: import("../codegen_ixo/bonds/query").QueryCustomPriceRequest): Promise<import("../codegen_ixo/bonds/query").QueryCustomPriceResponse>;
            buyPrice(request: import("../codegen_ixo/bonds/query").QueryBuyPriceRequest): Promise<import("../codegen_ixo/bonds/query").QueryBuyPriceResponse>;
            sellReturn(request: import("../codegen_ixo/bonds/query").QuerySellReturnRequest): Promise<import("../codegen_ixo/bonds/query").QuerySellReturnResponse>;
            swapReturn(request: import("../codegen_ixo/bonds/query").QuerySwapReturnRequest): Promise<import("../codegen_ixo/bonds/query").QuerySwapReturnResponse>;
            alphaMaximums(request: import("../codegen_ixo/bonds/query").QueryAlphaMaximumsRequest): Promise<import("../codegen_ixo/bonds/query").QueryAlphaMaximumsResponse>;
        };
        entity: {
            entityList(request: import("../codegen_ixo/entity/query").QueryEntityListRequest): Promise<import("../codegen_ixo/entity/query").QueryEntityListResponse>;
            entityDoc(request: import("../codegen_ixo/entity/query").QueryEntityDocRequest): Promise<import("../codegen_ixo/entity/query").QueryEntityDocResponse>;
            entityConfig(request?: import("../codegen_ixo/entity/query").QueryEntityConfigRequest): Promise<import("../codegen_ixo/entity/query").QueryEntityConfigResponse>;
        };
        iid: {
            iidDocuments(request: import("../codegen_ixo/iid/query").QueryIidDocumentsRequest): Promise<import("../codegen_ixo/iid/query").QueryIidDocumentsResponse>;
            iidDocument(request: import("../codegen_ixo/iid/query").QueryIidDocumentRequest): Promise<import("../codegen_ixo/iid/query").QueryIidDocumentResponse>;
            metaData(request: import("../codegen_ixo/iid/query").QueryIidMetaDataRequest): Promise<import("../codegen_ixo/iid/query").QueryIidMetaDataResponse>;
        };
        payments: {
            paymentTemplate(request: import("../codegen_ixo/payments/query").QueryPaymentTemplateRequest): Promise<import("../codegen_ixo/payments/query").QueryPaymentTemplateResponse>;
            paymentContract(request: import("../codegen_ixo/payments/query").QueryPaymentContractRequest): Promise<import("../codegen_ixo/payments/query").QueryPaymentContractResponse>;
            paymentContractsByIdPrefix(request: import("../codegen_ixo/payments/query").QueryPaymentContractsByIdPrefixRequest): Promise<import("../codegen_ixo/payments/query").QueryPaymentContractsByIdPrefixResponse>;
            subscription(request: import("../codegen_ixo/payments/query").QuerySubscriptionRequest): Promise<import("../codegen_ixo/payments/query").QuerySubscriptionResponse>;
        };
        project: {
            projectDoc(request: import("../codegen_ixo/project/query").QueryProjectDocRequest): Promise<import("../codegen_ixo/project/query").QueryProjectDocResponse>;
            projectAccounts(request: import("../codegen_ixo/project/query").QueryProjectAccountsRequest): Promise<import("../codegen_ixo/project/query").QueryProjectAccountsResponse>;
            projectTx(request: import("../codegen_ixo/project/query").QueryProjectTxRequest): Promise<import("../codegen_ixo/project/query").QueryProjectTxResponse>;
            params(request?: import("../codegen_ixo/project/query").QueryParamsRequest): Promise<import("../codegen_ixo/project/query").QueryParamsResponse>;
        };
    };
}>;
