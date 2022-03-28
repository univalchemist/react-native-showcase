import React, { useState, useRef } from "react";
import {
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import styled from "styled-components/native";

import IncorrectFieldIcon from "../../assets/images/check_invalid_circle.svg";
import CorrectFieldIcon from "../../assets/images/check_valid_circle.svg";
import EyeOffIcon from "../../assets/images/eye_off.svg";
import EyeOnnIcon from "../../assets/images/eye_on.svg";
import { IInputField } from "./types";

const Container = styled(View)`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-vertical: 4px;
  background-color: #f2f2f7;
`;

const StyledTextInput = styled(TextInput)`
  width: 80%;
  height: 30px;
  font-size: 15px;
  color: #000;
  left: 20px;
  margin-right: 30px;
  line-height: 22px;
  top: 5px;
`;

const StyledTitle = styled(Animated.Text)`
  position: absolute;
  color: #8e8e93;
  left: 20px;
  line-height: 17px;
`;

const IconContainer = styled(View)`
  position: absolute;
  right: 20px;
`;

const ErrorMessage = styled(Text)`
  position: absolute;
  color: red;
  line-height: 17px;
  bottom: -20px;
  font-size: 12px;
`;

const InputField: React.FC<IInputField> = ({
  value,
  title,
  onChangeValue,
  keyboardType = "default",
  textInputStyles = {},
  otherTextInputProps = {},
  enableSecureMode = false,
  shouldDisplayCheck = false,
  errorMessage,
  isFieldValid = false,
}) => {
  const [isFieldActive, setIsFieldActive] = useState(false);
  const [isFieldSecure, setIsFieldSecure] = useState(enableSecureMode);
  const positionRef = useRef(new Animated.Value(value ? 1 : 0));

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(positionRef.current, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleBlur = () => {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
      Animated.timing(positionRef.current, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const returnAnimatedTitleStyles = () => {
    return {
      top: positionRef.current.interpolate({
        inputRange: [0, 1],
        outputRange: [22, 10],
      }),
      fontSize: isFieldActive ? 12 : 16,
    };
  };

  const changeSecurityMode = () => {
    setIsFieldSecure(!isFieldSecure);
  };

  return (
    <Container>
      <StyledTitle style={returnAnimatedTitleStyles()}>{title}</StyledTitle>
      <StyledTextInput
        value={value}
        style={textInputStyles}
        underlineColorAndroid="transparent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeValue}
        keyboardType={keyboardType}
        secureTextEntry={isFieldSecure}
        {...otherTextInputProps}
      />
      <IconContainer>
        {enableSecureMode && (
          <TouchableOpacity onPress={changeSecurityMode}>
            {isFieldSecure ? (
              <EyeOffIcon fill="#000" />
            ) : (
              <EyeOnnIcon fill="#000" />
            )}
          </TouchableOpacity>
        )}
        {shouldDisplayCheck &&
          (isFieldValid ? <CorrectFieldIcon /> : <IncorrectFieldIcon />)}
      </IconContainer>
      {Boolean(errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default InputField;
