import csvtojsonV2 from "csvtojson/v2";
import {
  testMsg,
  utils,
  ixo,
  timeout,
  generateNewWallet,
  chunkArray,
  saveFileToPath,
  addDays,
  addMinutesToDate,
} from "../helpers/common";
import * as Claims from "../modules/Claims";
import * as Cosmos from "../modules/Cosmos";
import * as Entity from "../modules/Entity";
import { RPC_URL, WalletUsers } from "../helpers/constants";
import {
  CarbonCredentialsWorkerUrl,
  EcsCredentialsWorkerUrl,
  ProspectCredentialsWorkerUrl,
  adminEntityAccounts,
  dids,
} from "../setup/constants";
import axios from "axios";
import axiosRetry from "axios-retry";
import { cookstoveIds } from "../setup/supamoto/stoves";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { legacyCookstoveIds } from "../setup/emerging/extra";

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

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz MsgUpdateCollectionState",
      () =>
        Entity.GrantEntityAccountAuthz(
          protocol,
          "admin",
          WalletUsers.tester,
          undefined,
          "/ixo.claims.v1beta1.MsgUpdateCollectionState"
        )
    );
    testMsg("/ixo.claims.v1beta1.MsgUpdateCollectionState", () =>
      Claims.UpdateCollectionState(collectionId, adminAccount)
    );

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz MsgUpdateCollectionDates",
      () =>
        Entity.GrantEntityAccountAuthz(
          protocol,
          "admin",
          WalletUsers.tester,
          undefined,
          "/ixo.claims.v1beta1.MsgUpdateCollectionDates"
        )
    );
    testMsg("/ixo.claims.v1beta1.MsgUpdateCollectionState", () =>
      Claims.UpdateCollectionDates(collectionId, adminAccount)
    );

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz MsgUpdateCollectionPayments",
      () =>
        Entity.GrantEntityAccountAuthz(
          protocol,
          "admin",
          WalletUsers.tester,
          undefined,
          "/ixo.claims.v1beta1.MsgUpdateCollectionPayments"
        )
    );
    testMsg("/ixo.claims.v1beta1.MsgUpdateCollectionState", () =>
      Claims.UpdateCollectionPayments(collectionId, adminAccount, adminAccount)
    );

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

    if (RPC_URL === "https://devnet.ixo.earth/rpc/") {
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
        // if (index !== 0) continue; // if want to only mint a certain amount of batches add number here (devnet restart)
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
      // saveFileToPath(
      //   ["documents", "emerging", "fuelPurchases_dev.json"],
      //   JSON.stringify(stovePurchasesAll, null, 2)
      // );

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

export const supamotoClaims2 = () =>
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

    const collectionId = "5";

    test("Generate Fuel Purchase claims and evaluate them", async () => {
      let purchaseData = await csvtojsonV2().fromFile(
        "./assets/documents/emerging/payments3.csv"
      );

      // remove any duplicate transactions by transaction id
      purchaseData = Object.values(
        purchaseData.reduce((aggObj, item) => {
          if (!aggObj[item.Transaction_ID])
            aggObj[item.Transaction_ID] = {
              ...item,
              // Custom date transformation to match json schema format
              time_paid: new Date(
                item.Transaction_date.replaceAll("/", "-").replace(" ", "T") +
                  "Z"
              ),
            };
          return aggObj;
        }, {})
      );

      // chunk payments into objects with device id as key
      purchaseData = purchaseData.reduce((aggObj, item) => {
        if (!aggObj[item.Device_ID]) aggObj[item.Device_ID] = [item];
        else aggObj[item.Device_ID] = [...aggObj[item.Device_ID], item];
        return aggObj;
      }, {});

      Object.keys(purchaseData).forEach((k) => {
        // if deviceId not in legacy cookstoves remove
        if (!legacyCookstoveIds.includes(k)) delete purchaseData[k];
        else purchaseData[k].sort((a, b) => a.time_paid - b.time_paid);
      });

      // console.dir(
      //   {
      //     amountOfStoves: Object.keys(purchaseData).length,
      //     amountOfPurchases: Object.values(purchaseData).flat(1).length,
      //     amountOfPurchasesPerDevice: Object.values(purchaseData).map(
      //       (v: any) => v.length
      //     ),
      //   },
      //   { depth: null }
      // );
      const amounts = Object.values(purchaseData)
        .flat(1)
        .map((p: any) => Number(p.Mass));
      const amountsKgs = Object.values(purchaseData)
        .flat(1)
        .map((p: any) => Number(p.Mass) * 10.94);
      saveFileToPath(
        ["documents", "emerging", "fuelPurchases_dev_test.json"],
        JSON.stringify(
          {
            kgsPellets: {
              sections: amounts.reduce((a, b) => {
                if (a[b]) a[b]++;
                else a[b] = 1;
                return a;
              }, {}),
              average: amounts.reduce((a, b) => a + b) / amounts.length,
              totalClaims: amounts.length,
            },
            carbonCredits: {
              sections: amountsKgs.reduce((a, b) => {
                if (a[b]) a[b]++;
                else a[b] = 1;
                return a;
              }, {}),
              average: amountsKgs.reduce((a, b) => a + b) / amountsKgs.length,
              totalClaims: amountsKgs.length,
            },
          },
          null,
          2
        )
      );

      // helper to stop flow if just want the above data
      // const test = true;
      // if (test) throw new Error("stop");

      // devide payments per device into 50 devices at a time
      purchaseData = chunkArray<any[]>(Object.values(purchaseData), 10);
      let stovePurchasesAll: any[] = [];
      let index = -1;

      console.time("claims");
      // console.log(purchaseData[8].length);
      // purchaseData = [purchaseData[8].slice(0, 15), purchaseData[8].slice(15)]; // if want to run all stoves inside certain batch if it failed because too big

      for (const stovePurchases of purchaseData) {
        index++;
        // if (index <= 67) continue; // if want to only mint a certain amount of batches add number here (devnet restart)
        console.log(
          "starting batch " + index + " of " + (purchaseData.length - 1)
        );
        // saveFileToPath(
        //   ["documents", "emerging", "fuelPurchases_batches.json"],
        //   JSON.stringify(stovePurchases, null, 2)
        // );
        // add wait for ipfs rate limit
        if (index) await timeout(1000 * 5);

        // create fuelPurchase claims for each purchase
        const fpClaims = await axios.post(
          EcsCredentialsWorkerUrl + "claims/create",
          {
            type: "fuelPurchase",
            collectionId: collectionId,
            storage: "cellnode",
            generate: {
              type: "FuelPurchaseSupamotoZambia",
              data: stovePurchases.flat(1).map((p: any) => ({
                id: p.Transaction_ID, // transaction id
                provider: p.Telco, // transaction provider
                currency: "ZMW", // transaction currency
                value: Number(p.Amount), // transaction value
                dateTime: p.time_paid, // transaction date time
                amount: Number(p.Mass), // amount pellets that bought in kg
                deviceId: p.Device_ID, // device id
                protocolDid: dids.legacyCookingProtocol, // custom protocol
                projectDid: dids.ecsProject, // custom project
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
        // const fpEvaluations = await axios.post(
        //   ProspectCredentialsWorkerUrl + "claims/evaluate",
        //   {
        //     collectionId: collectionId,
        //     evaluations: fpClaimIds.map((id) => ({
        //       claimId: id,
        //       reason: 1,
        //       status: ixo.claims.v1beta1.EvaluationStatus.APPROVED,
        //       oracle: dids.prospectOracle,
        //       verificationProof: "proof",
        //     })),
        //   },
        //   {
        //     headers: {
        //       Authorization: process.env.PROSPECT_CREDENTIAL_WORKER_AUTH,
        //     },
        //   }
        // );
        // assertIsDeliverTxSuccess(fpEvaluations.data);
        // console.log(
        //   fpClaimIds.length + " FuelPurchase claims successfully evaluated"
        // );

        // save fuelPurchase claim ids per purchase
        stovePurchases.forEach((ps: any[], i) => {
          ps.forEach((p: any, j) => {
            stovePurchases[i][j].fuelPurchaseClaimId = fpClaimIds.shift();
          });
        });

        console.timeLog("claims");
        // add current stove purchases chunk to all stove purchases
        stovePurchasesAll = stovePurchasesAll.concat(stovePurchases);
      }
      console.timeEnd("claims");

      // save all stove purchases to file
      saveFileToPath(
        ["documents", "emerging", "fuelPurchases2_mainnet.json"],
        JSON.stringify(stovePurchasesAll, null, 2)
      );

      expect(true).toBeTruthy();
    });
  });

export const supamotoClaims3 = () =>
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

    // test("Get stove cert cids", async () => {
    //   const stovesIds = require("../../assets/documents/emerging/stoves_without_certs.json");
    //   let stoves: any[] = [];

    //   const baseUrl =
    //     "https://api.supamoto.app/api/v2/stoves?page=0&pageSize=100";

    //   let count = 0;
    //   for (let stovesChunk of chunkArray(stovesIds, 50)) {
    //     // if (count === 1) break;
    //     // count++;
    //     await timeout(1000);
    //     let url = baseUrl;
    //     for (let stoveId of stovesChunk) {
    //       url += `&deviceIds=${stoveId}`;
    //     }

    //     const csRes = await axios.get(url, {
    //       headers: {
    //         Authorization: `Basic ${process.env.SUPAMOTO_API_TOKEN}`,
    //       },
    //     });
    //     if (csRes.status !== 200)
    //       throw new Error(
    //         "Failed to fetch cooking sessions" + csRes.statusText
    //       );
    //     stoves.push(
    //       ...csRes.data.content.map((c) => ({
    //         deviceId: c.deviceId,
    //         certificateCid: c.certificateCid,
    //         nftCollectionId: c.nftCollectionId,
    //       }))
    //     );
    //     // console.dir(csRes.data.content, { depth: null });
    //   }

    //   saveFileToPath(
    //     ["documents", "emerging", "stoves_with_certs.json"],
    //     JSON.stringify(stoves, null, 2)
    //   );
    // });

    test("Generate Fuel Purchase claims and evaluate them", async () => {
      type CollectionType = "Legacy" | "Genesis";
      let collectionToUse: CollectionType;
      collectionToUse = "Legacy";

      // const collectionId = "1"; // testnet and mainnet genesis fuelpurchases
      // const collectionId = "5"; // mainnet legacy fuelpurchases
      const collectionId = "8"; // testnet legacy fuelpurchases

      // first load previous purchases and get only id, then load latest and remove all previous purchases
      let previousPurchases: string[] = [];
      let paths = ["./assets/documents/emerging/payments_new.csv"];

      // filter out already made claims, export from carbon manager db
      const existingFPClaimsTrxIds =
        require("../../assets/documents/emerging/FuelPurchaseClaims.json").map(
          (s: any) => s.transactionId
        );
      console.log({ existingFPClaimsTrxIds: existingFPClaimsTrxIds.length });
      previousPurchases.push(...existingFPClaimsTrxIds);

      let purchaseData: any[] = [];
      let duplicatesData: any[] = [];
      // loop over paths and add all transaction ids to previous purchases list
      for (let path of paths) {
        let data = await csvtojsonV2().fromFile(path);
        console.log({ path, purchaseData: data.length });
        data = data.reduce((aggObj, item) => {
          if (
            !aggObj[item["Transaction ID"]] &&
            !previousPurchases.includes(item["Transaction ID"])
          ) {
            aggObj[item["Transaction ID"]] = {
              // Device_ID: item["Device ID"],
              Device_ID: item["Device ID Revised"],
              Transaction_ID: item["Transaction ID"],
              status: item["Status_Connectivity"],
              country: item["Country"],
              Mass: item["Total KG"],
              amount: item["Amount"],
              currency: item["Currency"],
              // Custom date transformation to match json schema format
              time_paid: new Date(
                item["Creation date"].replaceAll("/", "-").replace(" ", "T") +
                  "Z"
              ),
            };
          } else {
            previousPurchases.push(item["Transaction ID"]);
            duplicatesData.push({
              Device_ID: item["Device ID"],
              Transaction_ID: item["Transaction ID"],
            });
          }

          return aggObj;
        }, {});
        previousPurchases.push(...Object.keys(data));
        purchaseData.push(...Object.values(data));
      }

      console.log("Total purchases: " + purchaseData.length);
      console.log("Total duplicates: " + duplicatesData.length);
      previousPurchases = []; // clear memory
      duplicatesData = []; // clear memory

      // saveFileToPath(
      //   ["documents", "emerging", "fuelPurchases_data1.json"],
      //   JSON.stringify({ duplicatesData, purchaseData }, null, 2)
      // );
      // const test1 = true;
      // if (test1) throw new Error("stop");

      // chunk payments into objects with device id as key
      purchaseData = purchaseData.reduce((a, p) => {
        if (!a[p.Device_ID]) a[p.Device_ID] = [p];
        else a[p.Device_ID] = [...a[p.Device_ID], p];
        return a;
      }, {});

      const stovesCollection =
        // @ts-ignore
        collectionToUse === "Legacy"
          ? require("../../assets/documents/emerging/stoves_legacy_collection.json").map(
              (s: any) => s.externalId
            )
          : require("../../assets/documents/emerging/stoves_genesis_collection.json").map(
              (s: any) => s.externalId
            );

      Object.keys(purchaseData).forEach((k) => {
        // purchaseData[k].sort((a, b) => a.time_paid - b.time_paid);
        // if deviceId not in collection cookstoves remove
        if (!stovesCollection.includes(k)) delete purchaseData[k];
        else purchaseData[k].sort((a, b) => a.time_paid - b.time_paid);
      });
      // console.log({ purchaseData: Object.keys(purchaseData).length });

      const amounts = Object.values(purchaseData)
        .flat(1)
        .map((p: any) => Number(p.Mass));
      const amountsKgs = Object.values(purchaseData)
        .flat(1)
        .map((p: any) => Number(p.Mass) * 10.94);
      saveFileToPath(
        ["documents", "emerging", "fuelPurchases_data.json"],
        JSON.stringify(
          {
            kgsPellets: {
              // sections: amounts.reduce((a, b) => {
              //   if (a[b]) a[b]++;
              //   else a[b] = 1;
              //   return a;
              // }, {}),
              average: amounts.reduce((a, b) => a + b) / amounts.length,
              totalClaims: amounts.length,
              totalKgPellets: amounts.reduce((a, b) => a + b),
            },
            carbonCredits: {
              // sections: amountsKgs.reduce((a, b) => {
              //   if (a[b]) a[b]++;
              //   else a[b] = 1;
              //   return a;
              // }, {}),
              average: amountsKgs.reduce((a, b) => a + b) / amountsKgs.length,
              totalClaims: amountsKgs.length,
              totalCarbonCredits: amountsKgs.reduce((a, b) => a + b),
            },
            amountOfStoves: Object.keys(purchaseData).length,
            amountOfPurchases: Object.values(purchaseData).flat(1).length,
            // amountOfPurchasesPerDevice: Object.values(purchaseData).map(
            //   (v: any) => v.length
            // ),
            // stoves: Object.keys(purchaseData),
            // purchaseData,
          },
          null,
          2
        )
      );

      // helper to stop flow if just want the above data
      // const test = true;
      // if (test) throw new Error("stop");

      // devide payments per device into 10 devices at a time
      // ==============================================================
      purchaseData = chunkArray<any[]>(Object.values(purchaseData), 10);
      let stovePurchasesAll: any[] = [];
      let index = -1;

      console.time("claims");
      for (const stovePurchases of purchaseData) {
        index++;
        // if (index < 6) continue; // if want to only mint a certain amount of batches add number here (devnet restart)

        console.log(
          "starting batch " +
            (index + 1) +
            " of " +
            purchaseData.length +
            " with " +
            stovePurchases.flat(1).length +
            " purchases"
        );
        // add wait for ipfs rate limit
        if (index) await timeout(1000 * 5);

        // create fuelPurchase claims for each purchase
        const fpClaims = await axios.post(
          EcsCredentialsWorkerUrl + "claims/create",
          {
            type: "fuelPurchase",
            collectionId: collectionId,
            storage: "cellnode",
            generate: {
              type: "FuelPurchaseSupamotoZambia",
              data: stovePurchases.flat(1).map((p: any) => ({
                id: p.Transaction_ID, // transaction id
                provider: p.telco || "", // transaction provider
                currency: p.currency, // transaction currency
                value: Number(p.amount), // transaction value
                dateTime: p.time_paid, // transaction date time
                amount: Number(p.Mass), // amount pellets that bought in kg
                deviceId: p.Device_ID, // device id
                protocolDid:
                  // @ts-ignore
                  collectionToUse === "Legacy"
                    ? dids.legacyCookingProtocol
                    : null, // custom protocol
                projectDid:
                  // @ts-ignore
                  collectionToUse === "Legacy" ? dids.ecsProject : null, // custom project
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

        // // evaluate fuelPurchase claims
        // const fpEvaluations = await axios.post(
        //   ProspectCredentialsWorkerUrl + "claims/evaluate",
        //   {
        //     collectionId: collectionId,
        //     evaluations: fpClaimIds.map((id) => ({
        //       claimId: id,
        //       reason: 1,
        //       status: ixo.claims.v1beta1.EvaluationStatus.APPROVED,
        //       oracle: dids.prospectOracle,
        //       verificationProof: "proof",
        //     })),
        //   },
        //   {
        //     headers: {
        //       Authorization: process.env.PROSPECT_CREDENTIAL_WORKER_AUTH,
        //     },
        //   }
        // );
        // assertIsDeliverTxSuccess(fpEvaluations.data);
        // console.log(
        //   fpClaimIds.length + " FuelPurchase claims successfully evaluated"
        // );

        // save fuelPurchase claim ids per purchase
        stovePurchases.forEach((ps: any[], i) => {
          ps.forEach((p: any, j) => {
            stovePurchases[i][j].fuelPurchaseClaimId = fpClaimIds.shift();
          });
        });

        console.timeLog("claims");
        // add current stove purchases chunk to all stove purchases
        stovePurchasesAll = stovePurchasesAll.concat(stovePurchases);
      }
      console.timeEnd("claims");

      // save all stove purchases to file
      saveFileToPath(
        ["documents", "emerging", "fuelPurchases_made.json"],
        JSON.stringify(stovePurchasesAll, null, 2)
      );

      expect(true).toBeTruthy();
    });
  });

// ------------------------------------------------------------
// flow to evaluate all FuelPurchase claims
// ------------------------------------------------------------
export const supamotoEvaluateFuelPurchases = () =>
  describe("Testing the Claims module", () => {
    // const blocksyncUrl = "https://devnet-blocksync.ixo.earth";
    const blocksyncUrl = "https://blocksync-pandora.ixo.earth";
    const collectionId = "8";

    test("Evaluate FuelPurchase claims", async () => {
      const res = await axios.get(
        `${blocksyncUrl}/api/claims/collection/${collectionId}/claims?status=0&type=FuelPurchase&take=3000&orderBy=asc`
      );
      if (res.status !== 200)
        throw new Error("Failed to fetch claims" + res.statusText);
      let fpClaimIds = res.data.data.map((fp) => fp.claimId);

      const fpClaimIdsChunks = chunkArray<any[]>(Object.values(fpClaimIds), 50);
      for (const fpClaimIdsChunk of fpClaimIdsChunks) {
        // evaluate fuelPurchase claims
        const fpEvaluations = await axios.post(
          ProspectCredentialsWorkerUrl + "claims/evaluate",
          {
            collectionId: collectionId,
            evaluations: fpClaimIdsChunk.map((id) => ({
              claimId: id,
              reason: 1,
              status: ixo.claims.v1beta1.EvaluationStatus.APPROVED,
              oracle: dids.prospectOracle,
              verificationProof: "verificationProof",
            })),
          },
          {
            headers: {
              Authorization: process.env.PROSPECT_CREDENTIAL_WORKER_AUTH,
            },
          }
        );
        assertIsDeliverTxSuccess(fpEvaluations.data);
      }

      console.log(
        fpClaimIds.length + " FuelPurchase claims successfully evaluated"
      );
      expect(true).toBeTruthy();
    });
  });

// ------------------------------------------------------------
// flow to rrecreate CER claims that failed with adjusted period
// ------------------------------------------------------------
export const supamotoClaimsRedoRejected = () =>
  describe("Testing the Claims module", () => {
    // const blocksyncUrl = "https://devnet-blocksync.ixo.earth";
    const blocksyncUrl = "https://blocksync.ixo.earth";

    const cerClaimsData: any = [];
    test("Generate CER claims", async () => {
      try {
        const res = await axios.get(
          `${blocksyncUrl}/api/claims/collection/1/claims?status=2&type=CER&take=1000&orderBy=asc`
        );
        if (res.status !== 200)
          throw new Error("Failed to fetch claims" + res.statusText);
        let failedClaims = res.data.data;
        if (!failedClaims.length) throw new Error("skip");
        console.log("initial failedClaims length: " + failedClaims.length);

        let fetchDataIndex = -1;
        for (let cerClaim of failedClaims) {
          fetchDataIndex++;
          // if (cerClaimsData.length >= 1) break;
          console.log("fetching claim data for index " + fetchDataIndex);

          const claimDataRes = await axios.get(
            `${EcsCredentialsWorkerUrl}claims/claim/${cerClaim.claimId}/data`,
            {
              headers: {
                Authorization: process.env.ECS_CREDENTIAL_WORKER_AUTH,
              },
            }
          );
          if (claimDataRes.status !== 200)
            throw new Error(
              "Failed to fetch claim data" + claimDataRes.statusText
            );
          let claimData = claimDataRes.data;
          const fpClaimId =
            claimData.credentialSubject.claim.evidence[0].linkedClaim.id.split(
              ":/"
            )[1];
          const period =
            (new Date(
              claimData.credentialSubject.claim.period.endDate
            ).getTime() -
              new Date(
                claimData.credentialSubject.claim.period.startDate
              ).getTime()) /
            (1000 * 3600 * 24);
          const startDate = claimData.credentialSubject.claim.period.startDate;
          let endDate =
            period > 30
              ? addDays(
                  new Date(claimData.credentialSubject.claim.period.startDate),
                  30
                ).toISOString()
              : claimData.credentialSubject.claim.period.endDate;

          // fetch cooking sessions for the period of CER
          const deviceEntity = await axios.get(
            `${blocksyncUrl}/api/entity/byId/${claimData.credentialSubject.id}`
          );
          if (deviceEntity.status !== 200)
            throw new Error(
              "Failed to fetch deviceId" + deviceEntity.statusText
            );
          const deviceId = deviceEntity.data.externalId;
          if (!deviceId) throw new Error("deviceId not found on entity");

          let cookingSessions = await getCookingSessions(
            startDate.slice(0, 10),
            endDate.slice(0, 10),
            deviceId
          );

          // less than 80 already success
          if (cookingSessions.length < 75) continue;

          for (let i of [1, 2, 3, 4]) {
            if (cookingSessions.length < 75) break;
            const daysToAdd = i == 1 ? 20 : i == 2 ? 16 : i == 3 ? 12 : 8;
            endDate = addDays(
              new Date(claimData.credentialSubject.claim.period.startDate),
              daysToAdd
            ).toISOString();

            cookingSessions = await getCookingSessions(
              startDate.slice(0, 10),
              endDate.slice(0, 10),
              deviceId
            );
          }

          // if any cerClaimsData with fp claimId already exists then skip
          if (
            cerClaimsData.filter((c: any) => c.fuelPurchaseClaimId == fpClaimId)
              .length > 0
          ) {
            continue;
          }
          cerClaimsData.push({
            fuelPurchaseClaimId: fpClaimId,
            startDate: startDate,
            endDate: endDate,
            cookingSessions: cookingSessions.length,
          });
        }
        if (!cerClaimsData.length) throw new Error("skip");

        console.log("Create CER claims started!");
        let index = -1;
        for (let cerClaimsChunk of chunkArray(cerClaimsData, 100)) {
          index++;
          console.log("Creating for batch:", index);
          if (index) await timeout(1000 * 90);
          try {
            //  create the CER claims through ecs credentials worker
            const cerClaims = await axios.post(
              EcsCredentialsWorkerUrl + "claims/create",
              {
                type: "CER",
                collectionId: "1",
                storage: "cellnode",
                generate: {
                  type: "CER",
                  data: cerClaimsChunk,
                },
              },
              {
                headers: {
                  Authorization: process.env.ECS_CREDENTIAL_WORKER_AUTH,
                },
              }
            );
            if (
              ![200, 201].includes(cerClaims.status) ||
              cerClaims.data.code != 0
            )
              throw new Error(
                `Failed to create CERclaims:` + cerClaims.data.message
              );
          } catch (error) {
            console.error(
              `createCERClaims error for batch: ${index}`,
              error.message
            );
          }
        }

        console.log("Create CER claims success! " + cerClaimsData.length);
      } catch (error) {
        console.error("createCERClaims", error.message);
      }

      // save all CER Claims to file
      saveFileToPath(
        ["documents", "emerging", "cer_claims_recreate.json"],
        JSON.stringify(cerClaimsData, null, 2)
      );

      expect(true).toBeTruthy();
    });
  });

const getCookingSessions = async (
  startDate: string,
  endDate: string,
  deviceId: string
) => {
  let cookingSessions: any[] = [];
  let done = false;
  let page = 0;
  while (!done) {
    const csRes = await axios.get(
      `https://api.supamoto.app/api/v2/stoves/${deviceId}/sessions/cooking?pageSize=500&startDate=${startDate}&endDate=${endDate}&page=${page}`,
      {
        headers: {
          Authorization: `Basic ${process.env.SUPAMOTO_API_TOKEN}`,
        },
      }
    );
    if (csRes.status !== 200)
      throw new Error("Failed to fetch cooking sessions" + csRes.statusText);
    const csData = csRes.data;
    cookingSessions.push(
      ...csData.content.map((cs) => ({
        id: String(cs.id),
      }))
    );
    page++;
    if (!csData.hasNextPage) done = true;
  }
  return cookingSessions;
};

// ------------------------------------------------------------
// flow to create a claim collection for Supamoto
// ------------------------------------------------------------
export const supamotoCreateCollection = () =>
  describe("Testing the Claims module", () => {
    // Set tester as root ecs user
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS),
        generateNewWallet(WalletUsers.oracle, process.env.ASSERT_USER_ECS),
        generateNewWallet(
          WalletUsers.charlie,
          process.env.ASSERT_USER_CARBON_ORACLE
        ),
        generateNewWallet(
          WalletUsers.bob,
          process.env.ASSERT_USER_PROSPECT_ORACLE
        ),
      ])
    );

    const collection = dids.assetCollection;
    const collectionAdminAccount = adminEntityAccounts.assetCollection;
    const protocol = dids.cleanCookingProtocol;

    let collectionId = "1";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
      const res = await Claims.CreateCollectionSupamotoGenesis(
        collection,
        protocol,
        collectionAdminAccount,
        WalletUsers.tester,
        // testnet using 99 uosmo ibc (ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955) per evaluation
        // mainnet using 990000 uusdc ibc (ibc/6BBE9BD4246F8E04948D5A4EEE7164B2630263B9EBB5E7DC5F0A46C62A2FF97B old) per evaluation
        // mainnet using 990000 uusdc ibc (ibc/2658C97FC74B74AB1898982081523C455561BBE3C705E47707021D47F3D94B38 new) per evaluation
        {
          amount: "990000",
          denom:
            "ibc/2658C97FC74B74AB1898982081523C455561BBE3C705E47707021D47F3D94B38",
        }
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
        collection,
        "admin",
        collectionAdminAccount,
        collectionId,
        999999999,
        false,
        WalletUsers.oracle
      )
    );

    // CARBON oracle can evaluate
    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
      () =>
        Claims.GrantEntityAccountClaimsEvaluateAuthzSupamoto(
          collection,
          "admin",
          collectionAdminAccount,
          collectionId,
          [],
          999999999,
          false,
          WalletUsers.charlie
        )
    );

    // Prospect can evaluate
    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
      () =>
        Claims.GrantEntityAccountClaimsEvaluateAuthzSupamoto(
          collection,
          "admin",
          collectionAdminAccount,
          collectionId,
          [],
          999999999,
          false,
          WalletUsers.bob
        )
    );
  });
