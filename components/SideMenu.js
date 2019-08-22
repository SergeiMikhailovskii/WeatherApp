import React, { Component } from 'react';
import { SafeAreaView, Switch, View } from 'react-native';
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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          {switchPosition
            ? <Text>Switch to Celsius</Text>
            : <Text>Switch to Kelvin</Text>
          }
          <Switch
            style={{ marginTop: 20 }}
            onValueChange={this.toggleSwitch}
            value={switchPosition}
          />
        </View>
      </SafeAreaView>
    );
  }
}
