import { testMsg, utils } from "../helpers/common";
import * as Token from "../modules/Token";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";
import { TokenData } from "../../src/codegen/ixo/token/v1beta1/token";

export const tokenBasic = () =>
  describe("Testing the Token module", () => {
    let name = "TEST";
    let description = "Test credits";
    let cap = 200;

    // Create token class
    let tokenClass = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity token class", async () => {
      const res = await Entity.CreateEntity("protocol");
      tokenClass = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ tokenClass });
      return res;
    });

    let contractAddress1155 =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    testMsg("/ixo.token.v1beta1.MsgCreateToken", async () => {
      const res = await Token.CreateToken(name, description, cap, tokenClass);
      contractAddress1155 = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress1155 });
      return res;
    });

    let index = "1";
    let amount = 10;
    let collectionDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14"; // Did of collection
    let nftDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14"; // Did of entity to map token to
    let tokenData = [
      {
        uri: "https://media.makeameme.org/created/haha-you-were-a3866a4349.jpg",
        encrypted: false,
        proof: "proof",
        type: "application/json", //media type value should always be "application/json"
        id: nftDid,
      },
    ];

    let tokenId = "d89fc11cef9424891fdf9ae173f88a6e";
    testMsg("/ixo.token.v1beta1.MsgMintToken", async () => {
      const res = await Token.MintToken(contractAddress1155, [
        {
          name,
          index,
          amount,
          collection: collectionDid,
          tokenData,
        },
      ]);
      tokenId = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ tokenId });
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

    testMsg("/ixo.token.v1beta1.MsgRetireToken", () =>
      Token.RetireToken([
        {
          id: tokenId,
          amount: 3,
        },
      ])
    );

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

// flow to run after devnet was reset, please dont change as using constants
export const supamotoTokens = () =>
  describe("Testing the Supamoto Tokens flow", () => {
    let name = "CARBON";
    let description = "Carbon credits";
    let cap = 200;

    // Create token class
    let tokenClass = "did:ixo:entity:4e32697c7c2c74f4fac48e4d1d5628cd";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity token class", async () => {
      const res = await Entity.CreateEntity("protocol");
      tokenClass = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ tokenClass });
      return res;
    });

    let contractAddress1155 =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    testMsg("/ixo.token.v1beta1.MsgCreateToken", async () => {
      const res = await Token.CreateToken(name, description, cap, tokenClass);
      contractAddress1155 = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress1155 });
      return res;
    });

    let index = "1";
    let amount = 10;
    // Did of collection (supamotoEntitiesFlow protocolAssetDid)
    let collectionDid = "did:ixo:entity:61392c571ef644d54d77e4daf611bf89";
    // Did of entity to map token to (supamotoEntitiesFlow first nft created)
    let nftDid = "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d";
    let tokenData = [
      {
        uri: "https://media.makeameme.org/created/haha-you-were-a3866a4349.jpg",
        encrypted: false,
        proof: "proof",
        type: "application/json", //media type value should always be "application/json"
        id: nftDid,
      },
    ];

    let tokenId = "d89fc11cef9424891fdf9ae173f88a6e";
    testMsg("/ixo.token.v1beta1.MsgMintToken", async () => {
      const res = await Token.MintToken(contractAddress1155, [
        {
          name,
          index,
          amount,
          collection: collectionDid,
          tokenData,
        },
      ]);
      tokenId = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ tokenId });
      return res;
    });

    testMsg("/ixo.token.v1beta1.MsgCancelToken", () =>
      Token.CancelToken([
        {
          id: tokenId,
          amount: 1,
        },
      ])
    );

    testMsg("/ixo.token.v1beta1.MsgRetireToken", () =>
      Token.RetireToken([
        {
          id: tokenId,
          amount: 3,
        },
      ])
    );
  });
