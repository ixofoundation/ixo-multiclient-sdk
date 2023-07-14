import csvtojsonV2 from "csvtojson/v2";
import {
  testMsg,
  utils,
  ixo,
  timeout,
  generateNewWallet,
  chunkArray,
  saveFileToPath,
} from "../helpers/common";
import * as Claims from "../modules/Claims";
import * as Cosmos from "../modules/Cosmos";
import * as Entity from "../modules/Entity";
import { WalletUsers } from "../helpers/constants";
import {
  CarbonCredentialsWorkerUrl,
  EcsCredentialsWorkerUrl,
  ProspectCredentialsWorkerUrl,
  adminEntityAccounts,
  dids,
} from "../setup/constants";
import { chainNetwork } from "../index.spec";
import axios from "axios";
import axiosRetry from "axios-retry";
import { cookstoveIds } from "../setup/supamoto/stoves";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";

axiosRetry(axios, {
  retries: 3,
  retryDelay: () => 1000,
});

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
        ixo.claims.v1beta1.PaymentType.SUBMISSION,
        WalletUsers.tester
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
export const supamotoClaims = () =>
  describe("Testing the Claims module", () => {
    // Set tester as root ecs user
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS),
        generateNewWallet(WalletUsers.oracle, process.env.ASSERT_USER_ECS),
        generateNewWallet(
          WalletUsers.bob,
          process.env.ASSERT_USER_PROSPECT_ORACLE
        ),
        generateNewWallet(
          WalletUsers.charlie,
          process.env.ASSERT_USER_CARBON_ORACLE
        ),
      ])
    );

    if (chainNetwork === "devnet") {
      // helper to send funds to an admin account
      testMsg("test Bank Send to admin account", () =>
        Cosmos.BankSendTrx(
          100000000000,
          WalletUsers.alice,
          undefined,
          undefined,
          undefined,
          adminEntityAccounts.assetCollection
        )
      );
      // helper to send funds to carbon oracle assert user to make evaluations and mint tokens
      testMsg("test Bank Send to carbon oracle assert user", () =>
        Cosmos.BankSendTrx(1000000000, undefined, WalletUsers.charlie)
      );
      // helper to send funds to ecs assert user to make claims
      testMsg("test Bank Send to ecs assert user", () =>
        Cosmos.BankSendTrx(1000000000, undefined, WalletUsers.oracle)
      );
    }

    let collectionId = "1";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
      // add wait according to chunk index for ipfs rate limit
      console.log(
        "waiting 5 mintues as blocksync needs 5 minutes to load all ipfs files for entity external Ids"
      );
      await timeout(1000 * 60 * 5);

      const res = await Claims.CreateCollectionSupamotoGenesis(
        dids.assetCollection,
        dids.cleanCookingProtocol,
        adminEntityAccounts.assetCollection
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

    // ECS can submit claims
    testMsg("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent submit", () =>
      Claims.GrantEntityAccountClaimsSubmitAuthz(
        dids.assetCollection,
        "admin",
        adminEntityAccounts.assetCollection,
        collectionId,
        999999999,
        false,
        WalletUsers.oracle
      )
    );

    // Prospect can evaluate
    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
      () =>
        Claims.GrantEntityAccountClaimsEvaluateAuthzSupamoto(
          dids.assetCollection,
          "admin",
          adminEntityAccounts.assetCollection,
          collectionId,
          [],
          999999999,
          false,
          WalletUsers.bob
        )
    );

    // CARBON oracle can evaluate
    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
      () =>
        Claims.GrantEntityAccountClaimsEvaluateAuthzSupamoto(
          dids.assetCollection,
          "admin",
          adminEntityAccounts.assetCollection,
          collectionId,
          [],
          999999999,
          false,
          WalletUsers.charlie
        )
    );

    let purchaseData: any;
    test("Generate Fuel Purchase claims and evaluate them", async () => {
      purchaseData = await csvtojsonV2().fromFile(
        "./assets/documents/emerging/payments.csv"
      );

      // remove any duplicate transactions by transaction id
      purchaseData = Object.values(
        purchaseData.reduce((aggObj, item) => {
          if (!aggObj[item.telco_transaction_id])
            aggObj[item.telco_transaction_id] = {
              ...item,
              // Custom date transformation to match json schema format
              time_paid: new Date(item.time_paid.replace(" ", "T") + "Z"),
            };
          return aggObj;
        }, {})
      );

      // chunk payments into objects with device id as key
      purchaseData = purchaseData.reduce((aggObj, item) => {
        if (!aggObj[item.device_id]) aggObj[item.device_id] = [item];
        else aggObj[item.device_id] = [...aggObj[item.device_id], item];
        return aggObj;
      }, {});

      // remove all stoveIds that id not in const list and sort device purchases according to time_paid
      const allCookstoveIds = cookstoveIds.map((c) => c.id);
      Object.keys(purchaseData).forEach((k) => {
        if (!allCookstoveIds.includes(Number(k))) delete purchaseData[k];
        else purchaseData[k].sort((a, b) => a.time_paid - b.time_paid);
      });

      // devide payments per device into 50 devices at a time
      // ==============================================================
      purchaseData = chunkArray<any[]>(Object.values(purchaseData), 30);
      let stovePurchasesAll: any[] = [];
      let index = -1;

      console.time("claims");
      for (const stovePurchases of purchaseData) {
        index++;
        // if (index !== 3) continue; // if want to only mint a certain amount of batches add number here
        console.log(
          "starting batch " + (index + 1) + " of " + purchaseData.length
        );
        // add wait for ipfs rate limit
        if (index) await timeout(1000 * 30);

        // create fuelPurchase claims for each purchase
        const fpClaims = await axios.post(
          EcsCredentialsWorkerUrl + "claims/create",
          {
            type: "fuelPurchase",
            collectionId: "1",
            storage: "cellnode",
            generate: {
              type: "FuelPurchaseSupamotoZambia",
              data: stovePurchases.flat(1).map((p: any) => ({
                id: p.telco_transaction_id, // transaction id
                provider: p.telco, // transaction provider
                currency: p.currency, // transaction currency
                value: Number(p.amount), // transaction value
                dateTime: p.time_paid, // transaction date time
                amount: Number(p.pellet_bag_size * p.pellet_bag_quantity), // amount pellets that bought in kg
                deviceId: p.device_id, // device id
              })),
            },
          },
          { headers: { Authorization: process.env.ECS_CREDENTIAL_WORKER_AUTH } }
        );
        assertIsDeliverTxSuccess(fpClaims.data);
        const fpClaimIds: string[] = utils.common.getValuesFromEvents(
          fpClaims.data,
          "ixo.claims.v1beta1.ClaimSubmittedEvent",
          "claim",
          (c) => c.claim_id
        );
        console.log(
          fpClaimIds.length + " FuelPurchase claims successfully created"
        );

        // evaluate fuelPurchase claims
        const fpEvaluations = await axios.post(
          ProspectCredentialsWorkerUrl + "claims/evaluate",
          {
            collectionId: "1",
            evaluations: fpClaimIds.map((id) => ({
              claimId: id,
              reason: 1,
              status: ixo.claims.v1beta1.EvaluationStatus.APPROVED,
              oracle: dids.prospectOracle,
              verificationProof: "proof",
            })),
          },
          {
            headers: {
              Authorization: process.env.PROSPECT_CREDENTIAL_WORKER_AUTH,
            },
          }
        );
        assertIsDeliverTxSuccess(fpEvaluations.data);
        console.log(
          fpClaimIds.length + " FuelPurchase claims successfully evaluated"
        );

        // save fuelPurchase claim ids per purchase
        stovePurchases.forEach((ps: any[], i) => {
          ps.forEach((p: any, j) => {
            stovePurchases[i][j].fuelPurchaseClaimId = fpClaimIds.shift();
          });
        });

        // console.log("VER claims successfully created and tokens minted");
        console.timeLog("claims");
        // add current stove purchases chunk to all stove purchases
        stovePurchasesAll = stovePurchasesAll.concat(stovePurchases);
      }
      console.timeEnd("claims");

      // save all stove purchases to file
      saveFileToPath(
        ["documents", "emerging", "fuelPurchases_dev.json"],
        JSON.stringify(stovePurchasesAll, null, 2)
      );

      expect(true).toBeTruthy();
    });

    // OLD DUMMY CLAIMS
    // ===============================
    // let claimIds = [
    //   utils.common.generateId(10),
    //   utils.common.generateId(10),
    //   utils.common.generateId(10),
    //   utils.common.generateId(10),
    //   utils.common.generateId(10),
    //   utils.common.generateId(10),
    //   utils.common.generateId(10),
    //   utils.common.generateId(10),
    // ];

    // claimIds.map((claimId, i) => [
    //   testMsg(
    //     `/cosmos.authz.v1beta1.MsgExec agent submit claimId: ${claimId}, ${
    //       i + 1
    //     } of ${claimIds.length}`,
    //     () =>
    //       Claims.MsgExecAgentSubmit(
    //         claimId,
    //         collectionId,
    //         adminAccount,
    //         WalletUsers.tester
    //       )
    //   ),
    //   testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
    //     Claims.MsgExecAgentEvaluate(
    //       claimId,
    //       collectionId,
    //       adminAccount,
    //       i % 2 == 0
    //         ? ixo.claims.v1beta1.EvaluationStatus.APPROVED
    //         : ixo.claims.v1beta1.EvaluationStatus.REJECTED,
    //       WalletUsers.tester
    //     )
    //   ),
    //   testMsg("/cosmos.authz.v1beta1.MsgExec withdraw payment", async () => {
    //     console.log(
    //       "Waiting 35 second for withdrawal authorization release date to pass"
    //     );
    //     await timeout(35 * 1000);
    //     const res = await Claims.MsgExecWithdrawal(
    //       claimId,
    //       adminAccount,
    //       ixo.claims.v1beta1.PaymentType.SUBMISSION,
    //       WalletUsers.tester
    //     );
    //     return res;
    //   }),
    // ]);

    // testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
    //   Claims.DisputeClaim(claimIds[0], "proof0")
    // );
    // testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
    //   Claims.DisputeClaim(claimIds[1], "proof1")
    // );
  });
