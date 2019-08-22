import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import MainTabNavigator from './MainTabNavigator';
import MapsScreen from '../screens/MapsScreen';
import SideMenu from '../components/SideMenu';


const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MainTabNavigator
    },
    Maps: {
      screen: MapsScreen
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
  }
);

export default createAppContainer(DrawerNavigator);
