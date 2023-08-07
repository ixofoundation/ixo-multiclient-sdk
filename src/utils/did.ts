import base58 from "bs58";
import { concatArrayBuffers } from "./conversions";

/**
 * @param pubkey Uint8Array or base58 encoded string
 */
export function generateSecpDid(pubkey: string | Uint8Array, prefix?: string) {
  const base58btcCode = "z";
  const secp256k1PubCode = new Uint8Array([0xe7, 0x01]);
  const pubKeyBz = typeof pubkey === "string" ? base58.decode(pubkey) : pubkey;
  const encodedpubKey = base58.encode(
    concatArrayBuffers(secp256k1PubCode, pubKeyBz)
  );
  const did = base58btcCode + encodedpubKey;
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
