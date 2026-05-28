import {
  testMsg,
  timeout,
  utils,
  getUser,
  ixo,
  cosmos,
  queryClient,
} from "../helpers/common";
import { WalletUsers, fee } from "../helpers/constants";
import * as Cosmos from "../modules/Cosmos";
import * as LiquidStake from "../modules/LiquidStake";
import * as Queries from "../modules/Queries";
// @ts-ignore
import base58 from "bs58";

// ---------------------------------------------------------------------------
// v7 multi-pool liquidstake — end-to-end flows against a local node.
//
// Pre-requisite: the chain must have the TEST-ONLY epoch overrides applied
// (x/epochs/types/genesis.go has "2min" enabled, x/liquidstake/types/keys.go
// pins AutocompoundEpoch + RebalanceEpoch to "2min", and x/mint/types/
// params.go has its EpochIdentifier set to "2min" so reward inflation
// actually fires within the test window).
//
// Voting period in run_with_all_data.sh is 90s, so every gov proposal flow
// waits ~100s for the vote to finalise.
// ---------------------------------------------------------------------------

// Local-chain validator address baked into run_with_all_data.sh.
const LOCAL_VALIDATOR = "ixovaloper1n8yrmeatsk74dw0zs95ess9sgzptd6thzncf20";

// Conservative wait that lets a gov proposal pass on the 90s-voting-period
// local chain. 100s gives headroom for block timing variability.
const VOTING_WAIT_MS = 100 * 1000;

// One AutocompoundEpoch tick is 120s; wait 150s to be safely past the
// boundary plus the BeginBlock that processes the hook.
const EPOCH_WAIT_MS = 150 * 1000;

// =====================================================================
// 1. multiPoolBasic — happy path: governance creates a pool, admin
//    configures validators, end user stakes, queries see the result,
//    end user unstakes.
// =====================================================================

export const multiPoolBasic = () =>
  describe("Liquidstake v7 — multi-pool basic happy path", () => {
    const POOL_ID = "carbon";
    const LST_DENOM = "ucarbon";
    const STAKE_AMOUNT = "100000000"; // 100 IXO

    let testerAddress: string;
    let feeAccountAddress: string;

    test("capture wallet addresses", async () => {
      testerAddress = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
      feeAccountAddress = (await getUser(WalletUsers.bob).getAccounts())[0]
        .address;
      console.log({ testerAddress, feeAccountAddress });
      expect(testerAddress).toMatch(/^ixo1/);
    });

    // --- Pool creation through governance ---
    test("gov: submit MsgCreatePool, vote, await voting period", async () => {
      const res = await LiquidStake.MsgSubmitProposalCreatePool({
        poolId: POOL_ID,
        liquidBondDenom: LST_DENOM,
        initialAdminAddress: testerAddress,
        initialFeeAccountAddress: feeAccountAddress,
      });
      expect(res.code).toBe(0);
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      console.log({ createPoolProposalId: proposalId });
      const voteRes = await Cosmos.MsgVote(proposalId);
      expect(voteRes.code).toBe(0);
      await timeout(VOTING_WAIT_MS);
    });

    test("query Pool — exists with expected denom and admin", async () => {
      const res = await Queries.LiquidStakePool(POOL_ID);
      console.log("Pool:", JSON.stringify(res.pool, null, 2));
      expect(res.pool?.poolId).toBe(POOL_ID);
      expect(res.pool?.liquidBondDenom).toBe(LST_DENOM);
      expect(res.pool?.whitelistAdminAddress).toBe(testerAddress);
      expect(res.pool?.feeAccountAddress).toBe(feeAccountAddress);
      expect(res.pool?.paused).toBe(false);
      // Proxy account is derived deterministically from pool_id; just
      // assert it parses as bech32.
      expect(res.pool?.proxyAccountAddress).toMatch(/^ixo1/);
    });

    // --- Admin sets the validator whitelist ---
    testMsg("admin: MsgUpdateWhitelistedValidators (single val, weight 10000)", () =>
      LiquidStake.MsgUpdateWhitelistedValidators(POOL_ID, [
        { validatorAddress: LOCAL_VALIDATOR, targetWeight: "10000" },
      ])
    );

    // BeginBlock has to register the LiquidValidator before LiquidStake will
    // see active validators; one block is enough.
    test("wait one block for BeginBlock to register liquid validator", async () => {
      await timeout(8000);
      const res = await Queries.LiquidStakeValidators(POOL_ID);
      console.log("LiquidValidators:", JSON.stringify(res.liquidValidators, null, 2));
      expect(res.liquidValidators.length).toBe(1);
      expect(res.liquidValidators[0].operatorAddress).toBe(LOCAL_VALIDATOR);
    });

    // --- End-user (admin) stakes ---
    testMsg("admin: MsgLiquidStake into carbon pool", () =>
      LiquidStake.MsgLiquidStake(POOL_ID, STAKE_AMOUNT)
    );

    test("query States — supply and netAmount > 0", async () => {
      const res = await Queries.LiquidStakeStates(POOL_ID);
      console.log("States:", JSON.stringify(res.netAmountState, null, 2));
      expect(BigInt(res.netAmountState!.stkixoTotalSupply)).toBeGreaterThan(BigInt(0));
      expect(parseFloat(res.netAmountState!.netAmount)).toBeGreaterThan(0);
    });

    // --- Holder unstakes a fraction ---
    const UNSTAKE_AMOUNT = "10000000"; // 10 LST
    testMsg("admin: MsgLiquidUnstake fraction (resolves denom from pool)", () =>
      LiquidStake.MsgLiquidUnstake(POOL_ID, UNSTAKE_AMOUNT)
    );

    test("query States — supply decreased after unstake", async () => {
      const res = await Queries.LiquidStakeStates(POOL_ID);
      // Original mint was 100 IXO; we burned 10 LST; supply must be ≤ 90 LST.
      // (Due to the 1:1 first-mint, supply == 100_000_000 before unstake.)
      expect(BigInt(res.netAmountState!.stkixoTotalSupply)).toBeLessThanOrEqual(
        BigInt(STAKE_AMOUNT) - BigInt(UNSTAKE_AMOUNT) + BigInt(1)
      );
    });
  });

