import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { Button } from "@components/Button";
import InputField from "@components/InputField";
import { AddOrEditCardProps } from "src/navigator/MainNavigator";
import { Header } from "@components/Header";
import BankCard from "@components/BankCard/BankCard";
import DeleteIcon from "@assets/icons/deleteIcon.svg";
import ToggleSwitch from "@components/ToggleSwitch/index";

const AddOrEditCard = ({ navigation, route }: AddOrEditCardProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("MM/YY");
  const [securityCode, setSecurityCode] = useState("");
  const [toggle, setToggle] = useState(false);

  const openDate = () => {
    console.log("Open date picter");
  };
  const showDeleteDialog = () => {
    Alert.alert("Delete Card?", "Are you sure you want to delete this card?", [
      {
        text: "Delete",
        onPress: () => console.log("Delete Pressed"),
        // style: "",
      },
      { text: "Cancel", onPress: () => console.log("cancel") },
    ]);
  };

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Header
            RightElement={
              route?.params?.screen !== "addCard" && (
                <TouchableOpacity onPress={showDeleteDialog}>
                  <DeleteIcon />
                </TouchableOpacity>
              )
            }
            title={
              route?.params?.screen === "addCard"
                ? "Add Card"
                : "Edit card info"
            }
            displayBackArrow
          />
          <Row
            height="content"
            paddingBottom={route?.params?.screen === "addCard" ? 100 : 70}
          >
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
            {route?.params?.screen !== "addCard" && (
              <View style={{ marginTop: 280 }}>
                <ToggleSwitch value={toggle} setValue={setToggle} />
              </View>
            )}
          </Row>

          <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
            <Button text="Scan Card" onPress={() => {}} enableFullWidth />
          </Row>
        </Row>
      </Rows>
    </Columns>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 32,
  },

  link: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "blue",
  },
});

export default AddOrEditCard;
