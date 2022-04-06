import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { useAuth } from "@ftdr/react-native-auth";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { LogInProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";

const LogIn = ({ navigation }: LogInProps) => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loginError } = useAuth();

  const onPressLogIn = () => {
    login(email, password);
  };

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader
              title="Log in"
              displayBackArrow
              RightElement={
                <Pressable
                  onPress={() => {
                    navigation.navigate("ForgotPassword");
                  }}
                >
                  <Text style={styles.boldRegularTitle}>Forgot password</Text>
                </Pressable>
              }
            />
            <Box paddingTop={4}>
              <InputField
                title="Email"
                value={email}
                onChangeValue={setEmail}
              />
            </Box>
            <Box>
              <InputField
                title="Password"
                value={password}
                onChangeValue={setPassword}
                enableSecureMode
              />
            </Box>
            <Box paddingTop={8}>
              <Text style={styles.copy}>
                Don't have an account yet?{" "}
                <Pressable
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  <Text style={styles.link}>Create an account.</Text>
                </Pressable>
              </Text>
            </Box>
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
          <Button text="Continue" onPress={onPressLogIn} enableFullWidth />
        </Row>
      </Rows>
    </Columns>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 32,
  },
  copy: {
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.005,
    fontWeight: "400",
  },
  link: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "blue",
  },
  boldRegularTitle: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default LogIn;
