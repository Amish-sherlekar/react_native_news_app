import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NextScreen from "../screens/NewsScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    width: "95%", height: "5%", margin: 20, padding: 2, borderRadius: 30, borderColor: "#fff", borderWidth: 1,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "HomeScreen") {

                        iconName = focused ? "ios-home" : "ios-home";
                        size = focused ? 25 : 25;
                        color = focused ? "#191970" : "#0000FF";
                    } else if (route.name === "NextScreen") {

                        iconName = focused ? "md-add-circle" : "md-add-circle";
                        size = focused ? 25 : 25;
                        color = focused ? "#191970" : "#0000FF";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="NextScreen" component={NextScreen} />
        </Tab.Navigator>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
