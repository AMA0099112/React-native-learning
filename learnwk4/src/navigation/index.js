import React from "react";


import AlbumScreen from "../screens/AlbumScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            {/* 設定要跳轉的頁面並寫成一個函式 */}
            <StackNavigatior />
        </NavigationContainer>
    );
}

const StackNavigatior = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={AlbumScreen}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
    );

}

export default Navigation;