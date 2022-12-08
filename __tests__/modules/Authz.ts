import Long from "long";
import { Timestamp } from "../../src/codegen/google/protobuf/timestamp";
import { createClient, getUser, ixo, cosmos } from "../helpers/common";
import { fee, WalletUsers } from "../helpers/constants";

export const MsgGrantContract = async (
  granter: WalletUsers = WalletUsers.tester,
  grantee: WalletUsers = WalletUsers.alice,
  contractAddress: string,
  type: "cw721" | "cw1155" | "cw20" = "cw20"
) => {
  const client = await createClient(getUser(granter));

  const tester = getUser(granter);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const myDid = tester.did;

  const granteeUser = getUser(grantee);
  const granteeAccount = (await granteeUser.getAccounts())[0];
  const granteeAddress = granteeAccount.address;

  const secondsSinceEpoch = new Date().getTime() * 1000;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: myAddress,
      grantee: granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/ixo.token.v1beta1.MintAuthorization",
          value: ixo.token.v1beta1.MintAuthorization.encode(
            ixo.token.v1beta1.MintAuthorization.fromPartial({
              minterDid: myDid,
              constraints: [
                ixo.token.v1beta1.MintConstraints.fromPartial({
                  contractAddress: contractAddress,
                  limit: Long.fromNumber(10),
                  ...(type === "cw721"
                    ? {
                        cw721Constraints:
                          ixo.token.v1beta1.Cw721Constraints.fromPartial({}),
                      }
                    : type === "cw1155"
                    ? {
                        cw1155Constraints:
                          ixo.token.v1beta1.Cw1155Constraints.fromPartial({
                            value: Long.fromNumber(10),
                          }),
                      }
                    : {
                        cw20Constraints:
                          ixo.token.v1beta1.Cw20Constraints.fromPartial({
                            maxAmmount: Long.fromNumber(10),
                          }),
                      }),
                }),
              ],
            })
          ).finish(),
        },
        // expiration: Timestamp.fromPartial({
        //   // The addition is time to add from msg call, 60 seconds times 20 for 20 minutes
        //   seconds: Long.fromNumber(secondsSinceEpoch + 60 * 20),
        // }),
      }),
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const MsgExecContract = async (
  grantee: WalletUsers = WalletUsers.alice,
  contractAddress: string,
  type: "cw721" | "cw1155" | "cw20" = "cw20"
) => {
  const client = await createClient(getUser(grantee));

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
          typeUrl: "/ixo.token.v1beta1.MsgMint",
          value: ixo.token.v1beta1.MsgMint.encode(
            ixo.token.v1beta1.MsgMint.fromPartial({
              minterDid: granteeDid,
              minterAddress: granteeAddress,
              contractAddress: contractAddress,
              ...(type === "cw721"
                ? {
                    cw721: ixo.token.v1beta1.MintCw721.fromPartial({
                      id: "id",
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
                    }),
                  }
                : type === "cw1155"
                ? {
                    cw1155: ixo.token.v1beta1.MintCw1155.fromPartial({
                      id: "id",
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
                      value: Long.fromNumber(1),
                    }),
                  }
                : {
                    cw20: ixo.token.v1beta1.MintCw20.fromPartial({
                      amount: Long.fromNumber(1),
                    }),
                  }),
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

  const tester = getUser(granter);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const granteeUser = getUser(grantee);
  const granteeAccount = (await granteeUser.getAccounts())[0];
  const granteeAddress = granteeAccount.address;

  const message = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    value: cosmos.authz.v1beta1.MsgRevoke.fromPartial({
      granter: myAddress,
      grantee: granteeAddress,
      msgTypeUrl: "/ixo.token.v1beta1.MsgMint",
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
