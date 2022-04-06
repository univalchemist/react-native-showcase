import React from "react";
import { useActor } from "@xstate/react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "@utils/Button";
import { Typography } from "@components/Typography";
import { useProductFilesContext } from "@context/ProductFileMachineContext";

export const StartScreen = () => {
  const { filesService } = useProductFilesContext();
  const [state, send] = useActor(filesService);

  const onPressStart = () => send("NEXT");

  return (
    <SafeAreaView style={styles.container}>
      <Typography style={styles.title}>{state.value}</Typography>
      <Typography style={styles.description}>
        {state.context.description}
      </Typography>
      <Button onPress={onPressStart}>Start</Button>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    padding: 16,
    textAlign: "center",
  },
});
