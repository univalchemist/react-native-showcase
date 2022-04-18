import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { AccountProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";
const SCREEN_HEIGHT = Dimensions.get("window").height;
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Account = ({ navigation }: AccountProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <Columns height="fluid" paddingTop={12}>
        <Rows alignY="between">
          <Row height="content">
            <Stack space={4} paddingX={5}>
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

            <Row
              height="content"
              paddingX={5}
              paddingY={5}
              paddingBottom={15}
              paddingTop={SCREEN_HEIGHT * 0.033}
            >
              <Button
                disabled={true}
                text="Save Changes"
                onPress={() => {}}
                enableFullWidth
              />
            </Row>
          </Row>
        </Rows>
      </Columns>
    </KeyboardAwareScrollView>
  );
};

export default Account;
