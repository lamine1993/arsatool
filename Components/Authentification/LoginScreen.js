import React from 'react'
import { Input, Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import validate from './validation'
import InputDefault from '../UI/InputDefault'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import {
    View,
    StyleSheet,
    Text,
    Dimensions, ImageBackground
} from "react-native";
import {
    loginAgriculture
} from '../../Store/actions/actionIndex';


class LoginScreen extends React.Component{
    constructor(props) {
        super(props);

    }
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        authMode: "signin",
        controls: {
            username:{
                value: "",
                valid: false,
                validationRules: {
                    minLength: 4
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 4
                },
                touched: false
            },
        }
    };

    componentDidUpdate(){
        if(this.props.session){
            this.props.navigation.navigate('Home');
        }
    }

    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === "password") {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                            connectedValue
                        ),
                        touched: true
                    }
                }
            };
        });
    };


    componentDidMount(){
    }

    loginHandler = () => {
        const user = {
            telephone: this.state.controls.username.value,
            password: this.state.controls.password.value,
        };

        this.props.onLogin(user);
    };


    _onPressButton() {
        this.loginHandler()

    }

    render(){
        return(
            <KeyboardAwareScrollView>
            <ImageBackground source={require('../../assets/logo.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.login}>
                <Card
                    containerStyle={{borderRadius:10, borderWidth:4, borderColor:'#2EA073', backgroundColor:'transparent'}}
                    title="S'INSCRIRE"
                    transparent >
                    <View style={styles.input}>
                        <InputDefault
                            placeholder='TELEPHONE'
                            value={this.state.controls.username.value}
                            onChangeText={val => this.updateInputState("username", val)}
                            valid={this.state.controls.username.valid}

                            touched={this.state.controls.username.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            leftIcon={
                                <Icon
                                    name='phone'
                                    size={30}
                                    color='#2EA073'
                                />
                            }
                        />
                    </View>
                    <View style={styles.input}>
                        <InputDefault
                            placeholder='PASSWORD'
                            value={this.state.controls.password.value}
                            onChangeText={val => this.updateInputState("password", val)}
                            valid={this.state.controls.password.valid}

                            touched={this.state.controls.password.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={30}
                                    color='#2EA073'
                                />
                            }
                        />
                    </View>
                    <Button
                        title='Sign in'
                        onPress={this.loginHandler}
                        buttonStyle={{ backgroundColor:'#2EA073', borderRadius:50}}
                        disabled={
                            !this.state.controls.username.valid ||
                            !this.state.controls.password.valid
                        }
                    />

                </Card>

            </View>
            </ImageBackground>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    login:{
        borderColor:'rgb(0, 0, 0)',
        flex:1,
        height:Dimensions.get('window').height
    },
    input:{
        borderWidth:1,
        borderRadius:50,
        borderColor:'#2EA073',
        margin:10
    },
    signin:{
        flex:2,
    }
})

const mapStateToProps = state => {
    //console.log(state);
    return {
        user:state.connexion.user,
        session: state.connexion.session,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user =>  dispatch(loginAgriculture(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);