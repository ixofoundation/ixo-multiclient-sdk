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

export const BankSendTrx = async (
  amount = Math.pow(10, 6),
  fromUser = WalletUsers.random,
  toUser = WalletUsers.tester
) => {
  const client = await createClient(getUser(fromUser));

  const fromAddress = (await getUser(fromUser).getAccounts())[0].address;
  const toAddress = (await getUser(toUser).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: cosmos.bank.v1beta1.MsgSend.fromPartial({
      fromAddress,
      toAddress,
      amount: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: amount.toString(),
          denom: "uixo",
        }),
      ],
    }),
  };

  const response = await client.signAndBroadcast(fromAddress, [message], fee);
  return response;
};

export const MsgSubmitProposalStoreCW = async (
  contract: string = "cw721",
  pathList?: string[]
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
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: cosmwasm.wasm.v1.StoreCodeProposal.encode(
          cosmwasm.wasm.v1.StoreCodeProposal.fromPartial({
            title: `Upload ${contract} smart contract`,
            description: "Description",
            runAs: myAddress,
            wasmByteCode: new Uint8Array(
              getFileFromPath(
                pathList ?? ["contracts", "ixo", `${contract}.wasm`],
                ""
              )
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
          amount: "1000000000",
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

export const MsgSubmitProposalUpdateTokenParams = async (
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
          amount: "1000000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      content: {
        typeUrl: "/ixo.token.v1beta1.SetTokenContractCodes",
        value: ixo.token.v1beta1.SetTokenContractCodes.encode(
          ixo.token.v1beta1.SetTokenContractCodes.fromPartial({
            ixo1155ContractCode: Long.fromNumber(nftContractCodeId),
          })
        ).finish(),
      },
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
