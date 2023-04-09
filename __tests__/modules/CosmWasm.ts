import { fee, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  cosmwasm,
  queryClient,
  utils,
  getFileFromPath,
} from "../helpers/common";
import Long from "long";

export const WasmStoreTrx = async (
  contract: string = "cw721",
  pathList?: string[]
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
    value: cosmwasm.wasm.v1.MsgStoreCode.fromPartial({
      sender: myAddress,
      wasmByteCode: new Uint8Array(
        getFileFromPath(
          pathList ?? ["contracts", "ixo", `${contract}.wasm`],
          ""
        )
      ),
      instantiatePermission: cosmwasm.wasm.v1.AccessConfig.fromPartial({
        permission: cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_EVERYBODY,
      }),
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const WasmInstantiateTrx = async (
  codeId: number,
  msg: string,
  funds = 1
) => {
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
          amount: String(funds),
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
  signer: WalletUsers = WalletUsers.tester,
  funds = {
    amount: "1",
    denom: "uixo",
  }
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    value: cosmwasm.wasm.v1.MsgExecuteContract.fromPartial({
      contract: contractAddress,
      funds: [cosmos.base.v1beta1.Coin.fromPartial(funds)],
      msg: utils.conversions.JsonToArray(msg),
      sender: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
