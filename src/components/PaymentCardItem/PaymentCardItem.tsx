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
    <View>
      <View style={styles.itemContainer}>
        {logo}
        <View style={styles.cardDetail}>
          <Text style={styles.cardtype}>{cardType}</Text>
          <Text>
            Ending in : {cardNumber}
            {expiryDate && ` . Expires: ${expiryDate}`}
          </Text>
        </View>
        <TouchableOpacity onPress={handleEditCard}>
          <ArrowRight />
        </TouchableOpacity>
      </View>
    </View>
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
