import React, { useState } from "react";
import {
  StyleSheet,
  SectionList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";

import { PaymentMethodsProps } from "src/navigator/MainNavigator";
import { ScreenHeader } from "@components/ScreenHeader";
import PaymentCardItem from "@components/PaymentCardItem";
import MasterCardLogo from "../../assets/images/masterCardLogo.svg";
import BankLogo from "../../assets/images/bankLogo.svg";

const dummyCards = [
  {
    paymentTitle: "Credit and debit cards",
    data: [
      {
        expiryDate: "08/22",
        cardNumber: "****6405",
        cardType: "Master-Card",
        logo: <MasterCardLogo />,
      },
    ],
  },
  {
    paymentTitle: "Other payment methods",
    data: [
      {
        cardNumber: "****6405",
        cardType: "Master-Card",
        expiryDate: "",
        logo: <BankLogo />,
      },
    ],
  },
];

const PaymentMethods = ({ navigation }: PaymentMethodsProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader title="Payment Methods" displayBackArrow />
            <SectionList
              sections={dummyCards}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => (
                <Box paddingTop={1} paddingY={index === 0 ? 8 : 0}>
                  <PaymentCardItem
                    expiryDate={item?.expiryDate}
                    cardNumber={item?.cardNumber}
                    cardType={item?.cardType}
                    logo={item?.logo}
                    handleEditCard={() => {
                      navigation.navigate("AddOrEditCard", {
                        screen: "editCard",
                      });
                    }}
                  />
                </Box>
              )}
              renderSectionHeader={({ section: { paymentTitle } }) => (
                <View style={styles.header}>
                  <Text style={styles.title}>{paymentTitle}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("AddOrEditCard", {
                        screen: "addCard",
                      });
                    }}
                  >
                    <Text style={styles.add}>{`+ Add`}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </Stack>
        </Row>
      </Rows>
    </Columns>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.01,
  },
  add: {
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 32,
    letterSpacing: -0.01,
  },
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

export default PaymentMethods;
