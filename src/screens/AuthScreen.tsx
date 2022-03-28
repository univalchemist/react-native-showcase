import { useAuth } from "@ftdr/react-native-auth";
import React from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, useColorScheme, View } from "react-native";
import { LoggedIn } from "../components/LoggedIn";
import { LoggedOut } from "../components/LoggedOut";

export const AuthScreen = () => {
  const { isLoading, isLoggedIn } = useAuth();
  const colorScheme = useColorScheme();
  
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorScheme === "dark" ? "#1d1e24" : "#fff",
      }}
    >
      <SafeAreaView style={styles.container}>
        {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
      </SafeAreaView>
    </View>
  );
  // return isLoggedIn ? <LoggedIn /> : <LoggedOut />;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
    flex: 1,
  },
});