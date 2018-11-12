import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, ScrollView
} from 'react-native';
import {styles} from './../Styles';
import Logo from './Logo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: "",
      password: "",
    });
  }

  onHandleSubmit = () => {
    let tmp = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleSubmit(tmp);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback behavior="padding" onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Logo/>
            <View style={styles.infoContent}>
              <Text style={styles.iptTitle}>Username:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter username or email"
                keyboardType="email-address"
                returnKeyType="next"
                value={this.state.username}
                onChangeText={(username) => {
                  this.setState({
                    username,
                  });
                }}
                onSubmitEditing={() => this.refs.password.focus()}
                />
              <Text style={styles.iptTitle}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                type="password" ref="password"
                value={this.state.password}
                onChangeText={(password) => {
                  this.setState({
                    password,
                  });
                }}
                secureTextEntry={true}
                />
              <TouchableOpacity
                style={styles.btn}
                ref="btnLogin"
                onPress={this.onHandleSubmit}>
                <Text style={styles.btnText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default Login;