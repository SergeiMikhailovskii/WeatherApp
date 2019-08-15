import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} />
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
