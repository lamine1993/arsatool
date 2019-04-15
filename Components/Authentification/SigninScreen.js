import React from 'react'
import { Input, Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
  } from "react-native";
import { connect } from 'react-redux'
import FormRegister from './FormRegister'

class SigninScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.firstname=""
        this.lastName=""
        this.login=""
        this.email=""
        this.password=""
        this.type="AGRICULTEUR"
    }
    

    render(){
        return(
            <View style={styles.container}>
              <FormRegister />
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
    //console.log(state);
    return {
      user:state.connexion.user

    };
  };

  const mapDispatchToProps = dispatch => {
    return {
    }
  }

//export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
