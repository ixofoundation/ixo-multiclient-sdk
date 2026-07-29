/**
 * DAO DAO v2.7.1 contract generation — versioned code-ID registry.
 *
 * Full documentation (sources, per-contract rationale, upload mechanics,
 * deliberate exclusions): assets/contracts/daodao_v271/README.md
 *
 * Artifacts (official GitHub release builds, checksums verified):
 *   assets/contracts/daodao_v271/   dao-contracts v2.7.1 (DA0-DA0/dao-contracts)
 *   assets/contracts/cwplus_112/    cw-plus v1.1.2 (cw4_group, cw20_base)
 *   assets/contracts/cwnfts_0180/   cw-nfts v0.18.0 (cw721_base)
 *
 * Code IDs:
 *   devnet:  REAL on-chain IDs 88–109 (gov proposals 117–138, 2026-07-29)
 *   testnet: REAL on-chain IDs 52–73  (gov proposals 110–131, 2026-07-29)
 *   Both verified by matching each code's on-chain data_hash against the
 *   artifact checksums.
 *   mainnet: PRE-FILLED with the deterministic IDs 51–72 — proposals 483–504
 *   execute in order when their 5-day voting ends 2026-08-03, and uploads are
 *   gov-only with no other store proposals in flight, so the sequence is
 *   known ahead of tally. VERIFY each code's data_hash against the artifact
 *   checksums after 2026-08-03 before publishing/deploying anything that
 *   depends on the mainnet column.
 *   NOTE: the ixo-testing-harness daodao suite ran against a fresh local
 *   chain where these same artifacts landed at IDs 30–51 — re-running those
 *   specs requires a local override (see daodao/reconcile-code-ids.sh).
 *
 * NOTE on upload gas: dao_proposal_single.wasm and dao_proposal_multiple.wasm
 * exceed 100M store gas — submit ALL MsgStoreCode gov proposals with ~160M
 * gas (see MsgSubmitProposalStoreCW's gas param) or those two fail and every
 * later code id shifts.
 *
 * The array order below is the CANONICAL upload order — uploading in array
 * order yields sequential code ids (88..109 on devnet; 30..51 on the fresh
 * harness chain).
 */
export const DAO_VERSION_OLD = "2.0.3";
export const DAO_VERSION_LATEST = "2.7.1";

export const contractsV271 = [
  {
    name: "dao_core",
    path: ["contracts", "daodao_v271", "dao_dao_core.wasm"],
    category: "daodao",
    code: { devnet: 88, testnet: 52, mainnet: 51 },
  },
  {
    name: "dao_proposal_single",
    path: ["contracts", "daodao_v271", "dao_proposal_single.wasm"],
    category: "daodao",
    code: { devnet: 89, testnet: 53, mainnet: 52 },
  },
  {
    name: "dao_pre_propose_single",
    path: ["contracts", "daodao_v271", "dao_pre_propose_single.wasm"],
    category: "daodao",
    code: { devnet: 90, testnet: 54, mainnet: 53 },
  },
  {
    name: "dao_voting_cw4",
    path: ["contracts", "daodao_v271", "dao_voting_cw4.wasm"],
    category: "daodao",
    code: { devnet: 91, testnet: 55, mainnet: 54 },
  },
  {
    name: "cw4_group",
    path: ["contracts", "cwplus_112", "cw4_group.wasm"],
    category: "daodao",
    code: { devnet: 92, testnet: 56, mainnet: 55 },
  },
  {
    name: "dao_proposal_multiple",
    path: ["contracts", "daodao_v271", "dao_proposal_multiple.wasm"],
    category: "daodao",
    code: { devnet: 93, testnet: 57, mainnet: 56 },
  },
  {
    name: "dao_pre_propose_multiple",
    path: ["contracts", "daodao_v271", "dao_pre_propose_multiple.wasm"],
    category: "daodao",
    code: { devnet: 94, testnet: 58, mainnet: 57 },
  },
  {
    name: "dao_pre_propose_approval_single",
    path: ["contracts", "daodao_v271", "dao_pre_propose_approval_single.wasm"],
    category: "daodao",
    code: { devnet: 95, testnet: 59, mainnet: 58 },
  },
  {
    name: "dao_pre_propose_approver",
    path: ["contracts", "daodao_v271", "dao_pre_propose_approver.wasm"],
    category: "daodao",
    code: { devnet: 96, testnet: 60, mainnet: 59 },
  },
  {
    name: "dao_pre_propose_approval_multiple",
    path: [
      "contracts",
      "daodao_v271",
      "dao_pre_propose_approval_multiple.wasm",
    ],
    category: "daodao",
    code: { devnet: 97, testnet: 61, mainnet: 60 },
  },
  {
    name: "dao_voting_cw20_staked",
    path: ["contracts", "daodao_v271", "dao_voting_cw20_staked.wasm"],
    category: "daodao",
    code: { devnet: 98, testnet: 62, mainnet: 61 },
  },
  {
    name: "cw20_stake",
    path: ["contracts", "daodao_v271", "cw20_stake.wasm"],
    category: "daodao",
    code: { devnet: 99, testnet: 63, mainnet: 62 },
  },
  {
    name: "cw20_base",
    path: ["contracts", "cwplus_112", "cw20_base.wasm"],
    category: "daodao",
    code: { devnet: 100, testnet: 64, mainnet: 63 },
  },
  {
    name: "dao_voting_cw721_staked",
    path: ["contracts", "daodao_v271", "dao_voting_cw721_staked.wasm"],
    category: "daodao",
    code: { devnet: 101, testnet: 65, mainnet: 64 },
  },
  {
    name: "cw721_base",
    path: ["contracts", "cwnfts_0180", "cw721_base.wasm"],
    category: "daodao",
    code: { devnet: 102, testnet: 66, mainnet: 65 },
  },
  {
    name: "cw_admin_factory",
    path: ["contracts", "daodao_v271", "cw_admin_factory.wasm"],
    category: "daodao",
    code: { devnet: 103, testnet: 67, mainnet: 66 },
  },
  {
    name: "cw_vesting",
    path: ["contracts", "daodao_v271", "cw_vesting-staking.wasm"],
    category: "daodao",
    code: { devnet: 104, testnet: 68, mainnet: 67 },
  },
  {
    name: "cw_payroll_factory",
    path: ["contracts", "daodao_v271", "cw_payroll_factory.wasm"],
    category: "daodao",
    code: { devnet: 105, testnet: 69, mainnet: 68 },
  },
  {
    name: "dao_rewards_distributor",
    path: ["contracts", "daodao_v271", "dao_rewards_distributor.wasm"],
    category: "daodao",
    code: { devnet: 106, testnet: 70, mainnet: 69 },
  },
  {
    name: "dao_vote_delegation",
    path: ["contracts", "daodao_v271", "dao_vote_delegation.wasm"],
    category: "daodao",
    code: { devnet: 107, testnet: 71, mainnet: 70 },
  },
  {
    name: "cw20_stake_external_rewards",
    path: ["contracts", "daodao_v271", "cw20_stake_external_rewards.wasm"],
    category: "daodao",
    code: { devnet: 108, testnet: 72, mainnet: 71 },
  },
  {
    name: "cw20_stake_reward_distributor",
    path: ["contracts", "daodao_v271", "cw20_stake_reward_distributor.wasm"],
    category: "daodao",
    code: { devnet: 109, testnet: 73, mainnet: 72 },
  },
];
