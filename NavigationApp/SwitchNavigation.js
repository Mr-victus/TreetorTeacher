import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator, createStackNavigator,createAppContainer } 
  from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator'
import Login from '../Screens/Login'




const SwitchNavigation =createSwitchNavigator({
    Login:Login,
    BottomTabNavigator:BottomTabNavigator
})

const AppContainer = createAppContainer(SwitchNavigation);
export default AppContainer;
