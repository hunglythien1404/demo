import {createStackNavigator} from "react-navigation";
import Splash from "../Component/Splash";
import LogScreen from "../Component/LogScreen";
import MainScreen from "../Component/MainScreen";
import ContainerInfo from '../Component/containers/ContainerInfo';
import Setting from "../Component/Setting";

const Navigate = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      }
    },
    Log: {
      screen: LogScreen,
      navigationOptions: {
        header: null,
      }
    },
    Main: {
      screen: MainScreen,
    },
    "UserInfo": ContainerInfo,
    "Setting": Setting,
  }
);


export default Navigate;