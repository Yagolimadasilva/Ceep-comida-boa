import React from 'react';
import { View, Text, Button,
StyleSheet} from 'react-native'

export  default function HomeScreen({
Navigation })
 return (
   
 )
'./Secreen/Homescrren';

import SecondaryScreen from
'./Screens/SecondaryScreen';

import CafeScreen from
'./Screens/CafeScreen';

import BoloScreen from
'./Screens/BoloScreen';

import PaoScreen from
'./Screens/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    Stack.Navigator initialRouteName="Home"
    <Stack.Screen name="Home" component=
    {HomeScreen} Optnios={{title:
    'Bem-vindo!'}} />

    <Stack.Screen name="Secondary"
    component={SecondaryScreen} Optnios=
    {{ title : ' Ir para Opções Deliciosas'}} />

    <Stack.Screen name="Cafe" component=
    {CafeScreen} Optnios={{title:
    'Nosso Café '}} />

    <Stack.Screen name="Bolo" component=
    {BoloScreen}  Optnios=
    {{ title: 'Bolo de chocolate'}} />
    
 <Stack.Screen name="Pao" component=
 {PaoScreen} Optnios={{title: 'Pao caseiro'}}/>

<Stack.Navigaton/>
<NavigationContainer>




