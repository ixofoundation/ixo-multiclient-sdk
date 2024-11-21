import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * AccountAuthenticator represents a foundational model for all authenticators.
 * It provides extensibility by allowing concrete types to interpret and
 * validate transactions based on the encapsulated data.
 */
export interface AccountAuthenticator {
    /** ID uniquely identifies the authenticator instance. */
    id: Long;
    /**
     * Type specifies the category of the AccountAuthenticator.
     * This type information is essential for differentiating authenticators
     * and ensuring precise data retrieval from the storage layer.
     */
    type: string;
    /**
     * Config is a versatile field used in conjunction with the specific type of
     * account authenticator to facilitate complex authentication processes.
     * The interpretation of this field is overloaded, enabling multiple
     * authenticators to utilize it for their respective purposes.
     */
    config: Uint8Array;
}
/**
 * AccountAuthenticator represents a foundational model for all authenticators.
 * It provides extensibility by allowing concrete types to interpret and
 * validate transactions based on the encapsulated data.
 */
export interface AccountAuthenticatorSDKType {
    id: Long;
    type: string;
    config: Uint8Array;
}
export declare const AccountAuthenticator: {
    encode(message: AccountAuthenticator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountAuthenticator;
    fromJSON(object: any): AccountAuthenticator;
    toJSON(message: AccountAuthenticator): unknown;
    fromPartial(object: Partial<AccountAuthenticator>): AccountAuthenticator;
};
