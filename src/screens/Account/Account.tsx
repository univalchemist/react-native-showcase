import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { AccountProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";

const Account = ({ navigation }: AccountProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <ScrollView style={{ height: "100%" }}>
          <Row height="content" style={{ flex: 1, marginBottom: 300 }}>
            <Stack space={4} paddingX={5} marginBottom={60}>
              <ScreenHeader title="Account" displayBackArrow />
              <Box paddingTop={4}>
                <InputField
                  title="First Name"
                  value={firstName}
                  onChangeValue={setFirstName}
                  enableSecureMode={false}
                />
              </Box>
              <Box>
                <InputField
                  title="Last name"
                  value={lastName}
                  onChangeValue={setLastName}
                  enableSecureMode={false}
                />
              </Box>
              <Box>
                <InputField
                  title="Phone Number"
                  value={phoneNumber}
                  onChangeValue={setPhoneNumber}
                  enableSecureMode={false}
                  keyboardType={"phone-pad"}
                />
              </Box>
              <Box>
                <InputField
                  title="Email Address"
                  value={email}
                  onChangeValue={setEmail}
                  enableSecureMode={false}
                />
              </Box>
            </Stack>

            <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
              <Button
                disabled={true}
                text="Save Changes"
                onPress={() => {}}
                enableFullWidth
              />
            </Row>
          </Row>
        </ScrollView>
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

export default Account;
