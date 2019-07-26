import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator  } from 'react-navigation'; 
import HomeScreen  from './Screens/HomeScreen';
import DetailScreen  from './Screens/DetailScreen';
import SignUpScreen from './Screens/SignUpScreen';


const RootNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
  },
    SignUp: {
      screen: SignUpScreen
  },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: 'SignUp',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}