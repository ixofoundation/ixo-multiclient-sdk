import { Coin } from "@cosmjs/amino";
import { WithdrawPaymentConstraints } from "../../src/codegen/ixo/claims/v1beta1/authz";
import {
  CW1155Payment,
  CW20Payment,
} from "../../src/codegen/ixo/claims/v1beta1/claims";
import {
  addDays,
  createClient,
  getUser,
  ixo,
  utils,
  cosmos,
  queryClient,
} from "../helpers/common";
import { fee, getFee, WalletUsers } from "../helpers/constants";
// @ts-ignore
import Long from "long";

export const CreateCollection = async (
  entityDid: string,
  protocolDid: string,
  paymentsAccount: string,
  signer: WalletUsers = WalletUsers.tester,
  cw20Address: string = "ixo1747e2jlnmk6lzqe2pcpq4x0fxys4e7puadx7np78s9ygqed24cxshj2xuc"
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
      quota: Long.fromNumber(10000),
      state: ixo.claims.v1beta1.CollectionState.CLOSED,
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
          cw20Payment: [
            ixo.claims.v1beta1.CW20Payment.fromPartial({
              address: cw20Address,
              amount: Long.fromNumber(10),
            }),
          ],
          isOraclePayment: false,
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

export const UpdateCollectionState = async (
  collectionId: string,
  adminAddress: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgUpdateCollectionState",
          value: ixo.claims.v1beta1.MsgUpdateCollectionState.encode(
            ixo.claims.v1beta1.MsgUpdateCollectionState.fromPartial({
              adminAddress: adminAddress,
              collectionId,
              state: ixo.claims.v1beta1.CollectionState.OPEN,
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const UpdateCollectionIntents = async (
  collectionId: string,
  adminAddress: string,
  signer: WalletUsers = WalletUsers.tester,
  intents = ixo.claims.v1beta1.CollectionIntentOptions.ALLOW
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgUpdateCollectionIntents",
          value: ixo.claims.v1beta1.MsgUpdateCollectionIntents.encode(
            ixo.claims.v1beta1.MsgUpdateCollectionIntents.fromPartial({
              collectionId,
              adminAddress: adminAddress,
              intents,
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

/**
 * Update a collection's quota (max-claim cap). Uses authz exec so the tester
 * wallet can call it on behalf of the entity admin. Uses
 * broadcastOrSynthesiseFailure so the helper can serve both positive and
 * negative tests (the keeper rejects new_quota < current_count with
 * ErrCollectionQuotaBelowCount).
 */
export const UpdateCollectionQuota = async (
  collectionId: string,
  adminAddress: string,
  quota: number,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer));
  const grantee = (await getUser(signer).getAccounts())[0].address;
  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgUpdateCollectionQuota",
          value: ixo.claims.v1beta1.MsgUpdateCollectionQuota.encode(
            ixo.claims.v1beta1.MsgUpdateCollectionQuota.fromPartial({
              collectionId,
              adminAddress,
              quota: Long.fromNumber(quota),
            })
          ).finish(),
        },
      ],
    }),
  };
  return await broadcastOrSynthesiseFailure(client, grantee, [message], fee);
};

export const UpdateCollectionDates = async (
  collectionId: string,
  adminAddress: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgUpdateCollectionDates",
          value: ixo.claims.v1beta1.MsgUpdateCollectionDates.encode(
            ixo.claims.v1beta1.MsgUpdateCollectionDates.fromPartial({
              adminAddress: adminAddress,
              collectionId,
              startDate: utils.proto.toTimestamp(new Date()),
              endDate: utils.proto.toTimestamp(addDays(new Date(), 400)),
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const DirectCreateClaimAuthorization = async (
  collectionId: string,
  adminAddress: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgCreateClaimAuthorization",
          value: ixo.claims.v1beta1.MsgCreateClaimAuthorization.encode(
            ixo.claims.v1beta1.MsgCreateClaimAuthorization.fromPartial({
              adminAddress: adminAddress,
              collectionId,
              creatorAddress: tester,
              creatorDid: getUser(signer).did,
              expiration: utils.proto.toTimestamp(addDays(new Date(), 400)),
              granteeAddress: tester,
              authType: ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
              agentQuota: Long.fromNumber(100),
              maxAmount: [],
              maxCw20Payment: [],
              intentDurationNs: utils.proto.toDuration(
                (1000000000 * 60 * 60 * 24 * 30).toString()
              ),
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  console.dir(response, { depth: null });
  return response;
};

export const UpdateCollectionPayments = async (
  collectionId: string,
  paymentsAccount: string,
  adminAddress: string,
  signer: WalletUsers = WalletUsers.tester,
  cw20Address: string = "ixo1747e2jlnmk6lzqe2pcpq4x0fxys4e7puadx7np78s9ygqed24cxshj2xuc",
  isOraclePayment = false,
  cw1155Address?: string
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgUpdateCollectionPayments",
          value: ixo.claims.v1beta1.MsgUpdateCollectionPayments.encode(
            ixo.claims.v1beta1.MsgUpdateCollectionPayments.fromPartial({
              adminAddress: adminAddress,
              collectionId,
              payments: ixo.claims.v1beta1.Payments.fromPartial({
                approval: ixo.claims.v1beta1.Payment.fromPartial({
                  account: paymentsAccount,
                  amount: [
                    cosmos.base.v1beta1.Coin.fromPartial({
                      amount: "1500000",
                      denom: "uixo",
                    }),
                  ],
                  timeoutNs: utils.proto.toDuration(
                    (1000000000 * 60 * 0).toString()
                  ), // ns * seconds * minutes
                  isOraclePayment,
                  // cw20Payment: [
                  //   ixo.claims.v1beta1.CW20Payment.fromPartial({
                  //     address: cw20Address,
                  //     amount: Long.fromNumber(10),
                  //   }),
                  // ],
                  cw1155Payment: cw1155Address
                    ? [
                        ixo.claims.v1beta1.CW1155Payment.fromPartial({
                          address: cw1155Address,
                          tokenId: [],
                          amount: Long.fromNumber(5),
                        }),
                      ]
                    : undefined,
                }),
                submission: ixo.claims.v1beta1.Payment.fromPartial({
                  account: paymentsAccount,
                  amount: [
                    cosmos.base.v1beta1.Coin.fromPartial({
                      amount: "1000000",
                      denom: "uixo",
                    }),
                  ],
                  cw20Payment: [
                    ixo.claims.v1beta1.CW20Payment.fromPartial({
                      address: cw20Address,
                      amount: Long.fromNumber(10),
                    }),
                  ],
                  timeoutNs: utils.proto.toDuration(
                    (1000000000 * 60 * 0.5).toString()
                  ), // ns * seconds * minutes
                }),
                evaluation: ixo.claims.v1beta1.Payment.fromPartial({
                  account: paymentsAccount,
                  amount: [
                    cosmos.base.v1beta1.Coin.fromPartial({
                      amount: "2000000",
                      denom: "uixo",
                    }),
                  ],
                  timeoutNs: utils.proto.toDuration(
                    (1000000000 * 60 * 0).toString()
                  ), // ns * seconds * minutes
                }),
                rejection: ixo.claims.v1beta1.Payment.fromPartial({
                  account: paymentsAccount,
                  amount: [],
                  timeoutNs: utils.proto.toDuration(
                    (1000000000 * 60 * 5).toString()
                  ), // ns * seconds * minutes
                }),
              }),
            })
          ).finish(),
        },
      ],
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
  overrideCurrentGrants = false,
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester,
  maxAmount: Coin[] = [],
  maxCw20Payment: CW20Payment[] = [],
  intentDurationSeconds = 0,
  maxCw1155Payment: CW1155Payment[] = [],
  // For team subscriptions: the member this constraint applies to.
  memberAddress: string = ""
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
    overrideCurrentGrants || submitAuth == undefined
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
                  maxAmount,
                  maxCw20Payment,
                  maxCw1155Payment,
                  intentDurationNs: utils.proto.toDuration(
                    (1000000000 * intentDurationSeconds).toString()
                  ),
                  memberAddress,
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

export const GrantEntityAccountCreateClaimAuthz = async (
  entityDid: string,
  name: string,
  adminAddress: string,
  collectionId: string,
  agentQuota = 100,
  overrideCurrentGrants = false,
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester,
  maxAmount: Coin[] = [],
  maxCw20Payment: CW20Payment[] = [],
  intentDurationSeconds = 0,
  allowedAuthTypes = ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
  maxAuthorizations = 2,
  maxCw1155Payment: CW1155Payment[] = [],
  // For team subscriptions: the member this CCAA constraint authorizes the
  // grantee to create downstream authorizations for. Anti-spoofing — strict
  // equality enforced in Accept().
  memberAddress: string = ""
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const createAuth = granteeGrants.grants.find(
    (g) =>
      g.authorization?.typeUrl ==
        "/ixo.claims.v1beta1.CreateClaimAuthorizationAuthorization" &&
      g.granter == adminAddress
  );
  const granteeCurrentAuthConstraints =
    overrideCurrentGrants || createAuth == undefined
      ? []
      : client.registry.decode(createAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    value: ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.fromPartial({
      id: entityDid,
      ownerAddress: tester,
      name,
      granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.claims.v1beta1.CreateClaimAuthorizationAuthorization",
          value:
            ixo.claims.v1beta1.CreateClaimAuthorizationAuthorization.encode(
              ixo.claims.v1beta1.CreateClaimAuthorizationAuthorization.fromPartial(
                {
                  admin: adminAddress,
                  constraints: [
                    ixo.claims.v1beta1.CreateClaimAuthorizationConstraints.fromPartial(
                      {
                        collectionIds: [collectionId],
                        maxAgentQuota: Long.fromNumber(agentQuota),
                        maxIntentDurationNs: utils.proto.toDuration(
                          (1000000000 * intentDurationSeconds).toString()
                        ),
                        maxAmount,
                        maxCw20Payment,
                        expiration: utils.proto.toTimestamp(
                          addDays(new Date(), 365 * 3)
                        ),
                        maxCw1155Payment,
                        maxAuthorizations: Long.fromNumber(maxAuthorizations),
                        allowedAuthTypes,
                        memberAddress,
                      }
                    ),
                    ...granteeCurrentAuthConstraints,
                  ],
                }
              )
            ).finish(),
        },
        expiration: utils.proto.toTimestamp(addDays(new Date(), 365 * 3)),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const CreateClaimAuthorization = async (
  adminAddress: string,
  collectionId: string,
  agentQuota = 100,
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester,
  maxAmount: Coin[] = [],
  maxCw20Payment: CW20Payment[] = [],
  intentDurationSeconds = 0,
  authType = ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
  maxCw1155Payment: CW1155Payment[] = [],
  // For team subscriptions: the member this authorization is being created
  // for. Must match the signer's CreateClaimAuthorizationConstraints
  // memberAddress (strict equality — anti-spoofing).
  memberAddress: string = ""
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgCreateClaimAuthorization",
          value: ixo.claims.v1beta1.MsgCreateClaimAuthorization.encode(
            ixo.claims.v1beta1.MsgCreateClaimAuthorization.fromPartial({
              creatorAddress: tester,
              creatorDid: getUser(signer).did,
              adminAddress,
              granteeAddress: (await getUser(grantee).getAccounts())[0].address,
              collectionId,
              agentQuota: Long.fromNumber(agentQuota),
              maxAmount,
              maxCw20Payment,
              maxCw1155Payment,
              intentDurationNs: utils.proto.toDuration(
                (1000000000 * intentDurationSeconds).toString()
              ),
              expiration: utils.proto.toTimestamp(addDays(new Date(), 365 * 3)),
              authType,
              beforeDate: utils.proto.toTimestamp(addDays(new Date(), 365)),
              memberAddress,
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const MsgClaimIntent = async (
  collectionId: string,
  amount: Coin[] = [],
  cw20Payment: CW20Payment[] = [],
  signer = WalletUsers.alice,
  cw1155Payment: CW1155Payment[] = [],
  // For team subscriptions: the member this intent is on behalf of. Required
  // when the collection has member budgets, must be empty otherwise.
  memberAddress: string = ""
) => {
  const client = await createClient(getUser(signer));

  const granteee = getUser(signer);
  const granteeAddress = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgClaimIntent",
    value: ixo.claims.v1beta1.MsgClaimIntent.fromPartial({
      agentAddress: granteeAddress,
      agentDid: granteee.did,
      collectionId,
      amount,
      cw20Payment,
      cw1155Payment,
      memberAddress,
    }),
  };

  // Try to simulate for accurate gas; if simulation throws (e.g. chain
  // rejects the tx for a validation reason like missing member_address),
  // fall back to a fixed fee so the actual broadcast still happens and
  // returns a DeliverTxResponse with the error. Tests using
  // `testMsg(..., succeed: false)` rely on the failure being surfaced as
  // a response rather than a thrown exception.
  let txFee;
  try {
    txFee = getFee(
      1,
      await client.simulate(granteeAddress, [message], undefined)
    );
  } catch {
    txFee = fee;
  }
  const response = await client.signAndBroadcast(
    granteeAddress,
    [message],
    txFee
  );
  return response;
};

export const MsgExecAgentSubmit = async (
  claimId: string,
  collectionId: string,
  adminAddress: string,
  grantee = WalletUsers.alice,
  useIntent = false,
  amount: Coin[] = [],
  cw20Payment: CW20Payment[] = [],
  cw1155Payment: CW1155Payment[] = [],
  // For team subscriptions: the member this claim is on behalf of. Must equal
  // the originating intent's member_address (strict equality — both empty for
  // individual subscriptions, or both equal for team). Must be empty when
  // useIntent is false.
  memberAddress: string = ""
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
              useIntent,
              amount,
              cw20Payment,
              cw1155Payment,
              memberAddress,
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
  signer: WalletUsers = WalletUsers.tester,
  cw20Address: string = "ixo1747e2jlnmk6lzqe2pcpq4x0fxys4e7puadx7np78s9ygqed24cxshj2xuc",
  maxCw1155Payment: CW1155Payment[] = []
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
                      amount: "3000000",
                      denom: "uixo",
                    }),
                  ],
                  maxCustomCw20Payment: [
                    ixo.claims.v1beta1.CW20Payment.fromPartial({
                      address: cw20Address,
                      amount: Long.fromNumber(30),
                    }),
                  ],
                  maxCustomCw1155Payment: maxCw1155Payment,
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

export const GrantEntityAccountClaimsEvaluateAuthzThroughAuthz = async (
  entityDid: string,
  name: string,
  adminAddress: string,
  collectionId: string,
  claimIds: string[] = [],
  agentQuota = 100,
  overrideCurretGrants = false,
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester,
  granter: string
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

  const messageInner = {
    typeUrl: "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    value: ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.encode(
      ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.fromPartial({
        id: entityDid,
        ownerAddress: granter,
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
                    beforeDate: utils.proto.toTimestamp(
                      addDays(new Date(), 365 * 10)
                    ),
                    // if want to do custom amount, must be within allowed authz if through authz
                    // maxCustomAmount: [
                    //   cosmos.base.v1beta1.Coin.fromPartial({
                    //     amount: "2000000",
                    //     denom: "uixo",
                    //   }),
                    // ],
                  }),
                  ...granteeCurrentAuthConstraints,
                ],
              })
            ).finish(),
          },
          expiration: utils.proto.toTimestamp(addDays(new Date(), 365 * 10)),
        }),
      })
    ).finish(),
  };

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [messageInner],
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
  grantee = WalletUsers.alice,
  customAmount?: Coin[],
  customCW20Payment?: CW20Payment[],
  customCW1155Payment?: CW1155Payment[]
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
              amount: customAmount,
              cw20Payment: customCW20Payment,
              cw1155Payment: customCW1155Payment,
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
              cw20Payment: withdrawContraints.cw20Payment,
              cw1155Payment: withdrawContraints.cw1155Payment,
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(
    granteeAddress,
    [message],
    getFee(1, await client.simulate(granteeAddress, [message], undefined))
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

// -------------------------------------------
// Team Member Budgets
// -------------------------------------------

export type CollectionMemberInputArgs = {
  memberAddress: string;
  // Period in seconds for budget reset (e.g., 240 = 4 min — chain minimum
  // when set for testing; 30 days = 30 * 24 * 60 * 60).
  periodSeconds: number;
  periodSpendLimit?: Coin[];
  periodCw20SpendLimit?: CW20Payment[];
  resetPeriodSpent?: boolean;
};

/**
 * SetCollectionMembers adds or updates one or more team member budgets on a
 * collection. Each member entry needs at least one non-zero spend limit
 * (native or CW20) — otherwise the chain rejects with ErrMemberBudgetZero.
 * Periods shorter than MinMemberBudgetPeriod (24h in production, 4 min while
 * testing) are rejected. Duplicate member addresses within a single message
 * are rejected by ValidateBasic.
 */
export const SetCollectionMembers = async (
  collectionId: string,
  adminAddress: string,
  members: CollectionMemberInputArgs[],
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));
  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgSetCollectionMembers",
          value: ixo.claims.v1beta1.MsgSetCollectionMembers.encode(
            ixo.claims.v1beta1.MsgSetCollectionMembers.fromPartial({
              collectionId,
              adminAddress,
              members: members.map((m) =>
                ixo.claims.v1beta1.CollectionMemberInput.fromPartial({
                  memberAddress: m.memberAddress,
                  period: utils.proto.toDuration(
                    (1000000000 * m.periodSeconds).toString()
                  ),
                  periodSpendLimit: m.periodSpendLimit ?? [],
                  periodCw20SpendLimit: m.periodCw20SpendLimit ?? [],
                  resetPeriodSpent: m.resetPeriodSpent ?? false,
                })
              ),
            })
          ).finish(),
        },
      ],
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

/**
 * RemoveCollectionMembers removes one or more team member budgets from a
 * collection in a single transaction. Fails atomically if any of the member
 * addresses do not currently exist as members on the collection. Existing
 * authorizations the removed members granted to oracles are NOT revoked —
 * the admin must do that separately if needed. Pending intents from removed
 * members continue to expire and refund escrow normally; budget restoration
 * is silently skipped (member budget no longer exists).
 */
export const RemoveCollectionMembers = async (
  collectionId: string,
  adminAddress: string,
  memberAddresses: string[],
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));
  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: tester,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgRemoveCollectionMembers",
          value: ixo.claims.v1beta1.MsgRemoveCollectionMembers.encode(
            ixo.claims.v1beta1.MsgRemoveCollectionMembers.fromPartial({
              collectionId,
              adminAddress,
              memberAddresses,
            })
          ).finish(),
        },
      ],
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

