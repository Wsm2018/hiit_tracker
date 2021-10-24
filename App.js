import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home"
import Persona from "./Persona"
import Technologies from "./Technologies"
import Sketches from "./Sketches"
import Comparison from "./Comparison"

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Persona" component={Persona} />
        <Drawer.Screen name="Technologies" component={Technologies} />
        <Drawer.Screen name="Sketches" component={Sketches} />
        <Drawer.Screen name="Comparison" component={Comparison} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

