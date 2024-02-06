import { fee, getFee, KeyTypes, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  cosmwasm,
  queryClient,
  utils,
  ixo,
  getFileFromPath,
  timeout,
} from "../helpers/common";
import Long from "long";

export const BankSendTrx = async (
  amount = Math.pow(10, 10),
  fromUser = WalletUsers.alice,
  toUser = WalletUsers.tester,
  fromWalletKeyType: KeyTypes = "secp",
  toWalletKeyType: KeyTypes = "secp",
  toAddresss?: string
) => {
  const client = await createClient(getUser(fromUser, fromWalletKeyType));

  const fromAddress = (
    await getUser(fromUser, fromWalletKeyType).getAccounts()
  )[0].address;
  const toAddress =
    toAddresss ||
    (await getUser(toUser, toWalletKeyType).getAccounts())[0].address;

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

  // const response = await client.simulate(fromAddress, [message], undefined);
  // console.dir(response, { depth: null });
  const response = await client.signAndBroadcast(
    fromAddress,
    [message],
    getFee(1, await client.simulate(fromAddress, [message], undefined))
  );
  return response as any;
};

export const MsgSubmitProposalStoreCW = async (
  contract: string = "cw721",
  pathList?: string[],
  signer = WalletUsers.tester,
  timeoutSeconds = 0,
  instantiateAccessType = cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_EVERYBODY
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "10000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      content: {
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: cosmwasm.wasm.v1.StoreCodeProposal.encode(
          cosmwasm.wasm.v1.StoreCodeProposal.fromPartial({
            title: `Upload ${contract} smart contract`,
            description: "A cosmwasm smart contract",
            runAs: myAddress,
            wasmByteCode: new Uint8Array(
              getFileFromPath(
                pathList ?? ["contracts", "ixo", `${contract}.wasm`],
                ""
              )
            ),
            instantiatePermission: cosmwasm.wasm.v1.AccessConfig.fromPartial({
              permission: instantiateAccessType,
              addresses:
                instantiateAccessType ==
                cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES
                  ? [myAddress]
                  : undefined,
            }),
            unpinCode: false,
          })
        ).finish(),
      },
    }),
  };

  await timeout(timeoutSeconds * 1000);

  const response = await client.signAndBroadcast(myAddress, [message], {
    amount: [
      {
        denom: "uixo",
        amount: "3000000",
      },
    ],
    gas: "100000000",
  });
  return response;
};

export const MsgSubmitProposalStoreCWMultiple = async (
  contracts: { name: string; path: string[] }[],
  instantiateAccessType = cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_EVERYBODY
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const messages = contracts.map((c) => ({
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "10000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      content: {
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: cosmwasm.wasm.v1.StoreCodeProposal.encode(
          cosmwasm.wasm.v1.StoreCodeProposal.fromPartial({
            title: `Upload ${c.name} smart contract`,
            description: "Description",
            runAs: myAddress,
            wasmByteCode: new Uint8Array(getFileFromPath(c.path, "")),
            instantiatePermission: cosmwasm.wasm.v1.AccessConfig.fromPartial({
              permission: instantiateAccessType,
              addresses:
                instantiateAccessType ==
                cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES
                  ? [myAddress]
                  : undefined,
            }),
            unpinCode: false,
          })
        ).finish(),
      },
    }),
  }));

  const response = await client.signAndBroadcast(myAddress, messages, {
    amount: [
      {
        denom: "uixo",
        amount: (contracts.length * 3000000).toString(),
      },
    ],
    gas: (contracts.length * 100000000).toString(),
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

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};

export const MsgSubmitProposalUpdateEntityParams = async (
  nftContractCodeId: number,
  signer = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
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

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
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

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};

export const MsgDeposit = async (
  proposalId: number,
  amount = "10000000000"
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
    value: cosmos.gov.v1beta1.MsgDeposit.fromPartial({
      proposalId: Long.fromNumber(proposalId),
      depositor: myAddress,
      amount: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount,
          denom: "uixo",
        }),
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

export const MsgProposalText = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
      proposer: myAddress,
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "1000000",
          denom: "uixo",
        }),
      ],
      content: {
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: cosmos.gov.v1beta1.TextProposal.encode(
          cosmos.gov.v1beta1.TextProposal.fromPartial({
            title: "Test Proposal",
            description: "Test Proposal Description",
          })
        ).finish(),
      },
    }),
  };

  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};
