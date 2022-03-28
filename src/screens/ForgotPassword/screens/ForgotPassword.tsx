import React, { useState } from "react";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { ForgotPasswordProps } from "../navigator";
import { ScreenHeader } from "@components/ScreenHeader";

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const [email, setEmail] = useState("");

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader
              title="Forgot password"
              copy="Please type in your email and we will send you a reset link."
              displayBackArrow
            />
            <Box paddingTop={8}>
              <InputField
                title="Email"
                value={email}
                onChangeValue={setEmail}
              />
            </Box>
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
          <Button
            text="Reset password"
            onPress={() => {
              navigation.navigate("EmailSent"); // send('SIGN_UP')
            }}
            enableFullWidth
          />
        </Row>
      </Rows>
    </Columns>
  );
};

export default ForgotPassword;
