import React, { useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Button } from "@utils/Button";
import { TakePictureScreen } from "./TakePictureScreen";
import RecordVideoScreen from "./RecordVideoScreen";
import { styles as baseStyles } from "./StartScreen";
import { useProductFilesContext } from "@context/ProductFileMachineContext";

export const TakePictureOrVideoScreen = () => {
  const { filesService } = useProductFilesContext();
  const [state, send] = useActor(filesService);
  const [isPhotoCameraOpen, setIsPhotoCameraOpen] = useState(false);
  const [isVideoCameraOpen, setIsVideoCameraOpen] = useState(false);
  useEffect(() => {
    setIsPhotoCameraOpen(false);
    setIsVideoCameraOpen(false);
  }, [state.value]);

  const onTakePicturePress = () => setIsPhotoCameraOpen(true);
  const onRecordVideoPress = () => setIsVideoCameraOpen(true);

  const onClosePictureCamera = () => setIsPhotoCameraOpen(false);
  const onCloseVideoCamera = () => setIsVideoCameraOpen(false);

  const onSelectFromGalleryPress = async () => {
    await launchImageLibrary({ mediaType: "mixed" }, (res) => {
      if (!res.didCancel && !res.errorCode && !res.errorMessage && res.assets) {
        if (res.assets[0].type?.includes("image")) {
          onPictureWasTaken(res.assets[0].uri as string);
        } else if (res.assets[0].type?.includes("video")) {
          onVideoWasRecorded(res.assets[0].uri as string);
        }
      }
    });
  };

  const onPictureWasTaken = (uri: string) => {
    send({
      type: "VERIFY",
      data: {
        [state.value as string]: uri,
        [`${state.value}Format`]: "PHOTO",
      },
    });
  };
  const onVideoWasRecorded = (uri: string) => {
    send({
      type: "VERIFY",
      data: {
        [state.value as string]: uri,
        [`${state.value}Format`]: "VIDEO",
      },
    });
  };

  return (
    <>
      {isPhotoCameraOpen && (
        <TakePictureScreen
          closeCamera={onClosePictureCamera}
          onPictureWasTaken={onPictureWasTaken}
          hints={state.context.hints}
        />
      )}
      {isVideoCameraOpen && (
        <RecordVideoScreen
          closeCamera={onCloseVideoCamera}
          onVideoWasRecorded={onVideoWasRecorded}
          hints={state.context.hints}
        />
      )}
      {!isPhotoCameraOpen && !isVideoCameraOpen && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>{state.value}</Text>
          <Text style={styles.description}>{state.context.description}</Text>
          <View style={styles.buttonsContainer}>
            <Button onPress={onSelectFromGalleryPress}>
              Select from gallery
            </Button>
            <Button onPress={onTakePicturePress}>Take a picture</Button>
            <Button onPress={onRecordVideoPress}>Record a video</Button>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  ...baseStyles,
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
