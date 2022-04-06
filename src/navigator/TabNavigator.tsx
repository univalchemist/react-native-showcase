import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StartScreen, AuthScreen } from "@screens/index";
import SettingsNavigator from "@navigator/SettingsNavigator";
import StarSvg from "@assets/icons/star.svg";
import OnboardingNavigator from "@navigator/OnboardingNavigator";

const Tab = createMaterialBottomTabNavigator();

const TABBAR_ICONS: Record<string, Element> = {
  "Feed": <StarSvg />,
  "My Home": <StarSvg />,
  "Special Offers": <StarSvg />,
  "Settings": <StarSvg />,
};

const TabNavigator = () => {
  const barStyle = {
    height: 84,
    backgroundColor: "#fff",
  };

  const screenOptions = ({ route }: any) => ({
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      return (
        <View style={{ opacity: focused ? 1 : 0.3 }}>
          {TABBAR_ICONS[route.name]}
        </View>
      );
    },
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      barStyle={barStyle}
      labeled
      shifting={false}
    >
      <Tab.Screen name="Feed" component={OnboardingNavigator} />
      <Tab.Screen name="My Home" component={StartScreen} />
      <Tab.Screen name="Special Offers" component={AuthScreen} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
