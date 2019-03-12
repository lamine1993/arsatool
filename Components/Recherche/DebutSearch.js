import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";

class DebutSearch extends Component {
   // onPress={() => this.props.navigation.push('Culture')
    render() {
        return (
              <View style={styles.container}>
                    <View style={styles.titre}>
                       <Text>MENU:</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Culture')}  style={styles.button}>
                      <Text>Identifier Ravageur</Text>
                    </TouchableOpacity >
                    <TouchableOpacity    style={styles.button}>
                      <Text>Methodes de Lutte</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                       <Text>Connaitre les insectes Utiles</Text>
                    </TouchableOpacity>
              </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      paddingHorizontal: 10,
      backgroundColor:'#fff',
    },
    titre:{
        flex:1,
        margin: 10,
        justifyContent: 'center',
        width: Dimensions.get('window').width-70,
        alignItems:'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#B5E560',
        
    },
    button:{
        flex:2,
        margin: 10,
        paddingHorizontal:10,
        width: Dimensions.get('window').width-50,
        fontSize: 20,
        fontWeight: 'bold', 
        backgroundColor: '#2EA073',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#B5E560',
        justifyContent: 'center',
        alignItems:'center'
    }
  });

export default DebutSearch