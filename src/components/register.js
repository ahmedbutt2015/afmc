import React from 'react';
import {
    StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar, ScrollView, TouchableOpacity
} from 'react-native';
import {Button, Content, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Global from '../helpers/Global';
import { Actions } from 'react-native-router-flux'; // New code
import Data from "../helpers/Data";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Register extends React.Component {
    state = {
        email: '',
        emailError:false,
        fname: '',
        fnameError:false,
        lname: '',
        lnameError:false,
        passError:false,
        password: ''
    };

    focusPassInput() {
        this.refs.pass._root.focus()
    }

    focusEmailInput() {
        this.refs.email._root.focus()
    }

    focusLnameInput() {
        this.refs.lname._root.focus()
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Image
                    source={require('../assets/login-image-header.png')}
                    style={styles.image}
                    resizeMode={'contain'}>
                </Image>
                <View  style={styles.content}>
                    <Text style={{color:'#000',fontWeight:'bold',fontSize:18,marginBottom:15}}>Start your free Dineout account</Text>
                    <View style={{
                        borderTopWidth: 2,
                        borderColor: '#1e0fb6',marginBottom:15,
                        width:70}} >
                    </View>
                    <Text style={{marginBottom:25,fontWeight:'bold',color:'#515151'}}> Enter your Details</Text>
                    <Item  error={this.state.fnameError} style={styles.input} rounded>
                        <Input
                            returnKeyType = {"next"}
                               onSubmitEditing={() => this.focusLnameInput()}
                               onChangeText={(e) => this.setState({fname: e})}
                            value={this.state.fname}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='First name'/>
                        <Icon active name="user" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item error={this.state.lnameError} style={styles.input} rounded>
                        <Input
                            ref='lname'
                            returnKeyType = {"next"}
                            onSubmitEditing={() => this.focusEmailInput()}
                            onChangeText={(e) => this.setState({lname: e})}
                            value={this.state.lname}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Last name'/>
                        <Icon active name="user" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item error={this.state.emailError} style={styles.input} rounded>
                        <Input
                            returnKeyType = {"next"}
                            onSubmitEditing={() => this.focusPassInput()}
                            onChangeText={(e) => this.setState({email: e})}
                            value={this.state.email}
                            ref="email"
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Email Address'/>
                        <Icon active name="envelope-o" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item error={this.state.passError} style={styles.input} rounded>
                        <Input
                            onChangeText={(e) => this.setState({password: e})}
                            value={this.state.password}
                            ref="pass"
                            returnKeyType = {"done"}
                            style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6" placeholder='Password'/>
                        <Icon name="eye" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}  />
                    </Item>

                    <Button style={styles.buttonUp} onPress={() => this.postRegister()} rounded block> <Text style={{color: '#fff'}}>Next</Text></Button>
                    <TouchableOpacity onPress={() => Actions.login()}>
                        <Text style={{color:Global.COLOR.APP_GREY,fontSize:12,marginTop:5}}>Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }
    validateFields() {
        var email = this.state.email
        var pass = this.state.password
        var lname = this.state.lname
        var fname = this.state.fname

        // Regex for email
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(fname === undefined || fname == ""){
            Alert.alert("Check your first name!")
            this.setState({fnameError: true})
            return false
        }

        else if(lname === undefined || lname == ""){
            Alert.alert("Check your last name!")
            this.setState({lnameError: true})
            return false
        }
        else if(email === undefined || email == "" || reg.test(email) === false){
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

    postRegister() {
        this.setState({emailError: false,passError:false,lnameError:false,fnameError:false})
        if(this.validateFields()){
            var e = this.state.email
            // Alert.alert(this.checkCredentials(e,p) + " asd")
            if(this.exist(e)){
                Alert.alert("Sorry this is email has been used before!")
            }else{
                Alert.alert("User registered successfully!")
            }
        }
    }
    exist(email) {
        var _return = false
        for (let user of Data.Users) {
            if(email == user.email){
                _return = true;
            }
        }
        return _return;
    }


}

const styles = StyleSheet.create({
    buttonUp: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        height: 55,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor:'#2112c4'
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
        height:45,
        marginLeft: 50,
        marginRight: 50,
        marginTop:10,
    }
});
