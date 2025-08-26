import { useContext } from "react";
import { GameContext } from "./gameDataContex";

function useGameData() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("This context need the respective provider to be used!");
  }

  return context;
}

export default useGameData;