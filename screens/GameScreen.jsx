import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";
import Card from "../components/ui/Card";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import InstructionsText from "../components/ui/InstructionsText";
import ListItem from "../components/ui/ListItem";
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundry = 0;
let maxBoundry = 100;

const GameScreen = ({ userNumber, setGameOver, setRounds }) => {
  const initialGuess = generateRandomBetween(0, 100, userNumber);
  const [guessNumber, setGuessNumber] = useState(initialGuess);
  const [history, sethistory] = useState([]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guessNumber < userNumber) ||
      (direction === "higher" && guessNumber > userNumber)
    ) {
      return Alert.alert("Dont lie", "You know the response is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      maxBoundry = guessNumber;
    } else {
      minBoundry = guessNumber + 1;
    }
    setGuessNumber(generateRandomBetween(minBoundry, maxBoundry, guessNumber));
    sethistory([...history, guessNumber]);
  };
  useEffect(() => {
    if (guessNumber === userNumber) {
      setGameOver(true);
      setRounds(history.length);
    }
  }, [guessNumber]);
  useEffect(() => {
    minBoundry = 0;
    maxBoundry = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title title={"Oponent's Guess"} />
      <NumberContainer>{guessNumber}</NumberContainer>
      <Card>
        <InstructionsText style={styles.instructionText}>
          Higher or Lower
        </InstructionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} color="white" />
            </MainButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={history}
          renderItem={({ item, index }) => (
            <ListItem>
              Intento #{index + 1}: el valor adivinado fue {item}
            </ListItem>
          )}
          keyExtractor={(item) => item}
          style={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 12,
  },
});
