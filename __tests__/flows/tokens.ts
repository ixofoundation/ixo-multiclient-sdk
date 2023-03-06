import { testMsg, utils } from "../helpers/common";
import * as Token from "../modules/Token";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";
import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";

export const tokenBasic = () =>
  describe("Testing the Token module", () => {
    let name = "CARBON";
    let description = "Carbon credits";
    let cap = 200;

    // Create token class
    let tokenClass = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    // testMsg("/ixo.entity.v1beta1.MsgCreateEntity token class", async () => {
    //   const res = await Entity.CreateEntity("protocol");
    //   tokenClass = utils.common.getValueFromEvents(res, "wasm", "token_id");
    //   console.log({ tokenClass });
    //   return res;
    // });

    let contractAddress1155 =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    // testMsg("/ixo.token.v1beta1.MsgCreateToken", async () => {
    //   const res = await Token.CreateToken(name, description, cap, tokenClass);
    //   contractAddress1155 = utils.common.getValueFromEvents(
    //     res,
    //     "instantiate",
    //     "_contract_address"
    //   );
    //   console.log({ contractAddress1155 });
    //   return res;
    // });

    let index = "3";
    let amount = 10;
    let collectionDid = "did:ixo:entity:c72f5b6019443ac23d3aafb5ed8be614"; // Did of collection eg (Supamoto created in supamoto flow var protocolAssetDid)
    let nftDid = "did:ixo:entity:c72f5b6019443ac23d3aafb5ed8be614"; // Did of entity to map token to
    let tokenData = [
      {
        uri: "https://media.makeameme.org/created/haha-you-were-a3866a4349.jpg",
        encrypted: false,
        proof: "proof",
        type: "application/json", //media type value should always be "application/json"
        id: nftDid,
      },
    ];

    let tokenId = "39d57f760c58ff91c1407925bdcbe0da";
    // testMsg("/ixo.token.v1beta1.MsgMintToken", async () => {
    //   const res = await Token.MintToken(contractAddress1155, [
    //     {
    //       name,
    //       index,
    //       amount,
    //       collection: collectionDid,
    //       tokenData,
    //     },
    //   ]);
    //   tokenId = utils.common.getValueFromEvents(res, "wasm", "token_id");
    //   console.log({ tokenId });
    //   return res;
    // });

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
    //       id: tokenId,
    //       amount: 3,
    //     },
    //   ])
    // );

    // testMsg("/ixo.token.v1beta1.MsgPauseToken", () =>
    //   Token.PauseToken(contractAddress1155, false)
    // );

    // testMsg("/ixo.token.v1beta1.MsgStopToken", () =>
    //   Token.StopToken(contractAddress1155)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgGrant mint token", () =>
    //   Token.MsgGrantContract(
    //     contractAddress1155,
    //     name,
    //     index,
    //     collectionDid,
    //     amount,
    //     tokenData
    //   )
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec mint token", () =>
    //   Token.MsgExecContract(contractAddress1155, [
    //     {
    //       name,
    //       index,
    //       amount,
    //       collection: collectionDid,
    //       tokenData,
    //     },
    //   ])
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgRevoke mint token", () => Token.MsgRevokeContract());
  });
