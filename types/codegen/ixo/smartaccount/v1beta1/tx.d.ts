import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type. */
export interface MsgAddAuthenticator {
    sender: string;
    authenticatorType: string;
    data: Uint8Array;
}
/** MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type. */
export interface MsgAddAuthenticatorSDKType {
    sender: string;
    authenticator_type: string;
    data: Uint8Array;
}
/** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
export interface MsgAddAuthenticatorResponse {
    /** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
    success: boolean;
}
/** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
export interface MsgAddAuthenticatorResponseSDKType {
    success: boolean;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 */
export interface MsgRemoveAuthenticator {
    sender: string;
    id: Long;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 */
export interface MsgRemoveAuthenticatorSDKType {
    sender: string;
    id: Long;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 */
export interface MsgRemoveAuthenticatorResponse {
    /**
     * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
     * type.
     */
    success: boolean;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 */
export interface MsgRemoveAuthenticatorResponseSDKType {
    success: boolean;
}
export interface MsgSetActiveState {
    sender: string;
    active: boolean;
}
export interface MsgSetActiveStateSDKType {
    sender: string;
    active: boolean;
}
export interface MsgSetActiveStateResponse {
}
export interface MsgSetActiveStateResponseSDKType {
}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 */
export interface TxExtension {
    /**
     * selected_authenticators holds the authenticator_id for the chosen
     * authenticator per message.
     */
    selectedAuthenticators: Long[];
}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 */
export interface TxExtensionSDKType {
    selected_authenticators: Long[];
}
export declare const MsgAddAuthenticator: {
    encode(message: MsgAddAuthenticator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAuthenticator;
    fromJSON(object: any): MsgAddAuthenticator;
    toJSON(message: MsgAddAuthenticator): unknown;
    fromPartial(object: Partial<MsgAddAuthenticator>): MsgAddAuthenticator;
};
export declare const MsgAddAuthenticatorResponse: {
    encode(message: MsgAddAuthenticatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAuthenticatorResponse;
    fromJSON(object: any): MsgAddAuthenticatorResponse;
    toJSON(message: MsgAddAuthenticatorResponse): unknown;
    fromPartial(object: Partial<MsgAddAuthenticatorResponse>): MsgAddAuthenticatorResponse;
};
export declare const MsgRemoveAuthenticator: {
    encode(message: MsgRemoveAuthenticator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAuthenticator;
    fromJSON(object: any): MsgRemoveAuthenticator;
    toJSON(message: MsgRemoveAuthenticator): unknown;
    fromPartial(object: Partial<MsgRemoveAuthenticator>): MsgRemoveAuthenticator;
};
export declare const MsgRemoveAuthenticatorResponse: {
    encode(message: MsgRemoveAuthenticatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAuthenticatorResponse;
    fromJSON(object: any): MsgRemoveAuthenticatorResponse;
    toJSON(message: MsgRemoveAuthenticatorResponse): unknown;
    fromPartial(object: Partial<MsgRemoveAuthenticatorResponse>): MsgRemoveAuthenticatorResponse;
};
export declare const MsgSetActiveState: {
    encode(message: MsgSetActiveState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActiveState;
    fromJSON(object: any): MsgSetActiveState;
    toJSON(message: MsgSetActiveState): unknown;
    fromPartial(object: Partial<MsgSetActiveState>): MsgSetActiveState;
};
export declare const MsgSetActiveStateResponse: {
    encode(_: MsgSetActiveStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActiveStateResponse;
    fromJSON(_: any): MsgSetActiveStateResponse;
    toJSON(_: MsgSetActiveStateResponse): unknown;
    fromPartial(_: Partial<MsgSetActiveStateResponse>): MsgSetActiveStateResponse;
};
export declare const TxExtension: {
    encode(message: TxExtension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxExtension;
    fromJSON(object: any): TxExtension;
    toJSON(message: TxExtension): unknown;
    fromPartial(object: Partial<TxExtension>): TxExtension;
};
