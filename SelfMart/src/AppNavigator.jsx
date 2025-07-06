import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/Splash';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Search from './bottomScreen/Search';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <Stack.Navigator>
                <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
                <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
                <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp} />
                <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
                <Stack.Screen name="Search" options={{headerShown:false}} component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator