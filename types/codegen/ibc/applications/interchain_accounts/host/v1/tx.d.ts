import { Params, ParamsSDKType, QueryRequest, QueryRequestSDKType } from "./host";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the 27-interchain-accounts/host parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsSDKType {
    signer: string;
    params?: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponse {
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseSDKType {
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
    /** signer address */
    signer: string;
    /** requests defines the module safe queries to execute. */
    requests: QueryRequest[];
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeSDKType {
    signer: string;
    requests: QueryRequestSDKType[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
    /** height at which the responses were queried */
    height: Long;
    /** protobuf encoded responses for each query */
    responses: Uint8Array[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseSDKType {
    height: Long;
    responses: Uint8Array[];
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgModuleQuerySafe: {
    encode(message: MsgModuleQuerySafe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleQuerySafe;
    fromJSON(object: any): MsgModuleQuerySafe;
    toJSON(message: MsgModuleQuerySafe): unknown;
    fromPartial(object: Partial<MsgModuleQuerySafe>): MsgModuleQuerySafe;
};
export declare const MsgModuleQuerySafeResponse: {
    encode(message: MsgModuleQuerySafeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleQuerySafeResponse;
    fromJSON(object: any): MsgModuleQuerySafeResponse;
    toJSON(message: MsgModuleQuerySafeResponse): unknown;
    fromPartial(object: Partial<MsgModuleQuerySafeResponse>): MsgModuleQuerySafeResponse;
};
