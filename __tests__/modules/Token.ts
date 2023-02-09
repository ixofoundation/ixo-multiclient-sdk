import Long from "long";
import { createClient, getUser, ixo } from "../helpers/common";
import { constants, fee, WalletUsers } from "../helpers/constants";

export const SetupMinter = async (
  signer: WalletUsers = WalletUsers.tester,
  type: "cw721" | "cw1155" | "cw20" = "cw20"
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgSetupMinter",
    value: ixo.token.v1beta1.MsgSetupMinter.fromPartial({
      minterDid: did,
      minterAddress: myAddress,
      name: "name",
      description: "description",
      ...(type === "cw721"
        ? {
            cw721: ixo.token.v1beta1.SetupCw721.fromPartial({
              symbol: "symbol",
            }),
          }
        : type === "cw1155"
        ? {
            cw1155: ixo.token.v1beta1.SetupCw1155.fromPartial({}),
          }
        : {
            cw20: ixo.token.v1beta1.SetupCw20.fromPartial({
              symbol: "symbol",
              decimals: 6,
            }),
          }),
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const MintToken = async (
  contractAddress: string,
  type: "cw721" | "cw1155" | "cw20" = "cw20"
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
      ...(type === "cw721"
        ? {
            cw721: ixo.token.v1beta1.MintCw721.fromPartial({
              id: "id",
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
            }),
          }
        : type === "cw1155"
        ? {
            cw1155: ixo.token.v1beta1.MintCw1155.fromPartial({
              id: "id",
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
              value: Long.fromNumber(1),
            }),
          }
        : {
            cw20: ixo.token.v1beta1.MintCw20.fromPartial({
              amount: Long.fromNumber(30),
            }),
          }),
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
