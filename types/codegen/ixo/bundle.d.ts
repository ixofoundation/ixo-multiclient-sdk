import * as _132 from "./bonds/v1beta1/bonds";
import * as _133 from "./bonds/v1beta1/genesis";
import * as _134 from "./bonds/v1beta1/query";
import * as _135 from "./bonds/v1beta1/tx";
import * as _136 from "./entity/v1beta1/entity";
import * as _137 from "./entity/v1beta1/genesis";
import * as _138 from "./entity/v1beta1/proposal";
import * as _139 from "./entity/v1beta1/query";
import * as _140 from "./entity/v1beta1/tx";
import * as _141 from "./iid/v1beta1/event";
import * as _142 from "./iid/v1beta1/genesis";
import * as _143 from "./iid/v1beta1/iid";
import * as _144 from "./iid/v1beta1/query";
import * as _145 from "./iid/v1beta1/tx";
import * as _146 from "./payments/v1/genesis";
import * as _147 from "./payments/v1/payments";
import * as _148 from "./payments/v1/query";
import * as _149 from "./payments/v1/tx";
import * as _150 from "./project/v1/genesis";
import * as _151 from "./project/v1/project";
import * as _152 from "./project/v1/query";
import * as _153 from "./project/v1/tx";
import * as _154 from "./token/v1beta1/authz";
import * as _155 from "./token/v1beta1/genesis";
import * as _156 from "./token/v1beta1/proposal";
import * as _157 from "./token/v1beta1/query";
import * as _158 from "./token/v1beta1/token";
import * as _159 from "./token/v1beta1/tx";
import * as _216 from "./bonds/v1beta1/query.rpc.Query";
import * as _217 from "./entity/v1beta1/query.rpc.Query";
import * as _218 from "./iid/v1beta1/query.rpc.Query";
import * as _219 from "./payments/v1/query.rpc.Query";
import * as _220 from "./project/v1/query.rpc.Query";
import * as _221 from "./token/v1beta1/query.rpc.Query";
import * as _222 from "./bonds/v1beta1/tx.rpc.msg";
import * as _223 from "./entity/v1beta1/tx.rpc.msg";
import * as _224 from "./iid/v1beta1/tx.rpc.msg";
import * as _225 from "./payments/v1/tx.rpc.msg";
import * as _226 from "./project/v1/tx.rpc.msg";
import * as _227 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
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
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                entityList(request: _139.QueryEntityListRequest): Promise<_139.QueryEntityListResponse>;
                entityDoc(request: _139.QueryEntityDocRequest): Promise<_139.QueryEntityDocResponse>;
                entityConfig(request?: _139.QueryEntityConfigRequest): Promise<_139.QueryEntityConfigResponse>;
            };
            MsgCreateEntity: {
                encode(message: _140.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgCreateEntity;
                fromJSON(object: any): _140.MsgCreateEntity;
                toJSON(message: _140.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_140.MsgCreateEntity>): _140.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _140.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgCreateEntityResponse;
                fromJSON(object: any): _140.MsgCreateEntityResponse;
                toJSON(message: _140.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_140.MsgCreateEntityResponse>): _140.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _140.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgUpdateEntity;
                fromJSON(object: any): _140.MsgUpdateEntity;
                toJSON(message: _140.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_140.MsgUpdateEntity>): _140.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _140.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgUpdateEntityResponse;
                fromJSON(_: any): _140.MsgUpdateEntityResponse;
                toJSON(_: _140.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_140.MsgUpdateEntityResponse>): _140.MsgUpdateEntityResponse;
            };
            MsgTransferEntity: {
                encode(message: _140.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgTransferEntity;
                fromJSON(object: any): _140.MsgTransferEntity;
                toJSON(message: _140.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_140.MsgTransferEntity>): _140.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _140.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgTransferEntityResponse;
                fromJSON(_: any): _140.MsgTransferEntityResponse;
                toJSON(_: _140.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_140.MsgTransferEntityResponse>): _140.MsgTransferEntityResponse;
            };
            QueryEntityListRequest: {
                encode(message: _139.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryEntityListRequest;
                fromJSON(object: any): _139.QueryEntityListRequest;
                toJSON(message: _139.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_139.QueryEntityListRequest>): _139.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(_: _139.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryEntityListResponse;
                fromJSON(_: any): _139.QueryEntityListResponse;
                toJSON(_: _139.QueryEntityListResponse): unknown;
                fromPartial(_: Partial<_139.QueryEntityListResponse>): _139.QueryEntityListResponse;
            };
            QueryEntityDocRequest: {
                encode(message: _139.QueryEntityDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryEntityDocRequest;
                fromJSON(object: any): _139.QueryEntityDocRequest;
                toJSON(message: _139.QueryEntityDocRequest): unknown;
                fromPartial(object: Partial<_139.QueryEntityDocRequest>): _139.QueryEntityDocRequest;
            };
            QueryEntityDocResponse: {
                encode(_: _139.QueryEntityDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryEntityDocResponse;
                fromJSON(_: any): _139.QueryEntityDocResponse;
                toJSON(_: _139.QueryEntityDocResponse): unknown;
                fromPartial(_: Partial<_139.QueryEntityDocResponse>): _139.QueryEntityDocResponse;
            };
            QueryEntityConfigRequest: {
                encode(_: _139.QueryEntityConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryEntityConfigRequest;
                fromJSON(_: any): _139.QueryEntityConfigRequest;
                toJSON(_: _139.QueryEntityConfigRequest): unknown;
                fromPartial(_: Partial<_139.QueryEntityConfigRequest>): _139.QueryEntityConfigRequest;
            };
            QueryEntityConfigResponse_MapEntry: {
                encode(message: _139.QueryEntityConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryEntityConfigResponse_MapEntry;
                fromJSON(object: any): _139.QueryEntityConfigResponse_MapEntry;
                toJSON(message: _139.QueryEntityConfigResponse_MapEntry): unknown;
                fromPartial(object: Partial<_139.QueryEntityConfigResponse_MapEntry>): _139.QueryEntityConfigResponse_MapEntry;
            };
            QueryEntityConfigResponse: {
                encode(message: _139.QueryEntityConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryEntityConfigResponse;
                fromJSON(object: any): _139.QueryEntityConfigResponse;
                toJSON(message: _139.QueryEntityConfigResponse): unknown;
                fromPartial(object: Partial<_139.QueryEntityConfigResponse>): _139.QueryEntityConfigResponse;
            };
            InitializeNftContract: {
                encode(message: _138.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.InitializeNftContract;
                fromJSON(object: any): _138.InitializeNftContract;
                toJSON(message: _138.InitializeNftContract): unknown;
                fromPartial(object: Partial<_138.InitializeNftContract>): _138.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _137.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.GenesisState;
                fromJSON(object: any): _137.GenesisState;
                toJSON(message: _137.GenesisState): unknown;
                fromPartial(object: Partial<_137.GenesisState>): _137.GenesisState;
            };
            Params: {
                encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
                fromJSON(object: any): _136.Params;
                toJSON(message: _136.Params): unknown;
                fromPartial(object: Partial<_136.Params>): _136.Params;
            };
            EntityDoc: {
                encode(_: _136.EntityDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EntityDoc;
                fromJSON(_: any): _136.EntityDoc;
                toJSON(_: _136.EntityDoc): unknown;
                fromPartial(_: Partial<_136.EntityDoc>): _136.EntityDoc;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request: _144.QueryIidDocumentsRequest): Promise<_144.QueryIidDocumentsResponse>;
                iidDocument(request: _144.QueryIidDocumentRequest): Promise<_144.QueryIidDocumentResponse>;
                metaData(request: _144.QueryIidMetaDataRequest): Promise<_144.QueryIidMetaDataResponse>;
            };
            Verification: {
                encode(message: _145.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Verification;
                fromJSON(object: any): _145.Verification;
                toJSON(message: _145.Verification): unknown;
                fromPartial(object: Partial<_145.Verification>): _145.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _145.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateIidDocument;
                fromJSON(object: any): _145.MsgCreateIidDocument;
                toJSON(message: _145.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_145.MsgCreateIidDocument>): _145.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _145.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _145.MsgCreateIidDocumentResponse;
                toJSON(_: _145.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_145.MsgCreateIidDocumentResponse>): _145.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _145.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateIidDocument;
                fromJSON(object: any): _145.MsgUpdateIidDocument;
                toJSON(message: _145.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_145.MsgUpdateIidDocument>): _145.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _145.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _145.MsgUpdateIidDocumentResponse;
                toJSON(_: _145.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_145.MsgUpdateIidDocumentResponse>): _145.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _145.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddVerification;
                fromJSON(object: any): _145.MsgAddVerification;
                toJSON(message: _145.MsgAddVerification): unknown;
                fromPartial(object: Partial<_145.MsgAddVerification>): _145.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _145.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddVerificationResponse;
                fromJSON(_: any): _145.MsgAddVerificationResponse;
                toJSON(_: _145.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_145.MsgAddVerificationResponse>): _145.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _145.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgSetVerificationRelationships;
                fromJSON(object: any): _145.MsgSetVerificationRelationships;
                toJSON(message: _145.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_145.MsgSetVerificationRelationships>): _145.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _145.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _145.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _145.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_145.MsgSetVerificationRelationshipsResponse>): _145.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _145.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgRevokeVerification;
                fromJSON(object: any): _145.MsgRevokeVerification;
                toJSON(message: _145.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_145.MsgRevokeVerification>): _145.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _145.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgRevokeVerificationResponse;
                fromJSON(_: any): _145.MsgRevokeVerificationResponse;
                toJSON(_: _145.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_145.MsgRevokeVerificationResponse>): _145.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _145.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddService;
                fromJSON(object: any): _145.MsgAddService;
                toJSON(message: _145.MsgAddService): unknown;
                fromPartial(object: Partial<_145.MsgAddService>): _145.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _145.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddServiceResponse;
                fromJSON(_: any): _145.MsgAddServiceResponse;
                toJSON(_: _145.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_145.MsgAddServiceResponse>): _145.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _145.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteService;
                fromJSON(object: any): _145.MsgDeleteService;
                toJSON(message: _145.MsgDeleteService): unknown;
                fromPartial(object: Partial<_145.MsgDeleteService>): _145.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _145.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteServiceResponse;
                fromJSON(_: any): _145.MsgDeleteServiceResponse;
                toJSON(_: _145.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_145.MsgDeleteServiceResponse>): _145.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _145.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddController;
                fromJSON(object: any): _145.MsgAddController;
                toJSON(message: _145.MsgAddController): unknown;
                fromPartial(object: Partial<_145.MsgAddController>): _145.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _145.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddControllerResponse;
                fromJSON(_: any): _145.MsgAddControllerResponse;
                toJSON(_: _145.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_145.MsgAddControllerResponse>): _145.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _145.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteController;
                fromJSON(object: any): _145.MsgDeleteController;
                toJSON(message: _145.MsgDeleteController): unknown;
                fromPartial(object: Partial<_145.MsgDeleteController>): _145.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _145.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteControllerResponse;
                fromJSON(_: any): _145.MsgDeleteControllerResponse;
                toJSON(_: _145.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_145.MsgDeleteControllerResponse>): _145.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _145.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddLinkedResource;
                fromJSON(object: any): _145.MsgAddLinkedResource;
                toJSON(message: _145.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_145.MsgAddLinkedResource>): _145.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _145.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteLinkedResource;
                fromJSON(object: any): _145.MsgDeleteLinkedResource;
                toJSON(message: _145.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_145.MsgDeleteLinkedResource>): _145.MsgDeleteLinkedResource;
            };
            MsgAddLinkedEntity: {
                encode(message: _145.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddLinkedEntity;
                fromJSON(object: any): _145.MsgAddLinkedEntity;
                toJSON(message: _145.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_145.MsgAddLinkedEntity>): _145.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _145.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteLinkedEntity;
                fromJSON(object: any): _145.MsgDeleteLinkedEntity;
                toJSON(message: _145.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_145.MsgDeleteLinkedEntity>): _145.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _145.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddAccordedRight;
                fromJSON(object: any): _145.MsgAddAccordedRight;
                toJSON(message: _145.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_145.MsgAddAccordedRight>): _145.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _145.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteAccordedRight;
                fromJSON(object: any): _145.MsgDeleteAccordedRight;
                toJSON(message: _145.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_145.MsgDeleteAccordedRight>): _145.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _145.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddIidContext;
                fromJSON(object: any): _145.MsgAddIidContext;
                toJSON(message: _145.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_145.MsgAddIidContext>): _145.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _145.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeactivateIID;
                fromJSON(object: any): _145.MsgDeactivateIID;
                toJSON(message: _145.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_145.MsgDeactivateIID>): _145.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _145.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteIidContext;
                fromJSON(object: any): _145.MsgDeleteIidContext;
                toJSON(message: _145.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_145.MsgDeleteIidContext>): _145.MsgDeleteIidContext;
            };
            MsgUpdateIidMeta: {
                encode(message: _145.MsgUpdateIidMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateIidMeta;
                fromJSON(object: any): _145.MsgUpdateIidMeta;
                toJSON(message: _145.MsgUpdateIidMeta): unknown;
                fromPartial(object: Partial<_145.MsgUpdateIidMeta>): _145.MsgUpdateIidMeta;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _145.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _145.MsgAddLinkedResourceResponse;
                toJSON(_: _145.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_145.MsgAddLinkedResourceResponse>): _145.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _145.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _145.MsgDeleteLinkedResourceResponse;
                toJSON(_: _145.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_145.MsgDeleteLinkedResourceResponse>): _145.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _145.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _145.MsgAddLinkedEntityResponse;
                toJSON(_: _145.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_145.MsgAddLinkedEntityResponse>): _145.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _145.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _145.MsgDeleteLinkedEntityResponse;
                toJSON(_: _145.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_145.MsgDeleteLinkedEntityResponse>): _145.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _145.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddAccordedRightResponse;
                fromJSON(_: any): _145.MsgAddAccordedRightResponse;
                toJSON(_: _145.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_145.MsgAddAccordedRightResponse>): _145.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _145.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _145.MsgDeleteAccordedRightResponse;
                toJSON(_: _145.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_145.MsgDeleteAccordedRightResponse>): _145.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _145.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddIidContextResponse;
                fromJSON(_: any): _145.MsgAddIidContextResponse;
                toJSON(_: _145.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_145.MsgAddIidContextResponse>): _145.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _145.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeleteIidContextResponse;
                fromJSON(_: any): _145.MsgDeleteIidContextResponse;
                toJSON(_: _145.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_145.MsgDeleteIidContextResponse>): _145.MsgDeleteIidContextResponse;
            };
            MsgUpdateIidMetaResponse: {
                encode(_: _145.MsgUpdateIidMetaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateIidMetaResponse;
                fromJSON(_: any): _145.MsgUpdateIidMetaResponse;
                toJSON(_: _145.MsgUpdateIidMetaResponse): unknown;
                fromPartial(_: Partial<_145.MsgUpdateIidMetaResponse>): _145.MsgUpdateIidMetaResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _145.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeactivateIIDResponse;
                fromJSON(_: any): _145.MsgDeactivateIIDResponse;
                toJSON(_: _145.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_145.MsgDeactivateIIDResponse>): _145.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _144.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIidDocumentsRequest;
                fromJSON(object: any): _144.QueryIidDocumentsRequest;
                toJSON(message: _144.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_144.QueryIidDocumentsRequest>): _144.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _144.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIidDocumentsResponse;
                fromJSON(object: any): _144.QueryIidDocumentsResponse;
                toJSON(message: _144.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_144.QueryIidDocumentsResponse>): _144.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _144.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIidDocumentRequest;
                fromJSON(object: any): _144.QueryIidDocumentRequest;
                toJSON(message: _144.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_144.QueryIidDocumentRequest>): _144.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _144.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIidDocumentResponse;
                fromJSON(object: any): _144.QueryIidDocumentResponse;
                toJSON(message: _144.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_144.QueryIidDocumentResponse>): _144.QueryIidDocumentResponse;
            };
            QueryIidMetaDataRequest: {
                encode(message: _144.QueryIidMetaDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIidMetaDataRequest;
                fromJSON(object: any): _144.QueryIidMetaDataRequest;
                toJSON(message: _144.QueryIidMetaDataRequest): unknown;
                fromPartial(object: Partial<_144.QueryIidMetaDataRequest>): _144.QueryIidMetaDataRequest;
            };
            QueryIidMetaDataResponse: {
                encode(message: _144.QueryIidMetaDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIidMetaDataResponse;
                fromJSON(object: any): _144.QueryIidMetaDataResponse;
                toJSON(message: _144.QueryIidMetaDataResponse): unknown;
                fromPartial(object: Partial<_144.QueryIidMetaDataResponse>): _144.QueryIidMetaDataResponse;
            };
            Context: {
                encode(message: _143.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Context;
                fromJSON(object: any): _143.Context;
                toJSON(message: _143.Context): unknown;
                fromPartial(object: Partial<_143.Context>): _143.Context;
            };
            IidDocument: {
                encode(message: _143.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.IidDocument;
                fromJSON(object: any): _143.IidDocument;
                toJSON(message: _143.IidDocument): unknown;
                fromPartial(object: Partial<_143.IidDocument>): _143.IidDocument;
            };
            AccordedRight: {
                encode(message: _143.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.AccordedRight;
                fromJSON(object: any): _143.AccordedRight;
                toJSON(message: _143.AccordedRight): unknown;
                fromPartial(object: Partial<_143.AccordedRight>): _143.AccordedRight;
            };
            LinkedResource: {
                encode(message: _143.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.LinkedResource;
                fromJSON(object: any): _143.LinkedResource;
                toJSON(message: _143.LinkedResource): unknown;
                fromPartial(object: Partial<_143.LinkedResource>): _143.LinkedResource;
            };
            LinkedEntity: {
                encode(message: _143.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.LinkedEntity;
                fromJSON(object: any): _143.LinkedEntity;
                toJSON(message: _143.LinkedEntity): unknown;
                fromPartial(object: Partial<_143.LinkedEntity>): _143.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _143.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.VerificationMethod;
                fromJSON(object: any): _143.VerificationMethod;
                toJSON(message: _143.VerificationMethod): unknown;
                fromPartial(object: Partial<_143.VerificationMethod>): _143.VerificationMethod;
            };
            Service: {
                encode(message: _143.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Service;
                fromJSON(object: any): _143.Service;
                toJSON(message: _143.Service): unknown;
                fromPartial(object: Partial<_143.Service>): _143.Service;
            };
            IidMetadata: {
                encode(message: _143.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.IidMetadata;
                fromJSON(object: any): _143.IidMetadata;
                toJSON(message: _143.IidMetadata): unknown;
                fromPartial(object: Partial<_143.IidMetadata>): _143.IidMetadata;
            };
            GenesisState: {
                encode(message: _142.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GenesisState;
                fromJSON(object: any): _142.GenesisState;
                toJSON(message: _142.GenesisState): unknown;
                fromPartial(object: Partial<_142.GenesisState>): _142.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _141.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.IidDocumentCreatedEvent;
                fromJSON(object: any): _141.IidDocumentCreatedEvent;
                toJSON(message: _141.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_141.IidDocumentCreatedEvent>): _141.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _141.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.IidDocumentUpdatedEvent;
                fromJSON(object: any): _141.IidDocumentUpdatedEvent;
                toJSON(message: _141.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_141.IidDocumentUpdatedEvent>): _141.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace payments {
        const v1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                paymentTemplate(request: _148.QueryPaymentTemplateRequest): Promise<_148.QueryPaymentTemplateResponse>;
                paymentContract(request: _148.QueryPaymentContractRequest): Promise<_148.QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: _148.QueryPaymentContractsByIdPrefixRequest): Promise<_148.QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: _148.QuerySubscriptionRequest): Promise<_148.QuerySubscriptionResponse>;
            };
            MsgSetPaymentContractAuthorisation: {
                encode(message: _149.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSetPaymentContractAuthorisation;
                fromJSON(object: any): _149.MsgSetPaymentContractAuthorisation;
                toJSON(message: _149.MsgSetPaymentContractAuthorisation): unknown;
                fromPartial(object: Partial<_149.MsgSetPaymentContractAuthorisation>): _149.MsgSetPaymentContractAuthorisation;
            };
            MsgSetPaymentContractAuthorisationResponse: {
                encode(_: _149.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSetPaymentContractAuthorisationResponse;
                fromJSON(_: any): _149.MsgSetPaymentContractAuthorisationResponse;
                toJSON(_: _149.MsgSetPaymentContractAuthorisationResponse): unknown;
                fromPartial(_: Partial<_149.MsgSetPaymentContractAuthorisationResponse>): _149.MsgSetPaymentContractAuthorisationResponse;
            };
            MsgCreatePaymentTemplate: {
                encode(message: _149.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePaymentTemplate;
                fromJSON(object: any): _149.MsgCreatePaymentTemplate;
                toJSON(message: _149.MsgCreatePaymentTemplate): unknown;
                fromPartial(object: Partial<_149.MsgCreatePaymentTemplate>): _149.MsgCreatePaymentTemplate;
            };
            MsgCreatePaymentTemplateResponse: {
                encode(_: _149.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePaymentTemplateResponse;
                fromJSON(_: any): _149.MsgCreatePaymentTemplateResponse;
                toJSON(_: _149.MsgCreatePaymentTemplateResponse): unknown;
                fromPartial(_: Partial<_149.MsgCreatePaymentTemplateResponse>): _149.MsgCreatePaymentTemplateResponse;
            };
            MsgCreatePaymentContract: {
                encode(message: _149.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePaymentContract;
                fromJSON(object: any): _149.MsgCreatePaymentContract;
                toJSON(message: _149.MsgCreatePaymentContract): unknown;
                fromPartial(object: Partial<_149.MsgCreatePaymentContract>): _149.MsgCreatePaymentContract;
            };
            MsgCreatePaymentContractResponse: {
                encode(_: _149.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePaymentContractResponse;
                fromJSON(_: any): _149.MsgCreatePaymentContractResponse;
                toJSON(_: _149.MsgCreatePaymentContractResponse): unknown;
                fromPartial(_: Partial<_149.MsgCreatePaymentContractResponse>): _149.MsgCreatePaymentContractResponse;
            };
            MsgCreateSubscription: {
                encode(message: _149.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateSubscription;
                fromJSON(object: any): _149.MsgCreateSubscription;
                toJSON(message: _149.MsgCreateSubscription): unknown;
                fromPartial(object: Partial<_149.MsgCreateSubscription>): _149.MsgCreateSubscription;
            };
            MsgCreateSubscriptionResponse: {
                encode(_: _149.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateSubscriptionResponse;
                fromJSON(_: any): _149.MsgCreateSubscriptionResponse;
                toJSON(_: _149.MsgCreateSubscriptionResponse): unknown;
                fromPartial(_: Partial<_149.MsgCreateSubscriptionResponse>): _149.MsgCreateSubscriptionResponse;
            };
            MsgGrantDiscount: {
                encode(message: _149.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgGrantDiscount;
                fromJSON(object: any): _149.MsgGrantDiscount;
                toJSON(message: _149.MsgGrantDiscount): unknown;
                fromPartial(object: Partial<_149.MsgGrantDiscount>): _149.MsgGrantDiscount;
            };
            MsgGrantDiscountResponse: {
                encode(_: _149.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgGrantDiscountResponse;
                fromJSON(_: any): _149.MsgGrantDiscountResponse;
                toJSON(_: _149.MsgGrantDiscountResponse): unknown;
                fromPartial(_: Partial<_149.MsgGrantDiscountResponse>): _149.MsgGrantDiscountResponse;
            };
            MsgRevokeDiscount: {
                encode(message: _149.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgRevokeDiscount;
                fromJSON(object: any): _149.MsgRevokeDiscount;
                toJSON(message: _149.MsgRevokeDiscount): unknown;
                fromPartial(object: Partial<_149.MsgRevokeDiscount>): _149.MsgRevokeDiscount;
            };
            MsgRevokeDiscountResponse: {
                encode(_: _149.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgRevokeDiscountResponse;
                fromJSON(_: any): _149.MsgRevokeDiscountResponse;
                toJSON(_: _149.MsgRevokeDiscountResponse): unknown;
                fromPartial(_: Partial<_149.MsgRevokeDiscountResponse>): _149.MsgRevokeDiscountResponse;
            };
            MsgEffectPayment: {
                encode(message: _149.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgEffectPayment;
                fromJSON(object: any): _149.MsgEffectPayment;
                toJSON(message: _149.MsgEffectPayment): unknown;
                fromPartial(object: Partial<_149.MsgEffectPayment>): _149.MsgEffectPayment;
            };
            MsgEffectPaymentResponse: {
                encode(_: _149.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgEffectPaymentResponse;
                fromJSON(_: any): _149.MsgEffectPaymentResponse;
                toJSON(_: _149.MsgEffectPaymentResponse): unknown;
                fromPartial(_: Partial<_149.MsgEffectPaymentResponse>): _149.MsgEffectPaymentResponse;
            };
            QueryPaymentTemplateRequest: {
                encode(message: _148.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPaymentTemplateRequest;
                fromJSON(object: any): _148.QueryPaymentTemplateRequest;
                toJSON(message: _148.QueryPaymentTemplateRequest): unknown;
                fromPartial(object: Partial<_148.QueryPaymentTemplateRequest>): _148.QueryPaymentTemplateRequest;
            };
            QueryPaymentTemplateResponse: {
                encode(message: _148.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPaymentTemplateResponse;
                fromJSON(object: any): _148.QueryPaymentTemplateResponse;
                toJSON(message: _148.QueryPaymentTemplateResponse): unknown;
                fromPartial(object: Partial<_148.QueryPaymentTemplateResponse>): _148.QueryPaymentTemplateResponse;
            };
            QueryPaymentContractRequest: {
                encode(message: _148.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPaymentContractRequest;
                fromJSON(object: any): _148.QueryPaymentContractRequest;
                toJSON(message: _148.QueryPaymentContractRequest): unknown;
                fromPartial(object: Partial<_148.QueryPaymentContractRequest>): _148.QueryPaymentContractRequest;
            };
            QueryPaymentContractResponse: {
                encode(message: _148.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPaymentContractResponse;
                fromJSON(object: any): _148.QueryPaymentContractResponse;
                toJSON(message: _148.QueryPaymentContractResponse): unknown;
                fromPartial(object: Partial<_148.QueryPaymentContractResponse>): _148.QueryPaymentContractResponse;
            };
            QueryPaymentContractsByIdPrefixRequest: {
                encode(message: _148.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPaymentContractsByIdPrefixRequest;
                fromJSON(object: any): _148.QueryPaymentContractsByIdPrefixRequest;
                toJSON(message: _148.QueryPaymentContractsByIdPrefixRequest): unknown;
                fromPartial(object: Partial<_148.QueryPaymentContractsByIdPrefixRequest>): _148.QueryPaymentContractsByIdPrefixRequest;
            };
            QueryPaymentContractsByIdPrefixResponse: {
                encode(message: _148.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPaymentContractsByIdPrefixResponse;
                fromJSON(object: any): _148.QueryPaymentContractsByIdPrefixResponse;
                toJSON(message: _148.QueryPaymentContractsByIdPrefixResponse): unknown;
                fromPartial(object: Partial<_148.QueryPaymentContractsByIdPrefixResponse>): _148.QueryPaymentContractsByIdPrefixResponse;
            };
            QuerySubscriptionRequest: {
                encode(message: _148.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QuerySubscriptionRequest;
                fromJSON(object: any): _148.QuerySubscriptionRequest;
                toJSON(message: _148.QuerySubscriptionRequest): unknown;
                fromPartial(object: Partial<_148.QuerySubscriptionRequest>): _148.QuerySubscriptionRequest;
            };
            QuerySubscriptionResponse: {
                encode(message: _148.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QuerySubscriptionResponse;
                fromJSON(object: any): _148.QuerySubscriptionResponse;
                toJSON(message: _148.QuerySubscriptionResponse): unknown;
                fromPartial(object: Partial<_148.QuerySubscriptionResponse>): _148.QuerySubscriptionResponse;
            };
            PaymentTemplate: {
                encode(message: _147.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.PaymentTemplate;
                fromJSON(object: any): _147.PaymentTemplate;
                toJSON(message: _147.PaymentTemplate): unknown;
                fromPartial(object: Partial<_147.PaymentTemplate>): _147.PaymentTemplate;
            };
            Discount: {
                encode(message: _147.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Discount;
                fromJSON(object: any): _147.Discount;
                toJSON(message: _147.Discount): unknown;
                fromPartial(object: Partial<_147.Discount>): _147.Discount;
            };
            DistributionShare: {
                encode(message: _147.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.DistributionShare;
                fromJSON(object: any): _147.DistributionShare;
                toJSON(message: _147.DistributionShare): unknown;
                fromPartial(object: Partial<_147.DistributionShare>): _147.DistributionShare;
            };
            PaymentContract: {
                encode(message: _147.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.PaymentContract;
                fromJSON(object: any): _147.PaymentContract;
                toJSON(message: _147.PaymentContract): unknown;
                fromPartial(object: Partial<_147.PaymentContract>): _147.PaymentContract;
            };
            Subscription: {
                encode(message: _147.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Subscription;
                fromJSON(object: any): _147.Subscription;
                toJSON(message: _147.Subscription): unknown;
                fromPartial(object: Partial<_147.Subscription>): _147.Subscription;
            };
            BlockPeriod: {
                encode(message: _147.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.BlockPeriod;
                fromJSON(object: any): _147.BlockPeriod;
                toJSON(message: _147.BlockPeriod): unknown;
                fromPartial(object: Partial<_147.BlockPeriod>): _147.BlockPeriod;
            };
            TimePeriod: {
                encode(message: _147.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.TimePeriod;
                fromJSON(object: any): _147.TimePeriod;
                toJSON(message: _147.TimePeriod): unknown;
                fromPartial(object: Partial<_147.TimePeriod>): _147.TimePeriod;
            };
            TestPeriod: {
                encode(message: _147.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.TestPeriod;
                fromJSON(object: any): _147.TestPeriod;
                toJSON(message: _147.TestPeriod): unknown;
                fromPartial(object: Partial<_147.TestPeriod>): _147.TestPeriod;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromJSON(object: any): _146.GenesisState;
                toJSON(message: _146.GenesisState): unknown;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            };
        };
    }
    namespace project {
        const v1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                projectDoc(request: _152.QueryProjectDocRequest): Promise<_152.QueryProjectDocResponse>;
                projectAccounts(request: _152.QueryProjectAccountsRequest): Promise<_152.QueryProjectAccountsResponse>;
                projectTx(request: _152.QueryProjectTxRequest): Promise<_152.QueryProjectTxResponse>;
                params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
            };
            MsgCreateProject: {
                encode(message: _153.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateProject;
                fromJSON(object: any): _153.MsgCreateProject;
                toJSON(message: _153.MsgCreateProject): unknown;
                fromPartial(object: Partial<_153.MsgCreateProject>): _153.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(_: _153.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateProjectResponse;
                fromJSON(_: any): _153.MsgCreateProjectResponse;
                toJSON(_: _153.MsgCreateProjectResponse): unknown;
                fromPartial(_: Partial<_153.MsgCreateProjectResponse>): _153.MsgCreateProjectResponse;
            };
            MsgUpdateProjectStatus: {
                encode(message: _153.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateProjectStatus;
                fromJSON(object: any): _153.MsgUpdateProjectStatus;
                toJSON(message: _153.MsgUpdateProjectStatus): unknown;
                fromPartial(object: Partial<_153.MsgUpdateProjectStatus>): _153.MsgUpdateProjectStatus;
            };
            MsgUpdateProjectStatusResponse: {
                encode(_: _153.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateProjectStatusResponse;
                fromJSON(_: any): _153.MsgUpdateProjectStatusResponse;
                toJSON(_: _153.MsgUpdateProjectStatusResponse): unknown;
                fromPartial(_: Partial<_153.MsgUpdateProjectStatusResponse>): _153.MsgUpdateProjectStatusResponse;
            };
            MsgCreateAgent: {
                encode(message: _153.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateAgent;
                fromJSON(object: any): _153.MsgCreateAgent;
                toJSON(message: _153.MsgCreateAgent): unknown;
                fromPartial(object: Partial<_153.MsgCreateAgent>): _153.MsgCreateAgent;
            };
            MsgCreateAgentResponse: {
                encode(_: _153.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateAgentResponse;
                fromJSON(_: any): _153.MsgCreateAgentResponse;
                toJSON(_: _153.MsgCreateAgentResponse): unknown;
                fromPartial(_: Partial<_153.MsgCreateAgentResponse>): _153.MsgCreateAgentResponse;
            };
            MsgUpdateAgent: {
                encode(message: _153.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateAgent;
                fromJSON(object: any): _153.MsgUpdateAgent;
                toJSON(message: _153.MsgUpdateAgent): unknown;
                fromPartial(object: Partial<_153.MsgUpdateAgent>): _153.MsgUpdateAgent;
            };
            MsgUpdateAgentResponse: {
                encode(_: _153.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateAgentResponse;
                fromJSON(_: any): _153.MsgUpdateAgentResponse;
                toJSON(_: _153.MsgUpdateAgentResponse): unknown;
                fromPartial(_: Partial<_153.MsgUpdateAgentResponse>): _153.MsgUpdateAgentResponse;
            };
            MsgCreateClaim: {
                encode(message: _153.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateClaim;
                fromJSON(object: any): _153.MsgCreateClaim;
                toJSON(message: _153.MsgCreateClaim): unknown;
                fromPartial(object: Partial<_153.MsgCreateClaim>): _153.MsgCreateClaim;
            };
            MsgCreateClaimResponse: {
                encode(_: _153.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateClaimResponse;
                fromJSON(_: any): _153.MsgCreateClaimResponse;
                toJSON(_: _153.MsgCreateClaimResponse): unknown;
                fromPartial(_: Partial<_153.MsgCreateClaimResponse>): _153.MsgCreateClaimResponse;
            };
            MsgCreateEvaluation: {
                encode(message: _153.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateEvaluation;
                fromJSON(object: any): _153.MsgCreateEvaluation;
                toJSON(message: _153.MsgCreateEvaluation): unknown;
                fromPartial(object: Partial<_153.MsgCreateEvaluation>): _153.MsgCreateEvaluation;
            };
            MsgCreateEvaluationResponse: {
                encode(_: _153.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateEvaluationResponse;
                fromJSON(_: any): _153.MsgCreateEvaluationResponse;
                toJSON(_: _153.MsgCreateEvaluationResponse): unknown;
                fromPartial(_: Partial<_153.MsgCreateEvaluationResponse>): _153.MsgCreateEvaluationResponse;
            };
            MsgWithdrawFunds: {
                encode(message: _153.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgWithdrawFunds;
                fromJSON(object: any): _153.MsgWithdrawFunds;
                toJSON(message: _153.MsgWithdrawFunds): unknown;
                fromPartial(object: Partial<_153.MsgWithdrawFunds>): _153.MsgWithdrawFunds;
            };
            MsgWithdrawFundsResponse: {
                encode(_: _153.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgWithdrawFundsResponse;
                fromJSON(_: any): _153.MsgWithdrawFundsResponse;
                toJSON(_: _153.MsgWithdrawFundsResponse): unknown;
                fromPartial(_: Partial<_153.MsgWithdrawFundsResponse>): _153.MsgWithdrawFundsResponse;
            };
            MsgUpdateProjectDoc: {
                encode(message: _153.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateProjectDoc;
                fromJSON(object: any): _153.MsgUpdateProjectDoc;
                toJSON(message: _153.MsgUpdateProjectDoc): unknown;
                fromPartial(object: Partial<_153.MsgUpdateProjectDoc>): _153.MsgUpdateProjectDoc;
            };
            MsgUpdateProjectDocResponse: {
                encode(_: _153.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateProjectDocResponse;
                fromJSON(_: any): _153.MsgUpdateProjectDocResponse;
                toJSON(_: _153.MsgUpdateProjectDocResponse): unknown;
                fromPartial(_: Partial<_153.MsgUpdateProjectDocResponse>): _153.MsgUpdateProjectDocResponse;
            };
            QueryProjectDocRequest: {
                encode(message: _152.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProjectDocRequest;
                fromJSON(object: any): _152.QueryProjectDocRequest;
                toJSON(message: _152.QueryProjectDocRequest): unknown;
                fromPartial(object: Partial<_152.QueryProjectDocRequest>): _152.QueryProjectDocRequest;
            };
            QueryProjectDocResponse: {
                encode(message: _152.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProjectDocResponse;
                fromJSON(object: any): _152.QueryProjectDocResponse;
                toJSON(message: _152.QueryProjectDocResponse): unknown;
                fromPartial(object: Partial<_152.QueryProjectDocResponse>): _152.QueryProjectDocResponse;
            };
            QueryProjectAccountsRequest: {
                encode(message: _152.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProjectAccountsRequest;
                fromJSON(object: any): _152.QueryProjectAccountsRequest;
                toJSON(message: _152.QueryProjectAccountsRequest): unknown;
                fromPartial(object: Partial<_152.QueryProjectAccountsRequest>): _152.QueryProjectAccountsRequest;
            };
            QueryProjectAccountsResponse: {
                encode(message: _152.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProjectAccountsResponse;
                fromJSON(object: any): _152.QueryProjectAccountsResponse;
                toJSON(message: _152.QueryProjectAccountsResponse): unknown;
                fromPartial(object: Partial<_152.QueryProjectAccountsResponse>): _152.QueryProjectAccountsResponse;
            };
            QueryProjectTxRequest: {
                encode(message: _152.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProjectTxRequest;
                fromJSON(object: any): _152.QueryProjectTxRequest;
                toJSON(message: _152.QueryProjectTxRequest): unknown;
                fromPartial(object: Partial<_152.QueryProjectTxRequest>): _152.QueryProjectTxRequest;
            };
            QueryProjectTxResponse: {
                encode(message: _152.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProjectTxResponse;
                fromJSON(object: any): _152.QueryProjectTxResponse;
                toJSON(message: _152.QueryProjectTxResponse): unknown;
                fromPartial(object: Partial<_152.QueryProjectTxResponse>): _152.QueryProjectTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsRequest;
                fromJSON(_: any): _152.QueryParamsRequest;
                toJSON(_: _152.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_152.QueryParamsRequest>): _152.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsResponse;
                fromJSON(object: any): _152.QueryParamsResponse;
                toJSON(message: _152.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_152.QueryParamsResponse>): _152.QueryParamsResponse;
            };
            UpdateProjectStatusDoc: {
                encode(message: _151.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.UpdateProjectStatusDoc;
                fromJSON(object: any): _151.UpdateProjectStatusDoc;
                toJSON(message: _151.UpdateProjectStatusDoc): unknown;
                fromPartial(object: Partial<_151.UpdateProjectStatusDoc>): _151.UpdateProjectStatusDoc;
            };
            CreateAgentDoc: {
                encode(message: _151.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.CreateAgentDoc;
                fromJSON(object: any): _151.CreateAgentDoc;
                toJSON(message: _151.CreateAgentDoc): unknown;
                fromPartial(object: Partial<_151.CreateAgentDoc>): _151.CreateAgentDoc;
            };
            UpdateAgentDoc: {
                encode(message: _151.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.UpdateAgentDoc;
                fromJSON(object: any): _151.UpdateAgentDoc;
                toJSON(message: _151.UpdateAgentDoc): unknown;
                fromPartial(object: Partial<_151.UpdateAgentDoc>): _151.UpdateAgentDoc;
            };
            CreateClaimDoc: {
                encode(message: _151.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.CreateClaimDoc;
                fromJSON(object: any): _151.CreateClaimDoc;
                toJSON(message: _151.CreateClaimDoc): unknown;
                fromPartial(object: Partial<_151.CreateClaimDoc>): _151.CreateClaimDoc;
            };
            CreateEvaluationDoc: {
                encode(message: _151.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.CreateEvaluationDoc;
                fromJSON(object: any): _151.CreateEvaluationDoc;
                toJSON(message: _151.CreateEvaluationDoc): unknown;
                fromPartial(object: Partial<_151.CreateEvaluationDoc>): _151.CreateEvaluationDoc;
            };
            WithdrawFundsDoc: {
                encode(message: _151.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.WithdrawFundsDoc;
                fromJSON(object: any): _151.WithdrawFundsDoc;
                toJSON(message: _151.WithdrawFundsDoc): unknown;
                fromPartial(object: Partial<_151.WithdrawFundsDoc>): _151.WithdrawFundsDoc;
            };
            ProjectDoc: {
                encode(message: _151.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ProjectDoc;
                fromJSON(object: any): _151.ProjectDoc;
                toJSON(message: _151.ProjectDoc): unknown;
                fromPartial(object: Partial<_151.ProjectDoc>): _151.ProjectDoc;
            };
            WithdrawalInfoDoc: {
                encode(message: _151.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.WithdrawalInfoDoc;
                fromJSON(object: any): _151.WithdrawalInfoDoc;
                toJSON(message: _151.WithdrawalInfoDoc): unknown;
                fromPartial(object: Partial<_151.WithdrawalInfoDoc>): _151.WithdrawalInfoDoc;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
                fromJSON(object: any): _151.Params;
                toJSON(message: _151.Params): unknown;
                fromPartial(object: Partial<_151.Params>): _151.Params;
            };
            Claim: {
                encode(message: _151.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Claim;
                fromJSON(object: any): _151.Claim;
                toJSON(message: _151.Claim): unknown;
                fromPartial(object: Partial<_151.Claim>): _151.Claim;
            };
            GenesisAccountMap_MapEntry: {
                encode(message: _151.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisAccountMap_MapEntry;
                fromJSON(object: any): _151.GenesisAccountMap_MapEntry;
                toJSON(message: _151.GenesisAccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_151.GenesisAccountMap_MapEntry>): _151.GenesisAccountMap_MapEntry;
            };
            GenesisAccountMap: {
                encode(message: _151.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisAccountMap;
                fromJSON(object: any): _151.GenesisAccountMap;
                toJSON(message: _151.GenesisAccountMap): unknown;
                fromPartial(object: Partial<_151.GenesisAccountMap>): _151.GenesisAccountMap;
            };
            AccountMap_MapEntry: {
                encode(message: _151.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountMap_MapEntry;
                fromJSON(object: any): _151.AccountMap_MapEntry;
                toJSON(message: _151.AccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_151.AccountMap_MapEntry>): _151.AccountMap_MapEntry;
            };
            AccountMap: {
                encode(message: _151.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountMap;
                fromJSON(object: any): _151.AccountMap;
                toJSON(message: _151.AccountMap): unknown;
                fromPartial(object: Partial<_151.AccountMap>): _151.AccountMap;
            };
            WithdrawalInfoDocs: {
                encode(message: _151.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.WithdrawalInfoDocs;
                fromJSON(object: any): _151.WithdrawalInfoDocs;
                toJSON(message: _151.WithdrawalInfoDocs): unknown;
                fromPartial(object: Partial<_151.WithdrawalInfoDocs>): _151.WithdrawalInfoDocs;
            };
            Claims: {
                encode(message: _151.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Claims;
                fromJSON(object: any): _151.Claims;
                toJSON(message: _151.Claims): unknown;
                fromPartial(object: Partial<_151.Claims>): _151.Claims;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(object: any): _150.GenesisState;
                toJSON(message: _150.GenesisState): unknown;
                fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenList(request: _157.QueryTokenListRequest): Promise<_157.QueryTokenListResponse>;
                tokenDoc(request: _157.QueryTokenDocRequest): Promise<_157.QueryTokenDocResponse>;
                tokenConfig(request?: _157.QueryTokenConfigRequest): Promise<_157.QueryTokenConfigResponse>;
            };
            MsgCreateTokenResponse: {
                encode(_: _159.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreateTokenResponse;
                fromJSON(_: any): _159.MsgCreateTokenResponse;
                toJSON(_: _159.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_159.MsgCreateTokenResponse>): _159.MsgCreateTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _159.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgTransferToken;
                fromJSON(object: any): _159.MsgTransferToken;
                toJSON(message: _159.MsgTransferToken): unknown;
                fromPartial(object: Partial<_159.MsgTransferToken>): _159.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _159.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgTransferTokenResponse;
                fromJSON(_: any): _159.MsgTransferTokenResponse;
                toJSON(_: _159.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_159.MsgTransferTokenResponse>): _159.MsgTransferTokenResponse;
            };
            SetupCw20: {
                encode(message: _159.SetupCw20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SetupCw20;
                fromJSON(object: any): _159.SetupCw20;
                toJSON(message: _159.SetupCw20): unknown;
                fromPartial(object: Partial<_159.SetupCw20>): _159.SetupCw20;
            };
            SetupCw721: {
                encode(message: _159.SetupCw721, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SetupCw721;
                fromJSON(object: any): _159.SetupCw721;
                toJSON(message: _159.SetupCw721): unknown;
                fromPartial(object: Partial<_159.SetupCw721>): _159.SetupCw721;
            };
            SetupCw1155: {
                encode(_: _159.SetupCw1155, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SetupCw1155;
                fromJSON(_: any): _159.SetupCw1155;
                toJSON(_: _159.SetupCw1155): unknown;
                fromPartial(_: Partial<_159.SetupCw1155>): _159.SetupCw1155;
            };
            MsgSetupMinter: {
                encode(message: _159.MsgSetupMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgSetupMinter;
                fromJSON(object: any): _159.MsgSetupMinter;
                toJSON(message: _159.MsgSetupMinter): unknown;
                fromPartial(object: Partial<_159.MsgSetupMinter>): _159.MsgSetupMinter;
            };
            MsgSetupMinterResponse: {
                encode(_: _159.MsgSetupMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgSetupMinterResponse;
                fromJSON(_: any): _159.MsgSetupMinterResponse;
                toJSON(_: _159.MsgSetupMinterResponse): unknown;
                fromPartial(_: Partial<_159.MsgSetupMinterResponse>): _159.MsgSetupMinterResponse;
            };
            MintCw20: {
                encode(message: _159.MintCw20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MintCw20;
                fromJSON(object: any): _159.MintCw20;
                toJSON(message: _159.MintCw20): unknown;
                fromPartial(object: Partial<_159.MintCw20>): _159.MintCw20;
            };
            MintCw721: {
                encode(message: _159.MintCw721, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MintCw721;
                fromJSON(object: any): _159.MintCw721;
                toJSON(message: _159.MintCw721): unknown;
                fromPartial(object: Partial<_159.MintCw721>): _159.MintCw721;
            };
            MintCw1155: {
                encode(message: _159.MintCw1155, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MintCw1155;
                fromJSON(object: any): _159.MintCw1155;
                toJSON(message: _159.MintCw1155): unknown;
                fromPartial(object: Partial<_159.MintCw1155>): _159.MintCw1155;
            };
            MsgMint: {
                encode(message: _159.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgMint;
                fromJSON(object: any): _159.MsgMint;
                toJSON(message: _159.MsgMint): unknown;
                fromPartial(object: Partial<_159.MsgMint>): _159.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _159.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgMintResponse;
                fromJSON(_: any): _159.MsgMintResponse;
                toJSON(_: _159.MsgMintResponse): unknown;
                fromPartial(_: Partial<_159.MsgMintResponse>): _159.MsgMintResponse;
            };
            Contract: {
                encode(message: _158.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Contract;
                fromJSON(object: any): _158.Contract;
                toJSON(message: _158.Contract): unknown;
                fromPartial(object: Partial<_158.Contract>): _158.Contract;
            };
            Params: {
                encode(message: _158.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Params;
                fromJSON(object: any): _158.Params;
                toJSON(message: _158.Params): unknown;
                fromPartial(object: Partial<_158.Params>): _158.Params;
            };
            TokenMinter: {
                encode(message: _158.TokenMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TokenMinter;
                fromJSON(object: any): _158.TokenMinter;
                toJSON(message: _158.TokenMinter): unknown;
                fromPartial(object: Partial<_158.TokenMinter>): _158.TokenMinter;
            };
            QueryTokenListRequest: {
                encode(message: _157.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryTokenListRequest;
                fromJSON(object: any): _157.QueryTokenListRequest;
                toJSON(message: _157.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_157.QueryTokenListRequest>): _157.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _157.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryTokenListResponse;
                fromJSON(object: any): _157.QueryTokenListResponse;
                toJSON(message: _157.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_157.QueryTokenListResponse>): _157.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _157.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryTokenDocRequest;
                fromJSON(object: any): _157.QueryTokenDocRequest;
                toJSON(message: _157.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_157.QueryTokenDocRequest>): _157.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(_: _157.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryTokenDocResponse;
                fromJSON(_: any): _157.QueryTokenDocResponse;
                toJSON(_: _157.QueryTokenDocResponse): unknown;
                fromPartial(_: Partial<_157.QueryTokenDocResponse>): _157.QueryTokenDocResponse;
            };
            QueryTokenConfigRequest: {
                encode(_: _157.QueryTokenConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryTokenConfigRequest;
                fromJSON(_: any): _157.QueryTokenConfigRequest;
                toJSON(_: _157.QueryTokenConfigRequest): unknown;
                fromPartial(_: Partial<_157.QueryTokenConfigRequest>): _157.QueryTokenConfigRequest;
            };
            QueryTokenConfigResponse_MapEntry: {
                encode(message: _157.QueryTokenConfigResponse_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryTokenConfigResponse_MapEntry;
                fromJSON(object: any): _157.QueryTokenConfigResponse_MapEntry;
                toJSON(message: _157.QueryTokenConfigResponse_MapEntry): unknown;
                fromPartial(object: Partial<_157.QueryTokenConfigResponse_MapEntry>): _157.QueryTokenConfigResponse_MapEntry;
            };
            QueryTokenConfigResponse: {
                encode(message: _157.QueryTokenConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryTokenConfigResponse;
                fromJSON(object: any): _157.QueryTokenConfigResponse;
                toJSON(message: _157.QueryTokenConfigResponse): unknown;
                fromPartial(object: Partial<_157.QueryTokenConfigResponse>): _157.QueryTokenConfigResponse;
            };
            SetTokenContractCodes: {
                encode(message: _156.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SetTokenContractCodes;
                fromJSON(object: any): _156.SetTokenContractCodes;
                toJSON(message: _156.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_156.SetTokenContractCodes>): _156.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromJSON(object: any): _155.GenesisState;
                toJSON(message: _155.GenesisState): unknown;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
            };
            Cw20Constraints: {
                encode(message: _154.Cw20Constraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Cw20Constraints;
                fromJSON(object: any): _154.Cw20Constraints;
                toJSON(message: _154.Cw20Constraints): unknown;
                fromPartial(object: Partial<_154.Cw20Constraints>): _154.Cw20Constraints;
            };
            Cw721Constraints: {
                encode(_: _154.Cw721Constraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Cw721Constraints;
                fromJSON(_: any): _154.Cw721Constraints;
                toJSON(_: _154.Cw721Constraints): unknown;
                fromPartial(_: Partial<_154.Cw721Constraints>): _154.Cw721Constraints;
            };
            Cw1155Constraints: {
                encode(message: _154.Cw1155Constraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Cw1155Constraints;
                fromJSON(object: any): _154.Cw1155Constraints;
                toJSON(message: _154.Cw1155Constraints): unknown;
                fromPartial(object: Partial<_154.Cw1155Constraints>): _154.Cw1155Constraints;
            };
            MintConstraints: {
                encode(message: _154.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MintConstraints;
                fromJSON(object: any): _154.MintConstraints;
                toJSON(message: _154.MintConstraints): unknown;
                fromPartial(object: Partial<_154.MintConstraints>): _154.MintConstraints;
            };
            MintAuthorization: {
                encode(message: _154.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MintAuthorization;
                fromJSON(object: any): _154.MintAuthorization;
                toJSON(message: _154.MintAuthorization): unknown;
                fromPartial(object: Partial<_154.MintAuthorization>): _154.MintAuthorization;
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
                    v1beta1: _222.MsgClientImpl;
                };
                entity: {
                    v1beta1: _223.MsgClientImpl;
                };
                iid: {
                    v1beta1: _224.MsgClientImpl;
                };
                payments: {
                    v1: _225.MsgClientImpl;
                };
                project: {
                    v1: _226.MsgClientImpl;
                };
                token: {
                    v1beta1: _227.MsgClientImpl;
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
                        entityList(request: _139.QueryEntityListRequest): Promise<_139.QueryEntityListResponse>;
                        entityDoc(request: _139.QueryEntityDocRequest): Promise<_139.QueryEntityDocResponse>;
                        entityConfig(request?: _139.QueryEntityConfigRequest): Promise<_139.QueryEntityConfigResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request: _144.QueryIidDocumentsRequest): Promise<_144.QueryIidDocumentsResponse>;
                        iidDocument(request: _144.QueryIidDocumentRequest): Promise<_144.QueryIidDocumentResponse>;
                        metaData(request: _144.QueryIidMetaDataRequest): Promise<_144.QueryIidMetaDataResponse>;
                    };
                };
                payments: {
                    v1: {
                        paymentTemplate(request: _148.QueryPaymentTemplateRequest): Promise<_148.QueryPaymentTemplateResponse>;
                        paymentContract(request: _148.QueryPaymentContractRequest): Promise<_148.QueryPaymentContractResponse>;
                        paymentContractsByIdPrefix(request: _148.QueryPaymentContractsByIdPrefixRequest): Promise<_148.QueryPaymentContractsByIdPrefixResponse>;
                        subscription(request: _148.QuerySubscriptionRequest): Promise<_148.QuerySubscriptionResponse>;
                    };
                };
                project: {
                    v1: {
                        projectDoc(request: _152.QueryProjectDocRequest): Promise<_152.QueryProjectDocResponse>;
                        projectAccounts(request: _152.QueryProjectAccountsRequest): Promise<_152.QueryProjectAccountsResponse>;
                        projectTx(request: _152.QueryProjectTxRequest): Promise<_152.QueryProjectTxResponse>;
                        params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        tokenList(request: _157.QueryTokenListRequest): Promise<_157.QueryTokenListResponse>;
                        tokenDoc(request: _157.QueryTokenDocRequest): Promise<_157.QueryTokenDocResponse>;
                        tokenConfig(request?: _157.QueryTokenConfigRequest): Promise<_157.QueryTokenConfigResponse>;
                    };
                };
            };
        }>;
    };
}
