// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login'
import Home from '../pages/Home'
import Amanha from '../pages/Amanha';



const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Amanha" component={Amanha} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;