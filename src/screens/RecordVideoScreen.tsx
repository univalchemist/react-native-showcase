import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { RNCamera } from "react-native-camera";
import { CameraButton } from "@utils/CameraButton";
import { Hints } from "@utils/Hints";

const { height } = Dimensions.get("screen");

interface RecordVideoScreenProps {
  closeCamera: () => void;
  onVideoWasRecorded: (videoUri: string) => void;
  hints: string[];
}

const RecordVideoScreen: React.FC<RecordVideoScreenProps> = ({
  closeCamera,
  onVideoWasRecorded,
  hints,
}) => {
  const [videoSource, setVideoSource] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const cameraRef = useRef<RNCamera | null>(null);

  const startRecordingVideo = async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        setIsRecording(true);
        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          setVideoSource(data.uri);
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };
  const stopRecordingVideo = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    if (videoSource && !isRecording) {
      onVideoWasRecorded(videoSource);
    }
  }, [videoSource, isRecording, onVideoWasRecorded]);

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
      {isRecording && <View style={styles.recordingDot} />}
      <View style={StyleSheet.absoluteFillObject}>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={closeCamera}
        >
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
        <View style={styles.hintsContainer}>
          <Hints hints={hints} />
        </View>
        <View style={styles.buttonContainer}>
          <CameraButton
            onStart={startRecordingVideo}
            onEnd={stopRecordingVideo}
          />
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
  recordingDot: {
    position: "absolute",
    right: 50,
    top: 50,
    width: 16,
    height: 16,
    backgroundColor: "#f00",
    borderRadius: 16,
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

export default RecordVideoScreen;
