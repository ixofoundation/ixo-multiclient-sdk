import {
  createClient,
  getUser,
  cosmos,
  utils,
  addDays,
} from "../helpers/common";
import { getFee, WalletUsers } from "../helpers/constants";

export const MsgGrantSend = async (
  amount = "10000000",
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(granter));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granterAddress,
      grantee: granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
          value: cosmos.bank.v1beta1.SendAuthorization.encode(
            cosmos.bank.v1beta1.SendAuthorization.fromPartial({
              spendLimit: [
                cosmos.base.v1beta1.Coin.fromPartial({
                  amount,
                  denom: "uixo",
                }),
              ],
            })
          ).finish(),
        },
        expiration: utils.proto.toTimestamp(addDays(new Date(), 365)),
      }),
    }),
  };

  const response = await client.signAndBroadcast(
    granterAddress,
    [message],
    getFee(1, await client.simulate(granterAddress, [message], undefined))
  );
  return response;
};

export const MsgExecSend = async (
  amount = 1000,
  granterAddress?: string,
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

  const granterrAddress =
    granterAddress || (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [
        {
          typeUrl: "/cosmos.bank.v1beta1.MsgSend",
          value: cosmos.bank.v1beta1.MsgSend.encode(
            cosmos.bank.v1beta1.MsgSend.fromPartial({
              amount: [
                cosmos.base.v1beta1.Coin.fromPartial({
                  amount: amount.toString(),
                  denom: "uixo",
                }),
              ],
              fromAddress: granterrAddress,
              toAddress: granteeAddress,
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(
    granteeAddress,
    [message],
    getFee(1, await client.simulate(granteeAddress, [message], undefined))
  );
  return response;
};

export const MsgGrantAllowance = async (
  granter = WalletUsers.tester,
  grantees: string[] = []
) => {
  const client = await createClient(getUser(granter));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(WalletUsers.alice).getAccounts())[0]
    .address;

  if (grantees.length === 0) grantees = [granteeAddress];

  const messages = grantees.map((grantee) => ({
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    value: cosmos.feegrant.v1beta1.MsgGrantAllowance.fromPartial({
      granter: granterAddress,
      grantee: grantee,
      // allowance: {
      //   typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
      //   value: cosmos.feegrant.v1beta1.PeriodicAllowance.encode(
      //     cosmos.feegrant.v1beta1.PeriodicAllowance.fromPartial({
      //       periodSpendLimit: [
      //         cosmos.base.v1beta1.Coin.fromPartial({
      //           amount: "1000000",
      //           denom: "uixo",
      //         }),
      //       ],
      //       period: utils.proto.toDuration(
      //         String(1000000000 * 60 * 60 * 24 * 30)
      //       ),
      //     })
      //   ).finish(),
      // },
      allowance: {
        typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        value: cosmos.feegrant.v1beta1.BasicAllowance.encode(
          cosmos.feegrant.v1beta1.BasicAllowance.fromPartial({
            // spendLimit: [
            //   cosmos.base.v1beta1.Coin.fromPartial({
            //     amount: "1000000",
            //     denom: "uixo",
            //   }),
            // ],
            expiration: utils.proto.toTimestamp(addDays(new Date(), 30)),
          })
        ).finish(),
      },
    }),
  }));

  const response = await client.signAndBroadcast(
    granterAddress,
    messages,
    getFee(1, await client.simulate(granterAddress, messages, undefined))
  );
  return response;
};

export const MsgRevokeAllowance = async (
  granter = WalletUsers.tester,
  grantees: string[] = []
) => {
  const client = await createClient(getUser(granter));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(WalletUsers.alice).getAccounts())[0]
    .address;

  if (grantees.length === 0) grantees = [granteeAddress];

  const messages = grantees.map((grantee) => ({
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    value: cosmos.feegrant.v1beta1.MsgRevokeAllowance.fromPartial({
      granter: granterAddress,
      grantee: grantee,
    }),
  }));

  const response = await client.signAndBroadcast(
    granterAddress,
    messages,
    getFee(1, await client.simulate(granterAddress, messages, undefined))
  );
  return response;
};
