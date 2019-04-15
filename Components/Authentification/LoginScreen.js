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
  import {
    login
  } from '../../Store/actions/actionIndex';
 
import User from '../../Modele/User';



class LoginScreen extends React.Component{
    user= new User("lamine sarr", "sarrlmn@gmail.com","agriculteur");
    

    componentDidUpdate(){
        if(this.props.session){
            this.props.navigation.navigate('Home');
          }
    }
    _onLogin(){
      this.props.onLogin(this.user);
      
    }
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.login}>
                <Card
                 containerStyle={{borderRadius:10, borderWidth:4, borderColor:'#2EA073'}}
                 title='LOGIN'>
                     <View style={styles.input}>
                        <Input  
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
                            <Input
                                placeholder='PASSWORD'
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
                              onPress={()=>this._onLogin()}
                              buttonStyle={{backgroundColor:'#2EA073', borderRadius:50}}
                            />
                        
                </Card>
                
              </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center'
    },
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
    return {
      session: state.connexion.session,
      user: state.connexion.user
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onLogin : (user) =>dispatch(login(user))
    }
  }
  
  //export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
