import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import COLORS from "./constants/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [gameOver, setGamerOver] = useState(false);
  const pickedNumber = (number) => {
    setUserNumber(number);
  };

  const restartGame = () => {
    setGamerOver(false);
    setUserNumber();
  };
  let screen = <StartGame handleNumberPick={pickedNumber} />;

  if (gameOver) {
    screen = (
      <GameOver number={userNumber} restartGame={restartGame} rounds={rounds} />
    );
  } else if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        setRounds={setRounds}
        setGameOver={setGamerOver}
      />
    );
  }
  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[COLORS.primary800, COLORS.accent]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