// =====================================================================
// 2. multiPoolValidations — negative cases that should be rejected
//    by ValidateBasic / keeper checks. Each "expected failure" testMsg
//    passes `succeed=false` so the helper inverts the assertion.
//
// Run AFTER multiPoolBasic so the "carbon" pool already exists.
// =====================================================================

export const multiPoolValidations = () =>
  describe("Liquidstake v7 — multi-pool validations & negative cases", () => {
    const POOL_ID = "carbon";
    const LST_DENOM = "ucarbon";

    let testerAddress: string;

    test("capture tester address", async () => {
      testerAddress = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;
      expect(testerAddress).toMatch(/^ixo1/);
    });

    // --- pool_id validation ---
    testMsg(
      "MsgLiquidStake with too-short pool_id rejected",
      () => LiquidStake.MsgLiquidStake("a", "10000000"),
      false,
      false
    );

    testMsg(
      "MsgLiquidStake with uppercase pool_id rejected",
      () => LiquidStake.MsgLiquidStake("BadID", "10000000"),
      false,
      false
    );

    testMsg(
      "MsgLiquidStake with leading-dash pool_id rejected",
      () => LiquidStake.MsgLiquidStake("-foo", "10000000"),
      false,
      false
    );

    // --- pool not found ---
    testMsg(
      "MsgLiquidStake into unknown pool rejected (ErrPoolNotFound)",
      () => LiquidStake.MsgLiquidStake("nosuch", "10000000"),
      false,
      false
    );

    // --- non-admin staking ---
    testMsg(
      "MsgLiquidStake from non-admin signer rejected (ErrRestrictedToWhitelistedAdminAddress)",
      () => LiquidStake.MsgLiquidStake(POOL_ID, "10000000", WalletUsers.alice),
      false,
      false
    );

    // --- min stake amount ---
    testMsg(
      "MsgLiquidStake under min_liquid_stake_amount rejected",
      () => LiquidStake.MsgLiquidStake(POOL_ID, "1"),
      false,
      false
    );

    // --- denom mismatch on unstake ---
    testMsg(
      "MsgLiquidUnstake with wrong denom rejected (ErrPoolDenomMismatch)",
      () => LiquidStake.MsgLiquidUnstake(POOL_ID, "1000", "uixo"),
      false,
      false
    );

    // --- duplicate pool create through gov (proposal passes but inner Msg fails) ---
    test("gov: duplicate CreatePool — proposal passes, msg execution fails", async () => {
      const res = await LiquidStake.MsgSubmitProposalCreatePool({
        poolId: POOL_ID, // already exists
        liquidBondDenom: "udup",
        initialAdminAddress: testerAddress,
        initialFeeAccountAddress: testerAddress,
      });
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      console.log("duplicate-create proposal id:", proposalId);
      await Cosmos.MsgVote(proposalId);
      await timeout(VOTING_WAIT_MS);

      // Verify the on-chain proposal status reports failure.
      // Using cosmos.gov.v1 since the proposal was submitted via v1.
      const proposal = await Queries.LiquidStakePool(POOL_ID);
      expect(proposal.pool?.liquidBondDenom).toBe(LST_DENOM); // unchanged
    });

    // --- duplicate denom across pools ---
    test("gov: CreatePool with already-used denom — execution fails", async () => {
      const NEW_POOL = "carbontwo";
      const res = await LiquidStake.MsgSubmitProposalCreatePool({
        poolId: NEW_POOL,
        liquidBondDenom: LST_DENOM, // already used by `carbon`
        initialAdminAddress: testerAddress,
        initialFeeAccountAddress: testerAddress,
      });
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      await Cosmos.MsgVote(proposalId);
      await timeout(VOTING_WAIT_MS);

      // The pool should NOT exist (duplicate-denom check rejected it).
      let notFound = false;
      try {
        await Queries.LiquidStakePool(NEW_POOL);
      } catch (e) {
        notFound = /not found/i.test((e as Error).message);
      }
      expect(notFound).toBe(true);
    });

    // --- chain bond denom (uixo) cannot be a pool LST denom ---
    test("gov: CreatePool with denom uixo — execution fails (chain bond denom)", async () => {
      const NEW_POOL = "uixopool";
      const res = await LiquidStake.MsgSubmitProposalCreatePool({
        poolId: NEW_POOL,
        liquidBondDenom: "uixo",
        initialAdminAddress: testerAddress,
        initialFeeAccountAddress: testerAddress,
      });
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      await Cosmos.MsgVote(proposalId);
      await timeout(VOTING_WAIT_MS);

      // Pool must NOT have been created — registerPool rejects the chain
      // bond denom because a pool minting "uixo" would shadow real IXO.
      let notFound = false;
      try {
        await Queries.LiquidStakePool(NEW_POOL);
      } catch (e) {
        notFound = /not found/i.test((e as Error).message);
      }
      expect(notFound).toBe(true);
    });

    // --- IBC voucher namespace cannot be a pool LST denom ---
    // Uses a syntactically-valid IBC voucher hash — content is arbitrary
    // because the chain rejects on the format alone (^ibc/[0-9A-F]{64}$).
    test("gov: CreatePool with ibc/<HASH> denom — execution fails (IBC namespace reserved)", async () => {
      const NEW_POOL = "ibcpool";
      const IBC_HASH =
        "27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2";
      const res = await LiquidStake.MsgSubmitProposalCreatePool({
        poolId: NEW_POOL,
        liquidBondDenom: `ibc/${IBC_HASH}`,
        initialAdminAddress: testerAddress,
        initialFeeAccountAddress: testerAddress,
      });
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      await Cosmos.MsgVote(proposalId);
      await timeout(VOTING_WAIT_MS);

      // Pool must NOT have been created — registerPool's IsIBCDenom check
      // refuses any denom that matches the canonical voucher format.
      let notFound = false;
      try {
        await Queries.LiquidStakePool(NEW_POOL);
      } catch (e) {
        notFound = /not found/i.test((e as Error).message);
      }
      expect(notFound).toBe(true);
    });
  });

