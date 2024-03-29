module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".js"],
        alias: {
          "@/*": "./src/*",
          "@assets": "./src/assets",
          "@hooks": "./src/hooks",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@context": "./src/context",
          "@navigator": "./src/navigator",
          "@helpers": "./src/helpers",
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
