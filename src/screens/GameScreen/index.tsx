import AppLayout from "@/src/components/Layout";
import PrimaryButton from "@/src/components/PrimaryButton";
import Title from "@/src/components/Title";
import useGameData from "@/src/context/gameData/useGameData";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  // Se min == max, retorna min (único número possível)
  if (min === max) return min;

  let randomNumber = exclude;
  while (randomNumber === exclude) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return randomNumber;
};

const GameScreen = () => {
  const { enteredNumber } = useGameData();
  const initialGuess = generateRandomNumber(1, 100, Number(enteredNumber));
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < Number(enteredNumber)) ||
      (direction === "greater" && currentGuess > Number(enteredNumber))
    ) {
      Alert.alert("Don't lie!");
      return;
    }

    // Atualiza os limites locais
    if (direction === "lower") {
      setMaxBoundary(currentGuess - 1);
    } else {
      setMinBoundary(currentGuess + 1);
    }

    const newGuess = generateRandomNumber(
      direction === "lower" ? minBoundary : currentGuess + 1,
      direction === "lower" ? currentGuess - 1 : maxBoundary,
      currentGuess
    );

    setCurrentGuess(newGuess);
    setGuessRounds((prev) => [newGuess, ...prev]);
  }

  useEffect(() => {
    if (currentGuess === Number(enteredNumber)) {
     router.push({
      pathname: "/game/over",
      params: {rounds: guessRounds.length}
     })
    }
  }, [currentGuess, enteredNumber]);

  return (
    <AppLayout showBackgroundImage={false} colors={["#72063c", "#430f3a"]}>
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
          <Text style={styles.tipsContainerText}>Higher or Lower ?</Text>
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
          <Text style={styles.logRoundsContainerText}>Log Rounds:</Text>
          <ScrollView>
            {guessRounds.map((guess, index) => (
              <Text key={index} style={styles.logRoundsContainerTextAttempts}>
                Attempts {guessRounds.length - index}: {guess}
              </Text>
            ))}
          </ScrollView>
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
    flex: 0.5,
    alignItems: "center",
  },
  userNumberChooseText: {
    fontSize: 18,
    color: "#fff",
    padding: 8,
  },
  tipsContainer: {
    flex: 0.5,
  },
  tipsContainerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  tipsContainerButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  logRoundsContainer: {
    flex: 1,
  },
  logRoundsContainerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  logRoundsContainerTextAttempts: {
    color: "#fff",
    fontSize: 16,
  },
});
