import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryPaymentTemplateRequest, QueryPaymentTemplateResponse, QueryPaymentContractRequest, QueryPaymentContractResponse, QueryPaymentContractsByIdPrefixRequest, QueryPaymentContractsByIdPrefixResponse, QuerySubscriptionRequest, QuerySubscriptionResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** PaymentTemplate queries info of a specific payment template. */
    paymentTemplate(request: QueryPaymentTemplateRequest): Promise<QueryPaymentTemplateResponse>;
    /** PaymentContract queries info of a specific payment contract. */
    paymentContract(request: QueryPaymentContractRequest): Promise<QueryPaymentContractResponse>;
    /** PaymentContractsByIdPrefix lists all payment contracts having an id with a specific prefix. */
    paymentContractsByIdPrefix(request: QueryPaymentContractsByIdPrefixRequest): Promise<QueryPaymentContractsByIdPrefixResponse>;
    /** Subscription queries info of a specific Subscription. */
    subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    paymentTemplate(request: QueryPaymentTemplateRequest): Promise<QueryPaymentTemplateResponse>;
    paymentContract(request: QueryPaymentContractRequest): Promise<QueryPaymentContractResponse>;
    paymentContractsByIdPrefix(request: QueryPaymentContractsByIdPrefixRequest): Promise<QueryPaymentContractsByIdPrefixResponse>;
    subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    paymentTemplate(request: QueryPaymentTemplateRequest): Promise<QueryPaymentTemplateResponse>;
    paymentContract(request: QueryPaymentContractRequest): Promise<QueryPaymentContractResponse>;
    paymentContractsByIdPrefix(request: QueryPaymentContractsByIdPrefixRequest): Promise<QueryPaymentContractsByIdPrefixResponse>;
    subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse>;
};
