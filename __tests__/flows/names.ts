import {
  testMsg,
  timeout,
  utils,
  getUser,
} from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Cosmos from "../modules/Cosmos";
import * as Names from "../modules/Names";
import * as Queries from "../modules/Queries";

// ---------------------------------------------------------------------------
// Chain-level name service — end-to-end flows against a local node.
//
// Pre-requisites baked into the local chain:
//   - All WalletUsers DIDs already registered (from index.spec.ts'
//     IID.registerIids() preamble).
//   - Voting period configured at 90s (run_with_all_data.sh); wait 100s for
//     proposal finalisation.
// ---------------------------------------------------------------------------

const VOTING_WAIT_MS = 100 * 1000;

// =====================================================================
// 1. namesBasic — happy path: governance creates two namespaces (one
//    self-register, one registrar-only), users self-register, registrars
//    register on behalf, all queries return the expected shapes.
// =====================================================================

export const namesBasic = () =>
  describe("Names — happy path: namespaces, self-register, registrar register, queries", () => {
    // Two namespaces:
    //   - "yoid"   : self-register allowed. Registrar = tester.
    //   - "twitter": registrar-only. Registrar = tester. Verified records.
    const SELF_NS = "yoid";
    const REGISTRAR_NS = "twitter";

    let testerAddress: string;
    let testerDid: string;
    let aliceDid: string;
    let bobDid: string;

    test("capture wallet identifiers", async () => {
      testerAddress = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
      testerDid = getUser(WalletUsers.tester).did;
      aliceDid = getUser(WalletUsers.alice).did;
      bobDid = getUser(WalletUsers.bob).did;
      console.log({ testerAddress, testerDid, aliceDid, bobDid });
      expect(testerAddress).toMatch(/^ixo1/);
      expect(testerDid).toMatch(/^did:ixo:/);
    });

    // --- Gov creates self-register namespace ---
    test("gov: create self-register namespace 'yoid'", async () => {
      const res = await Names.MsgSubmitProposalCreateNamespace({
        name: SELF_NS,
        description: "YoID self-registered handles",
        registrarAccounts: [], // testerAddress filled in below via UpdateNamespace
        allowSelfRegister: true,
        allowRegistrarOverride: false,
        minLength: 3,
        maxLength: 24,
      });
      expect(res.code).toBe(0);
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      console.log({ yoidProposalId: proposalId });
      const voteRes = await Cosmos.MsgVote(proposalId);
      expect(voteRes.code).toBe(0);
      await timeout(VOTING_WAIT_MS);
    });

    test("query Namespace 'yoid' — exists with expected shape", async () => {
      const res = await Queries.NamesNamespace(SELF_NS);
      console.log("yoid Namespace:", JSON.stringify(res.namespace, null, 2));
      expect(res.namespace!.name).toBe(SELF_NS);
      expect(res.namespace!.allowSelfRegister).toBe(true);
      expect(res.namespace!.allowRegistrarOverride).toBe(false);
      expect(res.namespace!.minLength).toBe(3);
      expect(res.namespace!.maxLength).toBe(24);
    });

    // --- Gov creates registrar-only namespace ---
    test("gov: create registrar-only namespace 'twitter'", async () => {
      const res = await Names.MsgSubmitProposalCreateNamespace({
        name: REGISTRAR_NS,
        description: "Twitter handles attested by oracle",
        registrarAccounts: [testerAddress],
        allowSelfRegister: false,
        allowRegistrarOverride: true,
        minLength: 1,
        maxLength: 15,
      });
      expect(res.code).toBe(0);
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      console.log({ twitterProposalId: proposalId });
      const voteRes = await Cosmos.MsgVote(proposalId);
      expect(voteRes.code).toBe(0);
      await timeout(VOTING_WAIT_MS);
    });

    test("query Namespaces — both yoid and twitter present", async () => {
      const res = await Queries.NamesNamespaces();
      const names = res.namespaces.map((n) => n.name);
      console.log("Namespaces:", names);
      expect(names).toContain(SELF_NS);
      expect(names).toContain(REGISTRAR_NS);
    });

    // --- Self-register happy path ---
    testMsg("alice self-registers 'AliceCapsAndCASE' in yoid", () =>
      Names.MsgRegisterName(
        { namespace: SELF_NS, name: "AliceCapsAndCASE" },
        WalletUsers.alice
      )
    );

    test("query ResolveName(yoid, 'aliceCAPSANDCase') — normalizes and resolves", async () => {
      // Pass a different-case display form; chain normalizes to lowercase.
      const res = await Queries.NamesResolve(SELF_NS, "aliceCAPSANDCase");
      console.log("Resolve alice:", JSON.stringify(res.record, null, 2));
      expect(res.record!.namespace).toBe(SELF_NS);
      expect(res.record!.normalizedName).toBe("alicecapsandcase");
      expect(res.record!.displayName).toBe("AliceCapsAndCASE");
      expect(res.record!.ownerDid).toBe(aliceDid);
      expect(res.record!.status).toBe(Names.NameStatus.NAME_STATUS_ACTIVE);
      expect(res.record!.verified).toBe(false);
      expect(res.record!.source).toBe("self");
    });

    testMsg("bob self-registers 'bob_handle' in yoid", () =>
      Names.MsgRegisterName(
        { namespace: SELF_NS, name: "bob_handle" },
        WalletUsers.bob
      )
    );

    test("query NamesByNamespace(yoid) — has alice + bob", async () => {
      const res = await Queries.NamesByNamespace(SELF_NS);
      const owners = res.records.map((r) => r.ownerDid).sort();
      console.log("yoid records:", res.records.length, owners);
      expect(owners).toEqual(expect.arrayContaining([aliceDid, bobDid]));
    });

    // --- Registrar register-on-behalf happy path ---
    testMsg(
      "tester (registrar) registers verified 'aliceTwitter' in twitter for alice",
      () =>
        Names.MsgRegisterNameByRegistrar(
          {
            namespace: REGISTRAR_NS,
            name: "aliceTwitter",
            ownerDid: aliceDid,
            verified: true,
            evidenceHash: "sha256:abc123",
            source: "twitter-oauth",
          },
          WalletUsers.tester
        )
    );

    test("query ResolveName(twitter, alicetwitter) — verified, attested by tester", async () => {
      const res = await Queries.NamesResolve(REGISTRAR_NS, "alicetwitter");
      console.log("Resolve aliceTwitter:", JSON.stringify(res.record, null, 2));
      expect(res.record!.ownerDid).toBe(aliceDid);
      expect(res.record!.verified).toBe(true);
      expect(res.record!.verifiedBy).toBe(testerAddress);
      expect(res.record!.source).toBe("twitter-oauth");
      expect(res.record!.evidenceHash).toBe("sha256:abc123");
    });

    // --- Reverse index: NamesByOwner ---
    test("query NamesByOwner(alice) — sees yoid + twitter records", async () => {
      const res = await Queries.NamesByOwner(aliceDid);
      const tuples = res.records.map((r) => `${r.namespace}/${r.normalizedName}`);
      console.log("alice owned names:", tuples);
      expect(tuples).toEqual(
        expect.arrayContaining(["yoid/alicecapsandcase", "twitter/alicetwitter"])
      );
    });

    // --- GetName (any status) ---
    test("query GetName(yoid, alicecapsandcase) — returns regardless of status", async () => {
      const res = await Queries.NamesGet(SELF_NS, "alicecapsandcase");
      expect(res.record!.ownerDid).toBe(aliceDid);
      expect(res.record!.status).toBe(Names.NameStatus.NAME_STATUS_ACTIVE);
    });

    // --- Registrar updates verification metadata ---
    testMsg(
      "tester (registrar) updates aliceTwitter source to 'twitter-vc'",
      () =>
        Names.MsgUpdateNameByRegistrar(
          {
            namespace: REGISTRAR_NS,
            normalizedName: "alicetwitter",
            verified: true,
            evidenceHash: "sha256:def456",
            source: "twitter-vc",
          },
          WalletUsers.tester
        )
    );

    test("query GetName(twitter, alicetwitter) — source updated, owner unchanged", async () => {
      const res = await Queries.NamesGet(REGISTRAR_NS, "alicetwitter");
      expect(res.record!.source).toBe("twitter-vc");
      expect(res.record!.evidenceHash).toBe("sha256:def456");
      expect(res.record!.ownerDid).toBe(aliceDid); // unchanged
    });
  });

