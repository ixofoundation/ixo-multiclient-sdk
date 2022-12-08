/**
 * @param pubKey Uint8Array or base58 encoded string
 */
export declare const pubKeyToAddress: (type: "ed25519" | "secp256k1", pubKey: Uint8Array | string, prefix?: string) => string;
