import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inpuContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inpuContainer: {
    padding: 16,
    marginTop: 36,
    backgroundColor: COLORS.primary700,
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
