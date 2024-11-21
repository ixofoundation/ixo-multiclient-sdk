import { getFee, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  queryClient,
  cosmwasm,
  getFileFromPath,
  ixo,
} from "../helpers/common";

export const MsgSubmitProposalUpdateLiquidStakeParams = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const govModAccRes =
    await queryClient.cosmos.auth.v1beta1.moduleAccountByName({
      name: "gov",
    });
  if (!govModAccRes?.account?.value)
    throw new Error("gov module account not found");
  const govModAcc = client.registry.decode(govModAccRes.account)?.baseAccount
    ?.address;
  // console.log({ govModAcc });

  const message = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    value: cosmos.gov.v1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "10000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      title: `Update Liquid Staking WhitelistAdminAddress`,
      summary: "Update Liquid Staking WhitelistAdminAddress",
      expedited: false,
      messages: [
        {
          typeUrl: "/ixo.liquidstake.v1beta1.MsgUpdateParams",
          value: ixo.liquidstake.v1beta1.MsgUpdateParams.encode(
            ixo.liquidstake.v1beta1.MsgUpdateParams.fromPartial({
              authority: govModAcc,
              params: ixo.liquidstake.v1beta1.Params.fromPartial({
                unstakeFeeRate: "0",
                autocompoundFeeRate: "0",
                minLiquidStakeAmount: "10000",
                feeAccountAddress: myAddress,
                whitelistAdminAddress: myAddress,
                // unchanged but cant be blank
                liquidBondDenom: "uixo",
              }),
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};

export const MsgUpdateLiquidStakeWhitelist = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
    value: ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators.fromPartial({
      authority: myAddress,
      whitelistedValidators: [
        {
          // addrss of the validator for local chain spinup
          validatorAddress: "ixovaloper1n8yrmeatsk74dw0zs95ess9sgzptd6thzncf20",
          targetWeight: "10000",
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};

export const MsgLiquidStake = async (amount = "10000000000") => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgLiquidStake",
    value: ixo.liquidstake.v1beta1.MsgLiquidStake.fromPartial({
      delegatorAddress: myAddress,
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        amount,
        denom: "uixo",
      }),
    }),
  };

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};

export const MsgLiquidUnstake = async (amount = "10000000000") => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgLiquidUnstake",
    value: ixo.liquidstake.v1beta1.MsgLiquidUnstake.fromPartial({
      delegatorAddress: myAddress,
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        amount,
        denom: "uzero",
      }),
    }),
  };

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};
