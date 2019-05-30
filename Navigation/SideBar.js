import React from "react";
import {View , Image, StyleSheet, TouchableHighlight } from "react-native";
import { Text, Icon} from "native-base";
import {
  logout
} from '../Store/actions/actionIndex';
import { connect } from 'react-redux'
const routes = ["Home", "Notifications"];
class SideBar extends React.Component {
  constructor(props){
    super(props)
  }

  _displayLoginSection(){
    if (!this.props.session) {
      
      return this._setLoginComponent()
    } else {
      return this._setLoginUserComponent()
    }
  }

  _setLoginUserComponent(){
    return <View style={styles.user}>
             <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Notifications')}>
                  <View style={styles.menu} >
                      <Icon name='person-add' style={styles.icon}/>
                      <Text style={styles.text_menu}>{this.props.user.firstName}</Text>
                      <Text style={styles.text_menu}>{this.props.user.lastName}</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                  onPress={() => this.props.onLogout()}>
                  <View style={styles.menu} >
                      <Icon name='key' style={styles.icon}/>
                      <Text style={styles.text_menu}>DECONNEXION</Text>
                  </View>
              </TouchableHighlight>
        </View>
  }


  _setLoginComponent(){
    return <View style={styles.user}>
             <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Signin')}>
                  <View style={styles.menu} >
                      <Icon name='person-add' style={styles.icon}/>
                      <Text style={styles.text_menu}>INSCRIPTION</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <View style={styles.menu} >
                      <Icon name='key' style={styles.icon}/>
                      <Text style={styles.text_menu}>CONNEXION</Text>
                  </View>
              </TouchableHighlight>
        </View>
  }
   
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/eclosio.png')}
              style={{ 
                height:180,
                width:300,
                justifyContent:'center',
                alignItems:'center'
              }}/>
        </View>
        <View style={styles.content}> 
           {this._displayLoginSection()}
          <View style={{height:1, backgroundColor:'rgb(0, 0, 0)'}}>

          </View>
          <View style={styles.application}>
              <TouchableHighlight             
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={styles.menu} >
                      <Icon name='home' style={styles.icon}>

                      </Icon>
                      <Text style={styles.text_menu}>HOME</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight             
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={styles.menu} >
                      <Icon name='search' style={styles.icon}>

                      </Icon>
                      <Text style={styles.text_menu}>RECHERCHE INSECTE</Text>
                  </View>
              </TouchableHighlight>
          </View>        
        </View> 
                
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column'
    },
    header:{
       flex: 1,
       borderBottomWidth: 1,
       borderBottomColor:'#2EA073'
    },
    content:{
       flex:2,
       flexDirection:'column'
    },
    menu:{
       flexDirection:'row',
       height:50,
       padding:20,
       alignItems:'center',
    },
    icon:{
      fontSize: 30, 
      color:'#2EA073',
      
    },
    text_menu:{
      color:'#2EA073',
      marginStart:10,
      
    },
    user:{
      marginBottom:10     
    },
    application:{
      marginTop:10
    }

  
});
const mapStateToProps = state => {
  //console.log(state);
  return {
    session: state.connexion.session,
    user: state.connexion.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout : () =>dispatch(logout())
  }
}

//export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)