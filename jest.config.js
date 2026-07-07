module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    // ESM-only dependencies (see transformIgnorePatterns) are transpiled to
    // CJS by babel-jest since jest's CJS runtime cannot load native ESM;
    // explicit inline config because .babelrc.js does not apply to node_modules
    "^.+\\.js$": [
      "babel-jest",
      {
        babelrc: false,
        configFile: false,
        presets: [["@babel/preset-env", { targets: { node: "current" } }]],
      },
    ],
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(@noble|@scure|readonly-date-esm)/)",
  ],
  testTimeout: 44000000,
};
