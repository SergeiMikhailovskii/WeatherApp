import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import DetailsScreen from '../screens/DetailInfoScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Current = createStackNavigator(
  {
    Component: HomeScreen,
    Details: DetailsScreen,
  },
  config
);

Current.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
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
};

Favorites.path = '';

const tabNavigator = createBottomTabNavigator({
  Current,
  Favorites,
});

tabNavigator.path = '';

export default tabNavigator;
