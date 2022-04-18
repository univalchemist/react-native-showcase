import React, { useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, Alert, View, Text } from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import { AddOrEditCardProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";

import DeleteIcon from "@assets/icons/deleteIcon.svg";
import Switch from "@components/Switch";
import BankCard from "@components/BankCard/";

const AddOrEditCard = ({ navigation, route }: AddOrEditCardProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("MM/YY");
  const [securityCode, setSecurityCode] = useState("");
  const [toggle, setToggle] = useState(false);
  const { screen } = route.params;

  const openDate = () => {
    console.log("Open date picter");
  };
  const showDeleteDialog = () => {
    Alert.alert("Delete Card?", "Are you sure you want to delete this card?", [
      {
        text: "Delete",
        onPress: () => console.log("Delete Pressed"),
      },
      { text: "Cancel", onPress: () => console.log("cancel") },
    ]);
  };

  const isAddCardScreen = useMemo(() => screen === "addCard", []);

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content" paddingX={5}>
          <ScreenHeader
            displayBackArrow
            MiddleElement={
              <Text style={styles.headerTitle}>
                {isAddCardScreen ? "Add Card" : "Edit card info"}
              </Text>
            }
            RightElement={
              isAddCardScreen && (
                <TouchableOpacity onPress={showDeleteDialog}>
                  <DeleteIcon />
                </TouchableOpacity>
              )
            }
          />

          <Row height="content" paddingBottom={isAddCardScreen ? 100 : 70}>
            <BankCard
              onChangeCardNumber={setCardNumber}
              onChangeExpiryDate={openDate}
              onChangeSecurity={setSecurityCode}
              cardNumberValue={cardNumber}
              expirtyDateValue={expiryDate}
              securityCodeValue={securityCode}
              disableExpiryDate={false}
              cardType="Credit/Debit"
            />
            {isAddCardScreen && (
              <View style={styles.switchOuterContainer}>
                <View style={styles.switchInnnerContainer}>
                  <Text style={styles.defaultTxt}>Set as default</Text>
                  <Switch value={toggle} onChange={setToggle} />
                </View>
                <View style={styles.separator} />
              </View>
            )}
          </Row>

          <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
            <Button
              text={isAddCardScreen ? "Scan Card" : "Save Changes"}
              onPress={() => {
                if (isAddCardScreen) {
                  navigation.navigate("CardScanner");
                }
              }}
              enableFullWidth
            />
          </Row>
        </Row>
      </Rows>
    </Columns>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
  },

  link: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "blue",
  },
  switchOuterContainer: {
    marginTop: 280,
  },
  switchInnnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  defaultTxt: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
  },
  separator: {
    height: 0.6,
    backgroundColor: "#ccc",
  },
});

export default AddOrEditCard;
