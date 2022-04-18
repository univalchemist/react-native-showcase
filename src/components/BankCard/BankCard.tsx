import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

import { BankCardProps } from "./types";

const Container = styled(View)`
  position: absolute;
  width: 335px;
  height: 220px;
  top: 15px;
  background: #e5e5ea;
  border-radius: 10px;
  align-self: center;
`;

const CardTypeText = styled(Text)`
  position: absolute;
  width: 96px;
  height: 16px;
  right: 12px;
  top: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: right;

  text-transform: uppercase;
  color: #8e8e93;
`;
const CardNumberText = styled(Text)`
  position: absolute;
  width: 96px;
  height: 16px;
  left: 16px;
  top: 72px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  display: flex;
  align-items: center;

  text-transform: uppercase;

  color: #000000;
`;
const CardInput = styled(TextInput)`
  position: absolute;
  width: 303px;
  height: 40px;
  left: 16px;
  top: 92px;
  /* Basic/White */
  background: #ffffff;
  border-radius: 5px;
  padding-horizontal: 8px;
  padding-vertical: 12px;
`;
const ExpirationText = styled(Text)`
  position: absolute;
  width: 117px;
  height: 16px;
  left: 16px;
  top: 144px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000000;
`;

const ExpiryButton = styled(TouchableOpacity)`
  position: absolute;
  width: 148px;
  height: 40px;
  left: 16px;
  top: 164px;
  background: #ffffff;
  padding-horizontal: 8px;
  padding-vertical: 12px;
`;

const SecurityCodeText = styled(Text)`
  position: absolute;
  width: 117px;
  height: 16px;
  left: 171px;
  top: 144px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000000;
`;
const SecurityCodeInput = styled(TextInput)`
  position: absolute;
  width: 148px;
  height: 40px;
  right: 16px;
  top: 164px;
  background: #ffffff;
  border-radius: 5px;
  padding-horizontal: 8px;
  padding-vertical: 12px;
`;

const ExpirationInnerText = styled(Text)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
`;

const BankCard: React.FC<BankCardProps> = ({
  cardType,
  onChangeCardNumber,
  onChangeExpiryDate,
  onChangeSecurity,
  expirtyDateValue = "MM/YY",
  cardNumberValue,
  otherTextInputProps,
  securityCodeValue,
  disableExpiryDate,
}) => {
  return (
    <Container>
      <CardTypeText>{cardType}</CardTypeText>
      <CardNumberText>Card Number</CardNumberText>
      <CardInput
        placeholder="0000 0000 0000 0000"
        maxLength={16}
        value={cardNumberValue}
        onChangeText={onChangeCardNumber}
        keyboardType="number-pad"
        {...otherTextInputProps}
      />

      <ExpirationText>EXPIRATION DATE</ExpirationText>
      <ExpiryButton disabled={disableExpiryDate} onPress={onChangeExpiryDate}>
        <ExpirationInnerText
          style={{ color: expirtyDateValue === "MM/YY" ? "#AEAEB2" : "#000" }}
        >
          {expirtyDateValue}
        </ExpirationInnerText>
      </ExpiryButton>
      <SecurityCodeText>{"Security code"}</SecurityCodeText>
      <SecurityCodeInput
        value={securityCodeValue}
        onChangeText={onChangeSecurity}
        maxLength={4}
        placeholder="0000"
        keyboardType="number-pad"
        {...otherTextInputProps}
      />
    </Container>
  );
};

export default BankCard;
