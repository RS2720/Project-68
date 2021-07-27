import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

import FBScreen from './screens/fb';
import INSTAScreen from './screens/insta';

export default function App() {
  return (
   <AppContainer
   
   /> 
   
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FBScreen},
  Instagram:{screen:INSTAScreen}
})

const AppContainer = createAppContainer(TabNavigator)