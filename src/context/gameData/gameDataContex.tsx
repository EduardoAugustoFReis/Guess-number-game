import { createContext } from "react";

interface GameContextProps {
  enteredNumber: string;
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);