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
