import React, { useContext, useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import { SafeAreaView } from "react-native";
import { Typography } from "@components/Typography";
import { ProductPhotosMachineContext } from "../navigator/MainNavigator";
import { Button } from "../utils/Button";
import CameraView from "./CameraScreen";
import { styles } from "./StartScreen";

export const TakePictureScreen = () => {
  const { photosService } = useContext(ProductPhotosMachineContext);
  const [state, send] = useActor(photosService);
  const [isTakingPicture, setIsTakingPicture] = useState(false);

  useEffect(() => {
    setIsTakingPicture(false);
  }, [state.value]);

  const onCloseCamera = () => setIsTakingPicture(false);
  const onOpenCamera = () => setIsTakingPicture(true);

  const onPictureWasTaken = (uri: string) => {
    send({
      type: "VERIFY",
      data: {
        [state.value as string]: uri,
      },
    });
  };

  return (
    <>
      {isTakingPicture ? (
        <CameraView
          closeCamera={onCloseCamera}
          onPictureWasTaken={onPictureWasTaken}
          hints={state.context.hints}
        />
      ) : (
        <SafeAreaView style={styles.container}>
          <Typography style={styles.title}>{state.value}</Typography>
          <Typography style={styles.description}>
            {state.context.description}
          </Typography>
          <Button onPress={onOpenCamera}>Take a picture</Button>
        </SafeAreaView>
      )}
    </>
  );
};
