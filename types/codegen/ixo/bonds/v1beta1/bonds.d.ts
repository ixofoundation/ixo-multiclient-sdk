import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * FunctionParam is a key-value pair used for specifying a specific bond
 * parameter.
 */
export interface FunctionParam {
    param: string;
    value: string;
}
/**
 * FunctionParam is a key-value pair used for specifying a specific bond
 * parameter.
 */
export interface FunctionParamSDKType {
    param: string;
    value: string;
}
/** BondDetails contains details about the current state of a given bond. */
export interface BondDetails {
    bondDid: string;
    spotPrice: DecCoin[];
    supply?: Coin;
    reserve: Coin[];
}
/** BondDetails contains details about the current state of a given bond. */
export interface BondDetailsSDKType {
    bond_did: string;
    spot_price: DecCoinSDKType[];
    supply?: CoinSDKType;
    reserve: CoinSDKType[];
}
/** Bond defines a token bonding curve type with all of its parameters. */
export interface Bond {
    token: string;
    name: string;
    description: string;
    creatorDid: string;
    controllerDid: string;
    functionType: string;
    functionParameters: FunctionParam[];
    reserveTokens: string[];
    txFeePercentage: string;
    exitFeePercentage: string;
    feeAddress: string;
    reserveWithdrawalAddress: string;
    maxSupply?: Coin;
    orderQuantityLimits: Coin[];
    sanityRate: string;
    sanityMarginPercentage: string;
    currentSupply?: Coin;
    currentReserve: Coin[];
    availableReserve: Coin[];
    currentOutcomePaymentReserve: Coin[];
    allowSells: boolean;
    allowReserveWithdrawals: boolean;
    alphaBond: boolean;
    batchBlocks: string;
    outcomePayment: string;
    state: string;
    bondDid: string;
    oracleDid: string;
}
/** Bond defines a token bonding curve type with all of its parameters. */
export interface BondSDKType {
    token: string;
    name: string;
    description: string;
    creator_did: string;
    controller_did: string;
    function_type: string;
    function_parameters: FunctionParamSDKType[];
    reserve_tokens: string[];
    tx_fee_percentage: string;
    exit_fee_percentage: string;
    fee_address: string;
    reserve_withdrawal_address: string;
    max_supply?: CoinSDKType;
    order_quantity_limits: CoinSDKType[];
    sanity_rate: string;
    sanity_margin_percentage: string;
    current_supply?: CoinSDKType;
    current_reserve: CoinSDKType[];
    available_reserve: CoinSDKType[];
    current_outcome_payment_reserve: CoinSDKType[];
    allow_sells: boolean;
    allow_reserve_withdrawals: boolean;
    alpha_bond: boolean;
    batch_blocks: string;
    outcome_payment: string;
    state: string;
    bond_did: string;
    oracle_did: string;
}
/**
 * BaseOrder defines a base order type. It contains all the necessary fields for
 * specifying the general details about a buy, sell, or swap order.
 */
export interface BaseOrder {
    accountDid: string;
    amount?: Coin;
    cancelled: boolean;
    cancelReason: string;
}
/**
 * BaseOrder defines a base order type. It contains all the necessary fields for
 * specifying the general details about a buy, sell, or swap order.
 */
export interface BaseOrderSDKType {
    account_did: string;
    amount?: CoinSDKType;
    cancelled: boolean;
    cancel_reason: string;
}
/**
 * BuyOrder defines a type for submitting a buy order on a bond, together with
 * the maximum amount of reserve tokens the buyer is willing to pay.
 */
export interface BuyOrder {
    baseOrder?: BaseOrder;
    maxPrices: Coin[];
}
/**
 * BuyOrder defines a type for submitting a buy order on a bond, together with
 * the maximum amount of reserve tokens the buyer is willing to pay.
 */
