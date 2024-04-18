import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";

const InstructionsText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionsText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: COLORS.accent,
    fontSize: 24,
  },
});