// =====================================================================
// 2. namesValidations — negative cases that should be rejected.
//
// Run AFTER namesBasic so 'yoid' and 'twitter' already exist.
// =====================================================================

export const namesValidations = () =>
  describe("Names — validations & negative cases", () => {
    const SELF_NS = "yoid";
    const REGISTRAR_NS = "twitter";

    let aliceDid: string;

    test("capture wallet identifiers", async () => {
      aliceDid = getUser(WalletUsers.alice).did;
      expect(aliceDid).toMatch(/^did:ixo:/);
    });

    // --- Duplicate name across case + whitespace variants ---
    testMsg(
      "duplicate self-register (case-insensitive) rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: SELF_NS, name: "ALICEcapsANDcase" }, // collides with alice's existing
          WalletUsers.bob // different signer, different owner — name-uniqueness still wins
        ),
      false,
      false
    );

    testMsg(
      "duplicate self-register (whitespace) rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: SELF_NS, name: "  bob_handle  " }, // collides with bob's existing
          WalletUsers.charlie
        ),
      false,
      false
    );

    // --- Length / charset ---
    testMsg(
      "name shorter than namespace min_length rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: SELF_NS, name: "ab" }, // min=3
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg(
      "name longer than namespace max_length rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: SELF_NS, name: "a".repeat(25) }, // max=24
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg(
      "non-ASCII name rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: SELF_NS, name: "élliot" }, // accented char
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg(
      "name containing space rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: SELF_NS, name: "foo bar" },
          WalletUsers.charlie
        ),
      false,
      false
    );

    // --- Namespace not found ---
    testMsg(
      "register in unknown namespace rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: "nosuch_ns", name: "foo" },
          WalletUsers.charlie
        ),
      false,
      false
    );

    // --- Self-register into registrar-only namespace ---
    testMsg(
      "self-register into registrar-only namespace 'twitter' rejected",
      () =>
        Names.MsgRegisterName(
          { namespace: REGISTRAR_NS, name: "selfRegFail" },
          WalletUsers.charlie
        ),
      false,
      false
    );

    // --- Non-registrar tries registrar-only flows ---
    testMsg(
      "non-registrar (charlie) MsgRegisterNameByRegistrar rejected",
      () =>
        Names.MsgRegisterNameByRegistrar(
          {
            namespace: REGISTRAR_NS,
            name: "charlie_attempt",
            ownerDid: aliceDid,
          },
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg(
      "non-registrar (charlie) MsgUpdateNameByRegistrar rejected",
      () =>
        Names.MsgUpdateNameByRegistrar(
          {
            namespace: REGISTRAR_NS,
            normalizedName: "alicetwitter",
            verified: false,
          },
          WalletUsers.charlie
        ),
      false,
      false
    );

    // --- Bad owner_did ---
    testMsg(
      "self-register with owner_did the signer doesn't control rejected",
      () =>
        Names.MsgRegisterName(
          {
            namespace: SELF_NS,
            name: "spoofed_owner",
            ownerDid: aliceDid, // charlie signing for alice's DID
          },
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg(
      "registrar register-on-behalf for non-existent DID rejected",
      () =>
        Names.MsgRegisterNameByRegistrar(
          {
            namespace: REGISTRAR_NS,
            name: "ghost",
            ownerDid: "did:ixo:does_not_exist_xyz",
          },
          WalletUsers.tester
        ),
      false,
      false
    );

    // --- Update name that doesn't exist ---
    testMsg(
      "registrar update of non-existent name rejected",
      () =>
        Names.MsgUpdateNameByRegistrar(
          {
            namespace: REGISTRAR_NS,
            normalizedName: "no_such_name",
          },
          WalletUsers.tester
        ),
      false,
      false
    );
  });

// =====================================================================
// 3. namesTransferAndStatus — owner-driven transfer, registrar-override
//    transfer, status transitions including the tombstone-is-terminal
//    invariant.
//
// Run AFTER namesBasic.
// =====================================================================

export const namesTransferAndStatus = () =>
  describe("Names — transfer + status lifecycle", () => {
    const SELF_NS = "yoid";
    const REGISTRAR_NS = "twitter";
    // Names registered specifically for this flow so we don't perturb the
    // namesBasic assertions.
    const TRANSFER_NAME_DISPLAY = "TransferTarget";
    const TRANSFER_NAME_NORM = "transfertarget";
    const STATUS_NAME_DISPLAY = "statusTarget";

    let aliceDid: string;
    let bobDid: string;
    let charlieDid: string;

    test("capture wallet identifiers", async () => {
      aliceDid = getUser(WalletUsers.alice).did;
      bobDid = getUser(WalletUsers.bob).did;
      charlieDid = getUser(WalletUsers.charlie).did;
    });

    // --- Setup: alice self-registers a name we'll transfer + status-change ---
    testMsg("setup: alice self-registers TransferTarget in yoid", () =>
      Names.MsgRegisterName(
        { namespace: SELF_NS, name: TRANSFER_NAME_DISPLAY },
        WalletUsers.alice
      )
    );

    testMsg("setup: alice self-registers statusTarget in yoid", () =>
      Names.MsgRegisterName(
        { namespace: SELF_NS, name: STATUS_NAME_DISPLAY },
        WalletUsers.alice
      )
    );

    // --- Owner-driven transfer in self-register namespace ---
    // yoid does NOT have allow_registrar_override, so only the owner can
    // transfer.
    testMsg(
      "non-owner (charlie) transfer of alice's name rejected (registrar override off)",
      () =>
        Names.MsgTransferName(
          {
            namespace: SELF_NS,
            normalizedName: TRANSFER_NAME_NORM,
            newOwnerDid: charlieDid,
          },
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg("alice (current owner) transfers TransferTarget to bob", () =>
      Names.MsgTransferName(
        {
          namespace: SELF_NS,
          normalizedName: TRANSFER_NAME_NORM,
          newOwnerDid: bobDid,
        },
        WalletUsers.alice
      )
    );

    test("query Resolve — owner is now bob", async () => {
      const res = await Queries.NamesResolve(SELF_NS, TRANSFER_NAME_DISPLAY);
      expect(res.record!.ownerDid).toBe(bobDid);
    });

    test("query NamesByOwner — bob owns it, alice doesn't", async () => {
      const aliceRes = await Queries.NamesByOwner(aliceDid);
      const bobRes = await Queries.NamesByOwner(bobDid);
      const aliceTuples = aliceRes.records.map(
        (r) => `${r.namespace}/${r.normalizedName}`
      );
      const bobTuples = bobRes.records.map(
        (r) => `${r.namespace}/${r.normalizedName}`
      );
      expect(aliceTuples).not.toContain(`${SELF_NS}/${TRANSFER_NAME_NORM}`);
      expect(bobTuples).toContain(`${SELF_NS}/${TRANSFER_NAME_NORM}`);
    });

    // --- Status transitions on alice's statusTarget ---
    // Self-register namespace ('yoid') has no registrar (registrarAccounts=[])
    // so only the gov authority can change status. Use the registrar-only
    // namespace ('twitter') for the status-change subtests.
    const STATUS_TWITTER_NAME = "statusTwitter";
    testMsg(
      "setup: registrar registers statusTwitter for alice in twitter",
      () =>
        Names.MsgRegisterNameByRegistrar(
          {
            namespace: REGISTRAR_NS,
            name: STATUS_TWITTER_NAME,
            ownerDid: aliceDid,
            verified: true,
            source: "test-status",
          },
          WalletUsers.tester
        )
    );

    testMsg(
      "non-registrar (charlie) cannot suspend",
      () =>
        Names.MsgSetNameStatus(
          {
            namespace: REGISTRAR_NS,
            normalizedName: STATUS_TWITTER_NAME.toLowerCase(),
            status: Names.NameStatus.NAME_STATUS_SUSPENDED,
            reason: "unauthorized",
          },
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg("registrar suspends statusTwitter", () =>
      Names.MsgSetNameStatus(
        {
          namespace: REGISTRAR_NS,
          normalizedName: STATUS_TWITTER_NAME.toLowerCase(),
          status: Names.NameStatus.NAME_STATUS_SUSPENDED,
          reason: "ToS violation",
        },
        WalletUsers.tester
      )
    );

    test("query Resolve(suspended) — returns not-found", async () => {
      let threw = false;
      try {
        await Queries.NamesResolve(REGISTRAR_NS, STATUS_TWITTER_NAME);
      } catch (e) {
        threw = true;
        console.log("expected: ", (e as Error).message?.slice(0, 80));
      }
      expect(threw).toBe(true);
    });

    test("query GetName(suspended) — still returns the record", async () => {
      const res = await Queries.NamesGet(
        REGISTRAR_NS,
        STATUS_TWITTER_NAME.toLowerCase()
      );
      expect(res.record!.status).toBe(Names.NameStatus.NAME_STATUS_SUSPENDED);
    });

    testMsg("registrar restores statusTwitter to active", () =>
      Names.MsgSetNameStatus(
        {
          namespace: REGISTRAR_NS,
          normalizedName: STATUS_TWITTER_NAME.toLowerCase(),
          status: Names.NameStatus.NAME_STATUS_ACTIVE,
          reason: "appeal upheld",
        },
        WalletUsers.tester
      )
    );

    test("query Resolve(restored) — visible again", async () => {
      const res = await Queries.NamesResolve(REGISTRAR_NS, STATUS_TWITTER_NAME);
      expect(res.record!.status).toBe(Names.NameStatus.NAME_STATUS_ACTIVE);
    });

    // --- Tombstone is terminal ---
    testMsg("registrar tombstones statusTwitter", () =>
      Names.MsgSetNameStatus(
        {
          namespace: REGISTRAR_NS,
          normalizedName: STATUS_TWITTER_NAME.toLowerCase(),
          status: Names.NameStatus.NAME_STATUS_TOMBSTONED,
          reason: "permanent removal",
        },
        WalletUsers.tester
      )
    );

    testMsg(
      "tombstoned status cannot be changed (terminal)",
      () =>
        Names.MsgSetNameStatus(
          {
            namespace: REGISTRAR_NS,
            normalizedName: STATUS_TWITTER_NAME.toLowerCase(),
            status: Names.NameStatus.NAME_STATUS_ACTIVE,
            reason: "should fail",
          },
          WalletUsers.tester
        ),
      false,
      false
    );

    // --- Registrar-override transfer (twitter has allow_registrar_override=true) ---
    // First create a name owned by alice in twitter, then registrar transfers
    // it to bob without alice's consent.
    const OVERRIDE_NAME = "overrideTarget";
    testMsg("setup: registrar registers overrideTarget for alice in twitter", () =>
      Names.MsgRegisterNameByRegistrar(
        {
          namespace: REGISTRAR_NS,
          name: OVERRIDE_NAME,
          ownerDid: aliceDid,
          verified: false,
          source: "test-override",
        },
        WalletUsers.tester
      )
    );

    testMsg(
      "registrar (tester) transfers alice's overrideTarget to bob (override)",
      () =>
        Names.MsgTransferName(
          {
            namespace: REGISTRAR_NS,
            normalizedName: OVERRIDE_NAME.toLowerCase(),
            newOwnerDid: bobDid,
          },
          WalletUsers.tester
        )
    );

    test("query Resolve(twitter overrideTarget) — owner is now bob", async () => {
      const res = await Queries.NamesResolve(REGISTRAR_NS, OVERRIDE_NAME);
      expect(res.record!.ownerDid).toBe(bobDid);
    });
  });

// =====================================================================
// 4. namesGovUpdate — gov updates a namespace's configuration. Toggles
//    allow_self_register and verifies behaviour change.
//
// Run AFTER namesBasic.
// =====================================================================

export const namesGovUpdate = () =>
  describe("Names — governance namespace update", () => {
    const TARGET_NS = "yoid";

    let testerAddress: string;

    test("capture address", async () => {
      testerAddress = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
    });

    test("gov: shrink yoid max_length to 8 and disable self-register", async () => {
      const res = await Names.MsgSubmitProposalUpdateNamespace({
        name: TARGET_NS,
        description: "YoID handles (locked-down)",
        registrarAccounts: [testerAddress],
        allowSelfRegister: false,
        allowRegistrarOverride: true,
        minLength: 3,
        maxLength: 8,
      });
      expect(res.code).toBe(0);
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      const voteRes = await Cosmos.MsgVote(proposalId);
      expect(voteRes.code).toBe(0);
      await timeout(VOTING_WAIT_MS);
    });

    test("query Namespace(yoid) — config updated", async () => {
      const res = await Queries.NamesNamespace(TARGET_NS);
      expect(res.namespace!.allowSelfRegister).toBe(false);
      expect(res.namespace!.allowRegistrarOverride).toBe(true);
      expect(res.namespace!.maxLength).toBe(8);
      expect(res.namespace!.registrarAccounts).toEqual([testerAddress]);
    });

    testMsg(
      "self-register now rejected after disable (yoid is registrar-only)",
      () =>
        Names.MsgRegisterName(
          { namespace: TARGET_NS, name: "afterlockdown" },
          WalletUsers.charlie
        ),
      false,
      false
    );

    testMsg(
      "registrar register still works after update (using new max_length)",
      () =>
        Names.MsgRegisterNameByRegistrar(
          {
            namespace: TARGET_NS,
            name: "shorty",
            ownerDid: getUser(WalletUsers.charlie).did,
          },
          WalletUsers.tester
        )
    );

    testMsg(
      "registrar register over new max_length=8 rejected",
      () =>
        Names.MsgRegisterNameByRegistrar(
          {
            namespace: TARGET_NS,
            name: "ninechars",
            ownerDid: getUser(WalletUsers.charlie).did,
          },
          WalletUsers.tester
        ),
      false,
      false
    );
  });
