import {
  AHSMiniLogo,
  WelcomeIcon1,
  WelcomeIcon2,
  WelcomeIcon3,
} from "@assets/images";
import { Rows, Columns, Stack, Row } from "@mobily/stacks";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { WelcomeProps } from "src/navigator/MainNavigator";

import { Button, SUPPORTED_BUTTON_COLOR_SCHEMES } from "@components/Button";
import { Carousel } from "./components/Carousel";

const CarouselData = [
  {
    image: WelcomeIcon1,
    title: "Request Service",
    subtitle:
      "Request service online or by phone. Pay your Trade Service Call Fee.",
  },
  {
    image: WelcomeIcon2,
    title: "We Assign a Professional",
    subtitle:
      "Request service online or by phone. Pay your Trade Service Call Fee.",
  },
  {
    image: WelcomeIcon3,
    title: "We Repair",
    subtitle:
      "Request service online or by phone. Pay your Trade Service Call Fee.",
  },
];

const Welcome = ({ navigation }: WelcomeProps) => {
  return (
    <Columns height="fluid">
      <Rows alignY="between">
        <Row height="content">
          <Image source={AHSMiniLogo} style={styles.logo} />
        </Row>
        <Row height="content" paddingY={18}>
          <Carousel data={CarouselData} />
          <Stack space={4} paddingX={5} paddingTop={18}>
            <Button
              text="Log in"
              onPress={() => {
                navigation.navigate("LogIn");
              }}
              enableFullWidth
            />
            <Button
              text="Create an account"
              onPress={() => {
                navigation.navigate("SignUp");
              }}
              colorScheme={SUPPORTED_BUTTON_COLOR_SCHEMES.LIGHT}
              enableFullWidth
            />
          </Stack>
        </Row>
      </Rows>
    </Columns>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  logo: {
    marginTop: 56,
    alignSelf: "center",
    height: 50,
    aspectRatio: 1,
  },
});
