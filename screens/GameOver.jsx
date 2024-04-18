import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import MainButton from "../components/ui/MainButton";
import Title from "../components/ui/Title";
import COLORS from "../constants/colors";

const GameOver = ({ number, restartGame, rounds }) => {
  return (
    <View style={styles.rootContainer}>
      <Title title="Game Over!" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.outterText}>
        Your phone needed <Text style={styles.innterText}>{rounds}</Text> rounds
        to guess the number <Text style={styles.innterText}>{number}</Text>
      </Text>
      <MainButton onPress={restartGame}>Restart</MainButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: COLORS.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  innterText: {
    fontWeight: "bold",
    color: COLORS.primary500,
    fontSize: 20,
  },
  outterText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontFamily: "open-sans",
  },
});
