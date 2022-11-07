import { PaymentTemplate, PaymentTemplateSDKType, DistributionShare, DistributionShareSDKType } from "./payments";
import { Any, AnySDKType } from "../google/protobuf/any";
import { Coin, CoinSDKType } from "../cosmos/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgSetPaymentContractAuthorisation defines a message for authorising or deauthorising a payment contract. */
export interface MsgSetPaymentContractAuthorisation {
    paymentContractId: string;
    payerDid: string;
    authorised: boolean;
    payerAddress: string;
}
/** MsgSetPaymentContractAuthorisation defines a message for authorising or deauthorising a payment contract. */
export interface MsgSetPaymentContractAuthorisationSDKType {
    payment_contract_id: string;
    payer_did: string;
    authorised: boolean;
    payer_address: string;
}
/** MsgSetPaymentContractAuthorisationResponse defines the Msg/SetPaymentContractAuthorisation response type. */
export interface MsgSetPaymentContractAuthorisationResponse {
}
/** MsgSetPaymentContractAuthorisationResponse defines the Msg/SetPaymentContractAuthorisation response type. */
export interface MsgSetPaymentContractAuthorisationResponseSDKType {
}
/** MsgCreatePaymentTemplate defines a message for creating a payment template. */
export interface MsgCreatePaymentTemplate {
    creatorDid: string;
    paymentTemplate?: PaymentTemplate;
    creatorAddress: string;
}
/** MsgCreatePaymentTemplate defines a message for creating a payment template. */
export interface MsgCreatePaymentTemplateSDKType {
    creator_did: string;
    payment_template?: PaymentTemplateSDKType;
    creator_address: string;
}
/** MsgCreatePaymentTemplateResponse defines the Msg/CreatePaymentTemplate response type. */
export interface MsgCreatePaymentTemplateResponse {
}
/** MsgCreatePaymentTemplateResponse defines the Msg/CreatePaymentTemplate response type. */
export interface MsgCreatePaymentTemplateResponseSDKType {
}
/** MsgCreatePaymentContract defines a message for creating a payment contract. */
export interface MsgCreatePaymentContract {
    creatorDid: string;
    paymentTemplateId: string;
    paymentContractId: string;
    payer: string;
    recipients: DistributionShare[];
    canDeauthorise: boolean;
    discountId: string;
    creatorAddress: string;
}
/** MsgCreatePaymentContract defines a message for creating a payment contract. */
export interface MsgCreatePaymentContractSDKType {
    creator_did: string;
    payment_template_id: string;
    payment_contract_id: string;
    payer: string;
    recipients: DistributionShareSDKType[];
    can_deauthorise: boolean;
    discount_id: string;
    creator_address: string;
}
/** MsgCreatePaymentContractResponse defines the Msg/CreatePaymentContract response type. */
export interface MsgCreatePaymentContractResponse {
}
/** MsgCreatePaymentContractResponse defines the Msg/CreatePaymentContract response type. */
export interface MsgCreatePaymentContractResponseSDKType {
}
/** MsgCreateSubscription defines a message for creating a subscription. */
export interface MsgCreateSubscription {
    creatorDid: string;
    subscriptionId: string;
    paymentContractId: string;
    maxPeriods: string;
    period?: Any;
    creatorAddress: string;
}
/** MsgCreateSubscription defines a message for creating a subscription. */
export interface MsgCreateSubscriptionSDKType {
    creator_did: string;
    subscription_id: string;
    payment_contract_id: string;
    max_periods: string;
    period?: AnySDKType;
    creator_address: string;
}
/** MsgCreateSubscriptionResponse defines the Msg/CreateSubscription response type. */
export interface MsgCreateSubscriptionResponse {
}
/** MsgCreateSubscriptionResponse defines the Msg/CreateSubscription response type. */
export interface MsgCreateSubscriptionResponseSDKType {
}
/** MsgGrantDiscount defines a message for granting a discount to a payer on a specific payment contract. */
export interface MsgGrantDiscount {
    senderDid: string;
    paymentContractId: string;
    discountId: string;
    recipient: string;
    senderAddress: string;
}
/** MsgGrantDiscount defines a message for granting a discount to a payer on a specific payment contract. */
export interface MsgGrantDiscountSDKType {
    sender_did: string;
    payment_contract_id: string;
    discount_id: string;
    recipient: string;
    sender_address: string;
}
/** MsgGrantDiscountResponse defines the Msg/GrantDiscount response type. */
export interface MsgGrantDiscountResponse {
}
/** MsgGrantDiscountResponse defines the Msg/GrantDiscount response type. */
export interface MsgGrantDiscountResponseSDKType {
}
/** MsgRevokeDiscount defines a message for revoking a discount previously granted to a payer. */
export interface MsgRevokeDiscount {
    senderDid: string;
    paymentContractId: string;
    holder: string;
    senderAddress: string;
}
/** MsgRevokeDiscount defines a message for revoking a discount previously granted to a payer. */
export interface MsgRevokeDiscountSDKType {
    sender_did: string;
    payment_contract_id: string;
    holder: string;
    sender_address: string;
}
/** MsgRevokeDiscountResponse defines the Msg/RevokeDiscount response type. */
export interface MsgRevokeDiscountResponse {
}
/** MsgRevokeDiscountResponse defines the Msg/RevokeDiscount response type. */
export interface MsgRevokeDiscountResponseSDKType {
}
/** MsgEffectPayment defines a message for putting a specific payment contract into effect. */
export interface MsgEffectPayment {
    senderDid: string;
    paymentContractId: string;
    partialPaymentAmount: Coin[];
    senderAddress: string;
}
/** MsgEffectPayment defines a message for putting a specific payment contract into effect. */
export interface MsgEffectPaymentSDKType {
    sender_did: string;
    payment_contract_id: string;
    partial_payment_amount: CoinSDKType[];
    sender_address: string;
}
/** MsgEffectPaymentResponse defines the Msg/EffectPayment response type. */
export interface MsgEffectPaymentResponse {
}
/** MsgEffectPaymentResponse defines the Msg/EffectPayment response type. */
export interface MsgEffectPaymentResponseSDKType {
}
export declare const MsgSetPaymentContractAuthorisation: {
    encode(message: MsgSetPaymentContractAuthorisation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisation;
    fromJSON(object: any): MsgSetPaymentContractAuthorisation;
    toJSON(message: MsgSetPaymentContractAuthorisation): unknown;
    fromPartial(object: Partial<MsgSetPaymentContractAuthorisation>): MsgSetPaymentContractAuthorisation;
};
export declare const MsgSetPaymentContractAuthorisationResponse: {
    encode(_: MsgSetPaymentContractAuthorisationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisationResponse;
    fromJSON(_: any): MsgSetPaymentContractAuthorisationResponse;
    toJSON(_: MsgSetPaymentContractAuthorisationResponse): unknown;
    fromPartial(_: Partial<MsgSetPaymentContractAuthorisationResponse>): MsgSetPaymentContractAuthorisationResponse;
};
export declare const MsgCreatePaymentTemplate: {
    encode(message: MsgCreatePaymentTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplate;
    fromJSON(object: any): MsgCreatePaymentTemplate;
    toJSON(message: MsgCreatePaymentTemplate): unknown;
    fromPartial(object: Partial<MsgCreatePaymentTemplate>): MsgCreatePaymentTemplate;
};
export declare const MsgCreatePaymentTemplateResponse: {
    encode(_: MsgCreatePaymentTemplateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplateResponse;
    fromJSON(_: any): MsgCreatePaymentTemplateResponse;
    toJSON(_: MsgCreatePaymentTemplateResponse): unknown;
    fromPartial(_: Partial<MsgCreatePaymentTemplateResponse>): MsgCreatePaymentTemplateResponse;
};
export declare const MsgCreatePaymentContract: {
    encode(message: MsgCreatePaymentContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContract;
    fromJSON(object: any): MsgCreatePaymentContract;
    toJSON(message: MsgCreatePaymentContract): unknown;
    fromPartial(object: Partial<MsgCreatePaymentContract>): MsgCreatePaymentContract;
};
export declare const MsgCreatePaymentContractResponse: {
    encode(_: MsgCreatePaymentContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContractResponse;
    fromJSON(_: any): MsgCreatePaymentContractResponse;
    toJSON(_: MsgCreatePaymentContractResponse): unknown;
    fromPartial(_: Partial<MsgCreatePaymentContractResponse>): MsgCreatePaymentContractResponse;
};
export declare const MsgCreateSubscription: {
    encode(message: MsgCreateSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscription;
    fromJSON(object: any): MsgCreateSubscription;
    toJSON(message: MsgCreateSubscription): unknown;
    fromPartial(object: Partial<MsgCreateSubscription>): MsgCreateSubscription;
};
export declare const MsgCreateSubscriptionResponse: {
    encode(_: MsgCreateSubscriptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscriptionResponse;
    fromJSON(_: any): MsgCreateSubscriptionResponse;
    toJSON(_: MsgCreateSubscriptionResponse): unknown;
    fromPartial(_: Partial<MsgCreateSubscriptionResponse>): MsgCreateSubscriptionResponse;
};
export declare const MsgGrantDiscount: {
    encode(message: MsgGrantDiscount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscount;
    fromJSON(object: any): MsgGrantDiscount;
    toJSON(message: MsgGrantDiscount): unknown;
    fromPartial(object: Partial<MsgGrantDiscount>): MsgGrantDiscount;
};
export declare const MsgGrantDiscountResponse: {
    encode(_: MsgGrantDiscountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscountResponse;
    fromJSON(_: any): MsgGrantDiscountResponse;
    toJSON(_: MsgGrantDiscountResponse): unknown;
    fromPartial(_: Partial<MsgGrantDiscountResponse>): MsgGrantDiscountResponse;
};
export declare const MsgRevokeDiscount: {
    encode(message: MsgRevokeDiscount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscount;
    fromJSON(object: any): MsgRevokeDiscount;
    toJSON(message: MsgRevokeDiscount): unknown;
    fromPartial(object: Partial<MsgRevokeDiscount>): MsgRevokeDiscount;
};
export declare const MsgRevokeDiscountResponse: {
    encode(_: MsgRevokeDiscountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscountResponse;
    fromJSON(_: any): MsgRevokeDiscountResponse;
    toJSON(_: MsgRevokeDiscountResponse): unknown;
    fromPartial(_: Partial<MsgRevokeDiscountResponse>): MsgRevokeDiscountResponse;
};
export declare const MsgEffectPayment: {
    encode(message: MsgEffectPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPayment;
    fromJSON(object: any): MsgEffectPayment;
    toJSON(message: MsgEffectPayment): unknown;
    fromPartial(object: Partial<MsgEffectPayment>): MsgEffectPayment;
};
export declare const MsgEffectPaymentResponse: {
    encode(_: MsgEffectPaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPaymentResponse;
    fromJSON(_: any): MsgEffectPaymentResponse;
    toJSON(_: MsgEffectPaymentResponse): unknown;
    fromPartial(_: Partial<MsgEffectPaymentResponse>): MsgEffectPaymentResponse;
};
