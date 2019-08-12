import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { listOfCitiesRequest, searchCityRequest } from '../app/actions/fetching_actions';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.onPressSearch = this.onPressSearch.bind(this);
  }

  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  onPressSearch = async () => {
    const { getCityFromSearch } = this.props;
    const { text } = this.state;
    getCityFromSearch(text);
  };


  render() {
    const { list, text } = this.props;

    if (this.props.isError) {
      Alert.alert('Error while loading');
    }

    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>

          <TextInput
            placeholder="Type something!"
            onChangeText={text => this.setState({ text })}
            value={text}
          />

          <TouchableOpacity
            onPress={this.onPressSearch}
          >

            <View>

              <Text>Search</Text>

            </View>

          </TouchableOpacity>
        </View>

        {this.props.isLoading
          ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
              <ActivityIndicator animating={this.props.isLoading} size="large" color="#0000ff" />
            </View>
          )
          : null
}

        <View style={styles.container}>
          {list
            ? (
              <FlatList
                data={list}
                renderItem={({ item }) => (
                  <ListItem
                    onPress={() => {
                      const { navigation } = this.props;
                      navigation.navigate('Details', {
                        itemTitle: item.name,
                      });
                    }}
                    roundAvatar
                    title={item.name}
                    subtitle={item.weather[0].description}
                    leftAvatar={{
                      source: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` && { uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` },
                    }}
                  />
                )

                      }
                keyExtractor={(item, index) => index.toString()}
              />
            )
            : null
                }


        </View>
      </View>
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

// Styles
const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  searchContainer: {
    marginTop: 10,
    paddingStart: 10,
    backgroundColor: '#ff0000',
    height: 50,
    width: '100%',
  },
  listContainer: {
    flex: 4,
    backgroundColor: '#ffeb21',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffeb21',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const mapStateToProps = (state) => {
  const { list, isLoading, isError } = state.fetchingReducer;
  return { list, isLoading, isError };
};

export default connect(mapStateToProps, {
  getCities: listOfCitiesRequest,
  getCityFromSearch: searchCityRequest,
})(HomeScreen);
