import { Dimensions, StyleSheet } from "react-native";

import colors from "../../constants/colors";

const {height, width}=Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.header,
        height: height*0.13,
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