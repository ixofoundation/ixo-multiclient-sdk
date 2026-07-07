/**
 * Second opinion with Rollup (what many libraries/apps use directly).
 * Bundles the three most diagnostic entries twice:
 *   - default:        respects the SDK's package.json (no sideEffects field)
 *   - forced-pure:    pretends every module is side-effect-free
 *                     (simulates adding "sideEffects": false to the SDK)
 */
import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { gzipSync } from "node:zlib";

const entries = [
  "entries/01-tiny-util.ts",
  "entries/02-single-msg-root.ts",
  "entries/03-single-msg-deep.ts",
];

const kb = (n) => (n / 1024).toFixed(1).padStart(8) + " KB";

async function bundleOnce(entry, moduleSideEffects) {
  const bundle = await rollup({
    input: entry,
    treeshake: { moduleSideEffects },
    onwarn: () => {},
    plugins: [
      nodeResolve({ browser: true, extensions: [".mjs", ".js", ".json", ".ts"] }),
      commonjs(),
      json(),
      {
        name: "strip-ts-types",
        async transform(code, id) {
          if (!id.endsWith(".ts")) return null;
          const esbuild = await import("esbuild");
          const out = await esbuild.transform(code, { loader: "ts" });
          return { code: out.code, map: null };
        },
      },
    ],
  });
  const { output } = await bundle.generate({ format: "esm", compact: true });
  const code = output[0].code;
  return { raw: code.length, gz: gzipSync(code).length };
}

console.log("\n=== rollup (unminified ESM / gzip) ===\n");
console.log("entry".padEnd(32) + "default".padStart(22) + "sideEffects:false".padStart(26));
for (const entry of entries) {
  const def = await bundleOnce(entry, true);
  const pure = await bundleOnce(entry, false);
  console.log(
    entry.padEnd(32) +
      `${kb(def.raw)} /${kb(def.gz)}`.padStart(22) +
      `${kb(pure.raw)} /${kb(pure.gz)}`.padStart(26)
  );
}
