import * as _132 from "./bonds/v1beta1/bonds";
import * as _133 from "./bonds/v1beta1/genesis";
import * as _134 from "./bonds/v1beta1/query";
import * as _135 from "./bonds/v1beta1/tx";
import * as _136 from "./claims/v1beta1/authz";
import * as _137 from "./claims/v1beta1/claims";
import * as _138 from "./claims/v1beta1/cosmos";
import * as _139 from "./claims/v1beta1/event";
import * as _140 from "./claims/v1beta1/genesis";
import * as _141 from "./claims/v1beta1/query";
import * as _142 from "./claims/v1beta1/tx";
import * as _143 from "./entity/v1beta1/cosmos";
import * as _144 from "./entity/v1beta1/entity";
import * as _145 from "./entity/v1beta1/event";
import * as _146 from "./entity/v1beta1/genesis";
import * as _147 from "./entity/v1beta1/proposal";
import * as _148 from "./entity/v1beta1/query";
import * as _149 from "./entity/v1beta1/tx";
import * as _150 from "./iid/v1beta1/event";
import * as _151 from "./iid/v1beta1/genesis";
import * as _152 from "./iid/v1beta1/iid";
import * as _153 from "./iid/v1beta1/query";
import * as _154 from "./iid/v1beta1/tx";
import * as _155 from "./iid/v1beta1/types";
import * as _156 from "./payments/v1/genesis";
import * as _157 from "./payments/v1/payments";
import * as _158 from "./payments/v1/query";
import * as _159 from "./payments/v1/tx";
import * as _160 from "./project/v1/genesis";
import * as _161 from "./project/v1/project";
import * as _162 from "./project/v1/query";
import * as _163 from "./project/v1/tx";
import * as _164 from "./token/v1beta1/authz";
import * as _165 from "./token/v1beta1/event";
import * as _166 from "./token/v1beta1/genesis";
import * as _167 from "./token/v1beta1/proposal";
import * as _168 from "./token/v1beta1/query";
import * as _169 from "./token/v1beta1/token";
import * as _170 from "./token/v1beta1/tx";
import * as _227 from "./bonds/v1beta1/query.rpc.Query";
import * as _228 from "./claims/v1beta1/query.rpc.Query";
import * as _229 from "./entity/v1beta1/query.rpc.Query";
import * as _230 from "./iid/v1beta1/query.rpc.Query";
import * as _231 from "./payments/v1/query.rpc.Query";
import * as _232 from "./project/v1/query.rpc.Query";
import * as _233 from "./token/v1beta1/query.rpc.Query";
import * as _234 from "./bonds/v1beta1/tx.rpc.msg";
import * as _235 from "./claims/v1beta1/tx.rpc.msg";
import * as _236 from "./entity/v1beta1/tx.rpc.msg";
import * as _237 from "./iid/v1beta1/tx.rpc.msg";
import * as _238 from "./payments/v1/tx.rpc.msg";
import * as _239 from "./project/v1/tx.rpc.msg";
import * as _240 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
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
    namespace claims {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
                collection(request: _141.QueryCollectionRequest): Promise<_141.QueryCollectionResponse>;
                collectionList(request?: _141.QueryCollectionListRequest): Promise<_141.QueryCollectionListResponse>;
                claim(request: _141.QueryClaimRequest): Promise<_141.QueryClaimResponse>;
                claimList(request?: _141.QueryClaimListRequest): Promise<_141.QueryClaimListResponse>;
                dispute(request: _141.QueryDisputeRequest): Promise<_141.QueryDisputeResponse>;
                disputeList(request?: _141.QueryDisputeListRequest): Promise<_141.QueryDisputeListResponse>;
            };
            MsgCreateCollection: {
                encode(message: _142.MsgCreateCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgCreateCollection;
                fromJSON(object: any): _142.MsgCreateCollection;
                toJSON(message: _142.MsgCreateCollection): unknown;
                fromPartial(object: Partial<_142.MsgCreateCollection>): _142.MsgCreateCollection;
            };
            MsgCreateCollectionResponse: {
                encode(_: _142.MsgCreateCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgCreateCollectionResponse;
                fromJSON(_: any): _142.MsgCreateCollectionResponse;
                toJSON(_: _142.MsgCreateCollectionResponse): unknown;
                fromPartial(_: Partial<_142.MsgCreateCollectionResponse>): _142.MsgCreateCollectionResponse;
            };
            MsgSubmitClaim: {
                encode(message: _142.MsgSubmitClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSubmitClaim;
                fromJSON(object: any): _142.MsgSubmitClaim;
                toJSON(message: _142.MsgSubmitClaim): unknown;
                fromPartial(object: Partial<_142.MsgSubmitClaim>): _142.MsgSubmitClaim;
            };
            MsgSubmitClaimResponse: {
                encode(_: _142.MsgSubmitClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSubmitClaimResponse;
                fromJSON(_: any): _142.MsgSubmitClaimResponse;
                toJSON(_: _142.MsgSubmitClaimResponse): unknown;
                fromPartial(_: Partial<_142.MsgSubmitClaimResponse>): _142.MsgSubmitClaimResponse;
            };
            MsgEvaluateClaim: {
                encode(message: _142.MsgEvaluateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgEvaluateClaim;
                fromJSON(object: any): _142.MsgEvaluateClaim;
                toJSON(message: _142.MsgEvaluateClaim): unknown;
                fromPartial(object: Partial<_142.MsgEvaluateClaim>): _142.MsgEvaluateClaim;
            };
            MsgEvaluateClaimResponse: {
                encode(_: _142.MsgEvaluateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgEvaluateClaimResponse;
                fromJSON(_: any): _142.MsgEvaluateClaimResponse;
                toJSON(_: _142.MsgEvaluateClaimResponse): unknown;
                fromPartial(_: Partial<_142.MsgEvaluateClaimResponse>): _142.MsgEvaluateClaimResponse;
            };
            MsgDisputeClaim: {
                encode(message: _142.MsgDisputeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgDisputeClaim;
                fromJSON(object: any): _142.MsgDisputeClaim;
                toJSON(message: _142.MsgDisputeClaim): unknown;
                fromPartial(object: Partial<_142.MsgDisputeClaim>): _142.MsgDisputeClaim;
            };
            MsgDisputeClaimResponse: {
                encode(_: _142.MsgDisputeClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgDisputeClaimResponse;
                fromJSON(_: any): _142.MsgDisputeClaimResponse;
                toJSON(_: _142.MsgDisputeClaimResponse): unknown;
                fromPartial(_: Partial<_142.MsgDisputeClaimResponse>): _142.MsgDisputeClaimResponse;
            };
            MsgWithdrawPayment: {
                encode(message: _142.MsgWithdrawPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgWithdrawPayment;
                fromJSON(object: any): _142.MsgWithdrawPayment;
                toJSON(message: _142.MsgWithdrawPayment): unknown;
                fromPartial(object: Partial<_142.MsgWithdrawPayment>): _142.MsgWithdrawPayment;
            };
            MsgWithdrawPaymentResponse: {
                encode(_: _142.MsgWithdrawPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgWithdrawPaymentResponse;
                fromJSON(_: any): _142.MsgWithdrawPaymentResponse;
                toJSON(_: _142.MsgWithdrawPaymentResponse): unknown;
                fromPartial(_: Partial<_142.MsgWithdrawPaymentResponse>): _142.MsgWithdrawPaymentResponse;
            };
            QueryParamsRequest: {
                encode(_: _141.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryParamsRequest;
                fromJSON(_: any): _141.QueryParamsRequest;
                toJSON(_: _141.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_141.QueryParamsRequest>): _141.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _141.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryParamsResponse;
                fromJSON(object: any): _141.QueryParamsResponse;
                toJSON(message: _141.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_141.QueryParamsResponse>): _141.QueryParamsResponse;
            };
            QueryCollectionRequest: {
                encode(message: _141.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCollectionRequest;
                fromJSON(object: any): _141.QueryCollectionRequest;
                toJSON(message: _141.QueryCollectionRequest): unknown;
                fromPartial(object: Partial<_141.QueryCollectionRequest>): _141.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _141.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCollectionResponse;
                fromJSON(object: any): _141.QueryCollectionResponse;
                toJSON(message: _141.QueryCollectionResponse): unknown;
                fromPartial(object: Partial<_141.QueryCollectionResponse>): _141.QueryCollectionResponse;
            };
            QueryCollectionListRequest: {
                encode(message: _141.QueryCollectionListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCollectionListRequest;
                fromJSON(object: any): _141.QueryCollectionListRequest;
                toJSON(message: _141.QueryCollectionListRequest): unknown;
                fromPartial(object: Partial<_141.QueryCollectionListRequest>): _141.QueryCollectionListRequest;
            };
            QueryCollectionListResponse: {
                encode(message: _141.QueryCollectionListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCollectionListResponse;
                fromJSON(object: any): _141.QueryCollectionListResponse;
                toJSON(message: _141.QueryCollectionListResponse): unknown;
                fromPartial(object: Partial<_141.QueryCollectionListResponse>): _141.QueryCollectionListResponse;
            };
            QueryClaimRequest: {
                encode(message: _141.QueryClaimRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClaimRequest;
                fromJSON(object: any): _141.QueryClaimRequest;
                toJSON(message: _141.QueryClaimRequest): unknown;
                fromPartial(object: Partial<_141.QueryClaimRequest>): _141.QueryClaimRequest;
            };
            QueryClaimResponse: {
                encode(message: _141.QueryClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClaimResponse;
                fromJSON(object: any): _141.QueryClaimResponse;
                toJSON(message: _141.QueryClaimResponse): unknown;
                fromPartial(object: Partial<_141.QueryClaimResponse>): _141.QueryClaimResponse;
            };
            QueryClaimListRequest: {
                encode(message: _141.QueryClaimListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClaimListRequest;
                fromJSON(object: any): _141.QueryClaimListRequest;
                toJSON(message: _141.QueryClaimListRequest): unknown;
                fromPartial(object: Partial<_141.QueryClaimListRequest>): _141.QueryClaimListRequest;
            };
            QueryClaimListResponse: {
                encode(message: _141.QueryClaimListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClaimListResponse;
                fromJSON(object: any): _141.QueryClaimListResponse;
                toJSON(message: _141.QueryClaimListResponse): unknown;
                fromPartial(object: Partial<_141.QueryClaimListResponse>): _141.QueryClaimListResponse;
            };
            QueryDisputeRequest: {
                encode(message: _141.QueryDisputeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryDisputeRequest;
                fromJSON(object: any): _141.QueryDisputeRequest;
                toJSON(message: _141.QueryDisputeRequest): unknown;
                fromPartial(object: Partial<_141.QueryDisputeRequest>): _141.QueryDisputeRequest;
            };
            QueryDisputeResponse: {
                encode(message: _141.QueryDisputeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryDisputeResponse;
                fromJSON(object: any): _141.QueryDisputeResponse;
                toJSON(message: _141.QueryDisputeResponse): unknown;
                fromPartial(object: Partial<_141.QueryDisputeResponse>): _141.QueryDisputeResponse;
            };
            QueryDisputeListRequest: {
                encode(message: _141.QueryDisputeListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryDisputeListRequest;
                fromJSON(object: any): _141.QueryDisputeListRequest;
                toJSON(message: _141.QueryDisputeListRequest): unknown;
                fromPartial(object: Partial<_141.QueryDisputeListRequest>): _141.QueryDisputeListRequest;
            };
            QueryDisputeListResponse: {
                encode(message: _141.QueryDisputeListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryDisputeListResponse;
                fromJSON(object: any): _141.QueryDisputeListResponse;
                toJSON(message: _141.QueryDisputeListResponse): unknown;
                fromPartial(object: Partial<_141.QueryDisputeListResponse>): _141.QueryDisputeListResponse;
            };
            GenesisState: {
                encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                fromJSON(object: any): _140.GenesisState;
                toJSON(message: _140.GenesisState): unknown;
                fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
            };
            CollectionCreatedEvent: {
                encode(message: _139.CollectionCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.CollectionCreatedEvent;
                fromJSON(object: any): _139.CollectionCreatedEvent;
                toJSON(message: _139.CollectionCreatedEvent): unknown;
                fromPartial(object: Partial<_139.CollectionCreatedEvent>): _139.CollectionCreatedEvent;
            };
            CollectionUpdatedEvent: {
                encode(message: _139.CollectionUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.CollectionUpdatedEvent;
                fromJSON(object: any): _139.CollectionUpdatedEvent;
                toJSON(message: _139.CollectionUpdatedEvent): unknown;
                fromPartial(object: Partial<_139.CollectionUpdatedEvent>): _139.CollectionUpdatedEvent;
            };
            ClaimSubmittedEvent: {
                encode(message: _139.ClaimSubmittedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClaimSubmittedEvent;
                fromJSON(object: any): _139.ClaimSubmittedEvent;
                toJSON(message: _139.ClaimSubmittedEvent): unknown;
                fromPartial(object: Partial<_139.ClaimSubmittedEvent>): _139.ClaimSubmittedEvent;
            };
            ClaimUpdatedEvent: {
                encode(message: _139.ClaimUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClaimUpdatedEvent;
                fromJSON(object: any): _139.ClaimUpdatedEvent;
                toJSON(message: _139.ClaimUpdatedEvent): unknown;
                fromPartial(object: Partial<_139.ClaimUpdatedEvent>): _139.ClaimUpdatedEvent;
            };
            ClaimEvaluatedEvent: {
                encode(message: _139.ClaimEvaluatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClaimEvaluatedEvent;
                fromJSON(object: any): _139.ClaimEvaluatedEvent;
                toJSON(message: _139.ClaimEvaluatedEvent): unknown;
                fromPartial(object: Partial<_139.ClaimEvaluatedEvent>): _139.ClaimEvaluatedEvent;
            };
            ClaimDisputedEvent: {
                encode(message: _139.ClaimDisputedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClaimDisputedEvent;
                fromJSON(object: any): _139.ClaimDisputedEvent;
                toJSON(message: _139.ClaimDisputedEvent): unknown;
                fromPartial(object: Partial<_139.ClaimDisputedEvent>): _139.ClaimDisputedEvent;
            };
            PaymentWithdrawnEvent: {
                encode(message: _139.PaymentWithdrawnEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PaymentWithdrawnEvent;
                fromJSON(object: any): _139.PaymentWithdrawnEvent;
                toJSON(message: _139.PaymentWithdrawnEvent): unknown;
                fromPartial(object: Partial<_139.PaymentWithdrawnEvent>): _139.PaymentWithdrawnEvent;
            };
            PaymentWithdrawCreatedEvent: {
                encode(message: _139.PaymentWithdrawCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PaymentWithdrawCreatedEvent;
                fromJSON(object: any): _139.PaymentWithdrawCreatedEvent;
                toJSON(message: _139.PaymentWithdrawCreatedEvent): unknown;
                fromPartial(object: Partial<_139.PaymentWithdrawCreatedEvent>): _139.PaymentWithdrawCreatedEvent;
            };
            Input: {
                encode(message: _138.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Input;
                fromJSON(object: any): _138.Input;
                toJSON(message: _138.Input): unknown;
                fromPartial(object: Partial<_138.Input>): _138.Input;
            };
            Output: {
                encode(message: _138.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Output;
                fromJSON(object: any): _138.Output;
                toJSON(message: _138.Output): unknown;
                fromPartial(object: Partial<_138.Output>): _138.Output;
            };
            collectionStateFromJSON(object: any): _137.CollectionState;
            collectionStateToJSON(object: _137.CollectionState): string;
            evaluationStatusFromJSON(object: any): _137.EvaluationStatus;
            evaluationStatusToJSON(object: _137.EvaluationStatus): string;
            paymentTypeFromJSON(object: any): _137.PaymentType;
            paymentTypeToJSON(object: _137.PaymentType): string;
            paymentStatusFromJSON(object: any): _137.PaymentStatus;
            paymentStatusToJSON(object: _137.PaymentStatus): string;
            CollectionState: typeof _137.CollectionState;
            CollectionStateSDKType: typeof _137.CollectionStateSDKType;
            EvaluationStatus: typeof _137.EvaluationStatus;
            EvaluationStatusSDKType: typeof _137.EvaluationStatusSDKType;
            PaymentType: typeof _137.PaymentType;
            PaymentTypeSDKType: typeof _137.PaymentTypeSDKType;
            PaymentStatus: typeof _137.PaymentStatus;
            PaymentStatusSDKType: typeof _137.PaymentStatusSDKType;
            Params: {
                encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Params;
                fromJSON(object: any): _137.Params;
                toJSON(message: _137.Params): unknown;
                fromPartial(object: Partial<_137.Params>): _137.Params;
            };
            Collection: {
                encode(message: _137.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Collection;
                fromJSON(object: any): _137.Collection;
                toJSON(message: _137.Collection): unknown;
                fromPartial(object: Partial<_137.Collection>): _137.Collection;
            };
            Payments: {
                encode(message: _137.Payments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Payments;
                fromJSON(object: any): _137.Payments;
                toJSON(message: _137.Payments): unknown;
                fromPartial(object: Partial<_137.Payments>): _137.Payments;
            };
            Payment: {
                encode(message: _137.Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Payment;
                fromJSON(object: any): _137.Payment;
                toJSON(message: _137.Payment): unknown;
                fromPartial(object: Partial<_137.Payment>): _137.Payment;
            };
            Claim: {
                encode(message: _137.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Claim;
                fromJSON(object: any): _137.Claim;
                toJSON(message: _137.Claim): unknown;
                fromPartial(object: Partial<_137.Claim>): _137.Claim;
            };
            ClaimPayments: {
                encode(message: _137.ClaimPayments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ClaimPayments;
                fromJSON(object: any): _137.ClaimPayments;
                toJSON(message: _137.ClaimPayments): unknown;
                fromPartial(object: Partial<_137.ClaimPayments>): _137.ClaimPayments;
            };
            Evaluation: {
                encode(message: _137.Evaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Evaluation;
                fromJSON(object: any): _137.Evaluation;
                toJSON(message: _137.Evaluation): unknown;
                fromPartial(object: Partial<_137.Evaluation>): _137.Evaluation;
            };
            Dispute: {
                encode(message: _137.Dispute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Dispute;
                fromJSON(object: any): _137.Dispute;
                toJSON(message: _137.Dispute): unknown;
                fromPartial(object: Partial<_137.Dispute>): _137.Dispute;
            };
            DisputeData: {
                encode(message: _137.DisputeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DisputeData;
                fromJSON(object: any): _137.DisputeData;
                toJSON(message: _137.DisputeData): unknown;
                fromPartial(object: Partial<_137.DisputeData>): _137.DisputeData;
            };
            SubmitClaimAuthorization: {
                encode(message: _136.SubmitClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SubmitClaimAuthorization;
                fromJSON(object: any): _136.SubmitClaimAuthorization;
                toJSON(message: _136.SubmitClaimAuthorization): unknown;
                fromPartial(object: Partial<_136.SubmitClaimAuthorization>): _136.SubmitClaimAuthorization;
            };
            SubmitClaimConstraints: {
                encode(message: _136.SubmitClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SubmitClaimConstraints;
                fromJSON(object: any): _136.SubmitClaimConstraints;
                toJSON(message: _136.SubmitClaimConstraints): unknown;
                fromPartial(object: Partial<_136.SubmitClaimConstraints>): _136.SubmitClaimConstraints;
            };
            EvaluateClaimAuthorization: {
                encode(message: _136.EvaluateClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EvaluateClaimAuthorization;
                fromJSON(object: any): _136.EvaluateClaimAuthorization;
                toJSON(message: _136.EvaluateClaimAuthorization): unknown;
                fromPartial(object: Partial<_136.EvaluateClaimAuthorization>): _136.EvaluateClaimAuthorization;
            };
            EvaluateClaimConstraints: {
                encode(message: _136.EvaluateClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EvaluateClaimConstraints;
                fromJSON(object: any): _136.EvaluateClaimConstraints;
                toJSON(message: _136.EvaluateClaimConstraints): unknown;
                fromPartial(object: Partial<_136.EvaluateClaimConstraints>): _136.EvaluateClaimConstraints;
            };
            WithdrawPaymentAuthorization: {
                encode(message: _136.WithdrawPaymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.WithdrawPaymentAuthorization;
                fromJSON(object: any): _136.WithdrawPaymentAuthorization;
                toJSON(message: _136.WithdrawPaymentAuthorization): unknown;
                fromPartial(object: Partial<_136.WithdrawPaymentAuthorization>): _136.WithdrawPaymentAuthorization;
            };
            WithdrawPaymentConstraints: {
                encode(message: _136.WithdrawPaymentConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.WithdrawPaymentConstraints;
                fromJSON(object: any): _136.WithdrawPaymentConstraints;
                toJSON(message: _136.WithdrawPaymentConstraints): unknown;
                fromPartial(object: Partial<_136.WithdrawPaymentConstraints>): _136.WithdrawPaymentConstraints;
            };
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                entity(request: _148.QueryEntityRequest): Promise<_148.QueryEntityResponse>;
                entityMetaData(request: _148.QueryEntityMetadataRequest): Promise<_148.QueryEntityMetadataResponse>;
                entityIidDocument(request: _148.QueryEntityIidDocumentRequest): Promise<_148.QueryEntityIidDocumentResponse>;
                entityVerified(request: _148.QueryEntityVerifiedRequest): Promise<_148.QueryEntityVerifiedResponse>;
                entityList(request?: _148.QueryEntityListRequest): Promise<_148.QueryEntityListResponse>;
            };
            MsgCreateEntity: {
                encode(message: _149.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateEntity;
                fromJSON(object: any): _149.MsgCreateEntity;
                toJSON(message: _149.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_149.MsgCreateEntity>): _149.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _149.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateEntityResponse;
                fromJSON(object: any): _149.MsgCreateEntityResponse;
                toJSON(message: _149.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_149.MsgCreateEntityResponse>): _149.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _149.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUpdateEntity;
                fromJSON(object: any): _149.MsgUpdateEntity;
                toJSON(message: _149.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_149.MsgUpdateEntity>): _149.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _149.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUpdateEntityResponse;
                fromJSON(_: any): _149.MsgUpdateEntityResponse;
                toJSON(_: _149.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_149.MsgUpdateEntityResponse>): _149.MsgUpdateEntityResponse;
            };
            MsgUpdateEntityVerified: {
                encode(message: _149.MsgUpdateEntityVerified, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUpdateEntityVerified;
                fromJSON(object: any): _149.MsgUpdateEntityVerified;
                toJSON(message: _149.MsgUpdateEntityVerified): unknown;
                fromPartial(object: Partial<_149.MsgUpdateEntityVerified>): _149.MsgUpdateEntityVerified;
            };
            MsgUpdateEntityVerifiedResponse: {
                encode(_: _149.MsgUpdateEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUpdateEntityVerifiedResponse;
                fromJSON(_: any): _149.MsgUpdateEntityVerifiedResponse;
                toJSON(_: _149.MsgUpdateEntityVerifiedResponse): unknown;
                fromPartial(_: Partial<_149.MsgUpdateEntityVerifiedResponse>): _149.MsgUpdateEntityVerifiedResponse;
            };
            MsgTransferEntity: {
                encode(message: _149.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgTransferEntity;
                fromJSON(object: any): _149.MsgTransferEntity;
                toJSON(message: _149.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_149.MsgTransferEntity>): _149.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _149.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgTransferEntityResponse;
                fromJSON(_: any): _149.MsgTransferEntityResponse;
                toJSON(_: _149.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_149.MsgTransferEntityResponse>): _149.MsgTransferEntityResponse;
            };
            MsgCreateEntityAccount: {
                encode(message: _149.MsgCreateEntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateEntityAccount;
                fromJSON(object: any): _149.MsgCreateEntityAccount;
                toJSON(message: _149.MsgCreateEntityAccount): unknown;
                fromPartial(object: Partial<_149.MsgCreateEntityAccount>): _149.MsgCreateEntityAccount;
            };
            MsgCreateEntityAccountResponse: {
                encode(message: _149.MsgCreateEntityAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateEntityAccountResponse;
                fromJSON(object: any): _149.MsgCreateEntityAccountResponse;
                toJSON(message: _149.MsgCreateEntityAccountResponse): unknown;
                fromPartial(object: Partial<_149.MsgCreateEntityAccountResponse>): _149.MsgCreateEntityAccountResponse;
            };
            MsgGrantEntityAccountAuthz: {
                encode(message: _149.MsgGrantEntityAccountAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgGrantEntityAccountAuthz;
                fromJSON(object: any): _149.MsgGrantEntityAccountAuthz;
                toJSON(message: _149.MsgGrantEntityAccountAuthz): unknown;
                fromPartial(object: Partial<_149.MsgGrantEntityAccountAuthz>): _149.MsgGrantEntityAccountAuthz;
            };
            MsgGrantEntityAccountAuthzResponse: {
                encode(_: _149.MsgGrantEntityAccountAuthzResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgGrantEntityAccountAuthzResponse;
                fromJSON(_: any): _149.MsgGrantEntityAccountAuthzResponse;
                toJSON(_: _149.MsgGrantEntityAccountAuthzResponse): unknown;
                fromPartial(_: Partial<_149.MsgGrantEntityAccountAuthzResponse>): _149.MsgGrantEntityAccountAuthzResponse;
            };
            QueryParamsRequest: {
                encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
                fromJSON(_: any): _148.QueryParamsRequest;
                toJSON(_: _148.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
                fromJSON(object: any): _148.QueryParamsResponse;
                toJSON(message: _148.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
            };
            QueryEntityRequest: {
                encode(message: _148.QueryEntityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityRequest;
                fromJSON(object: any): _148.QueryEntityRequest;
                toJSON(message: _148.QueryEntityRequest): unknown;
                fromPartial(object: Partial<_148.QueryEntityRequest>): _148.QueryEntityRequest;
            };
            QueryEntityResponse: {
                encode(message: _148.QueryEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityResponse;
                fromJSON(object: any): _148.QueryEntityResponse;
                toJSON(message: _148.QueryEntityResponse): unknown;
                fromPartial(object: Partial<_148.QueryEntityResponse>): _148.QueryEntityResponse;
            };
            QueryEntityMetadataRequest: {
                encode(message: _148.QueryEntityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityMetadataRequest;
                fromJSON(object: any): _148.QueryEntityMetadataRequest;
                toJSON(message: _148.QueryEntityMetadataRequest): unknown;
                fromPartial(object: Partial<_148.QueryEntityMetadataRequest>): _148.QueryEntityMetadataRequest;
            };
            QueryEntityMetadataResponse: {
                encode(message: _148.QueryEntityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityMetadataResponse;
                fromJSON(object: any): _148.QueryEntityMetadataResponse;
                toJSON(message: _148.QueryEntityMetadataResponse): unknown;
                fromPartial(object: Partial<_148.QueryEntityMetadataResponse>): _148.QueryEntityMetadataResponse;
            };
            QueryEntityIidDocumentRequest: {
                encode(message: _148.QueryEntityIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityIidDocumentRequest;
                fromJSON(object: any): _148.QueryEntityIidDocumentRequest;
                toJSON(message: _148.QueryEntityIidDocumentRequest): unknown;
                fromPartial(object: Partial<_148.QueryEntityIidDocumentRequest>): _148.QueryEntityIidDocumentRequest;
            };
            QueryEntityIidDocumentResponse: {
                encode(message: _148.QueryEntityIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityIidDocumentResponse;
                fromJSON(object: any): _148.QueryEntityIidDocumentResponse;
                toJSON(message: _148.QueryEntityIidDocumentResponse): unknown;
                fromPartial(object: Partial<_148.QueryEntityIidDocumentResponse>): _148.QueryEntityIidDocumentResponse;
            };
            QueryEntityVerifiedRequest: {
                encode(message: _148.QueryEntityVerifiedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityVerifiedRequest;
                fromJSON(object: any): _148.QueryEntityVerifiedRequest;
                toJSON(message: _148.QueryEntityVerifiedRequest): unknown;
                fromPartial(object: Partial<_148.QueryEntityVerifiedRequest>): _148.QueryEntityVerifiedRequest;
            };
            QueryEntityVerifiedResponse: {
                encode(message: _148.QueryEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityVerifiedResponse;
                fromJSON(object: any): _148.QueryEntityVerifiedResponse;
                toJSON(message: _148.QueryEntityVerifiedResponse): unknown;
                fromPartial(object: Partial<_148.QueryEntityVerifiedResponse>): _148.QueryEntityVerifiedResponse;
            };
            QueryEntityListRequest: {
                encode(message: _148.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityListRequest;
                fromJSON(object: any): _148.QueryEntityListRequest;
                toJSON(message: _148.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_148.QueryEntityListRequest>): _148.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(message: _148.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEntityListResponse;
                fromJSON(object: any): _148.QueryEntityListResponse;
                toJSON(message: _148.QueryEntityListResponse): unknown;
                fromPartial(object: Partial<_148.QueryEntityListResponse>): _148.QueryEntityListResponse;
            };
            InitializeNftContract: {
                encode(message: _147.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.InitializeNftContract;
                fromJSON(object: any): _147.InitializeNftContract;
                toJSON(message: _147.InitializeNftContract): unknown;
                fromPartial(object: Partial<_147.InitializeNftContract>): _147.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromJSON(object: any): _146.GenesisState;
                toJSON(message: _146.GenesisState): unknown;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            };
            EntityCreatedEvent: {
                encode(message: _145.EntityCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EntityCreatedEvent;
                fromJSON(object: any): _145.EntityCreatedEvent;
                toJSON(message: _145.EntityCreatedEvent): unknown;
                fromPartial(object: Partial<_145.EntityCreatedEvent>): _145.EntityCreatedEvent;
            };
            EntityUpdatedEvent: {
                encode(message: _145.EntityUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EntityUpdatedEvent;
                fromJSON(object: any): _145.EntityUpdatedEvent;
                toJSON(message: _145.EntityUpdatedEvent): unknown;
                fromPartial(object: Partial<_145.EntityUpdatedEvent>): _145.EntityUpdatedEvent;
            };
            EntityVerifiedUpdatedEvent: {
                encode(message: _145.EntityVerifiedUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EntityVerifiedUpdatedEvent;
                fromJSON(object: any): _145.EntityVerifiedUpdatedEvent;
                toJSON(message: _145.EntityVerifiedUpdatedEvent): unknown;
                fromPartial(object: Partial<_145.EntityVerifiedUpdatedEvent>): _145.EntityVerifiedUpdatedEvent;
            };
            EntityTransferredEvent: {
                encode(message: _145.EntityTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EntityTransferredEvent;
                fromJSON(object: any): _145.EntityTransferredEvent;
                toJSON(message: _145.EntityTransferredEvent): unknown;
                fromPartial(object: Partial<_145.EntityTransferredEvent>): _145.EntityTransferredEvent;
            };
            EntityAccountCreatedEvent: {
                encode(message: _145.EntityAccountCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EntityAccountCreatedEvent;
                fromJSON(object: any): _145.EntityAccountCreatedEvent;
                toJSON(message: _145.EntityAccountCreatedEvent): unknown;
                fromPartial(object: Partial<_145.EntityAccountCreatedEvent>): _145.EntityAccountCreatedEvent;
            };
            EntityAccountAuthzCreatedEvent: {
                encode(message: _145.EntityAccountAuthzCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EntityAccountAuthzCreatedEvent;
                fromJSON(object: any): _145.EntityAccountAuthzCreatedEvent;
                toJSON(message: _145.EntityAccountAuthzCreatedEvent): unknown;
                fromPartial(object: Partial<_145.EntityAccountAuthzCreatedEvent>): _145.EntityAccountAuthzCreatedEvent;
            };
            Params: {
                encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Params;
                fromJSON(object: any): _144.Params;
                toJSON(message: _144.Params): unknown;
                fromPartial(object: Partial<_144.Params>): _144.Params;
            };
            Entity: {
                encode(message: _144.Entity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Entity;
                fromJSON(object: any): _144.Entity;
                toJSON(message: _144.Entity): unknown;
                fromPartial(object: Partial<_144.Entity>): _144.Entity;
            };
            EntityAccount: {
                encode(message: _144.EntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EntityAccount;
                fromJSON(object: any): _144.EntityAccount;
                toJSON(message: _144.EntityAccount): unknown;
                fromPartial(object: Partial<_144.EntityAccount>): _144.EntityAccount;
            };
            EntityMetadata: {
                encode(message: _144.EntityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EntityMetadata;
                fromJSON(object: any): _144.EntityMetadata;
                toJSON(message: _144.EntityMetadata): unknown;
                fromPartial(object: Partial<_144.EntityMetadata>): _144.EntityMetadata;
            };
            Grant: {
                encode(message: _143.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Grant;
                fromJSON(object: any): _143.Grant;
                toJSON(message: _143.Grant): unknown;
                fromPartial(object: Partial<_143.Grant>): _143.Grant;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _153.QueryIidDocumentsRequest): Promise<_153.QueryIidDocumentsResponse>;
                iidDocument(request: _153.QueryIidDocumentRequest): Promise<_153.QueryIidDocumentResponse>;
            };
            Context: {
                encode(message: _155.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Context;
                fromJSON(object: any): _155.Context;
                toJSON(message: _155.Context): unknown;
                fromPartial(object: Partial<_155.Context>): _155.Context;
            };
            AccordedRight: {
                encode(message: _155.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.AccordedRight;
                fromJSON(object: any): _155.AccordedRight;
                toJSON(message: _155.AccordedRight): unknown;
                fromPartial(object: Partial<_155.AccordedRight>): _155.AccordedRight;
            };
            LinkedResource: {
                encode(message: _155.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.LinkedResource;
                fromJSON(object: any): _155.LinkedResource;
                toJSON(message: _155.LinkedResource): unknown;
                fromPartial(object: Partial<_155.LinkedResource>): _155.LinkedResource;
            };
            LinkedClaim: {
                encode(message: _155.LinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.LinkedClaim;
                fromJSON(object: any): _155.LinkedClaim;
                toJSON(message: _155.LinkedClaim): unknown;
                fromPartial(object: Partial<_155.LinkedClaim>): _155.LinkedClaim;
            };
            LinkedEntity: {
                encode(message: _155.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.LinkedEntity;
                fromJSON(object: any): _155.LinkedEntity;
                toJSON(message: _155.LinkedEntity): unknown;
                fromPartial(object: Partial<_155.LinkedEntity>): _155.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _155.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.VerificationMethod;
                fromJSON(object: any): _155.VerificationMethod;
                toJSON(message: _155.VerificationMethod): unknown;
                fromPartial(object: Partial<_155.VerificationMethod>): _155.VerificationMethod;
            };
            Service: {
                encode(message: _155.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Service;
                fromJSON(object: any): _155.Service;
                toJSON(message: _155.Service): unknown;
                fromPartial(object: Partial<_155.Service>): _155.Service;
            };
            IidMetadata: {
                encode(message: _155.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.IidMetadata;
                fromJSON(object: any): _155.IidMetadata;
                toJSON(message: _155.IidMetadata): unknown;
                fromPartial(object: Partial<_155.IidMetadata>): _155.IidMetadata;
            };
            Verification: {
                encode(message: _154.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Verification;
                fromJSON(object: any): _154.Verification;
                toJSON(message: _154.Verification): unknown;
                fromPartial(object: Partial<_154.Verification>): _154.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _154.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateIidDocument;
                fromJSON(object: any): _154.MsgCreateIidDocument;
                toJSON(message: _154.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_154.MsgCreateIidDocument>): _154.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _154.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _154.MsgCreateIidDocumentResponse;
                toJSON(_: _154.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_154.MsgCreateIidDocumentResponse>): _154.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _154.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateIidDocument;
                fromJSON(object: any): _154.MsgUpdateIidDocument;
                toJSON(message: _154.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_154.MsgUpdateIidDocument>): _154.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _154.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _154.MsgUpdateIidDocumentResponse;
                toJSON(_: _154.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_154.MsgUpdateIidDocumentResponse>): _154.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _154.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddVerification;
                fromJSON(object: any): _154.MsgAddVerification;
                toJSON(message: _154.MsgAddVerification): unknown;
                fromPartial(object: Partial<_154.MsgAddVerification>): _154.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _154.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddVerificationResponse;
                fromJSON(_: any): _154.MsgAddVerificationResponse;
                toJSON(_: _154.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddVerificationResponse>): _154.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _154.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSetVerificationRelationships;
                fromJSON(object: any): _154.MsgSetVerificationRelationships;
                toJSON(message: _154.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_154.MsgSetVerificationRelationships>): _154.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _154.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _154.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _154.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_154.MsgSetVerificationRelationshipsResponse>): _154.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _154.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgRevokeVerification;
                fromJSON(object: any): _154.MsgRevokeVerification;
                toJSON(message: _154.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_154.MsgRevokeVerification>): _154.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _154.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgRevokeVerificationResponse;
                fromJSON(_: any): _154.MsgRevokeVerificationResponse;
                toJSON(_: _154.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_154.MsgRevokeVerificationResponse>): _154.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _154.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddService;
                fromJSON(object: any): _154.MsgAddService;
                toJSON(message: _154.MsgAddService): unknown;
                fromPartial(object: Partial<_154.MsgAddService>): _154.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _154.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddServiceResponse;
                fromJSON(_: any): _154.MsgAddServiceResponse;
                toJSON(_: _154.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddServiceResponse>): _154.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _154.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteService;
                fromJSON(object: any): _154.MsgDeleteService;
                toJSON(message: _154.MsgDeleteService): unknown;
                fromPartial(object: Partial<_154.MsgDeleteService>): _154.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _154.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteServiceResponse;
                fromJSON(_: any): _154.MsgDeleteServiceResponse;
                toJSON(_: _154.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeleteServiceResponse>): _154.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _154.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddController;
                fromJSON(object: any): _154.MsgAddController;
                toJSON(message: _154.MsgAddController): unknown;
                fromPartial(object: Partial<_154.MsgAddController>): _154.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _154.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddControllerResponse;
                fromJSON(_: any): _154.MsgAddControllerResponse;
                toJSON(_: _154.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddControllerResponse>): _154.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _154.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteController;
                fromJSON(object: any): _154.MsgDeleteController;
                toJSON(message: _154.MsgDeleteController): unknown;
                fromPartial(object: Partial<_154.MsgDeleteController>): _154.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _154.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteControllerResponse;
                fromJSON(_: any): _154.MsgDeleteControllerResponse;
                toJSON(_: _154.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeleteControllerResponse>): _154.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _154.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddLinkedResource;
                fromJSON(object: any): _154.MsgAddLinkedResource;
                toJSON(message: _154.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_154.MsgAddLinkedResource>): _154.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _154.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteLinkedResource;
                fromJSON(object: any): _154.MsgDeleteLinkedResource;
                toJSON(message: _154.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_154.MsgDeleteLinkedResource>): _154.MsgDeleteLinkedResource;
            };
            MsgAddLinkedClaim: {
                encode(message: _154.MsgAddLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddLinkedClaim;
                fromJSON(object: any): _154.MsgAddLinkedClaim;
                toJSON(message: _154.MsgAddLinkedClaim): unknown;
                fromPartial(object: Partial<_154.MsgAddLinkedClaim>): _154.MsgAddLinkedClaim;
            };
            MsgDeleteLinkedClaim: {
                encode(message: _154.MsgDeleteLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteLinkedClaim;
                fromJSON(object: any): _154.MsgDeleteLinkedClaim;
                toJSON(message: _154.MsgDeleteLinkedClaim): unknown;
                fromPartial(object: Partial<_154.MsgDeleteLinkedClaim>): _154.MsgDeleteLinkedClaim;
            };
            MsgAddLinkedEntity: {
                encode(message: _154.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddLinkedEntity;
                fromJSON(object: any): _154.MsgAddLinkedEntity;
                toJSON(message: _154.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_154.MsgAddLinkedEntity>): _154.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _154.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteLinkedEntity;
                fromJSON(object: any): _154.MsgDeleteLinkedEntity;
                toJSON(message: _154.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_154.MsgDeleteLinkedEntity>): _154.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _154.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddAccordedRight;
                fromJSON(object: any): _154.MsgAddAccordedRight;
                toJSON(message: _154.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_154.MsgAddAccordedRight>): _154.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _154.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteAccordedRight;
                fromJSON(object: any): _154.MsgDeleteAccordedRight;
                toJSON(message: _154.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_154.MsgDeleteAccordedRight>): _154.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _154.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddIidContext;
                fromJSON(object: any): _154.MsgAddIidContext;
                toJSON(message: _154.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_154.MsgAddIidContext>): _154.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _154.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeactivateIID;
                fromJSON(object: any): _154.MsgDeactivateIID;
                toJSON(message: _154.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_154.MsgDeactivateIID>): _154.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _154.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteIidContext;
                fromJSON(object: any): _154.MsgDeleteIidContext;
                toJSON(message: _154.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_154.MsgDeleteIidContext>): _154.MsgDeleteIidContext;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _154.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _154.MsgAddLinkedResourceResponse;
                toJSON(_: _154.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddLinkedResourceResponse>): _154.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _154.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _154.MsgDeleteLinkedResourceResponse;
                toJSON(_: _154.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeleteLinkedResourceResponse>): _154.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedClaimResponse: {
                encode(_: _154.MsgAddLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddLinkedClaimResponse;
                fromJSON(_: any): _154.MsgAddLinkedClaimResponse;
                toJSON(_: _154.MsgAddLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddLinkedClaimResponse>): _154.MsgAddLinkedClaimResponse;
            };
            MsgDeleteLinkedClaimResponse: {
                encode(_: _154.MsgDeleteLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteLinkedClaimResponse;
                fromJSON(_: any): _154.MsgDeleteLinkedClaimResponse;
                toJSON(_: _154.MsgDeleteLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeleteLinkedClaimResponse>): _154.MsgDeleteLinkedClaimResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _154.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _154.MsgAddLinkedEntityResponse;
                toJSON(_: _154.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddLinkedEntityResponse>): _154.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _154.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _154.MsgDeleteLinkedEntityResponse;
                toJSON(_: _154.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeleteLinkedEntityResponse>): _154.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _154.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddAccordedRightResponse;
                fromJSON(_: any): _154.MsgAddAccordedRightResponse;
                toJSON(_: _154.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddAccordedRightResponse>): _154.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _154.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _154.MsgDeleteAccordedRightResponse;
                toJSON(_: _154.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeleteAccordedRightResponse>): _154.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _154.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgAddIidContextResponse;
                fromJSON(_: any): _154.MsgAddIidContextResponse;
                toJSON(_: _154.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_154.MsgAddIidContextResponse>): _154.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _154.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeleteIidContextResponse;
                fromJSON(_: any): _154.MsgDeleteIidContextResponse;
                toJSON(_: _154.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeleteIidContextResponse>): _154.MsgDeleteIidContextResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _154.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDeactivateIIDResponse;
                fromJSON(_: any): _154.MsgDeactivateIIDResponse;
                toJSON(_: _154.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_154.MsgDeactivateIIDResponse>): _154.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _153.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIidDocumentsRequest;
                fromJSON(object: any): _153.QueryIidDocumentsRequest;
                toJSON(message: _153.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_153.QueryIidDocumentsRequest>): _153.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _153.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIidDocumentsResponse;
                fromJSON(object: any): _153.QueryIidDocumentsResponse;
                toJSON(message: _153.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_153.QueryIidDocumentsResponse>): _153.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _153.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIidDocumentRequest;
                fromJSON(object: any): _153.QueryIidDocumentRequest;
                toJSON(message: _153.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_153.QueryIidDocumentRequest>): _153.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _153.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIidDocumentResponse;
                fromJSON(object: any): _153.QueryIidDocumentResponse;
                toJSON(message: _153.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_153.QueryIidDocumentResponse>): _153.QueryIidDocumentResponse;
            };
            IidDocument: {
                encode(message: _152.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.IidDocument;
                fromJSON(object: any): _152.IidDocument;
                toJSON(message: _152.IidDocument): unknown;
                fromPartial(object: Partial<_152.IidDocument>): _152.IidDocument;
            };
            GenesisState: {
                encode(message: _151.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisState;
                fromJSON(object: any): _151.GenesisState;
                toJSON(message: _151.GenesisState): unknown;
                fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _150.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.IidDocumentCreatedEvent;
                fromJSON(object: any): _150.IidDocumentCreatedEvent;
                toJSON(message: _150.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_150.IidDocumentCreatedEvent>): _150.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _150.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.IidDocumentUpdatedEvent;
                fromJSON(object: any): _150.IidDocumentUpdatedEvent;
                toJSON(message: _150.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_150.IidDocumentUpdatedEvent>): _150.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace payments {
        const v1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                paymentTemplate(request: _158.QueryPaymentTemplateRequest): Promise<_158.QueryPaymentTemplateResponse>;
                paymentContract(request: _158.QueryPaymentContractRequest): Promise<_158.QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: _158.QueryPaymentContractsByIdPrefixRequest): Promise<_158.QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: _158.QuerySubscriptionRequest): Promise<_158.QuerySubscriptionResponse>;
            };
            MsgSetPaymentContractAuthorisation: {
                encode(message: _159.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgSetPaymentContractAuthorisation;
                fromJSON(object: any): _159.MsgSetPaymentContractAuthorisation;
                toJSON(message: _159.MsgSetPaymentContractAuthorisation): unknown;
                fromPartial(object: Partial<_159.MsgSetPaymentContractAuthorisation>): _159.MsgSetPaymentContractAuthorisation;
            };
            MsgSetPaymentContractAuthorisationResponse: {
                encode(_: _159.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgSetPaymentContractAuthorisationResponse;
                fromJSON(_: any): _159.MsgSetPaymentContractAuthorisationResponse;
                toJSON(_: _159.MsgSetPaymentContractAuthorisationResponse): unknown;
                fromPartial(_: Partial<_159.MsgSetPaymentContractAuthorisationResponse>): _159.MsgSetPaymentContractAuthorisationResponse;
            };
            MsgCreatePaymentTemplate: {
                encode(message: _159.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePaymentTemplate;
                fromJSON(object: any): _159.MsgCreatePaymentTemplate;
                toJSON(message: _159.MsgCreatePaymentTemplate): unknown;
                fromPartial(object: Partial<_159.MsgCreatePaymentTemplate>): _159.MsgCreatePaymentTemplate;
            };
            MsgCreatePaymentTemplateResponse: {
                encode(_: _159.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePaymentTemplateResponse;
                fromJSON(_: any): _159.MsgCreatePaymentTemplateResponse;
                toJSON(_: _159.MsgCreatePaymentTemplateResponse): unknown;
                fromPartial(_: Partial<_159.MsgCreatePaymentTemplateResponse>): _159.MsgCreatePaymentTemplateResponse;
            };
            MsgCreatePaymentContract: {
                encode(message: _159.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePaymentContract;
                fromJSON(object: any): _159.MsgCreatePaymentContract;
                toJSON(message: _159.MsgCreatePaymentContract): unknown;
                fromPartial(object: Partial<_159.MsgCreatePaymentContract>): _159.MsgCreatePaymentContract;
            };
            MsgCreatePaymentContractResponse: {
                encode(_: _159.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePaymentContractResponse;
                fromJSON(_: any): _159.MsgCreatePaymentContractResponse;
                toJSON(_: _159.MsgCreatePaymentContractResponse): unknown;
                fromPartial(_: Partial<_159.MsgCreatePaymentContractResponse>): _159.MsgCreatePaymentContractResponse;
            };
            MsgCreateSubscription: {
                encode(message: _159.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreateSubscription;
                fromJSON(object: any): _159.MsgCreateSubscription;
                toJSON(message: _159.MsgCreateSubscription): unknown;
                fromPartial(object: Partial<_159.MsgCreateSubscription>): _159.MsgCreateSubscription;
            };
            MsgCreateSubscriptionResponse: {
                encode(_: _159.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreateSubscriptionResponse;
                fromJSON(_: any): _159.MsgCreateSubscriptionResponse;
                toJSON(_: _159.MsgCreateSubscriptionResponse): unknown;
                fromPartial(_: Partial<_159.MsgCreateSubscriptionResponse>): _159.MsgCreateSubscriptionResponse;
            };
            MsgGrantDiscount: {
                encode(message: _159.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgGrantDiscount;
                fromJSON(object: any): _159.MsgGrantDiscount;
                toJSON(message: _159.MsgGrantDiscount): unknown;
                fromPartial(object: Partial<_159.MsgGrantDiscount>): _159.MsgGrantDiscount;
            };
            MsgGrantDiscountResponse: {
                encode(_: _159.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgGrantDiscountResponse;
                fromJSON(_: any): _159.MsgGrantDiscountResponse;
                toJSON(_: _159.MsgGrantDiscountResponse): unknown;
                fromPartial(_: Partial<_159.MsgGrantDiscountResponse>): _159.MsgGrantDiscountResponse;
            };
            MsgRevokeDiscount: {
                encode(message: _159.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRevokeDiscount;
                fromJSON(object: any): _159.MsgRevokeDiscount;
                toJSON(message: _159.MsgRevokeDiscount): unknown;
                fromPartial(object: Partial<_159.MsgRevokeDiscount>): _159.MsgRevokeDiscount;
            };
            MsgRevokeDiscountResponse: {
                encode(_: _159.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRevokeDiscountResponse;
                fromJSON(_: any): _159.MsgRevokeDiscountResponse;
                toJSON(_: _159.MsgRevokeDiscountResponse): unknown;
                fromPartial(_: Partial<_159.MsgRevokeDiscountResponse>): _159.MsgRevokeDiscountResponse;
            };
            MsgEffectPayment: {
                encode(message: _159.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgEffectPayment;
                fromJSON(object: any): _159.MsgEffectPayment;
                toJSON(message: _159.MsgEffectPayment): unknown;
                fromPartial(object: Partial<_159.MsgEffectPayment>): _159.MsgEffectPayment;
            };
            MsgEffectPaymentResponse: {
                encode(_: _159.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgEffectPaymentResponse;
                fromJSON(_: any): _159.MsgEffectPaymentResponse;
                toJSON(_: _159.MsgEffectPaymentResponse): unknown;
                fromPartial(_: Partial<_159.MsgEffectPaymentResponse>): _159.MsgEffectPaymentResponse;
            };
            QueryPaymentTemplateRequest: {
                encode(message: _158.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPaymentTemplateRequest;
                fromJSON(object: any): _158.QueryPaymentTemplateRequest;
                toJSON(message: _158.QueryPaymentTemplateRequest): unknown;
                fromPartial(object: Partial<_158.QueryPaymentTemplateRequest>): _158.QueryPaymentTemplateRequest;
            };
            QueryPaymentTemplateResponse: {
                encode(message: _158.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPaymentTemplateResponse;
                fromJSON(object: any): _158.QueryPaymentTemplateResponse;
                toJSON(message: _158.QueryPaymentTemplateResponse): unknown;
                fromPartial(object: Partial<_158.QueryPaymentTemplateResponse>): _158.QueryPaymentTemplateResponse;
            };
            QueryPaymentContractRequest: {
                encode(message: _158.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPaymentContractRequest;
                fromJSON(object: any): _158.QueryPaymentContractRequest;
                toJSON(message: _158.QueryPaymentContractRequest): unknown;
                fromPartial(object: Partial<_158.QueryPaymentContractRequest>): _158.QueryPaymentContractRequest;
            };
            QueryPaymentContractResponse: {
                encode(message: _158.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPaymentContractResponse;
                fromJSON(object: any): _158.QueryPaymentContractResponse;
                toJSON(message: _158.QueryPaymentContractResponse): unknown;
                fromPartial(object: Partial<_158.QueryPaymentContractResponse>): _158.QueryPaymentContractResponse;
            };
            QueryPaymentContractsByIdPrefixRequest: {
                encode(message: _158.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPaymentContractsByIdPrefixRequest;
                fromJSON(object: any): _158.QueryPaymentContractsByIdPrefixRequest;
                toJSON(message: _158.QueryPaymentContractsByIdPrefixRequest): unknown;
                fromPartial(object: Partial<_158.QueryPaymentContractsByIdPrefixRequest>): _158.QueryPaymentContractsByIdPrefixRequest;
            };
            QueryPaymentContractsByIdPrefixResponse: {
                encode(message: _158.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPaymentContractsByIdPrefixResponse;
                fromJSON(object: any): _158.QueryPaymentContractsByIdPrefixResponse;
                toJSON(message: _158.QueryPaymentContractsByIdPrefixResponse): unknown;
                fromPartial(object: Partial<_158.QueryPaymentContractsByIdPrefixResponse>): _158.QueryPaymentContractsByIdPrefixResponse;
            };
            QuerySubscriptionRequest: {
                encode(message: _158.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySubscriptionRequest;
                fromJSON(object: any): _158.QuerySubscriptionRequest;
                toJSON(message: _158.QuerySubscriptionRequest): unknown;
                fromPartial(object: Partial<_158.QuerySubscriptionRequest>): _158.QuerySubscriptionRequest;
            };
            QuerySubscriptionResponse: {
                encode(message: _158.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySubscriptionResponse;
                fromJSON(object: any): _158.QuerySubscriptionResponse;
                toJSON(message: _158.QuerySubscriptionResponse): unknown;
                fromPartial(object: Partial<_158.QuerySubscriptionResponse>): _158.QuerySubscriptionResponse;
            };
            PaymentTemplate: {
                encode(message: _157.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.PaymentTemplate;
                fromJSON(object: any): _157.PaymentTemplate;
                toJSON(message: _157.PaymentTemplate): unknown;
                fromPartial(object: Partial<_157.PaymentTemplate>): _157.PaymentTemplate;
            };
            Discount: {
                encode(message: _157.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Discount;
                fromJSON(object: any): _157.Discount;
                toJSON(message: _157.Discount): unknown;
                fromPartial(object: Partial<_157.Discount>): _157.Discount;
            };
            DistributionShare: {
                encode(message: _157.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DistributionShare;
                fromJSON(object: any): _157.DistributionShare;
                toJSON(message: _157.DistributionShare): unknown;
                fromPartial(object: Partial<_157.DistributionShare>): _157.DistributionShare;
            };
            PaymentContract: {
                encode(message: _157.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.PaymentContract;
                fromJSON(object: any): _157.PaymentContract;
                toJSON(message: _157.PaymentContract): unknown;
                fromPartial(object: Partial<_157.PaymentContract>): _157.PaymentContract;
            };
            Subscription: {
                encode(message: _157.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Subscription;
                fromJSON(object: any): _157.Subscription;
                toJSON(message: _157.Subscription): unknown;
                fromPartial(object: Partial<_157.Subscription>): _157.Subscription;
            };
            BlockPeriod: {
                encode(message: _157.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.BlockPeriod;
                fromJSON(object: any): _157.BlockPeriod;
                toJSON(message: _157.BlockPeriod): unknown;
                fromPartial(object: Partial<_157.BlockPeriod>): _157.BlockPeriod;
            };
            TimePeriod: {
                encode(message: _157.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TimePeriod;
                fromJSON(object: any): _157.TimePeriod;
                toJSON(message: _157.TimePeriod): unknown;
                fromPartial(object: Partial<_157.TimePeriod>): _157.TimePeriod;
            };
            TestPeriod: {
                encode(message: _157.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TestPeriod;
                fromJSON(object: any): _157.TestPeriod;
                toJSON(message: _157.TestPeriod): unknown;
                fromPartial(object: Partial<_157.TestPeriod>): _157.TestPeriod;
            };
            GenesisState: {
                encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                fromJSON(object: any): _156.GenesisState;
                toJSON(message: _156.GenesisState): unknown;
                fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
            };
        };
    }
    namespace project {
        const v1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                projectDoc(request: _162.QueryProjectDocRequest): Promise<_162.QueryProjectDocResponse>;
                projectAccounts(request: _162.QueryProjectAccountsRequest): Promise<_162.QueryProjectAccountsResponse>;
                projectTx(request: _162.QueryProjectTxRequest): Promise<_162.QueryProjectTxResponse>;
                params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
            };
            MsgCreateProject: {
                encode(message: _163.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateProject;
                fromJSON(object: any): _163.MsgCreateProject;
                toJSON(message: _163.MsgCreateProject): unknown;
                fromPartial(object: Partial<_163.MsgCreateProject>): _163.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(_: _163.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateProjectResponse;
                fromJSON(_: any): _163.MsgCreateProjectResponse;
                toJSON(_: _163.MsgCreateProjectResponse): unknown;
                fromPartial(_: Partial<_163.MsgCreateProjectResponse>): _163.MsgCreateProjectResponse;
            };
            MsgUpdateProjectStatus: {
                encode(message: _163.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgUpdateProjectStatus;
                fromJSON(object: any): _163.MsgUpdateProjectStatus;
                toJSON(message: _163.MsgUpdateProjectStatus): unknown;
                fromPartial(object: Partial<_163.MsgUpdateProjectStatus>): _163.MsgUpdateProjectStatus;
            };
            MsgUpdateProjectStatusResponse: {
                encode(_: _163.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgUpdateProjectStatusResponse;
                fromJSON(_: any): _163.MsgUpdateProjectStatusResponse;
                toJSON(_: _163.MsgUpdateProjectStatusResponse): unknown;
                fromPartial(_: Partial<_163.MsgUpdateProjectStatusResponse>): _163.MsgUpdateProjectStatusResponse;
            };
            MsgCreateAgent: {
                encode(message: _163.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateAgent;
                fromJSON(object: any): _163.MsgCreateAgent;
                toJSON(message: _163.MsgCreateAgent): unknown;
                fromPartial(object: Partial<_163.MsgCreateAgent>): _163.MsgCreateAgent;
            };
            MsgCreateAgentResponse: {
                encode(_: _163.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateAgentResponse;
                fromJSON(_: any): _163.MsgCreateAgentResponse;
                toJSON(_: _163.MsgCreateAgentResponse): unknown;
                fromPartial(_: Partial<_163.MsgCreateAgentResponse>): _163.MsgCreateAgentResponse;
            };
            MsgUpdateAgent: {
                encode(message: _163.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgUpdateAgent;
                fromJSON(object: any): _163.MsgUpdateAgent;
                toJSON(message: _163.MsgUpdateAgent): unknown;
                fromPartial(object: Partial<_163.MsgUpdateAgent>): _163.MsgUpdateAgent;
            };
            MsgUpdateAgentResponse: {
                encode(_: _163.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgUpdateAgentResponse;
                fromJSON(_: any): _163.MsgUpdateAgentResponse;
                toJSON(_: _163.MsgUpdateAgentResponse): unknown;
                fromPartial(_: Partial<_163.MsgUpdateAgentResponse>): _163.MsgUpdateAgentResponse;
            };
            MsgCreateClaim: {
                encode(message: _163.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateClaim;
                fromJSON(object: any): _163.MsgCreateClaim;
                toJSON(message: _163.MsgCreateClaim): unknown;
                fromPartial(object: Partial<_163.MsgCreateClaim>): _163.MsgCreateClaim;
            };
            MsgCreateClaimResponse: {
                encode(_: _163.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateClaimResponse;
                fromJSON(_: any): _163.MsgCreateClaimResponse;
                toJSON(_: _163.MsgCreateClaimResponse): unknown;
                fromPartial(_: Partial<_163.MsgCreateClaimResponse>): _163.MsgCreateClaimResponse;
            };
            MsgCreateEvaluation: {
                encode(message: _163.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateEvaluation;
                fromJSON(object: any): _163.MsgCreateEvaluation;
                toJSON(message: _163.MsgCreateEvaluation): unknown;
                fromPartial(object: Partial<_163.MsgCreateEvaluation>): _163.MsgCreateEvaluation;
            };
            MsgCreateEvaluationResponse: {
                encode(_: _163.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgCreateEvaluationResponse;
                fromJSON(_: any): _163.MsgCreateEvaluationResponse;
                toJSON(_: _163.MsgCreateEvaluationResponse): unknown;
                fromPartial(_: Partial<_163.MsgCreateEvaluationResponse>): _163.MsgCreateEvaluationResponse;
            };
            MsgWithdrawFunds: {
                encode(message: _163.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgWithdrawFunds;
                fromJSON(object: any): _163.MsgWithdrawFunds;
                toJSON(message: _163.MsgWithdrawFunds): unknown;
                fromPartial(object: Partial<_163.MsgWithdrawFunds>): _163.MsgWithdrawFunds;
            };
            MsgWithdrawFundsResponse: {
                encode(_: _163.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgWithdrawFundsResponse;
                fromJSON(_: any): _163.MsgWithdrawFundsResponse;
                toJSON(_: _163.MsgWithdrawFundsResponse): unknown;
                fromPartial(_: Partial<_163.MsgWithdrawFundsResponse>): _163.MsgWithdrawFundsResponse;
            };
            MsgUpdateProjectDoc: {
                encode(message: _163.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgUpdateProjectDoc;
                fromJSON(object: any): _163.MsgUpdateProjectDoc;
                toJSON(message: _163.MsgUpdateProjectDoc): unknown;
                fromPartial(object: Partial<_163.MsgUpdateProjectDoc>): _163.MsgUpdateProjectDoc;
            };
            MsgUpdateProjectDocResponse: {
                encode(_: _163.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgUpdateProjectDocResponse;
                fromJSON(_: any): _163.MsgUpdateProjectDocResponse;
                toJSON(_: _163.MsgUpdateProjectDocResponse): unknown;
                fromPartial(_: Partial<_163.MsgUpdateProjectDocResponse>): _163.MsgUpdateProjectDocResponse;
            };
            QueryProjectDocRequest: {
                encode(message: _162.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryProjectDocRequest;
                fromJSON(object: any): _162.QueryProjectDocRequest;
                toJSON(message: _162.QueryProjectDocRequest): unknown;
                fromPartial(object: Partial<_162.QueryProjectDocRequest>): _162.QueryProjectDocRequest;
            };
            QueryProjectDocResponse: {
                encode(message: _162.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryProjectDocResponse;
                fromJSON(object: any): _162.QueryProjectDocResponse;
                toJSON(message: _162.QueryProjectDocResponse): unknown;
                fromPartial(object: Partial<_162.QueryProjectDocResponse>): _162.QueryProjectDocResponse;
            };
            QueryProjectAccountsRequest: {
                encode(message: _162.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryProjectAccountsRequest;
                fromJSON(object: any): _162.QueryProjectAccountsRequest;
                toJSON(message: _162.QueryProjectAccountsRequest): unknown;
                fromPartial(object: Partial<_162.QueryProjectAccountsRequest>): _162.QueryProjectAccountsRequest;
            };
            QueryProjectAccountsResponse: {
                encode(message: _162.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryProjectAccountsResponse;
                fromJSON(object: any): _162.QueryProjectAccountsResponse;
                toJSON(message: _162.QueryProjectAccountsResponse): unknown;
                fromPartial(object: Partial<_162.QueryProjectAccountsResponse>): _162.QueryProjectAccountsResponse;
            };
            QueryProjectTxRequest: {
                encode(message: _162.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryProjectTxRequest;
                fromJSON(object: any): _162.QueryProjectTxRequest;
                toJSON(message: _162.QueryProjectTxRequest): unknown;
                fromPartial(object: Partial<_162.QueryProjectTxRequest>): _162.QueryProjectTxRequest;
            };
            QueryProjectTxResponse: {
                encode(message: _162.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryProjectTxResponse;
                fromJSON(object: any): _162.QueryProjectTxResponse;
                toJSON(message: _162.QueryProjectTxResponse): unknown;
                fromPartial(object: Partial<_162.QueryProjectTxResponse>): _162.QueryProjectTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _162.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsRequest;
                fromJSON(_: any): _162.QueryParamsRequest;
                toJSON(_: _162.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_162.QueryParamsRequest>): _162.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _162.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsResponse;
                fromJSON(object: any): _162.QueryParamsResponse;
                toJSON(message: _162.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_162.QueryParamsResponse>): _162.QueryParamsResponse;
            };
            UpdateProjectStatusDoc: {
                encode(message: _161.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UpdateProjectStatusDoc;
                fromJSON(object: any): _161.UpdateProjectStatusDoc;
                toJSON(message: _161.UpdateProjectStatusDoc): unknown;
                fromPartial(object: Partial<_161.UpdateProjectStatusDoc>): _161.UpdateProjectStatusDoc;
            };
            CreateAgentDoc: {
                encode(message: _161.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CreateAgentDoc;
                fromJSON(object: any): _161.CreateAgentDoc;
                toJSON(message: _161.CreateAgentDoc): unknown;
                fromPartial(object: Partial<_161.CreateAgentDoc>): _161.CreateAgentDoc;
            };
            UpdateAgentDoc: {
                encode(message: _161.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UpdateAgentDoc;
                fromJSON(object: any): _161.UpdateAgentDoc;
                toJSON(message: _161.UpdateAgentDoc): unknown;
                fromPartial(object: Partial<_161.UpdateAgentDoc>): _161.UpdateAgentDoc;
            };
            CreateClaimDoc: {
                encode(message: _161.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CreateClaimDoc;
                fromJSON(object: any): _161.CreateClaimDoc;
                toJSON(message: _161.CreateClaimDoc): unknown;
                fromPartial(object: Partial<_161.CreateClaimDoc>): _161.CreateClaimDoc;
            };
            CreateEvaluationDoc: {
                encode(message: _161.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CreateEvaluationDoc;
                fromJSON(object: any): _161.CreateEvaluationDoc;
                toJSON(message: _161.CreateEvaluationDoc): unknown;
                fromPartial(object: Partial<_161.CreateEvaluationDoc>): _161.CreateEvaluationDoc;
            };
            WithdrawFundsDoc: {
                encode(message: _161.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.WithdrawFundsDoc;
                fromJSON(object: any): _161.WithdrawFundsDoc;
                toJSON(message: _161.WithdrawFundsDoc): unknown;
                fromPartial(object: Partial<_161.WithdrawFundsDoc>): _161.WithdrawFundsDoc;
            };
            ProjectDoc: {
                encode(message: _161.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ProjectDoc;
                fromJSON(object: any): _161.ProjectDoc;
                toJSON(message: _161.ProjectDoc): unknown;
                fromPartial(object: Partial<_161.ProjectDoc>): _161.ProjectDoc;
            };
            WithdrawalInfoDoc: {
                encode(message: _161.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.WithdrawalInfoDoc;
                fromJSON(object: any): _161.WithdrawalInfoDoc;
                toJSON(message: _161.WithdrawalInfoDoc): unknown;
                fromPartial(object: Partial<_161.WithdrawalInfoDoc>): _161.WithdrawalInfoDoc;
            };
            Params: {
                encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Params;
                fromJSON(object: any): _161.Params;
                toJSON(message: _161.Params): unknown;
                fromPartial(object: Partial<_161.Params>): _161.Params;
            };
            Claim: {
                encode(message: _161.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Claim;
                fromJSON(object: any): _161.Claim;
                toJSON(message: _161.Claim): unknown;
                fromPartial(object: Partial<_161.Claim>): _161.Claim;
            };
            GenesisAccountMap_MapEntry: {
                encode(message: _161.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisAccountMap_MapEntry;
                fromJSON(object: any): _161.GenesisAccountMap_MapEntry;
                toJSON(message: _161.GenesisAccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_161.GenesisAccountMap_MapEntry>): _161.GenesisAccountMap_MapEntry;
            };
            GenesisAccountMap: {
                encode(message: _161.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisAccountMap;
                fromJSON(object: any): _161.GenesisAccountMap;
                toJSON(message: _161.GenesisAccountMap): unknown;
                fromPartial(object: Partial<_161.GenesisAccountMap>): _161.GenesisAccountMap;
            };
            AccountMap_MapEntry: {
                encode(message: _161.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AccountMap_MapEntry;
                fromJSON(object: any): _161.AccountMap_MapEntry;
                toJSON(message: _161.AccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_161.AccountMap_MapEntry>): _161.AccountMap_MapEntry;
            };
            AccountMap: {
                encode(message: _161.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AccountMap;
                fromJSON(object: any): _161.AccountMap;
                toJSON(message: _161.AccountMap): unknown;
                fromPartial(object: Partial<_161.AccountMap>): _161.AccountMap;
            };
            WithdrawalInfoDocs: {
                encode(message: _161.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.WithdrawalInfoDocs;
                fromJSON(object: any): _161.WithdrawalInfoDocs;
                toJSON(message: _161.WithdrawalInfoDocs): unknown;
                fromPartial(object: Partial<_161.WithdrawalInfoDocs>): _161.WithdrawalInfoDocs;
            };
            Claims: {
                encode(message: _161.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Claims;
                fromJSON(object: any): _161.Claims;
                toJSON(message: _161.Claims): unknown;
                fromPartial(object: Partial<_161.Claims>): _161.Claims;
            };
            GenesisState: {
                encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
                fromJSON(object: any): _160.GenesisState;
                toJSON(message: _160.GenesisState): unknown;
                fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                tokenList(request: _168.QueryTokenListRequest): Promise<_168.QueryTokenListResponse>;
                tokenDoc(request: _168.QueryTokenDocRequest): Promise<_168.QueryTokenDocResponse>;
                tokenMetadata(request: _168.QueryTokenMetadataRequest): Promise<_168.QueryTokenMetadataResponse>;
            };
            MsgCreateToken: {
                encode(message: _170.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgCreateToken;
                fromJSON(object: any): _170.MsgCreateToken;
                toJSON(message: _170.MsgCreateToken): unknown;
                fromPartial(object: Partial<_170.MsgCreateToken>): _170.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _170.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgCreateTokenResponse;
                fromJSON(_: any): _170.MsgCreateTokenResponse;
                toJSON(_: _170.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_170.MsgCreateTokenResponse>): _170.MsgCreateTokenResponse;
            };
            MsgMintToken: {
                encode(message: _170.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgMintToken;
                fromJSON(object: any): _170.MsgMintToken;
                toJSON(message: _170.MsgMintToken): unknown;
                fromPartial(object: Partial<_170.MsgMintToken>): _170.MsgMintToken;
            };
            MintBatch: {
                encode(message: _170.MintBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MintBatch;
                fromJSON(object: any): _170.MintBatch;
                toJSON(message: _170.MintBatch): unknown;
                fromPartial(object: Partial<_170.MintBatch>): _170.MintBatch;
            };
            MsgMintTokenResponse: {
                encode(_: _170.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgMintTokenResponse;
                fromJSON(_: any): _170.MsgMintTokenResponse;
                toJSON(_: _170.MsgMintTokenResponse): unknown;
                fromPartial(_: Partial<_170.MsgMintTokenResponse>): _170.MsgMintTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _170.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgTransferToken;
                fromJSON(object: any): _170.MsgTransferToken;
                toJSON(message: _170.MsgTransferToken): unknown;
                fromPartial(object: Partial<_170.MsgTransferToken>): _170.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _170.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgTransferTokenResponse;
                fromJSON(_: any): _170.MsgTransferTokenResponse;
                toJSON(_: _170.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_170.MsgTransferTokenResponse>): _170.MsgTransferTokenResponse;
            };
            TokenBatch: {
                encode(message: _170.TokenBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenBatch;
                fromJSON(object: any): _170.TokenBatch;
                toJSON(message: _170.TokenBatch): unknown;
                fromPartial(object: Partial<_170.TokenBatch>): _170.TokenBatch;
            };
            MsgRetireToken: {
                encode(message: _170.MsgRetireToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgRetireToken;
                fromJSON(object: any): _170.MsgRetireToken;
                toJSON(message: _170.MsgRetireToken): unknown;
                fromPartial(object: Partial<_170.MsgRetireToken>): _170.MsgRetireToken;
            };
            MsgRetireTokenResponse: {
                encode(_: _170.MsgRetireTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgRetireTokenResponse;
                fromJSON(_: any): _170.MsgRetireTokenResponse;
                toJSON(_: _170.MsgRetireTokenResponse): unknown;
                fromPartial(_: Partial<_170.MsgRetireTokenResponse>): _170.MsgRetireTokenResponse;
            };
            MsgCancelToken: {
                encode(message: _170.MsgCancelToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgCancelToken;
                fromJSON(object: any): _170.MsgCancelToken;
                toJSON(message: _170.MsgCancelToken): unknown;
                fromPartial(object: Partial<_170.MsgCancelToken>): _170.MsgCancelToken;
            };
            MsgCancelTokenResponse: {
                encode(_: _170.MsgCancelTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgCancelTokenResponse;
                fromJSON(_: any): _170.MsgCancelTokenResponse;
                toJSON(_: _170.MsgCancelTokenResponse): unknown;
                fromPartial(_: Partial<_170.MsgCancelTokenResponse>): _170.MsgCancelTokenResponse;
            };
            MsgPauseToken: {
                encode(message: _170.MsgPauseToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgPauseToken;
                fromJSON(object: any): _170.MsgPauseToken;
                toJSON(message: _170.MsgPauseToken): unknown;
                fromPartial(object: Partial<_170.MsgPauseToken>): _170.MsgPauseToken;
            };
            MsgPauseTokenResponse: {
                encode(_: _170.MsgPauseTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgPauseTokenResponse;
                fromJSON(_: any): _170.MsgPauseTokenResponse;
                toJSON(_: _170.MsgPauseTokenResponse): unknown;
                fromPartial(_: Partial<_170.MsgPauseTokenResponse>): _170.MsgPauseTokenResponse;
            };
            MsgStopToken: {
                encode(message: _170.MsgStopToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgStopToken;
                fromJSON(object: any): _170.MsgStopToken;
                toJSON(message: _170.MsgStopToken): unknown;
                fromPartial(object: Partial<_170.MsgStopToken>): _170.MsgStopToken;
            };
            MsgStopTokenResponse: {
                encode(_: _170.MsgStopTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgStopTokenResponse;
                fromJSON(_: any): _170.MsgStopTokenResponse;
                toJSON(_: _170.MsgStopTokenResponse): unknown;
                fromPartial(_: Partial<_170.MsgStopTokenResponse>): _170.MsgStopTokenResponse;
            };
            Params: {
                encode(message: _169.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Params;
                fromJSON(object: any): _169.Params;
                toJSON(message: _169.Params): unknown;
                fromPartial(object: Partial<_169.Params>): _169.Params;
            };
            Token: {
                encode(message: _169.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Token;
                fromJSON(object: any): _169.Token;
                toJSON(message: _169.Token): unknown;
                fromPartial(object: Partial<_169.Token>): _169.Token;
            };
            TokensRetired: {
                encode(message: _169.TokensRetired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokensRetired;
                fromJSON(object: any): _169.TokensRetired;
                toJSON(message: _169.TokensRetired): unknown;
                fromPartial(object: Partial<_169.TokensRetired>): _169.TokensRetired;
            };
            TokensCancelled: {
                encode(message: _169.TokensCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokensCancelled;
                fromJSON(object: any): _169.TokensCancelled;
                toJSON(message: _169.TokensCancelled): unknown;
                fromPartial(object: Partial<_169.TokensCancelled>): _169.TokensCancelled;
            };
            TokenProperties: {
                encode(message: _169.TokenProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenProperties;
                fromJSON(object: any): _169.TokenProperties;
                toJSON(message: _169.TokenProperties): unknown;
                fromPartial(object: Partial<_169.TokenProperties>): _169.TokenProperties;
            };
            TokenData: {
                encode(message: _169.TokenData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenData;
                fromJSON(object: any): _169.TokenData;
                toJSON(message: _169.TokenData): unknown;
                fromPartial(object: Partial<_169.TokenData>): _169.TokenData;
            };
            QueryParamsRequest: {
                encode(_: _168.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsRequest;
                fromJSON(_: any): _168.QueryParamsRequest;
                toJSON(_: _168.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_168.QueryParamsRequest>): _168.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _168.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsResponse;
                fromJSON(object: any): _168.QueryParamsResponse;
                toJSON(message: _168.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_168.QueryParamsResponse>): _168.QueryParamsResponse;
            };
            QueryTokenListRequest: {
                encode(message: _168.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTokenListRequest;
                fromJSON(object: any): _168.QueryTokenListRequest;
                toJSON(message: _168.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_168.QueryTokenListRequest>): _168.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _168.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTokenListResponse;
                fromJSON(object: any): _168.QueryTokenListResponse;
                toJSON(message: _168.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_168.QueryTokenListResponse>): _168.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _168.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTokenDocRequest;
                fromJSON(object: any): _168.QueryTokenDocRequest;
                toJSON(message: _168.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_168.QueryTokenDocRequest>): _168.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(message: _168.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTokenDocResponse;
                fromJSON(object: any): _168.QueryTokenDocResponse;
                toJSON(message: _168.QueryTokenDocResponse): unknown;
                fromPartial(object: Partial<_168.QueryTokenDocResponse>): _168.QueryTokenDocResponse;
            };
            QueryTokenMetadataRequest: {
                encode(message: _168.QueryTokenMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTokenMetadataRequest;
                fromJSON(object: any): _168.QueryTokenMetadataRequest;
                toJSON(message: _168.QueryTokenMetadataRequest): unknown;
                fromPartial(object: Partial<_168.QueryTokenMetadataRequest>): _168.QueryTokenMetadataRequest;
            };
            QueryTokenMetadataResponse: {
                encode(message: _168.QueryTokenMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTokenMetadataResponse;
                fromJSON(object: any): _168.QueryTokenMetadataResponse;
                toJSON(message: _168.QueryTokenMetadataResponse): unknown;
                fromPartial(object: Partial<_168.QueryTokenMetadataResponse>): _168.QueryTokenMetadataResponse;
            };
            TokenMetadataProperties: {
                encode(message: _168.TokenMetadataProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.TokenMetadataProperties;
                fromJSON(object: any): _168.TokenMetadataProperties;
                toJSON(message: _168.TokenMetadataProperties): unknown;
                fromPartial(object: Partial<_168.TokenMetadataProperties>): _168.TokenMetadataProperties;
            };
            SetTokenContractCodes: {
                encode(message: _167.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.SetTokenContractCodes;
                fromJSON(object: any): _167.SetTokenContractCodes;
                toJSON(message: _167.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_167.SetTokenContractCodes>): _167.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
                fromJSON(object: any): _166.GenesisState;
                toJSON(message: _166.GenesisState): unknown;
                fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
            };
            TokenCreatedEvent: {
                encode(message: _165.TokenCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenCreatedEvent;
                fromJSON(object: any): _165.TokenCreatedEvent;
                toJSON(message: _165.TokenCreatedEvent): unknown;
                fromPartial(object: Partial<_165.TokenCreatedEvent>): _165.TokenCreatedEvent;
            };
            TokenUpdatedEvent: {
                encode(message: _165.TokenUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenUpdatedEvent;
                fromJSON(object: any): _165.TokenUpdatedEvent;
                toJSON(message: _165.TokenUpdatedEvent): unknown;
                fromPartial(object: Partial<_165.TokenUpdatedEvent>): _165.TokenUpdatedEvent;
            };
            TokenMintedEvent: {
                encode(message: _165.TokenMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenMintedEvent;
                fromJSON(object: any): _165.TokenMintedEvent;
                toJSON(message: _165.TokenMintedEvent): unknown;
                fromPartial(object: Partial<_165.TokenMintedEvent>): _165.TokenMintedEvent;
            };
            TokenTransferredEvent: {
                encode(message: _165.TokenTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenTransferredEvent;
                fromJSON(object: any): _165.TokenTransferredEvent;
                toJSON(message: _165.TokenTransferredEvent): unknown;
                fromPartial(object: Partial<_165.TokenTransferredEvent>): _165.TokenTransferredEvent;
            };
            TokenCancelledEvent: {
                encode(message: _165.TokenCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenCancelledEvent;
                fromJSON(object: any): _165.TokenCancelledEvent;
                toJSON(message: _165.TokenCancelledEvent): unknown;
                fromPartial(object: Partial<_165.TokenCancelledEvent>): _165.TokenCancelledEvent;
            };
            TokenRetiredEvent: {
                encode(message: _165.TokenRetiredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenRetiredEvent;
                fromJSON(object: any): _165.TokenRetiredEvent;
                toJSON(message: _165.TokenRetiredEvent): unknown;
                fromPartial(object: Partial<_165.TokenRetiredEvent>): _165.TokenRetiredEvent;
            };
            TokenPausedEvent: {
                encode(message: _165.TokenPausedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenPausedEvent;
                fromJSON(object: any): _165.TokenPausedEvent;
                toJSON(message: _165.TokenPausedEvent): unknown;
                fromPartial(object: Partial<_165.TokenPausedEvent>): _165.TokenPausedEvent;
            };
            TokenStoppedEvent: {
                encode(message: _165.TokenStoppedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TokenStoppedEvent;
                fromJSON(object: any): _165.TokenStoppedEvent;
                toJSON(message: _165.TokenStoppedEvent): unknown;
                fromPartial(object: Partial<_165.TokenStoppedEvent>): _165.TokenStoppedEvent;
            };
            MintAuthorization: {
                encode(message: _164.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MintAuthorization;
                fromJSON(object: any): _164.MintAuthorization;
                toJSON(message: _164.MintAuthorization): unknown;
                fromPartial(object: Partial<_164.MintAuthorization>): _164.MintAuthorization;
            };
            MintConstraints: {
                encode(message: _164.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MintConstraints;
                fromJSON(object: any): _164.MintConstraints;
                toJSON(message: _164.MintConstraints): unknown;
                fromPartial(object: Partial<_164.MintConstraints>): _164.MintConstraints;
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
                    v1beta1: _234.MsgClientImpl;
                };
                claims: {
                    v1beta1: _235.MsgClientImpl;
                };
                entity: {
                    v1beta1: _236.MsgClientImpl;
                };
                iid: {
                    v1beta1: _237.MsgClientImpl;
                };
                payments: {
                    v1: _238.MsgClientImpl;
                };
                project: {
                    v1: _239.MsgClientImpl;
                };
                token: {
                    v1beta1: _240.MsgClientImpl;
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
                claims: {
                    v1beta1: {
                        params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
                        collection(request: _141.QueryCollectionRequest): Promise<_141.QueryCollectionResponse>;
                        collectionList(request?: _141.QueryCollectionListRequest): Promise<_141.QueryCollectionListResponse>;
                        claim(request: _141.QueryClaimRequest): Promise<_141.QueryClaimResponse>;
                        claimList(request?: _141.QueryClaimListRequest): Promise<_141.QueryClaimListResponse>;
                        dispute(request: _141.QueryDisputeRequest): Promise<_141.QueryDisputeResponse>;
                        disputeList(request?: _141.QueryDisputeListRequest): Promise<_141.QueryDisputeListResponse>;
                    };
                };
                entity: {
                    v1beta1: {
                        params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                        entity(request: _148.QueryEntityRequest): Promise<_148.QueryEntityResponse>;
                        entityMetaData(request: _148.QueryEntityMetadataRequest): Promise<_148.QueryEntityMetadataResponse>;
                        entityIidDocument(request: _148.QueryEntityIidDocumentRequest): Promise<_148.QueryEntityIidDocumentResponse>;
                        entityVerified(request: _148.QueryEntityVerifiedRequest): Promise<_148.QueryEntityVerifiedResponse>;
                        entityList(request?: _148.QueryEntityListRequest): Promise<_148.QueryEntityListResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request?: _153.QueryIidDocumentsRequest): Promise<_153.QueryIidDocumentsResponse>;
                        iidDocument(request: _153.QueryIidDocumentRequest): Promise<_153.QueryIidDocumentResponse>;
                    };
                };
                payments: {
                    v1: {
                        paymentTemplate(request: _158.QueryPaymentTemplateRequest): Promise<_158.QueryPaymentTemplateResponse>;
                        paymentContract(request: _158.QueryPaymentContractRequest): Promise<_158.QueryPaymentContractResponse>;
                        paymentContractsByIdPrefix(request: _158.QueryPaymentContractsByIdPrefixRequest): Promise<_158.QueryPaymentContractsByIdPrefixResponse>;
                        subscription(request: _158.QuerySubscriptionRequest): Promise<_158.QuerySubscriptionResponse>;
                    };
                };
                project: {
                    v1: {
                        projectDoc(request: _162.QueryProjectDocRequest): Promise<_162.QueryProjectDocResponse>;
                        projectAccounts(request: _162.QueryProjectAccountsRequest): Promise<_162.QueryProjectAccountsResponse>;
                        projectTx(request: _162.QueryProjectTxRequest): Promise<_162.QueryProjectTxResponse>;
                        params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                        tokenList(request: _168.QueryTokenListRequest): Promise<_168.QueryTokenListResponse>;
                        tokenDoc(request: _168.QueryTokenDocRequest): Promise<_168.QueryTokenDocResponse>;
                        tokenMetadata(request: _168.QueryTokenMetadataRequest): Promise<_168.QueryTokenMetadataResponse>;
                    };
                };
            };
        }>;
    };
}
