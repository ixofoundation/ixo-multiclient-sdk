import { Bond, BondSDKType, BuyOrder, BuyOrderSDKType, SellOrder, SellOrderSDKType, SwapOrder, SwapOrderSDKType } from "./bonds";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** BondCreatedEvent is an event triggered on a Bond creation */
export interface BondCreatedEvent {
    /** BondCreatedEvent is an event triggered on a Bond creation */
    bond?: Bond;
}
/** BondCreatedEvent is an event triggered on a Bond creation */
export interface BondCreatedEventSDKType {
    bond?: BondSDKType;
}
/** BondUpdatedEvent is an event triggered on a Bond update */
export interface BondUpdatedEvent {
    /** BondUpdatedEvent is an event triggered on a Bond update */
    bond?: Bond;
}
/** BondUpdatedEvent is an event triggered on a Bond update */
export interface BondUpdatedEventSDKType {
    bond?: BondSDKType;
}
/** BondSetNextAlphaEvent is an event triggered when next batch alpha is set */
export interface BondSetNextAlphaEvent {
    bondDid: string;
    nextAlpha: string;
    signer: string;
}
/** BondSetNextAlphaEvent is an event triggered when next batch alpha is set */
export interface BondSetNextAlphaEventSDKType {
    bond_did: string;
    next_alpha: string;
    signer: string;
}
/** BondBuyOrderEvent is an event triggered on a Bond buy order */
export interface BondBuyOrderEvent {
    order?: BuyOrder;
    bondDid: string;
}
/** BondBuyOrderEvent is an event triggered on a Bond buy order */
export interface BondBuyOrderEventSDKType {
    order?: BuyOrderSDKType;
    bond_did: string;
}
/** BondSellOrderEvent is an event triggered on a Bond sell order */
export interface BondSellOrderEvent {
    order?: SellOrder;
    bondDid: string;
}
/** BondSellOrderEvent is an event triggered on a Bond sell order */
export interface BondSellOrderEventSDKType {
    order?: SellOrderSDKType;
    bond_did: string;
}
/** BondSwapOrderEvent is an event triggered on a Bond swap order */
export interface BondSwapOrderEvent {
    order?: SwapOrder;
    bondDid: string;
}
/** BondSwapOrderEvent is an event triggered on a Bond swap order */
export interface BondSwapOrderEventSDKType {
    order?: SwapOrderSDKType;
    bond_did: string;
}
/**
 * BondMakeOutcomePaymentEvent is an event triggered on a Bond make outcome
 * payment
 */
export interface BondMakeOutcomePaymentEvent {
    bondDid: string;
    outcomePayment: Coin[];
    senderDid: string;
    senderAddress: string;
}
/**
 * BondMakeOutcomePaymentEvent is an event triggered on a Bond make outcome
 * payment
 */
export interface BondMakeOutcomePaymentEventSDKType {
    bond_did: string;
    outcome_payment: CoinSDKType[];
    sender_did: string;
    sender_address: string;
}
/** BondWithdrawShareEvent is an event triggered on a Bond share withdrawal */
export interface BondWithdrawShareEvent {
    bondDid: string;
    withdrawPayment: Coin[];
    recipientDid: string;
    recipientAddress: string;
}
/** BondWithdrawShareEvent is an event triggered on a Bond share withdrawal */
export interface BondWithdrawShareEventSDKType {
    bond_did: string;
    withdraw_payment: CoinSDKType[];
    recipient_did: string;
    recipient_address: string;
}
/** BondWithdrawReserveEvent is an event triggered on a Bond reserve withdrawal */
export interface BondWithdrawReserveEvent {
    bondDid: string;
    withdrawAmount: Coin[];
    withdrawerDid: string;
    withdrawerAddress: string;
    reserveWithdrawalAddress: string;
}
/** BondWithdrawReserveEvent is an event triggered on a Bond reserve withdrawal */
export interface BondWithdrawReserveEventSDKType {
    bond_did: string;
    withdraw_amount: CoinSDKType[];
    withdrawer_did: string;
    withdrawer_address: string;
    reserve_withdrawal_address: string;
}
/**
 * BondEditAlphaSuccessEvent is an event triggered on a successful edit of Bond
 * alpha value
 */
export interface BondEditAlphaSuccessEvent {
    bondDid: string;
    token: string;
    publicAlpha: string;
    systemAlpha: string;
}
/**
 * BondEditAlphaSuccessEvent is an event triggered on a successful edit of Bond
 * alpha value
 */
