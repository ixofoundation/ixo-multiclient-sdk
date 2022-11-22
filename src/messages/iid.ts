import { toHex } from "@cosmjs/encoding";
import { ixo } from "../codegen";

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
  return [
    // ixo.iid.v1beta1.Verification.fromPartial({
    //   relationships: ["authentication"],
    //   method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
    //     id: did,
    //     type: "EcdsaSecp256k1VerificationKey2019",
    //     publicKeyMultibase: "F" + toHex(pubkey),
    //     controller: controller,
    //   }),
    // }),
    ixo.iid.v1beta1.Verification.fromPartial({
      relationships: ["authentication"],
      method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
        id: did + "#" + toHex(pubkey),
        type: "EcdsaSecp256k1VerificationKey2019",
        publicKeyMultibase: "F" + toHex(pubkey),
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
