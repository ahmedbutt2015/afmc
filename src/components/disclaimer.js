import React from 'react';
import {
    CheckBox, StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar, Button, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { Ionicons } from '@expo/vector-icons';
var width = Dimensions.get('window').width;

export default class Disclaimer extends React.Component {
    state = {
        check1: false
    };
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };

    render() {
        return (
            <View><StatusBar backgroundColor="black" />

            <View style={styles.navBar}>
                <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                        Disclaimers
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity onPress={() => Actions.compute()}>

                    <Ionicons  name="md-arrow-forward" size={32} color="green"
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.leftContainer2}>
                <Text style={[styles.text, {textAlign: 'left',marginLeft: 15}]}>
                    NAG - AFMC Version 1.0
                </Text>
            </View>
            <View style={{paddingTop:10,paddingLeft:100,paddingRight:100,alignItems: 'center'}}>
                <Text style={{marginBottom:10}}>
                    This app is designed based on the specification and documents provided by the Naval Aviation Group, Squadron Standardisation Section.
                </Text>
                <Text style={{marginBottom:10}}>
                    Although every effort has been taken to avoid errors in the design of the app, the developer disclaims any responsibilty for the use of this App.
                </Text>

                <Text style={{marginBottom:10}}>
                    Always consult the Aircraft Flight Manual before the mssion.
                </Text>

                <Text style={{marginBottom:10}}>
                    MAG Logo
                </Text>

                <Text>
                    {'\u00A9'} 2020
                </Text>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={this.state.check1}
                        onClick={()=>this.setState({check1: !this.state.check1})}
                        isChecked={this.state.check1}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Disable Disclaimer</Text>
                </View>
            </View>

            </View>

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
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",

    },
    label: {
        margin: 8,
        fontWeight:'bold'
    },
    navBar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#edd3af',
    },
    leftContainer2: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b3b1a8',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 15
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight:30
    },
    rightIcon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        backgroundColor: 'white',
    }
});
