import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


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
            <MaterialIcons
              name="clear"
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
