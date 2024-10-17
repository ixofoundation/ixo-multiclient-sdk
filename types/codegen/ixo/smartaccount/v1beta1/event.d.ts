import * as _m0 from "protobufjs/minimal";
/** AuthenticatorAddedEvent is an event triggered on Authenticator addition */
export interface AuthenticatorAddedEvent {
    /** sender is the address of the account that added the authenticator */
    sender: string;
    /** authenticator_type is the type of the authenticator that was added */
    authenticatorType: string;
    /** authenticator_id is the id of the authenticator that was added */
    authenticatorId: string;
}
/** AuthenticatorAddedEvent is an event triggered on Authenticator addition */
export interface AuthenticatorAddedEventSDKType {
    sender: string;
    authenticator_type: string;
    authenticator_id: string;
}
/** AuthenticatorRemovedEvent is an event triggered on Authenticator removal */
export interface AuthenticatorRemovedEvent {
    /** sender is the address of the account that removed the authenticator */
    sender: string;
    /** authenticator_id is the id of the authenticator that was removed */
    authenticatorId: string;
}
/** AuthenticatorRemovedEvent is an event triggered on Authenticator removal */
export interface AuthenticatorRemovedEventSDKType {
    sender: string;
    authenticator_id: string;
}
/**
 * AuthenticatorSetActiveStateEvent is an event triggered on Authenticator
 * active state change
 */
export interface AuthenticatorSetActiveStateEvent {
    /** sender is the address of the account that changed the active state */
    sender: string;
    /** active is the new active state */
    isSmartAccountActive: boolean;
}
/**
 * AuthenticatorSetActiveStateEvent is an event triggered on Authenticator
 * active state change
 */
export interface AuthenticatorSetActiveStateEventSDKType {
    sender: string;
    is_smart_account_active: boolean;
}
export declare const AuthenticatorAddedEvent: {
    encode(message: AuthenticatorAddedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorAddedEvent;
    fromJSON(object: any): AuthenticatorAddedEvent;
    toJSON(message: AuthenticatorAddedEvent): unknown;
    fromPartial(object: Partial<AuthenticatorAddedEvent>): AuthenticatorAddedEvent;
};
export declare const AuthenticatorRemovedEvent: {
    encode(message: AuthenticatorRemovedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorRemovedEvent;
    fromJSON(object: any): AuthenticatorRemovedEvent;
    toJSON(message: AuthenticatorRemovedEvent): unknown;
    fromPartial(object: Partial<AuthenticatorRemovedEvent>): AuthenticatorRemovedEvent;
};
export declare const AuthenticatorSetActiveStateEvent: {
    encode(message: AuthenticatorSetActiveStateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorSetActiveStateEvent;
    fromJSON(object: any): AuthenticatorSetActiveStateEvent;
    toJSON(message: AuthenticatorSetActiveStateEvent): unknown;
    fromPartial(object: Partial<AuthenticatorSetActiveStateEvent>): AuthenticatorSetActiveStateEvent;
};