// ---------------------------------------------------------------------------
// v7 disputes & performance deposits
// ---------------------------------------------------------------------------
//
// Negative-test friendliness. Several of these messages are validated at
// CheckTx time. When CheckTx rejects, cosmjs's signAndBroadcast throws — and
// testMsg(succeed=false) cannot tell that apart from a positive failure.
// broadcastOrSynthesiseFailure catches the throw and returns a synthetic
// DeliverTxResponse with code !== 0 so testMsg sees a consistent shape.
// createUncachedClient bypasses the local sequence cache so a long sequence
// of rejected txs doesn't desync the counter. Mirrors LiquidStake.ts /
// Names.ts.

const broadcastOrSynthesiseFailure = async (
  client: any,
  signerAddress: string,
  messages: any[],
  txFee: any
) => {
  try {
    return await client.signAndBroadcast(signerAddress, messages, txFee);
  } catch (e) {
    return {
      code: 1,
      transactionHash: "",
      height: 0,
      txIndex: 0,
      events: [],
      gasWanted: BigInt(0),
      gasUsed: BigInt(0),
      msgResponses: [],
      rawLog: (e as Error).message ?? String(e),
    } as any;
  }
};

const { createSigningClient: __createSigningClient } = require("../../src");
const { RPC_URL: __RPC_URL } = require("../helpers/constants");
const { GasPrice: __GasPrice } = require("@cosmjs/stargate");

