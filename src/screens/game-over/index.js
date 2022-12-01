import { Alert, Button, Image, Text, View } from "react-native";
import {Input, NumberContainer} from "../../components";
import React, {useRef, useState} from "react";

import {Card} from "../../components";
import colors from "../../constants/colors";
import { styles } from "./style";

const GameOver = ({rounds, selectedNumber, onRestart})=>{
    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <Image 
                    source={{uri: "https://www.xtrafondos.com/wallpaper/5120x2880/10431-game-over.html#&gid=1&pid=2"}}
                    style={styles.image}
                />  
                <Text>Rounds: {rounds}</Text>
                <Text>Selected Number: {selectedNumber}</Text>
                <Button 
                    title="Reiniciar"
                    onPress={onRestart}
                    color={colors.elements}
                />
            </Card>
        </View>
    )
}

export default GameOver;