const path = require('path');

const useESModules = !!process.env.MODULE;

module.exports = (api) => {
  api.cache(() => process.env.MODULE);
  return {
    plugins: [
      ['@babel/transform-runtime', { useESModules }],
      '@babel/proposal-object-rest-spread',
      '@babel/proposal-class-properties',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/proposal-export-default-from',
      // ESM output must use fully specified relative imports ("./x.js",
      // "./dir/index.js") to be loadable by Node.js ESM
      ...(useESModules
        ? [path.resolve(__dirname, 'scripts/babel-plugin-esm-extensions.cjs')]
        : [])
    ],
    presets: useESModules ? ['@babel/typescript'] : ['@babel/typescript', '@babel/env']
  };
};
