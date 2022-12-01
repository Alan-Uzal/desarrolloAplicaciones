import React, {useState} from "react";
import { StyleSheet, Text, View } from 'react-native';

import {Game} from "./screens";
import {Header} from "./components";
import { StartGame } from "./screens";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame}/>
  if(userNumber){
    content = <Game selectedNumber={userNumber} />
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
