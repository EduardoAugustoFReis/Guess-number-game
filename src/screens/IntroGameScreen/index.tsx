import AppLayout from "@/src/components/Layout";
import PrimaryButton from "@/src/components/PrimaryButton";
import useGameData from "@/src/context/gameData/useGameData";
import { router } from "expo-router";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

const IntroGameScreen = () => {
  const {enteredNumber, setEnteredNumber} = useGameData();

  const confirmButton = () => {
    const chosenNumber = Number(enteredNumber);

    if (isNaN(chosenNumber)) {
      Alert.alert("You must enter with a number!");
      return;
    }

    if (chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("You must enter with a number between 1-99 !");
      return;
    }

    router.navigate("/game");
  };

  const resetButton = () => {
    setEnteredNumber("");
  };

  return (
    <AppLayout colors={["#72063c", "#fff"]}>
      <View style={styles.inputBox}>
        <Text style={styles.inputBoxTitle}>
          Choose a number between 1 at 99
        </Text>

        <TextInput
          style={styles.inputBoxNumberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={setEnteredNumber}
        />
        <View style={styles.inputBoxButtons}>
          <PrimaryButton onPress={resetButton} buttonTitle="Reset" />
          <PrimaryButton onPress={confirmButton} buttonTitle="Confirm" />
        </View>
      </View>
    </AppLayout>
  );
};

export default IntroGameScreen;

const styles = StyleSheet.create({
  inputBox: {
    alignItems: "center",
    backgroundColor: "#72063c",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  inputBoxTitle: {
    color: "#fff",
    fontSize: 18,
  },
  inputBoxNumberInput: {
    height: 50,
    width: 50,
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddb52f",
    color: "#fff",
    marginVertical: 8,
    textAlign: "center",
  },
  inputBoxButtons: {
    flexDirection: "row",
    gap: 10,
  },
});
