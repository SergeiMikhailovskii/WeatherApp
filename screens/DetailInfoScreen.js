import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import 'react-native-svg';
import { detailInfoRequest } from '../app/actions/fetching_actions';


class DetailInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('itemTitle', 'Title'),
  });

  constructor(props) {
    super(props);
    const { navigation, getDetailInfo } = this.props;
    this.state = { title: navigation.getParam('itemTitle', 'Title') };
    const { title } = this.state;
    getDetailInfo(title);
  }

  render() {
    const { detailCityInfo } = this.props;
    const tempList = [];

    if (detailCityInfo != null) {
      for (let i = 0; i < detailCityInfo.list.length; i += 1) {
        tempList.push(detailCityInfo.list[i].main.temp);
      }
      console.log(tempList, 'TEMP LIST');
    }

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;


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
              <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                <YAxis
                  data={tempList}
                  style={{ marginBottom: xAxisHeight }}
                  contentInset={verticalContentInset}
                  svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <LineChart
                    style={{ flex: 1 }}
                    data={tempList}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                  >
                    <Grid />
                  </LineChart>
                  <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={tempList}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={axesSvg}
                  />
                </View>
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
