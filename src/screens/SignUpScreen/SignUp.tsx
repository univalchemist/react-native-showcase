import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { ScreenHeader } from "@components/ScreenHeader";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, StyleSheet } from "react-native";
import { SignUpProps } from "src/navigator/MainNavigator";

import { isPhoneValid, isEmailValid } from "../../helpers/common";

type ISignUpInputFields = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const SignUp = ({ navigation }: SignUpProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInputFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const navigateToCreatePasswordScreen = () => {
    navigation.navigate("CreatePassword");
    // send('SIGN_UP'))
  };

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader title="Create an account" displayBackArrow />
            <Box paddingTop={4}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputField
                    title="First name"
                    value={value}
                    onChangeValue={onChange}
                    errorMessage={errors.firstName && "This field is required"}
                  />
                )}
                name="firstName"
              />
            </Box>
            <Box>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputField
                    title="Last name"
                    value={value}
                    onChangeValue={onChange}
                    errorMessage={errors.lastName && "This field is required"}
                  />
                )}
                name="lastName"
              />
            </Box>
            <Box>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: isPhoneValid,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputField
                    title="Phone number"
                    value={value}
                    onChangeValue={onChange}
                    errorMessage={errors.phone && "Invalid phone number"}
                  />
                )}
                name="phone"
              />
            </Box>
            <Box>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: isEmailValid,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputField
                    title="Email address"
                    value={value}
                    onChangeValue={onChange}
                    errorMessage={errors.email && "Invalid email address"}
                  />
                )}
                name="email"
              />
            </Box>
            <Box paddingTop={8}>
              <Text style={styles.copy}>
                Already have an account?{" "}
                <Text style={styles.link}>Log in.</Text>
              </Text>
            </Box>
            <Box>
              <Text style={styles.copy}>
                We're committed to safeguarding your personal information.{" "}
                <Text style={styles.link}>Read our privacy policy.</Text>
              </Text>
            </Box>
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
          <Button
            text="Continue"
            onPress={handleSubmit(navigateToCreatePasswordScreen)}
            enableFullWidth
          />
        </Row>
      </Rows>
    </Columns>
  );
};

const styles = StyleSheet.create({
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

export default SignUp;
