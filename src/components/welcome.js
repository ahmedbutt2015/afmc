import React from 'react';
import {
    StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

var width = Dimensions.get('window').width;

export default class Welcome extends React.Component {
    render() {
        return (

            <ImageBackground
                source={require('../assets/back.png')}
                style={{width: '100%', height: '100%'}}>

            </ImageBackground>
        );
    }

    onLoginBtn() {
        Actions.login()
    }
    onRegisterBtn() {
        Actions.register()
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIn: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
        height: 60,
        backgroundColor: '#fff'
    },
    buttonUp: {
        marginLeft: 50,
        marginRight: 50,
        height: 60,
        borderColor: '#fff',
        borderWidth: 1
    },
    belowHeader: {
        height: 200,
        width: width,
        backgroundColor: '#1f49a1',
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        alignItems: 'center',
        marginTop: 10

    }
});
