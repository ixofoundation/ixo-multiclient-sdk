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
import * as _147 from "./payments/v1/genesis";
import * as _148 from "./payments/v1/payments";
import * as _149 from "./payments/v1/query";
import * as _150 from "./payments/v1/tx";
import * as _151 from "./project/v1/genesis";
import * as _152 from "./project/v1/project";
import * as _153 from "./project/v1/query";
import * as _154 from "./project/v1/tx";
import * as _155 from "./token/v1beta1/authz";
import * as _156 from "./token/v1beta1/genesis";
import * as _157 from "./token/v1beta1/proposal";
import * as _158 from "./token/v1beta1/query";
import * as _159 from "./token/v1beta1/token";
import * as _160 from "./token/v1beta1/tx";
import * as _217 from "./bonds/v1beta1/query.rpc.Query";
import * as _218 from "./entity/v1beta1/query.rpc.Query";
import * as _219 from "./iid/v1beta1/query.rpc.Query";
import * as _220 from "./payments/v1/query.rpc.Query";
import * as _221 from "./project/v1/query.rpc.Query";
import * as _222 from "./token/v1beta1/query.rpc.Query";
import * as _223 from "./bonds/v1beta1/tx.rpc.msg";
import * as _224 from "./entity/v1beta1/tx.rpc.msg";
import * as _225 from "./iid/v1beta1/tx.rpc.msg";
import * as _226 from "./payments/v1/tx.rpc.msg";
import * as _227 from "./project/v1/tx.rpc.msg";
import * as _228 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
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
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
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
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _145.QueryIidDocumentsRequest): Promise<_145.QueryIidDocumentsResponse>;
                iidDocument(request: _145.QueryIidDocumentRequest): Promise<_145.QueryIidDocumentResponse>;
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
            AccordedRight: {
                encode(message: _144.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.AccordedRight;
                fromJSON(object: any): _144.AccordedRight;
                toJSON(message: _144.AccordedRight): unknown;
                fromPartial(object: Partial<_144.AccordedRight>): _144.AccordedRight;
            };
            LinkedResource: {
                encode(message: _144.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.LinkedResource;
                fromJSON(object: any): _144.LinkedResource;
                toJSON(message: _144.LinkedResource): unknown;
                fromPartial(object: Partial<_144.LinkedResource>): _144.LinkedResource;
            };
            LinkedEntity: {
                encode(message: _144.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.LinkedEntity;
                fromJSON(object: any): _144.LinkedEntity;
                toJSON(message: _144.LinkedEntity): unknown;
                fromPartial(object: Partial<_144.LinkedEntity>): _144.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _144.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.VerificationMethod;
                fromJSON(object: any): _144.VerificationMethod;
                toJSON(message: _144.VerificationMethod): unknown;
                fromPartial(object: Partial<_144.VerificationMethod>): _144.VerificationMethod;
            };
            Service: {
                encode(message: _144.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Service;
                fromJSON(object: any): _144.Service;
                toJSON(message: _144.Service): unknown;
                fromPartial(object: Partial<_144.Service>): _144.Service;
            };
            IidMetadata: {
                encode(message: _144.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.IidMetadata;
                fromJSON(object: any): _144.IidMetadata;
                toJSON(message: _144.IidMetadata): unknown;
                fromPartial(object: Partial<_144.IidMetadata>): _144.IidMetadata;
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
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                paymentTemplate(request: _149.QueryPaymentTemplateRequest): Promise<_149.QueryPaymentTemplateResponse>;
                paymentContract(request: _149.QueryPaymentContractRequest): Promise<_149.QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: _149.QueryPaymentContractsByIdPrefixRequest): Promise<_149.QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: _149.QuerySubscriptionRequest): Promise<_149.QuerySubscriptionResponse>;
            };
            MsgSetPaymentContractAuthorisation: {
                encode(message: _150.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSetPaymentContractAuthorisation;
                fromJSON(object: any): _150.MsgSetPaymentContractAuthorisation;
                toJSON(message: _150.MsgSetPaymentContractAuthorisation): unknown;
                fromPartial(object: Partial<_150.MsgSetPaymentContractAuthorisation>): _150.MsgSetPaymentContractAuthorisation;
            };
            MsgSetPaymentContractAuthorisationResponse: {
                encode(_: _150.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSetPaymentContractAuthorisationResponse;
                fromJSON(_: any): _150.MsgSetPaymentContractAuthorisationResponse;
                toJSON(_: _150.MsgSetPaymentContractAuthorisationResponse): unknown;
                fromPartial(_: Partial<_150.MsgSetPaymentContractAuthorisationResponse>): _150.MsgSetPaymentContractAuthorisationResponse;
            };
            MsgCreatePaymentTemplate: {
                encode(message: _150.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCreatePaymentTemplate;
                fromJSON(object: any): _150.MsgCreatePaymentTemplate;
                toJSON(message: _150.MsgCreatePaymentTemplate): unknown;
                fromPartial(object: Partial<_150.MsgCreatePaymentTemplate>): _150.MsgCreatePaymentTemplate;
            };
            MsgCreatePaymentTemplateResponse: {
                encode(_: _150.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCreatePaymentTemplateResponse;
                fromJSON(_: any): _150.MsgCreatePaymentTemplateResponse;
                toJSON(_: _150.MsgCreatePaymentTemplateResponse): unknown;
                fromPartial(_: Partial<_150.MsgCreatePaymentTemplateResponse>): _150.MsgCreatePaymentTemplateResponse;
            };
            MsgCreatePaymentContract: {
                encode(message: _150.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCreatePaymentContract;
                fromJSON(object: any): _150.MsgCreatePaymentContract;
                toJSON(message: _150.MsgCreatePaymentContract): unknown;
                fromPartial(object: Partial<_150.MsgCreatePaymentContract>): _150.MsgCreatePaymentContract;
            };
            MsgCreatePaymentContractResponse: {
                encode(_: _150.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCreatePaymentContractResponse;
                fromJSON(_: any): _150.MsgCreatePaymentContractResponse;
                toJSON(_: _150.MsgCreatePaymentContractResponse): unknown;
                fromPartial(_: Partial<_150.MsgCreatePaymentContractResponse>): _150.MsgCreatePaymentContractResponse;
            };
            MsgCreateSubscription: {
                encode(message: _150.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCreateSubscription;
                fromJSON(object: any): _150.MsgCreateSubscription;
                toJSON(message: _150.MsgCreateSubscription): unknown;
                fromPartial(object: Partial<_150.MsgCreateSubscription>): _150.MsgCreateSubscription;
            };
            MsgCreateSubscriptionResponse: {
                encode(_: _150.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCreateSubscriptionResponse;
                fromJSON(_: any): _150.MsgCreateSubscriptionResponse;
                toJSON(_: _150.MsgCreateSubscriptionResponse): unknown;
                fromPartial(_: Partial<_150.MsgCreateSubscriptionResponse>): _150.MsgCreateSubscriptionResponse;
            };
            MsgGrantDiscount: {
                encode(message: _150.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgGrantDiscount;
                fromJSON(object: any): _150.MsgGrantDiscount;
                toJSON(message: _150.MsgGrantDiscount): unknown;
                fromPartial(object: Partial<_150.MsgGrantDiscount>): _150.MsgGrantDiscount;
            };
            MsgGrantDiscountResponse: {
                encode(_: _150.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgGrantDiscountResponse;
                fromJSON(_: any): _150.MsgGrantDiscountResponse;
                toJSON(_: _150.MsgGrantDiscountResponse): unknown;
                fromPartial(_: Partial<_150.MsgGrantDiscountResponse>): _150.MsgGrantDiscountResponse;
            };
            MsgRevokeDiscount: {
                encode(message: _150.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgRevokeDiscount;
                fromJSON(object: any): _150.MsgRevokeDiscount;
                toJSON(message: _150.MsgRevokeDiscount): unknown;
                fromPartial(object: Partial<_150.MsgRevokeDiscount>): _150.MsgRevokeDiscount;
            };
            MsgRevokeDiscountResponse: {
                encode(_: _150.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgRevokeDiscountResponse;
                fromJSON(_: any): _150.MsgRevokeDiscountResponse;
                toJSON(_: _150.MsgRevokeDiscountResponse): unknown;
                fromPartial(_: Partial<_150.MsgRevokeDiscountResponse>): _150.MsgRevokeDiscountResponse;
            };
            MsgEffectPayment: {
                encode(message: _150.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgEffectPayment;
                fromJSON(object: any): _150.MsgEffectPayment;
                toJSON(message: _150.MsgEffectPayment): unknown;
                fromPartial(object: Partial<_150.MsgEffectPayment>): _150.MsgEffectPayment;
            };
            MsgEffectPaymentResponse: {
                encode(_: _150.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgEffectPaymentResponse;
                fromJSON(_: any): _150.MsgEffectPaymentResponse;
                toJSON(_: _150.MsgEffectPaymentResponse): unknown;
                fromPartial(_: Partial<_150.MsgEffectPaymentResponse>): _150.MsgEffectPaymentResponse;
            };
            QueryPaymentTemplateRequest: {
                encode(message: _149.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QueryPaymentTemplateRequest;
                fromJSON(object: any): _149.QueryPaymentTemplateRequest;
                toJSON(message: _149.QueryPaymentTemplateRequest): unknown;
                fromPartial(object: Partial<_149.QueryPaymentTemplateRequest>): _149.QueryPaymentTemplateRequest;
            };
            QueryPaymentTemplateResponse: {
                encode(message: _149.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QueryPaymentTemplateResponse;
                fromJSON(object: any): _149.QueryPaymentTemplateResponse;
                toJSON(message: _149.QueryPaymentTemplateResponse): unknown;
                fromPartial(object: Partial<_149.QueryPaymentTemplateResponse>): _149.QueryPaymentTemplateResponse;
            };
            QueryPaymentContractRequest: {
                encode(message: _149.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QueryPaymentContractRequest;
                fromJSON(object: any): _149.QueryPaymentContractRequest;
                toJSON(message: _149.QueryPaymentContractRequest): unknown;
                fromPartial(object: Partial<_149.QueryPaymentContractRequest>): _149.QueryPaymentContractRequest;
            };
            QueryPaymentContractResponse: {
                encode(message: _149.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QueryPaymentContractResponse;
                fromJSON(object: any): _149.QueryPaymentContractResponse;
                toJSON(message: _149.QueryPaymentContractResponse): unknown;
                fromPartial(object: Partial<_149.QueryPaymentContractResponse>): _149.QueryPaymentContractResponse;
            };
            QueryPaymentContractsByIdPrefixRequest: {
                encode(message: _149.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QueryPaymentContractsByIdPrefixRequest;
                fromJSON(object: any): _149.QueryPaymentContractsByIdPrefixRequest;
                toJSON(message: _149.QueryPaymentContractsByIdPrefixRequest): unknown;
                fromPartial(object: Partial<_149.QueryPaymentContractsByIdPrefixRequest>): _149.QueryPaymentContractsByIdPrefixRequest;
            };
            QueryPaymentContractsByIdPrefixResponse: {
                encode(message: _149.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QueryPaymentContractsByIdPrefixResponse;
                fromJSON(object: any): _149.QueryPaymentContractsByIdPrefixResponse;
                toJSON(message: _149.QueryPaymentContractsByIdPrefixResponse): unknown;
                fromPartial(object: Partial<_149.QueryPaymentContractsByIdPrefixResponse>): _149.QueryPaymentContractsByIdPrefixResponse;
            };
            QuerySubscriptionRequest: {
                encode(message: _149.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QuerySubscriptionRequest;
                fromJSON(object: any): _149.QuerySubscriptionRequest;
                toJSON(message: _149.QuerySubscriptionRequest): unknown;
                fromPartial(object: Partial<_149.QuerySubscriptionRequest>): _149.QuerySubscriptionRequest;
            };
            QuerySubscriptionResponse: {
                encode(message: _149.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QuerySubscriptionResponse;
                fromJSON(object: any): _149.QuerySubscriptionResponse;
                toJSON(message: _149.QuerySubscriptionResponse): unknown;
                fromPartial(object: Partial<_149.QuerySubscriptionResponse>): _149.QuerySubscriptionResponse;
            };
            PaymentTemplate: {
                encode(message: _148.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PaymentTemplate;
                fromJSON(object: any): _148.PaymentTemplate;
                toJSON(message: _148.PaymentTemplate): unknown;
                fromPartial(object: Partial<_148.PaymentTemplate>): _148.PaymentTemplate;
            };
            Discount: {
                encode(message: _148.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Discount;
                fromJSON(object: any): _148.Discount;
                toJSON(message: _148.Discount): unknown;
                fromPartial(object: Partial<_148.Discount>): _148.Discount;
            };
            DistributionShare: {
                encode(message: _148.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.DistributionShare;
                fromJSON(object: any): _148.DistributionShare;
                toJSON(message: _148.DistributionShare): unknown;
                fromPartial(object: Partial<_148.DistributionShare>): _148.DistributionShare;
            };
            PaymentContract: {
                encode(message: _148.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PaymentContract;
                fromJSON(object: any): _148.PaymentContract;
                toJSON(message: _148.PaymentContract): unknown;
                fromPartial(object: Partial<_148.PaymentContract>): _148.PaymentContract;
            };
            Subscription: {
                encode(message: _148.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Subscription;
                fromJSON(object: any): _148.Subscription;
                toJSON(message: _148.Subscription): unknown;
                fromPartial(object: Partial<_148.Subscription>): _148.Subscription;
            };
            BlockPeriod: {
                encode(message: _148.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.BlockPeriod;
                fromJSON(object: any): _148.BlockPeriod;
                toJSON(message: _148.BlockPeriod): unknown;
                fromPartial(object: Partial<_148.BlockPeriod>): _148.BlockPeriod;
            };
            TimePeriod: {
                encode(message: _148.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.TimePeriod;
                fromJSON(object: any): _148.TimePeriod;
                toJSON(message: _148.TimePeriod): unknown;
                fromPartial(object: Partial<_148.TimePeriod>): _148.TimePeriod;
            };
            TestPeriod: {
                encode(message: _148.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.TestPeriod;
                fromJSON(object: any): _148.TestPeriod;
                toJSON(message: _148.TestPeriod): unknown;
                fromPartial(object: Partial<_148.TestPeriod>): _148.TestPeriod;
            };
            GenesisState: {
                encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GenesisState;
                fromJSON(object: any): _147.GenesisState;
                toJSON(message: _147.GenesisState): unknown;
                fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
            };
        };
    }
    namespace project {
        const v1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                projectDoc(request: _153.QueryProjectDocRequest): Promise<_153.QueryProjectDocResponse>;
                projectAccounts(request: _153.QueryProjectAccountsRequest): Promise<_153.QueryProjectAccountsResponse>;
                projectTx(request: _153.QueryProjectTxRequest): Promise<_153.QueryProjectTxResponse>;
                params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
            };
            MsgCreateProject: {
                encode(message: _154.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateProject;
                fromJSON(object: any): _154.MsgCreateProject;
                toJSON(message: _154.MsgCreateProject): unknown;
                fromPartial(object: Partial<_154.MsgCreateProject>): _154.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(_: _154.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateProjectResponse;
                fromJSON(_: any): _154.MsgCreateProjectResponse;
                toJSON(_: _154.MsgCreateProjectResponse): unknown;
                fromPartial(_: Partial<_154.MsgCreateProjectResponse>): _154.MsgCreateProjectResponse;
            };
            MsgUpdateProjectStatus: {
                encode(message: _154.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateProjectStatus;
                fromJSON(object: any): _154.MsgUpdateProjectStatus;
                toJSON(message: _154.MsgUpdateProjectStatus): unknown;
                fromPartial(object: Partial<_154.MsgUpdateProjectStatus>): _154.MsgUpdateProjectStatus;
            };
            MsgUpdateProjectStatusResponse: {
                encode(_: _154.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateProjectStatusResponse;
                fromJSON(_: any): _154.MsgUpdateProjectStatusResponse;
                toJSON(_: _154.MsgUpdateProjectStatusResponse): unknown;
                fromPartial(_: Partial<_154.MsgUpdateProjectStatusResponse>): _154.MsgUpdateProjectStatusResponse;
            };
            MsgCreateAgent: {
                encode(message: _154.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateAgent;
                fromJSON(object: any): _154.MsgCreateAgent;
                toJSON(message: _154.MsgCreateAgent): unknown;
                fromPartial(object: Partial<_154.MsgCreateAgent>): _154.MsgCreateAgent;
            };
            MsgCreateAgentResponse: {
                encode(_: _154.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateAgentResponse;
                fromJSON(_: any): _154.MsgCreateAgentResponse;
                toJSON(_: _154.MsgCreateAgentResponse): unknown;
                fromPartial(_: Partial<_154.MsgCreateAgentResponse>): _154.MsgCreateAgentResponse;
            };
            MsgUpdateAgent: {
                encode(message: _154.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateAgent;
                fromJSON(object: any): _154.MsgUpdateAgent;
                toJSON(message: _154.MsgUpdateAgent): unknown;
                fromPartial(object: Partial<_154.MsgUpdateAgent>): _154.MsgUpdateAgent;
            };
            MsgUpdateAgentResponse: {
                encode(_: _154.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateAgentResponse;
                fromJSON(_: any): _154.MsgUpdateAgentResponse;
                toJSON(_: _154.MsgUpdateAgentResponse): unknown;
                fromPartial(_: Partial<_154.MsgUpdateAgentResponse>): _154.MsgUpdateAgentResponse;
            };
            MsgCreateClaim: {
                encode(message: _154.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateClaim;
                fromJSON(object: any): _154.MsgCreateClaim;
                toJSON(message: _154.MsgCreateClaim): unknown;
                fromPartial(object: Partial<_154.MsgCreateClaim>): _154.MsgCreateClaim;
            };
            MsgCreateClaimResponse: {
                encode(_: _154.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateClaimResponse;
                fromJSON(_: any): _154.MsgCreateClaimResponse;
                toJSON(_: _154.MsgCreateClaimResponse): unknown;
                fromPartial(_: Partial<_154.MsgCreateClaimResponse>): _154.MsgCreateClaimResponse;
            };
            MsgCreateEvaluation: {
                encode(message: _154.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateEvaluation;
                fromJSON(object: any): _154.MsgCreateEvaluation;
                toJSON(message: _154.MsgCreateEvaluation): unknown;
                fromPartial(object: Partial<_154.MsgCreateEvaluation>): _154.MsgCreateEvaluation;
            };
            MsgCreateEvaluationResponse: {
                encode(_: _154.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateEvaluationResponse;
                fromJSON(_: any): _154.MsgCreateEvaluationResponse;
                toJSON(_: _154.MsgCreateEvaluationResponse): unknown;
                fromPartial(_: Partial<_154.MsgCreateEvaluationResponse>): _154.MsgCreateEvaluationResponse;
            };
            MsgWithdrawFunds: {
                encode(message: _154.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgWithdrawFunds;
                fromJSON(object: any): _154.MsgWithdrawFunds;
                toJSON(message: _154.MsgWithdrawFunds): unknown;
                fromPartial(object: Partial<_154.MsgWithdrawFunds>): _154.MsgWithdrawFunds;
            };
            MsgWithdrawFundsResponse: {
                encode(_: _154.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgWithdrawFundsResponse;
                fromJSON(_: any): _154.MsgWithdrawFundsResponse;
                toJSON(_: _154.MsgWithdrawFundsResponse): unknown;
                fromPartial(_: Partial<_154.MsgWithdrawFundsResponse>): _154.MsgWithdrawFundsResponse;
            };
            MsgUpdateProjectDoc: {
                encode(message: _154.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateProjectDoc;
                fromJSON(object: any): _154.MsgUpdateProjectDoc;
                toJSON(message: _154.MsgUpdateProjectDoc): unknown;
                fromPartial(object: Partial<_154.MsgUpdateProjectDoc>): _154.MsgUpdateProjectDoc;
            };
            MsgUpdateProjectDocResponse: {
                encode(_: _154.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateProjectDocResponse;
                fromJSON(_: any): _154.MsgUpdateProjectDocResponse;
                toJSON(_: _154.MsgUpdateProjectDocResponse): unknown;
                fromPartial(_: Partial<_154.MsgUpdateProjectDocResponse>): _154.MsgUpdateProjectDocResponse;
            };
            QueryProjectDocRequest: {
                encode(message: _153.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryProjectDocRequest;
                fromJSON(object: any): _153.QueryProjectDocRequest;
                toJSON(message: _153.QueryProjectDocRequest): unknown;
                fromPartial(object: Partial<_153.QueryProjectDocRequest>): _153.QueryProjectDocRequest;
            };
            QueryProjectDocResponse: {
                encode(message: _153.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryProjectDocResponse;
                fromJSON(object: any): _153.QueryProjectDocResponse;
                toJSON(message: _153.QueryProjectDocResponse): unknown;
                fromPartial(object: Partial<_153.QueryProjectDocResponse>): _153.QueryProjectDocResponse;
            };
            QueryProjectAccountsRequest: {
                encode(message: _153.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryProjectAccountsRequest;
                fromJSON(object: any): _153.QueryProjectAccountsRequest;
                toJSON(message: _153.QueryProjectAccountsRequest): unknown;
                fromPartial(object: Partial<_153.QueryProjectAccountsRequest>): _153.QueryProjectAccountsRequest;
            };
            QueryProjectAccountsResponse: {
                encode(message: _153.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryProjectAccountsResponse;
                fromJSON(object: any): _153.QueryProjectAccountsResponse;
                toJSON(message: _153.QueryProjectAccountsResponse): unknown;
                fromPartial(object: Partial<_153.QueryProjectAccountsResponse>): _153.QueryProjectAccountsResponse;
            };
            QueryProjectTxRequest: {
                encode(message: _153.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryProjectTxRequest;
                fromJSON(object: any): _153.QueryProjectTxRequest;
                toJSON(message: _153.QueryProjectTxRequest): unknown;
                fromPartial(object: Partial<_153.QueryProjectTxRequest>): _153.QueryProjectTxRequest;
            };
            QueryProjectTxResponse: {
                encode(message: _153.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryProjectTxResponse;
                fromJSON(object: any): _153.QueryProjectTxResponse;
                toJSON(message: _153.QueryProjectTxResponse): unknown;
                fromPartial(object: Partial<_153.QueryProjectTxResponse>): _153.QueryProjectTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _153.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryParamsRequest;
                fromJSON(_: any): _153.QueryParamsRequest;
                toJSON(_: _153.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_153.QueryParamsRequest>): _153.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _153.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryParamsResponse;
                fromJSON(object: any): _153.QueryParamsResponse;
                toJSON(message: _153.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_153.QueryParamsResponse>): _153.QueryParamsResponse;
            };
            UpdateProjectStatusDoc: {
                encode(message: _152.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpdateProjectStatusDoc;
                fromJSON(object: any): _152.UpdateProjectStatusDoc;
                toJSON(message: _152.UpdateProjectStatusDoc): unknown;
                fromPartial(object: Partial<_152.UpdateProjectStatusDoc>): _152.UpdateProjectStatusDoc;
            };
            CreateAgentDoc: {
                encode(message: _152.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.CreateAgentDoc;
                fromJSON(object: any): _152.CreateAgentDoc;
                toJSON(message: _152.CreateAgentDoc): unknown;
                fromPartial(object: Partial<_152.CreateAgentDoc>): _152.CreateAgentDoc;
            };
            UpdateAgentDoc: {
                encode(message: _152.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpdateAgentDoc;
                fromJSON(object: any): _152.UpdateAgentDoc;
                toJSON(message: _152.UpdateAgentDoc): unknown;
                fromPartial(object: Partial<_152.UpdateAgentDoc>): _152.UpdateAgentDoc;
            };
            CreateClaimDoc: {
                encode(message: _152.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.CreateClaimDoc;
                fromJSON(object: any): _152.CreateClaimDoc;
                toJSON(message: _152.CreateClaimDoc): unknown;
                fromPartial(object: Partial<_152.CreateClaimDoc>): _152.CreateClaimDoc;
            };
            CreateEvaluationDoc: {
                encode(message: _152.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.CreateEvaluationDoc;
                fromJSON(object: any): _152.CreateEvaluationDoc;
                toJSON(message: _152.CreateEvaluationDoc): unknown;
                fromPartial(object: Partial<_152.CreateEvaluationDoc>): _152.CreateEvaluationDoc;
            };
            WithdrawFundsDoc: {
                encode(message: _152.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.WithdrawFundsDoc;
                fromJSON(object: any): _152.WithdrawFundsDoc;
                toJSON(message: _152.WithdrawFundsDoc): unknown;
                fromPartial(object: Partial<_152.WithdrawFundsDoc>): _152.WithdrawFundsDoc;
            };
            ProjectDoc: {
                encode(message: _152.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ProjectDoc;
                fromJSON(object: any): _152.ProjectDoc;
                toJSON(message: _152.ProjectDoc): unknown;
                fromPartial(object: Partial<_152.ProjectDoc>): _152.ProjectDoc;
            };
            WithdrawalInfoDoc: {
                encode(message: _152.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.WithdrawalInfoDoc;
                fromJSON(object: any): _152.WithdrawalInfoDoc;
                toJSON(message: _152.WithdrawalInfoDoc): unknown;
                fromPartial(object: Partial<_152.WithdrawalInfoDoc>): _152.WithdrawalInfoDoc;
            };
            Params: {
                encode(message: _152.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Params;
                fromJSON(object: any): _152.Params;
                toJSON(message: _152.Params): unknown;
                fromPartial(object: Partial<_152.Params>): _152.Params;
            };
            Claim: {
                encode(message: _152.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Claim;
                fromJSON(object: any): _152.Claim;
                toJSON(message: _152.Claim): unknown;
                fromPartial(object: Partial<_152.Claim>): _152.Claim;
            };
            GenesisAccountMap_MapEntry: {
                encode(message: _152.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisAccountMap_MapEntry;
                fromJSON(object: any): _152.GenesisAccountMap_MapEntry;
                toJSON(message: _152.GenesisAccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_152.GenesisAccountMap_MapEntry>): _152.GenesisAccountMap_MapEntry;
            };
            GenesisAccountMap: {
                encode(message: _152.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisAccountMap;
                fromJSON(object: any): _152.GenesisAccountMap;
                toJSON(message: _152.GenesisAccountMap): unknown;
                fromPartial(object: Partial<_152.GenesisAccountMap>): _152.GenesisAccountMap;
            };
            AccountMap_MapEntry: {
                encode(message: _152.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.AccountMap_MapEntry;
                fromJSON(object: any): _152.AccountMap_MapEntry;
                toJSON(message: _152.AccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_152.AccountMap_MapEntry>): _152.AccountMap_MapEntry;
            };
            AccountMap: {
                encode(message: _152.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.AccountMap;
                fromJSON(object: any): _152.AccountMap;
                toJSON(message: _152.AccountMap): unknown;
                fromPartial(object: Partial<_152.AccountMap>): _152.AccountMap;
            };
            WithdrawalInfoDocs: {
                encode(message: _152.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.WithdrawalInfoDocs;
                fromJSON(object: any): _152.WithdrawalInfoDocs;
                toJSON(message: _152.WithdrawalInfoDocs): unknown;
                fromPartial(object: Partial<_152.WithdrawalInfoDocs>): _152.WithdrawalInfoDocs;
            };
            Claims: {
                encode(message: _152.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Claims;
                fromJSON(object: any): _152.Claims;
                toJSON(message: _152.Claims): unknown;
                fromPartial(object: Partial<_152.Claims>): _152.Claims;
            };
            GenesisState: {
                encode(message: _151.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisState;
                fromJSON(object: any): _151.GenesisState;
                toJSON(message: _151.GenesisState): unknown;
                fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenList(request: _158.QueryTokenListRequest): Promise<_158.QueryTokenListResponse>;
                tokenDoc(request: _158.QueryTokenDocRequest): Promise<_158.QueryTokenDocResponse>;
                tokenConfig(request?: _158.QueryTokenConfigRequest): Promise<_158.QueryTokenConfigResponse>;
            };
            MsgCreateTokenResponse: {
                encode(_: _160.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCreateTokenResponse;
                fromJSON(_: any): _160.MsgCreateTokenResponse;
                toJSON(_: _160.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_160.MsgCreateTokenResponse>): _160.MsgCreateTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _160.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgTransferToken;
                fromJSON(object: any): _160.MsgTransferToken;
                toJSON(message: _160.MsgTransferToken): unknown;
                fromPartial(object: Partial<_160.MsgTransferToken>): _160.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _160.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgTransferTokenResponse;
                fromJSON(_: any): _160.MsgTransferTokenResponse;
                toJSON(_: _160.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_160.MsgTransferTokenResponse>): _160.MsgTransferTokenResponse;
            };
            Cw20Coin: {
                encode(message: _160.Cw20Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Cw20Coin;
                fromJSON(object: any): _160.Cw20Coin;
                toJSON(message: _160.Cw20Coin): unknown;
                fromPartial(object: Partial<_160.Cw20Coin>): _160.Cw20Coin;
            };
            SetupCw20: {
                encode(message: _160.SetupCw20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SetupCw20;
                fromJSON(object: any): _160.SetupCw20;
                toJSON(message: _160.SetupCw20): unknown;
                fromPartial(object: Partial<_160.SetupCw20>): _160.SetupCw20;
            };
            SetupCw721: {
                encode(message: _160.SetupCw721, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SetupCw721;
                fromJSON(object: any): _160.SetupCw721;
                toJSON(message: _160.SetupCw721): unknown;
                fromPartial(object: Partial<_160.SetupCw721>): _160.SetupCw721;
            };
            SetupCw1155: {
                encode(_: _160.SetupCw1155, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SetupCw1155;
                fromJSON(_: any): _160.SetupCw1155;
                toJSON(_: _160.SetupCw1155): unknown;
                fromPartial(_: Partial<_160.SetupCw1155>): _160.SetupCw1155;
            };
            MsgSetupMinter: {
                encode(message: _160.MsgSetupMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSetupMinter;
                fromJSON(object: any): _160.MsgSetupMinter;
                toJSON(message: _160.MsgSetupMinter): unknown;
                fromPartial(object: Partial<_160.MsgSetupMinter>): _160.MsgSetupMinter;
            };
            MsgSetupMinterResponse: {
                encode(_: _160.MsgSetupMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSetupMinterResponse;
                fromJSON(_: any): _160.MsgSetupMinterResponse;
                toJSON(_: _160.MsgSetupMinterResponse): unknown;
                fromPartial(_: Partial<_160.MsgSetupMinterResponse>): _160.MsgSetupMinterResponse;
            };
            MintCw20: {
                encode(message: _160.MintCw20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MintCw20;
                fromJSON(object: any): _160.MintCw20;
                toJSON(message: _160.MintCw20): unknown;
                fromPartial(object: Partial<_160.MintCw20>): _160.MintCw20;
            };
            MintCw721: {
                encode(message: _160.MintCw721, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MintCw721;
                fromJSON(object: any): _160.MintCw721;
                toJSON(message: _160.MintCw721): unknown;
                fromPartial(object: Partial<_160.MintCw721>): _160.MintCw721;
            };
            MintCw1155: {
                encode(message: _160.MintCw1155, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MintCw1155;
                fromJSON(object: any): _160.MintCw1155;
                toJSON(message: _160.MintCw1155): unknown;
                fromPartial(object: Partial<_160.MintCw1155>): _160.MintCw1155;
            };
            MsgMint: {
                encode(message: _160.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgMint;
                fromJSON(object: any): _160.MsgMint;
                toJSON(message: _160.MsgMint): unknown;
                fromPartial(object: Partial<_160.MsgMint>): _160.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _160.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgMintResponse;
                fromJSON(_: any): _160.MsgMintResponse;
                toJSON(_: _160.MsgMintResponse): unknown;
                fromPartial(_: Partial<_160.MsgMintResponse>): _160.MsgMintResponse;
            };
            contractTypeFromJSON(object: any): _159.ContractType;
            contractTypeToJSON(object: _159.ContractType): string;
            ContractType: typeof _159.ContractType;
            ContractTypeSDKType: typeof _159.ContractTypeSDKType;
            Contract: {
                encode(message: _159.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Contract;
                fromJSON(object: any): _159.Contract;
                toJSON(message: _159.Contract): unknown;
                fromPartial(object: Partial<_159.Contract>): _159.Contract;
            };
            Params: {
                encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Params;
                fromJSON(object: any): _159.Params;
                toJSON(message: _159.Params): unknown;
                fromPartial(object: Partial<_159.Params>): _159.Params;
            };
            TokenMinter: {
                encode(message: _159.TokenMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.TokenMinter;
                fromJSON(object: any): _159.TokenMinter;
                toJSON(message: _159.TokenMinter): unknown;
                fromPartial(object: Partial<_159.TokenMinter>): _159.TokenMinter;
            };
            QueryTokenListRequest: {
                encode(message: _158.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryTokenListRequest;
                fromJSON(object: any): _158.QueryTokenListRequest;
                toJSON(message: _158.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_158.QueryTokenListRequest>): _158.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _158.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryTokenListResponse;
                fromJSON(object: any): _158.QueryTokenListResponse;
                toJSON(message: _158.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_158.QueryTokenListResponse>): _158.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _158.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryTokenDocRequest;
                fromJSON(object: any): _158.QueryTokenDocRequest;
                toJSON(message: _158.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_158.QueryTokenDocRequest>): _158.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(_: _158.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryTokenDocResponse;
                fromJSON(_: any): _158.QueryTokenDocResponse;
                toJSON(_: _158.QueryTokenDocResponse): unknown;
                fromPartial(_: Partial<_158.QueryTokenDocResponse>): _158.QueryTokenDocResponse;
            };
            QueryTokenConfigRequest: {
                encode(_: _158.QueryTokenConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryTokenConfigRequest;
                fromJSON(_: any): _158.QueryTokenConfigRequest;
                toJSON(_: _158.QueryTokenConfigRequest): unknown;
                fromPartial(_: Partial<_158.QueryTokenConfigRequest>): _158.QueryTokenConfigRequest;
            };
            QueryTokenConfigResponse_MapEntry: {
                encode(message: _158.QueryTokenConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryTokenConfigResponse_MapEntry;
                fromJSON(object: any): _158.QueryTokenConfigResponse_MapEntry;
                toJSON(message: _158.QueryTokenConfigResponse_MapEntry): unknown;
                fromPartial(object: Partial<_158.QueryTokenConfigResponse_MapEntry>): _158.QueryTokenConfigResponse_MapEntry;
            };
            QueryTokenConfigResponse: {
                encode(message: _158.QueryTokenConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryTokenConfigResponse;
                fromJSON(object: any): _158.QueryTokenConfigResponse;
                toJSON(message: _158.QueryTokenConfigResponse): unknown;
                fromPartial(object: Partial<_158.QueryTokenConfigResponse>): _158.QueryTokenConfigResponse;
            };
            SetTokenContractCodes: {
                encode(message: _157.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.SetTokenContractCodes;
                fromJSON(object: any): _157.SetTokenContractCodes;
                toJSON(message: _157.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_157.SetTokenContractCodes>): _157.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                fromJSON(object: any): _156.GenesisState;
                toJSON(message: _156.GenesisState): unknown;
                fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
            };
            Cw20Constraints: {
                encode(message: _155.Cw20Constraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Cw20Constraints;
                fromJSON(object: any): _155.Cw20Constraints;
                toJSON(message: _155.Cw20Constraints): unknown;
                fromPartial(object: Partial<_155.Cw20Constraints>): _155.Cw20Constraints;
            };
            Cw721Constraints: {
                encode(_: _155.Cw721Constraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Cw721Constraints;
                fromJSON(_: any): _155.Cw721Constraints;
                toJSON(_: _155.Cw721Constraints): unknown;
                fromPartial(_: Partial<_155.Cw721Constraints>): _155.Cw721Constraints;
            };
            Cw1155Constraints: {
                encode(message: _155.Cw1155Constraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Cw1155Constraints;
                fromJSON(object: any): _155.Cw1155Constraints;
                toJSON(message: _155.Cw1155Constraints): unknown;
                fromPartial(object: Partial<_155.Cw1155Constraints>): _155.Cw1155Constraints;
            };
            MintConstraints: {
                encode(message: _155.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MintConstraints;
                fromJSON(object: any): _155.MintConstraints;
                toJSON(message: _155.MintConstraints): unknown;
                fromPartial(object: Partial<_155.MintConstraints>): _155.MintConstraints;
            };
            MintAuthorization: {
                encode(message: _155.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MintAuthorization;
                fromJSON(object: any): _155.MintAuthorization;
                toJSON(message: _155.MintAuthorization): unknown;
                fromPartial(object: Partial<_155.MintAuthorization>): _155.MintAuthorization;
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
                    v1beta1: _223.MsgClientImpl;
                };
                entity: {
                    v1beta1: _224.MsgClientImpl;
                };
                iid: {
                    v1beta1: _225.MsgClientImpl;
                };
                payments: {
                    v1: _226.MsgClientImpl;
                };
                project: {
                    v1: _227.MsgClientImpl;
                };
                token: {
                    v1beta1: _228.MsgClientImpl;
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
                        paymentTemplate(request: _149.QueryPaymentTemplateRequest): Promise<_149.QueryPaymentTemplateResponse>;
                        paymentContract(request: _149.QueryPaymentContractRequest): Promise<_149.QueryPaymentContractResponse>;
                        paymentContractsByIdPrefix(request: _149.QueryPaymentContractsByIdPrefixRequest): Promise<_149.QueryPaymentContractsByIdPrefixResponse>;
                        subscription(request: _149.QuerySubscriptionRequest): Promise<_149.QuerySubscriptionResponse>;
                    };
                };
                project: {
                    v1: {
                        projectDoc(request: _153.QueryProjectDocRequest): Promise<_153.QueryProjectDocResponse>;
                        projectAccounts(request: _153.QueryProjectAccountsRequest): Promise<_153.QueryProjectAccountsResponse>;
                        projectTx(request: _153.QueryProjectTxRequest): Promise<_153.QueryProjectTxResponse>;
                        params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        tokenList(request: _158.QueryTokenListRequest): Promise<_158.QueryTokenListResponse>;
                        tokenDoc(request: _158.QueryTokenDocRequest): Promise<_158.QueryTokenDocResponse>;
                        tokenConfig(request?: _158.QueryTokenConfigRequest): Promise<_158.QueryTokenConfigResponse>;
                    };
                };
            };
        }>;
    };
}
