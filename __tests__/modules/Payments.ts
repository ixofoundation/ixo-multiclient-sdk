import Long from "long";
import { createClient, getUser, ixo, cosmos } from "./common";
import { constants, fee, WalletUsers } from "./constants";

export const CreatePaymentTemplate = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.payments.v1.MsgCreatePaymentTemplate",
    value: ixo.payments.v1.MsgCreatePaymentTemplate.fromPartial({
      creatorDid: did,
      creatorAddress: myAddress,
      paymentTemplate: ixo.payments.v1.PaymentTemplate.fromPartial({
        id: constants.paymentTemplateId,
        paymentAmount: [
          cosmos.base.v1beta1.Coin.fromPartial({
            denom: "uixo",
            amount: "500000",
          }),
        ],
        paymentMinimum: [
          cosmos.base.v1beta1.Coin.fromPartial({
            denom: "uixo",
            amount: "100000",
          }),
        ],
        paymentMaximum: [
          cosmos.base.v1beta1.Coin.fromPartial({
            denom: "uixo",
            amount: "500000000",
          }),
        ],
        discounts: [
          ixo.payments.v1.Discount.fromPartial({
            id: constants.paymentDiscountId,
            percent: "5000000000000000000",
          }),
        ],
      }),
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

/**
 * Distribution shares must add up to 100, and inputs is to power 18
 */
export const CreatePaymentContract = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const alice = getUser(WalletUsers.alice);
  const aliceAccount = (await alice.getAccounts())[0];

  const message = {
    typeUrl: "/ixo.payments.v1.MsgCreatePaymentContract",
    value: ixo.payments.v1.MsgCreatePaymentContract.fromPartial({
      creatorDid: did,
      paymentTemplateId: constants.paymentTemplateId,
      paymentContractId: constants.paymentContractId,
      payer: myAddress,
      recipients: [
        ixo.payments.v1.DistributionShare.fromPartial({
          address: aliceAccount.address,
          percentage: "100000000000000000000",
        }),
      ],
      discountId: constants.paymentDiscountId,
      canDeauthorise: true,
      creatorAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const SetPaymentContractAuthorization = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.payments.v1.MsgSetPaymentContractAuthorisation",
    value: ixo.payments.v1.MsgSetPaymentContractAuthorisation.fromPartial({
      paymentContractId: constants.paymentContractId,
      payerDid: did,
      authorised: true,
      payerAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateSubscription = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.payments.v1.MsgCreateSubscription",
    value: ixo.payments.v1.MsgCreateSubscription.fromPartial({
      creatorDid: did,
      subscriptionId: constants.paymentSubscripionId,
      paymentContractId: constants.paymentContractId,
      maxPeriods: "3",
      period: {
        typeUrl: "/ixo.payments.v1.BlockPeriod",
        value: ixo.payments.v1.BlockPeriod.encode(
          ixo.payments.v1.BlockPeriod.fromPartial({
            periodLength: Long.fromNumber(3),
            periodStartBlock: Long.fromNumber(5),
          })
        ).finish(),
      },
      creatorAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const GrantDiscount = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.payments.v1.MsgGrantDiscount",
    value: ixo.payments.v1.MsgGrantDiscount.fromPartial({
      senderDid: did,
      paymentContractId: constants.paymentContractId,
      discountId: constants.paymentDiscountId,
      recipient: constants.paymentContractRecipient.address,
      senderAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const RevokeDiscount = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.payments.v1.MsgRevokeDiscount",
    value: ixo.payments.v1.MsgRevokeDiscount.fromPartial({
      senderDid: did,
      paymentContractId: constants.paymentContractId,
      holder: myAddress,
      senderAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const EffectPayment = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.payments.v1.MsgEffectPayment",
    value: ixo.payments.v1.MsgEffectPayment.fromPartial({
      senderDid: did,
      paymentContractId: constants.paymentContractId,
      senderAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
