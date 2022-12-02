import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Menu = createDrawerNavigator();
const HomeScreen = require("./views/HomeScreen");
const DetalleScreen = require("./views/DetalleScreen");



export default function App() {


  return (
    <NavigationContainer>
      <Menu.Navigator screenOptions={{
        headerStyle:{
        backgroundColor:"#ECD06F"
        }
      }}>
        <Menu.Screen name='Home' component={HomeScreen}/>
        <Menu.Screen name='Detalle' component={DetalleScreen}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}
