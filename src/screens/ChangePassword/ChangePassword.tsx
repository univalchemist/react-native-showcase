import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { ChangePasswordProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";

const ChangePassword = ({ navigation }: ChangePasswordProps) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const validatePasswords = () => {
    if (currentPassword && newPassword && confirmNewPassword) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader title="Change password" displayBackArrow />
            <Box paddingTop={4}>
              <InputField
                title="Current Password"
                value={currentPassword}
                onChangeValue={setCurrentPassword}
                enableSecureMode={true}
              />
            </Box>
            <Box>
              <InputField
                title="New Password"
                value={newPassword}
                onChangeValue={setNewPassword}
                enableSecureMode={true}
              />
            </Box>
            <Box>
              <InputField
                title="Confirm New Password"
                value={confirmNewPassword}
                onChangeValue={setConfirmNewPassword}
                enableSecureMode={true}
              />
            </Box>
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={90}>
          <Button
            disabled={validatePasswords() === true ? true : false}
            text="Continue"
            onPress={() => {}}
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

export default ChangePassword;
