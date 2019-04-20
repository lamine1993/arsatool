import React from 'react'
import { Input, Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import validate from './validation'

import {
    View,
    StyleSheet,
    Text,
    Dimensions
  } from "react-native";
  import {
    addAgriculture
  } from '../../Store/actions/actionIndex';
import User from '../../Modele/User';


  class FormRegister extends React.Component{
    constructor(props) {
        super(props);

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
                      minLength: 6
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

          this.props.onSignIn(user);
      };


      _onPressButton() {
          this.loginHandler()

    }

    render(){
        return(
            <View style={styles.login}>
                <Card
                 containerStyle={{borderRadius:10, borderWidth:4, borderColor:'#2EA073'}}
                 title="S'INSCRIRE">
                     <View style={styles.input}>
                        <Input  
                            ref="prenom"
                            placeholder='PRENOM'
                            value={this.state.controls.prenom.value}
                            onChangeText={val => this.updateInputState("prenom", val)}
                            valid={this.state.controls.prenom.valid}
                            leftIcon={
                                <Icon
                                name='user'
                                size={30}
                                color='#2EA073'
                                />
                            }
                        />
                     </View>
                     <View style={styles.input}>
                        <Input 
                            ref="nom"
                            placeholder='NOM'
                            value={this.state.controls.nom.value}
                            onChangeText={val => this.updateInputState("nom", val)}
                            valid={this.state.controls.nom.valid}
                            leftIcon={
                                <Icon
                                name='user'
                                size={30}
                                color='#2EA073'
                                />
                            }
                        />
                      </View>
                      <View style={styles.input}>
                        <Input  
                            ref="username"
                            placeholder='TELEPHONE'
                            value={this.state.controls.username.value}
                            onChangeText={val => this.updateInputState("username", val)}
                            valid={this.state.controls.username.valid}
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
                        <Input  
                            ref="email"
                            value={this.state.controls.email.value}
                            onChangeText={val => this.updateInputState("email", val)}
                            valid={this.state.controls.email.valid}
                            placeholder='EMAIL'
                            leftIcon={
                                <Icon
                                name='envelope'
                                size={30}
                                color='#2EA073'
                                />
                            }
                        />
                      </View>
                      <View style={styles.input}>
                            <Input
                                ref="password"
                                placeholder='PASSWORD'
                                value={this.state.controls.password.value}
                                onChangeText={val => this.updateInputState("password", val)}
                                valid={this.state.controls.password.valid}
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
                    <View style={styles.input}>
                        <Input
                            ref="password"
                            placeholder='CONFIRM PASSWORD'
                            value={this.state.controls.confirmPassword.value}
                            onChangeText={val => this.updateInputState("confirmPassword", val)}
                            valid={this.state.controls.confirmPassword.valid}
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
                                  !this.state.controls.confirmPassword.valid && this.state.authMode === "signin" ||
                                  !this.state.controls.email.valid ||
                                  !this.state.controls.password.valid
                              }
                            />
                        
                </Card>
                
              </View>
        )
    }
 }

 const styles = StyleSheet.create({
    login:{      
        borderColor:'rgb(0, 0, 0)',
        flex:1,
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
        onSignIn: user =>  dispatch(addAgriculture(user)),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);