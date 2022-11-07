import * as _m0 from "protobufjs/minimal";
/** Digital identity credential issued to an ixo DID */
export interface DidCredential {
    credType: string[];
    issuer: string;
    issued: string;
    claim?: Claim;
}
/** Digital identity credential issued to an ixo DID */
export interface DidCredentialSDKType {
    cred_type: string[];
    issuer: string;
    issued: string;
    claim?: ClaimSDKType;
}
/** The claim section of a credential, indicating if the DID is KYC validated */
export interface Claim {
    id: string;
    KYCValidated: boolean;
}
/** The claim section of a credential, indicating if the DID is KYC validated */
export interface ClaimSDKType {
    id: string;
    KYC_validated: boolean;
}
/** An ixo DID with public and private keys, based on the Sovrin DID spec */
export interface IxoDid {
    did: string;
    verifyKey: string;
    encryptionPublicKey: string;
    secret?: Secret;
}
/** An ixo DID with public and private keys, based on the Sovrin DID spec */
export interface IxoDidSDKType {
    did: string;
    verify_key: string;
    encryption_public_key: string;
    secret?: SecretSDKType;
}
/** The private section of an ixo DID, based on the Sovrin DID spec */
export interface Secret {
    seed: string;
    signKey: string;
    encryptionPrivateKey: string;
}
/** The private section of an ixo DID, based on the Sovrin DID spec */
export interface SecretSDKType {
    seed: string;
    sign_key: string;
    encryption_private_key: string;
}
export declare const DidCredential: {
    encode(message: DidCredential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidCredential;
    fromJSON(object: any): DidCredential;
    toJSON(message: DidCredential): unknown;
    fromPartial(object: Partial<DidCredential>): DidCredential;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: Partial<Claim>): Claim;
};
export declare const IxoDid: {
    encode(message: IxoDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IxoDid;
    fromJSON(object: any): IxoDid;
    toJSON(message: IxoDid): unknown;
    fromPartial(object: Partial<IxoDid>): IxoDid;
};
export declare const Secret: {
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial(object: Partial<Secret>): Secret;
};
