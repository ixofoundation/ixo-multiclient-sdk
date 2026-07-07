/**
 * Checks whether the published package shape actually loads in Node.js
 * without a bundler — both require() (CJS) and import (ESM).
 */
const results = [];

// CJS
try {
  const { createRequire } = await import("node:module");
  const require = createRequire(import.meta.url);
  const sdk = require("@ixo/impactxclient-sdk");
  results.push(["require('@ixo/impactxclient-sdk')", `OK (createSigningClient: ${typeof sdk.createSigningClient})`]);
} catch (e) {
  results.push(["require('@ixo/impactxclient-sdk')", `FAIL: ${e.message.split("\n")[0]}`]);
}

// ESM
try {
  const sdk = await import("@ixo/impactxclient-sdk");
  results.push(["import('@ixo/impactxclient-sdk')", `OK (createSigningClient: ${typeof sdk.createSigningClient})`]);
} catch (e) {
  results.push(["import('@ixo/impactxclient-sdk')", `FAIL: ${e.message.split("\n")[0]}`]);
}

// ESM subpath
try {
  await import("@ixo/impactxclient-sdk/cloudflare");
  results.push(["import('@ixo/impactxclient-sdk/cloudflare')", "OK"]);
} catch (e) {
  results.push(["import('@ixo/impactxclient-sdk/cloudflare')", `FAIL: ${e.message.split("\n")[0]}`]);
}

console.log("\n=== Node.js loadability (no bundler) ===\n");
for (const [what, res] of results) console.log(`${what.padEnd(45)} ${res}`);
