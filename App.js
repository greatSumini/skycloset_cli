import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';

import SignInScreen from './src/screens/SignInScreen';

import SplashScreen from './src/screens/SplashScreen';

const AuthStack = createStackNavigator({
  SignIn: SignInScreen 
});

const AppStack = createSwitchNavigator({
  Home: HomeScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Splash',
  }
));