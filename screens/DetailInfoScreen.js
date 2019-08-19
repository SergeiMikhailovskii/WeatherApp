import React, { Component } from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { detailInfoRequest } from '../app/actions/fetching_actions';
import { Button } from 'react-native-elements';
import SideMenu from 'react-native-side-menu/index';


export class DetailInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('itemTitle', 'Title'),
  });

  constructor(props) {
    super(props);
    const { navigation, getDetailInfo } = this.props;
    this.state = { title: navigation.getParam('itemTitle', 'Title'), isOpen: false };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
    const { title } = this.state;
    getDetailInfo(title);
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { detailCityInfo } = this.props;
    const tempList = [];
    const dateList = [];

    const MenuComponent = (
      <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}>
        <Button onPress={() => { Alert.alert('Clicked'); }}
                title="Test Button"/>
      </View>
    );

    if (detailCityInfo != null) {
      for (let i = 0; i < 20; i += 1) {
        tempList.push(detailCityInfo.list[i].main.temp);
        dateList.push(detailCityInfo.list[i].dt_txt);
      }
    }

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 110;


    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SideMenu
          isOpen={this.state.isOpen}
          menu={MenuComponent}
        >
        {detailCityInfo ? (

          <View style={{ flex: 1 }}>
            <LinearGradient
              colors={['#1263f7', '#2c3e50']}
              start={{ x: 0, y: 0 }}
              style={styles.container}
            >
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
                height: 300,
                padding: 20,
                flexDirection: 'row',
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
                    formatLabel={(value, index) => dateList[index]}
                    contentInset={{
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
            </LinearGradient>

          </View>

        ) : null
        }
        </SideMenu>
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
