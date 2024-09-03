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
import * as _209 from "./iid/v1beta1/event";
import * as _210 from "./iid/v1beta1/genesis";
import * as _211 from "./iid/v1beta1/iid";
import * as _212 from "./iid/v1beta1/query";
import * as _213 from "./iid/v1beta1/tx";
import * as _214 from "./iid/v1beta1/types";
import * as _215 from "./token/v1beta1/authz";
import * as _216 from "./token/v1beta1/event";
import * as _217 from "./token/v1beta1/genesis";
import * as _218 from "./token/v1beta1/proposal";
import * as _219 from "./token/v1beta1/query";
import * as _220 from "./token/v1beta1/token";
import * as _221 from "./token/v1beta1/tx";
import * as _292 from "./bonds/v1beta1/query.rpc.Query";
import * as _293 from "./claims/v1beta1/query.rpc.Query";
import * as _294 from "./entity/v1beta1/query.rpc.Query";
import * as _295 from "./iid/v1beta1/query.rpc.Query";
import * as _296 from "./token/v1beta1/query.rpc.Query";
import * as _297 from "./bonds/v1beta1/tx.rpc.msg";
import * as _298 from "./claims/v1beta1/tx.rpc.msg";
import * as _299 from "./entity/v1beta1/tx.rpc.msg";
import * as _300 from "./iid/v1beta1/tx.rpc.msg";
import * as _301 from "./token/v1beta1/tx.rpc.msg";
export declare namespace ixo {
    namespace bonds {
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
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
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _293.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _201.QueryParamsRequest): Promise<_201.QueryParamsResponse>;
                collection(request: _201.QueryCollectionRequest): Promise<_201.QueryCollectionResponse>;
                collectionList(request?: _201.QueryCollectionListRequest): Promise<_201.QueryCollectionListResponse>;
                claim(request: _201.QueryClaimRequest): Promise<_201.QueryClaimResponse>;
                claimList(request?: _201.QueryClaimListRequest): Promise<_201.QueryClaimListResponse>;
                dispute(request: _201.QueryDisputeRequest): Promise<_201.QueryDisputeResponse>;
                disputeList(request?: _201.QueryDisputeListRequest): Promise<_201.QueryDisputeListResponse>;
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
            collectionStateFromJSON(object: any): _198.CollectionState;
            collectionStateToJSON(object: _198.CollectionState): string;
            evaluationStatusFromJSON(object: any): _198.EvaluationStatus;
            evaluationStatusToJSON(object: _198.EvaluationStatus): string;
            paymentTypeFromJSON(object: any): _198.PaymentType;
            paymentTypeToJSON(object: _198.PaymentType): string;
            paymentStatusFromJSON(object: any): _198.PaymentStatus;
            paymentStatusToJSON(object: _198.PaymentStatus): string;
            CollectionState: typeof _198.CollectionState;
            CollectionStateSDKType: typeof _198.CollectionState;
            EvaluationStatus: typeof _198.EvaluationStatus;
            EvaluationStatusSDKType: typeof _198.EvaluationStatus;
            PaymentType: typeof _198.PaymentType;
            PaymentTypeSDKType: typeof _198.PaymentType;
            PaymentStatus: typeof _198.PaymentStatus;
            PaymentStatusSDKType: typeof _198.PaymentStatus;
            Params: {
                encode(message: _198.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Params;
                fromJSON(object: any): _198.Params;
                toJSON(message: _198.Params): unknown;
                fromPartial(object: Partial<_198.Params>): _198.Params;
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
        };
    }
    namespace entity {
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
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
    namespace iid {
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _295.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                iidDocuments(request?: _212.QueryIidDocumentsRequest): Promise<_212.QueryIidDocumentsResponse>;
                iidDocument(request: _212.QueryIidDocumentRequest): Promise<_212.QueryIidDocumentResponse>;
            };
            Context: {
                encode(message: _214.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Context;
                fromJSON(object: any): _214.Context;
                toJSON(message: _214.Context): unknown;
                fromPartial(object: Partial<_214.Context>): _214.Context;
            };
            AccordedRight: {
                encode(message: _214.AccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.AccordedRight;
                fromJSON(object: any): _214.AccordedRight;
                toJSON(message: _214.AccordedRight): unknown;
                fromPartial(object: Partial<_214.AccordedRight>): _214.AccordedRight;
            };
            LinkedResource: {
                encode(message: _214.LinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.LinkedResource;
                fromJSON(object: any): _214.LinkedResource;
                toJSON(message: _214.LinkedResource): unknown;
                fromPartial(object: Partial<_214.LinkedResource>): _214.LinkedResource;
            };
            LinkedClaim: {
                encode(message: _214.LinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.LinkedClaim;
                fromJSON(object: any): _214.LinkedClaim;
                toJSON(message: _214.LinkedClaim): unknown;
                fromPartial(object: Partial<_214.LinkedClaim>): _214.LinkedClaim;
            };
            LinkedEntity: {
                encode(message: _214.LinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.LinkedEntity;
                fromJSON(object: any): _214.LinkedEntity;
                toJSON(message: _214.LinkedEntity): unknown;
                fromPartial(object: Partial<_214.LinkedEntity>): _214.LinkedEntity;
            };
            VerificationMethod: {
                encode(message: _214.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.VerificationMethod;
                fromJSON(object: any): _214.VerificationMethod;
                toJSON(message: _214.VerificationMethod): unknown;
                fromPartial(object: Partial<_214.VerificationMethod>): _214.VerificationMethod;
            };
            Service: {
                encode(message: _214.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Service;
                fromJSON(object: any): _214.Service;
                toJSON(message: _214.Service): unknown;
                fromPartial(object: Partial<_214.Service>): _214.Service;
            };
            IidMetadata: {
                encode(message: _214.IidMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.IidMetadata;
                fromJSON(object: any): _214.IidMetadata;
                toJSON(message: _214.IidMetadata): unknown;
                fromPartial(object: Partial<_214.IidMetadata>): _214.IidMetadata;
            };
            Verification: {
                encode(message: _213.Verification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Verification;
                fromJSON(object: any): _213.Verification;
                toJSON(message: _213.Verification): unknown;
                fromPartial(object: Partial<_213.Verification>): _213.Verification;
            };
            MsgCreateIidDocument: {
                encode(message: _213.MsgCreateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgCreateIidDocument;
                fromJSON(object: any): _213.MsgCreateIidDocument;
                toJSON(message: _213.MsgCreateIidDocument): unknown;
                fromPartial(object: Partial<_213.MsgCreateIidDocument>): _213.MsgCreateIidDocument;
            };
            MsgCreateIidDocumentResponse: {
                encode(_: _213.MsgCreateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgCreateIidDocumentResponse;
                fromJSON(_: any): _213.MsgCreateIidDocumentResponse;
                toJSON(_: _213.MsgCreateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_213.MsgCreateIidDocumentResponse>): _213.MsgCreateIidDocumentResponse;
            };
            MsgUpdateIidDocument: {
                encode(message: _213.MsgUpdateIidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgUpdateIidDocument;
                fromJSON(object: any): _213.MsgUpdateIidDocument;
                toJSON(message: _213.MsgUpdateIidDocument): unknown;
                fromPartial(object: Partial<_213.MsgUpdateIidDocument>): _213.MsgUpdateIidDocument;
            };
            MsgUpdateIidDocumentResponse: {
                encode(_: _213.MsgUpdateIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgUpdateIidDocumentResponse;
                fromJSON(_: any): _213.MsgUpdateIidDocumentResponse;
                toJSON(_: _213.MsgUpdateIidDocumentResponse): unknown;
                fromPartial(_: Partial<_213.MsgUpdateIidDocumentResponse>): _213.MsgUpdateIidDocumentResponse;
            };
            MsgAddVerification: {
                encode(message: _213.MsgAddVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddVerification;
                fromJSON(object: any): _213.MsgAddVerification;
                toJSON(message: _213.MsgAddVerification): unknown;
                fromPartial(object: Partial<_213.MsgAddVerification>): _213.MsgAddVerification;
            };
            MsgAddVerificationResponse: {
                encode(_: _213.MsgAddVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddVerificationResponse;
                fromJSON(_: any): _213.MsgAddVerificationResponse;
                toJSON(_: _213.MsgAddVerificationResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddVerificationResponse>): _213.MsgAddVerificationResponse;
            };
            MsgSetVerificationRelationships: {
                encode(message: _213.MsgSetVerificationRelationships, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgSetVerificationRelationships;
                fromJSON(object: any): _213.MsgSetVerificationRelationships;
                toJSON(message: _213.MsgSetVerificationRelationships): unknown;
                fromPartial(object: Partial<_213.MsgSetVerificationRelationships>): _213.MsgSetVerificationRelationships;
            };
            MsgSetVerificationRelationshipsResponse: {
                encode(_: _213.MsgSetVerificationRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgSetVerificationRelationshipsResponse;
                fromJSON(_: any): _213.MsgSetVerificationRelationshipsResponse;
                toJSON(_: _213.MsgSetVerificationRelationshipsResponse): unknown;
                fromPartial(_: Partial<_213.MsgSetVerificationRelationshipsResponse>): _213.MsgSetVerificationRelationshipsResponse;
            };
            MsgRevokeVerification: {
                encode(message: _213.MsgRevokeVerification, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgRevokeVerification;
                fromJSON(object: any): _213.MsgRevokeVerification;
                toJSON(message: _213.MsgRevokeVerification): unknown;
                fromPartial(object: Partial<_213.MsgRevokeVerification>): _213.MsgRevokeVerification;
            };
            MsgRevokeVerificationResponse: {
                encode(_: _213.MsgRevokeVerificationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgRevokeVerificationResponse;
                fromJSON(_: any): _213.MsgRevokeVerificationResponse;
                toJSON(_: _213.MsgRevokeVerificationResponse): unknown;
                fromPartial(_: Partial<_213.MsgRevokeVerificationResponse>): _213.MsgRevokeVerificationResponse;
            };
            MsgAddService: {
                encode(message: _213.MsgAddService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddService;
                fromJSON(object: any): _213.MsgAddService;
                toJSON(message: _213.MsgAddService): unknown;
                fromPartial(object: Partial<_213.MsgAddService>): _213.MsgAddService;
            };
            MsgAddServiceResponse: {
                encode(_: _213.MsgAddServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddServiceResponse;
                fromJSON(_: any): _213.MsgAddServiceResponse;
                toJSON(_: _213.MsgAddServiceResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddServiceResponse>): _213.MsgAddServiceResponse;
            };
            MsgDeleteService: {
                encode(message: _213.MsgDeleteService, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteService;
                fromJSON(object: any): _213.MsgDeleteService;
                toJSON(message: _213.MsgDeleteService): unknown;
                fromPartial(object: Partial<_213.MsgDeleteService>): _213.MsgDeleteService;
            };
            MsgDeleteServiceResponse: {
                encode(_: _213.MsgDeleteServiceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteServiceResponse;
                fromJSON(_: any): _213.MsgDeleteServiceResponse;
                toJSON(_: _213.MsgDeleteServiceResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeleteServiceResponse>): _213.MsgDeleteServiceResponse;
            };
            MsgAddController: {
                encode(message: _213.MsgAddController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddController;
                fromJSON(object: any): _213.MsgAddController;
                toJSON(message: _213.MsgAddController): unknown;
                fromPartial(object: Partial<_213.MsgAddController>): _213.MsgAddController;
            };
            MsgAddControllerResponse: {
                encode(_: _213.MsgAddControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddControllerResponse;
                fromJSON(_: any): _213.MsgAddControllerResponse;
                toJSON(_: _213.MsgAddControllerResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddControllerResponse>): _213.MsgAddControllerResponse;
            };
            MsgDeleteController: {
                encode(message: _213.MsgDeleteController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteController;
                fromJSON(object: any): _213.MsgDeleteController;
                toJSON(message: _213.MsgDeleteController): unknown;
                fromPartial(object: Partial<_213.MsgDeleteController>): _213.MsgDeleteController;
            };
            MsgDeleteControllerResponse: {
                encode(_: _213.MsgDeleteControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteControllerResponse;
                fromJSON(_: any): _213.MsgDeleteControllerResponse;
                toJSON(_: _213.MsgDeleteControllerResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeleteControllerResponse>): _213.MsgDeleteControllerResponse;
            };
            MsgAddLinkedResource: {
                encode(message: _213.MsgAddLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddLinkedResource;
                fromJSON(object: any): _213.MsgAddLinkedResource;
                toJSON(message: _213.MsgAddLinkedResource): unknown;
                fromPartial(object: Partial<_213.MsgAddLinkedResource>): _213.MsgAddLinkedResource;
            };
            MsgDeleteLinkedResource: {
                encode(message: _213.MsgDeleteLinkedResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteLinkedResource;
                fromJSON(object: any): _213.MsgDeleteLinkedResource;
                toJSON(message: _213.MsgDeleteLinkedResource): unknown;
                fromPartial(object: Partial<_213.MsgDeleteLinkedResource>): _213.MsgDeleteLinkedResource;
            };
            MsgAddLinkedClaim: {
                encode(message: _213.MsgAddLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddLinkedClaim;
                fromJSON(object: any): _213.MsgAddLinkedClaim;
                toJSON(message: _213.MsgAddLinkedClaim): unknown;
                fromPartial(object: Partial<_213.MsgAddLinkedClaim>): _213.MsgAddLinkedClaim;
            };
            MsgDeleteLinkedClaim: {
                encode(message: _213.MsgDeleteLinkedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteLinkedClaim;
                fromJSON(object: any): _213.MsgDeleteLinkedClaim;
                toJSON(message: _213.MsgDeleteLinkedClaim): unknown;
                fromPartial(object: Partial<_213.MsgDeleteLinkedClaim>): _213.MsgDeleteLinkedClaim;
            };
            MsgAddLinkedEntity: {
                encode(message: _213.MsgAddLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddLinkedEntity;
                fromJSON(object: any): _213.MsgAddLinkedEntity;
                toJSON(message: _213.MsgAddLinkedEntity): unknown;
                fromPartial(object: Partial<_213.MsgAddLinkedEntity>): _213.MsgAddLinkedEntity;
            };
            MsgDeleteLinkedEntity: {
                encode(message: _213.MsgDeleteLinkedEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteLinkedEntity;
                fromJSON(object: any): _213.MsgDeleteLinkedEntity;
                toJSON(message: _213.MsgDeleteLinkedEntity): unknown;
                fromPartial(object: Partial<_213.MsgDeleteLinkedEntity>): _213.MsgDeleteLinkedEntity;
            };
            MsgAddAccordedRight: {
                encode(message: _213.MsgAddAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddAccordedRight;
                fromJSON(object: any): _213.MsgAddAccordedRight;
                toJSON(message: _213.MsgAddAccordedRight): unknown;
                fromPartial(object: Partial<_213.MsgAddAccordedRight>): _213.MsgAddAccordedRight;
            };
            MsgDeleteAccordedRight: {
                encode(message: _213.MsgDeleteAccordedRight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteAccordedRight;
                fromJSON(object: any): _213.MsgDeleteAccordedRight;
                toJSON(message: _213.MsgDeleteAccordedRight): unknown;
                fromPartial(object: Partial<_213.MsgDeleteAccordedRight>): _213.MsgDeleteAccordedRight;
            };
            MsgAddIidContext: {
                encode(message: _213.MsgAddIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddIidContext;
                fromJSON(object: any): _213.MsgAddIidContext;
                toJSON(message: _213.MsgAddIidContext): unknown;
                fromPartial(object: Partial<_213.MsgAddIidContext>): _213.MsgAddIidContext;
            };
            MsgDeactivateIID: {
                encode(message: _213.MsgDeactivateIID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeactivateIID;
                fromJSON(object: any): _213.MsgDeactivateIID;
                toJSON(message: _213.MsgDeactivateIID): unknown;
                fromPartial(object: Partial<_213.MsgDeactivateIID>): _213.MsgDeactivateIID;
            };
            MsgDeleteIidContext: {
                encode(message: _213.MsgDeleteIidContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteIidContext;
                fromJSON(object: any): _213.MsgDeleteIidContext;
                toJSON(message: _213.MsgDeleteIidContext): unknown;
                fromPartial(object: Partial<_213.MsgDeleteIidContext>): _213.MsgDeleteIidContext;
            };
            MsgAddLinkedResourceResponse: {
                encode(_: _213.MsgAddLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddLinkedResourceResponse;
                fromJSON(_: any): _213.MsgAddLinkedResourceResponse;
                toJSON(_: _213.MsgAddLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddLinkedResourceResponse>): _213.MsgAddLinkedResourceResponse;
            };
            MsgDeleteLinkedResourceResponse: {
                encode(_: _213.MsgDeleteLinkedResourceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteLinkedResourceResponse;
                fromJSON(_: any): _213.MsgDeleteLinkedResourceResponse;
                toJSON(_: _213.MsgDeleteLinkedResourceResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeleteLinkedResourceResponse>): _213.MsgDeleteLinkedResourceResponse;
            };
            MsgAddLinkedClaimResponse: {
                encode(_: _213.MsgAddLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddLinkedClaimResponse;
                fromJSON(_: any): _213.MsgAddLinkedClaimResponse;
                toJSON(_: _213.MsgAddLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddLinkedClaimResponse>): _213.MsgAddLinkedClaimResponse;
            };
            MsgDeleteLinkedClaimResponse: {
                encode(_: _213.MsgDeleteLinkedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteLinkedClaimResponse;
                fromJSON(_: any): _213.MsgDeleteLinkedClaimResponse;
                toJSON(_: _213.MsgDeleteLinkedClaimResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeleteLinkedClaimResponse>): _213.MsgDeleteLinkedClaimResponse;
            };
            MsgAddLinkedEntityResponse: {
                encode(_: _213.MsgAddLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddLinkedEntityResponse;
                fromJSON(_: any): _213.MsgAddLinkedEntityResponse;
                toJSON(_: _213.MsgAddLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddLinkedEntityResponse>): _213.MsgAddLinkedEntityResponse;
            };
            MsgDeleteLinkedEntityResponse: {
                encode(_: _213.MsgDeleteLinkedEntityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteLinkedEntityResponse;
                fromJSON(_: any): _213.MsgDeleteLinkedEntityResponse;
                toJSON(_: _213.MsgDeleteLinkedEntityResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeleteLinkedEntityResponse>): _213.MsgDeleteLinkedEntityResponse;
            };
            MsgAddAccordedRightResponse: {
                encode(_: _213.MsgAddAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddAccordedRightResponse;
                fromJSON(_: any): _213.MsgAddAccordedRightResponse;
                toJSON(_: _213.MsgAddAccordedRightResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddAccordedRightResponse>): _213.MsgAddAccordedRightResponse;
            };
            MsgDeleteAccordedRightResponse: {
                encode(_: _213.MsgDeleteAccordedRightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteAccordedRightResponse;
                fromJSON(_: any): _213.MsgDeleteAccordedRightResponse;
                toJSON(_: _213.MsgDeleteAccordedRightResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeleteAccordedRightResponse>): _213.MsgDeleteAccordedRightResponse;
            };
            MsgAddIidContextResponse: {
                encode(_: _213.MsgAddIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgAddIidContextResponse;
                fromJSON(_: any): _213.MsgAddIidContextResponse;
                toJSON(_: _213.MsgAddIidContextResponse): unknown;
                fromPartial(_: Partial<_213.MsgAddIidContextResponse>): _213.MsgAddIidContextResponse;
            };
            MsgDeleteIidContextResponse: {
                encode(_: _213.MsgDeleteIidContextResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeleteIidContextResponse;
                fromJSON(_: any): _213.MsgDeleteIidContextResponse;
                toJSON(_: _213.MsgDeleteIidContextResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeleteIidContextResponse>): _213.MsgDeleteIidContextResponse;
            };
            MsgDeactivateIIDResponse: {
                encode(_: _213.MsgDeactivateIIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.MsgDeactivateIIDResponse;
                fromJSON(_: any): _213.MsgDeactivateIIDResponse;
                toJSON(_: _213.MsgDeactivateIIDResponse): unknown;
                fromPartial(_: Partial<_213.MsgDeactivateIIDResponse>): _213.MsgDeactivateIIDResponse;
            };
            QueryIidDocumentsRequest: {
                encode(message: _212.QueryIidDocumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryIidDocumentsRequest;
                fromJSON(object: any): _212.QueryIidDocumentsRequest;
                toJSON(message: _212.QueryIidDocumentsRequest): unknown;
                fromPartial(object: Partial<_212.QueryIidDocumentsRequest>): _212.QueryIidDocumentsRequest;
            };
            QueryIidDocumentsResponse: {
                encode(message: _212.QueryIidDocumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryIidDocumentsResponse;
                fromJSON(object: any): _212.QueryIidDocumentsResponse;
                toJSON(message: _212.QueryIidDocumentsResponse): unknown;
                fromPartial(object: Partial<_212.QueryIidDocumentsResponse>): _212.QueryIidDocumentsResponse;
            };
            QueryIidDocumentRequest: {
                encode(message: _212.QueryIidDocumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryIidDocumentRequest;
                fromJSON(object: any): _212.QueryIidDocumentRequest;
                toJSON(message: _212.QueryIidDocumentRequest): unknown;
                fromPartial(object: Partial<_212.QueryIidDocumentRequest>): _212.QueryIidDocumentRequest;
            };
            QueryIidDocumentResponse: {
                encode(message: _212.QueryIidDocumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryIidDocumentResponse;
                fromJSON(object: any): _212.QueryIidDocumentResponse;
                toJSON(message: _212.QueryIidDocumentResponse): unknown;
                fromPartial(object: Partial<_212.QueryIidDocumentResponse>): _212.QueryIidDocumentResponse;
            };
            IidDocument: {
                encode(message: _211.IidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.IidDocument;
                fromJSON(object: any): _211.IidDocument;
                toJSON(message: _211.IidDocument): unknown;
                fromPartial(object: Partial<_211.IidDocument>): _211.IidDocument;
            };
            GenesisState: {
                encode(message: _210.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GenesisState;
                fromJSON(object: any): _210.GenesisState;
                toJSON(message: _210.GenesisState): unknown;
                fromPartial(object: Partial<_210.GenesisState>): _210.GenesisState;
            };
            IidDocumentCreatedEvent: {
                encode(message: _209.IidDocumentCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.IidDocumentCreatedEvent;
                fromJSON(object: any): _209.IidDocumentCreatedEvent;
                toJSON(message: _209.IidDocumentCreatedEvent): unknown;
                fromPartial(object: Partial<_209.IidDocumentCreatedEvent>): _209.IidDocumentCreatedEvent;
            };
            IidDocumentUpdatedEvent: {
                encode(message: _209.IidDocumentUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.IidDocumentUpdatedEvent;
                fromJSON(object: any): _209.IidDocumentUpdatedEvent;
                toJSON(message: _209.IidDocumentUpdatedEvent): unknown;
                fromPartial(object: Partial<_209.IidDocumentUpdatedEvent>): _209.IidDocumentUpdatedEvent;
            };
        };
    }
    namespace token {
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _296.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _219.QueryParamsRequest): Promise<_219.QueryParamsResponse>;
                tokenMetadata(request: _219.QueryTokenMetadataRequest): Promise<_219.QueryTokenMetadataResponse>;
                tokenList(request: _219.QueryTokenListRequest): Promise<_219.QueryTokenListResponse>;
                tokenDoc(request: _219.QueryTokenDocRequest): Promise<_219.QueryTokenDocResponse>;
            };
            MsgCreateToken: {
                encode(message: _221.MsgCreateToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgCreateToken;
                fromJSON(object: any): _221.MsgCreateToken;
                toJSON(message: _221.MsgCreateToken): unknown;
                fromPartial(object: Partial<_221.MsgCreateToken>): _221.MsgCreateToken;
            };
            MsgCreateTokenResponse: {
                encode(_: _221.MsgCreateTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgCreateTokenResponse;
                fromJSON(_: any): _221.MsgCreateTokenResponse;
                toJSON(_: _221.MsgCreateTokenResponse): unknown;
                fromPartial(_: Partial<_221.MsgCreateTokenResponse>): _221.MsgCreateTokenResponse;
            };
            MsgMintToken: {
                encode(message: _221.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgMintToken;
                fromJSON(object: any): _221.MsgMintToken;
                toJSON(message: _221.MsgMintToken): unknown;
                fromPartial(object: Partial<_221.MsgMintToken>): _221.MsgMintToken;
            };
            MintBatch: {
                encode(message: _221.MintBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MintBatch;
                fromJSON(object: any): _221.MintBatch;
                toJSON(message: _221.MintBatch): unknown;
                fromPartial(object: Partial<_221.MintBatch>): _221.MintBatch;
            };
            MsgMintTokenResponse: {
                encode(_: _221.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgMintTokenResponse;
                fromJSON(_: any): _221.MsgMintTokenResponse;
                toJSON(_: _221.MsgMintTokenResponse): unknown;
                fromPartial(_: Partial<_221.MsgMintTokenResponse>): _221.MsgMintTokenResponse;
            };
            MsgTransferToken: {
                encode(message: _221.MsgTransferToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgTransferToken;
                fromJSON(object: any): _221.MsgTransferToken;
                toJSON(message: _221.MsgTransferToken): unknown;
                fromPartial(object: Partial<_221.MsgTransferToken>): _221.MsgTransferToken;
            };
            MsgTransferTokenResponse: {
                encode(_: _221.MsgTransferTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgTransferTokenResponse;
                fromJSON(_: any): _221.MsgTransferTokenResponse;
                toJSON(_: _221.MsgTransferTokenResponse): unknown;
                fromPartial(_: Partial<_221.MsgTransferTokenResponse>): _221.MsgTransferTokenResponse;
            };
            TokenBatch: {
                encode(message: _221.TokenBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.TokenBatch;
                fromJSON(object: any): _221.TokenBatch;
                toJSON(message: _221.TokenBatch): unknown;
                fromPartial(object: Partial<_221.TokenBatch>): _221.TokenBatch;
            };
            MsgRetireToken: {
                encode(message: _221.MsgRetireToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgRetireToken;
                fromJSON(object: any): _221.MsgRetireToken;
                toJSON(message: _221.MsgRetireToken): unknown;
                fromPartial(object: Partial<_221.MsgRetireToken>): _221.MsgRetireToken;
            };
            MsgRetireTokenResponse: {
                encode(_: _221.MsgRetireTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgRetireTokenResponse;
                fromJSON(_: any): _221.MsgRetireTokenResponse;
                toJSON(_: _221.MsgRetireTokenResponse): unknown;
                fromPartial(_: Partial<_221.MsgRetireTokenResponse>): _221.MsgRetireTokenResponse;
            };
            MsgCancelToken: {
                encode(message: _221.MsgCancelToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgCancelToken;
                fromJSON(object: any): _221.MsgCancelToken;
                toJSON(message: _221.MsgCancelToken): unknown;
                fromPartial(object: Partial<_221.MsgCancelToken>): _221.MsgCancelToken;
            };
            MsgCancelTokenResponse: {
                encode(_: _221.MsgCancelTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgCancelTokenResponse;
                fromJSON(_: any): _221.MsgCancelTokenResponse;
                toJSON(_: _221.MsgCancelTokenResponse): unknown;
                fromPartial(_: Partial<_221.MsgCancelTokenResponse>): _221.MsgCancelTokenResponse;
            };
            MsgPauseToken: {
                encode(message: _221.MsgPauseToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgPauseToken;
                fromJSON(object: any): _221.MsgPauseToken;
                toJSON(message: _221.MsgPauseToken): unknown;
                fromPartial(object: Partial<_221.MsgPauseToken>): _221.MsgPauseToken;
            };
            MsgPauseTokenResponse: {
                encode(_: _221.MsgPauseTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgPauseTokenResponse;
                fromJSON(_: any): _221.MsgPauseTokenResponse;
                toJSON(_: _221.MsgPauseTokenResponse): unknown;
                fromPartial(_: Partial<_221.MsgPauseTokenResponse>): _221.MsgPauseTokenResponse;
            };
            MsgStopToken: {
                encode(message: _221.MsgStopToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgStopToken;
                fromJSON(object: any): _221.MsgStopToken;
                toJSON(message: _221.MsgStopToken): unknown;
                fromPartial(object: Partial<_221.MsgStopToken>): _221.MsgStopToken;
            };
            MsgStopTokenResponse: {
                encode(_: _221.MsgStopTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgStopTokenResponse;
                fromJSON(_: any): _221.MsgStopTokenResponse;
                toJSON(_: _221.MsgStopTokenResponse): unknown;
                fromPartial(_: Partial<_221.MsgStopTokenResponse>): _221.MsgStopTokenResponse;
            };
            Params: {
                encode(message: _220.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Params;
                fromJSON(object: any): _220.Params;
                toJSON(message: _220.Params): unknown;
                fromPartial(object: Partial<_220.Params>): _220.Params;
            };
            Token: {
                encode(message: _220.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Token;
                fromJSON(object: any): _220.Token;
                toJSON(message: _220.Token): unknown;
                fromPartial(object: Partial<_220.Token>): _220.Token;
            };
            TokensRetired: {
                encode(message: _220.TokensRetired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.TokensRetired;
                fromJSON(object: any): _220.TokensRetired;
                toJSON(message: _220.TokensRetired): unknown;
                fromPartial(object: Partial<_220.TokensRetired>): _220.TokensRetired;
            };
            TokensCancelled: {
                encode(message: _220.TokensCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.TokensCancelled;
                fromJSON(object: any): _220.TokensCancelled;
                toJSON(message: _220.TokensCancelled): unknown;
                fromPartial(object: Partial<_220.TokensCancelled>): _220.TokensCancelled;
            };
            TokenProperties: {
                encode(message: _220.TokenProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.TokenProperties;
                fromJSON(object: any): _220.TokenProperties;
                toJSON(message: _220.TokenProperties): unknown;
                fromPartial(object: Partial<_220.TokenProperties>): _220.TokenProperties;
            };
            TokenData: {
                encode(message: _220.TokenData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.TokenData;
                fromJSON(object: any): _220.TokenData;
                toJSON(message: _220.TokenData): unknown;
                fromPartial(object: Partial<_220.TokenData>): _220.TokenData;
            };
            QueryParamsRequest: {
                encode(_: _219.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryParamsRequest;
                fromJSON(_: any): _219.QueryParamsRequest;
                toJSON(_: _219.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_219.QueryParamsRequest>): _219.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _219.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryParamsResponse;
                fromJSON(object: any): _219.QueryParamsResponse;
                toJSON(message: _219.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_219.QueryParamsResponse>): _219.QueryParamsResponse;
            };
            QueryTokenListRequest: {
                encode(message: _219.QueryTokenListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryTokenListRequest;
                fromJSON(object: any): _219.QueryTokenListRequest;
                toJSON(message: _219.QueryTokenListRequest): unknown;
                fromPartial(object: Partial<_219.QueryTokenListRequest>): _219.QueryTokenListRequest;
            };
            QueryTokenListResponse: {
                encode(message: _219.QueryTokenListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryTokenListResponse;
                fromJSON(object: any): _219.QueryTokenListResponse;
                toJSON(message: _219.QueryTokenListResponse): unknown;
                fromPartial(object: Partial<_219.QueryTokenListResponse>): _219.QueryTokenListResponse;
            };
            QueryTokenDocRequest: {
                encode(message: _219.QueryTokenDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryTokenDocRequest;
                fromJSON(object: any): _219.QueryTokenDocRequest;
                toJSON(message: _219.QueryTokenDocRequest): unknown;
                fromPartial(object: Partial<_219.QueryTokenDocRequest>): _219.QueryTokenDocRequest;
            };
            QueryTokenDocResponse: {
                encode(message: _219.QueryTokenDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryTokenDocResponse;
                fromJSON(object: any): _219.QueryTokenDocResponse;
                toJSON(message: _219.QueryTokenDocResponse): unknown;
                fromPartial(object: Partial<_219.QueryTokenDocResponse>): _219.QueryTokenDocResponse;
            };
            QueryTokenMetadataRequest: {
                encode(message: _219.QueryTokenMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryTokenMetadataRequest;
                fromJSON(object: any): _219.QueryTokenMetadataRequest;
                toJSON(message: _219.QueryTokenMetadataRequest): unknown;
                fromPartial(object: Partial<_219.QueryTokenMetadataRequest>): _219.QueryTokenMetadataRequest;
            };
            QueryTokenMetadataResponse: {
                encode(message: _219.QueryTokenMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryTokenMetadataResponse;
                fromJSON(object: any): _219.QueryTokenMetadataResponse;
                toJSON(message: _219.QueryTokenMetadataResponse): unknown;
                fromPartial(object: Partial<_219.QueryTokenMetadataResponse>): _219.QueryTokenMetadataResponse;
            };
            TokenMetadataProperties: {
                encode(message: _219.TokenMetadataProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.TokenMetadataProperties;
                fromJSON(object: any): _219.TokenMetadataProperties;
                toJSON(message: _219.TokenMetadataProperties): unknown;
                fromPartial(object: Partial<_219.TokenMetadataProperties>): _219.TokenMetadataProperties;
            };
            SetTokenContractCodes: {
                encode(message: _218.SetTokenContractCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.SetTokenContractCodes;
                fromJSON(object: any): _218.SetTokenContractCodes;
                toJSON(message: _218.SetTokenContractCodes): unknown;
                fromPartial(object: Partial<_218.SetTokenContractCodes>): _218.SetTokenContractCodes;
            };
            GenesisState: {
                encode(message: _217.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.GenesisState;
                fromJSON(object: any): _217.GenesisState;
                toJSON(message: _217.GenesisState): unknown;
                fromPartial(object: Partial<_217.GenesisState>): _217.GenesisState;
            };
            TokenCreatedEvent: {
                encode(message: _216.TokenCreatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenCreatedEvent;
                fromJSON(object: any): _216.TokenCreatedEvent;
                toJSON(message: _216.TokenCreatedEvent): unknown;
                fromPartial(object: Partial<_216.TokenCreatedEvent>): _216.TokenCreatedEvent;
            };
            TokenUpdatedEvent: {
                encode(message: _216.TokenUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenUpdatedEvent;
                fromJSON(object: any): _216.TokenUpdatedEvent;
                toJSON(message: _216.TokenUpdatedEvent): unknown;
                fromPartial(object: Partial<_216.TokenUpdatedEvent>): _216.TokenUpdatedEvent;
            };
            TokenMintedEvent: {
                encode(message: _216.TokenMintedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenMintedEvent;
                fromJSON(object: any): _216.TokenMintedEvent;
                toJSON(message: _216.TokenMintedEvent): unknown;
                fromPartial(object: Partial<_216.TokenMintedEvent>): _216.TokenMintedEvent;
            };
            TokenTransferredEvent: {
                encode(message: _216.TokenTransferredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenTransferredEvent;
                fromJSON(object: any): _216.TokenTransferredEvent;
                toJSON(message: _216.TokenTransferredEvent): unknown;
                fromPartial(object: Partial<_216.TokenTransferredEvent>): _216.TokenTransferredEvent;
            };
            TokenCancelledEvent: {
                encode(message: _216.TokenCancelledEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenCancelledEvent;
                fromJSON(object: any): _216.TokenCancelledEvent;
                toJSON(message: _216.TokenCancelledEvent): unknown;
                fromPartial(object: Partial<_216.TokenCancelledEvent>): _216.TokenCancelledEvent;
            };
            TokenRetiredEvent: {
                encode(message: _216.TokenRetiredEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenRetiredEvent;
                fromJSON(object: any): _216.TokenRetiredEvent;
                toJSON(message: _216.TokenRetiredEvent): unknown;
                fromPartial(object: Partial<_216.TokenRetiredEvent>): _216.TokenRetiredEvent;
            };
            TokenPausedEvent: {
                encode(message: _216.TokenPausedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenPausedEvent;
                fromJSON(object: any): _216.TokenPausedEvent;
                toJSON(message: _216.TokenPausedEvent): unknown;
                fromPartial(object: Partial<_216.TokenPausedEvent>): _216.TokenPausedEvent;
            };
            TokenStoppedEvent: {
                encode(message: _216.TokenStoppedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TokenStoppedEvent;
                fromJSON(object: any): _216.TokenStoppedEvent;
                toJSON(message: _216.TokenStoppedEvent): unknown;
                fromPartial(object: Partial<_216.TokenStoppedEvent>): _216.TokenStoppedEvent;
            };
            MintAuthorization: {
                encode(message: _215.MintAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MintAuthorization;
                fromJSON(object: any): _215.MintAuthorization;
                toJSON(message: _215.MintAuthorization): unknown;
                fromPartial(object: Partial<_215.MintAuthorization>): _215.MintAuthorization;
            };
            MintConstraints: {
                encode(message: _215.MintConstraints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MintConstraints;
                fromJSON(object: any): _215.MintConstraints;
                toJSON(message: _215.MintConstraints): unknown;
                fromPartial(object: Partial<_215.MintConstraints>): _215.MintConstraints;
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
                    v1beta1: _297.MsgClientImpl;
                };
                claims: {
                    v1beta1: _298.MsgClientImpl;
                };
                entity: {
                    v1beta1: _299.MsgClientImpl;
                };
                iid: {
                    v1beta1: _300.MsgClientImpl;
                };
                token: {
                    v1beta1: _301.MsgClientImpl;
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
                iid: {
                    v1beta1: {
                        iidDocuments(request?: _212.QueryIidDocumentsRequest): Promise<_212.QueryIidDocumentsResponse>;
                        iidDocument(request: _212.QueryIidDocumentRequest): Promise<_212.QueryIidDocumentResponse>;
                    };
                };
                token: {
                    v1beta1: {
                        params(request?: _219.QueryParamsRequest): Promise<_219.QueryParamsResponse>;
                        tokenMetadata(request: _219.QueryTokenMetadataRequest): Promise<_219.QueryTokenMetadataResponse>;
                        tokenList(request: _219.QueryTokenListRequest): Promise<_219.QueryTokenListResponse>;
                        tokenDoc(request: _219.QueryTokenDocRequest): Promise<_219.QueryTokenDocResponse>;
                    };
                };
            };
        }>;
    };
}
