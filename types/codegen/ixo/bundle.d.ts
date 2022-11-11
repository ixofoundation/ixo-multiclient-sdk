import * as _101 from "./bonds/v1beta1/bonds";
import * as _102 from "./bonds/v1beta1/genesis";
import * as _103 from "./bonds/v1beta1/query";
import * as _104 from "./bonds/v1beta1/tx";
import * as _105 from "./entity/v1beta1/entity";
import * as _106 from "./entity/v1beta1/genesis";
import * as _107 from "./entity/v1beta1/proposal";
import * as _108 from "./entity/v1beta1/query";
import * as _109 from "./entity/v1beta1/tx";
import * as _110 from "./iid/v1beta1/event";
import * as _111 from "./iid/v1beta1/genesis";
import * as _112 from "./iid/v1beta1/iid";
import * as _113 from "./iid/v1beta1/query";
import * as _114 from "./iid/v1beta1/tx";
import * as _115 from "./payments/v1/genesis";
import * as _116 from "./payments/v1/payments";
import * as _117 from "./payments/v1/query";
import * as _118 from "./payments/v1/tx";
import * as _119 from "./project/v1/genesis";
import * as _120 from "./project/v1/project";
import * as _121 from "./project/v1/query";
import * as _122 from "./project/v1/tx";
import * as _123 from "./token/v1beta1/genesis";
import * as _124 from "./token/v1beta1/proposal";
import * as _125 from "./token/v1beta1/query";
import * as _126 from "./token/v1beta1/token";
import * as _127 from "./token/v1beta1/tx";
import * as _173 from "./bonds/v1beta1/query.rpc.Query";
import * as _174 from "./entity/v1beta1/query.rpc.Query";
import * as _175 from "./iid/v1beta1/query.rpc.Query";
import * as _176 from "./payments/v1/query.rpc.Query";
import * as _177 from "./project/v1/query.rpc.Query";
import * as _178 from "./token/v1beta1/query.rpc.Query";
import * as _179 from "./bonds/v1beta1/tx.rpc.msg";
import * as _180 from "./entity/v1beta1/tx.rpc.msg";
import * as _181 from "./iid/v1beta1/tx.rpc.msg";
import * as _182 from "./payments/v1/tx.rpc.msg";
import * as _183 from "./project/v1/tx.rpc.msg";
import * as _184 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                bonds(request?: _103.QueryBondsRequest): Promise<_103.QueryBondsResponse>;
                bondsDetailed(request?: _103.QueryBondsDetailedRequest): Promise<_103.QueryBondsDetailedResponse>;
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                bond(request: _103.QueryBondRequest): Promise<_103.QueryBondResponse>;
                batch(request: _103.QueryBatchRequest): Promise<_103.QueryBatchResponse>;
                lastBatch(request: _103.QueryLastBatchRequest): Promise<_103.QueryLastBatchResponse>;
                currentPrice(request: _103.QueryCurrentPriceRequest): Promise<_103.QueryCurrentPriceResponse>;
                currentReserve(request: _103.QueryCurrentReserveRequest): Promise<_103.QueryCurrentReserveResponse>;
                availableReserve(request: _103.QueryAvailableReserveRequest): Promise<_103.QueryAvailableReserveResponse>;
                customPrice(request: _103.QueryCustomPriceRequest): Promise<_103.QueryCustomPriceResponse>;
                buyPrice(request: _103.QueryBuyPriceRequest): Promise<_103.QueryBuyPriceResponse>;
                sellReturn(request: _103.QuerySellReturnRequest): Promise<_103.QuerySellReturnResponse>;
                swapReturn(request: _103.QuerySwapReturnRequest): Promise<_103.QuerySwapReturnResponse>;
                alphaMaximums(request: _103.QueryAlphaMaximumsRequest): Promise<_103.QueryAlphaMaximumsResponse>;
            };
            MsgCreateBond: {
                encode(message: _104.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCreateBond;
                fromJSON(object: any): _104.MsgCreateBond;
                toJSON(message: _104.MsgCreateBond): unknown;
                fromPartial(object: Partial<_104.MsgCreateBond>): _104.MsgCreateBond;
            };
            MsgCreateBondResponse: {
                encode(_: _104.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCreateBondResponse;
                fromJSON(_: any): _104.MsgCreateBondResponse;
                toJSON(_: _104.MsgCreateBondResponse): unknown;
                fromPartial(_: Partial<_104.MsgCreateBondResponse>): _104.MsgCreateBondResponse;
            };
            MsgEditBond: {
                encode(message: _104.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgEditBond;
                fromJSON(object: any): _104.MsgEditBond;
                toJSON(message: _104.MsgEditBond): unknown;
                fromPartial(object: Partial<_104.MsgEditBond>): _104.MsgEditBond;
            };
            MsgEditBondResponse: {
                encode(_: _104.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgEditBondResponse;
                fromJSON(_: any): _104.MsgEditBondResponse;
                toJSON(_: _104.MsgEditBondResponse): unknown;
                fromPartial(_: Partial<_104.MsgEditBondResponse>): _104.MsgEditBondResponse;
            };
            MsgSetNextAlpha: {
                encode(message: _104.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSetNextAlpha;
                fromJSON(object: any): _104.MsgSetNextAlpha;
                toJSON(message: _104.MsgSetNextAlpha): unknown;
                fromPartial(object: Partial<_104.MsgSetNextAlpha>): _104.MsgSetNextAlpha;
            };
            MsgSetNextAlphaResponse: {
                encode(_: _104.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSetNextAlphaResponse;
                fromJSON(_: any): _104.MsgSetNextAlphaResponse;
                toJSON(_: _104.MsgSetNextAlphaResponse): unknown;
                fromPartial(_: Partial<_104.MsgSetNextAlphaResponse>): _104.MsgSetNextAlphaResponse;
            };
            MsgUpdateBondState: {
                encode(message: _104.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgUpdateBondState;
                fromJSON(object: any): _104.MsgUpdateBondState;
                toJSON(message: _104.MsgUpdateBondState): unknown;
                fromPartial(object: Partial<_104.MsgUpdateBondState>): _104.MsgUpdateBondState;
            };
            MsgUpdateBondStateResponse: {
                encode(_: _104.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgUpdateBondStateResponse;
                fromJSON(_: any): _104.MsgUpdateBondStateResponse;
                toJSON(_: _104.MsgUpdateBondStateResponse): unknown;
                fromPartial(_: Partial<_104.MsgUpdateBondStateResponse>): _104.MsgUpdateBondStateResponse;
            };
            MsgBuy: {
                encode(message: _104.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgBuy;
                fromJSON(object: any): _104.MsgBuy;
                toJSON(message: _104.MsgBuy): unknown;
                fromPartial(object: Partial<_104.MsgBuy>): _104.MsgBuy;
            };
            MsgBuyResponse: {
                encode(_: _104.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgBuyResponse;
                fromJSON(_: any): _104.MsgBuyResponse;
                toJSON(_: _104.MsgBuyResponse): unknown;
                fromPartial(_: Partial<_104.MsgBuyResponse>): _104.MsgBuyResponse;
            };
            MsgSell: {
                encode(message: _104.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSell;
                fromJSON(object: any): _104.MsgSell;
                toJSON(message: _104.MsgSell): unknown;
                fromPartial(object: Partial<_104.MsgSell>): _104.MsgSell;
            };
            MsgSellResponse: {
                encode(_: _104.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSellResponse;
                fromJSON(_: any): _104.MsgSellResponse;
                toJSON(_: _104.MsgSellResponse): unknown;
                fromPartial(_: Partial<_104.MsgSellResponse>): _104.MsgSellResponse;
            };
            MsgSwap: {
                encode(message: _104.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSwap;
                fromJSON(object: any): _104.MsgSwap;
                toJSON(message: _104.MsgSwap): unknown;
                fromPartial(object: Partial<_104.MsgSwap>): _104.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _104.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSwapResponse;
                fromJSON(_: any): _104.MsgSwapResponse;
                toJSON(_: _104.MsgSwapResponse): unknown;
                fromPartial(_: Partial<_104.MsgSwapResponse>): _104.MsgSwapResponse;
            };
            MsgMakeOutcomePayment: {
                encode(message: _104.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgMakeOutcomePayment;
                fromJSON(object: any): _104.MsgMakeOutcomePayment;
                toJSON(message: _104.MsgMakeOutcomePayment): unknown;
                fromPartial(object: Partial<_104.MsgMakeOutcomePayment>): _104.MsgMakeOutcomePayment;
            };
            MsgMakeOutcomePaymentResponse: {
                encode(_: _104.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgMakeOutcomePaymentResponse;
                fromJSON(_: any): _104.MsgMakeOutcomePaymentResponse;
                toJSON(_: _104.MsgMakeOutcomePaymentResponse): unknown;
                fromPartial(_: Partial<_104.MsgMakeOutcomePaymentResponse>): _104.MsgMakeOutcomePaymentResponse;
            };
            MsgWithdrawShare: {
                encode(message: _104.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgWithdrawShare;
                fromJSON(object: any): _104.MsgWithdrawShare;
                toJSON(message: _104.MsgWithdrawShare): unknown;
                fromPartial(object: Partial<_104.MsgWithdrawShare>): _104.MsgWithdrawShare;
            };
            MsgWithdrawShareResponse: {
                encode(_: _104.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgWithdrawShareResponse;
                fromJSON(_: any): _104.MsgWithdrawShareResponse;
                toJSON(_: _104.MsgWithdrawShareResponse): unknown;
                fromPartial(_: Partial<_104.MsgWithdrawShareResponse>): _104.MsgWithdrawShareResponse;
            };
            MsgWithdrawReserve: {
                encode(message: _104.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgWithdrawReserve;
                fromJSON(object: any): _104.MsgWithdrawReserve;
                toJSON(message: _104.MsgWithdrawReserve): unknown;
                fromPartial(object: Partial<_104.MsgWithdrawReserve>): _104.MsgWithdrawReserve;
            };
            MsgWithdrawReserveResponse: {
                encode(_: _104.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgWithdrawReserveResponse;
                fromJSON(_: any): _104.MsgWithdrawReserveResponse;
                toJSON(_: _104.MsgWithdrawReserveResponse): unknown;
                fromPartial(_: Partial<_104.MsgWithdrawReserveResponse>): _104.MsgWithdrawReserveResponse;
            };
            QueryBondsRequest: {
                encode(_: _103.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBondsRequest;
                fromJSON(_: any): _103.QueryBondsRequest;
                toJSON(_: _103.QueryBondsRequest): unknown;
                fromPartial(_: Partial<_103.QueryBondsRequest>): _103.QueryBondsRequest;
            };
            QueryBondsResponse: {
                encode(message: _103.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBondsResponse;
                fromJSON(object: any): _103.QueryBondsResponse;
                toJSON(message: _103.QueryBondsResponse): unknown;
                fromPartial(object: Partial<_103.QueryBondsResponse>): _103.QueryBondsResponse;
            };
            QueryBondsDetailedRequest: {
                encode(_: _103.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBondsDetailedRequest;
                fromJSON(_: any): _103.QueryBondsDetailedRequest;
                toJSON(_: _103.QueryBondsDetailedRequest): unknown;
                fromPartial(_: Partial<_103.QueryBondsDetailedRequest>): _103.QueryBondsDetailedRequest;
            };
            QueryBondsDetailedResponse: {
                encode(message: _103.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBondsDetailedResponse;
                fromJSON(object: any): _103.QueryBondsDetailedResponse;
                toJSON(message: _103.QueryBondsDetailedResponse): unknown;
                fromPartial(object: Partial<_103.QueryBondsDetailedResponse>): _103.QueryBondsDetailedResponse;
            };
            QueryBondRequest: {
                encode(message: _103.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBondRequest;
                fromJSON(object: any): _103.QueryBondRequest;
                toJSON(message: _103.QueryBondRequest): unknown;
                fromPartial(object: Partial<_103.QueryBondRequest>): _103.QueryBondRequest;
            };
            QueryBondResponse: {
                encode(message: _103.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBondResponse;
                fromJSON(object: any): _103.QueryBondResponse;
                toJSON(message: _103.QueryBondResponse): unknown;
                fromPartial(object: Partial<_103.QueryBondResponse>): _103.QueryBondResponse;
            };
            QueryBatchRequest: {
                encode(message: _103.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBatchRequest;
                fromJSON(object: any): _103.QueryBatchRequest;
                toJSON(message: _103.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_103.QueryBatchRequest>): _103.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _103.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBatchResponse;
                fromJSON(object: any): _103.QueryBatchResponse;
                toJSON(message: _103.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_103.QueryBatchResponse>): _103.QueryBatchResponse;
            };
            QueryLastBatchRequest: {
                encode(message: _103.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryLastBatchRequest;
                fromJSON(object: any): _103.QueryLastBatchRequest;
                toJSON(message: _103.QueryLastBatchRequest): unknown;
                fromPartial(object: Partial<_103.QueryLastBatchRequest>): _103.QueryLastBatchRequest;
            };
            QueryLastBatchResponse: {
                encode(message: _103.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryLastBatchResponse;
                fromJSON(object: any): _103.QueryLastBatchResponse;
                toJSON(message: _103.QueryLastBatchResponse): unknown;
                fromPartial(object: Partial<_103.QueryLastBatchResponse>): _103.QueryLastBatchResponse;
            };
            QueryCurrentPriceRequest: {
                encode(message: _103.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentPriceRequest;
                fromJSON(object: any): _103.QueryCurrentPriceRequest;
                toJSON(message: _103.QueryCurrentPriceRequest): unknown;
                fromPartial(object: Partial<_103.QueryCurrentPriceRequest>): _103.QueryCurrentPriceRequest;
            };
            QueryCurrentPriceResponse: {
                encode(message: _103.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentPriceResponse;
                fromJSON(object: any): _103.QueryCurrentPriceResponse;
                toJSON(message: _103.QueryCurrentPriceResponse): unknown;
                fromPartial(object: Partial<_103.QueryCurrentPriceResponse>): _103.QueryCurrentPriceResponse;
            };
            QueryCurrentReserveRequest: {
                encode(message: _103.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentReserveRequest;
                fromJSON(object: any): _103.QueryCurrentReserveRequest;
                toJSON(message: _103.QueryCurrentReserveRequest): unknown;
                fromPartial(object: Partial<_103.QueryCurrentReserveRequest>): _103.QueryCurrentReserveRequest;
            };
            QueryCurrentReserveResponse: {
                encode(message: _103.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentReserveResponse;
                fromJSON(object: any): _103.QueryCurrentReserveResponse;
                toJSON(message: _103.QueryCurrentReserveResponse): unknown;
                fromPartial(object: Partial<_103.QueryCurrentReserveResponse>): _103.QueryCurrentReserveResponse;
            };
            QueryAvailableReserveRequest: {
                encode(message: _103.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAvailableReserveRequest;
                fromJSON(object: any): _103.QueryAvailableReserveRequest;
                toJSON(message: _103.QueryAvailableReserveRequest): unknown;
                fromPartial(object: Partial<_103.QueryAvailableReserveRequest>): _103.QueryAvailableReserveRequest;
            };
            QueryAvailableReserveResponse: {
                encode(message: _103.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAvailableReserveResponse;
                fromJSON(object: any): _103.QueryAvailableReserveResponse;
                toJSON(message: _103.QueryAvailableReserveResponse): unknown;
                fromPartial(object: Partial<_103.QueryAvailableReserveResponse>): _103.QueryAvailableReserveResponse;
            };
            QueryCustomPriceRequest: {
                encode(message: _103.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCustomPriceRequest;
                fromJSON(object: any): _103.QueryCustomPriceRequest;
                toJSON(message: _103.QueryCustomPriceRequest): unknown;
                fromPartial(object: Partial<_103.QueryCustomPriceRequest>): _103.QueryCustomPriceRequest;
            };
            QueryCustomPriceResponse: {
                encode(message: _103.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCustomPriceResponse;
                fromJSON(object: any): _103.QueryCustomPriceResponse;
                toJSON(message: _103.QueryCustomPriceResponse): unknown;
                fromPartial(object: Partial<_103.QueryCustomPriceResponse>): _103.QueryCustomPriceResponse;
            };
            QueryBuyPriceRequest: {
                encode(message: _103.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBuyPriceRequest;
                fromJSON(object: any): _103.QueryBuyPriceRequest;
                toJSON(message: _103.QueryBuyPriceRequest): unknown;
                fromPartial(object: Partial<_103.QueryBuyPriceRequest>): _103.QueryBuyPriceRequest;
            };
            QueryBuyPriceResponse: {
                encode(message: _103.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryBuyPriceResponse;
                fromJSON(object: any): _103.QueryBuyPriceResponse;
                toJSON(message: _103.QueryBuyPriceResponse): unknown;
                fromPartial(object: Partial<_103.QueryBuyPriceResponse>): _103.QueryBuyPriceResponse;
            };
            QuerySellReturnRequest: {
                encode(message: _103.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QuerySellReturnRequest;
                fromJSON(object: any): _103.QuerySellReturnRequest;
                toJSON(message: _103.QuerySellReturnRequest): unknown;
                fromPartial(object: Partial<_103.QuerySellReturnRequest>): _103.QuerySellReturnRequest;
            };
            QuerySellReturnResponse: {
                encode(message: _103.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QuerySellReturnResponse;
                fromJSON(object: any): _103.QuerySellReturnResponse;
                toJSON(message: _103.QuerySellReturnResponse): unknown;
                fromPartial(object: Partial<_103.QuerySellReturnResponse>): _103.QuerySellReturnResponse;
            };
            QuerySwapReturnRequest: {
                encode(message: _103.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QuerySwapReturnRequest;
                fromJSON(object: any): _103.QuerySwapReturnRequest;
                toJSON(message: _103.QuerySwapReturnRequest): unknown;
                fromPartial(object: Partial<_103.QuerySwapReturnRequest>): _103.QuerySwapReturnRequest;
            };
            QuerySwapReturnResponse: {
                encode(message: _103.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QuerySwapReturnResponse;
                fromJSON(object: any): _103.QuerySwapReturnResponse;
                toJSON(message: _103.QuerySwapReturnResponse): unknown;
                fromPartial(object: Partial<_103.QuerySwapReturnResponse>): _103.QuerySwapReturnResponse;
            };
            QueryAlphaMaximumsRequest: {
                encode(message: _103.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAlphaMaximumsRequest;
                fromJSON(object: any): _103.QueryAlphaMaximumsRequest;
                toJSON(message: _103.QueryAlphaMaximumsRequest): unknown;
                fromPartial(object: Partial<_103.QueryAlphaMaximumsRequest>): _103.QueryAlphaMaximumsRequest;
            };
            QueryAlphaMaximumsResponse: {
                encode(message: _103.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAlphaMaximumsResponse;
                fromJSON(object: any): _103.QueryAlphaMaximumsResponse;
                toJSON(message: _103.QueryAlphaMaximumsResponse): unknown;
                fromPartial(object: Partial<_103.QueryAlphaMaximumsResponse>): _103.QueryAlphaMaximumsResponse;
            };
            QueryParamsRequest: {
                encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                fromJSON(_: any): _103.QueryParamsRequest;
                toJSON(_: _103.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponse;
                fromJSON(object: any): _103.QueryParamsResponse;
                toJSON(message: _103.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                fromJSON(object: any): _102.GenesisState;
                toJSON(message: _102.GenesisState): unknown;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
            };
            FunctionParam: {
                encode(message: _101.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.FunctionParam;
                fromJSON(object: any): _101.FunctionParam;
                toJSON(message: _101.FunctionParam): unknown;
                fromPartial(object: Partial<_101.FunctionParam>): _101.FunctionParam;
            };
            BondDetails: {
                encode(message: _101.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BondDetails;
                fromJSON(object: any): _101.BondDetails;
                toJSON(message: _101.BondDetails): unknown;
                fromPartial(object: Partial<_101.BondDetails>): _101.BondDetails;
            };
            Bond: {
                encode(message: _101.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Bond;
                fromJSON(object: any): _101.Bond;
                toJSON(message: _101.Bond): unknown;
                fromPartial(object: Partial<_101.Bond>): _101.Bond;
            };
            BaseOrder: {
                encode(message: _101.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BaseOrder;
                fromJSON(object: any): _101.BaseOrder;
                toJSON(message: _101.BaseOrder): unknown;
                fromPartial(object: Partial<_101.BaseOrder>): _101.BaseOrder;
            };
            BuyOrder: {
                encode(message: _101.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BuyOrder;
                fromJSON(object: any): _101.BuyOrder;
                toJSON(message: _101.BuyOrder): unknown;
                fromPartial(object: Partial<_101.BuyOrder>): _101.BuyOrder;
            };
            SellOrder: {
                encode(message: _101.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.SellOrder;
                fromJSON(object: any): _101.SellOrder;
                toJSON(message: _101.SellOrder): unknown;
                fromPartial(object: Partial<_101.SellOrder>): _101.SellOrder;
            };
            SwapOrder: {
                encode(message: _101.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.SwapOrder;
                fromJSON(object: any): _101.SwapOrder;
                toJSON(message: _101.SwapOrder): unknown;
                fromPartial(object: Partial<_101.SwapOrder>): _101.SwapOrder;
            };
            Batch: {
                encode(message: _101.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Batch;
                fromJSON(object: any): _101.Batch;
                toJSON(message: _101.Batch): unknown;
                fromPartial(object: Partial<_101.Batch>): _101.Batch;
            };
            Params: {
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                fromJSON(object: any): _101.Params;
                toJSON(message: _101.Params): unknown;
                fromPartial(object: Partial<_101.Params>): _101.Params;
            };
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                entityList(request: _108.QueryEntityListRequest): Promise<_108.QueryEntityListResponse>;
                entityDoc(request: _108.QueryEntityDocRequest): Promise<_108.QueryEntityDocResponse>;
                entityConfig(request?: _108.QueryEntityConfigRequest): Promise<_108.QueryEntityConfigResponse>;
            };
            MsgCreateEntity: {
                encode(message: _109.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreateEntity;
                fromJSON(object: any): _109.MsgCreateEntity;
                toJSON(message: _109.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_109.MsgCreateEntity>): _109.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _109.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreateEntityResponse;
                fromJSON(object: any): _109.MsgCreateEntityResponse;
                toJSON(message: _109.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_109.MsgCreateEntityResponse>): _109.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _109.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgUpdateEntity;
                fromJSON(object: any): _109.MsgUpdateEntity;
                toJSON(message: _109.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_109.MsgUpdateEntity>): _109.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _109.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgUpdateEntityResponse;
                fromJSON(_: any): _109.MsgUpdateEntityResponse;
                toJSON(_: _109.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_109.MsgUpdateEntityResponse>): _109.MsgUpdateEntityResponse;
            };
            MsgTransferEntity: {
                encode(message: _109.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTransferEntity;
                fromJSON(object: any): _109.MsgTransferEntity;
                toJSON(message: _109.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_109.MsgTransferEntity>): _109.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _109.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTransferEntityResponse;
                fromJSON(_: any): _109.MsgTransferEntityResponse;
                toJSON(_: _109.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_109.MsgTransferEntityResponse>): _109.MsgTransferEntityResponse;
            };
            QueryEntityListRequest: {
                encode(message: _108.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEntityListRequest;
                fromJSON(object: any): _108.QueryEntityListRequest;
                toJSON(message: _108.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_108.QueryEntityListRequest>): _108.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(_: _108.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEntityListResponse;
                fromJSON(_: any): _108.QueryEntityListResponse;
                toJSON(_: _108.QueryEntityListResponse): unknown;
                fromPartial(_: Partial<_108.QueryEntityListResponse>): _108.QueryEntityListResponse;
            };
            QueryEntityDocRequest: {
                encode(message: _108.QueryEntityDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEntityDocRequest;
                fromJSON(object: any): _108.QueryEntityDocRequest;
                toJSON(message: _108.QueryEntityDocRequest): unknown;
                fromPartial(object: Partial<_108.QueryEntityDocRequest>): _108.QueryEntityDocRequest;
            };
            QueryEntityDocResponse: {
                encode(_: _108.QueryEntityDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEntityDocResponse;
                fromJSON(_: any): _108.QueryEntityDocResponse;
                toJSON(_: _108.QueryEntityDocResponse): unknown;
                fromPartial(_: Partial<_108.QueryEntityDocResponse>): _108.QueryEntityDocResponse;
            };
            QueryEntityConfigRequest: {
                encode(_: _108.QueryEntityConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEntityConfigRequest;
                fromJSON(_: any): _108.QueryEntityConfigRequest;
                toJSON(_: _108.QueryEntityConfigRequest): unknown;
                fromPartial(_: Partial<_108.QueryEntityConfigRequest>): _108.QueryEntityConfigRequest;
            };
            QueryEntityConfigResponse_MapEntry: {
                encode(message: _108.QueryEntityConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEntityConfigResponse_MapEntry;
                fromJSON(object: any): _108.QueryEntityConfigResponse_MapEntry;
                toJSON(message: _108.QueryEntityConfigResponse_MapEntry): unknown;
                fromPartial(object: Partial<_108.QueryEntityConfigResponse_MapEntry>): _108.QueryEntityConfigResponse_MapEntry;
            };
            QueryEntityConfigResponse: {
                encode(message: _108.QueryEntityConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEntityConfigResponse;
                fromJSON(object: any): _108.QueryEntityConfigResponse;
                toJSON(message: _108.QueryEntityConfigResponse): unknown;
                fromPartial(object: Partial<_108.QueryEntityConfigResponse>): _108.QueryEntityConfigResponse;
            };
            InitializeNftContract: {
                encode(message: _107.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.InitializeNftContract;
                fromJSON(object: any): _107.InitializeNftContract;
                toJSON(message: _107.InitializeNftContract): unknown;
                fromPartial(object: Partial<_107.InitializeNftContract>): _107.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
            Params: {
                encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
                fromJSON(object: any): _105.Params;
                toJSON(message: _105.Params): unknown;
                fromPartial(object: Partial<_105.Params>): _105.Params;
            };
            EntityDoc: {
                encode(_: _105.EntityDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EntityDoc;
                fromJSON(_: any): _105.EntityDoc;
                toJSON(_: _105.EntityDoc): unknown;
                fromPartial(_: Partial<_105.EntityDoc>): _105.EntityDoc;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request: _113.QueryIidDocumentsRequest): Promise<_113.QueryIidDocumentsResponse>;
                iidDocument(request: _113.QueryIidDocumentRequest): Promise<_113.QueryIidDocumentResponse>;
                metaData(request: _113.QueryIidMetaDataRequest): Promise<_113.QueryIidMetaDataResponse>;
            };
            Verification: {
                encode(message: _114.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Verification;
                fromJSON(object: any): _114.Verification;
                toJSON(message: _114.Verification): unknown;
                fromPartial(object: Partial<_114.Verification>): _114.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _114.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateIidDocument;
                fromJSON(object: any): _114.MsgCreateIidDocument;
                toJSON(message: _114.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_114.MsgCreateIidDocument>): _114.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _114.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _114.MsgCreateIidDocumentResponse;
                toJSON(_: _114.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_114.MsgCreateIidDocumentResponse>): _114.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _114.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateIidDocument;
                fromJSON(object: any): _114.MsgUpdateIidDocument;
                toJSON(message: _114.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_114.MsgUpdateIidDocument>): _114.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _114.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _114.MsgUpdateIidDocumentResponse;
                toJSON(_: _114.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateIidDocumentResponse>): _114.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _114.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddVerification;
                fromJSON(object: any): _114.MsgAddVerification;
                toJSON(message: _114.MsgAddVerification): unknown;
                fromPartial(object: Partial<_114.MsgAddVerification>): _114.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _114.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddVerificationResponse;
                fromJSON(_: any): _114.MsgAddVerificationResponse;
                toJSON(_: _114.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_114.MsgAddVerificationResponse>): _114.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _114.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSetVerificationRelationships;
                fromJSON(object: any): _114.MsgSetVerificationRelationships;
                toJSON(message: _114.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_114.MsgSetVerificationRelationships>): _114.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _114.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _114.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _114.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_114.MsgSetVerificationRelationshipsResponse>): _114.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _114.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRevokeVerification;
                fromJSON(object: any): _114.MsgRevokeVerification;
                toJSON(message: _114.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_114.MsgRevokeVerification>): _114.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _114.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRevokeVerificationResponse;
                fromJSON(_: any): _114.MsgRevokeVerificationResponse;
                toJSON(_: _114.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_114.MsgRevokeVerificationResponse>): _114.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _114.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddService;
                fromJSON(object: any): _114.MsgAddService;
                toJSON(message: _114.MsgAddService): unknown;
                fromPartial(object: Partial<_114.MsgAddService>): _114.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _114.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddServiceResponse;
                fromJSON(_: any): _114.MsgAddServiceResponse;
                toJSON(_: _114.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_114.MsgAddServiceResponse>): _114.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _114.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteService;
                fromJSON(object: any): _114.MsgDeleteService;
                toJSON(message: _114.MsgDeleteService): unknown;
                fromPartial(object: Partial<_114.MsgDeleteService>): _114.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _114.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteServiceResponse;
                fromJSON(_: any): _114.MsgDeleteServiceResponse;
                toJSON(_: _114.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_114.MsgDeleteServiceResponse>): _114.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _114.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddController;
                fromJSON(object: any): _114.MsgAddController;
                toJSON(message: _114.MsgAddController): unknown;
                fromPartial(object: Partial<_114.MsgAddController>): _114.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _114.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddControllerResponse;
                fromJSON(_: any): _114.MsgAddControllerResponse;
                toJSON(_: _114.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_114.MsgAddControllerResponse>): _114.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _114.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteController;
                fromJSON(object: any): _114.MsgDeleteController;
                toJSON(message: _114.MsgDeleteController): unknown;
                fromPartial(object: Partial<_114.MsgDeleteController>): _114.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _114.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteControllerResponse;
                fromJSON(_: any): _114.MsgDeleteControllerResponse;
                toJSON(_: _114.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_114.MsgDeleteControllerResponse>): _114.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _114.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddLinkedResource;
                fromJSON(object: any): _114.MsgAddLinkedResource;
                toJSON(message: _114.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_114.MsgAddLinkedResource>): _114.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _114.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteLinkedResource;
                fromJSON(object: any): _114.MsgDeleteLinkedResource;
                toJSON(message: _114.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_114.MsgDeleteLinkedResource>): _114.MsgDeleteLinkedResource;
            };
            MsgAddLinkedEntity: {
                encode(message: _114.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddLinkedEntity;
                fromJSON(object: any): _114.MsgAddLinkedEntity;
                toJSON(message: _114.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_114.MsgAddLinkedEntity>): _114.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _114.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteLinkedEntity;
                fromJSON(object: any): _114.MsgDeleteLinkedEntity;
                toJSON(message: _114.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_114.MsgDeleteLinkedEntity>): _114.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _114.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddAccordedRight;
                fromJSON(object: any): _114.MsgAddAccordedRight;
                toJSON(message: _114.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_114.MsgAddAccordedRight>): _114.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _114.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteAccordedRight;
                fromJSON(object: any): _114.MsgDeleteAccordedRight;
                toJSON(message: _114.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_114.MsgDeleteAccordedRight>): _114.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _114.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddIidContext;
                fromJSON(object: any): _114.MsgAddIidContext;
                toJSON(message: _114.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_114.MsgAddIidContext>): _114.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _114.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeactivateIID;
                fromJSON(object: any): _114.MsgDeactivateIID;
                toJSON(message: _114.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_114.MsgDeactivateIID>): _114.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _114.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteIidContext;
                fromJSON(object: any): _114.MsgDeleteIidContext;
                toJSON(message: _114.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_114.MsgDeleteIidContext>): _114.MsgDeleteIidContext;
            };
            MsgUpdateIidMeta: {
                encode(message: _114.MsgUpdateIidMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateIidMeta;
                fromJSON(object: any): _114.MsgUpdateIidMeta;
                toJSON(message: _114.MsgUpdateIidMeta): unknown;
                fromPartial(object: Partial<_114.MsgUpdateIidMeta>): _114.MsgUpdateIidMeta;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _114.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _114.MsgAddLinkedResourceResponse;
                toJSON(_: _114.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_114.MsgAddLinkedResourceResponse>): _114.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _114.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _114.MsgDeleteLinkedResourceResponse;
                toJSON(_: _114.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_114.MsgDeleteLinkedResourceResponse>): _114.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _114.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _114.MsgAddLinkedEntityResponse;
                toJSON(_: _114.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_114.MsgAddLinkedEntityResponse>): _114.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _114.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _114.MsgDeleteLinkedEntityResponse;
                toJSON(_: _114.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_114.MsgDeleteLinkedEntityResponse>): _114.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _114.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddAccordedRightResponse;
                fromJSON(_: any): _114.MsgAddAccordedRightResponse;
                toJSON(_: _114.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_114.MsgAddAccordedRightResponse>): _114.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _114.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _114.MsgDeleteAccordedRightResponse;
                toJSON(_: _114.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_114.MsgDeleteAccordedRightResponse>): _114.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _114.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddIidContextResponse;
                fromJSON(_: any): _114.MsgAddIidContextResponse;
                toJSON(_: _114.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_114.MsgAddIidContextResponse>): _114.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _114.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeleteIidContextResponse;
                fromJSON(_: any): _114.MsgDeleteIidContextResponse;
                toJSON(_: _114.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_114.MsgDeleteIidContextResponse>): _114.MsgDeleteIidContextResponse;
            };
            MsgUpdateIidMetaResponse: {
                encode(_: _114.MsgUpdateIidMetaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateIidMetaResponse;
                fromJSON(_: any): _114.MsgUpdateIidMetaResponse;
                toJSON(_: _114.MsgUpdateIidMetaResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateIidMetaResponse>): _114.MsgUpdateIidMetaResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _114.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeactivateIIDResponse;
                fromJSON(_: any): _114.MsgDeactivateIIDResponse;
                toJSON(_: _114.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_114.MsgDeactivateIIDResponse>): _114.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _113.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIidDocumentsRequest;
                fromJSON(object: any): _113.QueryIidDocumentsRequest;
                toJSON(message: _113.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_113.QueryIidDocumentsRequest>): _113.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _113.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIidDocumentsResponse;
                fromJSON(object: any): _113.QueryIidDocumentsResponse;
                toJSON(message: _113.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_113.QueryIidDocumentsResponse>): _113.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _113.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIidDocumentRequest;
                fromJSON(object: any): _113.QueryIidDocumentRequest;
                toJSON(message: _113.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_113.QueryIidDocumentRequest>): _113.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _113.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIidDocumentResponse;
                fromJSON(object: any): _113.QueryIidDocumentResponse;
                toJSON(message: _113.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_113.QueryIidDocumentResponse>): _113.QueryIidDocumentResponse;
            };
            QueryIidMetaDataRequest: {
                encode(message: _113.QueryIidMetaDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIidMetaDataRequest;
                fromJSON(object: any): _113.QueryIidMetaDataRequest;
                toJSON(message: _113.QueryIidMetaDataRequest): unknown;
                fromPartial(object: Partial<_113.QueryIidMetaDataRequest>): _113.QueryIidMetaDataRequest;
            };
            QueryIidMetaDataResponse: {
                encode(message: _113.QueryIidMetaDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIidMetaDataResponse;
                fromJSON(object: any): _113.QueryIidMetaDataResponse;
                toJSON(message: _113.QueryIidMetaDataResponse): unknown;
                fromPartial(object: Partial<_113.QueryIidMetaDataResponse>): _113.QueryIidMetaDataResponse;
            };
            Context: {
                encode(message: _112.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Context;
                fromJSON(object: any): _112.Context;
                toJSON(message: _112.Context): unknown;
                fromPartial(object: Partial<_112.Context>): _112.Context;
            };
            IidDocument: {
                encode(message: _112.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IidDocument;
                fromJSON(object: any): _112.IidDocument;
                toJSON(message: _112.IidDocument): unknown;
                fromPartial(object: Partial<_112.IidDocument>): _112.IidDocument;
            };
            AccordedRight: {
                encode(message: _112.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.AccordedRight;
                fromJSON(object: any): _112.AccordedRight;
                toJSON(message: _112.AccordedRight): unknown;
                fromPartial(object: Partial<_112.AccordedRight>): _112.AccordedRight;
            };
            LinkedResource: {
                encode(message: _112.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LinkedResource;
                fromJSON(object: any): _112.LinkedResource;
                toJSON(message: _112.LinkedResource): unknown;
                fromPartial(object: Partial<_112.LinkedResource>): _112.LinkedResource;
            };
            LinkedEntity: {
                encode(message: _112.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LinkedEntity;
                fromJSON(object: any): _112.LinkedEntity;
                toJSON(message: _112.LinkedEntity): unknown;
                fromPartial(object: Partial<_112.LinkedEntity>): _112.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _112.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.VerificationMethod;
                fromJSON(object: any): _112.VerificationMethod;
                toJSON(message: _112.VerificationMethod): unknown;
                fromPartial(object: Partial<_112.VerificationMethod>): _112.VerificationMethod;
            };
            Service: {
                encode(message: _112.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Service;
                fromJSON(object: any): _112.Service;
                toJSON(message: _112.Service): unknown;
                fromPartial(object: Partial<_112.Service>): _112.Service;
            };
            IidMetadata: {
                encode(message: _112.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IidMetadata;
                fromJSON(object: any): _112.IidMetadata;
                toJSON(message: _112.IidMetadata): unknown;
                fromPartial(object: Partial<_112.IidMetadata>): _112.IidMetadata;
            };
            GenesisState: {
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                fromJSON(object: any): _111.GenesisState;
                toJSON(message: _111.GenesisState): unknown;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _110.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.IidDocumentCreatedEvent;
                fromJSON(object: any): _110.IidDocumentCreatedEvent;
                toJSON(message: _110.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_110.IidDocumentCreatedEvent>): _110.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _110.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.IidDocumentUpdatedEvent;
                fromJSON(object: any): _110.IidDocumentUpdatedEvent;
                toJSON(message: _110.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_110.IidDocumentUpdatedEvent>): _110.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace payments {
        const v1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                paymentTemplate(request: _117.QueryPaymentTemplateRequest): Promise<_117.QueryPaymentTemplateResponse>;
                paymentContract(request: _117.QueryPaymentContractRequest): Promise<_117.QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: _117.QueryPaymentContractsByIdPrefixRequest): Promise<_117.QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: _117.QuerySubscriptionRequest): Promise<_117.QuerySubscriptionResponse>;
            };
            MsgSetPaymentContractAuthorisation: {
                encode(message: _118.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSetPaymentContractAuthorisation;
                fromJSON(object: any): _118.MsgSetPaymentContractAuthorisation;
                toJSON(message: _118.MsgSetPaymentContractAuthorisation): unknown;
                fromPartial(object: Partial<_118.MsgSetPaymentContractAuthorisation>): _118.MsgSetPaymentContractAuthorisation;
            };
            MsgSetPaymentContractAuthorisationResponse: {
                encode(_: _118.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSetPaymentContractAuthorisationResponse;
                fromJSON(_: any): _118.MsgSetPaymentContractAuthorisationResponse;
                toJSON(_: _118.MsgSetPaymentContractAuthorisationResponse): unknown;
                fromPartial(_: Partial<_118.MsgSetPaymentContractAuthorisationResponse>): _118.MsgSetPaymentContractAuthorisationResponse;
            };
            MsgCreatePaymentTemplate: {
                encode(message: _118.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreatePaymentTemplate;
                fromJSON(object: any): _118.MsgCreatePaymentTemplate;
                toJSON(message: _118.MsgCreatePaymentTemplate): unknown;
                fromPartial(object: Partial<_118.MsgCreatePaymentTemplate>): _118.MsgCreatePaymentTemplate;
            };
            MsgCreatePaymentTemplateResponse: {
                encode(_: _118.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreatePaymentTemplateResponse;
                fromJSON(_: any): _118.MsgCreatePaymentTemplateResponse;
                toJSON(_: _118.MsgCreatePaymentTemplateResponse): unknown;
                fromPartial(_: Partial<_118.MsgCreatePaymentTemplateResponse>): _118.MsgCreatePaymentTemplateResponse;
            };
            MsgCreatePaymentContract: {
                encode(message: _118.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreatePaymentContract;
                fromJSON(object: any): _118.MsgCreatePaymentContract;
                toJSON(message: _118.MsgCreatePaymentContract): unknown;
                fromPartial(object: Partial<_118.MsgCreatePaymentContract>): _118.MsgCreatePaymentContract;
            };
            MsgCreatePaymentContractResponse: {
                encode(_: _118.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreatePaymentContractResponse;
                fromJSON(_: any): _118.MsgCreatePaymentContractResponse;
                toJSON(_: _118.MsgCreatePaymentContractResponse): unknown;
                fromPartial(_: Partial<_118.MsgCreatePaymentContractResponse>): _118.MsgCreatePaymentContractResponse;
            };
            MsgCreateSubscription: {
                encode(message: _118.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreateSubscription;
                fromJSON(object: any): _118.MsgCreateSubscription;
                toJSON(message: _118.MsgCreateSubscription): unknown;
                fromPartial(object: Partial<_118.MsgCreateSubscription>): _118.MsgCreateSubscription;
            };
            MsgCreateSubscriptionResponse: {
                encode(_: _118.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreateSubscriptionResponse;
                fromJSON(_: any): _118.MsgCreateSubscriptionResponse;
                toJSON(_: _118.MsgCreateSubscriptionResponse): unknown;
                fromPartial(_: Partial<_118.MsgCreateSubscriptionResponse>): _118.MsgCreateSubscriptionResponse;
            };
            MsgGrantDiscount: {
                encode(message: _118.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgGrantDiscount;
                fromJSON(object: any): _118.MsgGrantDiscount;
                toJSON(message: _118.MsgGrantDiscount): unknown;
                fromPartial(object: Partial<_118.MsgGrantDiscount>): _118.MsgGrantDiscount;
            };
            MsgGrantDiscountResponse: {
                encode(_: _118.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgGrantDiscountResponse;
                fromJSON(_: any): _118.MsgGrantDiscountResponse;
                toJSON(_: _118.MsgGrantDiscountResponse): unknown;
                fromPartial(_: Partial<_118.MsgGrantDiscountResponse>): _118.MsgGrantDiscountResponse;
            };
            MsgRevokeDiscount: {
                encode(message: _118.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgRevokeDiscount;
                fromJSON(object: any): _118.MsgRevokeDiscount;
                toJSON(message: _118.MsgRevokeDiscount): unknown;
                fromPartial(object: Partial<_118.MsgRevokeDiscount>): _118.MsgRevokeDiscount;
            };
            MsgRevokeDiscountResponse: {
                encode(_: _118.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgRevokeDiscountResponse;
                fromJSON(_: any): _118.MsgRevokeDiscountResponse;
                toJSON(_: _118.MsgRevokeDiscountResponse): unknown;
                fromPartial(_: Partial<_118.MsgRevokeDiscountResponse>): _118.MsgRevokeDiscountResponse;
            };
            MsgEffectPayment: {
                encode(message: _118.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgEffectPayment;
                fromJSON(object: any): _118.MsgEffectPayment;
                toJSON(message: _118.MsgEffectPayment): unknown;
                fromPartial(object: Partial<_118.MsgEffectPayment>): _118.MsgEffectPayment;
            };
            MsgEffectPaymentResponse: {
                encode(_: _118.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgEffectPaymentResponse;
                fromJSON(_: any): _118.MsgEffectPaymentResponse;
                toJSON(_: _118.MsgEffectPaymentResponse): unknown;
                fromPartial(_: Partial<_118.MsgEffectPaymentResponse>): _118.MsgEffectPaymentResponse;
            };
            QueryPaymentTemplateRequest: {
                encode(message: _117.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPaymentTemplateRequest;
                fromJSON(object: any): _117.QueryPaymentTemplateRequest;
                toJSON(message: _117.QueryPaymentTemplateRequest): unknown;
                fromPartial(object: Partial<_117.QueryPaymentTemplateRequest>): _117.QueryPaymentTemplateRequest;
            };
            QueryPaymentTemplateResponse: {
                encode(message: _117.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPaymentTemplateResponse;
                fromJSON(object: any): _117.QueryPaymentTemplateResponse;
                toJSON(message: _117.QueryPaymentTemplateResponse): unknown;
                fromPartial(object: Partial<_117.QueryPaymentTemplateResponse>): _117.QueryPaymentTemplateResponse;
            };
            QueryPaymentContractRequest: {
                encode(message: _117.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPaymentContractRequest;
                fromJSON(object: any): _117.QueryPaymentContractRequest;
                toJSON(message: _117.QueryPaymentContractRequest): unknown;
                fromPartial(object: Partial<_117.QueryPaymentContractRequest>): _117.QueryPaymentContractRequest;
            };
            QueryPaymentContractResponse: {
                encode(message: _117.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPaymentContractResponse;
                fromJSON(object: any): _117.QueryPaymentContractResponse;
                toJSON(message: _117.QueryPaymentContractResponse): unknown;
                fromPartial(object: Partial<_117.QueryPaymentContractResponse>): _117.QueryPaymentContractResponse;
            };
            QueryPaymentContractsByIdPrefixRequest: {
                encode(message: _117.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPaymentContractsByIdPrefixRequest;
                fromJSON(object: any): _117.QueryPaymentContractsByIdPrefixRequest;
                toJSON(message: _117.QueryPaymentContractsByIdPrefixRequest): unknown;
                fromPartial(object: Partial<_117.QueryPaymentContractsByIdPrefixRequest>): _117.QueryPaymentContractsByIdPrefixRequest;
            };
            QueryPaymentContractsByIdPrefixResponse: {
                encode(message: _117.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPaymentContractsByIdPrefixResponse;
                fromJSON(object: any): _117.QueryPaymentContractsByIdPrefixResponse;
                toJSON(message: _117.QueryPaymentContractsByIdPrefixResponse): unknown;
                fromPartial(object: Partial<_117.QueryPaymentContractsByIdPrefixResponse>): _117.QueryPaymentContractsByIdPrefixResponse;
            };
            QuerySubscriptionRequest: {
                encode(message: _117.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QuerySubscriptionRequest;
                fromJSON(object: any): _117.QuerySubscriptionRequest;
                toJSON(message: _117.QuerySubscriptionRequest): unknown;
                fromPartial(object: Partial<_117.QuerySubscriptionRequest>): _117.QuerySubscriptionRequest;
            };
            QuerySubscriptionResponse: {
                encode(message: _117.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QuerySubscriptionResponse;
                fromJSON(object: any): _117.QuerySubscriptionResponse;
                toJSON(message: _117.QuerySubscriptionResponse): unknown;
                fromPartial(object: Partial<_117.QuerySubscriptionResponse>): _117.QuerySubscriptionResponse;
            };
            PaymentTemplate: {
                encode(message: _116.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PaymentTemplate;
                fromJSON(object: any): _116.PaymentTemplate;
                toJSON(message: _116.PaymentTemplate): unknown;
                fromPartial(object: Partial<_116.PaymentTemplate>): _116.PaymentTemplate;
            };
            Discount: {
                encode(message: _116.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Discount;
                fromJSON(object: any): _116.Discount;
                toJSON(message: _116.Discount): unknown;
                fromPartial(object: Partial<_116.Discount>): _116.Discount;
            };
            DistributionShare: {
                encode(message: _116.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.DistributionShare;
                fromJSON(object: any): _116.DistributionShare;
                toJSON(message: _116.DistributionShare): unknown;
                fromPartial(object: Partial<_116.DistributionShare>): _116.DistributionShare;
            };
            PaymentContract: {
                encode(message: _116.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PaymentContract;
                fromJSON(object: any): _116.PaymentContract;
                toJSON(message: _116.PaymentContract): unknown;
                fromPartial(object: Partial<_116.PaymentContract>): _116.PaymentContract;
            };
            Subscription: {
                encode(message: _116.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Subscription;
                fromJSON(object: any): _116.Subscription;
                toJSON(message: _116.Subscription): unknown;
                fromPartial(object: Partial<_116.Subscription>): _116.Subscription;
            };
            BlockPeriod: {
                encode(message: _116.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.BlockPeriod;
                fromJSON(object: any): _116.BlockPeriod;
                toJSON(message: _116.BlockPeriod): unknown;
                fromPartial(object: Partial<_116.BlockPeriod>): _116.BlockPeriod;
            };
            TimePeriod: {
                encode(message: _116.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.TimePeriod;
                fromJSON(object: any): _116.TimePeriod;
                toJSON(message: _116.TimePeriod): unknown;
                fromPartial(object: Partial<_116.TimePeriod>): _116.TimePeriod;
            };
            TestPeriod: {
                encode(message: _116.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.TestPeriod;
                fromJSON(object: any): _116.TestPeriod;
                toJSON(message: _116.TestPeriod): unknown;
                fromPartial(object: Partial<_116.TestPeriod>): _116.TestPeriod;
            };
            GenesisState: {
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GenesisState;
                fromJSON(object: any): _115.GenesisState;
                toJSON(message: _115.GenesisState): unknown;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
            };
        };
    }
    namespace project {
        const v1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                projectDoc(request: _121.QueryProjectDocRequest): Promise<_121.QueryProjectDocResponse>;
                projectAccounts(request: _121.QueryProjectAccountsRequest): Promise<_121.QueryProjectAccountsResponse>;
                projectTx(request: _121.QueryProjectTxRequest): Promise<_121.QueryProjectTxResponse>;
                params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
            };
            MsgCreateProject: {
                encode(message: _122.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateProject;
                fromJSON(object: any): _122.MsgCreateProject;
                toJSON(message: _122.MsgCreateProject): unknown;
                fromPartial(object: Partial<_122.MsgCreateProject>): _122.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(_: _122.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateProjectResponse;
                fromJSON(_: any): _122.MsgCreateProjectResponse;
                toJSON(_: _122.MsgCreateProjectResponse): unknown;
                fromPartial(_: Partial<_122.MsgCreateProjectResponse>): _122.MsgCreateProjectResponse;
            };
            MsgUpdateProjectStatus: {
                encode(message: _122.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateProjectStatus;
                fromJSON(object: any): _122.MsgUpdateProjectStatus;
                toJSON(message: _122.MsgUpdateProjectStatus): unknown;
                fromPartial(object: Partial<_122.MsgUpdateProjectStatus>): _122.MsgUpdateProjectStatus;
            };
            MsgUpdateProjectStatusResponse: {
                encode(_: _122.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateProjectStatusResponse;
                fromJSON(_: any): _122.MsgUpdateProjectStatusResponse;
                toJSON(_: _122.MsgUpdateProjectStatusResponse): unknown;
                fromPartial(_: Partial<_122.MsgUpdateProjectStatusResponse>): _122.MsgUpdateProjectStatusResponse;
            };
            MsgCreateAgent: {
                encode(message: _122.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateAgent;
                fromJSON(object: any): _122.MsgCreateAgent;
                toJSON(message: _122.MsgCreateAgent): unknown;
                fromPartial(object: Partial<_122.MsgCreateAgent>): _122.MsgCreateAgent;
            };
            MsgCreateAgentResponse: {
                encode(_: _122.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateAgentResponse;
                fromJSON(_: any): _122.MsgCreateAgentResponse;
                toJSON(_: _122.MsgCreateAgentResponse): unknown;
                fromPartial(_: Partial<_122.MsgCreateAgentResponse>): _122.MsgCreateAgentResponse;
            };
            MsgUpdateAgent: {
                encode(message: _122.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateAgent;
                fromJSON(object: any): _122.MsgUpdateAgent;
                toJSON(message: _122.MsgUpdateAgent): unknown;
                fromPartial(object: Partial<_122.MsgUpdateAgent>): _122.MsgUpdateAgent;
            };
            MsgUpdateAgentResponse: {
                encode(_: _122.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateAgentResponse;
                fromJSON(_: any): _122.MsgUpdateAgentResponse;
                toJSON(_: _122.MsgUpdateAgentResponse): unknown;
                fromPartial(_: Partial<_122.MsgUpdateAgentResponse>): _122.MsgUpdateAgentResponse;
            };
            MsgCreateClaim: {
                encode(message: _122.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateClaim;
                fromJSON(object: any): _122.MsgCreateClaim;
                toJSON(message: _122.MsgCreateClaim): unknown;
                fromPartial(object: Partial<_122.MsgCreateClaim>): _122.MsgCreateClaim;
            };
            MsgCreateClaimResponse: {
                encode(_: _122.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateClaimResponse;
                fromJSON(_: any): _122.MsgCreateClaimResponse;
                toJSON(_: _122.MsgCreateClaimResponse): unknown;
                fromPartial(_: Partial<_122.MsgCreateClaimResponse>): _122.MsgCreateClaimResponse;
            };
            MsgCreateEvaluation: {
                encode(message: _122.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateEvaluation;
                fromJSON(object: any): _122.MsgCreateEvaluation;
                toJSON(message: _122.MsgCreateEvaluation): unknown;
                fromPartial(object: Partial<_122.MsgCreateEvaluation>): _122.MsgCreateEvaluation;
            };
            MsgCreateEvaluationResponse: {
                encode(_: _122.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateEvaluationResponse;
                fromJSON(_: any): _122.MsgCreateEvaluationResponse;
                toJSON(_: _122.MsgCreateEvaluationResponse): unknown;
                fromPartial(_: Partial<_122.MsgCreateEvaluationResponse>): _122.MsgCreateEvaluationResponse;
            };
            MsgWithdrawFunds: {
                encode(message: _122.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgWithdrawFunds;
                fromJSON(object: any): _122.MsgWithdrawFunds;
                toJSON(message: _122.MsgWithdrawFunds): unknown;
                fromPartial(object: Partial<_122.MsgWithdrawFunds>): _122.MsgWithdrawFunds;
            };
            MsgWithdrawFundsResponse: {
                encode(_: _122.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgWithdrawFundsResponse;
                fromJSON(_: any): _122.MsgWithdrawFundsResponse;
                toJSON(_: _122.MsgWithdrawFundsResponse): unknown;
                fromPartial(_: Partial<_122.MsgWithdrawFundsResponse>): _122.MsgWithdrawFundsResponse;
            };
            MsgUpdateProjectDoc: {
                encode(message: _122.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateProjectDoc;
                fromJSON(object: any): _122.MsgUpdateProjectDoc;
                toJSON(message: _122.MsgUpdateProjectDoc): unknown;
                fromPartial(object: Partial<_122.MsgUpdateProjectDoc>): _122.MsgUpdateProjectDoc;
            };
            MsgUpdateProjectDocResponse: {
                encode(_: _122.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateProjectDocResponse;
                fromJSON(_: any): _122.MsgUpdateProjectDocResponse;
                toJSON(_: _122.MsgUpdateProjectDocResponse): unknown;
                fromPartial(_: Partial<_122.MsgUpdateProjectDocResponse>): _122.MsgUpdateProjectDocResponse;
            };
            QueryProjectDocRequest: {
                encode(message: _121.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryProjectDocRequest;
                fromJSON(object: any): _121.QueryProjectDocRequest;
                toJSON(message: _121.QueryProjectDocRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectDocRequest>): _121.QueryProjectDocRequest;
            };
            QueryProjectDocResponse: {
                encode(message: _121.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryProjectDocResponse;
                fromJSON(object: any): _121.QueryProjectDocResponse;
                toJSON(message: _121.QueryProjectDocResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectDocResponse>): _121.QueryProjectDocResponse;
            };
            QueryProjectAccountsRequest: {
                encode(message: _121.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryProjectAccountsRequest;
                fromJSON(object: any): _121.QueryProjectAccountsRequest;
                toJSON(message: _121.QueryProjectAccountsRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectAccountsRequest>): _121.QueryProjectAccountsRequest;
            };
            QueryProjectAccountsResponse: {
                encode(message: _121.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryProjectAccountsResponse;
                fromJSON(object: any): _121.QueryProjectAccountsResponse;
                toJSON(message: _121.QueryProjectAccountsResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectAccountsResponse>): _121.QueryProjectAccountsResponse;
            };
            QueryProjectTxRequest: {
                encode(message: _121.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryProjectTxRequest;
                fromJSON(object: any): _121.QueryProjectTxRequest;
                toJSON(message: _121.QueryProjectTxRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectTxRequest>): _121.QueryProjectTxRequest;
            };
            QueryProjectTxResponse: {
                encode(message: _121.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryProjectTxResponse;
                fromJSON(object: any): _121.QueryProjectTxResponse;
                toJSON(message: _121.QueryProjectTxResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectTxResponse>): _121.QueryProjectTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _121.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryParamsRequest;
                fromJSON(_: any): _121.QueryParamsRequest;
                toJSON(_: _121.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_121.QueryParamsRequest>): _121.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _121.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryParamsResponse;
                fromJSON(object: any): _121.QueryParamsResponse;
                toJSON(message: _121.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_121.QueryParamsResponse>): _121.QueryParamsResponse;
            };
            UpdateProjectStatusDoc: {
                encode(message: _120.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UpdateProjectStatusDoc;
                fromJSON(object: any): _120.UpdateProjectStatusDoc;
                toJSON(message: _120.UpdateProjectStatusDoc): unknown;
                fromPartial(object: Partial<_120.UpdateProjectStatusDoc>): _120.UpdateProjectStatusDoc;
            };
            CreateAgentDoc: {
                encode(message: _120.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.CreateAgentDoc;
                fromJSON(object: any): _120.CreateAgentDoc;
                toJSON(message: _120.CreateAgentDoc): unknown;
                fromPartial(object: Partial<_120.CreateAgentDoc>): _120.CreateAgentDoc;
            };
            UpdateAgentDoc: {
                encode(message: _120.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UpdateAgentDoc;
                fromJSON(object: any): _120.UpdateAgentDoc;
                toJSON(message: _120.UpdateAgentDoc): unknown;
                fromPartial(object: Partial<_120.UpdateAgentDoc>): _120.UpdateAgentDoc;
            };
            CreateClaimDoc: {
                encode(message: _120.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.CreateClaimDoc;
                fromJSON(object: any): _120.CreateClaimDoc;
                toJSON(message: _120.CreateClaimDoc): unknown;
                fromPartial(object: Partial<_120.CreateClaimDoc>): _120.CreateClaimDoc;
            };
            CreateEvaluationDoc: {
                encode(message: _120.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.CreateEvaluationDoc;
                fromJSON(object: any): _120.CreateEvaluationDoc;
                toJSON(message: _120.CreateEvaluationDoc): unknown;
                fromPartial(object: Partial<_120.CreateEvaluationDoc>): _120.CreateEvaluationDoc;
            };
            WithdrawFundsDoc: {
                encode(message: _120.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.WithdrawFundsDoc;
                fromJSON(object: any): _120.WithdrawFundsDoc;
                toJSON(message: _120.WithdrawFundsDoc): unknown;
                fromPartial(object: Partial<_120.WithdrawFundsDoc>): _120.WithdrawFundsDoc;
            };
            ProjectDoc: {
                encode(message: _120.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ProjectDoc;
                fromJSON(object: any): _120.ProjectDoc;
                toJSON(message: _120.ProjectDoc): unknown;
                fromPartial(object: Partial<_120.ProjectDoc>): _120.ProjectDoc;
            };
            WithdrawalInfoDoc: {
                encode(message: _120.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.WithdrawalInfoDoc;
                fromJSON(object: any): _120.WithdrawalInfoDoc;
                toJSON(message: _120.WithdrawalInfoDoc): unknown;
                fromPartial(object: Partial<_120.WithdrawalInfoDoc>): _120.WithdrawalInfoDoc;
            };
            Params: {
                encode(message: _120.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Params;
                fromJSON(object: any): _120.Params;
                toJSON(message: _120.Params): unknown;
                fromPartial(object: Partial<_120.Params>): _120.Params;
            };
            Claim: {
                encode(message: _120.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Claim;
                fromJSON(object: any): _120.Claim;
                toJSON(message: _120.Claim): unknown;
                fromPartial(object: Partial<_120.Claim>): _120.Claim;
            };
            GenesisAccountMap_MapEntry: {
                encode(message: _120.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisAccountMap_MapEntry;
                fromJSON(object: any): _120.GenesisAccountMap_MapEntry;
                toJSON(message: _120.GenesisAccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_120.GenesisAccountMap_MapEntry>): _120.GenesisAccountMap_MapEntry;
            };
            GenesisAccountMap: {
                encode(message: _120.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisAccountMap;
                fromJSON(object: any): _120.GenesisAccountMap;
                toJSON(message: _120.GenesisAccountMap): unknown;
                fromPartial(object: Partial<_120.GenesisAccountMap>): _120.GenesisAccountMap;
            };
            AccountMap_MapEntry: {
                encode(message: _120.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.AccountMap_MapEntry;
                fromJSON(object: any): _120.AccountMap_MapEntry;
                toJSON(message: _120.AccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_120.AccountMap_MapEntry>): _120.AccountMap_MapEntry;
            };
            AccountMap: {
                encode(message: _120.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.AccountMap;
                fromJSON(object: any): _120.AccountMap;
                toJSON(message: _120.AccountMap): unknown;
                fromPartial(object: Partial<_120.AccountMap>): _120.AccountMap;
            };
            WithdrawalInfoDocs: {
                encode(message: _120.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.WithdrawalInfoDocs;
                fromJSON(object: any): _120.WithdrawalInfoDocs;
                toJSON(message: _120.WithdrawalInfoDocs): unknown;
                fromPartial(object: Partial<_120.WithdrawalInfoDocs>): _120.WithdrawalInfoDocs;
            };
            Claims: {
                encode(message: _120.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Claims;
                fromJSON(object: any): _120.Claims;
                toJSON(message: _120.Claims): unknown;
                fromPartial(object: Partial<_120.Claims>): _120.Claims;
            };
            GenesisState: {
                encode(message: _119.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GenesisState;
                fromJSON(object: any): _119.GenesisState;
                toJSON(message: _119.GenesisState): unknown;
                fromPartial(object: Partial<_119.GenesisState>): _119.GenesisState;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenList(request: _125.QueryTokenListRequest): Promise<_125.QueryTokenListResponse>;
                tokenDoc(request: _125.QueryTokenDocRequest): Promise<_125.QueryTokenDocResponse>;
                tokenConfig(request?: _125.QueryTokenConfigRequest): Promise<_125.QueryTokenConfigResponse>;
            };
            MsgCreateToken: {
                encode(message: _127.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgCreateToken;
                fromJSON(object: any): _127.MsgCreateToken;
                toJSON(message: _127.MsgCreateToken): unknown;
                fromPartial(object: Partial<_127.MsgCreateToken>): _127.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _127.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgCreateTokenResponse;
                fromJSON(_: any): _127.MsgCreateTokenResponse;
                toJSON(_: _127.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_127.MsgCreateTokenResponse>): _127.MsgCreateTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _127.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgTransferToken;
                fromJSON(object: any): _127.MsgTransferToken;
                toJSON(message: _127.MsgTransferToken): unknown;
                fromPartial(object: Partial<_127.MsgTransferToken>): _127.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _127.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgTransferTokenResponse;
                fromJSON(_: any): _127.MsgTransferTokenResponse;
                toJSON(_: _127.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_127.MsgTransferTokenResponse>): _127.MsgTransferTokenResponse;
            };
            Params: {
                encode(message: _126.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Params;
                fromJSON(object: any): _126.Params;
                toJSON(message: _126.Params): unknown;
                fromPartial(object: Partial<_126.Params>): _126.Params;
            };
            TokenDoc: {
                encode(_: _126.TokenDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.TokenDoc;
                fromJSON(_: any): _126.TokenDoc;
                toJSON(_: _126.TokenDoc): unknown;
                fromPartial(_: Partial<_126.TokenDoc>): _126.TokenDoc;
            };
            QueryTokenListRequest: {
                encode(message: _125.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTokenListRequest;
                fromJSON(object: any): _125.QueryTokenListRequest;
                toJSON(message: _125.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_125.QueryTokenListRequest>): _125.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(_: _125.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTokenListResponse;
                fromJSON(_: any): _125.QueryTokenListResponse;
                toJSON(_: _125.QueryTokenListResponse): unknown;
                fromPartial(_: Partial<_125.QueryTokenListResponse>): _125.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _125.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTokenDocRequest;
                fromJSON(object: any): _125.QueryTokenDocRequest;
                toJSON(message: _125.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_125.QueryTokenDocRequest>): _125.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(_: _125.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTokenDocResponse;
                fromJSON(_: any): _125.QueryTokenDocResponse;
                toJSON(_: _125.QueryTokenDocResponse): unknown;
                fromPartial(_: Partial<_125.QueryTokenDocResponse>): _125.QueryTokenDocResponse;
            };
            QueryTokenConfigRequest: {
                encode(_: _125.QueryTokenConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTokenConfigRequest;
                fromJSON(_: any): _125.QueryTokenConfigRequest;
                toJSON(_: _125.QueryTokenConfigRequest): unknown;
                fromPartial(_: Partial<_125.QueryTokenConfigRequest>): _125.QueryTokenConfigRequest;
            };
            QueryTokenConfigResponse_MapEntry: {
                encode(message: _125.QueryTokenConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTokenConfigResponse_MapEntry;
                fromJSON(object: any): _125.QueryTokenConfigResponse_MapEntry;
                toJSON(message: _125.QueryTokenConfigResponse_MapEntry): unknown;
                fromPartial(object: Partial<_125.QueryTokenConfigResponse_MapEntry>): _125.QueryTokenConfigResponse_MapEntry;
            };
            QueryTokenConfigResponse: {
                encode(message: _125.QueryTokenConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTokenConfigResponse;
                fromJSON(object: any): _125.QueryTokenConfigResponse;
                toJSON(message: _125.QueryTokenConfigResponse): unknown;
                fromPartial(object: Partial<_125.QueryTokenConfigResponse>): _125.QueryTokenConfigResponse;
            };
            InitializeTokenContract: {
                encode(message: _124.InitializeTokenContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.InitializeTokenContract;
                fromJSON(object: any): _124.InitializeTokenContract;
                toJSON(message: _124.InitializeTokenContract): unknown;
                fromPartial(object: Partial<_124.InitializeTokenContract>): _124.InitializeTokenContract;
            };
            GenesisState: {
                encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GenesisState;
                fromJSON(object: any): _123.GenesisState;
                toJSON(message: _123.GenesisState): unknown;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ixo: {
                bonds: {
                    v1beta1: _179.MsgClientImpl;
                };
                entity: {
                    v1beta1: _180.MsgClientImpl;
                };
                iid: {
                    v1beta1: _181.MsgClientImpl;
                };
                payments: {
                    v1: _182.MsgClientImpl;
                };
                project: {
                    v1: _183.MsgClientImpl;
                };
                token: {
                    v1beta1: _184.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ixo: {
                bonds: {
                    v1beta1: {
                        bonds(request?: _103.QueryBondsRequest): Promise<_103.QueryBondsResponse>;
                        bondsDetailed(request?: _103.QueryBondsDetailedRequest): Promise<_103.QueryBondsDetailedResponse>;
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        bond(request: _103.QueryBondRequest): Promise<_103.QueryBondResponse>;
                        batch(request: _103.QueryBatchRequest): Promise<_103.QueryBatchResponse>;
                        lastBatch(request: _103.QueryLastBatchRequest): Promise<_103.QueryLastBatchResponse>;
                        currentPrice(request: _103.QueryCurrentPriceRequest): Promise<_103.QueryCurrentPriceResponse>;
                        currentReserve(request: _103.QueryCurrentReserveRequest): Promise<_103.QueryCurrentReserveResponse>;
                        availableReserve(request: _103.QueryAvailableReserveRequest): Promise<_103.QueryAvailableReserveResponse>;
                        customPrice(request: _103.QueryCustomPriceRequest): Promise<_103.QueryCustomPriceResponse>;
                        buyPrice(request: _103.QueryBuyPriceRequest): Promise<_103.QueryBuyPriceResponse>;
                        sellReturn(request: _103.QuerySellReturnRequest): Promise<_103.QuerySellReturnResponse>;
                        swapReturn(request: _103.QuerySwapReturnRequest): Promise<_103.QuerySwapReturnResponse>;
                        alphaMaximums(request: _103.QueryAlphaMaximumsRequest): Promise<_103.QueryAlphaMaximumsResponse>;
                    };
                };
                entity: {
                    v1beta1: {
                        entityList(request: _108.QueryEntityListRequest): Promise<_108.QueryEntityListResponse>;
                        entityDoc(request: _108.QueryEntityDocRequest): Promise<_108.QueryEntityDocResponse>;
                        entityConfig(request?: _108.QueryEntityConfigRequest): Promise<_108.QueryEntityConfigResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request: _113.QueryIidDocumentsRequest): Promise<_113.QueryIidDocumentsResponse>;
                        iidDocument(request: _113.QueryIidDocumentRequest): Promise<_113.QueryIidDocumentResponse>;
                        metaData(request: _113.QueryIidMetaDataRequest): Promise<_113.QueryIidMetaDataResponse>;
                    };
                };
                payments: {
                    v1: {
                        paymentTemplate(request: _117.QueryPaymentTemplateRequest): Promise<_117.QueryPaymentTemplateResponse>;
                        paymentContract(request: _117.QueryPaymentContractRequest): Promise<_117.QueryPaymentContractResponse>;
                        paymentContractsByIdPrefix(request: _117.QueryPaymentContractsByIdPrefixRequest): Promise<_117.QueryPaymentContractsByIdPrefixResponse>;
                        subscription(request: _117.QuerySubscriptionRequest): Promise<_117.QuerySubscriptionResponse>;
                    };
                };
                project: {
                    v1: {
                        projectDoc(request: _121.QueryProjectDocRequest): Promise<_121.QueryProjectDocResponse>;
                        projectAccounts(request: _121.QueryProjectAccountsRequest): Promise<_121.QueryProjectAccountsResponse>;
                        projectTx(request: _121.QueryProjectTxRequest): Promise<_121.QueryProjectTxResponse>;
                        params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        tokenList(request: _125.QueryTokenListRequest): Promise<_125.QueryTokenListResponse>;
                        tokenDoc(request: _125.QueryTokenDocRequest): Promise<_125.QueryTokenDocResponse>;
                        tokenConfig(request?: _125.QueryTokenConfigRequest): Promise<_125.QueryTokenConfigResponse>;
                    };
                };
            };
        }>;
    };
}
