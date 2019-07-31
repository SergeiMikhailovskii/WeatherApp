import React, {Component} from 'react';
import {
    Alert,
    FlatList,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        this._onPressSearch = this._onPressSearch.bind(this);
    }

    _onPressSearch() {

        Alert.alert(this.state.text)

    }

    getCitiesListFromApiAsync() {
        return fetch("https://samples.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=b6907d289e10d714a6e88b30761fae22.json")
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.list;
            })
            .catch((error) => {
                Alert.alert("Error while loading: " + error);
            })
    }

    render() {
        return (<View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.contentContainer}>
                <View style={styles.searchContainer}>

                    <TextInput
                        placeholder="Type something!"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}/>

                </View>

                <TouchableOpacity
                    onPress={this._onPressSearch}>
                    <View>

                        <Text>Search</Text>

                    </View>
                </TouchableOpacity>

                <View style={styles.container}>

                    <FlatList
                        data={this.getCitiesListFromApiAsync()}
                        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                    />

                </View>

            </ScrollView>


        </View>);
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

//Styles
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
        backgroundColor: '#ff0000',
        flex: 1,
    },
    listContainer: {
        flex: 4,
        backgroundColor: '#ffeb21',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
                shadowOffset: {width: 0, height: -3},
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
