import React from 'react';
import {ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './../../actions/actRegister';
import Register from './../Register';

class ContainerRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRegister = async (info) => {
    if (info.username === "" || info.password === "") {
      ToastAndroid.show("Email hoặc password không được rỗng", ToastAndroid.SHORT);
    } else {
      let tmp = await this.props.checkExist(info.username);
      if (tmp) {
        if (info.password !== info.confirm) {
          ToastAndroid.show("Xác nhận mật khẩu không đúng", ToastAndroid.SHORT);
        } else {
          let infoRegister = {
            username: info.username,
            password: info.password,
          };
          this.props.registerAcc(infoRegister);
          this.props.navigation.navigate("SIGN IN");
        }
      } else {
        ToastAndroid.show("Tài khoản đã tồn tại", ToastAndroid.SHORT);
      }
    }
  };

  render() {
    return (
      <Register
        handleRegister={this.handleRegister}
        />
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    checkExist: (username) => {
      return dispatch(actions.checkExist(username));
    },
    registerAcc: (info) => {
      return dispatch(actions.registerAcc(info));
    },
  };
};

export default connect(null, mapDispatchToProps) (ContainerRegister);