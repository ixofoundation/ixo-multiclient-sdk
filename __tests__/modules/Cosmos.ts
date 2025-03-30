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
// @ts-ignore
import Long from "long";

export const BankSendTrx = async (
  amount = Math.pow(10, 10),
  fromUser = WalletUsers.alice,
  toUser = WalletUsers.tester,
  fromWalletKeyType: KeyTypes = "secp",
  toWalletKeyType: KeyTypes = "secp",
  toAddresss?: string,
  denom = "uixo"
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
          denom: denom,
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

export const MsgSubmitProposalStoreCWOld = async (
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
      title: `Upload ${contract} smart contract`,
      summary: "A cosmwasm smart contract",
      expedited: false,
      messages: [
        {
          typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
          value: cosmwasm.wasm.v1.MsgStoreCode.encode(
            cosmwasm.wasm.v1.MsgStoreCode.fromPartial({
              sender: govModAcc,
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
            })
          ).finish(),
        },
      ],
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

export const MsgCancelUnbondingDelegation = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
    value: cosmos.staking.v1beta1.MsgCancelUnbondingDelegation.fromPartial({
      delegatorAddress: myAddress,
      validatorAddress: "ixovaloper1wd02ktcvpananlvd9u6jm3x3ap3vmw59wh7me3",
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        amount: "18885358417",
        denom: "uixo",
      }),
      creationHeight: Long.fromNumber(9311978),
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

export const MsgStake = async (
  user = WalletUsers.tester,
  amount = "10000000000"
) => {
  const client = await createClient(getUser(user));

  const tester = getUser(user);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const validators = await queryClient.cosmos.staking.v1beta1.validators({
    status: "BOND_STATUS_BONDED",
  });
  const firstValidator = validators.validators[0];
  // console.log(firstValidator);
  if (!firstValidator) throw new Error("no validators");

  try {
    const currentDelegations =
      await queryClient.cosmos.staking.v1beta1.delegation({
        delegatorAddr: myAddress,
        validatorAddr: firstValidator.operatorAddress,
      });
    // console.dir(currentDelegations, { depth: null });
    if (!currentDelegations?.delegationResponse)
      throw new Error("no delegations");

    const currentRewards =
      await queryClient.cosmos.distribution.v1beta1.delegationRewards({
        delegatorAddress: myAddress,
        validatorAddress: firstValidator.operatorAddress,
      });
    console.dir(currentRewards, { depth: null });
    if (!currentRewards?.rewards) throw new Error("no rewards");
  } catch (error) {
    console.error(error);
  }
  if (!!1) throw new Error("stop");

  const message = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    value: cosmos.staking.v1beta1.MsgDelegate.fromPartial({
      delegatorAddress: firstValidator.operatorAddress,
      validatorAddress: myAddress,
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

export const MsgSubmitProposalUpdateParams = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const subspace = "mint";
  const key = "EpochIdentifier";
  const value = JSON.stringify("hour");
  // const value = JSON.stringify([
  //   { address: "ixo1jtlkhddkfvzu4p2vl4dvlszzkqvlthghee44jz", weight: "0.5" },
  //   { address: "ixo1ruwxxfsp6jgdk88fmyzyp7s3hs20vqmg5f3htp", weight: "0.5" },
  // ]);

  // const subspace = "smartaccount";
  // // const key = "IsSmartAccountActive";
  // // const value = JSON.stringify(false);
  // const key = "CircuitBreakerControllers";
  // const value = JSON.stringify(["ixo1jtlkhddkfvzu4p2vl4dvlszzkqvlthghee44jz"]);

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
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: cosmos.params.v1beta1.ParameterChangeProposal.encode(
          cosmos.params.v1beta1.ParameterChangeProposal.fromPartial({
            title: "Update params",
            description: "Update params",
            changes: [
              cosmos.params.v1beta1.ParamChange.fromPartial({
                subspace: subspace,
                key: key,
                value: value,
              }),
            ],
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

export const MsgSubmitHyperlaneProposalStoreCW = async (
  proposal: {
    title: string;
    summary: string;
    contract: string;
  },
  signer = WalletUsers.tester,
  timeoutSeconds = 1,
  instantiateAccessType = cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_EVERYBODY
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
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

  const message = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    value: cosmos.gov.v1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "30000000", // match normal or expedited amount needed
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      title: proposal.title,
      summary: proposal.summary,
      expedited: true,
      messages: [
        {
          typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
          value: cosmwasm.wasm.v1.MsgStoreCode.encode(
            cosmwasm.wasm.v1.MsgStoreCode.fromPartial({
              sender: govModAcc,
              wasmByteCode: new Uint8Array(
                getFileFromPath(
                  ["contracts", "hyperlane", `${proposal.contract}.wasm`],
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
            })
          ).finish(),
        },
      ],
    }),
  };
  console.dir(message, { depth: null });

  await timeout(timeoutSeconds * 1000);

  console.log("signing and broadcasting hyperlane wasm contract proposal");
  const response = await client.signAndBroadcast(myAddress, [message], {
    amount: [
      {
        denom: "uixo",
        amount: "5000000",
      },
    ],
    gas: "100000000",
  });
  return response;
};

export const MsgSubmitProposalUpdateGovParams = async () => {
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
      title: `Update Gov Params`,
      summary: "Update Gov Params",
      expedited: false,
      messages: [
        {
          typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
          value: cosmos.gov.v1.MsgUpdateParams.encode(
            cosmos.gov.v1.MsgUpdateParams.fromPartial({
              authority: govModAcc,
              params: cosmos.gov.v1.Params.fromPartial({
                votingPeriod: utils.proto.toDuration("1800000000000s"),
                minDeposit: [
                  cosmos.base.v1beta1.Coin.fromPartial({
                    amount: "10000000",
                    denom: "uixo",
                  }),
                ],
                maxDepositPeriod: utils.proto.toDuration("1800000000000s"),
                quorum: "0.334000000000000000",
                threshold: "0.400000000000000000",
                vetoThreshold: "0.334000000000000000",
                minInitialDepositRatio: "0.100000000000000000",
                proposalCancelRatio: "0.500000000000000000",
                proposalCancelDest: "",
                expeditedThreshold: "0.410000000000000000",
                expeditedMinDeposit: [
                  cosmos.base.v1beta1.Coin.fromPartial({
                    amount: "30000000",
                    denom: "uixo",
                  }),
                ],
                burnVoteQuorum: false,
                burnProposalDepositPrevote: false,
                burnVoteVeto: true,
                minDepositRatio: "0.010000000000000000",
                expeditedVotingPeriod: utils.proto.toDuration("300000000000s"),
              }),
            })
          ).finish(),
        },
      ],
    }),
  };

  console.log("signing and broadcasting gov params update proposal");
  const response = await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
  return response;
};
