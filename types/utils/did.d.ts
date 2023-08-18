/**
 * @param pubkey Uint8Array or base58 encoded string
 */
export declare function generateSecpDid(pubkey: string | Uint8Array, prefix?: string): string;
/**
 * Return a did with ixo method did and wasm namespace, for the purpose
 * to have iid docs onchain for corresponding cosmwasm addresses
 *
 * @param address bech32 encoded address, eg: ixo1r3us73z564xxxcessqmc4h0dwh8j4z6sxn2730ag09mq87hlrkzqrg8clc
 */
export declare function generateWasmDid(address: string): string;
