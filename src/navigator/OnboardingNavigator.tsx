import {
  ZipCodeScreen,
  SelectSearchOptionScreen,
  SearchByPhoneNumberScreen,
  AutoRenewalScreen,
} from "../screens/Onboarding";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type OnboardingStackParamList = {
  ZipCode: undefined;
  SelectSearchOption: undefined;
  SearchByPhoneNumber: undefined;
  AutoRenewal: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ZipCode"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ZipCode" component={ZipCodeScreen} />
      <Stack.Screen
        name="SelectSearchOption"
        component={SelectSearchOptionScreen}
      />
      <Stack.Screen
        name="SearchByPhoneNumber"
        component={SearchByPhoneNumberScreen}
      />
      <Stack.Screen name="AutoRenewal" component={AutoRenewalScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;

export type ZipCodeScreenNavigationProp = NativeStackScreenProps<
  OnboardingStackParamList,
  "ZipCode"
>;
export type SelectSearchOptionScreenNavigationProp = NativeStackScreenProps<
  OnboardingStackParamList,
  "SelectSearchOption"
>;
export type SearchByPhoneNumberScreenNavigationProp = NativeStackScreenProps<
  OnboardingStackParamList,
  "SearchByPhoneNumber"
>;
export type AutoRenewalScreenNavigationProps = NativeStackScreenProps<
  OnboardingStackParamList,
  "AutoRenewal"
>;
