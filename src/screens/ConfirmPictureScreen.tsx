import React, { useContext, useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Typography } from "@components/Typography";
import { ProductPhotosMachineContext } from "../navigator/MainNavigator";
import { ContextI, PhotosVariants } from "src/machines/productPhotosMachine";
import { Button } from "../utils/Button";

const { height, width } = Dimensions.get("screen");

export const ConfirmPictureScreen = () => {
  const { photosService } = useContext(ProductPhotosMachineContext);
  const [state, send] = useActor(photosService);
  const [imageUri, setImageUri] = useState(
    (state.context as ContextI)[state.value as PhotosVariants]
  );

  const onPressConfirm = () =>
    imageUri &&
    send({
      type: "CONFIRM",
    });

  const onPressRetake = () =>
    send({
      type: "RETAKE",
    });

  useEffect(() => {
    if (state.context.currentConfirmPhoto) {
      setImageUri(state.context[state.context.currentConfirmPhoto]);
    }
  }, [state.value]);

  return (
    <SafeAreaView style={styles.container}>
      <Typography style={styles.title}>{state.value}</Typography>
      <View style={styles.imageContainer}>
        {!!imageUri && (
          <Image style={styles.image} source={{ uri: imageUri }} />
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
    borderColor: "#000",
    borderWidth: 1,
  },
});
