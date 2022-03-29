import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import SearchScreen from '../Screens/SearchScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})