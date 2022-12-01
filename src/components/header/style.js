import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.header,
        height: 100,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        color: colors.secondarytitle,
        fontSize: 22,
        fontWeight: "bold",
        
    }
});