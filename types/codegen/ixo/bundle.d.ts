import * as _144 from "./bonds/v1beta1/bonds";
import * as _145 from "./bonds/v1beta1/event";
import * as _146 from "./bonds/v1beta1/genesis";
import * as _147 from "./bonds/v1beta1/query";
import * as _148 from "./bonds/v1beta1/tx";
import * as _149 from "./claims/v1beta1/authz";
import * as _150 from "./claims/v1beta1/claims";
import * as _151 from "./claims/v1beta1/cosmos";
import * as _152 from "./claims/v1beta1/event";
import * as _153 from "./claims/v1beta1/genesis";
import * as _154 from "./claims/v1beta1/query";
import * as _155 from "./claims/v1beta1/tx";
import * as _156 from "./entity/v1beta1/cosmos";
import * as _157 from "./entity/v1beta1/entity";
import * as _158 from "./entity/v1beta1/event";
import * as _159 from "./entity/v1beta1/genesis";
import * as _160 from "./entity/v1beta1/proposal";
import * as _161 from "./entity/v1beta1/query";
import * as _162 from "./entity/v1beta1/tx";
import * as _163 from "./iid/v1beta1/event";
import * as _164 from "./iid/v1beta1/genesis";
import * as _165 from "./iid/v1beta1/iid";
import * as _166 from "./iid/v1beta1/query";
import * as _167 from "./iid/v1beta1/tx";
import * as _168 from "./iid/v1beta1/types";
import * as _169 from "./token/v1beta1/authz";
import * as _170 from "./token/v1beta1/event";
import * as _171 from "./token/v1beta1/genesis";
import * as _172 from "./token/v1beta1/proposal";
import * as _173 from "./token/v1beta1/query";
import * as _174 from "./token/v1beta1/token";
import * as _175 from "./token/v1beta1/tx";
import * as _235 from "./bonds/v1beta1/query.rpc.Query";
import * as _236 from "./claims/v1beta1/query.rpc.Query";
import * as _237 from "./entity/v1beta1/query.rpc.Query";
import * as _238 from "./iid/v1beta1/query.rpc.Query";
import * as _239 from "./token/v1beta1/query.rpc.Query";
import * as _240 from "./bonds/v1beta1/tx.rpc.msg";
import * as _241 from "./claims/v1beta1/tx.rpc.msg";
import * as _242 from "./entity/v1beta1/tx.rpc.msg";
import * as _243 from "./iid/v1beta1/tx.rpc.msg";
import * as _244 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                bonds(request?: _147.QueryBondsRequest): Promise<_147.QueryBondsResponse>;
                bondsDetailed(request?: _147.QueryBondsDetailedRequest): Promise<_147.QueryBondsDetailedResponse>;
                params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                bond(request: _147.QueryBondRequest): Promise<_147.QueryBondResponse>;
                batch(request: _147.QueryBatchRequest): Promise<_147.QueryBatchResponse>;
                lastBatch(request: _147.QueryLastBatchRequest): Promise<_147.QueryLastBatchResponse>;
                currentPrice(request: _147.QueryCurrentPriceRequest): Promise<_147.QueryCurrentPriceResponse>;
                currentReserve(request: _147.QueryCurrentReserveRequest): Promise<_147.QueryCurrentReserveResponse>;
                availableReserve(request: _147.QueryAvailableReserveRequest): Promise<_147.QueryAvailableReserveResponse>;
                customPrice(request: _147.QueryCustomPriceRequest): Promise<_147.QueryCustomPriceResponse>;
                buyPrice(request: _147.QueryBuyPriceRequest): Promise<_147.QueryBuyPriceResponse>;
                sellReturn(request: _147.QuerySellReturnRequest): Promise<_147.QuerySellReturnResponse>;
                swapReturn(request: _147.QuerySwapReturnRequest): Promise<_147.QuerySwapReturnResponse>;
                alphaMaximums(request: _147.QueryAlphaMaximumsRequest): Promise<_147.QueryAlphaMaximumsResponse>;
            };
            MsgCreateBond: {
                encode(message: _148.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateBond;
                fromJSON(object: any): _148.MsgCreateBond;
                toJSON(message: _148.MsgCreateBond): unknown;
                fromPartial(object: Partial<_148.MsgCreateBond>): _148.MsgCreateBond;
            };
            MsgCreateBondResponse: {
                encode(_: _148.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateBondResponse;
                fromJSON(_: any): _148.MsgCreateBondResponse;
                toJSON(_: _148.MsgCreateBondResponse): unknown;
                fromPartial(_: Partial<_148.MsgCreateBondResponse>): _148.MsgCreateBondResponse;
            };
            MsgEditBond: {
                encode(message: _148.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgEditBond;
                fromJSON(object: any): _148.MsgEditBond;
                toJSON(message: _148.MsgEditBond): unknown;
                fromPartial(object: Partial<_148.MsgEditBond>): _148.MsgEditBond;
            };
            MsgEditBondResponse: {
                encode(_: _148.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgEditBondResponse;
                fromJSON(_: any): _148.MsgEditBondResponse;
                toJSON(_: _148.MsgEditBondResponse): unknown;
                fromPartial(_: Partial<_148.MsgEditBondResponse>): _148.MsgEditBondResponse;
            };
            MsgSetNextAlpha: {
                encode(message: _148.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSetNextAlpha;
                fromJSON(object: any): _148.MsgSetNextAlpha;
                toJSON(message: _148.MsgSetNextAlpha): unknown;
                fromPartial(object: Partial<_148.MsgSetNextAlpha>): _148.MsgSetNextAlpha;
            };
            MsgSetNextAlphaResponse: {
                encode(_: _148.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSetNextAlphaResponse;
                fromJSON(_: any): _148.MsgSetNextAlphaResponse;
                toJSON(_: _148.MsgSetNextAlphaResponse): unknown;
                fromPartial(_: Partial<_148.MsgSetNextAlphaResponse>): _148.MsgSetNextAlphaResponse;
            };
            MsgUpdateBondState: {
                encode(message: _148.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateBondState;
                fromJSON(object: any): _148.MsgUpdateBondState;
                toJSON(message: _148.MsgUpdateBondState): unknown;
                fromPartial(object: Partial<_148.MsgUpdateBondState>): _148.MsgUpdateBondState;
            };
            MsgUpdateBondStateResponse: {
                encode(_: _148.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateBondStateResponse;
                fromJSON(_: any): _148.MsgUpdateBondStateResponse;
                toJSON(_: _148.MsgUpdateBondStateResponse): unknown;
                fromPartial(_: Partial<_148.MsgUpdateBondStateResponse>): _148.MsgUpdateBondStateResponse;
            };
            MsgBuy: {
                encode(message: _148.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgBuy;
                fromJSON(object: any): _148.MsgBuy;
                toJSON(message: _148.MsgBuy): unknown;
                fromPartial(object: Partial<_148.MsgBuy>): _148.MsgBuy;
            };
            MsgBuyResponse: {
                encode(_: _148.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgBuyResponse;
                fromJSON(_: any): _148.MsgBuyResponse;
                toJSON(_: _148.MsgBuyResponse): unknown;
                fromPartial(_: Partial<_148.MsgBuyResponse>): _148.MsgBuyResponse;
            };
            MsgSell: {
                encode(message: _148.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSell;
                fromJSON(object: any): _148.MsgSell;
                toJSON(message: _148.MsgSell): unknown;
                fromPartial(object: Partial<_148.MsgSell>): _148.MsgSell;
            };
            MsgSellResponse: {
                encode(_: _148.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSellResponse;
                fromJSON(_: any): _148.MsgSellResponse;
                toJSON(_: _148.MsgSellResponse): unknown;
                fromPartial(_: Partial<_148.MsgSellResponse>): _148.MsgSellResponse;
            };
            MsgSwap: {
                encode(message: _148.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSwap;
                fromJSON(object: any): _148.MsgSwap;
                toJSON(message: _148.MsgSwap): unknown;
                fromPartial(object: Partial<_148.MsgSwap>): _148.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _148.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSwapResponse;
                fromJSON(_: any): _148.MsgSwapResponse;
                toJSON(_: _148.MsgSwapResponse): unknown;
                fromPartial(_: Partial<_148.MsgSwapResponse>): _148.MsgSwapResponse;
            };
            MsgMakeOutcomePayment: {
                encode(message: _148.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgMakeOutcomePayment;
                fromJSON(object: any): _148.MsgMakeOutcomePayment;
                toJSON(message: _148.MsgMakeOutcomePayment): unknown;
                fromPartial(object: Partial<_148.MsgMakeOutcomePayment>): _148.MsgMakeOutcomePayment;
            };
            MsgMakeOutcomePaymentResponse: {
                encode(_: _148.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgMakeOutcomePaymentResponse;
                fromJSON(_: any): _148.MsgMakeOutcomePaymentResponse;
                toJSON(_: _148.MsgMakeOutcomePaymentResponse): unknown;
                fromPartial(_: Partial<_148.MsgMakeOutcomePaymentResponse>): _148.MsgMakeOutcomePaymentResponse;
            };
            MsgWithdrawShare: {
                encode(message: _148.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawShare;
                fromJSON(object: any): _148.MsgWithdrawShare;
                toJSON(message: _148.MsgWithdrawShare): unknown;
                fromPartial(object: Partial<_148.MsgWithdrawShare>): _148.MsgWithdrawShare;
            };
            MsgWithdrawShareResponse: {
                encode(_: _148.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawShareResponse;
                fromJSON(_: any): _148.MsgWithdrawShareResponse;
                toJSON(_: _148.MsgWithdrawShareResponse): unknown;
                fromPartial(_: Partial<_148.MsgWithdrawShareResponse>): _148.MsgWithdrawShareResponse;
            };
            MsgWithdrawReserve: {
                encode(message: _148.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawReserve;
                fromJSON(object: any): _148.MsgWithdrawReserve;
                toJSON(message: _148.MsgWithdrawReserve): unknown;
                fromPartial(object: Partial<_148.MsgWithdrawReserve>): _148.MsgWithdrawReserve;
            };
            MsgWithdrawReserveResponse: {
                encode(_: _148.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawReserveResponse;
                fromJSON(_: any): _148.MsgWithdrawReserveResponse;
                toJSON(_: _148.MsgWithdrawReserveResponse): unknown;
                fromPartial(_: Partial<_148.MsgWithdrawReserveResponse>): _148.MsgWithdrawReserveResponse;
            };
            QueryBondsRequest: {
                encode(_: _147.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBondsRequest;
                fromJSON(_: any): _147.QueryBondsRequest;
                toJSON(_: _147.QueryBondsRequest): unknown;
                fromPartial(_: Partial<_147.QueryBondsRequest>): _147.QueryBondsRequest;
            };
            QueryBondsResponse: {
                encode(message: _147.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBondsResponse;
                fromJSON(object: any): _147.QueryBondsResponse;
                toJSON(message: _147.QueryBondsResponse): unknown;
                fromPartial(object: Partial<_147.QueryBondsResponse>): _147.QueryBondsResponse;
            };
            QueryBondsDetailedRequest: {
                encode(_: _147.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBondsDetailedRequest;
                fromJSON(_: any): _147.QueryBondsDetailedRequest;
                toJSON(_: _147.QueryBondsDetailedRequest): unknown;
                fromPartial(_: Partial<_147.QueryBondsDetailedRequest>): _147.QueryBondsDetailedRequest;
            };
            QueryBondsDetailedResponse: {
                encode(message: _147.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBondsDetailedResponse;
                fromJSON(object: any): _147.QueryBondsDetailedResponse;
                toJSON(message: _147.QueryBondsDetailedResponse): unknown;
                fromPartial(object: Partial<_147.QueryBondsDetailedResponse>): _147.QueryBondsDetailedResponse;
            };
            QueryBondRequest: {
                encode(message: _147.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBondRequest;
                fromJSON(object: any): _147.QueryBondRequest;
                toJSON(message: _147.QueryBondRequest): unknown;
                fromPartial(object: Partial<_147.QueryBondRequest>): _147.QueryBondRequest;
            };
            QueryBondResponse: {
                encode(message: _147.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBondResponse;
                fromJSON(object: any): _147.QueryBondResponse;
                toJSON(message: _147.QueryBondResponse): unknown;
                fromPartial(object: Partial<_147.QueryBondResponse>): _147.QueryBondResponse;
            };
            QueryBatchRequest: {
                encode(message: _147.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBatchRequest;
                fromJSON(object: any): _147.QueryBatchRequest;
                toJSON(message: _147.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_147.QueryBatchRequest>): _147.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _147.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBatchResponse;
                fromJSON(object: any): _147.QueryBatchResponse;
                toJSON(message: _147.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_147.QueryBatchResponse>): _147.QueryBatchResponse;
            };
            QueryLastBatchRequest: {
                encode(message: _147.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryLastBatchRequest;
                fromJSON(object: any): _147.QueryLastBatchRequest;
                toJSON(message: _147.QueryLastBatchRequest): unknown;
                fromPartial(object: Partial<_147.QueryLastBatchRequest>): _147.QueryLastBatchRequest;
            };
            QueryLastBatchResponse: {
                encode(message: _147.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryLastBatchResponse;
                fromJSON(object: any): _147.QueryLastBatchResponse;
                toJSON(message: _147.QueryLastBatchResponse): unknown;
                fromPartial(object: Partial<_147.QueryLastBatchResponse>): _147.QueryLastBatchResponse;
            };
            QueryCurrentPriceRequest: {
                encode(message: _147.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCurrentPriceRequest;
                fromJSON(object: any): _147.QueryCurrentPriceRequest;
                toJSON(message: _147.QueryCurrentPriceRequest): unknown;
                fromPartial(object: Partial<_147.QueryCurrentPriceRequest>): _147.QueryCurrentPriceRequest;
            };
            QueryCurrentPriceResponse: {
                encode(message: _147.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCurrentPriceResponse;
                fromJSON(object: any): _147.QueryCurrentPriceResponse;
                toJSON(message: _147.QueryCurrentPriceResponse): unknown;
                fromPartial(object: Partial<_147.QueryCurrentPriceResponse>): _147.QueryCurrentPriceResponse;
            };
            QueryCurrentReserveRequest: {
                encode(message: _147.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCurrentReserveRequest;
                fromJSON(object: any): _147.QueryCurrentReserveRequest;
                toJSON(message: _147.QueryCurrentReserveRequest): unknown;
                fromPartial(object: Partial<_147.QueryCurrentReserveRequest>): _147.QueryCurrentReserveRequest;
            };
            QueryCurrentReserveResponse: {
                encode(message: _147.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCurrentReserveResponse;
                fromJSON(object: any): _147.QueryCurrentReserveResponse;
                toJSON(message: _147.QueryCurrentReserveResponse): unknown;
                fromPartial(object: Partial<_147.QueryCurrentReserveResponse>): _147.QueryCurrentReserveResponse;
            };
            QueryAvailableReserveRequest: {
                encode(message: _147.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAvailableReserveRequest;
                fromJSON(object: any): _147.QueryAvailableReserveRequest;
                toJSON(message: _147.QueryAvailableReserveRequest): unknown;
                fromPartial(object: Partial<_147.QueryAvailableReserveRequest>): _147.QueryAvailableReserveRequest;
            };
            QueryAvailableReserveResponse: {
                encode(message: _147.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAvailableReserveResponse;
                fromJSON(object: any): _147.QueryAvailableReserveResponse;
                toJSON(message: _147.QueryAvailableReserveResponse): unknown;
                fromPartial(object: Partial<_147.QueryAvailableReserveResponse>): _147.QueryAvailableReserveResponse;
            };
            QueryCustomPriceRequest: {
                encode(message: _147.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCustomPriceRequest;
                fromJSON(object: any): _147.QueryCustomPriceRequest;
                toJSON(message: _147.QueryCustomPriceRequest): unknown;
                fromPartial(object: Partial<_147.QueryCustomPriceRequest>): _147.QueryCustomPriceRequest;
            };
            QueryCustomPriceResponse: {
                encode(message: _147.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCustomPriceResponse;
                fromJSON(object: any): _147.QueryCustomPriceResponse;
                toJSON(message: _147.QueryCustomPriceResponse): unknown;
                fromPartial(object: Partial<_147.QueryCustomPriceResponse>): _147.QueryCustomPriceResponse;
            };
            QueryBuyPriceRequest: {
                encode(message: _147.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBuyPriceRequest;
                fromJSON(object: any): _147.QueryBuyPriceRequest;
                toJSON(message: _147.QueryBuyPriceRequest): unknown;
                fromPartial(object: Partial<_147.QueryBuyPriceRequest>): _147.QueryBuyPriceRequest;
            };
            QueryBuyPriceResponse: {
                encode(message: _147.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryBuyPriceResponse;
                fromJSON(object: any): _147.QueryBuyPriceResponse;
                toJSON(message: _147.QueryBuyPriceResponse): unknown;
                fromPartial(object: Partial<_147.QueryBuyPriceResponse>): _147.QueryBuyPriceResponse;
            };
            QuerySellReturnRequest: {
                encode(message: _147.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QuerySellReturnRequest;
                fromJSON(object: any): _147.QuerySellReturnRequest;
                toJSON(message: _147.QuerySellReturnRequest): unknown;
                fromPartial(object: Partial<_147.QuerySellReturnRequest>): _147.QuerySellReturnRequest;
            };
            QuerySellReturnResponse: {
                encode(message: _147.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QuerySellReturnResponse;
                fromJSON(object: any): _147.QuerySellReturnResponse;
                toJSON(message: _147.QuerySellReturnResponse): unknown;
                fromPartial(object: Partial<_147.QuerySellReturnResponse>): _147.QuerySellReturnResponse;
            };
            QuerySwapReturnRequest: {
                encode(message: _147.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QuerySwapReturnRequest;
                fromJSON(object: any): _147.QuerySwapReturnRequest;
                toJSON(message: _147.QuerySwapReturnRequest): unknown;
                fromPartial(object: Partial<_147.QuerySwapReturnRequest>): _147.QuerySwapReturnRequest;
            };
            QuerySwapReturnResponse: {
                encode(message: _147.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QuerySwapReturnResponse;
                fromJSON(object: any): _147.QuerySwapReturnResponse;
                toJSON(message: _147.QuerySwapReturnResponse): unknown;
                fromPartial(object: Partial<_147.QuerySwapReturnResponse>): _147.QuerySwapReturnResponse;
            };
            QueryAlphaMaximumsRequest: {
                encode(message: _147.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAlphaMaximumsRequest;
                fromJSON(object: any): _147.QueryAlphaMaximumsRequest;
                toJSON(message: _147.QueryAlphaMaximumsRequest): unknown;
                fromPartial(object: Partial<_147.QueryAlphaMaximumsRequest>): _147.QueryAlphaMaximumsRequest;
            };
            QueryAlphaMaximumsResponse: {
                encode(message: _147.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAlphaMaximumsResponse;
                fromJSON(object: any): _147.QueryAlphaMaximumsResponse;
                toJSON(message: _147.QueryAlphaMaximumsResponse): unknown;
                fromPartial(object: Partial<_147.QueryAlphaMaximumsResponse>): _147.QueryAlphaMaximumsResponse;
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
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromJSON(object: any): _146.GenesisState;
                toJSON(message: _146.GenesisState): unknown;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            };
            BondCreatedEvent: {
                encode(message: _145.BondCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondCreatedEvent;
                fromJSON(object: any): _145.BondCreatedEvent;
                toJSON(message: _145.BondCreatedEvent): unknown;
                fromPartial(object: Partial<_145.BondCreatedEvent>): _145.BondCreatedEvent;
            };
            BondUpdatedEvent: {
                encode(message: _145.BondUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondUpdatedEvent;
                fromJSON(object: any): _145.BondUpdatedEvent;
                toJSON(message: _145.BondUpdatedEvent): unknown;
                fromPartial(object: Partial<_145.BondUpdatedEvent>): _145.BondUpdatedEvent;
            };
            BondSetNextAlphaEvent: {
                encode(message: _145.BondSetNextAlphaEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondSetNextAlphaEvent;
                fromJSON(object: any): _145.BondSetNextAlphaEvent;
                toJSON(message: _145.BondSetNextAlphaEvent): unknown;
                fromPartial(object: Partial<_145.BondSetNextAlphaEvent>): _145.BondSetNextAlphaEvent;
            };
            BondBuyOrderEvent: {
                encode(message: _145.BondBuyOrderEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondBuyOrderEvent;
                fromJSON(object: any): _145.BondBuyOrderEvent;
                toJSON(message: _145.BondBuyOrderEvent): unknown;
                fromPartial(object: Partial<_145.BondBuyOrderEvent>): _145.BondBuyOrderEvent;
            };
            BondSellOrderEvent: {
                encode(message: _145.BondSellOrderEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondSellOrderEvent;
                fromJSON(object: any): _145.BondSellOrderEvent;
                toJSON(message: _145.BondSellOrderEvent): unknown;
                fromPartial(object: Partial<_145.BondSellOrderEvent>): _145.BondSellOrderEvent;
            };
            BondSwapOrderEvent: {
                encode(message: _145.BondSwapOrderEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondSwapOrderEvent;
                fromJSON(object: any): _145.BondSwapOrderEvent;
                toJSON(message: _145.BondSwapOrderEvent): unknown;
                fromPartial(object: Partial<_145.BondSwapOrderEvent>): _145.BondSwapOrderEvent;
            };
            BondMakeOutcomePaymentEvent: {
                encode(message: _145.BondMakeOutcomePaymentEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondMakeOutcomePaymentEvent;
                fromJSON(object: any): _145.BondMakeOutcomePaymentEvent;
                toJSON(message: _145.BondMakeOutcomePaymentEvent): unknown;
                fromPartial(object: Partial<_145.BondMakeOutcomePaymentEvent>): _145.BondMakeOutcomePaymentEvent;
            };
            BondWithdrawShareEvent: {
                encode(message: _145.BondWithdrawShareEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondWithdrawShareEvent;
                fromJSON(object: any): _145.BondWithdrawShareEvent;
                toJSON(message: _145.BondWithdrawShareEvent): unknown;
                fromPartial(object: Partial<_145.BondWithdrawShareEvent>): _145.BondWithdrawShareEvent;
            };
            BondWithdrawReserveEvent: {
                encode(message: _145.BondWithdrawReserveEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondWithdrawReserveEvent;
                fromJSON(object: any): _145.BondWithdrawReserveEvent;
                toJSON(message: _145.BondWithdrawReserveEvent): unknown;
                fromPartial(object: Partial<_145.BondWithdrawReserveEvent>): _145.BondWithdrawReserveEvent;
            };
            BondEditAlphaSuccessEvent: {
                encode(message: _145.BondEditAlphaSuccessEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondEditAlphaSuccessEvent;
                fromJSON(object: any): _145.BondEditAlphaSuccessEvent;
                toJSON(message: _145.BondEditAlphaSuccessEvent): unknown;
                fromPartial(object: Partial<_145.BondEditAlphaSuccessEvent>): _145.BondEditAlphaSuccessEvent;
            };
            BondEditAlphaFailedEvent: {
                encode(message: _145.BondEditAlphaFailedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondEditAlphaFailedEvent;
                fromJSON(object: any): _145.BondEditAlphaFailedEvent;
                toJSON(message: _145.BondEditAlphaFailedEvent): unknown;
                fromPartial(object: Partial<_145.BondEditAlphaFailedEvent>): _145.BondEditAlphaFailedEvent;
            };
            BondBuyOrderFulfilledEvent: {
                encode(message: _145.BondBuyOrderFulfilledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondBuyOrderFulfilledEvent;
                fromJSON(object: any): _145.BondBuyOrderFulfilledEvent;
                toJSON(message: _145.BondBuyOrderFulfilledEvent): unknown;
                fromPartial(object: Partial<_145.BondBuyOrderFulfilledEvent>): _145.BondBuyOrderFulfilledEvent;
            };
            BondSellOrderFulfilledEvent: {
                encode(message: _145.BondSellOrderFulfilledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondSellOrderFulfilledEvent;
                fromJSON(object: any): _145.BondSellOrderFulfilledEvent;
                toJSON(message: _145.BondSellOrderFulfilledEvent): unknown;
                fromPartial(object: Partial<_145.BondSellOrderFulfilledEvent>): _145.BondSellOrderFulfilledEvent;
            };
            BondSwapOrderFulfilledEvent: {
                encode(message: _145.BondSwapOrderFulfilledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondSwapOrderFulfilledEvent;
                fromJSON(object: any): _145.BondSwapOrderFulfilledEvent;
                toJSON(message: _145.BondSwapOrderFulfilledEvent): unknown;
                fromPartial(object: Partial<_145.BondSwapOrderFulfilledEvent>): _145.BondSwapOrderFulfilledEvent;
            };
            BondBuyOrderCancelledEvent: {
                encode(message: _145.BondBuyOrderCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BondBuyOrderCancelledEvent;
                fromJSON(object: any): _145.BondBuyOrderCancelledEvent;
                toJSON(message: _145.BondBuyOrderCancelledEvent): unknown;
                fromPartial(object: Partial<_145.BondBuyOrderCancelledEvent>): _145.BondBuyOrderCancelledEvent;
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
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                collection(request: _154.QueryCollectionRequest): Promise<_154.QueryCollectionResponse>;
                collectionList(request?: _154.QueryCollectionListRequest): Promise<_154.QueryCollectionListResponse>;
                claim(request: _154.QueryClaimRequest): Promise<_154.QueryClaimResponse>;
                claimList(request?: _154.QueryClaimListRequest): Promise<_154.QueryClaimListResponse>;
                dispute(request: _154.QueryDisputeRequest): Promise<_154.QueryDisputeResponse>;
                disputeList(request?: _154.QueryDisputeListRequest): Promise<_154.QueryDisputeListResponse>;
            };
            MsgCreateCollection: {
                encode(message: _155.MsgCreateCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateCollection;
                fromJSON(object: any): _155.MsgCreateCollection;
                toJSON(message: _155.MsgCreateCollection): unknown;
                fromPartial(object: Partial<_155.MsgCreateCollection>): _155.MsgCreateCollection;
            };
            MsgCreateCollectionResponse: {
                encode(_: _155.MsgCreateCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateCollectionResponse;
                fromJSON(_: any): _155.MsgCreateCollectionResponse;
                toJSON(_: _155.MsgCreateCollectionResponse): unknown;
                fromPartial(_: Partial<_155.MsgCreateCollectionResponse>): _155.MsgCreateCollectionResponse;
            };
            MsgSubmitClaim: {
                encode(message: _155.MsgSubmitClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSubmitClaim;
                fromJSON(object: any): _155.MsgSubmitClaim;
                toJSON(message: _155.MsgSubmitClaim): unknown;
                fromPartial(object: Partial<_155.MsgSubmitClaim>): _155.MsgSubmitClaim;
            };
            MsgSubmitClaimResponse: {
                encode(_: _155.MsgSubmitClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSubmitClaimResponse;
                fromJSON(_: any): _155.MsgSubmitClaimResponse;
                toJSON(_: _155.MsgSubmitClaimResponse): unknown;
                fromPartial(_: Partial<_155.MsgSubmitClaimResponse>): _155.MsgSubmitClaimResponse;
            };
            MsgEvaluateClaim: {
                encode(message: _155.MsgEvaluateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgEvaluateClaim;
                fromJSON(object: any): _155.MsgEvaluateClaim;
                toJSON(message: _155.MsgEvaluateClaim): unknown;
                fromPartial(object: Partial<_155.MsgEvaluateClaim>): _155.MsgEvaluateClaim;
            };
            MsgEvaluateClaimResponse: {
                encode(_: _155.MsgEvaluateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgEvaluateClaimResponse;
                fromJSON(_: any): _155.MsgEvaluateClaimResponse;
                toJSON(_: _155.MsgEvaluateClaimResponse): unknown;
                fromPartial(_: Partial<_155.MsgEvaluateClaimResponse>): _155.MsgEvaluateClaimResponse;
            };
            MsgDisputeClaim: {
                encode(message: _155.MsgDisputeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgDisputeClaim;
                fromJSON(object: any): _155.MsgDisputeClaim;
                toJSON(message: _155.MsgDisputeClaim): unknown;
                fromPartial(object: Partial<_155.MsgDisputeClaim>): _155.MsgDisputeClaim;
            };
            MsgDisputeClaimResponse: {
                encode(_: _155.MsgDisputeClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgDisputeClaimResponse;
                fromJSON(_: any): _155.MsgDisputeClaimResponse;
                toJSON(_: _155.MsgDisputeClaimResponse): unknown;
                fromPartial(_: Partial<_155.MsgDisputeClaimResponse>): _155.MsgDisputeClaimResponse;
            };
            MsgWithdrawPayment: {
                encode(message: _155.MsgWithdrawPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgWithdrawPayment;
                fromJSON(object: any): _155.MsgWithdrawPayment;
                toJSON(message: _155.MsgWithdrawPayment): unknown;
                fromPartial(object: Partial<_155.MsgWithdrawPayment>): _155.MsgWithdrawPayment;
            };
            MsgWithdrawPaymentResponse: {
                encode(_: _155.MsgWithdrawPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgWithdrawPaymentResponse;
                fromJSON(_: any): _155.MsgWithdrawPaymentResponse;
                toJSON(_: _155.MsgWithdrawPaymentResponse): unknown;
                fromPartial(_: Partial<_155.MsgWithdrawPaymentResponse>): _155.MsgWithdrawPaymentResponse;
            };
            MsgUpdateCollectionState: {
                encode(message: _155.MsgUpdateCollectionState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateCollectionState;
                fromJSON(object: any): _155.MsgUpdateCollectionState;
                toJSON(message: _155.MsgUpdateCollectionState): unknown;
                fromPartial(object: Partial<_155.MsgUpdateCollectionState>): _155.MsgUpdateCollectionState;
            };
            MsgUpdateCollectionStateResponse: {
                encode(_: _155.MsgUpdateCollectionStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateCollectionStateResponse;
                fromJSON(_: any): _155.MsgUpdateCollectionStateResponse;
                toJSON(_: _155.MsgUpdateCollectionStateResponse): unknown;
                fromPartial(_: Partial<_155.MsgUpdateCollectionStateResponse>): _155.MsgUpdateCollectionStateResponse;
            };
            MsgUpdateCollectionDates: {
                encode(message: _155.MsgUpdateCollectionDates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateCollectionDates;
                fromJSON(object: any): _155.MsgUpdateCollectionDates;
                toJSON(message: _155.MsgUpdateCollectionDates): unknown;
                fromPartial(object: Partial<_155.MsgUpdateCollectionDates>): _155.MsgUpdateCollectionDates;
            };
            MsgUpdateCollectionDatesResponse: {
                encode(_: _155.MsgUpdateCollectionDatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateCollectionDatesResponse;
                fromJSON(_: any): _155.MsgUpdateCollectionDatesResponse;
                toJSON(_: _155.MsgUpdateCollectionDatesResponse): unknown;
                fromPartial(_: Partial<_155.MsgUpdateCollectionDatesResponse>): _155.MsgUpdateCollectionDatesResponse;
            };
            MsgUpdateCollectionPayments: {
                encode(message: _155.MsgUpdateCollectionPayments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateCollectionPayments;
                fromJSON(object: any): _155.MsgUpdateCollectionPayments;
                toJSON(message: _155.MsgUpdateCollectionPayments): unknown;
                fromPartial(object: Partial<_155.MsgUpdateCollectionPayments>): _155.MsgUpdateCollectionPayments;
            };
            MsgUpdateCollectionPaymentsResponse: {
                encode(_: _155.MsgUpdateCollectionPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateCollectionPaymentsResponse;
                fromJSON(_: any): _155.MsgUpdateCollectionPaymentsResponse;
                toJSON(_: _155.MsgUpdateCollectionPaymentsResponse): unknown;
                fromPartial(_: Partial<_155.MsgUpdateCollectionPaymentsResponse>): _155.MsgUpdateCollectionPaymentsResponse;
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
            QueryCollectionRequest: {
                encode(message: _154.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryCollectionRequest;
                fromJSON(object: any): _154.QueryCollectionRequest;
                toJSON(message: _154.QueryCollectionRequest): unknown;
                fromPartial(object: Partial<_154.QueryCollectionRequest>): _154.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _154.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryCollectionResponse;
                fromJSON(object: any): _154.QueryCollectionResponse;
                toJSON(message: _154.QueryCollectionResponse): unknown;
                fromPartial(object: Partial<_154.QueryCollectionResponse>): _154.QueryCollectionResponse;
            };
            QueryCollectionListRequest: {
                encode(message: _154.QueryCollectionListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryCollectionListRequest;
                fromJSON(object: any): _154.QueryCollectionListRequest;
                toJSON(message: _154.QueryCollectionListRequest): unknown;
                fromPartial(object: Partial<_154.QueryCollectionListRequest>): _154.QueryCollectionListRequest;
            };
            QueryCollectionListResponse: {
                encode(message: _154.QueryCollectionListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryCollectionListResponse;
                fromJSON(object: any): _154.QueryCollectionListResponse;
                toJSON(message: _154.QueryCollectionListResponse): unknown;
                fromPartial(object: Partial<_154.QueryCollectionListResponse>): _154.QueryCollectionListResponse;
            };
            QueryClaimRequest: {
                encode(message: _154.QueryClaimRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClaimRequest;
                fromJSON(object: any): _154.QueryClaimRequest;
                toJSON(message: _154.QueryClaimRequest): unknown;
                fromPartial(object: Partial<_154.QueryClaimRequest>): _154.QueryClaimRequest;
            };
            QueryClaimResponse: {
                encode(message: _154.QueryClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClaimResponse;
                fromJSON(object: any): _154.QueryClaimResponse;
                toJSON(message: _154.QueryClaimResponse): unknown;
                fromPartial(object: Partial<_154.QueryClaimResponse>): _154.QueryClaimResponse;
            };
            QueryClaimListRequest: {
                encode(message: _154.QueryClaimListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClaimListRequest;
                fromJSON(object: any): _154.QueryClaimListRequest;
                toJSON(message: _154.QueryClaimListRequest): unknown;
                fromPartial(object: Partial<_154.QueryClaimListRequest>): _154.QueryClaimListRequest;
            };
            QueryClaimListResponse: {
                encode(message: _154.QueryClaimListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClaimListResponse;
                fromJSON(object: any): _154.QueryClaimListResponse;
                toJSON(message: _154.QueryClaimListResponse): unknown;
                fromPartial(object: Partial<_154.QueryClaimListResponse>): _154.QueryClaimListResponse;
            };
            QueryDisputeRequest: {
                encode(message: _154.QueryDisputeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDisputeRequest;
                fromJSON(object: any): _154.QueryDisputeRequest;
                toJSON(message: _154.QueryDisputeRequest): unknown;
                fromPartial(object: Partial<_154.QueryDisputeRequest>): _154.QueryDisputeRequest;
            };
            QueryDisputeResponse: {
                encode(message: _154.QueryDisputeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDisputeResponse;
                fromJSON(object: any): _154.QueryDisputeResponse;
                toJSON(message: _154.QueryDisputeResponse): unknown;
                fromPartial(object: Partial<_154.QueryDisputeResponse>): _154.QueryDisputeResponse;
            };
            QueryDisputeListRequest: {
                encode(message: _154.QueryDisputeListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDisputeListRequest;
                fromJSON(object: any): _154.QueryDisputeListRequest;
                toJSON(message: _154.QueryDisputeListRequest): unknown;
                fromPartial(object: Partial<_154.QueryDisputeListRequest>): _154.QueryDisputeListRequest;
            };
            QueryDisputeListResponse: {
                encode(message: _154.QueryDisputeListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDisputeListResponse;
                fromJSON(object: any): _154.QueryDisputeListResponse;
                toJSON(message: _154.QueryDisputeListResponse): unknown;
                fromPartial(object: Partial<_154.QueryDisputeListResponse>): _154.QueryDisputeListResponse;
            };
            GenesisState: {
                encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisState;
                fromJSON(object: any): _153.GenesisState;
                toJSON(message: _153.GenesisState): unknown;
                fromPartial(object: Partial<_153.GenesisState>): _153.GenesisState;
            };
            CollectionCreatedEvent: {
                encode(message: _152.CollectionCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.CollectionCreatedEvent;
                fromJSON(object: any): _152.CollectionCreatedEvent;
                toJSON(message: _152.CollectionCreatedEvent): unknown;
                fromPartial(object: Partial<_152.CollectionCreatedEvent>): _152.CollectionCreatedEvent;
            };
            CollectionUpdatedEvent: {
                encode(message: _152.CollectionUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.CollectionUpdatedEvent;
                fromJSON(object: any): _152.CollectionUpdatedEvent;
                toJSON(message: _152.CollectionUpdatedEvent): unknown;
                fromPartial(object: Partial<_152.CollectionUpdatedEvent>): _152.CollectionUpdatedEvent;
            };
            ClaimSubmittedEvent: {
                encode(message: _152.ClaimSubmittedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ClaimSubmittedEvent;
                fromJSON(object: any): _152.ClaimSubmittedEvent;
                toJSON(message: _152.ClaimSubmittedEvent): unknown;
                fromPartial(object: Partial<_152.ClaimSubmittedEvent>): _152.ClaimSubmittedEvent;
            };
            ClaimUpdatedEvent: {
                encode(message: _152.ClaimUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ClaimUpdatedEvent;
                fromJSON(object: any): _152.ClaimUpdatedEvent;
                toJSON(message: _152.ClaimUpdatedEvent): unknown;
                fromPartial(object: Partial<_152.ClaimUpdatedEvent>): _152.ClaimUpdatedEvent;
            };
            ClaimEvaluatedEvent: {
                encode(message: _152.ClaimEvaluatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ClaimEvaluatedEvent;
                fromJSON(object: any): _152.ClaimEvaluatedEvent;
                toJSON(message: _152.ClaimEvaluatedEvent): unknown;
                fromPartial(object: Partial<_152.ClaimEvaluatedEvent>): _152.ClaimEvaluatedEvent;
            };
            ClaimDisputedEvent: {
                encode(message: _152.ClaimDisputedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ClaimDisputedEvent;
                fromJSON(object: any): _152.ClaimDisputedEvent;
                toJSON(message: _152.ClaimDisputedEvent): unknown;
                fromPartial(object: Partial<_152.ClaimDisputedEvent>): _152.ClaimDisputedEvent;
            };
            PaymentWithdrawnEvent: {
                encode(message: _152.PaymentWithdrawnEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.PaymentWithdrawnEvent;
                fromJSON(object: any): _152.PaymentWithdrawnEvent;
                toJSON(message: _152.PaymentWithdrawnEvent): unknown;
                fromPartial(object: Partial<_152.PaymentWithdrawnEvent>): _152.PaymentWithdrawnEvent;
            };
            PaymentWithdrawCreatedEvent: {
                encode(message: _152.PaymentWithdrawCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.PaymentWithdrawCreatedEvent;
                fromJSON(object: any): _152.PaymentWithdrawCreatedEvent;
                toJSON(message: _152.PaymentWithdrawCreatedEvent): unknown;
                fromPartial(object: Partial<_152.PaymentWithdrawCreatedEvent>): _152.PaymentWithdrawCreatedEvent;
            };
            Input: {
                encode(message: _151.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Input;
                fromJSON(object: any): _151.Input;
                toJSON(message: _151.Input): unknown;
                fromPartial(object: Partial<_151.Input>): _151.Input;
            };
            Output: {
                encode(message: _151.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Output;
                fromJSON(object: any): _151.Output;
                toJSON(message: _151.Output): unknown;
                fromPartial(object: Partial<_151.Output>): _151.Output;
            };
            collectionStateFromJSON(object: any): _150.CollectionState;
            collectionStateToJSON(object: _150.CollectionState): string;
            evaluationStatusFromJSON(object: any): _150.EvaluationStatus;
            evaluationStatusToJSON(object: _150.EvaluationStatus): string;
            paymentTypeFromJSON(object: any): _150.PaymentType;
            paymentTypeToJSON(object: _150.PaymentType): string;
            paymentStatusFromJSON(object: any): _150.PaymentStatus;
            paymentStatusToJSON(object: _150.PaymentStatus): string;
            CollectionState: typeof _150.CollectionState;
            CollectionStateSDKType: typeof _150.CollectionState;
            EvaluationStatus: typeof _150.EvaluationStatus;
            EvaluationStatusSDKType: typeof _150.EvaluationStatus;
            PaymentType: typeof _150.PaymentType;
            PaymentTypeSDKType: typeof _150.PaymentType;
            PaymentStatus: typeof _150.PaymentStatus;
            PaymentStatusSDKType: typeof _150.PaymentStatus;
            Params: {
                encode(message: _150.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Params;
                fromJSON(object: any): _150.Params;
                toJSON(message: _150.Params): unknown;
                fromPartial(object: Partial<_150.Params>): _150.Params;
            };
            Collection: {
                encode(message: _150.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Collection;
                fromJSON(object: any): _150.Collection;
                toJSON(message: _150.Collection): unknown;
                fromPartial(object: Partial<_150.Collection>): _150.Collection;
            };
            Payments: {
                encode(message: _150.Payments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Payments;
                fromJSON(object: any): _150.Payments;
                toJSON(message: _150.Payments): unknown;
                fromPartial(object: Partial<_150.Payments>): _150.Payments;
            };
            Payment: {
                encode(message: _150.Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Payment;
                fromJSON(object: any): _150.Payment;
                toJSON(message: _150.Payment): unknown;
                fromPartial(object: Partial<_150.Payment>): _150.Payment;
            };
            Contract1155Payment: {
                encode(message: _150.Contract1155Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Contract1155Payment;
                fromJSON(object: any): _150.Contract1155Payment;
                toJSON(message: _150.Contract1155Payment): unknown;
                fromPartial(object: Partial<_150.Contract1155Payment>): _150.Contract1155Payment;
            };
            Claim: {
                encode(message: _150.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Claim;
                fromJSON(object: any): _150.Claim;
                toJSON(message: _150.Claim): unknown;
                fromPartial(object: Partial<_150.Claim>): _150.Claim;
            };
            ClaimPayments: {
                encode(message: _150.ClaimPayments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ClaimPayments;
                fromJSON(object: any): _150.ClaimPayments;
                toJSON(message: _150.ClaimPayments): unknown;
                fromPartial(object: Partial<_150.ClaimPayments>): _150.ClaimPayments;
            };
            Evaluation: {
                encode(message: _150.Evaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Evaluation;
                fromJSON(object: any): _150.Evaluation;
                toJSON(message: _150.Evaluation): unknown;
                fromPartial(object: Partial<_150.Evaluation>): _150.Evaluation;
            };
            Dispute: {
                encode(message: _150.Dispute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Dispute;
                fromJSON(object: any): _150.Dispute;
                toJSON(message: _150.Dispute): unknown;
                fromPartial(object: Partial<_150.Dispute>): _150.Dispute;
            };
            DisputeData: {
                encode(message: _150.DisputeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.DisputeData;
                fromJSON(object: any): _150.DisputeData;
                toJSON(message: _150.DisputeData): unknown;
                fromPartial(object: Partial<_150.DisputeData>): _150.DisputeData;
            };
            SubmitClaimAuthorization: {
                encode(message: _149.SubmitClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SubmitClaimAuthorization;
                fromJSON(object: any): _149.SubmitClaimAuthorization;
                toJSON(message: _149.SubmitClaimAuthorization): unknown;
                fromPartial(object: Partial<_149.SubmitClaimAuthorization>): _149.SubmitClaimAuthorization;
            };
            SubmitClaimConstraints: {
                encode(message: _149.SubmitClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SubmitClaimConstraints;
                fromJSON(object: any): _149.SubmitClaimConstraints;
                toJSON(message: _149.SubmitClaimConstraints): unknown;
                fromPartial(object: Partial<_149.SubmitClaimConstraints>): _149.SubmitClaimConstraints;
            };
            EvaluateClaimAuthorization: {
                encode(message: _149.EvaluateClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EvaluateClaimAuthorization;
                fromJSON(object: any): _149.EvaluateClaimAuthorization;
                toJSON(message: _149.EvaluateClaimAuthorization): unknown;
                fromPartial(object: Partial<_149.EvaluateClaimAuthorization>): _149.EvaluateClaimAuthorization;
            };
            EvaluateClaimConstraints: {
                encode(message: _149.EvaluateClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EvaluateClaimConstraints;
                fromJSON(object: any): _149.EvaluateClaimConstraints;
                toJSON(message: _149.EvaluateClaimConstraints): unknown;
                fromPartial(object: Partial<_149.EvaluateClaimConstraints>): _149.EvaluateClaimConstraints;
            };
            WithdrawPaymentAuthorization: {
                encode(message: _149.WithdrawPaymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.WithdrawPaymentAuthorization;
                fromJSON(object: any): _149.WithdrawPaymentAuthorization;
                toJSON(message: _149.WithdrawPaymentAuthorization): unknown;
                fromPartial(object: Partial<_149.WithdrawPaymentAuthorization>): _149.WithdrawPaymentAuthorization;
            };
            WithdrawPaymentConstraints: {
                encode(message: _149.WithdrawPaymentConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.WithdrawPaymentConstraints;
                fromJSON(object: any): _149.WithdrawPaymentConstraints;
                toJSON(message: _149.WithdrawPaymentConstraints): unknown;
                fromPartial(object: Partial<_149.WithdrawPaymentConstraints>): _149.WithdrawPaymentConstraints;
            };
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                entity(request: _161.QueryEntityRequest): Promise<_161.QueryEntityResponse>;
                entityMetaData(request: _161.QueryEntityMetadataRequest): Promise<_161.QueryEntityMetadataResponse>;
                entityIidDocument(request: _161.QueryEntityIidDocumentRequest): Promise<_161.QueryEntityIidDocumentResponse>;
                entityVerified(request: _161.QueryEntityVerifiedRequest): Promise<_161.QueryEntityVerifiedResponse>;
                entityList(request?: _161.QueryEntityListRequest): Promise<_161.QueryEntityListResponse>;
            };
            MsgCreateEntity: {
                encode(message: _162.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateEntity;
                fromJSON(object: any): _162.MsgCreateEntity;
                toJSON(message: _162.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_162.MsgCreateEntity>): _162.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _162.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateEntityResponse;
                fromJSON(object: any): _162.MsgCreateEntityResponse;
                toJSON(message: _162.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_162.MsgCreateEntityResponse>): _162.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _162.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateEntity;
                fromJSON(object: any): _162.MsgUpdateEntity;
                toJSON(message: _162.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_162.MsgUpdateEntity>): _162.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _162.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateEntityResponse;
                fromJSON(_: any): _162.MsgUpdateEntityResponse;
                toJSON(_: _162.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_162.MsgUpdateEntityResponse>): _162.MsgUpdateEntityResponse;
            };
            MsgUpdateEntityVerified: {
                encode(message: _162.MsgUpdateEntityVerified, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateEntityVerified;
                fromJSON(object: any): _162.MsgUpdateEntityVerified;
                toJSON(message: _162.MsgUpdateEntityVerified): unknown;
                fromPartial(object: Partial<_162.MsgUpdateEntityVerified>): _162.MsgUpdateEntityVerified;
            };
            MsgUpdateEntityVerifiedResponse: {
                encode(_: _162.MsgUpdateEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUpdateEntityVerifiedResponse;
                fromJSON(_: any): _162.MsgUpdateEntityVerifiedResponse;
                toJSON(_: _162.MsgUpdateEntityVerifiedResponse): unknown;
                fromPartial(_: Partial<_162.MsgUpdateEntityVerifiedResponse>): _162.MsgUpdateEntityVerifiedResponse;
            };
            MsgTransferEntity: {
                encode(message: _162.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgTransferEntity;
                fromJSON(object: any): _162.MsgTransferEntity;
                toJSON(message: _162.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_162.MsgTransferEntity>): _162.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _162.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgTransferEntityResponse;
                fromJSON(_: any): _162.MsgTransferEntityResponse;
                toJSON(_: _162.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_162.MsgTransferEntityResponse>): _162.MsgTransferEntityResponse;
            };
            MsgCreateEntityAccount: {
                encode(message: _162.MsgCreateEntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateEntityAccount;
                fromJSON(object: any): _162.MsgCreateEntityAccount;
                toJSON(message: _162.MsgCreateEntityAccount): unknown;
                fromPartial(object: Partial<_162.MsgCreateEntityAccount>): _162.MsgCreateEntityAccount;
            };
            MsgCreateEntityAccountResponse: {
                encode(message: _162.MsgCreateEntityAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateEntityAccountResponse;
                fromJSON(object: any): _162.MsgCreateEntityAccountResponse;
                toJSON(message: _162.MsgCreateEntityAccountResponse): unknown;
                fromPartial(object: Partial<_162.MsgCreateEntityAccountResponse>): _162.MsgCreateEntityAccountResponse;
            };
            MsgGrantEntityAccountAuthz: {
                encode(message: _162.MsgGrantEntityAccountAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgGrantEntityAccountAuthz;
                fromJSON(object: any): _162.MsgGrantEntityAccountAuthz;
                toJSON(message: _162.MsgGrantEntityAccountAuthz): unknown;
                fromPartial(object: Partial<_162.MsgGrantEntityAccountAuthz>): _162.MsgGrantEntityAccountAuthz;
            };
            MsgGrantEntityAccountAuthzResponse: {
                encode(_: _162.MsgGrantEntityAccountAuthzResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgGrantEntityAccountAuthzResponse;
                fromJSON(_: any): _162.MsgGrantEntityAccountAuthzResponse;
                toJSON(_: _162.MsgGrantEntityAccountAuthzResponse): unknown;
                fromPartial(_: Partial<_162.MsgGrantEntityAccountAuthzResponse>): _162.MsgGrantEntityAccountAuthzResponse;
            };
            MsgRevokeEntityAccountAuthz: {
                encode(message: _162.MsgRevokeEntityAccountAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgRevokeEntityAccountAuthz;
                fromJSON(object: any): _162.MsgRevokeEntityAccountAuthz;
                toJSON(message: _162.MsgRevokeEntityAccountAuthz): unknown;
                fromPartial(object: Partial<_162.MsgRevokeEntityAccountAuthz>): _162.MsgRevokeEntityAccountAuthz;
            };
            MsgRevokeEntityAccountAuthzResponse: {
                encode(_: _162.MsgRevokeEntityAccountAuthzResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgRevokeEntityAccountAuthzResponse;
                fromJSON(_: any): _162.MsgRevokeEntityAccountAuthzResponse;
                toJSON(_: _162.MsgRevokeEntityAccountAuthzResponse): unknown;
                fromPartial(_: Partial<_162.MsgRevokeEntityAccountAuthzResponse>): _162.MsgRevokeEntityAccountAuthzResponse;
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
            QueryEntityRequest: {
                encode(message: _161.QueryEntityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityRequest;
                fromJSON(object: any): _161.QueryEntityRequest;
                toJSON(message: _161.QueryEntityRequest): unknown;
                fromPartial(object: Partial<_161.QueryEntityRequest>): _161.QueryEntityRequest;
            };
            QueryEntityResponse: {
                encode(message: _161.QueryEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityResponse;
                fromJSON(object: any): _161.QueryEntityResponse;
                toJSON(message: _161.QueryEntityResponse): unknown;
                fromPartial(object: Partial<_161.QueryEntityResponse>): _161.QueryEntityResponse;
            };
            QueryEntityMetadataRequest: {
                encode(message: _161.QueryEntityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityMetadataRequest;
                fromJSON(object: any): _161.QueryEntityMetadataRequest;
                toJSON(message: _161.QueryEntityMetadataRequest): unknown;
                fromPartial(object: Partial<_161.QueryEntityMetadataRequest>): _161.QueryEntityMetadataRequest;
            };
            QueryEntityMetadataResponse: {
                encode(message: _161.QueryEntityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityMetadataResponse;
                fromJSON(object: any): _161.QueryEntityMetadataResponse;
                toJSON(message: _161.QueryEntityMetadataResponse): unknown;
                fromPartial(object: Partial<_161.QueryEntityMetadataResponse>): _161.QueryEntityMetadataResponse;
            };
            QueryEntityIidDocumentRequest: {
                encode(message: _161.QueryEntityIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityIidDocumentRequest;
                fromJSON(object: any): _161.QueryEntityIidDocumentRequest;
                toJSON(message: _161.QueryEntityIidDocumentRequest): unknown;
                fromPartial(object: Partial<_161.QueryEntityIidDocumentRequest>): _161.QueryEntityIidDocumentRequest;
            };
            QueryEntityIidDocumentResponse: {
                encode(message: _161.QueryEntityIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityIidDocumentResponse;
                fromJSON(object: any): _161.QueryEntityIidDocumentResponse;
                toJSON(message: _161.QueryEntityIidDocumentResponse): unknown;
                fromPartial(object: Partial<_161.QueryEntityIidDocumentResponse>): _161.QueryEntityIidDocumentResponse;
            };
            QueryEntityVerifiedRequest: {
                encode(message: _161.QueryEntityVerifiedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityVerifiedRequest;
                fromJSON(object: any): _161.QueryEntityVerifiedRequest;
                toJSON(message: _161.QueryEntityVerifiedRequest): unknown;
                fromPartial(object: Partial<_161.QueryEntityVerifiedRequest>): _161.QueryEntityVerifiedRequest;
            };
            QueryEntityVerifiedResponse: {
                encode(message: _161.QueryEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityVerifiedResponse;
                fromJSON(object: any): _161.QueryEntityVerifiedResponse;
                toJSON(message: _161.QueryEntityVerifiedResponse): unknown;
                fromPartial(object: Partial<_161.QueryEntityVerifiedResponse>): _161.QueryEntityVerifiedResponse;
            };
            QueryEntityListRequest: {
                encode(message: _161.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityListRequest;
                fromJSON(object: any): _161.QueryEntityListRequest;
                toJSON(message: _161.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_161.QueryEntityListRequest>): _161.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(message: _161.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEntityListResponse;
                fromJSON(object: any): _161.QueryEntityListResponse;
                toJSON(message: _161.QueryEntityListResponse): unknown;
                fromPartial(object: Partial<_161.QueryEntityListResponse>): _161.QueryEntityListResponse;
            };
            InitializeNftContract: {
                encode(message: _160.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.InitializeNftContract;
                fromJSON(object: any): _160.InitializeNftContract;
                toJSON(message: _160.InitializeNftContract): unknown;
                fromPartial(object: Partial<_160.InitializeNftContract>): _160.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                fromJSON(object: any): _159.GenesisState;
                toJSON(message: _159.GenesisState): unknown;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
            };
            EntityCreatedEvent: {
                encode(message: _158.EntityCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EntityCreatedEvent;
                fromJSON(object: any): _158.EntityCreatedEvent;
                toJSON(message: _158.EntityCreatedEvent): unknown;
                fromPartial(object: Partial<_158.EntityCreatedEvent>): _158.EntityCreatedEvent;
            };
            EntityUpdatedEvent: {
                encode(message: _158.EntityUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EntityUpdatedEvent;
                fromJSON(object: any): _158.EntityUpdatedEvent;
                toJSON(message: _158.EntityUpdatedEvent): unknown;
                fromPartial(object: Partial<_158.EntityUpdatedEvent>): _158.EntityUpdatedEvent;
            };
            EntityVerifiedUpdatedEvent: {
                encode(message: _158.EntityVerifiedUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EntityVerifiedUpdatedEvent;
                fromJSON(object: any): _158.EntityVerifiedUpdatedEvent;
                toJSON(message: _158.EntityVerifiedUpdatedEvent): unknown;
                fromPartial(object: Partial<_158.EntityVerifiedUpdatedEvent>): _158.EntityVerifiedUpdatedEvent;
            };
            EntityTransferredEvent: {
                encode(message: _158.EntityTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EntityTransferredEvent;
                fromJSON(object: any): _158.EntityTransferredEvent;
                toJSON(message: _158.EntityTransferredEvent): unknown;
                fromPartial(object: Partial<_158.EntityTransferredEvent>): _158.EntityTransferredEvent;
            };
            EntityAccountCreatedEvent: {
                encode(message: _158.EntityAccountCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EntityAccountCreatedEvent;
                fromJSON(object: any): _158.EntityAccountCreatedEvent;
                toJSON(message: _158.EntityAccountCreatedEvent): unknown;
                fromPartial(object: Partial<_158.EntityAccountCreatedEvent>): _158.EntityAccountCreatedEvent;
            };
            EntityAccountAuthzCreatedEvent: {
                encode(message: _158.EntityAccountAuthzCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EntityAccountAuthzCreatedEvent;
                fromJSON(object: any): _158.EntityAccountAuthzCreatedEvent;
                toJSON(message: _158.EntityAccountAuthzCreatedEvent): unknown;
                fromPartial(object: Partial<_158.EntityAccountAuthzCreatedEvent>): _158.EntityAccountAuthzCreatedEvent;
            };
            EntityAccountAuthzRevokedEvent: {
                encode(message: _158.EntityAccountAuthzRevokedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EntityAccountAuthzRevokedEvent;
                fromJSON(object: any): _158.EntityAccountAuthzRevokedEvent;
                toJSON(message: _158.EntityAccountAuthzRevokedEvent): unknown;
                fromPartial(object: Partial<_158.EntityAccountAuthzRevokedEvent>): _158.EntityAccountAuthzRevokedEvent;
            };
            Params: {
                encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                fromJSON(object: any): _157.Params;
                toJSON(message: _157.Params): unknown;
                fromPartial(object: Partial<_157.Params>): _157.Params;
            };
            Entity: {
                encode(message: _157.Entity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Entity;
                fromJSON(object: any): _157.Entity;
                toJSON(message: _157.Entity): unknown;
                fromPartial(object: Partial<_157.Entity>): _157.Entity;
            };
            EntityAccount: {
                encode(message: _157.EntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityAccount;
                fromJSON(object: any): _157.EntityAccount;
                toJSON(message: _157.EntityAccount): unknown;
                fromPartial(object: Partial<_157.EntityAccount>): _157.EntityAccount;
            };
            EntityMetadata: {
                encode(message: _157.EntityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EntityMetadata;
                fromJSON(object: any): _157.EntityMetadata;
                toJSON(message: _157.EntityMetadata): unknown;
                fromPartial(object: Partial<_157.EntityMetadata>): _157.EntityMetadata;
            };
            Grant: {
                encode(message: _156.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Grant;
                fromJSON(object: any): _156.Grant;
                toJSON(message: _156.Grant): unknown;
                fromPartial(object: Partial<_156.Grant>): _156.Grant;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _166.QueryIidDocumentsRequest): Promise<_166.QueryIidDocumentsResponse>;
                iidDocument(request: _166.QueryIidDocumentRequest): Promise<_166.QueryIidDocumentResponse>;
            };
            Context: {
                encode(message: _168.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Context;
                fromJSON(object: any): _168.Context;
                toJSON(message: _168.Context): unknown;
                fromPartial(object: Partial<_168.Context>): _168.Context;
            };
            AccordedRight: {
                encode(message: _168.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AccordedRight;
                fromJSON(object: any): _168.AccordedRight;
                toJSON(message: _168.AccordedRight): unknown;
                fromPartial(object: Partial<_168.AccordedRight>): _168.AccordedRight;
            };
            LinkedResource: {
                encode(message: _168.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.LinkedResource;
                fromJSON(object: any): _168.LinkedResource;
                toJSON(message: _168.LinkedResource): unknown;
                fromPartial(object: Partial<_168.LinkedResource>): _168.LinkedResource;
            };
            LinkedClaim: {
                encode(message: _168.LinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.LinkedClaim;
                fromJSON(object: any): _168.LinkedClaim;
                toJSON(message: _168.LinkedClaim): unknown;
                fromPartial(object: Partial<_168.LinkedClaim>): _168.LinkedClaim;
            };
            LinkedEntity: {
                encode(message: _168.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.LinkedEntity;
                fromJSON(object: any): _168.LinkedEntity;
                toJSON(message: _168.LinkedEntity): unknown;
                fromPartial(object: Partial<_168.LinkedEntity>): _168.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _168.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.VerificationMethod;
                fromJSON(object: any): _168.VerificationMethod;
                toJSON(message: _168.VerificationMethod): unknown;
                fromPartial(object: Partial<_168.VerificationMethod>): _168.VerificationMethod;
            };
            Service: {
                encode(message: _168.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Service;
                fromJSON(object: any): _168.Service;
                toJSON(message: _168.Service): unknown;
                fromPartial(object: Partial<_168.Service>): _168.Service;
            };
            IidMetadata: {
                encode(message: _168.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.IidMetadata;
                fromJSON(object: any): _168.IidMetadata;
                toJSON(message: _168.IidMetadata): unknown;
                fromPartial(object: Partial<_168.IidMetadata>): _168.IidMetadata;
            };
            Verification: {
                encode(message: _167.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Verification;
                fromJSON(object: any): _167.Verification;
                toJSON(message: _167.Verification): unknown;
                fromPartial(object: Partial<_167.Verification>): _167.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _167.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgCreateIidDocument;
                fromJSON(object: any): _167.MsgCreateIidDocument;
                toJSON(message: _167.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_167.MsgCreateIidDocument>): _167.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _167.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _167.MsgCreateIidDocumentResponse;
                toJSON(_: _167.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_167.MsgCreateIidDocumentResponse>): _167.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _167.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpdateIidDocument;
                fromJSON(object: any): _167.MsgUpdateIidDocument;
                toJSON(message: _167.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_167.MsgUpdateIidDocument>): _167.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _167.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _167.MsgUpdateIidDocumentResponse;
                toJSON(_: _167.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_167.MsgUpdateIidDocumentResponse>): _167.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _167.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddVerification;
                fromJSON(object: any): _167.MsgAddVerification;
                toJSON(message: _167.MsgAddVerification): unknown;
                fromPartial(object: Partial<_167.MsgAddVerification>): _167.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _167.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddVerificationResponse;
                fromJSON(_: any): _167.MsgAddVerificationResponse;
                toJSON(_: _167.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddVerificationResponse>): _167.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _167.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgSetVerificationRelationships;
                fromJSON(object: any): _167.MsgSetVerificationRelationships;
                toJSON(message: _167.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_167.MsgSetVerificationRelationships>): _167.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _167.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _167.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _167.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_167.MsgSetVerificationRelationshipsResponse>): _167.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _167.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgRevokeVerification;
                fromJSON(object: any): _167.MsgRevokeVerification;
                toJSON(message: _167.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_167.MsgRevokeVerification>): _167.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _167.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgRevokeVerificationResponse;
                fromJSON(_: any): _167.MsgRevokeVerificationResponse;
                toJSON(_: _167.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_167.MsgRevokeVerificationResponse>): _167.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _167.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddService;
                fromJSON(object: any): _167.MsgAddService;
                toJSON(message: _167.MsgAddService): unknown;
                fromPartial(object: Partial<_167.MsgAddService>): _167.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _167.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddServiceResponse;
                fromJSON(_: any): _167.MsgAddServiceResponse;
                toJSON(_: _167.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddServiceResponse>): _167.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _167.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteService;
                fromJSON(object: any): _167.MsgDeleteService;
                toJSON(message: _167.MsgDeleteService): unknown;
                fromPartial(object: Partial<_167.MsgDeleteService>): _167.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _167.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteServiceResponse;
                fromJSON(_: any): _167.MsgDeleteServiceResponse;
                toJSON(_: _167.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeleteServiceResponse>): _167.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _167.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddController;
                fromJSON(object: any): _167.MsgAddController;
                toJSON(message: _167.MsgAddController): unknown;
                fromPartial(object: Partial<_167.MsgAddController>): _167.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _167.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddControllerResponse;
                fromJSON(_: any): _167.MsgAddControllerResponse;
                toJSON(_: _167.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddControllerResponse>): _167.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _167.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteController;
                fromJSON(object: any): _167.MsgDeleteController;
                toJSON(message: _167.MsgDeleteController): unknown;
                fromPartial(object: Partial<_167.MsgDeleteController>): _167.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _167.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteControllerResponse;
                fromJSON(_: any): _167.MsgDeleteControllerResponse;
                toJSON(_: _167.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeleteControllerResponse>): _167.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _167.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddLinkedResource;
                fromJSON(object: any): _167.MsgAddLinkedResource;
                toJSON(message: _167.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_167.MsgAddLinkedResource>): _167.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _167.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteLinkedResource;
                fromJSON(object: any): _167.MsgDeleteLinkedResource;
                toJSON(message: _167.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_167.MsgDeleteLinkedResource>): _167.MsgDeleteLinkedResource;
            };
            MsgAddLinkedClaim: {
                encode(message: _167.MsgAddLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddLinkedClaim;
                fromJSON(object: any): _167.MsgAddLinkedClaim;
                toJSON(message: _167.MsgAddLinkedClaim): unknown;
                fromPartial(object: Partial<_167.MsgAddLinkedClaim>): _167.MsgAddLinkedClaim;
            };
            MsgDeleteLinkedClaim: {
                encode(message: _167.MsgDeleteLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteLinkedClaim;
                fromJSON(object: any): _167.MsgDeleteLinkedClaim;
                toJSON(message: _167.MsgDeleteLinkedClaim): unknown;
                fromPartial(object: Partial<_167.MsgDeleteLinkedClaim>): _167.MsgDeleteLinkedClaim;
            };
            MsgAddLinkedEntity: {
                encode(message: _167.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddLinkedEntity;
                fromJSON(object: any): _167.MsgAddLinkedEntity;
                toJSON(message: _167.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_167.MsgAddLinkedEntity>): _167.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _167.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteLinkedEntity;
                fromJSON(object: any): _167.MsgDeleteLinkedEntity;
                toJSON(message: _167.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_167.MsgDeleteLinkedEntity>): _167.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _167.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddAccordedRight;
                fromJSON(object: any): _167.MsgAddAccordedRight;
                toJSON(message: _167.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_167.MsgAddAccordedRight>): _167.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _167.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteAccordedRight;
                fromJSON(object: any): _167.MsgDeleteAccordedRight;
                toJSON(message: _167.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_167.MsgDeleteAccordedRight>): _167.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _167.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddIidContext;
                fromJSON(object: any): _167.MsgAddIidContext;
                toJSON(message: _167.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_167.MsgAddIidContext>): _167.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _167.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeactivateIID;
                fromJSON(object: any): _167.MsgDeactivateIID;
                toJSON(message: _167.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_167.MsgDeactivateIID>): _167.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _167.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteIidContext;
                fromJSON(object: any): _167.MsgDeleteIidContext;
                toJSON(message: _167.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_167.MsgDeleteIidContext>): _167.MsgDeleteIidContext;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _167.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _167.MsgAddLinkedResourceResponse;
                toJSON(_: _167.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddLinkedResourceResponse>): _167.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _167.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _167.MsgDeleteLinkedResourceResponse;
                toJSON(_: _167.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeleteLinkedResourceResponse>): _167.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedClaimResponse: {
                encode(_: _167.MsgAddLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddLinkedClaimResponse;
                fromJSON(_: any): _167.MsgAddLinkedClaimResponse;
                toJSON(_: _167.MsgAddLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddLinkedClaimResponse>): _167.MsgAddLinkedClaimResponse;
            };
            MsgDeleteLinkedClaimResponse: {
                encode(_: _167.MsgDeleteLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteLinkedClaimResponse;
                fromJSON(_: any): _167.MsgDeleteLinkedClaimResponse;
                toJSON(_: _167.MsgDeleteLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeleteLinkedClaimResponse>): _167.MsgDeleteLinkedClaimResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _167.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _167.MsgAddLinkedEntityResponse;
                toJSON(_: _167.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddLinkedEntityResponse>): _167.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _167.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _167.MsgDeleteLinkedEntityResponse;
                toJSON(_: _167.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeleteLinkedEntityResponse>): _167.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _167.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddAccordedRightResponse;
                fromJSON(_: any): _167.MsgAddAccordedRightResponse;
                toJSON(_: _167.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddAccordedRightResponse>): _167.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _167.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _167.MsgDeleteAccordedRightResponse;
                toJSON(_: _167.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeleteAccordedRightResponse>): _167.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _167.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgAddIidContextResponse;
                fromJSON(_: any): _167.MsgAddIidContextResponse;
                toJSON(_: _167.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_167.MsgAddIidContextResponse>): _167.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _167.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeleteIidContextResponse;
                fromJSON(_: any): _167.MsgDeleteIidContextResponse;
                toJSON(_: _167.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeleteIidContextResponse>): _167.MsgDeleteIidContextResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _167.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeactivateIIDResponse;
                fromJSON(_: any): _167.MsgDeactivateIIDResponse;
                toJSON(_: _167.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_167.MsgDeactivateIIDResponse>): _167.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _166.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryIidDocumentsRequest;
                fromJSON(object: any): _166.QueryIidDocumentsRequest;
                toJSON(message: _166.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_166.QueryIidDocumentsRequest>): _166.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _166.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryIidDocumentsResponse;
                fromJSON(object: any): _166.QueryIidDocumentsResponse;
                toJSON(message: _166.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_166.QueryIidDocumentsResponse>): _166.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _166.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryIidDocumentRequest;
                fromJSON(object: any): _166.QueryIidDocumentRequest;
                toJSON(message: _166.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_166.QueryIidDocumentRequest>): _166.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _166.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryIidDocumentResponse;
                fromJSON(object: any): _166.QueryIidDocumentResponse;
                toJSON(message: _166.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_166.QueryIidDocumentResponse>): _166.QueryIidDocumentResponse;
            };
            IidDocument: {
                encode(message: _165.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.IidDocument;
                fromJSON(object: any): _165.IidDocument;
                toJSON(message: _165.IidDocument): unknown;
                fromPartial(object: Partial<_165.IidDocument>): _165.IidDocument;
            };
            GenesisState: {
                encode(message: _164.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisState;
                fromJSON(object: any): _164.GenesisState;
                toJSON(message: _164.GenesisState): unknown;
                fromPartial(object: Partial<_164.GenesisState>): _164.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _163.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.IidDocumentCreatedEvent;
                fromJSON(object: any): _163.IidDocumentCreatedEvent;
                toJSON(message: _163.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_163.IidDocumentCreatedEvent>): _163.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _163.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.IidDocumentUpdatedEvent;
                fromJSON(object: any): _163.IidDocumentUpdatedEvent;
                toJSON(message: _163.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_163.IidDocumentUpdatedEvent>): _163.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _173.QueryParamsRequest): Promise<_173.QueryParamsResponse>;
                tokenMetadata(request: _173.QueryTokenMetadataRequest): Promise<_173.QueryTokenMetadataResponse>;
                tokenList(request: _173.QueryTokenListRequest): Promise<_173.QueryTokenListResponse>;
                tokenDoc(request: _173.QueryTokenDocRequest): Promise<_173.QueryTokenDocResponse>;
            };
            MsgCreateToken: {
                encode(message: _175.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgCreateToken;
                fromJSON(object: any): _175.MsgCreateToken;
                toJSON(message: _175.MsgCreateToken): unknown;
                fromPartial(object: Partial<_175.MsgCreateToken>): _175.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _175.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgCreateTokenResponse;
                fromJSON(_: any): _175.MsgCreateTokenResponse;
                toJSON(_: _175.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_175.MsgCreateTokenResponse>): _175.MsgCreateTokenResponse;
            };
            MsgMintToken: {
                encode(message: _175.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgMintToken;
                fromJSON(object: any): _175.MsgMintToken;
                toJSON(message: _175.MsgMintToken): unknown;
                fromPartial(object: Partial<_175.MsgMintToken>): _175.MsgMintToken;
            };
            MintBatch: {
                encode(message: _175.MintBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MintBatch;
                fromJSON(object: any): _175.MintBatch;
                toJSON(message: _175.MintBatch): unknown;
                fromPartial(object: Partial<_175.MintBatch>): _175.MintBatch;
            };
            MsgMintTokenResponse: {
                encode(_: _175.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgMintTokenResponse;
                fromJSON(_: any): _175.MsgMintTokenResponse;
                toJSON(_: _175.MsgMintTokenResponse): unknown;
                fromPartial(_: Partial<_175.MsgMintTokenResponse>): _175.MsgMintTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _175.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgTransferToken;
                fromJSON(object: any): _175.MsgTransferToken;
                toJSON(message: _175.MsgTransferToken): unknown;
                fromPartial(object: Partial<_175.MsgTransferToken>): _175.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _175.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgTransferTokenResponse;
                fromJSON(_: any): _175.MsgTransferTokenResponse;
                toJSON(_: _175.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_175.MsgTransferTokenResponse>): _175.MsgTransferTokenResponse;
            };
            TokenBatch: {
                encode(message: _175.TokenBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.TokenBatch;
                fromJSON(object: any): _175.TokenBatch;
                toJSON(message: _175.TokenBatch): unknown;
                fromPartial(object: Partial<_175.TokenBatch>): _175.TokenBatch;
            };
            MsgRetireToken: {
                encode(message: _175.MsgRetireToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgRetireToken;
                fromJSON(object: any): _175.MsgRetireToken;
                toJSON(message: _175.MsgRetireToken): unknown;
                fromPartial(object: Partial<_175.MsgRetireToken>): _175.MsgRetireToken;
            };
            MsgRetireTokenResponse: {
                encode(_: _175.MsgRetireTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgRetireTokenResponse;
                fromJSON(_: any): _175.MsgRetireTokenResponse;
                toJSON(_: _175.MsgRetireTokenResponse): unknown;
                fromPartial(_: Partial<_175.MsgRetireTokenResponse>): _175.MsgRetireTokenResponse;
            };
            MsgCancelToken: {
                encode(message: _175.MsgCancelToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgCancelToken;
                fromJSON(object: any): _175.MsgCancelToken;
                toJSON(message: _175.MsgCancelToken): unknown;
                fromPartial(object: Partial<_175.MsgCancelToken>): _175.MsgCancelToken;
            };
            MsgCancelTokenResponse: {
                encode(_: _175.MsgCancelTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgCancelTokenResponse;
                fromJSON(_: any): _175.MsgCancelTokenResponse;
                toJSON(_: _175.MsgCancelTokenResponse): unknown;
                fromPartial(_: Partial<_175.MsgCancelTokenResponse>): _175.MsgCancelTokenResponse;
            };
            MsgPauseToken: {
                encode(message: _175.MsgPauseToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgPauseToken;
                fromJSON(object: any): _175.MsgPauseToken;
                toJSON(message: _175.MsgPauseToken): unknown;
                fromPartial(object: Partial<_175.MsgPauseToken>): _175.MsgPauseToken;
            };
            MsgPauseTokenResponse: {
                encode(_: _175.MsgPauseTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgPauseTokenResponse;
                fromJSON(_: any): _175.MsgPauseTokenResponse;
                toJSON(_: _175.MsgPauseTokenResponse): unknown;
                fromPartial(_: Partial<_175.MsgPauseTokenResponse>): _175.MsgPauseTokenResponse;
            };
            MsgStopToken: {
                encode(message: _175.MsgStopToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgStopToken;
                fromJSON(object: any): _175.MsgStopToken;
                toJSON(message: _175.MsgStopToken): unknown;
                fromPartial(object: Partial<_175.MsgStopToken>): _175.MsgStopToken;
            };
            MsgStopTokenResponse: {
                encode(_: _175.MsgStopTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgStopTokenResponse;
                fromJSON(_: any): _175.MsgStopTokenResponse;
                toJSON(_: _175.MsgStopTokenResponse): unknown;
                fromPartial(_: Partial<_175.MsgStopTokenResponse>): _175.MsgStopTokenResponse;
            };
            Params: {
                encode(message: _174.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Params;
                fromJSON(object: any): _174.Params;
                toJSON(message: _174.Params): unknown;
                fromPartial(object: Partial<_174.Params>): _174.Params;
            };
            Token: {
                encode(message: _174.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Token;
                fromJSON(object: any): _174.Token;
                toJSON(message: _174.Token): unknown;
                fromPartial(object: Partial<_174.Token>): _174.Token;
            };
            TokensRetired: {
                encode(message: _174.TokensRetired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TokensRetired;
                fromJSON(object: any): _174.TokensRetired;
                toJSON(message: _174.TokensRetired): unknown;
                fromPartial(object: Partial<_174.TokensRetired>): _174.TokensRetired;
            };
            TokensCancelled: {
                encode(message: _174.TokensCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TokensCancelled;
                fromJSON(object: any): _174.TokensCancelled;
                toJSON(message: _174.TokensCancelled): unknown;
                fromPartial(object: Partial<_174.TokensCancelled>): _174.TokensCancelled;
            };
            TokenProperties: {
                encode(message: _174.TokenProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TokenProperties;
                fromJSON(object: any): _174.TokenProperties;
                toJSON(message: _174.TokenProperties): unknown;
                fromPartial(object: Partial<_174.TokenProperties>): _174.TokenProperties;
            };
            TokenData: {
                encode(message: _174.TokenData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TokenData;
                fromJSON(object: any): _174.TokenData;
                toJSON(message: _174.TokenData): unknown;
                fromPartial(object: Partial<_174.TokenData>): _174.TokenData;
            };
            QueryParamsRequest: {
                encode(_: _173.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryParamsRequest;
                fromJSON(_: any): _173.QueryParamsRequest;
                toJSON(_: _173.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_173.QueryParamsRequest>): _173.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _173.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryParamsResponse;
                fromJSON(object: any): _173.QueryParamsResponse;
                toJSON(message: _173.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_173.QueryParamsResponse>): _173.QueryParamsResponse;
            };
            QueryTokenListRequest: {
                encode(message: _173.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryTokenListRequest;
                fromJSON(object: any): _173.QueryTokenListRequest;
                toJSON(message: _173.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_173.QueryTokenListRequest>): _173.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _173.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryTokenListResponse;
                fromJSON(object: any): _173.QueryTokenListResponse;
                toJSON(message: _173.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_173.QueryTokenListResponse>): _173.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _173.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryTokenDocRequest;
                fromJSON(object: any): _173.QueryTokenDocRequest;
                toJSON(message: _173.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_173.QueryTokenDocRequest>): _173.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(message: _173.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryTokenDocResponse;
                fromJSON(object: any): _173.QueryTokenDocResponse;
                toJSON(message: _173.QueryTokenDocResponse): unknown;
                fromPartial(object: Partial<_173.QueryTokenDocResponse>): _173.QueryTokenDocResponse;
            };
            QueryTokenMetadataRequest: {
                encode(message: _173.QueryTokenMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryTokenMetadataRequest;
                fromJSON(object: any): _173.QueryTokenMetadataRequest;
                toJSON(message: _173.QueryTokenMetadataRequest): unknown;
                fromPartial(object: Partial<_173.QueryTokenMetadataRequest>): _173.QueryTokenMetadataRequest;
            };
            QueryTokenMetadataResponse: {
                encode(message: _173.QueryTokenMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryTokenMetadataResponse;
                fromJSON(object: any): _173.QueryTokenMetadataResponse;
                toJSON(message: _173.QueryTokenMetadataResponse): unknown;
                fromPartial(object: Partial<_173.QueryTokenMetadataResponse>): _173.QueryTokenMetadataResponse;
            };
            TokenMetadataProperties: {
                encode(message: _173.TokenMetadataProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.TokenMetadataProperties;
                fromJSON(object: any): _173.TokenMetadataProperties;
                toJSON(message: _173.TokenMetadataProperties): unknown;
                fromPartial(object: Partial<_173.TokenMetadataProperties>): _173.TokenMetadataProperties;
            };
            SetTokenContractCodes: {
                encode(message: _172.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SetTokenContractCodes;
                fromJSON(object: any): _172.SetTokenContractCodes;
                toJSON(message: _172.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_172.SetTokenContractCodes>): _172.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _171.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GenesisState;
                fromJSON(object: any): _171.GenesisState;
                toJSON(message: _171.GenesisState): unknown;
                fromPartial(object: Partial<_171.GenesisState>): _171.GenesisState;
            };
            TokenCreatedEvent: {
                encode(message: _170.TokenCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenCreatedEvent;
                fromJSON(object: any): _170.TokenCreatedEvent;
                toJSON(message: _170.TokenCreatedEvent): unknown;
                fromPartial(object: Partial<_170.TokenCreatedEvent>): _170.TokenCreatedEvent;
            };
            TokenUpdatedEvent: {
                encode(message: _170.TokenUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenUpdatedEvent;
                fromJSON(object: any): _170.TokenUpdatedEvent;
                toJSON(message: _170.TokenUpdatedEvent): unknown;
                fromPartial(object: Partial<_170.TokenUpdatedEvent>): _170.TokenUpdatedEvent;
            };
            TokenMintedEvent: {
                encode(message: _170.TokenMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenMintedEvent;
                fromJSON(object: any): _170.TokenMintedEvent;
                toJSON(message: _170.TokenMintedEvent): unknown;
                fromPartial(object: Partial<_170.TokenMintedEvent>): _170.TokenMintedEvent;
            };
            TokenTransferredEvent: {
                encode(message: _170.TokenTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenTransferredEvent;
                fromJSON(object: any): _170.TokenTransferredEvent;
                toJSON(message: _170.TokenTransferredEvent): unknown;
                fromPartial(object: Partial<_170.TokenTransferredEvent>): _170.TokenTransferredEvent;
            };
            TokenCancelledEvent: {
                encode(message: _170.TokenCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenCancelledEvent;
                fromJSON(object: any): _170.TokenCancelledEvent;
                toJSON(message: _170.TokenCancelledEvent): unknown;
                fromPartial(object: Partial<_170.TokenCancelledEvent>): _170.TokenCancelledEvent;
            };
            TokenRetiredEvent: {
                encode(message: _170.TokenRetiredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenRetiredEvent;
                fromJSON(object: any): _170.TokenRetiredEvent;
                toJSON(message: _170.TokenRetiredEvent): unknown;
                fromPartial(object: Partial<_170.TokenRetiredEvent>): _170.TokenRetiredEvent;
            };
            TokenPausedEvent: {
                encode(message: _170.TokenPausedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenPausedEvent;
                fromJSON(object: any): _170.TokenPausedEvent;
                toJSON(message: _170.TokenPausedEvent): unknown;
                fromPartial(object: Partial<_170.TokenPausedEvent>): _170.TokenPausedEvent;
            };
            TokenStoppedEvent: {
                encode(message: _170.TokenStoppedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TokenStoppedEvent;
                fromJSON(object: any): _170.TokenStoppedEvent;
                toJSON(message: _170.TokenStoppedEvent): unknown;
                fromPartial(object: Partial<_170.TokenStoppedEvent>): _170.TokenStoppedEvent;
            };
            MintAuthorization: {
                encode(message: _169.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MintAuthorization;
                fromJSON(object: any): _169.MintAuthorization;
                toJSON(message: _169.MintAuthorization): unknown;
                fromPartial(object: Partial<_169.MintAuthorization>): _169.MintAuthorization;
            };
            MintConstraints: {
                encode(message: _169.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MintConstraints;
                fromJSON(object: any): _169.MintConstraints;
                toJSON(message: _169.MintConstraints): unknown;
                fromPartial(object: Partial<_169.MintConstraints>): _169.MintConstraints;
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
                    v1beta1: _240.MsgClientImpl;
                };
                claims: {
                    v1beta1: _241.MsgClientImpl;
                };
                entity: {
                    v1beta1: _242.MsgClientImpl;
                };
                iid: {
                    v1beta1: _243.MsgClientImpl;
                };
                token: {
                    v1beta1: _244.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
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
                        bonds(request?: _147.QueryBondsRequest): Promise<_147.QueryBondsResponse>;
                        bondsDetailed(request?: _147.QueryBondsDetailedRequest): Promise<_147.QueryBondsDetailedResponse>;
                        params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                        bond(request: _147.QueryBondRequest): Promise<_147.QueryBondResponse>;
                        batch(request: _147.QueryBatchRequest): Promise<_147.QueryBatchResponse>;
                        lastBatch(request: _147.QueryLastBatchRequest): Promise<_147.QueryLastBatchResponse>;
                        currentPrice(request: _147.QueryCurrentPriceRequest): Promise<_147.QueryCurrentPriceResponse>;
                        currentReserve(request: _147.QueryCurrentReserveRequest): Promise<_147.QueryCurrentReserveResponse>;
                        availableReserve(request: _147.QueryAvailableReserveRequest): Promise<_147.QueryAvailableReserveResponse>;
                        customPrice(request: _147.QueryCustomPriceRequest): Promise<_147.QueryCustomPriceResponse>;
                        buyPrice(request: _147.QueryBuyPriceRequest): Promise<_147.QueryBuyPriceResponse>;
                        sellReturn(request: _147.QuerySellReturnRequest): Promise<_147.QuerySellReturnResponse>;
                        swapReturn(request: _147.QuerySwapReturnRequest): Promise<_147.QuerySwapReturnResponse>;
                        alphaMaximums(request: _147.QueryAlphaMaximumsRequest): Promise<_147.QueryAlphaMaximumsResponse>;
                    };
                };
                claims: {
                    v1beta1: {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        collection(request: _154.QueryCollectionRequest): Promise<_154.QueryCollectionResponse>;
                        collectionList(request?: _154.QueryCollectionListRequest): Promise<_154.QueryCollectionListResponse>;
                        claim(request: _154.QueryClaimRequest): Promise<_154.QueryClaimResponse>;
                        claimList(request?: _154.QueryClaimListRequest): Promise<_154.QueryClaimListResponse>;
                        dispute(request: _154.QueryDisputeRequest): Promise<_154.QueryDisputeResponse>;
                        disputeList(request?: _154.QueryDisputeListRequest): Promise<_154.QueryDisputeListResponse>;
                    };
                };
                entity: {
                    v1beta1: {
                        params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                        entity(request: _161.QueryEntityRequest): Promise<_161.QueryEntityResponse>;
                        entityMetaData(request: _161.QueryEntityMetadataRequest): Promise<_161.QueryEntityMetadataResponse>;
                        entityIidDocument(request: _161.QueryEntityIidDocumentRequest): Promise<_161.QueryEntityIidDocumentResponse>;
                        entityVerified(request: _161.QueryEntityVerifiedRequest): Promise<_161.QueryEntityVerifiedResponse>;
                        entityList(request?: _161.QueryEntityListRequest): Promise<_161.QueryEntityListResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request?: _166.QueryIidDocumentsRequest): Promise<_166.QueryIidDocumentsResponse>;
                        iidDocument(request: _166.QueryIidDocumentRequest): Promise<_166.QueryIidDocumentResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        params(request?: _173.QueryParamsRequest): Promise<_173.QueryParamsResponse>;
                        tokenMetadata(request: _173.QueryTokenMetadataRequest): Promise<_173.QueryTokenMetadataResponse>;
                        tokenList(request: _173.QueryTokenListRequest): Promise<_173.QueryTokenListResponse>;
                        tokenDoc(request: _173.QueryTokenDocRequest): Promise<_173.QueryTokenDocResponse>;
                    };
                };
            };
        }>;
    };
}
