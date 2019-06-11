import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/containers/HomeScreen/HomeScreen';
import SplashScreen from './src/containers/SplashScreen/SplashScreen';

const AppStack = createSwitchNavigator({
  Home: HomeScreen
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