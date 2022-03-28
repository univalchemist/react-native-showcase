import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import React from "react";

export const KeyboardAvoidingWrapper: React.FC = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
      contentContainerStyle={styles.keyboardAvoidingView}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
});
