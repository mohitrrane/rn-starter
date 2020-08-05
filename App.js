import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#7ab658'},
      headerTitleStyle: {
        fontSize: 30, 
        color: '#444', 
        fontWeight: 'bold'
      }
    }
  }
);

export default createAppContainer(navigator);
