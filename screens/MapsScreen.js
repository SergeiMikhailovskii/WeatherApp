import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function MapsScreen() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 53.8878349,
        longitude: 27.5428332,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      }}
    />
  );
}

MapsScreen.navigationOptions = {
  title: 'Maps',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
