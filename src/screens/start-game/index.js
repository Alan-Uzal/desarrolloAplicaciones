import { Alert, Button, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import {Card, Input, NumberContainer} from "../../components";
import React, {useState} from "react";

import colors from "../../constants/colors";
import { styles } from "./styles";

const StartGame = ({onStartGame}) => {
    const [number, setNumber] = useState("");
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g, ""));
    }

    const onHandleReset = () => {
        setNumber("");
        setConfirmed(false);
    }

    const onHandleConfirm = ()=>{
        const chosenNumber = parseInt(number, 10);
        if(isNaN(chosenNumber)||chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert("Numero Invalido")
        }else{
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumber();
        }
    }


    const confirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Number Selected:</Text>
            <NumberContainer number={selectedNumber}/>
            <Button
                title="Start Game"
                onPress={()=>onStartGame(selectedNumber)}
                color= {colors.elements}
            />
        </Card>
    ): null;

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : "padding"} style={styles.containerScroll}>
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
            }}>
                <ScrollView style={styles.containerScroll}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Ingrese un numero</Text>
                        <Card style={styles.inputContainer}>
                            <Input 
                                style={styles.input} 
                                blurOnSubmit
                                placeholder="0"
                                keyboardType = "number-pad"
                                onChangeText = {onHandleChange}
                                value ={number}
                                />
                            <View style={styles.buttonContainer}>
                                <Button
                                    title="Reiniciar"
                                    onPress={onHandleReset}
                                    color= {colors.elements}
                                    />
                                <Button
                                    title="Confirmar"
                                    onPress={onHandleConfirm}
                                    color= {colors.elements}
                                    />
                            </View>
                        </Card>
                        {confirmedOutput()}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default StartGame;