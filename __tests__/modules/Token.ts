import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";
import {
  addDays,
  cosmos,
  createClient,
  getUser,
  ixo,
  queryClient,
  utils,
} from "../helpers/common";
import { fee, WalletUsers } from "../helpers/constants";

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
      minter: tester,
      name,
      description,
      image:
        "https://static.javatpoint.com/business/images/carbon-credits-and-how-they-can-offset-your-carbon-footprint.jpg",
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
  }[]
) => {
  const client = await createClient();

  const tester = (await getUser(WalletUsers.tester).getAccounts())[0].address;
  const alice = (await getUser(WalletUsers.alice).getAccounts())[0].address;

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
    (g) => g.authorization?.typeUrl == "/ixo.token.v1beta1.MsgMintToken"
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
