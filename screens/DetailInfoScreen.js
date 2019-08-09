import React, { Component } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { detailInfoRequest } from '../app/actions/fetching_actions';


class DetailInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('itemTitle', 'Title'),
  });

  constructor(props) {
    super(props);
    this.state = { title: this.props.navigation.getParam('itemTitle', 'Title') };
    const { getDetailInfo } = this.props;
    getDetailInfo(this.state.title);
  }

  render() {
    const { detailCityInfo } = this.props;
    if (detailCityInfo != null) {
      Alert.alert(detailCityInfo.city.name);
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {detailCityInfo
            ? (
              <View style={styles.textInfo}>
                <Text>{detailCityInfo.city.name}</Text>
              </View>
            )
            : null
          }
          {detailCityInfo
            ? (
              <View style={styles.textInfo}>
                <Text>{detailCityInfo.city.country}</Text>
              </View>
            )
            : null
          }
          {detailCityInfo
            ? (
              <View style={styles.textInfo}>
                <Text>{detailCityInfo.city.population}</Text>
              </View>
            )
            : null
          }
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  textInfo: {
    paddingTop: 10,
    paddingStart: 10,
  }
});

const mapStateToProps = (state) => {
  const { detailCityInfo, isLoading, isError } = state.fetchingReducer;
  return { detailCityInfo, isLoading, isError };
};

export default connect(mapStateToProps, {
  getDetailInfo: detailInfoRequest,
})(DetailInfoScreen);
