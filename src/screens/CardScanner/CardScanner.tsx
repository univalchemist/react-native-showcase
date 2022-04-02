import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { CardScannerProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";
import Cardscan from "react-native-cardscan";
import { CSHeader } from "@components/CardScanHeader";

const CardScanner = ({ navigation }: CardScannerProps) => {
  useEffect(() => {
    checkCardScan();
  }, []);

  const checkCardScan = () => {
    Cardscan.isSupportedAsync().then((supported: any) => {
      if (supported) {
        console.log("supported ", supported);
        // YES, show scan button
      } else {
        console.log("not supported");
        // NO
      }
    });
  };

  Cardscan.scan().then(({ action, payload, canceled_reason }) => {
    if (action === "scanned") {
      const { number, expiryMonth, expiryYear, issuer, legalName } = payload;
      console.log("scanned");

      // Display information
    } else if (action === "canceled") {
      if (canceled_reason === "enter_card_manually") {
        console.log("enter_card_manually");

        // the user elected to enter a card manually
      } else if (canceled_reason === "camera_error") {
        console.log("camera_error");

        // there was an error with the camera
      } else if (canceled_reason === "fatal_error") {
        console.log("fatal_error");

        // there was an error during the scan
      } else if (canceled_reason === "user_canceled") {
        console.log("user_canceled");

        // the user canceled the scan
      } else {
        navigation.goBack();
        console.log("cancelled else");

        // the scan was canceled for an unknown reason
      }
    } else if (action === "skipped") {
      console.log("skipped");
      // User skipped
    } else if (action === "unknown") {
      console.log("skipped");

      // Unknown reason for scan canceled
    }
  });

  return (
    <View style={styles.container}>
      <CSHeader title="Card Scan" displayBackArrow />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
});

export default CardScanner;
