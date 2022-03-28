import { createContext } from "react";
import {
  StartScreen,
  TakePictureScreen,
  ConfirmPictureScreen,
  FinishScreen,
  AuthScreen,
  ConfirmEmail,
  UploadPictures,
  WelcomeScreen,
  LogInScreen,
  SignUpScreen,
  CreatePasswordScreen,
} from "../screens";
import SettingsNavigator from "./SettingsNavigator";
import { productPhotosMachine } from "../machines/productPhotosMachine";
import { useInterpret } from "@xstate/react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { InterpreterFrom } from "xstate";
import { ForgotPasswordNavigator } from "@screens/ForgotPassword";
import OnboardingNavigator from "./OnboardingNavigator";

export type MainStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  CreatePassword: undefined;
  ForgotPassword: undefined;
  LogIn: undefined;
  Auth: undefined;
  Start: undefined;
  TakePictureScreen: undefined;
  ConfirmPictureScreen: undefined;
  Finish: undefined;
  ConfirmEmail: { link: string; userId: string };
  UploadPictures: { link: string; scenario: number; requestId: string };
  Settings: undefined;
  Onboarding: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const ProductPhotosMachineContext = createContext({
  photosService: {} as InterpreterFrom<typeof productPhotosMachine>,
});

const MainNavigator = () => {
  const photosService = useInterpret(productPhotosMachine);

  return (
    <ProductPhotosMachineContext.Provider value={{ photosService }}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordNavigator}
        />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="TakePictureScreen" component={TakePictureScreen} />
        <Stack.Screen
          name="ConfirmPictureScreen"
          component={ConfirmPictureScreen}
        />
        <Stack.Screen name="Finish" component={FinishScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="UploadPictures" component={UploadPictures} />
        <Stack.Screen name="Settings" component={SettingsNavigator} />
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      </Stack.Navigator>
    </ProductPhotosMachineContext.Provider>
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
export type TakePictureScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "TakePictureScreen"
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
