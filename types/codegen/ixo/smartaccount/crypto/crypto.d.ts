import * as _m0 from "protobufjs/minimal";
/** PubKey defines an authn public key */
export interface AuthnPubKey {
    /**
     * The key_id (or credential ID) is a unique identifier for a passkey.
     * This ID is provided by the authenticator when the passkey is created.
     * As it is not possible to retrieve the public key from the authenticator
     * after the passkey is created, if the user loses the public key - id
     * association, the key_id can be used to retrieve the public key.
     */
    keyId: string;
    /**
     * Store the COSE algorithm identifier. Since authn allows multiple different
     * public key credential algorithm, eg.
     * -7(ES256) - ECDSA with SHA-256 on the P-256 curve
     * -257(RS256) - RSASSA-PKCS1-v1_5 with SHA-256
     * we need to store the algorithm identifier to be able to verify the
     * signature according to the algorithm the public key is using.
     */
    coseAlgorithm: number;
    /** The public key bytes */
    key: Uint8Array;
    /**
     * The relaying party id is the id of the relaying party against which the
     * authn key pair is registered. We store it as binary of sha256 hash.
     */
    relayingPartyId: Uint8Array;
}
/** PubKey defines an authn public key */
export interface AuthnPubKeySDKType {
    key_id: string;
    cose_algorithm: number;
    key: Uint8Array;
    relaying_party_id: Uint8Array;
}
export declare const AuthnPubKey: {
    encode(message: AuthnPubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthnPubKey;
    fromJSON(object: any): AuthnPubKey;
    toJSON(message: AuthnPubKey): unknown;
    fromPartial(object: Partial<AuthnPubKey>): AuthnPubKey;
};
