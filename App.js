import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';

import SignInScreen from './src/screens/SignInScreen';

import SplashScreen from './src/screens/SplashScreen';

const AuthStack = createStackNavigator({
  SignIn: SignInScreen 
});

const AppStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  }
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