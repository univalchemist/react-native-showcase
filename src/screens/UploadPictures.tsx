import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Typography } from "@components/Typography";
import { UploadPicturesProps } from "src/navigator/MainNavigator";
import { Button } from "@utils/Button";

export const UploadPictures: React.FC<UploadPicturesProps> = ({
  route,
  navigation,
}) => {
  const { requestId } = route.params;

  const onPressNext = () => {
    navigation.navigate("Start");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography style={styles.title}>Upload Pictures</Typography>
        <Typography style={styles.requestId}>
          Request ID: {requestId}
        </Typography>
      </View>
      <Typography style={styles.text}>
        In the next steps you will be asked for taking pictures to help us
        diagnose your request.
      </Typography>
      <View style={styles.buttonContainer}>
        <Typography style={styles.text}>
          Please follow the instruction displayed on screen.
        </Typography>
        <Button onPress={onPressNext}>Next</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
  },
  requestId: {
    color: "#444",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 32,
    marginHorizontal: 48,
  },
});
