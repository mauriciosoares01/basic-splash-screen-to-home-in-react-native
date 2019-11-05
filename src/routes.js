import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/Home';

const SplashStack = createStackNavigator({Splash: SplashScreen});
const MainStack = createStackNavigator({Home: HomeScreen});

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashStack,
      Main: MainStack,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
