module.exports = {
  extends: [
    "universe/native",
    "universe/shared/typescript-analysis",
    "plugin:jest/recommended",
  ],
  plugins: ["detox"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    {
      files: ["*.e2e.ts", "*.e2e.js"],
      env: {
        "detox/detox": true,
        "jest": true,
        "jest/globals": true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./src"],
        extensions: [".json", ".tsx", ".ts"],
        alias: {
          assets: "./src/assets",
        },
      },
    },
  },
};
