import { Dimensions, StyleSheet } from "react-native";

import colors from "../../constants/colors";

const{heigh, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content:{
        width: width*0.8,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width: 200,
        height: 200,
    },
    
    
});