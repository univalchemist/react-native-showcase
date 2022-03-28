import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { EmailSentScreen, ForgotPasswordScreen, ResetPasswordScreen } from ".";

export type ForgotPasswordStackParamList = {
  ForgotPasswordRoot: undefined;
  EmailSent: undefined;
  ResetPassword: undefined;
};
const Stack = createStackNavigator<ForgotPasswordStackParamList>();

export const ForgotPasswordNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ForgotPasswordRoot"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ForgotPasswordRoot" component={ForgotPasswordScreen} />
      <Stack.Screen name="EmailSent" component={EmailSentScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export type ForgotPasswordProps = NativeStackScreenProps<
  ForgotPasswordStackParamList,
  "ForgotPasswordRoot"
>;

export type EmailSentProps = NativeStackScreenProps<
  ForgotPasswordStackParamList,
  "EmailSent"
>;

export type ResetPasswordProps = NativeStackScreenProps<
  ForgotPasswordStackParamList,
  "ResetPassword"
>;
