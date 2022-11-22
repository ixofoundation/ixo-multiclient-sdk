import base58 from "bs58";
import { concatArrayBuffers } from "./conversions";

/**
 * @param pubkey base58 endoded pubkey string
 */
export function generateSecpDid(pubkey: string, prefix?: string) {
  const base58btcCode = "z";
  const secp256k1PubCode = new Uint8Array([0xe7, 0x01]);
  const pubKeyBz = base58.decode(pubkey);
  const encodedpubKey = base58.encode(
    concatArrayBuffers(secp256k1PubCode, pubKeyBz)
  );
  const did = base58btcCode + encodedpubKey;
  return "did:" + (prefix || "ixo") + ":" + did;
}
