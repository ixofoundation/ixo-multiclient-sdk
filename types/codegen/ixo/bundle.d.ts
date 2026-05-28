import * as _192 from "./bonds/v1beta1/bonds";
import * as _193 from "./bonds/v1beta1/event";
import * as _194 from "./bonds/v1beta1/genesis";
import * as _195 from "./bonds/v1beta1/query";
import * as _196 from "./bonds/v1beta1/tx";
import * as _197 from "./claims/v1beta1/authz";
import * as _198 from "./claims/v1beta1/claims";
import * as _199 from "./claims/v1beta1/event";
import * as _200 from "./claims/v1beta1/genesis";
import * as _201 from "./claims/v1beta1/query";
import * as _202 from "./claims/v1beta1/tx";
import * as _203 from "./entity/v1beta1/entity";
import * as _204 from "./entity/v1beta1/event";
import * as _205 from "./entity/v1beta1/genesis";
import * as _206 from "./entity/v1beta1/proposal";
import * as _207 from "./entity/v1beta1/query";
import * as _208 from "./entity/v1beta1/tx";
import * as _209 from "./epochs/v1beta1/epoch";
import * as _210 from "./epochs/v1beta1/event";
import * as _211 from "./epochs/v1beta1/genesis";
import * as _212 from "./epochs/v1beta1/query";
import * as _213 from "./iid/v1beta1/event";
import * as _214 from "./iid/v1beta1/genesis";
import * as _215 from "./iid/v1beta1/iid";
import * as _216 from "./iid/v1beta1/query";
import * as _217 from "./iid/v1beta1/tx";
import * as _218 from "./iid/v1beta1/types";
import * as _219 from "./liquidstake/v1beta1/event";
import * as _220 from "./liquidstake/v1beta1/genesis";
import * as _221 from "./liquidstake/v1beta1/liquidstake";
import * as _222 from "./liquidstake/v1beta1/query";
import * as _223 from "./liquidstake/v1beta1/tx";
import * as _224 from "./mint/v1beta1/event";
import * as _225 from "./mint/v1beta1/genesis";
import * as _226 from "./mint/v1beta1/mint";
import * as _227 from "./mint/v1beta1/query";
import * as _228 from "./names/v1beta1/event";
import * as _229 from "./names/v1beta1/genesis";
import * as _230 from "./names/v1beta1/names";
import * as _231 from "./names/v1beta1/query";
import * as _232 from "./names/v1beta1/tx";
import * as _233 from "./smartaccount/crypto/crypto";
import * as _234 from "./smartaccount/v1beta1/event";
import * as _235 from "./smartaccount/v1beta1/genesis";
import * as _236 from "./smartaccount/v1beta1/models";
import * as _237 from "./smartaccount/v1beta1/params";
import * as _238 from "./smartaccount/v1beta1/query";
import * as _239 from "./smartaccount/v1beta1/tx";
import * as _240 from "./token/v1beta1/authz";
import * as _241 from "./token/v1beta1/event";
import * as _242 from "./token/v1beta1/genesis";
import * as _243 from "./token/v1beta1/proposal";
import * as _244 from "./token/v1beta1/query";
import * as _245 from "./token/v1beta1/token";
import * as _246 from "./token/v1beta1/tx";
import * as _317 from "./bonds/v1beta1/query.rpc.Query";
import * as _318 from "./claims/v1beta1/query.rpc.Query";
import * as _319 from "./entity/v1beta1/query.rpc.Query";
import * as _320 from "./epochs/v1beta1/query.rpc.Query";
import * as _321 from "./iid/v1beta1/query.rpc.Query";
import * as _322 from "./liquidstake/v1beta1/query.rpc.Query";
import * as _323 from "./mint/v1beta1/query.rpc.Query";
import * as _324 from "./names/v1beta1/query.rpc.Query";
import * as _325 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _326 from "./token/v1beta1/query.rpc.Query";
import * as _327 from "./bonds/v1beta1/tx.rpc.msg";
import * as _328 from "./claims/v1beta1/tx.rpc.msg";
import * as _329 from "./entity/v1beta1/tx.rpc.msg";
import * as _330 from "./iid/v1beta1/tx.rpc.msg";
import * as _331 from "./liquidstake/v1beta1/tx.rpc.msg";
import * as _332 from "./names/v1beta1/tx.rpc.msg";
import * as _333 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _334 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                bonds(request?: _195.QueryBondsRequest): Promise<_195.QueryBondsResponse>;
                bondsDetailed(request?: _195.QueryBondsDetailedRequest): Promise<_195.QueryBondsDetailedResponse>;
                params(request?: _195.QueryParamsRequest): Promise<_195.QueryParamsResponse>;
                bond(request: _195.QueryBondRequest): Promise<_195.QueryBondResponse>;
                batch(request: _195.QueryBatchRequest): Promise<_195.QueryBatchResponse>;
                lastBatch(request: _195.QueryLastBatchRequest): Promise<_195.QueryLastBatchResponse>;
                currentPrice(request: _195.QueryCurrentPriceRequest): Promise<_195.QueryCurrentPriceResponse>;
                currentReserve(request: _195.QueryCurrentReserveRequest): Promise<_195.QueryCurrentReserveResponse>;
                availableReserve(request: _195.QueryAvailableReserveRequest): Promise<_195.QueryAvailableReserveResponse>;
                customPrice(request: _195.QueryCustomPriceRequest): Promise<_195.QueryCustomPriceResponse>;
                buyPrice(request: _195.QueryBuyPriceRequest): Promise<_195.QueryBuyPriceResponse>;
                sellReturn(request: _195.QuerySellReturnRequest): Promise<_195.QuerySellReturnResponse>;
                swapReturn(request: _195.QuerySwapReturnRequest): Promise<_195.QuerySwapReturnResponse>;
                alphaMaximums(request: _195.QueryAlphaMaximumsRequest): Promise<_195.QueryAlphaMaximumsResponse>;
            };
            MsgCreateBond: {
                encode(message: _196.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreateBond;
                fromJSON(object: any): _196.MsgCreateBond;
                toJSON(message: _196.MsgCreateBond): unknown;
                fromPartial(object: Partial<_196.MsgCreateBond>): _196.MsgCreateBond;
            };
            MsgCreateBondResponse: {
                encode(_: _196.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreateBondResponse;
                fromJSON(_: any): _196.MsgCreateBondResponse;
                toJSON(_: _196.MsgCreateBondResponse): unknown;
                fromPartial(_: Partial<_196.MsgCreateBondResponse>): _196.MsgCreateBondResponse;
            };
            MsgEditBond: {
                encode(message: _196.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgEditBond;
                fromJSON(object: any): _196.MsgEditBond;
                toJSON(message: _196.MsgEditBond): unknown;
                fromPartial(object: Partial<_196.MsgEditBond>): _196.MsgEditBond;
            };
            MsgEditBondResponse: {
                encode(_: _196.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgEditBondResponse;
                fromJSON(_: any): _196.MsgEditBondResponse;
                toJSON(_: _196.MsgEditBondResponse): unknown;
                fromPartial(_: Partial<_196.MsgEditBondResponse>): _196.MsgEditBondResponse;
            };
            MsgSetNextAlpha: {
                encode(message: _196.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgSetNextAlpha;
                fromJSON(object: any): _196.MsgSetNextAlpha;
                toJSON(message: _196.MsgSetNextAlpha): unknown;
                fromPartial(object: Partial<_196.MsgSetNextAlpha>): _196.MsgSetNextAlpha;
            };
            MsgSetNextAlphaResponse: {
                encode(_: _196.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgSetNextAlphaResponse;
                fromJSON(_: any): _196.MsgSetNextAlphaResponse;
                toJSON(_: _196.MsgSetNextAlphaResponse): unknown;
                fromPartial(_: Partial<_196.MsgSetNextAlphaResponse>): _196.MsgSetNextAlphaResponse;
            };
            MsgUpdateBondState: {
                encode(message: _196.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgUpdateBondState;
                fromJSON(object: any): _196.MsgUpdateBondState;
                toJSON(message: _196.MsgUpdateBondState): unknown;
                fromPartial(object: Partial<_196.MsgUpdateBondState>): _196.MsgUpdateBondState;
            };
            MsgUpdateBondStateResponse: {
                encode(_: _196.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgUpdateBondStateResponse;
                fromJSON(_: any): _196.MsgUpdateBondStateResponse;
                toJSON(_: _196.MsgUpdateBondStateResponse): unknown;
                fromPartial(_: Partial<_196.MsgUpdateBondStateResponse>): _196.MsgUpdateBondStateResponse;
            };
            MsgBuy: {
                encode(message: _196.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgBuy;
                fromJSON(object: any): _196.MsgBuy;
                toJSON(message: _196.MsgBuy): unknown;
                fromPartial(object: Partial<_196.MsgBuy>): _196.MsgBuy;
            };
            MsgBuyResponse: {
                encode(_: _196.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgBuyResponse;
                fromJSON(_: any): _196.MsgBuyResponse;
                toJSON(_: _196.MsgBuyResponse): unknown;
                fromPartial(_: Partial<_196.MsgBuyResponse>): _196.MsgBuyResponse;
            };
            MsgSell: {
                encode(message: _196.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgSell;
                fromJSON(object: any): _196.MsgSell;
                toJSON(message: _196.MsgSell): unknown;
                fromPartial(object: Partial<_196.MsgSell>): _196.MsgSell;
            };
            MsgSellResponse: {
                encode(_: _196.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgSellResponse;
                fromJSON(_: any): _196.MsgSellResponse;
                toJSON(_: _196.MsgSellResponse): unknown;
                fromPartial(_: Partial<_196.MsgSellResponse>): _196.MsgSellResponse;
            };
            MsgSwap: {
                encode(message: _196.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgSwap;
                fromJSON(object: any): _196.MsgSwap;
                toJSON(message: _196.MsgSwap): unknown;
                fromPartial(object: Partial<_196.MsgSwap>): _196.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _196.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgSwapResponse;
                fromJSON(_: any): _196.MsgSwapResponse;
                toJSON(_: _196.MsgSwapResponse): unknown;
                fromPartial(_: Partial<_196.MsgSwapResponse>): _196.MsgSwapResponse;
            };
            MsgMakeOutcomePayment: {
                encode(message: _196.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgMakeOutcomePayment;
                fromJSON(object: any): _196.MsgMakeOutcomePayment;
                toJSON(message: _196.MsgMakeOutcomePayment): unknown;
                fromPartial(object: Partial<_196.MsgMakeOutcomePayment>): _196.MsgMakeOutcomePayment;
            };
            MsgMakeOutcomePaymentResponse: {
                encode(_: _196.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgMakeOutcomePaymentResponse;
                fromJSON(_: any): _196.MsgMakeOutcomePaymentResponse;
                toJSON(_: _196.MsgMakeOutcomePaymentResponse): unknown;
                fromPartial(_: Partial<_196.MsgMakeOutcomePaymentResponse>): _196.MsgMakeOutcomePaymentResponse;
            };
            MsgWithdrawShare: {
                encode(message: _196.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgWithdrawShare;
                fromJSON(object: any): _196.MsgWithdrawShare;
                toJSON(message: _196.MsgWithdrawShare): unknown;
                fromPartial(object: Partial<_196.MsgWithdrawShare>): _196.MsgWithdrawShare;
            };
            MsgWithdrawShareResponse: {
                encode(_: _196.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgWithdrawShareResponse;
                fromJSON(_: any): _196.MsgWithdrawShareResponse;
                toJSON(_: _196.MsgWithdrawShareResponse): unknown;
                fromPartial(_: Partial<_196.MsgWithdrawShareResponse>): _196.MsgWithdrawShareResponse;
            };
            MsgWithdrawReserve: {
                encode(message: _196.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgWithdrawReserve;
                fromJSON(object: any): _196.MsgWithdrawReserve;
                toJSON(message: _196.MsgWithdrawReserve): unknown;
                fromPartial(object: Partial<_196.MsgWithdrawReserve>): _196.MsgWithdrawReserve;
            };
            MsgWithdrawReserveResponse: {
                encode(_: _196.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgWithdrawReserveResponse;
                fromJSON(_: any): _196.MsgWithdrawReserveResponse;
                toJSON(_: _196.MsgWithdrawReserveResponse): unknown;
                fromPartial(_: Partial<_196.MsgWithdrawReserveResponse>): _196.MsgWithdrawReserveResponse;
            };
            QueryBondsRequest: {
                encode(_: _195.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBondsRequest;
                fromJSON(_: any): _195.QueryBondsRequest;
                toJSON(_: _195.QueryBondsRequest): unknown;
                fromPartial(_: Partial<_195.QueryBondsRequest>): _195.QueryBondsRequest;
            };
            QueryBondsResponse: {
                encode(message: _195.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBondsResponse;
                fromJSON(object: any): _195.QueryBondsResponse;
                toJSON(message: _195.QueryBondsResponse): unknown;
                fromPartial(object: Partial<_195.QueryBondsResponse>): _195.QueryBondsResponse;
            };
            QueryBondsDetailedRequest: {
                encode(_: _195.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBondsDetailedRequest;
                fromJSON(_: any): _195.QueryBondsDetailedRequest;
                toJSON(_: _195.QueryBondsDetailedRequest): unknown;
                fromPartial(_: Partial<_195.QueryBondsDetailedRequest>): _195.QueryBondsDetailedRequest;
            };
            QueryBondsDetailedResponse: {
                encode(message: _195.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBondsDetailedResponse;
                fromJSON(object: any): _195.QueryBondsDetailedResponse;
                toJSON(message: _195.QueryBondsDetailedResponse): unknown;
                fromPartial(object: Partial<_195.QueryBondsDetailedResponse>): _195.QueryBondsDetailedResponse;
            };
            QueryBondRequest: {
                encode(message: _195.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBondRequest;
                fromJSON(object: any): _195.QueryBondRequest;
                toJSON(message: _195.QueryBondRequest): unknown;
                fromPartial(object: Partial<_195.QueryBondRequest>): _195.QueryBondRequest;
            };
            QueryBondResponse: {
                encode(message: _195.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBondResponse;
                fromJSON(object: any): _195.QueryBondResponse;
                toJSON(message: _195.QueryBondResponse): unknown;
                fromPartial(object: Partial<_195.QueryBondResponse>): _195.QueryBondResponse;
            };
            QueryBatchRequest: {
                encode(message: _195.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBatchRequest;
                fromJSON(object: any): _195.QueryBatchRequest;
                toJSON(message: _195.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_195.QueryBatchRequest>): _195.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _195.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBatchResponse;
                fromJSON(object: any): _195.QueryBatchResponse;
                toJSON(message: _195.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_195.QueryBatchResponse>): _195.QueryBatchResponse;
            };
            QueryLastBatchRequest: {
                encode(message: _195.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryLastBatchRequest;
                fromJSON(object: any): _195.QueryLastBatchRequest;
                toJSON(message: _195.QueryLastBatchRequest): unknown;
                fromPartial(object: Partial<_195.QueryLastBatchRequest>): _195.QueryLastBatchRequest;
            };
            QueryLastBatchResponse: {
                encode(message: _195.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryLastBatchResponse;
                fromJSON(object: any): _195.QueryLastBatchResponse;
                toJSON(message: _195.QueryLastBatchResponse): unknown;
                fromPartial(object: Partial<_195.QueryLastBatchResponse>): _195.QueryLastBatchResponse;
            };
            QueryCurrentPriceRequest: {
                encode(message: _195.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryCurrentPriceRequest;
                fromJSON(object: any): _195.QueryCurrentPriceRequest;
                toJSON(message: _195.QueryCurrentPriceRequest): unknown;
                fromPartial(object: Partial<_195.QueryCurrentPriceRequest>): _195.QueryCurrentPriceRequest;
            };
            QueryCurrentPriceResponse: {
                encode(message: _195.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryCurrentPriceResponse;
                fromJSON(object: any): _195.QueryCurrentPriceResponse;
                toJSON(message: _195.QueryCurrentPriceResponse): unknown;
                fromPartial(object: Partial<_195.QueryCurrentPriceResponse>): _195.QueryCurrentPriceResponse;
            };
            QueryCurrentReserveRequest: {
                encode(message: _195.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryCurrentReserveRequest;
                fromJSON(object: any): _195.QueryCurrentReserveRequest;
                toJSON(message: _195.QueryCurrentReserveRequest): unknown;
                fromPartial(object: Partial<_195.QueryCurrentReserveRequest>): _195.QueryCurrentReserveRequest;
            };
            QueryCurrentReserveResponse: {
                encode(message: _195.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryCurrentReserveResponse;
                fromJSON(object: any): _195.QueryCurrentReserveResponse;
                toJSON(message: _195.QueryCurrentReserveResponse): unknown;
                fromPartial(object: Partial<_195.QueryCurrentReserveResponse>): _195.QueryCurrentReserveResponse;
            };
            QueryAvailableReserveRequest: {
                encode(message: _195.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryAvailableReserveRequest;
                fromJSON(object: any): _195.QueryAvailableReserveRequest;
                toJSON(message: _195.QueryAvailableReserveRequest): unknown;
                fromPartial(object: Partial<_195.QueryAvailableReserveRequest>): _195.QueryAvailableReserveRequest;
            };
            QueryAvailableReserveResponse: {
                encode(message: _195.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryAvailableReserveResponse;
                fromJSON(object: any): _195.QueryAvailableReserveResponse;
                toJSON(message: _195.QueryAvailableReserveResponse): unknown;
                fromPartial(object: Partial<_195.QueryAvailableReserveResponse>): _195.QueryAvailableReserveResponse;
            };
            QueryCustomPriceRequest: {
                encode(message: _195.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryCustomPriceRequest;
                fromJSON(object: any): _195.QueryCustomPriceRequest;
                toJSON(message: _195.QueryCustomPriceRequest): unknown;
                fromPartial(object: Partial<_195.QueryCustomPriceRequest>): _195.QueryCustomPriceRequest;
            };
            QueryCustomPriceResponse: {
                encode(message: _195.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryCustomPriceResponse;
                fromJSON(object: any): _195.QueryCustomPriceResponse;
                toJSON(message: _195.QueryCustomPriceResponse): unknown;
                fromPartial(object: Partial<_195.QueryCustomPriceResponse>): _195.QueryCustomPriceResponse;
            };
            QueryBuyPriceRequest: {
                encode(message: _195.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBuyPriceRequest;
                fromJSON(object: any): _195.QueryBuyPriceRequest;
                toJSON(message: _195.QueryBuyPriceRequest): unknown;
                fromPartial(object: Partial<_195.QueryBuyPriceRequest>): _195.QueryBuyPriceRequest;
            };
            QueryBuyPriceResponse: {
                encode(message: _195.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryBuyPriceResponse;
                fromJSON(object: any): _195.QueryBuyPriceResponse;
                toJSON(message: _195.QueryBuyPriceResponse): unknown;
                fromPartial(object: Partial<_195.QueryBuyPriceResponse>): _195.QueryBuyPriceResponse;
            };
            QuerySellReturnRequest: {
                encode(message: _195.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QuerySellReturnRequest;
                fromJSON(object: any): _195.QuerySellReturnRequest;
                toJSON(message: _195.QuerySellReturnRequest): unknown;
                fromPartial(object: Partial<_195.QuerySellReturnRequest>): _195.QuerySellReturnRequest;
            };
            QuerySellReturnResponse: {
                encode(message: _195.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QuerySellReturnResponse;
                fromJSON(object: any): _195.QuerySellReturnResponse;
                toJSON(message: _195.QuerySellReturnResponse): unknown;
                fromPartial(object: Partial<_195.QuerySellReturnResponse>): _195.QuerySellReturnResponse;
            };
            QuerySwapReturnRequest: {
                encode(message: _195.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QuerySwapReturnRequest;
                fromJSON(object: any): _195.QuerySwapReturnRequest;
                toJSON(message: _195.QuerySwapReturnRequest): unknown;
                fromPartial(object: Partial<_195.QuerySwapReturnRequest>): _195.QuerySwapReturnRequest;
            };
            QuerySwapReturnResponse: {
                encode(message: _195.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QuerySwapReturnResponse;
                fromJSON(object: any): _195.QuerySwapReturnResponse;
                toJSON(message: _195.QuerySwapReturnResponse): unknown;
                fromPartial(object: Partial<_195.QuerySwapReturnResponse>): _195.QuerySwapReturnResponse;
            };
            QueryAlphaMaximumsRequest: {
                encode(message: _195.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryAlphaMaximumsRequest;
                fromJSON(object: any): _195.QueryAlphaMaximumsRequest;
                toJSON(message: _195.QueryAlphaMaximumsRequest): unknown;
                fromPartial(object: Partial<_195.QueryAlphaMaximumsRequest>): _195.QueryAlphaMaximumsRequest;
            };
            QueryAlphaMaximumsResponse: {
                encode(message: _195.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryAlphaMaximumsResponse;
                fromJSON(object: any): _195.QueryAlphaMaximumsResponse;
                toJSON(message: _195.QueryAlphaMaximumsResponse): unknown;
                fromPartial(object: Partial<_195.QueryAlphaMaximumsResponse>): _195.QueryAlphaMaximumsResponse;
            };
            QueryParamsRequest: {
                encode(_: _195.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryParamsRequest;
                fromJSON(_: any): _195.QueryParamsRequest;
                toJSON(_: _195.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_195.QueryParamsRequest>): _195.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _195.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryParamsResponse;
                fromJSON(object: any): _195.QueryParamsResponse;
                toJSON(message: _195.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_195.QueryParamsResponse>): _195.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _194.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.GenesisState;
                fromJSON(object: any): _194.GenesisState;
                toJSON(message: _194.GenesisState): unknown;
                fromPartial(object: Partial<_194.GenesisState>): _194.GenesisState;
            };
            BondCreatedEvent: {
                encode(message: _193.BondCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondCreatedEvent;
                fromJSON(object: any): _193.BondCreatedEvent;
                toJSON(message: _193.BondCreatedEvent): unknown;
                fromPartial(object: Partial<_193.BondCreatedEvent>): _193.BondCreatedEvent;
            };
            BondUpdatedEvent: {
                encode(message: _193.BondUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondUpdatedEvent;
                fromJSON(object: any): _193.BondUpdatedEvent;
                toJSON(message: _193.BondUpdatedEvent): unknown;
                fromPartial(object: Partial<_193.BondUpdatedEvent>): _193.BondUpdatedEvent;
            };
            BondSetNextAlphaEvent: {
                encode(message: _193.BondSetNextAlphaEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondSetNextAlphaEvent;
                fromJSON(object: any): _193.BondSetNextAlphaEvent;
                toJSON(message: _193.BondSetNextAlphaEvent): unknown;
                fromPartial(object: Partial<_193.BondSetNextAlphaEvent>): _193.BondSetNextAlphaEvent;
            };
            BondBuyOrderEvent: {
                encode(message: _193.BondBuyOrderEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondBuyOrderEvent;
                fromJSON(object: any): _193.BondBuyOrderEvent;
                toJSON(message: _193.BondBuyOrderEvent): unknown;
                fromPartial(object: Partial<_193.BondBuyOrderEvent>): _193.BondBuyOrderEvent;
            };
            BondSellOrderEvent: {
                encode(message: _193.BondSellOrderEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondSellOrderEvent;
                fromJSON(object: any): _193.BondSellOrderEvent;
                toJSON(message: _193.BondSellOrderEvent): unknown;
                fromPartial(object: Partial<_193.BondSellOrderEvent>): _193.BondSellOrderEvent;
            };
            BondSwapOrderEvent: {
                encode(message: _193.BondSwapOrderEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondSwapOrderEvent;
                fromJSON(object: any): _193.BondSwapOrderEvent;
                toJSON(message: _193.BondSwapOrderEvent): unknown;
                fromPartial(object: Partial<_193.BondSwapOrderEvent>): _193.BondSwapOrderEvent;
            };
            BondMakeOutcomePaymentEvent: {
                encode(message: _193.BondMakeOutcomePaymentEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondMakeOutcomePaymentEvent;
                fromJSON(object: any): _193.BondMakeOutcomePaymentEvent;
                toJSON(message: _193.BondMakeOutcomePaymentEvent): unknown;
                fromPartial(object: Partial<_193.BondMakeOutcomePaymentEvent>): _193.BondMakeOutcomePaymentEvent;
            };
            BondWithdrawShareEvent: {
                encode(message: _193.BondWithdrawShareEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondWithdrawShareEvent;
                fromJSON(object: any): _193.BondWithdrawShareEvent;
                toJSON(message: _193.BondWithdrawShareEvent): unknown;
                fromPartial(object: Partial<_193.BondWithdrawShareEvent>): _193.BondWithdrawShareEvent;
            };
            BondWithdrawReserveEvent: {
                encode(message: _193.BondWithdrawReserveEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondWithdrawReserveEvent;
                fromJSON(object: any): _193.BondWithdrawReserveEvent;
                toJSON(message: _193.BondWithdrawReserveEvent): unknown;
                fromPartial(object: Partial<_193.BondWithdrawReserveEvent>): _193.BondWithdrawReserveEvent;
            };
            BondEditAlphaSuccessEvent: {
                encode(message: _193.BondEditAlphaSuccessEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondEditAlphaSuccessEvent;
                fromJSON(object: any): _193.BondEditAlphaSuccessEvent;
                toJSON(message: _193.BondEditAlphaSuccessEvent): unknown;
                fromPartial(object: Partial<_193.BondEditAlphaSuccessEvent>): _193.BondEditAlphaSuccessEvent;
            };
            BondEditAlphaFailedEvent: {
                encode(message: _193.BondEditAlphaFailedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondEditAlphaFailedEvent;
                fromJSON(object: any): _193.BondEditAlphaFailedEvent;
                toJSON(message: _193.BondEditAlphaFailedEvent): unknown;
                fromPartial(object: Partial<_193.BondEditAlphaFailedEvent>): _193.BondEditAlphaFailedEvent;
            };
            BondBuyOrderFulfilledEvent: {
                encode(message: _193.BondBuyOrderFulfilledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondBuyOrderFulfilledEvent;
                fromJSON(object: any): _193.BondBuyOrderFulfilledEvent;
                toJSON(message: _193.BondBuyOrderFulfilledEvent): unknown;
                fromPartial(object: Partial<_193.BondBuyOrderFulfilledEvent>): _193.BondBuyOrderFulfilledEvent;
            };
            BondSellOrderFulfilledEvent: {
                encode(message: _193.BondSellOrderFulfilledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondSellOrderFulfilledEvent;
                fromJSON(object: any): _193.BondSellOrderFulfilledEvent;
                toJSON(message: _193.BondSellOrderFulfilledEvent): unknown;
                fromPartial(object: Partial<_193.BondSellOrderFulfilledEvent>): _193.BondSellOrderFulfilledEvent;
            };
            BondSwapOrderFulfilledEvent: {
                encode(message: _193.BondSwapOrderFulfilledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondSwapOrderFulfilledEvent;
                fromJSON(object: any): _193.BondSwapOrderFulfilledEvent;
                toJSON(message: _193.BondSwapOrderFulfilledEvent): unknown;
                fromPartial(object: Partial<_193.BondSwapOrderFulfilledEvent>): _193.BondSwapOrderFulfilledEvent;
            };
            BondBuyOrderCancelledEvent: {
                encode(message: _193.BondBuyOrderCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BondBuyOrderCancelledEvent;
                fromJSON(object: any): _193.BondBuyOrderCancelledEvent;
                toJSON(message: _193.BondBuyOrderCancelledEvent): unknown;
                fromPartial(object: Partial<_193.BondBuyOrderCancelledEvent>): _193.BondBuyOrderCancelledEvent;
            };
            FunctionParam: {
                encode(message: _192.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.FunctionParam;
                fromJSON(object: any): _192.FunctionParam;
                toJSON(message: _192.FunctionParam): unknown;
                fromPartial(object: Partial<_192.FunctionParam>): _192.FunctionParam;
            };
            BondDetails: {
                encode(message: _192.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.BondDetails;
                fromJSON(object: any): _192.BondDetails;
                toJSON(message: _192.BondDetails): unknown;
                fromPartial(object: Partial<_192.BondDetails>): _192.BondDetails;
            };
            Bond: {
                encode(message: _192.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Bond;
                fromJSON(object: any): _192.Bond;
                toJSON(message: _192.Bond): unknown;
                fromPartial(object: Partial<_192.Bond>): _192.Bond;
            };
            BaseOrder: {
                encode(message: _192.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.BaseOrder;
                fromJSON(object: any): _192.BaseOrder;
                toJSON(message: _192.BaseOrder): unknown;
                fromPartial(object: Partial<_192.BaseOrder>): _192.BaseOrder;
            };
            BuyOrder: {
                encode(message: _192.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.BuyOrder;
                fromJSON(object: any): _192.BuyOrder;
                toJSON(message: _192.BuyOrder): unknown;
                fromPartial(object: Partial<_192.BuyOrder>): _192.BuyOrder;
            };
            SellOrder: {
                encode(message: _192.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.SellOrder;
                fromJSON(object: any): _192.SellOrder;
                toJSON(message: _192.SellOrder): unknown;
                fromPartial(object: Partial<_192.SellOrder>): _192.SellOrder;
            };
            SwapOrder: {
                encode(message: _192.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.SwapOrder;
                fromJSON(object: any): _192.SwapOrder;
                toJSON(message: _192.SwapOrder): unknown;
                fromPartial(object: Partial<_192.SwapOrder>): _192.SwapOrder;
            };
            Batch: {
                encode(message: _192.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Batch;
                fromJSON(object: any): _192.Batch;
                toJSON(message: _192.Batch): unknown;
                fromPartial(object: Partial<_192.Batch>): _192.Batch;
            };
            Params: {
                encode(message: _192.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Params;
                fromJSON(object: any): _192.Params;
                toJSON(message: _192.Params): unknown;
                fromPartial(object: Partial<_192.Params>): _192.Params;
            };
        };
    }
    namespace claims {
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _201.QueryParamsRequest): Promise<_201.QueryParamsResponse>;
                collection(request: _201.QueryCollectionRequest): Promise<_201.QueryCollectionResponse>;
                collectionList(request?: _201.QueryCollectionListRequest): Promise<_201.QueryCollectionListResponse>;
                claim(request: _201.QueryClaimRequest): Promise<_201.QueryClaimResponse>;
                claimList(request?: _201.QueryClaimListRequest): Promise<_201.QueryClaimListResponse>;
                dispute(request: _201.QueryDisputeRequest): Promise<_201.QueryDisputeResponse>;
                disputeList(request?: _201.QueryDisputeListRequest): Promise<_201.QueryDisputeListResponse>;
                intent(request: _201.QueryIntentRequest): Promise<_201.QueryIntentResponse>;
                intentList(request?: _201.QueryIntentListRequest): Promise<_201.QueryIntentListResponse>;
                collectionMember(request: _201.QueryCollectionMemberRequest): Promise<_201.QueryCollectionMemberResponse>;
                collectionMemberList(request: _201.QueryCollectionMemberListRequest): Promise<_201.QueryCollectionMemberListResponse>;
                disputeBySubject(request: _201.QueryDisputeBySubjectRequest): Promise<_201.QueryDisputeBySubjectResponse>;
                disputeListForSubject(request: _201.QueryDisputeListForSubjectRequest): Promise<_201.QueryDisputeListForSubjectResponse>;
                agentDepositBalance(request: _201.QueryAgentDepositBalanceRequest): Promise<_201.QueryAgentDepositBalanceResponse>;
                agentDepositBalanceList(request: _201.QueryAgentDepositBalanceListRequest): Promise<_201.QueryAgentDepositBalanceListResponse>;
            };
            MsgCreateCollection: {
                encode(message: _202.MsgCreateCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgCreateCollection;
                fromJSON(object: any): _202.MsgCreateCollection;
                toJSON(message: _202.MsgCreateCollection): unknown;
                fromPartial(object: Partial<_202.MsgCreateCollection>): _202.MsgCreateCollection;
            };
            MsgCreateCollectionResponse: {
                encode(_: _202.MsgCreateCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgCreateCollectionResponse;
                fromJSON(_: any): _202.MsgCreateCollectionResponse;
                toJSON(_: _202.MsgCreateCollectionResponse): unknown;
                fromPartial(_: Partial<_202.MsgCreateCollectionResponse>): _202.MsgCreateCollectionResponse;
            };
            MsgSubmitClaim: {
                encode(message: _202.MsgSubmitClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgSubmitClaim;
                fromJSON(object: any): _202.MsgSubmitClaim;
                toJSON(message: _202.MsgSubmitClaim): unknown;
                fromPartial(object: Partial<_202.MsgSubmitClaim>): _202.MsgSubmitClaim;
            };
            MsgSubmitClaimResponse: {
                encode(_: _202.MsgSubmitClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgSubmitClaimResponse;
                fromJSON(_: any): _202.MsgSubmitClaimResponse;
                toJSON(_: _202.MsgSubmitClaimResponse): unknown;
                fromPartial(_: Partial<_202.MsgSubmitClaimResponse>): _202.MsgSubmitClaimResponse;
            };
            MsgEvaluateClaim: {
                encode(message: _202.MsgEvaluateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgEvaluateClaim;
                fromJSON(object: any): _202.MsgEvaluateClaim;
                toJSON(message: _202.MsgEvaluateClaim): unknown;
                fromPartial(object: Partial<_202.MsgEvaluateClaim>): _202.MsgEvaluateClaim;
            };
            MsgEvaluateClaimResponse: {
                encode(_: _202.MsgEvaluateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgEvaluateClaimResponse;
                fromJSON(_: any): _202.MsgEvaluateClaimResponse;
                toJSON(_: _202.MsgEvaluateClaimResponse): unknown;
                fromPartial(_: Partial<_202.MsgEvaluateClaimResponse>): _202.MsgEvaluateClaimResponse;
            };
            MsgDisputeClaim: {
                encode(message: _202.MsgDisputeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgDisputeClaim;
                fromJSON(object: any): _202.MsgDisputeClaim;
                toJSON(message: _202.MsgDisputeClaim): unknown;
                fromPartial(object: Partial<_202.MsgDisputeClaim>): _202.MsgDisputeClaim;
            };
            MsgDisputeClaimResponse: {
                encode(_: _202.MsgDisputeClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgDisputeClaimResponse;
                fromJSON(_: any): _202.MsgDisputeClaimResponse;
                toJSON(_: _202.MsgDisputeClaimResponse): unknown;
                fromPartial(_: Partial<_202.MsgDisputeClaimResponse>): _202.MsgDisputeClaimResponse;
            };
            MsgWithdrawPayment: {
                encode(message: _202.MsgWithdrawPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgWithdrawPayment;
                fromJSON(object: any): _202.MsgWithdrawPayment;
                toJSON(message: _202.MsgWithdrawPayment): unknown;
                fromPartial(object: Partial<_202.MsgWithdrawPayment>): _202.MsgWithdrawPayment;
            };
            MsgWithdrawPaymentResponse: {
                encode(_: _202.MsgWithdrawPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgWithdrawPaymentResponse;
                fromJSON(_: any): _202.MsgWithdrawPaymentResponse;
                toJSON(_: _202.MsgWithdrawPaymentResponse): unknown;
                fromPartial(_: Partial<_202.MsgWithdrawPaymentResponse>): _202.MsgWithdrawPaymentResponse;
            };
            MsgUpdateCollectionState: {
                encode(message: _202.MsgUpdateCollectionState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionState;
                fromJSON(object: any): _202.MsgUpdateCollectionState;
                toJSON(message: _202.MsgUpdateCollectionState): unknown;
                fromPartial(object: Partial<_202.MsgUpdateCollectionState>): _202.MsgUpdateCollectionState;
            };
            MsgUpdateCollectionStateResponse: {
                encode(_: _202.MsgUpdateCollectionStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionStateResponse;
                fromJSON(_: any): _202.MsgUpdateCollectionStateResponse;
                toJSON(_: _202.MsgUpdateCollectionStateResponse): unknown;
                fromPartial(_: Partial<_202.MsgUpdateCollectionStateResponse>): _202.MsgUpdateCollectionStateResponse;
            };
            MsgUpdateCollectionDates: {
                encode(message: _202.MsgUpdateCollectionDates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionDates;
                fromJSON(object: any): _202.MsgUpdateCollectionDates;
                toJSON(message: _202.MsgUpdateCollectionDates): unknown;
                fromPartial(object: Partial<_202.MsgUpdateCollectionDates>): _202.MsgUpdateCollectionDates;
            };
            MsgUpdateCollectionDatesResponse: {
                encode(_: _202.MsgUpdateCollectionDatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionDatesResponse;
                fromJSON(_: any): _202.MsgUpdateCollectionDatesResponse;
                toJSON(_: _202.MsgUpdateCollectionDatesResponse): unknown;
                fromPartial(_: Partial<_202.MsgUpdateCollectionDatesResponse>): _202.MsgUpdateCollectionDatesResponse;
            };
            MsgUpdateCollectionPayments: {
                encode(message: _202.MsgUpdateCollectionPayments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionPayments;
                fromJSON(object: any): _202.MsgUpdateCollectionPayments;
                toJSON(message: _202.MsgUpdateCollectionPayments): unknown;
                fromPartial(object: Partial<_202.MsgUpdateCollectionPayments>): _202.MsgUpdateCollectionPayments;
            };
            MsgUpdateCollectionPaymentsResponse: {
                encode(_: _202.MsgUpdateCollectionPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionPaymentsResponse;
                fromJSON(_: any): _202.MsgUpdateCollectionPaymentsResponse;
                toJSON(_: _202.MsgUpdateCollectionPaymentsResponse): unknown;
                fromPartial(_: Partial<_202.MsgUpdateCollectionPaymentsResponse>): _202.MsgUpdateCollectionPaymentsResponse;
            };
            MsgUpdateCollectionIntents: {
                encode(message: _202.MsgUpdateCollectionIntents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionIntents;
                fromJSON(object: any): _202.MsgUpdateCollectionIntents;
                toJSON(message: _202.MsgUpdateCollectionIntents): unknown;
                fromPartial(object: Partial<_202.MsgUpdateCollectionIntents>): _202.MsgUpdateCollectionIntents;
            };
            MsgUpdateCollectionIntentsResponse: {
                encode(_: _202.MsgUpdateCollectionIntentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionIntentsResponse;
                fromJSON(_: any): _202.MsgUpdateCollectionIntentsResponse;
                toJSON(_: _202.MsgUpdateCollectionIntentsResponse): unknown;
                fromPartial(_: Partial<_202.MsgUpdateCollectionIntentsResponse>): _202.MsgUpdateCollectionIntentsResponse;
            };
            MsgUpdateCollectionQuota: {
                encode(message: _202.MsgUpdateCollectionQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionQuota;
                fromJSON(object: any): _202.MsgUpdateCollectionQuota;
                toJSON(message: _202.MsgUpdateCollectionQuota): unknown;
                fromPartial(object: Partial<_202.MsgUpdateCollectionQuota>): _202.MsgUpdateCollectionQuota;
            };
            MsgUpdateCollectionQuotaResponse: {
                encode(_: _202.MsgUpdateCollectionQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionQuotaResponse;
                fromJSON(_: any): _202.MsgUpdateCollectionQuotaResponse;
                toJSON(_: _202.MsgUpdateCollectionQuotaResponse): unknown;
                fromPartial(_: Partial<_202.MsgUpdateCollectionQuotaResponse>): _202.MsgUpdateCollectionQuotaResponse;
            };
            MsgClaimIntent: {
                encode(message: _202.MsgClaimIntent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgClaimIntent;
                fromJSON(object: any): _202.MsgClaimIntent;
                toJSON(message: _202.MsgClaimIntent): unknown;
                fromPartial(object: Partial<_202.MsgClaimIntent>): _202.MsgClaimIntent;
            };
            MsgClaimIntentResponse: {
                encode(message: _202.MsgClaimIntentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgClaimIntentResponse;
                fromJSON(object: any): _202.MsgClaimIntentResponse;
                toJSON(message: _202.MsgClaimIntentResponse): unknown;
                fromPartial(object: Partial<_202.MsgClaimIntentResponse>): _202.MsgClaimIntentResponse;
            };
            MsgCreateClaimAuthorization: {
                encode(message: _202.MsgCreateClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgCreateClaimAuthorization;
                fromJSON(object: any): _202.MsgCreateClaimAuthorization;
                toJSON(message: _202.MsgCreateClaimAuthorization): unknown;
                fromPartial(object: Partial<_202.MsgCreateClaimAuthorization>): _202.MsgCreateClaimAuthorization;
            };
            MsgCreateClaimAuthorizationResponse: {
                encode(_: _202.MsgCreateClaimAuthorizationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgCreateClaimAuthorizationResponse;
                fromJSON(_: any): _202.MsgCreateClaimAuthorizationResponse;
                toJSON(_: _202.MsgCreateClaimAuthorizationResponse): unknown;
                fromPartial(_: Partial<_202.MsgCreateClaimAuthorizationResponse>): _202.MsgCreateClaimAuthorizationResponse;
            };
            MsgSetCollectionMembers: {
                encode(message: _202.MsgSetCollectionMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgSetCollectionMembers;
                fromJSON(object: any): _202.MsgSetCollectionMembers;
                toJSON(message: _202.MsgSetCollectionMembers): unknown;
                fromPartial(object: Partial<_202.MsgSetCollectionMembers>): _202.MsgSetCollectionMembers;
            };
            MsgSetCollectionMembersResponse: {
                encode(_: _202.MsgSetCollectionMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgSetCollectionMembersResponse;
                fromJSON(_: any): _202.MsgSetCollectionMembersResponse;
                toJSON(_: _202.MsgSetCollectionMembersResponse): unknown;
                fromPartial(_: Partial<_202.MsgSetCollectionMembersResponse>): _202.MsgSetCollectionMembersResponse;
            };
            CollectionMemberInput: {
                encode(message: _202.CollectionMemberInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.CollectionMemberInput;
                fromJSON(object: any): _202.CollectionMemberInput;
                toJSON(message: _202.CollectionMemberInput): unknown;
                fromPartial(object: Partial<_202.CollectionMemberInput>): _202.CollectionMemberInput;
            };
            MsgRemoveCollectionMembers: {
                encode(message: _202.MsgRemoveCollectionMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgRemoveCollectionMembers;
                fromJSON(object: any): _202.MsgRemoveCollectionMembers;
                toJSON(message: _202.MsgRemoveCollectionMembers): unknown;
                fromPartial(object: Partial<_202.MsgRemoveCollectionMembers>): _202.MsgRemoveCollectionMembers;
            };
            MsgRemoveCollectionMembersResponse: {
                encode(_: _202.MsgRemoveCollectionMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgRemoveCollectionMembersResponse;
                fromJSON(_: any): _202.MsgRemoveCollectionMembersResponse;
                toJSON(_: _202.MsgRemoveCollectionMembersResponse): unknown;
                fromPartial(_: Partial<_202.MsgRemoveCollectionMembersResponse>): _202.MsgRemoveCollectionMembersResponse;
            };
            MsgUpdateCollectionDisputeConfig: {
                encode(message: _202.MsgUpdateCollectionDisputeConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionDisputeConfig;
                fromJSON(object: any): _202.MsgUpdateCollectionDisputeConfig;
                toJSON(message: _202.MsgUpdateCollectionDisputeConfig): unknown;
                fromPartial(object: Partial<_202.MsgUpdateCollectionDisputeConfig>): _202.MsgUpdateCollectionDisputeConfig;
            };
            MsgUpdateCollectionDisputeConfigResponse: {
                encode(_: _202.MsgUpdateCollectionDisputeConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgUpdateCollectionDisputeConfigResponse;
                fromJSON(_: any): _202.MsgUpdateCollectionDisputeConfigResponse;
                toJSON(_: _202.MsgUpdateCollectionDisputeConfigResponse): unknown;
                fromPartial(_: Partial<_202.MsgUpdateCollectionDisputeConfigResponse>): _202.MsgUpdateCollectionDisputeConfigResponse;
            };
            MsgAddPerformanceDeposit: {
                encode(message: _202.MsgAddPerformanceDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgAddPerformanceDeposit;
                fromJSON(object: any): _202.MsgAddPerformanceDeposit;
                toJSON(message: _202.MsgAddPerformanceDeposit): unknown;
                fromPartial(object: Partial<_202.MsgAddPerformanceDeposit>): _202.MsgAddPerformanceDeposit;
            };
            MsgAddPerformanceDepositResponse: {
                encode(message: _202.MsgAddPerformanceDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgAddPerformanceDepositResponse;
                fromJSON(object: any): _202.MsgAddPerformanceDepositResponse;
                toJSON(message: _202.MsgAddPerformanceDepositResponse): unknown;
                fromPartial(object: Partial<_202.MsgAddPerformanceDepositResponse>): _202.MsgAddPerformanceDepositResponse;
            };
            MsgWithdrawPerformanceDeposit: {
                encode(message: _202.MsgWithdrawPerformanceDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgWithdrawPerformanceDeposit;
                fromJSON(object: any): _202.MsgWithdrawPerformanceDeposit;
                toJSON(message: _202.MsgWithdrawPerformanceDeposit): unknown;
                fromPartial(object: Partial<_202.MsgWithdrawPerformanceDeposit>): _202.MsgWithdrawPerformanceDeposit;
            };
            MsgWithdrawPerformanceDepositResponse: {
                encode(message: _202.MsgWithdrawPerformanceDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgWithdrawPerformanceDepositResponse;
                fromJSON(object: any): _202.MsgWithdrawPerformanceDepositResponse;
                toJSON(message: _202.MsgWithdrawPerformanceDepositResponse): unknown;
                fromPartial(object: Partial<_202.MsgWithdrawPerformanceDepositResponse>): _202.MsgWithdrawPerformanceDepositResponse;
            };
            MsgAdjudicateDispute: {
                encode(message: _202.MsgAdjudicateDispute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgAdjudicateDispute;
                fromJSON(object: any): _202.MsgAdjudicateDispute;
                toJSON(message: _202.MsgAdjudicateDispute): unknown;
                fromPartial(object: Partial<_202.MsgAdjudicateDispute>): _202.MsgAdjudicateDispute;
            };
            MsgAdjudicateDisputeResponse: {
                encode(message: _202.MsgAdjudicateDisputeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MsgAdjudicateDisputeResponse;
                fromJSON(object: any): _202.MsgAdjudicateDisputeResponse;
                toJSON(message: _202.MsgAdjudicateDisputeResponse): unknown;
                fromPartial(object: Partial<_202.MsgAdjudicateDisputeResponse>): _202.MsgAdjudicateDisputeResponse;
            };
            QueryParamsRequest: {
                encode(_: _201.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryParamsRequest;
                fromJSON(_: any): _201.QueryParamsRequest;
                toJSON(_: _201.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_201.QueryParamsRequest>): _201.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _201.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryParamsResponse;
                fromJSON(object: any): _201.QueryParamsResponse;
                toJSON(message: _201.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_201.QueryParamsResponse>): _201.QueryParamsResponse;
            };
            QueryCollectionRequest: {
                encode(message: _201.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionRequest;
                fromJSON(object: any): _201.QueryCollectionRequest;
                toJSON(message: _201.QueryCollectionRequest): unknown;
                fromPartial(object: Partial<_201.QueryCollectionRequest>): _201.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _201.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionResponse;
                fromJSON(object: any): _201.QueryCollectionResponse;
                toJSON(message: _201.QueryCollectionResponse): unknown;
                fromPartial(object: Partial<_201.QueryCollectionResponse>): _201.QueryCollectionResponse;
            };
            QueryCollectionListRequest: {
                encode(message: _201.QueryCollectionListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionListRequest;
                fromJSON(object: any): _201.QueryCollectionListRequest;
                toJSON(message: _201.QueryCollectionListRequest): unknown;
                fromPartial(object: Partial<_201.QueryCollectionListRequest>): _201.QueryCollectionListRequest;
            };
            QueryCollectionListResponse: {
                encode(message: _201.QueryCollectionListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionListResponse;
                fromJSON(object: any): _201.QueryCollectionListResponse;
                toJSON(message: _201.QueryCollectionListResponse): unknown;
                fromPartial(object: Partial<_201.QueryCollectionListResponse>): _201.QueryCollectionListResponse;
            };
            QueryClaimRequest: {
                encode(message: _201.QueryClaimRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryClaimRequest;
                fromJSON(object: any): _201.QueryClaimRequest;
                toJSON(message: _201.QueryClaimRequest): unknown;
                fromPartial(object: Partial<_201.QueryClaimRequest>): _201.QueryClaimRequest;
            };
            QueryClaimResponse: {
                encode(message: _201.QueryClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryClaimResponse;
                fromJSON(object: any): _201.QueryClaimResponse;
                toJSON(message: _201.QueryClaimResponse): unknown;
                fromPartial(object: Partial<_201.QueryClaimResponse>): _201.QueryClaimResponse;
            };
            QueryClaimListRequest: {
                encode(message: _201.QueryClaimListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryClaimListRequest;
                fromJSON(object: any): _201.QueryClaimListRequest;
                toJSON(message: _201.QueryClaimListRequest): unknown;
                fromPartial(object: Partial<_201.QueryClaimListRequest>): _201.QueryClaimListRequest;
            };
            QueryClaimListResponse: {
                encode(message: _201.QueryClaimListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryClaimListResponse;
                fromJSON(object: any): _201.QueryClaimListResponse;
                toJSON(message: _201.QueryClaimListResponse): unknown;
                fromPartial(object: Partial<_201.QueryClaimListResponse>): _201.QueryClaimListResponse;
            };
            QueryDisputeRequest: {
                encode(message: _201.QueryDisputeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeRequest;
                fromJSON(object: any): _201.QueryDisputeRequest;
                toJSON(message: _201.QueryDisputeRequest): unknown;
                fromPartial(object: Partial<_201.QueryDisputeRequest>): _201.QueryDisputeRequest;
            };
            QueryDisputeResponse: {
                encode(message: _201.QueryDisputeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeResponse;
                fromJSON(object: any): _201.QueryDisputeResponse;
                toJSON(message: _201.QueryDisputeResponse): unknown;
                fromPartial(object: Partial<_201.QueryDisputeResponse>): _201.QueryDisputeResponse;
            };
            QueryDisputeListRequest: {
                encode(message: _201.QueryDisputeListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeListRequest;
                fromJSON(object: any): _201.QueryDisputeListRequest;
                toJSON(message: _201.QueryDisputeListRequest): unknown;
                fromPartial(object: Partial<_201.QueryDisputeListRequest>): _201.QueryDisputeListRequest;
            };
            QueryDisputeListResponse: {
                encode(message: _201.QueryDisputeListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeListResponse;
                fromJSON(object: any): _201.QueryDisputeListResponse;
                toJSON(message: _201.QueryDisputeListResponse): unknown;
                fromPartial(object: Partial<_201.QueryDisputeListResponse>): _201.QueryDisputeListResponse;
            };
            QueryIntentRequest: {
                encode(message: _201.QueryIntentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryIntentRequest;
                fromJSON(object: any): _201.QueryIntentRequest;
                toJSON(message: _201.QueryIntentRequest): unknown;
                fromPartial(object: Partial<_201.QueryIntentRequest>): _201.QueryIntentRequest;
            };
            QueryIntentResponse: {
                encode(message: _201.QueryIntentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryIntentResponse;
                fromJSON(object: any): _201.QueryIntentResponse;
                toJSON(message: _201.QueryIntentResponse): unknown;
                fromPartial(object: Partial<_201.QueryIntentResponse>): _201.QueryIntentResponse;
            };
            QueryIntentListRequest: {
                encode(message: _201.QueryIntentListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryIntentListRequest;
                fromJSON(object: any): _201.QueryIntentListRequest;
                toJSON(message: _201.QueryIntentListRequest): unknown;
                fromPartial(object: Partial<_201.QueryIntentListRequest>): _201.QueryIntentListRequest;
            };
            QueryIntentListResponse: {
                encode(message: _201.QueryIntentListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryIntentListResponse;
                fromJSON(object: any): _201.QueryIntentListResponse;
                toJSON(message: _201.QueryIntentListResponse): unknown;
                fromPartial(object: Partial<_201.QueryIntentListResponse>): _201.QueryIntentListResponse;
            };
            QueryCollectionMemberRequest: {
                encode(message: _201.QueryCollectionMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionMemberRequest;
                fromJSON(object: any): _201.QueryCollectionMemberRequest;
                toJSON(message: _201.QueryCollectionMemberRequest): unknown;
                fromPartial(object: Partial<_201.QueryCollectionMemberRequest>): _201.QueryCollectionMemberRequest;
            };
            QueryCollectionMemberResponse: {
                encode(message: _201.QueryCollectionMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionMemberResponse;
                fromJSON(object: any): _201.QueryCollectionMemberResponse;
                toJSON(message: _201.QueryCollectionMemberResponse): unknown;
                fromPartial(object: Partial<_201.QueryCollectionMemberResponse>): _201.QueryCollectionMemberResponse;
            };
            QueryCollectionMemberListRequest: {
                encode(message: _201.QueryCollectionMemberListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionMemberListRequest;
                fromJSON(object: any): _201.QueryCollectionMemberListRequest;
                toJSON(message: _201.QueryCollectionMemberListRequest): unknown;
                fromPartial(object: Partial<_201.QueryCollectionMemberListRequest>): _201.QueryCollectionMemberListRequest;
            };
            QueryCollectionMemberListResponse: {
                encode(message: _201.QueryCollectionMemberListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryCollectionMemberListResponse;
                fromJSON(object: any): _201.QueryCollectionMemberListResponse;
                toJSON(message: _201.QueryCollectionMemberListResponse): unknown;
                fromPartial(object: Partial<_201.QueryCollectionMemberListResponse>): _201.QueryCollectionMemberListResponse;
            };
            QueryDisputeBySubjectRequest: {
                encode(message: _201.QueryDisputeBySubjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeBySubjectRequest;
                fromJSON(object: any): _201.QueryDisputeBySubjectRequest;
                toJSON(message: _201.QueryDisputeBySubjectRequest): unknown;
                fromPartial(object: Partial<_201.QueryDisputeBySubjectRequest>): _201.QueryDisputeBySubjectRequest;
            };
            QueryDisputeBySubjectResponse: {
                encode(message: _201.QueryDisputeBySubjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeBySubjectResponse;
                fromJSON(object: any): _201.QueryDisputeBySubjectResponse;
                toJSON(message: _201.QueryDisputeBySubjectResponse): unknown;
                fromPartial(object: Partial<_201.QueryDisputeBySubjectResponse>): _201.QueryDisputeBySubjectResponse;
            };
            QueryDisputeListForSubjectRequest: {
                encode(message: _201.QueryDisputeListForSubjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeListForSubjectRequest;
                fromJSON(object: any): _201.QueryDisputeListForSubjectRequest;
                toJSON(message: _201.QueryDisputeListForSubjectRequest): unknown;
                fromPartial(object: Partial<_201.QueryDisputeListForSubjectRequest>): _201.QueryDisputeListForSubjectRequest;
            };
            QueryDisputeListForSubjectResponse: {
                encode(message: _201.QueryDisputeListForSubjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryDisputeListForSubjectResponse;
                fromJSON(object: any): _201.QueryDisputeListForSubjectResponse;
                toJSON(message: _201.QueryDisputeListForSubjectResponse): unknown;
                fromPartial(object: Partial<_201.QueryDisputeListForSubjectResponse>): _201.QueryDisputeListForSubjectResponse;
            };
            QueryAgentDepositBalanceRequest: {
                encode(message: _201.QueryAgentDepositBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryAgentDepositBalanceRequest;
                fromJSON(object: any): _201.QueryAgentDepositBalanceRequest;
                toJSON(message: _201.QueryAgentDepositBalanceRequest): unknown;
                fromPartial(object: Partial<_201.QueryAgentDepositBalanceRequest>): _201.QueryAgentDepositBalanceRequest;
            };
            QueryAgentDepositBalanceResponse: {
                encode(message: _201.QueryAgentDepositBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryAgentDepositBalanceResponse;
                fromJSON(object: any): _201.QueryAgentDepositBalanceResponse;
                toJSON(message: _201.QueryAgentDepositBalanceResponse): unknown;
                fromPartial(object: Partial<_201.QueryAgentDepositBalanceResponse>): _201.QueryAgentDepositBalanceResponse;
            };
            QueryAgentDepositBalanceListRequest: {
                encode(message: _201.QueryAgentDepositBalanceListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryAgentDepositBalanceListRequest;
                fromJSON(object: any): _201.QueryAgentDepositBalanceListRequest;
                toJSON(message: _201.QueryAgentDepositBalanceListRequest): unknown;
                fromPartial(object: Partial<_201.QueryAgentDepositBalanceListRequest>): _201.QueryAgentDepositBalanceListRequest;
            };
            QueryAgentDepositBalanceListResponse: {
                encode(message: _201.QueryAgentDepositBalanceListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryAgentDepositBalanceListResponse;
                fromJSON(object: any): _201.QueryAgentDepositBalanceListResponse;
                toJSON(message: _201.QueryAgentDepositBalanceListResponse): unknown;
                fromPartial(object: Partial<_201.QueryAgentDepositBalanceListResponse>): _201.QueryAgentDepositBalanceListResponse;
            };
            GenesisState: {
                encode(message: _200.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.GenesisState;
                fromJSON(object: any): _200.GenesisState;
                toJSON(message: _200.GenesisState): unknown;
                fromPartial(object: Partial<_200.GenesisState>): _200.GenesisState;
            };
            CollectionCreatedEvent: {
                encode(message: _199.CollectionCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.CollectionCreatedEvent;
                fromJSON(object: any): _199.CollectionCreatedEvent;
                toJSON(message: _199.CollectionCreatedEvent): unknown;
                fromPartial(object: Partial<_199.CollectionCreatedEvent>): _199.CollectionCreatedEvent;
            };
            CollectionUpdatedEvent: {
                encode(message: _199.CollectionUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.CollectionUpdatedEvent;
                fromJSON(object: any): _199.CollectionUpdatedEvent;
                toJSON(message: _199.CollectionUpdatedEvent): unknown;
                fromPartial(object: Partial<_199.CollectionUpdatedEvent>): _199.CollectionUpdatedEvent;
            };
            ClaimSubmittedEvent: {
                encode(message: _199.ClaimSubmittedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ClaimSubmittedEvent;
                fromJSON(object: any): _199.ClaimSubmittedEvent;
                toJSON(message: _199.ClaimSubmittedEvent): unknown;
                fromPartial(object: Partial<_199.ClaimSubmittedEvent>): _199.ClaimSubmittedEvent;
            };
            ClaimUpdatedEvent: {
                encode(message: _199.ClaimUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ClaimUpdatedEvent;
                fromJSON(object: any): _199.ClaimUpdatedEvent;
                toJSON(message: _199.ClaimUpdatedEvent): unknown;
                fromPartial(object: Partial<_199.ClaimUpdatedEvent>): _199.ClaimUpdatedEvent;
            };
            ClaimEvaluatedEvent: {
                encode(message: _199.ClaimEvaluatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ClaimEvaluatedEvent;
                fromJSON(object: any): _199.ClaimEvaluatedEvent;
                toJSON(message: _199.ClaimEvaluatedEvent): unknown;
                fromPartial(object: Partial<_199.ClaimEvaluatedEvent>): _199.ClaimEvaluatedEvent;
            };
            ClaimDisputedEvent: {
                encode(message: _199.ClaimDisputedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ClaimDisputedEvent;
                fromJSON(object: any): _199.ClaimDisputedEvent;
                toJSON(message: _199.ClaimDisputedEvent): unknown;
                fromPartial(object: Partial<_199.ClaimDisputedEvent>): _199.ClaimDisputedEvent;
            };
            PaymentWithdrawnEvent: {
                encode(message: _199.PaymentWithdrawnEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.PaymentWithdrawnEvent;
                fromJSON(object: any): _199.PaymentWithdrawnEvent;
                toJSON(message: _199.PaymentWithdrawnEvent): unknown;
                fromPartial(object: Partial<_199.PaymentWithdrawnEvent>): _199.PaymentWithdrawnEvent;
            };
            PaymentWithdrawCreatedEvent: {
                encode(message: _199.PaymentWithdrawCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.PaymentWithdrawCreatedEvent;
                fromJSON(object: any): _199.PaymentWithdrawCreatedEvent;
                toJSON(message: _199.PaymentWithdrawCreatedEvent): unknown;
                fromPartial(object: Partial<_199.PaymentWithdrawCreatedEvent>): _199.PaymentWithdrawCreatedEvent;
            };
            IntentSubmittedEvent: {
                encode(message: _199.IntentSubmittedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.IntentSubmittedEvent;
                fromJSON(object: any): _199.IntentSubmittedEvent;
                toJSON(message: _199.IntentSubmittedEvent): unknown;
                fromPartial(object: Partial<_199.IntentSubmittedEvent>): _199.IntentSubmittedEvent;
            };
            IntentUpdatedEvent: {
                encode(message: _199.IntentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.IntentUpdatedEvent;
                fromJSON(object: any): _199.IntentUpdatedEvent;
                toJSON(message: _199.IntentUpdatedEvent): unknown;
                fromPartial(object: Partial<_199.IntentUpdatedEvent>): _199.IntentUpdatedEvent;
            };
            ClaimAuthorizationCreatedEvent: {
                encode(message: _199.ClaimAuthorizationCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ClaimAuthorizationCreatedEvent;
                fromJSON(object: any): _199.ClaimAuthorizationCreatedEvent;
                toJSON(message: _199.ClaimAuthorizationCreatedEvent): unknown;
                fromPartial(object: Partial<_199.ClaimAuthorizationCreatedEvent>): _199.ClaimAuthorizationCreatedEvent;
            };
            MemberBudgetCreatedEvent: {
                encode(message: _199.MemberBudgetCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MemberBudgetCreatedEvent;
                fromJSON(object: any): _199.MemberBudgetCreatedEvent;
                toJSON(message: _199.MemberBudgetCreatedEvent): unknown;
                fromPartial(object: Partial<_199.MemberBudgetCreatedEvent>): _199.MemberBudgetCreatedEvent;
            };
            MemberBudgetUpdatedEvent: {
                encode(message: _199.MemberBudgetUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MemberBudgetUpdatedEvent;
                fromJSON(object: any): _199.MemberBudgetUpdatedEvent;
                toJSON(message: _199.MemberBudgetUpdatedEvent): unknown;
                fromPartial(object: Partial<_199.MemberBudgetUpdatedEvent>): _199.MemberBudgetUpdatedEvent;
            };
            MemberBudgetRemovedEvent: {
                encode(message: _199.MemberBudgetRemovedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MemberBudgetRemovedEvent;
                fromJSON(object: any): _199.MemberBudgetRemovedEvent;
                toJSON(message: _199.MemberBudgetRemovedEvent): unknown;
                fromPartial(object: Partial<_199.MemberBudgetRemovedEvent>): _199.MemberBudgetRemovedEvent;
            };
            AgentDepositBalanceCreatedEvent: {
                encode(message: _199.AgentDepositBalanceCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AgentDepositBalanceCreatedEvent;
                fromJSON(object: any): _199.AgentDepositBalanceCreatedEvent;
                toJSON(message: _199.AgentDepositBalanceCreatedEvent): unknown;
                fromPartial(object: Partial<_199.AgentDepositBalanceCreatedEvent>): _199.AgentDepositBalanceCreatedEvent;
            };
            AgentDepositBalanceUpdatedEvent: {
                encode(message: _199.AgentDepositBalanceUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AgentDepositBalanceUpdatedEvent;
                fromJSON(object: any): _199.AgentDepositBalanceUpdatedEvent;
                toJSON(message: _199.AgentDepositBalanceUpdatedEvent): unknown;
                fromPartial(object: Partial<_199.AgentDepositBalanceUpdatedEvent>): _199.AgentDepositBalanceUpdatedEvent;
            };
            AgentDepositBalanceRemovedEvent: {
                encode(message: _199.AgentDepositBalanceRemovedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AgentDepositBalanceRemovedEvent;
                fromJSON(object: any): _199.AgentDepositBalanceRemovedEvent;
                toJSON(message: _199.AgentDepositBalanceRemovedEvent): unknown;
                fromPartial(object: Partial<_199.AgentDepositBalanceRemovedEvent>): _199.AgentDepositBalanceRemovedEvent;
            };
            DisputeResolvedEvent: {
                encode(message: _199.DisputeResolvedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.DisputeResolvedEvent;
                fromJSON(object: any): _199.DisputeResolvedEvent;
                toJSON(message: _199.DisputeResolvedEvent): unknown;
                fromPartial(object: Partial<_199.DisputeResolvedEvent>): _199.DisputeResolvedEvent;
            };
            collectionStateFromJSON(object: any): _198.CollectionState;
            collectionStateToJSON(object: _198.CollectionState): string;
            collectionIntentOptionsFromJSON(object: any): _198.CollectionIntentOptions;
            collectionIntentOptionsToJSON(object: _198.CollectionIntentOptions): string;
            evaluationStatusFromJSON(object: any): _198.EvaluationStatus;
            evaluationStatusToJSON(object: _198.EvaluationStatus): string;
            intentStatusFromJSON(object: any): _198.IntentStatus;
            intentStatusToJSON(object: _198.IntentStatus): string;
            paymentTypeFromJSON(object: any): _198.PaymentType;
            paymentTypeToJSON(object: _198.PaymentType): string;
            paymentStatusFromJSON(object: any): _198.PaymentStatus;
            paymentStatusToJSON(object: _198.PaymentStatus): string;
            disputeTargetRoleFromJSON(object: any): _198.DisputeTargetRole;
            disputeTargetRoleToJSON(object: _198.DisputeTargetRole): string;
            disputeStatusFromJSON(object: any): _198.DisputeStatus;
            disputeStatusToJSON(object: _198.DisputeStatus): string;
            CollectionState: typeof _198.CollectionState;
            CollectionStateSDKType: typeof _198.CollectionState;
            CollectionIntentOptions: typeof _198.CollectionIntentOptions;
            CollectionIntentOptionsSDKType: typeof _198.CollectionIntentOptions;
            EvaluationStatus: typeof _198.EvaluationStatus;
            EvaluationStatusSDKType: typeof _198.EvaluationStatus;
            IntentStatus: typeof _198.IntentStatus;
            IntentStatusSDKType: typeof _198.IntentStatus;
            PaymentType: typeof _198.PaymentType;
            PaymentTypeSDKType: typeof _198.PaymentType;
            PaymentStatus: typeof _198.PaymentStatus;
            PaymentStatusSDKType: typeof _198.PaymentStatus;
            DisputeTargetRole: typeof _198.DisputeTargetRole;
            DisputeTargetRoleSDKType: typeof _198.DisputeTargetRole;
            DisputeStatus: typeof _198.DisputeStatus;
            DisputeStatusSDKType: typeof _198.DisputeStatus;
            Params: {
                encode(message: _198.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Params;
                fromJSON(object: any): _198.Params;
                toJSON(message: _198.Params): unknown;
                fromPartial(object: Partial<_198.Params>): _198.Params;
            };
            AdjudicationDid: {
                encode(message: _198.AdjudicationDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.AdjudicationDid;
                fromJSON(object: any): _198.AdjudicationDid;
                toJSON(message: _198.AdjudicationDid): unknown;
                fromPartial(object: Partial<_198.AdjudicationDid>): _198.AdjudicationDid;
            };
            Collection: {
                encode(message: _198.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Collection;
                fromJSON(object: any): _198.Collection;
                toJSON(message: _198.Collection): unknown;
                fromPartial(object: Partial<_198.Collection>): _198.Collection;
            };
            Payments: {
                encode(message: _198.Payments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Payments;
                fromJSON(object: any): _198.Payments;
                toJSON(message: _198.Payments): unknown;
                fromPartial(object: Partial<_198.Payments>): _198.Payments;
            };
            Payment: {
                encode(message: _198.Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Payment;
                fromJSON(object: any): _198.Payment;
                toJSON(message: _198.Payment): unknown;
                fromPartial(object: Partial<_198.Payment>): _198.Payment;
            };
            Contract1155Payment: {
                encode(message: _198.Contract1155Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Contract1155Payment;
                fromJSON(object: any): _198.Contract1155Payment;
                toJSON(message: _198.Contract1155Payment): unknown;
                fromPartial(object: Partial<_198.Contract1155Payment>): _198.Contract1155Payment;
            };
            CW1155Payment: {
                encode(message: _198.CW1155Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.CW1155Payment;
                fromJSON(object: any): _198.CW1155Payment;
                toJSON(message: _198.CW1155Payment): unknown;
                fromPartial(object: Partial<_198.CW1155Payment>): _198.CW1155Payment;
            };
            CW1155IntentPayment: {
                encode(message: _198.CW1155IntentPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.CW1155IntentPayment;
                fromJSON(object: any): _198.CW1155IntentPayment;
                toJSON(message: _198.CW1155IntentPayment): unknown;
                fromPartial(object: Partial<_198.CW1155IntentPayment>): _198.CW1155IntentPayment;
            };
            CW1155IntentPaymentToken: {
                encode(message: _198.CW1155IntentPaymentToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.CW1155IntentPaymentToken;
                fromJSON(object: any): _198.CW1155IntentPaymentToken;
                toJSON(message: _198.CW1155IntentPaymentToken): unknown;
                fromPartial(object: Partial<_198.CW1155IntentPaymentToken>): _198.CW1155IntentPaymentToken;
            };
            CW20Payment: {
                encode(message: _198.CW20Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.CW20Payment;
                fromJSON(object: any): _198.CW20Payment;
                toJSON(message: _198.CW20Payment): unknown;
                fromPartial(object: Partial<_198.CW20Payment>): _198.CW20Payment;
            };
            CW20Output: {
                encode(message: _198.CW20Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.CW20Output;
                fromJSON(object: any): _198.CW20Output;
                toJSON(message: _198.CW20Output): unknown;
                fromPartial(object: Partial<_198.CW20Output>): _198.CW20Output;
            };
            Claim: {
                encode(message: _198.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Claim;
                fromJSON(object: any): _198.Claim;
                toJSON(message: _198.Claim): unknown;
                fromPartial(object: Partial<_198.Claim>): _198.Claim;
            };
            ClaimPayments: {
                encode(message: _198.ClaimPayments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ClaimPayments;
                fromJSON(object: any): _198.ClaimPayments;
                toJSON(message: _198.ClaimPayments): unknown;
                fromPartial(object: Partial<_198.ClaimPayments>): _198.ClaimPayments;
            };
            Evaluation: {
                encode(message: _198.Evaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Evaluation;
                fromJSON(object: any): _198.Evaluation;
                toJSON(message: _198.Evaluation): unknown;
                fromPartial(object: Partial<_198.Evaluation>): _198.Evaluation;
            };
            Dispute: {
                encode(message: _198.Dispute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Dispute;
                fromJSON(object: any): _198.Dispute;
                toJSON(message: _198.Dispute): unknown;
                fromPartial(object: Partial<_198.Dispute>): _198.Dispute;
            };
            DisputeData: {
                encode(message: _198.DisputeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.DisputeData;
                fromJSON(object: any): _198.DisputeData;
                toJSON(message: _198.DisputeData): unknown;
                fromPartial(object: Partial<_198.DisputeData>): _198.DisputeData;
            };
            DisputeResolution: {
                encode(message: _198.DisputeResolution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.DisputeResolution;
                fromJSON(object: any): _198.DisputeResolution;
                toJSON(message: _198.DisputeResolution): unknown;
                fromPartial(object: Partial<_198.DisputeResolution>): _198.DisputeResolution;
            };
            AgentDepositBalance: {
                encode(message: _198.AgentDepositBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.AgentDepositBalance;
                fromJSON(object: any): _198.AgentDepositBalance;
                toJSON(message: _198.AgentDepositBalance): unknown;
                fromPartial(object: Partial<_198.AgentDepositBalance>): _198.AgentDepositBalance;
            };
            Intent: {
                encode(message: _198.Intent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Intent;
                fromJSON(object: any): _198.Intent;
                toJSON(message: _198.Intent): unknown;
                fromPartial(object: Partial<_198.Intent>): _198.Intent;
            };
            MemberBudget: {
                encode(message: _198.MemberBudget, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.MemberBudget;
                fromJSON(object: any): _198.MemberBudget;
                toJSON(message: _198.MemberBudget): unknown;
                fromPartial(object: Partial<_198.MemberBudget>): _198.MemberBudget;
            };
            createClaimAuthorizationTypeFromJSON(object: any): _197.CreateClaimAuthorizationType;
            createClaimAuthorizationTypeToJSON(object: _197.CreateClaimAuthorizationType): string;
            CreateClaimAuthorizationType: typeof _197.CreateClaimAuthorizationType;
            CreateClaimAuthorizationTypeSDKType: typeof _197.CreateClaimAuthorizationType;
            SubmitClaimAuthorization: {
                encode(message: _197.SubmitClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.SubmitClaimAuthorization;
                fromJSON(object: any): _197.SubmitClaimAuthorization;
                toJSON(message: _197.SubmitClaimAuthorization): unknown;
                fromPartial(object: Partial<_197.SubmitClaimAuthorization>): _197.SubmitClaimAuthorization;
            };
            SubmitClaimConstraints: {
                encode(message: _197.SubmitClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.SubmitClaimConstraints;
                fromJSON(object: any): _197.SubmitClaimConstraints;
                toJSON(message: _197.SubmitClaimConstraints): unknown;
                fromPartial(object: Partial<_197.SubmitClaimConstraints>): _197.SubmitClaimConstraints;
            };
            EvaluateClaimAuthorization: {
                encode(message: _197.EvaluateClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EvaluateClaimAuthorization;
                fromJSON(object: any): _197.EvaluateClaimAuthorization;
                toJSON(message: _197.EvaluateClaimAuthorization): unknown;
                fromPartial(object: Partial<_197.EvaluateClaimAuthorization>): _197.EvaluateClaimAuthorization;
            };
            EvaluateClaimConstraints: {
                encode(message: _197.EvaluateClaimConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EvaluateClaimConstraints;
                fromJSON(object: any): _197.EvaluateClaimConstraints;
                toJSON(message: _197.EvaluateClaimConstraints): unknown;
                fromPartial(object: Partial<_197.EvaluateClaimConstraints>): _197.EvaluateClaimConstraints;
            };
            WithdrawPaymentAuthorization: {
                encode(message: _197.WithdrawPaymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.WithdrawPaymentAuthorization;
                fromJSON(object: any): _197.WithdrawPaymentAuthorization;
                toJSON(message: _197.WithdrawPaymentAuthorization): unknown;
                fromPartial(object: Partial<_197.WithdrawPaymentAuthorization>): _197.WithdrawPaymentAuthorization;
            };
            WithdrawPaymentConstraints: {
                encode(message: _197.WithdrawPaymentConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.WithdrawPaymentConstraints;
                fromJSON(object: any): _197.WithdrawPaymentConstraints;
                toJSON(message: _197.WithdrawPaymentConstraints): unknown;
                fromPartial(object: Partial<_197.WithdrawPaymentConstraints>): _197.WithdrawPaymentConstraints;
            };
            CreateClaimAuthorizationAuthorization: {
                encode(message: _197.CreateClaimAuthorizationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.CreateClaimAuthorizationAuthorization;
                fromJSON(object: any): _197.CreateClaimAuthorizationAuthorization;
                toJSON(message: _197.CreateClaimAuthorizationAuthorization): unknown;
                fromPartial(object: Partial<_197.CreateClaimAuthorizationAuthorization>): _197.CreateClaimAuthorizationAuthorization;
            };
            CreateClaimAuthorizationConstraints: {
                encode(message: _197.CreateClaimAuthorizationConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.CreateClaimAuthorizationConstraints;
                fromJSON(object: any): _197.CreateClaimAuthorizationConstraints;
                toJSON(message: _197.CreateClaimAuthorizationConstraints): unknown;
                fromPartial(object: Partial<_197.CreateClaimAuthorizationConstraints>): _197.CreateClaimAuthorizationConstraints;
            };
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _319.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
                entity(request: _207.QueryEntityRequest): Promise<_207.QueryEntityResponse>;
                entityMetaData(request: _207.QueryEntityMetadataRequest): Promise<_207.QueryEntityMetadataResponse>;
                entityIidDocument(request: _207.QueryEntityIidDocumentRequest): Promise<_207.QueryEntityIidDocumentResponse>;
                entityVerified(request: _207.QueryEntityVerifiedRequest): Promise<_207.QueryEntityVerifiedResponse>;
                entityList(request?: _207.QueryEntityListRequest): Promise<_207.QueryEntityListResponse>;
            };
            MsgCreateEntity: {
                encode(message: _208.MsgCreateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgCreateEntity;
                fromJSON(object: any): _208.MsgCreateEntity;
                toJSON(message: _208.MsgCreateEntity): unknown;
                fromPartial(object: Partial<_208.MsgCreateEntity>): _208.MsgCreateEntity;
            };
            MsgCreateEntityResponse: {
                encode(message: _208.MsgCreateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgCreateEntityResponse;
                fromJSON(object: any): _208.MsgCreateEntityResponse;
                toJSON(message: _208.MsgCreateEntityResponse): unknown;
                fromPartial(object: Partial<_208.MsgCreateEntityResponse>): _208.MsgCreateEntityResponse;
            };
            MsgUpdateEntity: {
                encode(message: _208.MsgUpdateEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgUpdateEntity;
                fromJSON(object: any): _208.MsgUpdateEntity;
                toJSON(message: _208.MsgUpdateEntity): unknown;
                fromPartial(object: Partial<_208.MsgUpdateEntity>): _208.MsgUpdateEntity;
            };
            MsgUpdateEntityResponse: {
                encode(_: _208.MsgUpdateEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgUpdateEntityResponse;
                fromJSON(_: any): _208.MsgUpdateEntityResponse;
                toJSON(_: _208.MsgUpdateEntityResponse): unknown;
                fromPartial(_: Partial<_208.MsgUpdateEntityResponse>): _208.MsgUpdateEntityResponse;
            };
            MsgUpdateEntityVerified: {
                encode(message: _208.MsgUpdateEntityVerified, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgUpdateEntityVerified;
                fromJSON(object: any): _208.MsgUpdateEntityVerified;
                toJSON(message: _208.MsgUpdateEntityVerified): unknown;
                fromPartial(object: Partial<_208.MsgUpdateEntityVerified>): _208.MsgUpdateEntityVerified;
            };
            MsgUpdateEntityVerifiedResponse: {
                encode(_: _208.MsgUpdateEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgUpdateEntityVerifiedResponse;
                fromJSON(_: any): _208.MsgUpdateEntityVerifiedResponse;
                toJSON(_: _208.MsgUpdateEntityVerifiedResponse): unknown;
                fromPartial(_: Partial<_208.MsgUpdateEntityVerifiedResponse>): _208.MsgUpdateEntityVerifiedResponse;
            };
            MsgTransferEntity: {
                encode(message: _208.MsgTransferEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgTransferEntity;
                fromJSON(object: any): _208.MsgTransferEntity;
                toJSON(message: _208.MsgTransferEntity): unknown;
                fromPartial(object: Partial<_208.MsgTransferEntity>): _208.MsgTransferEntity;
            };
            MsgTransferEntityResponse: {
                encode(_: _208.MsgTransferEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgTransferEntityResponse;
                fromJSON(_: any): _208.MsgTransferEntityResponse;
                toJSON(_: _208.MsgTransferEntityResponse): unknown;
                fromPartial(_: Partial<_208.MsgTransferEntityResponse>): _208.MsgTransferEntityResponse;
            };
            MsgCreateEntityAccount: {
                encode(message: _208.MsgCreateEntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgCreateEntityAccount;
                fromJSON(object: any): _208.MsgCreateEntityAccount;
                toJSON(message: _208.MsgCreateEntityAccount): unknown;
                fromPartial(object: Partial<_208.MsgCreateEntityAccount>): _208.MsgCreateEntityAccount;
            };
            MsgCreateEntityAccountResponse: {
                encode(message: _208.MsgCreateEntityAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgCreateEntityAccountResponse;
                fromJSON(object: any): _208.MsgCreateEntityAccountResponse;
                toJSON(message: _208.MsgCreateEntityAccountResponse): unknown;
                fromPartial(object: Partial<_208.MsgCreateEntityAccountResponse>): _208.MsgCreateEntityAccountResponse;
            };
            MsgGrantEntityAccountAuthz: {
                encode(message: _208.MsgGrantEntityAccountAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgGrantEntityAccountAuthz;
                fromJSON(object: any): _208.MsgGrantEntityAccountAuthz;
                toJSON(message: _208.MsgGrantEntityAccountAuthz): unknown;
                fromPartial(object: Partial<_208.MsgGrantEntityAccountAuthz>): _208.MsgGrantEntityAccountAuthz;
            };
            MsgGrantEntityAccountAuthzResponse: {
                encode(_: _208.MsgGrantEntityAccountAuthzResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgGrantEntityAccountAuthzResponse;
                fromJSON(_: any): _208.MsgGrantEntityAccountAuthzResponse;
                toJSON(_: _208.MsgGrantEntityAccountAuthzResponse): unknown;
                fromPartial(_: Partial<_208.MsgGrantEntityAccountAuthzResponse>): _208.MsgGrantEntityAccountAuthzResponse;
            };
            MsgRevokeEntityAccountAuthz: {
                encode(message: _208.MsgRevokeEntityAccountAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgRevokeEntityAccountAuthz;
                fromJSON(object: any): _208.MsgRevokeEntityAccountAuthz;
                toJSON(message: _208.MsgRevokeEntityAccountAuthz): unknown;
                fromPartial(object: Partial<_208.MsgRevokeEntityAccountAuthz>): _208.MsgRevokeEntityAccountAuthz;
            };
            MsgRevokeEntityAccountAuthzResponse: {
                encode(_: _208.MsgRevokeEntityAccountAuthzResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgRevokeEntityAccountAuthzResponse;
                fromJSON(_: any): _208.MsgRevokeEntityAccountAuthzResponse;
                toJSON(_: _208.MsgRevokeEntityAccountAuthzResponse): unknown;
                fromPartial(_: Partial<_208.MsgRevokeEntityAccountAuthzResponse>): _208.MsgRevokeEntityAccountAuthzResponse;
            };
            QueryParamsRequest: {
                encode(_: _207.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsRequest;
                fromJSON(_: any): _207.QueryParamsRequest;
                toJSON(_: _207.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_207.QueryParamsRequest>): _207.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _207.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsResponse;
                fromJSON(object: any): _207.QueryParamsResponse;
                toJSON(message: _207.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_207.QueryParamsResponse>): _207.QueryParamsResponse;
            };
            QueryEntityRequest: {
                encode(message: _207.QueryEntityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityRequest;
                fromJSON(object: any): _207.QueryEntityRequest;
                toJSON(message: _207.QueryEntityRequest): unknown;
                fromPartial(object: Partial<_207.QueryEntityRequest>): _207.QueryEntityRequest;
            };
            QueryEntityResponse: {
                encode(message: _207.QueryEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityResponse;
                fromJSON(object: any): _207.QueryEntityResponse;
                toJSON(message: _207.QueryEntityResponse): unknown;
                fromPartial(object: Partial<_207.QueryEntityResponse>): _207.QueryEntityResponse;
            };
            QueryEntityMetadataRequest: {
                encode(message: _207.QueryEntityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityMetadataRequest;
                fromJSON(object: any): _207.QueryEntityMetadataRequest;
                toJSON(message: _207.QueryEntityMetadataRequest): unknown;
                fromPartial(object: Partial<_207.QueryEntityMetadataRequest>): _207.QueryEntityMetadataRequest;
            };
            QueryEntityMetadataResponse: {
                encode(message: _207.QueryEntityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityMetadataResponse;
                fromJSON(object: any): _207.QueryEntityMetadataResponse;
                toJSON(message: _207.QueryEntityMetadataResponse): unknown;
                fromPartial(object: Partial<_207.QueryEntityMetadataResponse>): _207.QueryEntityMetadataResponse;
            };
            QueryEntityIidDocumentRequest: {
                encode(message: _207.QueryEntityIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityIidDocumentRequest;
                fromJSON(object: any): _207.QueryEntityIidDocumentRequest;
                toJSON(message: _207.QueryEntityIidDocumentRequest): unknown;
                fromPartial(object: Partial<_207.QueryEntityIidDocumentRequest>): _207.QueryEntityIidDocumentRequest;
            };
            QueryEntityIidDocumentResponse: {
                encode(message: _207.QueryEntityIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityIidDocumentResponse;
                fromJSON(object: any): _207.QueryEntityIidDocumentResponse;
                toJSON(message: _207.QueryEntityIidDocumentResponse): unknown;
                fromPartial(object: Partial<_207.QueryEntityIidDocumentResponse>): _207.QueryEntityIidDocumentResponse;
            };
            QueryEntityVerifiedRequest: {
                encode(message: _207.QueryEntityVerifiedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityVerifiedRequest;
                fromJSON(object: any): _207.QueryEntityVerifiedRequest;
                toJSON(message: _207.QueryEntityVerifiedRequest): unknown;
                fromPartial(object: Partial<_207.QueryEntityVerifiedRequest>): _207.QueryEntityVerifiedRequest;
            };
            QueryEntityVerifiedResponse: {
                encode(message: _207.QueryEntityVerifiedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityVerifiedResponse;
                fromJSON(object: any): _207.QueryEntityVerifiedResponse;
                toJSON(message: _207.QueryEntityVerifiedResponse): unknown;
                fromPartial(object: Partial<_207.QueryEntityVerifiedResponse>): _207.QueryEntityVerifiedResponse;
            };
            QueryEntityListRequest: {
                encode(message: _207.QueryEntityListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityListRequest;
                fromJSON(object: any): _207.QueryEntityListRequest;
                toJSON(message: _207.QueryEntityListRequest): unknown;
                fromPartial(object: Partial<_207.QueryEntityListRequest>): _207.QueryEntityListRequest;
            };
            QueryEntityListResponse: {
                encode(message: _207.QueryEntityListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryEntityListResponse;
                fromJSON(object: any): _207.QueryEntityListResponse;
                toJSON(message: _207.QueryEntityListResponse): unknown;
                fromPartial(object: Partial<_207.QueryEntityListResponse>): _207.QueryEntityListResponse;
            };
            InitializeNftContract: {
                encode(message: _206.InitializeNftContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.InitializeNftContract;
                fromJSON(object: any): _206.InitializeNftContract;
                toJSON(message: _206.InitializeNftContract): unknown;
                fromPartial(object: Partial<_206.InitializeNftContract>): _206.InitializeNftContract;
            };
            GenesisState: {
                encode(message: _205.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GenesisState;
                fromJSON(object: any): _205.GenesisState;
                toJSON(message: _205.GenesisState): unknown;
                fromPartial(object: Partial<_205.GenesisState>): _205.GenesisState;
            };
            EntityCreatedEvent: {
                encode(message: _204.EntityCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EntityCreatedEvent;
                fromJSON(object: any): _204.EntityCreatedEvent;
                toJSON(message: _204.EntityCreatedEvent): unknown;
                fromPartial(object: Partial<_204.EntityCreatedEvent>): _204.EntityCreatedEvent;
            };
            EntityUpdatedEvent: {
                encode(message: _204.EntityUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EntityUpdatedEvent;
                fromJSON(object: any): _204.EntityUpdatedEvent;
                toJSON(message: _204.EntityUpdatedEvent): unknown;
                fromPartial(object: Partial<_204.EntityUpdatedEvent>): _204.EntityUpdatedEvent;
            };
            EntityVerifiedUpdatedEvent: {
                encode(message: _204.EntityVerifiedUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EntityVerifiedUpdatedEvent;
                fromJSON(object: any): _204.EntityVerifiedUpdatedEvent;
                toJSON(message: _204.EntityVerifiedUpdatedEvent): unknown;
                fromPartial(object: Partial<_204.EntityVerifiedUpdatedEvent>): _204.EntityVerifiedUpdatedEvent;
            };
            EntityTransferredEvent: {
                encode(message: _204.EntityTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EntityTransferredEvent;
                fromJSON(object: any): _204.EntityTransferredEvent;
                toJSON(message: _204.EntityTransferredEvent): unknown;
                fromPartial(object: Partial<_204.EntityTransferredEvent>): _204.EntityTransferredEvent;
            };
            EntityAccountCreatedEvent: {
                encode(message: _204.EntityAccountCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EntityAccountCreatedEvent;
                fromJSON(object: any): _204.EntityAccountCreatedEvent;
                toJSON(message: _204.EntityAccountCreatedEvent): unknown;
                fromPartial(object: Partial<_204.EntityAccountCreatedEvent>): _204.EntityAccountCreatedEvent;
            };
            EntityAccountAuthzCreatedEvent: {
                encode(message: _204.EntityAccountAuthzCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EntityAccountAuthzCreatedEvent;
                fromJSON(object: any): _204.EntityAccountAuthzCreatedEvent;
                toJSON(message: _204.EntityAccountAuthzCreatedEvent): unknown;
                fromPartial(object: Partial<_204.EntityAccountAuthzCreatedEvent>): _204.EntityAccountAuthzCreatedEvent;
            };
            EntityAccountAuthzRevokedEvent: {
                encode(message: _204.EntityAccountAuthzRevokedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EntityAccountAuthzRevokedEvent;
                fromJSON(object: any): _204.EntityAccountAuthzRevokedEvent;
                toJSON(message: _204.EntityAccountAuthzRevokedEvent): unknown;
                fromPartial(object: Partial<_204.EntityAccountAuthzRevokedEvent>): _204.EntityAccountAuthzRevokedEvent;
            };
            Params: {
                encode(message: _203.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Params;
                fromJSON(object: any): _203.Params;
                toJSON(message: _203.Params): unknown;
                fromPartial(object: Partial<_203.Params>): _203.Params;
            };
            Entity: {
                encode(message: _203.Entity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Entity;
                fromJSON(object: any): _203.Entity;
                toJSON(message: _203.Entity): unknown;
                fromPartial(object: Partial<_203.Entity>): _203.Entity;
            };
            EntityAccount: {
                encode(message: _203.EntityAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.EntityAccount;
                fromJSON(object: any): _203.EntityAccount;
                toJSON(message: _203.EntityAccount): unknown;
                fromPartial(object: Partial<_203.EntityAccount>): _203.EntityAccount;
            };
            EntityMetadata: {
                encode(message: _203.EntityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.EntityMetadata;
                fromJSON(object: any): _203.EntityMetadata;
                toJSON(message: _203.EntityMetadata): unknown;
                fromPartial(object: Partial<_203.EntityMetadata>): _203.EntityMetadata;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _320.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _212.QueryEpochsInfoRequest): Promise<_212.QueryEpochsInfoResponse>;
                currentEpoch(request: _212.QueryCurrentEpochRequest): Promise<_212.QueryCurrentEpochResponse>;
            };
            QueryEpochsInfoRequest: {
                encode(_: _212.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryEpochsInfoRequest;
                fromJSON(_: any): _212.QueryEpochsInfoRequest;
                toJSON(_: _212.QueryEpochsInfoRequest): unknown;
                fromPartial(_: Partial<_212.QueryEpochsInfoRequest>): _212.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _212.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryEpochsInfoResponse;
                fromJSON(object: any): _212.QueryEpochsInfoResponse;
                toJSON(message: _212.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_212.QueryEpochsInfoResponse>): _212.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _212.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryCurrentEpochRequest;
                fromJSON(object: any): _212.QueryCurrentEpochRequest;
                toJSON(message: _212.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_212.QueryCurrentEpochRequest>): _212.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _212.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryCurrentEpochResponse;
                fromJSON(object: any): _212.QueryCurrentEpochResponse;
                toJSON(message: _212.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_212.QueryCurrentEpochResponse>): _212.QueryCurrentEpochResponse;
            };
            GenesisState: {
                encode(message: _211.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.GenesisState;
                fromJSON(object: any): _211.GenesisState;
                toJSON(message: _211.GenesisState): unknown;
                fromPartial(object: Partial<_211.GenesisState>): _211.GenesisState;
            };
            EpochStartEvent: {
                encode(message: _210.EpochStartEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.EpochStartEvent;
                fromJSON(object: any): _210.EpochStartEvent;
                toJSON(message: _210.EpochStartEvent): unknown;
                fromPartial(object: Partial<_210.EpochStartEvent>): _210.EpochStartEvent;
            };
            EpochEndEvent: {
                encode(message: _210.EpochEndEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.EpochEndEvent;
                fromJSON(object: any): _210.EpochEndEvent;
                toJSON(message: _210.EpochEndEvent): unknown;
                fromPartial(object: Partial<_210.EpochEndEvent>): _210.EpochEndEvent;
            };
            EpochInfo: {
                encode(message: _209.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.EpochInfo;
                fromJSON(object: any): _209.EpochInfo;
                toJSON(message: _209.EpochInfo): unknown;
                fromPartial(object: Partial<_209.EpochInfo>): _209.EpochInfo;
            };
        };
    }
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _321.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _216.QueryIidDocumentsRequest): Promise<_216.QueryIidDocumentsResponse>;
                iidDocument(request: _216.QueryIidDocumentRequest): Promise<_216.QueryIidDocumentResponse>;
            };
            Context: {
                encode(message: _218.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Context;
                fromJSON(object: any): _218.Context;
                toJSON(message: _218.Context): unknown;
                fromPartial(object: Partial<_218.Context>): _218.Context;
            };
            AccordedRight: {
                encode(message: _218.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.AccordedRight;
                fromJSON(object: any): _218.AccordedRight;
                toJSON(message: _218.AccordedRight): unknown;
                fromPartial(object: Partial<_218.AccordedRight>): _218.AccordedRight;
            };
            LinkedResource: {
                encode(message: _218.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.LinkedResource;
                fromJSON(object: any): _218.LinkedResource;
                toJSON(message: _218.LinkedResource): unknown;
                fromPartial(object: Partial<_218.LinkedResource>): _218.LinkedResource;
            };
            LinkedClaim: {
                encode(message: _218.LinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.LinkedClaim;
                fromJSON(object: any): _218.LinkedClaim;
                toJSON(message: _218.LinkedClaim): unknown;
                fromPartial(object: Partial<_218.LinkedClaim>): _218.LinkedClaim;
            };
            LinkedEntity: {
                encode(message: _218.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.LinkedEntity;
                fromJSON(object: any): _218.LinkedEntity;
                toJSON(message: _218.LinkedEntity): unknown;
                fromPartial(object: Partial<_218.LinkedEntity>): _218.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _218.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.VerificationMethod;
                fromJSON(object: any): _218.VerificationMethod;
                toJSON(message: _218.VerificationMethod): unknown;
                fromPartial(object: Partial<_218.VerificationMethod>): _218.VerificationMethod;
            };
            Service: {
                encode(message: _218.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Service;
                fromJSON(object: any): _218.Service;
                toJSON(message: _218.Service): unknown;
                fromPartial(object: Partial<_218.Service>): _218.Service;
            };
            IidMetadata: {
                encode(message: _218.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.IidMetadata;
                fromJSON(object: any): _218.IidMetadata;
                toJSON(message: _218.IidMetadata): unknown;
                fromPartial(object: Partial<_218.IidMetadata>): _218.IidMetadata;
            };
            Verification: {
                encode(message: _217.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Verification;
                fromJSON(object: any): _217.Verification;
                toJSON(message: _217.Verification): unknown;
                fromPartial(object: Partial<_217.Verification>): _217.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _217.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgCreateIidDocument;
                fromJSON(object: any): _217.MsgCreateIidDocument;
                toJSON(message: _217.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_217.MsgCreateIidDocument>): _217.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _217.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _217.MsgCreateIidDocumentResponse;
                toJSON(_: _217.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_217.MsgCreateIidDocumentResponse>): _217.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _217.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgUpdateIidDocument;
                fromJSON(object: any): _217.MsgUpdateIidDocument;
                toJSON(message: _217.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_217.MsgUpdateIidDocument>): _217.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _217.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _217.MsgUpdateIidDocumentResponse;
                toJSON(_: _217.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_217.MsgUpdateIidDocumentResponse>): _217.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _217.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddVerification;
                fromJSON(object: any): _217.MsgAddVerification;
                toJSON(message: _217.MsgAddVerification): unknown;
                fromPartial(object: Partial<_217.MsgAddVerification>): _217.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _217.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddVerificationResponse;
                fromJSON(_: any): _217.MsgAddVerificationResponse;
                toJSON(_: _217.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddVerificationResponse>): _217.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _217.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgSetVerificationRelationships;
                fromJSON(object: any): _217.MsgSetVerificationRelationships;
                toJSON(message: _217.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_217.MsgSetVerificationRelationships>): _217.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _217.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _217.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _217.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_217.MsgSetVerificationRelationshipsResponse>): _217.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _217.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgRevokeVerification;
                fromJSON(object: any): _217.MsgRevokeVerification;
                toJSON(message: _217.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_217.MsgRevokeVerification>): _217.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _217.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgRevokeVerificationResponse;
                fromJSON(_: any): _217.MsgRevokeVerificationResponse;
                toJSON(_: _217.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_217.MsgRevokeVerificationResponse>): _217.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _217.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddService;
                fromJSON(object: any): _217.MsgAddService;
                toJSON(message: _217.MsgAddService): unknown;
                fromPartial(object: Partial<_217.MsgAddService>): _217.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _217.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddServiceResponse;
                fromJSON(_: any): _217.MsgAddServiceResponse;
                toJSON(_: _217.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddServiceResponse>): _217.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _217.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteService;
                fromJSON(object: any): _217.MsgDeleteService;
                toJSON(message: _217.MsgDeleteService): unknown;
                fromPartial(object: Partial<_217.MsgDeleteService>): _217.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _217.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteServiceResponse;
                fromJSON(_: any): _217.MsgDeleteServiceResponse;
                toJSON(_: _217.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeleteServiceResponse>): _217.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _217.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddController;
                fromJSON(object: any): _217.MsgAddController;
                toJSON(message: _217.MsgAddController): unknown;
                fromPartial(object: Partial<_217.MsgAddController>): _217.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _217.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddControllerResponse;
                fromJSON(_: any): _217.MsgAddControllerResponse;
                toJSON(_: _217.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddControllerResponse>): _217.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _217.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteController;
                fromJSON(object: any): _217.MsgDeleteController;
                toJSON(message: _217.MsgDeleteController): unknown;
                fromPartial(object: Partial<_217.MsgDeleteController>): _217.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _217.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteControllerResponse;
                fromJSON(_: any): _217.MsgDeleteControllerResponse;
                toJSON(_: _217.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeleteControllerResponse>): _217.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _217.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddLinkedResource;
                fromJSON(object: any): _217.MsgAddLinkedResource;
                toJSON(message: _217.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_217.MsgAddLinkedResource>): _217.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _217.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteLinkedResource;
                fromJSON(object: any): _217.MsgDeleteLinkedResource;
                toJSON(message: _217.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_217.MsgDeleteLinkedResource>): _217.MsgDeleteLinkedResource;
            };
            MsgAddLinkedClaim: {
                encode(message: _217.MsgAddLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddLinkedClaim;
                fromJSON(object: any): _217.MsgAddLinkedClaim;
                toJSON(message: _217.MsgAddLinkedClaim): unknown;
                fromPartial(object: Partial<_217.MsgAddLinkedClaim>): _217.MsgAddLinkedClaim;
            };
            MsgDeleteLinkedClaim: {
                encode(message: _217.MsgDeleteLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteLinkedClaim;
                fromJSON(object: any): _217.MsgDeleteLinkedClaim;
                toJSON(message: _217.MsgDeleteLinkedClaim): unknown;
                fromPartial(object: Partial<_217.MsgDeleteLinkedClaim>): _217.MsgDeleteLinkedClaim;
            };
            MsgAddLinkedEntity: {
                encode(message: _217.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddLinkedEntity;
                fromJSON(object: any): _217.MsgAddLinkedEntity;
                toJSON(message: _217.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_217.MsgAddLinkedEntity>): _217.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _217.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteLinkedEntity;
                fromJSON(object: any): _217.MsgDeleteLinkedEntity;
                toJSON(message: _217.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_217.MsgDeleteLinkedEntity>): _217.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _217.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddAccordedRight;
                fromJSON(object: any): _217.MsgAddAccordedRight;
                toJSON(message: _217.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_217.MsgAddAccordedRight>): _217.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _217.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteAccordedRight;
                fromJSON(object: any): _217.MsgDeleteAccordedRight;
                toJSON(message: _217.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_217.MsgDeleteAccordedRight>): _217.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _217.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddIidContext;
                fromJSON(object: any): _217.MsgAddIidContext;
                toJSON(message: _217.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_217.MsgAddIidContext>): _217.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _217.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeactivateIID;
                fromJSON(object: any): _217.MsgDeactivateIID;
                toJSON(message: _217.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_217.MsgDeactivateIID>): _217.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _217.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteIidContext;
                fromJSON(object: any): _217.MsgDeleteIidContext;
                toJSON(message: _217.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_217.MsgDeleteIidContext>): _217.MsgDeleteIidContext;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _217.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _217.MsgAddLinkedResourceResponse;
                toJSON(_: _217.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddLinkedResourceResponse>): _217.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _217.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _217.MsgDeleteLinkedResourceResponse;
                toJSON(_: _217.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeleteLinkedResourceResponse>): _217.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedClaimResponse: {
                encode(_: _217.MsgAddLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddLinkedClaimResponse;
                fromJSON(_: any): _217.MsgAddLinkedClaimResponse;
                toJSON(_: _217.MsgAddLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddLinkedClaimResponse>): _217.MsgAddLinkedClaimResponse;
            };
            MsgDeleteLinkedClaimResponse: {
                encode(_: _217.MsgDeleteLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteLinkedClaimResponse;
                fromJSON(_: any): _217.MsgDeleteLinkedClaimResponse;
                toJSON(_: _217.MsgDeleteLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeleteLinkedClaimResponse>): _217.MsgDeleteLinkedClaimResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _217.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _217.MsgAddLinkedEntityResponse;
                toJSON(_: _217.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddLinkedEntityResponse>): _217.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _217.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _217.MsgDeleteLinkedEntityResponse;
                toJSON(_: _217.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeleteLinkedEntityResponse>): _217.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _217.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddAccordedRightResponse;
                fromJSON(_: any): _217.MsgAddAccordedRightResponse;
                toJSON(_: _217.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddAccordedRightResponse>): _217.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _217.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _217.MsgDeleteAccordedRightResponse;
                toJSON(_: _217.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeleteAccordedRightResponse>): _217.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _217.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgAddIidContextResponse;
                fromJSON(_: any): _217.MsgAddIidContextResponse;
                toJSON(_: _217.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_217.MsgAddIidContextResponse>): _217.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _217.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeleteIidContextResponse;
                fromJSON(_: any): _217.MsgDeleteIidContextResponse;
                toJSON(_: _217.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeleteIidContextResponse>): _217.MsgDeleteIidContextResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _217.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgDeactivateIIDResponse;
                fromJSON(_: any): _217.MsgDeactivateIIDResponse;
                toJSON(_: _217.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_217.MsgDeactivateIIDResponse>): _217.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _216.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryIidDocumentsRequest;
                fromJSON(object: any): _216.QueryIidDocumentsRequest;
                toJSON(message: _216.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_216.QueryIidDocumentsRequest>): _216.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _216.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryIidDocumentsResponse;
                fromJSON(object: any): _216.QueryIidDocumentsResponse;
                toJSON(message: _216.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_216.QueryIidDocumentsResponse>): _216.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _216.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryIidDocumentRequest;
                fromJSON(object: any): _216.QueryIidDocumentRequest;
                toJSON(message: _216.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_216.QueryIidDocumentRequest>): _216.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _216.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryIidDocumentResponse;
                fromJSON(object: any): _216.QueryIidDocumentResponse;
                toJSON(message: _216.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_216.QueryIidDocumentResponse>): _216.QueryIidDocumentResponse;
            };
            IidDocument: {
                encode(message: _215.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.IidDocument;
                fromJSON(object: any): _215.IidDocument;
                toJSON(message: _215.IidDocument): unknown;
                fromPartial(object: Partial<_215.IidDocument>): _215.IidDocument;
            };
            GenesisState: {
                encode(message: _214.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GenesisState;
                fromJSON(object: any): _214.GenesisState;
                toJSON(message: _214.GenesisState): unknown;
                fromPartial(object: Partial<_214.GenesisState>): _214.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _213.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.IidDocumentCreatedEvent;
                fromJSON(object: any): _213.IidDocumentCreatedEvent;
                toJSON(message: _213.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_213.IidDocumentCreatedEvent>): _213.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _213.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.IidDocumentUpdatedEvent;
                fromJSON(object: any): _213.IidDocumentUpdatedEvent;
                toJSON(message: _213.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_213.IidDocumentUpdatedEvent>): _213.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace liquidstake {
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _322.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleParams(request?: _222.QueryModuleParamsRequest): Promise<_222.QueryModuleParamsResponse>;
                pool(request: _222.QueryPoolRequest): Promise<_222.QueryPoolResponse>;
                pools(request?: _222.QueryPoolsRequest): Promise<_222.QueryPoolsResponse>;
                liquidValidators(request: _222.QueryLiquidValidatorsRequest): Promise<_222.QueryLiquidValidatorsResponse>;
                states(request: _222.QueryStatesRequest): Promise<_222.QueryStatesResponse>;
            };
            MsgLiquidStake: {
                encode(message: _223.MsgLiquidStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgLiquidStake;
                fromJSON(object: any): _223.MsgLiquidStake;
                toJSON(message: _223.MsgLiquidStake): unknown;
                fromPartial(object: Partial<_223.MsgLiquidStake>): _223.MsgLiquidStake;
            };
            MsgLiquidStakeResponse: {
                encode(_: _223.MsgLiquidStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgLiquidStakeResponse;
                fromJSON(_: any): _223.MsgLiquidStakeResponse;
                toJSON(_: _223.MsgLiquidStakeResponse): unknown;
                fromPartial(_: Partial<_223.MsgLiquidStakeResponse>): _223.MsgLiquidStakeResponse;
            };
            MsgLiquidUnstake: {
                encode(message: _223.MsgLiquidUnstake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgLiquidUnstake;
                fromJSON(object: any): _223.MsgLiquidUnstake;
                toJSON(message: _223.MsgLiquidUnstake): unknown;
                fromPartial(object: Partial<_223.MsgLiquidUnstake>): _223.MsgLiquidUnstake;
            };
            MsgLiquidUnstakeResponse: {
                encode(message: _223.MsgLiquidUnstakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgLiquidUnstakeResponse;
                fromJSON(object: any): _223.MsgLiquidUnstakeResponse;
                toJSON(message: _223.MsgLiquidUnstakeResponse): unknown;
                fromPartial(object: Partial<_223.MsgLiquidUnstakeResponse>): _223.MsgLiquidUnstakeResponse;
            };
            MsgCreatePool: {
                encode(message: _223.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreatePool;
                fromJSON(object: any): _223.MsgCreatePool;
                toJSON(message: _223.MsgCreatePool): unknown;
                fromPartial(object: Partial<_223.MsgCreatePool>): _223.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(message: _223.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreatePoolResponse;
                fromJSON(object: any): _223.MsgCreatePoolResponse;
                toJSON(message: _223.MsgCreatePoolResponse): unknown;
                fromPartial(object: Partial<_223.MsgCreatePoolResponse>): _223.MsgCreatePoolResponse;
            };
            MsgUpdateModuleParams: {
                encode(message: _223.MsgUpdateModuleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateModuleParams;
                fromJSON(object: any): _223.MsgUpdateModuleParams;
                toJSON(message: _223.MsgUpdateModuleParams): unknown;
                fromPartial(object: Partial<_223.MsgUpdateModuleParams>): _223.MsgUpdateModuleParams;
            };
            MsgUpdateModuleParamsResponse: {
                encode(_: _223.MsgUpdateModuleParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateModuleParamsResponse;
                fromJSON(_: any): _223.MsgUpdateModuleParamsResponse;
                toJSON(_: _223.MsgUpdateModuleParamsResponse): unknown;
                fromPartial(_: Partial<_223.MsgUpdateModuleParamsResponse>): _223.MsgUpdateModuleParamsResponse;
            };
            MsgUpdatePool: {
                encode(message: _223.MsgUpdatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdatePool;
                fromJSON(object: any): _223.MsgUpdatePool;
                toJSON(message: _223.MsgUpdatePool): unknown;
                fromPartial(object: Partial<_223.MsgUpdatePool>): _223.MsgUpdatePool;
            };
            MsgUpdatePoolResponse: {
                encode(_: _223.MsgUpdatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdatePoolResponse;
                fromJSON(_: any): _223.MsgUpdatePoolResponse;
                toJSON(_: _223.MsgUpdatePoolResponse): unknown;
                fromPartial(_: Partial<_223.MsgUpdatePoolResponse>): _223.MsgUpdatePoolResponse;
            };
            MsgUpdateWhitelistedValidators: {
                encode(message: _223.MsgUpdateWhitelistedValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateWhitelistedValidators;
                fromJSON(object: any): _223.MsgUpdateWhitelistedValidators;
                toJSON(message: _223.MsgUpdateWhitelistedValidators): unknown;
                fromPartial(object: Partial<_223.MsgUpdateWhitelistedValidators>): _223.MsgUpdateWhitelistedValidators;
            };
            MsgUpdateWhitelistedValidatorsResponse: {
                encode(_: _223.MsgUpdateWhitelistedValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateWhitelistedValidatorsResponse;
                fromJSON(_: any): _223.MsgUpdateWhitelistedValidatorsResponse;
                toJSON(_: _223.MsgUpdateWhitelistedValidatorsResponse): unknown;
                fromPartial(_: Partial<_223.MsgUpdateWhitelistedValidatorsResponse>): _223.MsgUpdateWhitelistedValidatorsResponse;
            };
            MsgUpdateWeightedRewardsReceivers: {
                encode(message: _223.MsgUpdateWeightedRewardsReceivers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateWeightedRewardsReceivers;
                fromJSON(object: any): _223.MsgUpdateWeightedRewardsReceivers;
                toJSON(message: _223.MsgUpdateWeightedRewardsReceivers): unknown;
                fromPartial(object: Partial<_223.MsgUpdateWeightedRewardsReceivers>): _223.MsgUpdateWeightedRewardsReceivers;
            };
            MsgUpdateWeightedRewardsReceiversResponse: {
                encode(_: _223.MsgUpdateWeightedRewardsReceiversResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateWeightedRewardsReceiversResponse;
                fromJSON(_: any): _223.MsgUpdateWeightedRewardsReceiversResponse;
                toJSON(_: _223.MsgUpdateWeightedRewardsReceiversResponse): unknown;
                fromPartial(_: Partial<_223.MsgUpdateWeightedRewardsReceiversResponse>): _223.MsgUpdateWeightedRewardsReceiversResponse;
            };
            MsgSetPoolPaused: {
                encode(message: _223.MsgSetPoolPaused, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgSetPoolPaused;
                fromJSON(object: any): _223.MsgSetPoolPaused;
                toJSON(message: _223.MsgSetPoolPaused): unknown;
                fromPartial(object: Partial<_223.MsgSetPoolPaused>): _223.MsgSetPoolPaused;
            };
            MsgSetPoolPausedResponse: {
                encode(_: _223.MsgSetPoolPausedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgSetPoolPausedResponse;
                fromJSON(_: any): _223.MsgSetPoolPausedResponse;
                toJSON(_: _223.MsgSetPoolPausedResponse): unknown;
                fromPartial(_: Partial<_223.MsgSetPoolPausedResponse>): _223.MsgSetPoolPausedResponse;
            };
            MsgSetModulePaused: {
                encode(message: _223.MsgSetModulePaused, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgSetModulePaused;
                fromJSON(object: any): _223.MsgSetModulePaused;
                toJSON(message: _223.MsgSetModulePaused): unknown;
                fromPartial(object: Partial<_223.MsgSetModulePaused>): _223.MsgSetModulePaused;
            };
            MsgSetModulePausedResponse: {
                encode(_: _223.MsgSetModulePausedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgSetModulePausedResponse;
                fromJSON(_: any): _223.MsgSetModulePausedResponse;
                toJSON(_: _223.MsgSetModulePausedResponse): unknown;
                fromPartial(_: Partial<_223.MsgSetModulePausedResponse>): _223.MsgSetModulePausedResponse;
            };
            MsgBurn: {
                encode(message: _223.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgBurn;
                fromJSON(object: any): _223.MsgBurn;
                toJSON(message: _223.MsgBurn): unknown;
                fromPartial(object: Partial<_223.MsgBurn>): _223.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _223.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgBurnResponse;
                fromJSON(_: any): _223.MsgBurnResponse;
                toJSON(_: _223.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_223.MsgBurnResponse>): _223.MsgBurnResponse;
            };
            MsgUpdateParams: {
                encode(message: _223.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateParams;
                fromJSON(object: any): _223.MsgUpdateParams;
                toJSON(message: _223.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_223.MsgUpdateParams>): _223.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _223.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgUpdateParamsResponse;
                fromJSON(_: any): _223.MsgUpdateParamsResponse;
                toJSON(_: _223.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_223.MsgUpdateParamsResponse>): _223.MsgUpdateParamsResponse;
            };
            QueryModuleParamsRequest: {
                encode(_: _222.QueryModuleParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryModuleParamsRequest;
                fromJSON(_: any): _222.QueryModuleParamsRequest;
                toJSON(_: _222.QueryModuleParamsRequest): unknown;
                fromPartial(_: Partial<_222.QueryModuleParamsRequest>): _222.QueryModuleParamsRequest;
            };
            QueryModuleParamsResponse: {
                encode(message: _222.QueryModuleParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryModuleParamsResponse;
                fromJSON(object: any): _222.QueryModuleParamsResponse;
                toJSON(message: _222.QueryModuleParamsResponse): unknown;
                fromPartial(object: Partial<_222.QueryModuleParamsResponse>): _222.QueryModuleParamsResponse;
            };
            QueryPoolRequest: {
                encode(message: _222.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryPoolRequest;
                fromJSON(object: any): _222.QueryPoolRequest;
                toJSON(message: _222.QueryPoolRequest): unknown;
                fromPartial(object: Partial<_222.QueryPoolRequest>): _222.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _222.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryPoolResponse;
                fromJSON(object: any): _222.QueryPoolResponse;
                toJSON(message: _222.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_222.QueryPoolResponse>): _222.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _222.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryPoolsRequest;
                fromJSON(object: any): _222.QueryPoolsRequest;
                toJSON(message: _222.QueryPoolsRequest): unknown;
                fromPartial(object: Partial<_222.QueryPoolsRequest>): _222.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _222.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryPoolsResponse;
                fromJSON(object: any): _222.QueryPoolsResponse;
                toJSON(message: _222.QueryPoolsResponse): unknown;
                fromPartial(object: Partial<_222.QueryPoolsResponse>): _222.QueryPoolsResponse;
            };
            QueryLiquidValidatorsRequest: {
                encode(message: _222.QueryLiquidValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryLiquidValidatorsRequest;
                fromJSON(object: any): _222.QueryLiquidValidatorsRequest;
                toJSON(message: _222.QueryLiquidValidatorsRequest): unknown;
                fromPartial(object: Partial<_222.QueryLiquidValidatorsRequest>): _222.QueryLiquidValidatorsRequest;
            };
            QueryLiquidValidatorsResponse: {
                encode(message: _222.QueryLiquidValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryLiquidValidatorsResponse;
                fromJSON(object: any): _222.QueryLiquidValidatorsResponse;
                toJSON(message: _222.QueryLiquidValidatorsResponse): unknown;
                fromPartial(object: Partial<_222.QueryLiquidValidatorsResponse>): _222.QueryLiquidValidatorsResponse;
            };
            QueryStatesRequest: {
                encode(message: _222.QueryStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryStatesRequest;
                fromJSON(object: any): _222.QueryStatesRequest;
                toJSON(message: _222.QueryStatesRequest): unknown;
                fromPartial(object: Partial<_222.QueryStatesRequest>): _222.QueryStatesRequest;
            };
            QueryStatesResponse: {
                encode(message: _222.QueryStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryStatesResponse;
                fromJSON(object: any): _222.QueryStatesResponse;
                toJSON(message: _222.QueryStatesResponse): unknown;
                fromPartial(object: Partial<_222.QueryStatesResponse>): _222.QueryStatesResponse;
            };
            validatorStatusFromJSON(object: any): _221.ValidatorStatus;
            validatorStatusToJSON(object: _221.ValidatorStatus): string;
            ValidatorStatus: typeof _221.ValidatorStatus;
            ValidatorStatusSDKType: typeof _221.ValidatorStatus;
            Params: {
                encode(message: _221.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.Params;
                fromJSON(object: any): _221.Params;
                toJSON(message: _221.Params): unknown;
                fromPartial(object: Partial<_221.Params>): _221.Params;
            };
            ModuleParams: {
                encode(message: _221.ModuleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ModuleParams;
                fromJSON(object: any): _221.ModuleParams;
                toJSON(message: _221.ModuleParams): unknown;
                fromPartial(object: Partial<_221.ModuleParams>): _221.ModuleParams;
            };
            Pool: {
                encode(message: _221.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.Pool;
                fromJSON(object: any): _221.Pool;
                toJSON(message: _221.Pool): unknown;
                fromPartial(object: Partial<_221.Pool>): _221.Pool;
            };
            WeightedAddress: {
                encode(message: _221.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.WeightedAddress;
                fromJSON(object: any): _221.WeightedAddress;
                toJSON(message: _221.WeightedAddress): unknown;
                fromPartial(object: Partial<_221.WeightedAddress>): _221.WeightedAddress;
            };
            WhitelistedValidator: {
                encode(message: _221.WhitelistedValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.WhitelistedValidator;
                fromJSON(object: any): _221.WhitelistedValidator;
                toJSON(message: _221.WhitelistedValidator): unknown;
                fromPartial(object: Partial<_221.WhitelistedValidator>): _221.WhitelistedValidator;
            };
            LiquidValidator: {
                encode(message: _221.LiquidValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.LiquidValidator;
                fromJSON(object: any): _221.LiquidValidator;
                toJSON(message: _221.LiquidValidator): unknown;
                fromPartial(object: Partial<_221.LiquidValidator>): _221.LiquidValidator;
            };
            LiquidValidatorState: {
                encode(message: _221.LiquidValidatorState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.LiquidValidatorState;
                fromJSON(object: any): _221.LiquidValidatorState;
                toJSON(message: _221.LiquidValidatorState): unknown;
                fromPartial(object: Partial<_221.LiquidValidatorState>): _221.LiquidValidatorState;
            };
            NetAmountState: {
                encode(message: _221.NetAmountState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.NetAmountState;
                fromJSON(object: any): _221.NetAmountState;
                toJSON(message: _221.NetAmountState): unknown;
                fromPartial(object: Partial<_221.NetAmountState>): _221.NetAmountState;
            };
            GenesisState: {
                encode(message: _220.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.GenesisState;
                fromJSON(object: any): _220.GenesisState;
                toJSON(message: _220.GenesisState): unknown;
                fromPartial(object: Partial<_220.GenesisState>): _220.GenesisState;
            };
            PoolLiquidValidators: {
                encode(message: _220.PoolLiquidValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.PoolLiquidValidators;
                fromJSON(object: any): _220.PoolLiquidValidators;
                toJSON(message: _220.PoolLiquidValidators): unknown;
                fromPartial(object: Partial<_220.PoolLiquidValidators>): _220.PoolLiquidValidators;
            };
            ModuleParamsUpdatedEvent: {
                encode(message: _219.ModuleParamsUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.ModuleParamsUpdatedEvent;
                fromJSON(object: any): _219.ModuleParamsUpdatedEvent;
                toJSON(message: _219.ModuleParamsUpdatedEvent): unknown;
                fromPartial(object: Partial<_219.ModuleParamsUpdatedEvent>): _219.ModuleParamsUpdatedEvent;
            };
            PoolCreatedEvent: {
                encode(message: _219.PoolCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.PoolCreatedEvent;
                fromJSON(object: any): _219.PoolCreatedEvent;
                toJSON(message: _219.PoolCreatedEvent): unknown;
                fromPartial(object: Partial<_219.PoolCreatedEvent>): _219.PoolCreatedEvent;
            };
            PoolUpdatedEvent: {
                encode(message: _219.PoolUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.PoolUpdatedEvent;
                fromJSON(object: any): _219.PoolUpdatedEvent;
                toJSON(message: _219.PoolUpdatedEvent): unknown;
                fromPartial(object: Partial<_219.PoolUpdatedEvent>): _219.PoolUpdatedEvent;
            };
            LiquidStakeEvent: {
                encode(message: _219.LiquidStakeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.LiquidStakeEvent;
                fromJSON(object: any): _219.LiquidStakeEvent;
                toJSON(message: _219.LiquidStakeEvent): unknown;
                fromPartial(object: Partial<_219.LiquidStakeEvent>): _219.LiquidStakeEvent;
            };
            LiquidUnstakeEvent: {
                encode(message: _219.LiquidUnstakeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.LiquidUnstakeEvent;
                fromJSON(object: any): _219.LiquidUnstakeEvent;
                toJSON(message: _219.LiquidUnstakeEvent): unknown;
                fromPartial(object: Partial<_219.LiquidUnstakeEvent>): _219.LiquidUnstakeEvent;
            };
            AddLiquidValidatorEvent: {
                encode(message: _219.AddLiquidValidatorEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.AddLiquidValidatorEvent;
                fromJSON(object: any): _219.AddLiquidValidatorEvent;
                toJSON(message: _219.AddLiquidValidatorEvent): unknown;
                fromPartial(object: Partial<_219.AddLiquidValidatorEvent>): _219.AddLiquidValidatorEvent;
            };
            RebalancedLiquidStakeEvent: {
                encode(message: _219.RebalancedLiquidStakeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.RebalancedLiquidStakeEvent;
                fromJSON(object: any): _219.RebalancedLiquidStakeEvent;
                toJSON(message: _219.RebalancedLiquidStakeEvent): unknown;
                fromPartial(object: Partial<_219.RebalancedLiquidStakeEvent>): _219.RebalancedLiquidStakeEvent;
            };
            AutocompoundStakingRewardsEvent: {
                encode(message: _219.AutocompoundStakingRewardsEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.AutocompoundStakingRewardsEvent;
                fromJSON(object: any): _219.AutocompoundStakingRewardsEvent;
                toJSON(message: _219.AutocompoundStakingRewardsEvent): unknown;
                fromPartial(object: Partial<_219.AutocompoundStakingRewardsEvent>): _219.AutocompoundStakingRewardsEvent;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _323.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _227.QueryParamsRequest): Promise<_227.QueryParamsResponse>;
                epochProvisions(request?: _227.QueryEpochProvisionsRequest): Promise<_227.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _227.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryParamsRequest;
                fromJSON(_: any): _227.QueryParamsRequest;
                toJSON(_: _227.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_227.QueryParamsRequest>): _227.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _227.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryParamsResponse;
                fromJSON(object: any): _227.QueryParamsResponse;
                toJSON(message: _227.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_227.QueryParamsResponse>): _227.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _227.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryEpochProvisionsRequest;
                fromJSON(_: any): _227.QueryEpochProvisionsRequest;
                toJSON(_: _227.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: Partial<_227.QueryEpochProvisionsRequest>): _227.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _227.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryEpochProvisionsResponse;
                fromJSON(object: any): _227.QueryEpochProvisionsResponse;
                toJSON(message: _227.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: Partial<_227.QueryEpochProvisionsResponse>): _227.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _226.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Minter;
                fromJSON(object: any): _226.Minter;
                toJSON(message: _226.Minter): unknown;
                fromPartial(object: Partial<_226.Minter>): _226.Minter;
            };
            WeightedAddress: {
                encode(message: _226.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.WeightedAddress;
                fromJSON(object: any): _226.WeightedAddress;
                toJSON(message: _226.WeightedAddress): unknown;
                fromPartial(object: Partial<_226.WeightedAddress>): _226.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _226.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.DistributionProportions;
                fromJSON(object: any): _226.DistributionProportions;
                toJSON(message: _226.DistributionProportions): unknown;
                fromPartial(object: Partial<_226.DistributionProportions>): _226.DistributionProportions;
            };
            Params: {
                encode(message: _226.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Params;
                fromJSON(object: any): _226.Params;
                toJSON(message: _226.Params): unknown;
                fromPartial(object: Partial<_226.Params>): _226.Params;
            };
            GenesisState: {
                encode(message: _225.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.GenesisState;
                fromJSON(object: any): _225.GenesisState;
                toJSON(message: _225.GenesisState): unknown;
                fromPartial(object: Partial<_225.GenesisState>): _225.GenesisState;
            };
            MintEpochProvisionsMintedEvent: {
                encode(message: _224.MintEpochProvisionsMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MintEpochProvisionsMintedEvent;
                fromJSON(object: any): _224.MintEpochProvisionsMintedEvent;
                toJSON(message: _224.MintEpochProvisionsMintedEvent): unknown;
                fromPartial(object: Partial<_224.MintEpochProvisionsMintedEvent>): _224.MintEpochProvisionsMintedEvent;
            };
        };
    }
    namespace names {
        const v1beta1: {
            MsgClientImpl: typeof _332.MsgClientImpl;
            QueryClientImpl: typeof _324.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                namespace(request: _231.QueryNamespaceRequest): Promise<_231.QueryNamespaceResponse>;
                namespaces(request?: _231.QueryNamespacesRequest): Promise<_231.QueryNamespacesResponse>;
                resolveName(request: _231.QueryResolveNameRequest): Promise<_231.QueryResolveNameResponse>;
                getName(request: _231.QueryGetNameRequest): Promise<_231.QueryGetNameResponse>;
                namesByNamespace(request: _231.QueryNamesByNamespaceRequest): Promise<_231.QueryNamesByNamespaceResponse>;
                namesByOwner(request: _231.QueryNamesByOwnerRequest): Promise<_231.QueryNamesByOwnerResponse>;
            };
            MsgCreateNamespace: {
                encode(message: _232.MsgCreateNamespace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreateNamespace;
                fromJSON(object: any): _232.MsgCreateNamespace;
                toJSON(message: _232.MsgCreateNamespace): unknown;
                fromPartial(object: Partial<_232.MsgCreateNamespace>): _232.MsgCreateNamespace;
            };
            MsgCreateNamespaceResponse: {
                encode(_: _232.MsgCreateNamespaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreateNamespaceResponse;
                fromJSON(_: any): _232.MsgCreateNamespaceResponse;
                toJSON(_: _232.MsgCreateNamespaceResponse): unknown;
                fromPartial(_: Partial<_232.MsgCreateNamespaceResponse>): _232.MsgCreateNamespaceResponse;
            };
            MsgUpdateNamespace: {
                encode(message: _232.MsgUpdateNamespace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgUpdateNamespace;
                fromJSON(object: any): _232.MsgUpdateNamespace;
                toJSON(message: _232.MsgUpdateNamespace): unknown;
                fromPartial(object: Partial<_232.MsgUpdateNamespace>): _232.MsgUpdateNamespace;
            };
            MsgUpdateNamespaceResponse: {
                encode(_: _232.MsgUpdateNamespaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgUpdateNamespaceResponse;
                fromJSON(_: any): _232.MsgUpdateNamespaceResponse;
                toJSON(_: _232.MsgUpdateNamespaceResponse): unknown;
                fromPartial(_: Partial<_232.MsgUpdateNamespaceResponse>): _232.MsgUpdateNamespaceResponse;
            };
            MsgRegisterName: {
                encode(message: _232.MsgRegisterName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgRegisterName;
                fromJSON(object: any): _232.MsgRegisterName;
                toJSON(message: _232.MsgRegisterName): unknown;
                fromPartial(object: Partial<_232.MsgRegisterName>): _232.MsgRegisterName;
            };
            MsgRegisterNameResponse: {
                encode(message: _232.MsgRegisterNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgRegisterNameResponse;
                fromJSON(object: any): _232.MsgRegisterNameResponse;
                toJSON(message: _232.MsgRegisterNameResponse): unknown;
                fromPartial(object: Partial<_232.MsgRegisterNameResponse>): _232.MsgRegisterNameResponse;
            };
            MsgRegisterNameByRegistrar: {
                encode(message: _232.MsgRegisterNameByRegistrar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgRegisterNameByRegistrar;
                fromJSON(object: any): _232.MsgRegisterNameByRegistrar;
                toJSON(message: _232.MsgRegisterNameByRegistrar): unknown;
                fromPartial(object: Partial<_232.MsgRegisterNameByRegistrar>): _232.MsgRegisterNameByRegistrar;
            };
            MsgRegisterNameByRegistrarResponse: {
                encode(message: _232.MsgRegisterNameByRegistrarResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgRegisterNameByRegistrarResponse;
                fromJSON(object: any): _232.MsgRegisterNameByRegistrarResponse;
                toJSON(message: _232.MsgRegisterNameByRegistrarResponse): unknown;
                fromPartial(object: Partial<_232.MsgRegisterNameByRegistrarResponse>): _232.MsgRegisterNameByRegistrarResponse;
            };
            MsgUpdateNameByRegistrar: {
                encode(message: _232.MsgUpdateNameByRegistrar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgUpdateNameByRegistrar;
                fromJSON(object: any): _232.MsgUpdateNameByRegistrar;
                toJSON(message: _232.MsgUpdateNameByRegistrar): unknown;
                fromPartial(object: Partial<_232.MsgUpdateNameByRegistrar>): _232.MsgUpdateNameByRegistrar;
            };
            MsgUpdateNameByRegistrarResponse: {
                encode(_: _232.MsgUpdateNameByRegistrarResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgUpdateNameByRegistrarResponse;
                fromJSON(_: any): _232.MsgUpdateNameByRegistrarResponse;
                toJSON(_: _232.MsgUpdateNameByRegistrarResponse): unknown;
                fromPartial(_: Partial<_232.MsgUpdateNameByRegistrarResponse>): _232.MsgUpdateNameByRegistrarResponse;
            };
            MsgTransferName: {
                encode(message: _232.MsgTransferName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgTransferName;
                fromJSON(object: any): _232.MsgTransferName;
                toJSON(message: _232.MsgTransferName): unknown;
                fromPartial(object: Partial<_232.MsgTransferName>): _232.MsgTransferName;
            };
            MsgTransferNameResponse: {
                encode(_: _232.MsgTransferNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgTransferNameResponse;
                fromJSON(_: any): _232.MsgTransferNameResponse;
                toJSON(_: _232.MsgTransferNameResponse): unknown;
                fromPartial(_: Partial<_232.MsgTransferNameResponse>): _232.MsgTransferNameResponse;
            };
            MsgSetNameStatus: {
                encode(message: _232.MsgSetNameStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgSetNameStatus;
                fromJSON(object: any): _232.MsgSetNameStatus;
                toJSON(message: _232.MsgSetNameStatus): unknown;
                fromPartial(object: Partial<_232.MsgSetNameStatus>): _232.MsgSetNameStatus;
            };
            MsgSetNameStatusResponse: {
                encode(_: _232.MsgSetNameStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgSetNameStatusResponse;
                fromJSON(_: any): _232.MsgSetNameStatusResponse;
                toJSON(_: _232.MsgSetNameStatusResponse): unknown;
                fromPartial(_: Partial<_232.MsgSetNameStatusResponse>): _232.MsgSetNameStatusResponse;
            };
            QueryNamespaceRequest: {
                encode(message: _231.QueryNamespaceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamespaceRequest;
                fromJSON(object: any): _231.QueryNamespaceRequest;
                toJSON(message: _231.QueryNamespaceRequest): unknown;
                fromPartial(object: Partial<_231.QueryNamespaceRequest>): _231.QueryNamespaceRequest;
            };
            QueryNamespaceResponse: {
                encode(message: _231.QueryNamespaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamespaceResponse;
                fromJSON(object: any): _231.QueryNamespaceResponse;
                toJSON(message: _231.QueryNamespaceResponse): unknown;
                fromPartial(object: Partial<_231.QueryNamespaceResponse>): _231.QueryNamespaceResponse;
            };
            QueryNamespacesRequest: {
                encode(message: _231.QueryNamespacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamespacesRequest;
                fromJSON(object: any): _231.QueryNamespacesRequest;
                toJSON(message: _231.QueryNamespacesRequest): unknown;
                fromPartial(object: Partial<_231.QueryNamespacesRequest>): _231.QueryNamespacesRequest;
            };
            QueryNamespacesResponse: {
                encode(message: _231.QueryNamespacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamespacesResponse;
                fromJSON(object: any): _231.QueryNamespacesResponse;
                toJSON(message: _231.QueryNamespacesResponse): unknown;
                fromPartial(object: Partial<_231.QueryNamespacesResponse>): _231.QueryNamespacesResponse;
            };
            QueryResolveNameRequest: {
                encode(message: _231.QueryResolveNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryResolveNameRequest;
                fromJSON(object: any): _231.QueryResolveNameRequest;
                toJSON(message: _231.QueryResolveNameRequest): unknown;
                fromPartial(object: Partial<_231.QueryResolveNameRequest>): _231.QueryResolveNameRequest;
            };
            QueryResolveNameResponse: {
                encode(message: _231.QueryResolveNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryResolveNameResponse;
                fromJSON(object: any): _231.QueryResolveNameResponse;
                toJSON(message: _231.QueryResolveNameResponse): unknown;
                fromPartial(object: Partial<_231.QueryResolveNameResponse>): _231.QueryResolveNameResponse;
            };
            QueryGetNameRequest: {
                encode(message: _231.QueryGetNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryGetNameRequest;
                fromJSON(object: any): _231.QueryGetNameRequest;
                toJSON(message: _231.QueryGetNameRequest): unknown;
                fromPartial(object: Partial<_231.QueryGetNameRequest>): _231.QueryGetNameRequest;
            };
            QueryGetNameResponse: {
                encode(message: _231.QueryGetNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryGetNameResponse;
                fromJSON(object: any): _231.QueryGetNameResponse;
                toJSON(message: _231.QueryGetNameResponse): unknown;
                fromPartial(object: Partial<_231.QueryGetNameResponse>): _231.QueryGetNameResponse;
            };
            QueryNamesByNamespaceRequest: {
                encode(message: _231.QueryNamesByNamespaceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamesByNamespaceRequest;
                fromJSON(object: any): _231.QueryNamesByNamespaceRequest;
                toJSON(message: _231.QueryNamesByNamespaceRequest): unknown;
                fromPartial(object: Partial<_231.QueryNamesByNamespaceRequest>): _231.QueryNamesByNamespaceRequest;
            };
            QueryNamesByNamespaceResponse: {
                encode(message: _231.QueryNamesByNamespaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamesByNamespaceResponse;
                fromJSON(object: any): _231.QueryNamesByNamespaceResponse;
                toJSON(message: _231.QueryNamesByNamespaceResponse): unknown;
                fromPartial(object: Partial<_231.QueryNamesByNamespaceResponse>): _231.QueryNamesByNamespaceResponse;
            };
            QueryNamesByOwnerRequest: {
                encode(message: _231.QueryNamesByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamesByOwnerRequest;
                fromJSON(object: any): _231.QueryNamesByOwnerRequest;
                toJSON(message: _231.QueryNamesByOwnerRequest): unknown;
                fromPartial(object: Partial<_231.QueryNamesByOwnerRequest>): _231.QueryNamesByOwnerRequest;
            };
            QueryNamesByOwnerResponse: {
                encode(message: _231.QueryNamesByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryNamesByOwnerResponse;
                fromJSON(object: any): _231.QueryNamesByOwnerResponse;
                toJSON(message: _231.QueryNamesByOwnerResponse): unknown;
                fromPartial(object: Partial<_231.QueryNamesByOwnerResponse>): _231.QueryNamesByOwnerResponse;
            };
            nameStatusFromJSON(object: any): _230.NameStatus;
            nameStatusToJSON(object: _230.NameStatus): string;
            NameStatus: typeof _230.NameStatus;
            NameStatusSDKType: typeof _230.NameStatus;
            Namespace: {
                encode(message: _230.Namespace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Namespace;
                fromJSON(object: any): _230.Namespace;
                toJSON(message: _230.Namespace): unknown;
                fromPartial(object: Partial<_230.Namespace>): _230.Namespace;
            };
            NameRecord: {
                encode(message: _230.NameRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.NameRecord;
                fromJSON(object: any): _230.NameRecord;
                toJSON(message: _230.NameRecord): unknown;
                fromPartial(object: Partial<_230.NameRecord>): _230.NameRecord;
            };
            GenesisState: {
                encode(message: _229.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.GenesisState;
                fromJSON(object: any): _229.GenesisState;
                toJSON(message: _229.GenesisState): unknown;
                fromPartial(object: Partial<_229.GenesisState>): _229.GenesisState;
            };
            NamespaceCreatedEvent: {
                encode(message: _228.NamespaceCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.NamespaceCreatedEvent;
                fromJSON(object: any): _228.NamespaceCreatedEvent;
                toJSON(message: _228.NamespaceCreatedEvent): unknown;
                fromPartial(object: Partial<_228.NamespaceCreatedEvent>): _228.NamespaceCreatedEvent;
            };
            NamespaceUpdatedEvent: {
                encode(message: _228.NamespaceUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.NamespaceUpdatedEvent;
                fromJSON(object: any): _228.NamespaceUpdatedEvent;
                toJSON(message: _228.NamespaceUpdatedEvent): unknown;
                fromPartial(object: Partial<_228.NamespaceUpdatedEvent>): _228.NamespaceUpdatedEvent;
            };
            NameRegisteredEvent: {
                encode(message: _228.NameRegisteredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.NameRegisteredEvent;
                fromJSON(object: any): _228.NameRegisteredEvent;
                toJSON(message: _228.NameRegisteredEvent): unknown;
                fromPartial(object: Partial<_228.NameRegisteredEvent>): _228.NameRegisteredEvent;
            };
            NameUpdatedEvent: {
                encode(message: _228.NameUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.NameUpdatedEvent;
                fromJSON(object: any): _228.NameUpdatedEvent;
                toJSON(message: _228.NameUpdatedEvent): unknown;
                fromPartial(object: Partial<_228.NameUpdatedEvent>): _228.NameUpdatedEvent;
            };
            NameTransferredEvent: {
                encode(message: _228.NameTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.NameTransferredEvent;
                fromJSON(object: any): _228.NameTransferredEvent;
                toJSON(message: _228.NameTransferredEvent): unknown;
                fromPartial(object: Partial<_228.NameTransferredEvent>): _228.NameTransferredEvent;
            };
            NameStatusChangedEvent: {
                encode(message: _228.NameStatusChangedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.NameStatusChangedEvent;
                fromJSON(object: any): _228.NameStatusChangedEvent;
                toJSON(message: _228.NameStatusChangedEvent): unknown;
                fromPartial(object: Partial<_228.NameStatusChangedEvent>): _228.NameStatusChangedEvent;
            };
        };
    }
    namespace smartaccount {
        const crypto: {
            AuthnPubKey: {
                encode(message: _233.AuthnPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.AuthnPubKey;
                fromJSON(object: any): _233.AuthnPubKey;
                toJSON(message: _233.AuthnPubKey): unknown;
                fromPartial(object: Partial<_233.AuthnPubKey>): _233.AuthnPubKey;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _333.MsgClientImpl;
            QueryClientImpl: typeof _325.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _238.QueryParamsRequest): Promise<_238.QueryParamsResponse>;
                getAuthenticator(request: _238.GetAuthenticatorRequest): Promise<_238.GetAuthenticatorResponse>;
                getAuthenticators(request: _238.GetAuthenticatorsRequest): Promise<_238.GetAuthenticatorsResponse>;
            };
            MsgAddAuthenticator: {
                encode(message: _239.MsgAddAuthenticator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgAddAuthenticator;
                fromJSON(object: any): _239.MsgAddAuthenticator;
                toJSON(message: _239.MsgAddAuthenticator): unknown;
                fromPartial(object: Partial<_239.MsgAddAuthenticator>): _239.MsgAddAuthenticator;
            };
            MsgAddAuthenticatorResponse: {
                encode(message: _239.MsgAddAuthenticatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgAddAuthenticatorResponse;
                fromJSON(object: any): _239.MsgAddAuthenticatorResponse;
                toJSON(message: _239.MsgAddAuthenticatorResponse): unknown;
                fromPartial(object: Partial<_239.MsgAddAuthenticatorResponse>): _239.MsgAddAuthenticatorResponse;
            };
            MsgRemoveAuthenticator: {
                encode(message: _239.MsgRemoveAuthenticator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgRemoveAuthenticator;
                fromJSON(object: any): _239.MsgRemoveAuthenticator;
                toJSON(message: _239.MsgRemoveAuthenticator): unknown;
                fromPartial(object: Partial<_239.MsgRemoveAuthenticator>): _239.MsgRemoveAuthenticator;
            };
            MsgRemoveAuthenticatorResponse: {
                encode(message: _239.MsgRemoveAuthenticatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgRemoveAuthenticatorResponse;
                fromJSON(object: any): _239.MsgRemoveAuthenticatorResponse;
                toJSON(message: _239.MsgRemoveAuthenticatorResponse): unknown;
                fromPartial(object: Partial<_239.MsgRemoveAuthenticatorResponse>): _239.MsgRemoveAuthenticatorResponse;
            };
            MsgSetActiveState: {
                encode(message: _239.MsgSetActiveState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgSetActiveState;
                fromJSON(object: any): _239.MsgSetActiveState;
                toJSON(message: _239.MsgSetActiveState): unknown;
                fromPartial(object: Partial<_239.MsgSetActiveState>): _239.MsgSetActiveState;
            };
            MsgSetActiveStateResponse: {
                encode(_: _239.MsgSetActiveStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgSetActiveStateResponse;
                fromJSON(_: any): _239.MsgSetActiveStateResponse;
                toJSON(_: _239.MsgSetActiveStateResponse): unknown;
                fromPartial(_: Partial<_239.MsgSetActiveStateResponse>): _239.MsgSetActiveStateResponse;
            };
            TxExtension: {
                encode(message: _239.TxExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.TxExtension;
                fromJSON(object: any): _239.TxExtension;
                toJSON(message: _239.TxExtension): unknown;
                fromPartial(object: Partial<_239.TxExtension>): _239.TxExtension;
            };
            QueryParamsRequest: {
                encode(_: _238.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryParamsRequest;
                fromJSON(_: any): _238.QueryParamsRequest;
                toJSON(_: _238.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_238.QueryParamsRequest>): _238.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _238.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryParamsResponse;
                fromJSON(object: any): _238.QueryParamsResponse;
                toJSON(message: _238.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_238.QueryParamsResponse>): _238.QueryParamsResponse;
            };
            GetAuthenticatorsRequest: {
                encode(message: _238.GetAuthenticatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.GetAuthenticatorsRequest;
                fromJSON(object: any): _238.GetAuthenticatorsRequest;
                toJSON(message: _238.GetAuthenticatorsRequest): unknown;
                fromPartial(object: Partial<_238.GetAuthenticatorsRequest>): _238.GetAuthenticatorsRequest;
            };
            GetAuthenticatorsResponse: {
                encode(message: _238.GetAuthenticatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.GetAuthenticatorsResponse;
                fromJSON(object: any): _238.GetAuthenticatorsResponse;
                toJSON(message: _238.GetAuthenticatorsResponse): unknown;
                fromPartial(object: Partial<_238.GetAuthenticatorsResponse>): _238.GetAuthenticatorsResponse;
            };
            GetAuthenticatorRequest: {
                encode(message: _238.GetAuthenticatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.GetAuthenticatorRequest;
                fromJSON(object: any): _238.GetAuthenticatorRequest;
                toJSON(message: _238.GetAuthenticatorRequest): unknown;
                fromPartial(object: Partial<_238.GetAuthenticatorRequest>): _238.GetAuthenticatorRequest;
            };
            GetAuthenticatorResponse: {
                encode(message: _238.GetAuthenticatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.GetAuthenticatorResponse;
                fromJSON(object: any): _238.GetAuthenticatorResponse;
                toJSON(message: _238.GetAuthenticatorResponse): unknown;
                fromPartial(object: Partial<_238.GetAuthenticatorResponse>): _238.GetAuthenticatorResponse;
            };
            Params: {
                encode(message: _237.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.Params;
                fromJSON(object: any): _237.Params;
                toJSON(message: _237.Params): unknown;
                fromPartial(object: Partial<_237.Params>): _237.Params;
            };
            AccountAuthenticator: {
                encode(message: _236.AccountAuthenticator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.AccountAuthenticator;
                fromJSON(object: any): _236.AccountAuthenticator;
                toJSON(message: _236.AccountAuthenticator): unknown;
                fromPartial(object: Partial<_236.AccountAuthenticator>): _236.AccountAuthenticator;
            };
            AuthenticatorData: {
                encode(message: _235.AuthenticatorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.AuthenticatorData;
                fromJSON(object: any): _235.AuthenticatorData;
                toJSON(message: _235.AuthenticatorData): unknown;
                fromPartial(object: Partial<_235.AuthenticatorData>): _235.AuthenticatorData;
            };
            GenesisState: {
                encode(message: _235.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.GenesisState;
                fromJSON(object: any): _235.GenesisState;
                toJSON(message: _235.GenesisState): unknown;
                fromPartial(object: Partial<_235.GenesisState>): _235.GenesisState;
            };
            AuthenticatorAddedEvent: {
                encode(message: _234.AuthenticatorAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.AuthenticatorAddedEvent;
                fromJSON(object: any): _234.AuthenticatorAddedEvent;
                toJSON(message: _234.AuthenticatorAddedEvent): unknown;
                fromPartial(object: Partial<_234.AuthenticatorAddedEvent>): _234.AuthenticatorAddedEvent;
            };
            AuthenticatorRemovedEvent: {
                encode(message: _234.AuthenticatorRemovedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.AuthenticatorRemovedEvent;
                fromJSON(object: any): _234.AuthenticatorRemovedEvent;
                toJSON(message: _234.AuthenticatorRemovedEvent): unknown;
                fromPartial(object: Partial<_234.AuthenticatorRemovedEvent>): _234.AuthenticatorRemovedEvent;
            };
            AuthenticatorSetActiveStateEvent: {
                encode(message: _234.AuthenticatorSetActiveStateEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.AuthenticatorSetActiveStateEvent;
                fromJSON(object: any): _234.AuthenticatorSetActiveStateEvent;
                toJSON(message: _234.AuthenticatorSetActiveStateEvent): unknown;
                fromPartial(object: Partial<_234.AuthenticatorSetActiveStateEvent>): _234.AuthenticatorSetActiveStateEvent;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _334.MsgClientImpl;
            QueryClientImpl: typeof _326.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _244.QueryParamsRequest): Promise<_244.QueryParamsResponse>;
                tokenMetadata(request: _244.QueryTokenMetadataRequest): Promise<_244.QueryTokenMetadataResponse>;
                tokenList(request: _244.QueryTokenListRequest): Promise<_244.QueryTokenListResponse>;
                tokenDoc(request: _244.QueryTokenDocRequest): Promise<_244.QueryTokenDocResponse>;
            };
            MsgCreateToken: {
                encode(message: _246.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreateToken;
                fromJSON(object: any): _246.MsgCreateToken;
                toJSON(message: _246.MsgCreateToken): unknown;
                fromPartial(object: Partial<_246.MsgCreateToken>): _246.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _246.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreateTokenResponse;
                fromJSON(_: any): _246.MsgCreateTokenResponse;
                toJSON(_: _246.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_246.MsgCreateTokenResponse>): _246.MsgCreateTokenResponse;
            };
            MsgMintToken: {
                encode(message: _246.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgMintToken;
                fromJSON(object: any): _246.MsgMintToken;
                toJSON(message: _246.MsgMintToken): unknown;
                fromPartial(object: Partial<_246.MsgMintToken>): _246.MsgMintToken;
            };
            MintBatch: {
                encode(message: _246.MintBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MintBatch;
                fromJSON(object: any): _246.MintBatch;
                toJSON(message: _246.MintBatch): unknown;
                fromPartial(object: Partial<_246.MintBatch>): _246.MintBatch;
            };
            MsgMintTokenResponse: {
                encode(_: _246.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgMintTokenResponse;
                fromJSON(_: any): _246.MsgMintTokenResponse;
                toJSON(_: _246.MsgMintTokenResponse): unknown;
                fromPartial(_: Partial<_246.MsgMintTokenResponse>): _246.MsgMintTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _246.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgTransferToken;
                fromJSON(object: any): _246.MsgTransferToken;
                toJSON(message: _246.MsgTransferToken): unknown;
                fromPartial(object: Partial<_246.MsgTransferToken>): _246.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _246.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgTransferTokenResponse;
                fromJSON(_: any): _246.MsgTransferTokenResponse;
                toJSON(_: _246.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_246.MsgTransferTokenResponse>): _246.MsgTransferTokenResponse;
            };
            TokenBatch: {
                encode(message: _246.TokenBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.TokenBatch;
                fromJSON(object: any): _246.TokenBatch;
                toJSON(message: _246.TokenBatch): unknown;
                fromPartial(object: Partial<_246.TokenBatch>): _246.TokenBatch;
            };
            MsgRetireToken: {
                encode(message: _246.MsgRetireToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgRetireToken;
                fromJSON(object: any): _246.MsgRetireToken;
                toJSON(message: _246.MsgRetireToken): unknown;
                fromPartial(object: Partial<_246.MsgRetireToken>): _246.MsgRetireToken;
            };
            MsgRetireTokenResponse: {
                encode(_: _246.MsgRetireTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgRetireTokenResponse;
                fromJSON(_: any): _246.MsgRetireTokenResponse;
                toJSON(_: _246.MsgRetireTokenResponse): unknown;
                fromPartial(_: Partial<_246.MsgRetireTokenResponse>): _246.MsgRetireTokenResponse;
            };
            MsgTransferCredit: {
                encode(message: _246.MsgTransferCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgTransferCredit;
                fromJSON(object: any): _246.MsgTransferCredit;
                toJSON(message: _246.MsgTransferCredit): unknown;
                fromPartial(object: Partial<_246.MsgTransferCredit>): _246.MsgTransferCredit;
            };
            MsgTransferCreditResponse: {
                encode(_: _246.MsgTransferCreditResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgTransferCreditResponse;
                fromJSON(_: any): _246.MsgTransferCreditResponse;
                toJSON(_: _246.MsgTransferCreditResponse): unknown;
                fromPartial(_: Partial<_246.MsgTransferCreditResponse>): _246.MsgTransferCreditResponse;
            };
            MsgCancelToken: {
                encode(message: _246.MsgCancelToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCancelToken;
                fromJSON(object: any): _246.MsgCancelToken;
                toJSON(message: _246.MsgCancelToken): unknown;
                fromPartial(object: Partial<_246.MsgCancelToken>): _246.MsgCancelToken;
            };
            MsgCancelTokenResponse: {
                encode(_: _246.MsgCancelTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCancelTokenResponse;
                fromJSON(_: any): _246.MsgCancelTokenResponse;
                toJSON(_: _246.MsgCancelTokenResponse): unknown;
                fromPartial(_: Partial<_246.MsgCancelTokenResponse>): _246.MsgCancelTokenResponse;
            };
            MsgPauseToken: {
                encode(message: _246.MsgPauseToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgPauseToken;
                fromJSON(object: any): _246.MsgPauseToken;
                toJSON(message: _246.MsgPauseToken): unknown;
                fromPartial(object: Partial<_246.MsgPauseToken>): _246.MsgPauseToken;
            };
            MsgPauseTokenResponse: {
                encode(_: _246.MsgPauseTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgPauseTokenResponse;
                fromJSON(_: any): _246.MsgPauseTokenResponse;
                toJSON(_: _246.MsgPauseTokenResponse): unknown;
                fromPartial(_: Partial<_246.MsgPauseTokenResponse>): _246.MsgPauseTokenResponse;
            };
            MsgStopToken: {
                encode(message: _246.MsgStopToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgStopToken;
                fromJSON(object: any): _246.MsgStopToken;
                toJSON(message: _246.MsgStopToken): unknown;
                fromPartial(object: Partial<_246.MsgStopToken>): _246.MsgStopToken;
            };
            MsgStopTokenResponse: {
                encode(_: _246.MsgStopTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgStopTokenResponse;
                fromJSON(_: any): _246.MsgStopTokenResponse;
                toJSON(_: _246.MsgStopTokenResponse): unknown;
                fromPartial(_: Partial<_246.MsgStopTokenResponse>): _246.MsgStopTokenResponse;
            };
            Params: {
                encode(message: _245.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.Params;
                fromJSON(object: any): _245.Params;
                toJSON(message: _245.Params): unknown;
                fromPartial(object: Partial<_245.Params>): _245.Params;
            };
            Token: {
                encode(message: _245.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.Token;
                fromJSON(object: any): _245.Token;
                toJSON(message: _245.Token): unknown;
                fromPartial(object: Partial<_245.Token>): _245.Token;
            };
            TokensRetired: {
                encode(message: _245.TokensRetired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.TokensRetired;
                fromJSON(object: any): _245.TokensRetired;
                toJSON(message: _245.TokensRetired): unknown;
                fromPartial(object: Partial<_245.TokensRetired>): _245.TokensRetired;
            };
            CreditsTransferred: {
                encode(message: _245.CreditsTransferred, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.CreditsTransferred;
                fromJSON(object: any): _245.CreditsTransferred;
                toJSON(message: _245.CreditsTransferred): unknown;
                fromPartial(object: Partial<_245.CreditsTransferred>): _245.CreditsTransferred;
            };
            TokensCancelled: {
                encode(message: _245.TokensCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.TokensCancelled;
                fromJSON(object: any): _245.TokensCancelled;
                toJSON(message: _245.TokensCancelled): unknown;
                fromPartial(object: Partial<_245.TokensCancelled>): _245.TokensCancelled;
            };
            TokenProperties: {
                encode(message: _245.TokenProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.TokenProperties;
                fromJSON(object: any): _245.TokenProperties;
                toJSON(message: _245.TokenProperties): unknown;
                fromPartial(object: Partial<_245.TokenProperties>): _245.TokenProperties;
            };
            TokenData: {
                encode(message: _245.TokenData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.TokenData;
                fromJSON(object: any): _245.TokenData;
                toJSON(message: _245.TokenData): unknown;
                fromPartial(object: Partial<_245.TokenData>): _245.TokenData;
            };
            QueryParamsRequest: {
                encode(_: _244.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryParamsRequest;
                fromJSON(_: any): _244.QueryParamsRequest;
                toJSON(_: _244.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_244.QueryParamsRequest>): _244.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _244.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryParamsResponse;
                fromJSON(object: any): _244.QueryParamsResponse;
                toJSON(message: _244.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_244.QueryParamsResponse>): _244.QueryParamsResponse;
            };
            QueryTokenListRequest: {
                encode(message: _244.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTokenListRequest;
                fromJSON(object: any): _244.QueryTokenListRequest;
                toJSON(message: _244.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_244.QueryTokenListRequest>): _244.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _244.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTokenListResponse;
                fromJSON(object: any): _244.QueryTokenListResponse;
                toJSON(message: _244.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_244.QueryTokenListResponse>): _244.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _244.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTokenDocRequest;
                fromJSON(object: any): _244.QueryTokenDocRequest;
                toJSON(message: _244.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_244.QueryTokenDocRequest>): _244.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(message: _244.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTokenDocResponse;
                fromJSON(object: any): _244.QueryTokenDocResponse;
                toJSON(message: _244.QueryTokenDocResponse): unknown;
                fromPartial(object: Partial<_244.QueryTokenDocResponse>): _244.QueryTokenDocResponse;
            };
            QueryTokenMetadataRequest: {
                encode(message: _244.QueryTokenMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTokenMetadataRequest;
                fromJSON(object: any): _244.QueryTokenMetadataRequest;
                toJSON(message: _244.QueryTokenMetadataRequest): unknown;
                fromPartial(object: Partial<_244.QueryTokenMetadataRequest>): _244.QueryTokenMetadataRequest;
            };
            QueryTokenMetadataResponse: {
                encode(message: _244.QueryTokenMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTokenMetadataResponse;
                fromJSON(object: any): _244.QueryTokenMetadataResponse;
                toJSON(message: _244.QueryTokenMetadataResponse): unknown;
                fromPartial(object: Partial<_244.QueryTokenMetadataResponse>): _244.QueryTokenMetadataResponse;
            };
            TokenMetadataProperties: {
                encode(message: _244.TokenMetadataProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.TokenMetadataProperties;
                fromJSON(object: any): _244.TokenMetadataProperties;
                toJSON(message: _244.TokenMetadataProperties): unknown;
                fromPartial(object: Partial<_244.TokenMetadataProperties>): _244.TokenMetadataProperties;
            };
            SetTokenContractCodes: {
                encode(message: _243.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.SetTokenContractCodes;
                fromJSON(object: any): _243.SetTokenContractCodes;
                toJSON(message: _243.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_243.SetTokenContractCodes>): _243.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _242.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.GenesisState;
                fromJSON(object: any): _242.GenesisState;
                toJSON(message: _242.GenesisState): unknown;
                fromPartial(object: Partial<_242.GenesisState>): _242.GenesisState;
            };
            TokenCreatedEvent: {
                encode(message: _241.TokenCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenCreatedEvent;
                fromJSON(object: any): _241.TokenCreatedEvent;
                toJSON(message: _241.TokenCreatedEvent): unknown;
                fromPartial(object: Partial<_241.TokenCreatedEvent>): _241.TokenCreatedEvent;
            };
            TokenUpdatedEvent: {
                encode(message: _241.TokenUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenUpdatedEvent;
                fromJSON(object: any): _241.TokenUpdatedEvent;
                toJSON(message: _241.TokenUpdatedEvent): unknown;
                fromPartial(object: Partial<_241.TokenUpdatedEvent>): _241.TokenUpdatedEvent;
            };
            TokenMintedEvent: {
                encode(message: _241.TokenMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenMintedEvent;
                fromJSON(object: any): _241.TokenMintedEvent;
                toJSON(message: _241.TokenMintedEvent): unknown;
                fromPartial(object: Partial<_241.TokenMintedEvent>): _241.TokenMintedEvent;
            };
            TokenTransferredEvent: {
                encode(message: _241.TokenTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenTransferredEvent;
                fromJSON(object: any): _241.TokenTransferredEvent;
                toJSON(message: _241.TokenTransferredEvent): unknown;
                fromPartial(object: Partial<_241.TokenTransferredEvent>): _241.TokenTransferredEvent;
            };
            TokenCancelledEvent: {
                encode(message: _241.TokenCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenCancelledEvent;
                fromJSON(object: any): _241.TokenCancelledEvent;
                toJSON(message: _241.TokenCancelledEvent): unknown;
                fromPartial(object: Partial<_241.TokenCancelledEvent>): _241.TokenCancelledEvent;
            };
            TokenRetiredEvent: {
                encode(message: _241.TokenRetiredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenRetiredEvent;
                fromJSON(object: any): _241.TokenRetiredEvent;
                toJSON(message: _241.TokenRetiredEvent): unknown;
                fromPartial(object: Partial<_241.TokenRetiredEvent>): _241.TokenRetiredEvent;
            };
            CreditsTransferredEvent: {
                encode(message: _241.CreditsTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.CreditsTransferredEvent;
                fromJSON(object: any): _241.CreditsTransferredEvent;
                toJSON(message: _241.CreditsTransferredEvent): unknown;
                fromPartial(object: Partial<_241.CreditsTransferredEvent>): _241.CreditsTransferredEvent;
            };
            TokenPausedEvent: {
                encode(message: _241.TokenPausedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenPausedEvent;
                fromJSON(object: any): _241.TokenPausedEvent;
                toJSON(message: _241.TokenPausedEvent): unknown;
                fromPartial(object: Partial<_241.TokenPausedEvent>): _241.TokenPausedEvent;
            };
            TokenStoppedEvent: {
                encode(message: _241.TokenStoppedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.TokenStoppedEvent;
                fromJSON(object: any): _241.TokenStoppedEvent;
                toJSON(message: _241.TokenStoppedEvent): unknown;
                fromPartial(object: Partial<_241.TokenStoppedEvent>): _241.TokenStoppedEvent;
            };
            MintAuthorization: {
                encode(message: _240.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.MintAuthorization;
                fromJSON(object: any): _240.MintAuthorization;
                toJSON(message: _240.MintAuthorization): unknown;
                fromPartial(object: Partial<_240.MintAuthorization>): _240.MintAuthorization;
            };
            MintConstraints: {
                encode(message: _240.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.MintConstraints;
                fromJSON(object: any): _240.MintConstraints;
                toJSON(message: _240.MintConstraints): unknown;
                fromPartial(object: Partial<_240.MintConstraints>): _240.MintConstraints;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                    v1beta1: _327.MsgClientImpl;
                };
                claims: {
                    v1beta1: _328.MsgClientImpl;
                };
                entity: {
                    v1beta1: _329.MsgClientImpl;
                };
                iid: {
                    v1beta1: _330.MsgClientImpl;
                };
                liquidstake: {
                    v1beta1: _331.MsgClientImpl;
                };
                names: {
                    v1beta1: _332.MsgClientImpl;
                };
                smartaccount: {
                    v1beta1: _333.MsgClientImpl;
                };
                token: {
                    v1beta1: _334.MsgClientImpl;
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
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query").StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query").DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
                        constitution(request?: import("../cosmos/gov/v1/query").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query").QueryConstitutionResponse>;
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
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
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
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
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
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
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
                        bonds(request?: _195.QueryBondsRequest): Promise<_195.QueryBondsResponse>;
                        bondsDetailed(request?: _195.QueryBondsDetailedRequest): Promise<_195.QueryBondsDetailedResponse>;
                        params(request?: _195.QueryParamsRequest): Promise<_195.QueryParamsResponse>;
                        bond(request: _195.QueryBondRequest): Promise<_195.QueryBondResponse>;
                        batch(request: _195.QueryBatchRequest): Promise<_195.QueryBatchResponse>;
                        lastBatch(request: _195.QueryLastBatchRequest): Promise<_195.QueryLastBatchResponse>;
                        currentPrice(request: _195.QueryCurrentPriceRequest): Promise<_195.QueryCurrentPriceResponse>;
                        currentReserve(request: _195.QueryCurrentReserveRequest): Promise<_195.QueryCurrentReserveResponse>;
                        availableReserve(request: _195.QueryAvailableReserveRequest): Promise<_195.QueryAvailableReserveResponse>;
                        customPrice(request: _195.QueryCustomPriceRequest): Promise<_195.QueryCustomPriceResponse>;
                        buyPrice(request: _195.QueryBuyPriceRequest): Promise<_195.QueryBuyPriceResponse>;
                        sellReturn(request: _195.QuerySellReturnRequest): Promise<_195.QuerySellReturnResponse>;
                        swapReturn(request: _195.QuerySwapReturnRequest): Promise<_195.QuerySwapReturnResponse>;
                        alphaMaximums(request: _195.QueryAlphaMaximumsRequest): Promise<_195.QueryAlphaMaximumsResponse>;
                    };
                };
                claims: {
                    v1beta1: {
                        params(request?: _201.QueryParamsRequest): Promise<_201.QueryParamsResponse>;
                        collection(request: _201.QueryCollectionRequest): Promise<_201.QueryCollectionResponse>;
                        collectionList(request?: _201.QueryCollectionListRequest): Promise<_201.QueryCollectionListResponse>;
                        claim(request: _201.QueryClaimRequest): Promise<_201.QueryClaimResponse>;
                        claimList(request?: _201.QueryClaimListRequest): Promise<_201.QueryClaimListResponse>;
                        dispute(request: _201.QueryDisputeRequest): Promise<_201.QueryDisputeResponse>;
                        disputeList(request?: _201.QueryDisputeListRequest): Promise<_201.QueryDisputeListResponse>;
                        intent(request: _201.QueryIntentRequest): Promise<_201.QueryIntentResponse>;
                        intentList(request?: _201.QueryIntentListRequest): Promise<_201.QueryIntentListResponse>;
                        collectionMember(request: _201.QueryCollectionMemberRequest): Promise<_201.QueryCollectionMemberResponse>;
                        collectionMemberList(request: _201.QueryCollectionMemberListRequest): Promise<_201.QueryCollectionMemberListResponse>;
                        disputeBySubject(request: _201.QueryDisputeBySubjectRequest): Promise<_201.QueryDisputeBySubjectResponse>;
                        disputeListForSubject(request: _201.QueryDisputeListForSubjectRequest): Promise<_201.QueryDisputeListForSubjectResponse>;
                        agentDepositBalance(request: _201.QueryAgentDepositBalanceRequest): Promise<_201.QueryAgentDepositBalanceResponse>;
                        agentDepositBalanceList(request: _201.QueryAgentDepositBalanceListRequest): Promise<_201.QueryAgentDepositBalanceListResponse>;
                    };
                };
                entity: {
                    v1beta1: {
                        params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
                        entity(request: _207.QueryEntityRequest): Promise<_207.QueryEntityResponse>;
                        entityMetaData(request: _207.QueryEntityMetadataRequest): Promise<_207.QueryEntityMetadataResponse>;
                        entityIidDocument(request: _207.QueryEntityIidDocumentRequest): Promise<_207.QueryEntityIidDocumentResponse>;
                        entityVerified(request: _207.QueryEntityVerifiedRequest): Promise<_207.QueryEntityVerifiedResponse>;
                        entityList(request?: _207.QueryEntityListRequest): Promise<_207.QueryEntityListResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _212.QueryEpochsInfoRequest): Promise<_212.QueryEpochsInfoResponse>;
                        currentEpoch(request: _212.QueryCurrentEpochRequest): Promise<_212.QueryCurrentEpochResponse>;
                    };
                };
                iid: {
                    v1beta1: {
                        iidDocuments(request?: _216.QueryIidDocumentsRequest): Promise<_216.QueryIidDocumentsResponse>;
                        iidDocument(request: _216.QueryIidDocumentRequest): Promise<_216.QueryIidDocumentResponse>;
                    };
                };
                liquidstake: {
                    v1beta1: {
                        moduleParams(request?: _222.QueryModuleParamsRequest): Promise<_222.QueryModuleParamsResponse>;
                        pool(request: _222.QueryPoolRequest): Promise<_222.QueryPoolResponse>;
                        pools(request?: _222.QueryPoolsRequest): Promise<_222.QueryPoolsResponse>;
                        liquidValidators(request: _222.QueryLiquidValidatorsRequest): Promise<_222.QueryLiquidValidatorsResponse>;
                        states(request: _222.QueryStatesRequest): Promise<_222.QueryStatesResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _227.QueryParamsRequest): Promise<_227.QueryParamsResponse>;
                        epochProvisions(request?: _227.QueryEpochProvisionsRequest): Promise<_227.QueryEpochProvisionsResponse>;
                    };
                };
                names: {
                    v1beta1: {
                        namespace(request: _231.QueryNamespaceRequest): Promise<_231.QueryNamespaceResponse>;
                        namespaces(request?: _231.QueryNamespacesRequest): Promise<_231.QueryNamespacesResponse>;
                        resolveName(request: _231.QueryResolveNameRequest): Promise<_231.QueryResolveNameResponse>;
                        getName(request: _231.QueryGetNameRequest): Promise<_231.QueryGetNameResponse>;
                        namesByNamespace(request: _231.QueryNamesByNamespaceRequest): Promise<_231.QueryNamesByNamespaceResponse>;
                        namesByOwner(request: _231.QueryNamesByOwnerRequest): Promise<_231.QueryNamesByOwnerResponse>;
                    };
                };
                smartaccount: {
                    v1beta1: {
                        params(request?: _238.QueryParamsRequest): Promise<_238.QueryParamsResponse>;
                        getAuthenticator(request: _238.GetAuthenticatorRequest): Promise<_238.GetAuthenticatorResponse>;
                        getAuthenticators(request: _238.GetAuthenticatorsRequest): Promise<_238.GetAuthenticatorsResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        params(request?: _244.QueryParamsRequest): Promise<_244.QueryParamsResponse>;
                        tokenMetadata(request: _244.QueryTokenMetadataRequest): Promise<_244.QueryTokenMetadataResponse>;
                        tokenList(request: _244.QueryTokenListRequest): Promise<_244.QueryTokenListResponse>;
                        tokenDoc(request: _244.QueryTokenDocRequest): Promise<_244.QueryTokenDocResponse>;
                    };
                };
            };
        }>;
    };
}
