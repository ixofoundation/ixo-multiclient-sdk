import { getFee, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  ixo,
  queryClient,
} from "../helpers/common";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Int53 } from "@cosmjs/math";
import { encodePubkey, makeAuthInfoBytes } from "@cosmjs/proto-signing";
// @ts-ignore
import Long from "long";
import base58 from "bs58";
import { pubkeyType } from "@cosmjs/amino";
import { makeSignDoc } from "@cosmjs/proto-signing";
import { TxRaw } from "../../src/codegen/cosmos/tx/v1beta1/tx";
import { TxExtension } from "../../src/codegen/ixo/smartaccount/v1beta1/tx";

export const MsgAddAuthenticator = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const bob = getUser(WalletUsers.bob);
  const bobAccount = (await bob.getAccounts())[0];
  const bobPubKey = bobAccount.pubkey;

  const signatureVerification = {
    type: "SignatureVerification",
    data: bobPubKey,
  };

  const message = {
    typeUrl: "/ixo.smartaccount.v1beta1.MsgAddAuthenticator",
    value: ixo.smartaccount.v1beta1.MsgAddAuthenticator.fromPartial({
      sender: myAddress,
      authenticatorType: signatureVerification.type,
      data: signatureVerification.data,
    }),
  };

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  // console.dir(response, { depth: null });
  return response;
};

export const MsgRemoveAuthenticator = async (authenticatorId?: number) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const bob = getUser(WalletUsers.bob);
  const bobAccount = (await bob.getAccounts())[0];

  const authenticators =
    await queryClient.ixo.smartaccount.v1beta1.getAuthenticators({
      account: myAddress,
    });
  const signatureAuthenticator = authenticators.accountAuthenticators?.find(
    (a) =>
      a.type === "SignatureVerification" &&
      base58.encode(a.config) === base58.encode(bobAccount.pubkey)
  );
  if (!signatureAuthenticator)
    throw new Error("Authenticator not found for bob's pubkey");
  const sigAuthId = signatureAuthenticator.id;

  const message = {
    typeUrl: "/ixo.smartaccount.v1beta1.MsgRemoveAuthenticator",
    value: ixo.smartaccount.v1beta1.MsgRemoveAuthenticator.fromPartial({
      sender: myAddress,
      id: authenticatorId ? Long.fromNumber(authenticatorId) : sigAuthId,
    }),
  };

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};

export const MsgSendWithAuthenticator = async () => {
  const client = await createClient();
  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const bob = getUser(WalletUsers.bob);
  const bobAccount = (await bob.getAccounts())[0];

  const authenticators =
    await queryClient.ixo.smartaccount.v1beta1.getAuthenticators({
      account: myAddress,
    });
  const signatureAuthenticator = authenticators.accountAuthenticators?.find(
    (a) =>
      a.type === "SignatureVerification" &&
      base58.encode(a.config) === base58.encode(bobAccount.pubkey)
  );
  if (!signatureAuthenticator)
    throw new Error("Authenticator not found for bob's pubkey");
  const sigAuthId = signatureAuthenticator.id;

  const memo = "SignatureVerification Trx";
  const messages = [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: cosmos.bank.v1beta1.MsgSend.fromPartial({
        fromAddress: myAddress,
        toAddress: bobAccount.address,
        amount: [
          cosmos.base.v1beta1.Coin.fromPartial({
            amount: "1000",
            denom: "uixo",
          }),
        ],
      }),
    },
    // {
    //   typeUrl: "/ixo.claims.v1beta1.MsgClaimIntent",
    //   value: ixo.claims.v1beta1.MsgClaimIntent.fromPartial({
    //     agentAddress: myAddress,
    //     agentDid: tester.did,
    //     collectionId: "3",
    //   }),
    // },
  ];

  // get fee
  const fee = await client.getUsedFee(
    myAddress,
    messages,
    getFee(messages.length, await client.simulate(myAddress, messages, memo)),
    memo
  );
  // get tx data ready
  const { accountNumber, sequence } = await client.getSequence(myAddress);
  const chainId = await client.getChainId();
  const txBodyBytes = client.registry.encodeTxBody({
    messages,
    memo,
    nonCriticalExtensionOptions: [
      {
        typeUrl: "/ixo.smartaccount.v1beta1.TxExtension",
        value: TxExtension.encode({
          selectedAuthenticators: [sigAuthId],
        }).finish(),
      },
    ],
  });
  const gasLimit = Int53.fromString(fee.gas).toNumber();
  const pubkey = encodePubkey({
    type:
      bobAccount.algo === "secp256k1"
        ? pubkeyType.secp256k1
        : pubkeyType.ed25519,
    value: toBase64(bobAccount.pubkey),
  });
  const authInfoBytes = makeAuthInfoBytes(
    [{ pubkey, sequence }],
    fee.amount,
    gasLimit,
    fee.granter,
    fee.payer
  );
  // make sign doc that will be signed
  const signDoc = makeSignDoc(
    txBodyBytes,
    authInfoBytes,
    chainId,
    accountNumber
  );
  // sign with bobs wallet and bobs address as signerAddress, as signDirect looks for key pair for the signerAddress,
  // but the real signerAddress has already been embedded in the signDoc
  const { signature, signed } = await bob.signDirect(
    bobAccount.address,
    signDoc
  );

  // create tx to be broadcasted to chain
  const txRaw = TxRaw.fromPartial({
    bodyBytes: signed.bodyBytes,
    authInfoBytes: signed.authInfoBytes,
    signatures: [fromBase64(signature.signature)],
  });
  const txBytes = TxRaw.encode(txRaw).finish();

  const response = await client.broadcastTx(
    txBytes,
    client.broadcastTimeoutMs,
    client.broadcastPollIntervalMs
  );
  // console.dir(response, { depth: null });
  return response;
};
