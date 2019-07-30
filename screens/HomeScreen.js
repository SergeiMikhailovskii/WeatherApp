import React, { Component } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, TextInput, View, FlatList, } from 'react-native';
import { Alert } from "react-native-web";


export class HomeScreen extends Component {
    constructor() {
        this.state = { text: '' };

    }

    render() {
        return (<View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.contentContainer}>
                <View style={styles.searchContainer}>

                    <TextInput placeHolder="Type something!" onChangeText={(text) => this.setState({ text })} value={this.state.text} />

                </View>

                <View>

                    <Button onPress={Alert.alert("Button pressed!")} title="Search" />

                </View>

                <View style={styles.listContainer}>

                    <Text>{this.state.text}</Text>

                </View>

                <View>

                    <FlatList
                        data={[
                            { key: "Test1" },
                            { key: "Test2" },
                            { key: "Test3" },
                        ]}
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
