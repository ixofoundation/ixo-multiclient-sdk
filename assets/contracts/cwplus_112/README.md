# cw-plus v1.1.2 (companion contracts for DAO DAO v2.7.1)

Unmodified official release artifacts from
[CosmWasm/cw-plus v1.1.2](https://github.com/CosmWasm/cw-plus/releases/tag/v1.1.2),
verified against the bundled `checksums.txt` (sha256).

| File | Used as |
|---|---|
| `cw4_group.wasm` | Member registry behind `dao_voting_cw4` (and the hook source for `dao_vote_delegation`). |
| `cw20_base.wasm` | The cw20 token instantiated for new token-staking DAOs. |

**Why 1.1.2 and not 2.x:** cw-plus 2.0.0 is built on cosmwasm-std 2.x, which
cannot run on the chain's wasmvm 1.5.4. v1.1.2 is the newest 1.x release and
is the pin the dao-contracts v2.7.1 workspace itself targets.

Full documentation for this contract generation — sources, upload order,
mechanics, exclusions: [`../daodao_v271/README.md`](../daodao_v271/README.md).
