import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LinksScreen() {
  return (
    <View styles={styles.container}>
      <Text>New screen!</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'New screen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
