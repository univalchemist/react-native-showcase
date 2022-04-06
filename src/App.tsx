import { useDynamicLinks } from "@ftdr/react-native-dynamic-links";
// import {
// useNotificationsPermissions,
// useNotifications,
// } from "@ftdr/react-native-notifications";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "@ftdr/react-native-auth";
import { DefaultTheme } from "@react-navigation/native";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
// import {
//   AUTH_CLIENT_ID,
//   AUTH_CLIENT_SECRET,
//   AUTH_ISSUER_URI,
//   AUTH_REDIRECT_URI,
// } from "react-native-dotenv";
import MainNavigator, { MainStackParamList } from "./navigator/MainNavigator";
import { handleDeepLink } from "./helpers/handleDeepLink";
import React from "react";
import { StacksProvider } from "@mobily/stacks";
import { composeWrappers } from "./utils/composeWrappers";

const config = {
  // issuer: AUTH_ISSUER_URI,
  // clientId: AUTH_CLIENT_ID,
  // clientSecret: AUTH_CLIENT_SECRET,
  // redirectUri: AUTH_REDIRECT_URI,
  issuer: "",
  clientId: "",
  clientSecret: "",
  redirectUri: "",
};

const queryClient = new QueryClient();

export const navigationRef = createNavigationContainerRef<MainStackParamList>();

const navigationTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "white" },
};

const App = () => {
  // useNotificationsPermissions();

  // useNotifications({
  //   onMessage: (message) => console.log(message),
  // });

  useDynamicLinks({
    onLink: (link) => handleDeepLink(link),
    onForegroundLink: (link) => console.log("onForegroundLink", link),
    onBackgroundLink: (link) => console.log("onBackgroundLink", link),
  });

  const Wrapper = composeWrappers([
    (props) => <StacksProvider spacing={4}>{props.children}</StacksProvider>,
    (props) => (
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    ),
    (props) => <AuthProvider config={config}>{props.children}</AuthProvider>,
    (props) => (
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {props.children}
      </NavigationContainer>
    ),
  ]);

  return (
    <Wrapper>
      <MainNavigator />
    </Wrapper>
  );
};

export default App;
