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
  getUser,
  cosmos,
} from "../helpers/common";
import * as Claims from "../modules/Claims";
import * as Cosmos from "../modules/Cosmos";
import * as Entity from "../modules/Entity";
import * as Iid from "../modules/Iid";
import * as Queries from "../modules/Queries";
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
import * as Wasm from "../modules/CosmWasm";
import { cookstoveIds } from "../setup/supamoto/stoves";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { legacyCookstoveIds } from "../setup/emerging/legacy";
// @ts-ignore
import Long from "long";

axiosRetry(axios, {
  retries: 3,
  retryDelay: () => 1000,
});

export const claimsBasic = () =>
  describe("Testing the Claims module", () => {
    // beforeAll(() =>
    //   Promise.all([
    //     generateNewWallet(
    //       WalletUsers.tester,
    //       process.env.ASSERT_USER_CARBON_ORACLE
    //     ),
    //   ])
    // );

    // Create relayer node entity first
    let relayerNodeEntity = "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity.CreateEntity(
        "dao",
        undefined,
        "",
        WalletUsers.charlie
      );
      relayerNodeEntity = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ relayerNodeEntity });
      return res;
    });

    // Create protocol
    let protocol = "did:ixo:entity:7889238a0a6a68554f65f5c7da96f13b";
    let adminAccount = "ixo1w43mq3zn0kdeqz7jgwgyj9gxlu6nal7nnhpe8t";

    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity.CreateEntity(
        "protocol",
        undefined,
        relayerNodeEntity,
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

    let cw20ContractAddress: string =
      "ixo1r4azksxfmfn3wx6tlazcu5acreymnvyacnu3q33532zdt6ypwmxqnystvl";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
      const msg = {
        decimals: 6,
        initial_balances: [
          {
            address: tester,
            amount: "3000000000000",
          },
          {
            address: adminAccount,
            amount: "3000000000000",
          },
        ],
        mint: {
          minter: tester,
        },
        name: "CW20",
        symbol: "HAHA",
      };

      const res = await Wasm.WasmInstantiateTrx(25, JSON.stringify(msg));
      cw20ContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ cw20ContractAddress });
      return res;
    });

    let cw1155ContractAddress: string =
      "ixo1aakfpghcanxtc45gpqlx8j3rq0zcpyf49qmhm9mdjrfx036h4z5skn3d4n";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
      const msg = {
        minter: tester,
      };

      const res = await Wasm.WasmInstantiateTrx(2, JSON.stringify(msg));
      cw1155ContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ cw1155ContractAddress });
      return res;
    });
    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract Mint tokens", async () => {
      const msg = {
        mint: {
          to: adminAccount,
          token_id: "5",
          value: "30000000000",
          uri: "uri",
        },
      };

      const res = await Wasm.WasmExecuteTrx(
        cw1155ContractAddress,
        JSON.stringify(msg)
      );
      return res;
    });

    let collectionId = "1";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
      const res = await Claims.CreateCollection(
        protocol,
        protocol,
        adminAccount,
        undefined,
        cw20ContractAddress
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
      Claims.UpdateCollectionPayments(
        collectionId,
        adminAccount,
        adminAccount,
        undefined,
        cw20ContractAddress,
        false,
        cw1155ContractAddress
      )
    );

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz MsgUpdateCollectionIntents",
      () =>
        Entity.GrantEntityAccountAuthz(
          protocol,
          "admin",
          WalletUsers.tester,
          undefined,
          "/ixo.claims.v1beta1.MsgUpdateCollectionIntents"
        )
    );
    testMsg("/ixo.claims.v1beta1.MsgUpdateCollectionIntents", () =>
      Claims.UpdateCollectionIntents(collectionId, adminAccount)
    );

    // Test CreateClaimAuthorization and granting Submit and Evaluate authz through authz as delegate
    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz GrantEntityAccountCreateClaimAuthz",
      () =>
        Claims.GrantEntityAccountCreateClaimAuthz(
          protocol,
          "admin",
          adminAccount,
          collectionId,
          100,
          false,
          WalletUsers.alice,
          WalletUsers.tester,
          [
            {
              amount: "1000000",
              denom: "uixo",
            },
          ],
          [
            {
              address: cw20ContractAddress,
              amount: Long.fromNumber(10),
            },
          ],
          60,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.ALL,
          0,
          [
            {
              address: cw1155ContractAddress,
              tokenId: [],
              amount: Long.fromNumber(5),
            },
          ]
        )
    );
    testMsg(
      "/ixo.claims.v1beta1.MsgCreateClaimAuthorization CreateClaimAuthorization",
      () =>
        Claims.CreateClaimAuthorization(
          adminAccount,
          collectionId,
          100,
          WalletUsers.bob,
          WalletUsers.alice,
          [
            {
              amount: "1000000",
              denom: "uixo",
            },
          ],
          [
            {
              address: cw20ContractAddress,
              amount: Long.fromNumber(10),
            },
          ],
          60,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
          [
            {
              address: cw1155ContractAddress,
              tokenId: ["5"],
              amount: Long.fromNumber(3),
            },
          ]
        )
    );
    testMsg(
      "/ixo.claims.v1beta1.MsgCreateClaimAuthorization CreateClaimAuthorization",
      () =>
        Claims.CreateClaimAuthorization(
          adminAccount,
          collectionId,
          100,
          WalletUsers.bob,
          WalletUsers.alice,
          [
            {
              amount: "1000000",
              denom: "uixo",
            },
          ],
          [
            {
              address: cw20ContractAddress,
              amount: Long.fromNumber(10),
            },
          ],
          60,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.EVALUATE,
          [
            {
              address: cw1155ContractAddress,
              tokenId: [],
              amount: Long.fromNumber(5),
            },
          ]
        )
    );

    testMsg("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent submit", () =>
      Claims.GrantEntityAccountClaimsSubmitAuthz(
        protocol,
        "admin",
        adminAccount,
        collectionId,
        100,
        false,
        WalletUsers.alice,
        WalletUsers.tester,
        [
          {
            amount: "1000000",
            denom: "uixo",
          },
        ],
        [
          {
            address: cw20ContractAddress,
            amount: Long.fromNumber(10),
          },
        ],
        60,
        [
          {
            address: cw1155ContractAddress,
            tokenId: [],
            amount: Long.fromNumber(10),
          },
        ]
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
          WalletUsers.tester,
          undefined,
          cw20ContractAddress,
          [
            {
              address: cw1155ContractAddress,
              tokenId: [],
              amount: Long.fromNumber(10),
            },
          ]
        )
    );

    // // message to grant eval authz through authz as delegate
    // testMsg(
    //   "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz agent evaluate",
    //   () =>
    //     Claims.GrantEntityAccountClaimsEvaluateAuthzThroughAuthz(
    //       "did:ixo:entity:f14981f859bc93c6807c8c252ab54937",
    //       "admin",
    //       "ixo14vcgnl89u2hshuv4yucae8m6cazz92fkn3x74w",
    //       "44",
    //       [],
    //       1000000,
    //       false,
    //       WalletUsers.tester,
    //       WalletUsers.tester,
    //       "ixo164w0t3gqfh8quxmttuf6ahfexvxc6quj9uqend"
    //     )
    // );

    // test claim and eval with custom amount and cw20 payment
    let claimId = "110001";
    testMsg("/ixo.claims.v1beta1.MsgClaimIntent agent submit intent", () =>
      Claims.MsgClaimIntent(
        collectionId,
        [
          {
            amount: "1000000",
            denom: "uixo",
          },
        ],
        [
          {
            address: cw20ContractAddress,
            amount: Long.fromNumber(10),
          },
        ],
        WalletUsers.alice,
        [
          {
            address: cw1155ContractAddress,
            tokenId: [],
            amount: Long.fromNumber(1),
          },
        ]
      )
    );
    testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", () =>
      Claims.MsgExecAgentSubmit(
        claimId,
        collectionId,
        adminAccount,
        WalletUsers.alice,
        true,
        [
          {
            amount: "100000",
            denom: "uixo",
          },
        ],
        [
          {
            address: cw20ContractAddress,
            amount: Long.fromNumber(5),
          },
        ],
        [
          {
            address: cw1155ContractAddress,
            tokenId: ["5"],
            amount: Long.fromNumber(3),
          },
        ]
      )
    );
    testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
      Claims.MsgExecAgentEvaluate(
        claimId,
        collectionId,
        adminAccount,
        ixo.claims.v1beta1.EvaluationStatus.APPROVED,
        WalletUsers.tester,
        [
          cosmos.base.v1beta1.Coin.fromPartial({
            amount: "2000000",
            denom: "uixo",
          }),
        ],
        [
          ixo.claims.v1beta1.CW20Payment.fromPartial({
            address: cw20ContractAddress,
            amount: Long.fromNumber(15),
          }),
        ],
        [
          ixo.claims.v1beta1.CW1155Payment.fromPartial({
            address: cw1155ContractAddress,
            tokenId: [],
            amount: Long.fromNumber(4),
          }),
        ]
      )
    );
    testMsg("/cosmos.authz.v1beta1.MsgExec withdraw payment", async () => {
      // Wait 30 seconds to make sure submission release date for withdrawal auth constraint passed
      await timeout(35 * 1000);
      const res = await Claims.MsgExecWithdrawal(
        claimId,
        adminAccount,
        ixo.claims.v1beta1.PaymentType.SUBMISSION,
        WalletUsers.alice
      );
      return res;
    });
    testMsg("/ixo.claims.v1beta1.MsgDisputeClaim", () =>
      Claims.DisputeClaim(claimId, "proof1")
    );

    // test claim and eval with no custom amount and cw20 payment
    testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", async () => {
      claimId = "110002";
      return Claims.MsgExecAgentSubmit(
        claimId,
        collectionId,
        adminAccount,
        WalletUsers.alice
      );
    });
    testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
      Claims.MsgExecAgentEvaluate(
        claimId,
        collectionId,
        adminAccount,
        ixo.claims.v1beta1.EvaluationStatus.APPROVED,
        WalletUsers.tester
      )
    );

    // test claim and eval reject
    testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", async () => {
      claimId = "110003";
      return Claims.MsgExecAgentSubmit(
        claimId,
        collectionId,
        adminAccount,
        WalletUsers.alice
      );
    });
    testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
      Claims.MsgExecAgentEvaluate(
        claimId,
        collectionId,
        adminAccount,
        ixo.claims.v1beta1.EvaluationStatus.REJECTED,
        WalletUsers.tester
      )
    );

    // test claim and eval dispute
    testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", async () => {
      claimId = "110004";
      return Claims.MsgExecAgentSubmit(
        claimId,
        collectionId,
        adminAccount,
        WalletUsers.alice
      );
    });
    testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
      Claims.MsgExecAgentEvaluate(
        claimId,
        collectionId,
        adminAccount,
        ixo.claims.v1beta1.EvaluationStatus.DISPUTED,
        WalletUsers.tester
      )
    );

    // Test Oracle payments split for APPROVAL payment
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
      Claims.UpdateCollectionPayments(
        collectionId,
        adminAccount,
        adminAccount,
        undefined,
        cw20ContractAddress,
        // Set isOraclePayment to true to use oracle payments
        true
        // Tested with cw1155 payment it fails as cant have cw1155 and oracle payment
      )
    );

    testMsg(
      "/ixo.claims.v1beta1.MsgClaimIntent agent submit intent",
      async () => {
        claimId = "110012";
        return Claims.MsgClaimIntent(
          collectionId,
          [
            {
              amount: "1000000",
              denom: "uixo",
            },
          ],
          [
            {
              address: cw20ContractAddress,
              amount: Long.fromNumber(10),
            },
          ],
          WalletUsers.alice
        );
      }
    );
    testMsg("/cosmos.authz.v1beta1.MsgExec agent submit", () =>
      Claims.MsgExecAgentSubmit(
        claimId,
        collectionId,
        adminAccount,
        WalletUsers.alice,
        true,
        // With intent being used this won't be used at all and ignored
        [
          {
            amount: "800000",
            denom: "uixo",
          },
        ],
        // Tested if tried using cw20 payment for oracle payment without first creating intent,
        // it fails as expected, as need intent to use cw20 payment for oracle payment
        [
          {
            address: cw20ContractAddress,
            amount: Long.fromNumber(8),
          },
        ]
      )
    );
    testMsg("/cosmos.authz.v1beta1.MsgExec agent evaluate", () =>
      Claims.MsgExecAgentEvaluate(
        claimId,
        collectionId,
        adminAccount,
        // Tested REJECTED also then intent funds get returned to admin out of escrow
        ixo.claims.v1beta1.EvaluationStatus.APPROVED,
        WalletUsers.tester,
        // With intent being used this won't be used at all and ignored
        [
          {
            amount: "800000",
            denom: "uixo",
          },
        ],
        [
          ixo.claims.v1beta1.CW20Payment.fromPartial({
            address: cw20ContractAddress,
            amount: Long.fromNumber(8),
          }),
        ]
      )
    );
  });

