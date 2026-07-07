/**
 * Post-build step:
 *  - marks module/ as ESM and main/ as CommonJS via nested package.json files,
 *    so Node.js interprets the .js files in each tree correctly regardless of
 *    the root package type
 *  - re-declares sideEffects: false close to the files for bundlers that read
 *    the nearest package.json
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const markers = [
  ["module", { type: "module", sideEffects: false }],
  ["main", { type: "commonjs", sideEffects: false }],
];

for (const [dir, content] of markers) {
  const target = path.join(root, dir, "package.json");
  fs.writeFileSync(target, JSON.stringify(content, null, 2) + "\n");
  console.log(`wrote ${path.relative(root, target)}`);
}
