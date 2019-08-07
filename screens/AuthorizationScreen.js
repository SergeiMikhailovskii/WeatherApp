import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class AuthorizationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };
    this.onPressSearch = this.onPressSearch.bind(this);
  }

  onPressSignIn = () => {
    Alert.alert(this.state.login + this.state.password)
  };

  render() {
    return (
      <View styles={styles.container}>
      <View styles={styles.authorization}>
        <TextInput
          placeholder="Enter login"
          onChangeText={login => this.setState({ login })}
            value={login}
        />

        <TextInput
          placeholder="Enter password"
          onChangeText={password => this.setState({ password })}
            value={password}
        />

        <TouchableOpacity
          onPress={this.onPressSignIn}
        >

          <View>

            <Text>Search</Text>

          </View>

        </TouchableOpacity>
        </View>
      </View>

    );
  }
}

AuthorizationScreen.navigationOptions = {
  title: 'Authorization',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  authorization: {
    height: 200,
    paddingTop: 50,
  },
});
