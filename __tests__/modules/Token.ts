import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";
import {
  addDays,
  addMinutesToDate,
  cosmos,
  createClient,
  getUser,
  ixo,
  queryClient,
  utils,
} from "../helpers/common";
import { fee, getFee, WalletUsers } from "../helpers/constants";

export const CreateToken = async (
  name: string,
  description: string,
  cap: number,
  tokenClass: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgCreateToken",
    value: ixo.token.v1beta1.MsgCreateToken.fromPartial({
      minter: tester, // carbon oracle
      name,
      description,
      image:
        "https://ipfs.io/ipfs/bafkreidw5lg6mn2q33vj6gokazbl6yepsh3s32xf5z3evqu43s2ccqg3xy",
      tokenType: "ixo1155",
      cap: cap.toString(),
      class: tokenClass,
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const MintToken = async (
  contractAddress: string,
  batches: {
    name: string;
    index: string;
    amount: number;
    collection: string;
    tokenData?: TokenData[];
  }[]
) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgMintToken",
    value: ixo.token.v1beta1.MsgMintToken.fromPartial({
      minter: tester,
      contractAddress: contractAddress,
      owner: tester,
      mintBatch: batches.map((b) =>
        ixo.token.v1beta1.MintBatch.fromPartial({
          name: b.name,
          index: b.index,
          collection: b.collection,
          tokenData: b.tokenData,
          amount: b.amount.toString(),
        })
      ),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const TransferToken = async (
  tokens: {
    id: string;
    amount: number;
  }[],
  toAddress?: string
) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;
  const alice =
    toAddress || (await getUser(WalletUsers.alice).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgTransferToken",
    value: ixo.token.v1beta1.MsgTransferToken.fromPartial({
      owner: tester,
      recipient: alice,
      tokens: tokens.map((b) =>
        ixo.token.v1beta1.TokenBatch.fromPartial({
          id: b.id,
          amount: b.amount.toString(),
        })
      ),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const CancelToken = async (
  tokens: {
    id: string;
    amount: number;
  }[]
) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgCancelToken",
    value: ixo.token.v1beta1.MsgCancelToken.fromPartial({
      owner: tester,
      reason: "reason",
      tokens: tokens.map((b) =>
        ixo.token.v1beta1.TokenBatch.fromPartial({
          id: b.id,
          amount: b.amount.toString(),
        })
      ),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const RetireToken = async (
  tokens: {
    id: string;
    amount: number;
  }[]
) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgRetireToken",
    value: ixo.token.v1beta1.MsgRetireToken.fromPartial({
      owner: tester,
      reason: "reason",
      jurisdiction: "jurisdiction",
      tokens: tokens.map((b) =>
        ixo.token.v1beta1.TokenBatch.fromPartial({
          id: b.id,
          amount: b.amount.toString(),
        })
      ),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const TransferCredit = async (
  tokens: {
    id: string;
    amount: number;
  }[]
) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgTransferCredit",
    value: ixo.token.v1beta1.MsgTransferCredit.fromPartial({
      owner: tester,
      reason: "reason",
      jurisdiction: "jurisdiction",
      tokens: tokens.map((b) =>
        ixo.token.v1beta1.TokenBatch.fromPartial({
          id: b.id,
          amount: b.amount.toString(),
        })
      ),
      authorizationId: "authorizationId",
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const PauseToken = async (contractAddress: string, paused: boolean) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgPauseToken",
    value: ixo.token.v1beta1.MsgPauseToken.fromPartial({
      minter: tester,
      contractAddress,
      paused,
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const StopToken = async (contractAddress: string) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.token.v1beta1.MsgStopToken",
    value: ixo.token.v1beta1.MsgStopToken.fromPartial({
      minter: tester,
      contractAddress,
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const MsgGrantContract = async (
  contractAddress: string,
  name: string,
  index: string,
  collection: string,
  amount: number,
  tokenData?: TokenData[],
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
  const mintAuth = granteeGrants.grants.find(
    (g) => g.authorization?.typeUrl == "/ixo.token.v1beta1.MintAuthorization"
  );
  const granteeCurrentAuthConstraints =
    overrideCurretGrants || mintAuth == undefined
      ? []
      : client.registry.decode(mintAuth!.authorization!).constraints;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granterAddress,
      grantee: granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.token.v1beta1.MintAuthorization",
          value: ixo.token.v1beta1.MintAuthorization.encode(
            ixo.token.v1beta1.MintAuthorization.fromPartial({
              minter: granterAddress,
              constraints: [
                ixo.token.v1beta1.MintConstraints.fromPartial({
                  contractAddress: contractAddress,
                  name,
                  index,
                  collection,
                  tokenData,
                  amount: amount.toString(),
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

export const MsgExecContract = async (
  contractAddress: string,
  batches: {
    name: string;
    index: string;
    amount: number;
    collection: string;
    tokenData?: TokenData[];
  }[],
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [
        {
          typeUrl: "/ixo.token.v1beta1.MsgMintToken",
          value: ixo.token.v1beta1.MsgMintToken.encode(
            ixo.token.v1beta1.MsgMintToken.fromPartial({
              minter: granterAddress,
              contractAddress,
              owner: granteeAddress,
              mintBatch: batches.map((b) =>
                ixo.token.v1beta1.MintBatch.fromPartial({
                  name: b.name,
                  index: b.index,
                  collection: b.collection,
                  tokenData: b.tokenData,
                  amount: b.amount.toString(),
                })
              ),
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

export const MsgRevokeContract = async (
  granter: WalletUsers = WalletUsers.tester,
  grantee: WalletUsers = WalletUsers.alice
) => {
  const client = await createClient(getUser(granter));

  const granterAddress = (await getUser(granter).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    value: cosmos.authz.v1beta1.MsgRevoke.fromPartial({
      granter: granterAddress,
      grantee: granteeAddress,
      msgTypeUrl: "/ixo.token.v1beta1.MsgMintToken",
      // msgTypeUrl: "/cosmos.bank.v1beta1.MsgSend",
    }),
  };

  const response = await client.signAndBroadcast(
    granterAddress,
    [message],
    fee
  );
  return response;
};

export const MsgGrantandExecuteTokenTransfer = async (
  batches: { entityDid: string; entityAdminAddress: string; tokens: any[] }[],
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const batchMessages = batches.map(
    ({ entityDid, entityAdminAddress, tokens }) => [
      {
        typeUrl: "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
        value: ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.fromPartial({
          id: entityDid,
          ownerAddress: tester,
          name: "admin",
          granteeAddress: tester,
          grant: cosmos.authz.v1beta1.Grant.fromPartial({
            authorization: {
              typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
              value: cosmos.authz.v1beta1.GenericAuthorization.encode(
                cosmos.authz.v1beta1.GenericAuthorization.fromPartial({
                  msg: "/ixo.token.v1beta1.MsgTransferToken",
                })
              ).finish(),
            },
            expiration: utils.proto.toTimestamp(
              addMinutesToDate(new Date(), 5)
            ),
          }),
        }),
      },
      {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: cosmos.authz.v1beta1.MsgExec.fromPartial({
          grantee: tester,
          msgs: [
            {
              typeUrl: "/ixo.token.v1beta1.MsgTransferToken",
              value: ixo.token.v1beta1.MsgTransferToken.encode(
                ixo.token.v1beta1.MsgTransferToken.fromPartial({
                  owner: entityAdminAddress,
                  recipient: tester,
                  tokens: tokens.map((b: any) =>
                    ixo.token.v1beta1.TokenBatch.fromPartial({
                      id: b.id,
                      amount: (b?.amount ?? 0).toString(),
                    })
                  ),
                })
              ).finish(),
            },
          ],
        }),
      },
    ]
  );

  const messages = batchMessages.flat(1);

  const response = await client.signAndBroadcast(
    tester,
    messages,
    getFee(messages.length)
  );
  return response;
};

export const TransferTokenBatch = async (
  batches: {
    tokens: {
      id: string;
      amount: number;
    }[];
    entityDid: string;
    entityAdminAddress: string;
  }[]
) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;
  const alice = (await getUser(WalletUsers.alice).getAccounts())[0].address;

  const messages = batches.map((b) => ({
    typeUrl: "/ixo.token.v1beta1.MsgTransferToken",
    value: ixo.token.v1beta1.MsgTransferToken.fromPartial({
      owner: tester,
      recipient: b.entityAdminAddress,
      tokens: b.tokens.map((b) =>
        ixo.token.v1beta1.TokenBatch.fromPartial({
          id: b.id,
          amount: b.amount.toString(),
        })
      ),
    }),
  }));

  const response = await client.signAndBroadcast(
    tester,
    messages,
    getFee(messages.length)
  );
  return response;
};
