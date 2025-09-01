import GameDataProvider from "@/src/context/gameData/GameDataProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GameDataProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="game/index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="game/over"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GameDataProvider>
  );
}
