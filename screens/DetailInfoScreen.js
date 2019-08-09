import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
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
    console.log(detailCityInfo, "DETAIL INFO");
    if (detailCityInfo != null){
      Alert.alert(detailCityInfo.city.name);
    }
    return (
      <View styles={styles.container} />
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

const mapStateToProps = (state) => {
  const { detailCityInfo, isLoading, isError } = state.fetchingReducer;
  return { detailCityInfo, isLoading, isError };
};

export default connect(mapStateToProps, {
  getDetailInfo: detailInfoRequest,
})(DetailInfoScreen);
