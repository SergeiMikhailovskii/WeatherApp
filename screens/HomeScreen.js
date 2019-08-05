import React, { Component } from 'react';
import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', data: undefined };
    this.onPressSearch = this.onPressSearch.bind(this);
  }

  componentDidMount() {
    this.getCitiesListFromApiAsync();
  }

  onPressSearch = async () => {
    const cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&apikey=8df903ce56f6d18245e72f380beb297d`;
    const fetchData = await fetch(cityUrl).then();
    const data = await fetchData.json();
    this.setState({ data });
    Alert.alert(data.name);
  };



   getCitiesListFromApiAsync = async () => {
     const fetchData = await fetch('http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=8df903ce56f6d18245e72f380beb297d').then();
     const data = await fetchData.json();

     if (data.cod !== '200') {
       Alert.alert('Loading failed');
     } else {
       this.setState({ data });
     }
   };

   render() {
     const { data } = this.state;
     return (
       <View style={styles.container}>
         <View style={styles.searchContainer}>

           <TextInput
             placeholder="Type something!"
             onChangeText={text => this.setState({ text })}
             value={this.state.text}
           />

           <TouchableOpacity
             onPress={this.onPressSearch}
           >

             <View>

               <Text>Search</Text>

             </View>

           </TouchableOpacity>
         </View>


         <View style={styles.container}>
           {data && data.list
             ? (
               <FlatList
                 data={data.list}
                 renderItem={({ item }) => (
                   <ListItem
                     roundAvatar
                     title={item.name}
                     subtitle={item.weather[0].description}
                     leftAvatar={{
                       source: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` && { uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` },
                     }}
                   />
                 )

                      }
               />
             )
             : null
                }


         </View>
       </View>
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
    paddingTop: 40,
    paddingStart: 10,
    backgroundColor: '#ff0000',
    height: 100,
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
