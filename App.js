import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screen/HomeScreen';
import SecondaryScreen from './Screen/SecondaryScreen';
import CafeScreen from './Screen/CafeScreen';
import BoloScreen from './Screen/BoloScreen';
import PaoScreen from './Screen/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-Vindo!' }}/>
        <Stack.Screen name='Secondary' component={Secondary} options={{ title: 'Opções Deliciosas' }}/>
        <Stack.Screen name='Cafe' component={CafeScreen} options={{ title: 'Nosso Café' }}/>
        <Stack.Screen name='Bolo' component={Bolo} options={{ title: 'Bolo de Chocolate' }}/>
        <Stack.Screen name='Pao' component={'PaoScreen'} options={{ title: 'Pão Caseiro' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}