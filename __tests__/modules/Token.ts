import { createClient, getUser, ixo } from "./common";
import { constants, fee, WalletUsers } from "./constants";

export const CreateToken = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgCreateToken",
    value: ixo.token.v1beta1.MsgCreateToken.fromPartial({
      ownerDid: did,
      ownerAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const TransferToken = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const alice = getUser(WalletUsers.alice);

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgTransferToken",
    value: ixo.token.v1beta1.MsgTransferToken.fromPartial({
      ownerDid: did,
      ownerAddress: myAddress,
      recipientDid: alice.did,
      tokenDid: "",
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
