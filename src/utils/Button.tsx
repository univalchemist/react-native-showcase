import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "@components/Typography";
interface Props {
  onPress: () => void;
  children: React.ReactNode;
}

export const Button = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}
    >
      <Typography style={styles.text}>{children}</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 12,
    backgroundColor: "#e83c24",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});
