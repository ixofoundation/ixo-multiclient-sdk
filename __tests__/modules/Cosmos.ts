import { fee, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  cosmwasm,
  queryClient,
  utils,
  ixo,
  getFileFromPath,
} from "../helpers/common";
import Long from "long";

export const BankSendTrx = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  // const alice = getUser(WalletUsers.tester, "secp");
  // const aliceAccount = (await alice.getAccounts())[0];
  const alice = getUser(WalletUsers.alice);
  const aliceAccount = (await alice.getAccounts())[0];

  const message = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: cosmos.bank.v1beta1.MsgSend.fromPartial({
      fromAddress: myAddress,
      toAddress: aliceAccount.address,
      amount: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "1000000",
          denom: "uixo",
        }),
      ],
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const MsgSubmitProposalStoreCW721 = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "10000000000",
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
            wasmByteCode: new Uint8Array(
              getFileFromPath(["contracts", "ixo", "cw721.wasm"], "")
            ),
            instantiatePermission: cosmwasm.wasm.v1.AccessConfig.fromPartial({
              permission: cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_EVERYBODY,
            }),
            unpinCode: false,
          })
        ).finish(),
      },
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], {
    amount: [
      {
        denom: "uixo",
        amount: "10000000",
      },
    ],
    gas: "100000000",
  });
  return response;
};

export const MsgVote = async (proposalId: number) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    value: cosmos.gov.v1beta1.MsgVote.fromPartial({
      option: cosmos.gov.v1beta1.VoteOption.VOTE_OPTION_YES,
      proposalId: Long.fromNumber(proposalId),
      voter: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const MsgSubmitProposalUpdateEntityParams = async (
  nftContractCodeId: number
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "10000000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      content: {
        typeUrl: "/ixo.entity.v1beta1.InitializeNftContract",
        value: ixo.entity.v1beta1.InitializeNftContract.encode(
          ixo.entity.v1beta1.InitializeNftContract.fromPartial({
            NftContractCodeId: Long.fromNumber(nftContractCodeId),
            NftMinterAddress: myAddress,
          })
        ).finish(),
      },
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
