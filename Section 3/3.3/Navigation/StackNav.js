import SignUpScreen from "../Screens/SignUpScreen";
import { TabNav } from './TabNav';


import { createStackNavigator } from "react-navigation";

export const StackNav =createStackNavigator(
  {
    Home: {
      screen: TabNav
    },
    SignUp: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: "SignUp",
    headerMode: "none"
  }
);