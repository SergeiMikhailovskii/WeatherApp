import React, { Component } from 'react';
import { SafeAreaView, Switch } from 'react-native';
import { Text } from 'react-native-elements';


export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchPosition: false,
    };
  }

  toggleSwitch = (value) => {
    this.setState({ switchPosition: value });
  };

  render() {
    const { switchPosition } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <Text>Switch to celsius/kelvin</Text>
        <Switch
          style={{ marginTop: 20 }}
          onValueChange={this.toggleSwitch}
          value={switchPosition}
        />
      </SafeAreaView>
    );
  }
}
