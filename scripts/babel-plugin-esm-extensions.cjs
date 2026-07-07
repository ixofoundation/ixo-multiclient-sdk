/**
 * Babel plugin that rewrites relative import/export specifiers to be fully
 * specified ("./codegen" -> "./codegen/index.js", "./store" -> "./store.js")
 * so the ESM build (module/) is loadable by Node.js ESM, which does not
 * support extensionless or directory imports.
 *
 * Resolution is filesystem-aware against the source tree, so files and
 * directories are distinguished correctly.
 */
const fs = require("fs");
const path = require("path");

const FILE_EXTENSIONS = [".ts", ".tsx", ".js"];

// Bare-specifier subpaths into packages WITHOUT an exports map need an explicit
// extension for Node.js ESM (no extension guessing outside of exports maps).
const BARE_REWRITES = {
  "protobufjs/minimal": "protobufjs/minimal.js",
};

function rewriteSpecifier(state, sourceNode) {
  const specifier = sourceNode && sourceNode.value;
  if (!specifier) return;
  if (BARE_REWRITES[specifier]) {
    sourceNode.value = BARE_REWRITES[specifier];
    return;
  }
  if (!specifier.startsWith("./") && !specifier.startsWith("../")) return;
  if (/\.(js|mjs|cjs|json)$/.test(specifier)) return;

  const importerDir = path.dirname(state.file.opts.filename);
  const target = path.resolve(importerDir, specifier);

  for (const ext of FILE_EXTENSIONS) {
    if (fs.existsSync(target + ext)) {
      sourceNode.value = specifier + ".js";
      return;
    }
  }
  for (const ext of FILE_EXTENSIONS) {
    if (fs.existsSync(path.join(target, "index" + ext))) {
      sourceNode.value = specifier + "/index.js";
      return;
    }
  }
  throw new Error(
    `babel-plugin-esm-extensions: cannot resolve "${specifier}" from ${state.file.opts.filename}`
  );
}

module.exports = function esmExtensions() {
  return {
    name: "esm-extensions",
    visitor: {
      ImportDeclaration(nodePath, state) {
        rewriteSpecifier(state, nodePath.node.source);
        // `import * as _m0 from "protobufjs/minimal.js"` breaks in Node ESM:
        // the CJS namespace object does not expose `util` etc. (cjs-module-lexer
        // cannot detect them), so use the default import (= module.exports),
        // which is also what bundlers resolve it to.
        if (
          nodePath.node.source.value === "protobufjs/minimal.js" &&
          nodePath.node.specifiers.length === 1 &&
          nodePath.node.specifiers[0].type === "ImportNamespaceSpecifier"
        ) {
          const local = nodePath.node.specifiers[0].local;
          nodePath.node.specifiers = [
            { type: "ImportDefaultSpecifier", local },
          ];
        }
      },
      ExportNamedDeclaration(nodePath, state) {
        rewriteSpecifier(state, nodePath.node.source);
      },
      ExportAllDeclaration(nodePath, state) {
        rewriteSpecifier(state, nodePath.node.source);
      },
      // dynamic import("...") — used by the generated ClientFactory files
      CallExpression(nodePath, state) {
        const { callee, arguments: args } = nodePath.node;
        if (
          callee.type === "Import" &&
          args.length > 0 &&
          args[0].type === "StringLiteral"
        ) {
          rewriteSpecifier(state, args[0]);
        }
      },
    },
  };
};
