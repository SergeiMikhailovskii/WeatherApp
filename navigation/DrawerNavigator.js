import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import MapsScreen from '../screens/MapsScreen';


const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MainTabNavigator
    },
    Maps: {
      screen: MapsScreen
    }
  }, {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(DrawerNavigator);
