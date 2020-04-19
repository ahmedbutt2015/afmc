import React from "react";
import {Alert, Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Input,
    Item,
    Left,
    Right,
    Switch,
    Tab,
    Tabs,
    Thumbnail,
    Title
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Global from "../helpers/Global";
import Data from "../helpers/Data";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import CheckBox from "react-native-check-box";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Products extends React.Component {
    state = {
        check1: true,
        check2: true,
        check3: true,
        email: '',
        emailError: false,
        fname: '',
        fnameError: false,
        lname: '',
        lnameError: false,
        passError: false,
        password: '',
        customCheckbox1:Global.COLOR.APP_BLUE,
        customCheckbox2:Global.COLOR.APP_DARK_GREY,
        detailsStepFlag:true,
        showGroupTaxFlag:false
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

                <Container>
                    <Header hasTabs style={{backgroundColor: '#2112c4',
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#2512ff',}}>
                        <Left>
                            <Icon active name="align-left" size={24}
                                  style={{marginRight: 5, color: '#fff'}}/>
                        </Left>
                        <Body>
                        <Title style={{color:'#fff'}}>Setting</Title>
                        </Body>
                        <Right>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{color: '#fff', fontSize: 14, marginRight: 5, marginTop: 7}}>
                                    Next</Text>
                                <Icon active name="angle-right" size={30} style={{marginRight: 10, color: "#fff"}}/>
                            </View>
                        </Right>
                    </Header>

                    <Tabs tabBarUnderlineStyle={{borderBottomWidth:2,backgroundColor:'#fff'}} initialPage={0} >
                        <Tab  tabStyle={{borderRightWidth: 0.5,
                            borderRightColor: '#604fff',backgroundColor: Global.COLOR.APP_BLUE}} textStyle={{color: '#fff'}} activeTabStyle={{borderRightWidth: 0.5,
                            borderRightColor: '#604fff',backgroundColor: Global.COLOR.APP_BLUE}} activeTextStyle={{color: '#fff'}} heading="Details">
                            { this.state.detailsStepFlag ?
                                <View style={styles.content}>
                                <View style={{alignItems:'center',justifyContent: 'center'}}>
                                    <Text style={{color: '#000', fontSize: 20, marginBottom: 15}}>Company Details</Text>
                                    <Thumbnail large
                                               source={require('../assets/user.png')}
                                    />

                                    <Item error={this.state.fnameError} style={styles.input} rounded>
                                        <Input
                                            returnKeyType={"next"}
                                            onSubmitEditing={() => this.focusLnameInput()}
                                            onChangeText={(e) => this.setState({fname: e})}
                                            value={this.state.fname}
                                            style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                            placeholder='Company Name'/>
                                        <Icon active name="building-o" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                    </Item>
                                    <Item error={this.state.lnameError} style={styles.input} rounded>
                                        <Input
                                            ref='lname'
                                            returnKeyType={"next"}
                                            onSubmitEditing={() => this.focusEmailInput()}
                                            onChangeText={(e) => this.setState({lname: e})}
                                            value={this.state.lname}
                                            style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                            placeholder='Business Number'/>
                                        <Icon active name="keyboard-o" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                    </Item>
                                    <Item error={this.state.emailError} style={styles.input} rounded>
                                        <Input
                                            returnKeyType={"next"}
                                            onSubmitEditing={() => this.focusPassInput()}
                                            onChangeText={(e) => this.setState({email: e})}
                                            value={this.state.email}
                                            ref="email"
                                            style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                            placeholder='AUD ($) Australian Dollar'/>
                                        <Icon active name="angle-down" size={15}
                                              style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                    </Item>
                                    <Item error={this.state.passError} style={styles.input} rounded>
                                        <Input
                                            onChangeText={(e) => this.setState({password: e})}
                                            value={this.state.password}
                                            ref="pass"
                                            returnKeyType={"done"}
                                            style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                            placeholder='Website'/>
                                        <Icon name="chrome" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                    </Item>
                                </View>
                                <Text style={{marginTop:10,marginLeft: 50,marginBottom: 2,fontSize:12, fontWeight: 'bold', color: '#000'}}> Tax Settings</Text>
                                <Text style={{marginTop:5,marginLeft: 50,marginBottom: 2,fontSize:10, color: Global.COLOR.APP_DARK_GREY}}> There are two ways of structure how a tax is calculated.</Text>

                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={() => this.setState({customCheckbox1: Global.COLOR.APP_BLUE
                                    ,customCheckbox2:Global.COLOR.APP_DARK_GREY})}>
                                    <View style={{height:60,width:150,marginTop:10,marginLeft: 50,
                                        borderColor:this.state.customCheckbox1,
                                        padding:20,borderWidth:.5,borderRadius:20
                                    }}>
                                        <Text style={{fontSize:9,fontWeight:'bold',
                                            color:this.state.customCheckbox1,
                                        }}>
                                            Use Tax Inclusive Prices
                                        </Text>
                                        <Text style={{fontSize:7,marginTop:2,
                                            color:this.state.customCheckbox1,
                                        }}>
                                            The tax is included in the price
                                        </Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({customCheckbox2: Global.COLOR.APP_BLUE
                                        ,customCheckbox1:Global.COLOR.APP_DARK_GREY})}>

                                    <View style={{height:60,width:150,marginTop:10,marginLeft: 10,
                                        borderColor:this.state.customCheckbox2,
                                        padding:20,borderWidth:.5,borderRadius:20
                                    }}>
                                        <Text style={{fontSize:9,fontWeight:'bold',
                                            color:this.state.customCheckbox2,
                                        }}>
                                            Use Tax Inclusive Prices
                                        </Text>
                                        <Text style={{fontSize:7,marginTop:2,
                                            color:this.state.customCheckbox2,
                                        }}>
                                            The tax is not included in the price
                                        </Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{marginTop:10,marginLeft: 50,marginBottom: 2,fontSize:12, fontWeight: 'bold', color: '#000'}}> Allow Overriding Taxes from POS</Text>
                                <Switch style={{marginTop:5,marginLeft: 50}}  />
                                <Button style={styles.buttonUp} onPress={() => this.setState({detailsStepFlag: false})} rounded block> <Text
                                    style={{color: '#fff'}}>Next</Text></Button>

                            </View>
                                : ""}
                            { !this.state.detailsStepFlag ?
                                <View style={styles.content}>
                                    <View style={{alignItems:'center',justifyContent: 'center'}}>
                                        <Text style={{color: '#000', fontSize: 20, marginBottom: 15}}>Company Location</Text>
                                        <Item error={this.state.fnameError} style={styles.input} rounded>
                                            <Input
                                                returnKeyType={"next"}
                                                onSubmitEditing={() => this.focusLnameInput()}
                                                onChangeText={(e) => this.setState({fname: e})}
                                                value={this.state.fname}
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='Company Location'/>
                                            <Icon active name="angle-down" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Item error={this.state.lnameError} style={styles.input} rounded>
                                            <Input
                                                ref='lname'
                                                returnKeyType={"next"}
                                                onSubmitEditing={() => this.focusEmailInput()}
                                                onChangeText={(e) => this.setState({lname: e})}
                                                value={this.state.lname}
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='Street Address'/>
                                            <Icon2 active name="directions" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Item error={this.state.emailError} style={styles.input} rounded>
                                            <Input
                                                returnKeyType={"next"}
                                                onSubmitEditing={() => this.focusPassInput()}
                                                onChangeText={(e) => this.setState({email: e})}
                                                value={this.state.email}
                                                ref="email"
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='City (suburb)'/>
                                            <Icon3 active name="city" size={15}
                                                  style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Item error={this.state.passError} style={styles.input} rounded>
                                            <Input
                                                onChangeText={(e) => this.setState({password: e})}
                                                value={this.state.password}
                                                ref="pass"
                                                returnKeyType={"done"}
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='State'/>
                                            <Icon2 name="globe" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Item error={this.state.passError} style={styles.input} rounded>
                                            <Input
                                                onChangeText={(e) => this.setState({password: e})}
                                                value={this.state.password}
                                                ref="pass"
                                                returnKeyType={"done"}
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='Postcode'/>
                                            <Icon2 name="location-pin" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Item error={this.state.passError} style={styles.input} rounded>
                                            <Input
                                                onChangeText={(e) => this.setState({password: e})}
                                                value={this.state.password}
                                                ref="pass"
                                                returnKeyType={"done"}
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='Time Zone'/>
                                            <Icon name="angle-down" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Text style={{color: '#000', fontSize: 20, marginBottom: 7.5 , marginTop: 7.5}}>Company Details</Text>
                                        <Item error={this.state.fnameError} style={styles.input} rounded>
                                            <Input
                                                returnKeyType={"next"}
                                                onSubmitEditing={() => this.focusLnameInput()}
                                                onChangeText={(e) => this.setState({fname: e})}
                                                value={this.state.fname}
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='Contact Name'/>
                                            <Icon2 active name="user" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Item error={this.state.lnameError} style={styles.input} rounded>
                                            <Input
                                                ref='lname'
                                                returnKeyType={"next"}
                                                onSubmitEditing={() => this.focusEmailInput()}
                                                onChangeText={(e) => this.setState({lname: e})}
                                                value={this.state.lname}
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='Phone Number'/>
                                            <Icon2 active name="screen-smartphone" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>
                                        <Item error={this.state.emailError} style={styles.input} rounded>
                                            <Input
                                                returnKeyType={"next"}
                                                onSubmitEditing={() => this.focusPassInput()}
                                                onChangeText={(e) => this.setState({email: e})}
                                                value={this.state.email}
                                                ref="email"
                                                style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                placeholder='Email Address'/>
                                            <Icon2 active name="envelope" size={15}
                                                  style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                        </Item>

                                    </View>
                                    <Button style={styles.buttonUp} onPress={() => this.setState({detailsStepFlag: true})} rounded block> <Text
                                        style={{color: '#fff'}}>Next</Text></Button>

                                </View>
                                : ""}

                        </Tab>
                        <Tab tabStyle={{borderRightWidth: 0.5,
                            borderRightColor: '#604fff',backgroundColor: Global.COLOR.APP_BLUE}} textStyle={{color: '#fff'}} activeTabStyle={{borderRightWidth: 0.5,
                            borderRightColor: '#604fff',backgroundColor: Global.COLOR.APP_BLUE}} activeTextStyle={{color: '#fff'}}  heading="Taxes">
                            { !this.state.showGroupTaxFlag ?
                                <Content>
                                <View style={{paddingLeft:40,paddingRight:40,paddingTop:10}}>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                            <Item error={this.state.fnameError} style={styles.inputTax} rounded>
                                                <Input
                                                    returnKeyType={"next"}
                                                    onSubmitEditing={() => this.focusLnameInput()}
                                                    onChangeText={(e) => this.setState({fname: e})}
                                                    value={this.state.fname}
                                                    style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                    placeholder='Tax Name'/>
                                            </Item>
                                            <Item error={this.state.lnameError} style={styles.inputTax} rounded>
                                                <Input
                                                    ref='lname'
                                                    returnKeyType={"next"}
                                                    onSubmitEditing={() => this.focusEmailInput()}
                                                    onChangeText={(e) => this.setState({lname: e})}
                                                    value={this.state.lname}
                                                    style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                    placeholder='Tax Code'/>
                                            </Item>
                                            <Item error={this.state.emailError} style={styles.inputTax} rounded>
                                                <Input
                                                    returnKeyType={"next"}
                                                    onSubmitEditing={() => this.focusPassInput()}
                                                    onChangeText={(e) => this.setState({email: e})}
                                                    value={this.state.email}
                                                    ref="email"
                                                    style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                    placeholder='Tax Rate (%)'/>
                                            </Item>
                                            <View style={{marginLeft: width - 100 - 120}}>
                                                <Button style={{ marginTop: 20,
                                                    height: 45,
                                                    width:100,
                                                    borderColor: '#fff',
                                                    borderWidth: 1,
                                                    alignItems:'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#2112c4'}} rounded >
                                                    <Text
                                                        style={{color: '#fff'}}>Delete</Text></Button>
                                            </View>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={{paddingLeft:40,paddingRight:40,paddingTop:10}}>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                            <Item error={this.state.fnameError} style={styles.inputTax} rounded>
                                                <Input
                                                    returnKeyType={"next"}
                                                    onSubmitEditing={() => this.focusLnameInput()}
                                                    onChangeText={(e) => this.setState({fname: e})}
                                                    value="Tax Free"
                                                    style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                    placeholder='Tax Name'/>
                                            </Item>
                                            <Item error={this.state.lnameError} style={styles.inputTax} rounded>
                                                <Input
                                                    ref='lname'
                                                    returnKeyType={"next"}
                                                    onSubmitEditing={() => this.focusEmailInput()}
                                                    onChangeText={(e) => this.setState({lname: e})}
                                                    value="FRE"
                                                    style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                    placeholder='Tax Code'/>
                                            </Item>
                                            <Item  error={this.state.emailError} style={{
                                                height: 38,
                                                backgroundColor:'#e2e2e2',
                                                marginTop: 10,
                                            }} rounded>
                                                <Input disabled
                                                       returnKeyType={"next"}
                                                       onSubmitEditing={() => this.focusPassInput()}
                                                       onChangeText={(e) => this.setState({email: e})}
                                                       value={this.state.email}
                                                       ref="email"
                                                       editable={false}
                                                       style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                       placeholder='0.000'/>
                                            </Item>

                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <Button style={{
                                    marginTop: 100,
                                    marginLeft: 50,
                                    marginRight: 50,
                                    height: 55,
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                    backgroundColor: '#2112c4'
                                }} onPress={() => this.setState({showGroupTaxFlag: true})}  rounded block> <Text
                                    style={{color: '#fff'}}>Add a New Tax</Text></Button>

                            </Content>
                                : ""}
                            { this.state.showGroupTaxFlag ?
                                <Content>
                                    <View style={{paddingLeft:40,paddingRight:40,paddingTop:10}}>
                                        <View style={{alignItems:'center',justifyContent: 'center'}}>
                                            <Text style={{color: '#000', fontSize: 20, marginBottom: 15}}>Group Taxes</Text>
                                        </View>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                <Item error={this.state.fnameError} style={styles.inputTax} rounded>
                                                    <Input
                                                        returnKeyType={"next"}
                                                        onSubmitEditing={() => this.focusLnameInput()}
                                                        onChangeText={(e) => this.setState({fname: e})}
                                                        value={this.state.fname}
                                                        style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                        placeholder='Tax Name'/>
                                                </Item>
                                                <Item error={this.state.lnameError} style={styles.inputTax} rounded>
                                                    <Input
                                                        ref='lname'
                                                        returnKeyType={"next"}
                                                        onSubmitEditing={() => this.focusEmailInput()}
                                                        onChangeText={(e) => this.setState({lname: e})}
                                                        value={this.state.lname}
                                                        style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                        placeholder='Tax Code'/>
                                                </Item>
                                                <Item error={this.state.emailError} style={styles.inputTax} rounded>
                                                    <Input
                                                        returnKeyType={"next"}
                                                        onSubmitEditing={() => this.focusPassInput()}
                                                        onChangeText={(e) => this.setState({email: e})}
                                                        value={this.state.email}
                                                        ref="email"
                                                        style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                        placeholder='Tax Rate (%)'/>
                                                </Item>
                                                <Item error={this.state.fnameError} style={styles.inputTax} rounded>
                                                    <Input
                                                        returnKeyType={"done"}
                                                        onChangeText={(e) => this.setState({fname: e})}
                                                        value="Taxes"
                                                        style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                        placeholder='Taxes'/>
                                                </Item>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                    <Button style={{
                                        marginTop: 250,
                                        marginLeft: 50,
                                        marginRight: 50,
                                        height: 55,
                                        borderColor: '#fff',
                                        borderWidth: 1,
                                        backgroundColor: '#2112c4'
                                    }} onPress={() => this.setState({showGroupTaxFlag: false})} rounded block> <Text
                                        style={{color: '#fff'}}>Add Group Tax</Text></Button>

                                </Content>
                                : ""}
                                </Tab>
                        <Tab tabStyle={{backgroundColor: Global.COLOR.APP_BLUE}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: Global.COLOR.APP_BLUE}} activeTextStyle={{color: '#fff'}} heading="Payment Types">

                            <Content>
                                <View style={{paddingLeft:40,paddingRight:40,paddingTop:10}}>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                            <Item error={this.state.fnameError} style={styles.inputTax} rounded>
                                                <Input
                                                    returnKeyType={"next"}
                                                    onSubmitEditing={() => this.focusLnameInput()}
                                                    onChangeText={(e) => this.setState({fname: e})}
                                                    value={this.state.fname}
                                                    style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                    placeholder='Payment Type'/>
                                                <Icon active name="credit-card" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                            </Item>
                                            <Item error={this.state.lnameError} style={styles.inputTax} rounded>
                                                <Input
                                                    ref='lname'
                                                    returnKeyType={"next"}
                                                    onSubmitEditing={() => this.focusEmailInput()}
                                                    onChangeText={(e) => this.setState({lname: e})}
                                                    value={this.state.lname}
                                                    style={{color: Global.COLOR.APP_GREY, fontSize: 13}} placeholderTextColor="#c6c6c6"
                                                    placeholder='Clearing Account'/>
                                                <Icon active name="building-o" size={15} style={{marginRight: 10, color: Global.COLOR.APP_GREY}}/>
                                            </Item>

                                            <View style={{ flexDirection: 'column'}}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{marginTop: 5,padding: 10}}> Quick Checkout</Text>
                                                    <CheckBox
                                                        style={{flex: 1, padding: 10}}
                                                        onClick={()=>this.setState({check1: !this.state.check1})}
                                                        isChecked={this.state.check1}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'column'}}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{marginTop: 5,padding: 10}}> Require Customer</Text>
                                                    <CheckBox
                                                        style={{flex: 1, padding: 10}}
                                                        onClick={()=>this.setState({check2: !this.state.check2})}
                                                        isChecked={this.state.check2}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'column'}}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{marginTop: 5,padding: 10}}> Prompt for Adjustment</Text>
                                                    <CheckBox
                                                        style={{flex: 1, padding: 10}}
                                                        onClick={()=>this.setState({check3: !this.state.check3})}
                                                        isChecked={this.state.check3}
                                                    />
                                                </View>
                                            </View>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <Button style={{
                                    marginTop: 250,
                                    marginLeft: 50,
                                    marginRight: 50,
                                    height: 55,
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                    backgroundColor: '#2112c4'
                                }}  rounded block> <Text
                                    style={{color: '#fff'}}>Add a new Payment Type</Text></Button>

                            </Content>

                        </Tab>
                    </Tabs>

                </Container>

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

        if (fname === undefined || fname == "") {
            Alert.alert("Check your first name!")
            this.setState({fnameError: true})
            return false
        }

        else if (lname === undefined || lname == "") {
            Alert.alert("Check your last name!")
            this.setState({lnameError: true})
            return false
        }
        else if (email === undefined || email == "" || reg.test(email) === false) {
            Alert.alert("Check your email!")
            this.setState({emailError: true})
            return false
        }
        else if (pass === undefined || pass == "") {
            Alert.alert("Check your password!")
            this.setState({passError: true})
            return false
        }

        return true
    }

    postRegister() {
        this.setState({emailError: false, passError: false, lnameError: false, fnameError: false})
        if (this.validateFields()) {
            var e = this.state.email
            // Alert.alert(this.checkCredentials(e,p) + " asd")
            if (this.exist(e)) {
                Alert.alert("Sorry this is email has been used before!")
            } else {
                Alert.alert("User registered successfully!")
            }
        }
    }

    exist(email) {
        var _return = false
        for (let user of Data.Users) {
            if (email == user.email) {
                _return = true;
            }
        }
        return _return;
    }


}

const styles = StyleSheet.create({
    header: {
        height: 100,
        flexDirection: "row",
        paddingTop: 40
    },
    buttonUp: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        height: 55,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#2112c4'
    },
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    headerContent: {
        marginLeft: 130
    },
    content: {
        paddingTop: 20,
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: width,
        height: 280,
    },
    input: {
        height: 38,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
    },
    inputTax: {
        height: 38,
        marginTop: 10,
    }
});

