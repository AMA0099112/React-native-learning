import { Center } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//props 參數 從json檔匯入
const Header = ({ title }) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textstyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "yellow",
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
        color: "red",
        fontWeight: "bold",
        textAlign: "center" //文字水平置中
    }
});


export default Header