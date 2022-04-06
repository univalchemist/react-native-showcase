import React, { useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { ContextI, PhotosVariants } from "src/machines/productFilesMachine";
import { Button } from "@utils/Button";
import Video from "react-native-video";
import { useProductFilesContext } from "@context/ProductFileMachineContext";

const { height, width } = Dimensions.get("screen");

export const ConfirmPictureScreen = () => {
  const { filesService } = useProductFilesContext();
  const [state, send] = useActor(filesService);
  const [uri, setUri] = useState(
    (state.context as ContextI)[state.value as PhotosVariants]
  );
  const [format, setFormat] = useState(
    (state.context as ContextI)[`${state.value as PhotosVariants}Format`]
  );

  const onPressConfirm = () =>
    uri &&
    send({
      type: "CONFIRM",
    });

  const onPressRetake = () =>
    send({
      type: "RETAKE",
    });

  useEffect(() => {
    if (state.context.currentConfirmFile) {
      setUri(state.context[state.context.currentConfirmFile]);
      setFormat(state.context[`${state.context.currentConfirmFile}Format`]);
    }
  }, [state.value]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{state.value}</Text>
      <View style={styles.imageContainer}>
        {format === "PHOTO" && !!uri && (
          <Image style={styles.image} source={{ uri }} />
        )}
        {format === "VIDEO" && !!uri && (
          <Video
            style={styles.image}
            source={{ uri }}
            repeat
            resizeMode="cover"
          />
        )}
      </View>
      <Button onPress={onPressRetake}>Retake</Button>
      <Button onPress={onPressConfirm}>Confirm</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.6,
    width: width - 16 * 2,
  },
});
