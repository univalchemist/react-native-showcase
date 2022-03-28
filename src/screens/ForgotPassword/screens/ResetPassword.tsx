import React, { useState } from "react";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { ResetPasswordProps } from "../navigator";
import { ScreenHeader } from "@components/ScreenHeader";

const ResetPassword = ({ navigation }: ResetPasswordProps) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader
              title="Reset your password"
              copy="Create a new password for your account."
              displayBackArrow
            />
            <Box paddingTop={4}>
              <InputField
                title="New password"
                value={password}
                onChangeValue={setPassword}
                enableSecureMode
              />
            </Box>
            <Box>
              <InputField
                title="Confirm new password"
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
              // navigation.navigate("LogIn"); or send('CREATE_AN_ACCOUNT')
            }}
            enableFullWidth
          />
        </Row>
      </Rows>
    </Columns>
  );
};

export default ResetPassword;
