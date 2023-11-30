import Long from "long";
import { WithdrawPaymentConstraints } from "../../src/codegen/ixo/claims/v1beta1/authz";
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
  paymentsAccount: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgCreateCollection",
    value: ixo.claims.v1beta1.MsgCreateCollection.fromPartial({
      signer: tester,
      entity: entityDid,
      protocol: protocolDid,
      startDate: utils.proto.toTimestamp(new Date()),
      endDate: utils.proto.toTimestamp(addDays(new Date(), 365)),
      quota: Long.fromNumber(100),
      state: ixo.claims.v1beta1.CollectionState.OPEN,
      payments: ixo.claims.v1beta1.Payments.fromPartial({
        approval: ixo.claims.v1beta1.Payment.fromPartial({
          account: paymentsAccount,
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
          account: paymentsAccount,
          amount: [
            cosmos.base.v1beta1.Coin.fromPartial({
              amount: "1000000",
              denom: "uixo",
            }),
          ],
          timeoutNs: utils.proto.toDuration((1000000000 * 60 * 0.5).toString()), // ns * seconds * minutes
          // contract_1155Payment:
          //   ixo.claims.v1beta1.Contract1155Payment.fromPartial({
          //     address:
          //       "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c",
          //     tokenId: "db03fa33c1e2ca35794adbb14aebb153",
          //     amount: 1,
          //   }),
        }),
        evaluation: ixo.claims.v1beta1.Payment.fromPartial({
          account: paymentsAccount,
          amount: [
            cosmos.base.v1beta1.Coin.fromPartial({
              amount: "1000000",
              denom: "uixo",
            }),
          ],
          timeoutNs: utils.proto.toDuration((1000000000 * 60 * 5).toString()), // ns * seconds * minutes
        }),
        rejection: ixo.claims.v1beta1.Payment.fromPartial({
          account: paymentsAccount,
          amount: [],
          timeoutNs: utils.proto.toDuration((1000000000 * 60 * 5).toString()), // ns * seconds * minutes
        }),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
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

export const GrantEntityAccountClaimsSubmitAuthz = async (
  entityDid: string,
  name: string,
  adminAddress: string,
  collectionId: string,
  agentQuota = 100,
  overrideCurretGrants = false,
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const submitAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
        "/ixo.claims.v1beta1.SubmitClaimAuthorization" &&
      g.granter == adminAddress
  );
  const granteeCurrentAuthConstraints =
    overrideCurretGrants || submitAuth == undefined
      ? []
      : client.registry.decode(submitAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    value: ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.fromPartial({
      id: entityDid,
      ownerAddress: tester,
      name,
      granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.claims.v1beta1.SubmitClaimAuthorization",
          value: ixo.claims.v1beta1.SubmitClaimAuthorization.encode(
            ixo.claims.v1beta1.SubmitClaimAuthorization.fromPartial({
              admin: adminAddress,
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
        expiration: utils.proto.toTimestamp(addDays(new Date(), 365 * 3)),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const MsgExecAgentSubmit = async (
  claimId: string,
  collectionId: string,
  adminAddress: string,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

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
              adminAddress: adminAddress,
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

export const GrantEntityAccountClaimsEvaluateAuthz = async (
  entityDid: string,
  name: string,
  adminAddress: string,
  collectionId: string,
  claimIds: string[] = [],
  agentQuota = 100,
  overrideCurretGrants = false,
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const evaluateAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
        "/ixo.claims.v1beta1.EvaluateClaimAuthorization" &&
      g.granter == adminAddress
  );
  const granteeCurrentAuthConstraints =
    overrideCurretGrants || evaluateAuth == undefined
      ? []
      : client.registry.decode(evaluateAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    value: ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.fromPartial({
      id: entityDid,
      ownerAddress: tester,
      name,
      granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.claims.v1beta1.EvaluateClaimAuthorization",
          value: ixo.claims.v1beta1.EvaluateClaimAuthorization.encode(
            ixo.claims.v1beta1.EvaluateClaimAuthorization.fromPartial({
              admin: adminAddress,
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

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const MsgExecAgentEvaluate = async (
  claimId: string,
  collectionId: string,
  adminAddress: string,
  status = ixo.claims.v1beta1.EvaluationStatus.APPROVED,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

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
              adminAddress: adminAddress,
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
              //     amount: "1500000",
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

export const MsgExecWithdrawal = async (
  claimId: string,
  adminAddress: string,
  paymentType = ixo.claims.v1beta1.PaymentType.EVALUATION,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

  const granteee = getUser(grantee);
  const granteeAddress = (await granteee.getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const evaluateAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
        "/ixo.claims.v1beta1.WithdrawPaymentAuthorization" &&
      g.granter == adminAddress
  );
  if (evaluateAuth == undefined)
    throw Error("no current withdrawal authorizations");

  const withdrawContraints = (
    client.registry.decode(evaluateAuth!.authorization!)
      .constraints as WithdrawPaymentConstraints[]
  ).find((c) => c.paymentType == paymentType && c.claimId == claimId);
  if (withdrawContraints == undefined)
    throw Error(
      "wiithdrawal constraints for claimId and paymentType not found"
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
              adminAddress: adminAddress,
              fromAddress: withdrawContraints.fromAddress,
              toAddress: withdrawContraints.toAddress,
              claimId,
              inputs: withdrawContraints.inputs,
              outputs: withdrawContraints.outputs,
              paymentType,
              contract_1155Payment: withdrawContraints.contract_1155Payment,
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

// -------------------------------------------
// Genesis Collection
// -------------------------------------------
export const CreateCollectionSupamotoGenesis = async (
  entityDid: string,
  protocolDid: string,
  paymentsAccount: string,
  signer: WalletUsers = WalletUsers.tester,
  evaluatePayment = {
    amount: "500000",
    denom: "uixo",
  }
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgCreateCollection",
    value: ixo.claims.v1beta1.MsgCreateCollection.fromPartial({
      signer: tester,
      entity: entityDid, // genesis collection // cellnode related with the creator of collection
      protocol: protocolDid, // clean cooking protocol
      startDate: utils.proto.toTimestamp(new Date()),
      endDate: utils.proto.toTimestamp(addDays(new Date(), 365 * 10)),
      quota: Long.fromNumber(0), //unlimited
      state: ixo.claims.v1beta1.CollectionState.OPEN,
      payments: ixo.claims.v1beta1.Payments.fromPartial({
        approval: ixo.claims.v1beta1.Payment.fromPartial({
          account: paymentsAccount,
          amount: [],
          timeoutNs: utils.proto.toDuration((0).toString()),
        }),
        submission: ixo.claims.v1beta1.Payment.fromPartial({
          account: paymentsAccount,
          amount: [],
          timeoutNs: utils.proto.toDuration((0).toString()),
        }),
        // only this is needed now for prospects 5ixo per claim, timeout 0
        evaluation: ixo.claims.v1beta1.Payment.fromPartial({
          account: paymentsAccount,
          amount: [cosmos.base.v1beta1.Coin.fromPartial(evaluatePayment)],
          timeoutNs: utils.proto.toDuration((0).toString()),
        }),
        rejection: ixo.claims.v1beta1.Payment.fromPartial({
          account: paymentsAccount,
          amount: [],
          timeoutNs: utils.proto.toDuration((0).toString()),
        }),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const GrantEntityAccountClaimsEvaluateAuthzSupamoto = async (
  entityDid: string,
  name: string,
  adminAddress: string,
  collectionId: string,
  claimIds: string[] = [],
  agentQuota = 100,
  overrideCurretGrants = false,
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const evaluateAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
        "/ixo.claims.v1beta1.EvaluateClaimAuthorization" &&
      g.granter == adminAddress
  );
  const granteeCurrentAuthConstraints =
    overrideCurretGrants || evaluateAuth == undefined
      ? []
      : client.registry.decode(evaluateAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    value: ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.fromPartial({
      id: entityDid,
      ownerAddress: tester,
      name,
      granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.claims.v1beta1.EvaluateClaimAuthorization",
          value: ixo.claims.v1beta1.EvaluateClaimAuthorization.encode(
            ixo.claims.v1beta1.EvaluateClaimAuthorization.fromPartial({
              admin: adminAddress,
              constraints: [
                ixo.claims.v1beta1.EvaluateClaimConstraints.fromPartial({
                  collectionId,
                  claimIds,
                  agentQuota: Long.fromNumber(agentQuota),
                }),
                ...granteeCurrentAuthConstraints,
              ],
            })
          ).finish(),
        },
        expiration: utils.proto.toTimestamp(addDays(new Date(), 365 * 3)),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};
