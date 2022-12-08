import { toHex } from "@cosmjs/encoding";
import { ixo } from "../codegen";
import base58 from "bs58";

/**
 * Only use SECP generated creds!!!
 */
export const createVerificationMethod = (
  did: string,
  pubkey: Uint8Array,
  controller: string
) => {
  const pubkeyBase58 = base58.encode(pubkey);

  return ixo.iid.v1beta1.VerificationMethod.fromPartial({
    id: did + "#" + pubkeyBase58,
    type: "EcdsaSecp256k1VerificationKey2019",
    publicKeyBase58: pubkeyBase58,
    controller: controller,
  });
};

type createIidVerificationMethodsProps = {
  did: string;
  pubkey: Uint8Array;
  address: string; // Bech32 encoded address
  controller: string; // Did of controller
};
/**
 * Only use SECP generated user creds!!!
 */
export const createIidVerificationMethods = ({
  did,
  pubkey,
  controller,
  address,
}: createIidVerificationMethodsProps) => {
  const pubkeyHex = toHex(pubkey);
  const pubkeyBase58 = base58.encode(pubkey);

  return [
    ixo.iid.v1beta1.Verification.fromPartial({
      relationships: ["authentication"],
      method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
        id: did,
        type: "EcdsaSecp256k1VerificationKey2019",
        publicKeyBase58: pubkeyBase58,
        controller: controller,
      }),
    }),
    ixo.iid.v1beta1.Verification.fromPartial({
      relationships: ["authentication"],
      method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
        id: did + "#" + pubkeyHex,
        type: "EcdsaSecp256k1VerificationKey2019",
        publicKeyMultibase: "F" + pubkeyHex,
        controller: controller,
      }),
    }),
    ixo.iid.v1beta1.Verification.fromPartial({
      relationships: ["authentication"],
      method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
        id: did + "#" + pubkeyBase58,
        type: "EcdsaSecp256k1VerificationKey2019",
        publicKeyBase58: pubkeyBase58,
        controller: controller,
      }),
    }),
    ixo.iid.v1beta1.Verification.fromPartial({
      relationships: ["authentication"],
      method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
        id: did + "#" + address,
        type: "tendermint/PubKeySecp256k1",
        blockchainAccountID: address,
        controller: controller,
      }),
    }),
  ];
};

export const createAgentIidContext = () => [
  ixo.iid.v1beta1.Context.fromPartial({
    key: "ixo",
    // @ts-ignore
    value: "https://w3id.org/ixo/v1",
  }),
];
