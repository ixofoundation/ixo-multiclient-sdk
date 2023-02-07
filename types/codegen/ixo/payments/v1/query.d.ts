import { PaymentTemplate, PaymentTemplateSDKType, PaymentContract, PaymentContractSDKType, Subscription, SubscriptionSDKType } from "./payments";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryPaymentTemplateRequest is the request type for the Query/PaymentTemplate
 * RPC method.
 */
export interface QueryPaymentTemplateRequest {
    paymentTemplateId: string;
}
/**
 * QueryPaymentTemplateRequest is the request type for the Query/PaymentTemplate
 * RPC method.
 */
export interface QueryPaymentTemplateRequestSDKType {
    payment_template_id: string;
}
/**
 * QueryPaymentTemplateResponse is the response type for the
 * Query/PaymentTemplate RPC method.
 */
export interface QueryPaymentTemplateResponse {
    paymentTemplate?: PaymentTemplate;
}
/**
 * QueryPaymentTemplateResponse is the response type for the
 * Query/PaymentTemplate RPC method.
 */
export interface QueryPaymentTemplateResponseSDKType {
    payment_template?: PaymentTemplateSDKType;
}
/**
 * QueryPaymentContractRequest is the request type for the Query/PaymentContract
 * RPC method.
 */
export interface QueryPaymentContractRequest {
    paymentContractId: string;
}
/**
 * QueryPaymentContractRequest is the request type for the Query/PaymentContract
 * RPC method.
 */
export interface QueryPaymentContractRequestSDKType {
    payment_contract_id: string;
}
/**
 * QueryPaymentContractResponse is the response type for the
 * Query/PaymentContract RPC method.
 */
export interface QueryPaymentContractResponse {
    paymentContract?: PaymentContract;
}
/**
 * QueryPaymentContractResponse is the response type for the
 * Query/PaymentContract RPC method.
 */
export interface QueryPaymentContractResponseSDKType {
    payment_contract?: PaymentContractSDKType;
}
/**
 * QueryPaymentContractsByIdPrefixRequest is the request type for the
 * Query/PaymentContractsByIdPrefix RPC method.
 */
export interface QueryPaymentContractsByIdPrefixRequest {
    paymentContractsIdPrefix: string;
}
/**
 * QueryPaymentContractsByIdPrefixRequest is the request type for the
 * Query/PaymentContractsByIdPrefix RPC method.
 */
export interface QueryPaymentContractsByIdPrefixRequestSDKType {
    payment_contracts_id_prefix: string;
}
/**
 * QueryPaymentContractsByIdPrefixResponse is the response type for the
 * Query/PaymentContractsByIdPrefix RPC method.
 */
export interface QueryPaymentContractsByIdPrefixResponse {
    paymentContracts: PaymentContract[];
}
/**
 * QueryPaymentContractsByIdPrefixResponse is the response type for the
 * Query/PaymentContractsByIdPrefix RPC method.
 */
export interface QueryPaymentContractsByIdPrefixResponseSDKType {
    payment_contracts: PaymentContractSDKType[];
}
/**
 * QuerySubscriptionRequest is the request type for the Query/Subscription RPC
 * method.
 */
export interface QuerySubscriptionRequest {
    subscriptionId: string;
}
/**
 * QuerySubscriptionRequest is the request type for the Query/Subscription RPC
 * method.
 */
export interface QuerySubscriptionRequestSDKType {
    subscription_id: string;
}
/**
 * QuerySubscriptionResponse is the response type for the Query/Subscription RPC
 * method.
 */
export interface QuerySubscriptionResponse {
    subscription?: Subscription;
}
/**
 * QuerySubscriptionResponse is the response type for the Query/Subscription RPC
 * method.
 */
export interface QuerySubscriptionResponseSDKType {
    subscription?: SubscriptionSDKType;
}
export declare const QueryPaymentTemplateRequest: {
    encode(message: QueryPaymentTemplateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentTemplateRequest;
    fromJSON(object: any): QueryPaymentTemplateRequest;
    toJSON(message: QueryPaymentTemplateRequest): unknown;
    fromPartial(object: Partial<QueryPaymentTemplateRequest>): QueryPaymentTemplateRequest;
};
export declare const QueryPaymentTemplateResponse: {
    encode(message: QueryPaymentTemplateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentTemplateResponse;
    fromJSON(object: any): QueryPaymentTemplateResponse;
    toJSON(message: QueryPaymentTemplateResponse): unknown;
    fromPartial(object: Partial<QueryPaymentTemplateResponse>): QueryPaymentTemplateResponse;
};
export declare const QueryPaymentContractRequest: {
    encode(message: QueryPaymentContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractRequest;
    fromJSON(object: any): QueryPaymentContractRequest;
    toJSON(message: QueryPaymentContractRequest): unknown;
    fromPartial(object: Partial<QueryPaymentContractRequest>): QueryPaymentContractRequest;
};
export declare const QueryPaymentContractResponse: {
    encode(message: QueryPaymentContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractResponse;
    fromJSON(object: any): QueryPaymentContractResponse;
    toJSON(message: QueryPaymentContractResponse): unknown;
    fromPartial(object: Partial<QueryPaymentContractResponse>): QueryPaymentContractResponse;
};
export declare const QueryPaymentContractsByIdPrefixRequest: {
    encode(message: QueryPaymentContractsByIdPrefixRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractsByIdPrefixRequest;
    fromJSON(object: any): QueryPaymentContractsByIdPrefixRequest;
    toJSON(message: QueryPaymentContractsByIdPrefixRequest): unknown;
    fromPartial(object: Partial<QueryPaymentContractsByIdPrefixRequest>): QueryPaymentContractsByIdPrefixRequest;
};
export declare const QueryPaymentContractsByIdPrefixResponse: {
    encode(message: QueryPaymentContractsByIdPrefixResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractsByIdPrefixResponse;
    fromJSON(object: any): QueryPaymentContractsByIdPrefixResponse;
    toJSON(message: QueryPaymentContractsByIdPrefixResponse): unknown;
    fromPartial(object: Partial<QueryPaymentContractsByIdPrefixResponse>): QueryPaymentContractsByIdPrefixResponse;
};
export declare const QuerySubscriptionRequest: {
    encode(message: QuerySubscriptionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionRequest;
    fromJSON(object: any): QuerySubscriptionRequest;
    toJSON(message: QuerySubscriptionRequest): unknown;
    fromPartial(object: Partial<QuerySubscriptionRequest>): QuerySubscriptionRequest;
};
export declare const QuerySubscriptionResponse: {
    encode(message: QuerySubscriptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionResponse;
    fromJSON(object: any): QuerySubscriptionResponse;
    toJSON(message: QuerySubscriptionResponse): unknown;
    fromPartial(object: Partial<QuerySubscriptionResponse>): QuerySubscriptionResponse;
};
