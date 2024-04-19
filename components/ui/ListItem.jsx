import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";

const ListItem = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listItem}>{children}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary500,
    padding: 12,
    marginVertical: 12,
    borderRadius: 20,
  },
  listItem: {
    fontFamily: "open-sans",
    color: COLORS.accent,
    textAlign: "center",
    fontSize: 16,
  },
});
