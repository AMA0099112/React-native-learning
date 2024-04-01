import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Header = ({ title }) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textstyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});


export default Header