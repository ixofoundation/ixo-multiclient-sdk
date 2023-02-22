import { testMsg, utils } from "../helpers/common";
import * as Token from "../modules/Token";
import * as Authz from "../modules/Authz";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";
import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";

export const tokenBasic = () =>
  describe("Testing the Token module", () => {
    let name = "CARBON";
    let description = "Carbon credits";
    let cap = 50;

    // Create token class
    let tokenClass: string;
    tokenClass = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    // testMsg("/ixo.entity.v1beta1.MsgCreateEntity token class", async () => {
    //   const res = await Entity.CreateEntity("protocol");
    //   tokenClass = utils.common.getValueFromEvents(
    //     res,
    //     "ixo.iid.v1beta1.IidDocumentCreatedEvent",
    //     "did"
    //   );
    //   console.log({ tokenClass });
    //   return res;
    // });

    let contractAddress1155: string;
    contractAddress1155 =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    // testMsg("/ixo.token.v1beta1.MsgCreateToken", async () => {
    //   const res = await Token.CreateToken(name, description, cap, tokenClass);
    //   contractAddress1155 = utils.common.getValueFromEvents(
    //     res,
    //     "ixo.token.v1beta1.TokenCreatedEvent",
    //     "contract_address"
    //   );
    //   console.log({ contractAddress1155 });
    //   return res;
    // });

    let index = "5";
    let amount = 1;
    let collection = "collection";
    let tokenData: TokenData[];

    testMsg("/ixo.token.v1beta1.MsgMintToken", async () => {
      const res = await Token.MintToken(contractAddress1155, [
        {
          name,
          index,
          amount,
          collection,
          tokenData,
        },
      ]);
      const tokenIds = utils.common.getValueFromEvents(
        res,
        "ixo.token.v1beta1.TokenMintedEvent",
        "batches"
      );
      console.log({ tokenIds });
      return res;
    });

    // testMsg("/ixo.token.v1beta1.MsgTransferToken", () =>
    //   Token.TransferToken([
    //     {
    //       id: "39d57f760c58ff91c1407925bdcbe0da",
    //       amount: 1,
    //     },
    //   ])
    // );

    // testMsg("/ixo.token.v1beta1.MsgCancelToken", () =>
    //   Token.CancelToken([
    //     {
    //       id: "39d57f760c58ff91c1407925bdcbe0da",
    //       amount: 1,
    //     },
    //   ])
    // );

    // testMsg("/ixo.token.v1beta1.MsgRetireToken", () =>
    //   Token.RetireToken([
    //     {
    //       id: "80e3ff80e4a804364749709e100d358f",
    //       amount: 1,
    //     },
    //   ])
    // );

    // testMsg("/ixo.token.v1beta1.MsgPauseToken", () =>
    //   Token.PauseToken(contractAddress1155, false)
    // );

    // testMsg("/ixo.token.v1beta1.MsgStopToken", () =>
    //   Token.StopToken(contractAddress1155)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgGrant", () =>
    //   Authz.MsgGrantContract(
    //     contractAddress1155,
    //     name,
    //     index,
    //     collection,
    //     amount,
    //     tokenData
    //   )
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec", () =>
    //   Authz.MsgExecContract(contractAddress1155, [
    //     {
    //       name,
    //       index,
    //       amount,
    //       collection,
    //       tokenData,
    //     },
    //   ])
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgRevoke", () => Authz.MsgRevokeContract());
  });
