import Long from "long";

import { fee } from "./constants";
import {
  createClient,
  getUser,
  cosmos,
  ibc,
  createQueryClient,
} from "./common";

export const IbcTransferTrx = async (receiverAddress: string) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const osmosisQueryClient = await createQueryClient(
    false,
    "https://rpc.osmosis.zone/"
  );
  const channels = await osmosisQueryClient.ibc.core.channel.v1.channels();
  // console.log(channels);

  // ixo(channel-4) linked to osmo(channel-38) with port 'transfer'
  const message = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    value: ibc.applications.transfer.v1.MsgTransfer.fromPartial({
      sourcePort: "transfer",
      sourceChannel: "channel-4",
      sender: myAddress,
      receiver: receiverAddress,
      token: cosmos.base.v1beta1.Coin.fromPartial({
        amount: "150000",
        denom: "uixo",
      }),
      timeoutHeight: ibc.core.client.v1.Height.fromPartial({
        revisionHeight: Long.fromNumber(
          (channels.height?.revisionHeight.low ?? 0) + 7
        ),
        revisionNumber: channels.height?.revisionNumber,
      }),
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
