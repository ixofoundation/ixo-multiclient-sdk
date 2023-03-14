import * as _144 from "./bonds/v1beta1/bonds";
import * as _145 from "./bonds/v1beta1/genesis";
import * as _146 from "./bonds/v1beta1/query";
import * as _147 from "./bonds/v1beta1/tx";
import * as _148 from "./claims/v1beta1/authz";
import * as _149 from "./claims/v1beta1/claims";
import * as _150 from "./claims/v1beta1/cosmos";
import * as _151 from "./claims/v1beta1/event";
import * as _152 from "./claims/v1beta1/genesis";
import * as _153 from "./claims/v1beta1/query";
import * as _154 from "./claims/v1beta1/tx";
import * as _155 from "./entity/v1beta1/cosmos";
import * as _156 from "./entity/v1beta1/entity";
import * as _157 from "./entity/v1beta1/event";
import * as _158 from "./entity/v1beta1/genesis";
import * as _159 from "./entity/v1beta1/proposal";
import * as _160 from "./entity/v1beta1/query";
import * as _161 from "./entity/v1beta1/tx";
import * as _162 from "./iid/v1beta1/event";
import * as _163 from "./iid/v1beta1/genesis";
import * as _164 from "./iid/v1beta1/iid";
import * as _165 from "./iid/v1beta1/query";
import * as _166 from "./iid/v1beta1/tx";
import * as _167 from "./iid/v1beta1/types";
import * as _168 from "./token/v1beta1/authz";
import * as _169 from "./token/v1beta1/event";
import * as _170 from "./token/v1beta1/genesis";
import * as _171 from "./token/v1beta1/proposal";
import * as _172 from "./token/v1beta1/query";
import * as _173 from "./token/v1beta1/token";
import * as _174 from "./token/v1beta1/tx";
import * as _234 from "./bonds/v1beta1/query.rpc.Query";
import * as _235 from "./claims/v1beta1/query.rpc.Query";
import * as _236 from "./entity/v1beta1/query.rpc.Query";
import * as _237 from "./iid/v1beta1/query.rpc.Query";
import * as _238 from "./token/v1beta1/query.rpc.Query";
import * as _239 from "./bonds/v1beta1/tx.rpc.msg";
import * as _240 from "./claims/v1beta1/tx.rpc.msg";
import * as _241 from "./entity/v1beta1/tx.rpc.msg";
import * as _242 from "./iid/v1beta1/tx.rpc.msg";
import * as _243 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                bonds(request?: _146.QueryBondsRequest): Promise<_146.QueryBondsResponse>;
                bondsDetailed(request?: _146.QueryBondsDetailedRequest): Promise<_146.QueryBondsDetailedResponse>;
                params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
                bond(request: _146.QueryBondRequest): Promise<_146.QueryBondResponse>;
                batch(request: _146.QueryBatchRequest): Promise<_146.QueryBatchResponse>;
                lastBatch(request: _146.QueryLastBatchRequest): Promise<_146.QueryLastBatchResponse>;
                currentPrice(request: _146.QueryCurrentPriceRequest): Promise<_146.QueryCurrentPriceResponse>;
                currentReserve(request: _146.QueryCurrentReserveRequest): Promise<_146.QueryCurrentReserveResponse>;
                availableReserve(request: _146.QueryAvailableReserveRequest): Promise<_146.QueryAvailableReserveResponse>;
                customPrice(request: _146.QueryCustomPriceRequest): Promise<_146.QueryCustomPriceResponse>;
                buyPrice(request: _146.QueryBuyPriceRequest): Promise<_146.QueryBuyPriceResponse>;
                sellReturn(request: _146.QuerySellReturnRequest): Promise<_146.QuerySellReturnResponse>;
                swapReturn(request: _146.QuerySwapReturnRequest): Promise<_146.QuerySwapReturnResponse>;
                alphaMaximums(request: _146.QueryAlphaMaximumsRequest): Promise<_146.QueryAlphaMaximumsResponse>;
            };
            MsgCreateBond: {
                encode(message: _147.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateBond;
                fromJSON(object: any): _147.MsgCreateBond;
                toJSON(message: _147.MsgCreateBond): unknown;
                fromPartial(object: Partial<_147.MsgCreateBond>): _147.MsgCreateBond;
            };
            MsgCreateBondResponse: {
                encode(_: _147.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateBondResponse;
                fromJSON(_: any): _147.MsgCreateBondResponse;
                toJSON(_: _147.MsgCreateBondResponse): unknown;
                fromPartial(_: Partial<_147.MsgCreateBondResponse>): _147.MsgCreateBondResponse;
            };
            MsgEditBond: {
                encode(message: _147.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgEditBond;
                fromJSON(object: any): _147.MsgEditBond;
                toJSON(message: _147.MsgEditBond): unknown;
                fromPartial(object: Partial<_147.MsgEditBond>): _147.MsgEditBond;
            };
            MsgEditBondResponse: {
                encode(_: _147.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgEditBondResponse;
                fromJSON(_: any): _147.MsgEditBondResponse;
                toJSON(_: _147.MsgEditBondResponse): unknown;
                fromPartial(_: Partial<_147.MsgEditBondResponse>): _147.MsgEditBondResponse;
            };
            MsgSetNextAlpha: {
                encode(message: _147.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSetNextAlpha;
                fromJSON(object: any): _147.MsgSetNextAlpha;
                toJSON(message: _147.MsgSetNextAlpha): unknown;
                fromPartial(object: Partial<_147.MsgSetNextAlpha>): _147.MsgSetNextAlpha;
            };
            MsgSetNextAlphaResponse: {
                encode(_: _147.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSetNextAlphaResponse;
                fromJSON(_: any): _147.MsgSetNextAlphaResponse;
                toJSON(_: _147.MsgSetNextAlphaResponse): unknown;
                fromPartial(_: Partial<_147.MsgSetNextAlphaResponse>): _147.MsgSetNextAlphaResponse;
            };
            MsgUpdateBondState: {
                encode(message: _147.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateBondState;
                fromJSON(object: any): _147.MsgUpdateBondState;
                toJSON(message: _147.MsgUpdateBondState): unknown;
                fromPartial(object: Partial<_147.MsgUpdateBondState>): _147.MsgUpdateBondState;
            };
            MsgUpdateBondStateResponse: {
                encode(_: _147.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateBondStateResponse;
                fromJSON(_: any): _147.MsgUpdateBondStateResponse;
                toJSON(_: _147.MsgUpdateBondStateResponse): unknown;
                fromPartial(_: Partial<_147.MsgUpdateBondStateResponse>): _147.MsgUpdateBondStateResponse;
            };
            MsgBuy: {
                encode(message: _147.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBuy;
                fromJSON(object: any): _147.MsgBuy;
                toJSON(message: _147.MsgBuy): unknown;
                fromPartial(object: Partial<_147.MsgBuy>): _147.MsgBuy;
            };
            MsgBuyResponse: {
                encode(_: _147.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBuyResponse;
                fromJSON(_: any): _147.MsgBuyResponse;
                toJSON(_: _147.MsgBuyResponse): unknown;
                fromPartial(_: Partial<_147.MsgBuyResponse>): _147.MsgBuyResponse;
            };
            MsgSell: {
                encode(message: _147.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSell;
                fromJSON(object: any): _147.MsgSell;
                toJSON(message: _147.MsgSell): unknown;
                fromPartial(object: Partial<_147.MsgSell>): _147.MsgSell;
            };
            MsgSellResponse: {
                encode(_: _147.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSellResponse;
                fromJSON(_: any): _147.MsgSellResponse;
                toJSON(_: _147.MsgSellResponse): unknown;
                fromPartial(_: Partial<_147.MsgSellResponse>): _147.MsgSellResponse;
            };
            MsgSwap: {
                encode(message: _147.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSwap;
                fromJSON(object: any): _147.MsgSwap;
                toJSON(message: _147.MsgSwap): unknown;
                fromPartial(object: Partial<_147.MsgSwap>): _147.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _147.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSwapResponse;
                fromJSON(_: any): _147.MsgSwapResponse;
                toJSON(_: _147.MsgSwapResponse): unknown;
                fromPartial(_: Partial<_147.MsgSwapResponse>): _147.MsgSwapResponse;
            };
            MsgMakeOutcomePayment: {
                encode(message: _147.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgMakeOutcomePayment;
                fromJSON(object: any): _147.MsgMakeOutcomePayment;
                toJSON(message: _147.MsgMakeOutcomePayment): unknown;
                fromPartial(object: Partial<_147.MsgMakeOutcomePayment>): _147.MsgMakeOutcomePayment;
            };
            MsgMakeOutcomePaymentResponse: {
                encode(_: _147.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgMakeOutcomePaymentResponse;
                fromJSON(_: any): _147.MsgMakeOutcomePaymentResponse;
                toJSON(_: _147.MsgMakeOutcomePaymentResponse): unknown;
                fromPartial(_: Partial<_147.MsgMakeOutcomePaymentResponse>): _147.MsgMakeOutcomePaymentResponse;
            };
            MsgWithdrawShare: {
                encode(message: _147.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgWithdrawShare;
                fromJSON(object: any): _147.MsgWithdrawShare;
                toJSON(message: _147.MsgWithdrawShare): unknown;
                fromPartial(object: Partial<_147.MsgWithdrawShare>): _147.MsgWithdrawShare;
            };
            MsgWithdrawShareResponse: {
                encode(_: _147.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgWithdrawShareResponse;
                fromJSON(_: any): _147.MsgWithdrawShareResponse;
                toJSON(_: _147.MsgWithdrawShareResponse): unknown;
                fromPartial(_: Partial<_147.MsgWithdrawShareResponse>): _147.MsgWithdrawShareResponse;
            };
            MsgWithdrawReserve: {
                encode(message: _147.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgWithdrawReserve;
                fromJSON(object: any): _147.MsgWithdrawReserve;
                toJSON(message: _147.MsgWithdrawReserve): unknown;
                fromPartial(object: Partial<_147.MsgWithdrawReserve>): _147.MsgWithdrawReserve;
            };
            MsgWithdrawReserveResponse: {
                encode(_: _147.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgWithdrawReserveResponse;
                fromJSON(_: any): _147.MsgWithdrawReserveResponse;
                toJSON(_: _147.MsgWithdrawReserveResponse): unknown;
                fromPartial(_: Partial<_147.MsgWithdrawReserveResponse>): _147.MsgWithdrawReserveResponse;
            };
            QueryBondsRequest: {
                encode(_: _146.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBondsRequest;
                fromJSON(_: any): _146.QueryBondsRequest;
                toJSON(_: _146.QueryBondsRequest): unknown;
                fromPartial(_: Partial<_146.QueryBondsRequest>): _146.QueryBondsRequest;
            };
            QueryBondsResponse: {
                encode(message: _146.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBondsResponse;
                fromJSON(object: any): _146.QueryBondsResponse;
                toJSON(message: _146.QueryBondsResponse): unknown;
                fromPartial(object: Partial<_146.QueryBondsResponse>): _146.QueryBondsResponse;
            };
            QueryBondsDetailedRequest: {
                encode(_: _146.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBondsDetailedRequest;
                fromJSON(_: any): _146.QueryBondsDetailedRequest;
                toJSON(_: _146.QueryBondsDetailedRequest): unknown;
                fromPartial(_: Partial<_146.QueryBondsDetailedRequest>): _146.QueryBondsDetailedRequest;
            };
            QueryBondsDetailedResponse: {
                encode(message: _146.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBondsDetailedResponse;
                fromJSON(object: any): _146.QueryBondsDetailedResponse;
                toJSON(message: _146.QueryBondsDetailedResponse): unknown;
                fromPartial(object: Partial<_146.QueryBondsDetailedResponse>): _146.QueryBondsDetailedResponse;
            };
            QueryBondRequest: {
                encode(message: _146.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBondRequest;
                fromJSON(object: any): _146.QueryBondRequest;
                toJSON(message: _146.QueryBondRequest): unknown;
                fromPartial(object: Partial<_146.QueryBondRequest>): _146.QueryBondRequest;
            };
            QueryBondResponse: {
                encode(message: _146.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBondResponse;
                fromJSON(object: any): _146.QueryBondResponse;
                toJSON(message: _146.QueryBondResponse): unknown;
                fromPartial(object: Partial<_146.QueryBondResponse>): _146.QueryBondResponse;
            };
            QueryBatchRequest: {
                encode(message: _146.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBatchRequest;
                fromJSON(object: any): _146.QueryBatchRequest;
                toJSON(message: _146.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_146.QueryBatchRequest>): _146.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _146.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBatchResponse;
                fromJSON(object: any): _146.QueryBatchResponse;
                toJSON(message: _146.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_146.QueryBatchResponse>): _146.QueryBatchResponse;
            };
            QueryLastBatchRequest: {
                encode(message: _146.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryLastBatchRequest;
                fromJSON(object: any): _146.QueryLastBatchRequest;
                toJSON(message: _146.QueryLastBatchRequest): unknown;
                fromPartial(object: Partial<_146.QueryLastBatchRequest>): _146.QueryLastBatchRequest;
            };
            QueryLastBatchResponse: {
                encode(message: _146.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryLastBatchResponse;
                fromJSON(object: any): _146.QueryLastBatchResponse;
                toJSON(message: _146.QueryLastBatchResponse): unknown;
                fromPartial(object: Partial<_146.QueryLastBatchResponse>): _146.QueryLastBatchResponse;
            };
            QueryCurrentPriceRequest: {
                encode(message: _146.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentPriceRequest;
                fromJSON(object: any): _146.QueryCurrentPriceRequest;
                toJSON(message: _146.QueryCurrentPriceRequest): unknown;
                fromPartial(object: Partial<_146.QueryCurrentPriceRequest>): _146.QueryCurrentPriceRequest;
            };
            QueryCurrentPriceResponse: {
                encode(message: _146.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentPriceResponse;
                fromJSON(object: any): _146.QueryCurrentPriceResponse;
                toJSON(message: _146.QueryCurrentPriceResponse): unknown;
                fromPartial(object: Partial<_146.QueryCurrentPriceResponse>): _146.QueryCurrentPriceResponse;
            };
            QueryCurrentReserveRequest: {
                encode(message: _146.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentReserveRequest;
                fromJSON(object: any): _146.QueryCurrentReserveRequest;
                toJSON(message: _146.QueryCurrentReserveRequest): unknown;
                fromPartial(object: Partial<_146.QueryCurrentReserveRequest>): _146.QueryCurrentReserveRequest;
            };
            QueryCurrentReserveResponse: {
                encode(message: _146.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentReserveResponse;
                fromJSON(object: any): _146.QueryCurrentReserveResponse;
                toJSON(message: _146.QueryCurrentReserveResponse): unknown;
                fromPartial(object: Partial<_146.QueryCurrentReserveResponse>): _146.QueryCurrentReserveResponse;
            };
            QueryAvailableReserveRequest: {
                encode(message: _146.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAvailableReserveRequest;
                fromJSON(object: any): _146.QueryAvailableReserveRequest;
                toJSON(message: _146.QueryAvailableReserveRequest): unknown;
                fromPartial(object: Partial<_146.QueryAvailableReserveRequest>): _146.QueryAvailableReserveRequest;
            };
            QueryAvailableReserveResponse: {
                encode(message: _146.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAvailableReserveResponse;
                fromJSON(object: any): _146.QueryAvailableReserveResponse;
                toJSON(message: _146.QueryAvailableReserveResponse): unknown;
                fromPartial(object: Partial<_146.QueryAvailableReserveResponse>): _146.QueryAvailableReserveResponse;
            };
            QueryCustomPriceRequest: {
                encode(message: _146.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCustomPriceRequest;
                fromJSON(object: any): _146.QueryCustomPriceRequest;
                toJSON(message: _146.QueryCustomPriceRequest): unknown;
                fromPartial(object: Partial<_146.QueryCustomPriceRequest>): _146.QueryCustomPriceRequest;
            };
            QueryCustomPriceResponse: {
                encode(message: _146.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCustomPriceResponse;
                fromJSON(object: any): _146.QueryCustomPriceResponse;
                toJSON(message: _146.QueryCustomPriceResponse): unknown;
                fromPartial(object: Partial<_146.QueryCustomPriceResponse>): _146.QueryCustomPriceResponse;
            };
            QueryBuyPriceRequest: {
                encode(message: _146.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBuyPriceRequest;
                fromJSON(object: any): _146.QueryBuyPriceRequest;
                toJSON(message: _146.QueryBuyPriceRequest): unknown;
                fromPartial(object: Partial<_146.QueryBuyPriceRequest>): _146.QueryBuyPriceRequest;
            };
            QueryBuyPriceResponse: {
                encode(message: _146.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryBuyPriceResponse;
                fromJSON(object: any): _146.QueryBuyPriceResponse;
                toJSON(message: _146.QueryBuyPriceResponse): unknown;
                fromPartial(object: Partial<_146.QueryBuyPriceResponse>): _146.QueryBuyPriceResponse;
            };
            QuerySellReturnRequest: {
                encode(message: _146.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySellReturnRequest;
                fromJSON(object: any): _146.QuerySellReturnRequest;
                toJSON(message: _146.QuerySellReturnRequest): unknown;
                fromPartial(object: Partial<_146.QuerySellReturnRequest>): _146.QuerySellReturnRequest;
            };
            QuerySellReturnResponse: {
                encode(message: _146.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySellReturnResponse;
                fromJSON(object: any): _146.QuerySellReturnResponse;
                toJSON(message: _146.QuerySellReturnResponse): unknown;
                fromPartial(object: Partial<_146.QuerySellReturnResponse>): _146.QuerySellReturnResponse;
            };
            QuerySwapReturnRequest: {
                encode(message: _146.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySwapReturnRequest;
                fromJSON(object: any): _146.QuerySwapReturnRequest;
                toJSON(message: _146.QuerySwapReturnRequest): unknown;
                fromPartial(object: Partial<_146.QuerySwapReturnRequest>): _146.QuerySwapReturnRequest;
            };
            QuerySwapReturnResponse: {
                encode(message: _146.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySwapReturnResponse;
                fromJSON(object: any): _146.QuerySwapReturnResponse;
                toJSON(message: _146.QuerySwapReturnResponse): unknown;
                fromPartial(object: Partial<_146.QuerySwapReturnResponse>): _146.QuerySwapReturnResponse;
            };
            QueryAlphaMaximumsRequest: {
                encode(message: _146.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAlphaMaximumsRequest;
                fromJSON(object: any): _146.QueryAlphaMaximumsRequest;
                toJSON(message: _146.QueryAlphaMaximumsRequest): unknown;
                fromPartial(object: Partial<_146.QueryAlphaMaximumsRequest>): _146.QueryAlphaMaximumsRequest;
            };
            QueryAlphaMaximumsResponse: {
                encode(message: _146.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAlphaMaximumsResponse;
                fromJSON(object: any): _146.QueryAlphaMaximumsResponse;
                toJSON(message: _146.QueryAlphaMaximumsResponse): unknown;
                fromPartial(object: Partial<_146.QueryAlphaMaximumsResponse>): _146.QueryAlphaMaximumsResponse;
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
            GenesisState: {
                encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisState;
                fromJSON(object: any): _145.GenesisState;
                toJSON(message: _145.GenesisState): unknown;
                fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
            };
            FunctionParam: {
                encode(message: _144.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FunctionParam;
                fromJSON(object: any): _144.FunctionParam;
                toJSON(message: _144.FunctionParam): unknown;
                fromPartial(object: Partial<_144.FunctionParam>): _144.FunctionParam;
            };
            BondDetails: {
                encode(message: _144.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BondDetails;
                fromJSON(object: any): _144.BondDetails;
                toJSON(message: _144.BondDetails): unknown;
                fromPartial(object: Partial<_144.BondDetails>): _144.BondDetails;
            };
            Bond: {
                encode(message: _144.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Bond;
                fromJSON(object: any): _144.Bond;
                toJSON(message: _144.Bond): unknown;
                fromPartial(object: Partial<_144.Bond>): _144.Bond;
            };
            BaseOrder: {
                encode(message: _144.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BaseOrder;
                fromJSON(object: any): _144.BaseOrder;
                toJSON(message: _144.BaseOrder): unknown;
                fromPartial(object: Partial<_144.BaseOrder>): _144.BaseOrder;
            };
            BuyOrder: {
                encode(message: _144.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BuyOrder;
                fromJSON(object: any): _144.BuyOrder;
                toJSON(message: _144.BuyOrder): unknown;
                fromPartial(object: Partial<_144.BuyOrder>): _144.BuyOrder;
            };
            SellOrder: {
                encode(message: _144.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SellOrder;
                fromJSON(object: any): _144.SellOrder;
                toJSON(message: _144.SellOrder): unknown;
                fromPartial(object: Partial<_144.SellOrder>): _144.SellOrder;
            };
            SwapOrder: {
                encode(message: _144.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SwapOrder;
                fromJSON(object: any): _144.SwapOrder;
                toJSON(message: _144.SwapOrder): unknown;
                fromPartial(object: Partial<_144.SwapOrder>): _144.SwapOrder;
            };
            Batch: {
                encode(message: _144.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Batch;
                fromJSON(object: any): _144.Batch;
                toJSON(message: _144.Batch): unknown;
                fromPartial(object: Partial<_144.Batch>): _144.Batch;
            };
            Params: {
                encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Params;
                fromJSON(object: any): _144.Params;
                toJSON(message: _144.Params): unknown;
                fromPartial(object: Partial<_144.Params>): _144.Params;
            };
        };
    }
    namespace claims {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                collection(request: _153.QueryCollectionRequest): Promise<_153.QueryCollectionResponse>;
                collectionList(request?: _153.QueryCollectionListRequest): Promise<_153.QueryCollectionListResponse>;
                claim(request: _153.QueryClaimRequest): Promise<_153.QueryClaimResponse>;
                claimList(request?: _153.QueryClaimListRequest): Promise<_153.QueryClaimListResponse>;
                dispute(request: _153.QueryDisputeRequest): Promise<_153.QueryDisputeResponse>;
                disputeList(request?: _153.QueryDisputeListRequest): Promise<_153.QueryDisputeListResponse>;
            };
            MsgCreateCollection: {
                encode(message: _154.MsgCreateCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateCollection;
                fromJSON(object: any): _154.MsgCreateCollection;
                toJSON(message: _154.MsgCreateCollection): unknown;
                fromPartial(object: Partial<_154.MsgCreateCollection>): _154.MsgCreateCollection;
            };
            MsgCreateCollectionResponse: {
                encode(_: _154.MsgCreateCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateCollectionResponse;
                fromJSON(_: any): _154.MsgCreateCollectionResponse;
                toJSON(_: _154.MsgCreateCollectionResponse): unknown;
                fromPartial(_: Partial<_154.MsgCreateCollectionResponse>): _154.MsgCreateCollectionResponse;
            };
            MsgSubmitClaim: {
                encode(message: _154.MsgSubmitClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSubmitClaim;
                fromJSON(object: any): _154.MsgSubmitClaim;
                toJSON(message: _154.MsgSubmitClaim): unknown;
                fromPartial(object: Partial<_154.MsgSubmitClaim>): _154.MsgSubmitClaim;
            };
            MsgSubmitClaimResponse: {
                encode(_: _154.MsgSubmitClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSubmitClaimResponse;
                fromJSON(_: any): _154.MsgSubmitClaimResponse;
                toJSON(_: _154.MsgSubmitClaimResponse): unknown;
                fromPartial(_: Partial<_154.MsgSubmitClaimResponse>): _154.MsgSubmitClaimResponse;
            };
            MsgEvaluateClaim: {
                encode(message: _154.MsgEvaluateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgEvaluateClaim;
                fromJSON(object: any): _154.MsgEvaluateClaim;
                toJSON(message: _154.MsgEvaluateClaim): unknown;
                fromPartial(object: Partial<_154.MsgEvaluateClaim>): _154.MsgEvaluateClaim;
            };
            MsgEvaluateClaimResponse: {
                encode(_: _154.MsgEvaluateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgEvaluateClaimResponse;
                fromJSON(_: any): _154.MsgEvaluateClaimResponse;
                toJSON(_: _154.MsgEvaluateClaimResponse): unknown;
                fromPartial(_: Partial<_154.MsgEvaluateClaimResponse>): _154.MsgEvaluateClaimResponse;
            };
            MsgDisputeClaim: {
                encode(message: _154.MsgDisputeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDisputeClaim;
                fromJSON(object: any): _154.MsgDisputeClaim;
                toJSON(message: _154.MsgDisputeClaim): unknown;
                fromPartial(object: Partial<_154.MsgDisputeClaim>): _154.MsgDisputeClaim;
            };
            MsgDisputeClaimResponse: {
                encode(_: _154.MsgDisputeClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgDisputeClaimResponse;
                fromJSON(_: any): _154.MsgDisputeClaimResponse;
                toJSON(_: _154.MsgDisputeClaimResponse): unknown;
                fromPartial(_: Partial<_154.MsgDisputeClaimResponse>): _154.MsgDisputeClaimResponse;
            };
            MsgWithdrawPayment: {
                encode(message: _154.MsgWithdrawPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgWithdrawPayment;
                fromJSON(object: any): _154.MsgWithdrawPayment;
                toJSON(message: _154.MsgWithdrawPayment): unknown;
                fromPartial(object: Partial<_154.MsgWithdrawPayment>): _154.MsgWithdrawPayment;
            };
            MsgWithdrawPaymentResponse: {
                encode(_: _154.MsgWithdrawPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgWithdrawPaymentResponse;
                fromJSON(_: any): _154.MsgWithdrawPaymentResponse;
                toJSON(_: _154.MsgWithdrawPaymentResponse): unknown;
                fromPartial(_: Partial<_154.MsgWithdrawPaymentResponse>): _154.MsgWithdrawPaymentResponse;
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
            QueryCollectionRequest: {
                encode(message: _153.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCollectionRequest;
                fromJSON(object: any): _153.QueryCollectionRequest;
                toJSON(message: _153.QueryCollectionRequest): unknown;
                fromPartial(object: Partial<_153.QueryCollectionRequest>): _153.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _153.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCollectionResponse;
                fromJSON(object: any): _153.QueryCollectionResponse;
                toJSON(message: _153.QueryCollectionResponse): unknown;
                fromPartial(object: Partial<_153.QueryCollectionResponse>): _153.QueryCollectionResponse;
            };
            QueryCollectionListRequest: {
                encode(message: _153.QueryCollectionListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCollectionListRequest;
                fromJSON(object: any): _153.QueryCollectionListRequest;
                toJSON(message: _153.QueryCollectionListRequest): unknown;
                fromPartial(object: Partial<_153.QueryCollectionListRequest>): _153.QueryCollectionListRequest;
            };
            QueryCollectionListResponse: {
                encode(message: _153.QueryCollectionListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCollectionListResponse;
                fromJSON(object: any): _153.QueryCollectionListResponse;
                toJSON(message: _153.QueryCollectionListResponse): unknown;
                fromPartial(object: Partial<_153.QueryCollectionListResponse>): _153.QueryCollectionListResponse;
            };
            QueryClaimRequest: {
                encode(message: _153.QueryClaimRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryClaimRequest;
                fromJSON(object: any): _153.QueryClaimRequest;
                toJSON(message: _153.QueryClaimRequest): unknown;
                fromPartial(object: Partial<_153.QueryClaimRequest>): _153.QueryClaimRequest;
            };
            QueryClaimResponse: {
                encode(message: _153.QueryClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryClaimResponse;
                fromJSON(object: any): _153.QueryClaimResponse;
                toJSON(message: _153.QueryClaimResponse): unknown;
                fromPartial(object: Partial<_153.QueryClaimResponse>): _153.QueryClaimResponse;
            };
            QueryClaimListRequest: {
                encode(message: _153.QueryClaimListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryClaimListRequest;
                fromJSON(object: any): _153.QueryClaimListRequest;
                toJSON(message: _153.QueryClaimListRequest): unknown;
                fromPartial(object: Partial<_153.QueryClaimListRequest>): _153.QueryClaimListRequest;
            };
            QueryClaimListResponse: {
                encode(message: _153.QueryClaimListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryClaimListResponse;
                fromJSON(object: any): _153.QueryClaimListResponse;
                toJSON(message: _153.QueryClaimListResponse): unknown;
                fromPartial(object: Partial<_153.QueryClaimListResponse>): _153.QueryClaimListResponse;
            };
            QueryDisputeRequest: {
                encode(message: _153.QueryDisputeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDisputeRequest;
                fromJSON(object: any): _153.QueryDisputeRequest;
                toJSON(message: _153.QueryDisputeRequest): unknown;
                fromPartial(object: Partial<_153.QueryDisputeRequest>): _153.QueryDisputeRequest;
            };
            QueryDisputeResponse: {
                encode(message: _153.QueryDisputeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDisputeResponse;
                fromJSON(object: any): _153.QueryDisputeResponse;
                toJSON(message: _153.QueryDisputeResponse): unknown;
                fromPartial(object: Partial<_153.QueryDisputeResponse>): _153.QueryDisputeResponse;
            };
            QueryDisputeListRequest: {
                encode(message: _153.QueryDisputeListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDisputeListRequest;
                fromJSON(object: any): _153.QueryDisputeListRequest;
                toJSON(message: _153.QueryDisputeListRequest): unknown;
                fromPartial(object: Partial<_153.QueryDisputeListRequest>): _153.QueryDisputeListRequest;
            };
            QueryDisputeListResponse: {
                encode(message: _153.QueryDisputeListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDisputeListResponse;
                fromJSON(object: any): _153.QueryDisputeListResponse;
                toJSON(message: _153.QueryDisputeListResponse): unknown;
                fromPartial(object: Partial<_153.QueryDisputeListResponse>): _153.QueryDisputeListResponse;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromJSON(object: any): _152.GenesisState;
                toJSON(message: _152.GenesisState): unknown;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
            };
            CollectionCreatedEvent: {
                encode(message: _151.CollectionCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.CollectionCreatedEvent;
                fromJSON(object: any): _151.CollectionCreatedEvent;
                toJSON(message: _151.CollectionCreatedEvent): unknown;
                fromPartial(object: Partial<_151.CollectionCreatedEvent>): _151.CollectionCreatedEvent;
            };
            CollectionUpdatedEvent: {
                encode(message: _151.CollectionUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.CollectionUpdatedEvent;
                fromJSON(object: any): _151.CollectionUpdatedEvent;
                toJSON(message: _151.CollectionUpdatedEvent): unknown;
                fromPartial(object: Partial<_151.CollectionUpdatedEvent>): _151.CollectionUpdatedEvent;
            };
            ClaimSubmittedEvent: {
                encode(message: _151.ClaimSubmittedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ClaimSubmittedEvent;
                fromJSON(object: any): _151.ClaimSubmittedEvent;
                toJSON(message: _151.ClaimSubmittedEvent): unknown;
                fromPartial(object: Partial<_151.ClaimSubmittedEvent>): _151.ClaimSubmittedEvent;
            };
            ClaimUpdatedEvent: {
                encode(message: _151.ClaimUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ClaimUpdatedEvent;
                fromJSON(object: any): _151.ClaimUpdatedEvent;
                toJSON(message: _151.ClaimUpdatedEvent): unknown;
                fromPartial(object: Partial<_151.ClaimUpdatedEvent>): _151.ClaimUpdatedEvent;
            };
            ClaimEvaluatedEvent: {
                encode(message: _151.ClaimEvaluatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ClaimEvaluatedEvent;
                fromJSON(object: any): _151.ClaimEvaluatedEvent;
                toJSON(message: _151.ClaimEvaluatedEvent): unknown;
                fromPartial(object: Partial<_151.ClaimEvaluatedEvent>): _151.ClaimEvaluatedEvent;
            };
            ClaimDisputedEvent: {
                encode(message: _151.ClaimDisputedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ClaimDisputedEvent;
                fromJSON(object: any): _151.ClaimDisputedEvent;
                toJSON(message: _151.ClaimDisputedEvent): unknown;
                fromPartial(object: Partial<_151.ClaimDisputedEvent>): _151.ClaimDisputedEvent;
            };
            PaymentWithdrawnEvent: {
                encode(message: _151.PaymentWithdrawnEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.PaymentWithdrawnEvent;
                fromJSON(object: any): _151.PaymentWithdrawnEvent;
                toJSON(message: _151.PaymentWithdrawnEvent): unknown;
                fromPartial(object: Partial<_151.PaymentWithdrawnEvent>): _151.PaymentWithdrawnEvent;
            };
            PaymentWithdrawCreatedEvent: {
                encode(message: _151.PaymentWithdrawCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.PaymentWithdrawCreatedEvent;
                fromJSON(object: any): _151.PaymentWithdrawCreatedEvent;
                toJSON(message: _151.PaymentWithdrawCreatedEvent): unknown;
                fromPartial(object: Partial<_151.PaymentWithdrawCreatedEvent>): _151.PaymentWithdrawCreatedEvent;
            };
            Input: {
                encode(message: _150.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Input;
                fromJSON(object: any): _150.Input;
                toJSON(message: _150.Input): unknown;
                fromPartial(object: Partial<_150.Input>): _150.Input;
            };
            Output: {
                encode(message: _150.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Output;
                fromJSON(object: any): _150.Output;
                toJSON(message: _150.Output): unknown;
                fromPartial(object: Partial<_150.Output>): _150.Output;
            };
            collectionStateFromJSON(object: any): _149.CollectionState;
            collectionStateToJSON(object: _149.CollectionState): string;
            evaluationStatusFromJSON(object: any): _149.EvaluationStatus;
            evaluationStatusToJSON(object: _149.EvaluationStatus): string;
            paymentTypeFromJSON(object: any): _149.PaymentType;
            paymentTypeToJSON(object: _149.PaymentType): string;
            paymentStatusFromJSON(object: any): _149.PaymentStatus;
            paymentStatusToJSON(object: _149.PaymentStatus): string;
            CollectionState: typeof _149.CollectionState;
            CollectionStateSDKType: typeof _149.CollectionStateSDKType;
            EvaluationStatus: typeof _149.EvaluationStatus;
            EvaluationStatusSDKType: typeof _149.EvaluationStatusSDKType;
            PaymentType: typeof _149.PaymentType;
            PaymentTypeSDKType: typeof _149.PaymentTypeSDKType;
            PaymentStatus: typeof _149.PaymentStatus;
            PaymentStatusSDKType: typeof _149.PaymentStatusSDKType;
            Params: {
                encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
                fromJSON(object: any): _149.Params;
                toJSON(message: _149.Params): unknown;
                fromPartial(object: Partial<_149.Params>): _149.Params;
            };
            Collection: {
                encode(message: _149.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Collection;
                fromJSON(object: any): _149.Collection;
                toJSON(message: _149.Collection): unknown;
                fromPartial(object: Partial<_149.Collection>): _149.Collection;
            };
            Payments: {
                encode(message: _149.Payments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Payments;
                fromJSON(object: any): _149.Payments;
                toJSON(message: _149.Payments): unknown;
                fromPartial(object: Partial<_149.Payments>): _149.Payments;
            };
            Payment: {
                encode(message: _149.Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Payment;
                fromJSON(object: any): _149.Payment;
                toJSON(message: _149.Payment): unknown;
                fromPartial(object: Partial<_149.Payment>): _149.Payment;
            };
            Contract1155Payment: {
                encode(message: _149.Contract1155Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Contract1155Payment;
                fromJSON(object: any): _149.Contract1155Payment;
                toJSON(message: _149.Contract1155Payment): unknown;
                fromPartial(object: Partial<_149.Contract1155Payment>): _149.Contract1155Payment;
            };
            Claim: {
                encode(message: _149.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Claim;
                fromJSON(object: any): _149.Claim;
                toJSON(message: _149.Claim): unknown;
                fromPartial(object: Partial<_149.Claim>): _149.Claim;
            };
            ClaimPayments: {
                encode(message: _149.ClaimPayments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ClaimPayments;
                fromJSON(object: any): _149.ClaimPayments;
                toJSON(message: _149.ClaimPayments): unknown;
                fromPartial(object: Partial<_149.ClaimPayments>): _149.ClaimPayments;
            };
            Evaluation: {
                encode(message: _149.Evaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Evaluation;
                fromJSON(object: any): _149.Evaluation;
                toJSON(message: _149.Evaluation): unknown;
                fromPartial(object: Partial<_149.Evaluation>): _149.Evaluation;
            };
            Dispute: {
                encode(message: _149.Dispute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Dispute;
                fromJSON(object: any): _149.Dispute;
                toJSON(message: _149.Dispute): unknown;
                fromPartial(object: Partial<_149.Dispute>): _149.Dispute;
            };
            DisputeData: {
                encode(message: _149.DisputeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DisputeData;
                fromJSON(object: any): _149.DisputeData;
                toJSON(message: _149.DisputeData): unknown;
                fromPartial(object: Partial<_149.DisputeData>): _149.DisputeData;
            };
            SubmitClaimAuthorization: {
                encode(message: _148.SubmitClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SubmitClaimAuthorization;
                fromJSON(object: any): _148.SubmitClaimAuthorization;
                toJSON(message: _148.SubmitClaimAuthorization): unknown;
                fromPartial(object: Partial<_148.SubmitClaimAuthorization>): _148.SubmitClaimAuthorization;
            };
            SubmitClaimConstraints: {
                encode(message: _148.SubmitClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SubmitClaimConstraints;
                fromJSON(object: any): _148.SubmitClaimConstraints;
                toJSON(message: _148.SubmitClaimConstraints): unknown;
                fromPartial(object: Partial<_148.SubmitClaimConstraints>): _148.SubmitClaimConstraints;
            };
            EvaluateClaimAuthorization: {
                encode(message: _148.EvaluateClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.EvaluateClaimAuthorization;
                fromJSON(object: any): _148.EvaluateClaimAuthorization;
                toJSON(message: _148.EvaluateClaimAuthorization): unknown;
                fromPartial(object: Partial<_148.EvaluateClaimAuthorization>): _148.EvaluateClaimAuthorization;
            };
            EvaluateClaimConstraints: {
                encode(message: _148.EvaluateClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.EvaluateClaimConstraints;
                fromJSON(object: any): _148.EvaluateClaimConstraints;
                toJSON(message: _148.EvaluateClaimConstraints): unknown;
                fromPartial(object: Partial<_148.EvaluateClaimConstraints>): _148.EvaluateClaimConstraints;
            };
            WithdrawPaymentAuthorization: {
                encode(message: _148.WithdrawPaymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.WithdrawPaymentAuthorization;
                fromJSON(object: any): _148.WithdrawPaymentAuthorization;
                toJSON(message: _148.WithdrawPaymentAuthorization): unknown;
                fromPartial(object: Partial<_148.WithdrawPaymentAuthorization>): _148.WithdrawPaymentAuthorization;
            };
            WithdrawPaymentConstraints: {
                encode(message: _148.WithdrawPaymentConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.WithdrawPaymentConstraints;
                fromJSON(object: any): _148.WithdrawPaymentConstraints;
                toJSON(message: _148.WithdrawPaymentConstraints): unknown;
                fromPartial(object: Partial<_148.WithdrawPaymentConstraints>): _148.WithdrawPaymentConstraints;
            };
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                entity(request: _160.QueryEntityRequest): Promise<_160.QueryEntityResponse>;
                entityMetaData(request: _160.QueryEntityMetadataRequest): Promise<_160.QueryEntityMetadataResponse>;
                entityIidDocument(request: _160.QueryEntityIidDocumentRequest): Promise<_160.QueryEntityIidDocumentResponse>;
                entityVerified(request: _160.QueryEntityVerifiedRequest): Promise<_160.QueryEntityVerifiedResponse>;
                entityList(request?: _160.QueryEntityListRequest): Promise<_160.QueryEntityListResponse>;
            };
            MsgCreateEntity: {
                encode(message: _161.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateEntity;
                fromJSON(object: any): _161.MsgCreateEntity;
                toJSON(message: _161.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_161.MsgCreateEntity>): _161.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _161.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateEntityResponse;
                fromJSON(object: any): _161.MsgCreateEntityResponse;
                toJSON(message: _161.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_161.MsgCreateEntityResponse>): _161.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _161.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateEntity;
                fromJSON(object: any): _161.MsgUpdateEntity;
                toJSON(message: _161.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_161.MsgUpdateEntity>): _161.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _161.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateEntityResponse;
                fromJSON(_: any): _161.MsgUpdateEntityResponse;
                toJSON(_: _161.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateEntityResponse>): _161.MsgUpdateEntityResponse;
            };
            MsgUpdateEntityVerified: {
                encode(message: _161.MsgUpdateEntityVerified, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateEntityVerified;
                fromJSON(object: any): _161.MsgUpdateEntityVerified;
                toJSON(message: _161.MsgUpdateEntityVerified): unknown;
                fromPartial(object: Partial<_161.MsgUpdateEntityVerified>): _161.MsgUpdateEntityVerified;
            };
            MsgUpdateEntityVerifiedResponse: {
                encode(_: _161.MsgUpdateEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateEntityVerifiedResponse;
                fromJSON(_: any): _161.MsgUpdateEntityVerifiedResponse;
                toJSON(_: _161.MsgUpdateEntityVerifiedResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateEntityVerifiedResponse>): _161.MsgUpdateEntityVerifiedResponse;
            };
            MsgTransferEntity: {
                encode(message: _161.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgTransferEntity;
                fromJSON(object: any): _161.MsgTransferEntity;
                toJSON(message: _161.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_161.MsgTransferEntity>): _161.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _161.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgTransferEntityResponse;
                fromJSON(_: any): _161.MsgTransferEntityResponse;
                toJSON(_: _161.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_161.MsgTransferEntityResponse>): _161.MsgTransferEntityResponse;
            };
            MsgCreateEntityAccount: {
                encode(message: _161.MsgCreateEntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateEntityAccount;
                fromJSON(object: any): _161.MsgCreateEntityAccount;
                toJSON(message: _161.MsgCreateEntityAccount): unknown;
                fromPartial(object: Partial<_161.MsgCreateEntityAccount>): _161.MsgCreateEntityAccount;
            };
            MsgCreateEntityAccountResponse: {
                encode(message: _161.MsgCreateEntityAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateEntityAccountResponse;
                fromJSON(object: any): _161.MsgCreateEntityAccountResponse;
                toJSON(message: _161.MsgCreateEntityAccountResponse): unknown;
                fromPartial(object: Partial<_161.MsgCreateEntityAccountResponse>): _161.MsgCreateEntityAccountResponse;
            };
            MsgGrantEntityAccountAuthz: {
                encode(message: _161.MsgGrantEntityAccountAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgGrantEntityAccountAuthz;
                fromJSON(object: any): _161.MsgGrantEntityAccountAuthz;
                toJSON(message: _161.MsgGrantEntityAccountAuthz): unknown;
                fromPartial(object: Partial<_161.MsgGrantEntityAccountAuthz>): _161.MsgGrantEntityAccountAuthz;
            };
            MsgGrantEntityAccountAuthzResponse: {
                encode(_: _161.MsgGrantEntityAccountAuthzResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgGrantEntityAccountAuthzResponse;
                fromJSON(_: any): _161.MsgGrantEntityAccountAuthzResponse;
                toJSON(_: _161.MsgGrantEntityAccountAuthzResponse): unknown;
                fromPartial(_: Partial<_161.MsgGrantEntityAccountAuthzResponse>): _161.MsgGrantEntityAccountAuthzResponse;
            };
            QueryParamsRequest: {
                encode(_: _160.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsRequest;
                fromJSON(_: any): _160.QueryParamsRequest;
                toJSON(_: _160.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_160.QueryParamsRequest>): _160.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _160.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsResponse;
                fromJSON(object: any): _160.QueryParamsResponse;
                toJSON(message: _160.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_160.QueryParamsResponse>): _160.QueryParamsResponse;
            };
            QueryEntityRequest: {
                encode(message: _160.QueryEntityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityRequest;
                fromJSON(object: any): _160.QueryEntityRequest;
                toJSON(message: _160.QueryEntityRequest): unknown;
                fromPartial(object: Partial<_160.QueryEntityRequest>): _160.QueryEntityRequest;
            };
            QueryEntityResponse: {
                encode(message: _160.QueryEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityResponse;
                fromJSON(object: any): _160.QueryEntityResponse;
                toJSON(message: _160.QueryEntityResponse): unknown;
                fromPartial(object: Partial<_160.QueryEntityResponse>): _160.QueryEntityResponse;
            };
            QueryEntityMetadataRequest: {
                encode(message: _160.QueryEntityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityMetadataRequest;
                fromJSON(object: any): _160.QueryEntityMetadataRequest;
                toJSON(message: _160.QueryEntityMetadataRequest): unknown;
                fromPartial(object: Partial<_160.QueryEntityMetadataRequest>): _160.QueryEntityMetadataRequest;
            };
            QueryEntityMetadataResponse: {
                encode(message: _160.QueryEntityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityMetadataResponse;
                fromJSON(object: any): _160.QueryEntityMetadataResponse;
                toJSON(message: _160.QueryEntityMetadataResponse): unknown;
                fromPartial(object: Partial<_160.QueryEntityMetadataResponse>): _160.QueryEntityMetadataResponse;
            };
            QueryEntityIidDocumentRequest: {
                encode(message: _160.QueryEntityIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityIidDocumentRequest;
                fromJSON(object: any): _160.QueryEntityIidDocumentRequest;
                toJSON(message: _160.QueryEntityIidDocumentRequest): unknown;
                fromPartial(object: Partial<_160.QueryEntityIidDocumentRequest>): _160.QueryEntityIidDocumentRequest;
            };
            QueryEntityIidDocumentResponse: {
                encode(message: _160.QueryEntityIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityIidDocumentResponse;
                fromJSON(object: any): _160.QueryEntityIidDocumentResponse;
                toJSON(message: _160.QueryEntityIidDocumentResponse): unknown;
                fromPartial(object: Partial<_160.QueryEntityIidDocumentResponse>): _160.QueryEntityIidDocumentResponse;
            };
            QueryEntityVerifiedRequest: {
                encode(message: _160.QueryEntityVerifiedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityVerifiedRequest;
                fromJSON(object: any): _160.QueryEntityVerifiedRequest;
                toJSON(message: _160.QueryEntityVerifiedRequest): unknown;
                fromPartial(object: Partial<_160.QueryEntityVerifiedRequest>): _160.QueryEntityVerifiedRequest;
            };
            QueryEntityVerifiedResponse: {
                encode(message: _160.QueryEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityVerifiedResponse;
                fromJSON(object: any): _160.QueryEntityVerifiedResponse;
                toJSON(message: _160.QueryEntityVerifiedResponse): unknown;
                fromPartial(object: Partial<_160.QueryEntityVerifiedResponse>): _160.QueryEntityVerifiedResponse;
            };
            QueryEntityListRequest: {
                encode(message: _160.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityListRequest;
                fromJSON(object: any): _160.QueryEntityListRequest;
                toJSON(message: _160.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_160.QueryEntityListRequest>): _160.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(message: _160.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEntityListResponse;
                fromJSON(object: any): _160.QueryEntityListResponse;
                toJSON(message: _160.QueryEntityListResponse): unknown;
                fromPartial(object: Partial<_160.QueryEntityListResponse>): _160.QueryEntityListResponse;
            };
            InitializeNftContract: {
                encode(message: _159.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.InitializeNftContract;
                fromJSON(object: any): _159.InitializeNftContract;
                toJSON(message: _159.InitializeNftContract): unknown;
                fromPartial(object: Partial<_159.InitializeNftContract>): _159.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
                fromJSON(object: any): _158.GenesisState;
                toJSON(message: _158.GenesisState): unknown;
                fromPartial(object: Partial<_158.GenesisState>): _158.GenesisState;
            };
            EntityCreatedEvent: {
                encode(message: _157.EntityCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityCreatedEvent;
                fromJSON(object: any): _157.EntityCreatedEvent;
                toJSON(message: _157.EntityCreatedEvent): unknown;
                fromPartial(object: Partial<_157.EntityCreatedEvent>): _157.EntityCreatedEvent;
            };
            EntityUpdatedEvent: {
                encode(message: _157.EntityUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityUpdatedEvent;
                fromJSON(object: any): _157.EntityUpdatedEvent;
                toJSON(message: _157.EntityUpdatedEvent): unknown;
                fromPartial(object: Partial<_157.EntityUpdatedEvent>): _157.EntityUpdatedEvent;
            };
            EntityVerifiedUpdatedEvent: {
                encode(message: _157.EntityVerifiedUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityVerifiedUpdatedEvent;
                fromJSON(object: any): _157.EntityVerifiedUpdatedEvent;
                toJSON(message: _157.EntityVerifiedUpdatedEvent): unknown;
                fromPartial(object: Partial<_157.EntityVerifiedUpdatedEvent>): _157.EntityVerifiedUpdatedEvent;
            };
            EntityTransferredEvent: {
                encode(message: _157.EntityTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityTransferredEvent;
                fromJSON(object: any): _157.EntityTransferredEvent;
                toJSON(message: _157.EntityTransferredEvent): unknown;
                fromPartial(object: Partial<_157.EntityTransferredEvent>): _157.EntityTransferredEvent;
            };
            EntityAccountCreatedEvent: {
                encode(message: _157.EntityAccountCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityAccountCreatedEvent;
                fromJSON(object: any): _157.EntityAccountCreatedEvent;
                toJSON(message: _157.EntityAccountCreatedEvent): unknown;
                fromPartial(object: Partial<_157.EntityAccountCreatedEvent>): _157.EntityAccountCreatedEvent;
            };
            EntityAccountAuthzCreatedEvent: {
                encode(message: _157.EntityAccountAuthzCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityAccountAuthzCreatedEvent;
                fromJSON(object: any): _157.EntityAccountAuthzCreatedEvent;
                toJSON(message: _157.EntityAccountAuthzCreatedEvent): unknown;
                fromPartial(object: Partial<_157.EntityAccountAuthzCreatedEvent>): _157.EntityAccountAuthzCreatedEvent;
            };
            Params: {
                encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromJSON(object: any): _156.Params;
                toJSON(message: _156.Params): unknown;
                fromPartial(object: Partial<_156.Params>): _156.Params;
            };
            Entity: {
                encode(message: _156.Entity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Entity;
                fromJSON(object: any): _156.Entity;
                toJSON(message: _156.Entity): unknown;
                fromPartial(object: Partial<_156.Entity>): _156.Entity;
            };
            EntityAccount: {
                encode(message: _156.EntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.EntityAccount;
                fromJSON(object: any): _156.EntityAccount;
                toJSON(message: _156.EntityAccount): unknown;
                fromPartial(object: Partial<_156.EntityAccount>): _156.EntityAccount;
            };
            EntityMetadata: {
                encode(message: _156.EntityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.EntityMetadata;
                fromJSON(object: any): _156.EntityMetadata;
                toJSON(message: _156.EntityMetadata): unknown;
                fromPartial(object: Partial<_156.EntityMetadata>): _156.EntityMetadata;
            };
            Grant: {
                encode(message: _155.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Grant;
                fromJSON(object: any): _155.Grant;
                toJSON(message: _155.Grant): unknown;
                fromPartial(object: Partial<_155.Grant>): _155.Grant;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _165.QueryIidDocumentsRequest): Promise<_165.QueryIidDocumentsResponse>;
                iidDocument(request: _165.QueryIidDocumentRequest): Promise<_165.QueryIidDocumentResponse>;
            };
            Context: {
                encode(message: _167.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Context;
                fromJSON(object: any): _167.Context;
                toJSON(message: _167.Context): unknown;
                fromPartial(object: Partial<_167.Context>): _167.Context;
            };
            AccordedRight: {
                encode(message: _167.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.AccordedRight;
                fromJSON(object: any): _167.AccordedRight;
                toJSON(message: _167.AccordedRight): unknown;
                fromPartial(object: Partial<_167.AccordedRight>): _167.AccordedRight;
            };
            LinkedResource: {
                encode(message: _167.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.LinkedResource;
                fromJSON(object: any): _167.LinkedResource;
                toJSON(message: _167.LinkedResource): unknown;
                fromPartial(object: Partial<_167.LinkedResource>): _167.LinkedResource;
            };
            LinkedClaim: {
                encode(message: _167.LinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.LinkedClaim;
                fromJSON(object: any): _167.LinkedClaim;
                toJSON(message: _167.LinkedClaim): unknown;
                fromPartial(object: Partial<_167.LinkedClaim>): _167.LinkedClaim;
            };
            LinkedEntity: {
                encode(message: _167.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.LinkedEntity;
                fromJSON(object: any): _167.LinkedEntity;
                toJSON(message: _167.LinkedEntity): unknown;
                fromPartial(object: Partial<_167.LinkedEntity>): _167.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _167.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.VerificationMethod;
                fromJSON(object: any): _167.VerificationMethod;
                toJSON(message: _167.VerificationMethod): unknown;
                fromPartial(object: Partial<_167.VerificationMethod>): _167.VerificationMethod;
            };
            Service: {
                encode(message: _167.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Service;
                fromJSON(object: any): _167.Service;
                toJSON(message: _167.Service): unknown;
                fromPartial(object: Partial<_167.Service>): _167.Service;
            };
            IidMetadata: {
                encode(message: _167.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.IidMetadata;
                fromJSON(object: any): _167.IidMetadata;
                toJSON(message: _167.IidMetadata): unknown;
                fromPartial(object: Partial<_167.IidMetadata>): _167.IidMetadata;
            };
            Verification: {
                encode(message: _166.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Verification;
                fromJSON(object: any): _166.Verification;
                toJSON(message: _166.Verification): unknown;
                fromPartial(object: Partial<_166.Verification>): _166.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _166.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgCreateIidDocument;
                fromJSON(object: any): _166.MsgCreateIidDocument;
                toJSON(message: _166.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_166.MsgCreateIidDocument>): _166.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _166.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _166.MsgCreateIidDocumentResponse;
                toJSON(_: _166.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_166.MsgCreateIidDocumentResponse>): _166.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _166.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgUpdateIidDocument;
                fromJSON(object: any): _166.MsgUpdateIidDocument;
                toJSON(message: _166.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_166.MsgUpdateIidDocument>): _166.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _166.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _166.MsgUpdateIidDocumentResponse;
                toJSON(_: _166.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_166.MsgUpdateIidDocumentResponse>): _166.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _166.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddVerification;
                fromJSON(object: any): _166.MsgAddVerification;
                toJSON(message: _166.MsgAddVerification): unknown;
                fromPartial(object: Partial<_166.MsgAddVerification>): _166.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _166.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddVerificationResponse;
                fromJSON(_: any): _166.MsgAddVerificationResponse;
                toJSON(_: _166.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddVerificationResponse>): _166.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _166.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgSetVerificationRelationships;
                fromJSON(object: any): _166.MsgSetVerificationRelationships;
                toJSON(message: _166.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_166.MsgSetVerificationRelationships>): _166.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _166.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _166.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _166.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_166.MsgSetVerificationRelationshipsResponse>): _166.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _166.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgRevokeVerification;
                fromJSON(object: any): _166.MsgRevokeVerification;
                toJSON(message: _166.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_166.MsgRevokeVerification>): _166.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _166.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgRevokeVerificationResponse;
                fromJSON(_: any): _166.MsgRevokeVerificationResponse;
                toJSON(_: _166.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_166.MsgRevokeVerificationResponse>): _166.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _166.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddService;
                fromJSON(object: any): _166.MsgAddService;
                toJSON(message: _166.MsgAddService): unknown;
                fromPartial(object: Partial<_166.MsgAddService>): _166.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _166.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddServiceResponse;
                fromJSON(_: any): _166.MsgAddServiceResponse;
                toJSON(_: _166.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddServiceResponse>): _166.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _166.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteService;
                fromJSON(object: any): _166.MsgDeleteService;
                toJSON(message: _166.MsgDeleteService): unknown;
                fromPartial(object: Partial<_166.MsgDeleteService>): _166.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _166.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteServiceResponse;
                fromJSON(_: any): _166.MsgDeleteServiceResponse;
                toJSON(_: _166.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeleteServiceResponse>): _166.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _166.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddController;
                fromJSON(object: any): _166.MsgAddController;
                toJSON(message: _166.MsgAddController): unknown;
                fromPartial(object: Partial<_166.MsgAddController>): _166.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _166.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddControllerResponse;
                fromJSON(_: any): _166.MsgAddControllerResponse;
                toJSON(_: _166.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddControllerResponse>): _166.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _166.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteController;
                fromJSON(object: any): _166.MsgDeleteController;
                toJSON(message: _166.MsgDeleteController): unknown;
                fromPartial(object: Partial<_166.MsgDeleteController>): _166.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _166.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteControllerResponse;
                fromJSON(_: any): _166.MsgDeleteControllerResponse;
                toJSON(_: _166.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeleteControllerResponse>): _166.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _166.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddLinkedResource;
                fromJSON(object: any): _166.MsgAddLinkedResource;
                toJSON(message: _166.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_166.MsgAddLinkedResource>): _166.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _166.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteLinkedResource;
                fromJSON(object: any): _166.MsgDeleteLinkedResource;
                toJSON(message: _166.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_166.MsgDeleteLinkedResource>): _166.MsgDeleteLinkedResource;
            };
            MsgAddLinkedClaim: {
                encode(message: _166.MsgAddLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddLinkedClaim;
                fromJSON(object: any): _166.MsgAddLinkedClaim;
                toJSON(message: _166.MsgAddLinkedClaim): unknown;
                fromPartial(object: Partial<_166.MsgAddLinkedClaim>): _166.MsgAddLinkedClaim;
            };
            MsgDeleteLinkedClaim: {
                encode(message: _166.MsgDeleteLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteLinkedClaim;
                fromJSON(object: any): _166.MsgDeleteLinkedClaim;
                toJSON(message: _166.MsgDeleteLinkedClaim): unknown;
                fromPartial(object: Partial<_166.MsgDeleteLinkedClaim>): _166.MsgDeleteLinkedClaim;
            };
            MsgAddLinkedEntity: {
                encode(message: _166.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddLinkedEntity;
                fromJSON(object: any): _166.MsgAddLinkedEntity;
                toJSON(message: _166.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_166.MsgAddLinkedEntity>): _166.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _166.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteLinkedEntity;
                fromJSON(object: any): _166.MsgDeleteLinkedEntity;
                toJSON(message: _166.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_166.MsgDeleteLinkedEntity>): _166.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _166.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddAccordedRight;
                fromJSON(object: any): _166.MsgAddAccordedRight;
                toJSON(message: _166.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_166.MsgAddAccordedRight>): _166.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _166.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteAccordedRight;
                fromJSON(object: any): _166.MsgDeleteAccordedRight;
                toJSON(message: _166.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_166.MsgDeleteAccordedRight>): _166.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _166.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddIidContext;
                fromJSON(object: any): _166.MsgAddIidContext;
                toJSON(message: _166.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_166.MsgAddIidContext>): _166.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _166.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeactivateIID;
                fromJSON(object: any): _166.MsgDeactivateIID;
                toJSON(message: _166.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_166.MsgDeactivateIID>): _166.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _166.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteIidContext;
                fromJSON(object: any): _166.MsgDeleteIidContext;
                toJSON(message: _166.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_166.MsgDeleteIidContext>): _166.MsgDeleteIidContext;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _166.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _166.MsgAddLinkedResourceResponse;
                toJSON(_: _166.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddLinkedResourceResponse>): _166.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _166.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _166.MsgDeleteLinkedResourceResponse;
                toJSON(_: _166.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeleteLinkedResourceResponse>): _166.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedClaimResponse: {
                encode(_: _166.MsgAddLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddLinkedClaimResponse;
                fromJSON(_: any): _166.MsgAddLinkedClaimResponse;
                toJSON(_: _166.MsgAddLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddLinkedClaimResponse>): _166.MsgAddLinkedClaimResponse;
            };
            MsgDeleteLinkedClaimResponse: {
                encode(_: _166.MsgDeleteLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteLinkedClaimResponse;
                fromJSON(_: any): _166.MsgDeleteLinkedClaimResponse;
                toJSON(_: _166.MsgDeleteLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeleteLinkedClaimResponse>): _166.MsgDeleteLinkedClaimResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _166.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _166.MsgAddLinkedEntityResponse;
                toJSON(_: _166.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddLinkedEntityResponse>): _166.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _166.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _166.MsgDeleteLinkedEntityResponse;
                toJSON(_: _166.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeleteLinkedEntityResponse>): _166.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _166.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddAccordedRightResponse;
                fromJSON(_: any): _166.MsgAddAccordedRightResponse;
                toJSON(_: _166.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddAccordedRightResponse>): _166.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _166.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _166.MsgDeleteAccordedRightResponse;
                toJSON(_: _166.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeleteAccordedRightResponse>): _166.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _166.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgAddIidContextResponse;
                fromJSON(_: any): _166.MsgAddIidContextResponse;
                toJSON(_: _166.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_166.MsgAddIidContextResponse>): _166.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _166.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeleteIidContextResponse;
                fromJSON(_: any): _166.MsgDeleteIidContextResponse;
                toJSON(_: _166.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeleteIidContextResponse>): _166.MsgDeleteIidContextResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _166.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgDeactivateIIDResponse;
                fromJSON(_: any): _166.MsgDeactivateIIDResponse;
                toJSON(_: _166.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_166.MsgDeactivateIIDResponse>): _166.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _165.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryIidDocumentsRequest;
                fromJSON(object: any): _165.QueryIidDocumentsRequest;
                toJSON(message: _165.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_165.QueryIidDocumentsRequest>): _165.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _165.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryIidDocumentsResponse;
                fromJSON(object: any): _165.QueryIidDocumentsResponse;
                toJSON(message: _165.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_165.QueryIidDocumentsResponse>): _165.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _165.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryIidDocumentRequest;
                fromJSON(object: any): _165.QueryIidDocumentRequest;
                toJSON(message: _165.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_165.QueryIidDocumentRequest>): _165.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _165.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryIidDocumentResponse;
                fromJSON(object: any): _165.QueryIidDocumentResponse;
                toJSON(message: _165.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_165.QueryIidDocumentResponse>): _165.QueryIidDocumentResponse;
            };
            IidDocument: {
                encode(message: _164.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.IidDocument;
                fromJSON(object: any): _164.IidDocument;
                toJSON(message: _164.IidDocument): unknown;
                fromPartial(object: Partial<_164.IidDocument>): _164.IidDocument;
            };
            GenesisState: {
                encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisState;
                fromJSON(object: any): _163.GenesisState;
                toJSON(message: _163.GenesisState): unknown;
                fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _162.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.IidDocumentCreatedEvent;
                fromJSON(object: any): _162.IidDocumentCreatedEvent;
                toJSON(message: _162.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_162.IidDocumentCreatedEvent>): _162.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _162.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.IidDocumentUpdatedEvent;
                fromJSON(object: any): _162.IidDocumentUpdatedEvent;
                toJSON(message: _162.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_162.IidDocumentUpdatedEvent>): _162.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                tokenList(request: _172.QueryTokenListRequest): Promise<_172.QueryTokenListResponse>;
                tokenDoc(request: _172.QueryTokenDocRequest): Promise<_172.QueryTokenDocResponse>;
                tokenMetadata(request: _172.QueryTokenMetadataRequest): Promise<_172.QueryTokenMetadataResponse>;
            };
            MsgCreateToken: {
                encode(message: _174.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgCreateToken;
                fromJSON(object: any): _174.MsgCreateToken;
                toJSON(message: _174.MsgCreateToken): unknown;
                fromPartial(object: Partial<_174.MsgCreateToken>): _174.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _174.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgCreateTokenResponse;
                fromJSON(_: any): _174.MsgCreateTokenResponse;
                toJSON(_: _174.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_174.MsgCreateTokenResponse>): _174.MsgCreateTokenResponse;
            };
            MsgMintToken: {
                encode(message: _174.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgMintToken;
                fromJSON(object: any): _174.MsgMintToken;
                toJSON(message: _174.MsgMintToken): unknown;
                fromPartial(object: Partial<_174.MsgMintToken>): _174.MsgMintToken;
            };
            MintBatch: {
                encode(message: _174.MintBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MintBatch;
                fromJSON(object: any): _174.MintBatch;
                toJSON(message: _174.MintBatch): unknown;
                fromPartial(object: Partial<_174.MintBatch>): _174.MintBatch;
            };
            MsgMintTokenResponse: {
                encode(_: _174.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgMintTokenResponse;
                fromJSON(_: any): _174.MsgMintTokenResponse;
                toJSON(_: _174.MsgMintTokenResponse): unknown;
                fromPartial(_: Partial<_174.MsgMintTokenResponse>): _174.MsgMintTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _174.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgTransferToken;
                fromJSON(object: any): _174.MsgTransferToken;
                toJSON(message: _174.MsgTransferToken): unknown;
                fromPartial(object: Partial<_174.MsgTransferToken>): _174.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _174.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgTransferTokenResponse;
                fromJSON(_: any): _174.MsgTransferTokenResponse;
                toJSON(_: _174.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_174.MsgTransferTokenResponse>): _174.MsgTransferTokenResponse;
            };
            TokenBatch: {
                encode(message: _174.TokenBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TokenBatch;
                fromJSON(object: any): _174.TokenBatch;
                toJSON(message: _174.TokenBatch): unknown;
                fromPartial(object: Partial<_174.TokenBatch>): _174.TokenBatch;
            };
            MsgRetireToken: {
                encode(message: _174.MsgRetireToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgRetireToken;
                fromJSON(object: any): _174.MsgRetireToken;
                toJSON(message: _174.MsgRetireToken): unknown;
                fromPartial(object: Partial<_174.MsgRetireToken>): _174.MsgRetireToken;
            };
            MsgRetireTokenResponse: {
                encode(_: _174.MsgRetireTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgRetireTokenResponse;
                fromJSON(_: any): _174.MsgRetireTokenResponse;
                toJSON(_: _174.MsgRetireTokenResponse): unknown;
                fromPartial(_: Partial<_174.MsgRetireTokenResponse>): _174.MsgRetireTokenResponse;
            };
            MsgCancelToken: {
                encode(message: _174.MsgCancelToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgCancelToken;
                fromJSON(object: any): _174.MsgCancelToken;
                toJSON(message: _174.MsgCancelToken): unknown;
                fromPartial(object: Partial<_174.MsgCancelToken>): _174.MsgCancelToken;
            };
            MsgCancelTokenResponse: {
                encode(_: _174.MsgCancelTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgCancelTokenResponse;
                fromJSON(_: any): _174.MsgCancelTokenResponse;
                toJSON(_: _174.MsgCancelTokenResponse): unknown;
                fromPartial(_: Partial<_174.MsgCancelTokenResponse>): _174.MsgCancelTokenResponse;
            };
            MsgPauseToken: {
                encode(message: _174.MsgPauseToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgPauseToken;
                fromJSON(object: any): _174.MsgPauseToken;
                toJSON(message: _174.MsgPauseToken): unknown;
                fromPartial(object: Partial<_174.MsgPauseToken>): _174.MsgPauseToken;
            };
            MsgPauseTokenResponse: {
                encode(_: _174.MsgPauseTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgPauseTokenResponse;
                fromJSON(_: any): _174.MsgPauseTokenResponse;
                toJSON(_: _174.MsgPauseTokenResponse): unknown;
                fromPartial(_: Partial<_174.MsgPauseTokenResponse>): _174.MsgPauseTokenResponse;
            };
            MsgStopToken: {
                encode(message: _174.MsgStopToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgStopToken;
                fromJSON(object: any): _174.MsgStopToken;
                toJSON(message: _174.MsgStopToken): unknown;
                fromPartial(object: Partial<_174.MsgStopToken>): _174.MsgStopToken;
            };
            MsgStopTokenResponse: {
                encode(_: _174.MsgStopTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgStopTokenResponse;
                fromJSON(_: any): _174.MsgStopTokenResponse;
                toJSON(_: _174.MsgStopTokenResponse): unknown;
                fromPartial(_: Partial<_174.MsgStopTokenResponse>): _174.MsgStopTokenResponse;
            };
            Params: {
                encode(message: _173.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Params;
                fromJSON(object: any): _173.Params;
                toJSON(message: _173.Params): unknown;
                fromPartial(object: Partial<_173.Params>): _173.Params;
            };
            Token: {
                encode(message: _173.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Token;
                fromJSON(object: any): _173.Token;
                toJSON(message: _173.Token): unknown;
                fromPartial(object: Partial<_173.Token>): _173.Token;
            };
            TokensRetired: {
                encode(message: _173.TokensRetired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.TokensRetired;
                fromJSON(object: any): _173.TokensRetired;
                toJSON(message: _173.TokensRetired): unknown;
                fromPartial(object: Partial<_173.TokensRetired>): _173.TokensRetired;
            };
            TokensCancelled: {
                encode(message: _173.TokensCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.TokensCancelled;
                fromJSON(object: any): _173.TokensCancelled;
                toJSON(message: _173.TokensCancelled): unknown;
                fromPartial(object: Partial<_173.TokensCancelled>): _173.TokensCancelled;
            };
            TokenProperties: {
                encode(message: _173.TokenProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.TokenProperties;
                fromJSON(object: any): _173.TokenProperties;
                toJSON(message: _173.TokenProperties): unknown;
                fromPartial(object: Partial<_173.TokenProperties>): _173.TokenProperties;
            };
            TokenData: {
                encode(message: _173.TokenData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.TokenData;
                fromJSON(object: any): _173.TokenData;
                toJSON(message: _173.TokenData): unknown;
                fromPartial(object: Partial<_173.TokenData>): _173.TokenData;
            };
            QueryParamsRequest: {
                encode(_: _172.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsRequest;
                fromJSON(_: any): _172.QueryParamsRequest;
                toJSON(_: _172.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_172.QueryParamsRequest>): _172.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _172.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsResponse;
                fromJSON(object: any): _172.QueryParamsResponse;
                toJSON(message: _172.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_172.QueryParamsResponse>): _172.QueryParamsResponse;
            };
            QueryTokenListRequest: {
                encode(message: _172.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryTokenListRequest;
                fromJSON(object: any): _172.QueryTokenListRequest;
                toJSON(message: _172.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_172.QueryTokenListRequest>): _172.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _172.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryTokenListResponse;
                fromJSON(object: any): _172.QueryTokenListResponse;
                toJSON(message: _172.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_172.QueryTokenListResponse>): _172.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _172.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryTokenDocRequest;
                fromJSON(object: any): _172.QueryTokenDocRequest;
                toJSON(message: _172.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_172.QueryTokenDocRequest>): _172.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(message: _172.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryTokenDocResponse;
                fromJSON(object: any): _172.QueryTokenDocResponse;
                toJSON(message: _172.QueryTokenDocResponse): unknown;
                fromPartial(object: Partial<_172.QueryTokenDocResponse>): _172.QueryTokenDocResponse;
            };
            QueryTokenMetadataRequest: {
                encode(message: _172.QueryTokenMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryTokenMetadataRequest;
                fromJSON(object: any): _172.QueryTokenMetadataRequest;
                toJSON(message: _172.QueryTokenMetadataRequest): unknown;
                fromPartial(object: Partial<_172.QueryTokenMetadataRequest>): _172.QueryTokenMetadataRequest;
            };
            QueryTokenMetadataResponse: {
                encode(message: _172.QueryTokenMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryTokenMetadataResponse;
                fromJSON(object: any): _172.QueryTokenMetadataResponse;
                toJSON(message: _172.QueryTokenMetadataResponse): unknown;
                fromPartial(object: Partial<_172.QueryTokenMetadataResponse>): _172.QueryTokenMetadataResponse;
            };
            TokenMetadataProperties: {
                encode(message: _172.TokenMetadataProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TokenMetadataProperties;
                fromJSON(object: any): _172.TokenMetadataProperties;
                toJSON(message: _172.TokenMetadataProperties): unknown;
                fromPartial(object: Partial<_172.TokenMetadataProperties>): _172.TokenMetadataProperties;
            };
            SetTokenContractCodes: {
                encode(message: _171.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.SetTokenContractCodes;
                fromJSON(object: any): _171.SetTokenContractCodes;
                toJSON(message: _171.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_171.SetTokenContractCodes>): _171.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _170.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisState;
                fromJSON(object: any): _170.GenesisState;
                toJSON(message: _170.GenesisState): unknown;
                fromPartial(object: Partial<_170.GenesisState>): _170.GenesisState;
            };
            TokenCreatedEvent: {
                encode(message: _169.TokenCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenCreatedEvent;
                fromJSON(object: any): _169.TokenCreatedEvent;
                toJSON(message: _169.TokenCreatedEvent): unknown;
                fromPartial(object: Partial<_169.TokenCreatedEvent>): _169.TokenCreatedEvent;
            };
            TokenUpdatedEvent: {
                encode(message: _169.TokenUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenUpdatedEvent;
                fromJSON(object: any): _169.TokenUpdatedEvent;
                toJSON(message: _169.TokenUpdatedEvent): unknown;
                fromPartial(object: Partial<_169.TokenUpdatedEvent>): _169.TokenUpdatedEvent;
            };
            TokenMintedEvent: {
                encode(message: _169.TokenMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenMintedEvent;
                fromJSON(object: any): _169.TokenMintedEvent;
                toJSON(message: _169.TokenMintedEvent): unknown;
                fromPartial(object: Partial<_169.TokenMintedEvent>): _169.TokenMintedEvent;
            };
            TokenTransferredEvent: {
                encode(message: _169.TokenTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenTransferredEvent;
                fromJSON(object: any): _169.TokenTransferredEvent;
                toJSON(message: _169.TokenTransferredEvent): unknown;
                fromPartial(object: Partial<_169.TokenTransferredEvent>): _169.TokenTransferredEvent;
            };
            TokenCancelledEvent: {
                encode(message: _169.TokenCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenCancelledEvent;
                fromJSON(object: any): _169.TokenCancelledEvent;
                toJSON(message: _169.TokenCancelledEvent): unknown;
                fromPartial(object: Partial<_169.TokenCancelledEvent>): _169.TokenCancelledEvent;
            };
            TokenRetiredEvent: {
                encode(message: _169.TokenRetiredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenRetiredEvent;
                fromJSON(object: any): _169.TokenRetiredEvent;
                toJSON(message: _169.TokenRetiredEvent): unknown;
                fromPartial(object: Partial<_169.TokenRetiredEvent>): _169.TokenRetiredEvent;
            };
            TokenPausedEvent: {
                encode(message: _169.TokenPausedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenPausedEvent;
                fromJSON(object: any): _169.TokenPausedEvent;
                toJSON(message: _169.TokenPausedEvent): unknown;
                fromPartial(object: Partial<_169.TokenPausedEvent>): _169.TokenPausedEvent;
            };
            TokenStoppedEvent: {
                encode(message: _169.TokenStoppedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenStoppedEvent;
                fromJSON(object: any): _169.TokenStoppedEvent;
                toJSON(message: _169.TokenStoppedEvent): unknown;
                fromPartial(object: Partial<_169.TokenStoppedEvent>): _169.TokenStoppedEvent;
            };
            MintAuthorization: {
                encode(message: _168.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MintAuthorization;
                fromJSON(object: any): _168.MintAuthorization;
                toJSON(message: _168.MintAuthorization): unknown;
                fromPartial(object: Partial<_168.MintAuthorization>): _168.MintAuthorization;
            };
            MintConstraints: {
                encode(message: _168.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MintConstraints;
                fromJSON(object: any): _168.MintConstraints;
                toJSON(message: _168.MintConstraints): unknown;
                fromPartial(object: Partial<_168.MintConstraints>): _168.MintConstraints;
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
                    v1beta1: _239.MsgClientImpl;
                };
                claims: {
                    v1beta1: _240.MsgClientImpl;
                };
                entity: {
                    v1beta1: _241.MsgClientImpl;
                };
                iid: {
                    v1beta1: _242.MsgClientImpl;
                };
                token: {
                    v1beta1: _243.MsgClientImpl;
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
                        bonds(request?: _146.QueryBondsRequest): Promise<_146.QueryBondsResponse>;
                        bondsDetailed(request?: _146.QueryBondsDetailedRequest): Promise<_146.QueryBondsDetailedResponse>;
                        params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
                        bond(request: _146.QueryBondRequest): Promise<_146.QueryBondResponse>;
                        batch(request: _146.QueryBatchRequest): Promise<_146.QueryBatchResponse>;
                        lastBatch(request: _146.QueryLastBatchRequest): Promise<_146.QueryLastBatchResponse>;
                        currentPrice(request: _146.QueryCurrentPriceRequest): Promise<_146.QueryCurrentPriceResponse>;
                        currentReserve(request: _146.QueryCurrentReserveRequest): Promise<_146.QueryCurrentReserveResponse>;
                        availableReserve(request: _146.QueryAvailableReserveRequest): Promise<_146.QueryAvailableReserveResponse>;
                        customPrice(request: _146.QueryCustomPriceRequest): Promise<_146.QueryCustomPriceResponse>;
                        buyPrice(request: _146.QueryBuyPriceRequest): Promise<_146.QueryBuyPriceResponse>;
                        sellReturn(request: _146.QuerySellReturnRequest): Promise<_146.QuerySellReturnResponse>;
                        swapReturn(request: _146.QuerySwapReturnRequest): Promise<_146.QuerySwapReturnResponse>;
                        alphaMaximums(request: _146.QueryAlphaMaximumsRequest): Promise<_146.QueryAlphaMaximumsResponse>;
                    };
                };
                claims: {
                    v1beta1: {
                        params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                        collection(request: _153.QueryCollectionRequest): Promise<_153.QueryCollectionResponse>;
                        collectionList(request?: _153.QueryCollectionListRequest): Promise<_153.QueryCollectionListResponse>;
                        claim(request: _153.QueryClaimRequest): Promise<_153.QueryClaimResponse>;
                        claimList(request?: _153.QueryClaimListRequest): Promise<_153.QueryClaimListResponse>;
                        dispute(request: _153.QueryDisputeRequest): Promise<_153.QueryDisputeResponse>;
                        disputeList(request?: _153.QueryDisputeListRequest): Promise<_153.QueryDisputeListResponse>;
                    };
                };
                entity: {
                    v1beta1: {
                        params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                        entity(request: _160.QueryEntityRequest): Promise<_160.QueryEntityResponse>;
                        entityMetaData(request: _160.QueryEntityMetadataRequest): Promise<_160.QueryEntityMetadataResponse>;
                        entityIidDocument(request: _160.QueryEntityIidDocumentRequest): Promise<_160.QueryEntityIidDocumentResponse>;
                        entityVerified(request: _160.QueryEntityVerifiedRequest): Promise<_160.QueryEntityVerifiedResponse>;
                        entityList(request?: _160.QueryEntityListRequest): Promise<_160.QueryEntityListResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request?: _165.QueryIidDocumentsRequest): Promise<_165.QueryIidDocumentsResponse>;
                        iidDocument(request: _165.QueryIidDocumentRequest): Promise<_165.QueryIidDocumentResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                        tokenList(request: _172.QueryTokenListRequest): Promise<_172.QueryTokenListResponse>;
                        tokenDoc(request: _172.QueryTokenDocRequest): Promise<_172.QueryTokenDocResponse>;
                        tokenMetadata(request: _172.QueryTokenMetadataRequest): Promise<_172.QueryTokenMetadataResponse>;
                    };
                };
            };
        }>;
    };
}
