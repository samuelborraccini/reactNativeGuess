import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent,
    padding: width < 350 ? 12 : 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: COLORS.accent,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