export interface BuyOrderSDKType {
    base_order?: BaseOrderSDKType;
    max_prices: CoinSDKType[];
}
/** SellOrder defines a type for submitting a sell order on a bond. */
export interface SellOrder {
    baseOrder?: BaseOrder;
}
/** SellOrder defines a type for submitting a sell order on a bond. */
export interface SellOrderSDKType {
    base_order?: BaseOrderSDKType;
}
/**
 * SwapOrder defines a type for submitting a swap order between two tokens on a
 * bond.
 */
export interface SwapOrder {
    baseOrder?: BaseOrder;
    toToken: string;
}
/**
 * SwapOrder defines a type for submitting a swap order between two tokens on a
 * bond.
 */
export interface SwapOrderSDKType {
    base_order?: BaseOrderSDKType;
    to_token: string;
}
/**
 * Batch holds a collection of outstanding buy, sell, and swap orders on a
 * particular bond.
 */
export interface Batch {
    bondDid: string;
    blocksRemaining: string;
    nextPublicAlpha: string;
    totalBuyAmount?: Coin;
    totalSellAmount?: Coin;
    buyPrices: DecCoin[];
    sellPrices: DecCoin[];
    buys: BuyOrder[];
    sells: SellOrder[];
    swaps: SwapOrder[];
}
/**
 * Batch holds a collection of outstanding buy, sell, and swap orders on a
 * particular bond.
 */
export interface BatchSDKType {
    bond_did: string;
    blocks_remaining: string;
    next_public_alpha: string;
    total_buy_amount?: CoinSDKType;
    total_sell_amount?: CoinSDKType;
    buy_prices: DecCoinSDKType[];
    sell_prices: DecCoinSDKType[];
    buys: BuyOrderSDKType[];
    sells: SellOrderSDKType[];
    swaps: SwapOrderSDKType[];
}
/** Params defines the parameters for the bonds module. */
export interface Params {
    reservedBondTokens: string[];
}
/** Params defines the parameters for the bonds module. */
export interface ParamsSDKType {
    reserved_bond_tokens: string[];
}
export declare const FunctionParam: {
    encode(message: FunctionParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionParam;
    fromJSON(object: any): FunctionParam;
    toJSON(message: FunctionParam): unknown;
    fromPartial(object: Partial<FunctionParam>): FunctionParam;
};
export declare const BondDetails: {
    encode(message: BondDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondDetails;
    fromJSON(object: any): BondDetails;
    toJSON(message: BondDetails): unknown;
    fromPartial(object: Partial<BondDetails>): BondDetails;
};
export declare const Bond: {
    encode(message: Bond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bond;
    fromJSON(object: any): Bond;
    toJSON(message: Bond): unknown;
    fromPartial(object: Partial<Bond>): Bond;
};
export declare const BaseOrder: {
    encode(message: BaseOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseOrder;
    fromJSON(object: any): BaseOrder;
    toJSON(message: BaseOrder): unknown;
    fromPartial(object: Partial<BaseOrder>): BaseOrder;
};
export declare const BuyOrder: {
    encode(message: BuyOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrder;
    fromJSON(object: any): BuyOrder;
    toJSON(message: BuyOrder): unknown;
    fromPartial(object: Partial<BuyOrder>): BuyOrder;
};
export declare const SellOrder: {
    encode(message: SellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrder;
    fromJSON(object: any): SellOrder;
    toJSON(message: SellOrder): unknown;
    fromPartial(object: Partial<SellOrder>): SellOrder;
};
export declare const SwapOrder: {
    encode(message: SwapOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapOrder;
    fromJSON(object: any): SwapOrder;
    toJSON(message: SwapOrder): unknown;
    fromPartial(object: Partial<SwapOrder>): SwapOrder;
};
export declare const Batch: {
    encode(message: Batch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Batch;
    fromJSON(object: any): Batch;
    toJSON(message: Batch): unknown;
    fromPartial(object: Partial<Batch>): Batch;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
