import { pubkeyToRawAddress } from "@cosmjs/tendermint-rpc";
import { toBech32 } from "@cosmjs/encoding";
import base58 from "bs58";
import { extractPubkeyFromDid } from "./did";

/**
 * Convert a public key to an address.
 * @param type - The type of public key (e.g., "ed25519" or "secp256k1")
 * @param pubKey Uint8Array or base58 encoded string
 * @param prefix - The prefix to use for the address (default: "ixo")
 * @returns The bech32 encoded address
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

/**
 * Extracts the address from a secp generate did.
 * @param did - The DID string (e.g., "did:x:<base58-encoded-key>")
 * @param prefix - The prefix to use for the address (default: "ixo")
 * @returns The bech32 encoded address
 */
export const didToAddress = (did: string, prefix = "ixo") => {
  // if did is did:x:zQ3.. and the total count for : is only 3 we can safely assume it is the old did format from secp pubkey
  // can get the pubkey to get the address to get the ideal new address based did we are working towards
  if (!did.includes("did:x:zQ3")) {
    throw new Error("Invalid DID format, only support did:x:zQ3...");
  }
  const pubkey = extractPubkeyFromDid(did);
  const address = pubKeyToAddress("secp256k1", pubkey, prefix);
  return address;
};

/**
 * Convert the a secp generate did into an address based did.
 * @param did - The DID string (e.g., "did:x:<base58-encoded-key>")
 * @param prefix - The prefix to use for the address (default: "ixo")
 * @returns The address based did
 */
export const didToAddressDid = (did: string, prefix = "ixo") => {
  const address = didToAddress(did, prefix);
  return `did:ixo${address}`;
};