export interface BondEditAlphaSuccessEventSDKType {
    bond_did: string;
    token: string;
    public_alpha: string;
    system_alpha: string;
}
/**
 * BondEditAlphaFailedEvent is an event triggered on a failed attempt to edit of
 * Bond alpha value
 */
export interface BondEditAlphaFailedEvent {
    bondDid: string;
    token: string;
    cancelReason: string;
}
/**
 * BondEditAlphaFailedEvent is an event triggered on a failed attempt to edit of
 * Bond alpha value
 */
export interface BondEditAlphaFailedEventSDKType {
    bond_did: string;
    token: string;
    cancel_reason: string;
}
/**
 * BondBuyOrderFulfilledEvent is an event triggered on a Bond buy order
 * fullfillment
 */
export interface BondBuyOrderFulfilledEvent {
    bondDid: string;
    order?: BuyOrder;
    chargedPrices: Coin[];
    chargedFees: Coin[];
    returnedToAddress: Coin[];
    newBondTokenBalance: string;
    chargedPricesOfWhichReserve: string;
    chargedPricesOfWhichFunding: Coin[];
}
/**
 * BondBuyOrderFulfilledEvent is an event triggered on a Bond buy order
 * fullfillment
 */
export interface BondBuyOrderFulfilledEventSDKType {
    bond_did: string;
    order?: BuyOrderSDKType;
    charged_prices: CoinSDKType[];
    charged_fees: CoinSDKType[];
    returned_to_address: CoinSDKType[];
    new_bond_token_balance: string;
    charged_prices_of_which_reserve: string;
    charged_prices_of_which_funding: CoinSDKType[];
}
/**
 * BondSellOrderFulfilledEvent is an event triggered on a Bond sell order
 * fullfillment
 */
export interface BondSellOrderFulfilledEvent {
    bondDid: string;
    order?: SellOrder;
    chargedFees: Coin[];
    returnedToAddress: Coin[];
    newBondTokenBalance: string;
}
/**
 * BondSellOrderFulfilledEvent is an event triggered on a Bond sell order
 * fullfillment
 */
export interface BondSellOrderFulfilledEventSDKType {
    bond_did: string;
    order?: SellOrderSDKType;
    charged_fees: CoinSDKType[];
    returned_to_address: CoinSDKType[];
    new_bond_token_balance: string;
}
/**
 * BondSwapOrderFulfilledEvent is an event triggered on a Bond swap order
 * fullfillment
 */
export interface BondSwapOrderFulfilledEvent {
    bondDid: string;
    order?: SwapOrder;
    chargedFee?: Coin;
    returnedToAddress: Coin[];
    tokensSwapped?: Coin;
}
/**
 * BondSwapOrderFulfilledEvent is an event triggered on a Bond swap order
 * fullfillment
 */
export interface BondSwapOrderFulfilledEventSDKType {
    bond_did: string;
    order?: SwapOrderSDKType;
    charged_fee?: CoinSDKType;
    returned_to_address: CoinSDKType[];
    tokens_swapped?: CoinSDKType;
}
/**
 * BondBuyOrderCancelledEvent is an event triggered on a Bond buy order
 * cancellation
 */
export interface BondBuyOrderCancelledEvent {
    bondDid: string;
    order?: BuyOrder;
}
/**
 * BondBuyOrderCancelledEvent is an event triggered on a Bond buy order
 * cancellation
 */
