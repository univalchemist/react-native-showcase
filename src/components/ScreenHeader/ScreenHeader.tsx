import { StyleSheet, Text } from "react-native";
import { Columns, Box, Bleed, Column } from "@mobily/stacks";
import { ArrowLeft } from "@assets/images";
import { useNavigation } from "@react-navigation/native";
import { ScreenHeaderProps } from "./types";

export const ScreenHeader = ({
  title,
  copy,
  displayBackArrow = false,
  RightElement,
}: ScreenHeaderProps) => {
  const navigation = useNavigation();
  return (
    <>
      <Bleed horizontal={5}>
        <Columns alignY="center" alignX="between">
          <Column>
            {displayBackArrow && (
              <ArrowLeft
                onPress={() => {
                  navigation.goBack();
                }}
                style={{ paddingHorizontal: 20 }}
                arrowProps={{
                  width: 34,
                  height: 34,
                  viewBox: "0 0 28 28",
                }}
              />
            )}
          </Column>
          <Column width="content" style={styles.rightColumn} paddingRight={4}>
            {RightElement}
          </Column>
        </Columns>
      </Bleed>
      <Box marginTop={2}>
        <Text style={styles.title}>{title}</Text>
      </Box>
      {copy ? (
        <Box>
          <Text style={styles.copy}>{copy}</Text>
        </Box>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: -0.01,
  },
  copy: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.005,
  },
  rightColumn: {
    alignItems: "flex-end",
  },
});
