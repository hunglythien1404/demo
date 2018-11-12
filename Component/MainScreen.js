import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {
  BackHandler,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './../Styles';
import Setting from './Setting';
import {MainTabNavigation} from './../navigation/TabNavigation';


class MainScreen extends React.Component {
  //setting style for header
  static navigationOptions =  ({navigation}) => (
    {
      title: "Main Screen",
      headerLeft: <Icon.Button
        name="md-person"
        style={styles.menuIconLeft}
        onPress={() => {
          navigation.navigate(
            "UserInfo",
            {id: navigation.state.params.id},
          );
        }}
        />,
      headerRight: <Icon.Button
        name="md-settings"
        style={styles.menuIconRight}
        onPress={() => {
          navigation.navigate("Setting",);
        }}
        />,
      headerTitleStyle: {
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#04a5cf",
      }
    }
  );

  constructor(props) {
    super(props);
    this.backHandler = null;
  }

  //Custom hardware back button handlers
  componentWillMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  //remove hardware back button handlers
  componentWillUnmount() {
    this.backHandler.remove();
  }

  //show an alert when user click back button on main screen
  handleBackPress = () => {
    Alert.alert(
      "Log out", //title
      "Do you want to log out ?", //content
      [
        {text: "OK", onPress: () => {
          BackHandler.removeEventListener("hardwareBackPress", () => {return true;});
          this.props.navigation.navigate("Log");
        }},
        {text: "No", onPress: () => {return true}},
      ],
    );
    return true;
  };

  render() {
    return (
      <MainTabNavigation/>
    );
  }
}

export default MainScreen;
