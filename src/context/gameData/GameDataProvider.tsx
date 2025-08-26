import { ReactNode, useState } from "react";
import { GameContext } from "./gameDataContex";

interface GameProviderProps {
  children: ReactNode;
}

function GameDataProvider({children}: GameProviderProps) {
  const [enteredNumber, setEnteredNumber] = useState("");


  return (
   <GameContext.Provider value={{enteredNumber, setEnteredNumber}}>
      {children}
    </GameContext.Provider>
  )
} 


export default GameDataProvider;