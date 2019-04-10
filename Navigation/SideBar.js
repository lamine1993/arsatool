import React from "react";
import {View , Image, StyleSheet, TouchableHighlight } from "react-native";
import { Text, Icon} from "native-base";
const routes = ["Home", "Notifications"];
export default class SideBar extends React.Component {
  constructor(props){
    super(props)
    console.log("navigation prop "+props)
  }

  _setLoginComponent(){
    return <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Notifications')}>
                  <View style={styles.menu} >
                      <Icon name='person-add' style={styles.icon}></Icon>
                      <Text style={styles.text_menu}>INSCRIPTION</Text>
                  </View>
              </TouchableHighlight>
  }

  _setConnexionComponent(){
    return <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Notifications')}>
                  <View style={styles.menu} >
                      <Icon name='key' style={styles.icon}></Icon>
                      <Text style={styles.text_menu}>LOGIN</Text>
                  </View>
              </TouchableHighlight>
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
          <View style={styles.user}>
              {this._setLoginComponent()}
              {this._setConnexionComponent()}
          </View> 
          <View style={{height:1, backgroundColor:'rgb(0, 0, 0)'}}></View>
          <View style={styles.application}>
              <TouchableHighlight             
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={styles.menu} >
                      <Icon name='home' style={styles.icon}></Icon>
                      <Text style={styles.text_menu}>HOME</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight             
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={styles.menu} >
                      <Icon name='search' style={styles.icon}></Icon>
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