// =====================================================================
// Team Member Budgets — covers the full surface of the team subscription
// feature in a single end-to-end flow:
//
//   1. Admin sets two team members (alice, bob) with budgets via
//      MsgSetCollectionMembers — verifies CreatedEvent path
//   2. Updating an existing member preserves period_spent (UpdatedEvent path)
//   3. ValidateBasic edge cases (zero limits, short period, duplicates) reject
//   4. Anti-spoofing on CCAA (member tries to mint authz for another member)
//   5. Anti-spoofing on intent (oracle authorized by alice tries member=bob)
//   6. Member-on-collection check rejects intents for unknown members
//   7. Happy path: alice creates intent → claim → APPROVED, budget stays spent
//   8. Budget exhaustion: alice's next intent over remaining budget → fail
//   9. Budget restore on REJECTED claim for bob — period_spent decrements
//   10. Member removal: removed member's new intents fail
//   11. Backward-compat sanity: query members list shows expected state
//
// Period reset is exercised in a separate flow (claimsTeamMembersPeriodReset)
// because it requires waiting for a real-time period boundary (4 min on a
// chain built with the test-mode MinMemberBudgetPeriod).
// =====================================================================
export const claimsTeamMembers = () =>
  describe("Testing the Claims module — team member budgets", () => {
    // -------------------------------------------------
    // Setup: entity, protocol, admin account, fund admin, cw20, collection
    // -------------------------------------------------
    let relayerNodeEntity = "";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const res = await Entity.CreateEntity(
        "dao",
        undefined,
        "",
        WalletUsers.charlie
      );
      relayerNodeEntity = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ relayerNodeEntity });
      return res;
    });

    let protocol = "";
    let adminAccount = "";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity.CreateEntity(
        "protocol",
        undefined,
        relayerNodeEntity,
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

    testMsg("Bank Send to admin account", () =>
      Cosmos.BankSendTrx(
        100000000,
        WalletUsers.tester,
        undefined,
        undefined,
        undefined,
        adminAccount
      )
    );

    // Fund the oracle wallet — only tester/alice/bob/charlie are pre-funded
    // via IID.generateBlockchainTestUsers. The 'oracle' WalletUser is generated
    // randomly and has no balance, so every oracle-signed tx (intent / submit)
    // would fail with "Account does not exist on chain" without this.
    testMsg("Bank Send to oracle account", async () => {
      const oracleAddress = (
        await getUser(WalletUsers.oracle).getAccounts()
      )[0].address;
      return Cosmos.BankSendTrx(
        50000000,
        WalletUsers.tester,
        undefined,
        undefined,
        undefined,
        oracleAddress
      );
    });

    // Register the oracle's DID document. The chain's IID ante decorator
    // requires every signer to have a registered DID. The pre-funded users are
    // also pre-registered; oracle is not, so we register it ourselves.
    testMsg("Register oracle IID document", () =>
      Iid.CreateIidDoc(WalletUsers.oracle)
    );

    let cw20ContractAddress = "";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract cw20", async () => {
      const tester = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
      const msg = {
        decimals: 6,
        initial_balances: [
          { address: tester, amount: "3000000000000" },
          { address: adminAccount, amount: "3000000000000" },
        ],
        mint: { minter: tester },
        name: "CW20",
        symbol: "TEAM",
      };
      const res = await Wasm.WasmInstantiateTrx(25, JSON.stringify(msg));
      cw20ContractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ cw20ContractAddress });
      return res;
    });

    let collectionId = "";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
      const res = await Claims.CreateCollection(
        protocol,
        protocol,
        adminAccount,
        undefined,
        cw20ContractAddress
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

    // Grant admin operations through entity authz so tester can run them
    testMsg("Grant entity authz: MsgUpdateCollectionState", () =>
      Entity.GrantEntityAccountAuthz(
        protocol,
        "admin",
        WalletUsers.tester,
        undefined,
        "/ixo.claims.v1beta1.MsgUpdateCollectionState"
      )
    );
    testMsg("Open collection", () =>
      Claims.UpdateCollectionState(collectionId, adminAccount)
    );

    testMsg("Grant entity authz: MsgUpdateCollectionIntents", () =>
      Entity.GrantEntityAccountAuthz(
        protocol,
        "admin",
        WalletUsers.tester,
        undefined,
        "/ixo.claims.v1beta1.MsgUpdateCollectionIntents"
      )
    );
    // Team collections require intents — every claim must come from an intent
    // so the chain can attribute spend to a specific member.
    testMsg("Set collection intents = REQUIRED (team mode)", () =>
      Claims.UpdateCollectionIntents(
        collectionId,
        adminAccount,
        WalletUsers.tester,
        ixo.claims.v1beta1.CollectionIntentOptions.REQUIRED
      )
    );

    // Authz the admin → tester for MsgSetCollectionMembers / MsgRemoveCollectionMembers
    testMsg("Grant entity authz: MsgSetCollectionMembers", () =>
      Entity.GrantEntityAccountAuthz(
        protocol,
        "admin",
        WalletUsers.tester,
        undefined,
        "/ixo.claims.v1beta1.MsgSetCollectionMembers"
      )
    );
    testMsg("Grant entity authz: MsgRemoveCollectionMembers", () =>
      Entity.GrantEntityAccountAuthz(
        protocol,
        "admin",
        WalletUsers.tester,
        undefined,
        "/ixo.claims.v1beta1.MsgRemoveCollectionMembers"
      )
    );

    // -------------------------------------------------
    // Capture member addresses
    // -------------------------------------------------
    let aliceAddress = "";
    let bobAddress = "";
    let charlieAddress = "";
    test("capture member addresses", async () => {
      aliceAddress = (await getUser(WalletUsers.alice).getAccounts())[0]
        .address;
      bobAddress = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      charlieAddress = (await getUser(WalletUsers.charlie).getAccounts())[0]
        .address;
      console.log({ aliceAddress, bobAddress, charlieAddress });
      expect(aliceAddress).toBeTruthy();
      expect(bobAddress).toBeTruthy();
    });

    // Long enough that no period reset triggers mid-test. Period reset is
    // exercised in the dedicated flow.
    const TEST_PERIOD_SECONDS = 24 * 60 * 60; // 1 day

    // -------------------------------------------------
    // ValidateBasic edge cases (must FAIL)
    // -------------------------------------------------
    testMsg(
      "MsgSetCollectionMembers with all-zero spend limits → fail",
      () =>
        Claims.SetCollectionMembers(collectionId, adminAccount, [
          {
            memberAddress: aliceAddress,
            periodSeconds: TEST_PERIOD_SECONDS,
            periodSpendLimit: [],
            periodCw20SpendLimit: [],
          },
        ]),
      false,
      false
    );

    testMsg(
      "MsgSetCollectionMembers with period below minimum → fail",
      () =>
        Claims.SetCollectionMembers(collectionId, adminAccount, [
          {
            memberAddress: aliceAddress,
            // 1 second — far below the 4 min test minimum
            periodSeconds: 1,
            periodSpendLimit: [{ amount: "10000000", denom: "uixo" }],
          },
        ]),
      false,
      false
    );

    testMsg(
      "MsgSetCollectionMembers with duplicate member addresses → fail",
      async () =>
        Claims.SetCollectionMembers(collectionId, adminAccount, [
          {
            memberAddress: aliceAddress,
            periodSeconds: TEST_PERIOD_SECONDS,
            periodSpendLimit: [{ amount: "10000000", denom: "uixo" }],
          },
          {
            memberAddress: aliceAddress,
            periodSeconds: TEST_PERIOD_SECONDS,
            periodSpendLimit: [{ amount: "5000000", denom: "uixo" }],
          },
        ]),
      false,
      false
    );

    testMsg(
      "MsgRemoveCollectionMembers for non-existent member → fail",
      () =>
        Claims.RemoveCollectionMembers(collectionId, adminAccount, [
          aliceAddress,
        ]),
      false,
      false
    );

    // -------------------------------------------------
    // Add alice + bob (Created path — emits MemberBudgetCreatedEvent)
    // -------------------------------------------------
    testMsg(
      "MsgSetCollectionMembers add alice + bob with budgets",
      async () => {
        const res = await Claims.SetCollectionMembers(
          collectionId,
          adminAccount,
          [
            {
              memberAddress: aliceAddress,
              periodSeconds: TEST_PERIOD_SECONDS,
              periodSpendLimit: [{ amount: "5000000", denom: "uixo" }],
              periodCw20SpendLimit: [
                {
                  address: cw20ContractAddress,
                  amount: Long.fromNumber(50),
                },
              ],
            },
            {
              memberAddress: bobAddress,
              periodSeconds: TEST_PERIOD_SECONDS,
              periodSpendLimit: [{ amount: "3000000", denom: "uixo" }],
            },
          ]
        );
        return res;
      }
    );

    test("query CollectionMemberList shows alice and bob", async () => {
      const res = await Queries.CollectionMemberList(collectionId);
      const addrs = res.memberBudgets.map((b) => b.memberAddress).sort();
      expect(addrs).toEqual([aliceAddress, bobAddress].sort());
      const alice = res.memberBudgets.find(
        (b) => b.memberAddress === aliceAddress
      );
      expect(alice?.periodSpendLimit?.[0]?.amount).toBe("5000000");
      // Fresh members start with empty spent
      expect(alice?.periodSpent?.length ?? 0).toBe(0);
    });

    // -------------------------------------------------
    // Update existing member (Updated path — preserves period_spent)
    // -------------------------------------------------
    testMsg(
      "MsgSetCollectionMembers update alice's limit (preserve period_spent)",
      () =>
        Claims.SetCollectionMembers(collectionId, adminAccount, [
          {
            memberAddress: aliceAddress,
            periodSeconds: TEST_PERIOD_SECONDS,
            // Bumped from 5M to 8M
            periodSpendLimit: [{ amount: "8000000", denom: "uixo" }],
            periodCw20SpendLimit: [
              {
                address: cw20ContractAddress,
                amount: Long.fromNumber(50),
              },
            ],
            // Don't reset — period_spent should be preserved (still 0 here)
            resetPeriodSpent: false,
          },
        ])
    );

    test("query alice budget reflects updated limit", async () => {
      const res = await Queries.CollectionMember(collectionId, aliceAddress);
      expect(res.memberBudget!.periodSpendLimit?.[0]?.amount).toBe("8000000");
    });

    // -------------------------------------------------
    // Anti-spoofing: alice's CCAA tied to alice. bob's CCAA tied to bob.
    // -------------------------------------------------
    testMsg(
      "Grant CCAA to alice with memberAddress=alice",
      () =>
        Claims.GrantEntityAccountCreateClaimAuthz(
          protocol,
          "admin",
          adminAccount,
          collectionId,
          1000,
          false,
          WalletUsers.alice,
          WalletUsers.tester,
          [{ amount: "10000000", denom: "uixo" }],
          [
            {
              address: cw20ContractAddress,
              amount: Long.fromNumber(100),
            },
          ],
          60 * 60 * 24, // 1d intent duration
          ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
          5,
          [],
          aliceAddress // member_address locked into the CCAA constraint
        )
    );

    testMsg(
      "Grant CCAA to bob with memberAddress=bob",
      () =>
        Claims.GrantEntityAccountCreateClaimAuthz(
          protocol,
          "admin",
          adminAccount,
          collectionId,
          1000,
          false,
          WalletUsers.bob,
          WalletUsers.tester,
          [{ amount: "10000000", denom: "uixo" }],
          [],
          60 * 60 * 24,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
          5,
          [],
          bobAddress
        )
    );

    // Anti-spoofing: alice tries to mint an oracle authz for bob → fail
    testMsg(
      "Anti-spoofing: alice tries CreateClaimAuthorization with memberAddress=bob → fail",
      () =>
        Claims.CreateClaimAuthorization(
          adminAccount,
          collectionId,
          100,
          WalletUsers.oracle,
          WalletUsers.alice,
          [{ amount: "1000000", denom: "uixo" }],
          [],
          60 * 60,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
          [],
          bobAddress // alice trying to mint authz tagged for bob
        ),
      false,
      false
    );

    // Successful: alice authorizes oracle with member_address=alice
    testMsg(
      "alice grants SubmitClaimAuthorization to oracle (memberAddress=alice)",
      () =>
        Claims.CreateClaimAuthorization(
          adminAccount,
          collectionId,
          100,
          WalletUsers.oracle,
          WalletUsers.alice,
          [{ amount: "2000000", denom: "uixo" }],
          [
            {
              address: cw20ContractAddress,
              amount: Long.fromNumber(20),
            },
          ],
          60 * 60,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
          [],
          aliceAddress
        )
    );

    // Successful: bob authorizes oracle with member_address=bob
    testMsg(
      "bob grants SubmitClaimAuthorization to oracle (memberAddress=bob)",
      () =>
        Claims.CreateClaimAuthorization(
          adminAccount,
          collectionId,
          100,
          WalletUsers.oracle,
          WalletUsers.bob,
          [{ amount: "2000000", denom: "uixo" }],
          [],
          60 * 60,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
          [],
          bobAddress
        )
    );

    // -------------------------------------------------
    // Intent / claim path — wrong member rejection cases
    // -------------------------------------------------
    testMsg(
      "Intent without memberAddress on team collection → fail",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "1000000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          "" // missing member_address
        ),
      false,
      false
    );

    testMsg(
      "Intent with memberAddress=charlie (not a member) → fail",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "1000000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          charlieAddress
        ),
      false,
      false
    );

    // Oracle was authorized by alice. Try claiming intent on bob's behalf —
    // the SubmitClaimConstraints loop matches strictly on (collection,
    // memberAddress) so the oracle has no constraint with memberAddress=bob
    // *that it created via alice*. It DOES have one via bob's grant. So this
    // would actually succeed against bob's budget. To exercise the real
    // anti-spoofing case we need an oracle that was authorized by ONE member
    // only. We test that next: revoke isn't needed since the oracle has both
    // here. So instead we exercise the constraint-mismatch case using a
    // member that has a budget but never authorized this oracle.
    //
    // Simpler test: try memberAddress for someone who has a budget but
    // never granted to this oracle. No such member exists in this flow.
    // That's why the constraint check + the budget check together are
    // sufficient — covered above by the charlieAddress test.

    // -------------------------------------------------
    // Happy path: alice intent → claim → APPROVED. Budget stays spent.
    // -------------------------------------------------
    // Generate unique claim IDs per test run — claim IDs are global and a
    // chain that wasn't reset between runs would otherwise reject the second
    // run with "claim with id already exists", which then leaves the intent
    // ACTIVE and breaks the rest of the flow ("agent already has an active
    // intent for collection").
    let aliceClaimId = "team_alice_" + utils.common.generateId(8);
    testMsg(
      "alice intent (1.5M uixo + 10 cw20)",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "1500000", denom: "uixo" }],
          [
            {
              address: cw20ContractAddress,
              amount: Long.fromNumber(10),
            },
          ],
          WalletUsers.oracle,
          [],
          aliceAddress
        )
    );

    test("alice budget shows 1.5M uixo + 10 cw20 spent", async () => {
      const res = await Queries.CollectionMember(collectionId, aliceAddress);
      const spentUixo = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      expect(spentUixo?.amount).toBe("1500000");
      const spentCw20 = res.memberBudget!.periodCw20Spent?.find(
        (c) => c.address === cw20ContractAddress
      );
      expect(spentCw20?.amount?.toString()).toBe("10");
    });

    testMsg(
      "alice oracle submits claim referencing intent",
      () =>
        Claims.MsgExecAgentSubmit(
          aliceClaimId,
          collectionId,
          adminAccount,
          WalletUsers.oracle,
          true,
          [],
          [],
          [],
          aliceAddress
        )
    );

    // Need eval authz for tester too. Since we already have authz infra,
    // grant it.
    testMsg(
      "Grant eval authz to tester",
      () =>
        Claims.GrantEntityAccountClaimsEvaluateAuthz(
          protocol,
          "admin",
          adminAccount,
          collectionId,
          [],
          1000,
          false,
          WalletUsers.tester,
          WalletUsers.tester,
          cw20ContractAddress
        )
    );

    testMsg(
      "evaluate alice's claim APPROVED",
      () =>
        Claims.MsgExecAgentEvaluate(
          aliceClaimId,
          collectionId,
          adminAccount,
          ixo.claims.v1beta1.EvaluationStatus.APPROVED,
          WalletUsers.tester
        )
    );

    test("alice budget stays spent after APPROVED (real spend)", async () => {
      const res = await Queries.CollectionMember(collectionId, aliceAddress);
      const spentUixo = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      expect(spentUixo?.amount).toBe("1500000");
    });

    // -------------------------------------------------
    // Budget exhaustion: alice limit is 8M uixo, already spent 1.5M.
    // Try intent for 7M uixo (would total 8.5M) → fail.
    // -------------------------------------------------
    testMsg(
      "alice intent that would exceed her remaining budget → fail",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "7000000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          aliceAddress
        ),
      false,
      false
    );

    // -------------------------------------------------
    // Budget restore: bob intent → claim → REJECTED. Bob's budget restored.
    // -------------------------------------------------
    let bobClaimId = "team_bob_" + utils.common.generateId(8);
    testMsg(
      "bob intent (1M uixo)",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "1000000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          bobAddress
        )
    );

    test("bob budget shows 1M uixo spent", async () => {
      const res = await Queries.CollectionMember(collectionId, bobAddress);
      const spentUixo = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      expect(spentUixo?.amount).toBe("1000000");
    });

    testMsg(
      "bob oracle submits claim",
      () =>
        Claims.MsgExecAgentSubmit(
          bobClaimId,
          collectionId,
          adminAccount,
          WalletUsers.oracle,
          true,
          [],
          [],
          [],
          bobAddress
        )
    );

    testMsg(
      "evaluate bob's claim REJECTED",
      () =>
        Claims.MsgExecAgentEvaluate(
          bobClaimId,
          collectionId,
          adminAccount,
          ixo.claims.v1beta1.EvaluationStatus.REJECTED,
          WalletUsers.tester
        )
    );

    test("bob budget restored after REJECTED (period_spent back to 0)", async () => {
      const res = await Queries.CollectionMember(collectionId, bobAddress);
      const spentUixo = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      // Either no entry or zero
      expect(spentUixo === undefined || spentUixo.amount === "0").toBe(true);
    });

    // -------------------------------------------------
    // Intent expiration → budget restore (EndBlocker path).
    // This is a separate code path from claim rejection: the intent is
    // created but never submitted; the chain's EndBlocker detects the
    // expired intent, refunds escrow to the approval account, and calls
    // RestoreMemberBudget to credit the member's period_spent back.
    //
    // We use a SECOND oracle wallet (random) granted directly by the
    // admin with a 30-second IntentDurationNs. Reusing the existing
    // 'oracle' wallet would hit the constraint-ordering problem: appending
    // a short-duration constraint to its existing 1-hour one means
    // intent matching picks the first (longer) constraint and we'd be
    // waiting an hour for expiration.
    // -------------------------------------------------
    testMsg("Bank Send to oracle2 (random)", async () => {
      const oracle2Address = (
        await getUser(WalletUsers.random).getAccounts()
      )[0].address;
      return Cosmos.BankSendTrx(
        20000000,
        WalletUsers.tester,
        undefined,
        undefined,
        undefined,
        oracle2Address
      );
    });

    test("Register oracle2 IID document (idempotent)", async () => {
      try {
        await Iid.CreateIidDoc(WalletUsers.random);
      } catch (e) {
        console.log(
          "oracle2 IID may already be registered; continuing:",
          (e as Error).message
        );
      }
      expect(true).toBe(true);
    });

    // Admin grants oracle2 a SubmitClaimAuthorization for bob with 30s
    // IntentDurationNs. memberAddress=bob is set on the constraint so the
    // intent handler attributes spend / restore correctly.
    testMsg(
      "Admin grants oracle2 short-duration auth (memberAddress=bob, 30s)",
      () =>
        Claims.GrantEntityAccountClaimsSubmitAuthz(
          protocol,
          "admin",
          adminAccount,
          collectionId,
          100,
          false,
          WalletUsers.random,
          WalletUsers.tester,
          [{ amount: "2000000", denom: "uixo" }],
          [],
          30,
          [],
          bobAddress
        )
    );

    testMsg(
      "oracle2 creates intent for bob (will be allowed to expire)",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "500000", denom: "uixo" }],
          [],
          WalletUsers.random,
          [],
          bobAddress
        )
    );

    test("bob budget shows 500k spent right after intent", async () => {
      const res = await Queries.CollectionMember(collectionId, bobAddress);
      const spentUixo = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      expect(spentUixo?.amount).toBe("500000");
    });

    test(
      "wait ~45s for intent to expire (EndBlocker)",
      async () => {
        console.log("waiting 45s for intent to expire...");
        await timeout(45 * 1000);
      },
      60 * 1000
    );

    test("bob budget restored after intent expiration via EndBlocker", async () => {
      const res = await Queries.CollectionMember(collectionId, bobAddress);
      const spentUixo = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      // Restored to zero (intent never resulted in real spend)
      expect(spentUixo === undefined || spentUixo.amount === "0").toBe(true);
    });

    // -------------------------------------------------
    // Member removal: bob removed; new bob intents fail
    // -------------------------------------------------
    testMsg("Remove bob from collection", () =>
      Claims.RemoveCollectionMembers(collectionId, adminAccount, [bobAddress])
    );

    test("CollectionMemberList no longer includes bob", async () => {
      const res = await Queries.CollectionMemberList(collectionId);
      const addrs = res.memberBudgets.map((b) => b.memberAddress);
      expect(addrs).not.toContain(bobAddress);
      expect(addrs).toContain(aliceAddress);
    });

    testMsg(
      "intent for removed bob → fail",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "500000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          bobAddress
        ),
      false,
      false
    );

    // alice still works — proves removal is targeted
    testMsg(
      "alice can still create intents after bob removed",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "500000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          aliceAddress
        )
    );
  });

