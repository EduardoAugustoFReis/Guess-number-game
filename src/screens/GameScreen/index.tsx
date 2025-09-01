import AppLayout from "@/src/components/Layout";
import PrimaryButton from "@/src/components/PrimaryButton";
import Title from "@/src/components/Title";
import useGameData from "@/src/context/gameData/useGameData";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: string
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === Number(exclude)) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = () => {
  const { enteredNumber } = useGameData();
  const initialGuess = generateRandomNumber(1, 100, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction: string) {
    // lower or greater
    if (
      (direction === "lower" && currentGuess < Number(enteredNumber)) ||
      (direction === "greater" && currentGuess > Number(enteredNumber))
    ) {
      Alert.alert("Don't lie!");
      return;
    }
      if (direction === "lower") {
        maxBoundary = currentGuess;
      } else {
        minBoundary = currentGuess + 1;
      }

    setCurrentGuess(
      generateRandomNumber(minBoundary, maxBoundary, String(currentGuess))
    );
  }

  useEffect(() => {
    if (currentGuess === Number(enteredNumber)) {
      Alert.alert("End game!", "The app guess your number");
      
    }
  }, [currentGuess, enteredNumber])
  return (
    <AppLayout showBackgroundImage={false} colors={["#72063c", "#fff"]}>
      <View style={styles.arrowButtonReturn}>
        <Link href="/" style={{ color: "#fff" }}>
          <AntDesign name="arrowleft" size={20} />
          <Text style={{ fontSize: 18 }}>Voltar</Text>
        </Link>
      </View>
      <View style={styles.container}>
        <Title
          textTitle={`Opponent's Guess: ${currentGuess}`}
          containerStyle={{
            borderWidth: 2,
            borderColor: "#fff",
            borderRadius: 8,
            padding: 8,
          }}
          textStyle={{
            color: "#fff",
          }}
        />
        <View style={styles.userNumberChooseContainer}>
          <Text style={styles.userNumberChooseText}>
            You choose the number: {enteredNumber || "nenhum"}
          </Text>
        </View>
        <View style={styles.tipsContainer}>
          <Text>Higher or Lower ?</Text>
          <View style={styles.tipsContainerButtons}>
            <PrimaryButton
              buttonTitle="-"
              onPress={() => nextGuessHandler("lower")}
            />
            <PrimaryButton
              buttonTitle="+"
              onPress={() => nextGuessHandler("greater")}
            />
          </View>
        </View>

        <View style={styles.logRoundsContainer}>
          <Text>Log Rounds</Text>
        </View>
      </View>
    </AppLayout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  arrowButtonReturn: {
    margin: 8,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  container: {
    padding: 24,
    flex: 1,
  },
  userNumberChooseContainer: {
    flex: 1,
    alignItems: "center",
  },
  userNumberChooseText: {
    fontSize: 18,
    color: "#fff",
    padding: 8,
  },
  tipsContainer: {
    flex: 1,
  },
  tipsContainerButtons: {
    flexDirection: "row",
  },
  logRoundsContainer: {
    flex: 1,
  },
});
