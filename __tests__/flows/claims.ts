import { testMsg, utils } from "../helpers/common";
import * as Claims from "../modules/Claims";
import * as Cosmos from "../modules/Cosmos";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";

export const claimsBasic = () =>
  describe("Testing the Claims module", () => {
    // Create protocol
    let protocol = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    // get from entity creation rawLog below
    let adminAccount = "ixo1kqmtxkggcqa9u34lnr6shy0euvclgatw4f9zz5";
    // testMsg(
    //   "/ixo.entity.v1beta1.MsgCreateEntity protocol",
    //   async () => {
    //     const res = await Entity.CreateEntity(
    //       "protocol",
    //       undefined,
    //       WalletUsers.charlie
    //     );
    //     protocol = utils.common.getValueFromEvents(res, "wasm", "token_id");
    //     console.log({ protocol });
    //     return res;
    //   },
    //   true
    // );

    // helper to send funds to an admin account
    // testMsg("test Bank Send to admin account", () =>
    //   Cosmos.BankSendTrx(100000000, WalletUsers.tester, undefined, adminAccount)
    // );

    // check the rawLog from below test to get collectionId
    let collectionId = "1";
    // testMsg(
    //   "/ixo.claims.v1beta1.MsgCreateCollection",
    //   () => Claims.CreateCollection(protocol, protocol, adminAccount),
    //   true
    // );

    let claimId = "1";
    // testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
    //   Claims.DisputeClaim(claimId, "proof1")
    // );

    // testMsg(
    //   "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent submit",
    //   () =>
    //     Claims.GrantEntityAccountClaimsSubmitAuthz(
    //       protocol,
    //       "admin",
    //       adminAccount,
    //       collectionId,
    //       10
    //     ),
    //   true
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", () =>
    //   Claims.MsgExecAgentSubmit(claimId, collectionId, adminAccount)
    // );

    // testMsg(
    //   "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
    //   () =>
    //     Claims.GrantEntityAccountClaimsEvaluateAuthz(
    //       protocol,
    //       "admin",
    //       adminAccount,
    //       collectionId,
    //       [],
    //       10
    //     ),
    //   true
    // );

    // testMsg(
    //   "/cosmos.authz.v1beta1.MsgExec agent evaluate",
    //   () => Claims.MsgExecAgentEvaluate(claimId, collectionId, adminAccount),
    //   true
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec withdraw payment", () =>
    //   Claims.MsgExecWithdrawal(claimId, adminAccount)
    // );
  });
