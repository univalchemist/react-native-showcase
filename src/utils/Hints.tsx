import React from "react";
import { View, StyleSheet } from "react-native";
import { Typography } from "@components/Typography";

interface HintsProps {
  hints: string[];
}

export const Hints: React.FC<HintsProps> = ({ hints }) => (
  <View style={styles.container}>
    {hints.length &&
      hints.map((hint, i) => (
        <Typography style={styles.hint} key={i}>
          #{i + 1} {hint}
        </Typography>
      ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignSelf: "center",
    borderRadius: 12,
    padding: 8,
  },
  hint: {
    fontSize: 18,
    color: "#fff",
  },
});
