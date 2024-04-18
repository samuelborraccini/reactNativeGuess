import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import MainButton from "../components/ui/MainButton";
import COLORS from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";

const StartGame = ({ handleNumberPick }) => {
  const [input, setInput] = useState("");

  const resetInputHandler = () => {
    setInput("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(input);
    if (chosenNumber > 99 || chosenNumber <= 0 || isNaN(chosenNumber)) {
      return Alert.alert(
        "Invalid number",
        "Number has to be between 1 and 99",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
    }
    handleNumberPick(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title title="Guess My Number" />
      <Card style={styles.inpuContainer}>
        <InstructionsText>Enter a Number</InstructionsText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          returnKeyType="done"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={resetInputHandler}>Reset</MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  input: {
    height: 50,
    width: 80,
    fontSize: 32,
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 2,
    color: COLORS.accent,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
