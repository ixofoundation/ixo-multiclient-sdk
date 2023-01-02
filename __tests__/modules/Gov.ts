import { fee } from "../helpers/constants";
import { createClient, getUser, cosmos, cosmwasm } from "../helpers/common";

const fs = require("fs");
const path = require("path");

export const MsgSubmitProposal = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const contractPath = path.resolve(
    __dirname,
    "..",
    "..",
    "assets",
    "cw721.wasm"
  );
  const contractBuffer = fs.readFileSync(contractPath);

  const message = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "1000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      content: {
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: cosmwasm.wasm.v1.StoreCodeProposal.encode(
          cosmwasm.wasm.v1.StoreCodeProposal.fromPartial({
            title: "Upload cw721 smart contract",
            description: "Description",
            runAs: myAddress,
            wasmByteCode: new Uint8Array(contractBuffer),
            instantiatePermission: cosmwasm.wasm.v1.AccessConfig.fromPartial({
              permission: cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_EVERYBODY,
            }),
            unpinCode: false,
          })
        ).finish(),
      },
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
