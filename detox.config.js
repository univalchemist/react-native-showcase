import { name as appName } from "./app.config";

module.exports = {
  testRunner: "jest",
  runnerConfig: "e2e/jest.config.js",
  skipLegacyWorkersInjection: true,
  apps: {
    ios: {
      type: "ios.app",
      binaryPath: `ios/build/Build/Products/Release-iphonesimulator/${appName}.app`,
      build: `xcodebuild -project ios/${appName}.xcodeproj -scheme ${appName} -sdk iphonesimulator -derivedDataPath ios/build`,
    },
    android: {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build: `pushd android; ./gradlew app:assembleRelease app:assembleAndroidTest -DtestBuildType=release; popd`,
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 11",
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_3_API_30",
      },
    },
  },
  configurations: {
    ios: {
      device: "simulator",
      app: "ios",
    },
    android: {
      device: "emulator",
      app: "android",
    },
  },
};