export interface BondBuyOrderCancelledEventSDKType {
    bond_did: string;
    order?: BuyOrderSDKType;
}
export declare const BondCreatedEvent: {
    encode(message: BondCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondCreatedEvent;
    fromJSON(object: any): BondCreatedEvent;
    toJSON(message: BondCreatedEvent): unknown;
    fromPartial(object: Partial<BondCreatedEvent>): BondCreatedEvent;
};
export declare const BondUpdatedEvent: {
    encode(message: BondUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondUpdatedEvent;
    fromJSON(object: any): BondUpdatedEvent;
    toJSON(message: BondUpdatedEvent): unknown;
    fromPartial(object: Partial<BondUpdatedEvent>): BondUpdatedEvent;
};
export declare const BondSetNextAlphaEvent: {
    encode(message: BondSetNextAlphaEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondSetNextAlphaEvent;
    fromJSON(object: any): BondSetNextAlphaEvent;
    toJSON(message: BondSetNextAlphaEvent): unknown;
    fromPartial(object: Partial<BondSetNextAlphaEvent>): BondSetNextAlphaEvent;
};
export declare const BondBuyOrderEvent: {
    encode(message: BondBuyOrderEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondBuyOrderEvent;
    fromJSON(object: any): BondBuyOrderEvent;
    toJSON(message: BondBuyOrderEvent): unknown;
    fromPartial(object: Partial<BondBuyOrderEvent>): BondBuyOrderEvent;
};
export declare const BondSellOrderEvent: {
    encode(message: BondSellOrderEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondSellOrderEvent;
    fromJSON(object: any): BondSellOrderEvent;
    toJSON(message: BondSellOrderEvent): unknown;
    fromPartial(object: Partial<BondSellOrderEvent>): BondSellOrderEvent;
};
export declare const BondSwapOrderEvent: {
    encode(message: BondSwapOrderEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondSwapOrderEvent;
    fromJSON(object: any): BondSwapOrderEvent;
    toJSON(message: BondSwapOrderEvent): unknown;
    fromPartial(object: Partial<BondSwapOrderEvent>): BondSwapOrderEvent;
};
export declare const BondMakeOutcomePaymentEvent: {
    encode(message: BondMakeOutcomePaymentEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondMakeOutcomePaymentEvent;
    fromJSON(object: any): BondMakeOutcomePaymentEvent;
    toJSON(message: BondMakeOutcomePaymentEvent): unknown;
    fromPartial(object: Partial<BondMakeOutcomePaymentEvent>): BondMakeOutcomePaymentEvent;
};
export declare const BondWithdrawShareEvent: {
    encode(message: BondWithdrawShareEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondWithdrawShareEvent;
    fromJSON(object: any): BondWithdrawShareEvent;
    toJSON(message: BondWithdrawShareEvent): unknown;
    fromPartial(object: Partial<BondWithdrawShareEvent>): BondWithdrawShareEvent;
};
export declare const BondWithdrawReserveEvent: {
    encode(message: BondWithdrawReserveEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondWithdrawReserveEvent;
    fromJSON(object: any): BondWithdrawReserveEvent;
    toJSON(message: BondWithdrawReserveEvent): unknown;
    fromPartial(object: Partial<BondWithdrawReserveEvent>): BondWithdrawReserveEvent;
};
export declare const BondEditAlphaSuccessEvent: {
    encode(message: BondEditAlphaSuccessEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondEditAlphaSuccessEvent;
    fromJSON(object: any): BondEditAlphaSuccessEvent;
    toJSON(message: BondEditAlphaSuccessEvent): unknown;
    fromPartial(object: Partial<BondEditAlphaSuccessEvent>): BondEditAlphaSuccessEvent;
};
export declare const BondEditAlphaFailedEvent: {
    encode(message: BondEditAlphaFailedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondEditAlphaFailedEvent;
    fromJSON(object: any): BondEditAlphaFailedEvent;
    toJSON(message: BondEditAlphaFailedEvent): unknown;
    fromPartial(object: Partial<BondEditAlphaFailedEvent>): BondEditAlphaFailedEvent;
};
export declare const BondBuyOrderFulfilledEvent: {
    encode(message: BondBuyOrderFulfilledEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondBuyOrderFulfilledEvent;
    fromJSON(object: any): BondBuyOrderFulfilledEvent;
    toJSON(message: BondBuyOrderFulfilledEvent): unknown;
    fromPartial(object: Partial<BondBuyOrderFulfilledEvent>): BondBuyOrderFulfilledEvent;
};
export declare const BondSellOrderFulfilledEvent: {
    encode(message: BondSellOrderFulfilledEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondSellOrderFulfilledEvent;
    fromJSON(object: any): BondSellOrderFulfilledEvent;
    toJSON(message: BondSellOrderFulfilledEvent): unknown;
    fromPartial(object: Partial<BondSellOrderFulfilledEvent>): BondSellOrderFulfilledEvent;
};
export declare const BondSwapOrderFulfilledEvent: {
    encode(message: BondSwapOrderFulfilledEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondSwapOrderFulfilledEvent;
    fromJSON(object: any): BondSwapOrderFulfilledEvent;
    toJSON(message: BondSwapOrderFulfilledEvent): unknown;
    fromPartial(object: Partial<BondSwapOrderFulfilledEvent>): BondSwapOrderFulfilledEvent;
};
export declare const BondBuyOrderCancelledEvent: {
    encode(message: BondBuyOrderCancelledEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondBuyOrderCancelledEvent;
    fromJSON(object: any): BondBuyOrderCancelledEvent;
    toJSON(message: BondBuyOrderCancelledEvent): unknown;
    fromPartial(object: Partial<BondBuyOrderCancelledEvent>): BondBuyOrderCancelledEvent;
};
