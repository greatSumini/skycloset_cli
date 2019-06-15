import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/containers/HomeScreen/HomeScreen';
import SplashScreen from './src/containers/SplashScreen/SplashScreen';
import GeoScreen from './src/containers/GeoScreen/GeoScreen'

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Geo : GeoScreen,
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
  }
));