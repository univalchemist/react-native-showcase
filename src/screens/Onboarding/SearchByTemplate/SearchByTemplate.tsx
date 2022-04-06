import { useState } from "react";
import {
  Text,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import { ScreenHeader } from "@components/ScreenHeader";
import { useKeyboard } from "@hooks/index";
import { MockApiCallStatus, propertiesMock } from "./mocks";
import { Property, ScreenType, SearchOptionButton } from "./types";
import { PropertyItem } from "./components/PropertyItem";
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackParamList } from "@/navigator/OnboardingNavigator";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  type: ScreenType;
  title: string;
  isFieldValid: boolean;
  input: JSX.Element;
  handleSubmit: () => void;
}

const SEARCH_OPTIIONS_BUTTONS: SearchOptionButton[] = [
  {
    copy: "Search by phone number",
    type: "phone_number",
    screenName: "SearchByPhoneNumber",
  },
  {
    copy: "Search by property address",
    type: "property_address",
    screenName: "SearchByPropertyAddress",
  },
  {
    copy: "Search by contract number",
    type: "contract_number",
    screenName: "SearchByContractNumber",
  },
];

const SearchByTemplate = ({
  type,
  title,
  isFieldValid,
  input,
  handleSubmit,
}: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<OnboardingStackParamList>>();
  const [apiCallStatus, setApiCallStatus] =
    useState<MockApiCallStatus>("not_set");
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isKeyboardVisible] = useKeyboard();

  const onPressProperty = (property: Property) => setSelectedProperty(property);

  const onPressContinue = () => {
    if (selectedProperty) {
      navigation.navigate("AutoRenewal");
    } else {
      handleSubmit();
      onPressGetProperties();
    }
  };

  const onPressGetProperties = () => {
    Keyboard.dismiss();

    if (isFieldValid) {
      setTimeout(() => {
        setProperties(propertiesMock);
        setApiCallStatus("success");
      }, 500); // Success with mocked properties
      // setTimeout(() => {
      //   setProperties([]);
      //   setApiCallStatus("success");
      // }, 500); // Success without results
    } else {
      setApiCallStatus("error");
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
          <Row height="fluid">
            <Stack space={4} paddingX={5}>
              <ScreenHeader
                title={title}
                copy="Please enter your information for one of the search options
                  below to look up your AHS home warranty."
                displayBackArrow
              />
              <Box paddingTop={8} marginBottom={1}>
                {input}
              </Box>
              <Box style={{ marginTop: 8 }}>
                {apiCallStatus === "success" && properties.length > 0 && (
                  <>
                    <Box marginTop={0} marginBottom={4}>
                      <Text style={styles.subtitle}>Search results</Text>
                    </Box>
                    <Box flex="1/2">
                      <ScrollView>
                        {properties.map((property) => (
                          <PropertyItem
                            key={property.id}
                            property={property}
                            selected={selectedProperty?.id === property.id}
                            onPress={onPressProperty}
                          />
                        ))}
                      </ScrollView>
                    </Box>
                  </>
                )}
              </Box>
            </Stack>
          </Row>
          <Row
            height="content"
            paddingX={5}
            paddingY={5}
            paddingBottom={isKeyboardVisible ? 5 : 15}
          >
            {apiCallStatus === "success" &&
              !properties.length &&
              SEARCH_OPTIIONS_BUTTONS.filter(
                (button) => button.type !== type
              ).map((button) => (
                <Button
                  key={button.type}
                  text={button.copy}
                  onPress={() => {
                    navigation.navigate(button.screenName);
                  }}
                  enableFullWidth
                  style={styles.noResultButton}
                />
              ))}
            {/* <Button text="Continue" onPress={handleSubmit} enableFullWidth /> */}
            <Button text="Continue" onPress={onPressContinue} enableFullWidth />
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
  subtitle: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
  },
  noResultButton: {
    marginBottom: 20,
  },
});

export default SearchByTemplate;
