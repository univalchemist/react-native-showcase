import { Settings } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

export type MainStackParamList = {
  Settings: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
