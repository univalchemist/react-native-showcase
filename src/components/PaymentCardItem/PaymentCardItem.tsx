import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import ArrowRight from "../../assets/images/arrowRight.svg";
import { PaymentCardItemProps } from "./types";

const PaymentCardItem: React.FC<PaymentCardItemProps> = ({
  expiryDate,
  cardNumber,
  logo,
  cardType = "Master-Card",
  handleEditCard,
}) => {
  return (
    <TouchableOpacity onPress={handleEditCard}>
      <View style={styles.itemContainer}>
        {logo}
        <View style={styles.cardDetail}>
          <Text style={styles.cardtype}>{cardType}</Text>
          <Text>
            Ending in : {cardNumber}
            {expiryDate && ` . Expires: ${expiryDate}`}
          </Text>
        </View>
        <ArrowRight />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#F2F2F7",
    height: 65,
    borderRadius: 10,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  cardtype: { fontWeight: "bold", fontSize: 15 },
  cardDetail: {
    marginLeft: 10,
    flex: 1,
  },
});

export default PaymentCardItem;
