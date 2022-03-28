module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".js"],
        alias: {
          "@assets": "./src/assets",
          "@hooks": "./src/hooks",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "react-native-dotenv",
        safe: true,
      },
    ],
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
