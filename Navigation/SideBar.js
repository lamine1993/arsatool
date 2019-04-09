import React from "react";
import {View , Image, StyleSheet, TouchableHighlight } from "react-native";
import { Text, Icon} from "native-base";
const routes = ["Home", "Notifications"];
export default class SideBar extends React.Component {
  constructor(props){
    super(props)
    console.log("navigation prop "+props)
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
          <TouchableHighlight             
              onPress={() => this.props.navigation.navigate('Home')}>
              <View style={styles.menu} >
                  <Icon name='home' style={styles.icon}></Icon>
                  <Text style={styles.text_menu}>HOME</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Notifications')}>
              <View style={styles.menu} >
                  <Icon name='person' style={styles.icon}></Icon>
                  <Text style={styles.text_menu}>INSCRIPTION</Text>
              </View>
          </TouchableHighlight>
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
       height:60,
       padding:20,
       alignItems:'center',
       justifyContent:'flex-start',
       borderBottomWidth: 0.5,
       borderBottomColor:'#2EA073'
    },
    icon:{
      fontSize: 30, 
      color:'#2EA073',
      
    },
    text_menu:{
      color:'#2EA073',
      marginStart:10,
      
    }

  
});