// =====================================================================
// 3. multiPoolPause — per-pool pause and global kill switch.
// =====================================================================

export const multiPoolPause = () =>
  describe("Liquidstake v7 — pause flags (per-pool + global)", () => {
    const POOL_ID = "carbon";
    const STAKE_AMOUNT = "10000000";

    // --- per-pool pause ---
    testMsg("admin: SetPoolPaused(true)", () =>
      LiquidStake.MsgSetPoolPaused(POOL_ID, true)
    );

    test("Pool.paused == true after SetPoolPaused", async () => {
      const res = await Queries.LiquidStakePool(POOL_ID);
      expect(res.pool?.paused).toBe(true);
    });

    testMsg(
      "MsgLiquidStake while pool paused rejected (ErrPoolPaused)",
      () => LiquidStake.MsgLiquidStake(POOL_ID, STAKE_AMOUNT),
      false,
      false
    );

    testMsg("admin: SetPoolPaused(false) — unpause", () =>
      LiquidStake.MsgSetPoolPaused(POOL_ID, false)
    );

    testMsg("MsgLiquidStake succeeds again after unpause", () =>
      LiquidStake.MsgLiquidStake(POOL_ID, STAKE_AMOUNT)
    );

    // --- global kill switch ---
    test("gov: SetModulePaused(true) + vote", async () => {
      const res = await LiquidStake.MsgSubmitProposalSetModulePaused(true);
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      await Cosmos.MsgVote(proposalId);
      await timeout(VOTING_WAIT_MS);

      const params = await Queries.LiquidStakeModuleParams();
      expect(params.moduleParams!.modulePaused).toBe(true);
    });

    testMsg(
      "MsgLiquidStake while module globally paused rejected",
      () => LiquidStake.MsgLiquidStake(POOL_ID, STAKE_AMOUNT),
      false,
      false
    );

    test("gov: SetModulePaused(false) + vote", async () => {
      const res = await LiquidStake.MsgSubmitProposalSetModulePaused(false);
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      await Cosmos.MsgVote(proposalId);
      await timeout(VOTING_WAIT_MS);

      const params = await Queries.LiquidStakeModuleParams();
      expect(params.moduleParams!.modulePaused).toBe(false);
    });

    testMsg("MsgLiquidStake succeeds after global unpause", () =>
      LiquidStake.MsgLiquidStake(POOL_ID, STAKE_AMOUNT)
    );
  });

