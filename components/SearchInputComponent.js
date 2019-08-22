import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class SearchInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }

  clearText = () => {
    this._textInput.setNativeProps({ text: '' });
  };

  render() {
    const { cityName } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Input
          ref={component => this._textInput = component}
          placeholder="Enter city"
          onChangeText={cityName => this.setState({ cityName })}
          value={cityName}
        />
        <Button
          buttonStyle={{ width: 40, height: 40, backgroundColor: 'red' }}
          onPress={this.clearText}
          icon={(
            <MaterialIcons
              name="delete"
              size={30}
              color="black"
            />
          )}
        />
      </View>
    );
  }
}

export default SearchInputComponent;
