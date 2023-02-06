import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * PaymentTemplate contains details about a payment, with no info about the
 * payer or payee.
 */
export interface PaymentTemplate {
    id: string;
    paymentAmount: Coin[];
    paymentMinimum: Coin[];
    paymentMaximum: Coin[];
    discounts: Discount[];
}
/**
 * PaymentTemplate contains details about a payment, with no info about the
 * payer or payee.
 */
export interface PaymentTemplateSDKType {
    id: string;
    payment_amount: CoinSDKType[];
    payment_minimum: CoinSDKType[];
    payment_maximum: CoinSDKType[];
    discounts: DiscountSDKType[];
}
/** Discount contains details about a discount which can be granted to payers. */
export interface Discount {
    id: string;
    percent: string;
}
/** Discount contains details about a discount which can be granted to payers. */
export interface DiscountSDKType {
    id: string;
    percent: string;
}
/**
 * DistributionShare specifies the share of a specific payment an address will
 * receive.
 */
export interface DistributionShare {
    address: string;
    percentage: string;
}
/**
 * DistributionShare specifies the share of a specific payment an address will
 * receive.
 */
export interface DistributionShareSDKType {
    address: string;
    percentage: string;
}
/**
 * PaymentContract specifies an agreement between a payer and payee/s which can
 * be invoked once or multiple times to effect payment/s.
 */
export interface PaymentContract {
    id: string;
    paymentTemplateId: string;
    creator: string;
    payer: string;
    recipients: DistributionShare[];
    cumulativePay: Coin[];
    currentRemainder: Coin[];
    canDeauthorise: boolean;
    authorised: boolean;
    discountId: string;
}
/**
 * PaymentContract specifies an agreement between a payer and payee/s which can
 * be invoked once or multiple times to effect payment/s.
 */
export interface PaymentContractSDKType {
    id: string;
    payment_template_id: string;
    creator: string;
    payer: string;
    recipients: DistributionShareSDKType[];
    cumulative_pay: CoinSDKType[];
    current_remainder: CoinSDKType[];
    can_deauthorise: boolean;
    authorised: boolean;
    discount_id: string;
}
/** Subscription specifies details of a payment to be effected periodically. */
export interface Subscription {
    id: string;
    paymentContractId: string;
    periodsSoFar: string;
    maxPeriods: string;
    periodsAccumulated: string;
    period?: Any;
}
/** Subscription specifies details of a payment to be effected periodically. */
export interface SubscriptionSDKType {
    id: string;
    payment_contract_id: string;
    periods_so_far: string;
    max_periods: string;
    periods_accumulated: string;
    period?: AnySDKType;
}
/**
 * BlockPeriod implements the Period interface and specifies a period in terms
 * of number of blocks.
 */
export interface BlockPeriod {
    periodLength: Long;
    periodStartBlock: Long;
}
/**
 * BlockPeriod implements the Period interface and specifies a period in terms
 * of number of blocks.
 */
export interface BlockPeriodSDKType {
    period_length: Long;
    period_start_block: Long;
}
/**
 * TimePeriod implements the Period interface and specifies a period in terms of
 * time.
 */
export interface TimePeriod {
    periodDurationNs?: Duration;
    periodStartTime?: Timestamp;
}
/**
 * TimePeriod implements the Period interface and specifies a period in terms of
 * time.
 */
export interface TimePeriodSDKType {
    period_duration_ns?: DurationSDKType;
    period_start_time?: TimestampSDKType;
}
/**
 * TestPeriod implements the Period interface and is identical to BlockPeriod,
 * except it ignores the context in periodEnded() and periodStarted().
 */
export interface TestPeriod {
    periodLength: Long;
    periodStartBlock: Long;
}
/**
 * TestPeriod implements the Period interface and is identical to BlockPeriod,
 * except it ignores the context in periodEnded() and periodStarted().
 */
export interface TestPeriodSDKType {
    period_length: Long;
    period_start_block: Long;
}
export declare const PaymentTemplate: {
    encode(message: PaymentTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentTemplate;
    fromJSON(object: any): PaymentTemplate;
    toJSON(message: PaymentTemplate): unknown;
    fromPartial(object: Partial<PaymentTemplate>): PaymentTemplate;
};
export declare const Discount: {
    encode(message: Discount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Discount;
    fromJSON(object: any): Discount;
    toJSON(message: Discount): unknown;
    fromPartial(object: Partial<Discount>): Discount;
};
export declare const DistributionShare: {
    encode(message: DistributionShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionShare;
    fromJSON(object: any): DistributionShare;
    toJSON(message: DistributionShare): unknown;
    fromPartial(object: Partial<DistributionShare>): DistributionShare;
};
export declare const PaymentContract: {
    encode(message: PaymentContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentContract;
    fromJSON(object: any): PaymentContract;
    toJSON(message: PaymentContract): unknown;
    fromPartial(object: Partial<PaymentContract>): PaymentContract;
};
export declare const Subscription: {
    encode(message: Subscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription;
    fromJSON(object: any): Subscription;
    toJSON(message: Subscription): unknown;
    fromPartial(object: Partial<Subscription>): Subscription;
};
export declare const BlockPeriod: {
    encode(message: BlockPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockPeriod;
    fromJSON(object: any): BlockPeriod;
    toJSON(message: BlockPeriod): unknown;
    fromPartial(object: Partial<BlockPeriod>): BlockPeriod;
};
export declare const TimePeriod: {
    encode(message: TimePeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimePeriod;
    fromJSON(object: any): TimePeriod;
    toJSON(message: TimePeriod): unknown;
    fromPartial(object: Partial<TimePeriod>): TimePeriod;
};
export declare const TestPeriod: {
    encode(message: TestPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestPeriod;
    fromJSON(object: any): TestPeriod;
    toJSON(message: TestPeriod): unknown;
    fromPartial(object: Partial<TestPeriod>): TestPeriod;
};
