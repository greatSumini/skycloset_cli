import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';

import SplashScreen from './src/screens/SplashScreen';

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