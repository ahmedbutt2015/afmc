import React from "react";
import {Alert, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Button, Input, Item} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Global from "../helpers/Global";
import Data from "../helpers/Data";
import {Actions} from "react-native-router-flux"; // New code

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Forgot extends React.Component {
    state = {
        email: '',
        emailError:false,
        showFlag:true
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
                    { this.state.showFlag ?
                    <View style={styles.content}>
                        <Text style={{color:'#000',fontWeight:'bold',fontSize:18,marginBottom:10}}>Forgot your Password</Text>
                        <Text style={{textAlign: 'center',color:Global.COLOR.APP_GREY,fontSize:12,marginBottom:20,paddingRight:60,paddingLeft:60}}>
                            Don't worry! Resetting your password is easy. just tell us the email address you registered
                        </Text>

                        <Item error={this.state.emailError} style={styles.input} rounded >
                            <Input
                                type="email"
                                onChangeText={(e) => this.setState({email: e})}
                                value={this.state.email}
                                style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Email Address'/>
                            <Icon active name="envelope-o" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                        </Item>

                    <Button style={styles.loginBtn} onPress={() => this.postForgot()} rounded block ><Text style={{color:'#fff'}}>Send</Text></Button>
                    </View>

                    : ""}

                    { !this.state.showFlag ?
                    <View style={styles.content}>
                        <Text style={{textAlign: 'center',color:Global.COLOR.APP_DARK_GREY,fontSize:12,marginBottom:20,paddingRight:50,paddingLeft:50}}>
                            We have sent a  reset password to {this.state.email}.
                            {"\n"}Please check the reset password link to set your new password.
                            {"\n"}{"\n"}{"\n"}Didn't receive the email yet?
                            {"\n"}Please check the spam folder or resend the email.
                        </Text>
                        <Button style={styles.loginBtn} onPress={() => this.postForgot()} rounded block ><Text style={{color:'#fff'}}>Resend</Text></Button>
                    </View>
                        : ""}
                </View>
            </ScrollView>
        );
    }

    validateFields() {
        var email = this.state.email

        // Regex for email 
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email === undefined || email == "" || reg.test(email) === false){
            Alert.alert("Check your email!")
            this.setState({emailError: true})
            return false
        }
        return true
    }

    postForgot() {
        this.setState({emailError: false})
        if(this.validateFields()){
            var e = this.state.email
            if(this.checkCredentials(e)){
                this.setState({showFlag: false})
            }else{
                Alert.alert("Email you entered is not registered in our system!")
            }
        }
    }

    register() {
        Actions.register()
    }

    checkCredentials(email) {
        var _return = false
        for (let user of Data.Users) {
            if(email == user.email ){
                _return = true;
            }
        }
        return _return;
    }
}

const styles = StyleSheet.create({
    loginBtn: {
        marginTop:180,
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
