import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Typography } from "@components/Typography";
import { ConfirmEmailProps } from "src/navigator/MainNavigator";
import { Button } from "@utils/Button";

export const ConfirmEmail: React.FC<ConfirmEmailProps> = ({
  route,
  navigation,
}) => {
  const { userId } = route.params;

  const onPressLogin = () => {
    navigation.navigate("Auth");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Typography style={styles.title}>Welcome</Typography>
      <View style={styles.welcomeMessage}>
        <Typography>Your user id: {userId}</Typography>
        <Typography>Your email address has been confirmed</Typography>
      </View>
      <Button onPress={onPressLogin}>Login</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
  },
  welcomeMessage: {
    alignItems: "center",
  },
});