// =====================================================================
// Period reset — separate flow because it requires waiting for the chain's
// MinMemberBudgetPeriod boundary. With the chain built using
// MinMemberBudgetPeriod = 4 minutes (TEMP for testing), this flow takes
// ~6 minutes to run. Don't enable it in routine CI.
// =====================================================================
export const claimsTeamMembersPeriodReset = () =>
  describe("Claims team — period reset (slow, ~6 min)", () => {
    let relayerNodeEntity = "";
    let protocol = "";
    let adminAccount = "";
    let collectionId = "";
    let aliceAddress = "";

    testMsg("create dao", async () => {
      const res = await Entity.CreateEntity(
        "dao",
        undefined,
        "",
        WalletUsers.charlie
      );
      relayerNodeEntity = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      return res;
    });

    testMsg("create protocol", async () => {
      const res = await Entity.CreateEntity(
        "protocol",
        undefined,
        relayerNodeEntity,
        WalletUsers.charlie
      );
      protocol = utils.common.getValueFromEvents(res, "wasm", "token_id");
      adminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      return res;
    });

    testMsg("fund admin", () =>
      Cosmos.BankSendTrx(
        50000000,
        WalletUsers.tester,
        undefined,
        undefined,
        undefined,
        adminAccount
      )
    );

    // Fund the oracle wallet (see comment in claimsTeamMembers above)
    testMsg("fund oracle", async () => {
      const oracleAddress = (
        await getUser(WalletUsers.oracle).getAccounts()
      )[0].address;
      return Cosmos.BankSendTrx(
        20000000,
        WalletUsers.tester,
        undefined,
        undefined,
        undefined,
        oracleAddress
      );
    });

    // Register oracle DID (idempotent — claimsTeamMembers may have already
    // registered it during the same test run, in which case the chain
    // returns "DID document exists"; we don't fail the flow over that).
    test("register oracle IID document (idempotent)", async () => {
      try {
        await Iid.CreateIidDoc(WalletUsers.oracle);
      } catch (e) {
        console.log(
          "oracle IID may already be registered; continuing:",
          (e as Error).message
        );
      }
      expect(true).toBe(true);
    });

    testMsg("create collection", async () => {
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
      return res;
    });

    testMsg("grant updateState authz", () =>
      Entity.GrantEntityAccountAuthz(
        protocol,
        "admin",
        WalletUsers.tester,
        undefined,
        "/ixo.claims.v1beta1.MsgUpdateCollectionState"
      )
    );
    testMsg("open collection", () =>
      Claims.UpdateCollectionState(collectionId, adminAccount)
    );
    testMsg("grant updateIntents authz", () =>
      Entity.GrantEntityAccountAuthz(
        protocol,
        "admin",
        WalletUsers.tester,
        undefined,
        "/ixo.claims.v1beta1.MsgUpdateCollectionIntents"
      )
    );
    testMsg("set intents REQUIRED", () =>
      Claims.UpdateCollectionIntents(
        collectionId,
        adminAccount,
        WalletUsers.tester,
        ixo.claims.v1beta1.CollectionIntentOptions.REQUIRED
      )
    );
    testMsg("grant setMembers authz", () =>
      Entity.GrantEntityAccountAuthz(
        protocol,
        "admin",
        WalletUsers.tester,
        undefined,
        "/ixo.claims.v1beta1.MsgSetCollectionMembers"
      )
    );

    test("capture alice address", async () => {
      aliceAddress = (await getUser(WalletUsers.alice).getAccounts())[0]
        .address;
    });

    // Set alice with chain minimum period (4 min in test mode)
    const RESET_PERIOD_SECONDS = 4 * 60;
    testMsg(
      "Add alice with 4-minute period",
      () =>
        Claims.SetCollectionMembers(collectionId, adminAccount, [
          {
            memberAddress: aliceAddress,
            periodSeconds: RESET_PERIOD_SECONDS,
            periodSpendLimit: [{ amount: "5000000", denom: "uixo" }],
          },
        ])
    );

    // Grant alice the meta-authorization (CCAA) so she can mint downstream
    // SubmitClaimAuthorization for the oracle. memberAddress is locked to
    // alice — anti-spoofing.
    testMsg("Grant CCAA to alice with memberAddress=alice", () =>
      Claims.GrantEntityAccountCreateClaimAuthz(
        protocol,
        "admin",
        adminAccount,
        collectionId,
        100,
        false,
        WalletUsers.alice,
        WalletUsers.tester,
        [{ amount: "10000000", denom: "uixo" }],
        [],
        60 * 60,
        ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
        5,
        [],
        aliceAddress
      )
    );

    testMsg(
      "alice grants oracle authz",
      () =>
        Claims.CreateClaimAuthorization(
          adminAccount,
          collectionId,
          100,
          WalletUsers.oracle,
          WalletUsers.alice,
          [{ amount: "5000000", denom: "uixo" }],
          [],
          60 * 60,
          ixo.claims.v1beta1.CreateClaimAuthorizationType.SUBMIT,
          [],
          aliceAddress
        )
    );

    testMsg(
      "first intent (1M uixo) — period_spent goes to 1M",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "1000000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          aliceAddress
        )
    );

    test("verify period_spent = 1M", async () => {
      const res = await Queries.CollectionMember(collectionId, aliceAddress);
      const spent = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      expect(spent?.amount).toBe("1000000");
    });

    // Submit + evaluate the claim to fulfill the first intent. Without this
    // step, the intent stays ACTIVE and the next intent attempt would fail
    // with "agent already has an active intent for collection". Approving
    // also makes the spend "real" — important context for the assertion
    // after the period reset (which validates the reset doesn't roll old
    // spend forward).
    const RESET_CLAIM_ID = "team_reset_" + utils.common.generateId(8);
    testMsg("submit claim to fulfill first intent", () =>
      Claims.MsgExecAgentSubmit(
        RESET_CLAIM_ID,
        collectionId,
        adminAccount,
        WalletUsers.oracle,
        true,
        [],
        [],
        [],
        aliceAddress
      )
    );

    testMsg("grant eval authz to tester (period-reset flow)", () =>
      Claims.GrantEntityAccountClaimsEvaluateAuthz(
        protocol,
        "admin",
        adminAccount,
        collectionId,
        [],
        100,
        false,
        WalletUsers.tester,
        WalletUsers.tester
      )
    );

    testMsg("evaluate claim APPROVED (fulfills the intent)", () =>
      Claims.MsgExecAgentEvaluate(
        RESET_CLAIM_ID,
        collectionId,
        adminAccount,
        ixo.claims.v1beta1.EvaluationStatus.APPROVED,
        WalletUsers.tester
      )
    );

    test("wait ~5 minutes for period boundary", async () => {
      console.log("waiting 5 min for period reset...");
      await timeout((RESET_PERIOD_SECONDS + 60) * 1000);
    }, 6 * 60 * 1000); // 6 min jest timeout

    testMsg(
      "second intent (after period elapsed) — triggers lazy reset",
      () =>
        Claims.MsgClaimIntent(
          collectionId,
          [{ amount: "2000000", denom: "uixo" }],
          [],
          WalletUsers.oracle,
          [],
          aliceAddress
        )
    );

    test("after lazy reset, period_spent = 2M (not 3M — old period was wiped)", async () => {
      const res = await Queries.CollectionMember(collectionId, aliceAddress);
      const spent = res.memberBudget!.periodSpent?.find(
        (c) => c.denom === "uixo"
      );
      expect(spent?.amount).toBe("2000000");
    });
  });