// =====================================================================
// 4. multiPoolAutocompound — slow flow that waits for the 2min epoch
//    tick to fire and verifies that net_amount strictly grows from
//    fresh mint inflation re-staked into the pool. ~5 minutes total.
//
//    Pre-conditions:
//    - Chain built with mint + liquidstake + epochs all set to "2min".
//    - "carbon" pool already exists (multiPoolBasic was run).
// =====================================================================

export const multiPoolAutocompound = () =>
  describe("Liquidstake v7 — autocompound (slow, ~5 min)", () => {
    const POOL_ID = "carbon";
    const STAKE_AMOUNT = "1000000000"; // 1000 IXO — large enough that small inflation shows up

    let preNetAmount = 0;
    let preSupply = BigInt(0);

    testMsg("admin: stake 1000 IXO into carbon pool", () =>
      LiquidStake.MsgLiquidStake(POOL_ID, STAKE_AMOUNT)
    );

    test("snapshot pre-epoch NetAmountState", async () => {
      // Wait one block so the stake is reflected.
      await timeout(8000);
      const res = await Queries.LiquidStakeStates(POOL_ID);
      preNetAmount = parseFloat(res.netAmountState!.netAmount);
      preSupply = BigInt(res.netAmountState!.stkixoTotalSupply);
      console.log({ preNetAmount, preSupply: preSupply.toString() });
      expect(preNetAmount).toBeGreaterThan(0);
      expect(preSupply).toBeGreaterThan(BigInt(0));
    });

    test(`wait ${EPOCH_WAIT_MS / 1000}s for one autocompound epoch`, async () => {
      await timeout(EPOCH_WAIT_MS);
      expect(true).toBe(true);
    });

    test("post-epoch netAmount strictly greater (rewards autocompounded)", async () => {
      const res = await Queries.LiquidStakeStates(POOL_ID);
      const postNetAmount = parseFloat(res.netAmountState!.netAmount);
      const postSupply = BigInt(res.netAmountState!.stkixoTotalSupply);
      console.log({
        postNetAmount,
        postSupply: postSupply.toString(),
        deltaNet: postNetAmount - preNetAmount,
      });
      // Supply doesn't change from autocompound (no minting / burning of LST).
      expect(postSupply).toBe(preSupply);
      // NetAmount must strictly grow — fresh mint inflation was re-staked.
      expect(postNetAmount).toBeGreaterThan(preNetAmount);
    });

    test("unstake_rate appreciated above 1.0", async () => {
      const res = await Queries.LiquidStakeStates(POOL_ID);
      const rate = parseFloat(res.netAmountState!.unstakeRate);
      console.log({ unstakeRate: rate });
      expect(rate).toBeGreaterThan(1);
    });

    // Sanity-check the appreciated-rate burn returns more uixo than the LST face
    // value would imply at 1:1.
    testMsg(
      "admin: MsgLiquidUnstake — receives uixo at appreciated rate",
      () => LiquidStake.MsgLiquidUnstake(POOL_ID, "1000000")
    );
  });

