import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class AuthorizationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };
    this.onPressSignIn = this.onPressSignIn.bind(this);
  }

  onPressSignIn = () => {
    const { login, password } = this.state;
    if (login !== '' && password !== '') {
      console.log(`${login} ${password}`);
      const { navigation } = this.props;
      navigation.navigate('Current');
    } else {
      Alert.alert('Fill the fields!');
    }
  };

  render() {
    const { login, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.authorization}>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Enter login"
              onChangeText={login => this.setState({ login })}
              value={login}
            />
          </View>

          <View style={styles.textInput}>
            <TextInput
              placeholder="Enter password"
              onChangeText={password => this.setState({ password })}
              value={password}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            onPress={this.onPressSignIn}
          >

            <View>

              <Text>Sign In</Text>

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
    paddingTop: 15,
    fontSize: 14,
  },
  textInput: {
    height: 50,
    paddingTop: 20,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
});
