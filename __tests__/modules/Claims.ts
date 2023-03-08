import Long from "long";
import { WithdrawPaymentConstraints } from "../../src/codegen/ixo/claims/v1beta1/authz";
import { EvaluationStatus } from "../../src/codegen/ixo/claims/v1beta1/claims";
import {
  addDays,
  createClient,
  getUser,
  ixo,
  utils,
  cosmos,
  queryClient,
} from "../helpers/common";
import { fee, WalletUsers } from "../helpers/constants";

export const CreateCollection = async (
  entityDid: string,
  protocolDid: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgCreateCollection",
    value: ixo.claims.v1beta1.MsgCreateCollection.fromPartial({
      admin: tester,
      entity: entityDid,
      protocol: protocolDid,
      startDate: utils.proto.toTimestamp(new Date()),
      endDate: utils.proto.toTimestamp(addDays(new Date(), 365)),
      quota: Long.fromNumber(100),
      state: ixo.claims.v1beta1.CollectionState.OPEN,
      payments: ixo.claims.v1beta1.Payments.fromPartial({
        approval: ixo.claims.v1beta1.Payment.fromPartial({
          account: tester,
          amount: [
            cosmos.base.v1beta1.Coin.fromPartial({
              amount: "1000000",
              denom: "uixo",
            }),
          ],
          timeoutNs: utils.proto.toDuration((1000000000 * 60 * 0).toString()), // ns * seconds * minutes
          // contract_1155Payment:
          //   ixo.claims.v1beta1.Contract1155Payment.fromPartial({
          //     address:
          //       "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c",
          //     tokenId: "db03fa33c1e2ca35794adbb14aebb153",
          //     amount: 1,
          //   }),
        }),
        submission: ixo.claims.v1beta1.Payment.fromPartial({
          account: tester,
          amount: [
            cosmos.base.v1beta1.Coin.fromPartial({
              amount: "1000000",
              denom: "uixo",
            }),
          ],
          timeoutNs: utils.proto.toDuration((1000000000 * 60 * 5).toString()), // ns * seconds * minutes
          // contract_1155Payment:
          //   ixo.claims.v1beta1.Contract1155Payment.fromPartial({
          //     address:
          //       "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c",
          //     tokenId: "db03fa33c1e2ca35794adbb14aebb153",
          //     amount: 1,
          //   }),
        }),
        evaluation: ixo.claims.v1beta1.Payment.fromPartial({
          account: tester,
          amount: [
            cosmos.base.v1beta1.Coin.fromPartial({
              amount: "1000000",
              denom: "uixo",
            }),
          ],
          timeoutNs: utils.proto.toDuration((1000000000 * 60 * 5).toString()), // ns * seconds * minutes
        }),
        rejection: ixo.claims.v1beta1.Payment.fromPartial({
          account: tester,
          amount: [],
          timeoutNs: utils.proto.toDuration((1000000000 * 60 * 5).toString()), // ns * seconds * minutes
        }),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const SubmitClaim = async (
  claimId: string,
  collectionId: string,
  signer: WalletUsers = WalletUsers.tester,
  admin: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const adminUser = (await getUser(admin).getAccounts())[0].address;
  const agent = getUser(signer);
  const agentAddress = (await agent.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgSubmitClaim",
    value: ixo.claims.v1beta1.MsgSubmitClaim.fromPartial({
      adminAddress: adminUser,
      agentAddress: agentAddress,
      agentDid: agent.did,
      claimId,
      collectionId,
    }),
  };

  const response = await client.signAndBroadcast(agentAddress, [message], fee);
  return response;
};

export const EvaluateClaim = async (
  claimId: string,
  collectionId: string,
  signer: WalletUsers = WalletUsers.tester,
  admin: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const adminUser = (await getUser(admin).getAccounts())[0].address;
  const agent = getUser(signer);
  const agentAddress = (await agent.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgEvaluateClaim",
    value: ixo.claims.v1beta1.MsgEvaluateClaim.fromPartial({
      adminAddress: adminUser,
      agentAddress: agentAddress,
      agentDid: agent.did,
      oracle: agent.did,
      claimId,
      collectionId,
      status: ixo.claims.v1beta1.EvaluationStatus.APPROVED,
      reason: 1,
      verificationProof: "cid of verificationProof",
      // if want to do custom amount, must be within allowed authz if through authz
      // amount: [
      //   cosmos.base.v1beta1.Coin.fromPartial({
      //     amount: "1000000",
      //     denom: "uixo",
      //   }),
      // ],
    }),
  };

  const response = await client.signAndBroadcast(agentAddress, [message], fee);
  return response;
};

export const DisputeClaim = async (
  subjectId: string,
  disputeProof: string, // must be unique
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const agent = getUser(signer);
  const agentAddress = (await agent.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgDisputeClaim",
    value: ixo.claims.v1beta1.MsgDisputeClaim.fromPartial({
      agentAddress: agentAddress,
      agentDid: agent.did,
      subjectId,
      disputeType: 1,
      data: ixo.claims.v1beta1.DisputeData.fromPartial({
        encrypted: false,
        proof: disputeProof,
        type: "application/json",
        uri: "https://media.makeameme.org/created/haha-you-were-a3866a4349.jpg",
      }),
    }),
  };

  const response = await client.signAndBroadcast(agentAddress, [message], fee);
  return response;
};

export const WithdrawPayment = async (
  claimId: string,
  signer: WalletUsers = WalletUsers.tester,
  receiver: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const agent = getUser(signer);
  const agentAddress = (await agent.getAccounts())[0].address;
  const receiverr = getUser(receiver);
  const receiverAddress = (await receiverr.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgWithdrawPayment",
    value: ixo.claims.v1beta1.MsgWithdrawPayment.fromPartial({
      claimId,
      adminAddress: agentAddress,
      inputs: [
        ixo.claims.v1beta1.Input.fromPartial({
          address: agentAddress,
          coins: [
            cosmos.base.v1beta1.Coin.fromPartial({
              amount: "1000000",
              denom: "uixo",
            }),
          ],
        }),
      ],
      outputs: [
        ixo.claims.v1beta1.Input.fromPartial({
          address: receiverAddress,
          coins: [
            cosmos.base.v1beta1.Coin.fromPartial({
              amount: "1000000",
              denom: "uixo",
            }),
          ],
        }),
      ],
      paymentType: ixo.claims.v1beta1.PaymentType.EVALUATION,
      fromAddress: agentAddress,
      toAddress: agentAddress,
      // contract_1155Payment: ixo.claims.v1beta1.Contract1155Payment.fromPartial({
      //   address:
      //     "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c",
      //   tokenId: "db03fa33c1e2ca35794adbb14aebb153",
      //   amount: 1,
      // }),
    }),
  };

  const response = await client.signAndBroadcast(agentAddress, [message], fee);
  return response;
};

export const MsgGrantAgentSubmit = async (
  collectionId: string,
  agentQuota = 100,
  overrideCurretGrants = false,
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(granter));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const submitAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl == "/ixo.claims.v1beta1.SubmitClaimAuthorization"
  );
  const granteeCurrentAuthConstraints =
    overrideCurretGrants || submitAuth == undefined
      ? []
      : client.registry.decode(submitAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granterAddress,
      grantee: granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.claims.v1beta1.SubmitClaimAuthorization",
          value: ixo.claims.v1beta1.SubmitClaimAuthorization.encode(
            ixo.claims.v1beta1.SubmitClaimAuthorization.fromPartial({
              admin: granterAddress,
              constraints: [
                ixo.claims.v1beta1.SubmitClaimConstraints.fromPartial({
                  collectionId,
                  agentQuota: Long.fromNumber(agentQuota),
                }),
                ...granteeCurrentAuthConstraints,
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
    fee
  );
  return response;
};

export const MsgExecAgentSubmit = async (
  claimId: string,
  collectionId: string,
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteee = getUser(grantee);
  const granteeAddress = (await granteee.getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgSubmitClaim",
          value: ixo.claims.v1beta1.MsgSubmitClaim.encode(
            ixo.claims.v1beta1.MsgSubmitClaim.fromPartial({
              adminAddress: granterAddress,
              agentAddress: granteeAddress,
              agentDid: granteee.did,
              claimId,
              collectionId,
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(
    granteeAddress,
    [message],
    fee
  );
  return response;
};

export const MsgGrantAgentEvaluate = async (
  collectionId: string,
  claimIds: string[] = [],
  agentQuota = 100,
  overrideCurretGrants = false,
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(granter));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const evaluateAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
      "/ixo.claims.v1beta1.EvaluateClaimAuthorization"
  );
  const granteeCurrentAuthConstraints =
    overrideCurretGrants || evaluateAuth == undefined
      ? []
      : client.registry.decode(evaluateAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granterAddress,
      grantee: granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.claims.v1beta1.EvaluateClaimAuthorization",
          value: ixo.claims.v1beta1.EvaluateClaimAuthorization.encode(
            ixo.claims.v1beta1.EvaluateClaimAuthorization.fromPartial({
              admin: granterAddress,
              constraints: [
                ixo.claims.v1beta1.EvaluateClaimConstraints.fromPartial({
                  collectionId,
                  claimIds,
                  agentQuota: Long.fromNumber(agentQuota),
                  beforeDate: utils.proto.toTimestamp(addDays(new Date(), 365)),
                  // if want to do custom amount, must be within allowed authz if through authz
                  maxCustomAmount: [
                    cosmos.base.v1beta1.Coin.fromPartial({
                      amount: "2000000",
                      denom: "uixo",
                    }),
                  ],
                }),
                ...granteeCurrentAuthConstraints,
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
    fee
  );
  return response;
};

export const MsgExecAgentEvaluate = async (
  claimId: string,
  collectionId: string,
  status = ixo.claims.v1beta1.EvaluationStatus.APPROVED,
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteee = getUser(grantee);
  const granteeAddress = (await granteee.getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgEvaluateClaim",
          value: ixo.claims.v1beta1.MsgEvaluateClaim.encode(
            ixo.claims.v1beta1.MsgEvaluateClaim.fromPartial({
              adminAddress: granterAddress,
              agentAddress: granteeAddress,
              agentDid: granteee.did,
              oracle: granteee.did,
              claimId,
              collectionId,
              status,
              reason: 1,
              verificationProof: "cid of verificationProof",
              // if want to do custom amount, must be within allowed authz if through authz
              // amount: [
              //   cosmos.base.v1beta1.Coin.fromPartial({
              //     amount: "2000000",
              //     denom: "uixo",
              //   }),
              // ],
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(
    granteeAddress,
    [message],
    fee
  );
  return response;
};

export const MsgGrantWithdrawal = async (
  claimId: string,
  paymentType = ixo.claims.v1beta1.PaymentType.APPROVAL,
  overrideCurretGrants = false,
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(granter));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const evaluateAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
      "/ixo.claims.v1beta1.WithdrawPaymentAuthorization"
  );
  const granteeCurrentAuthConstraints =
    overrideCurretGrants || evaluateAuth == undefined
      ? []
      : client.registry.decode(evaluateAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granterAddress,
      grantee: granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.claims.v1beta1.WithdrawPaymentAuthorization",
          value: ixo.claims.v1beta1.WithdrawPaymentAuthorization.encode(
            ixo.claims.v1beta1.WithdrawPaymentAuthorization.fromPartial({
              admin: granterAddress,
              constraints: [
                ixo.claims.v1beta1.WithdrawPaymentConstraints.fromPartial({
                  claimId,
                  paymentType,
                  inputs: [
                    ixo.claims.v1beta1.Input.fromPartial({
                      address: granterAddress,
                      coins: [
                        cosmos.base.v1beta1.Coin.fromPartial({
                          amount: "1000000",
                          denom: "uixo",
                        }),
                      ],
                    }),
                  ],
                  outputs: [
                    ixo.claims.v1beta1.Input.fromPartial({
                      address: granteeAddress,
                      coins: [
                        cosmos.base.v1beta1.Coin.fromPartial({
                          amount: "1000000",
                          denom: "uixo",
                        }),
                      ],
                    }),
                  ],
                  fromAddress: granterAddress,
                  toAddress: granteeAddress,
                  // beforeDate: utils.proto.toTimestamp(addDays(new Date(), 365)),
                  // contract_1155Payment:
                  //   ixo.claims.v1beta1.Contract1155Payment.fromPartial({
                  //     address:
                  //       "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c",
                  //     tokenId: "db03fa33c1e2ca35794adbb14aebb153",
                  //     amount: 1,
                  //   }),
                }),
                ...granteeCurrentAuthConstraints,
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
    fee
  );
  return response;
};

export const MsgExecWithdrawal = async (
  claimId: string,
  paymentType = ixo.claims.v1beta1.PaymentType.SUBMISSION,
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteee = getUser(grantee);
  const granteeAddress = (await granteee.getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const evaluateAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
      "/ixo.claims.v1beta1.WithdrawPaymentAuthorization"
  );
  const granteeCurrentAuthConstraints: WithdrawPaymentConstraints | undefined =
    paymentType != ixo.claims.v1beta1.PaymentType.EVALUATION ||
    evaluateAuth == undefined
      ? undefined
      : (
          client.registry.decode(evaluateAuth!.authorization!)
            .constraints as WithdrawPaymentConstraints[]
        ).find(
          (c) => c.paymentType == ixo.claims.v1beta1.PaymentType.EVALUATION
        );

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgWithdrawPayment",
          value: ixo.claims.v1beta1.MsgWithdrawPayment.encode(
            ixo.claims.v1beta1.MsgWithdrawPayment.fromPartial({
              adminAddress: granterAddress,
              fromAddress: granterAddress,
              toAddress: granteeAddress,
              claimId,
              inputs: granteeCurrentAuthConstraints?.inputs ?? [
                ixo.claims.v1beta1.Input.fromPartial({
                  address: granterAddress,
                  coins: [
                    cosmos.base.v1beta1.Coin.fromPartial({
                      amount: "1000000",
                      denom: "uixo",
                    }),
                  ],
                }),
              ],
              outputs: granteeCurrentAuthConstraints?.outputs ?? [
                ixo.claims.v1beta1.Input.fromPartial({
                  address: granteeAddress,
                  coins: [
                    cosmos.base.v1beta1.Coin.fromPartial({
                      amount: "1000000",
                      denom: "uixo",
                    }),
                  ],
                }),
              ],
              paymentType,
              // contract_1155Payment:
              //   ixo.claims.v1beta1.Contract1155Payment.fromPartial({
              //     address:
              //       "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c",
              //     tokenId: "db03fa33c1e2ca35794adbb14aebb153",
              //     amount: 1,
              //   }),
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(
    granteeAddress,
    [message],
    fee
  );
  return response;
};
