import React from "react";
import { useActor } from "@xstate/react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Video from "react-native-video";
import { FinishScreenNavigationProp } from "@navigator/MainNavigator";
import { styles as baseStyles } from "./StartScreen";
import { Button } from "@utils/Button";
import { Typography } from "@components/Typography";
import { useProductFilesContext } from "@context/ProductFileMachineContext";

const { height } = Dimensions.get("screen");

export const FinishScreen = () => {
  const navigation = useNavigation<FinishScreenNavigationProp>();

  const { filesService } = useProductFilesContext();
  const [state, send] = useActor(filesService);

  const onPressFinish = () => {
    send("RESET");
    navigation.navigate("Welcome");
  };

  const files = [
    { source: state.context.FrontFile, format: state.context.FrontFileFormat },
    { source: state.context.SideFile, format: state.context.SideFileFormat },
    {
      source: state.context.SerialNumberFile,
      format: state.context.SerialNumberFileFormat,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Typography style={styles.title}>{state.value}</Typography>
      <View style={styles.imagesContainer}>
        {files.map((file, i) => {
          if (file.format === "PHOTO") {
            return (
              !!file.source && (
                <Image
                  key={i}
                  source={{ uri: file.source }}
                  style={styles.image}
                />
              )
            );
          }
          if (file.format === "VIDEO") {
            return (
              !!file.source && (
                <Video
                  key={i}
                  source={{ uri: file.source }}
                  style={styles.image}
                  repeat
                />
              )
            );
          }
          return;
        })}
      </View>
      <Typography style={styles.description}>
        {state.context.description}
      </Typography>
      <Button onPress={onPressFinish}>Finish</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...baseStyles,
  imagesContainer: {
    flexDirection: "row",
    height: height * 0.3,
    marginTop: 100,
  },
  image: {
    flex: 1,
    borderColor: "#000",
    borderWidth: 1,
  },
});
