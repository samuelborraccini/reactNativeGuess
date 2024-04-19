import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
