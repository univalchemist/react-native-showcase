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
import { SearchByPhoneNumberScreenNavigationProp } from "src/navigator/OnboardingNavigator";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { ScreenHeader } from "@components/ScreenHeader";
import { formatPhoneNumber } from "@utils/formatPhoneNumber";
import { useKeyboard } from "@hooks/index";
import { MockApiCallStatus, propertiesMock } from "./mocks";
import { Property } from "./types";
import { PropertyItem } from "./components/PropertyItem";

const SearchByPhoneNumber = ({
  navigation,
}: SearchByPhoneNumberScreenNavigationProp) => {
  const [apiCallStatus, setApiCallStatus] =
    useState<MockApiCallStatus>("not_set");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isKeyboardVisible] = useKeyboard();

  const isPhoneNumberValid = () => /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);

  const onPressProperty = (property: Property) => setSelectedProperty(property);

  const onPressContinue = () => {
    if (selectedProperty) {
      navigation.navigate("AutoRenewal");
    } else {
      onPressGetProperties();
    }
  };

  const onPressGetProperties = () => {
    Keyboard.dismiss();

    if (isPhoneNumberValid()) {
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
                title="Search by phone number"
                copy="Please enter your information for one of the search options
                  below to look up your AHS home warranty."
                displayBackArrow
              />
              <Box paddingTop={8} marginBottom={1}>
                <InputField
                  title="Phone number"
                  value={phoneNumber}
                  onChangeValue={(text) =>
                    setPhoneNumber(formatPhoneNumber(text))
                  }
                  keyboardType="phone-pad"
                  shouldDisplayCheck={isPhoneNumberValid()}
                />
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
            {apiCallStatus === "success" && !properties.length && (
              <>
                <Button
                  text="Search by property address"
                  onPress={() => {}}
                  enableFullWidth
                  style={styles.noResultButton}
                />
                <Button
                  text="Search by contract number"
                  onPress={() => {}}
                  enableFullWidth
                  style={styles.noResultButton}
                />
              </>
            )}
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

export default SearchByPhoneNumber;
