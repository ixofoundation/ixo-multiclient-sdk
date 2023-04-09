import { testMsg, utils, ixo, timeout } from "../helpers/common";
import * as Claims from "../modules/Claims";
import * as Cosmos from "../modules/Cosmos";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";

export const claimsBasic = () =>
  describe("Testing the Claims module", () => {
    // Create protocol
    let protocol = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    let adminAccount = "ixo1kqmtxkggcqa9u34lnr6shy0euvclgatw4f9zz5";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity.CreateEntity(
        "protocol",
        undefined,
        "",
        WalletUsers.charlie
      );
      protocol = utils.common.getValueFromEvents(res, "wasm", "token_id");
      adminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ protocol, adminAccount });
      return res;
    });

    // helper to send funds to an admin account
    testMsg("test Bank Send to admin account", () =>
      Cosmos.BankSendTrx(
        100000000,
        WalletUsers.tester,
        undefined,
        undefined,
        undefined,
        adminAccount
      )
    );

    let collectionId = "1";
    let claimId = "1";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
      const res = await Claims.CreateCollection(
        protocol,
        protocol,
        adminAccount
      );
      collectionId = utils.common.getValueFromEvents(
        res,
        "ixo.claims.v1beta1.CollectionCreatedEvent",
        "collection",
        (c) => c.id
      );
      console.log({ collectionId });
      return res;
    });

    testMsg("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent submit", () =>
      Claims.GrantEntityAccountClaimsSubmitAuthz(
        protocol,
        "admin",
        adminAccount,
        collectionId,
        10,
        false,
        WalletUsers.tester
      )
    );

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
      () =>
        Claims.GrantEntityAccountClaimsEvaluateAuthz(
          protocol,
          "admin",
          adminAccount,
          collectionId,
          [],
          10,
          false,
          WalletUsers.tester
        )
    );

    testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", () =>
      Claims.MsgExecAgentSubmit(
        claimId,
        collectionId,
        adminAccount,
        WalletUsers.tester
      )
    );

    testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
      Claims.MsgExecAgentEvaluate(
        claimId,
        collectionId,
        adminAccount,
        ixo.claims.v1beta1.EvaluationStatus.APPROVED,
        WalletUsers.tester
      )
    );

    testMsg("/cosmos.authz.v1beta1.MsgExec withdraw payment", async () => {
      // Wait 30 seconds to make sure submission release date for withdrawal auth constraint passed
      await timeout(35 * 1000);
      const res = await Claims.MsgExecWithdrawal(
        claimId,
        adminAccount,
        ixo.claims.v1beta1.PaymentType.SUBMISSION
      );
      return res;
    });

    testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
      Claims.DisputeClaim(claimId, "proof1")
    );
  });

// ------------------------------------------------------------
// flow to run after devnet was reset, please dont change
// ------------------------------------------------------------
export const devnetClaims = () =>
  describe("Testing the Claims module", () => {
    // Create protocol
    let protocol = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14";
    let adminAccount = "ixo1kqmtxkggcqa9u34lnr6shy0euvclgatw4f9zz5";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity.CreateEntity(
        "protocol",
        undefined,
        "",
        WalletUsers.charlie
      );
      protocol = utils.common.getValueFromEvents(res, "wasm", "token_id");
      adminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ protocol, adminAccount });
      return res;
    });

    // helper to send funds to an admin account
    testMsg("test Bank Send to admin account", () =>
      Cosmos.BankSendTrx(
        100000000,
        WalletUsers.tester,
        undefined,
        undefined,
        undefined,
        adminAccount
      )
    );

    let collectionId = "1";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
      const res = await Claims.CreateCollection(
        protocol,
        protocol,
        adminAccount
      );
      collectionId = utils.common.getValueFromEvents(
        res,
        "ixo.claims.v1beta1.CollectionCreatedEvent",
        "collection",
        (c) => c.id
      );
      console.log({ collectionId });
      return res;
    });

    testMsg("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent submit", () =>
      Claims.GrantEntityAccountClaimsSubmitAuthz(
        protocol,
        "admin",
        adminAccount,
        collectionId,
        100,
        false,
        WalletUsers.tester
      )
    );

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
      () =>
        Claims.GrantEntityAccountClaimsEvaluateAuthz(
          protocol,
          "admin",
          adminAccount,
          collectionId,
          [],
          100,
          false,
          WalletUsers.tester
        )
    );

    let claimIds = [
      utils.common.generateId(10),
      utils.common.generateId(10),
      utils.common.generateId(10),
      utils.common.generateId(10),
      utils.common.generateId(10),
      utils.common.generateId(10),
      utils.common.generateId(10),
      utils.common.generateId(10),
    ];

    claimIds.map((claimId, i) => [
      testMsg(
        `/cosmos.authz.v1beta1.MsgExec agent submit claimId: ${claimId}, ${
          i + 1
        } of ${claimIds.length}`,
        () =>
          Claims.MsgExecAgentSubmit(
            claimId,
            collectionId,
            adminAccount,
            WalletUsers.tester
          )
      ),
      testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
        Claims.MsgExecAgentEvaluate(
          claimId,
          collectionId,
          adminAccount,
          i % 2 == 0
            ? ixo.claims.v1beta1.EvaluationStatus.APPROVED
            : ixo.claims.v1beta1.EvaluationStatus.REJECTED,
          WalletUsers.tester
        )
      ),
      testMsg("/cosmos.authz.v1beta1.MsgExec withdraw payment", async () => {
        console.log(
          "Waiting 35 second for withdrawal authorization release date to pass"
        );
        await timeout(35 * 1000);
        const res = await Claims.MsgExecWithdrawal(
          claimId,
          adminAccount,
          ixo.claims.v1beta1.PaymentType.SUBMISSION,
          WalletUsers.tester
        );
        return res;
      }),
    ]);

    testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
      Claims.DisputeClaim(claimIds[0], "proof0")
    );
    testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
      Claims.DisputeClaim(claimIds[1], "proof1")
    );
  });
