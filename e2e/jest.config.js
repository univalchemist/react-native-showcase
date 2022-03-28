module.exports = {
  testEnvironment: "./environment",
  testRunner: "jest-circus/runner",
  testTimeout: 120000,
  testRegex: "/__tests__/.*(e2e)\\.[jt]sx?$",
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
  reporters: ["detox/runners/jest/streamlineReporter"],
  verbose: true,
};
