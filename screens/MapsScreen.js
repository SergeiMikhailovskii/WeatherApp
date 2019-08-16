import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function MapsScreen() {
  return (
    <MapView style={{ flex: 1 }} />
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
