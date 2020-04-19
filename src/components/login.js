import React from "react";
import {Alert, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Button, Input, Item} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Global from "../helpers/Global";
import Data from "../helpers/Data";
import {Actions} from "react-native-router-flux"; // New code

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Login extends React.Component {
    state = {
        email: '',
        emailError:false,
        passError:false,
        password: ''
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
                    <Text style={{color:'#000',fontWeight:'bold',fontSize:18,marginBottom:30}}>Back Office</Text>

                    <Item error={this.state.emailError} style={styles.input} rounded >
                        <Input
                            type="email"
                            onChangeText={(e) => this.setState({email: e})}
                            value={this.state.email}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Email Address'/>
                        <Icon active name="envelope-o" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item  error={this.state.passError} style={styles.input}  rounded>
                        <Input
                            type="password" secureTextEntry={true}
                            onChangeText={(value) => this.setState({password: value})}
                            value={this.state.password}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6" placeholder='Password'/>
                        <Icon name="eye" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}  />
                    </Item>
                    <TouchableOpacity onPress={() => Actions.forgot()}>
                        <Text style={{color:Global.COLOR.APP_GREY,fontSize:12,marginTop:10}}>Forgot Your Password?</Text>
                    </TouchableOpacity>
                    <Button style={styles.loginBtn} onPress={() => this.authLogin()}  block ><Text style={{color:'#fff'}}>Sign In</Text></Button>
                    <TouchableOpacity onPress={this.register}>
                        <Text  style={{color:Global.COLOR.APP_GREY,fontSize:12,marginTop:2}}>Don't have an account? Create now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

    validateFields() {
        var email = this.state.email
        var pass = this.state.password

        // Regex for email 
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email === undefined || email == "" || reg.test(email) === false){
            Alert.alert("Check your email!")
            this.setState({emailError: true})
            return false
        }
        else if(pass === undefined || pass == ""){
            Alert.alert("Check your password!")
            this.setState({passError: true})
            return false
        }
        return true
    }

    authLogin() {
        this.setState({emailError: false,passError:false})
        if(this.validateFields()){
            var e = this.state.email
            var p = this.state.password
            // Alert.alert(this.checkCredentials(e,p) + " asd")
            if(this.checkCredentials(e,p)){
                Alert.alert("Welcome Back!")
            }else{
                Alert.alert("You have entered an invalid username or password!")
            }
        }
    }

    register() {
        Actions.register()
    }

    checkCredentials(email, pass) {
        var _return = false
        for (let user of Data.Users) {
            if(email == user.email && pass == user.password){
                _return = true;
            }
        }
        return _return;
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
