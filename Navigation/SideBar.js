import React from "react";
import {View , Image, FlatList, StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import { Container, Content, Text, List, ListItem, Icon } from "native-base";
const routes = ["Home", "Notifications"];
export default class SideBar extends React.Component {
  constructor(props){
    super(props)
    console.log("navigation prop "+props)
  }
   
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../assets/eclosio.png')}
              style={{ 
                height:180,
                width:300,
                justifyContent:'center',
                alignItems:'center'
              }}/>
        </View>
        <View style={styles.liste_item}>          
          <TouchableHighlight
              style={styles.item}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.texte_item}>Home</Text>
          </TouchableHighlight>
          <TouchableHighlight
              style={styles.item}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.texte_item}>Home</Text>
          </TouchableHighlight>
        </View> 
                
      </View>
    );
  }
}
const styles = StyleSheet.create({
    liste_item:{
      marginTop:10
    },
    item:{
        height:50,
        padding:10,
        margin:10,
        flex:1,
        flexDirection: 'row'
    },
    texte_item:{
      alignItems:'center'
    },
    container:{
      
    }
  
});