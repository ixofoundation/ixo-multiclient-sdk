import { constants, getFee, keyType, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  ixo,
  queryClient,
  addDays,
  utils,
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
import {
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../src/messages/iid";
import { SimulateRequest } from "../../src/codegen/cosmos/tx/v1beta1/service";

export const MsgAddAuthenticator = async () => {
  const signer = WalletUsers.tester;
  const tester = getUser(signer);
  const client = await createClient(tester);
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
  const signer = WalletUsers.tester;
  const tester = getUser(signer);
  const client = await createClient(tester);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;
  const myPubKey = account.pubkey;

  // Bob is the actual signer on behalf of tester through testers smartaccount authenticator
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
            amount: "10",
            denom: "uixo",
          }),
        ],
      }),
    },
    // {
    //   typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    //   value: cosmos.bank.v1beta1.MsgSend.fromPartial({
    //     fromAddress: myAddress,
    //     toAddress: bobAccount.address,
    //     amount: [
    //       cosmos.base.v1beta1.Coin.fromPartial({
    //         amount: "1000",
    //         denom: "uixo",
    //       }),
    //     ],
    //   }),
    // },
    // {
    //   typeUrl: "/ixo.claims.v1beta1.MsgClaimIntent",
    //   value: ixo.claims.v1beta1.MsgClaimIntent.fromPartial({
    //     agentAddress: myAddress,
    //     agentDid: tester.did,
    //     collectionId: "3",
    //   }),
    // },
    // {
    //   typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    //   value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
    //     entityType: "type",
    //     context: createAgentIidContext(),
    //     verification: createIidVerificationMethods({
    //       did,
    //       pubkey: myPubKey,
    //       address: myAddress,
    //       controller: did,
    //       type: keyType,
    //     }),
    //     controller: [did],
    //     ownerDid: did,
    //     ownerAddress: myAddress,
    //     relayerNode: did,
    //   }),
    // },
    // {
    //   typeUrl: "/ixo.entity.v1beta1.MsgTransferEntity",
    //   value: ixo.entity.v1beta1.MsgTransferEntity.fromPartial({
    //     id: "did:ixo:entity:065ba0b99948e2e8ff3228836dee423b",
    //     ownerDid: did,
    //     ownerAddress: myAddress,
    //     recipientDid: bob.did,
    //   }),
    // },
    // {
    //   typeUrl: "/ixo.iid.v1beta1.MsgAddIidContext",
    //   value: ixo.iid.v1beta1.MsgAddIidContext.fromPartial({
    //     id: did,
    //     context: ixo.iid.v1beta1.Context.fromPartial({
    //       key: "haha",
    //       val: "val",
    //     }),
    //     signer: myAddress,
    //   }),
    // },
    // testing, bob's key is signing for alice's address, alice has the authz from the admin account
    // {
    //   typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    //   value: cosmos.authz.v1beta1.MsgExec.fromPartial({
    //     grantee: myAddress,
    //     msgs: [
    //       {
    //         typeUrl: "/ixo.claims.v1beta1.MsgCreateClaimAuthorization",
    //         value: ixo.claims.v1beta1.MsgCreateClaimAuthorization.encode(
    //           ixo.claims.v1beta1.MsgCreateClaimAuthorization.fromPartial({
    //             creatorAddress: myAddress,
    //             creatorDid: did,
    //             adminAddress: "ixo1wtjec5dt9yvq4mflk092dtpu063vea6dt93hn6",
    //             granteeAddress: (
    //               await getUser(WalletUsers.bob).getAccounts()
    //             )[0].address,
    //             collectionId: "3",
    //             agentQuota: Long.fromNumber(1),
    //             maxAmount: [],
    //             maxCw20Payment: [],
    //             intentDurationNs: utils.proto.toDuration(
    //               (1000000000 * 60).toString()
    //             ),
    //             expiration: utils.proto.toTimestamp(
    //               addDays(new Date(), 365 * 3)
    //             ),
    //             authType:
    //               ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
    //             beforeDate: utils.proto.toTimestamp(addDays(new Date(), 365)),
    //           })
    //         ).finish(),
    //       },
    //     ],
    //   }),
    // },
  ];

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

  // get fee
  const fee = await client.getUsedFee(myAddress, messages, "auto", memo);
  console.log("fee", fee);
  const gasLimit = Int53.fromString(fee.gas).toNumber();

  // get pubkey
  const pubkey = encodePubkey({
    type:
      bobAccount.algo === "secp256k1"
        ? pubkeyType.secp256k1
        : pubkeyType.ed25519,
    // value: toBase64(bobAccount.pubkey),
    value: "",
  });

  // make auth info bytes
  const authInfoBytes = makeAuthInfoBytes(
    [{ pubkey, sequence }],
    fee.amount,
    gasLimit,
    // "ixo1fewufqrjy0r8kercq3wazsr7v0cymhvgteq442", // alice
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

  // create placeholder transaction document
  const rawUnsignedTx = TxRaw.encode({
    bodyBytes: txBodyBytes,
    authInfoBytes: authInfoBytes,
    // Because of the validation of tx itself, the signature must exist.
    // However, since they do not actually verify the signature, it is okay to use any value.
    signatures: [new Uint8Array(64)],
  }).finish();

  const simulatedFee = await queryClient.cosmos.tx.v1beta1.simulate({
    txBytes: rawUnsignedTx,
  });
  console.log("simulatedFee", simulatedFee.gasInfo);
  // if (!!1) throw new Error("stop here");

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