export const createUncachedClient = async (signer: any) =>
  await __createSigningClient(__RPC_URL, signer, false, {
    gasPrice: __GasPrice.fromString("0.025uixo"),
  });

export const broadcastOrSynthesise = broadcastOrSynthesiseFailure;

/**
 * Direct top-up of an agent's performance-deposit balance on a collection.
 * Signed by the agent themselves (not via authz). Funds move from the agent's
 * wallet into the collection escrow. Permitted whether or not the agent has
 * open disputes — only withdrawal is gated.
 */
export const AddPerformanceDeposit = async (
  collectionId: string,
  amount: Coin[],
  signer: WalletUsers = WalletUsers.alice
) => {
  const client = await createUncachedClient(getUser(signer));
  const agent = (await getUser(signer).getAccounts())[0].address;
  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgAddPerformanceDeposit",
    value: ixo.claims.v1beta1.MsgAddPerformanceDeposit.fromPartial({
      collectionId,
      agentAddress: agent,
      amount,
    }),
  };
  return await broadcastOrSynthesiseFailure(client, agent, [message], fee);
};

/**
 * Pull some or all of an agent's deposit balance back to their wallet.
 * Pass empty `amount` to withdraw the full current balance. Rejected by
 * keeper if any OPEN dispute targets this agent on this collection.
 */
