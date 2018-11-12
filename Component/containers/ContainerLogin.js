import React from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './../../actions/actLogin';
import Login from './../Login';

class ContainerLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  //Custom hardware back button handlers
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  //Exit apps when user click hardware back button
  handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  handleSubmit = async (info) => {
    if (info.username === "" || info.password === "") {
      ToastAndroid.show("Email hoặc password không được rỗng", ToastAndroid.SHORT);
    } else {
      let tmp = await this.props.checkExist(info.username);
      if (tmp) {
        if (await this.props.checkPassword(tmp, info.password)) {
          this.props.screenProps.onHandleSubmit(tmp);
        } else {
          ToastAndroid.show("Mật khẩu không trùng khớp", ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show("Tài khoản không tồn tại", ToastAndroid.SHORT);
      }
    }
  };

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    checkExist: (username) => {
      return dispatch(actions.checkExist(username));
    },
    checkPassword: (id, password) => {
      return dispatch(actions.checkPassword(id, password));
    },
  };
};

export default connect(null, mapDispatchToProps) (ContainerLogin);