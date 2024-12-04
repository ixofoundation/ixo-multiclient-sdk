import base58 from "bs58";
import { decodeMbKey, encodeMbKey } from "./conversions";
import { MULTICODEC_SECP256K1_PUB_HEADER } from "./constants";

/**
 * @param address bech32 encoded address, eg: ixo1r3us73z564xxxcessqmc4h0dwh8j4z6sxn2730ag09mq87hlrkzqrg8clc
 */
export function generateSecpDid(address: string) {
  return "did:ixo:" + address;
}

// Leaving old code for reference
// export function generateSecpDid(pubkey: string | Uint8Array, prefix?: string) {
//   const pubKeyBz = typeof pubkey === "string" ? base58.decode(pubkey) : pubkey;
//   const did = encodeMbKey(MULTICODEC_SECP256K1_PUB_HEADER, pubKeyBz);
//   return "did:" + (prefix || "x") + ":" + did;
// }

/**
 * Extracts the public key from a DID.
 * @param did - The DID string (e.g., "did:x:<base58-encoded-key>")
 * @returns The base58 encoded public key
 */
export function extractPubkeyFromDid(did: string): string {
  // Assuming the DID is formatted as "did:<prefix>:<base58-encoded-key>"
  const didParts = did.split(":");
  if (didParts.length < 3) {
    throw new Error("Invalid DID format");
  }
  const base58Key = didParts[2];

  // Decode the base58 key
  const decodedKey = decodeMbKey(MULTICODEC_SECP256K1_PUB_HEADER, base58Key);

  // Convert the raw public key back to a base58 string
  return base58.encode(decodedKey);
}

/**
 * Return a did with ixo method did and wasm namespace, for the purpose
 * to have iid docs onchain for corresponding cosmwasm addresses
 *
 * @param address bech32 encoded address, eg: ixo1r3us73z564xxxcessqmc4h0dwh8j4z6sxn2730ag09mq87hlrkzqrg8clc
 */
export function generateWasmDid(address: string) {
  return `did:ixo:wasm:${address}`;
}
