import AppLayout from "@/src/components/Layout";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameOverScreen = () => {
  const { rounds } = useLocalSearchParams<{ rounds: string }>();
  return (
    <AppLayout colors={["#72063c", "#430f3a"]}>
      <View style={styles.container}>
        <Text style={styles.title}>🎉 Game Over 🎉</Text>
        <Text style={styles.text}>App guess your number!</Text>
        <Text style={styles.text}>Attempts: {rounds}</Text>
      </View>

        <Link href={`/`} style={{color: "#fff", fontSize: 20}}>Play again</Link>
    </AppLayout>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginTop: 8,
  },
});