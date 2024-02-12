import base58 from "bs58";
import { encodeMbKey } from "./conversions";
import { MULTICODEC_SECP256K1_PUB_HEADER } from "./constants";

/**
 * @param pubkey Uint8Array or base58 encoded string
 */
export function generateSecpDid(pubkey: string | Uint8Array, prefix?: string) {
  const pubKeyBz = typeof pubkey === "string" ? base58.decode(pubkey) : pubkey;
  const did = encodeMbKey(MULTICODEC_SECP256K1_PUB_HEADER, pubKeyBz);
  return "did:" + (prefix || "x") + ":" + did;
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
