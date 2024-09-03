import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
    /** sender is the account address of private key to send coins to fee collector account. */
    sender: string;
    /** name of the invariant module. */
    invariantModuleName: string;
    /** invariant_route is the msg's invariant route. */
    invariantRoute: string;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantSDKType {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** constant_fee defines the x/crisis parameter. */
    constantFee?: Coin;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    constant_fee?: CoinSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgVerifyInvariant: {
    encode(message: MsgVerifyInvariant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant;
    fromJSON(object: any): MsgVerifyInvariant;
    toJSON(message: MsgVerifyInvariant): unknown;
    fromPartial(object: Partial<MsgVerifyInvariant>): MsgVerifyInvariant;
};
export declare const MsgVerifyInvariantResponse: {
    encode(_: MsgVerifyInvariantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponse;
    fromJSON(_: any): MsgVerifyInvariantResponse;
    toJSON(_: MsgVerifyInvariantResponse): unknown;
    fromPartial(_: Partial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse;
};
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
