import React from 'react'
import { Input, Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'

import {
    View,
    StyleSheet,
    Text,
    Dimensions
  } from "react-native";
  import ValidationComponent from 'react-native-form-validator';
  import {
    addAgriculture
  } from '../../Store/actions/actionIndex';
import User from '../../Modele/User';


  class FormRegister extends ValidationComponent{
    constructor(props) {
        super(props);
        this.state = {nom : "My name", prenom : "My first name", username:"my username", email: "tibtib@gmail.com", password:"11111", type:"AGRICULTEUR"};
      }

      _onPressButton() {
        // Call ValidationComponent validate method
        this.validate({
          nom: {minlength:3, maxlength:7, required: true},
          prenom: {minlength:3, maxlength:7, required: true},
          username: {minlength:3, maxlength:7, required: true},
          email: {email: true},
          password: {minlength:4, maxlength:10, required: true},
        });
        if(this.isFormValid){
           this.props.onAddCultuvateur(new User(this.state.prenom, this.state.nom, this.state.username, this.state.email,this.state.password, this.state.type))
        }
    }

    render(){
        return(
            <View style={styles.login}>
                <Card
                 containerStyle={{borderRadius:10, borderWidth:4, borderColor:'#2EA073'}}
                 title="S'INSCRIRE">
                     <View style={styles.input}>
                     {this.isFieldInError('prenom') && this.getErrorsInField('prenom').map(errorMessage => <Text>{errorMessage}</Text>) }   
                        <Input  
                            ref="prenom"
                            placeholder='PRENOM'
                            onChangeText={(prenom)=>this.setState({prenom})}
                            value={this.state.prenom}
                            leftIcon={
                                <Icon
                                name='user'
                                size={30}
                                color='black'
                                />
                            }
                        />
                     </View>
                     <View style={styles.input}>
                     {this.isFieldInError('nom') && this.getErrorsInField('nom').map(errorMessage => <Text>{errorMessage}</Text>) }
                        <Input 
                            ref="nom"
                            placeholder='NOM'
                            onChangeText={(nom)=>this.setState({nom})}
                            value={this.state.nom}
                            leftIcon={
                                <Icon
                                name='user'
                                size={30}
                                color='black'
                                />
                            }
                        />
                      </View>
                      <View style={styles.input}>
                      {this.isFieldInError('username') && this.getErrorsInField('username').map(errorMessage => <Text>{errorMessage}</Text>) }
                        <Input  
                            ref="username"
                            placeholder='NOM UTILISATEUR'
                            onChangeText={(username)=>this.setState({username})}
                            value={this.state.username}
                            leftIcon={
                                <Icon
                                name='user'
                                size={30}
                                color='black'
                                />
                            }
                        />
                      </View>
                     <View style={styles.input}>
                     {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text>{errorMessage}</Text>) }
                        <Input  
                            ref="email"
                            keyboardType="email-address"
                            onChangeText={(email)=>this.setState({email})}
                            value={this.state.email}
                            placeholder='EMAIL'
                            leftIcon={
                                <Icon
                                name='envelope'
                                size={30}
                                color='black'
                                />
                            }
                        />
                      </View>
                      <View style={styles.input}>
                      {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text>{errorMessage}</Text>) }
                            <Input
                                ref="password"
                                placeholder='PASSWORD'
                                onChangeText={(password)=>this.setState({password})}
                               value={this.state.password}
                                secureTextEntry={true}
                                leftIcon={
                                    <Icon
                                    name='lock'
                                    size={30}
                                    color='black'
                                    />
                                }
                            />
                        </View>
                            <Button
                              title='Sign in'
                              onPress={this._onPressButton}
                              buttonStyle={{ backgroundColor:'#2EA073', borderRadius:50}}
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
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
      onAddCultuvateur: (user) =>  dispatch(addAgriculture(user)),
    }
  }

//export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);