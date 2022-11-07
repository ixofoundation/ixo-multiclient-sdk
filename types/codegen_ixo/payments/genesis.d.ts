import { PaymentTemplate, PaymentTemplateSDKType, PaymentContract, PaymentContractSDKType, Subscription, SubscriptionSDKType } from "./payments";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the payments module's genesis state. */
export interface GenesisState {
    paymentTemplates: PaymentTemplate[];
    paymentContracts: PaymentContract[];
    subscriptions: Subscription[];
}
/** GenesisState defines the payments module's genesis state. */
export interface GenesisStateSDKType {
    payment_templates: PaymentTemplateSDKType[];
    payment_contracts: PaymentContractSDKType[];
    subscriptions: SubscriptionSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
