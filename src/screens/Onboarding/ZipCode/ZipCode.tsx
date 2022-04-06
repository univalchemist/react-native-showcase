import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { ZipCodeScreenNavigationProp } from "src/navigator/OnboardingNavigator";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { ScreenHeader } from "@components/ScreenHeader";
import { useKeyboard } from "@hooks/index";

const ZipCode = ({ navigation }: ZipCodeScreenNavigationProp) => {
  const [zipCode, setZipCode] = useState("");
  const [isKeyboardVisible] = useKeyboard();

  const isFieldValid = () => {
    return zipCode.length === 5;
  };

  const onPress = () => {
    if (isFieldValid()) {
      navigation.navigate("SelectSearchOption");
    } else {
      Alert.alert("temporary error message - waiting for designs");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Columns height="fluid" paddingTop={12}>
        <Rows alignY="between">
          <Row height="content">
            <Stack space={4} paddingX={5}>
              <ScreenHeader
                title="Add Your Property"
                copy="Manage all your covered properties in one place."
                displayBackArrow
              />
              <Box paddingTop={8}>
                <InputField
                  title="ZIP Code"
                  value={zipCode}
                  onChangeValue={setZipCode}
                  keyboardType="number-pad"
                  shouldDisplayCheck={!!zipCode}
                  isFieldValid={isFieldValid()}
                  otherTextInputProps={{
                    maxLength: 5,
                  }}
                />
              </Box>
            </Stack>
          </Row>
          <Row
            height="content"
            paddingX={5}
            paddingY={5}
            paddingBottom={isKeyboardVisible ? 5 : 15}
          >
            <Button text="Continue" onPress={onPress} enableFullWidth />
          </Row>
        </Rows>
      </Columns>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ZipCode;
