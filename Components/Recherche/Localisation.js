import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image
} from "react-native";

class Localisation extends Component {

   // onPress={() => this.props.navigation.push('Culture')
   _goToSetectType=(locale)=>{
       idCulture=this.props.navigation.state.params.idCulture
       nomCulture=this.props.navigation.state.params.nomCulture
        this.props.navigation.push('DegatType',{id: idCulture, nomCulture:nomCulture, localisation: locale} )
   }
    render() {
        return (
              <View style={styles.container}>
                    <View style={styles.titre}>
                       <Text>Localisation le l'attaque sur {this.props.navigation.state.params.nomCulture}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this._goToSetectType("FRUITS")}  style={styles.button}>
                      <Text>Fruits</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => this._goToSetectType("FLEURS")}  style={styles.button}>
                      <Text>Fleurs</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => this._goToSetectType("FEUILLES")}  style={styles.button}>
                       <Text>Feuilles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._goToSetectType("TIGES")}  style={styles.button}>
                       <Text>Tiges</Text>
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

export default Localisation
