import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { PaymentType, Contract1155Payment, Contract1155PaymentSDKType } from "./claims";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SubmitClaimAuthorization {
    /** address of admin */
    admin: string;
    constraints: SubmitClaimConstraints[];
}
export interface SubmitClaimAuthorizationSDKType {
    admin: string;
    constraints: SubmitClaimConstraintsSDKType[];
}
export interface SubmitClaimConstraints {
    /** collection_id indicates to which Collection this claim belongs */
    collectionId: string;
    agentQuota: Long;
}
export interface SubmitClaimConstraintsSDKType {
    collection_id: string;
    agent_quota: Long;
}
export interface EvaluateClaimAuthorization {
    /** address of admin */
    admin: string;
    constraints: EvaluateClaimConstraints[];
}
export interface EvaluateClaimAuthorizationSDKType {
    admin: string;
    constraints: EvaluateClaimConstraintsSDKType[];
}
export interface EvaluateClaimConstraints {
    /** collection_id indicates to which Collection this claim belongs */
    collectionId: string;
    /** either collection_id or claim_ids is needed */
    claimIds: string[];
    agentQuota: Long;
    /** if null then no before_date validation done */
    beforeDate?: Timestamp;
    /**
     * max custom amount evaluator can change, if empty list must use amount
     * defined in Token payments
     */
    maxCustomAmount: Coin[];
}
export interface EvaluateClaimConstraintsSDKType {
    collection_id: string;
    claim_ids: string[];
    agent_quota: Long;
    before_date?: TimestampSDKType;
    max_custom_amount: CoinSDKType[];
}
export interface WithdrawPaymentAuthorization {
    /** address of admin */
    admin: string;
    constraints: WithdrawPaymentConstraints[];
}
export interface WithdrawPaymentAuthorizationSDKType {
    admin: string;
    constraints: WithdrawPaymentConstraintsSDKType[];
}
export interface WithdrawPaymentConstraints {
    /** claim_id the withdrawal is for */
    claimId: string;
    /** Inputs to the multisend tx to run to withdraw payment */
    inputs: Input[];
    /** Outputs for the multisend tx to run to withdraw payment */
    outputs: Output[];
    /**
     * payment type to keep track what payment is for and mark claim payment
     * accordingly
     */
    paymentType: PaymentType;
    /** if empty(nil) then no contract payment */
    contract_1155Payment?: Contract1155Payment;
    /** for contract payment */
    toAddress: string;
    /** for contract payment */
    fromAddress: string;
    /**
     * date that grantee can execute authorization, calculated from created date
     * plus the timeout on Collection payments, if null then none
     */
    releaseDate?: Timestamp;
}
export interface WithdrawPaymentConstraintsSDKType {
    claim_id: string;
    inputs: InputSDKType[];
    outputs: OutputSDKType[];
    payment_type: PaymentType;
    contract_1155_payment?: Contract1155PaymentSDKType;
    toAddress: string;
    fromAddress: string;
    release_date?: TimestampSDKType;
}
export declare const SubmitClaimAuthorization: {
    encode(message: SubmitClaimAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitClaimAuthorization;
    fromJSON(object: any): SubmitClaimAuthorization;
    toJSON(message: SubmitClaimAuthorization): unknown;
    fromPartial(object: Partial<SubmitClaimAuthorization>): SubmitClaimAuthorization;
};
export declare const SubmitClaimConstraints: {
    encode(message: SubmitClaimConstraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitClaimConstraints;
    fromJSON(object: any): SubmitClaimConstraints;
    toJSON(message: SubmitClaimConstraints): unknown;
    fromPartial(object: Partial<SubmitClaimConstraints>): SubmitClaimConstraints;
};
export declare const EvaluateClaimAuthorization: {
    encode(message: EvaluateClaimAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvaluateClaimAuthorization;
    fromJSON(object: any): EvaluateClaimAuthorization;
    toJSON(message: EvaluateClaimAuthorization): unknown;
    fromPartial(object: Partial<EvaluateClaimAuthorization>): EvaluateClaimAuthorization;
};
export declare const EvaluateClaimConstraints: {
    encode(message: EvaluateClaimConstraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvaluateClaimConstraints;
    fromJSON(object: any): EvaluateClaimConstraints;
    toJSON(message: EvaluateClaimConstraints): unknown;
    fromPartial(object: Partial<EvaluateClaimConstraints>): EvaluateClaimConstraints;
};
export declare const WithdrawPaymentAuthorization: {
    encode(message: WithdrawPaymentAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawPaymentAuthorization;
    fromJSON(object: any): WithdrawPaymentAuthorization;
    toJSON(message: WithdrawPaymentAuthorization): unknown;
    fromPartial(object: Partial<WithdrawPaymentAuthorization>): WithdrawPaymentAuthorization;
};
export declare const WithdrawPaymentConstraints: {
    encode(message: WithdrawPaymentConstraints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawPaymentConstraints;
    fromJSON(object: any): WithdrawPaymentConstraints;
    toJSON(message: WithdrawPaymentConstraints): unknown;
    fromPartial(object: Partial<WithdrawPaymentConstraints>): WithdrawPaymentConstraints;
};
