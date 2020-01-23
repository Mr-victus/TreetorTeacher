import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator,createAppContainer } 
  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
// import Signupsecond from '../Screens/Signup/Signupsecond'
import Home from '../Screens/Home/Home'
import BottomNavigation from '../Screens/BottomNavigation'
const Main=createStackNavigator({
  Login:{screen:Login},
  Signup:{screen:Signup},
  //Signupsecond:{screen:Signupsecond},
  //BottomNavigation:{screen:BottomNavigation}
  
})


const SwitchNavigation =createSwitchNavigator({
    Main:Main,
    BottomNavigation:BottomNavigation
})

const AppContainer = createAppContainer(SwitchNavigation);
export default AppContainer;
