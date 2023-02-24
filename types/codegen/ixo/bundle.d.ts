import * as _132 from "./bonds/v1beta1/bonds";
import * as _133 from "./bonds/v1beta1/genesis";
import * as _134 from "./bonds/v1beta1/query";
import * as _135 from "./bonds/v1beta1/tx";
import * as _136 from "./entity/v1beta1/entity";
import * as _137 from "./entity/v1beta1/event";
import * as _138 from "./entity/v1beta1/genesis";
import * as _139 from "./entity/v1beta1/proposal";
import * as _140 from "./entity/v1beta1/query";
import * as _141 from "./entity/v1beta1/tx";
import * as _142 from "./iid/v1beta1/event";
import * as _143 from "./iid/v1beta1/genesis";
import * as _144 from "./iid/v1beta1/iid";
import * as _145 from "./iid/v1beta1/query";
import * as _146 from "./iid/v1beta1/tx";
import * as _147 from "./iid/v1beta1/types";
import * as _148 from "./payments/v1/genesis";
import * as _149 from "./payments/v1/payments";
import * as _150 from "./payments/v1/query";
import * as _151 from "./payments/v1/tx";
import * as _152 from "./project/v1/genesis";
import * as _153 from "./project/v1/project";
import * as _154 from "./project/v1/query";
import * as _155 from "./project/v1/tx";
import * as _156 from "./token/v1beta1/authz";
import * as _157 from "./token/v1beta1/event";
import * as _158 from "./token/v1beta1/genesis";
import * as _159 from "./token/v1beta1/proposal";
import * as _160 from "./token/v1beta1/query";
import * as _161 from "./token/v1beta1/token";
import * as _162 from "./token/v1beta1/tx";
import * as _219 from "./bonds/v1beta1/query.rpc.Query";
import * as _220 from "./entity/v1beta1/query.rpc.Query";
import * as _221 from "./iid/v1beta1/query.rpc.Query";
import * as _222 from "./payments/v1/query.rpc.Query";
import * as _223 from "./project/v1/query.rpc.Query";
import * as _224 from "./token/v1beta1/query.rpc.Query";
import * as _225 from "./bonds/v1beta1/tx.rpc.msg";
import * as _226 from "./entity/v1beta1/tx.rpc.msg";
import * as _227 from "./iid/v1beta1/tx.rpc.msg";
import * as _228 from "./payments/v1/tx.rpc.msg";
import * as _229 from "./project/v1/tx.rpc.msg";
import * as _230 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                bonds(request?: _134.QueryBondsRequest): Promise<_134.QueryBondsResponse>;
                bondsDetailed(request?: _134.QueryBondsDetailedRequest): Promise<_134.QueryBondsDetailedResponse>;
                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                bond(request: _134.QueryBondRequest): Promise<_134.QueryBondResponse>;
                batch(request: _134.QueryBatchRequest): Promise<_134.QueryBatchResponse>;
                lastBatch(request: _134.QueryLastBatchRequest): Promise<_134.QueryLastBatchResponse>;
                currentPrice(request: _134.QueryCurrentPriceRequest): Promise<_134.QueryCurrentPriceResponse>;
                currentReserve(request: _134.QueryCurrentReserveRequest): Promise<_134.QueryCurrentReserveResponse>;
                availableReserve(request: _134.QueryAvailableReserveRequest): Promise<_134.QueryAvailableReserveResponse>;
                customPrice(request: _134.QueryCustomPriceRequest): Promise<_134.QueryCustomPriceResponse>;
                buyPrice(request: _134.QueryBuyPriceRequest): Promise<_134.QueryBuyPriceResponse>;
                sellReturn(request: _134.QuerySellReturnRequest): Promise<_134.QuerySellReturnResponse>;
                swapReturn(request: _134.QuerySwapReturnRequest): Promise<_134.QuerySwapReturnResponse>;
                alphaMaximums(request: _134.QueryAlphaMaximumsRequest): Promise<_134.QueryAlphaMaximumsResponse>;
            };
            MsgCreateBond: {
                encode(message: _135.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCreateBond;
                fromJSON(object: any): _135.MsgCreateBond;
                toJSON(message: _135.MsgCreateBond): unknown;
                fromPartial(object: Partial<_135.MsgCreateBond>): _135.MsgCreateBond;
            };
            MsgCreateBondResponse: {
                encode(_: _135.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCreateBondResponse;
                fromJSON(_: any): _135.MsgCreateBondResponse;
                toJSON(_: _135.MsgCreateBondResponse): unknown;
                fromPartial(_: Partial<_135.MsgCreateBondResponse>): _135.MsgCreateBondResponse;
            };
            MsgEditBond: {
                encode(message: _135.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgEditBond;
                fromJSON(object: any): _135.MsgEditBond;
                toJSON(message: _135.MsgEditBond): unknown;
                fromPartial(object: Partial<_135.MsgEditBond>): _135.MsgEditBond;
            };
            MsgEditBondResponse: {
                encode(_: _135.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgEditBondResponse;
                fromJSON(_: any): _135.MsgEditBondResponse;
                toJSON(_: _135.MsgEditBondResponse): unknown;
                fromPartial(_: Partial<_135.MsgEditBondResponse>): _135.MsgEditBondResponse;
            };
            MsgSetNextAlpha: {
                encode(message: _135.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSetNextAlpha;
                fromJSON(object: any): _135.MsgSetNextAlpha;
                toJSON(message: _135.MsgSetNextAlpha): unknown;
                fromPartial(object: Partial<_135.MsgSetNextAlpha>): _135.MsgSetNextAlpha;
            };
            MsgSetNextAlphaResponse: {
                encode(_: _135.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSetNextAlphaResponse;
                fromJSON(_: any): _135.MsgSetNextAlphaResponse;
                toJSON(_: _135.MsgSetNextAlphaResponse): unknown;
                fromPartial(_: Partial<_135.MsgSetNextAlphaResponse>): _135.MsgSetNextAlphaResponse;
            };
            MsgUpdateBondState: {
                encode(message: _135.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateBondState;
                fromJSON(object: any): _135.MsgUpdateBondState;
                toJSON(message: _135.MsgUpdateBondState): unknown;
                fromPartial(object: Partial<_135.MsgUpdateBondState>): _135.MsgUpdateBondState;
            };
            MsgUpdateBondStateResponse: {
                encode(_: _135.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateBondStateResponse;
                fromJSON(_: any): _135.MsgUpdateBondStateResponse;
                toJSON(_: _135.MsgUpdateBondStateResponse): unknown;
                fromPartial(_: Partial<_135.MsgUpdateBondStateResponse>): _135.MsgUpdateBondStateResponse;
            };
            MsgBuy: {
                encode(message: _135.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgBuy;
                fromJSON(object: any): _135.MsgBuy;
                toJSON(message: _135.MsgBuy): unknown;
                fromPartial(object: Partial<_135.MsgBuy>): _135.MsgBuy;
            };
            MsgBuyResponse: {
                encode(_: _135.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgBuyResponse;
                fromJSON(_: any): _135.MsgBuyResponse;
                toJSON(_: _135.MsgBuyResponse): unknown;
                fromPartial(_: Partial<_135.MsgBuyResponse>): _135.MsgBuyResponse;
            };
            MsgSell: {
                encode(message: _135.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSell;
                fromJSON(object: any): _135.MsgSell;
                toJSON(message: _135.MsgSell): unknown;
                fromPartial(object: Partial<_135.MsgSell>): _135.MsgSell;
            };
            MsgSellResponse: {
                encode(_: _135.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSellResponse;
                fromJSON(_: any): _135.MsgSellResponse;
                toJSON(_: _135.MsgSellResponse): unknown;
                fromPartial(_: Partial<_135.MsgSellResponse>): _135.MsgSellResponse;
            };
            MsgSwap: {
                encode(message: _135.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwap;
                fromJSON(object: any): _135.MsgSwap;
                toJSON(message: _135.MsgSwap): unknown;
                fromPartial(object: Partial<_135.MsgSwap>): _135.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _135.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapResponse;
                fromJSON(_: any): _135.MsgSwapResponse;
                toJSON(_: _135.MsgSwapResponse): unknown;
                fromPartial(_: Partial<_135.MsgSwapResponse>): _135.MsgSwapResponse;
            };
            MsgMakeOutcomePayment: {
                encode(message: _135.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgMakeOutcomePayment;
                fromJSON(object: any): _135.MsgMakeOutcomePayment;
                toJSON(message: _135.MsgMakeOutcomePayment): unknown;
                fromPartial(object: Partial<_135.MsgMakeOutcomePayment>): _135.MsgMakeOutcomePayment;
            };
            MsgMakeOutcomePaymentResponse: {
                encode(_: _135.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgMakeOutcomePaymentResponse;
                fromJSON(_: any): _135.MsgMakeOutcomePaymentResponse;
                toJSON(_: _135.MsgMakeOutcomePaymentResponse): unknown;
                fromPartial(_: Partial<_135.MsgMakeOutcomePaymentResponse>): _135.MsgMakeOutcomePaymentResponse;
            };
            MsgWithdrawShare: {
                encode(message: _135.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgWithdrawShare;
                fromJSON(object: any): _135.MsgWithdrawShare;
                toJSON(message: _135.MsgWithdrawShare): unknown;
                fromPartial(object: Partial<_135.MsgWithdrawShare>): _135.MsgWithdrawShare;
            };
            MsgWithdrawShareResponse: {
                encode(_: _135.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgWithdrawShareResponse;
                fromJSON(_: any): _135.MsgWithdrawShareResponse;
                toJSON(_: _135.MsgWithdrawShareResponse): unknown;
                fromPartial(_: Partial<_135.MsgWithdrawShareResponse>): _135.MsgWithdrawShareResponse;
            };
            MsgWithdrawReserve: {
                encode(message: _135.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgWithdrawReserve;
                fromJSON(object: any): _135.MsgWithdrawReserve;
                toJSON(message: _135.MsgWithdrawReserve): unknown;
                fromPartial(object: Partial<_135.MsgWithdrawReserve>): _135.MsgWithdrawReserve;
            };
            MsgWithdrawReserveResponse: {
                encode(_: _135.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgWithdrawReserveResponse;
                fromJSON(_: any): _135.MsgWithdrawReserveResponse;
                toJSON(_: _135.MsgWithdrawReserveResponse): unknown;
                fromPartial(_: Partial<_135.MsgWithdrawReserveResponse>): _135.MsgWithdrawReserveResponse;
            };
            QueryBondsRequest: {
                encode(_: _134.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBondsRequest;
                fromJSON(_: any): _134.QueryBondsRequest;
                toJSON(_: _134.QueryBondsRequest): unknown;
                fromPartial(_: Partial<_134.QueryBondsRequest>): _134.QueryBondsRequest;
            };
            QueryBondsResponse: {
                encode(message: _134.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBondsResponse;
                fromJSON(object: any): _134.QueryBondsResponse;
                toJSON(message: _134.QueryBondsResponse): unknown;
                fromPartial(object: Partial<_134.QueryBondsResponse>): _134.QueryBondsResponse;
            };
            QueryBondsDetailedRequest: {
                encode(_: _134.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBondsDetailedRequest;
                fromJSON(_: any): _134.QueryBondsDetailedRequest;
                toJSON(_: _134.QueryBondsDetailedRequest): unknown;
                fromPartial(_: Partial<_134.QueryBondsDetailedRequest>): _134.QueryBondsDetailedRequest;
            };
            QueryBondsDetailedResponse: {
                encode(message: _134.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBondsDetailedResponse;
                fromJSON(object: any): _134.QueryBondsDetailedResponse;
                toJSON(message: _134.QueryBondsDetailedResponse): unknown;
                fromPartial(object: Partial<_134.QueryBondsDetailedResponse>): _134.QueryBondsDetailedResponse;
            };
            QueryBondRequest: {
                encode(message: _134.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBondRequest;
                fromJSON(object: any): _134.QueryBondRequest;
                toJSON(message: _134.QueryBondRequest): unknown;
                fromPartial(object: Partial<_134.QueryBondRequest>): _134.QueryBondRequest;
            };
            QueryBondResponse: {
                encode(message: _134.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBondResponse;
                fromJSON(object: any): _134.QueryBondResponse;
                toJSON(message: _134.QueryBondResponse): unknown;
                fromPartial(object: Partial<_134.QueryBondResponse>): _134.QueryBondResponse;
            };
            QueryBatchRequest: {
                encode(message: _134.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBatchRequest;
                fromJSON(object: any): _134.QueryBatchRequest;
                toJSON(message: _134.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_134.QueryBatchRequest>): _134.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _134.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBatchResponse;
                fromJSON(object: any): _134.QueryBatchResponse;
                toJSON(message: _134.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_134.QueryBatchResponse>): _134.QueryBatchResponse;
            };
            QueryLastBatchRequest: {
                encode(message: _134.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryLastBatchRequest;
                fromJSON(object: any): _134.QueryLastBatchRequest;
                toJSON(message: _134.QueryLastBatchRequest): unknown;
                fromPartial(object: Partial<_134.QueryLastBatchRequest>): _134.QueryLastBatchRequest;
            };
            QueryLastBatchResponse: {
                encode(message: _134.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryLastBatchResponse;
                fromJSON(object: any): _134.QueryLastBatchResponse;
                toJSON(message: _134.QueryLastBatchResponse): unknown;
                fromPartial(object: Partial<_134.QueryLastBatchResponse>): _134.QueryLastBatchResponse;
            };
            QueryCurrentPriceRequest: {
                encode(message: _134.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCurrentPriceRequest;
                fromJSON(object: any): _134.QueryCurrentPriceRequest;
                toJSON(message: _134.QueryCurrentPriceRequest): unknown;
                fromPartial(object: Partial<_134.QueryCurrentPriceRequest>): _134.QueryCurrentPriceRequest;
            };
            QueryCurrentPriceResponse: {
                encode(message: _134.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCurrentPriceResponse;
                fromJSON(object: any): _134.QueryCurrentPriceResponse;
                toJSON(message: _134.QueryCurrentPriceResponse): unknown;
                fromPartial(object: Partial<_134.QueryCurrentPriceResponse>): _134.QueryCurrentPriceResponse;
            };
            QueryCurrentReserveRequest: {
                encode(message: _134.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCurrentReserveRequest;
                fromJSON(object: any): _134.QueryCurrentReserveRequest;
                toJSON(message: _134.QueryCurrentReserveRequest): unknown;
                fromPartial(object: Partial<_134.QueryCurrentReserveRequest>): _134.QueryCurrentReserveRequest;
            };
            QueryCurrentReserveResponse: {
                encode(message: _134.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCurrentReserveResponse;
                fromJSON(object: any): _134.QueryCurrentReserveResponse;
                toJSON(message: _134.QueryCurrentReserveResponse): unknown;
                fromPartial(object: Partial<_134.QueryCurrentReserveResponse>): _134.QueryCurrentReserveResponse;
            };
            QueryAvailableReserveRequest: {
                encode(message: _134.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAvailableReserveRequest;
                fromJSON(object: any): _134.QueryAvailableReserveRequest;
                toJSON(message: _134.QueryAvailableReserveRequest): unknown;
                fromPartial(object: Partial<_134.QueryAvailableReserveRequest>): _134.QueryAvailableReserveRequest;
            };
            QueryAvailableReserveResponse: {
                encode(message: _134.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAvailableReserveResponse;
                fromJSON(object: any): _134.QueryAvailableReserveResponse;
                toJSON(message: _134.QueryAvailableReserveResponse): unknown;
                fromPartial(object: Partial<_134.QueryAvailableReserveResponse>): _134.QueryAvailableReserveResponse;
            };
            QueryCustomPriceRequest: {
                encode(message: _134.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCustomPriceRequest;
                fromJSON(object: any): _134.QueryCustomPriceRequest;
                toJSON(message: _134.QueryCustomPriceRequest): unknown;
                fromPartial(object: Partial<_134.QueryCustomPriceRequest>): _134.QueryCustomPriceRequest;
            };
            QueryCustomPriceResponse: {
                encode(message: _134.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCustomPriceResponse;
                fromJSON(object: any): _134.QueryCustomPriceResponse;
                toJSON(message: _134.QueryCustomPriceResponse): unknown;
                fromPartial(object: Partial<_134.QueryCustomPriceResponse>): _134.QueryCustomPriceResponse;
            };
            QueryBuyPriceRequest: {
                encode(message: _134.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBuyPriceRequest;
                fromJSON(object: any): _134.QueryBuyPriceRequest;
                toJSON(message: _134.QueryBuyPriceRequest): unknown;
                fromPartial(object: Partial<_134.QueryBuyPriceRequest>): _134.QueryBuyPriceRequest;
            };
            QueryBuyPriceResponse: {
                encode(message: _134.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBuyPriceResponse;
                fromJSON(object: any): _134.QueryBuyPriceResponse;
                toJSON(message: _134.QueryBuyPriceResponse): unknown;
                fromPartial(object: Partial<_134.QueryBuyPriceResponse>): _134.QueryBuyPriceResponse;
            };
            QuerySellReturnRequest: {
                encode(message: _134.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySellReturnRequest;
                fromJSON(object: any): _134.QuerySellReturnRequest;
                toJSON(message: _134.QuerySellReturnRequest): unknown;
                fromPartial(object: Partial<_134.QuerySellReturnRequest>): _134.QuerySellReturnRequest;
            };
            QuerySellReturnResponse: {
                encode(message: _134.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySellReturnResponse;
                fromJSON(object: any): _134.QuerySellReturnResponse;
                toJSON(message: _134.QuerySellReturnResponse): unknown;
                fromPartial(object: Partial<_134.QuerySellReturnResponse>): _134.QuerySellReturnResponse;
            };
            QuerySwapReturnRequest: {
                encode(message: _134.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapReturnRequest;
                fromJSON(object: any): _134.QuerySwapReturnRequest;
                toJSON(message: _134.QuerySwapReturnRequest): unknown;
                fromPartial(object: Partial<_134.QuerySwapReturnRequest>): _134.QuerySwapReturnRequest;
            };
            QuerySwapReturnResponse: {
                encode(message: _134.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapReturnResponse;
                fromJSON(object: any): _134.QuerySwapReturnResponse;
                toJSON(message: _134.QuerySwapReturnResponse): unknown;
                fromPartial(object: Partial<_134.QuerySwapReturnResponse>): _134.QuerySwapReturnResponse;
            };
            QueryAlphaMaximumsRequest: {
                encode(message: _134.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAlphaMaximumsRequest;
                fromJSON(object: any): _134.QueryAlphaMaximumsRequest;
                toJSON(message: _134.QueryAlphaMaximumsRequest): unknown;
                fromPartial(object: Partial<_134.QueryAlphaMaximumsRequest>): _134.QueryAlphaMaximumsRequest;
            };
            QueryAlphaMaximumsResponse: {
                encode(message: _134.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAlphaMaximumsResponse;
                fromJSON(object: any): _134.QueryAlphaMaximumsResponse;
                toJSON(message: _134.QueryAlphaMaximumsResponse): unknown;
                fromPartial(object: Partial<_134.QueryAlphaMaximumsResponse>): _134.QueryAlphaMaximumsResponse;
            };
            QueryParamsRequest: {
                encode(_: _134.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsRequest;
                fromJSON(_: any): _134.QueryParamsRequest;
                toJSON(_: _134.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _134.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsResponse;
                fromJSON(object: any): _134.QueryParamsResponse;
                toJSON(message: _134.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                fromJSON(object: any): _133.GenesisState;
                toJSON(message: _133.GenesisState): unknown;
                fromPartial(object: Partial<_133.GenesisState>): _133.GenesisState;
            };
            FunctionParam: {
                encode(message: _132.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.FunctionParam;
                fromJSON(object: any): _132.FunctionParam;
                toJSON(message: _132.FunctionParam): unknown;
                fromPartial(object: Partial<_132.FunctionParam>): _132.FunctionParam;
            };
            BondDetails: {
                encode(message: _132.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BondDetails;
                fromJSON(object: any): _132.BondDetails;
                toJSON(message: _132.BondDetails): unknown;
                fromPartial(object: Partial<_132.BondDetails>): _132.BondDetails;
            };
            Bond: {
                encode(message: _132.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Bond;
                fromJSON(object: any): _132.Bond;
                toJSON(message: _132.Bond): unknown;
                fromPartial(object: Partial<_132.Bond>): _132.Bond;
            };
            BaseOrder: {
                encode(message: _132.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BaseOrder;
                fromJSON(object: any): _132.BaseOrder;
                toJSON(message: _132.BaseOrder): unknown;
                fromPartial(object: Partial<_132.BaseOrder>): _132.BaseOrder;
            };
            BuyOrder: {
                encode(message: _132.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BuyOrder;
                fromJSON(object: any): _132.BuyOrder;
                toJSON(message: _132.BuyOrder): unknown;
                fromPartial(object: Partial<_132.BuyOrder>): _132.BuyOrder;
            };
            SellOrder: {
                encode(message: _132.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SellOrder;
                fromJSON(object: any): _132.SellOrder;
                toJSON(message: _132.SellOrder): unknown;
                fromPartial(object: Partial<_132.SellOrder>): _132.SellOrder;
            };
            SwapOrder: {
                encode(message: _132.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SwapOrder;
                fromJSON(object: any): _132.SwapOrder;
                toJSON(message: _132.SwapOrder): unknown;
                fromPartial(object: Partial<_132.SwapOrder>): _132.SwapOrder;
            };
            Batch: {
                encode(message: _132.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Batch;
                fromJSON(object: any): _132.Batch;
                toJSON(message: _132.Batch): unknown;
                fromPartial(object: Partial<_132.Batch>): _132.Batch;
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromJSON(object: any): _132.Params;
                toJSON(message: _132.Params): unknown;
                fromPartial(object: Partial<_132.Params>): _132.Params;
            };
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                entity(request: _140.QueryEntityRequest): Promise<_140.QueryEntityResponse>;
                entityMetaData(request: _140.QueryEntityMetadataRequest): Promise<_140.QueryEntityMetadataResponse>;
                entityIidDocument(request: _140.QueryEntityIidDocumentRequest): Promise<_140.QueryEntityIidDocumentResponse>;
                entityVerified(request: _140.QueryEntityVerifiedRequest): Promise<_140.QueryEntityVerifiedResponse>;
                entityList(request?: _140.QueryEntityListRequest): Promise<_140.QueryEntityListResponse>;
            };
            MsgCreateEntity: {
                encode(message: _141.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgCreateEntity;
                fromJSON(object: any): _141.MsgCreateEntity;
                toJSON(message: _141.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_141.MsgCreateEntity>): _141.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _141.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgCreateEntityResponse;
                fromJSON(object: any): _141.MsgCreateEntityResponse;
                toJSON(message: _141.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_141.MsgCreateEntityResponse>): _141.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _141.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUpdateEntity;
                fromJSON(object: any): _141.MsgUpdateEntity;
                toJSON(message: _141.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_141.MsgUpdateEntity>): _141.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _141.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUpdateEntityResponse;
                fromJSON(_: any): _141.MsgUpdateEntityResponse;
                toJSON(_: _141.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_141.MsgUpdateEntityResponse>): _141.MsgUpdateEntityResponse;
            };
            MsgUpdateEntityVerified: {
                encode(message: _141.MsgUpdateEntityVerified, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUpdateEntityVerified;
                fromJSON(object: any): _141.MsgUpdateEntityVerified;
                toJSON(message: _141.MsgUpdateEntityVerified): unknown;
                fromPartial(object: Partial<_141.MsgUpdateEntityVerified>): _141.MsgUpdateEntityVerified;
            };
            MsgUpdateEntityVerifiedResponse: {
                encode(_: _141.MsgUpdateEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUpdateEntityVerifiedResponse;
                fromJSON(_: any): _141.MsgUpdateEntityVerifiedResponse;
                toJSON(_: _141.MsgUpdateEntityVerifiedResponse): unknown;
                fromPartial(_: Partial<_141.MsgUpdateEntityVerifiedResponse>): _141.MsgUpdateEntityVerifiedResponse;
            };
            MsgTransferEntity: {
                encode(message: _141.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgTransferEntity;
                fromJSON(object: any): _141.MsgTransferEntity;
                toJSON(message: _141.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_141.MsgTransferEntity>): _141.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _141.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgTransferEntityResponse;
                fromJSON(_: any): _141.MsgTransferEntityResponse;
                toJSON(_: _141.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_141.MsgTransferEntityResponse>): _141.MsgTransferEntityResponse;
            };
            QueryEntityRequest: {
                encode(message: _140.QueryEntityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityRequest;
                fromJSON(object: any): _140.QueryEntityRequest;
                toJSON(message: _140.QueryEntityRequest): unknown;
                fromPartial(object: Partial<_140.QueryEntityRequest>): _140.QueryEntityRequest;
            };
            QueryEntityResponse: {
                encode(message: _140.QueryEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityResponse;
                fromJSON(object: any): _140.QueryEntityResponse;
                toJSON(message: _140.QueryEntityResponse): unknown;
                fromPartial(object: Partial<_140.QueryEntityResponse>): _140.QueryEntityResponse;
            };
            QueryEntityMetadataRequest: {
                encode(message: _140.QueryEntityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityMetadataRequest;
                fromJSON(object: any): _140.QueryEntityMetadataRequest;
                toJSON(message: _140.QueryEntityMetadataRequest): unknown;
                fromPartial(object: Partial<_140.QueryEntityMetadataRequest>): _140.QueryEntityMetadataRequest;
            };
            QueryEntityMetadataResponse: {
                encode(message: _140.QueryEntityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityMetadataResponse;
                fromJSON(object: any): _140.QueryEntityMetadataResponse;
                toJSON(message: _140.QueryEntityMetadataResponse): unknown;
                fromPartial(object: Partial<_140.QueryEntityMetadataResponse>): _140.QueryEntityMetadataResponse;
            };
            QueryEntityIidDocumentRequest: {
                encode(message: _140.QueryEntityIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityIidDocumentRequest;
                fromJSON(object: any): _140.QueryEntityIidDocumentRequest;
                toJSON(message: _140.QueryEntityIidDocumentRequest): unknown;
                fromPartial(object: Partial<_140.QueryEntityIidDocumentRequest>): _140.QueryEntityIidDocumentRequest;
            };
            QueryEntityIidDocumentResponse: {
                encode(message: _140.QueryEntityIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityIidDocumentResponse;
                fromJSON(object: any): _140.QueryEntityIidDocumentResponse;
                toJSON(message: _140.QueryEntityIidDocumentResponse): unknown;
                fromPartial(object: Partial<_140.QueryEntityIidDocumentResponse>): _140.QueryEntityIidDocumentResponse;
            };
            QueryEntityVerifiedRequest: {
                encode(message: _140.QueryEntityVerifiedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityVerifiedRequest;
                fromJSON(object: any): _140.QueryEntityVerifiedRequest;
                toJSON(message: _140.QueryEntityVerifiedRequest): unknown;
                fromPartial(object: Partial<_140.QueryEntityVerifiedRequest>): _140.QueryEntityVerifiedRequest;
            };
            QueryEntityVerifiedResponse: {
                encode(message: _140.QueryEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityVerifiedResponse;
                fromJSON(object: any): _140.QueryEntityVerifiedResponse;
                toJSON(message: _140.QueryEntityVerifiedResponse): unknown;
                fromPartial(object: Partial<_140.QueryEntityVerifiedResponse>): _140.QueryEntityVerifiedResponse;
            };
            QueryEntityListRequest: {
                encode(message: _140.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityListRequest;
                fromJSON(object: any): _140.QueryEntityListRequest;
                toJSON(message: _140.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_140.QueryEntityListRequest>): _140.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(message: _140.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEntityListResponse;
                fromJSON(object: any): _140.QueryEntityListResponse;
                toJSON(message: _140.QueryEntityListResponse): unknown;
                fromPartial(object: Partial<_140.QueryEntityListResponse>): _140.QueryEntityListResponse;
            };
            InitializeNftContract: {
                encode(message: _139.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.InitializeNftContract;
                fromJSON(object: any): _139.InitializeNftContract;
                toJSON(message: _139.InitializeNftContract): unknown;
                fromPartial(object: Partial<_139.InitializeNftContract>): _139.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromJSON(object: any): _138.GenesisState;
                toJSON(message: _138.GenesisState): unknown;
                fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
            };
            EntityCreatedEvent: {
                encode(message: _137.EntityCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EntityCreatedEvent;
                fromJSON(object: any): _137.EntityCreatedEvent;
                toJSON(message: _137.EntityCreatedEvent): unknown;
                fromPartial(object: Partial<_137.EntityCreatedEvent>): _137.EntityCreatedEvent;
            };
            EntityUpdatedEvent: {
                encode(message: _137.EntityUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EntityUpdatedEvent;
                fromJSON(object: any): _137.EntityUpdatedEvent;
                toJSON(message: _137.EntityUpdatedEvent): unknown;
                fromPartial(object: Partial<_137.EntityUpdatedEvent>): _137.EntityUpdatedEvent;
            };
            EntityVerifiedUpdatedEvent: {
                encode(message: _137.EntityVerifiedUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EntityVerifiedUpdatedEvent;
                fromJSON(object: any): _137.EntityVerifiedUpdatedEvent;
                toJSON(message: _137.EntityVerifiedUpdatedEvent): unknown;
                fromPartial(object: Partial<_137.EntityVerifiedUpdatedEvent>): _137.EntityVerifiedUpdatedEvent;
            };
            EntityTransferredEvent: {
                encode(message: _137.EntityTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EntityTransferredEvent;
                fromJSON(object: any): _137.EntityTransferredEvent;
                toJSON(message: _137.EntityTransferredEvent): unknown;
                fromPartial(object: Partial<_137.EntityTransferredEvent>): _137.EntityTransferredEvent;
            };
            Params: {
                encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
                fromJSON(object: any): _136.Params;
                toJSON(message: _136.Params): unknown;
                fromPartial(object: Partial<_136.Params>): _136.Params;
            };
            Entity: {
                encode(message: _136.Entity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Entity;
                fromJSON(object: any): _136.Entity;
                toJSON(message: _136.Entity): unknown;
                fromPartial(object: Partial<_136.Entity>): _136.Entity;
            };
            EntityMetadata: {
                encode(message: _136.EntityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EntityMetadata;
                fromJSON(object: any): _136.EntityMetadata;
                toJSON(message: _136.EntityMetadata): unknown;
                fromPartial(object: Partial<_136.EntityMetadata>): _136.EntityMetadata;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _145.QueryIidDocumentsRequest): Promise<_145.QueryIidDocumentsResponse>;
                iidDocument(request: _145.QueryIidDocumentRequest): Promise<_145.QueryIidDocumentResponse>;
            };
            AccordedRight: {
                encode(message: _147.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AccordedRight;
                fromJSON(object: any): _147.AccordedRight;
                toJSON(message: _147.AccordedRight): unknown;
                fromPartial(object: Partial<_147.AccordedRight>): _147.AccordedRight;
            };
            LinkedResource: {
                encode(message: _147.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.LinkedResource;
                fromJSON(object: any): _147.LinkedResource;
                toJSON(message: _147.LinkedResource): unknown;
                fromPartial(object: Partial<_147.LinkedResource>): _147.LinkedResource;
            };
            LinkedEntity: {
                encode(message: _147.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.LinkedEntity;
                fromJSON(object: any): _147.LinkedEntity;
                toJSON(message: _147.LinkedEntity): unknown;
                fromPartial(object: Partial<_147.LinkedEntity>): _147.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _147.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.VerificationMethod;
                fromJSON(object: any): _147.VerificationMethod;
                toJSON(message: _147.VerificationMethod): unknown;
                fromPartial(object: Partial<_147.VerificationMethod>): _147.VerificationMethod;
            };
            Service: {
                encode(message: _147.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Service;
                fromJSON(object: any): _147.Service;
                toJSON(message: _147.Service): unknown;
                fromPartial(object: Partial<_147.Service>): _147.Service;
            };
            IidMetadata: {
                encode(message: _147.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.IidMetadata;
                fromJSON(object: any): _147.IidMetadata;
                toJSON(message: _147.IidMetadata): unknown;
                fromPartial(object: Partial<_147.IidMetadata>): _147.IidMetadata;
            };
            Verification: {
                encode(message: _146.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Verification;
                fromJSON(object: any): _146.Verification;
                toJSON(message: _146.Verification): unknown;
                fromPartial(object: Partial<_146.Verification>): _146.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _146.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCreateIidDocument;
                fromJSON(object: any): _146.MsgCreateIidDocument;
                toJSON(message: _146.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_146.MsgCreateIidDocument>): _146.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _146.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _146.MsgCreateIidDocumentResponse;
                toJSON(_: _146.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_146.MsgCreateIidDocumentResponse>): _146.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _146.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUpdateIidDocument;
                fromJSON(object: any): _146.MsgUpdateIidDocument;
                toJSON(message: _146.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_146.MsgUpdateIidDocument>): _146.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _146.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _146.MsgUpdateIidDocumentResponse;
                toJSON(_: _146.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_146.MsgUpdateIidDocumentResponse>): _146.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _146.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddVerification;
                fromJSON(object: any): _146.MsgAddVerification;
                toJSON(message: _146.MsgAddVerification): unknown;
                fromPartial(object: Partial<_146.MsgAddVerification>): _146.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _146.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddVerificationResponse;
                fromJSON(_: any): _146.MsgAddVerificationResponse;
                toJSON(_: _146.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_146.MsgAddVerificationResponse>): _146.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _146.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgSetVerificationRelationships;
                fromJSON(object: any): _146.MsgSetVerificationRelationships;
                toJSON(message: _146.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_146.MsgSetVerificationRelationships>): _146.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _146.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _146.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _146.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_146.MsgSetVerificationRelationshipsResponse>): _146.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _146.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgRevokeVerification;
                fromJSON(object: any): _146.MsgRevokeVerification;
                toJSON(message: _146.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_146.MsgRevokeVerification>): _146.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _146.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgRevokeVerificationResponse;
                fromJSON(_: any): _146.MsgRevokeVerificationResponse;
                toJSON(_: _146.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_146.MsgRevokeVerificationResponse>): _146.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _146.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddService;
                fromJSON(object: any): _146.MsgAddService;
                toJSON(message: _146.MsgAddService): unknown;
                fromPartial(object: Partial<_146.MsgAddService>): _146.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _146.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddServiceResponse;
                fromJSON(_: any): _146.MsgAddServiceResponse;
                toJSON(_: _146.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_146.MsgAddServiceResponse>): _146.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _146.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteService;
                fromJSON(object: any): _146.MsgDeleteService;
                toJSON(message: _146.MsgDeleteService): unknown;
                fromPartial(object: Partial<_146.MsgDeleteService>): _146.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _146.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteServiceResponse;
                fromJSON(_: any): _146.MsgDeleteServiceResponse;
                toJSON(_: _146.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_146.MsgDeleteServiceResponse>): _146.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _146.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddController;
                fromJSON(object: any): _146.MsgAddController;
                toJSON(message: _146.MsgAddController): unknown;
                fromPartial(object: Partial<_146.MsgAddController>): _146.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _146.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddControllerResponse;
                fromJSON(_: any): _146.MsgAddControllerResponse;
                toJSON(_: _146.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_146.MsgAddControllerResponse>): _146.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _146.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteController;
                fromJSON(object: any): _146.MsgDeleteController;
                toJSON(message: _146.MsgDeleteController): unknown;
                fromPartial(object: Partial<_146.MsgDeleteController>): _146.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _146.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteControllerResponse;
                fromJSON(_: any): _146.MsgDeleteControllerResponse;
                toJSON(_: _146.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_146.MsgDeleteControllerResponse>): _146.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _146.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddLinkedResource;
                fromJSON(object: any): _146.MsgAddLinkedResource;
                toJSON(message: _146.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_146.MsgAddLinkedResource>): _146.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _146.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteLinkedResource;
                fromJSON(object: any): _146.MsgDeleteLinkedResource;
                toJSON(message: _146.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_146.MsgDeleteLinkedResource>): _146.MsgDeleteLinkedResource;
            };
            MsgAddLinkedEntity: {
                encode(message: _146.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddLinkedEntity;
                fromJSON(object: any): _146.MsgAddLinkedEntity;
                toJSON(message: _146.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_146.MsgAddLinkedEntity>): _146.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _146.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteLinkedEntity;
                fromJSON(object: any): _146.MsgDeleteLinkedEntity;
                toJSON(message: _146.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_146.MsgDeleteLinkedEntity>): _146.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _146.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddAccordedRight;
                fromJSON(object: any): _146.MsgAddAccordedRight;
                toJSON(message: _146.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_146.MsgAddAccordedRight>): _146.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _146.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteAccordedRight;
                fromJSON(object: any): _146.MsgDeleteAccordedRight;
                toJSON(message: _146.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_146.MsgDeleteAccordedRight>): _146.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _146.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddIidContext;
                fromJSON(object: any): _146.MsgAddIidContext;
                toJSON(message: _146.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_146.MsgAddIidContext>): _146.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _146.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeactivateIID;
                fromJSON(object: any): _146.MsgDeactivateIID;
                toJSON(message: _146.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_146.MsgDeactivateIID>): _146.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _146.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteIidContext;
                fromJSON(object: any): _146.MsgDeleteIidContext;
                toJSON(message: _146.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_146.MsgDeleteIidContext>): _146.MsgDeleteIidContext;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _146.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _146.MsgAddLinkedResourceResponse;
                toJSON(_: _146.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_146.MsgAddLinkedResourceResponse>): _146.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _146.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _146.MsgDeleteLinkedResourceResponse;
                toJSON(_: _146.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_146.MsgDeleteLinkedResourceResponse>): _146.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _146.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _146.MsgAddLinkedEntityResponse;
                toJSON(_: _146.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_146.MsgAddLinkedEntityResponse>): _146.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _146.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _146.MsgDeleteLinkedEntityResponse;
                toJSON(_: _146.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_146.MsgDeleteLinkedEntityResponse>): _146.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _146.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddAccordedRightResponse;
                fromJSON(_: any): _146.MsgAddAccordedRightResponse;
                toJSON(_: _146.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_146.MsgAddAccordedRightResponse>): _146.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _146.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _146.MsgDeleteAccordedRightResponse;
                toJSON(_: _146.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_146.MsgDeleteAccordedRightResponse>): _146.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _146.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddIidContextResponse;
                fromJSON(_: any): _146.MsgAddIidContextResponse;
                toJSON(_: _146.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_146.MsgAddIidContextResponse>): _146.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _146.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeleteIidContextResponse;
                fromJSON(_: any): _146.MsgDeleteIidContextResponse;
                toJSON(_: _146.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_146.MsgDeleteIidContextResponse>): _146.MsgDeleteIidContextResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _146.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgDeactivateIIDResponse;
                fromJSON(_: any): _146.MsgDeactivateIIDResponse;
                toJSON(_: _146.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_146.MsgDeactivateIIDResponse>): _146.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _145.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryIidDocumentsRequest;
                fromJSON(object: any): _145.QueryIidDocumentsRequest;
                toJSON(message: _145.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_145.QueryIidDocumentsRequest>): _145.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _145.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryIidDocumentsResponse;
                fromJSON(object: any): _145.QueryIidDocumentsResponse;
                toJSON(message: _145.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_145.QueryIidDocumentsResponse>): _145.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _145.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryIidDocumentRequest;
                fromJSON(object: any): _145.QueryIidDocumentRequest;
                toJSON(message: _145.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_145.QueryIidDocumentRequest>): _145.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _145.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryIidDocumentResponse;
                fromJSON(object: any): _145.QueryIidDocumentResponse;
                toJSON(message: _145.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_145.QueryIidDocumentResponse>): _145.QueryIidDocumentResponse;
            };
            Context: {
                encode(message: _144.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Context;
                fromJSON(object: any): _144.Context;
                toJSON(message: _144.Context): unknown;
                fromPartial(object: Partial<_144.Context>): _144.Context;
            };
            IidDocument: {
                encode(message: _144.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.IidDocument;
                fromJSON(object: any): _144.IidDocument;
                toJSON(message: _144.IidDocument): unknown;
                fromPartial(object: Partial<_144.IidDocument>): _144.IidDocument;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
                fromJSON(object: any): _143.GenesisState;
                toJSON(message: _143.GenesisState): unknown;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _142.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.IidDocumentCreatedEvent;
                fromJSON(object: any): _142.IidDocumentCreatedEvent;
                toJSON(message: _142.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_142.IidDocumentCreatedEvent>): _142.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _142.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.IidDocumentUpdatedEvent;
                fromJSON(object: any): _142.IidDocumentUpdatedEvent;
                toJSON(message: _142.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_142.IidDocumentUpdatedEvent>): _142.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace payments {
        const v1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                paymentTemplate(request: _150.QueryPaymentTemplateRequest): Promise<_150.QueryPaymentTemplateResponse>;
                paymentContract(request: _150.QueryPaymentContractRequest): Promise<_150.QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: _150.QueryPaymentContractsByIdPrefixRequest): Promise<_150.QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: _150.QuerySubscriptionRequest): Promise<_150.QuerySubscriptionResponse>;
            };
            MsgSetPaymentContractAuthorisation: {
                encode(message: _151.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgSetPaymentContractAuthorisation;
                fromJSON(object: any): _151.MsgSetPaymentContractAuthorisation;
                toJSON(message: _151.MsgSetPaymentContractAuthorisation): unknown;
                fromPartial(object: Partial<_151.MsgSetPaymentContractAuthorisation>): _151.MsgSetPaymentContractAuthorisation;
            };
            MsgSetPaymentContractAuthorisationResponse: {
                encode(_: _151.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgSetPaymentContractAuthorisationResponse;
                fromJSON(_: any): _151.MsgSetPaymentContractAuthorisationResponse;
                toJSON(_: _151.MsgSetPaymentContractAuthorisationResponse): unknown;
                fromPartial(_: Partial<_151.MsgSetPaymentContractAuthorisationResponse>): _151.MsgSetPaymentContractAuthorisationResponse;
            };
            MsgCreatePaymentTemplate: {
                encode(message: _151.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreatePaymentTemplate;
                fromJSON(object: any): _151.MsgCreatePaymentTemplate;
                toJSON(message: _151.MsgCreatePaymentTemplate): unknown;
                fromPartial(object: Partial<_151.MsgCreatePaymentTemplate>): _151.MsgCreatePaymentTemplate;
            };
            MsgCreatePaymentTemplateResponse: {
                encode(_: _151.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreatePaymentTemplateResponse;
                fromJSON(_: any): _151.MsgCreatePaymentTemplateResponse;
                toJSON(_: _151.MsgCreatePaymentTemplateResponse): unknown;
                fromPartial(_: Partial<_151.MsgCreatePaymentTemplateResponse>): _151.MsgCreatePaymentTemplateResponse;
            };
            MsgCreatePaymentContract: {
                encode(message: _151.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreatePaymentContract;
                fromJSON(object: any): _151.MsgCreatePaymentContract;
                toJSON(message: _151.MsgCreatePaymentContract): unknown;
                fromPartial(object: Partial<_151.MsgCreatePaymentContract>): _151.MsgCreatePaymentContract;
            };
            MsgCreatePaymentContractResponse: {
                encode(_: _151.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreatePaymentContractResponse;
                fromJSON(_: any): _151.MsgCreatePaymentContractResponse;
                toJSON(_: _151.MsgCreatePaymentContractResponse): unknown;
                fromPartial(_: Partial<_151.MsgCreatePaymentContractResponse>): _151.MsgCreatePaymentContractResponse;
            };
            MsgCreateSubscription: {
                encode(message: _151.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreateSubscription;
                fromJSON(object: any): _151.MsgCreateSubscription;
                toJSON(message: _151.MsgCreateSubscription): unknown;
                fromPartial(object: Partial<_151.MsgCreateSubscription>): _151.MsgCreateSubscription;
            };
            MsgCreateSubscriptionResponse: {
                encode(_: _151.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreateSubscriptionResponse;
                fromJSON(_: any): _151.MsgCreateSubscriptionResponse;
                toJSON(_: _151.MsgCreateSubscriptionResponse): unknown;
                fromPartial(_: Partial<_151.MsgCreateSubscriptionResponse>): _151.MsgCreateSubscriptionResponse;
            };
            MsgGrantDiscount: {
                encode(message: _151.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgGrantDiscount;
                fromJSON(object: any): _151.MsgGrantDiscount;
                toJSON(message: _151.MsgGrantDiscount): unknown;
                fromPartial(object: Partial<_151.MsgGrantDiscount>): _151.MsgGrantDiscount;
            };
            MsgGrantDiscountResponse: {
                encode(_: _151.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgGrantDiscountResponse;
                fromJSON(_: any): _151.MsgGrantDiscountResponse;
                toJSON(_: _151.MsgGrantDiscountResponse): unknown;
                fromPartial(_: Partial<_151.MsgGrantDiscountResponse>): _151.MsgGrantDiscountResponse;
            };
            MsgRevokeDiscount: {
                encode(message: _151.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgRevokeDiscount;
                fromJSON(object: any): _151.MsgRevokeDiscount;
                toJSON(message: _151.MsgRevokeDiscount): unknown;
                fromPartial(object: Partial<_151.MsgRevokeDiscount>): _151.MsgRevokeDiscount;
            };
            MsgRevokeDiscountResponse: {
                encode(_: _151.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgRevokeDiscountResponse;
                fromJSON(_: any): _151.MsgRevokeDiscountResponse;
                toJSON(_: _151.MsgRevokeDiscountResponse): unknown;
                fromPartial(_: Partial<_151.MsgRevokeDiscountResponse>): _151.MsgRevokeDiscountResponse;
            };
            MsgEffectPayment: {
                encode(message: _151.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgEffectPayment;
                fromJSON(object: any): _151.MsgEffectPayment;
                toJSON(message: _151.MsgEffectPayment): unknown;
                fromPartial(object: Partial<_151.MsgEffectPayment>): _151.MsgEffectPayment;
            };
            MsgEffectPaymentResponse: {
                encode(_: _151.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgEffectPaymentResponse;
                fromJSON(_: any): _151.MsgEffectPaymentResponse;
                toJSON(_: _151.MsgEffectPaymentResponse): unknown;
                fromPartial(_: Partial<_151.MsgEffectPaymentResponse>): _151.MsgEffectPaymentResponse;
            };
            QueryPaymentTemplateRequest: {
                encode(message: _150.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPaymentTemplateRequest;
                fromJSON(object: any): _150.QueryPaymentTemplateRequest;
                toJSON(message: _150.QueryPaymentTemplateRequest): unknown;
                fromPartial(object: Partial<_150.QueryPaymentTemplateRequest>): _150.QueryPaymentTemplateRequest;
            };
            QueryPaymentTemplateResponse: {
                encode(message: _150.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPaymentTemplateResponse;
                fromJSON(object: any): _150.QueryPaymentTemplateResponse;
                toJSON(message: _150.QueryPaymentTemplateResponse): unknown;
                fromPartial(object: Partial<_150.QueryPaymentTemplateResponse>): _150.QueryPaymentTemplateResponse;
            };
            QueryPaymentContractRequest: {
                encode(message: _150.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPaymentContractRequest;
                fromJSON(object: any): _150.QueryPaymentContractRequest;
                toJSON(message: _150.QueryPaymentContractRequest): unknown;
                fromPartial(object: Partial<_150.QueryPaymentContractRequest>): _150.QueryPaymentContractRequest;
            };
            QueryPaymentContractResponse: {
                encode(message: _150.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPaymentContractResponse;
                fromJSON(object: any): _150.QueryPaymentContractResponse;
                toJSON(message: _150.QueryPaymentContractResponse): unknown;
                fromPartial(object: Partial<_150.QueryPaymentContractResponse>): _150.QueryPaymentContractResponse;
            };
            QueryPaymentContractsByIdPrefixRequest: {
                encode(message: _150.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPaymentContractsByIdPrefixRequest;
                fromJSON(object: any): _150.QueryPaymentContractsByIdPrefixRequest;
                toJSON(message: _150.QueryPaymentContractsByIdPrefixRequest): unknown;
                fromPartial(object: Partial<_150.QueryPaymentContractsByIdPrefixRequest>): _150.QueryPaymentContractsByIdPrefixRequest;
            };
            QueryPaymentContractsByIdPrefixResponse: {
                encode(message: _150.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPaymentContractsByIdPrefixResponse;
                fromJSON(object: any): _150.QueryPaymentContractsByIdPrefixResponse;
                toJSON(message: _150.QueryPaymentContractsByIdPrefixResponse): unknown;
                fromPartial(object: Partial<_150.QueryPaymentContractsByIdPrefixResponse>): _150.QueryPaymentContractsByIdPrefixResponse;
            };
            QuerySubscriptionRequest: {
                encode(message: _150.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySubscriptionRequest;
                fromJSON(object: any): _150.QuerySubscriptionRequest;
                toJSON(message: _150.QuerySubscriptionRequest): unknown;
                fromPartial(object: Partial<_150.QuerySubscriptionRequest>): _150.QuerySubscriptionRequest;
            };
            QuerySubscriptionResponse: {
                encode(message: _150.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySubscriptionResponse;
                fromJSON(object: any): _150.QuerySubscriptionResponse;
                toJSON(message: _150.QuerySubscriptionResponse): unknown;
                fromPartial(object: Partial<_150.QuerySubscriptionResponse>): _150.QuerySubscriptionResponse;
            };
            PaymentTemplate: {
                encode(message: _149.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PaymentTemplate;
                fromJSON(object: any): _149.PaymentTemplate;
                toJSON(message: _149.PaymentTemplate): unknown;
                fromPartial(object: Partial<_149.PaymentTemplate>): _149.PaymentTemplate;
            };
            Discount: {
                encode(message: _149.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Discount;
                fromJSON(object: any): _149.Discount;
                toJSON(message: _149.Discount): unknown;
                fromPartial(object: Partial<_149.Discount>): _149.Discount;
            };
            DistributionShare: {
                encode(message: _149.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DistributionShare;
                fromJSON(object: any): _149.DistributionShare;
                toJSON(message: _149.DistributionShare): unknown;
                fromPartial(object: Partial<_149.DistributionShare>): _149.DistributionShare;
            };
            PaymentContract: {
                encode(message: _149.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PaymentContract;
                fromJSON(object: any): _149.PaymentContract;
                toJSON(message: _149.PaymentContract): unknown;
                fromPartial(object: Partial<_149.PaymentContract>): _149.PaymentContract;
            };
            Subscription: {
                encode(message: _149.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Subscription;
                fromJSON(object: any): _149.Subscription;
                toJSON(message: _149.Subscription): unknown;
                fromPartial(object: Partial<_149.Subscription>): _149.Subscription;
            };
            BlockPeriod: {
                encode(message: _149.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.BlockPeriod;
                fromJSON(object: any): _149.BlockPeriod;
                toJSON(message: _149.BlockPeriod): unknown;
                fromPartial(object: Partial<_149.BlockPeriod>): _149.BlockPeriod;
            };
            TimePeriod: {
                encode(message: _149.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.TimePeriod;
                fromJSON(object: any): _149.TimePeriod;
                toJSON(message: _149.TimePeriod): unknown;
                fromPartial(object: Partial<_149.TimePeriod>): _149.TimePeriod;
            };
            TestPeriod: {
                encode(message: _149.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.TestPeriod;
                fromJSON(object: any): _149.TestPeriod;
                toJSON(message: _149.TestPeriod): unknown;
                fromPartial(object: Partial<_149.TestPeriod>): _149.TestPeriod;
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
    namespace project {
        const v1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                projectDoc(request: _154.QueryProjectDocRequest): Promise<_154.QueryProjectDocResponse>;
                projectAccounts(request: _154.QueryProjectAccountsRequest): Promise<_154.QueryProjectAccountsResponse>;
                projectTx(request: _154.QueryProjectTxRequest): Promise<_154.QueryProjectTxResponse>;
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
            };
            MsgCreateProject: {
                encode(message: _155.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateProject;
                fromJSON(object: any): _155.MsgCreateProject;
                toJSON(message: _155.MsgCreateProject): unknown;
                fromPartial(object: Partial<_155.MsgCreateProject>): _155.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(_: _155.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateProjectResponse;
                fromJSON(_: any): _155.MsgCreateProjectResponse;
                toJSON(_: _155.MsgCreateProjectResponse): unknown;
                fromPartial(_: Partial<_155.MsgCreateProjectResponse>): _155.MsgCreateProjectResponse;
            };
            MsgUpdateProjectStatus: {
                encode(message: _155.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateProjectStatus;
                fromJSON(object: any): _155.MsgUpdateProjectStatus;
                toJSON(message: _155.MsgUpdateProjectStatus): unknown;
                fromPartial(object: Partial<_155.MsgUpdateProjectStatus>): _155.MsgUpdateProjectStatus;
            };
            MsgUpdateProjectStatusResponse: {
                encode(_: _155.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateProjectStatusResponse;
                fromJSON(_: any): _155.MsgUpdateProjectStatusResponse;
                toJSON(_: _155.MsgUpdateProjectStatusResponse): unknown;
                fromPartial(_: Partial<_155.MsgUpdateProjectStatusResponse>): _155.MsgUpdateProjectStatusResponse;
            };
            MsgCreateAgent: {
                encode(message: _155.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateAgent;
                fromJSON(object: any): _155.MsgCreateAgent;
                toJSON(message: _155.MsgCreateAgent): unknown;
                fromPartial(object: Partial<_155.MsgCreateAgent>): _155.MsgCreateAgent;
            };
            MsgCreateAgentResponse: {
                encode(_: _155.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateAgentResponse;
                fromJSON(_: any): _155.MsgCreateAgentResponse;
                toJSON(_: _155.MsgCreateAgentResponse): unknown;
                fromPartial(_: Partial<_155.MsgCreateAgentResponse>): _155.MsgCreateAgentResponse;
            };
            MsgUpdateAgent: {
                encode(message: _155.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateAgent;
                fromJSON(object: any): _155.MsgUpdateAgent;
                toJSON(message: _155.MsgUpdateAgent): unknown;
                fromPartial(object: Partial<_155.MsgUpdateAgent>): _155.MsgUpdateAgent;
            };
            MsgUpdateAgentResponse: {
                encode(_: _155.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateAgentResponse;
                fromJSON(_: any): _155.MsgUpdateAgentResponse;
                toJSON(_: _155.MsgUpdateAgentResponse): unknown;
                fromPartial(_: Partial<_155.MsgUpdateAgentResponse>): _155.MsgUpdateAgentResponse;
            };
            MsgCreateClaim: {
                encode(message: _155.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateClaim;
                fromJSON(object: any): _155.MsgCreateClaim;
                toJSON(message: _155.MsgCreateClaim): unknown;
                fromPartial(object: Partial<_155.MsgCreateClaim>): _155.MsgCreateClaim;
            };
            MsgCreateClaimResponse: {
                encode(_: _155.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateClaimResponse;
                fromJSON(_: any): _155.MsgCreateClaimResponse;
                toJSON(_: _155.MsgCreateClaimResponse): unknown;
                fromPartial(_: Partial<_155.MsgCreateClaimResponse>): _155.MsgCreateClaimResponse;
            };
            MsgCreateEvaluation: {
                encode(message: _155.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateEvaluation;
                fromJSON(object: any): _155.MsgCreateEvaluation;
                toJSON(message: _155.MsgCreateEvaluation): unknown;
                fromPartial(object: Partial<_155.MsgCreateEvaluation>): _155.MsgCreateEvaluation;
            };
            MsgCreateEvaluationResponse: {
                encode(_: _155.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateEvaluationResponse;
                fromJSON(_: any): _155.MsgCreateEvaluationResponse;
                toJSON(_: _155.MsgCreateEvaluationResponse): unknown;
                fromPartial(_: Partial<_155.MsgCreateEvaluationResponse>): _155.MsgCreateEvaluationResponse;
            };
            MsgWithdrawFunds: {
                encode(message: _155.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgWithdrawFunds;
                fromJSON(object: any): _155.MsgWithdrawFunds;
                toJSON(message: _155.MsgWithdrawFunds): unknown;
                fromPartial(object: Partial<_155.MsgWithdrawFunds>): _155.MsgWithdrawFunds;
            };
            MsgWithdrawFundsResponse: {
                encode(_: _155.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgWithdrawFundsResponse;
                fromJSON(_: any): _155.MsgWithdrawFundsResponse;
                toJSON(_: _155.MsgWithdrawFundsResponse): unknown;
                fromPartial(_: Partial<_155.MsgWithdrawFundsResponse>): _155.MsgWithdrawFundsResponse;
            };
            MsgUpdateProjectDoc: {
                encode(message: _155.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateProjectDoc;
                fromJSON(object: any): _155.MsgUpdateProjectDoc;
                toJSON(message: _155.MsgUpdateProjectDoc): unknown;
                fromPartial(object: Partial<_155.MsgUpdateProjectDoc>): _155.MsgUpdateProjectDoc;
            };
            MsgUpdateProjectDocResponse: {
                encode(_: _155.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateProjectDocResponse;
                fromJSON(_: any): _155.MsgUpdateProjectDocResponse;
                toJSON(_: _155.MsgUpdateProjectDocResponse): unknown;
                fromPartial(_: Partial<_155.MsgUpdateProjectDocResponse>): _155.MsgUpdateProjectDocResponse;
            };
            QueryProjectDocRequest: {
                encode(message: _154.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryProjectDocRequest;
                fromJSON(object: any): _154.QueryProjectDocRequest;
                toJSON(message: _154.QueryProjectDocRequest): unknown;
                fromPartial(object: Partial<_154.QueryProjectDocRequest>): _154.QueryProjectDocRequest;
            };
            QueryProjectDocResponse: {
                encode(message: _154.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryProjectDocResponse;
                fromJSON(object: any): _154.QueryProjectDocResponse;
                toJSON(message: _154.QueryProjectDocResponse): unknown;
                fromPartial(object: Partial<_154.QueryProjectDocResponse>): _154.QueryProjectDocResponse;
            };
            QueryProjectAccountsRequest: {
                encode(message: _154.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryProjectAccountsRequest;
                fromJSON(object: any): _154.QueryProjectAccountsRequest;
                toJSON(message: _154.QueryProjectAccountsRequest): unknown;
                fromPartial(object: Partial<_154.QueryProjectAccountsRequest>): _154.QueryProjectAccountsRequest;
            };
            QueryProjectAccountsResponse: {
                encode(message: _154.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryProjectAccountsResponse;
                fromJSON(object: any): _154.QueryProjectAccountsResponse;
                toJSON(message: _154.QueryProjectAccountsResponse): unknown;
                fromPartial(object: Partial<_154.QueryProjectAccountsResponse>): _154.QueryProjectAccountsResponse;
            };
            QueryProjectTxRequest: {
                encode(message: _154.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryProjectTxRequest;
                fromJSON(object: any): _154.QueryProjectTxRequest;
                toJSON(message: _154.QueryProjectTxRequest): unknown;
                fromPartial(object: Partial<_154.QueryProjectTxRequest>): _154.QueryProjectTxRequest;
            };
            QueryProjectTxResponse: {
                encode(message: _154.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryProjectTxResponse;
                fromJSON(object: any): _154.QueryProjectTxResponse;
                toJSON(message: _154.QueryProjectTxResponse): unknown;
                fromPartial(object: Partial<_154.QueryProjectTxResponse>): _154.QueryProjectTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                fromJSON(_: any): _154.QueryParamsRequest;
                toJSON(_: _154.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
                fromJSON(object: any): _154.QueryParamsResponse;
                toJSON(message: _154.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_154.QueryParamsResponse>): _154.QueryParamsResponse;
            };
            UpdateProjectStatusDoc: {
                encode(message: _153.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.UpdateProjectStatusDoc;
                fromJSON(object: any): _153.UpdateProjectStatusDoc;
                toJSON(message: _153.UpdateProjectStatusDoc): unknown;
                fromPartial(object: Partial<_153.UpdateProjectStatusDoc>): _153.UpdateProjectStatusDoc;
            };
            CreateAgentDoc: {
                encode(message: _153.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.CreateAgentDoc;
                fromJSON(object: any): _153.CreateAgentDoc;
                toJSON(message: _153.CreateAgentDoc): unknown;
                fromPartial(object: Partial<_153.CreateAgentDoc>): _153.CreateAgentDoc;
            };
            UpdateAgentDoc: {
                encode(message: _153.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.UpdateAgentDoc;
                fromJSON(object: any): _153.UpdateAgentDoc;
                toJSON(message: _153.UpdateAgentDoc): unknown;
                fromPartial(object: Partial<_153.UpdateAgentDoc>): _153.UpdateAgentDoc;
            };
            CreateClaimDoc: {
                encode(message: _153.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.CreateClaimDoc;
                fromJSON(object: any): _153.CreateClaimDoc;
                toJSON(message: _153.CreateClaimDoc): unknown;
                fromPartial(object: Partial<_153.CreateClaimDoc>): _153.CreateClaimDoc;
            };
            CreateEvaluationDoc: {
                encode(message: _153.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.CreateEvaluationDoc;
                fromJSON(object: any): _153.CreateEvaluationDoc;
                toJSON(message: _153.CreateEvaluationDoc): unknown;
                fromPartial(object: Partial<_153.CreateEvaluationDoc>): _153.CreateEvaluationDoc;
            };
            WithdrawFundsDoc: {
                encode(message: _153.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.WithdrawFundsDoc;
                fromJSON(object: any): _153.WithdrawFundsDoc;
                toJSON(message: _153.WithdrawFundsDoc): unknown;
                fromPartial(object: Partial<_153.WithdrawFundsDoc>): _153.WithdrawFundsDoc;
            };
            ProjectDoc: {
                encode(message: _153.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ProjectDoc;
                fromJSON(object: any): _153.ProjectDoc;
                toJSON(message: _153.ProjectDoc): unknown;
                fromPartial(object: Partial<_153.ProjectDoc>): _153.ProjectDoc;
            };
            WithdrawalInfoDoc: {
                encode(message: _153.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.WithdrawalInfoDoc;
                fromJSON(object: any): _153.WithdrawalInfoDoc;
                toJSON(message: _153.WithdrawalInfoDoc): unknown;
                fromPartial(object: Partial<_153.WithdrawalInfoDoc>): _153.WithdrawalInfoDoc;
            };
            Params: {
                encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                fromJSON(object: any): _153.Params;
                toJSON(message: _153.Params): unknown;
                fromPartial(object: Partial<_153.Params>): _153.Params;
            };
            Claim: {
                encode(message: _153.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Claim;
                fromJSON(object: any): _153.Claim;
                toJSON(message: _153.Claim): unknown;
                fromPartial(object: Partial<_153.Claim>): _153.Claim;
            };
            GenesisAccountMap_MapEntry: {
                encode(message: _153.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisAccountMap_MapEntry;
                fromJSON(object: any): _153.GenesisAccountMap_MapEntry;
                toJSON(message: _153.GenesisAccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_153.GenesisAccountMap_MapEntry>): _153.GenesisAccountMap_MapEntry;
            };
            GenesisAccountMap: {
                encode(message: _153.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisAccountMap;
                fromJSON(object: any): _153.GenesisAccountMap;
                toJSON(message: _153.GenesisAccountMap): unknown;
                fromPartial(object: Partial<_153.GenesisAccountMap>): _153.GenesisAccountMap;
            };
            AccountMap_MapEntry: {
                encode(message: _153.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.AccountMap_MapEntry;
                fromJSON(object: any): _153.AccountMap_MapEntry;
                toJSON(message: _153.AccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_153.AccountMap_MapEntry>): _153.AccountMap_MapEntry;
            };
            AccountMap: {
                encode(message: _153.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.AccountMap;
                fromJSON(object: any): _153.AccountMap;
                toJSON(message: _153.AccountMap): unknown;
                fromPartial(object: Partial<_153.AccountMap>): _153.AccountMap;
            };
            WithdrawalInfoDocs: {
                encode(message: _153.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.WithdrawalInfoDocs;
                fromJSON(object: any): _153.WithdrawalInfoDocs;
                toJSON(message: _153.WithdrawalInfoDocs): unknown;
                fromPartial(object: Partial<_153.WithdrawalInfoDocs>): _153.WithdrawalInfoDocs;
            };
            Claims: {
                encode(message: _153.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Claims;
                fromJSON(object: any): _153.Claims;
                toJSON(message: _153.Claims): unknown;
                fromPartial(object: Partial<_153.Claims>): _153.Claims;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromJSON(object: any): _152.GenesisState;
                toJSON(message: _152.GenesisState): unknown;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenList(request: _160.QueryTokenListRequest): Promise<_160.QueryTokenListResponse>;
                tokenDoc(request: _160.QueryTokenDocRequest): Promise<_160.QueryTokenDocResponse>;
                tokenMetadata(request: _160.QueryTokenMetadataRequest): Promise<_160.QueryTokenMetadataResponse>;
            };
            MsgCreateToken: {
                encode(message: _162.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateToken;
                fromJSON(object: any): _162.MsgCreateToken;
                toJSON(message: _162.MsgCreateToken): unknown;
                fromPartial(object: Partial<_162.MsgCreateToken>): _162.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _162.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateTokenResponse;
                fromJSON(_: any): _162.MsgCreateTokenResponse;
                toJSON(_: _162.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_162.MsgCreateTokenResponse>): _162.MsgCreateTokenResponse;
            };
            MsgMintToken: {
                encode(message: _162.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgMintToken;
                fromJSON(object: any): _162.MsgMintToken;
                toJSON(message: _162.MsgMintToken): unknown;
                fromPartial(object: Partial<_162.MsgMintToken>): _162.MsgMintToken;
            };
            MintBatch: {
                encode(message: _162.MintBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MintBatch;
                fromJSON(object: any): _162.MintBatch;
                toJSON(message: _162.MintBatch): unknown;
                fromPartial(object: Partial<_162.MintBatch>): _162.MintBatch;
            };
            MsgMintTokenResponse: {
                encode(_: _162.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgMintTokenResponse;
                fromJSON(_: any): _162.MsgMintTokenResponse;
                toJSON(_: _162.MsgMintTokenResponse): unknown;
                fromPartial(_: Partial<_162.MsgMintTokenResponse>): _162.MsgMintTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _162.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgTransferToken;
                fromJSON(object: any): _162.MsgTransferToken;
                toJSON(message: _162.MsgTransferToken): unknown;
                fromPartial(object: Partial<_162.MsgTransferToken>): _162.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _162.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgTransferTokenResponse;
                fromJSON(_: any): _162.MsgTransferTokenResponse;
                toJSON(_: _162.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_162.MsgTransferTokenResponse>): _162.MsgTransferTokenResponse;
            };
            TokenBatch: {
                encode(message: _162.TokenBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TokenBatch;
                fromJSON(object: any): _162.TokenBatch;
                toJSON(message: _162.TokenBatch): unknown;
                fromPartial(object: Partial<_162.TokenBatch>): _162.TokenBatch;
            };
            MsgRetireToken: {
                encode(message: _162.MsgRetireToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgRetireToken;
                fromJSON(object: any): _162.MsgRetireToken;
                toJSON(message: _162.MsgRetireToken): unknown;
                fromPartial(object: Partial<_162.MsgRetireToken>): _162.MsgRetireToken;
            };
            MsgRetireTokenResponse: {
                encode(_: _162.MsgRetireTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgRetireTokenResponse;
                fromJSON(_: any): _162.MsgRetireTokenResponse;
                toJSON(_: _162.MsgRetireTokenResponse): unknown;
                fromPartial(_: Partial<_162.MsgRetireTokenResponse>): _162.MsgRetireTokenResponse;
            };
            MsgCancelToken: {
                encode(message: _162.MsgCancelToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCancelToken;
                fromJSON(object: any): _162.MsgCancelToken;
                toJSON(message: _162.MsgCancelToken): unknown;
                fromPartial(object: Partial<_162.MsgCancelToken>): _162.MsgCancelToken;
            };
            MsgCancelTokenResponse: {
                encode(_: _162.MsgCancelTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCancelTokenResponse;
                fromJSON(_: any): _162.MsgCancelTokenResponse;
                toJSON(_: _162.MsgCancelTokenResponse): unknown;
                fromPartial(_: Partial<_162.MsgCancelTokenResponse>): _162.MsgCancelTokenResponse;
            };
            MsgPauseToken: {
                encode(message: _162.MsgPauseToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgPauseToken;
                fromJSON(object: any): _162.MsgPauseToken;
                toJSON(message: _162.MsgPauseToken): unknown;
                fromPartial(object: Partial<_162.MsgPauseToken>): _162.MsgPauseToken;
            };
            MsgPauseTokenResponse: {
                encode(_: _162.MsgPauseTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgPauseTokenResponse;
                fromJSON(_: any): _162.MsgPauseTokenResponse;
                toJSON(_: _162.MsgPauseTokenResponse): unknown;
                fromPartial(_: Partial<_162.MsgPauseTokenResponse>): _162.MsgPauseTokenResponse;
            };
            MsgStopToken: {
                encode(message: _162.MsgStopToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgStopToken;
                fromJSON(object: any): _162.MsgStopToken;
                toJSON(message: _162.MsgStopToken): unknown;
                fromPartial(object: Partial<_162.MsgStopToken>): _162.MsgStopToken;
            };
            MsgStopTokenResponse: {
                encode(_: _162.MsgStopTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgStopTokenResponse;
                fromJSON(_: any): _162.MsgStopTokenResponse;
                toJSON(_: _162.MsgStopTokenResponse): unknown;
                fromPartial(_: Partial<_162.MsgStopTokenResponse>): _162.MsgStopTokenResponse;
            };
            Params: {
                encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Params;
                fromJSON(object: any): _161.Params;
                toJSON(message: _161.Params): unknown;
                fromPartial(object: Partial<_161.Params>): _161.Params;
            };
            Token: {
                encode(message: _161.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Token;
                fromJSON(object: any): _161.Token;
                toJSON(message: _161.Token): unknown;
                fromPartial(object: Partial<_161.Token>): _161.Token;
            };
            TokensRetired: {
                encode(message: _161.TokensRetired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.TokensRetired;
                fromJSON(object: any): _161.TokensRetired;
                toJSON(message: _161.TokensRetired): unknown;
                fromPartial(object: Partial<_161.TokensRetired>): _161.TokensRetired;
            };
            TokensCancelled: {
                encode(message: _161.TokensCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.TokensCancelled;
                fromJSON(object: any): _161.TokensCancelled;
                toJSON(message: _161.TokensCancelled): unknown;
                fromPartial(object: Partial<_161.TokensCancelled>): _161.TokensCancelled;
            };
            TokenProperties: {
                encode(message: _161.TokenProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.TokenProperties;
                fromJSON(object: any): _161.TokenProperties;
                toJSON(message: _161.TokenProperties): unknown;
                fromPartial(object: Partial<_161.TokenProperties>): _161.TokenProperties;
            };
            TokenData: {
                encode(message: _161.TokenData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.TokenData;
                fromJSON(object: any): _161.TokenData;
                toJSON(message: _161.TokenData): unknown;
                fromPartial(object: Partial<_161.TokenData>): _161.TokenData;
            };
            QueryTokenListRequest: {
                encode(message: _160.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTokenListRequest;
                fromJSON(object: any): _160.QueryTokenListRequest;
                toJSON(message: _160.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_160.QueryTokenListRequest>): _160.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _160.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTokenListResponse;
                fromJSON(object: any): _160.QueryTokenListResponse;
                toJSON(message: _160.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_160.QueryTokenListResponse>): _160.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _160.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTokenDocRequest;
                fromJSON(object: any): _160.QueryTokenDocRequest;
                toJSON(message: _160.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_160.QueryTokenDocRequest>): _160.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(message: _160.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTokenDocResponse;
                fromJSON(object: any): _160.QueryTokenDocResponse;
                toJSON(message: _160.QueryTokenDocResponse): unknown;
                fromPartial(object: Partial<_160.QueryTokenDocResponse>): _160.QueryTokenDocResponse;
            };
            QueryTokenMetadataRequest: {
                encode(message: _160.QueryTokenMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTokenMetadataRequest;
                fromJSON(object: any): _160.QueryTokenMetadataRequest;
                toJSON(message: _160.QueryTokenMetadataRequest): unknown;
                fromPartial(object: Partial<_160.QueryTokenMetadataRequest>): _160.QueryTokenMetadataRequest;
            };
            QueryTokenMetadataResponse: {
                encode(message: _160.QueryTokenMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTokenMetadataResponse;
                fromJSON(object: any): _160.QueryTokenMetadataResponse;
                toJSON(message: _160.QueryTokenMetadataResponse): unknown;
                fromPartial(object: Partial<_160.QueryTokenMetadataResponse>): _160.QueryTokenMetadataResponse;
            };
            TokenMetadataProperties: {
                encode(message: _160.TokenMetadataProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.TokenMetadataProperties;
                fromJSON(object: any): _160.TokenMetadataProperties;
                toJSON(message: _160.TokenMetadataProperties): unknown;
                fromPartial(object: Partial<_160.TokenMetadataProperties>): _160.TokenMetadataProperties;
            };
            SetTokenContractCodes: {
                encode(message: _159.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SetTokenContractCodes;
                fromJSON(object: any): _159.SetTokenContractCodes;
                toJSON(message: _159.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_159.SetTokenContractCodes>): _159.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
                fromJSON(object: any): _158.GenesisState;
                toJSON(message: _158.GenesisState): unknown;
                fromPartial(object: Partial<_158.GenesisState>): _158.GenesisState;
            };
            TokenCreatedEvent: {
                encode(message: _157.TokenCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenCreatedEvent;
                fromJSON(object: any): _157.TokenCreatedEvent;
                toJSON(message: _157.TokenCreatedEvent): unknown;
                fromPartial(object: Partial<_157.TokenCreatedEvent>): _157.TokenCreatedEvent;
            };
            TokenUpdatedEvent: {
                encode(message: _157.TokenUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenUpdatedEvent;
                fromJSON(object: any): _157.TokenUpdatedEvent;
                toJSON(message: _157.TokenUpdatedEvent): unknown;
                fromPartial(object: Partial<_157.TokenUpdatedEvent>): _157.TokenUpdatedEvent;
            };
            TokenMintedEvent: {
                encode(message: _157.TokenMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenMintedEvent;
                fromJSON(object: any): _157.TokenMintedEvent;
                toJSON(message: _157.TokenMintedEvent): unknown;
                fromPartial(object: Partial<_157.TokenMintedEvent>): _157.TokenMintedEvent;
            };
            TokenTransferredEvent: {
                encode(message: _157.TokenTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenTransferredEvent;
                fromJSON(object: any): _157.TokenTransferredEvent;
                toJSON(message: _157.TokenTransferredEvent): unknown;
                fromPartial(object: Partial<_157.TokenTransferredEvent>): _157.TokenTransferredEvent;
            };
            TokenCancelledEvent: {
                encode(message: _157.TokenCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenCancelledEvent;
                fromJSON(object: any): _157.TokenCancelledEvent;
                toJSON(message: _157.TokenCancelledEvent): unknown;
                fromPartial(object: Partial<_157.TokenCancelledEvent>): _157.TokenCancelledEvent;
            };
            TokenRetiredEvent: {
                encode(message: _157.TokenRetiredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenRetiredEvent;
                fromJSON(object: any): _157.TokenRetiredEvent;
                toJSON(message: _157.TokenRetiredEvent): unknown;
                fromPartial(object: Partial<_157.TokenRetiredEvent>): _157.TokenRetiredEvent;
            };
            TokenPausedEvent: {
                encode(message: _157.TokenPausedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenPausedEvent;
                fromJSON(object: any): _157.TokenPausedEvent;
                toJSON(message: _157.TokenPausedEvent): unknown;
                fromPartial(object: Partial<_157.TokenPausedEvent>): _157.TokenPausedEvent;
            };
            TokenStoppedEvent: {
                encode(message: _157.TokenStoppedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TokenStoppedEvent;
                fromJSON(object: any): _157.TokenStoppedEvent;
                toJSON(message: _157.TokenStoppedEvent): unknown;
                fromPartial(object: Partial<_157.TokenStoppedEvent>): _157.TokenStoppedEvent;
            };
            MintAuthorization: {
                encode(message: _156.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MintAuthorization;
                fromJSON(object: any): _156.MintAuthorization;
                toJSON(message: _156.MintAuthorization): unknown;
                fromPartial(object: Partial<_156.MintAuthorization>): _156.MintAuthorization;
            };
            MintConstraints: {
                encode(message: _156.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MintConstraints;
                fromJSON(object: any): _156.MintConstraints;
                toJSON(message: _156.MintConstraints): unknown;
                fromPartial(object: Partial<_156.MintConstraints>): _156.MintConstraints;
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
                    v1beta1: _225.MsgClientImpl;
                };
                entity: {
                    v1beta1: _226.MsgClientImpl;
                };
                iid: {
                    v1beta1: _227.MsgClientImpl;
                };
                payments: {
                    v1: _228.MsgClientImpl;
                };
                project: {
                    v1: _229.MsgClientImpl;
                };
                token: {
                    v1beta1: _230.MsgClientImpl;
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
                        bonds(request?: _134.QueryBondsRequest): Promise<_134.QueryBondsResponse>;
                        bondsDetailed(request?: _134.QueryBondsDetailedRequest): Promise<_134.QueryBondsDetailedResponse>;
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        bond(request: _134.QueryBondRequest): Promise<_134.QueryBondResponse>;
                        batch(request: _134.QueryBatchRequest): Promise<_134.QueryBatchResponse>;
                        lastBatch(request: _134.QueryLastBatchRequest): Promise<_134.QueryLastBatchResponse>;
                        currentPrice(request: _134.QueryCurrentPriceRequest): Promise<_134.QueryCurrentPriceResponse>;
                        currentReserve(request: _134.QueryCurrentReserveRequest): Promise<_134.QueryCurrentReserveResponse>;
                        availableReserve(request: _134.QueryAvailableReserveRequest): Promise<_134.QueryAvailableReserveResponse>;
                        customPrice(request: _134.QueryCustomPriceRequest): Promise<_134.QueryCustomPriceResponse>;
                        buyPrice(request: _134.QueryBuyPriceRequest): Promise<_134.QueryBuyPriceResponse>;
                        sellReturn(request: _134.QuerySellReturnRequest): Promise<_134.QuerySellReturnResponse>;
                        swapReturn(request: _134.QuerySwapReturnRequest): Promise<_134.QuerySwapReturnResponse>;
                        alphaMaximums(request: _134.QueryAlphaMaximumsRequest): Promise<_134.QueryAlphaMaximumsResponse>;
                    };
                };
                entity: {
                    v1beta1: {
                        entity(request: _140.QueryEntityRequest): Promise<_140.QueryEntityResponse>;
                        entityMetaData(request: _140.QueryEntityMetadataRequest): Promise<_140.QueryEntityMetadataResponse>;
                        entityIidDocument(request: _140.QueryEntityIidDocumentRequest): Promise<_140.QueryEntityIidDocumentResponse>;
                        entityVerified(request: _140.QueryEntityVerifiedRequest): Promise<_140.QueryEntityVerifiedResponse>;
                        entityList(request?: _140.QueryEntityListRequest): Promise<_140.QueryEntityListResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request?: _145.QueryIidDocumentsRequest): Promise<_145.QueryIidDocumentsResponse>;
                        iidDocument(request: _145.QueryIidDocumentRequest): Promise<_145.QueryIidDocumentResponse>;
                    };
                };
                payments: {
                    v1: {
                        paymentTemplate(request: _150.QueryPaymentTemplateRequest): Promise<_150.QueryPaymentTemplateResponse>;
                        paymentContract(request: _150.QueryPaymentContractRequest): Promise<_150.QueryPaymentContractResponse>;
                        paymentContractsByIdPrefix(request: _150.QueryPaymentContractsByIdPrefixRequest): Promise<_150.QueryPaymentContractsByIdPrefixResponse>;
                        subscription(request: _150.QuerySubscriptionRequest): Promise<_150.QuerySubscriptionResponse>;
                    };
                };
                project: {
                    v1: {
                        projectDoc(request: _154.QueryProjectDocRequest): Promise<_154.QueryProjectDocResponse>;
                        projectAccounts(request: _154.QueryProjectAccountsRequest): Promise<_154.QueryProjectAccountsResponse>;
                        projectTx(request: _154.QueryProjectTxRequest): Promise<_154.QueryProjectTxResponse>;
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        tokenList(request: _160.QueryTokenListRequest): Promise<_160.QueryTokenListResponse>;
                        tokenDoc(request: _160.QueryTokenDocRequest): Promise<_160.QueryTokenDocResponse>;
                        tokenMetadata(request: _160.QueryTokenMetadataRequest): Promise<_160.QueryTokenMetadataResponse>;
                    };
                };
            };
        }>;
    };
}
