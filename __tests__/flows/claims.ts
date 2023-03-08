import { testMsg, utils } from "../helpers/common";
import * as Claims from "../modules/Claims";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";

export const claimsBasic = () =>
  describe("Testing the Claims module", () => {
    // Create protocol
    let protocol = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    // testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
    //   const res = await Entity.CreateEntity(
    //     "protocol",
    //     undefined,
    //     WalletUsers.charlie
    //   );
    //   protocol = utils.common.getValueFromEvents(res, "wasm", "token_id");
    //   console.log({ protocol });
    //   return res;
    // });

    // check the rawLog from below test to get collectionId
    let collectionId = "1";
    testMsg(
      "/ixo.claims.v1beta1.MsgCreateCollection",
      () => Claims.CreateCollection(protocol, protocol),
      true
    );

    let claimId = "1";
    testMsg("/ixo.claims.v1beta1.MsgSubmitClaim", () =>
      Claims.SubmitClaim(claimId, collectionId)
    );

    // testMsg("/ixo.claims.v1beta1.MsgEvaluateClaim", () =>
    //   Claims.EvaluateClaim(claimId, collectionId)
    // );

    // testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
    //   Claims.DisputeClaim(claimId, "proof1")
    // );

    // testMsg("/ixo.claims.v1beta1.MsgWithdrawPayment", () =>
    //   Claims.WithdrawPayment(claimId)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgGrant agent submit", () =>
    //   Claims.MsgGrantAgentSubmit(collectionId, 10)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", () =>
    //   Claims.MsgExecAgentSubmit(claimId, collectionId)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgGrant agent evaluate", () =>
    //   Claims.MsgGrantAgentEvaluate(collectionId, [], 10)
    // );

    // testMsg(
    //   "/cosmos.authz.v1beta1.MsgExec agent evaluate",
    //   () => Claims.MsgExecAgentEvaluate(claimId, collectionId),
    //   true
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec withdraw payment", () =>
    //   Claims.MsgExecWithdrawal(claimId)
    // );
  });

// ------------------------------------------------------------
// flow to run after devnet was reset, please dont change
// ------------------------------------------------------------
export const claimsDev = () =>
  describe("Testing the Claims module", () => {
    // Create protocol
    let protocol = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity.CreateEntity(
        "protocol",
        undefined,
        WalletUsers.charlie
      );
      protocol = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ protocol });
      return res;
    });

    let collectionId = "1";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", () =>
      Claims.CreateCollection(protocol, protocol)
    );

    let claimId = "1";
    testMsg("/ixo.claims.v1beta1.MsgSubmitClaim", () =>
      Claims.SubmitClaim(claimId, collectionId)
    );

    testMsg("/ixo.claims.v1beta1.MsgEvaluateClaim", () =>
      Claims.EvaluateClaim(claimId, collectionId)
    );

    testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
      Claims.DisputeClaim(claimId, "proof1", WalletUsers.tester)
    );
  });
