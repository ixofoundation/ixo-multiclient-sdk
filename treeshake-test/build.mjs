/**
 * Bundles each entry in ./entries with esbuild (the bundler underneath wrangler,
 * and effectively what Vite/Rollup users experience too) and reports:
 *   - minified size + gzipped size
 *   - how much of the bundle comes from the SDK vs its dependencies
 *   - top contributing packages (from the metafile)
 *
 * Two profiles per entry:
 *   - browser:  platform=browser (typical frontend app)
 *   - worker:   platform=browser + workerd/worker conditions (Cloudflare Workers)
 */
import { build } from "esbuild";
import { readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import path from "node:path";

const entriesDir = new URL("./entries/", import.meta.url).pathname;
const outDir = new URL("./dist/", import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });

const entries = readdirSync(entriesDir)
  .filter((f) => f.endsWith(".ts"))
  .sort();

const profiles = {
  browser: { platform: "browser", conditions: [] },
  worker: { platform: "browser", conditions: ["workerd", "worker", "browser"] },
};

const kb = (n) => (n / 1024).toFixed(1).padStart(8) + " KB";

function classify(file) {
  // The SDK is symlinked into node_modules, so esbuild reports its files via the
  // realpath, which is relative to cwd: ../module/..., ../main/..., ../src/...
  if (/^\.\.\/(module|main|src)\//.test(file)) return "@ixo/impactxclient-sdk";
  const m = file.match(/node_modules\/((?:@[^/]+\/)?[^/]+)/g);
  if (!m) return "(entry)";
  return m[m.length - 1].replace("node_modules/", "");
}

const results = [];

for (const entry of entries) {
  for (const [profileName, profile] of Object.entries(profiles)) {
    const outfile = path.join(outDir, `${entry.replace(".ts", "")}.${profileName}.js`);
    let result;
    try {
      result = await build({
        entryPoints: [path.join(entriesDir, entry)],
        bundle: true,
        minify: true,
        format: "esm",
        target: "es2022",
        platform: profile.platform,
        conditions: profile.conditions,
        mainFields: ["module", "main"],
        // Simulates what real apps must do anyway: node-polyfill plugin (Vite/webpack)
        // or nodejs_compat (wrangler). Without this, every root import FAILS to build.
        external: [
          "crypto", "stream", "buffer", "events", "util", "string_decoder",
          "process", "vm", "http", "https", "url", "zlib", "path", "os",
          "fs", "net", "tls", "assert",
        ],
        outfile,
        metafile: true,
        logLevel: "silent",
      });
    } catch (err) {
      results.push({ entry, profile: profileName, error: err.errors?.[0]?.text ?? String(err) });
      continue;
    }

    const meta = result.metafile;
    const [outPath, outInfo] = Object.entries(meta.outputs).find(([p]) => p.endsWith(".js"));
    const minified = outInfo.bytes;
    const { readFileSync } = await import("node:fs");
    const gz = gzipSync(readFileSync(outPath)).length;

    // aggregate input bytes by package
    const byPkg = {};
    for (const [file, info] of Object.entries(outInfo.inputs)) {
      const pkg = classify(file);
      byPkg[pkg] = (byPkg[pkg] ?? 0) + info.bytesInOutput;
    }
    const top = Object.entries(byPkg)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    const sdkModuleCount = Object.keys(outInfo.inputs).filter((f) =>
      /^\.\.\/(module|main|src)\//.test(f)
    ).length;

    results.push({ entry, profile: profileName, minified, gz, top, sdkModuleCount });
    writeFileSync(outfile + ".meta.json", JSON.stringify(meta));
  }
}

// ---- report ----
console.log("\n=== esbuild bundle sizes (minified / gzip) ===\n");
console.log("entry".padEnd(28) + "profile".padEnd(9) + "minified".padStart(10) + "gzip".padStart(10) + "  SDK files in bundle");
for (const r of results) {
  if (r.error) {
    console.log(`${r.entry.padEnd(28)}${r.profile.padEnd(9)}  BUILD ERROR: ${r.error}`);
    continue;
  }
  console.log(
    r.entry.padEnd(28) +
      r.profile.padEnd(9) +
      kb(r.minified) +
      kb(r.gz) +
      `  ${r.sdkModuleCount}`
  );
}

console.log("\n=== top contributors per entry (browser profile) ===");
for (const r of results.filter((r) => r.profile === "browser" && !r.error)) {
  console.log(`\n${r.entry}`);
  for (const [pkg, bytes] of r.top) {
    console.log(`  ${kb(bytes)}  ${pkg}`);
  }
}
