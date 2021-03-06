import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anime from './Anime';
import Mufaj from './Mufaj';
import Megjelenes from './Megjelenes';
import Szavazas from './Szavazas';
import Seged from "./Seged";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function Animeklap({ navigation }) {
  return (
    <Anime  navigacio={navigation}/>
  );
}

function Szavazaslap({ navigation }) {
  return (
    <Szavazas/>
  );
}

function Mufajlap({ navigation }) {
  return (
    <Mufaj/>
  );
}

function Megjeleneslap({ navigation }) {
  return (
    <Megjelenes/>
  );
}

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function Root({ navigation }) {
  return (

<Drawer.Navigator initialRouteName="Home">
    
    <Drawer.Screen name="Animék" component={Animeklap} />
    <Drawer.Screen name="Műfaj" component={Mufajlap} />
    <Drawer.Screen name="Megjelenés" component={Megjeleneslap} />
    <Drawer.Screen name="Szavazás" component={Szavazaslap} />
  </Drawer.Navigator>

  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen
  name="Root"
  component={Root}
  options={{ headerShown: false }}
/>
<Stack.Screen name="Seged" component={Seged} />
</Stack.Navigator>
    </NavigationContainer>
  );
}


