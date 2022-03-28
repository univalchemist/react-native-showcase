import React from "react";
import { Columns, Rows, Row, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import { EmailSentProps } from "../navigator";
import { ScreenHeader } from "@components/ScreenHeader";

const EmailSent = ({ navigation }: EmailSentProps) => {
  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader
              title="Reset email sent"
              copy="You will find your password reset link in your email
              adam.roller@bluelabellabs.com"
              displayBackArrow
            />
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
          <Button
            text="Open mail app"
            onPress={() => {
              navigation.navigate("ResetPassword"); // send('SIGN_UP')
            }}
            enableFullWidth
          />
        </Row>
      </Rows>
    </Columns>
  );
};

export default EmailSent;
