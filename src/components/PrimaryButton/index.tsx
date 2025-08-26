import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface PrimaryButtonProps extends PressableProps {
  buttonTitle: string;
  onPress: () => void;
}

const PrimaryButton = ({ buttonTitle, onPress }: PrimaryButtonProps) => {
  

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{ color: "#783457" }}
    >
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#31041b",
    borderRadius: 8,
    padding: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    backgroundColor: "#783457",
  },
});
