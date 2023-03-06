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

    let collectionId = "1";
    // testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
    //   const res = await Claims.CreateCollection(protocol, protocol);
    //   console.log(res.rawLog);
    //   return res;
    // });

    let claimId = "1";
    // testMsg("/ixo.claims.v1beta1.MsgSubmitClaim", async () => {
    //   const res = await Claims.SubmitClaim(claimId, collectionId);
    //   console.log(res.rawLog);
    //   return res;
    // });

    // testMsg("/ixo.claims.v1beta1.MsgEvaluateClaim", async () => {
    //   const res = await Claims.EvaluateClaim(claimId, collectionId);
    //   console.log(res.rawLog);
    //   return res;
    // });

    // testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
    //   Claims.DisputeClaim(claimId, "proof1")
    // );

    // testMsg("/ixo.claims.v1beta1.MsgWithdrawPayment", () =>
    //   Claims.WithdrawPayment(claimId)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgGrant agent submit", () =>
    //   Claims.MsgGrantAgentSubmit(collectionId, 10)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", async () => {
    //   const res = await Claims.MsgExecAgentSubmit(claimId, collectionId);
    //   console.log(res.rawLog);
    //   return res;
    // });

    // testMsg("/cosmos.authz.v1beta1.MsgGrant agent evaluate", () =>
    //   Claims.MsgGrantAgentEvaluate(collectionId, [], 10)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
    //   Claims.MsgExecAgentEvaluate(claimId, collectionId)
    // );

    // testMsg("/cosmos.authz.v1beta1.MsgExec withdraw payment", () =>
    //   Claims.MsgExecWithdrawal(claimId)
    // );
  });
