import { pubkeyToRawAddress } from "@cosmjs/tendermint-rpc";
import { toBech32 } from "@cosmjs/encoding";
import base58 from "bs58";

/**
 * @param pubKey Uint8Array or base58 encoded string
 */
export const pubKeyToAddress = (
  type: "ed25519" | "secp256k1",
  pubKey: Uint8Array | string,
  prefix = "ixo"
) => {
  const parsedPubKey =
    typeof pubKey === "string" ? base58.decode(pubKey) : pubKey;
  return toBech32(prefix, pubkeyToRawAddress(type, parsedPubKey));
};
