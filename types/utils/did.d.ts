/**
 * @param address bech32 encoded address, eg: ixo1r3us73z564xxxcessqmc4h0dwh8j4z6sxn2730ag09mq87hlrkzqrg8clc
 */
export declare function generateSecpDid(address: string): string;
export declare function generateSecpDidLegacy(pubkey: string | Uint8Array, prefix?: string): string;
/**
 * Extracts the public key from a DID.
 * @param did - The DID string (e.g., "did:x:<base58-encoded-key>")
 * @returns The base58 encoded public key
 */
export declare function extractPubkeyFromDid(did: string): string;
/**
 * Return a did with ixo method did and wasm namespace, for the purpose
 * to have iid docs onchain for corresponding cosmwasm addresses
 *
 * @param address bech32 encoded address, eg: ixo1r3us73z564xxxcessqmc4h0dwh8j4z6sxn2730ag09mq87hlrkzqrg8clc
 */
export declare function generateWasmDid(address: string): string;
