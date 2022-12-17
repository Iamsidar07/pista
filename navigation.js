import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import GetStartedScreen from './screens/GetStartedScreen';


const Stack = createStackNavigator();

const screenOptions={
    headerShown:false,
}

const SignedInStack = () => {
    return (
        < NavigationContainer >
            <Stack.Navigator screenOptions={screenOptions} initialRouteName='HomeScreen'>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default SignedInStack