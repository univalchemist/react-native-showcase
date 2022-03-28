import React, { useContext } from "react";
import { useActor } from "@xstate/react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Typography } from "@components/Typography";
import {
  FinishScreenNavigationProp,
  ProductPhotosMachineContext,
} from "../navigator/MainNavigator";
import { styles as baseStyles } from "./StartScreen";
import { Button } from "../utils/Button";

const { height } = Dimensions.get("screen");

export const FinishScreen = () => {
  const navigation = useNavigation<FinishScreenNavigationProp>();

  const { photosService } = useContext(ProductPhotosMachineContext);
  const [state, send] = useActor(photosService);

  const onPressFinish = () => {
    send("RESET");
    navigation.navigate("Auth");
  };

  const images = [
    state.context.FrontPhoto,
    state.context.SidePhoto,
    state.context.SerialNumberPhoto,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Typography style={styles.title}>{state.value}</Typography>
      <View style={styles.imagesContainer}>
        {images.map(
          (image, i) =>
            !!image && (
              <Image key={i} source={{ uri: image }} style={styles.image} />
            )
        )}
      </View>
      <Typography style={styles.description}>
        {state.context.description}
      </Typography>
      <Button onPress={onPressFinish}>Finish</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...baseStyles,
  imagesContainer: {
    flexDirection: "row",
    height: height * 0.3,
    marginTop: 100,
  },
  image: {
    flex: 1,
    borderColor: "#000",
    borderWidth: 1,
  },
});
