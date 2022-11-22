import { pubkeyToRawAddress } from "@cosmjs/tendermint-rpc";
import { fromHex, toBech32 } from "@cosmjs/encoding";

/**
 * @param pubKey Uint8Array or Hex string
 */
export const pubKeyToAddress = (
  type: "ed25519" | "secp256k1",
  pubKey: Uint8Array | string
) => {
  const parsedPubKey = typeof pubKey === "string" ? fromHex(pubKey) : pubKey;
  return toBech32("ixo", pubkeyToRawAddress(type, parsedPubKey));
};
