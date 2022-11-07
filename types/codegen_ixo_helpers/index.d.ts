import * as _0 from "../codegen_ixo/bonds/genesis";
import * as _1 from "../codegen_ixo/bonds/bonds";
import * as _2 from "../codegen_ixo/bonds/query";
import * as _3 from "../codegen_ixo/bonds/tx";
import * as _4 from "../codegen_ixo/cosmos/coin";
import * as _6 from "../codegen_ixo/cosmos/pagination";
import * as _7 from "../codegen_ixo/entity/entity";
import * as _8 from "../codegen_ixo/entity/genesis";
import * as _9 from "../codegen_ixo/entity/query";
import * as _10 from "../codegen_ixo/entity/tx";
import * as _11 from "../codegen_ixo/iid/event";
import * as _12 from "../codegen_ixo/iid/genesis";
import * as _13 from "../codegen_ixo/iid/iid";
import * as _14 from "../codegen_ixo/iid/query";
import * as _15 from "../codegen_ixo/iid/tx";
import * as _16 from "../codegen_ixo/legacy/did/did";
import * as _17 from "../codegen_ixo/legacy/did/diddoc";
import * as _18 from "../codegen_ixo/payments/genesis";
import * as _19 from "../codegen_ixo/payments/payments";
import * as _20 from "../codegen_ixo/payments/query";
import * as _21 from "../codegen_ixo/payments/tx";
import * as _22 from "../codegen_ixo/project/genesis";
import * as _23 from "../codegen_ixo/project/project";
import * as _24 from "../codegen_ixo/project/query";
import * as _25 from "../codegen_ixo/project/tx";
export * as helpers from "./helpers";
export declare namespace ixo {
    const bonds: {
        MsgCreateBond: {
            encode(message: _3.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgCreateBond;
            fromJSON(object: any): _3.MsgCreateBond;
            toJSON(message: _3.MsgCreateBond): unknown;
            fromPartial(object: Partial<_3.MsgCreateBond>): _3.MsgCreateBond;
        };
        MsgCreateBondResponse: {
            encode(_: _3.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgCreateBondResponse;
            fromJSON(_: any): _3.MsgCreateBondResponse;
            toJSON(_: _3.MsgCreateBondResponse): unknown;
            fromPartial(_: Partial<_3.MsgCreateBondResponse>): _3.MsgCreateBondResponse;
        };
        MsgEditBond: {
            encode(message: _3.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgEditBond;
            fromJSON(object: any): _3.MsgEditBond;
            toJSON(message: _3.MsgEditBond): unknown;
            fromPartial(object: Partial<_3.MsgEditBond>): _3.MsgEditBond;
        };
        MsgEditBondResponse: {
            encode(_: _3.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgEditBondResponse;
            fromJSON(_: any): _3.MsgEditBondResponse;
            toJSON(_: _3.MsgEditBondResponse): unknown;
            fromPartial(_: Partial<_3.MsgEditBondResponse>): _3.MsgEditBondResponse;
        };
        MsgSetNextAlpha: {
            encode(message: _3.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgSetNextAlpha;
            fromJSON(object: any): _3.MsgSetNextAlpha;
            toJSON(message: _3.MsgSetNextAlpha): unknown;
            fromPartial(object: Partial<_3.MsgSetNextAlpha>): _3.MsgSetNextAlpha;
        };
        MsgSetNextAlphaResponse: {
            encode(_: _3.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgSetNextAlphaResponse;
            fromJSON(_: any): _3.MsgSetNextAlphaResponse;
            toJSON(_: _3.MsgSetNextAlphaResponse): unknown;
            fromPartial(_: Partial<_3.MsgSetNextAlphaResponse>): _3.MsgSetNextAlphaResponse;
        };
        MsgUpdateBondState: {
            encode(message: _3.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgUpdateBondState;
            fromJSON(object: any): _3.MsgUpdateBondState;
            toJSON(message: _3.MsgUpdateBondState): unknown;
            fromPartial(object: Partial<_3.MsgUpdateBondState>): _3.MsgUpdateBondState;
        };
        MsgUpdateBondStateResponse: {
            encode(_: _3.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgUpdateBondStateResponse;
            fromJSON(_: any): _3.MsgUpdateBondStateResponse;
            toJSON(_: _3.MsgUpdateBondStateResponse): unknown;
            fromPartial(_: Partial<_3.MsgUpdateBondStateResponse>): _3.MsgUpdateBondStateResponse;
        };
        MsgBuy: {
            encode(message: _3.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgBuy;
            fromJSON(object: any): _3.MsgBuy;
            toJSON(message: _3.MsgBuy): unknown;
            fromPartial(object: Partial<_3.MsgBuy>): _3.MsgBuy;
        };
        MsgBuyResponse: {
            encode(_: _3.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgBuyResponse;
            fromJSON(_: any): _3.MsgBuyResponse;
            toJSON(_: _3.MsgBuyResponse): unknown;
            fromPartial(_: Partial<_3.MsgBuyResponse>): _3.MsgBuyResponse;
        };
        MsgSell: {
            encode(message: _3.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgSell;
            fromJSON(object: any): _3.MsgSell;
            toJSON(message: _3.MsgSell): unknown;
            fromPartial(object: Partial<_3.MsgSell>): _3.MsgSell;
        };
        MsgSellResponse: {
            encode(_: _3.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgSellResponse;
            fromJSON(_: any): _3.MsgSellResponse;
            toJSON(_: _3.MsgSellResponse): unknown;
            fromPartial(_: Partial<_3.MsgSellResponse>): _3.MsgSellResponse;
        };
        MsgSwap: {
            encode(message: _3.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgSwap;
            fromJSON(object: any): _3.MsgSwap;
            toJSON(message: _3.MsgSwap): unknown;
            fromPartial(object: Partial<_3.MsgSwap>): _3.MsgSwap;
        };
        MsgSwapResponse: {
            encode(_: _3.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgSwapResponse;
            fromJSON(_: any): _3.MsgSwapResponse;
            toJSON(_: _3.MsgSwapResponse): unknown;
            fromPartial(_: Partial<_3.MsgSwapResponse>): _3.MsgSwapResponse;
        };
        MsgMakeOutcomePayment: {
            encode(message: _3.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgMakeOutcomePayment;
            fromJSON(object: any): _3.MsgMakeOutcomePayment;
            toJSON(message: _3.MsgMakeOutcomePayment): unknown;
            fromPartial(object: Partial<_3.MsgMakeOutcomePayment>): _3.MsgMakeOutcomePayment;
        };
        MsgMakeOutcomePaymentResponse: {
            encode(_: _3.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgMakeOutcomePaymentResponse;
            fromJSON(_: any): _3.MsgMakeOutcomePaymentResponse;
            toJSON(_: _3.MsgMakeOutcomePaymentResponse): unknown;
            fromPartial(_: Partial<_3.MsgMakeOutcomePaymentResponse>): _3.MsgMakeOutcomePaymentResponse;
        };
        MsgWithdrawShare: {
            encode(message: _3.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgWithdrawShare;
            fromJSON(object: any): _3.MsgWithdrawShare;
            toJSON(message: _3.MsgWithdrawShare): unknown;
            fromPartial(object: Partial<_3.MsgWithdrawShare>): _3.MsgWithdrawShare;
        };
        MsgWithdrawShareResponse: {
            encode(_: _3.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgWithdrawShareResponse;
            fromJSON(_: any): _3.MsgWithdrawShareResponse;
            toJSON(_: _3.MsgWithdrawShareResponse): unknown;
            fromPartial(_: Partial<_3.MsgWithdrawShareResponse>): _3.MsgWithdrawShareResponse;
        };
        MsgWithdrawReserve: {
            encode(message: _3.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgWithdrawReserve;
            fromJSON(object: any): _3.MsgWithdrawReserve;
            toJSON(message: _3.MsgWithdrawReserve): unknown;
            fromPartial(object: Partial<_3.MsgWithdrawReserve>): _3.MsgWithdrawReserve;
        };
        MsgWithdrawReserveResponse: {
            encode(_: _3.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgWithdrawReserveResponse;
            fromJSON(_: any): _3.MsgWithdrawReserveResponse;
            toJSON(_: _3.MsgWithdrawReserveResponse): unknown;
            fromPartial(_: Partial<_3.MsgWithdrawReserveResponse>): _3.MsgWithdrawReserveResponse;
        };
        QueryBondsRequest: {
            encode(_: _2.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBondsRequest;
            fromJSON(_: any): _2.QueryBondsRequest;
            toJSON(_: _2.QueryBondsRequest): unknown;
            fromPartial(_: Partial<_2.QueryBondsRequest>): _2.QueryBondsRequest;
        };
        QueryBondsResponse: {
            encode(message: _2.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBondsResponse;
            fromJSON(object: any): _2.QueryBondsResponse;
            toJSON(message: _2.QueryBondsResponse): unknown;
            fromPartial(object: Partial<_2.QueryBondsResponse>): _2.QueryBondsResponse;
        };
        QueryBondsDetailedRequest: {
            encode(_: _2.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBondsDetailedRequest;
            fromJSON(_: any): _2.QueryBondsDetailedRequest;
            toJSON(_: _2.QueryBondsDetailedRequest): unknown;
            fromPartial(_: Partial<_2.QueryBondsDetailedRequest>): _2.QueryBondsDetailedRequest;
        };
        QueryBondsDetailedResponse: {
            encode(message: _2.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBondsDetailedResponse;
            fromJSON(object: any): _2.QueryBondsDetailedResponse;
            toJSON(message: _2.QueryBondsDetailedResponse): unknown;
            fromPartial(object: Partial<_2.QueryBondsDetailedResponse>): _2.QueryBondsDetailedResponse;
        };
        QueryBondRequest: {
            encode(message: _2.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBondRequest;
            fromJSON(object: any): _2.QueryBondRequest;
            toJSON(message: _2.QueryBondRequest): unknown;
            fromPartial(object: Partial<_2.QueryBondRequest>): _2.QueryBondRequest;
        };
        QueryBondResponse: {
            encode(message: _2.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBondResponse;
            fromJSON(object: any): _2.QueryBondResponse;
            toJSON(message: _2.QueryBondResponse): unknown;
            fromPartial(object: Partial<_2.QueryBondResponse>): _2.QueryBondResponse;
        };
        QueryBatchRequest: {
            encode(message: _2.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBatchRequest;
            fromJSON(object: any): _2.QueryBatchRequest;
            toJSON(message: _2.QueryBatchRequest): unknown;
            fromPartial(object: Partial<_2.QueryBatchRequest>): _2.QueryBatchRequest;
        };
        QueryBatchResponse: {
            encode(message: _2.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBatchResponse;
            fromJSON(object: any): _2.QueryBatchResponse;
            toJSON(message: _2.QueryBatchResponse): unknown;
            fromPartial(object: Partial<_2.QueryBatchResponse>): _2.QueryBatchResponse;
        };
        QueryLastBatchRequest: {
            encode(message: _2.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryLastBatchRequest;
            fromJSON(object: any): _2.QueryLastBatchRequest;
            toJSON(message: _2.QueryLastBatchRequest): unknown;
            fromPartial(object: Partial<_2.QueryLastBatchRequest>): _2.QueryLastBatchRequest;
        };
        QueryLastBatchResponse: {
            encode(message: _2.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryLastBatchResponse;
            fromJSON(object: any): _2.QueryLastBatchResponse;
            toJSON(message: _2.QueryLastBatchResponse): unknown;
            fromPartial(object: Partial<_2.QueryLastBatchResponse>): _2.QueryLastBatchResponse;
        };
        QueryCurrentPriceRequest: {
            encode(message: _2.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryCurrentPriceRequest;
            fromJSON(object: any): _2.QueryCurrentPriceRequest;
            toJSON(message: _2.QueryCurrentPriceRequest): unknown;
            fromPartial(object: Partial<_2.QueryCurrentPriceRequest>): _2.QueryCurrentPriceRequest;
        };
        QueryCurrentPriceResponse: {
            encode(message: _2.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryCurrentPriceResponse;
            fromJSON(object: any): _2.QueryCurrentPriceResponse;
            toJSON(message: _2.QueryCurrentPriceResponse): unknown;
            fromPartial(object: Partial<_2.QueryCurrentPriceResponse>): _2.QueryCurrentPriceResponse;
        };
        QueryCurrentReserveRequest: {
            encode(message: _2.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryCurrentReserveRequest;
            fromJSON(object: any): _2.QueryCurrentReserveRequest;
            toJSON(message: _2.QueryCurrentReserveRequest): unknown;
            fromPartial(object: Partial<_2.QueryCurrentReserveRequest>): _2.QueryCurrentReserveRequest;
        };
        QueryCurrentReserveResponse: {
            encode(message: _2.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryCurrentReserveResponse;
            fromJSON(object: any): _2.QueryCurrentReserveResponse;
            toJSON(message: _2.QueryCurrentReserveResponse): unknown;
            fromPartial(object: Partial<_2.QueryCurrentReserveResponse>): _2.QueryCurrentReserveResponse;
        };
        QueryAvailableReserveRequest: {
            encode(message: _2.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAvailableReserveRequest;
            fromJSON(object: any): _2.QueryAvailableReserveRequest;
            toJSON(message: _2.QueryAvailableReserveRequest): unknown;
            fromPartial(object: Partial<_2.QueryAvailableReserveRequest>): _2.QueryAvailableReserveRequest;
        };
        QueryAvailableReserveResponse: {
            encode(message: _2.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAvailableReserveResponse;
            fromJSON(object: any): _2.QueryAvailableReserveResponse;
            toJSON(message: _2.QueryAvailableReserveResponse): unknown;
            fromPartial(object: Partial<_2.QueryAvailableReserveResponse>): _2.QueryAvailableReserveResponse;
        };
        QueryCustomPriceRequest: {
            encode(message: _2.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryCustomPriceRequest;
            fromJSON(object: any): _2.QueryCustomPriceRequest;
            toJSON(message: _2.QueryCustomPriceRequest): unknown;
            fromPartial(object: Partial<_2.QueryCustomPriceRequest>): _2.QueryCustomPriceRequest;
        };
        QueryCustomPriceResponse: {
            encode(message: _2.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryCustomPriceResponse;
            fromJSON(object: any): _2.QueryCustomPriceResponse;
            toJSON(message: _2.QueryCustomPriceResponse): unknown;
            fromPartial(object: Partial<_2.QueryCustomPriceResponse>): _2.QueryCustomPriceResponse;
        };
        QueryBuyPriceRequest: {
            encode(message: _2.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBuyPriceRequest;
            fromJSON(object: any): _2.QueryBuyPriceRequest;
            toJSON(message: _2.QueryBuyPriceRequest): unknown;
            fromPartial(object: Partial<_2.QueryBuyPriceRequest>): _2.QueryBuyPriceRequest;
        };
        QueryBuyPriceResponse: {
            encode(message: _2.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBuyPriceResponse;
            fromJSON(object: any): _2.QueryBuyPriceResponse;
            toJSON(message: _2.QueryBuyPriceResponse): unknown;
            fromPartial(object: Partial<_2.QueryBuyPriceResponse>): _2.QueryBuyPriceResponse;
        };
        QuerySellReturnRequest: {
            encode(message: _2.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QuerySellReturnRequest;
            fromJSON(object: any): _2.QuerySellReturnRequest;
            toJSON(message: _2.QuerySellReturnRequest): unknown;
            fromPartial(object: Partial<_2.QuerySellReturnRequest>): _2.QuerySellReturnRequest;
        };
        QuerySellReturnResponse: {
            encode(message: _2.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QuerySellReturnResponse;
            fromJSON(object: any): _2.QuerySellReturnResponse;
            toJSON(message: _2.QuerySellReturnResponse): unknown;
            fromPartial(object: Partial<_2.QuerySellReturnResponse>): _2.QuerySellReturnResponse;
        };
        QuerySwapReturnRequest: {
            encode(message: _2.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QuerySwapReturnRequest;
            fromJSON(object: any): _2.QuerySwapReturnRequest;
            toJSON(message: _2.QuerySwapReturnRequest): unknown;
            fromPartial(object: Partial<_2.QuerySwapReturnRequest>): _2.QuerySwapReturnRequest;
        };
        QuerySwapReturnResponse: {
            encode(message: _2.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QuerySwapReturnResponse;
            fromJSON(object: any): _2.QuerySwapReturnResponse;
            toJSON(message: _2.QuerySwapReturnResponse): unknown;
            fromPartial(object: Partial<_2.QuerySwapReturnResponse>): _2.QuerySwapReturnResponse;
        };
        QueryAlphaMaximumsRequest: {
            encode(message: _2.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAlphaMaximumsRequest;
            fromJSON(object: any): _2.QueryAlphaMaximumsRequest;
            toJSON(message: _2.QueryAlphaMaximumsRequest): unknown;
            fromPartial(object: Partial<_2.QueryAlphaMaximumsRequest>): _2.QueryAlphaMaximumsRequest;
        };
        QueryAlphaMaximumsResponse: {
            encode(message: _2.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAlphaMaximumsResponse;
            fromJSON(object: any): _2.QueryAlphaMaximumsResponse;
            toJSON(message: _2.QueryAlphaMaximumsResponse): unknown;
            fromPartial(object: Partial<_2.QueryAlphaMaximumsResponse>): _2.QueryAlphaMaximumsResponse;
        };
        QueryParamsRequest: {
            encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsRequest;
            fromJSON(_: any): _2.QueryParamsRequest;
            toJSON(_: _2.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsResponse;
            fromJSON(object: any): _2.QueryParamsResponse;
            toJSON(message: _2.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
        };
        FunctionParam: {
            encode(message: _1.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.FunctionParam;
            fromJSON(object: any): _1.FunctionParam;
            toJSON(message: _1.FunctionParam): unknown;
            fromPartial(object: Partial<_1.FunctionParam>): _1.FunctionParam;
        };
        BondDetails: {
            encode(message: _1.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BondDetails;
            fromJSON(object: any): _1.BondDetails;
            toJSON(message: _1.BondDetails): unknown;
            fromPartial(object: Partial<_1.BondDetails>): _1.BondDetails;
        };
        Bond: {
            encode(message: _1.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Bond;
            fromJSON(object: any): _1.Bond;
            toJSON(message: _1.Bond): unknown;
            fromPartial(object: Partial<_1.Bond>): _1.Bond;
        };
        BaseOrder: {
            encode(message: _1.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BaseOrder;
            fromJSON(object: any): _1.BaseOrder;
            toJSON(message: _1.BaseOrder): unknown;
            fromPartial(object: Partial<_1.BaseOrder>): _1.BaseOrder;
        };
        BuyOrder: {
            encode(message: _1.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BuyOrder;
            fromJSON(object: any): _1.BuyOrder;
            toJSON(message: _1.BuyOrder): unknown;
            fromPartial(object: Partial<_1.BuyOrder>): _1.BuyOrder;
        };
        SellOrder: {
            encode(message: _1.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.SellOrder;
            fromJSON(object: any): _1.SellOrder;
            toJSON(message: _1.SellOrder): unknown;
            fromPartial(object: Partial<_1.SellOrder>): _1.SellOrder;
        };
        SwapOrder: {
            encode(message: _1.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.SwapOrder;
            fromJSON(object: any): _1.SwapOrder;
            toJSON(message: _1.SwapOrder): unknown;
            fromPartial(object: Partial<_1.SwapOrder>): _1.SwapOrder;
        };
        Batch: {
            encode(message: _1.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Batch;
            fromJSON(object: any): _1.Batch;
            toJSON(message: _1.Batch): unknown;
            fromPartial(object: Partial<_1.Batch>): _1.Batch;
        };
        Params: {
            encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Params;
            fromJSON(object: any): _1.Params;
            toJSON(message: _1.Params): unknown;
            fromPartial(object: Partial<_1.Params>): _1.Params;
        };
        GenesisState: {
            encode(message: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.GenesisState;
            fromJSON(object: any): _0.GenesisState;
            toJSON(message: _0.GenesisState): unknown;
            fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
        };
    };
    const cosmos: {
        PageRequest: {
            encode(message: _6.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.PageRequest;
            fromJSON(object: any): _6.PageRequest;
            toJSON(message: _6.PageRequest): unknown;
            fromPartial(object: Partial<_6.PageRequest>): _6.PageRequest;
        };
        PageResponse: {
            encode(message: _6.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.PageResponse;
            fromJSON(object: any): _6.PageResponse;
            toJSON(message: _6.PageResponse): unknown;
            fromPartial(object: Partial<_6.PageResponse>): _6.PageResponse;
        };
        Coin: {
            encode(message: _4.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Coin;
            fromJSON(object: any): _4.Coin;
            toJSON(message: _4.Coin): unknown;
            fromPartial(object: Partial<_4.Coin>): _4.Coin;
        };
        DecCoin: {
            encode(message: _4.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.DecCoin;
            fromJSON(object: any): _4.DecCoin;
            toJSON(message: _4.DecCoin): unknown;
            fromPartial(object: Partial<_4.DecCoin>): _4.DecCoin;
        };
        IntProto: {
            encode(message: _4.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.IntProto;
            fromJSON(object: any): _4.IntProto;
            toJSON(message: _4.IntProto): unknown;
            fromPartial(object: Partial<_4.IntProto>): _4.IntProto;
        };
        DecProto: {
            encode(message: _4.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.DecProto;
            fromJSON(object: any): _4.DecProto;
            toJSON(message: _4.DecProto): unknown;
            fromPartial(object: Partial<_4.DecProto>): _4.DecProto;
        };
    };
    const entity: {
        MsgCreateEntity: {
            encode(message: _10.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgCreateEntity;
            fromJSON(object: any): _10.MsgCreateEntity;
            toJSON(message: _10.MsgCreateEntity): unknown;
            fromPartial(object: Partial<_10.MsgCreateEntity>): _10.MsgCreateEntity;
        };
        MsgCreateEntityResponse: {
            encode(message: _10.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgCreateEntityResponse;
            fromJSON(object: any): _10.MsgCreateEntityResponse;
            toJSON(message: _10.MsgCreateEntityResponse): unknown;
            fromPartial(object: Partial<_10.MsgCreateEntityResponse>): _10.MsgCreateEntityResponse;
        };
        MsgUpdateEntity: {
            encode(message: _10.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateEntity;
            fromJSON(object: any): _10.MsgUpdateEntity;
            toJSON(message: _10.MsgUpdateEntity): unknown;
            fromPartial(object: Partial<_10.MsgUpdateEntity>): _10.MsgUpdateEntity;
        };
        MsgUpdateEntityResponse: {
            encode(_: _10.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateEntityResponse;
            fromJSON(_: any): _10.MsgUpdateEntityResponse;
            toJSON(_: _10.MsgUpdateEntityResponse): unknown;
            fromPartial(_: Partial<_10.MsgUpdateEntityResponse>): _10.MsgUpdateEntityResponse;
        };
        MsgUpdateEntityConfig: {
            encode(message: _10.MsgUpdateEntityConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateEntityConfig;
            fromJSON(object: any): _10.MsgUpdateEntityConfig;
            toJSON(message: _10.MsgUpdateEntityConfig): unknown;
            fromPartial(object: Partial<_10.MsgUpdateEntityConfig>): _10.MsgUpdateEntityConfig;
        };
        MsgUpdateEntityConfigResponse: {
            encode(_: _10.MsgUpdateEntityConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateEntityConfigResponse;
            fromJSON(_: any): _10.MsgUpdateEntityConfigResponse;
            toJSON(_: _10.MsgUpdateEntityConfigResponse): unknown;
            fromPartial(_: Partial<_10.MsgUpdateEntityConfigResponse>): _10.MsgUpdateEntityConfigResponse;
        };
        MsgTransferEntity: {
            encode(message: _10.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgTransferEntity;
            fromJSON(object: any): _10.MsgTransferEntity;
            toJSON(message: _10.MsgTransferEntity): unknown;
            fromPartial(object: Partial<_10.MsgTransferEntity>): _10.MsgTransferEntity;
        };
        MsgTransferEntityResponse: {
            encode(_: _10.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgTransferEntityResponse;
            fromJSON(_: any): _10.MsgTransferEntityResponse;
            toJSON(_: _10.MsgTransferEntityResponse): unknown;
            fromPartial(_: Partial<_10.MsgTransferEntityResponse>): _10.MsgTransferEntityResponse;
        };
        QueryEntityListRequest: {
            encode(message: _9.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryEntityListRequest;
            fromJSON(object: any): _9.QueryEntityListRequest;
            toJSON(message: _9.QueryEntityListRequest): unknown;
            fromPartial(object: Partial<_9.QueryEntityListRequest>): _9.QueryEntityListRequest;
        };
        QueryEntityListResponse: {
            encode(_: _9.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryEntityListResponse;
            fromJSON(_: any): _9.QueryEntityListResponse;
            toJSON(_: _9.QueryEntityListResponse): unknown;
            fromPartial(_: Partial<_9.QueryEntityListResponse>): _9.QueryEntityListResponse;
        };
        QueryEntityDocRequest: {
            encode(message: _9.QueryEntityDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryEntityDocRequest;
            fromJSON(object: any): _9.QueryEntityDocRequest;
            toJSON(message: _9.QueryEntityDocRequest): unknown;
            fromPartial(object: Partial<_9.QueryEntityDocRequest>): _9.QueryEntityDocRequest;
        };
        QueryEntityDocResponse: {
            encode(_: _9.QueryEntityDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryEntityDocResponse;
            fromJSON(_: any): _9.QueryEntityDocResponse;
            toJSON(_: _9.QueryEntityDocResponse): unknown;
            fromPartial(_: Partial<_9.QueryEntityDocResponse>): _9.QueryEntityDocResponse;
        };
        QueryEntityConfigRequest: {
            encode(_: _9.QueryEntityConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryEntityConfigRequest;
            fromJSON(_: any): _9.QueryEntityConfigRequest;
            toJSON(_: _9.QueryEntityConfigRequest): unknown;
            fromPartial(_: Partial<_9.QueryEntityConfigRequest>): _9.QueryEntityConfigRequest;
        };
        QueryEntityConfigResponse_MapEntry: {
            encode(message: _9.QueryEntityConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryEntityConfigResponse_MapEntry;
            fromJSON(object: any): _9.QueryEntityConfigResponse_MapEntry;
            toJSON(message: _9.QueryEntityConfigResponse_MapEntry): unknown;
            fromPartial(object: Partial<_9.QueryEntityConfigResponse_MapEntry>): _9.QueryEntityConfigResponse_MapEntry;
        };
        QueryEntityConfigResponse: {
            encode(message: _9.QueryEntityConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryEntityConfigResponse;
            fromJSON(object: any): _9.QueryEntityConfigResponse;
            toJSON(message: _9.QueryEntityConfigResponse): unknown;
            fromPartial(object: Partial<_9.QueryEntityConfigResponse>): _9.QueryEntityConfigResponse;
        };
        GenesisState: {
            encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
            fromJSON(object: any): _8.GenesisState;
            toJSON(message: _8.GenesisState): unknown;
            fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
        };
        Params: {
            encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
            fromJSON(object: any): _7.Params;
            toJSON(message: _7.Params): unknown;
            fromPartial(object: Partial<_7.Params>): _7.Params;
        };
        EntityDoc: {
            encode(_: _7.EntityDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.EntityDoc;
            fromJSON(_: any): _7.EntityDoc;
            toJSON(_: _7.EntityDoc): unknown;
            fromPartial(_: Partial<_7.EntityDoc>): _7.EntityDoc;
        };
    };
    const iid: {
        Verification: {
            encode(message: _15.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Verification;
            fromJSON(object: any): _15.Verification;
            toJSON(message: _15.Verification): unknown;
            fromPartial(object: Partial<_15.Verification>): _15.Verification;
        };
        MsgCreateIidDocument: {
            encode(message: _15.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgCreateIidDocument;
            fromJSON(object: any): _15.MsgCreateIidDocument;
            toJSON(message: _15.MsgCreateIidDocument): unknown;
            fromPartial(object: Partial<_15.MsgCreateIidDocument>): _15.MsgCreateIidDocument;
        };
        MsgCreateIidDocumentResponse: {
            encode(_: _15.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgCreateIidDocumentResponse;
            fromJSON(_: any): _15.MsgCreateIidDocumentResponse;
            toJSON(_: _15.MsgCreateIidDocumentResponse): unknown;
            fromPartial(_: Partial<_15.MsgCreateIidDocumentResponse>): _15.MsgCreateIidDocumentResponse;
        };
        MsgUpdateIidDocument: {
            encode(message: _15.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgUpdateIidDocument;
            fromJSON(object: any): _15.MsgUpdateIidDocument;
            toJSON(message: _15.MsgUpdateIidDocument): unknown;
            fromPartial(object: Partial<_15.MsgUpdateIidDocument>): _15.MsgUpdateIidDocument;
        };
        MsgUpdateIidDocumentResponse: {
            encode(_: _15.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgUpdateIidDocumentResponse;
            fromJSON(_: any): _15.MsgUpdateIidDocumentResponse;
            toJSON(_: _15.MsgUpdateIidDocumentResponse): unknown;
            fromPartial(_: Partial<_15.MsgUpdateIidDocumentResponse>): _15.MsgUpdateIidDocumentResponse;
        };
        MsgAddVerification: {
            encode(message: _15.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddVerification;
            fromJSON(object: any): _15.MsgAddVerification;
            toJSON(message: _15.MsgAddVerification): unknown;
            fromPartial(object: Partial<_15.MsgAddVerification>): _15.MsgAddVerification;
        };
        MsgAddVerificationResponse: {
            encode(_: _15.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddVerificationResponse;
            fromJSON(_: any): _15.MsgAddVerificationResponse;
            toJSON(_: _15.MsgAddVerificationResponse): unknown;
            fromPartial(_: Partial<_15.MsgAddVerificationResponse>): _15.MsgAddVerificationResponse;
        };
        MsgSetVerificationRelationships: {
            encode(message: _15.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgSetVerificationRelationships;
            fromJSON(object: any): _15.MsgSetVerificationRelationships;
            toJSON(message: _15.MsgSetVerificationRelationships): unknown;
            fromPartial(object: Partial<_15.MsgSetVerificationRelationships>): _15.MsgSetVerificationRelationships;
        };
        MsgSetVerificationRelationshipsResponse: {
            encode(_: _15.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgSetVerificationRelationshipsResponse;
            fromJSON(_: any): _15.MsgSetVerificationRelationshipsResponse;
            toJSON(_: _15.MsgSetVerificationRelationshipsResponse): unknown;
            fromPartial(_: Partial<_15.MsgSetVerificationRelationshipsResponse>): _15.MsgSetVerificationRelationshipsResponse;
        };
        MsgRevokeVerification: {
            encode(message: _15.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgRevokeVerification;
            fromJSON(object: any): _15.MsgRevokeVerification;
            toJSON(message: _15.MsgRevokeVerification): unknown;
            fromPartial(object: Partial<_15.MsgRevokeVerification>): _15.MsgRevokeVerification;
        };
        MsgRevokeVerificationResponse: {
            encode(_: _15.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgRevokeVerificationResponse;
            fromJSON(_: any): _15.MsgRevokeVerificationResponse;
            toJSON(_: _15.MsgRevokeVerificationResponse): unknown;
            fromPartial(_: Partial<_15.MsgRevokeVerificationResponse>): _15.MsgRevokeVerificationResponse;
        };
        MsgAddService: {
            encode(message: _15.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddService;
            fromJSON(object: any): _15.MsgAddService;
            toJSON(message: _15.MsgAddService): unknown;
            fromPartial(object: Partial<_15.MsgAddService>): _15.MsgAddService;
        };
        MsgAddServiceResponse: {
            encode(_: _15.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddServiceResponse;
            fromJSON(_: any): _15.MsgAddServiceResponse;
            toJSON(_: _15.MsgAddServiceResponse): unknown;
            fromPartial(_: Partial<_15.MsgAddServiceResponse>): _15.MsgAddServiceResponse;
        };
        MsgDeleteService: {
            encode(message: _15.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteService;
            fromJSON(object: any): _15.MsgDeleteService;
            toJSON(message: _15.MsgDeleteService): unknown;
            fromPartial(object: Partial<_15.MsgDeleteService>): _15.MsgDeleteService;
        };
        MsgDeleteServiceResponse: {
            encode(_: _15.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteServiceResponse;
            fromJSON(_: any): _15.MsgDeleteServiceResponse;
            toJSON(_: _15.MsgDeleteServiceResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteServiceResponse>): _15.MsgDeleteServiceResponse;
        };
        MsgAddController: {
            encode(message: _15.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddController;
            fromJSON(object: any): _15.MsgAddController;
            toJSON(message: _15.MsgAddController): unknown;
            fromPartial(object: Partial<_15.MsgAddController>): _15.MsgAddController;
        };
        MsgAddControllerResponse: {
            encode(_: _15.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddControllerResponse;
            fromJSON(_: any): _15.MsgAddControllerResponse;
            toJSON(_: _15.MsgAddControllerResponse): unknown;
            fromPartial(_: Partial<_15.MsgAddControllerResponse>): _15.MsgAddControllerResponse;
        };
        MsgDeleteController: {
            encode(message: _15.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteController;
            fromJSON(object: any): _15.MsgDeleteController;
            toJSON(message: _15.MsgDeleteController): unknown;
            fromPartial(object: Partial<_15.MsgDeleteController>): _15.MsgDeleteController;
        };
        MsgDeleteControllerResponse: {
            encode(_: _15.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteControllerResponse;
            fromJSON(_: any): _15.MsgDeleteControllerResponse;
            toJSON(_: _15.MsgDeleteControllerResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteControllerResponse>): _15.MsgDeleteControllerResponse;
        };
        MsgAddLinkedResource: {
            encode(message: _15.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddLinkedResource;
            fromJSON(object: any): _15.MsgAddLinkedResource;
            toJSON(message: _15.MsgAddLinkedResource): unknown;
            fromPartial(object: Partial<_15.MsgAddLinkedResource>): _15.MsgAddLinkedResource;
        };
        MsgDeleteLinkedResource: {
            encode(message: _15.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteLinkedResource;
            fromJSON(object: any): _15.MsgDeleteLinkedResource;
            toJSON(message: _15.MsgDeleteLinkedResource): unknown;
            fromPartial(object: Partial<_15.MsgDeleteLinkedResource>): _15.MsgDeleteLinkedResource;
        };
        MsgAddLinkedEntity: {
            encode(message: _15.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddLinkedEntity;
            fromJSON(object: any): _15.MsgAddLinkedEntity;
            toJSON(message: _15.MsgAddLinkedEntity): unknown;
            fromPartial(object: Partial<_15.MsgAddLinkedEntity>): _15.MsgAddLinkedEntity;
        };
        MsgDeleteLinkedEntity: {
            encode(message: _15.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteLinkedEntity;
            fromJSON(object: any): _15.MsgDeleteLinkedEntity;
            toJSON(message: _15.MsgDeleteLinkedEntity): unknown;
            fromPartial(object: Partial<_15.MsgDeleteLinkedEntity>): _15.MsgDeleteLinkedEntity;
        };
        MsgAddAccordedRight: {
            encode(message: _15.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddAccordedRight;
            fromJSON(object: any): _15.MsgAddAccordedRight;
            toJSON(message: _15.MsgAddAccordedRight): unknown;
            fromPartial(object: Partial<_15.MsgAddAccordedRight>): _15.MsgAddAccordedRight;
        };
        MsgDeleteAccordedRight: {
            encode(message: _15.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteAccordedRight;
            fromJSON(object: any): _15.MsgDeleteAccordedRight;
            toJSON(message: _15.MsgDeleteAccordedRight): unknown;
            fromPartial(object: Partial<_15.MsgDeleteAccordedRight>): _15.MsgDeleteAccordedRight;
        };
        MsgAddIidContext: {
            encode(message: _15.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddIidContext;
            fromJSON(object: any): _15.MsgAddIidContext;
            toJSON(message: _15.MsgAddIidContext): unknown;
            fromPartial(object: Partial<_15.MsgAddIidContext>): _15.MsgAddIidContext;
        };
        MsgDeactivateIID: {
            encode(message: _15.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeactivateIID;
            fromJSON(object: any): _15.MsgDeactivateIID;
            toJSON(message: _15.MsgDeactivateIID): unknown;
            fromPartial(object: Partial<_15.MsgDeactivateIID>): _15.MsgDeactivateIID;
        };
        MsgDeleteIidContext: {
            encode(message: _15.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteIidContext;
            fromJSON(object: any): _15.MsgDeleteIidContext;
            toJSON(message: _15.MsgDeleteIidContext): unknown;
            fromPartial(object: Partial<_15.MsgDeleteIidContext>): _15.MsgDeleteIidContext;
        };
        MsgUpdateIidMeta: {
            encode(message: _15.MsgUpdateIidMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgUpdateIidMeta;
            fromJSON(object: any): _15.MsgUpdateIidMeta;
            toJSON(message: _15.MsgUpdateIidMeta): unknown;
            fromPartial(object: Partial<_15.MsgUpdateIidMeta>): _15.MsgUpdateIidMeta;
        };
        MsgAddLinkedResourceResponse: {
            encode(_: _15.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddLinkedResourceResponse;
            fromJSON(_: any): _15.MsgAddLinkedResourceResponse;
            toJSON(_: _15.MsgAddLinkedResourceResponse): unknown;
            fromPartial(_: Partial<_15.MsgAddLinkedResourceResponse>): _15.MsgAddLinkedResourceResponse;
        };
        MsgDeleteLinkedResourceResponse: {
            encode(_: _15.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteLinkedResourceResponse;
            fromJSON(_: any): _15.MsgDeleteLinkedResourceResponse;
            toJSON(_: _15.MsgDeleteLinkedResourceResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteLinkedResourceResponse>): _15.MsgDeleteLinkedResourceResponse;
        };
        MsgAddLinkedEntityResponse: {
            encode(_: _15.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddLinkedEntityResponse;
            fromJSON(_: any): _15.MsgAddLinkedEntityResponse;
            toJSON(_: _15.MsgAddLinkedEntityResponse): unknown;
            fromPartial(_: Partial<_15.MsgAddLinkedEntityResponse>): _15.MsgAddLinkedEntityResponse;
        };
        MsgDeleteLinkedEntityResponse: {
            encode(_: _15.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteLinkedEntityResponse;
            fromJSON(_: any): _15.MsgDeleteLinkedEntityResponse;
            toJSON(_: _15.MsgDeleteLinkedEntityResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteLinkedEntityResponse>): _15.MsgDeleteLinkedEntityResponse;
        };
        MsgAddAccordedRightResponse: {
            encode(_: _15.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddAccordedRightResponse;
            fromJSON(_: any): _15.MsgAddAccordedRightResponse;
            toJSON(_: _15.MsgAddAccordedRightResponse): unknown;
            fromPartial(_: Partial<_15.MsgAddAccordedRightResponse>): _15.MsgAddAccordedRightResponse;
        };
        MsgDeleteAccordedRightResponse: {
            encode(_: _15.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteAccordedRightResponse;
            fromJSON(_: any): _15.MsgDeleteAccordedRightResponse;
            toJSON(_: _15.MsgDeleteAccordedRightResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteAccordedRightResponse>): _15.MsgDeleteAccordedRightResponse;
        };
        MsgAddIidContextResponse: {
            encode(_: _15.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgAddIidContextResponse;
            fromJSON(_: any): _15.MsgAddIidContextResponse;
            toJSON(_: _15.MsgAddIidContextResponse): unknown;
            fromPartial(_: Partial<_15.MsgAddIidContextResponse>): _15.MsgAddIidContextResponse;
        };
        MsgDeleteIidContextResponse: {
            encode(_: _15.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeleteIidContextResponse;
            fromJSON(_: any): _15.MsgDeleteIidContextResponse;
            toJSON(_: _15.MsgDeleteIidContextResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteIidContextResponse>): _15.MsgDeleteIidContextResponse;
        };
        MsgUpdateIidMetaResponse: {
            encode(_: _15.MsgUpdateIidMetaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgUpdateIidMetaResponse;
            fromJSON(_: any): _15.MsgUpdateIidMetaResponse;
            toJSON(_: _15.MsgUpdateIidMetaResponse): unknown;
            fromPartial(_: Partial<_15.MsgUpdateIidMetaResponse>): _15.MsgUpdateIidMetaResponse;
        };
        MsgDeactivateIIDResponse: {
            encode(_: _15.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDeactivateIIDResponse;
            fromJSON(_: any): _15.MsgDeactivateIIDResponse;
            toJSON(_: _15.MsgDeactivateIIDResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeactivateIIDResponse>): _15.MsgDeactivateIIDResponse;
        };
        QueryIidDocumentsRequest: {
            encode(message: _14.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryIidDocumentsRequest;
            fromJSON(object: any): _14.QueryIidDocumentsRequest;
            toJSON(message: _14.QueryIidDocumentsRequest): unknown;
            fromPartial(object: Partial<_14.QueryIidDocumentsRequest>): _14.QueryIidDocumentsRequest;
        };
        QueryIidDocumentsResponse: {
            encode(message: _14.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryIidDocumentsResponse;
            fromJSON(object: any): _14.QueryIidDocumentsResponse;
            toJSON(message: _14.QueryIidDocumentsResponse): unknown;
            fromPartial(object: Partial<_14.QueryIidDocumentsResponse>): _14.QueryIidDocumentsResponse;
        };
        QueryIidDocumentRequest: {
            encode(message: _14.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryIidDocumentRequest;
            fromJSON(object: any): _14.QueryIidDocumentRequest;
            toJSON(message: _14.QueryIidDocumentRequest): unknown;
            fromPartial(object: Partial<_14.QueryIidDocumentRequest>): _14.QueryIidDocumentRequest;
        };
        QueryIidDocumentResponse: {
            encode(message: _14.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryIidDocumentResponse;
            fromJSON(object: any): _14.QueryIidDocumentResponse;
            toJSON(message: _14.QueryIidDocumentResponse): unknown;
            fromPartial(object: Partial<_14.QueryIidDocumentResponse>): _14.QueryIidDocumentResponse;
        };
        QueryIidMetaDataRequest: {
            encode(message: _14.QueryIidMetaDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryIidMetaDataRequest;
            fromJSON(object: any): _14.QueryIidMetaDataRequest;
            toJSON(message: _14.QueryIidMetaDataRequest): unknown;
            fromPartial(object: Partial<_14.QueryIidMetaDataRequest>): _14.QueryIidMetaDataRequest;
        };
        QueryIidMetaDataResponse: {
            encode(message: _14.QueryIidMetaDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryIidMetaDataResponse;
            fromJSON(object: any): _14.QueryIidMetaDataResponse;
            toJSON(message: _14.QueryIidMetaDataResponse): unknown;
            fromPartial(object: Partial<_14.QueryIidMetaDataResponse>): _14.QueryIidMetaDataResponse;
        };
        Context: {
            encode(message: _13.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Context;
            fromJSON(object: any): _13.Context;
            toJSON(message: _13.Context): unknown;
            fromPartial(object: Partial<_13.Context>): _13.Context;
        };
        IidDocument: {
            encode(message: _13.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.IidDocument;
            fromJSON(object: any): _13.IidDocument;
            toJSON(message: _13.IidDocument): unknown;
            fromPartial(object: Partial<_13.IidDocument>): _13.IidDocument;
        };
        AccordedRight: {
            encode(message: _13.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.AccordedRight;
            fromJSON(object: any): _13.AccordedRight;
            toJSON(message: _13.AccordedRight): unknown;
            fromPartial(object: Partial<_13.AccordedRight>): _13.AccordedRight;
        };
        LinkedResource: {
            encode(message: _13.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.LinkedResource;
            fromJSON(object: any): _13.LinkedResource;
            toJSON(message: _13.LinkedResource): unknown;
            fromPartial(object: Partial<_13.LinkedResource>): _13.LinkedResource;
        };
        LinkedEntity: {
            encode(message: _13.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.LinkedEntity;
            fromJSON(object: any): _13.LinkedEntity;
            toJSON(message: _13.LinkedEntity): unknown;
            fromPartial(object: Partial<_13.LinkedEntity>): _13.LinkedEntity;
        };
        VerificationMethod: {
            encode(message: _13.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.VerificationMethod;
            fromJSON(object: any): _13.VerificationMethod;
            toJSON(message: _13.VerificationMethod): unknown;
            fromPartial(object: Partial<_13.VerificationMethod>): _13.VerificationMethod;
        };
        Service: {
            encode(message: _13.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Service;
            fromJSON(object: any): _13.Service;
            toJSON(message: _13.Service): unknown;
            fromPartial(object: Partial<_13.Service>): _13.Service;
        };
        IidMetadata: {
            encode(message: _13.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.IidMetadata;
            fromJSON(object: any): _13.IidMetadata;
            toJSON(message: _13.IidMetadata): unknown;
            fromPartial(object: Partial<_13.IidMetadata>): _13.IidMetadata;
        };
        GenesisState: {
            encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
            fromJSON(object: any): _12.GenesisState;
            toJSON(message: _12.GenesisState): unknown;
            fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
        };
        IidDocumentCreatedEvent: {
            encode(message: _11.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.IidDocumentCreatedEvent;
            fromJSON(object: any): _11.IidDocumentCreatedEvent;
            toJSON(message: _11.IidDocumentCreatedEvent): unknown;
            fromPartial(object: Partial<_11.IidDocumentCreatedEvent>): _11.IidDocumentCreatedEvent;
        };
        IidDocumentUpdatedEvent: {
            encode(message: _11.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.IidDocumentUpdatedEvent;
            fromJSON(object: any): _11.IidDocumentUpdatedEvent;
            toJSON(message: _11.IidDocumentUpdatedEvent): unknown;
            fromPartial(object: Partial<_11.IidDocumentUpdatedEvent>): _11.IidDocumentUpdatedEvent;
        };
    };
    const did: {
        BaseDidDoc: {
            encode(message: _17.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.BaseDidDoc;
            fromJSON(object: any): _17.BaseDidDoc;
            toJSON(message: _17.BaseDidDoc): unknown;
            fromPartial(object: Partial<_17.BaseDidDoc>): _17.BaseDidDoc;
        };
        DidCredential: {
            encode(message: _16.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DidCredential;
            fromJSON(object: any): _16.DidCredential;
            toJSON(message: _16.DidCredential): unknown;
            fromPartial(object: Partial<_16.DidCredential>): _16.DidCredential;
        };
        Claim: {
            encode(message: _16.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Claim;
            fromJSON(object: any): _16.Claim;
            toJSON(message: _16.Claim): unknown;
            fromPartial(object: Partial<_16.Claim>): _16.Claim;
        };
        IxoDid: {
            encode(message: _16.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.IxoDid;
            fromJSON(object: any): _16.IxoDid;
            toJSON(message: _16.IxoDid): unknown;
            fromPartial(object: Partial<_16.IxoDid>): _16.IxoDid;
        };
        Secret: {
            encode(message: _16.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Secret;
            fromJSON(object: any): _16.Secret;
            toJSON(message: _16.Secret): unknown;
            fromPartial(object: Partial<_16.Secret>): _16.Secret;
        };
    };
    const payments: {
        MsgSetPaymentContractAuthorisation: {
            encode(message: _21.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgSetPaymentContractAuthorisation;
            fromJSON(object: any): _21.MsgSetPaymentContractAuthorisation;
            toJSON(message: _21.MsgSetPaymentContractAuthorisation): unknown;
            fromPartial(object: Partial<_21.MsgSetPaymentContractAuthorisation>): _21.MsgSetPaymentContractAuthorisation;
        };
        MsgSetPaymentContractAuthorisationResponse: {
            encode(_: _21.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgSetPaymentContractAuthorisationResponse;
            fromJSON(_: any): _21.MsgSetPaymentContractAuthorisationResponse;
            toJSON(_: _21.MsgSetPaymentContractAuthorisationResponse): unknown;
            fromPartial(_: Partial<_21.MsgSetPaymentContractAuthorisationResponse>): _21.MsgSetPaymentContractAuthorisationResponse;
        };
        MsgCreatePaymentTemplate: {
            encode(message: _21.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreatePaymentTemplate;
            fromJSON(object: any): _21.MsgCreatePaymentTemplate;
            toJSON(message: _21.MsgCreatePaymentTemplate): unknown;
            fromPartial(object: Partial<_21.MsgCreatePaymentTemplate>): _21.MsgCreatePaymentTemplate;
        };
        MsgCreatePaymentTemplateResponse: {
            encode(_: _21.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreatePaymentTemplateResponse;
            fromJSON(_: any): _21.MsgCreatePaymentTemplateResponse;
            toJSON(_: _21.MsgCreatePaymentTemplateResponse): unknown;
            fromPartial(_: Partial<_21.MsgCreatePaymentTemplateResponse>): _21.MsgCreatePaymentTemplateResponse;
        };
        MsgCreatePaymentContract: {
            encode(message: _21.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreatePaymentContract;
            fromJSON(object: any): _21.MsgCreatePaymentContract;
            toJSON(message: _21.MsgCreatePaymentContract): unknown;
            fromPartial(object: Partial<_21.MsgCreatePaymentContract>): _21.MsgCreatePaymentContract;
        };
        MsgCreatePaymentContractResponse: {
            encode(_: _21.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreatePaymentContractResponse;
            fromJSON(_: any): _21.MsgCreatePaymentContractResponse;
            toJSON(_: _21.MsgCreatePaymentContractResponse): unknown;
            fromPartial(_: Partial<_21.MsgCreatePaymentContractResponse>): _21.MsgCreatePaymentContractResponse;
        };
        MsgCreateSubscription: {
            encode(message: _21.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreateSubscription;
            fromJSON(object: any): _21.MsgCreateSubscription;
            toJSON(message: _21.MsgCreateSubscription): unknown;
            fromPartial(object: Partial<_21.MsgCreateSubscription>): _21.MsgCreateSubscription;
        };
        MsgCreateSubscriptionResponse: {
            encode(_: _21.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreateSubscriptionResponse;
            fromJSON(_: any): _21.MsgCreateSubscriptionResponse;
            toJSON(_: _21.MsgCreateSubscriptionResponse): unknown;
            fromPartial(_: Partial<_21.MsgCreateSubscriptionResponse>): _21.MsgCreateSubscriptionResponse;
        };
        MsgGrantDiscount: {
            encode(message: _21.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgGrantDiscount;
            fromJSON(object: any): _21.MsgGrantDiscount;
            toJSON(message: _21.MsgGrantDiscount): unknown;
            fromPartial(object: Partial<_21.MsgGrantDiscount>): _21.MsgGrantDiscount;
        };
        MsgGrantDiscountResponse: {
            encode(_: _21.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgGrantDiscountResponse;
            fromJSON(_: any): _21.MsgGrantDiscountResponse;
            toJSON(_: _21.MsgGrantDiscountResponse): unknown;
            fromPartial(_: Partial<_21.MsgGrantDiscountResponse>): _21.MsgGrantDiscountResponse;
        };
        MsgRevokeDiscount: {
            encode(message: _21.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgRevokeDiscount;
            fromJSON(object: any): _21.MsgRevokeDiscount;
            toJSON(message: _21.MsgRevokeDiscount): unknown;
            fromPartial(object: Partial<_21.MsgRevokeDiscount>): _21.MsgRevokeDiscount;
        };
        MsgRevokeDiscountResponse: {
            encode(_: _21.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgRevokeDiscountResponse;
            fromJSON(_: any): _21.MsgRevokeDiscountResponse;
            toJSON(_: _21.MsgRevokeDiscountResponse): unknown;
            fromPartial(_: Partial<_21.MsgRevokeDiscountResponse>): _21.MsgRevokeDiscountResponse;
        };
        MsgEffectPayment: {
            encode(message: _21.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgEffectPayment;
            fromJSON(object: any): _21.MsgEffectPayment;
            toJSON(message: _21.MsgEffectPayment): unknown;
            fromPartial(object: Partial<_21.MsgEffectPayment>): _21.MsgEffectPayment;
        };
        MsgEffectPaymentResponse: {
            encode(_: _21.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgEffectPaymentResponse;
            fromJSON(_: any): _21.MsgEffectPaymentResponse;
            toJSON(_: _21.MsgEffectPaymentResponse): unknown;
            fromPartial(_: Partial<_21.MsgEffectPaymentResponse>): _21.MsgEffectPaymentResponse;
        };
        QueryPaymentTemplateRequest: {
            encode(message: _20.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryPaymentTemplateRequest;
            fromJSON(object: any): _20.QueryPaymentTemplateRequest;
            toJSON(message: _20.QueryPaymentTemplateRequest): unknown;
            fromPartial(object: Partial<_20.QueryPaymentTemplateRequest>): _20.QueryPaymentTemplateRequest;
        };
        QueryPaymentTemplateResponse: {
            encode(message: _20.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryPaymentTemplateResponse;
            fromJSON(object: any): _20.QueryPaymentTemplateResponse;
            toJSON(message: _20.QueryPaymentTemplateResponse): unknown;
            fromPartial(object: Partial<_20.QueryPaymentTemplateResponse>): _20.QueryPaymentTemplateResponse;
        };
        QueryPaymentContractRequest: {
            encode(message: _20.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryPaymentContractRequest;
            fromJSON(object: any): _20.QueryPaymentContractRequest;
            toJSON(message: _20.QueryPaymentContractRequest): unknown;
            fromPartial(object: Partial<_20.QueryPaymentContractRequest>): _20.QueryPaymentContractRequest;
        };
        QueryPaymentContractResponse: {
            encode(message: _20.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryPaymentContractResponse;
            fromJSON(object: any): _20.QueryPaymentContractResponse;
            toJSON(message: _20.QueryPaymentContractResponse): unknown;
            fromPartial(object: Partial<_20.QueryPaymentContractResponse>): _20.QueryPaymentContractResponse;
        };
        QueryPaymentContractsByIdPrefixRequest: {
            encode(message: _20.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryPaymentContractsByIdPrefixRequest;
            fromJSON(object: any): _20.QueryPaymentContractsByIdPrefixRequest;
            toJSON(message: _20.QueryPaymentContractsByIdPrefixRequest): unknown;
            fromPartial(object: Partial<_20.QueryPaymentContractsByIdPrefixRequest>): _20.QueryPaymentContractsByIdPrefixRequest;
        };
        QueryPaymentContractsByIdPrefixResponse: {
            encode(message: _20.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryPaymentContractsByIdPrefixResponse;
            fromJSON(object: any): _20.QueryPaymentContractsByIdPrefixResponse;
            toJSON(message: _20.QueryPaymentContractsByIdPrefixResponse): unknown;
            fromPartial(object: Partial<_20.QueryPaymentContractsByIdPrefixResponse>): _20.QueryPaymentContractsByIdPrefixResponse;
        };
        QuerySubscriptionRequest: {
            encode(message: _20.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QuerySubscriptionRequest;
            fromJSON(object: any): _20.QuerySubscriptionRequest;
            toJSON(message: _20.QuerySubscriptionRequest): unknown;
            fromPartial(object: Partial<_20.QuerySubscriptionRequest>): _20.QuerySubscriptionRequest;
        };
        QuerySubscriptionResponse: {
            encode(message: _20.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QuerySubscriptionResponse;
            fromJSON(object: any): _20.QuerySubscriptionResponse;
            toJSON(message: _20.QuerySubscriptionResponse): unknown;
            fromPartial(object: Partial<_20.QuerySubscriptionResponse>): _20.QuerySubscriptionResponse;
        };
        PaymentTemplate: {
            encode(message: _19.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PaymentTemplate;
            fromJSON(object: any): _19.PaymentTemplate;
            toJSON(message: _19.PaymentTemplate): unknown;
            fromPartial(object: Partial<_19.PaymentTemplate>): _19.PaymentTemplate;
        };
        Discount: {
            encode(message: _19.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Discount;
            fromJSON(object: any): _19.Discount;
            toJSON(message: _19.Discount): unknown;
            fromPartial(object: Partial<_19.Discount>): _19.Discount;
        };
        DistributionShare: {
            encode(message: _19.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.DistributionShare;
            fromJSON(object: any): _19.DistributionShare;
            toJSON(message: _19.DistributionShare): unknown;
            fromPartial(object: Partial<_19.DistributionShare>): _19.DistributionShare;
        };
        PaymentContract: {
            encode(message: _19.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PaymentContract;
            fromJSON(object: any): _19.PaymentContract;
            toJSON(message: _19.PaymentContract): unknown;
            fromPartial(object: Partial<_19.PaymentContract>): _19.PaymentContract;
        };
        Subscription: {
            encode(message: _19.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Subscription;
            fromJSON(object: any): _19.Subscription;
            toJSON(message: _19.Subscription): unknown;
            fromPartial(object: Partial<_19.Subscription>): _19.Subscription;
        };
        BlockPeriod: {
            encode(message: _19.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.BlockPeriod;
            fromJSON(object: any): _19.BlockPeriod;
            toJSON(message: _19.BlockPeriod): unknown;
            fromPartial(object: Partial<_19.BlockPeriod>): _19.BlockPeriod;
        };
        TimePeriod: {
            encode(message: _19.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TimePeriod;
            fromJSON(object: any): _19.TimePeriod;
            toJSON(message: _19.TimePeriod): unknown;
            fromPartial(object: Partial<_19.TimePeriod>): _19.TimePeriod;
        };
        TestPeriod: {
            encode(message: _19.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TestPeriod;
            fromJSON(object: any): _19.TestPeriod;
            toJSON(message: _19.TestPeriod): unknown;
            fromPartial(object: Partial<_19.TestPeriod>): _19.TestPeriod;
        };
        GenesisState: {
            encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GenesisState;
            fromJSON(object: any): _18.GenesisState;
            toJSON(message: _18.GenesisState): unknown;
            fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
        };
    };
    const project: {
        MsgCreateProject: {
            encode(message: _25.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateProject;
            fromJSON(object: any): _25.MsgCreateProject;
            toJSON(message: _25.MsgCreateProject): unknown;
            fromPartial(object: Partial<_25.MsgCreateProject>): _25.MsgCreateProject;
        };
        MsgCreateProjectResponse: {
            encode(_: _25.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateProjectResponse;
            fromJSON(_: any): _25.MsgCreateProjectResponse;
            toJSON(_: _25.MsgCreateProjectResponse): unknown;
            fromPartial(_: Partial<_25.MsgCreateProjectResponse>): _25.MsgCreateProjectResponse;
        };
        MsgUpdateProjectStatus: {
            encode(message: _25.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateProjectStatus;
            fromJSON(object: any): _25.MsgUpdateProjectStatus;
            toJSON(message: _25.MsgUpdateProjectStatus): unknown;
            fromPartial(object: Partial<_25.MsgUpdateProjectStatus>): _25.MsgUpdateProjectStatus;
        };
        MsgUpdateProjectStatusResponse: {
            encode(_: _25.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateProjectStatusResponse;
            fromJSON(_: any): _25.MsgUpdateProjectStatusResponse;
            toJSON(_: _25.MsgUpdateProjectStatusResponse): unknown;
            fromPartial(_: Partial<_25.MsgUpdateProjectStatusResponse>): _25.MsgUpdateProjectStatusResponse;
        };
        MsgCreateAgent: {
            encode(message: _25.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateAgent;
            fromJSON(object: any): _25.MsgCreateAgent;
            toJSON(message: _25.MsgCreateAgent): unknown;
            fromPartial(object: Partial<_25.MsgCreateAgent>): _25.MsgCreateAgent;
        };
        MsgCreateAgentResponse: {
            encode(_: _25.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateAgentResponse;
            fromJSON(_: any): _25.MsgCreateAgentResponse;
            toJSON(_: _25.MsgCreateAgentResponse): unknown;
            fromPartial(_: Partial<_25.MsgCreateAgentResponse>): _25.MsgCreateAgentResponse;
        };
        MsgUpdateAgent: {
            encode(message: _25.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateAgent;
            fromJSON(object: any): _25.MsgUpdateAgent;
            toJSON(message: _25.MsgUpdateAgent): unknown;
            fromPartial(object: Partial<_25.MsgUpdateAgent>): _25.MsgUpdateAgent;
        };
        MsgUpdateAgentResponse: {
            encode(_: _25.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateAgentResponse;
            fromJSON(_: any): _25.MsgUpdateAgentResponse;
            toJSON(_: _25.MsgUpdateAgentResponse): unknown;
            fromPartial(_: Partial<_25.MsgUpdateAgentResponse>): _25.MsgUpdateAgentResponse;
        };
        MsgCreateClaim: {
            encode(message: _25.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateClaim;
            fromJSON(object: any): _25.MsgCreateClaim;
            toJSON(message: _25.MsgCreateClaim): unknown;
            fromPartial(object: Partial<_25.MsgCreateClaim>): _25.MsgCreateClaim;
        };
        MsgCreateClaimResponse: {
            encode(_: _25.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateClaimResponse;
            fromJSON(_: any): _25.MsgCreateClaimResponse;
            toJSON(_: _25.MsgCreateClaimResponse): unknown;
            fromPartial(_: Partial<_25.MsgCreateClaimResponse>): _25.MsgCreateClaimResponse;
        };
        MsgCreateEvaluation: {
            encode(message: _25.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateEvaluation;
            fromJSON(object: any): _25.MsgCreateEvaluation;
            toJSON(message: _25.MsgCreateEvaluation): unknown;
            fromPartial(object: Partial<_25.MsgCreateEvaluation>): _25.MsgCreateEvaluation;
        };
        MsgCreateEvaluationResponse: {
            encode(_: _25.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgCreateEvaluationResponse;
            fromJSON(_: any): _25.MsgCreateEvaluationResponse;
            toJSON(_: _25.MsgCreateEvaluationResponse): unknown;
            fromPartial(_: Partial<_25.MsgCreateEvaluationResponse>): _25.MsgCreateEvaluationResponse;
        };
        MsgWithdrawFunds: {
            encode(message: _25.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawFunds;
            fromJSON(object: any): _25.MsgWithdrawFunds;
            toJSON(message: _25.MsgWithdrawFunds): unknown;
            fromPartial(object: Partial<_25.MsgWithdrawFunds>): _25.MsgWithdrawFunds;
        };
        MsgWithdrawFundsResponse: {
            encode(_: _25.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawFundsResponse;
            fromJSON(_: any): _25.MsgWithdrawFundsResponse;
            toJSON(_: _25.MsgWithdrawFundsResponse): unknown;
            fromPartial(_: Partial<_25.MsgWithdrawFundsResponse>): _25.MsgWithdrawFundsResponse;
        };
        MsgUpdateProjectDoc: {
            encode(message: _25.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateProjectDoc;
            fromJSON(object: any): _25.MsgUpdateProjectDoc;
            toJSON(message: _25.MsgUpdateProjectDoc): unknown;
            fromPartial(object: Partial<_25.MsgUpdateProjectDoc>): _25.MsgUpdateProjectDoc;
        };
        MsgUpdateProjectDocResponse: {
            encode(_: _25.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateProjectDocResponse;
            fromJSON(_: any): _25.MsgUpdateProjectDocResponse;
            toJSON(_: _25.MsgUpdateProjectDocResponse): unknown;
            fromPartial(_: Partial<_25.MsgUpdateProjectDocResponse>): _25.MsgUpdateProjectDocResponse;
        };
        QueryProjectDocRequest: {
            encode(message: _24.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProjectDocRequest;
            fromJSON(object: any): _24.QueryProjectDocRequest;
            toJSON(message: _24.QueryProjectDocRequest): unknown;
            fromPartial(object: Partial<_24.QueryProjectDocRequest>): _24.QueryProjectDocRequest;
        };
        QueryProjectDocResponse: {
            encode(message: _24.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProjectDocResponse;
            fromJSON(object: any): _24.QueryProjectDocResponse;
            toJSON(message: _24.QueryProjectDocResponse): unknown;
            fromPartial(object: Partial<_24.QueryProjectDocResponse>): _24.QueryProjectDocResponse;
        };
        QueryProjectAccountsRequest: {
            encode(message: _24.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProjectAccountsRequest;
            fromJSON(object: any): _24.QueryProjectAccountsRequest;
            toJSON(message: _24.QueryProjectAccountsRequest): unknown;
            fromPartial(object: Partial<_24.QueryProjectAccountsRequest>): _24.QueryProjectAccountsRequest;
        };
        QueryProjectAccountsResponse: {
            encode(message: _24.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProjectAccountsResponse;
            fromJSON(object: any): _24.QueryProjectAccountsResponse;
            toJSON(message: _24.QueryProjectAccountsResponse): unknown;
            fromPartial(object: Partial<_24.QueryProjectAccountsResponse>): _24.QueryProjectAccountsResponse;
        };
        QueryProjectTxRequest: {
            encode(message: _24.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProjectTxRequest;
            fromJSON(object: any): _24.QueryProjectTxRequest;
            toJSON(message: _24.QueryProjectTxRequest): unknown;
            fromPartial(object: Partial<_24.QueryProjectTxRequest>): _24.QueryProjectTxRequest;
        };
        QueryProjectTxResponse: {
            encode(message: _24.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProjectTxResponse;
            fromJSON(object: any): _24.QueryProjectTxResponse;
            toJSON(message: _24.QueryProjectTxResponse): unknown;
            fromPartial(object: Partial<_24.QueryProjectTxResponse>): _24.QueryProjectTxResponse;
        };
        QueryParamsRequest: {
            encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
            fromJSON(_: any): _24.QueryParamsRequest;
            toJSON(_: _24.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
            fromJSON(object: any): _24.QueryParamsResponse;
            toJSON(message: _24.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
        };
        UpdateProjectStatusDoc: {
            encode(message: _23.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.UpdateProjectStatusDoc;
            fromJSON(object: any): _23.UpdateProjectStatusDoc;
            toJSON(message: _23.UpdateProjectStatusDoc): unknown;
            fromPartial(object: Partial<_23.UpdateProjectStatusDoc>): _23.UpdateProjectStatusDoc;
        };
        CreateAgentDoc: {
            encode(message: _23.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CreateAgentDoc;
            fromJSON(object: any): _23.CreateAgentDoc;
            toJSON(message: _23.CreateAgentDoc): unknown;
            fromPartial(object: Partial<_23.CreateAgentDoc>): _23.CreateAgentDoc;
        };
        UpdateAgentDoc: {
            encode(message: _23.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.UpdateAgentDoc;
            fromJSON(object: any): _23.UpdateAgentDoc;
            toJSON(message: _23.UpdateAgentDoc): unknown;
            fromPartial(object: Partial<_23.UpdateAgentDoc>): _23.UpdateAgentDoc;
        };
        CreateClaimDoc: {
            encode(message: _23.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CreateClaimDoc;
            fromJSON(object: any): _23.CreateClaimDoc;
            toJSON(message: _23.CreateClaimDoc): unknown;
            fromPartial(object: Partial<_23.CreateClaimDoc>): _23.CreateClaimDoc;
        };
        CreateEvaluationDoc: {
            encode(message: _23.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CreateEvaluationDoc;
            fromJSON(object: any): _23.CreateEvaluationDoc;
            toJSON(message: _23.CreateEvaluationDoc): unknown;
            fromPartial(object: Partial<_23.CreateEvaluationDoc>): _23.CreateEvaluationDoc;
        };
        WithdrawFundsDoc: {
            encode(message: _23.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.WithdrawFundsDoc;
            fromJSON(object: any): _23.WithdrawFundsDoc;
            toJSON(message: _23.WithdrawFundsDoc): unknown;
            fromPartial(object: Partial<_23.WithdrawFundsDoc>): _23.WithdrawFundsDoc;
        };
        ProjectDoc: {
            encode(message: _23.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ProjectDoc;
            fromJSON(object: any): _23.ProjectDoc;
            toJSON(message: _23.ProjectDoc): unknown;
            fromPartial(object: Partial<_23.ProjectDoc>): _23.ProjectDoc;
        };
        WithdrawalInfoDoc: {
            encode(message: _23.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.WithdrawalInfoDoc;
            fromJSON(object: any): _23.WithdrawalInfoDoc;
            toJSON(message: _23.WithdrawalInfoDoc): unknown;
            fromPartial(object: Partial<_23.WithdrawalInfoDoc>): _23.WithdrawalInfoDoc;
        };
        Params: {
            encode(message: _23.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Params;
            fromJSON(object: any): _23.Params;
            toJSON(message: _23.Params): unknown;
            fromPartial(object: Partial<_23.Params>): _23.Params;
        };
        Claim: {
            encode(message: _23.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Claim;
            fromJSON(object: any): _23.Claim;
            toJSON(message: _23.Claim): unknown;
            fromPartial(object: Partial<_23.Claim>): _23.Claim;
        };
        GenesisAccountMap_MapEntry: {
            encode(message: _23.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisAccountMap_MapEntry;
            fromJSON(object: any): _23.GenesisAccountMap_MapEntry;
            toJSON(message: _23.GenesisAccountMap_MapEntry): unknown;
            fromPartial(object: Partial<_23.GenesisAccountMap_MapEntry>): _23.GenesisAccountMap_MapEntry;
        };
        GenesisAccountMap: {
            encode(message: _23.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisAccountMap;
            fromJSON(object: any): _23.GenesisAccountMap;
            toJSON(message: _23.GenesisAccountMap): unknown;
            fromPartial(object: Partial<_23.GenesisAccountMap>): _23.GenesisAccountMap;
        };
        AccountMap_MapEntry: {
            encode(message: _23.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AccountMap_MapEntry;
            fromJSON(object: any): _23.AccountMap_MapEntry;
            toJSON(message: _23.AccountMap_MapEntry): unknown;
            fromPartial(object: Partial<_23.AccountMap_MapEntry>): _23.AccountMap_MapEntry;
        };
        AccountMap: {
            encode(message: _23.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AccountMap;
            fromJSON(object: any): _23.AccountMap;
            toJSON(message: _23.AccountMap): unknown;
            fromPartial(object: Partial<_23.AccountMap>): _23.AccountMap;
        };
        WithdrawalInfoDocs: {
            encode(message: _23.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.WithdrawalInfoDocs;
            fromJSON(object: any): _23.WithdrawalInfoDocs;
            toJSON(message: _23.WithdrawalInfoDocs): unknown;
            fromPartial(object: Partial<_23.WithdrawalInfoDocs>): _23.WithdrawalInfoDocs;
        };
        Claims: {
            encode(message: _23.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Claims;
            fromJSON(object: any): _23.Claims;
            toJSON(message: _23.Claims): unknown;
            fromPartial(object: Partial<_23.Claims>): _23.Claims;
        };
        GenesisState: {
            encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GenesisState;
            fromJSON(object: any): _22.GenesisState;
            toJSON(message: _22.GenesisState): unknown;
            fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
        };
    };
    const ClientFactory: {
        createRPCQueryClient: ({ rpcEndpoint, }: {
            rpcEndpoint: string;
        }) => Promise<{
            ixo: {
                bonds: {
                    bonds(request?: _2.QueryBondsRequest): Promise<_2.QueryBondsResponse>;
                    bondsDetailed(request?: _2.QueryBondsDetailedRequest): Promise<_2.QueryBondsDetailedResponse>;
                    params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                    bond(request: _2.QueryBondRequest): Promise<_2.QueryBondResponse>;
                    batch(request: _2.QueryBatchRequest): Promise<_2.QueryBatchResponse>;
                    lastBatch(request: _2.QueryLastBatchRequest): Promise<_2.QueryLastBatchResponse>;
                    currentPrice(request: _2.QueryCurrentPriceRequest): Promise<_2.QueryCurrentPriceResponse>;
                    currentReserve(request: _2.QueryCurrentReserveRequest): Promise<_2.QueryCurrentReserveResponse>;
                    availableReserve(request: _2.QueryAvailableReserveRequest): Promise<_2.QueryAvailableReserveResponse>;
                    customPrice(request: _2.QueryCustomPriceRequest): Promise<_2.QueryCustomPriceResponse>;
                    buyPrice(request: _2.QueryBuyPriceRequest): Promise<_2.QueryBuyPriceResponse>;
                    sellReturn(request: _2.QuerySellReturnRequest): Promise<_2.QuerySellReturnResponse>;
                    swapReturn(request: _2.QuerySwapReturnRequest): Promise<_2.QuerySwapReturnResponse>;
                    alphaMaximums(request: _2.QueryAlphaMaximumsRequest): Promise<_2.QueryAlphaMaximumsResponse>;
                };
                entity: {
                    entityList(request: _9.QueryEntityListRequest): Promise<_9.QueryEntityListResponse>;
                    entityDoc(request: _9.QueryEntityDocRequest): Promise<_9.QueryEntityDocResponse>;
                    entityConfig(request?: _9.QueryEntityConfigRequest): Promise<_9.QueryEntityConfigResponse>;
                };
                iid: {
                    iidDocuments(request: _14.QueryIidDocumentsRequest): Promise<_14.QueryIidDocumentsResponse>;
                    iidDocument(request: _14.QueryIidDocumentRequest): Promise<_14.QueryIidDocumentResponse>;
                    metaData(request: _14.QueryIidMetaDataRequest): Promise<_14.QueryIidMetaDataResponse>;
                };
                payments: {
                    paymentTemplate(request: _20.QueryPaymentTemplateRequest): Promise<_20.QueryPaymentTemplateResponse>;
                    paymentContract(request: _20.QueryPaymentContractRequest): Promise<_20.QueryPaymentContractResponse>;
                    paymentContractsByIdPrefix(request: _20.QueryPaymentContractsByIdPrefixRequest): Promise<_20.QueryPaymentContractsByIdPrefixResponse>;
                    subscription(request: _20.QuerySubscriptionRequest): Promise<_20.QuerySubscriptionResponse>;
                };
                project: {
                    projectDoc(request: _24.QueryProjectDocRequest): Promise<_24.QueryProjectDocResponse>;
                    projectAccounts(request: _24.QueryProjectAccountsRequest): Promise<_24.QueryProjectAccountsResponse>;
                    projectTx(request: _24.QueryProjectTxRequest): Promise<_24.QueryProjectTxResponse>;
                    params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                };
            };
        }>;
    };
}