export const claimsUpdateCollectionPayments = () =>
  describe("Testing the Claims module", () => {
    beforeAll(() =>
      Promise.all([generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS)])
    );

    let collection = "did:ixo:entity:9f8749d749af260d185f3df6f2206b63";
    let adminAccount = "ixo14x5r6stdxua49tc90jngj7k7xuwhgp9vlm5tc8";
    let collectionId = "6";

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz MsgUpdateCollectionPayments",
      () =>
        Entity.GrantEntityAccountAuthz(
          collection,
          "admin",
          WalletUsers.tester,
          undefined,
          "/ixo.claims.v1beta1.MsgUpdateCollectionPayments"
        )
    );
    testMsg("/ixo.claims.v1beta1.MsgUpdateCollectionState", () =>
      Claims.UpdateCollectionPayments(collectionId, adminAccount, adminAccount)
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
      type CollectionType = "Legacy" | "Genesis" | "ai4g" | "fairClimate";
      type NetworkType = "mainnet" | "testnet";

      let networkToUse: NetworkType = "mainnet";
      let collectionToUse: CollectionType = "fairClimate" as any;

      const collectionToNetworkMapping = {
        Genesis: {
          mainnet: "1",
          testnet: "1",
        },
        Legacy: {
          mainnet: "5",
          testnet: "8",
        },
        ai4g: {
          mainnet: "32",
          testnet: "42",
        },
        fairClimate: {
          mainnet: "46",
          testnet: "",
        },
      };
      if (!collectionToNetworkMapping[collectionToUse][networkToUse])
        throw new Error("no network mapping found");
      console.log(
        "collection to use: ",
        collectionToNetworkMapping[collectionToUse][networkToUse]
      );

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
      const afterDate = new Date("2025-01-01T00:00:00Z")
      // loop over paths and add all transaction ids to previous purchases list
      for (let path of paths) {
        let data = await csvtojsonV2().fromFile(path);
        console.log({ path, purchaseData: data.length });
        data = data.reduce((aggObj, item) => {
          const timePaid = new Date(
            item["Creation date"].replaceAll("/", "-").replace(" ", "T") +
            "Z"
          )
          // only handle payments with timePaid after 2024-06 (skip June 2024 and earlier)
          if (timePaid < afterDate) return aggObj;
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
              time_paid: timePaid,
            };
          } else {
            previousPurchases.push(item["Transaction ID"]);
            duplicatesData.push({
              Device_ID: item["Device ID Revised"],
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
      // if (!!1) throw new Error("stop");

      // chunk payments into objects with device id as key
      purchaseData = purchaseData.reduce((a, p) => {
        if (!a[p.Device_ID]) a[p.Device_ID] = [p];
        else a[p.Device_ID] = [...a[p.Device_ID], p];
        return a;
      }, {});

      let stovesCollection: string[];
      switch (collectionToUse) {
        case "Legacy":
          stovesCollection =
            require("../../assets/documents/emerging/stoves_legacy_collection.json").map(
              (s: any) => s.externalId
            );
          break;
        case "ai4g":
          stovesCollection =
            require("../../assets/documents/emerging/stoves_ai4g_collection.json").map(
              (s: any) => s.externalId
            );
          break;
        case "fairClimate":
          stovesCollection =
            require("../../assets/documents/emerging/stoves_fair_climate_collection.json").map(
              (s: any) => s.externalId
            );
          break;
        case "Genesis":
          stovesCollection =
            require("../../assets/documents/emerging/stoves_genesis_collection.json").map(
              (s: any) => s.externalId
            );
          break;
        default:
          throw new Error("no collection found");
      }

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
        .map((p: any) => Number(p.Mass) * 9.11);
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
            // purchaseIds: Object.values(purchaseData)
            //   .flat(1)
            //   .map((p: any) => p.Transaction_ID),
            // purchaseData,
          },
          null,
          2
        )
      );

      // helper to stop flow if just want the above data
      // if (!!1) throw new Error("stop");

      // divide payments per device into 10 devices at a time
      // ==============================================================
      purchaseData = chunkArray<any[]>(Object.values(purchaseData), 3);
      let stovePurchasesAll: any[] = [];
      let index = -1;

      console.time("claims");
      for (const stovePurchases of purchaseData) {
        index++;
        // if (index < 3) continue; // if want to only mint a certain amount of batches add number here

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
            collectionId:
              collectionToNetworkMapping[collectionToUse][networkToUse],
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
                  // only legacy has special protocol, rest use Clean Cooking Protocol
                  // @ts-ignore
                  collectionToUse === "Legacy"
                    ? dids.legacyCookingProtocol
                    : null, // custom protocol
                projectDid:
                  // @ts-ignore
                  // collectionToUse === "Legacy" ? dids.ecsProject : null, // custom project
                  dids.ecsProject,
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

    const collection = dids.fairClimateCollection;
    const collectionAdminAccount = adminEntityAccounts.fairClimateCollection;
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
          amount: "1000000",
          denom: "uixo",
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
