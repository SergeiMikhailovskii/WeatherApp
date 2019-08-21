import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


class SearchInputComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Input
          containerStyle={{ flex: 6 }}
          placeholder="Enter city"
        />
        <Button
          buttonStyle={{ flex: 1 }}
          icon={(
            <Ionicons
              name="Entypo-cross"
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
