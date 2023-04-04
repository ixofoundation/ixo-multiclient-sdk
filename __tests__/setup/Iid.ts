import { createAgentIidContext } from "../../src/messages/iid";
import { createClient, getUser, ixo, utils } from "../helpers/common";
import { fee, WalletUsers } from "../helpers/constants";

export const CreateIidDocForGroup = async (
  address: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));
  const signerAddress = (await getUser(signer).getAccounts())[0].address;
  const did = utils.did.generateCosmwasmDid(address);

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgCreateIidDocument",
    value: ixo.iid.v1beta1.MsgCreateIidDocument.fromPartial({
      context: createAgentIidContext(),
      id: did,
      alsoKnownAs: "group",
      verifications: [
        ixo.iid.v1beta1.Verification.fromPartial({
          relationships: ["authentication"],
          method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
            id: did,
            type: "CosmosAccountAddress",
            blockchainAccountID: address,
            controller: "{id}",
          }),
        }),
        ixo.iid.v1beta1.Verification.fromPartial({
          relationships: ["authentication"],
          method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
            id: did + "#" + address,
            type: "CosmosAccountAddress",
            blockchainAccountID: address,
            controller: "{id}",
          }),
        }),
      ],
      signer: signerAddress,
      controllers: [did],
    }),
  };

  const response = await client.signAndBroadcast(signerAddress, [message], fee);
  return response;
};
