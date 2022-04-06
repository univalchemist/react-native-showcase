import { useAuth } from "@ftdr/react-native-auth";
import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, useColorScheme, View } from "react-native";
import { Typography } from "@components/Typography";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@utils/Button";
import { AuthScreenNavigationProp } from "@navigator/MainNavigator";

export const LoggedIn = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const {
    logout,
    setBiometryStatus,
    isBiometryEnabled,
    isBiometryAvailable,
    result,
  } = useAuth();

  const [tempBiometryStatus, setTempBiometryStatus] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    if (result !== null) {
      setTempBiometryStatus(null);
    }
  }, [isBiometryEnabled, result]);

  const onPressTakePictures = () => {
    navigation.navigate("Start");
  };

  return (
    <>
      <View style={styles.avatar}>
        <Typography style={styles.initials}>JD</Typography>
      </View>

      <Typography
        style={[
          styles.profileName,
          { color: colorScheme === "dark" ? "#fff" : "#000" },
        ]}
      >
        John Doe
      </Typography>
      <Typography
        style={[
          styles.profileEmail,
          { color: colorScheme === "dark" ? "#aaa" : "#666" },
        ]}
      >
        john.doe@frontdoorhome.com
      </Typography>

      <View
        style={[
          styles.option,
          { borderTopColor: colorScheme === "dark" ? "#666" : "#ddd" },
        ]}
      >
        <Typography
          style={[
            styles.optionLabel,
            !isBiometryAvailable ? styles.optionLabelDisabled : {},
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          Enable Biometrics
        </Typography>

        <Switch
          trackColor={{ false: "#ddd", true: "#07b54d" }}
          onValueChange={(status) => {
            setTempBiometryStatus(status);
            setBiometryStatus(status);
          }}
          value={
            !isBiometryAvailable
              ? false
              : !!tempBiometryStatus || !!isBiometryEnabled
          }
          disabled={!isBiometryAvailable}
        />
      </View>

      {!isBiometryAvailable && (
        <Typography
          style={{
            marginVertical: 8,
            color: "#f52020",
            fontWeight: "500",
          }}
        >
          Biometric login is not available
        </Typography>
      )}
      <Button onPress={onPressTakePictures}>Take photos</Button>
      <View style={styles.actionsWrapper}>
        <Button onPress={() => logout()}>Log Out</Button>
      </View>
    </>
  );
};

const AVATAR_SIZE = 96;

const styles = StyleSheet.create({
  avatar: {
    marginBottom: 20,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#07b54d",
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    color: "#fff",
    fontSize: 44,
  },
  profileName: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
    textAlign: "center",
  },
  profileEmail: {
    marginBottom: 16,
    fontSize: 16,
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionLabel: {
    fontSize: 16,
    marginRight: 44,
  },
  optionLabelDisabled: {
    opacity: 0.25,
  },
  actionsWrapper: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});
