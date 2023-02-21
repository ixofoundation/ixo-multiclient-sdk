import Long from "long";
import { Timestamp } from "../../src/codegen/google/protobuf/timestamp";
import { MintConstraints } from "../../src/codegen/ixo/token/v1beta1/authz";
import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";
import {
  createClient,
  getUser,
  ixo,
  cosmos,
  queryClient,
} from "../helpers/common";
import { fee, WalletUsers } from "../helpers/constants";

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

  const granterUser = getUser(granter);
  const granterAcount = (await granterUser.getAccounts())[0];
  const granterAddress = granterAcount.address;
  const granterDid = granterUser.did;

  const granteeUser = getUser(grantee);
  const granteeAccount = (await granteeUser.getAccounts())[0];
  const granteeAddress = granteeAccount.address;

  const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
    grantee: granteeAddress,
  });
  const granteeCurrentMintAuthConstraints: MintConstraints[] =
    overrideCurretGrants || granteeGrants.grants.length == 0
      ? []
      : client.registry.decode(
          // assuming with simple tests MintAuth is first authz user has
          granteeGrants.grants[0].authorization!
        ).constraints;

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
              minterDid: granterDid,
              constraints: [
                ixo.token.v1beta1.MintConstraints.fromPartial({
                  contractAddress: contractAddress,
                  name,
                  index,
                  collection,
                  tokenData,
                  amount: amount.toString(),
                }),
                ...granteeCurrentMintAuthConstraints,
              ],
            })
          ).finish(),
        },
        expiration: Timestamp.fromPartial({
          // The addition is time to add from msg call, 60 seconds times 1000 for 1000 minutes
          seconds: Long.fromNumber(new Date().getTime() / 1000 + 60 * 10000),
          nanos: 0,
        }),
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

  const granterUser = getUser(granter);
  const granterAcount = (await granterUser.getAccounts())[0];
  const granterAddress = granterAcount.address;
  const granterDid = granterUser.did;

  const granteeUser = getUser(grantee);
  const granteeAccount = (await granteeUser.getAccounts())[0];
  const granteeAddress = granteeAccount.address;
  const granteeDid = granteeUser.did;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [
        {
          typeUrl: "/ixo.token.v1beta1.MsgMintToken",
          value: ixo.token.v1beta1.MsgMintToken.encode(
            ixo.token.v1beta1.MsgMintToken.fromPartial({
              minterDid: granterDid,
              minterAddress: granterAddress,
              contractAddress,
              ownerDid: granteeDid,
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

  const granterUser = getUser(granter);
  const granterAcount = (await granterUser.getAccounts())[0];
  const granterAddress = granterAcount.address;

  const granteeUser = getUser(grantee);
  const granteeAccount = (await granteeUser.getAccounts())[0];
  const granteeAddress = granteeAccount.address;

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

export const MsgGrantSend = async (
  amount = "10000000",
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(granter));

  const granterUser = getUser(granter);
  const granterAcount = (await granterUser.getAccounts())[0];
  const granterAddress = granterAcount.address;

  const granteeUser = getUser(grantee);
  const granteeAccount = (await granteeUser.getAccounts())[0];
  const granteeAddress = granteeAccount.address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granterAddress,
      grantee: granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
          value: cosmos.bank.v1beta1.SendAuthorization.encode(
            cosmos.bank.v1beta1.SendAuthorization.fromPartial({
              spendLimit: [
                cosmos.base.v1beta1.Coin.fromPartial({
                  amount,
                  denom: "uixo",
                }),
              ],
            })
          ).finish(),
        },
        expiration: Timestamp.fromPartial({
          // The addition is time to add from msg call, 60 seconds times 1000 for 1000 minutes
          seconds: Long.fromNumber(new Date().getTime() / 1000 + 60 * 1000),
          nanos: 0,
        }),
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

export const MsgExecSend = async (
  amount = "1000",
  granter = WalletUsers.tester,
  grantee = WalletUsers.alice
) => {
  const client = await createClient(getUser(grantee));

  const granterUser = getUser(granter);
  const granterAcount = (await granterUser.getAccounts())[0];
  const granterAddress = granterAcount.address;

  const granteeUser = getUser(grantee);
  const granteeAccount = (await granteeUser.getAccounts())[0];
  const granteeAddress = granteeAccount.address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: granteeAddress,
      msgs: [
        {
          typeUrl: "/cosmos.bank.v1beta1.MsgSend",
          value: cosmos.bank.v1beta1.MsgSend.encode(
            cosmos.bank.v1beta1.MsgSend.fromPartial({
              amount: [
                cosmos.base.v1beta1.Coin.fromPartial({
                  amount,
                  denom: "uixo",
                }),
              ],
              fromAddress: granterAddress,
              toAddress: granteeAddress,
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
