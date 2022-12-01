import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
    },
    title:{
        fontSize: 19,
        textAlign: "center",
        paddingVertical: 5,
    },
    inputContainer:{
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 18,
    },
    input:{ 
        
        minWidth: 78,
        fontSize: 22,
        textAlign: "center",
    },
    buttonContainer:{
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-around",
        marginTop: 20,
    },
    confirmedContainer:{
            width: "80%",
            height: 180,
            justifyContent: "space-around",
            alignItems: "center",
            marginVertical: 15,

    },
    confirmedTitle:{
        fontSize: 15,
    },
    confirmedNumber:{
        fontSize: 20,
        fontWeight: "bold",
    },
});