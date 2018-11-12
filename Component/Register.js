import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, ScrollView
} from 'react-native';
import {styles} from '../Styles';
import Logo from './Logo';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: "",
      password: "",
      confirm: "",
    });
  }

  onHandleRegister = () => {
    let tmp = {
      username: this.state.username,
      password: this.state.password,
      confirm: this.state.confirm,
    };
    this.props.handleRegister(tmp);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback behavior="padding" onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Logo/>
            <View style={styles.infoContent}>
              <Text style={styles.iptTitle} onPress={this.handlePress}>Username:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => this.refs.password.focus()}
                value={this.state.username}
                onChangeText={(username) => {
                  this.setState({
                    username,
                  });
                }}
                />
              <Text style={styles.iptTitle}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={true}
                ref="password"
                onSubmitEditing={() => this.refs.confirm.focus()}
                value={this.state.password}
                onChangeText={(password) => {
                  this.setState({
                    password,
                  });
                }}
                />
              <Text style={styles.iptTitle}>Confirm:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your confirm password"
                secureTextEntry={true}
                ref="confirm"
                value={this.state.confirm}
                onChangeText={(confirm) => {
                  this.setState({
                    confirm,
                  });
                }}
                />
              <TouchableOpacity
                style={styles.btn}
                onPress={this.onHandleRegister}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default Register;