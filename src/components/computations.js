import React from 'react';
import {
    CheckBox, StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar, Button, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { Ionicons } from '@expo/vector-icons';
var width = Dimensions.get('window').width;
import { FloatingAction } from "react-native-floating-action";
import Dialog from "react-native-dialog";
import { TextInput } from 'react-native';

export default class Computations extends React.Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    state = {
        dialogVisible: false,
        checked: 0
    };

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };

    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };

    handleDelete = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        this.setState({ dialogVisible: false });
    };
    render() {
        return (
            <View style={{height:Dimensions.get('window').height}}><StatusBar backgroundColor="black" />

            <View style={styles.navBar}>
                <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                        NAG - AFM Computations
                    </Text>
                </View>
            </View>
            <View onPress={() => Actions.splash()} style={styles.leftContainer2}>
                <Text style={[styles.text, {textAlign: 'left',marginLeft: 15}]}>
                    Platform
                </Text>
            </View>
            <View onPress={() => Actions.splash()} style={styles.leftContainer2}>
                <Text style={[styles.text, {textAlign: 'left',marginLeft: 15}]}>
                    AS332 B
                </Text>
            </View>
            <View onPress={() => Actions.splash()}onPress={() => Actions.compute()} style={styles.leftContainer2}>
                <Text style={[styles.text, {textAlign: 'left',marginLeft: 15}]}>
                    AS332 M
                </Text>
            </View>
            <View onPress={() => Actions.splash()} style={styles.leftContainer2}>
                <Text style={[styles.text, {textAlign: 'left',marginLeft: 15}]}>
                    AS365 N3
                </Text>
            </View>

                <View style={{position:'absolute',bottom:50,alignSelf:'flex-end',right:20}}>
                    <Button
                        title="New"
                        color="#841584"
                        onPress={this.showDialog}
                        accessibilityLabel="Press"/>
                </View>

                <Dialog.Container
                    visible={this.state.dialogVisible}
                >
                    <Dialog.Title>New</Dialog.Title>
                    <Dialog.Description>
                        <View style={{flexDirection:"column"}}>
                            <View style={{flexDirection:"row"}} style={{margin:20}}>
                                <View style={{flexDirection:"column"}}>
                                    <Text>Tail No.</Text>
                                    <TextInput
                                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                        onChangeText={text => onChangeText(text)}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                {this.state.checked ?
                                    <TouchableOpacity style={styles.btn} onPress={()=>{this.setState({checked: 0})}} >
                                        <Image style={styles.img} source={require("../assets/radio1.png")}/>
                                        <Text>Metric</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={()=>{this.setState({checked: 1})}} style={styles.btn}>
                                        <Image style={styles.img} source={require("../assets/radio2.png")} />
                                        <Text>Metric</Text>
                                    </TouchableOpacity>
                                }
                                {!this.state.checked ?
                                    <TouchableOpacity style={styles.btn} onPress={()=>{this.setState({checked: 1})}} >
                                        <Image style={styles.img} source={require("../assets/radio1.png")}/>
                                        <Text>Imperial</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={()=>{this.setState({checked: 0})}} style={styles.btn}>
                                        <Image style={styles.img} source={require("../assets/radio2.png")} />
                                        <Text>Imperial</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                            <View style={{flexDirection:"row"}} style={{margin:20}}>
                                <View style={{flexDirection:"column"}}>

                                    <Text>Basic Empty Weight</Text>
                                    <TextInput
                                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                        onChangeText={text => onChangeText(text)}
                                    />
                                </View>
                            </View>

                        </View>
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="OK" onPress={this.handleConfirm} />
                </Dialog.Container>
            </View>

        );
    }

    onLoginBtn() {
        Actions.login()
    }
    asd() {
        Alert.alert('asdasdasdasd')
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
        backgroundColor: '#eeece2',
        borderBottomWidth: 0.5,
        borderBottomColor: '#76746e',
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
    },img:{
        height:20,
        width: 20
    },
    btn:{
        flexDirection: 'row'
    }
});
