import React from 'react';
import {LogTabNavigate} from './../navigation/TabNavigation';

class LogScreen extends React.Component {
  //Take user's ID and switch to MainScreen
  handleSubmit = (id) => {
    this.props.navigation.navigate(
      "Main",
      {id: id},
    );
  };

  render() {
    return (
      <LogTabNavigate screenProps={
        {
          onHandleSubmit: this.handleSubmit
        }
      }
      />
    );
  }
}

export default LogScreen;