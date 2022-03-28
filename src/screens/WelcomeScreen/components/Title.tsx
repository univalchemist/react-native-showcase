import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Title: React.FC = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
