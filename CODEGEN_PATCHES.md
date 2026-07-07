# Required patches after regenerating codegen

`yarn codegen` **deletes and regenerates the entire `src/codegen/` directory**
(`scripts/codegen.js` runs `rimraf` on it before telescope writes fresh output).
The following manual patches live inside `src/codegen/` and are therefore LOST
on every regeneration. Re-apply all of them, then run the verification
checklist at the bottom.

These patches exist because the generated output targets an older dependency
surface (telescope 0.92.2 era) than the SDK now uses (cosmjs 0.39+,
protobufjs 7), and because several generated import patterns destroy
tree shaking for consumers. Context and measurements:
[`treeshake-test/README.md`](./treeshake-test/README.md).

---

## 1. `@cosmjs/cosmwasm-stargate` → `@cosmjs/cosmwasm`

The package was renamed in cosmjs 0.38; telescope still generates the old name
in the cosmwasm contract clients (`src/codegen/*.client.ts`, ~25 files).

```bash
grep -rl '@cosmjs/cosmwasm-stargate' src/codegen | \
  xargs sed -i '' 's|@cosmjs/cosmwasm-stargate|@cosmjs/cosmwasm|g'
```

## 2. `Tendermint34Client` → `connectComet`

`Tendermint34Client` was removed in cosmjs 0.38. Telescope generates it in the
4 ClientFactory files (`src/codegen/{ixo,cosmos,cosmwasm,ibc}/rpc.query.ts`):

```bash
for f in src/codegen/{ixo,cosmos,cosmwasm,ibc}/rpc.query.ts; do
  sed -i '' \
    's|import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";|import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";|; s|await Tendermint34Client.connect(rpcEndpoint)|await connectComet(rpcEndpoint)|' "$f"
done
```

`connectComet` auto-detects the backend (Tendermint 0.37 / CometBFT 0.38 / 1.x).

## 3. Local `createProtobufRpcClient` (bundle-size critical)

cosmjs ships CJS without `"sideEffects": false`, so ANY value import of the
`@cosmjs/stargate` barrel drags ~900 KB of cosmjs-types into every consumer
bundle — even when only one generated query client is used. The generated
`query.rpc.Query.ts` / `query.rpc.Service.ts` / `service.rpc.Service.ts` files
(~42) import `createProtobufRpcClient` from it.

**a)** Recreate `src/codegen/protobufRpcClient.ts` (it is deleted by the regen —
restore it from git history: `git checkout HEAD -- src/codegen/protobufRpcClient.ts`
or copy from a previous release).

**b)** Point the generated files at it, keeping `QueryClient` type-only:

```bash
python3 - <<'EOF'
import pathlib

OLD = 'import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";'
count = 0
for f in pathlib.Path('src/codegen').rglob('*.ts'):
    text = f.read_text()
    if OLD not in text:
        continue
    depth = len(f.relative_to('src/codegen').parts) - 1
    prefix = '../' * depth if depth else './'
    new = (
        'import type { QueryClient } from "@cosmjs/stargate";\n'
        f'import {{ createProtobufRpcClient }} from "{prefix}protobufRpcClient";'
    )
    f.write_text(text.replace(OLD, new, 1))
    count += 1
print(f"transformed {count} files")
EOF
```

Do NOT touch the 4 `rpc.query.ts` ClientFactory files that import only
`{ QueryClient }` — they construct `new QueryClient(...)` at runtime and
legitimately need the value import.

## 4. Keep the hand-written files in sync

These are NOT deleted by codegen, but they import `src/codegen/**` per-file and
break (tsc will tell you) if telescope renames or moves generated files:

- `src/stargate_client/customRegistries.ts` — imports every registered message
  module directly. **When adding new registry entries, import the message's
  file directly** (`import * as _x from "../codegen/<module>/tx"`), never via
  the `ixo`/`cosmos` namespace objects — one namespace reference drags the
  whole proto tree into every consumer bundle.
- `src/queries/index.ts` — same rule for `QueryClientImpl` imports. Also:
  `createRpc` is intentionally implemented on `@cosmjs/tendermint-rpc` only
  (mirroring stargate's `QueryClient.queryAbci` + `createProtobufRpcClient`
  behavior exactly); do not "simplify" it back to `@cosmjs/stargate` imports.

## 5. Automatic — no action needed (listed so nobody "fixes" them)

- Generated files import `protobufjs/minimal` as a namespace and use
  extensionless relative paths. Both are handled at build time by
  `scripts/babel-plugin-esm-extensions.cjs` (ESM build only): adds
  `.js`/`/index.js` extensions (incl. dynamic imports in the ClientFactories)
  and converts the `protobufjs/minimal` namespace import to a default import
  so Node ESM can load the package.
- `scripts/postbuild.cjs` writes `module/package.json` (`type: module`) and
  `main/package.json` (`type: commonjs`) after every build.

---

## Verification checklist (run after re-applying)

```bash
yarn build && yarn build:ts                 # both builds compile
npx tsc -p tsconfig.json                    # 0 errors (src + tests)
yarn lint                                   # 0 errors
node scripts/golden-compat.cjs compare __tests__/fixtures/golden-compat-baseline.json
                                            # 22/22 byte-identical — proves addresses,
                                            # signatures and proto encodings unchanged
npx jest __tests__/specs/store __tests__/specs/queries --forceExit
cd treeshake-test && npm install && npm run check:node && npm run check:types \
  && npm run build                          # Node ESM/CJS loads; bundle sizes in
                                            # line with treeshake-test/README.md
```

If `golden-compat` reports ANY mismatch, the regeneration changed cryptographic
or encoding behavior — do not publish until understood.
