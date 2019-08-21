import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import DetailsScreen from '../screens/DetailInfoScreen';


const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MainTabNavigator
    },
    Details: {
      screen: DetailsScreen
    }
  }, {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(DrawerNavigator);
