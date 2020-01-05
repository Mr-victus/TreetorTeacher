import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator,createAppContainer } 
  from 'react-navigation';
  import {createStackNavigator} from 'react-navigation-stack'
import BottomTabNavigator from './BottomTabNavigator'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup';



const Main=createStackNavigator({
  Login:{screen:Login},
  Signup:{screen:Signup}
})


const SwitchNavigation =createSwitchNavigator({
    Login:Main,
    BottomTabNavigator:BottomTabNavigator
})

const AppContainer = createAppContainer(SwitchNavigation);
export default AppContainer;