export const WithdrawPerformanceDeposit = async (
  collectionId: string,
  amount: Coin[] = [],
  signer: WalletUsers = WalletUsers.alice
) => {
  const client = await createUncachedClient(getUser(signer));
  const agent = (await getUser(signer).getAccounts())[0].address;
  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgWithdrawPerformanceDeposit",
    value: ixo.claims.v1beta1.MsgWithdrawPerformanceDeposit.fromPartial({
      collectionId,
      agentAddress: agent,
      amount,
    }),
  };
  return await broadcastOrSynthesiseFailure(client, agent, [message], fee);
};

/**
 * Update a collection's dispute / performance-deposit config. Wraps in
 * MsgExec because the signer is the collection admin (entity account).
 */
export const UpdateCollectionDisputeConfig = async (
  collectionId: string,
  adminAddress: string,
  cfg: {
    serviceAgentDepositRequired?: Coin[];
    evaluatorDepositRequired?: Coin[];
    disputeDepositAmount?: Coin[];
    adjudicators?: { did: string; rewardPercentage: string }[];
    penaltyAmountPerDispute?: Coin[];
    minDepositPeriodSeconds?: number;
  },
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer));
  const grantee = (await getUser(signer).getAccounts())[0].address;
  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee,
      msgs: [
        {
          typeUrl: "/ixo.claims.v1beta1.MsgUpdateCollectionDisputeConfig",
          value: ixo.claims.v1beta1.MsgUpdateCollectionDisputeConfig.encode(
            ixo.claims.v1beta1.MsgUpdateCollectionDisputeConfig.fromPartial({
              collectionId,
              adminAddress,
              serviceAgentDepositRequired:
                cfg.serviceAgentDepositRequired ?? [],
              evaluatorDepositRequired: cfg.evaluatorDepositRequired ?? [],
              disputeDepositAmount: cfg.disputeDepositAmount ?? [],
              adjudicators: (cfg.adjudicators ?? []).map((a) =>
                ixo.claims.v1beta1.AdjudicationDid.fromPartial({
                  did: a.did,
                  rewardPercentage: a.rewardPercentage,
                })
              ),
              penaltyAmountPerDispute: cfg.penaltyAmountPerDispute ?? [],
              minDepositPeriod: utils.proto.toDuration(
                ((cfg.minDepositPeriodSeconds ?? 0) *
                  1_000_000_000).toString()
              ),
            })
          ).finish(),
        },
      ],
    }),
  };
  return await broadcastOrSynthesiseFailure(client, grantee, [message], fee);
};

