import { FunctionParam, FunctionParamSDKType } from "./bonds";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateBond defines a message for creating a new bond. */
export interface MsgCreateBond {
    bondDid: string;
    token: string;
    name: string;
    description: string;
    functionType: string;
    functionParameters: FunctionParam[];
    creatorDid: string;
    controllerDid: string;
    reserveTokens: string[];
    txFeePercentage: string;
    exitFeePercentage: string;
    feeAddress: string;
    reserveWithdrawalAddress: string;
    maxSupply?: Coin;
    orderQuantityLimits: Coin[];
    sanityRate: string;
    sanityMarginPercentage: string;
    allowSells: boolean;
    allowReserveWithdrawals: boolean;
    alphaBond: boolean;
    batchBlocks: string;
    outcomePayment: string;
    creatorAddress: string;
}
/** MsgCreateBond defines a message for creating a new bond. */
export interface MsgCreateBondSDKType {
    bond_did: string;
    token: string;
    name: string;
    description: string;
    function_type: string;
    function_parameters: FunctionParamSDKType[];
    creator_did: string;
    controller_did: string;
    reserve_tokens: string[];
    tx_fee_percentage: string;
    exit_fee_percentage: string;
    fee_address: string;
    reserve_withdrawal_address: string;
    max_supply?: CoinSDKType;
    order_quantity_limits: CoinSDKType[];
    sanity_rate: string;
    sanity_margin_percentage: string;
    allow_sells: boolean;
    allow_reserve_withdrawals: boolean;
    alpha_bond: boolean;
    batch_blocks: string;
    outcome_payment: string;
    creator_address: string;
}
/** MsgCreateBondResponse defines the Msg/CreateBond response type. */
export interface MsgCreateBondResponse {
}
/** MsgCreateBondResponse defines the Msg/CreateBond response type. */
export interface MsgCreateBondResponseSDKType {
}
/** MsgEditBond defines a message for editing an existing bond. */
export interface MsgEditBond {
    bondDid: string;
    name: string;
    description: string;
    orderQuantityLimits: string;
    sanityRate: string;
    sanityMarginPercentage: string;
    editorDid: string;
    editorAddress: string;
}
/** MsgEditBond defines a message for editing an existing bond. */
export interface MsgEditBondSDKType {
    bond_did: string;
    name: string;
    description: string;
    order_quantity_limits: string;
    sanity_rate: string;
    sanity_margin_percentage: string;
    editor_did: string;
    editor_address: string;
}
/** MsgEditBondResponse defines the Msg/EditBond response type. */
export interface MsgEditBondResponse {
}
/** MsgEditBondResponse defines the Msg/EditBond response type. */
export interface MsgEditBondResponseSDKType {
}
/** MsgSetNextAlpha defines a message for editing a bond's alpha parameter. */
export interface MsgSetNextAlpha {
    bondDid: string;
    alpha: string;
    editorDid: string;
    editorAddress: string;
}
/** MsgSetNextAlpha defines a message for editing a bond's alpha parameter. */
export interface MsgSetNextAlphaSDKType {
    bond_did: string;
    alpha: string;
    editor_did: string;
    editor_address: string;
}
export interface MsgSetNextAlphaResponse {
}
export interface MsgSetNextAlphaResponseSDKType {
}
/** MsgUpdateBondState defines a message for updating a bond's current state. */
export interface MsgUpdateBondState {
    bondDid: string;
    state: string;
    editorDid: string;
    editorAddress: string;
}
/** MsgUpdateBondState defines a message for updating a bond's current state. */
export interface MsgUpdateBondStateSDKType {
    bond_did: string;
    state: string;
    editor_did: string;
    editor_address: string;
}
/** MsgUpdateBondStateResponse defines the Msg/UpdateBondState response type. */
export interface MsgUpdateBondStateResponse {
}
/** MsgUpdateBondStateResponse defines the Msg/UpdateBondState response type. */
export interface MsgUpdateBondStateResponseSDKType {
}
/** MsgBuy defines a message for buying from a bond. */
export interface MsgBuy {
    buyerDid: string;
    amount?: Coin;
    maxPrices: Coin[];
    bondDid: string;
    buyerAddress: string;
}
/** MsgBuy defines a message for buying from a bond. */
export interface MsgBuySDKType {
    buyer_did: string;
    amount?: CoinSDKType;
    max_prices: CoinSDKType[];
    bond_did: string;
    buyer_address: string;
}
/** MsgBuyResponse defines the Msg/Buy response type. */
export interface MsgBuyResponse {
}
/** MsgBuyResponse defines the Msg/Buy response type. */
export interface MsgBuyResponseSDKType {
}
/** MsgSell defines a message for selling from a bond. */
export interface MsgSell {
    sellerDid: string;
    amount?: Coin;
    bondDid: string;
    sellerAddress: string;
}
/** MsgSell defines a message for selling from a bond. */
export interface MsgSellSDKType {
    seller_did: string;
    amount?: CoinSDKType;
    bond_did: string;
    seller_address: string;
}
/** MsgSellResponse defines the Msg/Sell response type. */
export interface MsgSellResponse {
}
/** MsgSellResponse defines the Msg/Sell response type. */
export interface MsgSellResponseSDKType {
}
/** MsgSwap defines a message for swapping from one reserve bond token to another. */
export interface MsgSwap {
    swapperDid: string;
    bondDid: string;
    from?: Coin;
    toToken: string;
    swapperAddress: string;
}
/** MsgSwap defines a message for swapping from one reserve bond token to another. */
export interface MsgSwapSDKType {
    swapper_did: string;
    bond_did: string;
    from?: CoinSDKType;
    to_token: string;
    swapper_address: string;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseSDKType {
}
/** MsgMakeOutcomePayment defines a message for making an outcome payment to a bond. */
export interface MsgMakeOutcomePayment {
    senderDid: string;
    amount: string;
    bondDid: string;
    senderAddress: string;
}
/** MsgMakeOutcomePayment defines a message for making an outcome payment to a bond. */
export interface MsgMakeOutcomePaymentSDKType {
    sender_did: string;
    amount: string;
    bond_did: string;
    sender_address: string;
}
/** MsgMakeOutcomePaymentResponse defines the Msg/MakeOutcomePayment response type. */
export interface MsgMakeOutcomePaymentResponse {
}
/** MsgMakeOutcomePaymentResponse defines the Msg/MakeOutcomePayment response type. */
export interface MsgMakeOutcomePaymentResponseSDKType {
}
/** MsgWithdrawShare defines a message for withdrawing a share from a bond that is in the SETTLE stage. */
export interface MsgWithdrawShare {
    recipientDid: string;
    bondDid: string;
    recipientAddress: string;
}
/** MsgWithdrawShare defines a message for withdrawing a share from a bond that is in the SETTLE stage. */
export interface MsgWithdrawShareSDKType {
    recipient_did: string;
    bond_did: string;
    recipient_address: string;
}
/** MsgWithdrawShareResponse defines the Msg/WithdrawShare response type. */
export interface MsgWithdrawShareResponse {
}
/** MsgWithdrawShareResponse defines the Msg/WithdrawShare response type. */
export interface MsgWithdrawShareResponseSDKType {
}
/** MsgWithdrawReserve defines a message for withdrawing reserve from a bond. */
export interface MsgWithdrawReserve {
    withdrawerDid: string;
    amount: Coin[];
    bondDid: string;
    withdrawerAddress: string;
}
/** MsgWithdrawReserve defines a message for withdrawing reserve from a bond. */
export interface MsgWithdrawReserveSDKType {
    withdrawer_did: string;
    amount: CoinSDKType[];
    bond_did: string;
    withdrawer_address: string;
}
/** MsgWithdrawReserveResponse defines the Msg/WithdrawReserve response type. */
export interface MsgWithdrawReserveResponse {
}
/** MsgWithdrawReserveResponse defines the Msg/WithdrawReserve response type. */
export interface MsgWithdrawReserveResponseSDKType {
}
export declare const MsgCreateBond: {
    encode(message: MsgCreateBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBond;
    fromJSON(object: any): MsgCreateBond;
    toJSON(message: MsgCreateBond): unknown;
    fromPartial(object: Partial<MsgCreateBond>): MsgCreateBond;
};
export declare const MsgCreateBondResponse: {
    encode(_: MsgCreateBondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBondResponse;
    fromJSON(_: any): MsgCreateBondResponse;
    toJSON(_: MsgCreateBondResponse): unknown;
    fromPartial(_: Partial<MsgCreateBondResponse>): MsgCreateBondResponse;
};
export declare const MsgEditBond: {
    encode(message: MsgEditBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBond;
    fromJSON(object: any): MsgEditBond;
    toJSON(message: MsgEditBond): unknown;
    fromPartial(object: Partial<MsgEditBond>): MsgEditBond;
};
export declare const MsgEditBondResponse: {
    encode(_: MsgEditBondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBondResponse;
    fromJSON(_: any): MsgEditBondResponse;
    toJSON(_: MsgEditBondResponse): unknown;
    fromPartial(_: Partial<MsgEditBondResponse>): MsgEditBondResponse;
};
export declare const MsgSetNextAlpha: {
    encode(message: MsgSetNextAlpha, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlpha;
    fromJSON(object: any): MsgSetNextAlpha;
    toJSON(message: MsgSetNextAlpha): unknown;
    fromPartial(object: Partial<MsgSetNextAlpha>): MsgSetNextAlpha;
};
export declare const MsgSetNextAlphaResponse: {
    encode(_: MsgSetNextAlphaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlphaResponse;
    fromJSON(_: any): MsgSetNextAlphaResponse;
    toJSON(_: MsgSetNextAlphaResponse): unknown;
    fromPartial(_: Partial<MsgSetNextAlphaResponse>): MsgSetNextAlphaResponse;
};
export declare const MsgUpdateBondState: {
    encode(message: MsgUpdateBondState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondState;
    fromJSON(object: any): MsgUpdateBondState;
    toJSON(message: MsgUpdateBondState): unknown;
    fromPartial(object: Partial<MsgUpdateBondState>): MsgUpdateBondState;
};
export declare const MsgUpdateBondStateResponse: {
    encode(_: MsgUpdateBondStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondStateResponse;
    fromJSON(_: any): MsgUpdateBondStateResponse;
    toJSON(_: MsgUpdateBondStateResponse): unknown;
    fromPartial(_: Partial<MsgUpdateBondStateResponse>): MsgUpdateBondStateResponse;
};
export declare const MsgBuy: {
    encode(message: MsgBuy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy;
    fromJSON(object: any): MsgBuy;
    toJSON(message: MsgBuy): unknown;
    fromPartial(object: Partial<MsgBuy>): MsgBuy;
};
export declare const MsgBuyResponse: {
    encode(_: MsgBuyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse;
    fromJSON(_: any): MsgBuyResponse;
    toJSON(_: MsgBuyResponse): unknown;
    fromPartial(_: Partial<MsgBuyResponse>): MsgBuyResponse;
};
export declare const MsgSell: {
    encode(message: MsgSell, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell;
    fromJSON(object: any): MsgSell;
    toJSON(message: MsgSell): unknown;
    fromPartial(object: Partial<MsgSell>): MsgSell;
};
export declare const MsgSellResponse: {
    encode(_: MsgSellResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse;
    fromJSON(_: any): MsgSellResponse;
    toJSON(_: MsgSellResponse): unknown;
    fromPartial(_: Partial<MsgSellResponse>): MsgSellResponse;
};
export declare const MsgSwap: {
    encode(message: MsgSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap;
    fromJSON(object: any): MsgSwap;
    toJSON(message: MsgSwap): unknown;
    fromPartial(object: Partial<MsgSwap>): MsgSwap;
};
export declare const MsgSwapResponse: {
    encode(_: MsgSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse;
    fromJSON(_: any): MsgSwapResponse;
    toJSON(_: MsgSwapResponse): unknown;
    fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse;
};
export declare const MsgMakeOutcomePayment: {
    encode(message: MsgMakeOutcomePayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePayment;
    fromJSON(object: any): MsgMakeOutcomePayment;
    toJSON(message: MsgMakeOutcomePayment): unknown;
    fromPartial(object: Partial<MsgMakeOutcomePayment>): MsgMakeOutcomePayment;
};
export declare const MsgMakeOutcomePaymentResponse: {
    encode(_: MsgMakeOutcomePaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePaymentResponse;
    fromJSON(_: any): MsgMakeOutcomePaymentResponse;
    toJSON(_: MsgMakeOutcomePaymentResponse): unknown;
    fromPartial(_: Partial<MsgMakeOutcomePaymentResponse>): MsgMakeOutcomePaymentResponse;
};
export declare const MsgWithdrawShare: {
    encode(message: MsgWithdrawShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShare;
    fromJSON(object: any): MsgWithdrawShare;
    toJSON(message: MsgWithdrawShare): unknown;
    fromPartial(object: Partial<MsgWithdrawShare>): MsgWithdrawShare;
};
export declare const MsgWithdrawShareResponse: {
    encode(_: MsgWithdrawShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShareResponse;
    fromJSON(_: any): MsgWithdrawShareResponse;
    toJSON(_: MsgWithdrawShareResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawShareResponse>): MsgWithdrawShareResponse;
};
export declare const MsgWithdrawReserve: {
    encode(message: MsgWithdrawReserve, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserve;
    fromJSON(object: any): MsgWithdrawReserve;
    toJSON(message: MsgWithdrawReserve): unknown;
    fromPartial(object: Partial<MsgWithdrawReserve>): MsgWithdrawReserve;
};
export declare const MsgWithdrawReserveResponse: {
    encode(_: MsgWithdrawReserveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserveResponse;
    fromJSON(_: any): MsgWithdrawReserveResponse;
    toJSON(_: MsgWithdrawReserveResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawReserveResponse>): MsgWithdrawReserveResponse;
};
