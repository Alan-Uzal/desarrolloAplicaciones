import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    content:{
        width: "70%",
        height: 200,
        alignItems: "center",
        justifyContent: "space-around",
    },
    containerButton:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",

    },
    title:{
        fontSize: 16,
    }
    
});

