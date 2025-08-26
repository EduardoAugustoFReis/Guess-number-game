import AppLayout from "@/src/components/Layout";
import Title from "@/src/components/Title";
import useGameData from "@/src/context/gameData/useGameData";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: string,
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === Number(exclude)) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = () => {
  const { enteredNumber } = useGameData();
  const initialGuess = generateRandomNumber(1, 100, enteredNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
          textTitle="Opponent's Guess"
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
          <Text>+ -</Text>
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
  logRoundsContainer: {
    flex: 1,
  },
});
