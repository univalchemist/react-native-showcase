import { Columns, Column, Row, Box, Stack } from "@mobily/stacks";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Typography } from "@components/Typography";
import UserSvg from "@assets/icons/user.svg";
import PadlockSvg from "@assets/icons/padlock.svg";
import CardSvg from "@assets/icons/card.svg";
import NotificationsSvg from "@assets/icons/notifications.svg";
import QuestionSvg from "@assets/icons/question-in-circle.svg";
import LogoutSvg from "@assets/icons/logout.svg";
import ChevronRightSvg from "@assets/icons/chevron-right.svg";
import { useAuth } from "@ftdr/react-native-auth";

interface SettingI {
  label: string;
  icon: Element;
  navigateTo: string;
  onPress?: () => void;
}



const SETTINGS: SettingI[] = [
  {
    label: "Account",
    icon: <UserSvg />,
    navigateTo: "Account",
  },
  {
    label: "Change Password",
    icon: <PadlockSvg />,
    navigateTo: "ChangePassword",
  },
  {
    label: "Payment Method",
    icon: <CardSvg />,
    navigateTo: "PaymentMethods",
  },
  {
    label: "Notifications",
    icon: <NotificationsSvg />,
    navigateTo: "",
  },
  {
    label: "Support",
    icon: <QuestionSvg />,
    navigateTo: "",
  },
  {
    label: "Log Out",
    icon: <LogoutSvg />,
    navigateTo: "",
  },
];







export const Settings = () => {
  const { logout } = useAuth();

  return (
    <Columns height="fluid" paddingTop={12}>
      <Row height="content">
        <Stack>
          <Box paddingBottom={4} paddingLeft={5} paddingTop={3}>
            <Typography style={styles.title}>Settings</Typography>
          </Box>
          {SETTINGS.map((setting) => (
            <TouchableOpacity onPress={setting?.onPress}>
              <Columns alignY="center" paddingX={6} style={styles.settingItem}>
                <Column width="fluid" paddingY={5}>
                  <Columns alignX="left" alignY="center">
                    <Column width="content">{setting.icon}</Column>
                    <Column width="fluid" paddingLeft={2}>
                      <Typography>{setting.label}</Typography>
                    </Column>
                  </Columns>
                </Column>
                <Column width="content" paddingY={5}>
                  <ChevronRightSvg />
                </Column>
              </Columns>
            </TouchableOpacity>
          ))}
        </Stack>
      </Row>
    </Columns>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    lineHeight: 32,
    fontSize: 28,
  },
  settingItem: {
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
});
