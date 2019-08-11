import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { LineChart, Path, Grid } from 'react-native-svg-charts'
import 'react-native-svg';
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
    let tempList = [];

    if (detailCityInfo != null) {
      for (var i = 0; i < detailCityInfo.list.length; i++) {
        tempList.push(detailCityInfo.list[i].main.temp);
      }
      console.log(tempList, "TEMP LIST");
    }

    const Shadow = ({ line }) => (
      <Path
        key={'shadow'}
        y={2}
        d={line}
        fill={'none'}
        strokeWidth={4}
        stroke={'rgba(134, 65, 244, 0.2)'}
      />
    )

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
          {detailCityInfo
            ? (
              <View style={{ height: 200 }}>
                <LineChart
                  style={{ height: 200 }}
                  data={tempList}
                  svg={{ stroke: 'rgb(134, 65, 244)' }}
                  contentInset={{ top: 20, bottom: 20 }}
                >
                  <Grid />
                  <Shadow />
                </LineChart>
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
