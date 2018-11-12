import {createBottomTabNavigator} from "react-navigation";
import Tab1 from "../Component/Tab1";
import Tab2 from "../Component/Tab2";
import Tab3 from "../Component/Tab3";
import ContainerLogin from '../Component/containers/ContainerLogin';
import ContainerRegister from '../Component/containers/ContainerRegister';

export const LogTabNavigate = createBottomTabNavigator(
  {
    "SIGN IN": ContainerLogin,
    "SIGN UP": ContainerRegister,
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: "#04a5cf",
        borderColor: "red"
      },
      labelStyle: {
        fontSize: 18,
      },
      activeTintColor: "white",
      inactiveTintColor: "gray",
    }
  }
);

export const MainTabNavigation = createBottomTabNavigator(
  {
    "Tab 1": Tab1,
    "Tab 2": Tab2,
    "Tab 3": Tab3,
  }
);