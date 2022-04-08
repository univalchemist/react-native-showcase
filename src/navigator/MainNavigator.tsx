import { useAuth } from "@ftdr/react-native-auth";
import {
  StartScreen,
  TakePictureOrVideoScreen,
  ConfirmPictureScreen,
  FinishScreen,
  AuthScreen,
  ConfirmEmail,
  UploadPictures,
  WelcomeScreen,
  LogInScreen,
  SignUpScreen,
  CreatePasswordScreen,
  AccountScreen,
  ChangePasswordScreen,
  PaymentMethodsScreen,
  AddOrEditCardScreen,
  CardScannerScreen,
} from "../screens";
import SettingsNavigator from "./SettingsNavigator";
import { productPhotosMachine } from "../machines/productPhotosMachine";
import { productFilesMachine } from "../machines/productFilesMachine";

import { useInterpret } from "@xstate/react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductFilesContextProvider } from "@context/ProductFileMachineContext";
import { ForgotPasswordNavigator } from "@screens/ForgotPassword";
import OnboardingNavigator from "./OnboardingNavigator";
import TabNavigator from "./TabNavigator";
import { TakePictureScreen } from "@screens/TakePictureScreen";

export type MainStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  CreatePassword: undefined;
  ForgotPassword: undefined;
  LogIn: undefined;
  Auth: undefined;
  Start: undefined;
  TakePictureOrVideoScreen: undefined;
  ConfirmPictureScreen: undefined;
  Finish: undefined;
  ConfirmEmail: { link: string; userId: string };
  UploadPictures: { link: string; scenario: number; requestId: string };
  Onboarding: undefined;
  Account: undefined;
  ChangePassword: undefined;
  PaymentMethods: undefined;
  AddOrEditCard: undefined;
  CardScanner: undefined;
  Settings: undefined;
  TakePictureScreen: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const MainNavigator = () => {
  const filesService = useInterpret(productFilesMachine);
  const { isLoading, isLoggedIn } = useAuth();

  console.log("isloggedin", isLoggedIn);

  return (
    <ProductFilesContextProvider value={{ filesService }}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="TakePictureScreen" component={TakePictureScreen} />
        <Stack.Screen
          name="ConfirmPictureScreen"
          component={ConfirmPictureScreen}
        />
        <Stack.Screen name="Finish" component={FinishScreen} />
        <Stack.Screen name="UploadPictures" component={UploadPictures} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
        <Stack.Screen name="AddOrEditCard" component={AddOrEditCardScreen} />
        <Stack.Screen name="CardScanner" component={CardScannerScreen} />

        <Stack.Screen name="Settings" component={SettingsNavigator} />
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />

        {isLoggedIn ? (
          <>
            <Stack.Screen name="Welcome" component={TabNavigator} />
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen
              name="TakePictureOrVideoScreen"
              component={TakePictureOrVideoScreen}
            />
            <Stack.Screen
              name="ConfirmPictureScreen"
              component={ConfirmPictureScreen}
            />
            <Stack.Screen name="Finish" component={FinishScreen} />
            <Stack.Screen name="UploadPictures" component={UploadPictures} />
            <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="CreatePassword"
              component={CreatePasswordScreen}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordNavigator}
            />
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
          </>
        )}
      </Stack.Navigator>
    </ProductFilesContextProvider>
  );
};

export default MainNavigator;

export type AuthScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "Auth"
>;
export type StartScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "Start"
>;
export type TakePictureOrVideoScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "TakePictureOrVideoScreen"
>;
export type ConfirmPictureScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "ConfirmPictureScreen"
>;
export type FinishScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "Finish"
>;
export type ConfirmEmailScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "ConfirmEmail"
>;
export type UploadPicturesScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "UploadPictures"
>;
//
export type ConfirmEmailProps = NativeStackScreenProps<
  MainStackParamList,
  "ConfirmEmail"
>;

export type UploadPicturesProps = NativeStackScreenProps<
  MainStackParamList,
  "UploadPictures"
>;

export type WelcomeProps = NativeStackScreenProps<
  MainStackParamList,
  "Welcome"
>;

export type LogInProps = NativeStackScreenProps<MainStackParamList, "LogIn">;

export type SignUpProps = NativeStackScreenProps<MainStackParamList, "SignUp">;

export type CreatePasswordProps = NativeStackScreenProps<
  MainStackParamList,
  "CreatePassword"
>;

export type AccountProps = NativeStackScreenProps<
  MainStackParamList,
  "Account"
>;
export type ChangePasswordProps = NativeStackScreenProps<
  MainStackParamList,
  "ChangePassword"
>;
export type PaymentMethodsProps = NativeStackScreenProps<
  MainStackParamList,
  "PaymentMethods"
>;
export type AddOrEditCardProps = NativeStackScreenProps<
  MainStackParamList,
  "AddOrEditCard"
>;
export type CardScannerProps = NativeStackScreenProps<
  MainStackParamList,
  "CardScanner"
>;
export type SettingsProps = NativeStackScreenProps<
  MainStackParamList,
  "Settings"
>;
