import { Columns, Rows, Row, Box, Stack } from "@mobily/stacks";
import { SelectSearchOptionScreenNavigationProp } from "src/navigator/OnboardingNavigator";
import { Button } from "@components/Button";
import { ScreenHeader } from "@components/ScreenHeader";

const SelectSearchOption = ({
  navigation,
}: SelectSearchOptionScreenNavigationProp) => {
  const onPressSearchByPhoneNumber = () => {
    navigation.navigate("SearchByPhoneNumber");
  };
  const onPressSearchByPropertyAddress = () => {
    // navigation.navigate("SearchByPropertyAddress");
  };
  const onPressSearchByContractNumber = () => {
    // navigation.navigate("SearchByContractNumber");
  };

  return (
    <Columns height="fluid" paddingTop={12}>
      <Rows alignY="between">
        <Row height="content">
          <Stack space={4} paddingX={5}>
            <ScreenHeader
              title="Add Your Property"
              copy="Please enter your information for one of the search options
                below to look up your AHS home warranty."
              displayBackArrow
            />
          </Stack>
        </Row>
        <Row height="content" paddingX={5} paddingY={5} paddingBottom={15}>
          <Box paddingBottom={5}>
            <Button
              text="Search by phone number"
              onPress={onPressSearchByPhoneNumber}
              enableFullWidth
            />
          </Box>
          <Box paddingBottom={5}>
            <Button
              text="Search by property address"
              onPress={onPressSearchByPropertyAddress}
              enableFullWidth
            />
          </Box>
          <Box paddingBottom={5}>
            <Button
              text="Search by contract number"
              onPress={onPressSearchByContractNumber}
              enableFullWidth
            />
          </Box>
        </Row>
      </Rows>
    </Columns>
  );
};

export default SelectSearchOption;
