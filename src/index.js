import { GameOver, StartGame } from "./screens";
import React, {useState} from "react";
import { StyleSheet, Text, View } from 'react-native';

import {Game} from "./screens";
import {Header} from "./components";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const [guessRounds, setGuessRounds]=useState(0);

  const onGameOver = (rounds)=>{
    setGuessRounds(rounds);
  }

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let content = <StartGame onStartGame={onStartGame}/>
  if(userNumber && guessRounds<=0){
    content = <Game selectedNumber={userNumber} onGameOver={onGameOver} />
  }else if(guessRounds > 0){
    content = <GameOver rounds={guessRounds} selectedNumber={userNumber} onRestart={onRestart}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Mi juego"/>
      <StartGame onStartGame={onStartGame}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
