import { testMsg, utils } from "../helpers/common";
import * as Token from "../modules/Token";
import * as Authz from "../modules/Authz";
import { WalletUsers } from "../helpers/constants";

export const tokenBasic = () =>
  describe("Testing the Token module", () => {
    let contractAddress20: string;
    let contractAddress721: string;
    let contractAddress1155: string;

    testMsg("/ixo.token.v1beta1.MsgSetupMinter", async () => {
      const res = await Token.SetupMinter();
      contractAddress20 = utils.common.getValueFromEvents(
        res,
        "ixo.token.v1beta1.TokenMinter",
        "contractAddress"
      );
      console.log({ contractAddress20 });
      return res;
    });
    testMsg("/ixo.token.v1beta1.MsgMint", () =>
      Token.MintToken(contractAddress20, "cw20")
    );

    testMsg("/ixo.token.v1beta1.MsgSetupMinter", async () => {
      const res = await Token.SetupMinter(undefined, "cw721");
      contractAddress721 = utils.common.getValueFromEvents(
        res,
        "ixo.token.v1beta1.TokenMinter",
        "contractAddress"
      );
      console.log({ contractAddress721 });
      return res;
    });
    testMsg("/ixo.token.v1beta1.MsgMint", () =>
      Token.MintToken(contractAddress721, "cw721")
    );

    testMsg("/ixo.token.v1beta1.MsgSetupMinter", async () => {
      const res = await Token.SetupMinter(undefined, "cw1155");
      contractAddress1155 = utils.common.getValueFromEvents(
        res,
        "ixo.token.v1beta1.TokenMinter",
        "contractAddress"
      );
      console.log({ contractAddress1155 });
      return res;
    });
    testMsg("/ixo.token.v1beta1.MsgMint", () =>
      Token.MintToken(contractAddress1155, "cw1155")
    );
    testMsg("/cosmos.authz.v1beta1.MsgGrant", () =>
      Authz.MsgGrantContract(
        undefined,
        WalletUsers.alice,
        contractAddress1155,
        "cw1155"
      )
    );
    testMsg("/cosmos.authz.v1beta1.MsgExec", () =>
      Authz.MsgExecContract(undefined, contractAddress1155, "cw1155")
    );
    testMsg("/cosmos.authz.v1beta1.MsgRevoke", () => Authz.MsgRevokeContract());

    testMsg("/ixo.token.v1beta1.MsgTransferToken", () => Token.TransferToken());
  });
