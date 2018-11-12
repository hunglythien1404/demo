import React from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import Info from '../Info';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class ContainerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.backHandler = null;
  }

  //Custom hardware back button handlers
  componentWillMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  //Get user data by ID
  componentDidMount() {
    this.props.getUserInfo(this.props.navigation.state.params.id);
  }

  //remove hardware back button handlers
  componentWillUnmount() {
    this.backHandler.remove();
  }

  //switch to Main screen when user press hardware back button
  handleBackPress = () => {
    this.props.navigation.navigate("Main");
    return true;
  };

  //switch to LogScreen when user click Log out
  handleLogout = () => {
    this.props.navigation.navigate("Log");
  };

  handleDel = () => {
    this.props.delUser(this.props.navigation.state.params.id);
    this.props.navigation.navigate("Log");
  };

  handleEdit = (username, password) => {
    let newUserInfo = {
      email: username,
      password: password,
    };
    this.props.editUser(this.props.navigation.state.params.id, newUserInfo);
    ToastAndroid.show("Update thành công", ToastAndroid.SHORT);
  };

  render() {
    return (
      <Info
        userInfo={this.props.userInfo}
        handleLogout={this.handleLogout}
        handleDel={this.handleDel}
        handleEdit={this.handleEdit}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getUserInfo: (id) => {
      dispatch(actions.getUserInfo(id));
    },
    delUser: (id) => {
      dispatch(actions.delUser(id));
    },
    editUser: (id, userInfo) => {
      dispatch(actions.editUser(id, userInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (ContainerInfo);