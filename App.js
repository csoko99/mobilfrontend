import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anime from './Anime';
import Mufaj from './Mufaj'
import Megjelenes from './Megjelenes'

function Animeklap({ navigation }) {
  return (
    <Anime/>
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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Animék" component={Animeklap} />
        <Drawer.Screen name="Műfaj" component={Mufajlap} />
        <Drawer.Screen name="Megjelenés" component={Megjeleneslap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
