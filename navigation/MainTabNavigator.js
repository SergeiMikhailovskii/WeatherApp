import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Current = createStackNavigator(
  {
    Component: HomeScreen,
  },
  config
);

Current.navigationOptions = {
  tabBarLabel: 'Current',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cloud${focused ? '' : '-outline'}`
          : 'md-cloud'
      }
    />
  ),
};

Current.path = '';

const Favorites = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

Favorites.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} />
  ),
};

Favorites.path = '';

const tabNavigator = createBottomTabNavigator({
  Current,
  Favorites,
});

tabNavigator.path = '';

export default tabNavigator;
