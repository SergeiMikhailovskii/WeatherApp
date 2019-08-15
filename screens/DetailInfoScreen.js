import React, { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
      <SafeAreaView style={{ flex: 1 }}>
        {detailCityInfo ? (
          <View style={styles.container}>
            <View style={styles.textInfo}>
              <Text style={{
                fontSize: 25,
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              >
                {detailCityInfo.city.name}
              </Text>
            </View>
            <View style={styles.textInfo}>
              <Text style={{
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              >
                {detailCityInfo.city.country}
              </Text>
            </View>
            <View style={styles.textInfo}>
              <Text style={{
                fontSize: 50,
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              >
                {tempList[0]}
              </Text>
            </View>
            <View style={styles.textInfo}>
              <Text style={{
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              >
                Population:
                {' '}
                {detailCityInfo.city.population}
              </Text>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <Image
                source={{ uri: `http://openweathermap.org/img/wn/${detailCityInfo.list[0].weather[0].icon}@2x.png` }}
              />
            </View>
            <View style={{
              height: 200,
              padding: 20,
              flexDirection: 'row'
            }}
            >
              <YAxis
                data={tempList}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
              />
              <View style={{
                flex: 1,
                marginLeft: 10
              }}
              >
                <LineChart
                  style={{ flex: 1 }}
                  data={tempList}
                  contentInset={verticalContentInset}
                  svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                  <Grid />
                </LineChart>
                <XAxis
                  style={{
                    marginHorizontal: -10,
                    height: xAxisHeight
                  }}
                  data={tempList}
                  formatLabel={(value, index) => index}
                  contentInset={{
                    left: 10,
                    right: 10
                  }}
                  svg={{
                    fill: 'black',
                    fontSize: 8,
                    fontWeight: 'bold',
                    rotation: 90,
                    originY: 30,
                    y: 5,
                  }}
                />
              </View>
            </View>
          </View>
        ) : null
        }
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  textInfo: {
    paddingBottom: 10,
  }
});

const mapStateToProps = (state) => {
  const { detailCityInfo, isLoading, isError } = state.fetchingReducer;
  return { detailCityInfo, isLoading, isError };
};

export default connect(mapStateToProps, {
  getDetailInfo: detailInfoRequest,
})(DetailInfoScreen);
