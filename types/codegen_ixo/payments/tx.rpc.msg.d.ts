import { Rpc } from "../helpers";
import { MsgSetPaymentContractAuthorisation, MsgSetPaymentContractAuthorisationResponse, MsgCreatePaymentTemplate, MsgCreatePaymentTemplateResponse, MsgCreatePaymentContract, MsgCreatePaymentContractResponse, MsgCreateSubscription, MsgCreateSubscriptionResponse, MsgGrantDiscount, MsgGrantDiscountResponse, MsgRevokeDiscount, MsgRevokeDiscountResponse, MsgEffectPayment, MsgEffectPaymentResponse } from "./tx";
/** Msg defines the payments Msg service. */
export interface Msg {
    /** SetPaymentContractAuthorisation defines a method for authorising or deauthorising a payment contract. */
    setPaymentContractAuthorisation(request: MsgSetPaymentContractAuthorisation): Promise<MsgSetPaymentContractAuthorisationResponse>;
    /** CreatePaymentTemplate defines a method for creating a payment template. */
    createPaymentTemplate(request: MsgCreatePaymentTemplate): Promise<MsgCreatePaymentTemplateResponse>;
    /** CreatePaymentContract defines a method for creating a payment contract. */
    createPaymentContract(request: MsgCreatePaymentContract): Promise<MsgCreatePaymentContractResponse>;
    /** CreateSubscription defines a method for creating a subscription. */
    createSubscription(request: MsgCreateSubscription): Promise<MsgCreateSubscriptionResponse>;
    /** GrantDiscount defines a method for granting a discount to a payer on a specific payment contract. */
    grantDiscount(request: MsgGrantDiscount): Promise<MsgGrantDiscountResponse>;
    /** RevokeDiscount defines a method for revoking a discount previously granted to a payer. */
    revokeDiscount(request: MsgRevokeDiscount): Promise<MsgRevokeDiscountResponse>;
    /** EffectPayment defines a method for putting a specific payment contract into effect. */
    effectPayment(request: MsgEffectPayment): Promise<MsgEffectPaymentResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setPaymentContractAuthorisation(request: MsgSetPaymentContractAuthorisation): Promise<MsgSetPaymentContractAuthorisationResponse>;
    createPaymentTemplate(request: MsgCreatePaymentTemplate): Promise<MsgCreatePaymentTemplateResponse>;
    createPaymentContract(request: MsgCreatePaymentContract): Promise<MsgCreatePaymentContractResponse>;
    createSubscription(request: MsgCreateSubscription): Promise<MsgCreateSubscriptionResponse>;
    grantDiscount(request: MsgGrantDiscount): Promise<MsgGrantDiscountResponse>;
    revokeDiscount(request: MsgRevokeDiscount): Promise<MsgRevokeDiscountResponse>;
    effectPayment(request: MsgEffectPayment): Promise<MsgEffectPaymentResponse>;
}
