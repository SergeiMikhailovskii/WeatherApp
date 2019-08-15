import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthorizationScreen from '../screens/AuthorizationScreen';
import MainTabNavigator from './MainTabNavigator';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Authorization: AuthorizationScreen,
    Main: MainTabNavigator,
  })
);
