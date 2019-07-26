import SignUpScreen from "../Screens/SignUpScreen";
import { HookScreen } from '../Screens/HookScreen';
import { TabNav } from './TabNav';


import { createStackNavigator } from "react-navigation";

export const StackNav =createStackNavigator(
  {
    Home: {
      screen: TabNav
    },
    SignUp: {
      screen: SignUpScreen
    },
    Hook: {
      screen: HookScreen
    }
  },
  {
    initialRouteName: "SignUp",
    headerMode: "none"
  }
);