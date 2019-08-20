import React from 'react';
import { Platform, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Badge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MapsScreen from '../screens/MapsScreen';
import DetailsScreen from '../screens/DetailInfoScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Current = createStackNavigator(
  {
    Component: HomeScreen,
    Details: {
      name: 'Details screen',
      screen: DetailsScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
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
    tabBarIcon: () => (
      <View>
        <Badge
          status="success"
          value="99"
          containerStyle={{ position: 'absolute', top: -4, left: 20 }}
        />
        <Ionicons name={Platform.OS === 'ios' ? 'ios-cloud' : 'md-cloud'} size={25} color="red" />
      </View>
    ),
    tabBarLabel: 'Weather',
  };
};

Current.path = '';

const Maps = createStackNavigator(
  {
    Maps: MapsScreen,
  },
  config
);

Maps.navigationOptions = {
  tabBarLabel: 'Maps',
  tabBarIcon: () => (
    <Ionicons name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} size={25} color="red" />
  ),
};

Maps.path = '';

const tabNavigator = createBottomTabNavigator({
  Current,
  Maps,
});

tabNavigator.path = '';

export default tabNavigator;
