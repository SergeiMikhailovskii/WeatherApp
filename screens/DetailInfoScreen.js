import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class DetailInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('itemTitle', 'Title'),
  });

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('itemTitle', 'Title');
    return (
      <View styles={styles.container}>
        <Image
          style={{ paddingTop: 10, justifyContent: 'center', alignContent: 'center' }}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
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
