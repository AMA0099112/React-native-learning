import React from "react";
import { StyleSheet, Text, View } from "react-native";

//props 參數 從json檔匯入
const Header = (props) => {
    const title = props.title
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textstyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "F8F8F8",
        justifyContent: "center",
        alignContent: "center",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        //Android Only
        elevation: 2
    },
    textstyle: {
        fontSize: 20,
    }
});


export default Header