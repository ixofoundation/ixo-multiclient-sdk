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
import * as _143 from "./entity/v1beta1/entity";
import * as _144 from "./entity/v1beta1/event";
import * as _145 from "./entity/v1beta1/genesis";
import * as _146 from "./entity/v1beta1/proposal";
import * as _147 from "./entity/v1beta1/query";
import * as _148 from "./entity/v1beta1/tx";
import * as _149 from "./iid/v1beta1/event";
import * as _150 from "./iid/v1beta1/genesis";
import * as _151 from "./iid/v1beta1/iid";
import * as _152 from "./iid/v1beta1/query";
import * as _153 from "./iid/v1beta1/tx";
import * as _154 from "./iid/v1beta1/types";
import * as _155 from "./payments/v1/genesis";
import * as _156 from "./payments/v1/payments";
import * as _157 from "./payments/v1/query";
import * as _158 from "./payments/v1/tx";
import * as _159 from "./project/v1/genesis";
import * as _160 from "./project/v1/project";
import * as _161 from "./project/v1/query";
import * as _162 from "./project/v1/tx";
import * as _163 from "./token/v1beta1/authz";
import * as _164 from "./token/v1beta1/event";
import * as _165 from "./token/v1beta1/genesis";
import * as _166 from "./token/v1beta1/proposal";
import * as _167 from "./token/v1beta1/query";
import * as _168 from "./token/v1beta1/token";
import * as _169 from "./token/v1beta1/tx";
import * as _226 from "./bonds/v1beta1/query.rpc.Query";
import * as _227 from "./claims/v1beta1/query.rpc.Query";
import * as _228 from "./entity/v1beta1/query.rpc.Query";
import * as _229 from "./iid/v1beta1/query.rpc.Query";
import * as _230 from "./payments/v1/query.rpc.Query";
import * as _231 from "./project/v1/query.rpc.Query";
import * as _232 from "./token/v1beta1/query.rpc.Query";
import * as _233 from "./bonds/v1beta1/tx.rpc.msg";
import * as _234 from "./claims/v1beta1/tx.rpc.msg";
import * as _235 from "./entity/v1beta1/tx.rpc.msg";
import * as _236 from "./iid/v1beta1/tx.rpc.msg";
import * as _237 from "./payments/v1/tx.rpc.msg";
import * as _238 from "./project/v1/tx.rpc.msg";
import * as _239 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
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
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
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
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                entity(request: _147.QueryEntityRequest): Promise<_147.QueryEntityResponse>;
                entityMetaData(request: _147.QueryEntityMetadataRequest): Promise<_147.QueryEntityMetadataResponse>;
                entityIidDocument(request: _147.QueryEntityIidDocumentRequest): Promise<_147.QueryEntityIidDocumentResponse>;
                entityVerified(request: _147.QueryEntityVerifiedRequest): Promise<_147.QueryEntityVerifiedResponse>;
                entityList(request?: _147.QueryEntityListRequest): Promise<_147.QueryEntityListResponse>;
            };
            MsgCreateEntity: {
                encode(message: _148.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateEntity;
                fromJSON(object: any): _148.MsgCreateEntity;
                toJSON(message: _148.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_148.MsgCreateEntity>): _148.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _148.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateEntityResponse;
                fromJSON(object: any): _148.MsgCreateEntityResponse;
                toJSON(message: _148.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_148.MsgCreateEntityResponse>): _148.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _148.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateEntity;
                fromJSON(object: any): _148.MsgUpdateEntity;
                toJSON(message: _148.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_148.MsgUpdateEntity>): _148.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _148.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateEntityResponse;
                fromJSON(_: any): _148.MsgUpdateEntityResponse;
                toJSON(_: _148.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_148.MsgUpdateEntityResponse>): _148.MsgUpdateEntityResponse;
            };
            MsgUpdateEntityVerified: {
                encode(message: _148.MsgUpdateEntityVerified, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateEntityVerified;
                fromJSON(object: any): _148.MsgUpdateEntityVerified;
                toJSON(message: _148.MsgUpdateEntityVerified): unknown;
                fromPartial(object: Partial<_148.MsgUpdateEntityVerified>): _148.MsgUpdateEntityVerified;
            };
            MsgUpdateEntityVerifiedResponse: {
                encode(_: _148.MsgUpdateEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateEntityVerifiedResponse;
                fromJSON(_: any): _148.MsgUpdateEntityVerifiedResponse;
                toJSON(_: _148.MsgUpdateEntityVerifiedResponse): unknown;
                fromPartial(_: Partial<_148.MsgUpdateEntityVerifiedResponse>): _148.MsgUpdateEntityVerifiedResponse;
            };
            MsgTransferEntity: {
                encode(message: _148.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgTransferEntity;
                fromJSON(object: any): _148.MsgTransferEntity;
                toJSON(message: _148.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_148.MsgTransferEntity>): _148.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _148.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgTransferEntityResponse;
                fromJSON(_: any): _148.MsgTransferEntityResponse;
                toJSON(_: _148.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_148.MsgTransferEntityResponse>): _148.MsgTransferEntityResponse;
            };
            QueryParamsRequest: {
                encode(_: _147.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsRequest;
                fromJSON(_: any): _147.QueryParamsRequest;
                toJSON(_: _147.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _147.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsResponse;
                fromJSON(object: any): _147.QueryParamsResponse;
                toJSON(message: _147.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
            };
            QueryEntityRequest: {
                encode(message: _147.QueryEntityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityRequest;
                fromJSON(object: any): _147.QueryEntityRequest;
                toJSON(message: _147.QueryEntityRequest): unknown;
                fromPartial(object: Partial<_147.QueryEntityRequest>): _147.QueryEntityRequest;
            };
            QueryEntityResponse: {
                encode(message: _147.QueryEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityResponse;
                fromJSON(object: any): _147.QueryEntityResponse;
                toJSON(message: _147.QueryEntityResponse): unknown;
                fromPartial(object: Partial<_147.QueryEntityResponse>): _147.QueryEntityResponse;
            };
            QueryEntityMetadataRequest: {
                encode(message: _147.QueryEntityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityMetadataRequest;
                fromJSON(object: any): _147.QueryEntityMetadataRequest;
                toJSON(message: _147.QueryEntityMetadataRequest): unknown;
                fromPartial(object: Partial<_147.QueryEntityMetadataRequest>): _147.QueryEntityMetadataRequest;
            };
            QueryEntityMetadataResponse: {
                encode(message: _147.QueryEntityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityMetadataResponse;
                fromJSON(object: any): _147.QueryEntityMetadataResponse;
                toJSON(message: _147.QueryEntityMetadataResponse): unknown;
                fromPartial(object: Partial<_147.QueryEntityMetadataResponse>): _147.QueryEntityMetadataResponse;
            };
            QueryEntityIidDocumentRequest: {
                encode(message: _147.QueryEntityIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityIidDocumentRequest;
                fromJSON(object: any): _147.QueryEntityIidDocumentRequest;
                toJSON(message: _147.QueryEntityIidDocumentRequest): unknown;
                fromPartial(object: Partial<_147.QueryEntityIidDocumentRequest>): _147.QueryEntityIidDocumentRequest;
            };
            QueryEntityIidDocumentResponse: {
                encode(message: _147.QueryEntityIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityIidDocumentResponse;
                fromJSON(object: any): _147.QueryEntityIidDocumentResponse;
                toJSON(message: _147.QueryEntityIidDocumentResponse): unknown;
                fromPartial(object: Partial<_147.QueryEntityIidDocumentResponse>): _147.QueryEntityIidDocumentResponse;
            };
            QueryEntityVerifiedRequest: {
                encode(message: _147.QueryEntityVerifiedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityVerifiedRequest;
                fromJSON(object: any): _147.QueryEntityVerifiedRequest;
                toJSON(message: _147.QueryEntityVerifiedRequest): unknown;
                fromPartial(object: Partial<_147.QueryEntityVerifiedRequest>): _147.QueryEntityVerifiedRequest;
            };
            QueryEntityVerifiedResponse: {
                encode(message: _147.QueryEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityVerifiedResponse;
                fromJSON(object: any): _147.QueryEntityVerifiedResponse;
                toJSON(message: _147.QueryEntityVerifiedResponse): unknown;
                fromPartial(object: Partial<_147.QueryEntityVerifiedResponse>): _147.QueryEntityVerifiedResponse;
            };
            QueryEntityListRequest: {
                encode(message: _147.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityListRequest;
                fromJSON(object: any): _147.QueryEntityListRequest;
                toJSON(message: _147.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_147.QueryEntityListRequest>): _147.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(message: _147.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEntityListResponse;
                fromJSON(object: any): _147.QueryEntityListResponse;
                toJSON(message: _147.QueryEntityListResponse): unknown;
                fromPartial(object: Partial<_147.QueryEntityListResponse>): _147.QueryEntityListResponse;
            };
            InitializeNftContract: {
                encode(message: _146.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.InitializeNftContract;
                fromJSON(object: any): _146.InitializeNftContract;
                toJSON(message: _146.InitializeNftContract): unknown;
                fromPartial(object: Partial<_146.InitializeNftContract>): _146.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisState;
                fromJSON(object: any): _145.GenesisState;
                toJSON(message: _145.GenesisState): unknown;
                fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
            };
            EntityCreatedEvent: {
                encode(message: _144.EntityCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EntityCreatedEvent;
                fromJSON(object: any): _144.EntityCreatedEvent;
                toJSON(message: _144.EntityCreatedEvent): unknown;
                fromPartial(object: Partial<_144.EntityCreatedEvent>): _144.EntityCreatedEvent;
            };
            EntityUpdatedEvent: {
                encode(message: _144.EntityUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EntityUpdatedEvent;
                fromJSON(object: any): _144.EntityUpdatedEvent;
                toJSON(message: _144.EntityUpdatedEvent): unknown;
                fromPartial(object: Partial<_144.EntityUpdatedEvent>): _144.EntityUpdatedEvent;
            };
            EntityVerifiedUpdatedEvent: {
                encode(message: _144.EntityVerifiedUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EntityVerifiedUpdatedEvent;
                fromJSON(object: any): _144.EntityVerifiedUpdatedEvent;
                toJSON(message: _144.EntityVerifiedUpdatedEvent): unknown;
                fromPartial(object: Partial<_144.EntityVerifiedUpdatedEvent>): _144.EntityVerifiedUpdatedEvent;
            };
            EntityTransferredEvent: {
                encode(message: _144.EntityTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EntityTransferredEvent;
                fromJSON(object: any): _144.EntityTransferredEvent;
                toJSON(message: _144.EntityTransferredEvent): unknown;
                fromPartial(object: Partial<_144.EntityTransferredEvent>): _144.EntityTransferredEvent;
            };
            Params: {
                encode(message: _143.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Params;
                fromJSON(object: any): _143.Params;
                toJSON(message: _143.Params): unknown;
                fromPartial(object: Partial<_143.Params>): _143.Params;
            };
            Entity: {
                encode(message: _143.Entity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Entity;
                fromJSON(object: any): _143.Entity;
                toJSON(message: _143.Entity): unknown;
                fromPartial(object: Partial<_143.Entity>): _143.Entity;
            };
            EntityMetadata: {
                encode(message: _143.EntityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.EntityMetadata;
                fromJSON(object: any): _143.EntityMetadata;
                toJSON(message: _143.EntityMetadata): unknown;
                fromPartial(object: Partial<_143.EntityMetadata>): _143.EntityMetadata;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _152.QueryIidDocumentsRequest): Promise<_152.QueryIidDocumentsResponse>;
                iidDocument(request: _152.QueryIidDocumentRequest): Promise<_152.QueryIidDocumentResponse>;
            };
            Context: {
                encode(message: _154.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Context;
                fromJSON(object: any): _154.Context;
                toJSON(message: _154.Context): unknown;
                fromPartial(object: Partial<_154.Context>): _154.Context;
            };
            AccordedRight: {
                encode(message: _154.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AccordedRight;
                fromJSON(object: any): _154.AccordedRight;
                toJSON(message: _154.AccordedRight): unknown;
                fromPartial(object: Partial<_154.AccordedRight>): _154.AccordedRight;
            };
            LinkedResource: {
                encode(message: _154.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.LinkedResource;
                fromJSON(object: any): _154.LinkedResource;
                toJSON(message: _154.LinkedResource): unknown;
                fromPartial(object: Partial<_154.LinkedResource>): _154.LinkedResource;
            };
            LinkedClaim: {
                encode(message: _154.LinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.LinkedClaim;
                fromJSON(object: any): _154.LinkedClaim;
                toJSON(message: _154.LinkedClaim): unknown;
                fromPartial(object: Partial<_154.LinkedClaim>): _154.LinkedClaim;
            };
            LinkedEntity: {
                encode(message: _154.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.LinkedEntity;
                fromJSON(object: any): _154.LinkedEntity;
                toJSON(message: _154.LinkedEntity): unknown;
                fromPartial(object: Partial<_154.LinkedEntity>): _154.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _154.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.VerificationMethod;
                fromJSON(object: any): _154.VerificationMethod;
                toJSON(message: _154.VerificationMethod): unknown;
                fromPartial(object: Partial<_154.VerificationMethod>): _154.VerificationMethod;
            };
            Service: {
                encode(message: _154.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Service;
                fromJSON(object: any): _154.Service;
                toJSON(message: _154.Service): unknown;
                fromPartial(object: Partial<_154.Service>): _154.Service;
            };
            IidMetadata: {
                encode(message: _154.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.IidMetadata;
                fromJSON(object: any): _154.IidMetadata;
                toJSON(message: _154.IidMetadata): unknown;
                fromPartial(object: Partial<_154.IidMetadata>): _154.IidMetadata;
            };
            Verification: {
                encode(message: _153.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Verification;
                fromJSON(object: any): _153.Verification;
                toJSON(message: _153.Verification): unknown;
                fromPartial(object: Partial<_153.Verification>): _153.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _153.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateIidDocument;
                fromJSON(object: any): _153.MsgCreateIidDocument;
                toJSON(message: _153.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_153.MsgCreateIidDocument>): _153.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _153.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _153.MsgCreateIidDocumentResponse;
                toJSON(_: _153.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_153.MsgCreateIidDocumentResponse>): _153.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _153.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateIidDocument;
                fromJSON(object: any): _153.MsgUpdateIidDocument;
                toJSON(message: _153.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_153.MsgUpdateIidDocument>): _153.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _153.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _153.MsgUpdateIidDocumentResponse;
                toJSON(_: _153.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_153.MsgUpdateIidDocumentResponse>): _153.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _153.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddVerification;
                fromJSON(object: any): _153.MsgAddVerification;
                toJSON(message: _153.MsgAddVerification): unknown;
                fromPartial(object: Partial<_153.MsgAddVerification>): _153.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _153.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddVerificationResponse;
                fromJSON(_: any): _153.MsgAddVerificationResponse;
                toJSON(_: _153.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddVerificationResponse>): _153.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _153.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSetVerificationRelationships;
                fromJSON(object: any): _153.MsgSetVerificationRelationships;
                toJSON(message: _153.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_153.MsgSetVerificationRelationships>): _153.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _153.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _153.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _153.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_153.MsgSetVerificationRelationshipsResponse>): _153.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _153.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRevokeVerification;
                fromJSON(object: any): _153.MsgRevokeVerification;
                toJSON(message: _153.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_153.MsgRevokeVerification>): _153.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _153.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRevokeVerificationResponse;
                fromJSON(_: any): _153.MsgRevokeVerificationResponse;
                toJSON(_: _153.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_153.MsgRevokeVerificationResponse>): _153.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _153.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddService;
                fromJSON(object: any): _153.MsgAddService;
                toJSON(message: _153.MsgAddService): unknown;
                fromPartial(object: Partial<_153.MsgAddService>): _153.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _153.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddServiceResponse;
                fromJSON(_: any): _153.MsgAddServiceResponse;
                toJSON(_: _153.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddServiceResponse>): _153.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _153.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteService;
                fromJSON(object: any): _153.MsgDeleteService;
                toJSON(message: _153.MsgDeleteService): unknown;
                fromPartial(object: Partial<_153.MsgDeleteService>): _153.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _153.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteServiceResponse;
                fromJSON(_: any): _153.MsgDeleteServiceResponse;
                toJSON(_: _153.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeleteServiceResponse>): _153.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _153.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddController;
                fromJSON(object: any): _153.MsgAddController;
                toJSON(message: _153.MsgAddController): unknown;
                fromPartial(object: Partial<_153.MsgAddController>): _153.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _153.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddControllerResponse;
                fromJSON(_: any): _153.MsgAddControllerResponse;
                toJSON(_: _153.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddControllerResponse>): _153.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _153.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteController;
                fromJSON(object: any): _153.MsgDeleteController;
                toJSON(message: _153.MsgDeleteController): unknown;
                fromPartial(object: Partial<_153.MsgDeleteController>): _153.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _153.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteControllerResponse;
                fromJSON(_: any): _153.MsgDeleteControllerResponse;
                toJSON(_: _153.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeleteControllerResponse>): _153.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _153.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddLinkedResource;
                fromJSON(object: any): _153.MsgAddLinkedResource;
                toJSON(message: _153.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_153.MsgAddLinkedResource>): _153.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _153.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteLinkedResource;
                fromJSON(object: any): _153.MsgDeleteLinkedResource;
                toJSON(message: _153.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_153.MsgDeleteLinkedResource>): _153.MsgDeleteLinkedResource;
            };
            MsgAddLinkedClaim: {
                encode(message: _153.MsgAddLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddLinkedClaim;
                fromJSON(object: any): _153.MsgAddLinkedClaim;
                toJSON(message: _153.MsgAddLinkedClaim): unknown;
                fromPartial(object: Partial<_153.MsgAddLinkedClaim>): _153.MsgAddLinkedClaim;
            };
            MsgDeleteLinkedClaim: {
                encode(message: _153.MsgDeleteLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteLinkedClaim;
                fromJSON(object: any): _153.MsgDeleteLinkedClaim;
                toJSON(message: _153.MsgDeleteLinkedClaim): unknown;
                fromPartial(object: Partial<_153.MsgDeleteLinkedClaim>): _153.MsgDeleteLinkedClaim;
            };
            MsgAddLinkedEntity: {
                encode(message: _153.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddLinkedEntity;
                fromJSON(object: any): _153.MsgAddLinkedEntity;
                toJSON(message: _153.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_153.MsgAddLinkedEntity>): _153.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _153.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteLinkedEntity;
                fromJSON(object: any): _153.MsgDeleteLinkedEntity;
                toJSON(message: _153.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_153.MsgDeleteLinkedEntity>): _153.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _153.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddAccordedRight;
                fromJSON(object: any): _153.MsgAddAccordedRight;
                toJSON(message: _153.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_153.MsgAddAccordedRight>): _153.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _153.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteAccordedRight;
                fromJSON(object: any): _153.MsgDeleteAccordedRight;
                toJSON(message: _153.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_153.MsgDeleteAccordedRight>): _153.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _153.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddIidContext;
                fromJSON(object: any): _153.MsgAddIidContext;
                toJSON(message: _153.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_153.MsgAddIidContext>): _153.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _153.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeactivateIID;
                fromJSON(object: any): _153.MsgDeactivateIID;
                toJSON(message: _153.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_153.MsgDeactivateIID>): _153.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _153.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteIidContext;
                fromJSON(object: any): _153.MsgDeleteIidContext;
                toJSON(message: _153.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_153.MsgDeleteIidContext>): _153.MsgDeleteIidContext;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _153.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _153.MsgAddLinkedResourceResponse;
                toJSON(_: _153.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddLinkedResourceResponse>): _153.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _153.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _153.MsgDeleteLinkedResourceResponse;
                toJSON(_: _153.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeleteLinkedResourceResponse>): _153.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedClaimResponse: {
                encode(_: _153.MsgAddLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddLinkedClaimResponse;
                fromJSON(_: any): _153.MsgAddLinkedClaimResponse;
                toJSON(_: _153.MsgAddLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddLinkedClaimResponse>): _153.MsgAddLinkedClaimResponse;
            };
            MsgDeleteLinkedClaimResponse: {
                encode(_: _153.MsgDeleteLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteLinkedClaimResponse;
                fromJSON(_: any): _153.MsgDeleteLinkedClaimResponse;
                toJSON(_: _153.MsgDeleteLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeleteLinkedClaimResponse>): _153.MsgDeleteLinkedClaimResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _153.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _153.MsgAddLinkedEntityResponse;
                toJSON(_: _153.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddLinkedEntityResponse>): _153.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _153.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _153.MsgDeleteLinkedEntityResponse;
                toJSON(_: _153.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeleteLinkedEntityResponse>): _153.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _153.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddAccordedRightResponse;
                fromJSON(_: any): _153.MsgAddAccordedRightResponse;
                toJSON(_: _153.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddAccordedRightResponse>): _153.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _153.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _153.MsgDeleteAccordedRightResponse;
                toJSON(_: _153.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeleteAccordedRightResponse>): _153.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _153.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddIidContextResponse;
                fromJSON(_: any): _153.MsgAddIidContextResponse;
                toJSON(_: _153.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_153.MsgAddIidContextResponse>): _153.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _153.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeleteIidContextResponse;
                fromJSON(_: any): _153.MsgDeleteIidContextResponse;
                toJSON(_: _153.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeleteIidContextResponse>): _153.MsgDeleteIidContextResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _153.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeactivateIIDResponse;
                fromJSON(_: any): _153.MsgDeactivateIIDResponse;
                toJSON(_: _153.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_153.MsgDeactivateIIDResponse>): _153.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _152.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryIidDocumentsRequest;
                fromJSON(object: any): _152.QueryIidDocumentsRequest;
                toJSON(message: _152.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_152.QueryIidDocumentsRequest>): _152.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _152.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryIidDocumentsResponse;
                fromJSON(object: any): _152.QueryIidDocumentsResponse;
                toJSON(message: _152.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_152.QueryIidDocumentsResponse>): _152.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _152.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryIidDocumentRequest;
                fromJSON(object: any): _152.QueryIidDocumentRequest;
                toJSON(message: _152.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_152.QueryIidDocumentRequest>): _152.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _152.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryIidDocumentResponse;
                fromJSON(object: any): _152.QueryIidDocumentResponse;
                toJSON(message: _152.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_152.QueryIidDocumentResponse>): _152.QueryIidDocumentResponse;
            };
            IidDocument: {
                encode(message: _151.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.IidDocument;
                fromJSON(object: any): _151.IidDocument;
                toJSON(message: _151.IidDocument): unknown;
                fromPartial(object: Partial<_151.IidDocument>): _151.IidDocument;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(object: any): _150.GenesisState;
                toJSON(message: _150.GenesisState): unknown;
                fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _149.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.IidDocumentCreatedEvent;
                fromJSON(object: any): _149.IidDocumentCreatedEvent;
                toJSON(message: _149.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_149.IidDocumentCreatedEvent>): _149.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _149.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.IidDocumentUpdatedEvent;
                fromJSON(object: any): _149.IidDocumentUpdatedEvent;
                toJSON(message: _149.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_149.IidDocumentUpdatedEvent>): _149.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace payments {
        const v1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                paymentTemplate(request: _157.QueryPaymentTemplateRequest): Promise<_157.QueryPaymentTemplateResponse>;
                paymentContract(request: _157.QueryPaymentContractRequest): Promise<_157.QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: _157.QueryPaymentContractsByIdPrefixRequest): Promise<_157.QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: _157.QuerySubscriptionRequest): Promise<_157.QuerySubscriptionResponse>;
            };
            MsgSetPaymentContractAuthorisation: {
                encode(message: _158.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetPaymentContractAuthorisation;
                fromJSON(object: any): _158.MsgSetPaymentContractAuthorisation;
                toJSON(message: _158.MsgSetPaymentContractAuthorisation): unknown;
                fromPartial(object: Partial<_158.MsgSetPaymentContractAuthorisation>): _158.MsgSetPaymentContractAuthorisation;
            };
            MsgSetPaymentContractAuthorisationResponse: {
                encode(_: _158.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetPaymentContractAuthorisationResponse;
                fromJSON(_: any): _158.MsgSetPaymentContractAuthorisationResponse;
                toJSON(_: _158.MsgSetPaymentContractAuthorisationResponse): unknown;
                fromPartial(_: Partial<_158.MsgSetPaymentContractAuthorisationResponse>): _158.MsgSetPaymentContractAuthorisationResponse;
            };
            MsgCreatePaymentTemplate: {
                encode(message: _158.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCreatePaymentTemplate;
                fromJSON(object: any): _158.MsgCreatePaymentTemplate;
                toJSON(message: _158.MsgCreatePaymentTemplate): unknown;
                fromPartial(object: Partial<_158.MsgCreatePaymentTemplate>): _158.MsgCreatePaymentTemplate;
            };
            MsgCreatePaymentTemplateResponse: {
                encode(_: _158.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCreatePaymentTemplateResponse;
                fromJSON(_: any): _158.MsgCreatePaymentTemplateResponse;
                toJSON(_: _158.MsgCreatePaymentTemplateResponse): unknown;
                fromPartial(_: Partial<_158.MsgCreatePaymentTemplateResponse>): _158.MsgCreatePaymentTemplateResponse;
            };
            MsgCreatePaymentContract: {
                encode(message: _158.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCreatePaymentContract;
                fromJSON(object: any): _158.MsgCreatePaymentContract;
                toJSON(message: _158.MsgCreatePaymentContract): unknown;
                fromPartial(object: Partial<_158.MsgCreatePaymentContract>): _158.MsgCreatePaymentContract;
            };
            MsgCreatePaymentContractResponse: {
                encode(_: _158.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCreatePaymentContractResponse;
                fromJSON(_: any): _158.MsgCreatePaymentContractResponse;
                toJSON(_: _158.MsgCreatePaymentContractResponse): unknown;
                fromPartial(_: Partial<_158.MsgCreatePaymentContractResponse>): _158.MsgCreatePaymentContractResponse;
            };
            MsgCreateSubscription: {
                encode(message: _158.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCreateSubscription;
                fromJSON(object: any): _158.MsgCreateSubscription;
                toJSON(message: _158.MsgCreateSubscription): unknown;
                fromPartial(object: Partial<_158.MsgCreateSubscription>): _158.MsgCreateSubscription;
            };
            MsgCreateSubscriptionResponse: {
                encode(_: _158.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCreateSubscriptionResponse;
                fromJSON(_: any): _158.MsgCreateSubscriptionResponse;
                toJSON(_: _158.MsgCreateSubscriptionResponse): unknown;
                fromPartial(_: Partial<_158.MsgCreateSubscriptionResponse>): _158.MsgCreateSubscriptionResponse;
            };
            MsgGrantDiscount: {
                encode(message: _158.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgGrantDiscount;
                fromJSON(object: any): _158.MsgGrantDiscount;
                toJSON(message: _158.MsgGrantDiscount): unknown;
                fromPartial(object: Partial<_158.MsgGrantDiscount>): _158.MsgGrantDiscount;
            };
            MsgGrantDiscountResponse: {
                encode(_: _158.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgGrantDiscountResponse;
                fromJSON(_: any): _158.MsgGrantDiscountResponse;
                toJSON(_: _158.MsgGrantDiscountResponse): unknown;
                fromPartial(_: Partial<_158.MsgGrantDiscountResponse>): _158.MsgGrantDiscountResponse;
            };
            MsgRevokeDiscount: {
                encode(message: _158.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgRevokeDiscount;
                fromJSON(object: any): _158.MsgRevokeDiscount;
                toJSON(message: _158.MsgRevokeDiscount): unknown;
                fromPartial(object: Partial<_158.MsgRevokeDiscount>): _158.MsgRevokeDiscount;
            };
            MsgRevokeDiscountResponse: {
                encode(_: _158.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgRevokeDiscountResponse;
                fromJSON(_: any): _158.MsgRevokeDiscountResponse;
                toJSON(_: _158.MsgRevokeDiscountResponse): unknown;
                fromPartial(_: Partial<_158.MsgRevokeDiscountResponse>): _158.MsgRevokeDiscountResponse;
            };
            MsgEffectPayment: {
                encode(message: _158.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgEffectPayment;
                fromJSON(object: any): _158.MsgEffectPayment;
                toJSON(message: _158.MsgEffectPayment): unknown;
                fromPartial(object: Partial<_158.MsgEffectPayment>): _158.MsgEffectPayment;
            };
            MsgEffectPaymentResponse: {
                encode(_: _158.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgEffectPaymentResponse;
                fromJSON(_: any): _158.MsgEffectPaymentResponse;
                toJSON(_: _158.MsgEffectPaymentResponse): unknown;
                fromPartial(_: Partial<_158.MsgEffectPaymentResponse>): _158.MsgEffectPaymentResponse;
            };
            QueryPaymentTemplateRequest: {
                encode(message: _157.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryPaymentTemplateRequest;
                fromJSON(object: any): _157.QueryPaymentTemplateRequest;
                toJSON(message: _157.QueryPaymentTemplateRequest): unknown;
                fromPartial(object: Partial<_157.QueryPaymentTemplateRequest>): _157.QueryPaymentTemplateRequest;
            };
            QueryPaymentTemplateResponse: {
                encode(message: _157.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryPaymentTemplateResponse;
                fromJSON(object: any): _157.QueryPaymentTemplateResponse;
                toJSON(message: _157.QueryPaymentTemplateResponse): unknown;
                fromPartial(object: Partial<_157.QueryPaymentTemplateResponse>): _157.QueryPaymentTemplateResponse;
            };
            QueryPaymentContractRequest: {
                encode(message: _157.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryPaymentContractRequest;
                fromJSON(object: any): _157.QueryPaymentContractRequest;
                toJSON(message: _157.QueryPaymentContractRequest): unknown;
                fromPartial(object: Partial<_157.QueryPaymentContractRequest>): _157.QueryPaymentContractRequest;
            };
            QueryPaymentContractResponse: {
                encode(message: _157.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryPaymentContractResponse;
                fromJSON(object: any): _157.QueryPaymentContractResponse;
                toJSON(message: _157.QueryPaymentContractResponse): unknown;
                fromPartial(object: Partial<_157.QueryPaymentContractResponse>): _157.QueryPaymentContractResponse;
            };
            QueryPaymentContractsByIdPrefixRequest: {
                encode(message: _157.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryPaymentContractsByIdPrefixRequest;
                fromJSON(object: any): _157.QueryPaymentContractsByIdPrefixRequest;
                toJSON(message: _157.QueryPaymentContractsByIdPrefixRequest): unknown;
                fromPartial(object: Partial<_157.QueryPaymentContractsByIdPrefixRequest>): _157.QueryPaymentContractsByIdPrefixRequest;
            };
            QueryPaymentContractsByIdPrefixResponse: {
                encode(message: _157.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryPaymentContractsByIdPrefixResponse;
                fromJSON(object: any): _157.QueryPaymentContractsByIdPrefixResponse;
                toJSON(message: _157.QueryPaymentContractsByIdPrefixResponse): unknown;
                fromPartial(object: Partial<_157.QueryPaymentContractsByIdPrefixResponse>): _157.QueryPaymentContractsByIdPrefixResponse;
            };
            QuerySubscriptionRequest: {
                encode(message: _157.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QuerySubscriptionRequest;
                fromJSON(object: any): _157.QuerySubscriptionRequest;
                toJSON(message: _157.QuerySubscriptionRequest): unknown;
                fromPartial(object: Partial<_157.QuerySubscriptionRequest>): _157.QuerySubscriptionRequest;
            };
            QuerySubscriptionResponse: {
                encode(message: _157.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QuerySubscriptionResponse;
                fromJSON(object: any): _157.QuerySubscriptionResponse;
                toJSON(message: _157.QuerySubscriptionResponse): unknown;
                fromPartial(object: Partial<_157.QuerySubscriptionResponse>): _157.QuerySubscriptionResponse;
            };
            PaymentTemplate: {
                encode(message: _156.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PaymentTemplate;
                fromJSON(object: any): _156.PaymentTemplate;
                toJSON(message: _156.PaymentTemplate): unknown;
                fromPartial(object: Partial<_156.PaymentTemplate>): _156.PaymentTemplate;
            };
            Discount: {
                encode(message: _156.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Discount;
                fromJSON(object: any): _156.Discount;
                toJSON(message: _156.Discount): unknown;
                fromPartial(object: Partial<_156.Discount>): _156.Discount;
            };
            DistributionShare: {
                encode(message: _156.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.DistributionShare;
                fromJSON(object: any): _156.DistributionShare;
                toJSON(message: _156.DistributionShare): unknown;
                fromPartial(object: Partial<_156.DistributionShare>): _156.DistributionShare;
            };
            PaymentContract: {
                encode(message: _156.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PaymentContract;
                fromJSON(object: any): _156.PaymentContract;
                toJSON(message: _156.PaymentContract): unknown;
                fromPartial(object: Partial<_156.PaymentContract>): _156.PaymentContract;
            };
            Subscription: {
                encode(message: _156.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Subscription;
                fromJSON(object: any): _156.Subscription;
                toJSON(message: _156.Subscription): unknown;
                fromPartial(object: Partial<_156.Subscription>): _156.Subscription;
            };
            BlockPeriod: {
                encode(message: _156.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BlockPeriod;
                fromJSON(object: any): _156.BlockPeriod;
                toJSON(message: _156.BlockPeriod): unknown;
                fromPartial(object: Partial<_156.BlockPeriod>): _156.BlockPeriod;
            };
            TimePeriod: {
                encode(message: _156.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.TimePeriod;
                fromJSON(object: any): _156.TimePeriod;
                toJSON(message: _156.TimePeriod): unknown;
                fromPartial(object: Partial<_156.TimePeriod>): _156.TimePeriod;
            };
            TestPeriod: {
                encode(message: _156.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.TestPeriod;
                fromJSON(object: any): _156.TestPeriod;
                toJSON(message: _156.TestPeriod): unknown;
                fromPartial(object: Partial<_156.TestPeriod>): _156.TestPeriod;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromJSON(object: any): _155.GenesisState;
                toJSON(message: _155.GenesisState): unknown;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
            };
        };
    }
    namespace project {
        const v1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                projectDoc(request: _161.QueryProjectDocRequest): Promise<_161.QueryProjectDocResponse>;
                projectAccounts(request: _161.QueryProjectAccountsRequest): Promise<_161.QueryProjectAccountsResponse>;
                projectTx(request: _161.QueryProjectTxRequest): Promise<_161.QueryProjectTxResponse>;
                params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
            };
            MsgCreateProject: {
                encode(message: _162.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateProject;
                fromJSON(object: any): _162.MsgCreateProject;
                toJSON(message: _162.MsgCreateProject): unknown;
                fromPartial(object: Partial<_162.MsgCreateProject>): _162.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(_: _162.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateProjectResponse;
                fromJSON(_: any): _162.MsgCreateProjectResponse;
                toJSON(_: _162.MsgCreateProjectResponse): unknown;
                fromPartial(_: Partial<_162.MsgCreateProjectResponse>): _162.MsgCreateProjectResponse;
            };
            MsgUpdateProjectStatus: {
                encode(message: _162.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateProjectStatus;
                fromJSON(object: any): _162.MsgUpdateProjectStatus;
                toJSON(message: _162.MsgUpdateProjectStatus): unknown;
                fromPartial(object: Partial<_162.MsgUpdateProjectStatus>): _162.MsgUpdateProjectStatus;
            };
            MsgUpdateProjectStatusResponse: {
                encode(_: _162.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateProjectStatusResponse;
                fromJSON(_: any): _162.MsgUpdateProjectStatusResponse;
                toJSON(_: _162.MsgUpdateProjectStatusResponse): unknown;
                fromPartial(_: Partial<_162.MsgUpdateProjectStatusResponse>): _162.MsgUpdateProjectStatusResponse;
            };
            MsgCreateAgent: {
                encode(message: _162.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateAgent;
                fromJSON(object: any): _162.MsgCreateAgent;
                toJSON(message: _162.MsgCreateAgent): unknown;
                fromPartial(object: Partial<_162.MsgCreateAgent>): _162.MsgCreateAgent;
            };
            MsgCreateAgentResponse: {
                encode(_: _162.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateAgentResponse;
                fromJSON(_: any): _162.MsgCreateAgentResponse;
                toJSON(_: _162.MsgCreateAgentResponse): unknown;
                fromPartial(_: Partial<_162.MsgCreateAgentResponse>): _162.MsgCreateAgentResponse;
            };
            MsgUpdateAgent: {
                encode(message: _162.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateAgent;
                fromJSON(object: any): _162.MsgUpdateAgent;
                toJSON(message: _162.MsgUpdateAgent): unknown;
                fromPartial(object: Partial<_162.MsgUpdateAgent>): _162.MsgUpdateAgent;
            };
            MsgUpdateAgentResponse: {
                encode(_: _162.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateAgentResponse;
                fromJSON(_: any): _162.MsgUpdateAgentResponse;
                toJSON(_: _162.MsgUpdateAgentResponse): unknown;
                fromPartial(_: Partial<_162.MsgUpdateAgentResponse>): _162.MsgUpdateAgentResponse;
            };
            MsgCreateClaim: {
                encode(message: _162.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateClaim;
                fromJSON(object: any): _162.MsgCreateClaim;
                toJSON(message: _162.MsgCreateClaim): unknown;
                fromPartial(object: Partial<_162.MsgCreateClaim>): _162.MsgCreateClaim;
            };
            MsgCreateClaimResponse: {
                encode(_: _162.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateClaimResponse;
                fromJSON(_: any): _162.MsgCreateClaimResponse;
                toJSON(_: _162.MsgCreateClaimResponse): unknown;
                fromPartial(_: Partial<_162.MsgCreateClaimResponse>): _162.MsgCreateClaimResponse;
            };
            MsgCreateEvaluation: {
                encode(message: _162.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateEvaluation;
                fromJSON(object: any): _162.MsgCreateEvaluation;
                toJSON(message: _162.MsgCreateEvaluation): unknown;
                fromPartial(object: Partial<_162.MsgCreateEvaluation>): _162.MsgCreateEvaluation;
            };
            MsgCreateEvaluationResponse: {
                encode(_: _162.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateEvaluationResponse;
                fromJSON(_: any): _162.MsgCreateEvaluationResponse;
                toJSON(_: _162.MsgCreateEvaluationResponse): unknown;
                fromPartial(_: Partial<_162.MsgCreateEvaluationResponse>): _162.MsgCreateEvaluationResponse;
            };
            MsgWithdrawFunds: {
                encode(message: _162.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgWithdrawFunds;
                fromJSON(object: any): _162.MsgWithdrawFunds;
                toJSON(message: _162.MsgWithdrawFunds): unknown;
                fromPartial(object: Partial<_162.MsgWithdrawFunds>): _162.MsgWithdrawFunds;
            };
            MsgWithdrawFundsResponse: {
                encode(_: _162.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgWithdrawFundsResponse;
                fromJSON(_: any): _162.MsgWithdrawFundsResponse;
                toJSON(_: _162.MsgWithdrawFundsResponse): unknown;
                fromPartial(_: Partial<_162.MsgWithdrawFundsResponse>): _162.MsgWithdrawFundsResponse;
            };
            MsgUpdateProjectDoc: {
                encode(message: _162.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateProjectDoc;
                fromJSON(object: any): _162.MsgUpdateProjectDoc;
                toJSON(message: _162.MsgUpdateProjectDoc): unknown;
                fromPartial(object: Partial<_162.MsgUpdateProjectDoc>): _162.MsgUpdateProjectDoc;
            };
            MsgUpdateProjectDocResponse: {
                encode(_: _162.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateProjectDocResponse;
                fromJSON(_: any): _162.MsgUpdateProjectDocResponse;
                toJSON(_: _162.MsgUpdateProjectDocResponse): unknown;
                fromPartial(_: Partial<_162.MsgUpdateProjectDocResponse>): _162.MsgUpdateProjectDocResponse;
            };
            QueryProjectDocRequest: {
                encode(message: _161.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryProjectDocRequest;
                fromJSON(object: any): _161.QueryProjectDocRequest;
                toJSON(message: _161.QueryProjectDocRequest): unknown;
                fromPartial(object: Partial<_161.QueryProjectDocRequest>): _161.QueryProjectDocRequest;
            };
            QueryProjectDocResponse: {
                encode(message: _161.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryProjectDocResponse;
                fromJSON(object: any): _161.QueryProjectDocResponse;
                toJSON(message: _161.QueryProjectDocResponse): unknown;
                fromPartial(object: Partial<_161.QueryProjectDocResponse>): _161.QueryProjectDocResponse;
            };
            QueryProjectAccountsRequest: {
                encode(message: _161.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryProjectAccountsRequest;
                fromJSON(object: any): _161.QueryProjectAccountsRequest;
                toJSON(message: _161.QueryProjectAccountsRequest): unknown;
                fromPartial(object: Partial<_161.QueryProjectAccountsRequest>): _161.QueryProjectAccountsRequest;
            };
            QueryProjectAccountsResponse: {
                encode(message: _161.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryProjectAccountsResponse;
                fromJSON(object: any): _161.QueryProjectAccountsResponse;
                toJSON(message: _161.QueryProjectAccountsResponse): unknown;
                fromPartial(object: Partial<_161.QueryProjectAccountsResponse>): _161.QueryProjectAccountsResponse;
            };
            QueryProjectTxRequest: {
                encode(message: _161.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryProjectTxRequest;
                fromJSON(object: any): _161.QueryProjectTxRequest;
                toJSON(message: _161.QueryProjectTxRequest): unknown;
                fromPartial(object: Partial<_161.QueryProjectTxRequest>): _161.QueryProjectTxRequest;
            };
            QueryProjectTxResponse: {
                encode(message: _161.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryProjectTxResponse;
                fromJSON(object: any): _161.QueryProjectTxResponse;
                toJSON(message: _161.QueryProjectTxResponse): unknown;
                fromPartial(object: Partial<_161.QueryProjectTxResponse>): _161.QueryProjectTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _161.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsRequest;
                fromJSON(_: any): _161.QueryParamsRequest;
                toJSON(_: _161.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_161.QueryParamsRequest>): _161.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _161.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsResponse;
                fromJSON(object: any): _161.QueryParamsResponse;
                toJSON(message: _161.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_161.QueryParamsResponse>): _161.QueryParamsResponse;
            };
            UpdateProjectStatusDoc: {
                encode(message: _160.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.UpdateProjectStatusDoc;
                fromJSON(object: any): _160.UpdateProjectStatusDoc;
                toJSON(message: _160.UpdateProjectStatusDoc): unknown;
                fromPartial(object: Partial<_160.UpdateProjectStatusDoc>): _160.UpdateProjectStatusDoc;
            };
            CreateAgentDoc: {
                encode(message: _160.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.CreateAgentDoc;
                fromJSON(object: any): _160.CreateAgentDoc;
                toJSON(message: _160.CreateAgentDoc): unknown;
                fromPartial(object: Partial<_160.CreateAgentDoc>): _160.CreateAgentDoc;
            };
            UpdateAgentDoc: {
                encode(message: _160.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.UpdateAgentDoc;
                fromJSON(object: any): _160.UpdateAgentDoc;
                toJSON(message: _160.UpdateAgentDoc): unknown;
                fromPartial(object: Partial<_160.UpdateAgentDoc>): _160.UpdateAgentDoc;
            };
            CreateClaimDoc: {
                encode(message: _160.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.CreateClaimDoc;
                fromJSON(object: any): _160.CreateClaimDoc;
                toJSON(message: _160.CreateClaimDoc): unknown;
                fromPartial(object: Partial<_160.CreateClaimDoc>): _160.CreateClaimDoc;
            };
            CreateEvaluationDoc: {
                encode(message: _160.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.CreateEvaluationDoc;
                fromJSON(object: any): _160.CreateEvaluationDoc;
                toJSON(message: _160.CreateEvaluationDoc): unknown;
                fromPartial(object: Partial<_160.CreateEvaluationDoc>): _160.CreateEvaluationDoc;
            };
            WithdrawFundsDoc: {
                encode(message: _160.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.WithdrawFundsDoc;
                fromJSON(object: any): _160.WithdrawFundsDoc;
                toJSON(message: _160.WithdrawFundsDoc): unknown;
                fromPartial(object: Partial<_160.WithdrawFundsDoc>): _160.WithdrawFundsDoc;
            };
            ProjectDoc: {
                encode(message: _160.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ProjectDoc;
                fromJSON(object: any): _160.ProjectDoc;
                toJSON(message: _160.ProjectDoc): unknown;
                fromPartial(object: Partial<_160.ProjectDoc>): _160.ProjectDoc;
            };
            WithdrawalInfoDoc: {
                encode(message: _160.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.WithdrawalInfoDoc;
                fromJSON(object: any): _160.WithdrawalInfoDoc;
                toJSON(message: _160.WithdrawalInfoDoc): unknown;
                fromPartial(object: Partial<_160.WithdrawalInfoDoc>): _160.WithdrawalInfoDoc;
            };
            Params: {
                encode(message: _160.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Params;
                fromJSON(object: any): _160.Params;
                toJSON(message: _160.Params): unknown;
                fromPartial(object: Partial<_160.Params>): _160.Params;
            };
            Claim: {
                encode(message: _160.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Claim;
                fromJSON(object: any): _160.Claim;
                toJSON(message: _160.Claim): unknown;
                fromPartial(object: Partial<_160.Claim>): _160.Claim;
            };
            GenesisAccountMap_MapEntry: {
                encode(message: _160.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisAccountMap_MapEntry;
                fromJSON(object: any): _160.GenesisAccountMap_MapEntry;
                toJSON(message: _160.GenesisAccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_160.GenesisAccountMap_MapEntry>): _160.GenesisAccountMap_MapEntry;
            };
            GenesisAccountMap: {
                encode(message: _160.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisAccountMap;
                fromJSON(object: any): _160.GenesisAccountMap;
                toJSON(message: _160.GenesisAccountMap): unknown;
                fromPartial(object: Partial<_160.GenesisAccountMap>): _160.GenesisAccountMap;
            };
            AccountMap_MapEntry: {
                encode(message: _160.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AccountMap_MapEntry;
                fromJSON(object: any): _160.AccountMap_MapEntry;
                toJSON(message: _160.AccountMap_MapEntry): unknown;
                fromPartial(object: Partial<_160.AccountMap_MapEntry>): _160.AccountMap_MapEntry;
            };
            AccountMap: {
                encode(message: _160.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AccountMap;
                fromJSON(object: any): _160.AccountMap;
                toJSON(message: _160.AccountMap): unknown;
                fromPartial(object: Partial<_160.AccountMap>): _160.AccountMap;
            };
            WithdrawalInfoDocs: {
                encode(message: _160.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.WithdrawalInfoDocs;
                fromJSON(object: any): _160.WithdrawalInfoDocs;
                toJSON(message: _160.WithdrawalInfoDocs): unknown;
                fromPartial(object: Partial<_160.WithdrawalInfoDocs>): _160.WithdrawalInfoDocs;
            };
            Claims: {
                encode(message: _160.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Claims;
                fromJSON(object: any): _160.Claims;
                toJSON(message: _160.Claims): unknown;
                fromPartial(object: Partial<_160.Claims>): _160.Claims;
            };
            GenesisState: {
                encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                fromJSON(object: any): _159.GenesisState;
                toJSON(message: _159.GenesisState): unknown;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                tokenList(request: _167.QueryTokenListRequest): Promise<_167.QueryTokenListResponse>;
                tokenDoc(request: _167.QueryTokenDocRequest): Promise<_167.QueryTokenDocResponse>;
                tokenMetadata(request: _167.QueryTokenMetadataRequest): Promise<_167.QueryTokenMetadataResponse>;
            };
            MsgCreateToken: {
                encode(message: _169.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgCreateToken;
                fromJSON(object: any): _169.MsgCreateToken;
                toJSON(message: _169.MsgCreateToken): unknown;
                fromPartial(object: Partial<_169.MsgCreateToken>): _169.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _169.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgCreateTokenResponse;
                fromJSON(_: any): _169.MsgCreateTokenResponse;
                toJSON(_: _169.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_169.MsgCreateTokenResponse>): _169.MsgCreateTokenResponse;
            };
            MsgMintToken: {
                encode(message: _169.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgMintToken;
                fromJSON(object: any): _169.MsgMintToken;
                toJSON(message: _169.MsgMintToken): unknown;
                fromPartial(object: Partial<_169.MsgMintToken>): _169.MsgMintToken;
            };
            MintBatch: {
                encode(message: _169.MintBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MintBatch;
                fromJSON(object: any): _169.MintBatch;
                toJSON(message: _169.MintBatch): unknown;
                fromPartial(object: Partial<_169.MintBatch>): _169.MintBatch;
            };
            MsgMintTokenResponse: {
                encode(_: _169.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgMintTokenResponse;
                fromJSON(_: any): _169.MsgMintTokenResponse;
                toJSON(_: _169.MsgMintTokenResponse): unknown;
                fromPartial(_: Partial<_169.MsgMintTokenResponse>): _169.MsgMintTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _169.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgTransferToken;
                fromJSON(object: any): _169.MsgTransferToken;
                toJSON(message: _169.MsgTransferToken): unknown;
                fromPartial(object: Partial<_169.MsgTransferToken>): _169.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _169.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgTransferTokenResponse;
                fromJSON(_: any): _169.MsgTransferTokenResponse;
                toJSON(_: _169.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_169.MsgTransferTokenResponse>): _169.MsgTransferTokenResponse;
            };
            TokenBatch: {
                encode(message: _169.TokenBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenBatch;
                fromJSON(object: any): _169.TokenBatch;
                toJSON(message: _169.TokenBatch): unknown;
                fromPartial(object: Partial<_169.TokenBatch>): _169.TokenBatch;
            };
            MsgRetireToken: {
                encode(message: _169.MsgRetireToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgRetireToken;
                fromJSON(object: any): _169.MsgRetireToken;
                toJSON(message: _169.MsgRetireToken): unknown;
                fromPartial(object: Partial<_169.MsgRetireToken>): _169.MsgRetireToken;
            };
            MsgRetireTokenResponse: {
                encode(_: _169.MsgRetireTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgRetireTokenResponse;
                fromJSON(_: any): _169.MsgRetireTokenResponse;
                toJSON(_: _169.MsgRetireTokenResponse): unknown;
                fromPartial(_: Partial<_169.MsgRetireTokenResponse>): _169.MsgRetireTokenResponse;
            };
            MsgCancelToken: {
                encode(message: _169.MsgCancelToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgCancelToken;
                fromJSON(object: any): _169.MsgCancelToken;
                toJSON(message: _169.MsgCancelToken): unknown;
                fromPartial(object: Partial<_169.MsgCancelToken>): _169.MsgCancelToken;
            };
            MsgCancelTokenResponse: {
                encode(_: _169.MsgCancelTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgCancelTokenResponse;
                fromJSON(_: any): _169.MsgCancelTokenResponse;
                toJSON(_: _169.MsgCancelTokenResponse): unknown;
                fromPartial(_: Partial<_169.MsgCancelTokenResponse>): _169.MsgCancelTokenResponse;
            };
            MsgPauseToken: {
                encode(message: _169.MsgPauseToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgPauseToken;
                fromJSON(object: any): _169.MsgPauseToken;
                toJSON(message: _169.MsgPauseToken): unknown;
                fromPartial(object: Partial<_169.MsgPauseToken>): _169.MsgPauseToken;
            };
            MsgPauseTokenResponse: {
                encode(_: _169.MsgPauseTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgPauseTokenResponse;
                fromJSON(_: any): _169.MsgPauseTokenResponse;
                toJSON(_: _169.MsgPauseTokenResponse): unknown;
                fromPartial(_: Partial<_169.MsgPauseTokenResponse>): _169.MsgPauseTokenResponse;
            };
            MsgStopToken: {
                encode(message: _169.MsgStopToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgStopToken;
                fromJSON(object: any): _169.MsgStopToken;
                toJSON(message: _169.MsgStopToken): unknown;
                fromPartial(object: Partial<_169.MsgStopToken>): _169.MsgStopToken;
            };
            MsgStopTokenResponse: {
                encode(_: _169.MsgStopTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgStopTokenResponse;
                fromJSON(_: any): _169.MsgStopTokenResponse;
                toJSON(_: _169.MsgStopTokenResponse): unknown;
                fromPartial(_: Partial<_169.MsgStopTokenResponse>): _169.MsgStopTokenResponse;
            };
            Params: {
                encode(message: _168.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Params;
                fromJSON(object: any): _168.Params;
                toJSON(message: _168.Params): unknown;
                fromPartial(object: Partial<_168.Params>): _168.Params;
            };
            Token: {
                encode(message: _168.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Token;
                fromJSON(object: any): _168.Token;
                toJSON(message: _168.Token): unknown;
                fromPartial(object: Partial<_168.Token>): _168.Token;
            };
            TokensRetired: {
                encode(message: _168.TokensRetired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.TokensRetired;
                fromJSON(object: any): _168.TokensRetired;
                toJSON(message: _168.TokensRetired): unknown;
                fromPartial(object: Partial<_168.TokensRetired>): _168.TokensRetired;
            };
            TokensCancelled: {
                encode(message: _168.TokensCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.TokensCancelled;
                fromJSON(object: any): _168.TokensCancelled;
                toJSON(message: _168.TokensCancelled): unknown;
                fromPartial(object: Partial<_168.TokensCancelled>): _168.TokensCancelled;
            };
            TokenProperties: {
                encode(message: _168.TokenProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.TokenProperties;
                fromJSON(object: any): _168.TokenProperties;
                toJSON(message: _168.TokenProperties): unknown;
                fromPartial(object: Partial<_168.TokenProperties>): _168.TokenProperties;
            };
            TokenData: {
                encode(message: _168.TokenData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.TokenData;
                fromJSON(object: any): _168.TokenData;
                toJSON(message: _168.TokenData): unknown;
                fromPartial(object: Partial<_168.TokenData>): _168.TokenData;
            };
            QueryParamsRequest: {
                encode(_: _167.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsRequest;
                fromJSON(_: any): _167.QueryParamsRequest;
                toJSON(_: _167.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_167.QueryParamsRequest>): _167.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _167.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsResponse;
                fromJSON(object: any): _167.QueryParamsResponse;
                toJSON(message: _167.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_167.QueryParamsResponse>): _167.QueryParamsResponse;
            };
            QueryTokenListRequest: {
                encode(message: _167.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTokenListRequest;
                fromJSON(object: any): _167.QueryTokenListRequest;
                toJSON(message: _167.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_167.QueryTokenListRequest>): _167.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _167.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTokenListResponse;
                fromJSON(object: any): _167.QueryTokenListResponse;
                toJSON(message: _167.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_167.QueryTokenListResponse>): _167.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _167.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTokenDocRequest;
                fromJSON(object: any): _167.QueryTokenDocRequest;
                toJSON(message: _167.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_167.QueryTokenDocRequest>): _167.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(message: _167.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTokenDocResponse;
                fromJSON(object: any): _167.QueryTokenDocResponse;
                toJSON(message: _167.QueryTokenDocResponse): unknown;
                fromPartial(object: Partial<_167.QueryTokenDocResponse>): _167.QueryTokenDocResponse;
            };
            QueryTokenMetadataRequest: {
                encode(message: _167.QueryTokenMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTokenMetadataRequest;
                fromJSON(object: any): _167.QueryTokenMetadataRequest;
                toJSON(message: _167.QueryTokenMetadataRequest): unknown;
                fromPartial(object: Partial<_167.QueryTokenMetadataRequest>): _167.QueryTokenMetadataRequest;
            };
            QueryTokenMetadataResponse: {
                encode(message: _167.QueryTokenMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTokenMetadataResponse;
                fromJSON(object: any): _167.QueryTokenMetadataResponse;
                toJSON(message: _167.QueryTokenMetadataResponse): unknown;
                fromPartial(object: Partial<_167.QueryTokenMetadataResponse>): _167.QueryTokenMetadataResponse;
            };
            TokenMetadataProperties: {
                encode(message: _167.TokenMetadataProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.TokenMetadataProperties;
                fromJSON(object: any): _167.TokenMetadataProperties;
                toJSON(message: _167.TokenMetadataProperties): unknown;
                fromPartial(object: Partial<_167.TokenMetadataProperties>): _167.TokenMetadataProperties;
            };
            SetTokenContractCodes: {
                encode(message: _166.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.SetTokenContractCodes;
                fromJSON(object: any): _166.SetTokenContractCodes;
                toJSON(message: _166.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_166.SetTokenContractCodes>): _166.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _165.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisState;
                fromJSON(object: any): _165.GenesisState;
                toJSON(message: _165.GenesisState): unknown;
                fromPartial(object: Partial<_165.GenesisState>): _165.GenesisState;
            };
            TokenCreatedEvent: {
                encode(message: _164.TokenCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenCreatedEvent;
                fromJSON(object: any): _164.TokenCreatedEvent;
                toJSON(message: _164.TokenCreatedEvent): unknown;
                fromPartial(object: Partial<_164.TokenCreatedEvent>): _164.TokenCreatedEvent;
            };
            TokenUpdatedEvent: {
                encode(message: _164.TokenUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenUpdatedEvent;
                fromJSON(object: any): _164.TokenUpdatedEvent;
                toJSON(message: _164.TokenUpdatedEvent): unknown;
                fromPartial(object: Partial<_164.TokenUpdatedEvent>): _164.TokenUpdatedEvent;
            };
            TokenMintedEvent: {
                encode(message: _164.TokenMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenMintedEvent;
                fromJSON(object: any): _164.TokenMintedEvent;
                toJSON(message: _164.TokenMintedEvent): unknown;
                fromPartial(object: Partial<_164.TokenMintedEvent>): _164.TokenMintedEvent;
            };
            TokenTransferredEvent: {
                encode(message: _164.TokenTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenTransferredEvent;
                fromJSON(object: any): _164.TokenTransferredEvent;
                toJSON(message: _164.TokenTransferredEvent): unknown;
                fromPartial(object: Partial<_164.TokenTransferredEvent>): _164.TokenTransferredEvent;
            };
            TokenCancelledEvent: {
                encode(message: _164.TokenCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenCancelledEvent;
                fromJSON(object: any): _164.TokenCancelledEvent;
                toJSON(message: _164.TokenCancelledEvent): unknown;
                fromPartial(object: Partial<_164.TokenCancelledEvent>): _164.TokenCancelledEvent;
            };
            TokenRetiredEvent: {
                encode(message: _164.TokenRetiredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenRetiredEvent;
                fromJSON(object: any): _164.TokenRetiredEvent;
                toJSON(message: _164.TokenRetiredEvent): unknown;
                fromPartial(object: Partial<_164.TokenRetiredEvent>): _164.TokenRetiredEvent;
            };
            TokenPausedEvent: {
                encode(message: _164.TokenPausedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenPausedEvent;
                fromJSON(object: any): _164.TokenPausedEvent;
                toJSON(message: _164.TokenPausedEvent): unknown;
                fromPartial(object: Partial<_164.TokenPausedEvent>): _164.TokenPausedEvent;
            };
            TokenStoppedEvent: {
                encode(message: _164.TokenStoppedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TokenStoppedEvent;
                fromJSON(object: any): _164.TokenStoppedEvent;
                toJSON(message: _164.TokenStoppedEvent): unknown;
                fromPartial(object: Partial<_164.TokenStoppedEvent>): _164.TokenStoppedEvent;
            };
            MintAuthorization: {
                encode(message: _163.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MintAuthorization;
                fromJSON(object: any): _163.MintAuthorization;
                toJSON(message: _163.MintAuthorization): unknown;
                fromPartial(object: Partial<_163.MintAuthorization>): _163.MintAuthorization;
            };
            MintConstraints: {
                encode(message: _163.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MintConstraints;
                fromJSON(object: any): _163.MintConstraints;
                toJSON(message: _163.MintConstraints): unknown;
                fromPartial(object: Partial<_163.MintConstraints>): _163.MintConstraints;
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
                    v1beta1: _233.MsgClientImpl;
                };
                claims: {
                    v1beta1: _234.MsgClientImpl;
                };
                entity: {
                    v1beta1: _235.MsgClientImpl;
                };
                iid: {
                    v1beta1: _236.MsgClientImpl;
                };
                payments: {
                    v1: _237.MsgClientImpl;
                };
                project: {
                    v1: _238.MsgClientImpl;
                };
                token: {
                    v1beta1: _239.MsgClientImpl;
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
                        params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                        entity(request: _147.QueryEntityRequest): Promise<_147.QueryEntityResponse>;
                        entityMetaData(request: _147.QueryEntityMetadataRequest): Promise<_147.QueryEntityMetadataResponse>;
                        entityIidDocument(request: _147.QueryEntityIidDocumentRequest): Promise<_147.QueryEntityIidDocumentResponse>;
                        entityVerified(request: _147.QueryEntityVerifiedRequest): Promise<_147.QueryEntityVerifiedResponse>;
                        entityList(request?: _147.QueryEntityListRequest): Promise<_147.QueryEntityListResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request?: _152.QueryIidDocumentsRequest): Promise<_152.QueryIidDocumentsResponse>;
                        iidDocument(request: _152.QueryIidDocumentRequest): Promise<_152.QueryIidDocumentResponse>;
                    };
                };
                payments: {
                    v1: {
                        paymentTemplate(request: _157.QueryPaymentTemplateRequest): Promise<_157.QueryPaymentTemplateResponse>;
                        paymentContract(request: _157.QueryPaymentContractRequest): Promise<_157.QueryPaymentContractResponse>;
                        paymentContractsByIdPrefix(request: _157.QueryPaymentContractsByIdPrefixRequest): Promise<_157.QueryPaymentContractsByIdPrefixResponse>;
                        subscription(request: _157.QuerySubscriptionRequest): Promise<_157.QuerySubscriptionResponse>;
                    };
                };
                project: {
                    v1: {
                        projectDoc(request: _161.QueryProjectDocRequest): Promise<_161.QueryProjectDocResponse>;
                        projectAccounts(request: _161.QueryProjectAccountsRequest): Promise<_161.QueryProjectAccountsResponse>;
                        projectTx(request: _161.QueryProjectTxRequest): Promise<_161.QueryProjectTxResponse>;
                        params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                        tokenList(request: _167.QueryTokenListRequest): Promise<_167.QueryTokenListResponse>;
                        tokenDoc(request: _167.QueryTokenDocRequest): Promise<_167.QueryTokenDocResponse>;
                        tokenMetadata(request: _167.QueryTokenMetadataRequest): Promise<_167.QueryTokenMetadataResponse>;
                    };
                };
            };
        }>;
    };
}