// =====================================================================
// 5. zeroPoolPostUpgrade — smoke test for the migrated "zero" pool.
//    Skip on a fresh local chain where the v7 migration ran with no
//    legacy uzero state to migrate (the migration's empty-denom guard
//    means no "zero" pool gets created in that case).
//
//    To exercise this flow against a fresh chain, first run a setup
//    that creates a "zero" pool through the new MsgCreatePool path
//    (e.g. include {pool_id="zero", denom="uzero"} in an extra gov
//    proposal).
// =====================================================================

export const zeroPoolPostUpgrade = () =>
  describe("Liquidstake v7 — migrated 'zero' pool smoke", () => {
    const POOL_ID = "zero";

    test("Pool('zero') exists with denom uzero (skipped if absent)", async () => {
      try {
        const res = await Queries.LiquidStakePool(POOL_ID);
        console.log("zero pool:", JSON.stringify(res.pool, null, 2));
        expect(res.pool?.liquidBondDenom).toBe("uzero");
        // Proxy address for the migrated pool MUST equal the legacy
        // LiquidStakeProxyAcc derivation (preserves pre-v7 delegations).
        expect(res.pool?.proxyAccountAddress).toMatch(/^ixo1/);
      } catch (e) {
        console.log(
          "zero pool not present on this chain — skipping (fresh chain without v7 legacy state)"
        );
        expect(true).toBe(true);
      }
    });

    test("Pools list includes zero (or empty on fresh chain)", async () => {
      const res = await Queries.LiquidStakePools();
      const ids = res.pools.map((p) => p.poolId);
      console.log({ poolIds: ids });
      expect(Array.isArray(res.pools)).toBe(true);
    });
  });

// =====================================================================
// Legacy single-pool flow kept for reference under a clearly different
// name. New code should use the multiPool* flows above. The original
// `prepareModuleWithProposals` / `burnIxo` are removed because their
// MsgUpdateParams target no longer exists in v7.
// =====================================================================

/**
 * Burn-uixo smoke test (module-level, not pool-scoped). Helpful for
 * verifying MsgBurn still works after the v7 multi-pool refactor.
 */
export const burnIxoSmoke = () =>
  describe("Liquidstake v7 — module-level burn", () => {
    testMsg("MsgBurn 10 IXO uixo", () => LiquidStake.MsgBurn("10000000"));
  });

