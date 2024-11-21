/**
 * Convert a public key to an address.
 * @param type - The type of public key (e.g., "ed25519" or "secp256k1")
 * @param pubKey Uint8Array or base58 encoded string
 * @param prefix - The prefix to use for the address (default: "ixo")
 * @returns The bech32 encoded address
 */
export declare const pubKeyToAddress: (type: "ed25519" | "secp256k1", pubKey: Uint8Array | string, prefix?: string) => string;
/**
 * Extracts the address from a secp generate did.
 * @param did - The DID string (e.g., "did:x:<base58-encoded-key>")
 * @param prefix - The prefix to use for the address (default: "ixo")
 * @returns The bech32 encoded address
 */
export declare const didToAddress: (did: string, prefix?: string) => string;
/**
 * Convert the a secp generate did into an address based did.
 * @param did - The DID string (e.g., "did:x:<base58-encoded-key>")
 * @param prefix - The prefix to use for the address (default: "ixo")
 * @returns The address based did
 */
export declare const didToAddressDid: (did: string, prefix?: string) => string;
