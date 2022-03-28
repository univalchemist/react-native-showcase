import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";
import { Typography } from "@components/Typography";
import { CameraButton } from "../utils/CameraButton";
import { Hints } from "../utils/Hints";

const { height } = Dimensions.get("screen");

interface CameraViewProps {
  closeCamera: () => void;
  onPictureWasTaken: (imageUri: string) => void;
  hints: string[];
}

const CameraView: React.FC<CameraViewProps> = ({
  closeCamera,
  onPictureWasTaken,
  hints,
}) => {
  let cameraRef = useRef<RNCamera | null>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.7, base64: false };
      const data = await cameraRef.current.takePictureAsync(options);
      onPictureWasTaken(data.uri);
      closeCamera();
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
      />
      <View style={StyleSheet.absoluteFillObject}>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={closeCamera}
        >
          <Typography style={styles.closeText}>X</Typography>
        </TouchableOpacity>
        <View style={styles.hintsContainer}>
          <Hints hints={hints} />
        </View>
        <View style={styles.buttonContainer}>
          <CameraButton onPress={takePicture} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
  closeButtonContainer: {
    top: height / 16,
    left: 20,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  hintsContainer: {
    top: height / 1.5,
  },
  hint: {
    fontSize: 18,
    color: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    bottom: height / 12,
    alignSelf: "center",
  },
});

export default CameraView;
