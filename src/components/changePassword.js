import React from "react";
import {Alert, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Button, Input, Item} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Global from "../helpers/Global";
import Data from "../helpers/Data";
import {Actions} from "react-native-router-flux"; // New code

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class ChangePassword extends React.Component {
    state = {
        email: '',
        emailError:false,
        passError:false,
        password: '',
        repass:'',
        repassError:false
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Image
                    source={require('../assets/login-image-header.png')}
                    style={styles.image}
                    resizeMode={'contain'}>
                </Image>
                <View style={styles.content}>
                    <Text style={{color:'#000',fontWeight:'bold',fontSize:18,marginBottom:30}}>Set Password</Text>

                    <Item error={this.state.emailError} style={styles.input} rounded >
                        <Input
                            type="email"
                            onChangeText={(e) => this.setState({email: e})}
                            value={this.state.email}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Old Password'/>
                        <Icon active name="eye" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item  error={this.state.passError} style={styles.input}  rounded>
                        <Input
                            type="password" secureTextEntry={true}
                            onChangeText={(value) => this.setState({password: value})}
                            value={this.state.password}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6" placeholder='New Password'/>
                        <Icon name="eye" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}  />
                    </Item>
                    <Item  error={this.state.repassError} style={styles.input}  rounded>
                        <Input
                            type="password" secureTextEntry={true}
                            onChangeText={(value) => this.setState({repass: value})}
                            value={this.state.repass}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6" placeholder='Confirm Password'/>
                        <Icon name="eye" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}  />
                    </Item>
                    <Button style={styles.loginBtn} rounded onPress={() => this.authLogin()}  block ><Text style={{color:'#fff'}}>Reset</Text></Button>
                </View>
            </ScrollView>
        );
    }

    validateFields() {
        var email = this.state.email
        var pass = this.state.password
        var confirm = this.state.repass

        // Regex for email 
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email === undefined || email == "" || reg.test(email) === false){
            Alert.alert("Check your old password!")
            this.setState({emailError: true})
            return false
        }
        else if(pass === undefined || pass == ""){
            Alert.alert("Check your new password!")
            this.setState({passError: true})
            return false
        }else if(confirm === undefined || confirm == ""){
            Alert.alert("Check your re-password!")
            this.setState({repassError: true})
            return false
        }
        return true
    }

    authLogin() {
        this.setState({emailError: false,passError:false})
        if(this.validateFields()){
            Alert.alert("Password updated!")
        }
    }

    register() {
        Actions.register()
    }


}

const styles = StyleSheet.create({
    loginBtn: {
        marginTop:110,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
        height: 60,
        backgroundColor: '#1e0fb6'
    },
    container: {
        backgroundColor : '#fff',
        height:'100%'
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20
    },
    image:{
        flex: 1,
        alignSelf: 'stretch',
        width: width,
        height: 280,
    },
    input:{
        marginLeft: 50,
        marginRight: 50,
        marginTop:10,
    }
});
