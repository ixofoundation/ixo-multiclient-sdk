# DAO DAO v2.7.1 contract generation

Second-generation DAO DAO smart contracts for the ixo chains, upgrading the
fleet from **v2.0.3** (uploaded 2023, code IDs 3–26 on all networks) to the
latest stable, audited **v2.7.1**. Tracked in the Linear project
*"DAODAO Upgrade to latest versions"* (SDK work: IXO-4092, uploads:
IXO-4094/4095/4096).

The canonical registry for this generation — contract list, upload order and
per-network code IDs — is
[`src/custom_queries/contract.constants.v271.ts`](../../../src/custom_queries/contract.constants.v271.ts).
A code ID of `0` there means "not uploaded on that network yet".

## Sources

All binaries are **unmodified official release artifacts**, downloaded from
the upstream GitHub releases together with their `checksums.txt`:

| Directory | Project | Release | Why this version |
|---|---|---|---|
| `daodao_v271/` (this dir) | [DA0-DA0/dao-contracts](https://github.com/DA0-DA0/dao-contracts) | [v2.7.1](https://github.com/DA0-DA0/dao-contracts/releases/tag/v2.7.1) (2025-06-20) | Latest stable release. Built on cosmwasm-std 1.5.x / `cosmwasm_1_2`, so it runs on the current chain (wasmd 0.50.0, wasmvm 1.5.4, capabilities up to `cosmwasm_1_4`) — **no chain upgrade needed**. v2.8.0-alpha was skipped: unaudited (RBAM). |
| [`../cwplus_112/`](../cwplus_112/) | [CosmWasm/cw-plus](https://github.com/CosmWasm/cw-plus) | [v1.1.2](https://github.com/CosmWasm/cw-plus/releases/tag/v1.1.2) | Newest cw-plus still on cosmwasm-std 1.x. cw-plus 2.0.0 is cosmwasm-std 2.x and **cannot run** on wasmvm 1.5.4. |
| [`../cwnfts_0180/`](../cwnfts_0180/) | [CosmWasm/cw-nfts](https://github.com/CosmWasm/cw-nfts) | [v0.18.0](https://github.com/CosmWasm/cw-nfts/releases/tag/v0.18.0) | Newest cw721-base still on cosmwasm-std 1.x (0.19+ are 2.x). |

### Integrity

Every bundled `.wasm` was verified against the release `checksums.txt`
(sha256, last verified 2026-07-29). Re-verify any file with:

```bash
shasum -a 256 -c <(grep dao_dao_core.wasm checksums.txt)
```

The artifacts are the upstream CI builds (CosmWasm optimizer, reproducible).
If mainnet policy requires first-party provenance, rebuild from the tagged
source with `cosmwasm/optimizer:0.16.1` and validate with `cosmwasm-check` —
the sha256 must match `checksums.txt`.

## The 22 contracts we upload

19 from this directory + 2 from `cwplus_112/` + 1 from `cwnfts_0180/`, in the
canonical upload order of the registry (uploading in this order on a fresh
chain yields consecutive code IDs, which the testing-harness e2e suite
asserts):

| # | Registry name | File | Purpose / why included |
|---|---|---|---|
| 1 | `dao_core` | `dao_dao_core.wasm` | The DAO root contract: holds treasury, items, and the module registry. Every DAO migrates its core to this. |
| 2 | `dao_proposal_single` | `dao_proposal_single.wasm` | Single-choice proposals. v2.7.1 adds veto config, `submission_policy`, `individual_votes` (delegation-aware) — the module swapped in for every migrated DAO. |
| 3 | `dao_pre_propose_single` | `dao_pre_propose_single.wasm` | Deposit/permission gate for single-choice proposals (`submission_policy` replaces the old `open_proposal_submission`). |
| 4 | `dao_voting_cw4` | `dao_voting_cw4.wasm` | Membership-based voting power (the dominant DAO type on all networks). |
| 5 | `cw4_group` | `../cwplus_112/cw4_group.wasm` | Member registry behind `dao_voting_cw4`; hook source for vote delegation. |
| 6 | `dao_proposal_multiple` | `dao_proposal_multiple.wasm` | Multiple-choice proposals (auto-appended "none of the above" option). |
| 7 | `dao_pre_propose_multiple` | `dao_pre_propose_multiple.wasm` | Pre-propose gate for multiple-choice proposals. |
| 8 | `dao_pre_propose_approval_single` | `dao_pre_propose_approval_single.wasm` | Single-choice submissions require an approver's sign-off before becoming proposals. |
| 9 | `dao_pre_propose_approver` | `dao_pre_propose_approver.wasm` | Lets another DAO act as the approver for an approval pre-propose module. |
| 10 | `dao_pre_propose_approval_multiple` | `dao_pre_propose_approval_multiple.wasm` | Approval flow for multiple-choice proposals (new in this generation). |
| 11 | `dao_voting_cw20_staked` | `dao_voting_cw20_staked.wasm` | cw20-token-staking voting power (used by token DAOs, e.g. on mainnet). |
| 12 | `cw20_stake` | `cw20_stake.wasm` | Staking contract backing `dao_voting_cw20_staked`. |
| 13 | `cw20_base` | `../cwplus_112/cw20_base.wasm` | The cw20 token instantiated for new token DAOs. |
| 14 | `dao_voting_cw721_staked` | `dao_voting_cw721_staked.wasm` | NFT-staking voting power. |
| 15 | `cw721_base` | `../cwnfts_0180/cw721_base.wasm` | The cw721 collection for NFT DAOs. |
| 16 | `cw_admin_factory` | `cw_admin_factory.wasm` | Instantiates contracts with themselves as wasm admin (self-admin'd DAO creation path). |
| 17 | `cw_vesting` | `cw_vesting-staking.wasm` | Vesting payments. The release ships two builds; we take the **staking-enabled** build because the chain has the `staking` capability (vested funds can be delegated). |
| 18 | `cw_payroll_factory` | `cw_payroll_factory.wasm` | Factory instantiating `cw_vesting` contracts for payroll. |
| 19 | `dao_rewards_distributor` | `dao_rewards_distributor.wasm` | Generalised staking-rewards distribution for DAO members. |
| 20 | `dao_vote_delegation` | `dao_vote_delegation.wasm` | **The headline new capability**: members delegate voting power to registered delegates (crate v2.7.0, Zellic-audited). Requires hooks on `cw4_group` + a v2.7.x proposal module. |
| 21 | `cw20_stake_external_rewards` | `cw20_stake_external_rewards.wasm` | External reward streams for cw20 stakers. |
| 22 | `cw20_stake_reward_distributor` | `cw20_stake_reward_distributor.wasm` | Continuous reward funding for `cw20_stake`. |

## Shipped in the release but deliberately NOT uploaded

Kept in this directory so the bundle matches the upstream release manifest
exactly, but excluded from the registry/uploads:

| File | Reason |
|---|---|
| `btsg_ft_factory.wasm` | BitSong-chain-specific fantoken factory. |
| `cw_tokenfactory_issuer-{cosmwasm,osmosis,thorchain}.wasm` | Require the `x/tokenfactory` module, which the ixo chain does not have. |
| `dao_voting_token_staked-{default,thorchain}.wasm` | Native/tokenfactory-denom staking module; its token-creation path needs `x/tokenfactory`. Existing native-staked DAOs keep their v2.0.3 voting module (proven fine mixed-version). |
| `dao_voting_onft_staked.wasm` | OmniFlix oNFT staking — chain-specific. |
| `cw_vesting-no_staking.wasm` | We use the staking-enabled `cw_vesting` build instead (see #17). |
| `cw721_roles.wasm`, `dao_voting_cw721_roles.wasm` | Role-based NFT governance — not used by any ixo product. |
| `cw_fund_distributor.wasm`, `cw_token_swap.wasm` | v2.0.3-era contracts never instantiated on any ixo network; superseded (rewards distributor) or unused. |
| `dao_migrator.wasm` | Migrates v1 → v2 DAOs only; the entire ixo fleet is already v2. |
| `dao_proposal_condorcet.wasm` | Experimental ranked-choice voting. |
| `dao_proposal_hook_counter.wasm`, `dao_proposal_sudo.wasm`, `dao_test_custom_factory.wasm`, `dao_voting_cw20_balance.wasm` | Test/dev contracts. |

## Upload mechanics (per network)

The chain has `code_upload_access: Nobody` — every contract goes on-chain via
a **governance proposal** wrapping `MsgStoreCode`
(`__tests__/modules/Cosmos.ts` → `MsgSubmitProposalStoreCW`). Three rules
learned the hard way (all e2e-proven in the ixo-testing-harness suite,
`daodao/specs/20-upload-v271.spec.ts`):

1. `instantiatePermission` must be `ACCESS_TYPE_EVERYBODY`, or the stored
   code is uninstantiable.
2. `dao_proposal_single.wasm` and `dao_proposal_multiple.wasm` exceed the
   default 100M store gas — submit with **~160M gas** or the store fails and
   every later code ID silently shifts.
3. After the voting period, reconcile each stored code's on-chain `data_hash`
   against `checksums.txt` before recording the code IDs in the registry
   (the testing-harness has a ready-made script:
   `daodao/reconcile-code-ids.sh`).

Deployment order matters: ixo-blocksync classifies contracts by code ID, so
its updated `wasm_code_ids.ts` must be **deployed to a network before the
first v2.7.1 instantiation** there — then no backfill is ever needed.
