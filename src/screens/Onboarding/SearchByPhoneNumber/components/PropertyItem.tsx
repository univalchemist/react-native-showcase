import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import PinSvg from "@assets/icons/pin.svg";
import RadioSvg from "@assets/icons/radio.svg";
import RadioSelectedSvg from "@assets/icons/radio-selected.svg";
import { Property } from "../types";

interface Props {
  property: Property;
  selected: boolean;
  onPress: (property: Property) => void;
}

export const PropertyItem = ({ property, selected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.activeContainer]}
      onPress={() => onPress(property)}
    >
      <PinSvg style={styles.pin} />
      <View style={styles.textContainer}>
        <Text style={styles.state}>{property.state}</Text>
        <Text style={styles.text}>{property.address}</Text>
        <Text style={styles.text}>{property.since}</Text>
      </View>
      {selected ? (
        <RadioSelectedSvg style={styles.radio} />
      ) : (
        <RadioSvg style={styles.radio} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    borderColor: "#D6D6DB",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  activeContainer: {
    borderColor: "#000000",
  },
  pin: {
    marginLeft: 24,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 20,
    marginVertical: 20,
  },
  state: {
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.005,
  },
  text: {
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.01,
  },
  radio: {
    position: "absolute",
    top: 12,
    right: 12,
  },
});
