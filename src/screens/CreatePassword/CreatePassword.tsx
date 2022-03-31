import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { CreatePasswordProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";

const CreatePassword = ({ navigation }: CreatePasswordProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader title="Create password" displayBackArrow />
            <Box paddingTop={4}>
              <InputField
                title="Password"
                value={password}
                onChangeValue={setPassword}
                enableSecureMode
              />
            </Box>
            <Box>
              <InputField
                title="Confirm Password"
                value={confirmPassword}
                onChangeValue={setConfirmPassword}
                enableSecureMode
              />
            </Box>
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
          <Button
            text="Continue"
            onPress={() => {
              navigation.replace("Settings");
            }}
            enableFullWidth
          />
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
});

export default CreatePassword;
