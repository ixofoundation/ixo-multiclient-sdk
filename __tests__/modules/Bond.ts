import base58 from "bs58";
import { createClient, getUser, ixo, cosmos } from "../helpers/common";
import { constants, fee, WalletUsers } from "../helpers/constants";

export const CreateBond = async (allowSells: boolean) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;
  const feeReserveAddress = myAddress;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgCreateBond",
    value: ixo.bonds.v1beta1.MsgCreateBond.fromPartial({
      bondDid: bondDid,
      token: constants.bondToken,
      name: `Bond ${constants.bondToken}`,
      description: `Description about ${constants.bondToken}`,
      creatorDid: did,
      controllerDid: did,
      functionType: "augmented_function",
      // functionType: "bonding_function",
      functionParameters: [
        ixo.bonds.v1beta1.FunctionParam.fromPartial({
          param: "p0",
          value: "1000000000000000000", //1
        }),
        ixo.bonds.v1beta1.FunctionParam.fromPartial({
          param: "theta",
          value: "0",
        }),
        ixo.bonds.v1beta1.FunctionParam.fromPartial({
          param: "kappa",
          value: "3000000000000000000", //3
        }),
        ixo.bonds.v1beta1.FunctionParam.fromPartial({
          param: "d0",
          value: "1000000000000000000000", // 1 000 (initial batch before bond go into open state)
        }),
      ],
      reserveTokens: [constants.bondReserveToken],
      txFeePercentage: "0",
      exitFeePercentage: "0",
      feeAddress: feeReserveAddress,
      reserveWithdrawalAddress: feeReserveAddress,
      maxSupply: cosmos.base.v1beta1.Coin.fromPartial({
        denom: constants.bondToken,
        amount: "1000000000000",
      }),
      orderQuantityLimits: [],
      sanityRate: "0",
      sanityMarginPercentage: "0",
      allowSells: allowSells,
      allowReserveWithdrawals: !allowSells,
      alphaBond: true,
      batchBlocks: "1",
      outcomePayment: "1000000",
      creatorAddress: myAddress,
      oracleDid: did,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const EditBond = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgEditBond",
    value: ixo.bonds.v1beta1.MsgEditBond.fromPartial({
      bondDid: bondDid,
      name: `Bond ${constants.bondToken}`,
      description: `Description about ${constants.bondToken} edited`,
      sanityRate: "0",
      sanityMarginPercentage: "0",
      editorDid: did,
      editorAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

/**
 * @param alpha alpha string number as e18
 */
export const SetNextAlpha = async (alpha: string = "520000000000000000") => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgSetNextAlpha",
    value: ixo.bonds.v1beta1.MsgSetNextAlpha.fromPartial({
      bondDid: bondDid,
      alpha,
      delta: "",
      oracleDid: did,
      oracleAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

/**
 * @param state one of 'HATCH' | 'OPEN' | 'SETTLE' | 'FAILED'
 */
export const UpdateBondState = async (
  state: "HATCH" | "OPEN" | "SETTLE" | "FAILED"
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgUpdateBondState",
    value: ixo.bonds.v1beta1.MsgUpdateBondState.fromPartial({
      bondDid: bondDid,
      state: state,
      editorDid: did,
      editorAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const Buy = async (
  signer: WalletUsers = WalletUsers.tester,
  amount: number
) => {
  const client = await createClient(getUser(signer));

  const user = getUser(signer);
  const account = (await user.getAccounts())[0];
  const myAddress = account.address;
  const did = user.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgBuy",
    value: ixo.bonds.v1beta1.MsgBuy.fromPartial({
      buyerDid: did,
      buyerAddress: myAddress,
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        denom: constants.bondToken,
        amount: amount.toString(),
      }),
      maxPrices: [
        cosmos.base.v1beta1.Coin.fromPartial({
          denom: constants.bondReserveToken,
          amount: "1000000",
        }),
      ],
      bondDid: bondDid,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const Sell = async (
  signer: WalletUsers = WalletUsers.tester,
  amount: number
) => {
  const client = await createClient(getUser(signer));

  const user = getUser(signer);
  const account = (await user.getAccounts())[0];
  const myAddress = account.address;
  const did = user.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgSell",
    value: ixo.bonds.v1beta1.MsgSell.fromPartial({
      sellerDid: did,
      sellerAddress: myAddress,
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        denom: constants.bondToken,
        amount: amount.toString(),
      }),
      bondDid: bondDid,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

// Needs swapper function
export const Swap = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgSwap",
    value: ixo.bonds.v1beta1.MsgSwap.fromPartial({
      swapperDid: did,
      swapperAddress: myAddress,
      bondDid: bondDid,
      from: cosmos.base.v1beta1.Coin.fromPartial({
        denom: "",
        amount: "",
      }),
      toToken: "",
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const MakeOutcomePayment = async (amount: number) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgMakeOutcomePayment",
    value: ixo.bonds.v1beta1.MsgMakeOutcomePayment.fromPartial({
      senderDid: did,
      senderAddress: myAddress,
      amount: amount.toString(),
      bondDid: bondDid,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const WithdrawShare = async (
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const user = getUser(signer);
  const account = (await user.getAccounts())[0];
  const myAddress = account.address;
  const did = user.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgWithdrawShare",
    value: ixo.bonds.v1beta1.MsgWithdrawShare.fromPartial({
      recipientDid: did,
      bondDid: bondDid,
      recipientAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const WithdrawReserve = async (
  signer: WalletUsers = WalletUsers.tester,
  amount: number
) => {
  const client = await createClient(getUser(signer));

  const user = getUser(signer);
  const account = (await user.getAccounts())[0];
  const myAddress = account.address;
  const did = user.did + "#" + base58.encode(account.pubkey);

  const bond = getUser(WalletUsers.bond);
  const bondDid = bond.did;

  const message = {
    typeUrl: "/ixo.bonds.v1beta1.MsgWithdrawReserve",
    value: ixo.bonds.v1beta1.MsgWithdrawReserve.fromPartial({
      withdrawerDid: did,
      withdrawerAddress: myAddress,
      amount: [
        cosmos.base.v1beta1.Coin.fromPartial({
          denom: constants.bondReserveToken,
          amount: amount.toString(),
        }),
      ],
      bondDid: bondDid,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
