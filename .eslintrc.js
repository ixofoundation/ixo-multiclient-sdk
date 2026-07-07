module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    es2022: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'no-debugger': 2,
    'no-alert': 2,
    'no-await-in-loop': 0,
    'no-prototype-builtins': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    // TypeScript itself checks undefined symbols and unused vars; the eslint
    // core rules false-positive on types/interfaces/enums
    'no-undef': 0,
    'no-unused-vars': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-console': 1,
    // formatting is owned by prettier; its defaults (double quotes, es5
    // trailing commas, width 80) match the codebase's established style.
    // Core formatting rules (quotes/comma-dangle/…) stay disabled via
    // eslint-config-prettier — do not re-enable them here.
    'prettier/prettier': 'error'
  }
};
