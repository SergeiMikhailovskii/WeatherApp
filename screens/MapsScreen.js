import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function MapsScreen() {
  return (
    <ScrollView style={styles.container} />
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
