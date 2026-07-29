# cw-nfts v0.18.0 (companion contract for DAO DAO v2.7.1)

Unmodified official release artifact from
[CosmWasm/cw-nfts v0.18.0](https://github.com/CosmWasm/cw-nfts/releases/tag/v0.18.0),
verified against the bundled `checksums.txt` (sha256).

| File | Used as |
|---|---|
| `cw721_base.wasm` | The cw721 collection contract for NFT-staking DAOs (`dao_voting_cw721_staked` accepts `nft_contract: {new}` with this code ID, or `{existing}` with a deployed collection). |

**Why 0.18.0 and not newer:** cw-nfts 0.19+ moved to cosmwasm-std 2.x, which
cannot run on the chain's wasmvm 1.5.4. v0.18.0 is the newest 1.x-compatible
release.

Full documentation for this contract generation — sources, upload order,
mechanics, exclusions: [`../daodao_v271/README.md`](../daodao_v271/README.md).
