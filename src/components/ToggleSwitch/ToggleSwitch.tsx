import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Switch from "@assets/icons/Toggle.svg";
import { ToggleSwitchProps } from "./types";

export const ToggleSwitch = ({ value, setValue }: ToggleSwitchProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.defaultTxt}>Set as default</Text>
        <TouchableOpacity
          onPress={() => {
            setValue(!value);
          }}
        >
          {value ? <Switch /> : <Switch />}
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  defaultTxt: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
  },
  separator: {
    height: 0.6,
    backgroundColor: "#ccc",
  },
});
