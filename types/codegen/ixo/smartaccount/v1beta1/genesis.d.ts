import { AccountAuthenticator, AccountAuthenticatorSDKType } from "./models";
import { Params, ParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 */
export interface AuthenticatorData {
    /** address is an account address, one address can have many authenticators */
    address: string;
    /**
     * authenticators are the account's authenticators, these can be multiple
     * types including SignatureVerification, AllOfs, CosmWasmAuthenticators, etc
     */
    authenticators: AccountAuthenticator[];
}
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 */
export interface AuthenticatorDataSDKType {
    address: string;
    authenticators: AccountAuthenticatorSDKType[];
}
/** GenesisState defines the authenticator module's genesis state. */
export interface GenesisState {
    /** params define the parameters for the authenticator module. */
    params?: Params;
    /** next_authenticator_id is the next available authenticator ID. */
    nextAuthenticatorId: Long;
    /**
     * authenticator_data contains the data for multiple accounts, each with their
     * authenticators.
     */
    authenticatorData: AuthenticatorData[];
}
/** GenesisState defines the authenticator module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    next_authenticator_id: Long;
    authenticator_data: AuthenticatorDataSDKType[];
}
export declare const AuthenticatorData: {
    encode(message: AuthenticatorData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorData;
    fromJSON(object: any): AuthenticatorData;
    toJSON(message: AuthenticatorData): unknown;
    fromPartial(object: Partial<AuthenticatorData>): AuthenticatorData;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
