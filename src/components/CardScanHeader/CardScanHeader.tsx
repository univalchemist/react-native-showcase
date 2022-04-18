import { StyleSheet, Text } from "react-native";
import { Columns, Bleed, Column } from "@mobily/stacks";
import { ArrowLeft } from "@assets/images";
import { useNavigation } from "@react-navigation/native";
import { CSHeaderProps } from "./types";

export const CSHeader = ({
  title,
  displayBackArrow = false,
  RightElement,
}: CSHeaderProps) => {
  const navigation = useNavigation();
  return (
    <>
      <Bleed horizontal={2}>
        <Columns style={{ justifyContent: "center", alignItems: "center" }}>
          <Column>
            {displayBackArrow && (
              <ArrowLeft
                onPress={() => {
                  navigation.goBack();
                }}
                style={{ paddingLeft: 20 }}
                arrowProps={{
                  width: 34,
                  height: 34,
                  viewBox: "0 0 28 28",
                }}
              />
            )}
          </Column>
          <Column>
            <Text style={styles.title}>{title}</Text>
          </Column>
          <Column width="content" style={styles.rightColumn} paddingRight={10}>
            {RightElement}
          </Column>
        </Columns>
      </Bleed>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 32,
  },
  copy: {
    fontSize: 14,
    lineHeight: 16,
  },
  rightColumn: {
    alignItems: "flex-end",
  },
});
