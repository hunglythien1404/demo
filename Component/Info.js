import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../Styles';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
    };
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.userInfo.id,
      username: nextProps.userInfo.username,
      password: nextProps.userInfo.password,
    });
  }

  render() {
    return (
      <View style={styles.userInfo}>
        <Icon name="md-person" size={100}/>
        <View style={{marginBottom: 15}}>
          <View style={{flexDirection: "row"}}>
            <Text>ID: </Text>
            <Text>{this.state.id}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "center"}}>
            <Text>Username: </Text>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => {
                this.setState({
                  username,
                });
              }}
              />
          </View>
          <View style={{flexDirection: "row"}}>
            <Text>Password: </Text>
            <TextInput
              value={this.state.password}
              onChangeText={(password) => {
                this.setState({
                  password,
                });
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.props.handleLogout}>
          <Text>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.props.handleDel}>
          <Text>Xóa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.handleEdit(this.state.username, this.state.password)}>
          <Text>Sửa</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Info;