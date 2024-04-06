import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AlbumScreen from "../screens/AlbumScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailScreen from "../screens/DetailScreen";
import MyTheme from "../theme";
import albumData from "../json/albums.json"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            {/* 設定要跳轉的頁面並寫成一個函式 */}
            {/* <StackNavigatior /> */}
            <MyDrawer />
        </NavigationContainer>
    );
}

const MyDrawer = () => {
    const { colors } = useTheme();
    return (
        <Drawer.Navigator initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: colors.primary100,
                drawerActiveTintColor: colors.primary700,
                drawerInactiveBackgroundColor: colors.light500,
                drawerStyle: { width: 250 },
                drawerLabelStyle: { fontSize: 18, fontWeight: '400' }
            }}

        >

            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    drawerLabel: "Home",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }
                }
            />
            <Drawer.Screen
                name="SettingStack"
                component={SettingStack}
                options={{
                    headerShown: false,
                    drawerLabel: "Settings",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    )
                }
                }

            />
        </Drawer.Navigator>
    )
}

const MyTab = () => {
    // 設定顏色
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            // 將stack函數的名稱放進來就可以使用功能
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: colors.primary700,
                tabBarInactiveTintColor: colors.light500
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const SettingStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Setting"
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}


const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={AlbumScreen}
                options={{
                    title: "Home",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
    );

};
export default Navigation;