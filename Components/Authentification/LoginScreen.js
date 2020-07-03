import React from 'react'
import { Input, Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import validate from './validation'
import InputDefault from '../UI/InputDefault'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { _displayError, _displayLoading, _displaySuccess } from './AuthError';
import HeadingText from '../UI/HeadingText'
import {NavigationActions} from 'react-navigation'


import {
    View,
    StyleSheet,
    Text,
    Dimensions, ImageBackground
} from "react-native";
import {
    loginAgriculture,
    uiShowError,
    uiUnshowError,
    uiStartLoading,
    uiStopLoading,
    uiResetSuccess,
    uiSuccess
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
        console.log("component login did umpdate")
        console.log("session "+ this.props.session )
        if(this.props.session){
         this.props.resetSuccess();
         this.props.navigation.navigate('App');
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
        if(this.props.session){
            this.props.setError()
        }
        else
        {
            this.props.onLogin(user);
            //this.props.navigation.navigate('App');
        }
    };

    registerHandler=()=>{
        this.props.navigation.navigate('Register')
    }


    _onPressButton() {
        this.loginHandler()

    }

    render(){
        return(
            <KeyboardAwareScrollView>
            <ImageBackground source={require('../../assets/ui_background/Connexion.png')} style={styles.containerImage}> 
            <View style={styles.login}>
                {_displayLoading("CONNEXION",this.props.isLoading, this.props.stopLoading)}
                {_displayError("Eureur de connexion", this.props.error, this.props.unsetError)}
                
                    <HeadingText style={{textAlignVertical:'center', color: '#7DB240', fontSize: 44, fontStyle: 'italic' }}> Se Connecter</HeadingText>
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
                                    color='#98734C'
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
                                    color='#98734C'
                                />
                            }
                        />
                    </View>
                    <Button
                        title='Sign in'
                        onPress={this.loginHandler}
                        buttonStyle={{ backgroundColor:'#7DB240', borderRadius:50}}
                        disabled={
                            !this.state.controls.username.valid ||
                            !this.state.controls.password.valid
                        }
                    />

                    <Button
                        title='Inscription'
                        onPress={this.registerHandler}
                        buttonStyle={{ backgroundColor:'#7DB240', borderRadius:50, marginTop: 10}}
                        
                    />

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
        height:Dimensions.get('window').height,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    input:{
        borderBottomWidth :1,
        borderRadius:50,
        //borderColor:'#2EA073',
        borderBottomColor:'#98734C',
        color:'#98734C',
        fontSize: 18,
        fontStyle: 'italic',
        margin:20
    },
    signin:{
        flex:2,
    },
    containerImage:{
        flex: 1,
        flexDirection:'column',
        resizeMode: "cover",
        justifyContent: "center"
  }
})

const mapStateToProps = state => {
    //console.log(state);
    return {
        user:state.connexion.user,
        session: state.connexion.session,
        error: state.ui.error,
        isLoading:state.ui.isLoading,
        success:state.ui.success

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user =>  dispatch(loginAgriculture(user)),
        startLoading:()=>dispatch(uiStartLoading()),
        stopLoading:()=>dispatch(uiStopLoading()),
        setError: () => dispatch(uiShowError()),
        unsetError: () => dispatch(uiUnshowError()),
        setSuccess: ()=>dispatch(uiSuccess()),
        resetSuccess: ()=>dispatch(uiResetSuccess())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);