/**
 * File a dispute against a specific role (SUBMITTER or EVALUATOR) of a claim.
 * Disputer stakes the collection's `dispute_deposit_amount` inline. Signed
 * directly by the disputer (no authz wrap).
 */
export const DisputeClaimV7 = async (
  subjectId: string,
  disputeProof: string,
  targetRole: number, // ixo.claims.v1beta1.DisputeTargetRole
  signer: WalletUsers = WalletUsers.bob
) => {
  const client = await createUncachedClient(getUser(signer));
  const agent = getUser(signer);
  const agentAddress = (await agent.getAccounts())[0].address;
  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgDisputeClaim",
    value: ixo.claims.v1beta1.MsgDisputeClaim.fromPartial({
      agentAddress,
      agentDid: agent.did,
      subjectId,
      disputeType: 1,
      targetRole,
      data: ixo.claims.v1beta1.DisputeData.fromPartial({
        encrypted: false,
        proof: disputeProof,
        type: "application/json",
        uri: "https://ipfs.io/ipfs/" + disputeProof,
      }),
    }),
  };
  return await broadcastOrSynthesiseFailure(client, agentAddress, [message], fee);
};

/**
 * Resolve an OPEN dispute as AWARDED or DISMISSED. Signed by the adjudicator
 * directly (their address must be authorized for adjudicator_did via either
 * an entity account or a key on the DID document — same dual-path rule the
 * keeper enforces).
 *
 * `reasonLabel` is a free-form short label that the helper synthesises into
 * a DisputeData payload (cid-shaped proof, ipfs uri, application/json
 * content-type). The chain stores this verbatim on the resolution record so
 * indexers can render the adjudicator's opinion alongside the outcome.
 * Pass an empty string to send no `data` at all (allowed — the field is
 * optional, just like the original free-form reason was).
 *
 * Pass empty `penaltyAmount` when the collection has a fixed
 * `penalty_amount_per_dispute` configured; otherwise supply it explicitly.
 */
