import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../Screens/HomeScreen";
import NewsScreen_ from "../Screens/NewsScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
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
                    } else if (route.name === "NewsScreen_") {

                        iconName = focused ? "md-add-circle" : "md-add-circle";
                        size = focused ? 25 : 25;
                        color = focused ? "#191970" : "#0000FF";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="NewsScreen_" component={NewsScreen_} />
        </Tab.Navigator>
    );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
