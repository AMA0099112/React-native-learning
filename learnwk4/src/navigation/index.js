import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AlbumScreen from "../screens/AlbumScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailScreen from "../screens/DetailScreen";

import albumData from "../json/albums.json"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            {/* 設定要跳轉的頁面並寫成一個函式 */}
            {/* <StackNavigatior /> */}
            <MyTab />
        </NavigationContainer>
    );
}

const HomeStack = () => {
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

};

const MyTab = () => {
    return (
        <Tab.Navigator
            // 將stack函數的名稱放進來就可以使用功能
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
            />
            <Tab.Screen
                name="Setting"
                component={SettingsScreen}
            />
        </Tab.Navigator>
    )
}

export default Navigation;