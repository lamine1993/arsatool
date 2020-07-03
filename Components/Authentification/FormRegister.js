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
    Dimensions,
    ImageBackground
} from "react-native";
import HeadingText from '../UI/HeadingText'
  import {
      addAgriculture,
      uiShowError,
      uiUnshowError,
      uiStartLoading,
      uiStopLoading,
      uiResetSuccess,
      uiSuccess
  } from '../../Store/actions/actionIndex';
import User from '../../Modele/User';
import { _displayError, _displayLoading, _displaySuccess } from './AuthError';


  class FormRegister extends React.Component{
    constructor(props) {
        super(props);
        //console.log("navigation "+ this.props.navigation.navigate('App'))
       // Dimensions.addEventListener("change", this.updateStyles);

      }
      state = {
          viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
          authMode: "signin",
          controls: {
              prenom:{
                  value: "",
                  valid: false,
                  validationRules: {
                      minLength: 2
                  },
                  touched: false
              },
              nom:{
                  value: "",
                  valid: false,
                  validationRules: {
                      minLength: 2
                  },
                  touched: false
              },
              username:{
                  value: "",
                  valid: false,
                  validationRules: {
                      minLength: 4
                  },
                  touched: false
              },
              email: {
                  value: "",
                  valid: false,
                  validationRules: {
                      isEmail: true
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
              confirmPassword: {
                  value: "",
                  valid: false,
                  validationRules: {
                      equalTo: "password"
                  },
                  touched: false
              }
          }
      };

      componentDidUpdate(){
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
                      confirmPassword: {
                          ...prevState.controls.confirmPassword,
                          valid:
                              key === "password"
                                  ? validate(
                                  prevState.controls.confirmPassword.value,
                                  prevState.controls.confirmPassword.validationRules,
                                  connectedValue
                                  )
                                  : prevState.controls.confirmPassword.valid
                      },
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
        //console.log(this.props.user)
      }

      loginHandler = () => {
          const user = {
              firstname:this.state.controls.prenom.value,
              lastName:this.state.controls.nom.value,
              telephone: this.state.controls.username.value,
              email: this.state.controls.email.value,
              login: this.state.controls.username.value,
              password: this.state.controls.password.value,
              type: "Agriculteur",
          };
          
          if(this.props.session){
            this.props.setError()
        }
        else
        {
            this.props.onSignIn(user);
            //this.props.navigation.navigate('App');
        }
          
      }



    render(){
        return(
            <KeyboardAwareScrollView>
            <ImageBackground source={require('../../assets/ui_background/Registration.png')} style={styles.containerImage}>
               <View style={styles.login}>
                   {_displayLoading("CONNEXION",this.props.isLoading, this.props.stopLoading)}
                   {_displayError("Eureur de connexion", this.props.error, this.props.unsetError)}
                    <HeadingText style={{textAlignVertical:'center', color: '#7DB240', fontSize: 44, fontStyle: 'italic' }}> Se Connecter</HeadingText>

                     
                     <View style={styles.input}>
                        <InputDefault
                            placeholder='PRENOM'
                            value={this.state.controls.prenom.value}
                            onChangeText={val => this.updateInputState("prenom", val)}
                            valid={this.state.controls.prenom.valid}

                            touched={this.state.controls.prenom.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            leftIcon={
                                <Icon
                                name='user'
                                size={30}
                                color='#98734C'
                                />
                            }
                        />
                     </View>
                     <View style={styles.input}>
                        <InputDefault
                            placeholder='NOM'
                            value={this.state.controls.nom.value}
                            onChangeText={val => this.updateInputState("nom", val)}
                            valid={this.state.controls.nom.valid}

                            touched={this.state.controls.nom.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            leftIcon={
                                <Icon
                                name='user'
                                size={30}
                                color='#98734C'
                                />
                            }
                        />
                      </View>
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
                            value={this.state.controls.email.value}
                            onChangeText={val => this.updateInputState("email", val)}
                            valid={this.state.controls.email.valid}

                            touched={this.state.controls.email.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder='EMAIL'
                            leftIcon={
                                <Icon
                                name='envelope'
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
                    <View style={styles.input}>
                        <InputDefault
                            placeholder='CONFIRM PASSWORD'
                            value={this.state.controls.confirmPassword.value}
                            onChangeText={val => this.updateInputState("confirmPassword", val)}
                            valid={this.state.controls.confirmPassword.valid}

                            touched={this.state.controls.confirmPassword.touched}
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
                
              </View>
            </ImageBackground>
            </KeyboardAwareScrollView>

        )

    }
 }

 const styles = StyleSheet.create({
     container:{
         //backgroundColor:'transparent',
         width:"100%"
     },
         containerImage:{
        flex: 1,
        flexDirection:'column',
        resizeMode: "cover",
        justifyContent: "center"
  },
    login:{
        flex:1,
        height:Dimensions.get('window').height,
        justifyContent: 'center',
        marginHorizontal: 20,
        backgroundColor:'transparent'
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
        onSignIn: user =>  dispatch(addAgriculture(user)),
        startLoading:()=>dispatch(uiStartLoading()),
        stopLoading:()=>dispatch(uiStopLoading()),
        setError: () => dispatch(uiShowError()),
        unsetError: () => dispatch(uiUnshowError()),
        setSuccess: ()=>dispatch(uiSuccess()),
        resetSuccess: ()=>dispatch(uiResetSuccess())
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);