import React, { useState } from "react";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { AutoRenewalScreenNavigationProps } from "src/navigator/OnboardingNavigator";
import Switch from "@components/Switch";
import { Button } from "@components/Button";
import { ScreenHeader } from "@components/ScreenHeader";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AutoRenewal = ({ navigation }: AutoRenewalScreenNavigationProps) => {
  const [isAutoRenewalChecked, setIsAutoRenewalChecked] = useState(false);

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="fluid">
          <Stack space={4} paddingX={5}>
            <ScreenHeader
              title="Auto-renewal"
              copy="Auto-renewal enables you to feel secure about your subscription.
                You can turn it off at any time."
              displayBackArrow
              RightElement={
                <TouchableOpacity style={styles.skipContainer}>
                  <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
              }
            />
            <Box paddingTop={6} flex="1/2">
              <View style={styles.ilustration}>
                <Text>Illustration</Text>
              </View>
            </Box>
            <Box paddingY={6}>
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Auto renewal</Text>
                <Switch
                  value={isAutoRenewalChecked}
                  onChange={setIsAutoRenewalChecked}
                />
              </View>
            </Box>
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
          <Button
            text="Continue"
            onPress={() => {
              // navigation.navigate("")
            }}
            enableFullWidth
          />
        </Row>
      </Rows>
    </Columns>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipContainer: {
    padding: 4,
  },
  skip: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
  },
  ilustration: {
    flex: 1,
    backgroundColor: "#EDEDF2",
    justifyContent: "center",
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F2F2F7",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  switchLabel: {
    paddingLeft: 8,
  },
});

export default AutoRenewal;
