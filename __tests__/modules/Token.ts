import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";
import { createClient, getUser, ixo } from "../helpers/common";
import { fee, WalletUsers } from "../helpers/constants";

export const CreateToken = async (
  name: string,
  description: string,
  cap: number,
  token_class: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgCreateToken",
    value: ixo.token.v1beta1.MsgCreateToken.fromPartial({
      minterDid: did,
      minterAddress: myAddress,
      name,
      description,
      image:
        "https://static.javatpoint.com/business/images/carbon-credits-and-how-they-can-offset-your-carbon-footprint.jpg",
      tokenType: "ixo1155",
      cap: cap.toString(),
      class: token_class,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const MintToken = async (
  contractAddress: string,
  batches: {
    name: string;
    index: string;
    amount: number;
    collection: string;
    tokenData?: TokenData[];
  }[]
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgMintToken",
    value: ixo.token.v1beta1.MsgMintToken.fromPartial({
      minterDid: did,
      minterAddress: myAddress,
      contractAddress: contractAddress,
      ownerDid: did,
      mintBatch: batches.map((b) =>
        ixo.token.v1beta1.MintBatch.fromPartial({
          name: b.name,
          index: b.index,
          collection: b.collection,
          tokenData: b.tokenData,
          amount: b.amount.toString(),
        })
      ),
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
