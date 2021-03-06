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

  _setUserInfo(){
    if(this.props.session){
      return <View>
                <View style={styles.menu} >
                        <Icon name='person-add' style={styles.icon}/>
                        <Text style={styles.text_menu}>{this.props.user.firstName}</Text>
                        <Text style={styles.text_menu}>{this.props.user.lastName}</Text>
                    </View>
            </View>
    }
  }

  _setLoginUserComponent(){
    return <View style={styles.user}>
              <TouchableHighlight
                  onPress={() => this._logout()}>
                  <View style={styles.menu} >
                      <Icon name='key' style={styles.icon}/>
                      <Text style={styles.text_menu}>DECONNEXION</Text>
                  </View>
              </TouchableHighlight>
        </View>
  }

   _logout = () => {
     
      this.props.onLogout()
      this.props.navigation.navigate('App');
  }


  _setLoginComponent(){
    return <View style={styles.user}>
              <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Auth')}>
                  <View style={styles.menu} >
                      <Icon name='key' style={styles.icon}/>
                      <Text style={styles.text_menu}>CONNEXION</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <View style={styles.menu} >
                      <Icon name='key' style={styles.icon}/>
                      <Text style={styles.text_menu}>INSCRIPTION</Text>
                  </View>
              </TouchableHighlight>
        </View>
  }
   
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/ui_background/menu.jpg')} style={styles.fittParent}/>
          <View style={{ position: 'absolute',left: 10, bottom: 10, alignItems: 'center', justifyContent: 'center' }}>
            {this._setUserInfo()}
        </View>
        </View>
        <View style={styles.content}> 
          
          <View style={styles.application}>
              <TouchableHighlight             
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={styles.menu} >
                      <Icon name='home' style={styles.icon}>

                      </Icon>
                      <Text style={styles.text_menu}>HOME</Text>
                  </View>
              </TouchableHighlight>
          </View> 
          <View style={{height:1, backgroundColor:'rgb(0, 0, 0)'}}>

          </View>  
          {this._displayLoginSection()}     
        </View> 
                
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      //width:300,
    },
    header:{
        // flex: 1,
         //borderBottomWidth: 1,
         height:180,
         width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    fittParent:{
    alignSelf:'center',
    height:'100%',
    width:'100%',
  },
  content:{
       flex:2,
       flexDirection:'column',
       backgroundColor:'#98734C'
    },
    menu:{
       flexDirection:'row',
       height:50,
       padding:20,
       alignItems:'center',
    },
    icon:{
      fontSize: 30, 
      color:'#fff',
      
    },
    text_menu:{
      color:'#fff',
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