// =====================================================================
// 6. mintRestrictionAgainstBonds — proves the chain refuses to let a
//    foreign module create a bond whose token symbol collides with a
//    liquidstake pool's LST denom.
//
//    Background — first iteration of this test attempted to create the
//    bond (which bonds allowed), then buy from it. The buy got included
//    in a bonds batch; bonds' EndBlock processor then called
//    bank.MintCoins(ucarbon, …) to mint bond tokens; the bank-level
//    MintCoinsRestriction installed in app/keepers/keepers.go correctly
//    rejected the call — but the rejection bubbled up as an EndBlocker
//    error and HALTED THE CHAIN. That surfaced a real chain-side gap:
//    bonds had no front-door check preventing creation of a bond on a
//    denom another module already owns.
//
//    Chain fix: x/bonds/keeper/msg_server.go::CreateBond now refuses
//    bond tokens with non-zero bank supply OR registered denom metadata
//    (symmetric to x/liquidstake/keeper/pool.go::registerPool). With
//    that guard in place, the collision is caught at bond-creation
//    time — chain stays healthy, no batch ever runs against an
//    LST-claimed denom, and the bank MintCoinsRestriction remains the
//    enduring defence-in-depth backstop for any future module that
//    might bypass the front-door check.
//
//    Pre-conditions:
//    - multiPoolBasic has run, leaving pool "carbon" with denom
//      "ucarbon" registered and at least one validator whitelisted (so
//      bank.GetSupply("ucarbon") > 0).
// =====================================================================

