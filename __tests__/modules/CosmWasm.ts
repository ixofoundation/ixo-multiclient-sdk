import { fee, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  cosmwasm,
  queryClient,
  utils,
} from "../helpers/common";
import Long from "long";

export const WasmInstantiateTrx = async (codeId: number, msg: string) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    value: cosmwasm.wasm.v1.MsgInstantiateContract.fromPartial({
      admin: myAddress,
      codeId: Long.fromNumber(codeId),
      funds: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "1",
          denom: "uixo",
        }),
      ],
      label: tester.did + "contract" + codeId,
      msg: utils.conversions.JsonToArray(msg),
      sender: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const WasmExecuteTrx = async (
  contractAddress: string,
  msg: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    value: cosmwasm.wasm.v1.MsgExecuteContract.fromPartial({
      contract: contractAddress,
      funds: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "1",
          denom: "uixo",
        }),
      ],
      msg: utils.conversions.JsonToArray(msg),
      sender: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