export const AdjudicateDispute = async (
  subjectId: string,
  targetRole: number,
  adjudicatorDid: string,
  outcome: number, // ixo.claims.v1beta1.DisputeStatus
  reasonLabel: string,
  penaltyAmount: Coin[] = [],
  signer: WalletUsers = WalletUsers.charlie
) => {
  const client = await createUncachedClient(getUser(signer));
  const adjudicatorAddress = (await getUser(signer).getAccounts())[0].address;
  // Synthesise a DisputeData payload from the label so tests can stay terse
  // ("rubber-stamped"), while still exercising the on-chain DisputeData
  // path. The proof CID is deterministic per reason for log-grep-ability;
  // the uri/type/encrypted fields mirror MsgDisputeClaim's defaults.
  const data = reasonLabel
    ? ixo.claims.v1beta1.DisputeData.fromPartial({
        proof: utils.common.generateId(46),
        uri: "https://ipfs.io/ipfs/" + reasonLabel.replace(/\s+/g, "-"),
        type: "application/json",
        encrypted: false,
      })
    : undefined;
  const message = {
    typeUrl: "/ixo.claims.v1beta1.MsgAdjudicateDispute",
    value: ixo.claims.v1beta1.MsgAdjudicateDispute.fromPartial({
      subjectId,
      targetRole,
      adjudicatorDid,
      adjudicatorAddress,
      outcome,
      data,
      penaltyAmount,
    }),
  };
  return await broadcastOrSynthesiseFailure(
    client,
    adjudicatorAddress,
    [message],
    fee
  );
};
