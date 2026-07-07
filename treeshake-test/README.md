# Tree-shaking & packaging test harness

Measures what `@ixo/impactxclient-sdk` actually costs consumers (frontend apps,
Cloudflare Workers, Node) when bundled with esbuild (what wrangler uses, and the
engine under Vite dev/optimizer) and Rollup (Vite production builds).

The SDK is installed as a `file:..` symlink, so it tests the package exactly as
published (`module/`, `main/`, `types/`, `exports` map). Build the SDK first if
`module/` is missing: `yarn build && yarn build:ts` in the repo root.

## Run

```bash
npm install
npm run build          # esbuild: sizes + top contributors per entry
npm run build:rollup   # rollup second opinion
npm run check:node     # does the package load in plain Node (CJS + ESM)?
npm run check:types    # do all import styles resolve types?
```

Note: your editor may show module-resolution squiggles in `entries/` if the
TS language server picks up an old TypeScript. The pinned typescript in this
folder (`npm run check:types`) is authoritative.

## Entries

| entry | simulates |
|---|---|
| `00-baseline` | empty app (bundler overhead) |
| `01-tiny-util` | app that needs one 3-line helper (`utils.conversions.concatArrayBuffers`) |
| `02-single-msg-root` | app that needs one proto message via the documented `ixo.` namespace |
| `03-single-msg-deep` | same msg via deep `/module/...` file import |
| `04-signing-client` | typical dApp: `createSigningClient` |
| `05-query-client` | typical backend/worker: `createQueryClient` |
| `06-cloudflare-subpath` | the dedicated `/cloudflare` Durable Object subpath |
| `07-granular-subpath` | NEW: one message via typed granular subpath `…/codegen/ixo/iid/v1beta1/tx` |
| `08-slim-query-client` | NEW: `createRpc` + only the query modules you need (iid + bank) via granular subpaths |

## Results: before vs after the 2026-07 upgrade

SDK v2.5.1 (cosmjs 0.32.4, protobufjs 6, no sideEffects, namespace-only API)
vs upgraded (cosmjs 0.39, protobufjs 7, `sideEffects: false`, granular exports,
fixed ESM build). esbuild, minified / gzip:

| entry | BEFORE | AFTER | change |
|---|---|---|---|
| 01-tiny-util | 5,163 KB / 975 KB | **377 KB / 114 KB** | −93% |
| 02-single-msg-root | 5,163 KB / 975 KB | **2,667 KB / 402 KB** | −48% |
| 03-single-msg-deep | 33 KB / 11 KB | 45 KB / 14 KB | protobufjs 7 slightly larger |
| 04-signing-client | 5,177 KB / 978 KB | **1,836 KB / 303 KB** | −65% (after customRegistries per-file-import rewrite; still includes every chain msg type, as a signing client must) |
| 05-query-client | 5,165 KB / 975 KB | **1,223 KB / 221 KB** | −76% (queries/index per-file imports + stargate-free createRpc + local createProtobufRpcClient in codegen) |
| 06-cloudflare-subpath | 2.2 KB / 0.9 KB | 2.8 KB / 1.2 KB | — |
| 07-granular-subpath | n/a | **45 KB / 14 KB, fully typed** | the recommended path for msg types |
| 08-slim-query-client | n/a | **461 KB / 128 KB** | the recommended path for query-only Workers/frontends |

Key drivers: `sideEffects: false` lets bundlers skip unused modules (tiny-util
now pulls 8 SDK files instead of 432); cosmjs 0.36+ dropped libsodium (−1 MB),
0.34+ dropped elliptic/bn.js for @noble, 0.34 dropped axios from
tendermint-rpc. BEFORE also **failed to build outright** without Node polyfills
(`bip39-light` hard-required `crypto`); AFTER builds clean for browser/worker
targets.

Node loadability (`npm run check:node`):

| check | BEFORE | AFTER |
|---|---|---|
| `require()` (CJS) | OK | OK |
| `import` (ESM) | FAIL (directory imports) | **OK** |
| `import` `/cloudflare` | OK | OK |

TypeScript (`npm run check:types`): BEFORE, deep `/module/*` imports were
implicit `any`. AFTER, every entry resolves full types (root, `/module/*.js`,
granular subpaths, `/cloudflare`).

## What is still big and why

- The `ixo.`/`cosmos.` namespace objects aggregate every module of their proto
  tree by design, so importing them (entry 02) still costs ~400 KB gz. Migrating
  hot paths to granular subpaths (entry 07 style) is the fix:
  `import { MsgAddController } from "@ixo/impactxclient-sdk/codegen/ixo/iid/v1beta1/tx"`.
- `createSigningClient` includes the full registry (all msg types of the chain)
  plus cosmjs-types — inherent to a fully-featured signing client.
  `customRegistries.ts` imports each message module per-file (not via the
  namespace objects) so query/genesis/rpc modules stay out of the bundle —
  keep that pattern when adding new registry entries.
- `createQueryClient` (entry 05) instantiates every module's QueryClientImpl by
  design (~35 modules of query types). Consumers who need only a few modules
  should compose their own via `createRpc` + granular subpaths (entry 08).
- The generated `query.rpc.Query.ts` files use the SDK-local
  `codegen/protobufRpcClient.ts` instead of @cosmjs/stargate's
  `createProtobufRpcClient` — cosmjs ships CJS without `sideEffects: false`,
  so any value import of its barrel drags ~900 KB of cosmjs-types into every
  bundle. This and every other codegen patch must be re-applied after
  `yarn codegen` — see [`CODEGEN_PATCHES.md`](../CODEGEN_PATCHES.md) in the
  repo root. Keep `createRpc` stargate-free.
- `ws` (~38 KB) comes with @cosmjs/tendermint-rpc for websocket subscriptions
  even in browser bundles.