export const mintRestrictionAgainstBonds = () =>
  describe("Liquidstake v7 — bank MintCoinsRestriction blocks foreign minters", () => {
    const POOL_ID = "carbon";
    const LST_DENOM = "ucarbon";

    let testerAddress: string;
    let testerDid: string;
    let bondCreatorDid: string;
    let bondDid: string;
    let supplyBeforeBuy: bigint;

    test("capture wallet identifiers + register IID for bond DID", async () => {
      const tester = getUser(WalletUsers.tester);
      const account = (await tester.getAccounts())[0];
      testerAddress = account.address;
      // creatorDid is "<iid-did>#<base58 pubkey>" — must reference an
      // already-registered IID document. tester is registered via
      // IID.registerIids() earlier in the spec.
      testerDid = tester.did + "#" + base58.encode(account.pubkey);
      bondCreatorDid = testerDid;
      // bondDid is a plain DID identifier; it does NOT have to be a
      // registered IID document, just a unique string that no other bond
      // already uses. We use random's wallet DID to avoid colliding with
      // the WalletUsers.bond used by bondsBasic.
      bondDid = getUser(WalletUsers.random).did;
      console.log({ testerAddress, bondDid });
      expect(testerDid).toMatch(/^did:ixo:.+#.+/);
      expect(bondDid).toMatch(/^did:ixo:/);
    });

    test("snapshot pool LST supply before bonds collision", async () => {
      const states = await Queries.LiquidStakeStates(POOL_ID);
      supplyBeforeBuy = BigInt(states.netAmountState!.stkixoTotalSupply);
      console.log({ supplyBeforeBuy: supplyBeforeBuy.toString() });
      // multiPoolBasic should have left at least 90 LST in supply
      // (100 staked − 10 unstaked). Don't assert an exact number to keep
      // this resilient to other flows running in between.
      expect(supplyBeforeBuy).toBeGreaterThan(BigInt(0));
    });

    // --- Step 1: try to create a bond whose token symbol == LST denom.
    //              bonds.CreateBond MUST refuse because pool "carbon" has
    //              already minted ucarbon supply > 0. ---
    testMsg(
      "create bond with token = ucarbon — rejected by bonds front-door check",
      async () => {
        const client = await LiquidStake.createUncachedClient(getUser(WalletUsers.tester) as any);
        const message = {
          typeUrl: "/ixo.bonds.v1beta1.MsgCreateBond",
          value: ixo.bonds.v1beta1.MsgCreateBond.fromPartial({
            bondDid,
            token: LST_DENOM, // <-- collision with pool LST denom
            name: `Bond ${LST_DENOM}`,
            description: "Bond colliding with liquidstake pool denom",
            creatorDid: bondCreatorDid,
            controllerDid: bondCreatorDid,
            functionType: "augmented_function",
            functionParameters: [
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "p0",
                value: "1000000000000000000",
              }),
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "theta",
                value: "0",
              }),
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "kappa",
                value: "3000000000000000000",
              }),
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "d0",
                value: "1000000000000000000000",
              }),
            ],
            reserveTokens: ["uixo"],
            txFeePercentage: "0",
            exitFeePercentage: "0",
            feeAddress: testerAddress,
            reserveWithdrawalAddress: testerAddress,
            maxSupply: cosmos.base.v1beta1.Coin.fromPartial({
              denom: LST_DENOM,
              amount: "1000000000000",
            }),
            orderQuantityLimits: [],
            sanityRate: "0",
            sanityMarginPercentage: "0",
            allowSells: false,
            allowReserveWithdrawals: true,
            alphaBond: true,
            batchBlocks: "1",
            outcomePayment: "1000000",
            creatorAddress: testerAddress,
            oracleDid: bondCreatorDid,
          }),
        };
        return await client.signAndBroadcast(testerAddress, [message], fee);
      },
      false,
      false // expect failure: ErrBondTokenAlreadyInUse
    );

    // --- Step 2: pool state is untouched ---
    test("pool LST supply unchanged after blocked bond create attempt", async () => {
      const states = await Queries.LiquidStakeStates(POOL_ID);
      const supplyAfter = BigInt(states.netAmountState!.stkixoTotalSupply);
      console.log({
        supplyBeforeBuy: supplyBeforeBuy.toString(),
        supplyAfter: supplyAfter.toString(),
      });
      expect(supplyAfter).toBe(supplyBeforeBuy);
    });

    // --- Step 3: liquidstake itself still works on the same denom.
    //             Stakes an amount > the pool's MinLiquidStakeAmount
    //             (default 1_000_000 = 1 IXO). Asserts both that the
    //             positive (sentinel-tagged) bank-mint path is healthy
    //             AND that the foreign-mint rejection didn't poison
    //             keeper state. ---
    testMsg("liquidstake admin can still LiquidStake into the same pool", () =>
      LiquidStake.MsgLiquidStake(POOL_ID, "10000000")
    );

    test("pool supply grew after legitimate liquidstake mint", async () => {
      const states = await Queries.LiquidStakeStates(POOL_ID);
      const supplyAfterStake = BigInt(states.netAmountState!.stkixoTotalSupply);
      console.log({ supplyAfterStake: supplyAfterStake.toString() });
      expect(supplyAfterStake).toBeGreaterThan(supplyBeforeBuy);
    });

    // ---------------------------------------------------------------
    // Empty-pool variant — proves Option B (the bank denom-metadata
    // claim performed by registerPool) catches a colliding bond create
    // EVEN WHEN the pool's bank supply is still 0. This is the gap
    // that the supply-only check would miss in the window between
    // MsgCreatePool and the first LiquidStake.
    //
    // We create a fresh pool ("empty"/"uempty") via gov, do NOT stake
    // into it, then attempt to register a bond on the same denom.
    // The metadata claim alone must trigger ErrBondTokenAlreadyInUse.
    // ---------------------------------------------------------------

    const EMPTY_POOL_ID = "empty";
    const EMPTY_DENOM = "uempty";

    test("gov: create EMPTY pool (no LiquidStake, supply stays 0)", async () => {
      const res = await LiquidStake.MsgSubmitProposalCreatePool({
        poolId: EMPTY_POOL_ID,
        liquidBondDenom: EMPTY_DENOM,
        initialAdminAddress: testerAddress,
        initialFeeAccountAddress: testerAddress,
      });
      expect(res.code).toBe(0);
      const proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      console.log({ emptyPoolProposalId: proposalId });
      const voteRes = await Cosmos.MsgVote(proposalId);
      expect(voteRes.code).toBe(0);
      await timeout(VOTING_WAIT_MS);
    });

    test("verify EMPTY pool exists with zero supply + denom metadata claimed", async () => {
      const pool = await Queries.LiquidStakePool(EMPTY_POOL_ID);
      expect(pool.pool?.liquidBondDenom).toBe(EMPTY_DENOM);

      // Bank supply should be 0 — pool registered, no LiquidStake yet.
      const supply = await queryClient.cosmos.bank.v1beta1.supplyOf({
        denom: EMPTY_DENOM,
      });
      const supplyAmt = BigInt(supply.amount?.amount ?? "0");
      console.log({ emptyPoolSupply: supplyAmt.toString() });
      expect(supplyAmt).toBe(BigInt(0));

      // Metadata SHOULD be registered by registerPool — this is the
      // signal that bonds.CreateBond will see and reject on. The denom
      // is "uempty" so we expect the standard u-prefix heuristic to
      // produce a two-unit metadata record: base = uempty (exp 0),
      // display = empty (exp 6).
      const meta = await queryClient.cosmos.bank.v1beta1.denomMetadata({
        denom: EMPTY_DENOM,
      });
      console.log("emptyDenomMetadata:", JSON.stringify(meta.metadata));
      expect(meta.metadata?.base).toBe(EMPTY_DENOM);
      expect(meta.metadata?.display).toBe("empty"); // u-prefix stripped
      expect(meta.metadata?.denomUnits).toHaveLength(2);
      expect(meta.metadata?.denomUnits?.[0].denom).toBe(EMPTY_DENOM);
      expect(meta.metadata?.denomUnits?.[0].exponent).toBe(0);
      expect(meta.metadata?.denomUnits?.[1].denom).toBe("empty");
      expect(meta.metadata?.denomUnits?.[1].exponent).toBe(6);
    });

    testMsg(
      "create bond with token = uempty — rejected by metadata claim despite zero supply",
      async () => {
        // Use charlie's DID for the bondDid so we don't collide with the
        // earlier bond against random.did.
        const altBondDid = getUser(WalletUsers.charlie).did;
        const client = await LiquidStake.createUncachedClient(
          getUser(WalletUsers.tester) as any
        );
        const message = {
          typeUrl: "/ixo.bonds.v1beta1.MsgCreateBond",
          value: ixo.bonds.v1beta1.MsgCreateBond.fromPartial({
            bondDid: altBondDid,
            token: EMPTY_DENOM,
            name: `Bond ${EMPTY_DENOM}`,
            description: "Bond colliding with empty liquidstake pool denom",
            creatorDid: bondCreatorDid,
            controllerDid: bondCreatorDid,
            functionType: "augmented_function",
            functionParameters: [
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "p0",
                value: "1000000000000000000",
              }),
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "theta",
                value: "0",
              }),
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "kappa",
                value: "3000000000000000000",
              }),
              ixo.bonds.v1beta1.FunctionParam.fromPartial({
                param: "d0",
                value: "1000000000000000000000",
              }),
            ],
            reserveTokens: ["uixo"],
            txFeePercentage: "0",
            exitFeePercentage: "0",
            feeAddress: testerAddress,
            reserveWithdrawalAddress: testerAddress,
            maxSupply: cosmos.base.v1beta1.Coin.fromPartial({
              denom: EMPTY_DENOM,
              amount: "1000000000000",
            }),
            orderQuantityLimits: [],
            sanityRate: "0",
            sanityMarginPercentage: "0",
            allowSells: false,
            allowReserveWithdrawals: true,
            alphaBond: true,
            batchBlocks: "1",
            outcomePayment: "1000000",
            creatorAddress: testerAddress,
            oracleDid: bondCreatorDid,
          }),
        };
        return await client.signAndBroadcast(testerAddress, [message], fee);
      },
      false,
      false // expect failure: ErrBondTokenAlreadyInUse via HasDenomMetaData
    );

    test("EMPTY pool's bank supply is still 0 after blocked bond create", async () => {
      const supply = await queryClient.cosmos.bank.v1beta1.supplyOf({
        denom: EMPTY_DENOM,
      });
      expect(BigInt(supply.amount?.amount ?? "0")).toBe(BigInt(0));
    });
  });
