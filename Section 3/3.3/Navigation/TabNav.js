import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";

import { createBottomTabNavigator } from "react-navigation";

export const TabNav =createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: DetailScreen
    }
  }
);