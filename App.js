import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from './src/containers/HomeScreen/HomeScreen'
import SplashScreen from './src/containers/SplashScreen/SplashScreen'
import GeoScreen from './src/containers/GeoScreen/GeoScreen'
//import DonateScreen from './src/containers/DonateScreen/DonateScreen'

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Geo : GeoScreen,
  //Donate : DonateScreen,
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