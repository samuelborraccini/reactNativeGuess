import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";

const MainButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: COLORS.primary500,

    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
