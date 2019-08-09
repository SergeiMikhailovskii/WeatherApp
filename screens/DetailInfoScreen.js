import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('itemTitle', 'Title'),
  });

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('itemTitle', 'Title');
    return (
      <View styles={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
