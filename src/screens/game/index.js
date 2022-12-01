import { Alert, Button, Text, View } from "react-native";
import {Card, Input, NumberContainer} from "../../components";
import React, {useEffect, useRef, useState} from "react";

import colors from "../../constants/colors";
import { styles } from "./style";

const generateRandomNumber=(min, max, exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random()*(max-min)+min);
    if(randomNumber== exclude){
        return generateRandomNumber(min, max, exclude);
    }else{
        return randomNumber
    }
}

const Game = ({selectedNumber, onGameOver}) =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber))
    const [round, setRound] = useState(0);

    const currentLow= useRef(1);
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) =>{
        if(
            (direction == "min" && currentGuess<selectedNumber )||
            (direction == "max" && currentGuess>selectedNumber) 
        ){
            Alert.alert("Estas equivocado y lo sabes!");
            return;
        }
        if(direction == "min"){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nexNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nexNumber);
        setRound(currentRound => currentRound + 1);
    }

    useEffect(() => {
        if (currentGuess == selectedNumber){
            onGameOver(round);
        }
    }, [currentGuess, selectedNumber, onGameOver]);

    return(
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Numero del adversario</Text>
                <NumberContainer number ={currentGuess}/>
                <View style={styles.containerButton}>
                    <Button
                        title="Menor"
                        onPress={()=>onHandleNextGuess("min")}
                        color= {colors.elements}
                    />
                    <Button
                        title="Mayor"
                        onPress={()=>onHandleNextGuess("max")}
                        color= {colors.elements}
                    />
                </View>
            </Card>
        </View>
    )
}

export default Game;