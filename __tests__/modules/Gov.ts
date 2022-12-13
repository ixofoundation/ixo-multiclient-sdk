import { fee } from "../helpers/constants";
import { createClient, getUser, cosmos } from "../helpers/common";

export const MsgSubmitProposal = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    value: cosmos.gov.v1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "1000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      messages: [],
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
