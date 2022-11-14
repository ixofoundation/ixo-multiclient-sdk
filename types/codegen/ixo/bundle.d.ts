import * as _126 from "./bonds/v1beta1/bonds";
import * as _127 from "./bonds/v1beta1/genesis";
import * as _128 from "./bonds/v1beta1/query";
import * as _129 from "./bonds/v1beta1/tx";
import * as _130 from "./entity/v1beta1/entity";
import * as _131 from "./entity/v1beta1/genesis";
import * as _132 from "./entity/v1beta1/proposal";
import * as _133 from "./entity/v1beta1/query";
import * as _134 from "./entity/v1beta1/tx";
import * as _135 from "./iid/v1beta1/event";
import * as _136 from "./iid/v1beta1/genesis";
import * as _137 from "./iid/v1beta1/iid";
import * as _138 from "./iid/v1beta1/query";
import * as _139 from "./iid/v1beta1/tx";
import * as _140 from "./payments/v1/genesis";
import * as _141 from "./payments/v1/payments";
import * as _142 from "./payments/v1/query";
import * as _143 from "./payments/v1/tx";
import * as _144 from "./project/v1/genesis";
import * as _145 from "./project/v1/project";
import * as _146 from "./project/v1/query";
import * as _147 from "./project/v1/tx";
import * as _148 from "./token/v1beta1/genesis";
import * as _149 from "./token/v1beta1/proposal";
import * as _150 from "./token/v1beta1/query";
import * as _151 from "./token/v1beta1/token";
import * as _152 from "./token/v1beta1/tx";
import * as _207 from "./bonds/v1beta1/query.rpc.Query";
import * as _208 from "./entity/v1beta1/query.rpc.Query";
import * as _209 from "./iid/v1beta1/query.rpc.Query";
import * as _210 from "./payments/v1/query.rpc.Query";
import * as _211 from "./project/v1/query.rpc.Query";
import * as _212 from "./token/v1beta1/query.rpc.Query";
import * as _213 from "./bonds/v1beta1/tx.rpc.msg";
import * as _214 from "./entity/v1beta1/tx.rpc.msg";
import * as _215 from "./iid/v1beta1/tx.rpc.msg";
import * as _216 from "./payments/v1/tx.rpc.msg";
import * as _217 from "./project/v1/tx.rpc.msg";
import * as _218 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                bonds(request?: _128.QueryBondsRequest): Promise<_128.QueryBondsResponse>;
                bondsDetailed(request?: _128.QueryBondsDetailedRequest): Promise<_128.QueryBondsDetailedResponse>;
                params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                bond(request: _128.QueryBondRequest): Promise<_128.QueryBondResponse>;
                batch(request: _128.QueryBatchRequest): Promise<_128.QueryBatchResponse>;
                lastBatch(request: _128.QueryLastBatchRequest): Promise<_128.QueryLastBatchResponse>;
                currentPrice(request: _128.QueryCurrentPriceRequest): Promise<_128.QueryCurrentPriceResponse>;
                currentReserve(request: _128.QueryCurrentReserveRequest): Promise<_128.QueryCurrentReserveResponse>;
                availableReserve(request: _128.QueryAvailableReserveRequest): Promise<_128.QueryAvailableReserveResponse>;
                customPrice(request: _128.QueryCustomPriceRequest): Promise<_128.QueryCustomPriceResponse>;
                buyPrice(request: _128.QueryBuyPriceRequest): Promise<_128.QueryBuyPriceResponse>;
                sellReturn(request: _128.QuerySellReturnRequest): Promise<_128.QuerySellReturnResponse>;
                swapReturn(request: _128.QuerySwapReturnRequest): Promise<_128.QuerySwapReturnResponse>;
                alphaMaximums(request: _128.QueryAlphaMaximumsRequest): Promise<_128.QueryAlphaMaximumsResponse>;
            };
            MsgCreateBond: {
                encode(message: _129.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateBond;
                fromJSON(object: any): _129.MsgCreateBond;
                toJSON(message: _129.MsgCreateBond): unknown;
                fromPartial(object: Partial<_129.MsgCreateBond>): _129.MsgCreateBond;
            };
            MsgCreateBondResponse: {
                encode(_: _129.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateBondResponse;
                fromJSON(_: any): _129.MsgCreateBondResponse;
                toJSON(_: _129.MsgCreateBondResponse): unknown;
                fromPartial(_: Partial<_129.MsgCreateBondResponse>): _129.MsgCreateBondResponse;
            };
            MsgEditBond: {
                encode(message: _129.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgEditBond;
                fromJSON(object: any): _129.MsgEditBond;
                toJSON(message: _129.MsgEditBond): unknown;
                fromPartial(object: Partial<_129.MsgEditBond>): _129.MsgEditBond;
            };
            MsgEditBondResponse: {
                encode(_: _129.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgEditBondResponse;
                fromJSON(_: any): _129.MsgEditBondResponse;
                toJSON(_: _129.MsgEditBondResponse): unknown;
                fromPartial(_: Partial<_129.MsgEditBondResponse>): _129.MsgEditBondResponse;
            };
            MsgSetNextAlpha: {
                encode(message: _129.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSetNextAlpha;
                fromJSON(object: any): _129.MsgSetNextAlpha;
                toJSON(message: _129.MsgSetNextAlpha): unknown;
                fromPartial(object: Partial<_129.MsgSetNextAlpha>): _129.MsgSetNextAlpha;
            };
            MsgSetNextAlphaResponse: {
                encode(_: _129.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSetNextAlphaResponse;
                fromJSON(_: any): _129.MsgSetNextAlphaResponse;
                toJSON(_: _129.MsgSetNextAlphaResponse): unknown;
                fromPartial(_: Partial<_129.MsgSetNextAlphaResponse>): _129.MsgSetNextAlphaResponse;
            };
            MsgUpdateBondState: {
                encode(message: _129.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateBondState;
                fromJSON(object: any): _129.MsgUpdateBondState;
                toJSON(message: _129.MsgUpdateBondState): unknown;
                fromPartial(object: Partial<_129.MsgUpdateBondState>): _129.MsgUpdateBondState;
            };
            MsgUpdateBondStateResponse: {
                encode(_: _129.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateBondStateResponse;
                fromJSON(_: any): _129.MsgUpdateBondStateResponse;
                toJSON(_: _129.MsgUpdateBondStateResponse): unknown;
                fromPartial(_: Partial<_129.MsgUpdateBondStateResponse>): _129.MsgUpdateBondStateResponse;
            };
            MsgBuy: {
                encode(message: _129.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgBuy;
                fromJSON(object: any): _129.MsgBuy;
                toJSON(message: _129.MsgBuy): unknown;
                fromPartial(object: Partial<_129.MsgBuy>): _129.MsgBuy;
            };
            MsgBuyResponse: {
                encode(_: _129.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgBuyResponse;
                fromJSON(_: any): _129.MsgBuyResponse;
                toJSON(_: _129.MsgBuyResponse): unknown;
                fromPartial(_: Partial<_129.MsgBuyResponse>): _129.MsgBuyResponse;
            };
            MsgSell: {
                encode(message: _129.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSell;
                fromJSON(object: any): _129.MsgSell;
                toJSON(message: _129.MsgSell): unknown;
                fromPartial(object: Partial<_129.MsgSell>): _129.MsgSell;
            };
            MsgSellResponse: {
                encode(_: _129.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSellResponse;
                fromJSON(_: any): _129.MsgSellResponse;
                toJSON(_: _129.MsgSellResponse): unknown;
                fromPartial(_: Partial<_129.MsgSellResponse>): _129.MsgSellResponse;
            };
            MsgSwap: {
                encode(message: _129.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSwap;
                fromJSON(object: any): _129.MsgSwap;
                toJSON(message: _129.MsgSwap): unknown;
                fromPartial(object: Partial<_129.MsgSwap>): _129.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _129.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSwapResponse;
                fromJSON(_: any): _129.MsgSwapResponse;
                toJSON(_: _129.MsgSwapResponse): unknown;
                fromPartial(_: Partial<_129.MsgSwapResponse>): _129.MsgSwapResponse;
            };
            MsgMakeOutcomePayment: {
                encode(message: _129.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMakeOutcomePayment;
                fromJSON(object: any): _129.MsgMakeOutcomePayment;
                toJSON(message: _129.MsgMakeOutcomePayment): unknown;
                fromPartial(object: Partial<_129.MsgMakeOutcomePayment>): _129.MsgMakeOutcomePayment;
            };
            MsgMakeOutcomePaymentResponse: {
                encode(_: _129.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMakeOutcomePaymentResponse;
                fromJSON(_: any): _129.MsgMakeOutcomePaymentResponse;
                toJSON(_: _129.MsgMakeOutcomePaymentResponse): unknown;
                fromPartial(_: Partial<_129.MsgMakeOutcomePaymentResponse>): _129.MsgMakeOutcomePaymentResponse;
            };
            MsgWithdrawShare: {
                encode(message: _129.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawShare;
                fromJSON(object: any): _129.MsgWithdrawShare;
                toJSON(message: _129.MsgWithdrawShare): unknown;
                fromPartial(object: Partial<_129.MsgWithdrawShare>): _129.MsgWithdrawShare;
            };
            MsgWithdrawShareResponse: {
                encode(_: _129.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawShareResponse;
                fromJSON(_: any): _129.MsgWithdrawShareResponse;
                toJSON(_: _129.MsgWithdrawShareResponse): unknown;
                fromPartial(_: Partial<_129.MsgWithdrawShareResponse>): _129.MsgWithdrawShareResponse;
            };
            MsgWithdrawReserve: {
                encode(message: _129.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawReserve;
                fromJSON(object: any): _129.MsgWithdrawReserve;
                toJSON(message: _129.MsgWithdrawReserve): unknown;
                fromPartial(object: Partial<_129.MsgWithdrawReserve>): _129.MsgWithdrawReserve;
            };
            MsgWithdrawReserveResponse: {
                encode(_: _129.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawReserveResponse;
                fromJSON(_: any): _129.MsgWithdrawReserveResponse;
                toJSON(_: _129.MsgWithdrawReserveResponse): unknown;
                fromPartial(_: Partial<_129.MsgWithdrawReserveResponse>): _129.MsgWithdrawReserveResponse;
            };
            QueryBondsRequest: {
                encode(_: _128.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBondsRequest;
                fromJSON(_: any): _128.QueryBondsRequest;
                toJSON(_: _128.QueryBondsRequest): unknown;
                fromPartial(_: Partial<_128.QueryBondsRequest>): _128.QueryBondsRequest;
            };
            QueryBondsResponse: {
                encode(message: _128.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBondsResponse;
                fromJSON(object: any): _128.QueryBondsResponse;
                toJSON(message: _128.QueryBondsResponse): unknown;
                fromPartial(object: Partial<_128.QueryBondsResponse>): _128.QueryBondsResponse;
            };
            QueryBondsDetailedRequest: {
                encode(_: _128.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBondsDetailedRequest;
                fromJSON(_: any): _128.QueryBondsDetailedRequest;
                toJSON(_: _128.QueryBondsDetailedRequest): unknown;
                fromPartial(_: Partial<_128.QueryBondsDetailedRequest>): _128.QueryBondsDetailedRequest;
            };
            QueryBondsDetailedResponse: {
                encode(message: _128.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBondsDetailedResponse;
                fromJSON(object: any): _128.QueryBondsDetailedResponse;
                toJSON(message: _128.QueryBondsDetailedResponse): unknown;
                fromPartial(object: Partial<_128.QueryBondsDetailedResponse>): _128.QueryBondsDetailedResponse;
            };
            QueryBondRequest: {
                encode(message: _128.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBondRequest;
                fromJSON(object: any): _128.QueryBondRequest;
                toJSON(message: _128.QueryBondRequest): unknown;
                fromPartial(object: Partial<_128.QueryBondRequest>): _128.QueryBondRequest;
            };
            QueryBondResponse: {
                encode(message: _128.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBondResponse;
                fromJSON(object: any): _128.QueryBondResponse;
                toJSON(message: _128.QueryBondResponse): unknown;
                fromPartial(object: Partial<_128.QueryBondResponse>): _128.QueryBondResponse;
            };
            QueryBatchRequest: {
                encode(message: _128.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBatchRequest;
                fromJSON(object: any): _128.QueryBatchRequest;
                toJSON(message: _128.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_128.QueryBatchRequest>): _128.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _128.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBatchResponse;
                fromJSON(object: any): _128.QueryBatchResponse;
                toJSON(message: _128.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_128.QueryBatchResponse>): _128.QueryBatchResponse;
            };
            QueryLastBatchRequest: {
                encode(message: _128.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryLastBatchRequest;
                fromJSON(object: any): _128.QueryLastBatchRequest;
                toJSON(message: _128.QueryLastBatchRequest): unknown;
                fromPartial(object: Partial<_128.QueryLastBatchRequest>): _128.QueryLastBatchRequest;
            };
            QueryLastBatchResponse: {
                encode(message: _128.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryLastBatchResponse;
                fromJSON(object: any): _128.QueryLastBatchResponse;
                toJSON(message: _128.QueryLastBatchResponse): unknown;
                fromPartial(object: Partial<_128.QueryLastBatchResponse>): _128.QueryLastBatchResponse;
            };
            QueryCurrentPriceRequest: {
                encode(message: _128.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCurrentPriceRequest;
                fromJSON(object: any): _128.QueryCurrentPriceRequest;
                toJSON(message: _128.QueryCurrentPriceRequest): unknown;
                fromPartial(object: Partial<_128.QueryCurrentPriceRequest>): _128.QueryCurrentPriceRequest;
            };
            QueryCurrentPriceResponse: {
                encode(message: _128.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCurrentPriceResponse;
                fromJSON(object: any): _128.QueryCurrentPriceResponse;
                toJSON(message: _128.QueryCurrentPriceResponse): unknown;
                fromPartial(object: Partial<_128.QueryCurrentPriceResponse>): _128.QueryCurrentPriceResponse;
            };
            QueryCurrentReserveRequest: {
                encode(message: _128.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCurrentReserveRequest;
                fromJSON(object: any): _128.QueryCurrentReserveRequest;
                toJSON(message: _128.QueryCurrentReserveRequest): unknown;
                fromPartial(object: Partial<_128.QueryCurrentReserveRequest>): _128.QueryCurrentReserveRequest;
            };
            QueryCurrentReserveResponse: {
                encode(message: _128.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCurrentReserveResponse;
                fromJSON(object: any): _128.QueryCurrentReserveResponse;
                toJSON(message: _128.QueryCurrentReserveResponse): unknown;
                fromPartial(object: Partial<_128.QueryCurrentReserveResponse>): _128.QueryCurrentReserveResponse;
            };
            QueryAvailableReserveRequest: {
                encode(message: _128.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAvailableReserveRequest;
                fromJSON(object: any): _128.QueryAvailableReserveRequest;
                toJSON(message: _128.QueryAvailableReserveRequest): unknown;
                fromPartial(object: Partial<_128.QueryAvailableReserveRequest>): _128.QueryAvailableReserveRequest;
            };
            QueryAvailableReserveResponse: {
                encode(message: _128.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAvailableReserveResponse;
                fromJSON(object: any): _128.QueryAvailableReserveResponse;
                toJSON(message: _128.QueryAvailableReserveResponse): unknown;
                fromPartial(object: Partial<_128.QueryAvailableReserveResponse>): _128.QueryAvailableReserveResponse;
            };
            QueryCustomPriceRequest: {
                encode(message: _128.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCustomPriceRequest;
                fromJSON(object: any): _128.QueryCustomPriceRequest;
                toJSON(message: _128.QueryCustomPriceRequest): unknown;
                fromPartial(object: Partial<_128.QueryCustomPriceRequest>): _128.QueryCustomPriceRequest;
            };
            QueryCustomPriceResponse: {
                encode(message: _128.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCustomPriceResponse;
                fromJSON(object: any): _128.QueryCustomPriceResponse;
                toJSON(message: _128.QueryCustomPriceResponse): unknown;
                fromPartial(object: Partial<_128.QueryCustomPriceResponse>): _128.QueryCustomPriceResponse;
            };
            QueryBuyPriceRequest: {
                encode(message: _128.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBuyPriceRequest;
                fromJSON(object: any): _128.QueryBuyPriceRequest;
                toJSON(message: _128.QueryBuyPriceRequest): unknown;
                fromPartial(object: Partial<_128.QueryBuyPriceRequest>): _128.QueryBuyPriceRequest;
            };
            QueryBuyPriceResponse: {
                encode(message: _128.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBuyPriceResponse;
                fromJSON(object: any): _128.QueryBuyPriceResponse;
                toJSON(message: _128.QueryBuyPriceResponse): unknown;
                fromPartial(object: Partial<_128.QueryBuyPriceResponse>): _128.QueryBuyPriceResponse;
            };
            QuerySellReturnRequest: {
                encode(message: _128.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySellReturnRequest;
                fromJSON(object: any): _128.QuerySellReturnRequest;
                toJSON(message: _128.QuerySellReturnRequest): unknown;
                fromPartial(object: Partial<_128.QuerySellReturnRequest>): _128.QuerySellReturnRequest;
            };
            QuerySellReturnResponse: {
                encode(message: _128.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySellReturnResponse;
                fromJSON(object: any): _128.QuerySellReturnResponse;
                toJSON(message: _128.QuerySellReturnResponse): unknown;
                fromPartial(object: Partial<_128.QuerySellReturnResponse>): _128.QuerySellReturnResponse;
            };
            QuerySwapReturnRequest: {
                encode(message: _128.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySwapReturnRequest;
                fromJSON(object: any): _128.QuerySwapReturnRequest;
                toJSON(message: _128.QuerySwapReturnRequest): unknown;
                fromPartial(object: Partial<_128.QuerySwapReturnRequest>): _128.QuerySwapReturnRequest;
            };
            QuerySwapReturnResponse: {
                encode(message: _128.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySwapReturnResponse;
                fromJSON(object: any): _128.QuerySwapReturnResponse;
                toJSON(message: _128.QuerySwapReturnResponse): unknown;
                fromPartial(object: Partial<_128.QuerySwapReturnResponse>): _128.QuerySwapReturnResponse;
            };
            QueryAlphaMaximumsRequest: {
                encode(message: _128.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAlphaMaximumsRequest;
                fromJSON(object: any): _128.QueryAlphaMaximumsRequest;
                toJSON(message: _128.QueryAlphaMaximumsRequest): unknown;
                fromPartial(object: Partial<_128.QueryAlphaMaximumsRequest>): _128.QueryAlphaMaximumsRequest;
            };
            QueryAlphaMaximumsResponse: {
                encode(message: _128.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAlphaMaximumsResponse;
                fromJSON(object: any): _128.QueryAlphaMaximumsResponse;
                toJSON(message: _128.QueryAlphaMaximumsResponse): unknown;
                fromPartial(object: Partial<_128.QueryAlphaMaximumsResponse>): _128.QueryAlphaMaximumsResponse;
            };
            QueryParamsRequest: {
                encode(_: _128.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsRequest;
                fromJSON(_: any): _128.QueryParamsRequest;
                toJSON(_: _128.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_128.QueryParamsRequest>): _128.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _128.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsResponse;
                fromJSON(object: any): _128.QueryParamsResponse;
                toJSON(message: _128.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_128.QueryParamsResponse>): _128.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                fromJSON(object: any): _127.GenesisState;
                toJSON(message: _127.GenesisState): unknown;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
            };
            FunctionParam: {
                encode(message: _126.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.FunctionParam;
                fromJSON(object: any): _126.FunctionParam;
                toJSON(message: _126.FunctionParam): unknown;
                fromPartial(object: Partial<_126.FunctionParam>): _126.FunctionParam;
            };
            BondDetails: {
                encode(message: _126.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.BondDetails;
                fromJSON(object: any): _126.BondDetails;
                toJSON(message: _126.BondDetails): unknown;
                fromPartial(object: Partial<_126.BondDetails>): _126.BondDetails;
            };
            Bond: {
                encode(message: _126.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Bond;
                fromJSON(object: any): _126.Bond;
                toJSON(message: _126.Bond): unknown;
                fromPartial(object: Partial<_126.Bond>): _126.Bond;
            };
            BaseOrder: {
                encode(message: _126.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.BaseOrder;
                fromJSON(object: any): _126.BaseOrder;
                toJSON(message: _126.BaseOrder): unknown;
                fromPartial(object: Partial<_126.BaseOrder>): _126.BaseOrder;
            };
            BuyOrder: {
                encode(message: _126.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.BuyOrder;
                fromJSON(object: any): _126.BuyOrder;
                toJSON(message: _126.BuyOrder): unknown;
                fromPartial(object: Partial<_126.BuyOrder>): _126.BuyOrder;
            };
            SellOrder: {
                encode(message: _126.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.SellOrder;
                fromJSON(object: any): _126.SellOrder;
                toJSON(message: _126.SellOrder): unknown;
                fromPartial(object: Partial<_126.SellOrder>): _126.SellOrder;
            };
            SwapOrder: {
                encode(message: _126.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.SwapOrder;
                fromJSON(object: any): _126.SwapOrder;
                toJSON(message: _126.SwapOrder): unknown;
                fromPartial(object: Partial<_126.SwapOrder>): _126.SwapOrder;
            };
            Batch: {
                encode(message: _126.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Batch;
                fromJSON(object: any): _126.Batch;
                toJSON(message: _126.Batch): unknown;
                fromPartial(object: Partial<_126.Batch>): _126.Batch;
            };
            Params: {
                encode(message: _126.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Params;
                fromJSON(object: any): _126.Params;
                toJSON(message: _126.Params): unknown;
                fromPartial(object: Partial<_126.Params>): _126.Params;
            };
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                entityList(request: _133.QueryEntityListRequest): Promise<_133.QueryEntityListResponse>;
                entityDoc(request: _133.QueryEntityDocRequest): Promise<_133.QueryEntityDocResponse>;
                entityConfig(request?: _133.QueryEntityConfigRequest): Promise<_133.QueryEntityConfigResponse>;
            };
            MsgCreateEntity: {
                encode(message: _134.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreateEntity;
                fromJSON(object: any): _134.MsgCreateEntity;
                toJSON(message: _134.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_134.MsgCreateEntity>): _134.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _134.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreateEntityResponse;
                fromJSON(object: any): _134.MsgCreateEntityResponse;
                toJSON(message: _134.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_134.MsgCreateEntityResponse>): _134.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _134.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateEntity;
                fromJSON(object: any): _134.MsgUpdateEntity;
                toJSON(message: _134.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_134.MsgUpdateEntity>): _134.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _134.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateEntityResponse;
                fromJSON(_: any): _134.MsgUpdateEntityResponse;
                toJSON(_: _134.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_134.MsgUpdateEntityResponse>): _134.MsgUpdateEntityResponse;
            };
            MsgTransferEntity: {
                encode(message: _134.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgTransferEntity;
                fromJSON(object: any): _134.MsgTransferEntity;
                toJSON(message: _134.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_134.MsgTransferEntity>): _134.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _134.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgTransferEntityResponse;
                fromJSON(_: any): _134.MsgTransferEntityResponse;
                toJSON(_: _134.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_134.MsgTransferEntityResponse>): _134.MsgTransferEntityResponse;
            };
            QueryEntityListRequest: {
                encode(message: _133.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEntityListRequest;
                fromJSON(object: any): _133.QueryEntityListRequest;
                toJSON(message: _133.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_133.QueryEntityListRequest>): _133.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(_: _133.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEntityListResponse;
                fromJSON(_: any): _133.QueryEntityListResponse;
                toJSON(_: _133.QueryEntityListResponse): unknown;
                fromPartial(_: Partial<_133.QueryEntityListResponse>): _133.QueryEntityListResponse;
            };
            QueryEntityDocRequest: {
                encode(message: _133.QueryEntityDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEntityDocRequest;
                fromJSON(object: any): _133.QueryEntityDocRequest;
                toJSON(message: _133.QueryEntityDocRequest): unknown;
                fromPartial(object: Partial<_133.QueryEntityDocRequest>): _133.QueryEntityDocRequest;
            };
            QueryEntityDocResponse: {
                encode(_: _133.QueryEntityDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEntityDocResponse;
                fromJSON(_: any): _133.QueryEntityDocResponse;
                toJSON(_: _133.QueryEntityDocResponse): unknown;
                fromPartial(_: Partial<_133.QueryEntityDocResponse>): _133.QueryEntityDocResponse;
            };
            QueryEntityConfigRequest: {
                encode(_: _133.QueryEntityConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEntityConfigRequest;
                fromJSON(_: any): _133.QueryEntityConfigRequest;
                toJSON(_: _133.QueryEntityConfigRequest): unknown;
                fromPartial(_: Partial<_133.QueryEntityConfigRequest>): _133.QueryEntityConfigRequest;
            };
            QueryEntityConfigResponse_MapEntry: {
                encode(message: _133.QueryEntityConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEntityConfigResponse_MapEntry;
                fromJSON(object: any): _133.QueryEntityConfigResponse_MapEntry;
                toJSON(message: _133.QueryEntityConfigResponse_MapEntry): unknown;
                fromPartial(object: Partial<_133.QueryEntityConfigResponse_MapEntry>): _133.QueryEntityConfigResponse_MapEntry;
            };
            QueryEntityConfigResponse: {
                encode(message: _133.QueryEntityConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEntityConfigResponse;
                fromJSON(object: any): _133.QueryEntityConfigResponse;
                toJSON(message: _133.QueryEntityConfigResponse): unknown;
                fromPartial(object: Partial<_133.QueryEntityConfigResponse>): _133.QueryEntityConfigResponse;
            };
            InitializeNftContract: {
                encode(message: _132.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.InitializeNftContract;
                fromJSON(object: any): _132.InitializeNftContract;
                toJSON(message: _132.InitializeNftContract): unknown;
                fromPartial(object: Partial<_132.InitializeNftContract>): _132.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GenesisState;
                fromJSON(object: any): _131.GenesisState;
                toJSON(message: _131.GenesisState): unknown;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
            };
            Params: {
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Params;
                fromJSON(object: any): _130.Params;
                toJSON(message: _130.Params): unknown;
                fromPartial(object: Partial<_130.Params>): _130.Params;
            };
            EntityDoc: {
                encode(_: _130.EntityDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EntityDoc;
                fromJSON(_: any): _130.EntityDoc;
                toJSON(_: _130.EntityDoc): unknown;
                fromPartial(_: Partial<_130.EntityDoc>): _130.EntityDoc;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request: _138.QueryIidDocumentsRequest): Promise<_138.QueryIidDocumentsResponse>;
                iidDocument(request: _138.QueryIidDocumentRequest): Promise<_138.QueryIidDocumentResponse>;
                metaData(request: _138.QueryIidMetaDataRequest): Promise<_138.QueryIidMetaDataResponse>;
            };
            Verification: {
                encode(message: _139.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Verification;
                fromJSON(object: any): _139.Verification;
                toJSON(message: _139.Verification): unknown;
                fromPartial(object: Partial<_139.Verification>): _139.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _139.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateIidDocument;
                fromJSON(object: any): _139.MsgCreateIidDocument;
                toJSON(message: _139.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_139.MsgCreateIidDocument>): _139.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _139.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _139.MsgCreateIidDocumentResponse;
                toJSON(_: _139.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_139.MsgCreateIidDocumentResponse>): _139.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _139.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateIidDocument;
                fromJSON(object: any): _139.MsgUpdateIidDocument;
                toJSON(message: _139.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_139.MsgUpdateIidDocument>): _139.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _139.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _139.MsgUpdateIidDocumentResponse;
                toJSON(_: _139.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_139.MsgUpdateIidDocumentResponse>): _139.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _139.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddVerification;
                fromJSON(object: any): _139.MsgAddVerification;
                toJSON(message: _139.MsgAddVerification): unknown;
                fromPartial(object: Partial<_139.MsgAddVerification>): _139.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _139.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddVerificationResponse;
                fromJSON(_: any): _139.MsgAddVerificationResponse;
                toJSON(_: _139.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_139.MsgAddVerificationResponse>): _139.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _139.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgSetVerificationRelationships;
                fromJSON(object: any): _139.MsgSetVerificationRelationships;
                toJSON(message: _139.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_139.MsgSetVerificationRelationships>): _139.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _139.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _139.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _139.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_139.MsgSetVerificationRelationshipsResponse>): _139.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _139.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgRevokeVerification;
                fromJSON(object: any): _139.MsgRevokeVerification;
                toJSON(message: _139.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_139.MsgRevokeVerification>): _139.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _139.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgRevokeVerificationResponse;
                fromJSON(_: any): _139.MsgRevokeVerificationResponse;
                toJSON(_: _139.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_139.MsgRevokeVerificationResponse>): _139.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _139.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddService;
                fromJSON(object: any): _139.MsgAddService;
                toJSON(message: _139.MsgAddService): unknown;
                fromPartial(object: Partial<_139.MsgAddService>): _139.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _139.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddServiceResponse;
                fromJSON(_: any): _139.MsgAddServiceResponse;
                toJSON(_: _139.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_139.MsgAddServiceResponse>): _139.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _139.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteService;
                fromJSON(object: any): _139.MsgDeleteService;
                toJSON(message: _139.MsgDeleteService): unknown;
                fromPartial(object: Partial<_139.MsgDeleteService>): _139.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _139.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteServiceResponse;
                fromJSON(_: any): _139.MsgDeleteServiceResponse;
                toJSON(_: _139.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_139.MsgDeleteServiceResponse>): _139.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _139.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddController;
                fromJSON(object: any): _139.MsgAddController;
                toJSON(message: _139.MsgAddController): unknown;
                fromPartial(object: Partial<_139.MsgAddController>): _139.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _139.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddControllerResponse;
                fromJSON(_: any): _139.MsgAddControllerResponse;
                toJSON(_: _139.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_139.MsgAddControllerResponse>): _139.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _139.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteController;
                fromJSON(object: any): _139.MsgDeleteController;
                toJSON(message: _139.MsgDeleteController): unknown;
                fromPartial(object: Partial<_139.MsgDeleteController>): _139.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _139.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteControllerResponse;
                fromJSON(_: any): _139.MsgDeleteControllerResponse;
                toJSON(_: _139.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_139.MsgDeleteControllerResponse>): _139.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _139.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddLinkedResource;
                fromJSON(object: any): _139.MsgAddLinkedResource;
                toJSON(message: _139.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_139.MsgAddLinkedResource>): _139.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _139.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteLinkedResource;
                fromJSON(object: any): _139.MsgDeleteLinkedResource;
                toJSON(message: _139.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_139.MsgDeleteLinkedResource>): _139.MsgDeleteLinkedResource;
            };
            MsgAddLinkedEntity: {
                encode(message: _139.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddLinkedEntity;
                fromJSON(object: any): _139.MsgAddLinkedEntity;
                toJSON(message: _139.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_139.MsgAddLinkedEntity>): _139.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _139.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteLinkedEntity;
                fromJSON(object: any): _139.MsgDeleteLinkedEntity;
                toJSON(message: _139.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_139.MsgDeleteLinkedEntity>): _139.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _139.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddAccordedRight;
                fromJSON(object: any): _139.MsgAddAccordedRight;
                toJSON(message: _139.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_139.MsgAddAccordedRight>): _139.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _139.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteAccordedRight;
                fromJSON(object: any): _139.MsgDeleteAccordedRight;
                toJSON(message: _139.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_139.MsgDeleteAccordedRight>): _139.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _139.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddIidContext;
                fromJSON(object: any): _139.MsgAddIidContext;
                toJSON(message: _139.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_139.MsgAddIidContext>): _139.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _139.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeactivateIID;
                fromJSON(object: any): _139.MsgDeactivateIID;
                toJSON(message: _139.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_139.MsgDeactivateIID>): _139.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _139.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteIidContext;
                fromJSON(object: any): _139.MsgDeleteIidContext;
                toJSON(message: _139.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_139.MsgDeleteIidContext>): _139.MsgDeleteIidContext;
            };
            MsgUpdateIidMeta: {
                encode(message: _139.MsgUpdateIidMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateIidMeta;
                fromJSON(object: any): _139.MsgUpdateIidMeta;
                toJSON(message: _139.MsgUpdateIidMeta): unknown;
                fromPartial(object: Partial<_139.MsgUpdateIidMeta>): _139.MsgUpdateIidMeta;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _139.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _139.MsgAddLinkedResourceResponse;
                toJSON(_: _139.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_139.MsgAddLinkedResourceResponse>): _139.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _139.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _139.MsgDeleteLinkedResourceResponse;
                toJSON(_: _139.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_139.MsgDeleteLinkedResourceResponse>): _139.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _139.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _139.MsgAddLinkedEntityResponse;
                toJSON(_: _139.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_139.MsgAddLinkedEntityResponse>): _139.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _139.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _139.MsgDeleteLinkedEntityResponse;
                toJSON(_: _139.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_139.MsgDeleteLinkedEntityResponse>): _139.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _139.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddAccordedRightResponse;
                fromJSON(_: any): _139.MsgAddAccordedRightResponse;
                toJSON(_: _139.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_139.MsgAddAccordedRightResponse>): _139.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _139.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _139.MsgDeleteAccordedRightResponse;
                toJSON(_: _139.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_139.MsgDeleteAccordedRightResponse>): _139.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _139.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddIidContextResponse;
                fromJSON(_: any): _139.MsgAddIidContextResponse;
                toJSON(_: _139.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_139.MsgAddIidContextResponse>): _139.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _139.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeleteIidContextResponse;
                fromJSON(_: any): _139.MsgDeleteIidContextResponse;
                toJSON(_: _139.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_139.MsgDeleteIidContextResponse>): _139.MsgDeleteIidContextResponse;
            };
            MsgUpdateIidMetaResponse: {
                encode(_: _139.MsgUpdateIidMetaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateIidMetaResponse;
                fromJSON(_: any): _139.MsgUpdateIidMetaResponse;
                toJSON(_: _139.MsgUpdateIidMetaResponse): unknown;
                fromPartial(_: Partial<_139.MsgUpdateIidMetaResponse>): _139.MsgUpdateIidMetaResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _139.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgDeactivateIIDResponse;
                fromJSON(_: any): _139.MsgDeactivateIIDResponse;
                toJSON(_: _139.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_139.MsgDeactivateIIDResponse>): _139.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _138.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryIidDocumentsRequest;
                fromJSON(object: any): _138.QueryIidDocumentsRequest;
                toJSON(message: _138.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_138.QueryIidDocumentsRequest>): _138.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _138.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryIidDocumentsResponse;
                fromJSON(object: any): _138.QueryIidDocumentsResponse;
                toJSON(message: _138.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_138.QueryIidDocumentsResponse>): _138.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _138.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryIidDocumentRequest;
                fromJSON(object: any): _138.QueryIidDocumentRequest;
                toJSON(message: _138.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_138.QueryIidDocumentRequest>): _138.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _138.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryIidDocumentResponse;
                fromJSON(object: any): _138.QueryIidDocumentResponse;
                toJSON(message: _138.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_138.QueryIidDocumentResponse>): _138.QueryIidDocumentResponse;
            };
            QueryIidMetaDataRequest: {
                encode(message: _138.QueryIidMetaDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryIidMetaDataRequest;
                fromJSON(object: any): _138.QueryIidMetaDataRequest;
                toJSON(message: _138.QueryIidMetaDataRequest): unknown;
                fromPartial(object: Partial<_138.QueryIidMetaDataRequest>): _138.QueryIidMetaDataRequest;
            };
            QueryIidMetaDataResponse: {
                encode(message: _138.QueryIidMetaDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryIidMetaDataResponse;
                fromJSON(object: any): _138.QueryIidMetaDataResponse;
                toJSON(message: _138.QueryIidMetaDataResponse): unknown;
                fromPartial(object: Partial<_138.QueryIidMetaDataResponse>): _138.QueryIidMetaDataResponse;
            };
            Context: {
                encode(message: _137.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Context;
                fromJSON(object: any): _137.Context;
                toJSON(message: _137.Context): unknown;
                fromPartial(object: Partial<_137.Context>): _137.Context;
            };
            IidDocument: {
                encode(message: _137.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.IidDocument;
                fromJSON(object: any): _137.IidDocument;
                toJSON(message: _137.IidDocument): unknown;
                fromPartial(object: Partial<_137.IidDocument>): _137.IidDocument;
            };
            AccordedRight: {
                encode(message: _137.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.AccordedRight;
                fromJSON(object: any): _137.AccordedRight;
                toJSON(message: _137.AccordedRight): unknown;
                fromPartial(object: Partial<_137.AccordedRight>): _137.AccordedRight;
            };
            LinkedResource: {
                encode(message: _137.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.LinkedResource;
                fromJSON(object: any): _137.LinkedResource;
                toJSON(message: _137.LinkedResource): unknown;
                fromPartial(object: Partial<_137.LinkedResource>): _137.LinkedResource;
            };
            LinkedEntity: {
                encode(message: _137.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.LinkedEntity;
                fromJSON(object: any): _137.LinkedEntity;
                toJSON(message: _137.LinkedEntity): unknown;
                fromPartial(object: Partial<_137.LinkedEntity>): _137.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _137.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.VerificationMethod;
                fromJSON(object: any): _137.VerificationMethod;
                toJSON(message: _137.VerificationMethod): unknown;
                fromPartial(object: Partial<_137.VerificationMethod>): _137.VerificationMethod;
            };
            Service: {
                encode(message: _137.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Service;
                fromJSON(object: any): _137.Service;
                toJSON(message: _137.Service): unknown;
                fromPartial(object: Partial<_137.Service>): _137.Service;
            };
            IidMetadata: {
                encode(message: _137.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.IidMetadata;
                fromJSON(object: any): _137.IidMetadata;
                toJSON(message: _137.IidMetadata): unknown;
                fromPartial(object: Partial<_137.IidMetadata>): _137.IidMetadata;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _135.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.IidDocumentCreatedEvent;
                fromJSON(object: any): _135.IidDocumentCreatedEvent;
                toJSON(message: _135.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_135.IidDocumentCreatedEvent>): _135.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _135.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.IidDocumentUpdatedEvent;
                fromJSON(object: any): _135.IidDocumentUpdatedEvent;
                toJSON(message: _135.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_135.IidDocumentUpdatedEvent>): _135.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace payments {
        const v1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                paymentTemplate(request: _142.QueryPaymentTemplateRequest): Promise<_142.QueryPaymentTemplateResponse>;
                paymentContract(request: _142.QueryPaymentContractRequest): Promise<_142.QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: _142.QueryPaymentContractsByIdPrefixRequest): Promise<_142.QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: _142.QuerySubscriptionRequest): Promise<_142.QuerySubscriptionResponse>;
            };
            MsgSetPaymentContractAuthorisation: {
                encode(message: _143.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetPaymentContractAuthorisation;
                fromJSON(object: any): _143.MsgSetPaymentContractAuthorisation;
                toJSON(message: _143.MsgSetPaymentContractAuthorisation): unknown;
                fromPartial(object: Partial<_143.MsgSetPaymentContractAuthorisation>): _143.MsgSetPaymentContractAuthorisation;
            };
            MsgSetPaymentContractAuthorisationResponse: {
                encode(_: _143.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetPaymentContractAuthorisationResponse;
                fromJSON(_: any): _143.MsgSetPaymentContractAuthorisationResponse;
                toJSON(_: _143.MsgSetPaymentContractAuthorisationResponse): unknown;
                fromPartial(_: Partial<_143.MsgSetPaymentContractAuthorisationResponse>): _143.MsgSetPaymentContractAuthorisationResponse;
            };
            MsgCreatePaymentTemplate: {
                encode(message: _143.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreatePaymentTemplate;
                fromJSON(object: any): _143.MsgCreatePaymentTemplate;
                toJSON(message: _143.MsgCreatePaymentTemplate): unknown;
                fromPartial(object: Partial<_143.MsgCreatePaymentTemplate>): _143.MsgCreatePaymentTemplate;
            };
            MsgCreatePaymentTemplateResponse: {
                encode(_: _143.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreatePaymentTemplateResponse;
                fromJSON(_: any): _143.MsgCreatePaymentTemplateResponse;
                toJSON(_: _143.MsgCreatePaymentTemplateResponse): unknown;
                fromPartial(_: Partial<_143.MsgCreatePaymentTemplateResponse>): _143.MsgCreatePaymentTemplateResponse;
            };
            MsgCreatePaymentContract: {
                encode(message: _143.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreatePaymentContract;
                fromJSON(object: any): _143.MsgCreatePaymentContract;
                toJSON(message: _143.MsgCreatePaymentContract): unknown;
                fromPartial(object: Partial<_143.MsgCreatePaymentContract>): _143.MsgCreatePaymentContract;
            };
            MsgCreatePaymentContractResponse: {
                encode(_: _143.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreatePaymentContractResponse;
                fromJSON(_: any): _143.MsgCreatePaymentContractResponse;
                toJSON(_: _143.MsgCreatePaymentContractResponse): unknown;
                fromPartial(_: Partial<_143.MsgCreatePaymentContractResponse>): _143.MsgCreatePaymentContractResponse;
            };
            MsgCreateSubscription: {
                encode(message: _143.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateSubscription;
                fromJSON(object: any): _143.MsgCreateSubscription;
                toJSON(message: _143.MsgCreateSubscription): unknown;
                fromPartial(object: Partial<_143.MsgCreateSubscription>): _143.MsgCreateSubscription;
            };
            MsgCreateSubscriptionResponse: {
                encode(_: _143.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateSubscriptionResponse;
                fromJSON(_: any): _143.MsgCreateSubscriptionResponse;
                toJSON(_: _143.MsgCreateSubscriptionResponse): unknown;
                fromPartial(_: Partial<_143.MsgCreateSubscriptionResponse>): _143.MsgCreateSubscriptionResponse;
            };
            MsgGrantDiscount: {
                encode(message: _143.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgGrantDiscount;
                fromJSON(object: any): _143.MsgGrantDiscount;
                toJSON(message: _143.MsgGrantDiscount): unknown;
                fromPartial(object: Partial<_143.MsgGrantDiscount>): _143.MsgGrantDiscount;
            };
            MsgGrantDiscountResponse: {
                encode(_: _143.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgGrantDiscountResponse;
                fromJSON(_: any): _143.MsgGrantDiscountResponse;
                toJSON(_: _143.MsgGrantDiscountResponse): unknown;
                fromPartial(_: Partial<_143.MsgGrantDiscountResponse>): _143.MsgGrantDiscountResponse;
            };
            MsgRevokeDiscount: {
                encode(message: _143.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgRevokeDiscount;
                fromJSON(object: any): _143.MsgRevokeDiscount;
                toJSON(message: _143.MsgRevokeDiscount): unknown;
                fromPartial(object: Partial<_143.MsgRevokeDiscount>): _143.MsgRevokeDiscount;
            };
            MsgRevokeDiscountResponse: {
                encode(_: _143.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgRevokeDiscountResponse;
                fromJSON(_: any): _143.MsgRevokeDiscountResponse;
                toJSON(_: _143.MsgRevokeDiscountResponse): unknown;
                fromPartial(_: Partial<_143.MsgRevokeDiscountResponse>): _143.MsgRevokeDiscountResponse;
            };
            MsgEffectPayment: {
                encode(message: _143.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgEffectPayment;
                fromJSON(object: any): _143.MsgEffectPayment;
                toJSON(message: _143.MsgEffectPayment): unknown;
                fromPartial(object: Partial<_143.MsgEffectPayment>): _143.MsgEffectPayment;
            };
            MsgEffectPaymentResponse: {
                encode(_: _143.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgEffectPaymentResponse;
                fromJSON(_: any): _143.MsgEffectPaymentResponse;
                toJSON(_: _143.MsgEffectPaymentResponse): unknown;
                fromPartial(_: Partial<_143.MsgEffectPaymentResponse>): _143.MsgEffectPaymentResponse;
            };
            QueryPaymentTemplateRequest: {
                encode(message: _142.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPaymentTemplateRequest;
                fromJSON(object: any): _142.QueryPaymentTemplateRequest;
                toJSON(message: _142.QueryPaymentTemplateRequest): unknown;
                fromPartial(object: Partial<_142.QueryPaymentTemplateRequest>): _142.QueryPaymentTemplateRequest;
            };
            QueryPaymentTemplateResponse: {
                encode(message: _142.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPaymentTemplateResponse;
                fromJSON(object: any): _142.QueryPaymentTemplateResponse;
                toJSON(message: _142.QueryPaymentTemplateResponse): unknown;
                fromPartial(object: Partial<_142.QueryPaymentTemplateResponse>): _142.QueryPaymentTemplateResponse;
            };
            QueryPaymentContractRequest: {
                encode(message: _142.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPaymentContractRequest;
                fromJSON(object: any): _142.QueryPaymentContractRequest;
                toJSON(message: _142.QueryPaymentContractRequest): unknown;
                fromPartial(object: Partial<_142.QueryPaymentContractRequest>): _142.QueryPaymentContractRequest;
            };
            QueryPaymentContractResponse: {
                encode(message: _142.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPaymentContractResponse;
                fromJSON(object: any): _142.QueryPaymentContractResponse;
                toJSON(message: _142.QueryPaymentContractResponse): unknown;
                fromPartial(object: Partial<_142.QueryPaymentContractResponse>): _142.QueryPaymentContractResponse;
            };
            QueryPaymentContractsByIdPrefixRequest: {
                encode(message: _142.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPaymentContractsByIdPrefixRequest;
                fromJSON(object: any): _142.QueryPaymentContractsByIdPrefixRequest;
                toJSON(message: _142.QueryPaymentContractsByIdPrefixRequest): unknown;
                fromPartial(object: Partial<_142.QueryPaymentContractsByIdPrefixRequest>): _142.QueryPaymentContractsByIdPrefixRequest;
            };
            QueryPaymentContractsByIdPrefixResponse: {
                encode(message: _142.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPaymentContractsByIdPrefixResponse;
                fromJSON(object: any): _142.QueryPaymentContractsByIdPrefixResponse;
                toJSON(message: _142.QueryPaymentContractsByIdPrefixResponse): unknown;
                fromPartial(object: Partial<_142.QueryPaymentContractsByIdPrefixResponse>): _142.QueryPaymentContractsByIdPrefixResponse;
            };
            QuerySubscriptionRequest: {
                encode(message: _142.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QuerySubscriptionRequest;
                fromJSON(object: any): _142.QuerySubscriptionRequest;
                toJSON(message: _142.QuerySubscriptionRequest): unknown;
                fromPartial(object: Partial<_142.QuerySubscriptionRequest>): _142.QuerySubscriptionRequest;
            };
            QuerySubscriptionResponse: {
                encode(message: _142.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QuerySubscriptionResponse;
                fromJSON(object: any): _142.QuerySubscriptionResponse;
                toJSON(message: _142.QuerySubscriptionResponse): unknown;
                fromPartial(object: Partial<_142.QuerySubscriptionResponse>): _142.QuerySubscriptionResponse;
            };
            PaymentTemplate: {
                encode(message: _141.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.PaymentTemplate;
                fromJSON(object: any): _141.PaymentTemplate;
                toJSON(message: _141.PaymentTemplate): unknown;
                fromPartial(object: Partial<_141.PaymentTemplate>): _141.PaymentTemplate;
            };
            Discount: {
                encode(message: _141.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Discount;
                fromJSON(object: any): _141.Discount;
                toJSON(message: _141.Discount): unknown;
                fromPartial(object: Partial<_141.Discount>): _141.Discount;
            };
            DistributionShare: {
                encode(message: _141.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DistributionShare;
                fromJSON(object: any): _141.DistributionShare;
                toJSON(message: _141.DistributionShare): unknown;
                fromPartial(object: Partial<_141.DistributionShare>): _141.DistributionShare;
            };
            PaymentContract: {
                encode(message: _141.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.PaymentContract;
                fromJSON(object: any): _141.PaymentContract;
                toJSON(message: _141.PaymentContract): unknown;
                fromPartial(object: Partial<_141.PaymentContract>): _141.PaymentContract;
            };
            Subscription: {
                encode(message: _141.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Subscription;
                fromJSON(object: any): _141.Subscription;
                toJSON(message: _141.Subscription): unknown;
                fromPartial(object: Partial<_141.Subscription>): _141.Subscription;
            };
            BlockPeriod: {
                encode(message: _141.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.BlockPeriod;
                fromJSON(object: any): _141.BlockPeriod;
                toJSON(message: _141.BlockPeriod): unknown;
                fromPartial(object: Partial<_141.BlockPeriod>): _141.BlockPeriod;
            };
            TimePeriod: {
                encode(message: _141.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.TimePeriod;
                fromJSON(object: any): _141.TimePeriod;
                toJSON(message: _141.TimePeriod): unknown;
                fromPartial(object: Partial<_141.TimePeriod>): _141.TimePeriod;
            };
            TestPeriod: {
                encode(message: _141.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.TestPeriod;
                fromJSON(object: any): _141.TestPeriod;
                toJSON(message: _141.TestPeriod): unknown;
                fromPartial(object: Partial<_141.TestPeriod>): _141.TestPeriod;
            };
            GenesisState: {
                encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                fromJSON(object: any): _140.GenesisState;
                toJSON(message: _140.GenesisState): unknown;
                fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
            };
        };
    }
    namespace project {
        const v1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                projectDoc(request: _146.QueryProjectDocRequest): Promise<_146.QueryProjectDocResponse>;
                projectAccounts(request: _146.QueryProjectAccountsRequest): Promise<_146.QueryProjectAccountsResponse>;
                projectTx(request: _146.QueryProjectTxRequest): Promise<_146.QueryProjectTxResponse>;
                params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
            };
            MsgCreateProject: {
                encode(message: _147.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateProject;
                fromJSON(object: any): _147.MsgCreateProject;
                toJSON(message: _147.MsgCreateProject): unknown;
                fromPartial(object: Partial<_147.MsgCreateProject>): _147.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(_: _147.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateProjectResponse;
                fromJSON(_: any): _147.MsgCreateProjectResponse;
                toJSON(_: _147.MsgCreateProjectResponse): unknown;
                fromPartial(_: Partial<_147.MsgCreateProjectResponse>): _147.MsgCreateProjectResponse;
            };
            MsgUpdateProjectStatus: {
                encode(message: _147.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateProjectStatus;
                fromJSON(object: any): _147.MsgUpdateProjectStatus;
                toJSON(message: _147.MsgUpdateProjectStatus): unknown;
                fromPartial(object: Partial<_147.MsgUpdateProjectStatus>): _147.MsgUpdateProjectStatus;
            };
            MsgUpdateProjectStatusResponse: {
                encode(_: _147.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateProjectStatusResponse;
                fromJSON(_: any): _147.MsgUpdateProjectStatusResponse;
                toJSON(_: _147.MsgUpdateProjectStatusResponse): unknown;
                fromPartial(_: Partial<_147.MsgUpdateProjectStatusResponse>): _147.MsgUpdateProjectStatusResponse;
            };
            MsgCreateAgent: {
                encode(message: _147.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateAgent;
                fromJSON(object: any): _147.MsgCreateAgent;
                toJSON(message: _147.MsgCreateAgent): unknown;
                fromPartial(object: Partial<_147.MsgCreateAgent>): _147.MsgCreateAgent;
            };
            MsgCreateAgentResponse: {
                encode(_: _147.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateAgentResponse;
                fromJSON(_: any): _147.MsgCreateAgentResponse;
                toJSON(_: _147.MsgCreateAgentResponse): unknown;
                fromPartial(_: Partial<_147.MsgCreateAgentResponse>): _147.MsgCreateAgentResponse;
            };
            MsgUpdateAgent: {
                encode(message: _147.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateAgent;
                fromJSON(object: any): _147.MsgUpdateAgent;
                toJSON(message: _147.MsgUpdateAgent): unknown;
                fromPartial(object: Partial<_147.MsgUpdateAgent>): _147.MsgUpdateAgent;
            };
            MsgUpdateAgentResponse: {
                encode(_: _147.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateAgentResponse;
                fromJSON(_: any): _147.MsgUpdateAgentResponse;
                toJSON(_: _147.MsgUpdateAgentResponse): unknown;
                fromPartial(_: Partial<_147.MsgUpdateAgentResponse>): _147.MsgUpdateAgentResponse;
            };
            MsgCreateClaim: {
                encode(message: _147.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateClaim;
                fromJSON(object: any): _147.MsgCreateClaim;
                toJSON(message: _147.MsgCreateClaim): unknown;
                fromPartial(object: Partial<_147.MsgCreateClaim>): _147.MsgCreateClaim;
            };
            MsgCreateClaimResponse: {
                encode(_: _147.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateClaimResponse;
                fromJSON(_: any): _147.MsgCreateClaimResponse;
                toJSON(_: _147.MsgCreateClaimResponse): unknown;
                fromPartial(_: Partial<_147.MsgCreateClaimResponse>): _147.MsgCreateClaimResponse;
            };
            MsgCreateEvaluation: {
                encode(message: _147.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateEvaluation;
                fromJSON(object: any): _147.MsgCreateEvaluation;
                toJSON(message: _147.MsgCreateEvaluation): unknown;
                fromPartial(object: Partial<_147.MsgCreateEvaluation>): _147.MsgCreateEvaluation;
            };
            MsgCreateEvaluationResponse: {
                encode(_: _147.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateEvaluationResponse;
                fromJSON(_: any): _147.MsgCreateEvaluationResponse;
                toJSON(_: _147.MsgCreateEvaluationResponse): unknown;
                fromPartial(_: Partial<_147.MsgCreateEvaluationResponse>): _147.MsgCreateEvaluationResponse;
            };
            MsgWithdrawFunds: {
                encode(message: _147.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgWithdrawFunds;
                fromJSON(object: any): _147.MsgWithdrawFunds;
                toJSON(message: _147.MsgWithdrawFunds): unknown;
                fromPartial(object: Partial<_147.MsgWithdrawFunds>): _147.MsgWithdrawFunds;
            };
            MsgWithdrawFundsResponse: {
                encode(_: _147.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgWithdrawFundsResponse;
                fromJSON(_: any): _147.MsgWithdrawFundsResponse;
                toJSON(_: _147.MsgWithdrawFundsResponse): unknown;
                fromPartial(_: Partial<_147.MsgWithdrawFundsResponse>): _147.MsgWithdrawFundsResponse;
            };
            MsgUpdateProjectDoc: {
                encode(message: _147.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateProjectDoc;
                fromJSON(object: any): _147.MsgUpdateProjectDoc;
                toJSON(message: _147.MsgUpdateProjectDoc): unknown;
                fromPartial(object: Partial<_147.MsgUpdateProjectDoc>): _147.MsgUpdateProjectDoc;
            };
            MsgUpdateProjectDocResponse: {
                encode(_: _147.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateProjectDocResponse;
                fromJSON(_: any): _147.MsgUpdateProjectDocResponse;
                toJSON(_: _147.MsgUpdateProjectDocResponse): unknown;
                fromPartial(_: Partial<_147.MsgUpdateProjectDocResponse>): _147.MsgUpdateProjectDocResponse;
            };
            QueryProjectDocRequest: {
                encode(message: _146.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProjectDocRequest;
                fromJSON(object: any): _146.QueryProjectDocRequest;
                toJSON(message: _146.QueryProjectDocRequest): unknown;
                fromPartial(object: Partial<_146.QueryProjectDocRequest>): _146.QueryProjectDocRequest;
            };
            QueryProjectDocResponse: {
                encode(message: _146.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProjectDocResponse;
                fromJSON(object: any): _146.QueryProjectDocResponse;
                toJSON(message: _146.QueryProjectDocResponse): unknown;
                fromPartial(object: Partial<_146.QueryProjectDocResponse>): _146.QueryProjectDocResponse;
            };
            QueryProjectAccountsRequest: {
                encode(message: _146.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProjectAccountsRequest;
                fromJSON(object: any): _146.QueryProjectAccountsRequest;
                toJSON(message: _146.QueryProjectAccountsRequest): unknown;
                fromPartial(object: Partial<_146.QueryProjectAccountsRequest>): _146.QueryProjectAccountsRequest;
            };
            QueryProjectAccountsResponse: {
                encode(message: _146.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProjectAccountsResponse;
                fromJSON(object: any): _146.QueryProjectAccountsResponse;
                toJSON(message: _146.QueryProjectAccountsResponse): unknown;
                fromPartial(object: Partial<_146.QueryProjectAccountsResponse>): _146.QueryProjectAccountsResponse;
            };
            QueryProjectTxRequest: {
                encode(message: _146.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProjectTxRequest;
                fromJSON(object: any): _146.QueryProjectTxRequest;
                toJSON(message: _146.QueryProjectTxRequest): unknown;
                fromPartial(object: Partial<_146.QueryProjectTxRequest>): _146.QueryProjectTxRequest;
            };
            QueryProjectTxResponse: {
                encode(message: _146.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProjectTxResponse;
                fromJSON(object: any): _146.QueryProjectTxResponse;
                toJSON(message: _146.QueryProjectTxResponse): unknown;
                fromPartial(object: Partial<_146.QueryProjectTxResponse>): _146.QueryProjectTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _146.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsRequest;
                fromJSON(_: any): _146.QueryParamsRequest;
                toJSON(_: _146.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_146.QueryParamsRequest>): _146.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _146.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsResponse;
                fromJSON(object: any): _146.QueryParamsResponse;
                toJSON(message: _146.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_146.QueryParamsResponse>): _146.QueryParamsResponse;
            };
            UpdateProjectStatusDoc: {
                encode(message: _145.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpdateProjectStatusDoc;
                fromJSON(object: any): _145.UpdateProjectStatusDoc;
                toJSON(message: _145.UpdateProjectStatusDoc): unknown;
                fromPartial(object: Partial<_145.UpdateProjectStatusDoc>): _145.UpdateProjectStatusDoc;
            };
            CreateAgentDoc: {
                encode(message: _145.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.CreateAgentDoc;
                fromJSON(object: any): _145.CreateAgentDoc;
                toJSON(message: _145.CreateAgentDoc): unknown;
                fromPartial(object: Partial<_145.CreateAgentDoc>): _145.CreateAgentDoc;
            };
            UpdateAgentDoc: {
                encode(message: _145.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpdateAgentDoc;
                fromJSON(object: any): _145.UpdateAgentDoc;
                toJSON(message: _145.UpdateAgentDoc): unknown;
                fromPartial(object: Partial<_145.UpdateAgentDoc>): _145.UpdateAgentDoc;
            };
            CreateClaimDoc: {
                encode(message: _145.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.CreateClaimDoc;
                fromJSON(object: any): _145.CreateClaimDoc;
                toJSON(message: _145.CreateClaimDoc): unknown;
                fromPartial(object: Partial<_145.CreateClaimDoc>): _145.CreateClaimDoc;
            };
            CreateEvaluationDoc: {
                encode(message: _145.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.CreateEvaluationDoc;
                fromJSON(object: any): _145.CreateEvaluationDoc;
                toJSON(message: _145.CreateEvaluationDoc): unknown;
                fromPartial(object: Partial<_145.CreateEvaluationDoc>): _145.CreateEvaluationDoc;
            };
            WithdrawFundsDoc: {
                encode(message: _145.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.WithdrawFundsDoc;
                fromJSON(object: any): _145.WithdrawFundsDoc;
                toJSON(message: _145.WithdrawFundsDoc): unknown;
                fromPartial(object: Partial<_145.WithdrawFundsDoc>): _145.WithdrawFundsDoc;
            };
            ProjectDoc: {
                encode(message: _145.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ProjectDoc;
                fromJSON(object: any): _145.ProjectDoc;
                toJSON(message: _145.ProjectDoc): unknown;
                fromPartial(object: Partial<_145.ProjectDoc>): _145.ProjectDoc;
            };
            WithdrawalInfoDoc: {
                encode(message: _145.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.WithdrawalInfoDoc;
                fromJSON(object: any): _145.WithdrawalInfoDoc;
                toJSON(message: _145.WithdrawalInfoDoc): unknown;
                fromPartial(object: Partial<_145.WithdrawalInfoDoc>): _145.WithdrawalInfoDoc;
            };
            Params: {
                encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
                fromJSON(object: any): _145.Params;
                toJSON(message: _145.Params): unknown;
                fromPartial(object: Partial<_145.Params>): _145.Params;
            };
            Claim: {
                encode(message: _145.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Claim;
                fromJSON(object: any): _145.Claim;
                toJSON(message: _145.Claim): unknown;
                fromPartial(object: Partial<_145.Claim>): _145.Claim;
            };
            GenesisAccountMap_MapEntry: {
                encode(message: _145.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisAccountMap_MapEntry;
                fromJSON(object: any): _145.GenesisAccountMap_MapEntry;
                toJSON(message: _145.GenesisAccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_145.GenesisAccountMap_MapEntry>): _145.GenesisAccountMap_MapEntry;
            };
            GenesisAccountMap: {
                encode(message: _145.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisAccountMap;
                fromJSON(object: any): _145.GenesisAccountMap;
                toJSON(message: _145.GenesisAccountMap): unknown;
                fromPartial(object: Partial<_145.GenesisAccountMap>): _145.GenesisAccountMap;
            };
            AccountMap_MapEntry: {
                encode(message: _145.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AccountMap_MapEntry;
                fromJSON(object: any): _145.AccountMap_MapEntry;
                toJSON(message: _145.AccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_145.AccountMap_MapEntry>): _145.AccountMap_MapEntry;
            };
            AccountMap: {
                encode(message: _145.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AccountMap;
                fromJSON(object: any): _145.AccountMap;
                toJSON(message: _145.AccountMap): unknown;
                fromPartial(object: Partial<_145.AccountMap>): _145.AccountMap;
            };
            WithdrawalInfoDocs: {
                encode(message: _145.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.WithdrawalInfoDocs;
                fromJSON(object: any): _145.WithdrawalInfoDocs;
                toJSON(message: _145.WithdrawalInfoDocs): unknown;
                fromPartial(object: Partial<_145.WithdrawalInfoDocs>): _145.WithdrawalInfoDocs;
            };
            Claims: {
                encode(message: _145.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Claims;
                fromJSON(object: any): _145.Claims;
                toJSON(message: _145.Claims): unknown;
                fromPartial(object: Partial<_145.Claims>): _145.Claims;
            };
            GenesisState: {
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromJSON(object: any): _144.GenesisState;
                toJSON(message: _144.GenesisState): unknown;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenList(request: _150.QueryTokenListRequest): Promise<_150.QueryTokenListResponse>;
                tokenDoc(request: _150.QueryTokenDocRequest): Promise<_150.QueryTokenDocResponse>;
                tokenConfig(request?: _150.QueryTokenConfigRequest): Promise<_150.QueryTokenConfigResponse>;
            };
            MsgCreateToken: {
                encode(message: _152.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgCreateToken;
                fromJSON(object: any): _152.MsgCreateToken;
                toJSON(message: _152.MsgCreateToken): unknown;
                fromPartial(object: Partial<_152.MsgCreateToken>): _152.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _152.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgCreateTokenResponse;
                fromJSON(_: any): _152.MsgCreateTokenResponse;
                toJSON(_: _152.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_152.MsgCreateTokenResponse>): _152.MsgCreateTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _152.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgTransferToken;
                fromJSON(object: any): _152.MsgTransferToken;
                toJSON(message: _152.MsgTransferToken): unknown;
                fromPartial(object: Partial<_152.MsgTransferToken>): _152.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _152.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgTransferTokenResponse;
                fromJSON(_: any): _152.MsgTransferTokenResponse;
                toJSON(_: _152.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_152.MsgTransferTokenResponse>): _152.MsgTransferTokenResponse;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
                fromJSON(object: any): _151.Params;
                toJSON(message: _151.Params): unknown;
                fromPartial(object: Partial<_151.Params>): _151.Params;
            };
            TokenDoc: {
                encode(_: _151.TokenDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.TokenDoc;
                fromJSON(_: any): _151.TokenDoc;
                toJSON(_: _151.TokenDoc): unknown;
                fromPartial(_: Partial<_151.TokenDoc>): _151.TokenDoc;
            };
            QueryTokenListRequest: {
                encode(message: _150.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTokenListRequest;
                fromJSON(object: any): _150.QueryTokenListRequest;
                toJSON(message: _150.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_150.QueryTokenListRequest>): _150.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(_: _150.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTokenListResponse;
                fromJSON(_: any): _150.QueryTokenListResponse;
                toJSON(_: _150.QueryTokenListResponse): unknown;
                fromPartial(_: Partial<_150.QueryTokenListResponse>): _150.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _150.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTokenDocRequest;
                fromJSON(object: any): _150.QueryTokenDocRequest;
                toJSON(message: _150.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_150.QueryTokenDocRequest>): _150.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(_: _150.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTokenDocResponse;
                fromJSON(_: any): _150.QueryTokenDocResponse;
                toJSON(_: _150.QueryTokenDocResponse): unknown;
                fromPartial(_: Partial<_150.QueryTokenDocResponse>): _150.QueryTokenDocResponse;
            };
            QueryTokenConfigRequest: {
                encode(_: _150.QueryTokenConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTokenConfigRequest;
                fromJSON(_: any): _150.QueryTokenConfigRequest;
                toJSON(_: _150.QueryTokenConfigRequest): unknown;
                fromPartial(_: Partial<_150.QueryTokenConfigRequest>): _150.QueryTokenConfigRequest;
            };
            QueryTokenConfigResponse_MapEntry: {
                encode(message: _150.QueryTokenConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTokenConfigResponse_MapEntry;
                fromJSON(object: any): _150.QueryTokenConfigResponse_MapEntry;
                toJSON(message: _150.QueryTokenConfigResponse_MapEntry): unknown;
                fromPartial(object: Partial<_150.QueryTokenConfigResponse_MapEntry>): _150.QueryTokenConfigResponse_MapEntry;
            };
            QueryTokenConfigResponse: {
                encode(message: _150.QueryTokenConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTokenConfigResponse;
                fromJSON(object: any): _150.QueryTokenConfigResponse;
                toJSON(message: _150.QueryTokenConfigResponse): unknown;
                fromPartial(object: Partial<_150.QueryTokenConfigResponse>): _150.QueryTokenConfigResponse;
            };
            InitializeTokenContract: {
                encode(message: _149.InitializeTokenContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.InitializeTokenContract;
                fromJSON(object: any): _149.InitializeTokenContract;
                toJSON(message: _149.InitializeTokenContract): unknown;
                fromPartial(object: Partial<_149.InitializeTokenContract>): _149.InitializeTokenContract;
            };
            GenesisState: {
                encode(message: _148.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GenesisState;
                fromJSON(object: any): _148.GenesisState;
                toJSON(message: _148.GenesisState): unknown;
                fromPartial(object: Partial<_148.GenesisState>): _148.GenesisState;
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
                    v1beta1: _213.MsgClientImpl;
                };
                entity: {
                    v1beta1: _214.MsgClientImpl;
                };
                iid: {
                    v1beta1: _215.MsgClientImpl;
                };
                payments: {
                    v1: _216.MsgClientImpl;
                };
                project: {
                    v1: _217.MsgClientImpl;
                };
                token: {
                    v1beta1: _218.MsgClientImpl;
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
                        bonds(request?: _128.QueryBondsRequest): Promise<_128.QueryBondsResponse>;
                        bondsDetailed(request?: _128.QueryBondsDetailedRequest): Promise<_128.QueryBondsDetailedResponse>;
                        params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                        bond(request: _128.QueryBondRequest): Promise<_128.QueryBondResponse>;
                        batch(request: _128.QueryBatchRequest): Promise<_128.QueryBatchResponse>;
                        lastBatch(request: _128.QueryLastBatchRequest): Promise<_128.QueryLastBatchResponse>;
                        currentPrice(request: _128.QueryCurrentPriceRequest): Promise<_128.QueryCurrentPriceResponse>;
                        currentReserve(request: _128.QueryCurrentReserveRequest): Promise<_128.QueryCurrentReserveResponse>;
                        availableReserve(request: _128.QueryAvailableReserveRequest): Promise<_128.QueryAvailableReserveResponse>;
                        customPrice(request: _128.QueryCustomPriceRequest): Promise<_128.QueryCustomPriceResponse>;
                        buyPrice(request: _128.QueryBuyPriceRequest): Promise<_128.QueryBuyPriceResponse>;
                        sellReturn(request: _128.QuerySellReturnRequest): Promise<_128.QuerySellReturnResponse>;
                        swapReturn(request: _128.QuerySwapReturnRequest): Promise<_128.QuerySwapReturnResponse>;
                        alphaMaximums(request: _128.QueryAlphaMaximumsRequest): Promise<_128.QueryAlphaMaximumsResponse>;
                    };
                };
                entity: {
                    v1beta1: {
                        entityList(request: _133.QueryEntityListRequest): Promise<_133.QueryEntityListResponse>;
                        entityDoc(request: _133.QueryEntityDocRequest): Promise<_133.QueryEntityDocResponse>;
                        entityConfig(request?: _133.QueryEntityConfigRequest): Promise<_133.QueryEntityConfigResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request: _138.QueryIidDocumentsRequest): Promise<_138.QueryIidDocumentsResponse>;
                        iidDocument(request: _138.QueryIidDocumentRequest): Promise<_138.QueryIidDocumentResponse>;
                        metaData(request: _138.QueryIidMetaDataRequest): Promise<_138.QueryIidMetaDataResponse>;
                    };
                };
                payments: {
                    v1: {
                        paymentTemplate(request: _142.QueryPaymentTemplateRequest): Promise<_142.QueryPaymentTemplateResponse>;
                        paymentContract(request: _142.QueryPaymentContractRequest): Promise<_142.QueryPaymentContractResponse>;
                        paymentContractsByIdPrefix(request: _142.QueryPaymentContractsByIdPrefixRequest): Promise<_142.QueryPaymentContractsByIdPrefixResponse>;
                        subscription(request: _142.QuerySubscriptionRequest): Promise<_142.QuerySubscriptionResponse>;
                    };
                };
                project: {
                    v1: {
                        projectDoc(request: _146.QueryProjectDocRequest): Promise<_146.QueryProjectDocResponse>;
                        projectAccounts(request: _146.QueryProjectAccountsRequest): Promise<_146.QueryProjectAccountsResponse>;
                        projectTx(request: _146.QueryProjectTxRequest): Promise<_146.QueryProjectTxResponse>;
                        params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        tokenList(request: _150.QueryTokenListRequest): Promise<_150.QueryTokenListResponse>;
                        tokenDoc(request: _150.QueryTokenDocRequest): Promise<_150.QueryTokenDocResponse>;
                        tokenConfig(request?: _150.QueryTokenConfigRequest): Promise<_150.QueryTokenConfigResponse>;
                    };
                };
            };
        }>;
    };
}
