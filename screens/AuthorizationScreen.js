import React, { Component } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import * as Facebook from 'expo-facebook';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

  onPressFacebook = async () => {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync('886698401722951', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        const { navigation } = this.props;
        navigation.navigate('Current');
      } else {
        Alert.alert('Cancelled!');
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  };

  render() {
    const { login, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.authorization}>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="Enter login"
                  onChangeText={login => this.setState({ login })}
                  value={login}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.textInput}>
                <TextInput
                  placeholder="Enter password"
                  onChangeText={password => this.setState({ password })}
                  value={password}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                style={{ paddingTop: 10 }}
                onPress={this.onPressSignIn}
              >
                <View>
                  <Text>Sign In</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ paddingTop: 10 }}
                onPress={this.onPressFacebook}
              >
                <View>
                  <Text>Facebook Log In</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

AuthorizationScreen.navigationOptions = {
  title: 'Authorization',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  authorization: {
    fontSize: 14,
  },
  textInput: {
    height: 50,
    paddingTop: 20,
    paddingStart: 10,
    paddingEnd: 10,
    marginStart: 10,
    marginEnd: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
});
